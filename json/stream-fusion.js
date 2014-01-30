[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e classes,\n with some useful operations on monads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "The Functor Monad and MonadPlus classes with some useful operations on monads",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#t:Functor",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Functor"
      },
      "index": {
        "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "Functor",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#t:Monad",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class defines the basic operations over a \u003cem\u003emonad\u003c/em\u003e,\na concept from a branch of mathematics known as \u003cem\u003ecategory theory\u003c/em\u003e.\nFrom the perspective of a Haskell programmer, however, it is best to\nthink of a monad as an \u003cem\u003eabstract datatype\u003c/em\u003e of actions.\nHaskell's \u003ccode\u003edo\u003c/code\u003e expressions provide a convenient syntax for writing\nmonadic expressions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e return a \u003e\u003e= k  ==  k a\n m \u003e\u003e= return  ==  m\n m \u003e\u003e= (\\x -\u003e k x \u003e\u003e= h)  ==  (m \u003e\u003e= k) \u003e\u003e= h\n\u003c/pre\u003e\u003cp\u003eInstances of both \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should additionally satisfy the law:\n\u003c/p\u003e\u003cpre\u003e fmap f xs  ==  xs \u003e\u003e= return . f\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\ndefined in the \u003ca\u003ePrelude\u003c/a\u003e satisfy these laws.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monad"
      },
      "index": {
        "description": "The Monad class defines the basic operations over monad concept from branch of mathematics known as category theory From the perspective of Haskell programmer however it is best to think of monad as an abstract datatype of actions Haskell do expressions provide convenient syntax for writing monadic expressions Minimal complete definition and return Instances of Monad should satisfy the following laws return return Instances of both Monad and Functor should additionally satisfy the law fmap xs xs return The instances of Monad for lists Maybe and IO defined in the Prelude satisfy these laws",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "Monad",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#t:MonadPlus",
      "description": {
        "fct-descr": "\u003cp\u003eMonads that also support choice and failure.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Stream.html#MonadPlus",
        "fct-type": "class",
        "title": "MonadPlus"
      },
      "index": {
        "description": "Monads that also support choice and failure",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "MonadPlus",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Monad Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:-60--61--60-",
      "description": {
        "fct-descr": "\u003cp\u003eRight-to-left Kleisli composition of monads. '(\u003e=\u003e)', with the arguments flipped\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(b -\u003e m c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
        "fct-source": "src/Control-Monad-Stream.html#%3C%3D%3C",
        "fct-type": "function",
        "title": "(\u003c=\u003c)"
      },
      "index": {
        "description": "Right-to-left Kleisli composition of monads with the arguments flipped",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "(\u003c=\u003c) \u003c=\u003c",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:-61--60--60-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e, but with the arguments interchanged.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-Monad-Stream.html#%3D%3C%3C",
        "fct-type": "function",
        "title": "(=\u003c\u003c)"
      },
      "index": {
        "description": "Same as but with the arguments interchanged",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "(=\u003c\u003c) =\u003c\u003c",
        "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003em b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:-62--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-to-right Kleisli composition of monads.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
        "fct-source": "src/Control-Monad-Stream.html#%3E%3D%3E",
        "fct-type": "function",
        "title": "(\u003e=\u003e)"
      },
      "index": {
        "description": "Left-to-right Kleisli composition of monads",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "(\u003e=\u003e) \u003e=\u003e",
        "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:-62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSequentially compose two actions, discarding any value produced\n by the first, like sequencing operators (such as the semicolon)\n in imperative languages.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "m a -\u003e m b -\u003e m b",
        "fct-type": "method",
        "title": "(\u003e\u003e)"
      },
      "index": {
        "description": "Sequentially compose two actions discarding any value produced by the first like sequencing operators such as the semicolon in imperative languages",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "(\u003e\u003e) \u003e\u003e",
        "normalized": "a b-\u003ea c-\u003ea c",
        "package": "stream-fusion",
        "partial": "",
        "signature": "m a-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:-62--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eSequentially compose two actions, passing any value produced\n by the first as an argument to the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-type": "method",
        "title": "(\u003e\u003e=)"
      },
      "index": {
        "description": "Sequentially compose two actions passing any value produced by the first as an argument to the second",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "(\u003e\u003e=) \u003e\u003e=",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "stream-fusion",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:ap",
      "description": {
        "fct-descr": "\u003cp\u003eIn many situations, the \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e operations can be replaced by uses of\n\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, which promotes function application. \n\u003c/p\u003e\u003cpre\u003e       return f `ap` x1 `ap` ... `ap` xn\n\u003c/pre\u003e\u003cp\u003eis equivalent to \n\u003c/p\u003e\u003cpre\u003e       liftMn f x1 x2 ... xn\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-Monad-Stream.html#ap",
        "fct-type": "function",
        "title": "ap"
      },
      "index": {
        "description": "In many situations the liftM operations can be replaced by uses of ap which promotes function application return ap x1 ap ap xn is equivalent to liftMn x1 x2 xn",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "ap",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "stream-fusion",
        "partial": "",
        "signature": "m(a-\u003eb)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:fail",
      "description": {
        "fct-descr": "\u003cp\u003eFail with a message.  This operation is not part of the\n mathematical definition of a monad, but is invoked on pattern-match\n failure in a \u003ccode\u003edo\u003c/code\u003e expression.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "String -\u003e m a",
        "fct-type": "method",
        "title": "fail"
      },
      "index": {
        "description": "Fail with message This operation is not part of the mathematical definition of monad but is invoked on pattern-match failure in do expression",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "fail",
        "normalized": "String-\u003ea b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:filterM",
      "description": {
        "fct-descr": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
        "fct-source": "src/Control-Monad-Stream.html#filterM",
        "fct-type": "function",
        "title": "filterM"
      },
      "index": {
        "description": "This generalizes the list-based filter function",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "filterM",
        "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:fmap",
      "description": {
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "method",
        "title": "fmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "fmap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e function is analogous to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, except that its result is\nencapsulated in a monad. Note that \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e works from left-to-right over\nthe list arguments. This could be an issue where '(\u003e\u003e)' and the `folded\nfunction' are not commutative.\n\u003c/p\u003e\u003cpre\u003e       foldM f a1 [x1, x2, ..., xm ]\n\u003c/pre\u003e\u003cp\u003e==  \n\u003c/p\u003e\u003cpre\u003e       do\n         a2 \u003c- f a1 x1\n         a3 \u003c- f a2 x2\n         ...\n         f am xm\n\u003c/pre\u003e\u003cp\u003eIf right-to-left evaluation is required, the input list should be reversed.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m a",
        "fct-source": "src/Control-Monad-Stream.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "The foldM function is analogous to foldl except that its result is encapsulated in monad Note that foldM works from left-to-right over the list arguments This could be an issue where and the folded function are not commutative foldM a1 x1 x2 xm do a2 a1 x1 a3 a2 x2 am xm If right-to-left evaluation is required the input list should be reversed",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "foldM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:foldM_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#foldM_",
        "fct-type": "function",
        "title": "foldM_"
      },
      "index": {
        "description": "Like foldM but discards the result",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "foldM_",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:forM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e (a -\u003e m b) -\u003e m [b]",
        "fct-source": "src/Control-Monad-Stream.html#forM",
        "fct-type": "function",
        "title": "forM"
      },
      "index": {
        "description": "forM is mapM with its arguments flipped",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "forM",
        "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb[c]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003em b)-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:forM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e (a -\u003e m b) -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#forM_",
        "fct-type": "function",
        "title": "forM_"
      },
      "index": {
        "description": "forM is mapM with its arguments flipped",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "forM_",
        "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003em b)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:forever",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eforever\u003c/a\u003e\u003c/code\u003e act\u003c/code\u003e repeats the action infinitely.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#forever",
        "fct-type": "function",
        "title": "forever"
      },
      "index": {
        "description": "forever act repeats the action infinitely",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "forever",
        "normalized": "a b-\u003ea()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:guard",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#guard",
        "fct-type": "function",
        "title": "guard"
      },
      "index": {
        "description": "guard is return if is True and mzero if is False",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "guard",
        "normalized": "Bool-\u003ea()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e function is the conventional monad join operator. It is used to\n remove one level of monadic structure, projecting its bound argument into the\n outer level.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "m (m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Stream.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "The join function is the conventional monad join operator It is used to remove one level of monadic structure projecting its bound argument into the outer level",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "join",
        "normalized": "a(a b)-\u003ea b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "m(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:liftM",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function to a monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a1 -\u003e r) -\u003e m a1 -\u003e m r",
        "fct-source": "src/Control-Monad-Stream.html#liftM",
        "fct-type": "function",
        "title": "liftM"
      },
      "index": {
        "description": "Promote function to monad",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "liftM",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003er)-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:liftM2",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right.  For example,\n\u003c/p\u003e\u003cpre\u003e    liftM2 (+) [0,1] [0,2] = [0,2,1,3]\n    liftM2 (+) (Just 1) Nothing = Nothing\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a1 -\u003e a2 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m r",
        "fct-source": "src/Control-Monad-Stream.html#liftM2",
        "fct-type": "function",
        "title": "liftM2"
      },
      "index": {
        "description": "Promote function to monad scanning the monadic arguments from left to right For example liftM2 liftM2 Just Nothing Nothing",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "liftM2",
        "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003er)-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:liftM3",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
        "fct-source": "src/Control-Monad-Stream.html#liftM3",
        "fct-type": "function",
        "title": "liftM3"
      },
      "index": {
        "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "liftM3",
        "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:liftM4",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m r",
        "fct-source": "src/Control-Monad-Stream.html#liftM4",
        "fct-type": "function",
        "title": "liftM4"
      },
      "index": {
        "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "liftM4",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:liftM5",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m a5 -\u003e m r",
        "fct-source": "src/Control-Monad-Stream.html#liftM5",
        "fct-type": "function",
        "title": "liftM5"
      },
      "index": {
        "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "liftM5",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:mapAndUnzipM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAndUnzipM\u003c/a\u003e\u003c/code\u003e function maps its first argument over a list, returning\n the result as a pair of lists. This function is mainly used with complicated\n data structures or a state-transforming monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e m (b, c)) -\u003e [a] -\u003e m ([b], [c])",
        "fct-source": "src/Control-Monad-Stream.html#mapAndUnzipM",
        "fct-type": "function",
        "title": "mapAndUnzipM"
      },
      "index": {
        "description": "The mapAndUnzipM function maps its first argument over list returning the result as pair of lists This function is mainly used with complicated data structures or state-transforming monad",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "mapAndUnzipM",
        "normalized": "(a-\u003eb(c,d))-\u003e[a]-\u003eb([c],[d])",
        "package": "stream-fusion",
        "partial": "And Unzip",
        "signature": "(a-\u003em(b,c))-\u003e[a]-\u003em([b],[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
        "fct-source": "src/Control-Monad-Stream.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "mapM is equivalent to sequence map",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence_\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "mapM is equivalent to sequence map",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "mapM_",
        "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e[a]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:mplus",
      "description": {
        "fct-descr": "\u003cp\u003ean associative operation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "m a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Stream.html#mplus",
        "fct-type": "method",
        "title": "mplus"
      },
      "index": {
        "description": "an associative operation",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "mplus",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "m a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:msum",
      "description": {
        "fct-descr": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[m a] -\u003e m a",
        "fct-source": "src/Control-Monad-Stream.html#msum",
        "fct-type": "function",
        "title": "msum"
      },
      "index": {
        "description": "This generalizes the list-based concat function",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "msum",
        "normalized": "[a b]-\u003ea b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[m a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:mzero",
      "description": {
        "fct-descr": "\u003cp\u003ethe identity of \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e.  It should also satisfy the equations\n\u003c/p\u003e\u003cpre\u003e mzero \u003e\u003e= f  =  mzero\n v \u003e\u003e mzero   =  mzero\n\u003c/pre\u003e\u003cp\u003e(but the instance for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e defined in \u003ca\u003eControl.Monad.Error\u003c/a\u003e\n does not satisfy the second one).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "m a",
        "fct-source": "src/Control-Monad-Stream.html#mzero",
        "fct-type": "method",
        "title": "mzero"
      },
      "index": {
        "description": "the identity of mplus It should also satisfy the equations mzero mzero mzero mzero but the instance for IO defined in Control.Monad.Error does not satisfy the second one",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "mzero",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:replicateM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n act\u003c/code\u003e performs the action \u003ccode\u003en\u003c/code\u003e times,\n gathering the results.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e m a -\u003e m [a]",
        "fct-source": "src/Control-Monad-Stream.html#replicateM",
        "fct-type": "function",
        "title": "replicateM"
      },
      "index": {
        "description": "replicateM act performs the action times gathering the results",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "replicateM",
        "normalized": "Int-\u003ea b-\u003ea[b]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Int-\u003em a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:replicateM_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e m a -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#replicateM_",
        "fct-type": "function",
        "title": "replicateM_"
      },
      "index": {
        "description": "Like replicateM but discards the result",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "replicateM_",
        "normalized": "Int-\u003ea b-\u003ea()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Int-\u003em a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:return",
      "description": {
        "fct-descr": "\u003cp\u003eInject a value into the monadic type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e m a",
        "fct-type": "method",
        "title": "return"
      },
      "index": {
        "description": "Inject value into the monadic type",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "return",
        "normalized": "a-\u003eb a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[m a] -\u003e m [a]",
        "fct-source": "src/Control-Monad-Stream.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "Evaluate each action in the sequence from left to right and collect the results",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "sequence",
        "normalized": "[a b]-\u003ea[b]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[m a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:sequence_",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and ignore the results.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[m a] -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#sequence_",
        "fct-type": "function",
        "title": "sequence_"
      },
      "index": {
        "description": "Evaluate each action in the sequence from left to right and ignore the results",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "sequence_",
        "normalized": "[a b]-\u003ea()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[m a]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:unless",
      "description": {
        "fct-descr": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#unless",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "The reverse of when",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "unless",
        "normalized": "Bool-\u003ea()-\u003ea()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#when",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "when",
        "normalized": "Bool-\u003ea()-\u003ea()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:zipWithM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e to arbitrary monads.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
        "fct-source": "src/Control-Monad-Stream.html#zipWithM",
        "fct-type": "function",
        "title": "zipWithM"
      },
      "index": {
        "description": "The zipWithM function generalizes zipWith to arbitrary monads",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "zipWithM",
        "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Control-Monad-Stream.html#v:zipWithM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWithM_\u003c/a\u003e\u003c/code\u003e is the extension of \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e which ignores the final result.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m ()",
        "fct-source": "src/Control-Monad-Stream.html#zipWithM_",
        "fct-type": "function",
        "title": "zipWithM_"
      },
      "index": {
        "description": "zipWithM is the extension of zipWithM which ignores the final result",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "zipWithM_",
        "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec()",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reimplementation of the standard Haskell list library to take advantage of\n stream fusion, and new GHC optimisations. The fusion mechanism is\n based on stream fusion for sequences. Described in: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e    \u003cem\u003eStream Fusion: From Lists to Streams to Nothing at All\u003c/em\u003e, by\n      Duncan Coutts, Roman Leshchinskiy and Don Stwwart, ICFP 2007.\n      \u003ca\u003ehttp://www.cse.unsw.edu.au/~dons/papers/CLS07.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e    \u003cem\u003eRewriting Haskell Strings\u003c/em\u003e, by Duncan Coutts, Don Stewart and\n      Roman Leshchinskiy, Practical Aspects of Declarative Languages\n      8th International Symposium, PADL 2007, 2007.\n      \u003ca\u003ehttp://www.cse.unsw.edu.au/~dons/papers/CSL06.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee the source for the complete story:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.cse.unsw.edu.au/~dons/code/streams/list/Data/Stream.hs\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis library is a drop in replacement for \u003ca\u003eData.List\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "module",
        "fct-source": "src/Data-List-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "reimplementation of the standard Haskell list library to take advantage of stream fusion and new GHC optimisations The fusion mechanism is based on stream fusion for sequences Described in Stream Fusion From Lists to Streams to Nothing at All by Duncan Coutts Roman Leshchinskiy and Don Stwwart ICFP http www.cse.unsw.edu.au dons papers CLS07.html Rewriting Haskell Strings by Duncan Coutts Don Stewart and Roman Leshchinskiy Practical Aspects of Declarative Languages th International Symposium PADL http www.cse.unsw.edu.au dons papers CSL06.html See the source for the complete story http www.cse.unsw.edu.au dons code streams list Data Stream.hs This library is drop in replacement for Data.List",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:-33--33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. List index (subscript) operator, starting from 0.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericIndex\u003c/a\u003e\u003c/code\u003e,\n which takes an index of any integral type.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e Int -\u003e a",
        "fct-source": "src/Data-List-Stream.html#%21%21",
        "fct-type": "function",
        "title": "(!!)"
      },
      "index": {
        "description": "fusion List index subscript operator starting from It is an instance of the more general genericIndex which takes an index of any integral type",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "(!!) !!",
        "normalized": "[a]-\u003eInt-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:-43--43-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Append two lists, i.e.,\n\u003c/p\u003e\u003cpre\u003e [x1, ..., xm] ++ [y1, ..., yn] == [x1, ..., xm, y1, ..., yn]\n [x1, ..., xm] ++ [y1, ...] == [x1, ..., xm, y1, ...]\n\u003c/pre\u003e\u003cp\u003eIf the first list is not finite, the result is the first list.\n The spine of the first list argument must be copied.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#%2B%2B",
        "fct-type": "function",
        "title": "(++)"
      },
      "index": {
        "description": "fusion Append two lists i.e x1 xm y1 yn x1 xm y1 yn x1 xm y1 x1 xm y1 If the first list is not finite the result is the first list The spine of the first list argument must be copied",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "(++) ++",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e function is list difference ((non-associative).\n In the result of \u003ccode\u003exs\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eys\u003c/code\u003e, the first occurrence of each element of\n \u003ccode\u003eys\u003c/code\u003e in turn (if any) has been removed from \u003ccode\u003exs\u003c/code\u003e.  Thus\n\u003c/p\u003e\u003cpre\u003e (xs ++ ys) \\\\ xs == ys.\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer\n to supply their own equality test.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "The function is list difference non-associative In the result of xs ys the first occurrence of each element of ys in turn if any has been removed from xs Thus xs ys xs ys It is special case of deleteFirstsBy which allows the programmer to supply their own equality test",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "(\\\\) \\\\",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if all elements\n of the list satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "Applied to predicate and list all determines if all elements of the list satisfy the predicate",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "all",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e returns the conjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[Bool] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "fusion and returns the conjunction of Boolean list For the result to be True the list must be finite False however results from False value at finite index of finite or infinite list",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "and",
        "normalized": "[Bool]-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[Bool]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Applied to a predicate and a list, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if any element\n of the list satisfies the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "fusion Applied to predicate and list any determines if any element of the list satisfies the predicate",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "any",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n \u003cem\u003edo not satisfy\u003c/em\u003e \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e break (\u003e 3) [1,2,3,4,1,2,3,4] == ([1,2,3],[4,1,2,3,4])\n break (\u003c 9) [1,2,3] == ([],[1,2,3])\n break (\u003e 9) [1,2,3] == ([1,2,3],[])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Data-List-Stream.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "break applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that do not satisfy and second element is the remainder of the list break break break break is equivalent to span not",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Concatenate a list of lists.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "fusion Concatenate list of lists",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "concat",
        "normalized": "[[a]]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Map a function over a list and concatenate the results.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
        "fct-source": "src/Data-List-Stream.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "fusion Map function over list and concatenate the results",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "concatMap",
        "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
        "package": "stream-fusion",
        "partial": "Map",
        "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:cycle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite list into a circular one, or equivalently,\n the infinite repetition of the original list.  It is the identity\n on infinite lists.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#cycle",
        "fct-type": "function",
        "title": "cycle"
      },
      "index": {
        "description": "fusion cycle ties finite list into circular one or equivalently the infinite repetition of the original list It is the identity on infinite lists",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "cycle",
        "normalized": "[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e removes the first occurrence of \u003ccode\u003ex\u003c/code\u003e from its list argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e delete 'a' \"banana\" == \"bnana\"\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "delete removes the first occurrence of from its list argument For example delete banana bnana It is special case of deleteBy which allows the programmer to supply their own equality test",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "delete",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:deleteBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e function behaves like \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, but takes a\n user-supplied equality predicate.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#deleteBy",
        "fct-type": "function",
        "title": "deleteBy"
      },
      "index": {
        "description": "The deleteBy function behaves like delete but takes user-supplied equality predicate",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "deleteBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:deleteFirstsBy",
      "description": {
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#deleteFirstsBy",
        "fct-type": "function",
        "title": "deleteFirstsBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "deleteFirstsBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "Firsts By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e\n after the first \u003ccode\u003en\u003c/code\u003e elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e drop 6 \"Hello World!\" == \"World!\"\n drop 3 [1,2,3,4,5] == [4,5]\n drop 3 [1,2] == []\n drop 3 [] == []\n drop (-1) [1,2] == [1,2]\n drop 0 [1,2] == [1,2]\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "fusion drop xs returns the suffix of xs after the first elements or if length xs drop Hello World World drop drop drop drop drop It is an instance of the more general genericDrop in which may be of any integral type",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "drop",
        "normalized": "Int-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e dropWhile (\u003c 3) [1,2,3,4,5,1,2,3] == [3,4,5,1,2,3]\n dropWhile (\u003c 9) [1,2,3] == []\n dropWhile (\u003c 0) [1,2,3] == [1,2,3]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "fusion dropWhile xs returns the suffix remaining after takeWhile xs dropWhile dropWhile dropWhile",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the list membership predicate, usually written\n in infix form, e.g., \u003ccode\u003ex \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "fusion elem is the list membership predicate usually written in infix form e.g elem xs",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "elem",
        "normalized": "a-\u003e[a]-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:elemIndex",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first element\n in the given list which is equal (by \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) to the query element,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e elemIndex x xs = listToMaybe [ n | (n,a) \u003c- zip [0..] xs, a == x ]\n elemIndex x xs = findIndex (x==) xs\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e [a] -\u003e Maybe Int",
        "fct-source": "src/Data-List-Stream.html#elemIndex",
        "fct-type": "function",
        "title": "elemIndex"
      },
      "index": {
        "description": "The elemIndex function returns the index of the first element in the given list which is equal by to the query element or Nothing if there is no such element Properties elemIndex xs listToMaybe zip xs elemIndex xs findIndex xs",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "elemIndex",
        "normalized": "a-\u003e[a]-\u003eMaybe Int",
        "package": "stream-fusion",
        "partial": "Index",
        "signature": "a-\u003e[a]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:elemIndices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by\n returning the indices of all elements equal to the query element, in\n ascending order.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e length (filter (==a) xs) = length (elemIndices a xs)\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e [a] -\u003e [Int]",
        "fct-source": "src/Data-List-Stream.html#elemIndices",
        "fct-type": "function",
        "title": "elemIndices"
      },
      "index": {
        "description": "fusion The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order Properties length filter xs length elemIndices xs",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "elemIndices",
        "normalized": "a-\u003e[a]-\u003e[Int]",
        "package": "stream-fusion",
        "partial": "Indices",
        "signature": "a-\u003e[a]-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:errorEmptyList",
      "description": {
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Data-List-Stream.html#errorEmptyList",
        "fct-type": "function",
        "title": "errorEmptyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "errorEmptyList",
        "normalized": "String-\u003ea",
        "package": "stream-fusion",
        "partial": "Empty List",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a list, returns the list of\n those elements that satisfy the predicate; i.e.,\n\u003c/p\u003e\u003cpre\u003e filter p xs = [ x | x \u003c- xs, p x]\n\u003c/pre\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e filter p (filter q s) = filter (\\x -\u003e q x && p x) s\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "fusion filter applied to predicate and list returns the list of those elements that satisfy the predicate i.e filter xs xs Properties filter filter filter",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a list and returns the\n first element in the list matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n there is no such element.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe a",
        "fct-source": "src/Data-List-Stream.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "fusion The find function takes predicate and list and returns the first element in the list matching the predicate or Nothing if there is no such element",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "find",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:findIndex",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a list and returns\n the index of the first element in the list satisfying the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e findIndex p xs = listToMaybe [ n | (n,x) \u003c- zip [0..] xs, p x ]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe Int",
        "fct-source": "src/Data-List-Stream.html#findIndex",
        "fct-type": "function",
        "title": "findIndex"
      },
      "index": {
        "description": "The findIndex function takes predicate and list and returns the index of the first element in the list satisfying the predicate or Nothing if there is no such element Properties findIndex xs listToMaybe zip xs",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "findIndex",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int",
        "package": "stream-fusion",
        "partial": "Index",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:findIndices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by\n returning the indices of all elements satisfying the predicate, in\n ascending order.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e length (filter p xs) = length (findIndices p xs)\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [Int]",
        "fct-source": "src/Data-List-Stream.html#findIndices",
        "fct-type": "function",
        "title": "findIndices"
      },
      "index": {
        "description": "fusion The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order Properties length filter xs length findIndices xs",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "findIndices",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[Int]",
        "package": "stream-fusion",
        "partial": "Indices",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a list, reduces the list\n using the binary operator, from left to right:\n\u003c/p\u003e\u003cpre\u003e foldl f z [x1, x2, ..., xn] == (...((z `f` x1) `f` x2) `f`...) `f` xn\n\u003c/pre\u003e\u003cp\u003eThe list must be finite.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "fusion foldl applied to binary operator starting value typically the left-identity of the operator and list reduces the list using the binary operator from left to right foldl x1 x2 xn x1 x2 xn The list must be finite",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "fusion strict version of foldl",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:foldl1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#foldl1",
        "fct-type": "function",
        "title": "foldl1"
      },
      "index": {
        "description": "fusion foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty lists",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "foldl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:foldl1-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#foldl1%27",
        "fct-type": "function",
        "title": "foldl1'"
      },
      "index": {
        "description": "fusion strict version of foldl1",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "foldl1'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the right-identity of the operator), and a list, reduces the list\n using the binary operator, from right to left:\n\u003c/p\u003e\u003cpre\u003e foldr f z [x1, x2, ..., xn] == x1 `f` (x2 `f` ... (xn `f` z)...)\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b",
        "fct-source": "src/Data-List-Stream.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "fusion foldr applied to binary operator starting value typically the right-identity of the operator and list reduces the list using the binary operator from right to left foldr x1 x2 xn x1 x2 xn",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:foldr1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#foldr1",
        "fct-type": "function",
        "title": "foldr1"
      },
      "index": {
        "description": "fusion foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty lists",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "foldr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:genericDrop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of elements to drop.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "i -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#genericDrop",
        "fct-type": "function",
        "title": "genericDrop"
      },
      "index": {
        "description": "fusion The genericDrop function is an overloaded version of drop which accepts any Integral value as the number of elements to drop",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "genericDrop",
        "normalized": "a-\u003e[b]-\u003e[b]",
        "package": "stream-fusion",
        "partial": "Drop",
        "signature": "i-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:genericIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003egenericIndex\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the index.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[b] -\u003e a -\u003e b",
        "fct-source": "src/Data-List-Stream.html#genericIndex",
        "fct-type": "function",
        "title": "genericIndex"
      },
      "index": {
        "description": "fusion The genericIndex function is an overloaded version of which accepts any Integral value as the index",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "genericIndex",
        "normalized": "[a]-\u003eb-\u003ea",
        "package": "stream-fusion",
        "partial": "Index",
        "signature": "[b]-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:genericLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.  In\n particular, instead of returning an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, it returns any type which is\n an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.  It is, however, less efficient than \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[b] -\u003e i",
        "fct-source": "src/Data-List-Stream.html#genericLength",
        "fct-type": "function",
        "title": "genericLength"
      },
      "index": {
        "description": "The genericLength function is an overloaded version of length In particular instead of returning an Int it returns any type which is an instance of Num It is however less efficient than length",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "genericLength",
        "normalized": "[a]-\u003eb",
        "package": "stream-fusion",
        "partial": "Length",
        "signature": "[b]-\u003ei"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:genericReplicate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e,\n which accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of repetitions to make.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "i -\u003e a -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#genericReplicate",
        "fct-type": "function",
        "title": "genericReplicate"
      },
      "index": {
        "description": "fusion The genericReplicate function is an overloaded version of replicate which accepts any Integral value as the number of repetitions to make",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "genericReplicate",
        "normalized": "a-\u003eb-\u003e[b]",
        "package": "stream-fusion",
        "partial": "Replicate",
        "signature": "i-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:genericSplitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e function is an overloaded\n version of \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e, which accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the\n position at which to split.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "i -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Data-List-Stream.html#genericSplitAt",
        "fct-type": "function",
        "title": "genericSplitAt"
      },
      "index": {
        "description": "fusion The genericSplitAt function is an overloaded version of splitAt which accepts any Integral value as the position at which to split",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "genericSplitAt",
        "normalized": "a-\u003e[b]-\u003e([b],[b])",
        "package": "stream-fusion",
        "partial": "Split At",
        "signature": "i-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:genericTake",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of elements to take.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "i -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#genericTake",
        "fct-type": "function",
        "title": "genericTake"
      },
      "index": {
        "description": "fusion The genericTake function is an overloaded version of take which accepts any Integral value as the number of elements to take",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "genericTake",
        "normalized": "a-\u003e[b]-\u003e[b]",
        "package": "stream-fusion",
        "partial": "Take",
        "signature": "i-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a list and returns a list of lists such\n that the concatenation of the result is equal to the argument.  Moreover,\n each sublist in the result contains only equal elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Stream.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "The group function takes list and returns list of lists such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "group",
        "normalized": "[a]-\u003e[[a]]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Stream.html#groupBy",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "The groupBy function is the non-overloaded version of group",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "groupBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Extract the first element of a list, which must be\n non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "fusion Extract the first element of list which must be non-empty",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "head",
        "normalized": "[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Return all the elements of a list except the last one.\n The list must be finite and non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "fusion Return all the elements of list except the last one The list must be finite and non-empty",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "init",
        "normalized": "[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:inits",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e function returns all initial segments of the argument,\n shortest first.  For example,\n\u003c/p\u003e\u003cpre\u003e inits \"abc\" == [\"\",\"a\",\"ab\",\"abc\"]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Stream.html#inits",
        "fct-type": "function",
        "title": "inits"
      },
      "index": {
        "description": "The inits function returns all initial segments of the argument shortest first For example inits abc ab abc",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "inits",
        "normalized": "[a]-\u003e[[a]]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e function takes an element and a list and inserts the\n element into the list at the last position where it is still less\n than or equal to the next element.  In particular, if the list\n is sorted before the call, the result will also be sorted.\n It is a special case of \u003ccode\u003e\u003ca\u003einsertBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own comparison function.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "fusion The insert function takes an element and list and inserts the element into the list at the last position where it is still less than or equal to the next element In particular if the list is sorted before the call the result will also be sorted It is special case of insertBy which allows the programmer to supply their own comparison function",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "insert",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:insertBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The non-overloaded version of \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#insertBy",
        "fct-type": "function",
        "title": "insertBy"
      },
      "index": {
        "description": "fusion The non-overloaded version of insert",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "insertBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:intercalate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs xss\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e xs xss))\u003c/code\u003e.\n It inserts the list \u003ccode\u003exs\u003c/code\u003e in between the lists in \u003ccode\u003exss\u003c/code\u003e and concatenates the\n result.\n\u003c/p\u003e\u003cpre\u003e intercalate = concat . intersperse\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [[a]] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#intercalate",
        "fct-type": "function",
        "title": "intercalate"
      },
      "index": {
        "description": "fusion intercalate xs xss is equivalent to concat intersperse xs xss It inserts the list xs in between the lists in xss and concatenates the result intercalate concat intersperse",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "intercalate",
        "normalized": "[a]-\u003e[[a]]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:intersect",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e function takes the list intersection of two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e [1,2,3,4] `intersect` [2,4,6,8] == [2,4]\n\u003c/pre\u003e\u003cp\u003eIf the first list contains duplicates, so will the result.\n It is a special case of \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#intersect",
        "fct-type": "function",
        "title": "intersect"
      },
      "index": {
        "description": "The intersect function takes the list intersection of two lists For example intersect If the first list contains duplicates so will the result It is special case of intersectBy which allows the programmer to supply their own equality test",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "intersect",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:intersectBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#intersectBy",
        "fct-type": "function",
        "title": "intersectBy"
      },
      "index": {
        "description": "The intersectBy function is the non-overloaded version of intersect",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "intersectBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:intersperse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes an element and a list and\n `intersperses' that element between the elements of the list.\n For example,\n\u003c/p\u003e\u003cpre\u003e intersperse ',' \"abcde\" == \"a,b,c,d,e\"\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "fusion The intersperse function takes an element and list and intersperses that element between the elements of the list For example intersperse abcde",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "intersperse",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:isInfixOf",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisInfixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is contained, wholly and intact,\n anywhere within the second.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e isInfixOf \"Haskell\" \"I really like Haskell.\" -\u003e True\n isInfixOf \"Ial\" \"I really like Haskell.\" -\u003e False\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#isInfixOf",
        "fct-type": "function",
        "title": "isInfixOf"
      },
      "index": {
        "description": "The isInfixOf function takes two lists and returns True iff the first list is contained wholly and intact anywhere within the second Example isInfixOf Haskell really like Haskell True isInfixOf Ial really like Haskell False",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "isInfixOf",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "stream-fusion",
        "partial": "Infix Of",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:isPrefixOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and\n returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first list is a prefix of the second.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#isPrefixOf",
        "fct-type": "function",
        "title": "isPrefixOf"
      },
      "index": {
        "description": "fusion The isPrefixOf function takes two lists and returns True iff the first list is prefix of the second",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "isPrefixOf",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "stream-fusion",
        "partial": "Prefix Of",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:isSuffixOf",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is a suffix of the second.\n Both lists must be finite.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#isSuffixOf",
        "fct-type": "function",
        "title": "isSuffixOf"
      },
      "index": {
        "description": "The isSuffixOf function takes two lists and returns True iff the first list is suffix of the second Both lists must be finite",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "isSuffixOf",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "stream-fusion",
        "partial": "Suffix Of",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:iterate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef x\u003c/code\u003e returns an infinite list of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "fusion iterate returns an infinite list of repeated applications of to iterate",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "iterate",
        "normalized": "(a-\u003ea)-\u003ea-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Extract the last element of a list, which must be finite\n and non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "fusion Extract the last element of list which must be finite and non-empty",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "last",
        "normalized": "[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a finite list as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e,\n the result type of which may be any kind of number.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e Int",
        "fct-source": "src/Data-List-Stream.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "fusion length returns the length of finite list as an Int It is an instance of the more general genericLength the result type of which may be any kind of number",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "length",
        "normalized": "[a]-\u003eInt",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(O)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of strings\n at newline characters. The resulting strings do not contain\n newlines.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Data-List-Stream.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "fusion lines breaks string up into list of strings at newline characters The resulting strings do not contain newlines",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "lines",
        "normalized": "String-\u003e[String]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekey assocs\u003c/code\u003e looks up a key in an association list.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e [(a, b)] -\u003e Maybe b",
        "fct-source": "src/Data-List-Stream.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "fusion lookup key assocs looks up key in an association list",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "lookup",
        "normalized": "a-\u003e[(a,b)]-\u003eMaybe b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003e[(a,b)]-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the list obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element\n of \u003ccode\u003exs\u003c/code\u003e, i.e.,\n\u003c/p\u003e\u003cpre\u003e map f [x1, x2, ..., xn] == [f x1, f x2, ..., f xn]\n map f [x1, x2, ...] == [f x1, f x2, ...]\n\u003c/pre\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e map f . map g         = map (f . g)\n map f (repeat x)      = repeat (f x)\n map f (replicate n x) = replicate n (f x)\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
        "fct-source": "src/Data-List-Stream.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "fusion map xs is the list obtained by applying to each element of xs i.e map x1 x2 xn x1 x2 xn map x1 x2 x1 x2 Properties map map map map repeat repeat map replicate replicate",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:mapAccumL",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a list, passing\n an accumulating parameter from left to right, and returning a final\n value of this accumulator together with the new list.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e [x] -\u003e (acc, [y])",
        "fct-source": "src/Data-List-Stream.html#mapAccumL",
        "fct-type": "function",
        "title": "mapAccumL"
      },
      "index": {
        "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of list passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "mapAccumL",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003e[b]-\u003e(a,[c])",
        "package": "stream-fusion",
        "partial": "Accum",
        "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003e[x]-\u003e(acc,[y])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:mapAccumR",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a list, passing\n an accumulating parameter from right to left, and returning a final\n value of this accumulator together with the new list.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e [x] -\u003e (acc, [y])",
        "fct-source": "src/Data-List-Stream.html#mapAccumR",
        "fct-type": "function",
        "title": "mapAccumR"
      },
      "index": {
        "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of list passing an accumulating parameter from right to left and returning final value of this accumulator together with the new list",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "mapAccumR",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003e[b]-\u003e(a,[c])",
        "package": "stream-fusion",
        "partial": "Accum",
        "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003e[x]-\u003e(acc,[y])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "fusion maximum returns the maximum value from list which must be non-empty finite and of an ordered type It is special case of maximumBy which allows the programmer to supply their own comparison function",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "maximum",
        "normalized": "[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:maximumBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the greatest element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#maximumBy",
        "fct-type": "function",
        "title": "maximumBy"
      },
      "index": {
        "description": "fusion The maximumBy function takes comparison function and list and returns the greatest element of the list by the comparison function The list must be finite and non-empty",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "maximumBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003eminimumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "fusion minimum returns the minimum value from list which must be non-empty finite and of an ordered type It is special case of minimumBy which allows the programmer to supply their own comparison function",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "minimum",
        "normalized": "[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:minimumBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003eminimumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the least element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#minimumBy",
        "fct-type": "function",
        "title": "minimumBy"
      },
      "index": {
        "description": "fusion The minimumBy function takes comparison function and list and returns the least element of the list by the comparison function The list must be finite and non-empty",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "minimumBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the negation of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "fusion notElem is the negation of elem",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "notElem",
        "normalized": "a-\u003e[a]-\u003eBool",
        "package": "stream-fusion",
        "partial": "Elem",
        "signature": "a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:nub",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e function removes duplicate elements from a list.\n In particular, it keeps only the first occurrence of each element.\n (The name \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e means `essence'.)\n It is a special case of \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#nub",
        "fct-type": "function",
        "title": "nub"
      },
      "index": {
        "description": "The nub function removes duplicate elements from list In particular it keeps only the first occurrence of each element The name nub means essence It is special case of nubBy which allows the programmer to supply their own equality test",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "nub",
        "normalized": "[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:nubBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e function behaves just like \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e, except it uses a\n user-supplied equality predicate instead of the overloaded \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#nubBy",
        "fct-type": "function",
        "title": "nubBy"
      },
      "index": {
        "description": "The nubBy function behaves just like nub except it uses user-supplied equality predicate instead of the overloaded function",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "nubBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Test whether a list is empty.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "fusion Test whether list is empty",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "null",
        "normalized": "[a]-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e returns the disjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[Bool] -\u003e Bool",
        "fct-source": "src/Data-List-Stream.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "fusion or returns the disjunction of Boolean list For the result to be False the list must be finite True however results from True value at finite index of finite or infinite list",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "or",
        "normalized": "[Bool]-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[Bool]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a list and returns\n the pair of lists of elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p xs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Data-List-Stream.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "The partition function takes predicate list and returns the pair of lists of elements which do and do not satisfy the predicate respectively i.e partition xs filter xs filter not xs",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:product",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e function computes the product of a finite list of numbers.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "fusion The product function computes the product of finite list of numbers",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "product",
        "normalized": "[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e is an infinite list, with \u003ccode\u003ex\u003c/code\u003e the value of every element.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "fusion repeat is an infinite list with the value of every element",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "repeat",
        "normalized": "a-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a list of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e the value of\n every element.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e a -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "fusion replicate is list of length with the value of every element It is an instance of the more general genericReplicate in which may be of any integral type",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Int-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n \u003ccode\u003exs\u003c/code\u003e must be finite. Will fuse as a consumer only.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "fusion reverse xs returns the elements of xs in reverse order xs must be finite Will fuse as consumer only",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "reverse",
        "normalized": "[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:scanl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z x\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#scanl",
        "fct-type": "function",
        "title": "scanl"
      },
      "index": {
        "description": "fusion scanl is similar to foldl but returns list of successive reduced values from the left scanl x1 x2 x1 x1 x2 Properties last scanl xs foldl",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "scanl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:scanl1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#scanl1",
        "fct-type": "function",
        "title": "scanl1"
      },
      "index": {
        "description": "fusion scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "scanl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:scanr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.\n Properties:\n\u003c/p\u003e\u003cpre\u003e head (scanr f z xs) == foldr f z xs\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
        "fct-source": "src/Data-List-Stream.html#scanr",
        "fct-type": "function",
        "title": "scanr"
      },
      "index": {
        "description": "scanr is the right-to-left dual of scanl Properties head scanr xs foldr xs",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "scanr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:scanr1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#scanr1",
        "fct-type": "function",
        "title": "scanr1"
      },
      "index": {
        "description": "scanr1 is variant of scanr that has no starting value argument",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "scanr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e function implements a stable sorting algorithm.\n It is a special case of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own comparison function.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e not (null x) ==\u003e (head . sort) x = minimum x\n not (null x) ==\u003e (last . sort) x = maximum x\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "The sort function implements stable sorting algorithm It is special case of sortBy which allows the programmer to supply their own comparison function Properties not null head sort minimum not null last sort maximum",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "sort",
        "normalized": "[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#sortBy",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "The sortBy function is the non-overloaded version of sort",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "sortBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e span (\u003c 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])\n span (\u003c 9) [1,2,3] == ([1,2,3],[])\n span (\u003c 0) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Data-List-Stream.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "span applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that satisfy and second element is the remainder of the list span span span span xs is equivalent to takeWhile xs dropWhile xs",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns a tuple where first element is \u003ccode\u003exs\u003c/code\u003e prefix of\n length \u003ccode\u003en\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e splitAt 6 \"Hello World!\" == (\"Hello \",\"World!\")\n splitAt 3 [1,2,3,4,5] == ([1,2,3],[4,5])\n splitAt 1 [1,2,3] == ([1],[2,3])\n splitAt 3 [1,2,3] == ([1,2,3],[])\n splitAt 4 [1,2,3] == ([1,2,3],[])\n splitAt 0 [1,2,3] == ([],[1,2,3])\n splitAt (-1) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003eIt is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e is an instance of the more general \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Data-List-Stream.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "splitAt xs returns tuple where first element is xs prefix of length and second element is the remainder of the list splitAt Hello World Hello World splitAt splitAt splitAt splitAt splitAt splitAt It is equivalent to take xs drop xs splitAt is an instance of the more general genericSplitAt in which may be of any integral type",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "splitAt",
        "normalized": "Int-\u003e[a]-\u003e([a],[a])",
        "package": "stream-fusion",
        "partial": "At",
        "signature": "Int-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e function computes the sum of a finite list of numbers.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-List-Stream.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "fusion The sum function computes the sum of finite list of numbers",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "sum",
        "normalized": "[a]-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Extract the elements after the head of a list, which\n must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "fusion Extract the elements after the head of list which must be non-empty",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "tail",
        "normalized": "[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:tails",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e function returns all final segments of the argument,\n longest first.  For example,\n\u003c/p\u003e\u003cpre\u003e tails \"abc\" == [\"abc\", \"bc\", \"c\",\"\"]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Stream.html#tails",
        "fct-type": "function",
        "title": "tails"
      },
      "index": {
        "description": "The tails function returns all final segments of the argument longest first For example tails abc abc bc",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "tails",
        "normalized": "[a]-\u003e[[a]]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a list \u003ccode\u003exs\u003c/code\u003e, returns the prefix of \u003ccode\u003exs\u003c/code\u003e\n of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e take 5 \"Hello World!\" == \"Hello\"\n take 3 [1,2,3,4,5] == [1,2,3]\n take 3 [1,2] == [1,2]\n take 3 [] == []\n take (-1) [1,2] == []\n take 0 [1,2] == []\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "fusion take applied to list xs returns the prefix of xs of length or xs itself if length xs take Hello World Hello take take take take take It is an instance of the more general genericTake in which may be of any integral type",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "take",
        "normalized": "Int-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns the\n longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e takeWhile (\u003c 3) [1,2,3,4,1,2,3,4] == [1,2]\n takeWhile (\u003c 9) [1,2,3] == [1,2,3]\n takeWhile (\u003c 0) [1,2,3] == []\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "fusion takeWhile applied to predicate and list xs returns the longest prefix possibly empty of xs of elements that satisfy takeWhile takeWhile takeWhile",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:transpose",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e transpose [[1,2,3],[4,5,6]] == [[1,4],[2,5],[3,6]]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[[a]] -\u003e [[a]]",
        "fct-source": "src/Data-List-Stream.html#transpose",
        "fct-type": "function",
        "title": "transpose"
      },
      "index": {
        "description": "The transpose function transposes the rows and columns of its argument For example transpose",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "transpose",
        "normalized": "[[a]]-\u003e[[a]]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[[a]]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unfoldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is a `dual' to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e: while \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n reduces a list to a summary value, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a list from\n a seed value.  The function takes the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if it is done producing the list or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which\n case, \u003ccode\u003ea\u003c/code\u003e is a prepended to the list and \u003ccode\u003eb\u003c/code\u003e is used as the next\n element in a recursive call.  For example,\n\u003c/p\u003e\u003cpre\u003e iterate f == unfoldr (\\x -\u003e Just (x, f x))\n\u003c/pre\u003e\u003cp\u003eIn some cases, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e can undo a \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e operation:\n\u003c/p\u003e\u003cpre\u003e unfoldr f' (foldr f z xs) == xs\n\u003c/pre\u003e\u003cp\u003eif the following holds:\n\u003c/p\u003e\u003cpre\u003e f' (f x y) = Just (x,y)\n f' z       = Nothing\n\u003c/pre\u003e\u003cp\u003eA simple use of unfoldr:\n\u003c/p\u003e\u003cpre\u003e unfoldr (\\b -\u003e if b == 0 then Nothing else Just (b, b-1)) 10\n  [10,9,8,7,6,5,4,3,2,1]\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#unfoldr",
        "fct-type": "function",
        "title": "unfoldr"
      },
      "index": {
        "description": "fusion The unfoldr function is dual to foldr while foldr reduces list to summary value unfoldr builds list from seed value The function takes the element and returns Nothing if it is done producing the list or returns Just in which case is prepended to the list and is used as the next element in recursive call For example iterate unfoldr Just In some cases unfoldr can undo foldr operation unfoldr foldr xs xs if the following holds Just Nothing simple use of unfoldr unfoldr if then Nothing else Just b-1",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unfoldr",
        "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e[b]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e function returns the list union of the two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e \"dog\" `union` \"cow\" == \"dogcw\"\n\u003c/pre\u003e\u003cp\u003eDuplicates, and elements of the first list, are removed from the\n the second list, but if the first list contains duplicates, so will\n the result.\n It is a special case of \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The union function returns the list union of the two lists For example dog union cow dogcw Duplicates and elements of the first list are removed from the the second list but if the first list contains duplicates so will the result It is special case of unionBy which allows the programmer to supply their own equality test",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "union",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unionBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-List-Stream.html#unionBy",
        "fct-type": "function",
        "title": "unionBy"
      },
      "index": {
        "description": "The unionBy function is the non-overloaded version of union",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unionBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unlines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n It joins lines, after appending a terminating newline to each.\n\u003c/p\u003e\u003cpre\u003e unlines xs = concatMap (++\"\\n\")\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Data-List-Stream.html#unlines",
        "fct-type": "function",
        "title": "unlines"
      },
      "index": {
        "description": "fusion unlines is an inverse operation to lines It joins lines after appending terminating newline to each unlines xs concatMap",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unlines",
        "normalized": "[String]-\u003eString",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unwords",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e.\n It joins words with separating spaces.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Data-List-Stream.html#unwords",
        "fct-type": "function",
        "title": "unwords"
      },
      "index": {
        "description": "unwords is an inverse operation to words It joins words with separating spaces",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unwords",
        "normalized": "[String]-\u003eString",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unzip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs into a list of first components\n and a list of second components.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[(a, b)] -\u003e ([a], [b])",
        "fct-source": "src/Data-List-Stream.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "unzip transforms list of pairs into list of first components and list of second components",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unzip",
        "normalized": "[(a,b)]-\u003e([a],[b])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[(a,b)]-\u003e([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unzip3",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip3\u003c/a\u003e\u003c/code\u003e function takes a list of triples and returns three\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
        "fct-source": "src/Data-List-Stream.html#unzip3",
        "fct-type": "function",
        "title": "unzip3"
      },
      "index": {
        "description": "The unzip3 function takes list of triples and returns three lists analogous to unzip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unzip3",
        "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[(a,b,c)]-\u003e([a],[b],[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unzip4",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip4\u003c/a\u003e\u003c/code\u003e function takes a list of quadruples and returns four\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[(a, b, c, d)] -\u003e ([a], [b], [c], [d])",
        "fct-source": "src/Data-List-Stream.html#unzip4",
        "fct-type": "function",
        "title": "unzip4"
      },
      "index": {
        "description": "The unzip4 function takes list of quadruples and returns four lists analogous to unzip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unzip4",
        "normalized": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unzip5",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip5\u003c/a\u003e\u003c/code\u003e function takes a list of five-tuples and returns five\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[(a, b, c, d, e)] -\u003e ([a], [b], [c], [d], [e])",
        "fct-source": "src/Data-List-Stream.html#unzip5",
        "fct-type": "function",
        "title": "unzip5"
      },
      "index": {
        "description": "The unzip5 function takes list of five-tuples and returns five lists analogous to unzip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unzip5",
        "normalized": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unzip6",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip6\u003c/a\u003e\u003c/code\u003e function takes a list of six-tuples and returns six\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[(a, b, c, d, e, f)] -\u003e ([a], [b], [c], [d], [e], [f])",
        "fct-source": "src/Data-List-Stream.html#unzip6",
        "fct-type": "function",
        "title": "unzip6"
      },
      "index": {
        "description": "The unzip6 function takes list of six-tuples and returns six lists analogous to unzip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unzip6",
        "normalized": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:unzip7",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip7\u003c/a\u003e\u003c/code\u003e function takes a list of seven-tuples and returns\n seven lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[(a, b, c, d, e, f, g)] -\u003e ([a], [b], [c], [d], [e], [f], [g])",
        "fct-source": "src/Data-List-Stream.html#unzip7",
        "fct-type": "function",
        "title": "unzip7"
      },
      "index": {
        "description": "The unzip7 function takes list of seven-tuples and returns seven lists analogous to unzip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "unzip7",
        "normalized": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:words",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of words, which were delimited\n by white space.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Data-List-Stream.html#words",
        "fct-type": "function",
        "title": "words"
      },
      "index": {
        "description": "words breaks string up into list of words which were delimited by white space",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "words",
        "normalized": "String-\u003e[String]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two lists and returns a list of\n corresponding pairs. If one input list is short, excess elements of\n the longer list are discarded.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e zip a b = zipWith (,) a b\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [b] -\u003e [(a, b)]",
        "fct-source": "src/Data-List-Stream.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "fusion zip takes two lists and returns list of corresponding pairs If one input list is short excess elements of the longer list are discarded Properties zip zipWith",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zip",
        "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zip3",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e takes three lists and returns a list of\n triples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e zip3 a b c = zipWith (,,) a b c\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
        "fct-source": "src/Data-List-Stream.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "fusion zip3 takes three lists and returns list of triples analogous to zip Properties zip3 zipWith",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zip3",
        "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zip4",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e function takes four lists and returns a list of\n quadruples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [(a, b, c, d)]",
        "fct-source": "src/Data-List-Stream.html#zip4",
        "fct-type": "function",
        "title": "zip4"
      },
      "index": {
        "description": "fusion The zip4 function takes four lists and returns list of quadruples analogous to zip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zip4",
        "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zip5",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e function takes five lists and returns a list of\n five-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [(a, b, c, d, e)]",
        "fct-source": "src/Data-List-Stream.html#zip5",
        "fct-type": "function",
        "title": "zip5"
      },
      "index": {
        "description": "The zip5 function takes five lists and returns list of five-tuples analogous to zip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zip5",
        "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zip6",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e function takes six lists and returns a list of six-tuples,\n analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [(a, b, c, d, e, f)]",
        "fct-source": "src/Data-List-Stream.html#zip6",
        "fct-type": "function",
        "title": "zip6"
      },
      "index": {
        "description": "The zip6 function takes six lists and returns list of six-tuples analogous to zip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zip6",
        "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zip7",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e function takes seven lists and returns a list of\n seven-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [(a, b, c, d, e, f, g)]",
        "fct-source": "src/Data-List-Stream.html#zip7",
        "fct-type": "function",
        "title": "zip7"
      },
      "index": {
        "description": "The zip7 function takes seven lists and returns list of seven-tuples analogous to zip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zip7",
        "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the\n function given as the first argument, instead of a tupling function.\n For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two lists to produce the\n list of corresponding sums.\n Properties:\n\u003c/p\u003e\u003cpre\u003e zipWith (,) = zip\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
        "fct-source": "src/Data-List-Stream.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "fusion zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two lists to produce the list of corresponding sums Properties zipWith zip",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zipWith3",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e function takes a function which\n combines three elements, as well as three lists and returns a list of\n their point-wise combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e zipWith3 (,,) = zip3\n\u003c/pre\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
        "fct-source": "src/Data-List-Stream.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "fusion The zipWith3 function takes function which combines three elements as well as three lists and returns list of their point-wise combination analogous to zipWith Properties zipWith3 zip3",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zipWith3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zipWith4",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e function takes a function which combines four\n elements, as well as four lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e]",
        "fct-source": "src/Data-List-Stream.html#zipWith4",
        "fct-type": "function",
        "title": "zipWith4"
      },
      "index": {
        "description": "fusion The zipWith4 function takes function which combines four elements as well as four lists and returns list of their point-wise combination analogous to zipWith",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zipWith4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zipWith5",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e function takes a function which combines five\n elements, as well as five lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f]",
        "fct-source": "src/Data-List-Stream.html#zipWith5",
        "fct-type": "function",
        "title": "zipWith5"
      },
      "index": {
        "description": "The zipWith5 function takes function which combines five elements as well as five lists and returns list of their point-wise combination analogous to zipWith",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zipWith5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zipWith6",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e function takes a function which combines six\n elements, as well as six lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g]",
        "fct-source": "src/Data-List-Stream.html#zipWith6",
        "fct-type": "function",
        "title": "zipWith6"
      },
      "index": {
        "description": "The zipWith6 function takes function which combines six elements as well as six lists and returns list of their point-wise combination analogous to zipWith",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zipWith6",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-List-Stream.html#v:zipWith7",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e function takes a function which combines seven\n elements, as well as seven lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [h]",
        "fct-source": "src/Data-List-Stream.html#zipWith7",
        "fct-type": "function",
        "title": "zipWith7"
      },
      "index": {
        "description": "The zipWith7 function takes function which combines seven elements as well as seven lists and returns list of their point-wise combination analogous to zipWith",
        "hierarchy": "Data List Stream",
        "module": "Data.List.Stream",
        "name": "zipWith7",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with : GHC 6.6\n\u003c/p\u003e\u003cp\u003eStream fusion for sequences. Described in: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e    \u003cem\u003eStream Fusion: From Lists to Streams to Nothing at All\u003c/em\u003e, by\n      Duncan Coutts, Roman Leshchinskiy and Don Stwwart, ICFP 2007.\n      \u003ca\u003ehttp://www.cse.unsw.edu.au/~dons/papers/CLS07.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e    \u003cem\u003eRewriting Haskell Strings\u003c/em\u003e, by Duncan Coutts, Don Stewart and\n      Roman Leshchinskiy, Practical Aspects of Declarative Languages\n      8th International Symposium, PADL 2007, 2007.\n      \u003ca\u003ehttp://www.cse.unsw.edu.au/~dons/papers/CSL06.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee the source for the complete story:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.cse.unsw.edu.au/~dons/code/streams/list/Data/Stream.hs\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "module",
        "fct-source": "src/Data-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "Tested with GHC Stream fusion for sequences Described in Stream Fusion From Lists to Streams to Nothing at All by Duncan Coutts Roman Leshchinskiy and Don Stwwart ICFP http www.cse.unsw.edu.au dons papers CLS07.html Rewriting Haskell Strings by Duncan Coutts Don Stewart and Roman Leshchinskiy Practical Aspects of Declarative Languages th International Symposium PADL http www.cse.unsw.edu.au dons papers CSL06.html See the source for the complete story http www.cse.unsw.edu.au dons code streams list Data Stream.hs",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#t:L",
      "description": {
        "fct-descr": "\u003cp\u003eBoxes for user's state. This is the gateway for user's types into unlifted\n stream states. The L is always safe since it's lifted\u003cem\u003elazy, exposing\u003c/em\u003eseqing\n it does nothing.\n S is unlifted and so is only suitable for users states that we know we can\n be strict in. This requires attention and auditing. \n\u003c/p\u003e",
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "data",
        "fct-source": "src/Data-Stream.html#L",
        "fct-type": "data",
        "title": "L"
      },
      "index": {
        "description": "Boxes for user state This is the gateway for user types into unlifted stream states The is always safe since it lifted lazy exposing seqing it does nothing is unlifted and so is only suitable for users states that we know we can be strict in This requires attention and auditing",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "L",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#t:Step",
      "description": {
        "fct-descr": "\u003cp\u003eA stream step.\n\u003c/p\u003e\u003cp\u003eA step either ends a stream, skips a value, or yields a value\n\u003c/p\u003e",
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "data",
        "fct-source": "src/Data-Stream.html#Step",
        "fct-type": "data",
        "title": "Step"
      },
      "index": {
        "description": "stream step step either ends stream skips value or yields value",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "Step",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eA stream.\n\u003c/p\u003e\u003cp\u003eIt is important that we never construct a bottom stream, because the\n fusion rule is not true for bottom streams.\n\u003c/p\u003e\u003cpre\u003e (replicate 1 True) ++ (tail undefined)\n\u003c/pre\u003e\u003cp\u003eThe suspicion is that under fusion the append will force the bottom.\n\u003c/p\u003e",
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "data",
        "fct-source": "src/Data-Stream.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "stream It is important that we never construct bottom stream because the fusion rule is not true for bottom streams replicate True tail undefined The suspicion is that under fusion the append will force the bottom",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:Done",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Done",
        "fct-source": "src/Data-Stream.html#Step",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "Done",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:L",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "L a",
        "fct-source": "src/Data-Stream.html#L",
        "fct-type": "function",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "L",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:Skip",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Skip !s",
        "fct-source": "src/Data-Stream.html#Step",
        "fct-type": "function",
        "title": "Skip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "Skip",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Skip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:Stream",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream !(s -\u003e Step a s) !s",
        "fct-source": "src/Data-Stream.html#Stream",
        "fct-type": "function",
        "title": "Stream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "Stream",
        "normalized": "Stream(a-\u003eStep b a)a",
        "package": "stream-fusion",
        "partial": "Stream",
        "signature": "Stream(s-\u003eStep a s)s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:Yield",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Yield a !s",
        "fct-source": "src/Data-Stream.html#Step",
        "fct-type": "function",
        "title": "Yield"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "Yield",
        "normalized": "",
        "package": "stream-fusion",
        "partial": "Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:all",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Bool",
        "fct-source": "src/Data-Stream.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "all",
        "normalized": "(a-\u003eBool)-\u003eStream a-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eStream a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:and",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream Bool -\u003e Bool",
        "fct-source": "src/Data-Stream.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "and",
        "normalized": "Stream Bool-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:any",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Bool",
        "fct-source": "src/Data-Stream.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "any",
        "normalized": "(a-\u003eBool)-\u003eStream a-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eStream a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:append",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "append",
        "normalized": "Stream a-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:append1",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-Stream.html#append1",
        "fct-type": "function",
        "title": "append1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "append1",
        "normalized": "Stream a-\u003e[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:bind",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e Stream b) -\u003e Stream a -\u003e Stream b",
        "fct-source": "src/Data-Stream.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "bind",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eStream b)-\u003eStream a-\u003eStream b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e(a-\u003eStream b)-\u003eStream a-\u003eStream b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:concat",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream [a] -\u003e [a]",
        "fct-source": "src/Data-Stream.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "concat",
        "normalized": "Stream[a]-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:concatMap",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Stream b) -\u003e Stream a -\u003e Stream b",
        "fct-source": "src/Data-Stream.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "concatMap",
        "normalized": "(a-\u003eStream b)-\u003eStream a-\u003eStream b",
        "package": "stream-fusion",
        "partial": "Map",
        "signature": "(a-\u003eStream b)-\u003eStream a-\u003eStream b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:cons",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "cons",
        "normalized": "a-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:cycle",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#cycle",
        "fct-type": "function",
        "title": "cycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "cycle",
        "normalized": "Stream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:declare",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Stream b) -\u003e a -\u003e Stream b",
        "fct-source": "src/Data-Stream.html#declare",
        "fct-type": "function",
        "title": "declare"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "declare",
        "normalized": "(a-\u003eStream b)-\u003ea-\u003eStream b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eStream b)-\u003ea-\u003eStream b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:drop",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "drop",
        "normalized": "Int-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Int-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:dropWhile",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:elem",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e Stream a -\u003e Bool",
        "fct-source": "src/Data-Stream.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "elem",
        "normalized": "a-\u003eStream a-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003eStream a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:elemIndex",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e Stream a -\u003e Maybe Int",
        "fct-source": "src/Data-Stream.html#elemIndex",
        "fct-type": "function",
        "title": "elemIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "elemIndex",
        "normalized": "a-\u003eStream a-\u003eMaybe Int",
        "package": "stream-fusion",
        "partial": "Index",
        "signature": "a-\u003eStream a-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:elemIndices",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e Stream a -\u003e Stream Int",
        "fct-source": "src/Data-Stream.html#elemIndices",
        "fct-type": "function",
        "title": "elemIndices"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "elemIndices",
        "normalized": "a-\u003eStream a-\u003eStream Int",
        "package": "stream-fusion",
        "partial": "Indices",
        "signature": "a-\u003eStream a-\u003eStream Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:enumDeltaInteger",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Integer -\u003e Integer -\u003e Stream Integer",
        "fct-source": "src/Data-Stream.html#enumDeltaInteger",
        "fct-type": "function",
        "title": "enumDeltaInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "enumDeltaInteger",
        "normalized": "Integer-\u003eInteger-\u003eStream Integer",
        "package": "stream-fusion",
        "partial": "Delta Integer",
        "signature": "Integer-\u003eInteger-\u003eStream Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:enumFromToChar",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Char -\u003e Char -\u003e Stream Char",
        "fct-source": "src/Data-Stream.html#enumFromToChar",
        "fct-type": "function",
        "title": "enumFromToChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "enumFromToChar",
        "normalized": "Char-\u003eChar-\u003eStream Char",
        "package": "stream-fusion",
        "partial": "From To Char",
        "signature": "Char-\u003eChar-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:enumFromToInt",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e Int -\u003e Stream Int",
        "fct-source": "src/Data-Stream.html#enumFromToInt",
        "fct-type": "function",
        "title": "enumFromToInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "enumFromToInt",
        "normalized": "Int-\u003eInt-\u003eStream Int",
        "package": "stream-fusion",
        "partial": "From To Int",
        "signature": "Int-\u003eInt-\u003eStream Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:filter",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:find",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Maybe a",
        "fct-source": "src/Data-Stream.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "find",
        "normalized": "(a-\u003eBool)-\u003eStream a-\u003eMaybe a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eStream a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:findIndex",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Maybe Int",
        "fct-source": "src/Data-Stream.html#findIndex",
        "fct-type": "function",
        "title": "findIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "findIndex",
        "normalized": "(a-\u003eBool)-\u003eStream a-\u003eMaybe Int",
        "package": "stream-fusion",
        "partial": "Index",
        "signature": "(a-\u003eBool)-\u003eStream a-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:findIndices",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream Int",
        "fct-source": "src/Data-Stream.html#findIndices",
        "fct-type": "function",
        "title": "findIndices"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "findIndices",
        "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream Int",
        "package": "stream-fusion",
        "partial": "Indices",
        "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:foldM",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Stream a -\u003e m b",
        "fct-source": "src/Data-Stream.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "foldM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eStream b-\u003ec a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eStream a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:foldM_",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Stream a -\u003e m ()",
        "fct-source": "src/Data-Stream.html#foldM_",
        "fct-type": "function",
        "title": "foldM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "foldM_",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eStream b-\u003ec()",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eStream a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:foldl",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Stream a -\u003e b",
        "fct-source": "src/Data-Stream.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eStream a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:foldl-39-",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Stream a -\u003e b",
        "fct-source": "src/Data-Stream.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eStream a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:foldl1",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#foldl1",
        "fct-type": "function",
        "title": "foldl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "foldl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eStream a-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eStream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:foldl1-39-",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#foldl1%27",
        "fct-type": "function",
        "title": "foldl1'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "foldl1'",
        "normalized": "(a-\u003ea-\u003ea)-\u003eStream a-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eStream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:foldr",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Stream a -\u003e b",
        "fct-source": "src/Data-Stream.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eStream a-\u003eb",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eStream a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:foldr1",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#foldr1",
        "fct-type": "function",
        "title": "foldr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "foldr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eStream a-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eStream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:genericDrop",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "i -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#genericDrop",
        "fct-type": "function",
        "title": "genericDrop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "genericDrop",
        "normalized": "a-\u003eStream b-\u003eStream b",
        "package": "stream-fusion",
        "partial": "Drop",
        "signature": "i-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:genericIndex",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream b -\u003e a -\u003e b",
        "fct-source": "src/Data-Stream.html#genericIndex",
        "fct-type": "function",
        "title": "genericIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "genericIndex",
        "normalized": "Stream a-\u003eb-\u003ea",
        "package": "stream-fusion",
        "partial": "Index",
        "signature": "Stream b-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:genericLength",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream b -\u003e i",
        "fct-source": "src/Data-Stream.html#genericLength",
        "fct-type": "function",
        "title": "genericLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "genericLength",
        "normalized": "Stream a-\u003eb",
        "package": "stream-fusion",
        "partial": "Length",
        "signature": "Stream b-\u003ei"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:genericSplitAt",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "i -\u003e Stream a -\u003e ([a], [a])",
        "fct-source": "src/Data-Stream.html#genericSplitAt",
        "fct-type": "function",
        "title": "genericSplitAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "genericSplitAt",
        "normalized": "a-\u003eStream b-\u003e([b],[b])",
        "package": "stream-fusion",
        "partial": "Split At",
        "signature": "i-\u003eStream a-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:genericTake",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "i -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#genericTake",
        "fct-type": "function",
        "title": "genericTake"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "genericTake",
        "normalized": "a-\u003eStream b-\u003eStream b",
        "package": "stream-fusion",
        "partial": "Take",
        "signature": "i-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:guard",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Bool -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#guard",
        "fct-type": "function",
        "title": "guard"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "guard",
        "normalized": "Bool-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Bool-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:head",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "head",
        "normalized": "Stream a-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:index",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Stream.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "index",
        "normalized": "Stream a-\u003eInt-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:init",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "init",
        "normalized": "Stream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:insertBy",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#insertBy",
        "fct-type": "function",
        "title": "insertBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "insertBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:intersperse",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "intersperse",
        "normalized": "a-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:isPrefixOf",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Stream a -\u003e Bool",
        "fct-source": "src/Data-Stream.html#isPrefixOf",
        "fct-type": "function",
        "title": "isPrefixOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "isPrefixOf",
        "normalized": "Stream a-\u003eStream a-\u003eBool",
        "package": "stream-fusion",
        "partial": "Prefix Of",
        "signature": "Stream a-\u003eStream a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:iterate",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "iterate",
        "normalized": "(a-\u003ea)-\u003ea-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:last",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "last",
        "normalized": "Stream a-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:length",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Int",
        "fct-source": "src/Data-Stream.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "length",
        "normalized": "Stream a-\u003eInt",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:lookup",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e Stream (a, b) -\u003e Maybe b",
        "fct-source": "src/Data-Stream.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "lookup",
        "normalized": "a-\u003eStream(a,b)-\u003eMaybe b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003eStream(a,b)-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:map",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b) -\u003e Stream a -\u003e Stream b",
        "fct-source": "src/Data-Stream.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eStream a-\u003eStream b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eStream a-\u003eStream b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:mapFilter",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e b) -\u003e Stream a -\u003e Stream b",
        "fct-source": "src/Data-Stream.html#mapFilter",
        "fct-type": "function",
        "title": "mapFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "mapFilter",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003eStream a-\u003eStream b",
        "package": "stream-fusion",
        "partial": "Filter",
        "signature": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003eStream a-\u003eStream b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:maximum",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "maximum",
        "normalized": "Stream a-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:maximumBy",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#maximumBy",
        "fct-type": "function",
        "title": "maximumBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "maximumBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eStream a-\u003ea",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003eStream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:minimum",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "minimum",
        "normalized": "Stream a-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:minimumBy",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#minimumBy",
        "fct-type": "function",
        "title": "minimumBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "minimumBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eStream a-\u003ea",
        "package": "stream-fusion",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003eStream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:null",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Bool",
        "fct-source": "src/Data-Stream.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "null",
        "normalized": "Stream a-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:or",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream Bool -\u003e Bool",
        "fct-source": "src/Data-Stream.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "or",
        "normalized": "Stream Bool-\u003eBool",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:product",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "product",
        "normalized": "Stream a-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:repeat",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "repeat",
        "normalized": "a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:replicate",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Int-\u003ea-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:return",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#return",
        "fct-type": "function",
        "title": "return"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "return",
        "normalized": "a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:scanl",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Stream a -\u003e Stream b",
        "fct-source": "src/Data-Stream.html#scanl",
        "fct-type": "function",
        "title": "scanl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "scanl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eStream a-\u003eStream b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:scanl1",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#scanl1",
        "fct-type": "function",
        "title": "scanl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "scanl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:snoc",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "snoc",
        "normalized": "Stream a-\u003ea-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003ea-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:splitAt",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e Stream a -\u003e ([a], [a])",
        "fct-source": "src/Data-Stream.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "splitAt",
        "normalized": "Int-\u003eStream a-\u003e([a],[a])",
        "package": "stream-fusion",
        "partial": "At",
        "signature": "Int-\u003eStream a-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:stream",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an abstract stream from a list.\n\u003c/p\u003e",
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "[a] -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#stream",
        "fct-type": "function",
        "title": "stream"
      },
      "index": {
        "description": "Construct an abstract stream from list",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "stream",
        "normalized": "[a]-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "[a]-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:strictMaximum",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#strictMaximum",
        "fct-type": "function",
        "title": "strictMaximum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "strictMaximum",
        "normalized": "Stream a-\u003ea",
        "package": "stream-fusion",
        "partial": "Maximum",
        "signature": "Stream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:strictMinimum",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#strictMinimum",
        "fct-type": "function",
        "title": "strictMinimum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "strictMinimum",
        "normalized": "Stream a-\u003ea",
        "package": "stream-fusion",
        "partial": "Minimum",
        "signature": "Stream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:sum",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e a",
        "fct-source": "src/Data-Stream.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "sum",
        "normalized": "Stream a-\u003ea",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:tail",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "tail",
        "normalized": "Stream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:take",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Int -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "take",
        "normalized": "Int-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Int-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:takeWhile",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
        "package": "stream-fusion",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:unfoldr",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e Stream a",
        "fct-source": "src/Data-Stream.html#unfoldr",
        "fct-type": "function",
        "title": "unfoldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "unfoldr",
        "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eStream b",
        "package": "stream-fusion",
        "partial": "",
        "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:unstream",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a stream back into a list.\n\u003c/p\u003e",
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e [a]",
        "fct-source": "src/Data-Stream.html#unstream",
        "fct-type": "function",
        "title": "unstream"
      },
      "index": {
        "description": "Flatten stream back into list",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "unstream",
        "normalized": "Stream a-\u003e[a]",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:unzip",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream (a, b) -\u003e ([a], [b])",
        "fct-source": "src/Data-Stream.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "unzip",
        "normalized": "Stream(a,b)-\u003e([a],[b])",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream(a,b)-\u003e([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:zip",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Stream b -\u003e Stream (a, b)",
        "fct-source": "src/Data-Stream.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "zip",
        "normalized": "Stream a-\u003eStream b-\u003eStream(a,b)",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eStream b-\u003eStream(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:zip3",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Stream b -\u003e Stream c -\u003e Stream (a, b, c)",
        "fct-source": "src/Data-Stream.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "zip3",
        "normalized": "Stream a-\u003eStream b-\u003eStream c-\u003eStream(a,b,c)",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eStream b-\u003eStream c-\u003eStream(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:zip4",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "Stream a -\u003e Stream b -\u003e Stream c -\u003e Stream d -\u003e Stream (a, b, c, d)",
        "fct-source": "src/Data-Stream.html#zip4",
        "fct-type": "function",
        "title": "zip4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "zip4",
        "normalized": "Stream a-\u003eStream b-\u003eStream c-\u003eStream d-\u003eStream(a,b,c,d)",
        "package": "stream-fusion",
        "partial": "",
        "signature": "Stream a-\u003eStream b-\u003eStream c-\u003eStream d-\u003eStream(a,b,c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:zipWith",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Stream a -\u003e Stream b -\u003e Stream c",
        "fct-source": "src/Data-Stream.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eStream a-\u003eStream b-\u003eStream c",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eStream a-\u003eStream b-\u003eStream c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:zipWith3",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Stream a -\u003e Stream b -\u003e Stream c -\u003e Stream d",
        "fct-source": "src/Data-Stream.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "zipWith3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eStream a-\u003eStream b-\u003eStream c-\u003eStream d",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eStream a-\u003eStream b-\u003eStream c-\u003eStream d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-fusion/docs/Data-Stream.html#v:zipWith4",
      "description": {
        "fct-module": "Data.Stream",
        "fct-package": "stream-fusion",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Stream a -\u003e Stream b -\u003e Stream c -\u003e Stream d -\u003e Stream e",
        "fct-source": "src/Data-Stream.html#zipWith4",
        "fct-type": "function",
        "title": "zipWith4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Stream",
        "module": "Data.Stream",
        "name": "zipWith4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eStream a-\u003eStream b-\u003eStream c-\u003eStream d-\u003eStream e",
        "package": "stream-fusion",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eStream a-\u003eStream b-\u003eStream c-\u003eStream d-\u003eStream e"
      }
    }
  }
]