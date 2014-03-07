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
        "word": "haskell2010"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eControl.Monad\u003c/a\u003e module provides the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e classes, together with some useful operations on monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad",
          "name": "Monad",
          "package": "haskell2010",
          "source": "src/Control-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "The Control.Monad module provides the Functor Monad and MonadPlus classes together with some useful operations on monads",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "Monad",
          "package": "haskell2010",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "Functor",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "Functor",
          "package": "haskell2010",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class defines the basic operations over a \u003cem\u003emonad\u003c/em\u003e,\na concept from a branch of mathematics known as \u003cem\u003ecategory theory\u003c/em\u003e.\nFrom the perspective of a Haskell programmer, however, it is best to\nthink of a monad as an \u003cem\u003eabstract datatype\u003c/em\u003e of actions.\nHaskell's \u003ccode\u003edo\u003c/code\u003e expressions provide a convenient syntax for writing\nmonadic expressions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e return a \u003e\u003e= k  ==  k a\n m \u003e\u003e= return  ==  m\n m \u003e\u003e= (\\x -\u003e k x \u003e\u003e= h)  ==  (m \u003e\u003e= k) \u003e\u003e= h\n\u003c/pre\u003e\u003cp\u003eInstances of both \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should additionally satisfy the law:\n\u003c/p\u003e\u003cpre\u003e fmap f xs  ==  xs \u003e\u003e= return . f\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\ndefined in the \u003ca\u003ePrelude\u003c/a\u003e satisfy these laws.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "Monad",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The Monad class defines the basic operations over monad concept from branch of mathematics known as category theory From the perspective of Haskell programmer however it is best to think of monad as an abstract datatype of actions Haskell do expressions provide convenient syntax for writing monadic expressions Minimal complete definition and return Instances of Monad should satisfy the following laws return return Instances of both Monad and Functor should additionally satisfy the law fmap xs xs return The instances of Monad for lists Maybe and IO defined in the Prelude satisfy these laws",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "Monad",
          "package": "haskell2010",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads that also support choice and failure.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "MonadPlus",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Monads that also support choice and failure",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "MonadPlus",
          "package": "haskell2010",
          "partial": "Monad Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#t:MonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-to-left Kleisli composition of monads. \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, with the arguments flipped\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "(\u003c=\u003c)",
          "package": "haskell2010",
          "signature": "(b -\u003e m c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Right-to-left Kleisli composition of monads with the arguments flipped",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "(\u003c=\u003c) \u003c=\u003c",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
          "package": "haskell2010",
          "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:-60--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e, but with the arguments interchanged.\n\u003c/p\u003e",
          "module": "[\"Control.Monad\",\"Prelude\"]",
          "name": "(=\u003c\u003c)",
          "package": "haskell2010",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:-61--60--60-\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-61--60--60-\"]"
        },
        "index": {
          "description": "Same as but with the arguments interchanged",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "haskell2010",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-to-right Kleisli composition of monads.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "(\u003e=\u003e)",
          "package": "haskell2010",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Left-to-right Kleisli composition of monads",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "(\u003e=\u003e) \u003e=\u003e",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "haskell2010",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:-62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, discarding any value produced\n by the first, like sequencing operators (such as the semicolon)\n in imperative languages.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "(\u003e\u003e)",
          "package": "haskell2010",
          "signature": "m a -\u003e m b -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions discarding any value produced by the first like sequencing operators such as the semicolon in imperative languages",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "haskell2010",
          "signature": "m a-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, passing any value produced\n by the first as an argument to the second.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "(\u003e\u003e=)",
          "package": "haskell2010",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions passing any value produced by the first as an argument to the second",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "haskell2010",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn many situations, the \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e operations can be replaced by uses of\n\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, which promotes function application. \n\u003c/p\u003e\u003cpre\u003e       return f `ap` x1 `ap` ... `ap` xn\n\u003c/pre\u003e\u003cp\u003eis equivalent to \n\u003c/p\u003e\u003cpre\u003e       liftMn f x1 x2 ... xn\n\u003c/pre\u003e",
          "module": "Control.Monad",
          "name": "ap",
          "package": "haskell2010",
          "signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "In many situations the liftM operations can be replaced by uses of ap which promotes function application return ap x1 ap ap xn is equivalent to liftMn x1 x2 xn",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "ap",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "haskell2010",
          "signature": "m(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with a message.  This operation is not part of the\n mathematical definition of a monad, but is invoked on pattern-match\n failure in a \u003ccode\u003edo\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "fail",
          "package": "haskell2010",
          "signature": "String -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Fail with message This operation is not part of the mathematical definition of monad but is invoked on pattern-match failure in do expression",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "haskell2010",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "filterM",
          "package": "haskell2010",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based filter function",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "haskell2010",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad",
          "name": "fmap",
          "package": "haskell2010",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "haskell2010",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e function is analogous to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, except that its result is\nencapsulated in a monad. Note that \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e works from left-to-right over\nthe list arguments. This could be an issue where \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and the `folded\nfunction' are not commutative.\n\u003c/p\u003e\u003cpre\u003e       foldM f a1 [x1, x2, ..., xm]\n\u003c/pre\u003e\u003cp\u003e==  \n\u003c/p\u003e\u003cpre\u003e       do\n         a2 \u003c- f a1 x1\n         a3 \u003c- f a2 x2\n         ...\n         f am xm\n\u003c/pre\u003e\u003cp\u003eIf right-to-left evaluation is required, the input list should be reversed.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "foldM",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The foldM function is analogous to foldl except that its result is encapsulated in monad Note that foldM works from left-to-right over the list arguments This could be an issue where and the folded function are not commutative foldM a1 x1 x2 xm do a2 a1 x1 a3 a2 x2 am xm If right-to-left evaluation is required the input list should be reversed",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec a",
          "package": "haskell2010",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "foldM_",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like foldM but discards the result",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "foldM_",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec()",
          "package": "haskell2010",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:foldM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "forM",
          "package": "haskell2010",
          "signature": "[a] -\u003e (a -\u003e m b) -\u003e m [b]",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "forM",
          "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb[c]",
          "package": "haskell2010",
          "signature": "[a]-\u003e(a-\u003em b)-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "forM_",
          "package": "haskell2010",
          "signature": "[a] -\u003e (a -\u003e m b) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "forM_",
          "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb()",
          "package": "haskell2010",
          "signature": "[a]-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eforever\u003c/a\u003e\u003c/code\u003e act\u003c/code\u003e repeats the action infinitely.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "forever",
          "package": "haskell2010",
          "signature": "m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "forever act repeats the action infinitely",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "forever",
          "normalized": "a b-\u003ea c",
          "package": "haskell2010",
          "signature": "m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:forever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "guard",
          "package": "haskell2010",
          "signature": "Bool -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "guard is return if is True and mzero if is False",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "guard",
          "normalized": "Bool-\u003ea()",
          "package": "haskell2010",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e function is the conventional monad join operator. It is used to\n remove one level of monadic structure, projecting its bound argument into the\n outer level.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "join",
          "package": "haskell2010",
          "signature": "m (m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The join function is the conventional monad join operator It is used to remove one level of monadic structure projecting its bound argument into the outer level",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "haskell2010",
          "signature": "m(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "liftM",
          "package": "haskell2010",
          "signature": "(a1 -\u003e r) -\u003e m a1 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "liftM",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "haskell2010",
          "signature": "(a-\u003er)-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:liftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right.  For example,\n\u003c/p\u003e\u003cpre\u003e    liftM2 (+) [0,1] [0,2] = [0,2,1,3]\n    liftM2 (+) (Just 1) Nothing = Nothing\n\u003c/pre\u003e",
          "module": "Control.Monad",
          "name": "liftM2",
          "package": "haskell2010",
          "signature": "(a1 -\u003e a2 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right For example liftM2 liftM2 Just Nothing Nothing",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "liftM2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
          "package": "haskell2010",
          "signature": "(a-\u003ea-\u003er)-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:liftM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "liftM3",
          "package": "haskell2010",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "liftM3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "haskell2010",
          "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:liftM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "liftM4",
          "package": "haskell2010",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "liftM4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "haskell2010",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:liftM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "liftM5",
          "package": "haskell2010",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m a5 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "liftM5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "haskell2010",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:liftM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAndUnzipM\u003c/a\u003e\u003c/code\u003e function maps its first argument over a list, returning\n the result as a pair of lists. This function is mainly used with complicated\n data structures or a state-transforming monad.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "mapAndUnzipM",
          "package": "haskell2010",
          "signature": "(a -\u003e m (b, c)) -\u003e [a] -\u003e m ([b], [c])",
          "type": "function"
        },
        "index": {
          "description": "The mapAndUnzipM function maps its first argument over list returning the result as pair of lists This function is mainly used with complicated data structures or state-transforming monad",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "mapAndUnzipM",
          "normalized": "(a-\u003eb(c,d))-\u003e[a]-\u003eb([c],[d])",
          "package": "haskell2010",
          "partial": "And Unzip",
          "signature": "(a-\u003em(b,c))-\u003e[a]-\u003em([b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:mapAndUnzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Monad\",\"Prelude\"]",
          "name": "mapM",
          "package": "haskell2010",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:mapM\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:mapM\"]"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
          "package": "haskell2010",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence_\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Monad\",\"Prelude\"]",
          "name": "mapM_",
          "package": "haskell2010",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:mapM_\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:mapM_\"]"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
          "package": "haskell2010",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean associative operation\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "mplus",
          "package": "haskell2010",
          "signature": "m a -\u003e m a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "an associative operation",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "mplus",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "haskell2010",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:mplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "msum",
          "package": "haskell2010",
          "signature": "[m a] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based concat function",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "msum",
          "normalized": "[a b]-\u003ea b",
          "package": "haskell2010",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe identity of \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e.  It should also satisfy the equations\n\u003c/p\u003e\u003cpre\u003e mzero \u003e\u003e= f  =  mzero\n v \u003e\u003e mzero   =  mzero\n\u003c/pre\u003e",
          "module": "Control.Monad",
          "name": "mzero",
          "package": "haskell2010",
          "signature": "m a",
          "type": "method"
        },
        "index": {
          "description": "the identity of mplus It should also satisfy the equations mzero mzero mzero mzero",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "mzero",
          "package": "haskell2010",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:mzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n act\u003c/code\u003e performs the action \u003ccode\u003en\u003c/code\u003e times,\n gathering the results.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "replicateM",
          "package": "haskell2010",
          "signature": "Int -\u003e m a -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "replicateM act performs the action times gathering the results",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "replicateM",
          "normalized": "Int-\u003ea b-\u003ea[b]",
          "package": "haskell2010",
          "signature": "Int-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "replicateM_",
          "package": "haskell2010",
          "signature": "Int -\u003e m a -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like replicateM but discards the result",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "replicateM_",
          "normalized": "Int-\u003ea b-\u003ea()",
          "package": "haskell2010",
          "signature": "Int-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:replicateM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a value into the monadic type.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "return",
          "package": "haskell2010",
          "signature": "a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Inject value into the monadic type",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "haskell2010",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
          "module": "[\"Control.Monad\",\"Prelude\"]",
          "name": "sequence",
          "package": "haskell2010",
          "signature": "[m a] -\u003e m [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:sequence\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:sequence\"]"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and collect the results",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "sequence",
          "normalized": "[a b]-\u003ea[b]",
          "package": "haskell2010",
          "signature": "[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and ignore the results.\n\u003c/p\u003e",
          "module": "[\"Control.Monad\",\"Prelude\"]",
          "name": "sequence_",
          "package": "haskell2010",
          "signature": "[m a] -\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:sequence_\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:sequence_\"]"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and ignore the results",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "sequence_",
          "normalized": "[a b]-\u003ea()",
          "package": "haskell2010",
          "signature": "[m a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "unless",
          "package": "haskell2010",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "The reverse of when",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "unless",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "haskell2010",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003evoid\u003c/a\u003e\u003c/code\u003e value\u003c/code\u003e discards or ignores the result of evaluation, such as the return value of an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "void",
          "package": "haskell2010",
          "signature": "f a -\u003e f ()",
          "type": "function"
        },
        "index": {
          "description": "void value discards or ignores the result of evaluation such as the return value of an IO action",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "void",
          "normalized": "a b-\u003ea()",
          "package": "haskell2010",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "when",
          "package": "haskell2010",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "when",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "haskell2010",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e to arbitrary monads.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "zipWithM",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
          "type": "function"
        },
        "index": {
          "description": "The zipWithM function generalizes zipWith to arbitrary monads",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "zipWithM",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
          "package": "haskell2010",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:zipWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWithM_\u003c/a\u003e\u003c/code\u003e is the extension of \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e which ignores the final result.\n\u003c/p\u003e",
          "module": "Control.Monad",
          "name": "zipWithM_",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "zipWithM is the extension of zipWithM which ignores the final result",
          "hierarchy": "Control Monad",
          "module": "Control.Monad",
          "name": "zipWithM_",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec()",
          "package": "haskell2010",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Control-Monad.html#v:zipWithM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array",
          "name": "Array",
          "package": "haskell2010",
          "source": "src/Data-Array.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "Array",
          "package": "haskell2010",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of immutable non-strict (boxed) arrays\n with indices in \u003ccode\u003ei\u003c/code\u003e and elements in \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "Array",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "The type of immutable non-strict boxed arrays with indices in and elements in",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "Array",
          "package": "haskell2010",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value at the given index in an array.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "(!)",
          "package": "haskell2010",
          "signature": "Array i e -\u003e i -\u003e e",
          "type": "function"
        },
        "index": {
          "description": "The value at the given index in an array",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "(!) !",
          "normalized": "Array a b-\u003ea-\u003eb",
          "package": "haskell2010",
          "signature": "Array i e-\u003ei-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an array identical to the first argument except that it has\n been updated by the associations in the right argument.\n For example, if \u003ccode\u003em\u003c/code\u003e is a 1-origin, \u003ccode\u003en\u003c/code\u003e by \u003ccode\u003en\u003c/code\u003e matrix, then\n\u003c/p\u003e\u003cpre\u003e m//[((i,i), 0) | i \u003c- [1..n]]\n\u003c/pre\u003e\u003cp\u003eis the same matrix, except with the diagonal zeroed.\n\u003c/p\u003e\u003cp\u003eRepeated indices in the association list are handled as for \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e:\n the resulting array is undefined (i.e. bottom),\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "(//)",
          "package": "haskell2010",
          "signature": "Array i e -\u003e [(i, e)] -\u003e Array i e",
          "source": "src/Data-Array.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Constructs an array identical to the first argument except that it has been updated by the associations in the right argument For example if is origin by matrix then is the same matrix except with the diagonal zeroed Repeated indices in the association list are handled as for array the resulting array is undefined i.e bottom",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "(//) //",
          "normalized": "Array a b-\u003e[(a,b)]-\u003eArray a b",
          "package": "haskell2010",
          "signature": "Array i e-\u003e[(i,e)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes an array and an association list and accumulates\n pairs from the list into the array with the accumulating function \u003ccode\u003ef\u003c/code\u003e.\n Thus \u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e can be defined using \u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e accumArray f z b = accum f (array b [(i, z) | i \u003c- range b])\n\u003c/pre\u003e",
          "module": "Data.Array",
          "name": "accum",
          "package": "haskell2010",
          "signature": "(e -\u003e a -\u003e e) -\u003e Array i e -\u003e [(i, a)] -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "accum takes an array and an association list and accumulates pairs from the list into the array with the accumulating function Thus accumArray can be defined using accum accumArray accum array range",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "accum",
          "normalized": "(a-\u003eb-\u003ea)-\u003eArray c a-\u003e[(c,b)]-\u003eArray c a",
          "package": "haskell2010",
          "signature": "(e-\u003ea-\u003ee)-\u003eArray i e-\u003e[(i,a)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e function deals with repeated indices in the association\n list using an \u003cem\u003eaccumulating function\u003c/em\u003e which combines the values of\n associations with the same index.\n For example, given a list of values of some index type, \u003ccode\u003ehist\u003c/code\u003e\n produces a histogram of the number of occurrences of each index within\n a specified range:\n\u003c/p\u003e\u003cpre\u003e hist :: (Ix a, Num b) =\u003e (a,a) -\u003e [a] -\u003e Array a b\n hist bnds is = accumArray (+) 0 bnds [(i, 1) | i\u003c-is, inRange bnds i]\n\u003c/pre\u003e\u003cp\u003eIf the accumulating function is strict, then \u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e is strict in\n the values, as well as the indices, in the association list.  Thus,\n unlike ordinary arrays built with \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e, accumulated arrays should\n not in general be recursive.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "accumArray",
          "package": "haskell2010",
          "signature": "(e -\u003e a -\u003e e)-\u003e e-\u003e (i, i)-\u003e [(i, a)]-\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "The accumArray function deals with repeated indices in the association list using an accumulating function which combines the values of associations with the same index For example given list of values of some index type hist produces histogram of the number of occurrences of each index within specified range hist Ix Num Array hist bnds is accumArray bnds is inRange bnds If the accumulating function is strict then accumArray is strict in the values as well as the indices in the association list Thus unlike ordinary arrays built with array accumulated arrays should not in general be recursive",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "accumArray",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c,c)-\u003e[(c,b)]-\u003eArray c a",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "(e-\u003ea-\u003ee)-\u003ee-\u003e(i,i)-\u003e[(i,a)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:accumArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an array with the specified bounds and containing values\n for given indices within these bounds.\n\u003c/p\u003e\u003cp\u003eThe array is undefined (i.e. bottom) if any index in the list is\n out of bounds.  If any\n two associations in the list have the same index, the value at that\n index is undefined (i.e. bottom).\n\u003c/p\u003e\u003cp\u003eBecause the indices must be checked for these errors, \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e is\n strict in the bounds argument and in the indices of the association\n list, but non-strict in the values.  Thus, recurrences such as the\n following are possible:\n\u003c/p\u003e\u003cpre\u003e a = array (1,100) ((1,1) : [(i, i * a!(i-1)) | i \u003c- [2..100]])\n\u003c/pre\u003e\u003cp\u003eNot every index within the bounds of the array need appear in the\n association list, but the values associated with indices that do not\n appear will be undefined (i.e. bottom).\n\u003c/p\u003e\u003cp\u003eIf, in any dimension, the lower bound is greater than the upper bound,\n then the array is legal, but empty.  Indexing an empty array always\n gives an array-bounds error, but \u003ccode\u003e\u003ca\u003ebounds\u003c/a\u003e\u003c/code\u003e still yields the bounds\n with which the array was constructed.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "array",
          "package": "haskell2010",
          "signature": "(i, i)-\u003e [(i, e)]-\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "Construct an array with the specified bounds and containing values for given indices within these bounds The array is undefined i.e bottom if any index in the list is out of bounds If any two associations in the list have the same index the value at that index is undefined i.e bottom Because the indices must be checked for these errors array is strict in the bounds argument and in the indices of the association list but non-strict in the values Thus recurrences such as the following are possible array i-1 Not every index within the bounds of the array need appear in the association list but the values associated with indices that do not appear will be undefined i.e bottom If in any dimension the lower bound is greater than the upper bound then the array is legal but empty Indexing an empty array always gives an array-bounds error but bounds still yields the bounds with which the array was constructed",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "array",
          "normalized": "(a,a)-\u003e[(a,b)]-\u003eArray a b",
          "package": "haskell2010",
          "signature": "(i,i)-\u003e[(i,e)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of associations of an array in index order.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "assocs",
          "package": "haskell2010",
          "signature": "Array i e -\u003e [(i, e)]",
          "type": "function"
        },
        "index": {
          "description": "The list of associations of an array in index order",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "assocs",
          "normalized": "Array a b-\u003e[(a,b)]",
          "package": "haskell2010",
          "signature": "Array i e-\u003e[(i,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds with which an array was constructed.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "bounds",
          "package": "haskell2010",
          "signature": "Array i e -\u003e (i, i)",
          "type": "function"
        },
        "index": {
          "description": "The bounds with which an array was constructed",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "bounds",
          "normalized": "Array a b-\u003e(a,a)",
          "package": "haskell2010",
          "signature": "Array i e-\u003e(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of elements of an array in index order.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "elems",
          "package": "haskell2010",
          "signature": "Array i e -\u003e [e]",
          "type": "function"
        },
        "index": {
          "description": "The list of elements of an array in index order",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "elems",
          "normalized": "Array a b-\u003e[b]",
          "package": "haskell2010",
          "signature": "Array i e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of indices of an array in ascending order.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "indices",
          "package": "haskell2010",
          "signature": "Array i e -\u003e [i]",
          "type": "function"
        },
        "index": {
          "description": "The list of indices of an array in ascending order",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "indices",
          "normalized": "Array a b-\u003e[a]",
          "package": "haskell2010",
          "signature": "Array i e-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eixmap\u003c/a\u003e\u003c/code\u003e allows for transformations on array indices.\n It may be thought of as providing function composition on the right\n with the mapping that the original array embodies.\n\u003c/p\u003e\u003cp\u003eA similar transformation of array values may be achieved using \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e\n from the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e instance of the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "ixmap",
          "package": "haskell2010",
          "signature": "(i, i) -\u003e (i -\u003e j) -\u003e Array j e -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "ixmap allows for transformations on array indices It may be thought of as providing function composition on the right with the mapping that the original array embodies similar transformation of array values may be achieved using fmap from the Array instance of the Functor class",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "ixmap",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003eArray b c-\u003eArray a c",
          "package": "haskell2010",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003eArray j e-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:ixmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an array from a pair of bounds and a list of values in\n index order.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "listArray",
          "package": "haskell2010",
          "signature": "(i, i) -\u003e [e] -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "Construct an array from pair of bounds and list of values in index order",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "listArray",
          "normalized": "(a,a)-\u003e[b]-\u003eArray a b",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "(i,i)-\u003e[e]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Array.html#v:listArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines bitwise operations for signed and unsigned\n integers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bits",
          "name": "Bits",
          "package": "haskell2010",
          "source": "src/Data-Bits.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines bitwise operations for signed and unsigned integers",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "Bits",
          "package": "haskell2010",
          "partial": "Bits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e class defines bitwise operations over integral types.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Bits are numbered from 0 with bit 0 being the least\n  significant bit.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e.&.\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e.|.\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecomplement\u003c/a\u003e\u003c/code\u003e,\n(\u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003e or (\u003ccode\u003e\u003ca\u003eshiftL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshiftR\u003c/a\u003e\u003c/code\u003e)), (\u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e or (\u003ccode\u003e\u003ca\u003erotateL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erotateR\u003c/a\u003e\u003c/code\u003e)),\n\u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisSigned\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etestBit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebit\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003epopCount\u003c/a\u003e\u003c/code\u003e.  The latter three can\nbe implemented using \u003ccode\u003e\u003ca\u003etestBitDefault\u003c/a\u003e\u003c/code\u003e, 'bitDefault, and \u003ccode\u003e\u003ca\u003epopCountDefault\u003c/a\u003e\u003c/code\u003e, if\n\u003ccode\u003ea\u003c/code\u003e is also an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "Bits",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The Bits class defines bitwise operations over integral types Bits are numbered from with bit being the least significant bit Minimal complete definition xor complement shift or shiftL and shiftR rotate or rotateL and rotateR bitSize isSigned testBit bit and popCount The latter three can be implemented using testBitDefault bitDefault and popCountDefault if is also an instance of Num",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "Bits",
          "package": "haskell2010",
          "partial": "Bits",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#t:Bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise \"or\"\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "(.|.)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Bitwise or",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "(.|.) .|.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise \"and\"\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "(.&.)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Bitwise and",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "(.&.) .&.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebit i\u003c/code\u003e is a value with the \u003ccode\u003ei\u003c/code\u003eth bit set and all other bits clear\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "bit",
          "package": "haskell2010",
          "signature": "Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "bit is value with the th bit set and all other bits clear",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "bit",
          "normalized": "Int-\u003ea",
          "package": "haskell2010",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of bits in the type of the argument.  The actual\n        value of the argument is ignored.  The function \u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e is\n        undefined for types that do not have a fixed bitsize, like \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "bitSize",
          "package": "haskell2010",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Return the number of bits in the type of the argument The actual value of the argument is ignored The function bitSize is undefined for types that do not have fixed bitsize like Integer",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "bitSize",
          "normalized": "a-\u003eInt",
          "package": "haskell2010",
          "partial": "Size",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:bitSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex `clearBit` i\u003c/code\u003e is the same as \u003ccode\u003ex .&. complement (bit i)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "clearBit",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "clearBit is the same as complement bit",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "clearBit",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "haskell2010",
          "partial": "Bit",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:clearBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse all the bits in the argument \n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "complement",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Reverse all the bits in the argument",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "complement",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex `complementBit` i\u003c/code\u003e is the same as \u003ccode\u003ex `xor` bit i\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "complementBit",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "complementBit is the same as xor bit",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "complementBit",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "haskell2010",
          "partial": "Bit",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:complementBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is a signed type.  The actual\n        value of the argument is ignored \n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "isSigned",
          "package": "haskell2010",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "Return True if the argument is signed type The actual value of the argument is ignored",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "isSigned",
          "normalized": "a-\u003eBool",
          "package": "haskell2010",
          "partial": "Signed",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:isSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e x i\u003c/code\u003e rotates \u003ccode\u003ex\u003c/code\u003e left by \u003ccode\u003ei\u003c/code\u003e bits if \u003ccode\u003ei\u003c/code\u003e is positive,\n        or right by \u003ccode\u003e-i\u003c/code\u003e bits otherwise.\n\u003c/p\u003e\u003cp\u003eFor unbounded types like \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAn instance can define either this unified \u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erotateL\u003c/a\u003e\u003c/code\u003e and\n        \u003ccode\u003e\u003ca\u003erotateR\u003c/a\u003e\u003c/code\u003e, depending on which is more convenient for the type in\n        question. \n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "rotate",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "rotate rotates left by bits if is positive or right by bits otherwise For unbounded types like Integer rotate is equivalent to shift An instance can define either this unified rotate or rotateL and rotateR depending on which is more convenient for the type in question",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "rotate",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the argument left by the specified number of bits\n        (which must be non-negative).\n\u003c/p\u003e\u003cp\u003eAn instance can define either this and \u003ccode\u003e\u003ca\u003erotateR\u003c/a\u003e\u003c/code\u003e or the unified\n        \u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e, depending on which is more convenient for the type in\n        question. \n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "rotateL",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Rotate the argument left by the specified number of bits which must be non-negative An instance can define either this and rotateR or the unified rotate depending on which is more convenient for the type in question",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "rotateL",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:rotateL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the argument right by the specified number of bits\n        (which must be non-negative).\n\u003c/p\u003e\u003cp\u003eAn instance can define either this and \u003ccode\u003e\u003ca\u003erotateL\u003c/a\u003e\u003c/code\u003e or the unified\n        \u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e, depending on which is more convenient for the type in\n        question. \n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "rotateR",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Rotate the argument right by the specified number of bits which must be non-negative An instance can define either this and rotateL or the unified rotate depending on which is more convenient for the type in question",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "rotateR",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:rotateR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex `setBit` i\u003c/code\u003e is the same as \u003ccode\u003ex .|. bit i\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "setBit",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "setBit is the same as bit",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "setBit",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "haskell2010",
          "partial": "Bit",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:setBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003e x i\u003c/code\u003e shifts \u003ccode\u003ex\u003c/code\u003e left by \u003ccode\u003ei\u003c/code\u003e bits if \u003ccode\u003ei\u003c/code\u003e is positive,\n        or right by \u003ccode\u003e-i\u003c/code\u003e bits otherwise.\n        Right shifts perform sign extension on signed number types;\n        i.e. they fill the top bits with 1 if the \u003ccode\u003ex\u003c/code\u003e is negative\n        and with 0 otherwise.\n\u003c/p\u003e\u003cp\u003eAn instance can define either this unified \u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshiftL\u003c/a\u003e\u003c/code\u003e and\n        \u003ccode\u003e\u003ca\u003eshiftR\u003c/a\u003e\u003c/code\u003e, depending on which is more convenient for the type in\n        question. \n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "shift",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "shift shifts left by bits if is positive or right by bits otherwise Right shifts perform sign extension on signed number types i.e they fill the top bits with if the is negative and with otherwise An instance can define either this unified shift or shiftL and shiftR depending on which is more convenient for the type in question",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "shift",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift the argument left by the specified number of bits\n        (which must be non-negative).\n\u003c/p\u003e\u003cp\u003eAn instance can define either this and \u003ccode\u003e\u003ca\u003eshiftR\u003c/a\u003e\u003c/code\u003e or the unified\n        \u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003e, depending on which is more convenient for the type in\n        question. \n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "shiftL",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Shift the argument left by the specified number of bits which must be non-negative An instance can define either this and shiftR or the unified shift depending on which is more convenient for the type in question",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "shiftL",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:shiftL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift the first argument right by the specified number of bits. The\n        result is undefined for negative shift amounts and shift amounts\n        greater or equal to the \u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eRight shifts perform sign extension on signed number types;\n        i.e. they fill the top bits with 1 if the \u003ccode\u003ex\u003c/code\u003e is negative\n        and with 0 otherwise.\n\u003c/p\u003e\u003cp\u003eAn instance can define either this and \u003ccode\u003e\u003ca\u003eshiftL\u003c/a\u003e\u003c/code\u003e or the unified\n        \u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003e, depending on which is more convenient for the type in\n        question. \n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "shiftR",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Shift the first argument right by the specified number of bits The result is undefined for negative shift amounts and shift amounts greater or equal to the bitSize Right shifts perform sign extension on signed number types i.e they fill the top bits with if the is negative and with otherwise An instance can define either this and shiftL or the unified shift depending on which is more convenient for the type in question",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "shiftR",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:shiftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003en\u003c/code\u003eth bit of the argument is 1\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "testBit",
          "package": "haskell2010",
          "signature": "a -\u003e Int -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "Return True if the th bit of the argument is",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "testBit",
          "normalized": "a-\u003eInt-\u003eBool",
          "package": "haskell2010",
          "partial": "Bit",
          "signature": "a-\u003eInt-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:testBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise \"xor\"\n\u003c/p\u003e",
          "module": "Data.Bits",
          "name": "xor",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Bitwise xor",
          "hierarchy": "Data Bits",
          "module": "Data.Bits",
          "name": "xor",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Bits.html#v:xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Char",
          "name": "Char",
          "package": "haskell2010",
          "source": "src/Data-Char.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "Char",
          "package": "haskell2010",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters (see\n\u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).  This set extends the ISO 8859-1\n(Latin-1) character set (the first 256 characters), which is itself an extension\nof the ASCII character set (the first 128 characters).  A character literal in\nHaskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from the\n\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "Char",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first characters which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use toEnum and fromEnum from the Enum class respectively or equivalently ord and chr",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "Char",
          "package": "haskell2010",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#t:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode General Categories (column 2 of the UnicodeData table)\n in the order they are listed in the Unicode standard.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "GeneralCategory",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Unicode General Categories column of the UnicodeData table in the order they are listed in the Unicode standard",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "GeneralCategory",
          "package": "haskell2010",
          "partial": "General Category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#t:GeneralCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a list of characters.  String constants in Haskell are values\n of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "String",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "String is list of characters String constants in Haskell are values of type String",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "String",
          "package": "haskell2010",
          "partial": "String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#t:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePe: Punctuation, Close\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "ClosePunctuation",
          "package": "haskell2010",
          "signature": "ClosePunctuation",
          "type": "function"
        },
        "index": {
          "description": "Pe Punctuation Close",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "ClosePunctuation",
          "package": "haskell2010",
          "partial": "Close Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:ClosePunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePc: Punctuation, Connector\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "ConnectorPunctuation",
          "package": "haskell2010",
          "signature": "ConnectorPunctuation",
          "type": "function"
        },
        "index": {
          "description": "Pc Punctuation Connector",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "ConnectorPunctuation",
          "package": "haskell2010",
          "partial": "Connector Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:ConnectorPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCc: Other, Control\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "Control",
          "package": "haskell2010",
          "signature": "Control",
          "type": "function"
        },
        "index": {
          "description": "Cc Other Control",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "Control",
          "package": "haskell2010",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSc: Symbol, Currency\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "CurrencySymbol",
          "package": "haskell2010",
          "signature": "CurrencySymbol",
          "type": "function"
        },
        "index": {
          "description": "Sc Symbol Currency",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "CurrencySymbol",
          "package": "haskell2010",
          "partial": "Currency Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:CurrencySymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePd: Punctuation, Dash\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "DashPunctuation",
          "package": "haskell2010",
          "signature": "DashPunctuation",
          "type": "function"
        },
        "index": {
          "description": "Pd Punctuation Dash",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "DashPunctuation",
          "package": "haskell2010",
          "partial": "Dash Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:DashPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNd: Number, Decimal\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "DecimalNumber",
          "package": "haskell2010",
          "signature": "DecimalNumber",
          "type": "function"
        },
        "index": {
          "description": "Nd Number Decimal",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "DecimalNumber",
          "package": "haskell2010",
          "partial": "Decimal Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:DecimalNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMe: Mark, Enclosing\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "EnclosingMark",
          "package": "haskell2010",
          "signature": "EnclosingMark",
          "type": "function"
        },
        "index": {
          "description": "Me Mark Enclosing",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "EnclosingMark",
          "package": "haskell2010",
          "partial": "Enclosing Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:EnclosingMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePf: Punctuation, Final quote\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "FinalQuote",
          "package": "haskell2010",
          "signature": "FinalQuote",
          "type": "function"
        },
        "index": {
          "description": "Pf Punctuation Final quote",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "FinalQuote",
          "package": "haskell2010",
          "partial": "Final Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:FinalQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCf: Other, Format\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "Format",
          "package": "haskell2010",
          "signature": "Format",
          "type": "function"
        },
        "index": {
          "description": "Cf Other Format",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "Format",
          "package": "haskell2010",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePi: Punctuation, Initial quote\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "InitialQuote",
          "package": "haskell2010",
          "signature": "InitialQuote",
          "type": "function"
        },
        "index": {
          "description": "Pi Punctuation Initial quote",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "InitialQuote",
          "package": "haskell2010",
          "partial": "Initial Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:InitialQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNl: Number, Letter\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "LetterNumber",
          "package": "haskell2010",
          "signature": "LetterNumber",
          "type": "function"
        },
        "index": {
          "description": "Nl Number Letter",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "LetterNumber",
          "package": "haskell2010",
          "partial": "Letter Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:LetterNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZl: Separator, Line\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "LineSeparator",
          "package": "haskell2010",
          "signature": "LineSeparator",
          "type": "function"
        },
        "index": {
          "description": "Zl Separator Line",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "LineSeparator",
          "package": "haskell2010",
          "partial": "Line Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:LineSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLl: Letter, Lowercase\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "LowercaseLetter",
          "package": "haskell2010",
          "signature": "LowercaseLetter",
          "type": "function"
        },
        "index": {
          "description": "Ll Letter Lowercase",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "LowercaseLetter",
          "package": "haskell2010",
          "partial": "Lowercase Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:LowercaseLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSm: Symbol, Math\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "MathSymbol",
          "package": "haskell2010",
          "signature": "MathSymbol",
          "type": "function"
        },
        "index": {
          "description": "Sm Symbol Math",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "MathSymbol",
          "package": "haskell2010",
          "partial": "Math Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:MathSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLm: Letter, Modifier\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "ModifierLetter",
          "package": "haskell2010",
          "signature": "ModifierLetter",
          "type": "function"
        },
        "index": {
          "description": "Lm Letter Modifier",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "ModifierLetter",
          "package": "haskell2010",
          "partial": "Modifier Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:ModifierLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSk: Symbol, Modifier\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "ModifierSymbol",
          "package": "haskell2010",
          "signature": "ModifierSymbol",
          "type": "function"
        },
        "index": {
          "description": "Sk Symbol Modifier",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "ModifierSymbol",
          "package": "haskell2010",
          "partial": "Modifier Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:ModifierSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMn: Mark, Non-Spacing\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "NonSpacingMark",
          "package": "haskell2010",
          "signature": "NonSpacingMark",
          "type": "function"
        },
        "index": {
          "description": "Mn Mark Non-Spacing",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "NonSpacingMark",
          "package": "haskell2010",
          "partial": "Non Spacing Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:NonSpacingMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCn: Other, Not Assigned\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "NotAssigned",
          "package": "haskell2010",
          "signature": "NotAssigned",
          "type": "function"
        },
        "index": {
          "description": "Cn Other Not Assigned",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "NotAssigned",
          "package": "haskell2010",
          "partial": "Not Assigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:NotAssigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePs: Punctuation, Open\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "OpenPunctuation",
          "package": "haskell2010",
          "signature": "OpenPunctuation",
          "type": "function"
        },
        "index": {
          "description": "Ps Punctuation Open",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "OpenPunctuation",
          "package": "haskell2010",
          "partial": "Open Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:OpenPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLo: Letter, Other\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "OtherLetter",
          "package": "haskell2010",
          "signature": "OtherLetter",
          "type": "function"
        },
        "index": {
          "description": "Lo Letter Other",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "OtherLetter",
          "package": "haskell2010",
          "partial": "Other Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:OtherLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo: Number, Other\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "OtherNumber",
          "package": "haskell2010",
          "signature": "OtherNumber",
          "type": "function"
        },
        "index": {
          "description": "No Number Other",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "OtherNumber",
          "package": "haskell2010",
          "partial": "Other Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:OtherNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePo: Punctuation, Other\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "OtherPunctuation",
          "package": "haskell2010",
          "signature": "OtherPunctuation",
          "type": "function"
        },
        "index": {
          "description": "Po Punctuation Other",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "OtherPunctuation",
          "package": "haskell2010",
          "partial": "Other Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:OtherPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSo: Symbol, Other\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "OtherSymbol",
          "package": "haskell2010",
          "signature": "OtherSymbol",
          "type": "function"
        },
        "index": {
          "description": "So Symbol Other",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "OtherSymbol",
          "package": "haskell2010",
          "partial": "Other Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:OtherSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZp: Separator, Paragraph\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "ParagraphSeparator",
          "package": "haskell2010",
          "signature": "ParagraphSeparator",
          "type": "function"
        },
        "index": {
          "description": "Zp Separator Paragraph",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "ParagraphSeparator",
          "package": "haskell2010",
          "partial": "Paragraph Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:ParagraphSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCo: Other, Private Use\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "PrivateUse",
          "package": "haskell2010",
          "signature": "PrivateUse",
          "type": "function"
        },
        "index": {
          "description": "Co Other Private Use",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "PrivateUse",
          "package": "haskell2010",
          "partial": "Private Use",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:PrivateUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZs: Separator, Space\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "Space",
          "package": "haskell2010",
          "signature": "Space",
          "type": "function"
        },
        "index": {
          "description": "Zs Separator Space",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "Space",
          "package": "haskell2010",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMc: Mark, Spacing Combining\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "SpacingCombiningMark",
          "package": "haskell2010",
          "signature": "SpacingCombiningMark",
          "type": "function"
        },
        "index": {
          "description": "Mc Mark Spacing Combining",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "SpacingCombiningMark",
          "package": "haskell2010",
          "partial": "Spacing Combining Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:SpacingCombiningMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCs: Other, Surrogate\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "Surrogate",
          "package": "haskell2010",
          "signature": "Surrogate",
          "type": "function"
        },
        "index": {
          "description": "Cs Other Surrogate",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "Surrogate",
          "package": "haskell2010",
          "partial": "Surrogate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:Surrogate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLt: Letter, Titlecase\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "TitlecaseLetter",
          "package": "haskell2010",
          "signature": "TitlecaseLetter",
          "type": "function"
        },
        "index": {
          "description": "Lt Letter Titlecase",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "TitlecaseLetter",
          "package": "haskell2010",
          "partial": "Titlecase Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:TitlecaseLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLu: Letter, Uppercase\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "UppercaseLetter",
          "package": "haskell2010",
          "signature": "UppercaseLetter",
          "type": "function"
        },
        "index": {
          "description": "Lu Letter Uppercase",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "UppercaseLetter",
          "package": "haskell2010",
          "partial": "Uppercase Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:UppercaseLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e method restricted to the type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "chr",
          "package": "haskell2010",
          "signature": "Int -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "The toEnum method restricted to the type Char",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "chr",
          "normalized": "Int-\u003eChar",
          "package": "haskell2010",
          "signature": "Int-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:chr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a single digit \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.  \n This function fails unless its argument satisfies \u003ccode\u003e\u003ca\u003eisHexDigit\u003c/a\u003e\u003c/code\u003e,\n but recognises both upper and lower-case hexadecimal digits\n (i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'9'\u003c/code\u003e, \u003ccode\u003e'a'\u003c/code\u003e..\u003ccode\u003e'f'\u003c/code\u003e, \u003ccode\u003e'A'\u003c/code\u003e..\u003ccode\u003e'F'\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "digitToInt",
          "package": "haskell2010",
          "signature": "Char -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Convert single digit Char to the corresponding Int This function fails unless its argument satisfies isHexDigit but recognises both upper and lower-case hexadecimal digits i.e",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "digitToInt",
          "normalized": "Char-\u003eInt",
          "package": "haskell2010",
          "partial": "To Int",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:digitToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Unicode general category of the character.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "generalCategory",
          "package": "haskell2010",
          "signature": "Char -\u003e GeneralCategory",
          "type": "function"
        },
        "index": {
          "description": "The Unicode general category of the character",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "generalCategory",
          "normalized": "Char-\u003eGeneralCategory",
          "package": "haskell2010",
          "partial": "Category",
          "signature": "Char-\u003eGeneralCategory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:generalCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e in the range \u003ccode\u003e0\u003c/code\u003e..\u003ccode\u003e15\u003c/code\u003e to the corresponding single\n digit \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.  This function fails on other inputs, and generates\n lower-case hexadecimal digits.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "intToDigit",
          "package": "haskell2010",
          "signature": "Int -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert an Int in the range to the corresponding single digit Char This function fails on other inputs and generates lower-case hexadecimal digits",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "intToDigit",
          "normalized": "Int-\u003eChar",
          "package": "haskell2010",
          "partial": "To Digit",
          "signature": "Int-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:intToDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects alphabetic Unicode characters (lower-case, upper-case and\n title-case letters, plus letters of caseless scripts and modifiers letters).\n This function is equivalent to \u003ccode\u003e\u003ca\u003eisLetter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isAlpha",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters This function is equivalent to isLetter",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isAlpha",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Alpha",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects alphabetic or numeric digit Unicode characters.\n\u003c/p\u003e\u003cp\u003eNote that numeric digits outside the ASCII range are selected by this\n function but not by \u003ccode\u003e\u003ca\u003eisDigit\u003c/a\u003e\u003c/code\u003e.  Such digits may be part of identifiers\n but are not used by the printer and reader to represent numbers.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isAlphaNum",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects alphabetic or numeric digit Unicode characters Note that numeric digits outside the ASCII range are selected by this function but not by isDigit Such digits may be part of identifiers but are not used by the printer and reader to represent numbers",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isAlphaNum",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Alpha Num",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the first 128 characters of the Unicode character set,\n corresponding to the ASCII character set.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isAscii",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects the first characters of the Unicode character set corresponding to the ASCII character set",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isAscii",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Ascii",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII lower-case letters,\n i.e. characters satisfying both \u003ccode\u003e\u003ca\u003eisAscii\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisLower\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isAsciiLower",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII lower-case letters i.e characters satisfying both isAscii and isLower",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isAsciiLower",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Ascii Lower",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isAsciiLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII upper-case letters,\n i.e. characters satisfying both \u003ccode\u003e\u003ca\u003eisAscii\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisUpper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isAsciiUpper",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII upper-case letters i.e characters satisfying both isAscii and isUpper",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isAsciiUpper",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Ascii Upper",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isAsciiUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects control characters, which are the non-printing characters of\n the Latin-1 subset of Unicode.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isControl",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects control characters which are the non-printing characters of the Latin-1 subset of Unicode",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isControl",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Control",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII digits, i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'9'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isDigit",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII digits i.e",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isDigit",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII hexadecimal digits,\n i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'9'\u003c/code\u003e, \u003ccode\u003e'a'\u003c/code\u003e..\u003ccode\u003e'f'\u003c/code\u003e, \u003ccode\u003e'A'\u003c/code\u003e..\u003ccode\u003e'F'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isHexDigit",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII hexadecimal digits i.e",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the first 256 characters of the Unicode character set,\n corresponding to the ISO 8859-1 (Latin-1) character set.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isLatin1",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects the first characters of the Unicode character set corresponding to the ISO Latin-1 character set",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isLatin1",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Latin",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isLatin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects alphabetic Unicode characters (lower-case, upper-case and\n title-case letters, plus letters of caseless scripts and modifiers letters).\n This function is equivalent to \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isLetter",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters This function is equivalent to isAlpha",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isLetter",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Letter",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects lower-case alphabetic Unicode characters (letters).\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isLower",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects lower-case alphabetic Unicode characters letters",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isLower",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Lower",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode mark characters, e.g. accents and the like, which\n combine with preceding letters.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isMark",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode mark characters e.g accents and the like which combine with preceding letters",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isMark",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Mark",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode numeric characters, including digits from various\n scripts, Roman numerals, etc.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isNumber",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode numeric characters including digits from various scripts Roman numerals etc",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isNumber",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Number",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII octal digits, i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'7'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isOctDigit",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII octal digits i.e",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isOctDigit",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Oct Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isOctDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects printable Unicode characters\n (letters, numbers, marks, punctuation, symbols and spaces).\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isPrint",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects printable Unicode characters letters numbers marks punctuation symbols and spaces",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isPrint",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Print",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode punctuation characters, including various kinds\n of connectors, brackets and quotes.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isPunctuation",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode punctuation characters including various kinds of connectors brackets and quotes",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isPunctuation",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Punctuation",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode space and separator characters.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isSeparator",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode space and separator characters",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isSeparator",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for any Unicode space character, and the control\n characters \u003ccode\u003e\\t\u003c/code\u003e, \u003ccode\u003e\\n\u003c/code\u003e, \u003ccode\u003e\\r\u003c/code\u003e, \u003ccode\u003e\\f\u003c/code\u003e, \u003ccode\u003e\\v\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isSpace",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns True for any Unicode space character and the control characters",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isSpace",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Space",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode symbol characters, including mathematical and\n currency symbols.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isSymbol",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode symbol characters including mathematical and currency symbols",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isSymbol",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Symbol",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects upper-case or title-case alphabetic Unicode characters (letters).\n Title case is used by a small number of letter ligatures like the\n single-character form of \u003cem\u003eLj\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "isUpper",
          "package": "haskell2010",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects upper-case or title-case alphabetic Unicode characters letters Title case is used by small number of letter ligatures like the single-character form of Lj",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "isUpper",
          "normalized": "Char-\u003eBool",
          "package": "haskell2010",
          "partial": "Upper",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:isUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a string representation of a character, using Haskell\n source-language escape conventions.  For example:\n\u003c/p\u003e\u003cpre\u003e lexLitChar  \"\\\\nHello\"  =  [(\"\\\\n\", \"Hello\")]\n\u003c/pre\u003e",
          "module": "Data.Char",
          "name": "lexLitChar",
          "package": "haskell2010",
          "signature": "ReadS String",
          "type": "function"
        },
        "index": {
          "description": "Read string representation of character using Haskell source-language escape conventions For example lexLitChar nHello Hello",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "lexLitChar",
          "package": "haskell2010",
          "partial": "Lit Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:lexLitChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e method restricted to the type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "ord",
          "package": "haskell2010",
          "signature": "Char -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The fromEnum method restricted to the type Char",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "ord",
          "normalized": "Char-\u003eInt",
          "package": "haskell2010",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a string representation of a character, using Haskell\n source-language escape conventions, and convert it to the character\n that it encodes.  For example:\n\u003c/p\u003e\u003cpre\u003e readLitChar \"\\\\nHello\"  =  [('\\n', \"Hello\")]\n\u003c/pre\u003e",
          "module": "Data.Char",
          "name": "readLitChar",
          "package": "haskell2010",
          "signature": "ReadS Char",
          "type": "function"
        },
        "index": {
          "description": "Read string representation of character using Haskell source-language escape conventions and convert it to the character that it encodes For example readLitChar nHello Hello",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "readLitChar",
          "package": "haskell2010",
          "partial": "Lit Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:readLitChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a character to a string using only printable characters,\n using Haskell source-language escape conventions.  For example:\n\u003c/p\u003e\u003cpre\u003e showLitChar '\\n' s  =  \"\\\\n\" ++ s\n\u003c/pre\u003e",
          "module": "Data.Char",
          "name": "showLitChar",
          "package": "haskell2010",
          "signature": "Char -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Convert character to string using only printable characters using Haskell source-language escape conventions For example showLitChar",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "showLitChar",
          "normalized": "Char-\u003eShowS",
          "package": "haskell2010",
          "partial": "Lit Char",
          "signature": "Char-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:showLitChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a letter to the corresponding lower-case letter, if any.\n Any other character is returned unchanged.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "toLower",
          "package": "haskell2010",
          "signature": "Char -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert letter to the corresponding lower-case letter if any Any other character is returned unchanged",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "toLower",
          "normalized": "Char-\u003eChar",
          "package": "haskell2010",
          "partial": "Lower",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:toLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a letter to the corresponding title-case or upper-case\n letter, if any.  (Title case differs from upper case only for a small\n number of ligature letters.)\n Any other character is returned unchanged.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "toTitle",
          "package": "haskell2010",
          "signature": "Char -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert letter to the corresponding title-case or upper-case letter if any Title case differs from upper case only for small number of ligature letters Any other character is returned unchanged",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "toTitle",
          "normalized": "Char-\u003eChar",
          "package": "haskell2010",
          "partial": "Title",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:toTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a letter to the corresponding upper-case letter, if any.\n Any other character is returned unchanged.\n\u003c/p\u003e",
          "module": "Data.Char",
          "name": "toUpper",
          "package": "haskell2010",
          "signature": "Char -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert letter to the corresponding upper-case letter if any Any other character is returned unchanged",
          "hierarchy": "Data Char",
          "module": "Data.Char",
          "name": "toUpper",
          "normalized": "Char-\u003eChar",
          "package": "haskell2010",
          "partial": "Upper",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Char.html#v:toUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Complex",
          "name": "Complex",
          "package": "haskell2010",
          "source": "src/Data-Complex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "Complex",
          "package": "haskell2010",
          "partial": "Complex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex numbers are an algebraic type.\n\u003c/p\u003e\u003cp\u003eFor a complex number \u003ccode\u003ez\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e is a number with the magnitude of \u003ccode\u003ez\u003c/code\u003e,\n but oriented in the positive real direction, whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e\n has the phase of \u003ccode\u003ez\u003c/code\u003e, but unit magnitude.\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": "Complex",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Complex numbers are an algebraic type For complex number abs is number with the magnitude of but oriented in the positive real direction whereas signum has the phase of but unit magnitude",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "Complex",
          "package": "haskell2010",
          "partial": "Complex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#t:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforms a complex number from its real and imaginary\n rectangular components.\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": ":+",
          "package": "haskell2010",
          "signature": "a :+ !a",
          "type": "function"
        },
        "index": {
          "description": "forms complex number from its real and imaginary rectangular components",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": ":+",
          "package": "haskell2010",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#v::-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecis\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e is a complex value with magnitude \u003ccode\u003e1\u003c/code\u003e\n and phase \u003ccode\u003et\u003c/code\u003e (modulo \u003ccode\u003e2*\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": "cis",
          "package": "haskell2010",
          "signature": "a -\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "cis is complex value with magnitude and phase modulo pi",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "cis",
          "normalized": "a-\u003eComplex a",
          "package": "haskell2010",
          "signature": "a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#v:cis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conjugate of a complex number.\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": "conjugate",
          "package": "haskell2010",
          "signature": "Complex a -\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "The conjugate of complex number",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "conjugate",
          "normalized": "Complex a-\u003eComplex a",
          "package": "haskell2010",
          "signature": "Complex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#v:conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the imaginary part of a complex number.\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": "imagPart",
          "package": "haskell2010",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extracts the imaginary part of complex number",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "imagPart",
          "normalized": "Complex a-\u003ea",
          "package": "haskell2010",
          "partial": "Part",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#v:imagPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nonnegative magnitude of a complex number.\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": "magnitude",
          "package": "haskell2010",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The nonnegative magnitude of complex number",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "magnitude",
          "normalized": "Complex a-\u003ea",
          "package": "haskell2010",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#v:magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a complex number from polar components of magnitude and phase.\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": "mkPolar",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "Form complex number from polar components of magnitude and phase",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "mkPolar",
          "normalized": "a-\u003ea-\u003eComplex a",
          "package": "haskell2010",
          "partial": "Polar",
          "signature": "a-\u003ea-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#v:mkPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phase of a complex number, in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n If the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": "phase",
          "package": "haskell2010",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The phase of complex number in the range pi pi If the magnitude is zero then so is the phase",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "phase",
          "normalized": "Complex a-\u003ea",
          "package": "haskell2010",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epolar\u003c/a\u003e\u003c/code\u003e takes a complex number and\n returns a (magnitude, phase) pair in canonical form:\n the magnitude is nonnegative, and the phase in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e;\n if the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": "polar",
          "package": "haskell2010",
          "signature": "Complex a -\u003e (a, a)",
          "type": "function"
        },
        "index": {
          "description": "The function polar takes complex number and returns magnitude phase pair in canonical form the magnitude is nonnegative and the phase in the range pi pi if the magnitude is zero then so is the phase",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "polar",
          "normalized": "Complex a-\u003e(a,a)",
          "package": "haskell2010",
          "signature": "Complex a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#v:polar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the real part of a complex number.\n\u003c/p\u003e",
          "module": "Data.Complex",
          "name": "realPart",
          "package": "haskell2010",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extracts the real part of complex number",
          "hierarchy": "Data Complex",
          "module": "Data.Complex",
          "name": "realPart",
          "normalized": "Complex a-\u003ea",
          "package": "haskell2010",
          "partial": "Part",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Complex.html#v:realPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Int",
          "name": "Int",
          "package": "haskell2010",
          "source": "src/Data-Int.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Int",
          "module": "Data.Int",
          "name": "Int",
          "package": "haskell2010",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Int.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Int",
          "name": "Int",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
          "hierarchy": "Data Int",
          "module": "Data.Int",
          "name": "Int",
          "package": "haskell2010",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Int.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16-bit signed integer type\n\u003c/p\u003e",
          "module": "Data.Int",
          "name": "Int16",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Data Int",
          "module": "Data.Int",
          "name": "Int16",
          "package": "haskell2010",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Int.html#t:Int16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit signed integer type\n\u003c/p\u003e",
          "module": "Data.Int",
          "name": "Int32",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Data Int",
          "module": "Data.Int",
          "name": "Int32",
          "package": "haskell2010",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Int.html#t:Int32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit signed integer type\n\u003c/p\u003e",
          "module": "Data.Int",
          "name": "Int64",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Data Int",
          "module": "Data.Int",
          "name": "Int64",
          "package": "haskell2010",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Int.html#t:Int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit signed integer type\n\u003c/p\u003e",
          "module": "Data.Int",
          "name": "Int8",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Data Int",
          "module": "Data.Int",
          "name": "Int8",
          "package": "haskell2010",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Int.html#t:Int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ix",
          "name": "Ix",
          "package": "haskell2010",
          "source": "src/Data-Ix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ix",
          "module": "Data.Ix",
          "name": "Ix",
          "package": "haskell2010",
          "partial": "Ix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e class is used to map a contiguous subrange of values in\n a type onto integers.  It is used primarily for array indexing\n (see the array package).\n\u003c/p\u003e\u003cp\u003eThe first argument \u003ccode\u003e(l,u)\u003c/code\u003e of each of these operations is a pair\n specifying the lower and upper bounds of a contiguous subrange of values.\n\u003c/p\u003e\u003cp\u003eAn implementation is entitled to assume the following laws about these\n operations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003einRange\u003c/a\u003e\u003c/code\u003e (l,u) i == \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e i (\u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e (l,u))\u003c/code\u003e \u003ccode\u003e \u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e (l,u) \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e (l,u) i == i\u003c/code\u003e, when \u003ccode\u003e\u003ccode\u003e\u003ca\u003einRange\u003c/a\u003e\u003c/code\u003e (l,u) i\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e (l,u)) (\u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e (l,u))) == [0..\u003ccode\u003e\u003ca\u003erangeSize\u003c/a\u003e\u003c/code\u003e (l,u)-1]\u003c/code\u003e \u003ccode\u003e \u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003erangeSize\u003c/a\u003e\u003c/code\u003e (l,u) == \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e (l,u))\u003c/code\u003e \u003ccode\u003e \u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMinimal complete instance: \u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einRange\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Ix",
          "name": "Ix",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The Ix class is used to map contiguous subrange of values in type onto integers It is used primarily for array indexing see the array package The first argument of each of these operations is pair specifying the lower and upper bounds of contiguous subrange of values An implementation is entitled to assume the following laws about these operations inRange elem range range index when inRange map index range rangeSize rangeSize length range Minimal complete instance range index and inRange",
          "hierarchy": "Data Ix",
          "module": "Data.Ix",
          "name": "Ix",
          "package": "haskell2010",
          "partial": "Ix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ix.html#t:Ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the given subscript lies in the range defined\n the bounding pair.\n\u003c/p\u003e",
          "module": "Data.Ix",
          "name": "inRange",
          "package": "haskell2010",
          "signature": "(a, a) -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "Returns True the given subscript lies in the range defined the bounding pair",
          "hierarchy": "Data Ix",
          "module": "Data.Ix",
          "name": "inRange",
          "normalized": "(a,a)-\u003ea-\u003eBool",
          "package": "haskell2010",
          "partial": "Range",
          "signature": "(a,a)-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ix.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe position of a subscript in the subrange.\n\u003c/p\u003e",
          "module": "Data.Ix",
          "name": "index",
          "package": "haskell2010",
          "signature": "(a, a) -\u003e a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "The position of subscript in the subrange",
          "hierarchy": "Data Ix",
          "module": "Data.Ix",
          "name": "index",
          "normalized": "(a,a)-\u003ea-\u003eInt",
          "package": "haskell2010",
          "signature": "(a,a)-\u003ea-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ix.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of values in the subrange defined by a bounding pair.\n\u003c/p\u003e",
          "module": "Data.Ix",
          "name": "range",
          "package": "haskell2010",
          "signature": "(a, a) -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "The list of values in the subrange defined by bounding pair",
          "hierarchy": "Data Ix",
          "module": "Data.Ix",
          "name": "range",
          "normalized": "(a,a)-\u003e[a]",
          "package": "haskell2010",
          "signature": "(a,a)-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ix.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the subrange defined by a bounding pair.\n\u003c/p\u003e",
          "module": "Data.Ix",
          "name": "rangeSize",
          "package": "haskell2010",
          "signature": "(a, a) -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "The size of the subrange defined by bounding pair",
          "hierarchy": "Data Ix",
          "module": "Data.Ix",
          "name": "rangeSize",
          "normalized": "(a,a)-\u003eInt",
          "package": "haskell2010",
          "partial": "Size",
          "signature": "(a,a)-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ix.html#v:rangeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List",
          "name": "List",
          "package": "haskell2010",
          "source": "src/Data-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "List",
          "package": "haskell2010",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList index (subscript) operator, starting from 0.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericIndex\u003c/a\u003e\u003c/code\u003e,\n which takes an index of any integral type.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "(!!)",
          "package": "haskell2010",
          "signature": "[a] -\u003e Int -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:-33--33-\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-33--33-\"]"
        },
        "index": {
          "description": "List index subscript operator starting from It is an instance of the more general genericIndex which takes an index of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "(!!) !!",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "haskell2010",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two lists, i.e.,\n\u003c/p\u003e\u003cpre\u003e [x1, ..., xm] ++ [y1, ..., yn] == [x1, ..., xm, y1, ..., yn]\n [x1, ..., xm] ++ [y1, ...] == [x1, ..., xm, y1, ...]\n\u003c/pre\u003e\u003cp\u003eIf the first list is not finite, the result is the first list.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "(++)",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:-43--43-\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-43--43-\"]"
        },
        "index": {
          "description": "Append two lists i.e x1 xm y1 yn x1 xm y1 yn x1 xm y1 x1 xm y1 If the first list is not finite the result is the first list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "(++) ++",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e function is list difference (non-associative).\n In the result of \u003ccode\u003exs\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eys\u003c/code\u003e, the first occurrence of each element of\n \u003ccode\u003eys\u003c/code\u003e in turn (if any) has been removed from \u003ccode\u003exs\u003c/code\u003e.  Thus\n\u003c/p\u003e\u003cpre\u003e (xs ++ ys) \\\\ xs == ys.\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer\n to supply their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "(\\\\)",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The function is list difference non-associative In the result of xs ys the first occurrence of each element of ys in turn if any has been removed from xs Thus xs ys xs ys It is special case of deleteFirstsBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "(\\\\) \\\\",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if all elements\n of the list satisfy the predicate. For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value for the predicate applied to an element at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "all",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:all\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:all\"]"
        },
        "index": {
          "description": "Applied to predicate and list all determines if all elements of the list satisfy the predicate For the result to be True the list must be finite False however results from False value for the predicate applied to an element at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "haskell2010",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e returns the conjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "and",
          "package": "haskell2010",
          "signature": "[Bool] -\u003e Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:and\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:and\"]"
        },
        "index": {
          "description": "and returns the conjunction of Boolean list For the result to be True the list must be finite False however results from False value at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "and",
          "normalized": "[Bool]-\u003eBool",
          "package": "haskell2010",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if any element\n of the list satisfies the predicate.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value for the predicate applied to an element at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "any",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:any\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:any\"]"
        },
        "index": {
          "description": "Applied to predicate and list any determines if any element of the list satisfies the predicate For the result to be False the list must be finite True however results from True value for the predicate applied to an element at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "haskell2010",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n \u003cem\u003edo not satisfy\u003c/em\u003e \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e break (\u003e 3) [1,2,3,4,1,2,3,4] == ([1,2,3],[4,1,2,3,4])\n break (\u003c 9) [1,2,3] == ([],[1,2,3])\n break (\u003e 9) [1,2,3] == ([1,2,3],[])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "break",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:break\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:break\"]"
        },
        "index": {
          "description": "break applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that do not satisfy and second element is the remainder of the list break break break break is equivalent to span not",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "haskell2010",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a list of lists.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "concat",
          "package": "haskell2010",
          "signature": "[[a]] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:concat\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:concat\"]"
        },
        "index": {
          "description": "Concatenate list of lists",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "concat",
          "normalized": "[[a]]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a list and concatenate the results.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "concatMap",
          "package": "haskell2010",
          "signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:concatMap\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:concatMap\"]"
        },
        "index": {
          "description": "Map function over list and concatenate the results",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "package": "haskell2010",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite list into a circular one, or equivalently,\n the infinite repetition of the original list.  It is the identity\n on infinite lists.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "cycle",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:cycle\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:cycle\"]"
        },
        "index": {
          "description": "cycle ties finite list into circular one or equivalently the infinite repetition of the original list It is the identity on infinite lists",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "cycle",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e removes the first occurrence of \u003ccode\u003ex\u003c/code\u003e from its list argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e delete 'a' \"banana\" == \"bnana\"\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "delete",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "delete removes the first occurrence of from its list argument For example delete banana bnana It is special case of deleteBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "delete",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e function behaves like \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, but takes a\n user-supplied equality predicate.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "deleteBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The deleteBy function behaves like delete but takes user-supplied equality predicate",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "deleteBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e function takes a predicate and two lists and\n returns the first list with the first occurrence of each element of\n the second list removed.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "deleteFirstsBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The deleteFirstsBy function takes predicate and two lists and returns the first list with the first occurrence of each element of the second list removed",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "deleteFirstsBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "Firsts By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:deleteFirstsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e\n after the first \u003ccode\u003en\u003c/code\u003e elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e drop 6 \"Hello World!\" == \"World!\"\n drop 3 [1,2,3,4,5] == [4,5]\n drop 3 [1,2] == []\n drop 3 [] == []\n drop (-1) [1,2] == [1,2]\n drop 0 [1,2] == [1,2]\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "drop",
          "package": "haskell2010",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:drop\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:drop\"]"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or if length xs drop Hello World World drop drop drop drop drop It is an instance of the more general genericDrop in which may be of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "drop",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e dropWhile (\u003c 3) [1,2,3,4,5,1,2,3] == [3,4,5,1,2,3]\n dropWhile (\u003c 9) [1,2,3] == []\n dropWhile (\u003c 0) [1,2,3] == [1,2,3]\n\u003c/pre\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "dropWhile",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:dropWhile\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:dropWhile\"]"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs dropWhile dropWhile dropWhile",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the list membership predicate, usually written in infix form,\n e.g., \u003ccode\u003ex `elem` xs\u003c/code\u003e.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from an element equal to \u003ccode\u003ex\u003c/code\u003e found at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "elem",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:elem\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:elem\"]"
        },
        "index": {
          "description": "elem is the list membership predicate usually written in infix form e.g elem xs For the result to be False the list must be finite True however results from an element equal to found at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "elem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "haskell2010",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first element\n in the given list which is equal (by \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) to the query element,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "elemIndex",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given list which is equal by to the query element or Nothing if there is no such element",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "elemIndex",
          "normalized": "a-\u003e[a]-\u003eMaybe Int",
          "package": "haskell2010",
          "partial": "Index",
          "signature": "a-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "elemIndices",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "elemIndices",
          "normalized": "a-\u003e[a]-\u003e[Int]",
          "package": "haskell2010",
          "partial": "Indices",
          "signature": "a-\u003e[a]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a list, returns the list of\n those elements that satisfy the predicate; i.e.,\n\u003c/p\u003e\u003cpre\u003e filter p xs = [ x | x \u003c- xs, p x]\n\u003c/pre\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "filter",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:filter\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:filter\"]"
        },
        "index": {
          "description": "filter applied to predicate and list returns the list of those elements that satisfy the predicate i.e filter xs xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a list and returns the\n first element in the list matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n there is no such element.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "find",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and list and returns the first element in the list matching the predicate or Nothing if there is no such element",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "package": "haskell2010",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a list and returns\n the index of the first element in the list satisfying the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "findIndex",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and list and returns the index of the first element in the list satisfying the predicate or Nothing if there is no such element",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int",
          "package": "haskell2010",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "findIndices",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[Int]",
          "package": "haskell2010",
          "partial": "Indices",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a list, reduces the list\n using the binary operator, from left to right:\n\u003c/p\u003e\u003cpre\u003e foldl f z [x1, x2, ..., xn] == (...((z `f` x1) `f` x2) `f`...) `f` xn\n\u003c/pre\u003e\u003cp\u003eThe list must be finite.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "foldl",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldl\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:foldl\"]"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and list reduces the list using the binary operator from left to right foldl x1 x2 xn x1 x2 xn The list must be finite",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "haskell2010",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "foldl'",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "strict version of foldl",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "haskell2010",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "foldl1",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldl1\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:foldl1\"]"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "haskell2010",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict version of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "foldl1'",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "strict version of foldl1",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "haskell2010",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the right-identity of the operator), and a list, reduces the list\n using the binary operator, from right to left:\n\u003c/p\u003e\u003cpre\u003e foldr f z [x1, x2, ..., xn] == x1 `f` (x2 `f` ... (xn `f` z)...)\n\u003c/pre\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "foldr",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldr\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:foldr\"]"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and list reduces the list using the binary operator from right to left foldr x1 x2 xn x1 x2 xn",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "haskell2010",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "foldr1",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldr1\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:foldr1\"]"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "haskell2010",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of elements to drop.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericDrop",
          "package": "haskell2010",
          "signature": "i -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The genericDrop function is an overloaded version of drop which accepts any Integral value as the number of elements to drop",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericDrop",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "haskell2010",
          "partial": "Drop",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:genericDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericIndex\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the index.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericIndex",
          "package": "haskell2010",
          "signature": "[b] -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The genericIndex function is an overloaded version of which accepts any Integral value as the index",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericIndex",
          "normalized": "[a]-\u003eb-\u003ea",
          "package": "haskell2010",
          "partial": "Index",
          "signature": "[b]-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:genericIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.  In\n particular, instead of returning an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, it returns any type which is\n an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.  It is, however, less efficient than \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericLength",
          "package": "haskell2010",
          "signature": "[b] -\u003e i",
          "type": "function"
        },
        "index": {
          "description": "The genericLength function is an overloaded version of length In particular instead of returning an Int it returns any type which is an instance of Num It is however less efficient than length",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericLength",
          "normalized": "[a]-\u003eb",
          "package": "haskell2010",
          "partial": "Length",
          "signature": "[b]-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e,\n which accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of repetitions to make.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericReplicate",
          "package": "haskell2010",
          "signature": "i -\u003e a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The genericReplicate function is an overloaded version of replicate which accepts any Integral value as the number of repetitions to make",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericReplicate",
          "normalized": "a-\u003eb-\u003e[b]",
          "package": "haskell2010",
          "partial": "Replicate",
          "signature": "i-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:genericReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the position at which to split.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericSplitAt",
          "package": "haskell2010",
          "signature": "i -\u003e [b] -\u003e ([b], [b])",
          "type": "function"
        },
        "index": {
          "description": "The genericSplitAt function is an overloaded version of splitAt which accepts any Integral value as the position at which to split",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericSplitAt",
          "normalized": "a-\u003e[b]-\u003e([b],[b])",
          "package": "haskell2010",
          "partial": "Split At",
          "signature": "i-\u003e[b]-\u003e([b],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:genericSplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of elements to take.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericTake",
          "package": "haskell2010",
          "signature": "i -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The genericTake function is an overloaded version of take which accepts any Integral value as the number of elements to take",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericTake",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "haskell2010",
          "partial": "Take",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:genericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a list and returns a list of lists such\n that the concatenation of the result is equal to the argument.  Moreover,\n each sublist in the result contains only equal elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "group",
          "package": "haskell2010",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The group function takes list and returns list of lists such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "group",
          "normalized": "[a]-\u003e[[a]]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "groupBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "haskell2010",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "head",
          "package": "haskell2010",
          "signature": "[a] -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:head\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:head\"]"
        },
        "index": {
          "description": "Extract the first element of list which must be non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "head",
          "normalized": "[a]-\u003ea",
          "package": "haskell2010",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the elements of a list except the last one.\n The list must be non-empty.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "init",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:init\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:init\"]"
        },
        "index": {
          "description": "Return all the elements of list except the last one The list must be non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "init",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e function returns all initial segments of the argument,\n shortest first.  For example,\n\u003c/p\u003e\u003cpre\u003e inits \"abc\" == [\"\",\"a\",\"ab\",\"abc\"]\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e has the following strictness property:\n \u003ccode\u003einits _|_ = [] : _|_\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "inits",
          "package": "haskell2010",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The inits function returns all initial segments of the argument shortest first For example inits abc ab abc Note that inits has the following strictness property inits",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "inits",
          "normalized": "[a]-\u003e[[a]]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e function takes an element and a list and inserts the\n element into the list at the last position where it is still less\n than or equal to the next element.  In particular, if the list\n is sorted before the call, the result will also be sorted.\n It is a special case of \u003ccode\u003e\u003ca\u003einsertBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own comparison function.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "insert",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The insert function takes an element and list and inserts the element into the list at the last position where it is still less than or equal to the next element In particular if the list is sorted before the call the result will also be sorted It is special case of insertBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "insert",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe non-overloaded version of \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "insertBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The non-overloaded version of insert",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs xss\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e xs xss))\u003c/code\u003e.\n It inserts the list \u003ccode\u003exs\u003c/code\u003e in between the lists in \u003ccode\u003exss\u003c/code\u003e and concatenates the\n result.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "intercalate",
          "package": "haskell2010",
          "signature": "[a] -\u003e [[a]] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "intercalate xs xss is equivalent to concat intersperse xs xss It inserts the list xs in between the lists in xss and concatenates the result",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "intercalate",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e function takes the list intersection of two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e [1,2,3,4] `intersect` [2,4,6,8] == [2,4]\n\u003c/pre\u003e\u003cp\u003eIf the first list contains duplicates, so will the result.\n\u003c/p\u003e\u003cpre\u003e [1,2,2,3,4] `intersect` [6,4,4,2] == [2,2,4]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test. If the element is found in both the first\n and the second list, the element from the first list will be used.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "intersect",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The intersect function takes the list intersection of two lists For example intersect If the first list contains duplicates so will the result intersect It is special case of intersectBy which allows the programmer to supply their own equality test If the element is found in both the first and the second list the element from the first list will be used",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "intersect",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "intersectBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The intersectBy function is the non-overloaded version of intersect",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "intersectBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:intersectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes an element and a list and\n `intersperses' that element between the elements of the list.\n For example,\n\u003c/p\u003e\u003cpre\u003e intersperse ',' \"abcde\" == \"a,b,c,d,e\"\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "intersperse",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes an element and list and intersperses that element between the elements of the list For example intersperse abcde",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "intersperse",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisInfixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is contained, wholly and intact,\n anywhere within the second.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eisInfixOf \"Haskell\" \"I really like Haskell.\" == True\nisInfixOf \"Ial\" \"I really like Haskell.\" == False\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "isInfixOf",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isInfixOf function takes two lists and returns True iff the first list is contained wholly and intact anywhere within the second Example isInfixOf Haskell really like Haskell True isInfixOf Ial really like Haskell False",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "isInfixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "haskell2010",
          "partial": "Infix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "isPrefixOf",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isPrefixOf function takes two lists and returns True iff the first list is prefix of the second",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "isPrefixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "haskell2010",
          "partial": "Prefix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is a suffix of the second.\n Both lists must be finite.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "isSuffixOf",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two lists and returns True iff the first list is suffix of the second Both lists must be finite",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "isSuffixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "haskell2010",
          "partial": "Suffix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef x\u003c/code\u003e returns an infinite list of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "iterate",
          "package": "haskell2010",
          "signature": "(a -\u003e a) -\u003e a -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:iterate\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:iterate\"]"
        },
        "index": {
          "description": "iterate returns an infinite list of repeated applications of to iterate",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003e[a]",
          "package": "haskell2010",
          "signature": "(a-\u003ea)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the last element of a list, which must be finite and non-empty.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "last",
          "package": "haskell2010",
          "signature": "[a] -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:last\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:last\"]"
        },
        "index": {
          "description": "Extract the last element of list which must be finite and non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "last",
          "normalized": "[a]-\u003ea",
          "package": "haskell2010",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a finite list as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e,\n the result type of which may be any kind of number.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "length",
          "package": "haskell2010",
          "signature": "[a] -\u003e Int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:length\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:length\"]"
        },
        "index": {
          "description": "length returns the length of finite list as an Int It is an instance of the more general genericLength the result type of which may be any kind of number",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "length",
          "normalized": "[a]-\u003eInt",
          "package": "haskell2010",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of strings at newline\n characters.  The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "lines",
          "package": "haskell2010",
          "signature": "String -\u003e [String]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:lines\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:lines\"]"
        },
        "index": {
          "description": "lines breaks string up into list of strings at newline characters The resulting strings do not contain newlines",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "lines",
          "normalized": "String-\u003e[String]",
          "package": "haskell2010",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekey assocs\u003c/code\u003e looks up a key in an association list.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "lookup",
          "package": "haskell2010",
          "signature": "a -\u003e [(a, b)] -\u003e Maybe b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:lookup\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:lookup\"]"
        },
        "index": {
          "description": "lookup key assocs looks up key in an association list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "lookup",
          "normalized": "a-\u003e[(a,b)]-\u003eMaybe b",
          "package": "haskell2010",
          "signature": "a-\u003e[(a,b)]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the list obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element\n of \u003ccode\u003exs\u003c/code\u003e, i.e.,\n\u003c/p\u003e\u003cpre\u003e map f [x1, x2, ..., xn] == [f x1, f x2, ..., f xn]\n map f [x1, x2, ...] == [f x1, f x2, ...]\n\u003c/pre\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "map",
          "package": "haskell2010",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:map\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:map\"]"
        },
        "index": {
          "description": "map xs is the list obtained by applying to each element of xs i.e map x1 x2 xn x1 x2 xn map x1 x2 x1 x2",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "haskell2010",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a list, passing\n an accumulating parameter from left to right, and returning a final\n value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "mapAccumL",
          "package": "haskell2010",
          "signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e [x] -\u003e (acc, [y])",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of list passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "mapAccumL",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003e[b]-\u003e(a,[c])",
          "package": "haskell2010",
          "partial": "Accum",
          "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003e[x]-\u003e(acc,[y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a list, passing\n an accumulating parameter from right to left, and returning a final\n value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "mapAccumR",
          "package": "haskell2010",
          "signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e [x] -\u003e (acc, [y])",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of list passing an accumulating parameter from right to left and returning final value of this accumulator together with the new list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "mapAccumR",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003e[b]-\u003e(a,[c])",
          "package": "haskell2010",
          "partial": "Accum",
          "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003e[x]-\u003e(acc,[y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "maximum",
          "package": "haskell2010",
          "signature": "[a] -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:maximum\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:maximum\"]"
        },
        "index": {
          "description": "maximum returns the maximum value from list which must be non-empty finite and of an ordered type It is special case of maximumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "maximum",
          "normalized": "[a]-\u003ea",
          "package": "haskell2010",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the greatest element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "maximumBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The maximumBy function takes comparison function and list and returns the greatest element of the list by the comparison function The list must be finite and non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "package": "haskell2010",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003eminimumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "minimum",
          "package": "haskell2010",
          "signature": "[a] -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:minimum\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:minimum\"]"
        },
        "index": {
          "description": "minimum returns the minimum value from list which must be non-empty finite and of an ordered type It is special case of minimumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "minimum",
          "normalized": "[a]-\u003ea",
          "package": "haskell2010",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eminimumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the least element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "minimumBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The minimumBy function takes comparison function and list and returns the least element of the list by the comparison function The list must be finite and non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "package": "haskell2010",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the negation of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "notElem",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:notElem\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:notElem\"]"
        },
        "index": {
          "description": "notElem is the negation of elem",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "notElem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "haskell2010",
          "partial": "Elem",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e function removes duplicate elements from a list.\n In particular, it keeps only the first occurrence of each element.\n (The name \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e means `essence'.)\n It is a special case of \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "nub",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The nub function removes duplicate elements from list In particular it keeps only the first occurrence of each element The name nub means essence It is special case of nubBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "nub",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e function behaves just like \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e, except it uses a\n user-supplied equality predicate instead of the overloaded \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "nubBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The nubBy function behaves just like nub except it uses user-supplied equality predicate instead of the overloaded function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "nubBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:nubBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a list is empty.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "null",
          "package": "haskell2010",
          "signature": "[a] -\u003e Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:null\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:null\"]"
        },
        "index": {
          "description": "Test whether list is empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "null",
          "normalized": "[a]-\u003eBool",
          "package": "haskell2010",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e returns the disjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "or",
          "package": "haskell2010",
          "signature": "[Bool] -\u003e Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:or\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:or\"]"
        },
        "index": {
          "description": "or returns the disjunction of Boolean list For the result to be False the list must be finite True however results from True value at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "or",
          "normalized": "[Bool]-\u003eBool",
          "package": "haskell2010",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a list and returns\n the pair of lists of elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p xs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "partition",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate list and returns the pair of lists of elements which do and do not satisfy the predicate respectively i.e partition xs filter xs filter not xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "haskell2010",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epermutations\u003c/a\u003e\u003c/code\u003e function returns the list of all permutations of the argument.\n\u003c/p\u003e\u003cpre\u003e permutations \"abc\" == [\"abc\",\"bac\",\"cba\",\"bca\",\"cab\",\"acb\"]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "permutations",
          "package": "haskell2010",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The permutations function returns the list of all permutations of the argument permutations abc abc bac cba bca cab acb",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "permutations",
          "normalized": "[a]-\u003e[[a]]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:permutations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e function computes the product of a finite list of numbers.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "product",
          "package": "haskell2010",
          "signature": "[a] -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:product\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:product\"]"
        },
        "index": {
          "description": "The product function computes the product of finite list of numbers",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "product",
          "normalized": "[a]-\u003ea",
          "package": "haskell2010",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e is an infinite list, with \u003ccode\u003ex\u003c/code\u003e the value of every element.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "repeat",
          "package": "haskell2010",
          "signature": "a -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:repeat\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:repeat\"]"
        },
        "index": {
          "description": "repeat is an infinite list with the value of every element",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "repeat",
          "normalized": "a-\u003e[a]",
          "package": "haskell2010",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a list of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e the value of\n every element.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "replicate",
          "package": "haskell2010",
          "signature": "Int -\u003e a -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:replicate\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:replicate\"]"
        },
        "index": {
          "description": "replicate is list of length with the value of every element It is an instance of the more general genericReplicate in which may be of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "haskell2010",
          "signature": "Int-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n \u003ccode\u003exs\u003c/code\u003e must be finite.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "reverse",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:reverse\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:reverse\"]"
        },
        "index": {
          "description": "reverse xs returns the elements of xs in reverse order xs must be finite",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "reverse",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "scanl",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:scanl\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:scanl\"]"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "haskell2010",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "scanl1",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:scanl1\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:scanl1\"]"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.\n Note that\n\u003c/p\u003e\u003cpre\u003e head (scanr f z xs) == foldr f z xs.\n\u003c/pre\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "scanr",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:scanr\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:scanr\"]"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl Note that head scanr xs foldr xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "scanr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "package": "haskell2010",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "scanr1",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:scanr1\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:scanr1\"]"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "scanr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e function implements a stable sorting algorithm.\n It is a special case of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own comparison function.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "sort",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The sort function implements stable sorting algorithm It is special case of sortBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "sort",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "sortBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The sortBy function is the non-overloaded version of sort",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e span (\u003c 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])\n span (\u003c 9) [1,2,3] == ([1,2,3],[])\n span (\u003c 0) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "span",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:span\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:span\"]"
        },
        "index": {
          "description": "span applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that satisfy and second element is the remainder of the list span span span span xs is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "haskell2010",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns a tuple where first element is \u003ccode\u003exs\u003c/code\u003e prefix of\n length \u003ccode\u003en\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e splitAt 6 \"Hello World!\" == (\"Hello \",\"World!\")\n splitAt 3 [1,2,3,4,5] == ([1,2,3],[4,5])\n splitAt 1 [1,2,3] == ([1],[2,3])\n splitAt 3 [1,2,3] == ([1,2,3],[])\n splitAt 4 [1,2,3] == ([1,2,3],[])\n splitAt 0 [1,2,3] == ([],[1,2,3])\n splitAt (-1) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003eIt is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e is an instance of the more general \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "splitAt",
          "package": "haskell2010",
          "signature": "Int -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Prelude.html#splitAt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:splitAt\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:splitAt\"]"
        },
        "index": {
          "description": "splitAt xs returns tuple where first element is xs prefix of length and second element is the remainder of the list splitAt Hello World Hello World splitAt splitAt splitAt splitAt splitAt splitAt It is equivalent to take xs drop xs splitAt is an instance of the more general genericSplitAt in which may be of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "splitAt",
          "normalized": "Int-\u003e[a]-\u003e([a],[a])",
          "package": "haskell2010",
          "partial": "At",
          "signature": "Int-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e function drops the given prefix from a list.\n It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the list did not start with the prefix\n given, or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the list after the prefix, if it does.\n\u003c/p\u003e\u003cpre\u003e stripPrefix \"foo\" \"foobar\" == Just \"bar\"\n stripPrefix \"foo\" \"foo\" == Just \"\"\n stripPrefix \"foo\" \"barfoo\" == Nothing\n stripPrefix \"foo\" \"barfoobaz\" == Nothing\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "stripPrefix",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a] -\u003e Maybe [a]",
          "type": "function"
        },
        "index": {
          "description": "The stripPrefix function drops the given prefix from list It returns Nothing if the list did not start with the prefix given or Just the list after the prefix if it does stripPrefix foo foobar Just bar stripPrefix foo foo Just stripPrefix foo barfoo Nothing stripPrefix foo barfoobaz Nothing",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "stripPrefix",
          "normalized": "[a]-\u003e[a]-\u003eMaybe[a]",
          "package": "haskell2010",
          "partial": "Prefix",
          "signature": "[a]-\u003e[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:stripPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubsequences\u003c/a\u003e\u003c/code\u003e function returns the list of all subsequences of the argument.\n\u003c/p\u003e\u003cpre\u003e subsequences \"abc\" == [\"\",\"a\",\"b\",\"ab\",\"c\",\"ac\",\"bc\",\"abc\"]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "subsequences",
          "package": "haskell2010",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The subsequences function returns the list of all subsequences of the argument subsequences abc ab ac bc abc",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "subsequences",
          "normalized": "[a]-\u003e[[a]]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:subsequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e function computes the sum of a finite list of numbers.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "sum",
          "package": "haskell2010",
          "signature": "[a] -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:sum\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:sum\"]"
        },
        "index": {
          "description": "The sum function computes the sum of finite list of numbers",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "sum",
          "normalized": "[a]-\u003ea",
          "package": "haskell2010",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements after the head of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "tail",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:tail\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:tail\"]"
        },
        "index": {
          "description": "Extract the elements after the head of list which must be non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "tail",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e function returns all final segments of the argument,\n longest first.  For example,\n\u003c/p\u003e\u003cpre\u003e tails \"abc\" == [\"abc\", \"bc\", \"c\",\"\"]\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e has the following strictness property:\n \u003ccode\u003etails _|_ = _|_ : _|_\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "tails",
          "package": "haskell2010",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The tails function returns all final segments of the argument longest first For example tails abc abc bc Note that tails has the following strictness property tails",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "tails",
          "normalized": "[a]-\u003e[[a]]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a list \u003ccode\u003exs\u003c/code\u003e, returns the prefix of \u003ccode\u003exs\u003c/code\u003e\n of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e take 5 \"Hello World!\" == \"Hello\"\n take 3 [1,2,3,4,5] == [1,2,3]\n take 3 [1,2] == [1,2]\n take 3 [] == []\n take (-1) [1,2] == []\n take 0 [1,2] == []\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "take",
          "package": "haskell2010",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:take\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:take\"]"
        },
        "index": {
          "description": "take applied to list xs returns the prefix of xs of length or xs itself if length xs take Hello World Hello take take take take take It is an instance of the more general genericTake in which may be of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "take",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns the\n longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e takeWhile (\u003c 3) [1,2,3,4,1,2,3,4] == [1,2]\n takeWhile (\u003c 9) [1,2,3] == [1,2,3]\n takeWhile (\u003c 0) [1,2,3] == []\n\u003c/pre\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "takeWhile",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:takeWhile\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:takeWhile\"]"
        },
        "index": {
          "description": "takeWhile applied to predicate and list xs returns the longest prefix possibly empty of xs of elements that satisfy takeWhile takeWhile takeWhile",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e transpose [[1,2,3],[4,5,6]] == [[1,4],[2,5],[3,6]]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "transpose",
          "package": "haskell2010",
          "signature": "[[a]] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its argument For example transpose",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "transpose",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "haskell2010",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is a `dual' to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e: while \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n reduces a list to a summary value, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a list from\n a seed value.  The function takes the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if it is done producing the list or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which\n case, \u003ccode\u003ea\u003c/code\u003e is a prepended to the list and \u003ccode\u003eb\u003c/code\u003e is used as the next\n element in a recursive call.  For example,\n\u003c/p\u003e\u003cpre\u003e iterate f == unfoldr (\\x -\u003e Just (x, f x))\n\u003c/pre\u003e\u003cp\u003eIn some cases, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e can undo a \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e operation:\n\u003c/p\u003e\u003cpre\u003e unfoldr f' (foldr f z xs) == xs\n\u003c/pre\u003e\u003cp\u003eif the following holds:\n\u003c/p\u003e\u003cpre\u003e f' (f x y) = Just (x,y)\n f' z       = Nothing\n\u003c/pre\u003e\u003cp\u003eA simple use of unfoldr:\n\u003c/p\u003e\u003cpre\u003e unfoldr (\\b -\u003e if b == 0 then Nothing else Just (b, b-1)) 10\n  [10,9,8,7,6,5,4,3,2,1]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "unfoldr",
          "package": "haskell2010",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The unfoldr function is dual to foldr while foldr reduces list to summary value unfoldr builds list from seed value The function takes the element and returns Nothing if it is done producing the list or returns Just in which case is prepended to the list and is used as the next element in recursive call For example iterate unfoldr Just In some cases unfoldr can undo foldr operation unfoldr foldr xs xs if the following holds Just Nothing simple use of unfoldr unfoldr if then Nothing else Just b-1",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e[b]",
          "package": "haskell2010",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e function returns the list union of the two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e \"dog\" `union` \"cow\" == \"dogcw\"\n\u003c/pre\u003e\u003cp\u003eDuplicates, and elements of the first list, are removed from the\n the second list, but if the first list contains duplicates, so will\n the result.\n It is a special case of \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "union",
          "package": "haskell2010",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The union function returns the list union of the two lists For example dog union cow dogcw Duplicates and elements of the first list are removed from the the second list but if the first list contains duplicates so will the result It is special case of unionBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "union",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unionBy",
          "package": "haskell2010",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The unionBy function is the non-overloaded version of union",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unionBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n It joins lines, after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "unlines",
          "package": "haskell2010",
          "signature": "[String] -\u003e String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unlines\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:unlines\"]"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unlines",
          "normalized": "[String]-\u003eString",
          "package": "haskell2010",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e.\n It joins words with separating spaces.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "unwords",
          "package": "haskell2010",
          "signature": "[String] -\u003e String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unwords\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:unwords\"]"
        },
        "index": {
          "description": "unwords is an inverse operation to words It joins words with separating spaces",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unwords",
          "normalized": "[String]-\u003eString",
          "package": "haskell2010",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs into a list of first components\n and a list of second components.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "unzip",
          "package": "haskell2010",
          "signature": "[(a, b)] -\u003e ([a], [b])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unzip\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:unzip\"]"
        },
        "index": {
          "description": "unzip transforms list of pairs into list of first components and list of second components",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "haskell2010",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip3\u003c/a\u003e\u003c/code\u003e function takes a list of triples and returns three\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "unzip3",
          "package": "haskell2010",
          "signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unzip3\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:unzip3\"]"
        },
        "index": {
          "description": "The unzip3 function takes list of triples and returns three lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip3",
          "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
          "package": "haskell2010",
          "signature": "[(a,b,c)]-\u003e([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip4\u003c/a\u003e\u003c/code\u003e function takes a list of quadruples and returns four\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip4",
          "package": "haskell2010",
          "signature": "[(a, b, c, d)] -\u003e ([a], [b], [c], [d])",
          "type": "function"
        },
        "index": {
          "description": "The unzip4 function takes list of quadruples and returns four lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip4",
          "normalized": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "package": "haskell2010",
          "signature": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip5\u003c/a\u003e\u003c/code\u003e function takes a list of five-tuples and returns five\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip5",
          "package": "haskell2010",
          "signature": "[(a, b, c, d, e)] -\u003e ([a], [b], [c], [d], [e])",
          "type": "function"
        },
        "index": {
          "description": "The unzip5 function takes list of five-tuples and returns five lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip5",
          "normalized": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "package": "haskell2010",
          "signature": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip6\u003c/a\u003e\u003c/code\u003e function takes a list of six-tuples and returns six\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip6",
          "package": "haskell2010",
          "signature": "[(a, b, c, d, e, f)] -\u003e ([a], [b], [c], [d], [e], [f])",
          "type": "function"
        },
        "index": {
          "description": "The unzip6 function takes list of six-tuples and returns six lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip6",
          "normalized": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "package": "haskell2010",
          "signature": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip7\u003c/a\u003e\u003c/code\u003e function takes a list of seven-tuples and returns\n seven lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip7",
          "package": "haskell2010",
          "signature": "[(a, b, c, d, e, f, g)] -\u003e ([a], [b], [c], [d], [e], [f], [g])",
          "type": "function"
        },
        "index": {
          "description": "The unzip7 function takes list of seven-tuples and returns seven lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip7",
          "normalized": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "package": "haskell2010",
          "signature": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:unzip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of words, which were delimited\n by white space.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "words",
          "package": "haskell2010",
          "signature": "String -\u003e [String]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:words\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:words\"]"
        },
        "index": {
          "description": "words breaks string up into list of words which were delimited by white space",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "words",
          "normalized": "String-\u003e[String]",
          "package": "haskell2010",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two lists and returns a list of corresponding pairs.\n If one input list is short, excess elements of the longer list are\n discarded.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "zip",
          "package": "haskell2010",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zip\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:zip\"]"
        },
        "index": {
          "description": "zip takes two lists and returns list of corresponding pairs If one input list is short excess elements of the longer list are discarded",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e takes three lists and returns a list of triples, analogous to\n \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "zip3",
          "package": "haskell2010",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zip3\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:zip3\"]"
        },
        "index": {
          "description": "zip3 takes three lists and returns list of triples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip3",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e function takes four lists and returns a list of\n quadruples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip4",
          "package": "haskell2010",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [(a, b, c, d)]",
          "type": "function"
        },
        "index": {
          "description": "The zip4 function takes four lists and returns list of quadruples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip4",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e function takes five lists and returns a list of\n five-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip5",
          "package": "haskell2010",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [(a, b, c, d, e)]",
          "type": "function"
        },
        "index": {
          "description": "The zip5 function takes five lists and returns list of five-tuples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip5",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e function takes six lists and returns a list of six-tuples,\n analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip6",
          "package": "haskell2010",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [(a, b, c, d, e, f)]",
          "type": "function"
        },
        "index": {
          "description": "The zip6 function takes six lists and returns list of six-tuples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip6",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e function takes seven lists and returns a list of\n seven-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip7",
          "package": "haskell2010",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [(a, b, c, d, e, f, g)]",
          "type": "function"
        },
        "index": {
          "description": "The zip7 function takes seven lists and returns list of seven-tuples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip7",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]",
          "package": "haskell2010",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given\n as the first argument, instead of a tupling function.\n For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two lists to produce the\n list of corresponding sums.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "zipWith",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zipWith\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:zipWith\"]"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two lists to produce the list of corresponding sums",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "haskell2010",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e function takes a function which combines three\n elements, as well as three lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.List\",\"Prelude\"]",
          "name": "zipWith3",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zipWith3\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:zipWith3\"]"
        },
        "index": {
          "description": "The zipWith3 function takes function which combines three elements as well as three lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "package": "haskell2010",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e function takes a function which combines four\n elements, as well as four lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith4",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith4 function takes function which combines four elements as well as four lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]",
          "package": "haskell2010",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e function takes a function which combines five\n elements, as well as five lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith5",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith5 function takes function which combines five elements as well as five lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]",
          "package": "haskell2010",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e function takes a function which combines six\n elements, as well as six lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith6",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith6 function takes function which combines six elements as well as six lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]",
          "package": "haskell2010",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e function takes a function which combines seven\n elements, as well as seven lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith7",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [h]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith7 function takes function which combines seven elements as well as seven lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]",
          "package": "haskell2010",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-List.html#v:zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Maybe",
          "name": "Maybe",
          "package": "haskell2010",
          "source": "src/Data-Maybe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "Maybe",
          "package": "haskell2010",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Maybe",
          "name": "Maybe",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "Maybe",
          "package": "haskell2010",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#t:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Maybe\",\"Prelude\"]",
          "name": "Just",
          "package": "haskell2010",
          "signature": "Just a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:Just\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:Just\"]"
        },
        "index": {
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "Just",
          "package": "haskell2010",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:Just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Maybe\",\"Prelude\"]",
          "name": "Nothing",
          "package": "haskell2010",
          "signature": "Nothing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:Nothing\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:Nothing\"]"
        },
        "index": {
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "Nothing",
          "package": "haskell2010",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:Nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function takes a list of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003es and returns\n a list of all the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values. \n\u003c/p\u003e",
          "module": "Data.Maybe",
          "name": "catMaybes",
          "package": "haskell2010",
          "signature": "[Maybe a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The catMaybes function takes list of Maybe and returns list of all the Just values",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "catMaybes",
          "normalized": "[Maybe a]-\u003e[a]",
          "package": "haskell2010",
          "partial": "Maybes",
          "signature": "[Maybe a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromJust\u003c/a\u003e\u003c/code\u003e function extracts the element out of a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and\n throws an error if its argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe",
          "name": "fromJust",
          "package": "haskell2010",
          "signature": "Maybe a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The fromJust function extracts the element out of Just and throws an error if its argument is Nothing",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "fromJust",
          "normalized": "Maybe a-\u003ea",
          "package": "haskell2010",
          "partial": "Just",
          "signature": "Maybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:fromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromMaybe\u003c/a\u003e\u003c/code\u003e function takes a default value and and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, it returns the default values;\n otherwise, it returns the value contained in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe",
          "name": "fromMaybe",
          "package": "haskell2010",
          "signature": "a -\u003e Maybe a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The fromMaybe function takes default value and and Maybe value If the Maybe is Nothing it returns the default values otherwise it returns the value contained in the Maybe",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "fromMaybe",
          "normalized": "a-\u003eMaybe a-\u003ea",
          "package": "haskell2010",
          "partial": "Maybe",
          "signature": "a-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:fromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the\n form \u003ccode\u003eJust _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe",
          "name": "isJust",
          "package": "haskell2010",
          "signature": "Maybe a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isJust function returns True iff its argument is of the form Just",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "isJust",
          "normalized": "Maybe a-\u003eBool",
          "package": "haskell2010",
          "partial": "Just",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:isJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisNothing\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe",
          "name": "isNothing",
          "package": "haskell2010",
          "signature": "Maybe a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isNothing function returns True iff its argument is Nothing",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "isNothing",
          "normalized": "Maybe a-\u003eBool",
          "package": "haskell2010",
          "partial": "Nothing",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:isNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elistToMaybe\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on an empty list\n or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e is the first element of the list.\n\u003c/p\u003e",
          "module": "Data.Maybe",
          "name": "listToMaybe",
          "package": "haskell2010",
          "signature": "[a] -\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "The listToMaybe function returns Nothing on an empty list or Just where is the first element of the list",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "listToMaybe",
          "normalized": "[a]-\u003eMaybe a",
          "package": "haskell2010",
          "partial": "To Maybe",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:listToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e function is a version of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e which can throw\n out elements.  In particular, the functional argument returns\n something of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.  If this is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, no element\n is added on to the result list.  If it just \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, then \u003ccode\u003eb\u003c/code\u003e is\n included in the result list.\n\u003c/p\u003e",
          "module": "Data.Maybe",
          "name": "mapMaybe",
          "package": "haskell2010",
          "signature": "(a -\u003e Maybe b) -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "The mapMaybe function is version of map which can throw out elements In particular the functional argument returns something of type Maybe If this is Nothing no element is added on to the result list If it just Just then is included in the result list",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "package": "haskell2010",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e function takes a default value, a function, and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the function returns the\n default value.  Otherwise, it applies the function to the value inside\n the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and returns the result.\n\u003c/p\u003e",
          "module": "[\"Data.Maybe\",\"Prelude\"]",
          "name": "maybe",
          "package": "haskell2010",
          "signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:maybe\",\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:maybe\"]"
        },
        "index": {
          "description": "The maybe function takes default value function and Maybe value If the Maybe value is Nothing the function returns the default value Otherwise it applies the function to the value inside the Just and returns the result",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "maybe",
          "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
          "package": "haskell2010",
          "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybeToList\u003c/a\u003e\u003c/code\u003e function returns an empty list when given\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or a singleton list when not given \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Maybe",
          "name": "maybeToList",
          "package": "haskell2010",
          "signature": "Maybe a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The maybeToList function returns an empty list when given Nothing or singleton list when not given Nothing",
          "hierarchy": "Data Maybe",
          "module": "Data.Maybe",
          "name": "maybeToList",
          "normalized": "Maybe a-\u003e[a]",
          "package": "haskell2010",
          "partial": "To List",
          "signature": "Maybe a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Maybe.html#v:maybeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ratio",
          "name": "Ratio",
          "package": "haskell2010",
          "source": "src/Data-Ratio.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "Ratio",
          "package": "haskell2010",
          "partial": "Ratio",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ratio.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRational numbers, with numerator and denominator of some \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Ratio",
          "name": "Ratio",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Rational numbers with numerator and denominator of some Integral type",
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "Ratio",
          "package": "haskell2010",
          "partial": "Ratio",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ratio.html#t:Ratio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision rational numbers, represented as a ratio of\n two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e values.  A rational number may be constructed using\n the \u003ccode\u003e\u003ca\u003e%\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "Data.Ratio",
          "name": "Rational",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "Arbitrary-precision rational numbers represented as ratio of two Integer values rational number may be constructed using the operator",
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "Rational",
          "package": "haskell2010",
          "partial": "Rational",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ratio.html#t:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForms the ratio of two integral numbers.\n\u003c/p\u003e",
          "module": "Data.Ratio",
          "name": "(%)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Ratio a",
          "type": "function"
        },
        "index": {
          "description": "Forms the ratio of two integral numbers",
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "(%) %",
          "normalized": "a-\u003ea-\u003eRatio a",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003eRatio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ratio.html#v:-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapproxRational\u003c/a\u003e\u003c/code\u003e, applied to two real fractional numbers \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003eepsilon\u003c/code\u003e,\n returns the simplest rational number within \u003ccode\u003eepsilon\u003c/code\u003e of \u003ccode\u003ex\u003c/code\u003e.\n A rational number \u003ccode\u003ey\u003c/code\u003e is said to be \u003cem\u003esimpler\u003c/em\u003e than another \u003ccode\u003ey'\u003c/code\u003e if\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enumerator\u003c/a\u003e\u003c/code\u003e y) \u003c= \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enumerator\u003c/a\u003e\u003c/code\u003e y')\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003edenominator\u003c/a\u003e\u003c/code\u003e y \u003c= \u003ccode\u003e\u003ca\u003edenominator\u003c/a\u003e\u003c/code\u003e y'\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAny real interval contains a unique simplest rational;\n in particular, note that \u003ccode\u003e0/1\u003c/code\u003e is the simplest rational of all.\n\u003c/p\u003e",
          "module": "Data.Ratio",
          "name": "approxRational",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Rational",
          "type": "function"
        },
        "index": {
          "description": "approxRational applied to two real fractional numbers and epsilon returns the simplest rational number within epsilon of rational number is said to be simpler than another if abs numerator abs numerator and denominator denominator Any real interval contains unique simplest rational in particular note that is the simplest rational of all",
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "approxRational",
          "normalized": "a-\u003ea-\u003eRational",
          "package": "haskell2010",
          "partial": "Rational",
          "signature": "a-\u003ea-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ratio.html#v:approxRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the denominator of the ratio in reduced form:\n the numerator and denominator have no common factor and the denominator\n is positive.\n\u003c/p\u003e",
          "module": "Data.Ratio",
          "name": "denominator",
          "package": "haskell2010",
          "signature": "Ratio a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the denominator of the ratio in reduced form the numerator and denominator have no common factor and the denominator is positive",
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "denominator",
          "normalized": "Ratio a-\u003ea",
          "package": "haskell2010",
          "signature": "Ratio a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ratio.html#v:denominator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the numerator of the ratio in reduced form:\n the numerator and denominator have no common factor and the denominator\n is positive.\n\u003c/p\u003e",
          "module": "Data.Ratio",
          "name": "numerator",
          "package": "haskell2010",
          "signature": "Ratio a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the numerator of the ratio in reduced form the numerator and denominator have no common factor and the denominator is positive",
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "numerator",
          "normalized": "Ratio a-\u003ea",
          "package": "haskell2010",
          "signature": "Ratio a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Ratio.html#v:numerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Word",
          "name": "Word",
          "package": "haskell2010",
          "source": "src/Data-Word.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Word",
          "module": "Data.Word",
          "name": "Word",
          "package": "haskell2010",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Word.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is an unsigned integral type, with the same size as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Word",
          "name": "Word",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Word is an unsigned integral type with the same size as Int",
          "hierarchy": "Data Word",
          "module": "Data.Word",
          "name": "Word",
          "package": "haskell2010",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Word.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Data.Word",
          "name": "Word16",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Data Word",
          "module": "Data.Word",
          "name": "Word16",
          "package": "haskell2010",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Word.html#t:Word16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Data.Word",
          "name": "Word32",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Data Word",
          "module": "Data.Word",
          "name": "Word32",
          "package": "haskell2010",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Word.html#t:Word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Data.Word",
          "name": "Word64",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Data Word",
          "module": "Data.Word",
          "name": "Word64",
          "package": "haskell2010",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Word.html#t:Word64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Data.Word",
          "name": "Word8",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Data Word",
          "module": "Data.Word",
          "name": "Word8",
          "package": "haskell2010",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Data-Word.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module \u003ca\u003eForeign.C.Error\u003c/a\u003e facilitates C-specific error\n handling of \u003ccode\u003eerrno\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.C.Error",
          "name": "Error",
          "package": "haskell2010",
          "source": "src/Foreign-C-Error.html",
          "type": "module"
        },
        "index": {
          "description": "The module Foreign.C.Error facilitates C-specific error handling of errno",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "Error",
          "package": "haskell2010",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell representation for \u003ccode\u003eerrno\u003c/code\u003e values.\n The implementation is deliberately exposed, to allow users to add\n their own definitions of \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "Errno",
          "package": "haskell2010",
          "type": "newtype"
        },
        "index": {
          "description": "Haskell representation for errno values The implementation is deliberately exposed to allow users to add their own definitions of Errno values",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "Errno",
          "package": "haskell2010",
          "partial": "Errno",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#t:Errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "Errno",
          "package": "haskell2010",
          "signature": "Errno CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "Errno",
          "package": "haskell2010",
          "partial": "Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:Errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "e2BIG",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "e2BIG",
          "package": "haskell2010",
          "partial": "BIG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:e2BIG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eACCES",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eACCES",
          "package": "haskell2010",
          "partial": "ACCES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eACCES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eADDRINUSE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eADDRINUSE",
          "package": "haskell2010",
          "partial": "ADDRINUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eADDRINUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eADDRNOTAVAIL",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eADDRNOTAVAIL",
          "package": "haskell2010",
          "partial": "ADDRNOTAVAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eADDRNOTAVAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eADV",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eADV",
          "package": "haskell2010",
          "partial": "ADV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eADV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eAFNOSUPPORT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eAFNOSUPPORT",
          "package": "haskell2010",
          "partial": "AFNOSUPPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eAFNOSUPPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eAGAIN",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eAGAIN",
          "package": "haskell2010",
          "partial": "AGAIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eAGAIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eALREADY",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eALREADY",
          "package": "haskell2010",
          "partial": "ALREADY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eALREADY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eBADF",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eBADF",
          "package": "haskell2010",
          "partial": "BADF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eBADF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eBADMSG",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eBADMSG",
          "package": "haskell2010",
          "partial": "BADMSG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eBADMSG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eBADRPC",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eBADRPC",
          "package": "haskell2010",
          "partial": "BADRPC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eBADRPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eBUSY",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eBUSY",
          "package": "haskell2010",
          "partial": "BUSY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eBUSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eCHILD",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eCHILD",
          "package": "haskell2010",
          "partial": "CHILD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eCHILD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eCOMM",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eCOMM",
          "package": "haskell2010",
          "partial": "COMM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eCOMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eCONNABORTED",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eCONNABORTED",
          "package": "haskell2010",
          "partial": "CONNABORTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eCONNABORTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eCONNREFUSED",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eCONNREFUSED",
          "package": "haskell2010",
          "partial": "CONNREFUSED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eCONNREFUSED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eCONNRESET",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eCONNRESET",
          "package": "haskell2010",
          "partial": "CONNRESET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eCONNRESET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eDEADLK",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eDEADLK",
          "package": "haskell2010",
          "partial": "DEADLK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eDEADLK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eDESTADDRREQ",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eDESTADDRREQ",
          "package": "haskell2010",
          "partial": "DESTADDRREQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eDESTADDRREQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eDIRTY",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eDIRTY",
          "package": "haskell2010",
          "partial": "DIRTY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eDIRTY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eDOM",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eDOM",
          "package": "haskell2010",
          "partial": "DOM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eDOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eDQUOT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eDQUOT",
          "package": "haskell2010",
          "partial": "DQUOT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eDQUOT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eEXIST",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eEXIST",
          "package": "haskell2010",
          "partial": "EXIST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eEXIST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eFAULT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eFAULT",
          "package": "haskell2010",
          "partial": "FAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eFBIG",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eFBIG",
          "package": "haskell2010",
          "partial": "FBIG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eFBIG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eFTYPE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eFTYPE",
          "package": "haskell2010",
          "partial": "FTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eFTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eHOSTDOWN",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eHOSTDOWN",
          "package": "haskell2010",
          "partial": "HOSTDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eHOSTDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eHOSTUNREACH",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eHOSTUNREACH",
          "package": "haskell2010",
          "partial": "HOSTUNREACH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eHOSTUNREACH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eIDRM",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eIDRM",
          "package": "haskell2010",
          "partial": "IDRM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eIDRM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eILSEQ",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eILSEQ",
          "package": "haskell2010",
          "partial": "ILSEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eILSEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eINPROGRESS",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eINPROGRESS",
          "package": "haskell2010",
          "partial": "INPROGRESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eINPROGRESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eINTR",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eINTR",
          "package": "haskell2010",
          "partial": "INTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eINTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eINVAL",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eINVAL",
          "package": "haskell2010",
          "partial": "INVAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eINVAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eIO",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eIO",
          "package": "haskell2010",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eISCONN",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eISCONN",
          "package": "haskell2010",
          "partial": "ISCONN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eISCONN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eISDIR",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eISDIR",
          "package": "haskell2010",
          "partial": "ISDIR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eISDIR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eLOOP",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eLOOP",
          "package": "haskell2010",
          "partial": "LOOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eLOOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eMFILE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eMFILE",
          "package": "haskell2010",
          "partial": "MFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eMFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eMLINK",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eMLINK",
          "package": "haskell2010",
          "partial": "MLINK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eMLINK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eMSGSIZE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eMSGSIZE",
          "package": "haskell2010",
          "partial": "MSGSIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eMSGSIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eMULTIHOP",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eMULTIHOP",
          "package": "haskell2010",
          "partial": "MULTIHOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eMULTIHOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNAMETOOLONG",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNAMETOOLONG",
          "package": "haskell2010",
          "partial": "NAMETOOLONG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNAMETOOLONG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNETDOWN",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNETDOWN",
          "package": "haskell2010",
          "partial": "NETDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNETDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNETRESET",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNETRESET",
          "package": "haskell2010",
          "partial": "NETRESET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNETRESET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNETUNREACH",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNETUNREACH",
          "package": "haskell2010",
          "partial": "NETUNREACH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNETUNREACH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNFILE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNFILE",
          "package": "haskell2010",
          "partial": "NFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOBUFS",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOBUFS",
          "package": "haskell2010",
          "partial": "NOBUFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOBUFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNODATA",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNODATA",
          "package": "haskell2010",
          "partial": "NODATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNODATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNODEV",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNODEV",
          "package": "haskell2010",
          "partial": "NODEV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNODEV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOENT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOENT",
          "package": "haskell2010",
          "partial": "NOENT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOENT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOEXEC",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOEXEC",
          "package": "haskell2010",
          "partial": "NOEXEC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOEXEC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOLCK",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOLCK",
          "package": "haskell2010",
          "partial": "NOLCK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOLCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOLINK",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOLINK",
          "package": "haskell2010",
          "partial": "NOLINK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOLINK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOMEM",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOMEM",
          "package": "haskell2010",
          "partial": "NOMEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOMEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOMSG",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOMSG",
          "package": "haskell2010",
          "partial": "NOMSG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOMSG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNONET",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNONET",
          "package": "haskell2010",
          "partial": "NONET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNONET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOPROTOOPT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOPROTOOPT",
          "package": "haskell2010",
          "partial": "NOPROTOOPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOPROTOOPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOSPC",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOSPC",
          "package": "haskell2010",
          "partial": "NOSPC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOSPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOSR",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOSR",
          "package": "haskell2010",
          "partial": "NOSR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOSTR",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOSTR",
          "package": "haskell2010",
          "partial": "NOSTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOSTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOSYS",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOSYS",
          "package": "haskell2010",
          "partial": "NOSYS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOSYS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOTBLK",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOTBLK",
          "package": "haskell2010",
          "partial": "NOTBLK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOTBLK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOTCONN",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOTCONN",
          "package": "haskell2010",
          "partial": "NOTCONN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOTCONN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOTDIR",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOTDIR",
          "package": "haskell2010",
          "partial": "NOTDIR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOTDIR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOTEMPTY",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOTEMPTY",
          "package": "haskell2010",
          "partial": "NOTEMPTY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOTEMPTY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOTSOCK",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOTSOCK",
          "package": "haskell2010",
          "partial": "NOTSOCK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOTSOCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNOTTY",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNOTTY",
          "package": "haskell2010",
          "partial": "NOTTY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNOTTY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eNXIO",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eNXIO",
          "package": "haskell2010",
          "partial": "NXIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eNXIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eOK",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eOK",
          "package": "haskell2010",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eOPNOTSUPP",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eOPNOTSUPP",
          "package": "haskell2010",
          "partial": "OPNOTSUPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eOPNOTSUPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePERM",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePERM",
          "package": "haskell2010",
          "partial": "PERM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePERM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePFNOSUPPORT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePFNOSUPPORT",
          "package": "haskell2010",
          "partial": "PFNOSUPPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePFNOSUPPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePIPE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePIPE",
          "package": "haskell2010",
          "partial": "PIPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePIPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePROCLIM",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePROCLIM",
          "package": "haskell2010",
          "partial": "PROCLIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePROCLIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePROCUNAVAIL",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePROCUNAVAIL",
          "package": "haskell2010",
          "partial": "PROCUNAVAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePROCUNAVAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePROGMISMATCH",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePROGMISMATCH",
          "package": "haskell2010",
          "partial": "PROGMISMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePROGMISMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePROGUNAVAIL",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePROGUNAVAIL",
          "package": "haskell2010",
          "partial": "PROGUNAVAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePROGUNAVAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePROTO",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePROTO",
          "package": "haskell2010",
          "partial": "PROTO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePROTO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePROTONOSUPPORT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePROTONOSUPPORT",
          "package": "haskell2010",
          "partial": "PROTONOSUPPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePROTONOSUPPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "ePROTOTYPE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "ePROTOTYPE",
          "package": "haskell2010",
          "partial": "PROTOTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:ePROTOTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eRANGE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eRANGE",
          "package": "haskell2010",
          "partial": "RANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eRANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eREMCHG",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eREMCHG",
          "package": "haskell2010",
          "partial": "REMCHG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eREMCHG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eREMOTE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eREMOTE",
          "package": "haskell2010",
          "partial": "REMOTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eREMOTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eROFS",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eROFS",
          "package": "haskell2010",
          "partial": "ROFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eROFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eRPCMISMATCH",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eRPCMISMATCH",
          "package": "haskell2010",
          "partial": "RPCMISMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eRPCMISMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eRREMOTE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eRREMOTE",
          "package": "haskell2010",
          "partial": "RREMOTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eRREMOTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eSHUTDOWN",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eSHUTDOWN",
          "package": "haskell2010",
          "partial": "SHUTDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eSHUTDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eSOCKTNOSUPPORT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eSOCKTNOSUPPORT",
          "package": "haskell2010",
          "partial": "SOCKTNOSUPPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eSOCKTNOSUPPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eSPIPE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eSPIPE",
          "package": "haskell2010",
          "partial": "SPIPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eSPIPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eSRCH",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eSRCH",
          "package": "haskell2010",
          "partial": "SRCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eSRCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eSRMNT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eSRMNT",
          "package": "haskell2010",
          "partial": "SRMNT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eSRMNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eSTALE",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eSTALE",
          "package": "haskell2010",
          "partial": "STALE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eSTALE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eTIME",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eTIME",
          "package": "haskell2010",
          "partial": "TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eTIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eTIMEDOUT",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eTIMEDOUT",
          "package": "haskell2010",
          "partial": "TIMEDOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eTIMEDOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eTOOMANYREFS",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eTOOMANYREFS",
          "package": "haskell2010",
          "partial": "TOOMANYREFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eTOOMANYREFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eTXTBSY",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eTXTBSY",
          "package": "haskell2010",
          "partial": "TXTBSY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eTXTBSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eUSERS",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eUSERS",
          "package": "haskell2010",
          "partial": "USERS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eUSERS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eWOULDBLOCK",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eWOULDBLOCK",
          "package": "haskell2010",
          "partial": "WOULDBLOCK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eWOULDBLOCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error",
          "name": "eXDEV",
          "package": "haskell2010",
          "signature": "Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "eXDEV",
          "package": "haskell2010",
          "partial": "XDEV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:eXDEV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e based on the given \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e value.\n The optional information can be used to improve the accuracy of\n error messages.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "errnoToIOError",
          "package": "haskell2010",
          "signature": "String-\u003e Errno-\u003e Maybe Handle-\u003e Maybe String-\u003e IOError",
          "type": "function"
        },
        "index": {
          "description": "Construct an IOError based on the given Errno value The optional information can be used to improve the accuracy of error messages",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "errnoToIOError",
          "normalized": "String-\u003eErrno-\u003eMaybe Handle-\u003eMaybe String-\u003eIOError",
          "package": "haskell2010",
          "partial": "To IOError",
          "signature": "String-\u003eErrno-\u003eMaybe Handle-\u003eMaybe String-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:errnoToIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current value of \u003ccode\u003eerrno\u003c/code\u003e in the current thread.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "getErrno",
          "package": "haskell2010",
          "signature": "IO Errno",
          "type": "function"
        },
        "index": {
          "description": "Get the current value of errno in the current thread",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "getErrno",
          "package": "haskell2010",
          "partial": "Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:getErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the given \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e value is valid on the system.\n This implies that the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e is also system dependent\n as it is only defined for valid values of \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "isValidErrno",
          "package": "haskell2010",
          "signature": "Errno -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Yield True if the given Errno value is valid on the system This implies that the Eq instance of Errno is also system dependent as it is only defined for valid values of Errno",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "isValidErrno",
          "normalized": "Errno-\u003eBool",
          "package": "haskell2010",
          "partial": "Valid Errno",
          "signature": "Errno-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:isValidErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the current thread's \u003ccode\u003eerrno\u003c/code\u003e value to \u003ccode\u003e\u003ca\u003eeOK\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "resetErrno",
          "package": "haskell2010",
          "signature": "IO ()",
          "type": "function"
        },
        "index": {
          "description": "Reset the current thread errno value to eOK",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "resetErrno",
          "normalized": "IO()",
          "package": "haskell2010",
          "partial": "Errno",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:resetErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e corresponding to the current value of \u003ccode\u003e\u003ca\u003egetErrno\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrno",
          "package": "haskell2010",
          "signature": "String-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Throw an IOError corresponding to the current value of getErrno",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrno",
          "normalized": "String-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e corresponding to the current value of \u003ccode\u003e\u003ca\u003egetErrno\u003c/a\u003e\u003c/code\u003e\n if the result value of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action meets the given predicate.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIf",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool)-\u003e String-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Throw an IOError corresponding to the current value of getErrno if the result value of the IO action meets the given predicate",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIf",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno If",
          "signature": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e corresponding to the current value of \u003ccode\u003e\u003ca\u003egetErrno\u003c/a\u003e\u003c/code\u003e\n if the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action returns a result of \u003ccode\u003e-1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1",
          "package": "haskell2010",
          "signature": "String -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Throw an IOError corresponding to the current value of getErrno if the IO action returns result of",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno If Minus",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfMinus1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e corresponding to the current value of \u003ccode\u003e\u003ca\u003egetErrno\u003c/a\u003e\u003c/code\u003e\n if the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action returns a result of \u003ccode\u003e-1\u003c/code\u003e, but retries in case of\n an interrupted operation.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1Retry",
          "package": "haskell2010",
          "signature": "String -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Throw an IOError corresponding to the current value of getErrno if the IO action returns result of but retries in case of an interrupted operation",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1Retry",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno If Minus Retry",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfMinus1Retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1Retry\u003c/a\u003e\u003c/code\u003e, but checks for operations that would block.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1RetryMayBlock",
          "package": "haskell2010",
          "signature": "String -\u003e IO a -\u003e IO b -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1Retry but checks for operations that would block",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1RetryMayBlock",
          "normalized": "String-\u003eIO a-\u003eIO b-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno If Minus Retry May Block",
          "signature": "String-\u003eIO a-\u003eIO b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfMinus1RetryMayBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1RetryMayBlock\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1RetryMayBlock_",
          "package": "haskell2010",
          "signature": "String -\u003e IO a -\u003e IO b -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1RetryMayBlock but discards the result",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1RetryMayBlock_",
          "normalized": "String-\u003eIO a-\u003eIO b-\u003eIO()",
          "package": "haskell2010",
          "partial": "Errno If Minus Retry May Block",
          "signature": "String-\u003eIO a-\u003eIO b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfMinus1RetryMayBlock_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1Retry_",
          "package": "haskell2010",
          "signature": "String -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1 but discards the result",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1Retry_",
          "normalized": "String-\u003eIO a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Errno If Minus Retry",
          "signature": "String-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfMinus1Retry_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1_",
          "package": "haskell2010",
          "signature": "String -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1 but discards the result",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfMinus1_",
          "normalized": "String-\u003eIO a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Errno If Minus",
          "signature": "String-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfMinus1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e corresponding to the current value of \u003ccode\u003e\u003ca\u003egetErrno\u003c/a\u003e\u003c/code\u003e\n if the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action returns \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfNull",
          "package": "haskell2010",
          "signature": "String -\u003e IO (Ptr a) -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Throw an IOError corresponding to the current value of getErrno if the IO action returns nullPtr",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfNull",
          "normalized": "String-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Errno If Null",
          "signature": "String-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e corresponding to the current value of \u003ccode\u003e\u003ca\u003egetErrno\u003c/a\u003e\u003c/code\u003e\n if the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action returns \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e,\n but retry in case of an interrupted operation.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfNullRetry",
          "package": "haskell2010",
          "signature": "String -\u003e IO (Ptr a) -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Throw an IOError corresponding to the current value of getErrno if the IO action returns nullPtr but retry in case of an interrupted operation",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfNullRetry",
          "normalized": "String-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Errno If Null Retry",
          "signature": "String-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfNullRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfNullRetry\u003c/a\u003e\u003c/code\u003e, but checks for operations that would block.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfNullRetryMayBlock",
          "package": "haskell2010",
          "signature": "String -\u003e IO (Ptr a) -\u003e IO b -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfNullRetry but checks for operations that would block",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfNullRetryMayBlock",
          "normalized": "String-\u003eIO(Ptr a)-\u003eIO b-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Errno If Null Retry May Block",
          "signature": "String-\u003eIO(Ptr a)-\u003eIO b-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfNullRetryMayBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIf\u003c/a\u003e\u003c/code\u003e, but retry the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action when it yields the\n error code \u003ccode\u003e\u003ca\u003eeINTR\u003c/a\u003e\u003c/code\u003e - this amounts to the standard retry loop for\n interrupted POSIX system calls.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfRetry",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIf but retry the IO action when it yields the error code eINTR this amounts to the standard retry loop for interrupted POSIX system calls",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfRetry",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno If Retry",
          "signature": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfRetry\u003c/a\u003e\u003c/code\u003e, but additionally if the operation \n yields the error code \u003ccode\u003e\u003ca\u003eeAGAIN\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eeWOULDBLOCK\u003c/a\u003e\u003c/code\u003e, an alternative\n action is executed before retrying.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfRetryMayBlock",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool)-\u003e String-\u003e IO a-\u003e IO b-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfRetry but additionally if the operation yields the error code eAGAIN or eWOULDBLOCK an alternative action is executed before retrying",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfRetryMayBlock",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO b-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno If Retry May Block",
          "signature": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfRetryMayBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfRetryMayBlock\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfRetryMayBlock_",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e IO a -\u003e IO b -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfRetryMayBlock but discards the result",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfRetryMayBlock_",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO b-\u003eIO()",
          "package": "haskell2010",
          "partial": "Errno If Retry May Block",
          "signature": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfRetryMayBlock_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfRetry\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfRetry_",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfRetry but discards the result",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIfRetry_",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Errno If Retry",
          "signature": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIfRetry_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIf\u003c/a\u003e\u003c/code\u003e, but discards the result of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action after\n error handling.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIf_",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIf but discards the result of the IO action after error handling",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoIf_",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Errno If",
          "signature": "(a-\u003eBool)-\u003eString-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoIf_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrno\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when appropriate.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPath",
          "package": "haskell2010",
          "signature": "String -\u003e FilePath -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "as throwErrno but exceptions include the given path when appropriate",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPath",
          "normalized": "String-\u003eFilePath-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno Path",
          "signature": "String-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIf\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIf",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e FilePath -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIf but exceptions include the given path when appropriate",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIf",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno Path If",
          "signature": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoPathIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIfMinus1",
          "package": "haskell2010",
          "signature": "String -\u003e FilePath -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1 but exceptions include the given path when appropriate",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIfMinus1",
          "normalized": "String-\u003eFilePath-\u003eIO a-\u003eIO a",
          "package": "haskell2010",
          "partial": "Errno Path If Minus",
          "signature": "String-\u003eFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoPathIfMinus1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1_\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIfMinus1_",
          "package": "haskell2010",
          "signature": "String -\u003e FilePath -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1 but exceptions include the given path when appropriate",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIfMinus1_",
          "normalized": "String-\u003eFilePath-\u003eIO a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Errno Path If Minus",
          "signature": "String-\u003eFilePath-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoPathIfMinus1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfNull\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIfNull",
          "package": "haskell2010",
          "signature": "String -\u003e FilePath -\u003e IO (Ptr a) -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfNull but exceptions include the given path when appropriate",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIfNull",
          "normalized": "String-\u003eFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Errno Path If Null",
          "signature": "String-\u003eFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoPathIfNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIf_\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIf_",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e FilePath -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIf but exceptions include the given path when appropriate",
          "hierarchy": "Foreign C Error",
          "module": "Foreign.C.Error",
          "name": "throwErrnoPathIf_",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Errno Path If",
          "signature": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Error.html#v:throwErrnoPathIf_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for primitive marshalling of C strings.\n\u003c/p\u003e\u003cp\u003eThe marshalling converts each Haskell character, representing a Unicode\n code point, to one or more bytes in a manner that, by default, is\n determined by the current locale.  As a consequence, no guarantees\n can be made about the relative length of a Haskell string and its\n corresponding C string, and therefore all the marshalling routines\n include memory allocation.  The translation between Unicode and the\n encoding of the current locale may be lossy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.C.String",
          "name": "String",
          "package": "haskell2010",
          "source": "src/Foreign-C-String.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for primitive marshalling of strings The marshalling converts each Haskell character representing Unicode code point to one or more bytes in manner that by default is determined by the current locale As consequence no guarantees can be made about the relative length of Haskell string and its corresponding string and therefore all the marshalling routines include memory allocation The translation between Unicode and the encoding of the current locale may be lossy",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "String",
          "package": "haskell2010",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA C string is a reference to an array of C characters terminated by NUL.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "CString",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "string is reference to an array of characters terminated by NUL",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "CString",
          "package": "haskell2010",
          "partial": "CString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#t:CString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string with explicit length information in bytes instead of a\n terminating NUL (allowing NUL characters in the middle of the string).\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "CStringLen",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "string with explicit length information in bytes instead of terminating NUL allowing NUL characters in the middle of the string",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "CStringLen",
          "package": "haskell2010",
          "partial": "CString Len",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#t:CStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA C wide string is a reference to an array of C wide characters\n terminated by NUL.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "CWString",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "wide string is reference to an array of wide characters terminated by NUL",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "CWString",
          "package": "haskell2010",
          "partial": "CWString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#t:CWString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wide character string with explicit length information in \u003ccode\u003e\u003ca\u003eCWchar\u003c/a\u003e\u003c/code\u003es\n instead of a terminating NUL (allowing NUL characters in the middle\n of the string).\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "CWStringLen",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "wide character string with explicit length information in CWchar instead of terminating NUL allowing NUL characters in the middle of the string",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "CWStringLen",
          "package": "haskell2010",
          "partial": "CWString Len",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#t:CWStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a C byte, representing a Latin-1 character, to the corresponding\n Haskell character.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "castCCharToChar",
          "package": "haskell2010",
          "signature": "CChar -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert byte representing Latin-1 character to the corresponding Haskell character",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "castCCharToChar",
          "normalized": "CChar-\u003eChar",
          "package": "haskell2010",
          "partial": "CChar To Char",
          "signature": "CChar-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:castCCharToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a C \u003ccode\u003esigned char\u003c/code\u003e, representing a Latin-1 character, to the\n corresponding Haskell character.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "castCSCharToChar",
          "package": "haskell2010",
          "signature": "CSChar -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert signed char representing Latin-1 character to the corresponding Haskell character",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "castCSCharToChar",
          "normalized": "CSChar-\u003eChar",
          "package": "haskell2010",
          "partial": "CSChar To Char",
          "signature": "CSChar-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:castCSCharToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a C \u003ccode\u003eunsigned char\u003c/code\u003e, representing a Latin-1 character, to\n the corresponding Haskell character.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "castCUCharToChar",
          "package": "haskell2010",
          "signature": "CUChar -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert unsigned char representing Latin-1 character to the corresponding Haskell character",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "castCUCharToChar",
          "normalized": "CUChar-\u003eChar",
          "package": "haskell2010",
          "partial": "CUChar To Char",
          "signature": "CUChar-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:castCUCharToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell character to a C character.\n This function is only safe on the first 256 characters.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "castCharToCChar",
          "package": "haskell2010",
          "signature": "Char -\u003e CChar",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell character to character This function is only safe on the first characters",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "castCharToCChar",
          "normalized": "Char-\u003eCChar",
          "package": "haskell2010",
          "partial": "Char To CChar",
          "signature": "Char-\u003eCChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:castCharToCChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell character to a C \u003ccode\u003esigned char\u003c/code\u003e.\n This function is only safe on the first 256 characters.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "castCharToCSChar",
          "package": "haskell2010",
          "signature": "Char -\u003e CSChar",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell character to signed char This function is only safe on the first characters",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "castCharToCSChar",
          "normalized": "Char-\u003eCSChar",
          "package": "haskell2010",
          "partial": "Char To CSChar",
          "signature": "Char-\u003eCSChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:castCharToCSChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell character to a C \u003ccode\u003eunsigned char\u003c/code\u003e.\n This function is only safe on the first 256 characters.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "castCharToCUChar",
          "package": "haskell2010",
          "signature": "Char -\u003e CUChar",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell character to unsigned char This function is only safe on the first characters",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "castCharToCUChar",
          "normalized": "Char-\u003eCUChar",
          "package": "haskell2010",
          "partial": "Char To CUChar",
          "signature": "Char-\u003eCUChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:castCharToCUChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.String",
          "name": "charIsRepresentable",
          "package": "haskell2010",
          "signature": "Char -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "charIsRepresentable",
          "normalized": "Char-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Is Representable",
          "signature": "Char-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:charIsRepresentable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/li\u003e\u003cli\u003e new storage is allocated for the C string and must be\n   explicitly freed using \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003efinalizerFree\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "newCAString",
          "package": "haskell2010",
          "signature": "String -\u003e IO CString",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated string the Haskell string may not contain any NUL characters new storage is allocated for the string and must be explicitly freed using free or finalizerFree",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "newCAString",
          "normalized": "String-\u003eIO CString",
          "package": "haskell2010",
          "partial": "CAString",
          "signature": "String-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:newCAString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C string (ie, character array) with\n explicit length information.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e new storage is allocated for the C string and must be\n   explicitly freed using \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003efinalizerFree\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "newCAStringLen",
          "package": "haskell2010",
          "signature": "String -\u003e IO CStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into string ie character array with explicit length information new storage is allocated for the string and must be explicitly freed using free or finalizerFree",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "newCAStringLen",
          "normalized": "String-\u003eIO CStringLen",
          "package": "haskell2010",
          "partial": "CAString Len",
          "signature": "String-\u003eIO CStringLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:newCAStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/li\u003e\u003cli\u003e new storage is allocated for the C string and must be\n   explicitly freed using \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003efinalizerFree\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "newCString",
          "package": "haskell2010",
          "signature": "String -\u003e IO CString",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated string the Haskell string may not contain any NUL characters new storage is allocated for the string and must be explicitly freed using free or finalizerFree",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "newCString",
          "normalized": "String-\u003eIO CString",
          "package": "haskell2010",
          "partial": "CString",
          "signature": "String-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:newCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C string (ie, character array) with\n explicit length information.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e new storage is allocated for the C string and must be\n   explicitly freed using \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003efinalizerFree\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "newCStringLen",
          "package": "haskell2010",
          "signature": "String -\u003e IO CStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into string ie character array with explicit length information new storage is allocated for the string and must be explicitly freed using free or finalizerFree",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "newCStringLen",
          "normalized": "String-\u003eIO CStringLen",
          "package": "haskell2010",
          "partial": "CString Len",
          "signature": "String-\u003eIO CStringLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:newCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C wide string.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/li\u003e\u003cli\u003e new storage is allocated for the C wide string and must\n   be explicitly freed using \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003efinalizerFree\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "newCWString",
          "package": "haskell2010",
          "signature": "String -\u003e IO CWString",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated wide string the Haskell string may not contain any NUL characters new storage is allocated for the wide string and must be explicitly freed using free or finalizerFree",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "newCWString",
          "normalized": "String-\u003eIO CWString",
          "package": "haskell2010",
          "partial": "CWString",
          "signature": "String-\u003eIO CWString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:newCWString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C wide string (ie, wide character array)\n with explicit length information.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e new storage is allocated for the C wide string and must\n   be explicitly freed using \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003efinalizerFree\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "newCWStringLen",
          "package": "haskell2010",
          "signature": "String -\u003e IO CWStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into wide string ie wide character array with explicit length information new storage is allocated for the wide string and must be explicitly freed using free or finalizerFree",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "newCWStringLen",
          "normalized": "String-\u003eIO CWStringLen",
          "package": "haskell2010",
          "partial": "CWString Len",
          "signature": "String-\u003eIO CWStringLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:newCWStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a NUL terminated C string into a Haskell string.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "peekCAString",
          "package": "haskell2010",
          "signature": "CString -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Marshal NUL terminated string into Haskell string",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "peekCAString",
          "normalized": "CString-\u003eIO String",
          "package": "haskell2010",
          "partial": "CAString",
          "signature": "CString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:peekCAString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a C string with explicit length into a Haskell string.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "peekCAStringLen",
          "package": "haskell2010",
          "signature": "CStringLen -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Marshal string with explicit length into Haskell string",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "peekCAStringLen",
          "normalized": "CStringLen-\u003eIO String",
          "package": "haskell2010",
          "partial": "CAString Len",
          "signature": "CStringLen-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:peekCAStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a NUL terminated C string into a Haskell string.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "peekCString",
          "package": "haskell2010",
          "signature": "CString -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Marshal NUL terminated string into Haskell string",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "peekCString",
          "normalized": "CString-\u003eIO String",
          "package": "haskell2010",
          "partial": "CString",
          "signature": "CString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:peekCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a C string with explicit length into a Haskell string.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "peekCStringLen",
          "package": "haskell2010",
          "signature": "CStringLen -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Marshal string with explicit length into Haskell string",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "peekCStringLen",
          "normalized": "CStringLen-\u003eIO String",
          "package": "haskell2010",
          "partial": "CString Len",
          "signature": "CStringLen-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:peekCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a NUL terminated C wide string into a Haskell string.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "peekCWString",
          "package": "haskell2010",
          "signature": "CWString -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Marshal NUL terminated wide string into Haskell string",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "peekCWString",
          "normalized": "CWString-\u003eIO String",
          "package": "haskell2010",
          "partial": "CWString",
          "signature": "CWString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:peekCWString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a C wide string with explicit length into a Haskell string.\n\u003c/p\u003e",
          "module": "Foreign.C.String",
          "name": "peekCWStringLen",
          "package": "haskell2010",
          "signature": "CWStringLen -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Marshal wide string with explicit length into Haskell string",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "peekCWStringLen",
          "normalized": "CWStringLen-\u003eIO String",
          "package": "haskell2010",
          "partial": "CWString Len",
          "signature": "CWStringLen-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:peekCWStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C string using temporary\n storage.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/li\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either\n   normally or via an exception), so the pointer to the temporary\n   storage must \u003cem\u003enot\u003c/em\u003e be used after this.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "withCAString",
          "package": "haskell2010",
          "signature": "String -\u003e (CString -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated string using temporary storage the Haskell string may not contain any NUL characters the memory is freed when the subcomputation terminates either normally or via an exception so the pointer to the temporary storage must not be used after this",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "withCAString",
          "normalized": "String-\u003e(CString-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "partial": "CAString",
          "signature": "String-\u003e(CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:withCAString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C string (ie, character array)\n in temporary storage, with explicit length information.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either\n   normally or via an exception), so the pointer to the temporary\n   storage must \u003cem\u003enot\u003c/em\u003e be used after this.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "withCAStringLen",
          "package": "haskell2010",
          "signature": "String -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into string ie character array in temporary storage with explicit length information the memory is freed when the subcomputation terminates either normally or via an exception so the pointer to the temporary storage must not be used after this",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "withCAStringLen",
          "normalized": "String-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "partial": "CAString Len",
          "signature": "String-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:withCAStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C string using temporary\n storage.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/li\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either\n   normally or via an exception), so the pointer to the temporary\n   storage must \u003cem\u003enot\u003c/em\u003e be used after this.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "withCString",
          "package": "haskell2010",
          "signature": "String -\u003e (CString -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated string using temporary storage the Haskell string may not contain any NUL characters the memory is freed when the subcomputation terminates either normally or via an exception so the pointer to the temporary storage must not be used after this",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "withCString",
          "normalized": "String-\u003e(CString-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "partial": "CString",
          "signature": "String-\u003e(CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:withCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C string (ie, character array)\n in temporary storage, with explicit length information.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either\n   normally or via an exception), so the pointer to the temporary\n   storage must \u003cem\u003enot\u003c/em\u003e be used after this.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "withCStringLen",
          "package": "haskell2010",
          "signature": "String -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into string ie character array in temporary storage with explicit length information the memory is freed when the subcomputation terminates either normally or via an exception so the pointer to the temporary storage must not be used after this",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "withCStringLen",
          "normalized": "String-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "partial": "CString Len",
          "signature": "String-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:withCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C wide string using\n temporary storage.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/li\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either\n   normally or via an exception), so the pointer to the temporary\n   storage must \u003cem\u003enot\u003c/em\u003e be used after this.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "withCWString",
          "package": "haskell2010",
          "signature": "String -\u003e (CWString -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated wide string using temporary storage the Haskell string may not contain any NUL characters the memory is freed when the subcomputation terminates either normally or via an exception so the pointer to the temporary storage must not be used after this",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "withCWString",
          "normalized": "String-\u003e(CWString-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "partial": "CWString",
          "signature": "String-\u003e(CWString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:withCWString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C wide string (i.e. wide\n character array) in temporary storage, with explicit length\n information.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either\n   normally or via an exception), so the pointer to the temporary\n   storage must \u003cem\u003enot\u003c/em\u003e be used after this.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.C.String",
          "name": "withCWStringLen",
          "package": "haskell2010",
          "signature": "String -\u003e (CWStringLen -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into wide string i.e wide character array in temporary storage with explicit length information the memory is freed when the subcomputation terminates either normally or via an exception so the pointer to the temporary storage must not be used after this",
          "hierarchy": "Foreign C String",
          "module": "Foreign.C.String",
          "name": "withCWStringLen",
          "normalized": "String-\u003e(CWStringLen-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "partial": "CWString Len",
          "signature": "String-\u003e(CWStringLen-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-String.html#v:withCWStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Types",
          "name": "Types",
          "package": "haskell2010",
          "source": "src/Foreign-C-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "Types",
          "package": "haskell2010",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003echar\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CChar",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the char type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CChar",
          "package": "haskell2010",
          "partial": "CChar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eclock_t\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CClock",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the clock type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CClock",
          "package": "haskell2010",
          "partial": "CClock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003edouble\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CDouble",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the double type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CDouble",
          "package": "haskell2010",
          "partial": "CDouble",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eFILE\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CFile",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the FILE type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CFile",
          "package": "haskell2010",
          "partial": "CFile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003efloat\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CFloat",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the float type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CFloat",
          "package": "haskell2010",
          "partial": "CFloat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003efpos_t\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CFpos",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the fpos type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CFpos",
          "package": "haskell2010",
          "partial": "CFpos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CFpos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eint\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CInt",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the int type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CInt",
          "package": "haskell2010",
          "partial": "CInt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Types",
          "name": "CIntMax",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CIntMax",
          "package": "haskell2010",
          "partial": "CInt Max",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CIntMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Types",
          "name": "CIntPtr",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CIntPtr",
          "package": "haskell2010",
          "partial": "CInt Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CIntPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003ejmp_buf\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CJmpBuf",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the jmp buf type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CJmpBuf",
          "package": "haskell2010",
          "partial": "CJmp Buf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CJmpBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003elong long\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CLLong",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the long long type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CLLong",
          "package": "haskell2010",
          "partial": "CLLong",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CLLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003elong\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CLong",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the long type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CLong",
          "package": "haskell2010",
          "partial": "CLong",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eptrdiff_t\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CPtrdiff",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the ptrdiff type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CPtrdiff",
          "package": "haskell2010",
          "partial": "CPtrdiff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CPtrdiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003esigned char\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CSChar",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the signed char type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CSChar",
          "package": "haskell2010",
          "partial": "CSChar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CSChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eshort\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CShort",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the short type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CShort",
          "package": "haskell2010",
          "partial": "CShort",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003esig_atomic_t\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CSigAtomic",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the sig atomic type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CSigAtomic",
          "package": "haskell2010",
          "partial": "CSig Atomic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CSigAtomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003esize_t\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CSize",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the size type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CSize",
          "package": "haskell2010",
          "partial": "CSize",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003etime_t\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CTime",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the time type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CTime",
          "package": "haskell2010",
          "partial": "CTime",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned char\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CUChar",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the unsigned char type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CUChar",
          "package": "haskell2010",
          "partial": "CUChar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CUChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned int\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CUInt",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the unsigned int type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CUInt",
          "package": "haskell2010",
          "partial": "CUInt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Types",
          "name": "CUIntMax",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CUIntMax",
          "package": "haskell2010",
          "partial": "CUInt Max",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CUIntMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Types",
          "name": "CUIntPtr",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CUIntPtr",
          "package": "haskell2010",
          "partial": "CUInt Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CUIntPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned long long\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CULLong",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the unsigned long long type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CULLong",
          "package": "haskell2010",
          "partial": "CULLong",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CULLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned long\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CULong",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the unsigned long type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CULong",
          "package": "haskell2010",
          "partial": "CULong",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CULong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned short\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CUShort",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the unsigned short type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CUShort",
          "package": "haskell2010",
          "partial": "CUShort",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CUShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell type representing the C \u003ccode\u003ewchar_t\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Foreign.C.Types",
          "name": "CWchar",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell type representing the wchar type",
          "hierarchy": "Foreign C Types",
          "module": "Foreign.C.Types",
          "name": "CWchar",
          "package": "haskell2010",
          "partial": "CWchar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C-Types.html#t:CWchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C",
          "name": "C",
          "package": "haskell2010",
          "source": "src/Foreign-C.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign C",
          "module": "Foreign.C",
          "name": "C",
          "package": "haskell2010",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-C.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr",
          "name": "ForeignPtr",
          "package": "haskell2010",
          "source": "src/Foreign-ForeignPtr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "ForeignPtr",
          "package": "haskell2010",
          "partial": "Foreign Ptr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr",
          "name": "FinalizerEnvPtr",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "FinalizerEnvPtr",
          "package": "haskell2010",
          "partial": "Finalizer Env Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#t:FinalizerEnvPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA finalizer is represented as a pointer to a foreign function that, at\n finalisation time, gets as an argument a plain pointer variant of the\n foreign pointer that the finalizer is associated with.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "FinalizerPtr",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "finalizer is represented as pointer to foreign function that at finalisation time gets as an argument plain pointer variant of the foreign pointer that the finalizer is associated with",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "FinalizerPtr",
          "package": "haskell2010",
          "partial": "Finalizer Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#t:FinalizerPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e represents references to objects that are\n maintained in a foreign language, i.e., that are not part of the\n data structures usually managed by the Haskell storage manager.\n The essential difference between \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003es and vanilla memory\n references of type \u003ccode\u003ePtr a\u003c/code\u003e is that the former may be associated\n with \u003cem\u003efinalizers\u003c/em\u003e. A finalizer is a routine that is invoked when\n the Haskell storage manager detects that - within the Haskell heap\n and stack - there are no more references left that are pointing to\n the \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e.  Typically, the finalizer will, then, invoke\n routines in the foreign language that free the resources bound by\n the foreign object.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e is parameterised in the same way as \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e.  The\n type argument of \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e should normally be an instance of\n class \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "ForeignPtr",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "The type ForeignPtr represents references to objects that are maintained in foreign language i.e that are not part of the data structures usually managed by the Haskell storage manager The essential difference between ForeignPtr and vanilla memory references of type Ptr is that the former may be associated with finalizers finalizer is routine that is invoked when the Haskell storage manager detects that within the Haskell heap and stack there are no more references left that are pointing to the ForeignPtr Typically the finalizer will then invoke routines in the foreign language that free the resources bound by the foreign object The ForeignPtr is parameterised in the same way as Ptr The type argument of ForeignPtr should normally be an instance of class Storable",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "ForeignPtr",
          "package": "haskell2010",
          "partial": "Foreign Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#t:ForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function adds a finalizer to the given foreign object.  The\n finalizer will run \u003cem\u003ebefore\u003c/em\u003e all other finalizers for the same\n object which have already been registered.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "addForeignPtrFinalizer",
          "package": "haskell2010",
          "signature": "FinalizerPtr a -\u003e ForeignPtr a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "This function adds finalizer to the given foreign object The finalizer will run before all other finalizers for the same object which have already been registered",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "addForeignPtrFinalizer",
          "normalized": "FinalizerPtr a-\u003eForeignPtr a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Foreign Ptr Finalizer",
          "signature": "FinalizerPtr a-\u003eForeignPtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:addForeignPtrFinalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eaddForeignPtrFinalizerEnv\u003c/a\u003e\u003c/code\u003e but allows the finalizer to be\n passed an additional environment parameter to be passed to the\n finalizer.  The environment passed to the finalizer is fixed by the\n second argument to \u003ccode\u003e\u003ca\u003eaddForeignPtrFinalizerEnv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "addForeignPtrFinalizerEnv",
          "package": "haskell2010",
          "signature": "FinalizerEnvPtr env a -\u003e Ptr env -\u003e ForeignPtr a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like addForeignPtrFinalizerEnv but allows the finalizer to be passed an additional environment parameter to be passed to the finalizer The environment passed to the finalizer is fixed by the second argument to addForeignPtrFinalizerEnv",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "addForeignPtrFinalizerEnv",
          "normalized": "FinalizerEnvPtr a b-\u003ePtr a-\u003eForeignPtr b-\u003eIO()",
          "package": "haskell2010",
          "partial": "Foreign Ptr Finalizer Env",
          "signature": "FinalizerEnvPtr env a-\u003ePtr env-\u003eForeignPtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:addForeignPtrFinalizerEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function casts a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e\n parameterised by one type into another type.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "castForeignPtr",
          "package": "haskell2010",
          "signature": "ForeignPtr a -\u003e ForeignPtr b",
          "type": "function"
        },
        "index": {
          "description": "This function casts ForeignPtr parameterised by one type into another type",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "castForeignPtr",
          "normalized": "ForeignPtr a-\u003eForeignPtr b",
          "package": "haskell2010",
          "partial": "Foreign Ptr",
          "signature": "ForeignPtr a-\u003eForeignPtr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:castForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauses the finalizers associated with a foreign pointer to be run\n immediately.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "finalizeForeignPtr",
          "package": "haskell2010",
          "signature": "ForeignPtr a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Causes the finalizers associated with foreign pointer to be run immediately",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "finalizeForeignPtr",
          "normalized": "ForeignPtr a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Foreign Ptr",
          "signature": "ForeignPtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:finalizeForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate some memory and return a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e to it.  The memory\n will be released automatically when the \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e is discarded.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emallocForeignPtr\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e    do { p \u003c- malloc; newForeignPtr finalizerFree p }\n\u003c/pre\u003e\u003cp\u003ealthough it may be implemented differently internally: you may not\n assume that the memory returned by \u003ccode\u003e\u003ca\u003emallocForeignPtr\u003c/a\u003e\u003c/code\u003e has been\n allocated with \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "mallocForeignPtr",
          "package": "haskell2010",
          "signature": "IO (ForeignPtr a)",
          "source": "src/Foreign-ForeignPtr.html#mallocForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "Allocate some memory and return ForeignPtr to it The memory will be released automatically when the ForeignPtr is discarded mallocForeignPtr is equivalent to do malloc newForeignPtr finalizerFree although it may be implemented differently internally you may not assume that the memory returned by mallocForeignPtr has been allocated with malloc",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "mallocForeignPtr",
          "package": "haskell2010",
          "partial": "Foreign Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:mallocForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is similar to \u003ccode\u003e\u003ca\u003emallocArray\u003c/a\u003e\u003c/code\u003e,\n but yields a memory area that has a finalizer attached that releases\n the memory area.  As with \u003ccode\u003e\u003ca\u003emallocForeignPtr\u003c/a\u003e\u003c/code\u003e, it is not guaranteed that\n the block of memory was allocated by \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "mallocForeignPtrArray",
          "package": "haskell2010",
          "signature": "Int -\u003e IO (ForeignPtr a)",
          "type": "function"
        },
        "index": {
          "description": "This function is similar to mallocArray but yields memory area that has finalizer attached that releases the memory area As with mallocForeignPtr it is not guaranteed that the block of memory was allocated by malloc",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "mallocForeignPtrArray",
          "normalized": "Int-\u003eIO(ForeignPtr a)",
          "package": "haskell2010",
          "partial": "Foreign Ptr Array",
          "signature": "Int-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:mallocForeignPtrArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is similar to \u003ccode\u003e\u003ca\u003emallocArray0\u003c/a\u003e\u003c/code\u003e,\n but yields a memory area that has a finalizer attached that releases\n the memory area.  As with \u003ccode\u003e\u003ca\u003emallocForeignPtr\u003c/a\u003e\u003c/code\u003e, it is not guaranteed that\n the block of memory was allocated by \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "mallocForeignPtrArray0",
          "package": "haskell2010",
          "signature": "Int -\u003e IO (ForeignPtr a)",
          "type": "function"
        },
        "index": {
          "description": "This function is similar to mallocArray0 but yields memory area that has finalizer attached that releases the memory area As with mallocForeignPtr it is not guaranteed that the block of memory was allocated by malloc",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "mallocForeignPtrArray0",
          "normalized": "Int-\u003eIO(ForeignPtr a)",
          "package": "haskell2010",
          "partial": "Foreign Ptr Array",
          "signature": "Int-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:mallocForeignPtrArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is similar to \u003ccode\u003e\u003ca\u003emallocForeignPtr\u003c/a\u003e\u003c/code\u003e, except that the\n size of the memory required is given explicitly as a number of bytes.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "mallocForeignPtrBytes",
          "package": "haskell2010",
          "signature": "Int -\u003e IO (ForeignPtr a)",
          "type": "function"
        },
        "index": {
          "description": "This function is similar to mallocForeignPtr except that the size of the memory required is given explicitly as number of bytes",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "mallocForeignPtrBytes",
          "normalized": "Int-\u003eIO(ForeignPtr a)",
          "package": "haskell2010",
          "partial": "Foreign Ptr Bytes",
          "signature": "Int-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:mallocForeignPtrBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a plain memory reference into a foreign pointer, and\n associates a finalizer with the reference.  The finalizer will be\n executed after the last reference to the foreign object is dropped.\n There is no guarantee of promptness, however the finalizer will be\n executed before the program exits.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "newForeignPtr",
          "package": "haskell2010",
          "signature": "FinalizerPtr a -\u003e Ptr a -\u003e IO (ForeignPtr a)",
          "type": "function"
        },
        "index": {
          "description": "Turns plain memory reference into foreign pointer and associates finalizer with the reference The finalizer will be executed after the last reference to the foreign object is dropped There is no guarantee of promptness however the finalizer will be executed before the program exits",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "newForeignPtr",
          "normalized": "FinalizerPtr a-\u003ePtr a-\u003eIO(ForeignPtr a)",
          "package": "haskell2010",
          "partial": "Foreign Ptr",
          "signature": "FinalizerPtr a-\u003ePtr a-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:newForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis variant of \u003ccode\u003e\u003ca\u003enewForeignPtr\u003c/a\u003e\u003c/code\u003e adds a finalizer that expects an\n environment in addition to the finalized pointer.  The environment\n that will be passed to the finalizer is fixed by the second argument to\n \u003ccode\u003e\u003ca\u003enewForeignPtrEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "newForeignPtrEnv",
          "package": "haskell2010",
          "signature": "FinalizerEnvPtr env a -\u003e Ptr env -\u003e Ptr a -\u003e IO (ForeignPtr a)",
          "type": "function"
        },
        "index": {
          "description": "This variant of newForeignPtr adds finalizer that expects an environment in addition to the finalized pointer The environment that will be passed to the finalizer is fixed by the second argument to newForeignPtrEnv",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "newForeignPtrEnv",
          "normalized": "FinalizerEnvPtr a b-\u003ePtr a-\u003ePtr b-\u003eIO(ForeignPtr b)",
          "package": "haskell2010",
          "partial": "Foreign Ptr Env",
          "signature": "FinalizerEnvPtr env a-\u003ePtr env-\u003ePtr a-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:newForeignPtrEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a plain memory reference into a foreign pointer that may be\n associated with finalizers by using \u003ccode\u003e\u003ca\u003eaddForeignPtrFinalizer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "newForeignPtr_",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e IO (ForeignPtr a)",
          "type": "function"
        },
        "index": {
          "description": "Turns plain memory reference into foreign pointer that may be associated with finalizers by using addForeignPtrFinalizer",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "newForeignPtr_",
          "normalized": "Ptr a-\u003eIO(ForeignPtr a)",
          "package": "haskell2010",
          "partial": "Foreign Ptr",
          "signature": "Ptr a-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:newForeignPtr_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function ensures that the foreign object in\n question is alive at the given place in the sequence of IO\n actions. In particular \u003ccode\u003e\u003ca\u003ewithForeignPtr\u003c/a\u003e\u003c/code\u003e\n does a \u003ccode\u003e\u003ca\u003etouchForeignPtr\u003c/a\u003e\u003c/code\u003e after it\n executes the user action.\n\u003c/p\u003e\u003cp\u003eNote that this function should not be used to express dependencies\n between finalizers on \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003es.  For example, if the finalizer\n for a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eF1\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003etouchForeignPtr\u003c/a\u003e\u003c/code\u003e on a second\n \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eF2\u003c/code\u003e, then the only guarantee is that the finalizer\n for \u003ccode\u003eF2\u003c/code\u003e is never started before the finalizer for \u003ccode\u003eF1\u003c/code\u003e.  They\n might be started together if for example both \u003ccode\u003eF1\u003c/code\u003e and \u003ccode\u003eF2\u003c/code\u003e are\n otherwise unreachable.\n\u003c/p\u003e\u003cp\u003eIn general, it is not recommended to use finalizers on separate\n objects with ordering constraints between them.  To express the\n ordering robustly requires explicit synchronisation between\n finalizers.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "touchForeignPtr",
          "package": "haskell2010",
          "signature": "ForeignPtr a -\u003e IO ()",
          "source": "src/Foreign-ForeignPtr.html#touchForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "This function ensures that the foreign object in question is alive at the given place in the sequence of IO actions In particular withForeignPtr does touchForeignPtr after it executes the user action Note that this function should not be used to express dependencies between finalizers on ForeignPtr For example if the finalizer for ForeignPtr F1 calls touchForeignPtr on second ForeignPtr F2 then the only guarantee is that the finalizer for F2 is never started before the finalizer for F1 They might be started together if for example both F1 and F2 are otherwise unreachable In general it is not recommended to use finalizers on separate objects with ordering constraints between them To express the ordering robustly requires explicit synchronisation between finalizers",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "touchForeignPtr",
          "normalized": "ForeignPtr a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Foreign Ptr",
          "signature": "ForeignPtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:touchForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr",
          "name": "unsafeForeignPtrToPtr",
          "package": "haskell2010",
          "signature": "ForeignPtr a -\u003e Ptr a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "unsafeForeignPtrToPtr",
          "normalized": "ForeignPtr a-\u003ePtr a",
          "package": "haskell2010",
          "partial": "Foreign Ptr To Ptr",
          "signature": "ForeignPtr a-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:unsafeForeignPtrToPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a way to look at the pointer living inside a\n foreign object.  This function takes a function which is\n applied to that pointer. The resulting \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is then\n executed. The foreign object is kept alive at least during\n the whole action, even if it is not used directly\n inside. Note that it is not safe to return the pointer from\n the action and use it after the action completes. All uses\n of the pointer should be inside the\n \u003ccode\u003e\u003ca\u003ewithForeignPtr\u003c/a\u003e\u003c/code\u003e bracket.  The reason for\n this unsafeness is the same as for\n \u003ccode\u003e\u003ca\u003eunsafeForeignPtrToPtr\u003c/a\u003e\u003c/code\u003e below: the finalizer\n may run earlier than expected, because the compiler can only\n track usage of the \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e object, not\n a \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e object made from it.\n\u003c/p\u003e\u003cp\u003eThis function is normally used for marshalling data to\n or from the object pointed to by the\n \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e, using the operations from the\n \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr",
          "name": "withForeignPtr",
          "package": "haskell2010",
          "signature": "ForeignPtr a -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "This is way to look at the pointer living inside foreign object This function takes function which is applied to that pointer The resulting IO action is then executed The foreign object is kept alive at least during the whole action even if it is not used directly inside Note that it is not safe to return the pointer from the action and use it after the action completes All uses of the pointer should be inside the withForeignPtr bracket The reason for this unsafeness is the same as for unsafeForeignPtrToPtr below the finalizer may run earlier than expected because the compiler can only track usage of the ForeignPtr object not Ptr object made from it This function is normally used for marshalling data to or from the object pointed to by the ForeignPtr using the operations from the Storable class",
          "hierarchy": "Foreign ForeignPtr",
          "module": "Foreign.ForeignPtr",
          "name": "withForeignPtr",
          "normalized": "ForeignPtr a-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "partial": "Foreign Ptr",
          "signature": "ForeignPtr a-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-ForeignPtr.html#v:withForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module \u003ca\u003eForeign.Marshal.Alloc\u003c/a\u003e provides operations to allocate and\ndeallocate blocks of raw memory (i.e., unstructured chunks of memory\noutside of the area maintained by the Haskell storage manager).  These\nmemory blocks are commonly used to pass compound data structures to\nforeign functions or to provide space in which compound result values\nare obtained from foreign functions.\n\u003c/p\u003e\u003cp\u003eIf any of the allocation functions fails, a value of \u003ccode\u003enullPtr\u003c/code\u003e is\nproduced.  If \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ereallocBytes\u003c/a\u003e\u003c/code\u003e is applied to a memory area\nthat has been allocated with \u003ccode\u003e\u003ca\u003ealloca\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eallocaBytes\u003c/a\u003e\u003c/code\u003e, the\nbehaviour is undefined.  Any further access to memory areas allocated with\n\u003ccode\u003e\u003ca\u003ealloca\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eallocaBytes\u003c/a\u003e\u003c/code\u003e, after the computation that was passed to\nthe allocation function has terminated, leads to undefined behaviour.  Any\nfurther access to the memory area referenced by a pointer passed to\n\u003ccode\u003e\u003ca\u003erealloc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereallocBytes\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e entails undefined\nbehaviour.\n\u003c/p\u003e\u003cp\u003eAll storage allocated by functions that allocate based on a \u003cem\u003esize in bytes\u003c/em\u003e\nmust be sufficiently aligned for any of the basic foreign types\nthat fits into the newly allocated storage. All storage allocated by\nfunctions that allocate based on a specific type must be sufficiently\naligned for that type. Array allocation routines need to obey the same\nalignment constraints for each array element.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Marshal.Alloc",
          "name": "Alloc",
          "package": "haskell2010",
          "source": "src/Foreign-Marshal-Alloc.html",
          "type": "module"
        },
        "index": {
          "description": "The module Foreign.Marshal.Alloc provides operations to allocate and deallocate blocks of raw memory i.e unstructured chunks of memory outside of the area maintained by the Haskell storage manager These memory blocks are commonly used to pass compound data structures to foreign functions or to provide space in which compound result values are obtained from foreign functions If any of the allocation functions fails value of nullPtr is produced If free or reallocBytes is applied to memory area that has been allocated with alloca or allocaBytes the behaviour is undefined Any further access to memory areas allocated with alloca or allocaBytes after the computation that was passed to the allocation function has terminated leads to undefined behaviour Any further access to the memory area referenced by pointer passed to realloc reallocBytes or free entails undefined behaviour All storage allocated by functions that allocate based on size in bytes must be sufficiently aligned for any of the basic foreign types that fits into the newly allocated storage All storage allocated by functions that allocate based on specific type must be sufficiently aligned for that type Array allocation routines need to obey the same alignment constraints for each array element",
          "hierarchy": "Foreign Marshal Alloc",
          "module": "Foreign.Marshal.Alloc",
          "name": "Alloc",
          "package": "haskell2010",
          "partial": "Alloc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Alloc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealloca\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e executes the computation \u003ccode\u003ef\u003c/code\u003e, passing as argument\n a pointer to a temporarily allocated block of memory sufficient to\n hold values of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe memory is freed when \u003ccode\u003ef\u003c/code\u003e terminates (either normally or via an\n exception), so the pointer passed to \u003ccode\u003ef\u003c/code\u003e must \u003cem\u003enot\u003c/em\u003e be used after this.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc",
          "name": "alloca",
          "package": "haskell2010",
          "signature": "(Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "alloca executes the computation passing as argument pointer to temporarily allocated block of memory sufficient to hold values of type The memory is freed when terminates either normally or via an exception so the pointer passed to must not be used after this",
          "hierarchy": "Foreign Marshal Alloc",
          "module": "Foreign.Marshal.Alloc",
          "name": "alloca",
          "normalized": "(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "signature": "(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Alloc.html#v:alloca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eallocaBytes\u003c/a\u003e\u003c/code\u003e n f\u003c/code\u003e executes the computation \u003ccode\u003ef\u003c/code\u003e, passing as argument\n a pointer to a temporarily allocated block of memory of \u003ccode\u003en\u003c/code\u003e bytes.\n The block of memory is sufficiently aligned for any of the basic\n foreign types that fits into a memory block of the allocated size.\n\u003c/p\u003e\u003cp\u003eThe memory is freed when \u003ccode\u003ef\u003c/code\u003e terminates (either normally or via an\n exception), so the pointer passed to \u003ccode\u003ef\u003c/code\u003e must \u003cem\u003enot\u003c/em\u003e be used after this.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc",
          "name": "allocaBytes",
          "package": "haskell2010",
          "signature": "Int -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "allocaBytes executes the computation passing as argument pointer to temporarily allocated block of memory of bytes The block of memory is sufficiently aligned for any of the basic foreign types that fits into memory block of the allocated size The memory is freed when terminates either normally or via an exception so the pointer passed to must not be used after this",
          "hierarchy": "Foreign Marshal Alloc",
          "module": "Foreign.Marshal.Alloc",
          "name": "allocaBytes",
          "normalized": "Int-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "partial": "Bytes",
          "signature": "Int-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Alloc.html#v:allocaBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointer to a foreign function equivalent to \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e, which may be\n used as a finalizer (cf \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e) for storage\n allocated with \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emallocBytes\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erealloc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ereallocBytes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc",
          "name": "finalizerFree",
          "package": "haskell2010",
          "signature": "FinalizerPtr a",
          "type": "function"
        },
        "index": {
          "description": "pointer to foreign function equivalent to free which may be used as finalizer cf ForeignPtr for storage allocated with malloc mallocBytes realloc or reallocBytes",
          "hierarchy": "Foreign Marshal Alloc",
          "module": "Foreign.Marshal.Alloc",
          "name": "finalizerFree",
          "package": "haskell2010",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Alloc.html#v:finalizerFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree a block of memory that was allocated with \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003emallocBytes\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erealloc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereallocBytes\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e\n or any of the \u003ccode\u003enew\u003c/code\u003e\u003cem\u003eX\u003c/em\u003e functions in \u003ca\u003eForeign.Marshal.Array\u003c/a\u003e or\n \u003ca\u003eForeign.C.String\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc",
          "name": "free",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Free block of memory that was allocated with malloc mallocBytes realloc reallocBytes new or any of the new functions in Foreign.Marshal.Array or Foreign.C.String",
          "hierarchy": "Foreign Marshal Alloc",
          "module": "Foreign.Marshal.Alloc",
          "name": "free",
          "normalized": "Ptr a-\u003eIO()",
          "package": "haskell2010",
          "signature": "Ptr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Alloc.html#v:free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a block of memory that is sufficient to hold values of type\n \u003ccode\u003ea\u003c/code\u003e.  The size of the area allocated is determined by the \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e\n method from the instance of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e for the appropriate type.\n\u003c/p\u003e\u003cp\u003eThe memory may be deallocated using \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efinalizerFree\u003c/a\u003e\u003c/code\u003e when\n no longer required.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc",
          "name": "malloc",
          "package": "haskell2010",
          "signature": "IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Allocate block of memory that is sufficient to hold values of type The size of the area allocated is determined by the sizeOf method from the instance of Storable for the appropriate type The memory may be deallocated using free or finalizerFree when no longer required",
          "hierarchy": "Foreign Marshal Alloc",
          "module": "Foreign.Marshal.Alloc",
          "name": "malloc",
          "package": "haskell2010",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Alloc.html#v:malloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a block of memory of the given number of bytes.\n The block of memory is sufficiently aligned for any of the basic\n foreign types that fits into a memory block of the allocated size.\n\u003c/p\u003e\u003cp\u003eThe memory may be deallocated using \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efinalizerFree\u003c/a\u003e\u003c/code\u003e when\n no longer required.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc",
          "name": "mallocBytes",
          "package": "haskell2010",
          "signature": "Int -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Allocate block of memory of the given number of bytes The block of memory is sufficiently aligned for any of the basic foreign types that fits into memory block of the allocated size The memory may be deallocated using free or finalizerFree when no longer required",
          "hierarchy": "Foreign Marshal Alloc",
          "module": "Foreign.Marshal.Alloc",
          "name": "mallocBytes",
          "normalized": "Int-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Bytes",
          "signature": "Int-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Alloc.html#v:mallocBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResize a memory area that was allocated with \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emallocBytes\u003c/a\u003e\u003c/code\u003e\n to the size needed to store values of type \u003ccode\u003eb\u003c/code\u003e.  The returned pointer\n may refer to an entirely different memory area, but will be suitably\n aligned to hold values of type \u003ccode\u003eb\u003c/code\u003e.  The contents of the referenced\n memory area will be the same as of the original pointer up to the\n minimum of the original size and the size of values of type \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the argument to \u003ccode\u003e\u003ca\u003erealloc\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erealloc\u003c/a\u003e\u003c/code\u003e behaves like\n \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc",
          "name": "realloc",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e IO (Ptr b)",
          "type": "function"
        },
        "index": {
          "description": "Resize memory area that was allocated with malloc or mallocBytes to the size needed to store values of type The returned pointer may refer to an entirely different memory area but will be suitably aligned to hold values of type The contents of the referenced memory area will be the same as of the original pointer up to the minimum of the original size and the size of values of type If the argument to realloc is nullPtr realloc behaves like malloc",
          "hierarchy": "Foreign Marshal Alloc",
          "module": "Foreign.Marshal.Alloc",
          "name": "realloc",
          "normalized": "Ptr a-\u003eIO(Ptr b)",
          "package": "haskell2010",
          "signature": "Ptr a-\u003eIO(Ptr b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Alloc.html#v:realloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResize a memory area that was allocated with \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emallocBytes\u003c/a\u003e\u003c/code\u003e\n to the given size.  The returned pointer may refer to an entirely\n different memory area, but will be sufficiently aligned for any of the\n basic foreign types that fits into a memory block of the given size.\n The contents of the referenced memory area will be the same as of\n the original pointer up to the minimum of the original size and the\n given size.\n\u003c/p\u003e\u003cp\u003eIf the pointer argument to \u003ccode\u003e\u003ca\u003ereallocBytes\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereallocBytes\u003c/a\u003e\u003c/code\u003e\n behaves like \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e.  If the requested size is 0, \u003ccode\u003e\u003ca\u003ereallocBytes\u003c/a\u003e\u003c/code\u003e\n behaves like \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc",
          "name": "reallocBytes",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Int -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Resize memory area that was allocated with malloc or mallocBytes to the given size The returned pointer may refer to an entirely different memory area but will be sufficiently aligned for any of the basic foreign types that fits into memory block of the given size The contents of the referenced memory area will be the same as of the original pointer up to the minimum of the original size and the given size If the pointer argument to reallocBytes is nullPtr reallocBytes behaves like malloc If the requested size is reallocBytes behaves like free",
          "hierarchy": "Foreign Marshal Alloc",
          "module": "Foreign.Marshal.Alloc",
          "name": "reallocBytes",
          "normalized": "Ptr a-\u003eInt-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Bytes",
          "signature": "Ptr a-\u003eInt-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Alloc.html#v:reallocBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module \u003ca\u003eForeign.Marshal.Array\u003c/a\u003e provides operations for marshalling Haskell\nlists into monolithic arrays and vice versa.  Most functions come in two\nflavours: one for arrays terminated by a special termination element and one\nwhere an explicit length parameter is used to determine the extent of an\narray.  The typical example for the former case are C's NUL terminated\nstrings.  However, please note that C strings should usually be marshalled\nusing the functions provided by \u003ca\u003eForeign.C.String\u003c/a\u003e as\nthe Unicode encoding has to be taken into account.  All functions specifically\noperating on arrays that are terminated by a special termination element have\na name ending on \u003ccode\u003e0\u003c/code\u003e---e.g., \u003ccode\u003e\u003ca\u003emallocArray\u003c/a\u003e\u003c/code\u003e allocates space for an\narray of the given size, whereas \u003ccode\u003e\u003ca\u003emallocArray0\u003c/a\u003e\u003c/code\u003e allocates space for one\nmore element to ensure that there is room for the terminator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "Array",
          "package": "haskell2010",
          "source": "src/Foreign-Marshal-Array.html",
          "type": "module"
        },
        "index": {
          "description": "The module Foreign.Marshal.Array provides operations for marshalling Haskell lists into monolithic arrays and vice versa Most functions come in two flavours one for arrays terminated by special termination element and one where an explicit length parameter is used to determine the extent of an array The typical example for the former case are NUL terminated strings However please note that strings should usually be marshalled using the functions provided by Foreign.C.String as the Unicode encoding has to be taken into account All functions specifically operating on arrays that are terminated by special termination element have name ending on e.g mallocArray allocates space for an array of the given size whereas mallocArray0 allocates space for one more element to ensure that there is room for the terminator",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "Array",
          "package": "haskell2010",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvance a pointer into an array by the given number of elements\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "advancePtr",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Int -\u003e Ptr a",
          "type": "function"
        },
        "index": {
          "description": "Advance pointer into an array by the given number of elements",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "advancePtr",
          "normalized": "Ptr a-\u003eInt-\u003ePtr a",
          "package": "haskell2010",
          "partial": "Ptr",
          "signature": "Ptr a-\u003eInt-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:advancePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily allocate space for the given number of elements\n (like \u003ccode\u003e\u003ca\u003ealloca\u003c/a\u003e\u003c/code\u003e, but for multiple elements).\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "allocaArray",
          "package": "haskell2010",
          "signature": "Int -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Temporarily allocate space for the given number of elements like alloca but for multiple elements",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "allocaArray",
          "normalized": "Int-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Int-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:allocaArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eallocaArray\u003c/a\u003e\u003c/code\u003e, but add an extra position to hold a special\n termination element.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "allocaArray0",
          "package": "haskell2010",
          "signature": "Int -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Like allocaArray but add an extra position to hold special termination element",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "allocaArray0",
          "normalized": "Int-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Int-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:allocaArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the given number of elements from the second array (source) into the\n first array (destination); the copied areas may \u003cem\u003enot\u003c/em\u003e overlap\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "copyArray",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the given number of elements from the second array source into the first array destination the copied areas may not overlap",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "copyArray",
          "normalized": "Ptr a-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Ptr a-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:copyArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of elements in an array, excluding the terminator\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "lengthArray0",
          "package": "haskell2010",
          "signature": "a -\u003e Ptr a -\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Return the number of elements in an array excluding the terminator",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "lengthArray0",
          "normalized": "a-\u003ePtr a-\u003eIO Int",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "a-\u003ePtr a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:lengthArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate storage for the given number of elements of a storable type\n (like \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e, but for multiple elements).\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "mallocArray",
          "package": "haskell2010",
          "signature": "Int -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Allocate storage for the given number of elements of storable type like malloc but for multiple elements",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "mallocArray",
          "normalized": "Int-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Int-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:mallocArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emallocArray\u003c/a\u003e\u003c/code\u003e, but add an extra position to hold a special\n termination element.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "mallocArray0",
          "package": "haskell2010",
          "signature": "Int -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Like mallocArray but add an extra position to hold special termination element",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "mallocArray0",
          "normalized": "Int-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Int-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:mallocArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the given number of elements from the second array (source) into the\n first array (destination); the copied areas \u003cem\u003emay\u003c/em\u003e overlap\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "moveArray",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the given number of elements from the second array source into the first array destination the copied areas may overlap",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "moveArray",
          "normalized": "Ptr a-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Ptr a-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:moveArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a list of storable elements into a newly allocated, consecutive\n sequence of storable values\n (like \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e, but for multiple elements).\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "newArray",
          "package": "haskell2010",
          "signature": "[a] -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Write list of storable elements into newly allocated consecutive sequence of storable values like new but for multiple elements",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "newArray",
          "normalized": "[a]-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "[a]-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a list of storable elements into a newly allocated, consecutive\n sequence of storable values, where the end is fixed by the given end marker\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "newArray0",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Write list of storable elements into newly allocated consecutive sequence of storable values where the end is fixed by the given end marker",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "newArray0",
          "normalized": "a-\u003e[a]-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "a-\u003e[a]-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:newArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array of given length into a Haskell list.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "peekArray",
          "package": "haskell2010",
          "signature": "Int -\u003e Ptr a -\u003e IO [a]",
          "source": "src/Foreign-Marshal-Array.html#peekArray",
          "type": "function"
        },
        "index": {
          "description": "Convert an array of given length into Haskell list",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "peekArray",
          "normalized": "Int-\u003ePtr a-\u003eIO[a]",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Int-\u003ePtr a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:peekArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array terminated by the given end marker into a Haskell list\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "peekArray0",
          "package": "haskell2010",
          "signature": "a -\u003e Ptr a -\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "Convert an array terminated by the given end marker into Haskell list",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "peekArray0",
          "normalized": "a-\u003ePtr a-\u003eIO[a]",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "a-\u003ePtr a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:peekArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the list elements consecutive into memory\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "pokeArray",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e [a] -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write the list elements consecutive into memory",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "pokeArray",
          "normalized": "Ptr a-\u003e[a]-\u003eIO()",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Ptr a-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:pokeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the list elements consecutive into memory and terminate them with the\n given marker element\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "pokeArray0",
          "package": "haskell2010",
          "signature": "a -\u003e Ptr a -\u003e [a] -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write the list elements consecutive into memory and terminate them with the given marker element",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "pokeArray0",
          "normalized": "a-\u003ePtr a-\u003e[a]-\u003eIO()",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "a-\u003ePtr a-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:pokeArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the size of an array\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "reallocArray",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Int -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Adjust the size of an array",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "reallocArray",
          "normalized": "Ptr a-\u003eInt-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Ptr a-\u003eInt-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:reallocArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the size of an array including an extra position for the end marker.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "reallocArray0",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Int -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Adjust the size of an array including an extra position for the end marker",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "reallocArray0",
          "normalized": "Ptr a-\u003eInt-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "Ptr a-\u003eInt-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:reallocArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily store a list of storable values in memory\n (like \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e, but for multiple elements).\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "withArray",
          "package": "haskell2010",
          "signature": "[a] -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Temporarily store list of storable values in memory like with but for multiple elements",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "withArray",
          "normalized": "[a]-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "[a]-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:withArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithArray\u003c/a\u003e\u003c/code\u003e, but a terminator indicates where the array ends\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "withArray0",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Like withArray but terminator indicates where the array ends",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "withArray0",
          "normalized": "a-\u003e[a]-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "partial": "Array",
          "signature": "a-\u003e[a]-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:withArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithArray\u003c/a\u003e\u003c/code\u003e, but the action gets the number of values\n as an additional parameter\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "withArrayLen",
          "package": "haskell2010",
          "signature": "[a] -\u003e (Int -\u003e Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Like withArray but the action gets the number of values as an additional parameter",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "withArrayLen",
          "normalized": "[a]-\u003e(Int-\u003ePtr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "partial": "Array Len",
          "signature": "[a]-\u003e(Int-\u003ePtr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:withArrayLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithArrayLen\u003c/a\u003e\u003c/code\u003e, but a terminator indicates where the array ends\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array",
          "name": "withArrayLen0",
          "package": "haskell2010",
          "signature": "a -\u003e [a] -\u003e (Int -\u003e Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Like withArrayLen but terminator indicates where the array ends",
          "hierarchy": "Foreign Marshal Array",
          "module": "Foreign.Marshal.Array",
          "name": "withArrayLen0",
          "normalized": "a-\u003e[a]-\u003e(Int-\u003ePtr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "partial": "Array Len",
          "signature": "a-\u003e[a]-\u003e(Int-\u003ePtr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Array.html#v:withArrayLen0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Marshal.Error",
          "name": "Error",
          "package": "haskell2010",
          "source": "src/Foreign-Marshal-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign Marshal Error",
          "module": "Foreign.Marshal.Error",
          "name": "Error",
          "package": "haskell2010",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action, throwing a \u003ccode\u003e\u003ca\u003euserError\u003c/a\u003e\u003c/code\u003e if the predicate yields\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when applied to the result returned by the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n If no exception is raised, return the result of the computation.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Error",
          "name": "throwIf",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool)-\u003e (a -\u003e String)-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action throwing userError if the predicate yields True when applied to the result returned by the IO action If no exception is raised return the result of the computation",
          "hierarchy": "Foreign Marshal Error",
          "module": "Foreign.Marshal.Error",
          "name": "throwIf",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eString)-\u003eIO a-\u003eIO a",
          "package": "haskell2010",
          "partial": "If",
          "signature": "(a-\u003eBool)-\u003e(a-\u003eString)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Error.html#v:throwIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuards against negative result values\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Error",
          "name": "throwIfNeg",
          "package": "haskell2010",
          "signature": "(a -\u003e String) -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Guards against negative result values",
          "hierarchy": "Foreign Marshal Error",
          "module": "Foreign.Marshal.Error",
          "name": "throwIfNeg",
          "normalized": "(a-\u003eString)-\u003eIO a-\u003eIO a",
          "package": "haskell2010",
          "partial": "If Neg",
          "signature": "(a-\u003eString)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Error.html#v:throwIfNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ethrowIfNeg\u003c/a\u003e\u003c/code\u003e, but discarding the result\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Error",
          "name": "throwIfNeg_",
          "package": "haskell2010",
          "signature": "(a -\u003e String) -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like throwIfNeg but discarding the result",
          "hierarchy": "Foreign Marshal Error",
          "module": "Foreign.Marshal.Error",
          "name": "throwIfNeg_",
          "normalized": "(a-\u003eString)-\u003eIO a-\u003eIO()",
          "package": "haskell2010",
          "partial": "If Neg",
          "signature": "(a-\u003eString)-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Error.html#v:throwIfNeg_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuards against null pointers\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Error",
          "name": "throwIfNull",
          "package": "haskell2010",
          "signature": "String -\u003e IO (Ptr a) -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Guards against null pointers",
          "hierarchy": "Foreign Marshal Error",
          "module": "Foreign.Marshal.Error",
          "name": "throwIfNull",
          "normalized": "String-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "partial": "If Null",
          "signature": "String-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Error.html#v:throwIfNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ethrowIf\u003c/a\u003e\u003c/code\u003e, but discarding the result\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Error",
          "name": "throwIf_",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e String) -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like throwIf but discarding the result",
          "hierarchy": "Foreign Marshal Error",
          "module": "Foreign.Marshal.Error",
          "name": "throwIf_",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eString)-\u003eIO a-\u003eIO()",
          "package": "haskell2010",
          "partial": "If",
          "signature": "(a-\u003eBool)-\u003e(a-\u003eString)-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Error.html#v:throwIf_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard the return value of an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Error",
          "name": "void",
          "package": "haskell2010",
          "signature": "IO a -\u003e IO ()",
          "source": "src/Foreign-Marshal-Error.html#void",
          "type": "function"
        },
        "index": {
          "description": "Discard the return value of an IO action",
          "hierarchy": "Foreign Marshal Error",
          "module": "Foreign.Marshal.Error",
          "name": "void",
          "normalized": "IO a-\u003eIO()",
          "package": "haskell2010",
          "signature": "IO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Error.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Marshal.Utils",
          "name": "Utils",
          "package": "haskell2010",
          "source": "src/Foreign-Marshal-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "Utils",
          "package": "haskell2010",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies the given number of bytes from the second area (source) into the\n first (destination); the copied areas may \u003cem\u003enot\u003c/em\u003e overlap\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "copyBytes",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copies the given number of bytes from the second area source into the first destination the copied areas may not overlap",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "copyBytes",
          "normalized": "Ptr a-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "haskell2010",
          "partial": "Bytes",
          "signature": "Ptr a-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:copyBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to its numeric representation\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "fromBool",
          "package": "haskell2010",
          "signature": "Bool -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell Bool to its numeric representation",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "fromBool",
          "normalized": "Bool-\u003ea",
          "package": "haskell2010",
          "partial": "Bool",
          "signature": "Bool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate storage and marshal a storable value wrapped into a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e is used to represent \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "maybeNew",
          "package": "haskell2010",
          "signature": "(a -\u003e IO (Ptr b)) -\u003e Maybe a -\u003e IO (Ptr b)",
          "type": "function"
        },
        "index": {
          "description": "Allocate storage and marshal storable value wrapped into Maybe the nullPtr is used to represent Nothing",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "maybeNew",
          "normalized": "(a-\u003eIO(Ptr b))-\u003eMaybe a-\u003eIO(Ptr b)",
          "package": "haskell2010",
          "partial": "New",
          "signature": "(a-\u003eIO(Ptr b))-\u003eMaybe a-\u003eIO(Ptr b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:maybeNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a peek combinator into a one returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if applied to a\n \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "maybePeek",
          "package": "haskell2010",
          "signature": "(Ptr a -\u003e IO b) -\u003e Ptr a -\u003e IO (Maybe b)",
          "type": "function"
        },
        "index": {
          "description": "Convert peek combinator into one returning Nothing if applied to nullPtr",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "maybePeek",
          "normalized": "(Ptr a-\u003eIO b)-\u003ePtr a-\u003eIO(Maybe b)",
          "package": "haskell2010",
          "partial": "Peek",
          "signature": "(Ptr a-\u003eIO b)-\u003ePtr a-\u003eIO(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:maybePeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003ewithXXX\u003c/code\u003e combinator into one marshalling a value wrapped\n into a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e to represent \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "maybeWith",
          "package": "haskell2010",
          "signature": "(a -\u003e (Ptr b -\u003e IO c) -\u003e IO c) -\u003e Maybe a -\u003e (Ptr b -\u003e IO c) -\u003e IO c",
          "type": "function"
        },
        "index": {
          "description": "Converts withXXX combinator into one marshalling value wrapped into Maybe using nullPtr to represent Nothing",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "maybeWith",
          "normalized": "(a-\u003e(Ptr b-\u003eIO c)-\u003eIO c)-\u003eMaybe a-\u003e(Ptr b-\u003eIO c)-\u003eIO c",
          "package": "haskell2010",
          "partial": "With",
          "signature": "(a-\u003e(Ptr b-\u003eIO c)-\u003eIO c)-\u003eMaybe a-\u003e(Ptr b-\u003eIO c)-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:maybeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies the given number of bytes from the second area (source) into the\n first (destination); the copied areas \u003cem\u003emay\u003c/em\u003e overlap\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "moveBytes",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copies the given number of bytes from the second area source into the first destination the copied areas may overlap",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "moveBytes",
          "normalized": "Ptr a-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "haskell2010",
          "partial": "Bytes",
          "signature": "Ptr a-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:moveBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a block of memory and marshal a value into it\n (the combination of \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epoke\u003c/a\u003e\u003c/code\u003e).\n The size of the area allocated is determined by the \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e\n method from the instance of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e for the appropriate type.\n\u003c/p\u003e\u003cp\u003eThe memory may be deallocated using \u003ccode\u003e\u003ca\u003efree\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003efinalizerFree\u003c/a\u003e\u003c/code\u003e when no longer required.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "new",
          "package": "haskell2010",
          "signature": "a -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "Allocate block of memory and marshal value into it the combination of malloc and poke The size of the area allocated is determined by the sizeOf method from the instance of Storable for the appropriate type The memory may be deallocated using free or finalizerFree when no longer required",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "new",
          "normalized": "a-\u003eIO(Ptr a)",
          "package": "haskell2010",
          "signature": "a-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Boolean in numeric representation to a Haskell value\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "toBool",
          "package": "haskell2010",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Convert Boolean in numeric representation to Haskell value",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "toBool",
          "normalized": "a-\u003eBool",
          "package": "haskell2010",
          "partial": "Bool",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:toBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e val f\u003c/code\u003e executes the computation \u003ccode\u003ef\u003c/code\u003e, passing as argument\n a pointer to a temporarily allocated block of memory into which\n \u003ccode\u003eval\u003c/code\u003e has been marshalled (the combination of \u003ccode\u003e\u003ca\u003ealloca\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epoke\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe memory is freed when \u003ccode\u003ef\u003c/code\u003e terminates (either normally or via an\n exception), so the pointer passed to \u003ccode\u003ef\u003c/code\u003e must \u003cem\u003enot\u003c/em\u003e be used after this.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "with",
          "package": "haskell2010",
          "signature": "a -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "with val executes the computation passing as argument pointer to temporarily allocated block of memory into which val has been marshalled the combination of alloca and poke The memory is freed when terminates either normally or via an exception so the pointer passed to must not be used after this",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "with",
          "normalized": "a-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "haskell2010",
          "signature": "a-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplicates a \u003ccode\u003ewithXXX\u003c/code\u003e combinator over a list of objects, yielding a list of\n marshalled objects\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils",
          "name": "withMany",
          "package": "haskell2010",
          "signature": "(a -\u003e (b -\u003e res) -\u003e res) -\u003e [a] -\u003e ([b] -\u003e res) -\u003e res",
          "type": "function"
        },
        "index": {
          "description": "Replicates withXXX combinator over list of objects yielding list of marshalled objects",
          "hierarchy": "Foreign Marshal Utils",
          "module": "Foreign.Marshal.Utils",
          "name": "withMany",
          "normalized": "(a-\u003e(b-\u003ec)-\u003ec)-\u003e[a]-\u003e([b]-\u003ec)-\u003ec",
          "package": "haskell2010",
          "partial": "Many",
          "signature": "(a-\u003e(b-\u003eres)-\u003eres)-\u003e[a]-\u003e([b]-\u003eres)-\u003eres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal-Utils.html#v:withMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Marshal",
          "name": "Marshal",
          "package": "haskell2010",
          "source": "src/Foreign-Marshal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign Marshal",
          "module": "Foreign.Marshal",
          "name": "Marshal",
          "package": "haskell2010",
          "partial": "Marshal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes an external entity is a pure function, except that it passes\narguments and/or results via pointers.  The function\n\u003ccode\u003eunsafeLocalState\u003c/code\u003e permits the packaging of such entities as pure\nfunctions.  \n\u003c/p\u003e\u003cp\u003eThe only IO operations allowed in the IO action passed to\n\u003ccode\u003eunsafeLocalState\u003c/code\u003e are (a) local allocation (\u003ccode\u003ealloca\u003c/code\u003e, \u003ccode\u003eallocaBytes\u003c/code\u003e\nand derived operations such as \u003ccode\u003ewithArray\u003c/code\u003e and \u003ccode\u003ewithCString\u003c/code\u003e), and (b)\npointer operations (\u003ccode\u003eForeign.Storable\u003c/code\u003e and \u003ccode\u003eForeign.Ptr\u003c/code\u003e) on the\npointers to local storage, and (c) foreign functions whose only\nobservable effect is to read and/or write the locally allocated\nmemory.  Passing an IO operation that does not obey these rules\nresults in undefined behaviour.\n\u003c/p\u003e\u003cp\u003eIt is expected that this operation will be\nreplaced in a future revision of Haskell.\n\u003c/p\u003e",
          "module": "Foreign.Marshal",
          "name": "unsafeLocalState",
          "package": "haskell2010",
          "signature": "IO a -\u003e a",
          "source": "src/Foreign-Marshal.html#unsafeLocalState",
          "type": "function"
        },
        "index": {
          "description": "Sometimes an external entity is pure function except that it passes arguments and or results via pointers The function unsafeLocalState permits the packaging of such entities as pure functions The only IO operations allowed in the IO action passed to unsafeLocalState are local allocation alloca allocaBytes and derived operations such as withArray and withCString and pointer operations Foreign.Storable and Foreign.Ptr on the pointers to local storage and foreign functions whose only observable effect is to read and or write the locally allocated memory Passing an IO operation that does not obey these rules results in undefined behaviour It is expected that this operation will be replaced in future revision of Haskell",
          "hierarchy": "Foreign Marshal",
          "module": "Foreign.Marshal",
          "name": "unsafeLocalState",
          "normalized": "IO a-\u003ea",
          "package": "haskell2010",
          "partial": "Local State",
          "signature": "IO a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Marshal.html#v:unsafeLocalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module \u003ca\u003eForeign.Ptr\u003c/a\u003e provides typed pointers to foreign\n entities.  We distinguish two kinds of pointers: pointers to data\n and pointers to functions.  It is understood that these two kinds\n of pointers may be represented differently as they may be\n references to data and text segments, respectively.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Ptr",
          "name": "Ptr",
          "package": "haskell2010",
          "source": "src/Foreign-Ptr.html",
          "type": "module"
        },
        "index": {
          "description": "The module Foreign.Ptr provides typed pointers to foreign entities We distinguish two kinds of pointers pointers to data and pointers to functions It is understood that these two kinds of pointers may be represented differently as they may be references to data and text segments respectively",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "Ptr",
          "package": "haskell2010",
          "partial": "Ptr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a pointer to a function callable\n from foreign code.  The type \u003ccode\u003ea\u003c/code\u003e will normally be a \u003cem\u003eforeign type\u003c/em\u003e,\n a function type with zero or more arguments where\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the argument types are \u003cem\u003emarshallable foreign types\u003c/em\u003e,\n   i.e. \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e,\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStablePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e or a renaming of any of these\n   using \u003ccode\u003enewtype\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e the return type is either a marshallable foreign type or has the form\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e where \u003ccode\u003et\u003c/code\u003e is a marshallable foreign type or \u003ccode\u003e()\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e may be a pointer to a foreign function,\n either returned by another foreign function or imported with a\n a static address import like\n\u003c/p\u003e\u003cpre\u003e foreign import ccall \"stdlib.h &free\"\n   p_free :: FunPtr (Ptr a -\u003e IO ())\n\u003c/pre\u003e\u003cp\u003eor a pointer to a Haskell function created using a \u003cem\u003ewrapper\u003c/em\u003e stub\n declared to produce a \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e of the correct type.  For example:\n\u003c/p\u003e\u003cpre\u003e type Compare = Int -\u003e Int -\u003e Bool\n foreign import ccall \"wrapper\"\n   mkCompare :: Compare -\u003e IO (FunPtr Compare)\n\u003c/pre\u003e\u003cp\u003eCalls to wrapper stubs like \u003ccode\u003emkCompare\u003c/code\u003e allocate storage, which\n should be released with \u003ccode\u003e\u003ca\u003efreeHaskellFunPtr\u003c/a\u003e\u003c/code\u003e when no\n longer required.\n\u003c/p\u003e\u003cp\u003eTo convert \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e values to corresponding Haskell functions, one\n can define a \u003cem\u003edynamic\u003c/em\u003e stub for the specific foreign type, e.g.\n\u003c/p\u003e\u003cpre\u003e type IntFunction = CInt -\u003e IO ()\n foreign import ccall \"dynamic\" \n   mkFun :: FunPtr IntFunction -\u003e IntFunction\n\u003c/pre\u003e",
          "module": "Foreign.Ptr",
          "name": "FunPtr",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "value of type FunPtr is pointer to function callable from foreign code The type will normally be foreign type function type with zero or more arguments where the argument types are marshallable foreign types i.e Char Int Double Float Bool Int8 Int16 Int32 Int64 Word8 Word16 Word32 Word64 Ptr FunPtr StablePtr or renaming of any of these using newtype the return type is either marshallable foreign type or has the form IO where is marshallable foreign type or value of type FunPtr may be pointer to foreign function either returned by another foreign function or imported with static address import like foreign import ccall stdlib.h free free FunPtr Ptr IO or pointer to Haskell function created using wrapper stub declared to produce FunPtr of the correct type For example type Compare Int Int Bool foreign import ccall wrapper mkCompare Compare IO FunPtr Compare Calls to wrapper stubs like mkCompare allocate storage which should be released with freeHaskellFunPtr when no longer required To convert FunPtr values to corresponding Haskell functions one can define dynamic stub for the specific foreign type e.g type IntFunction CInt IO foreign import ccall dynamic mkFun FunPtr IntFunction IntFunction",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "FunPtr",
          "package": "haskell2010",
          "partial": "Fun Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#t:FunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signed integral type that can be losslessly converted to and from\n \u003ccode\u003ePtr\u003c/code\u003e.  This type is also compatible with the C99 type \u003ccode\u003eintptr_t\u003c/code\u003e, and\n can be marshalled to and from that type safely.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "IntPtr",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "signed integral type that can be losslessly converted to and from Ptr This type is also compatible with the C99 type intptr and can be marshalled to and from that type safely",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "IntPtr",
          "package": "haskell2010",
          "partial": "Int Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#t:IntPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e represents a pointer to an object, or an\n array of objects, which may be marshalled to or from Haskell values\n of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe type \u003ccode\u003ea\u003c/code\u003e will often be an instance of class\n \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e which provides the marshalling operations.\n However this is not essential, and you can provide your own operations\n to access the pointer.  For example you might write small foreign\n functions to get or set the fields of a C \u003ccode\u003estruct\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "Ptr",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "value of type Ptr represents pointer to an object or an array of objects which may be marshalled to or from Haskell values of type The type will often be an instance of class Storable which provides the marshalling operations However this is not essential and you can provide your own operations to access the pointer For example you might write small foreign functions to get or set the fields of struct",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "Ptr",
          "package": "haskell2010",
          "partial": "Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#t:Ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unsigned integral type that can be losslessly converted to and from\n \u003ccode\u003ePtr\u003c/code\u003e. This type is also compatible with the C99 type \u003ccode\u003euintptr_t\u003c/code\u003e, and\n can be marshalled to and from that type safely.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "WordPtr",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "An unsigned integral type that can be losslessly converted to and from Ptr This type is also compatible with the C99 type uintptr and can be marshalled to and from that type safely",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "WordPtr",
          "package": "haskell2010",
          "partial": "Word Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#t:WordPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an arbitrary address and an alignment constraint,\n \u003ccode\u003e\u003ca\u003ealignPtr\u003c/a\u003e\u003c/code\u003e yields the next higher address that fulfills the\n alignment constraint.  An alignment constraint \u003ccode\u003ex\u003c/code\u003e is fulfilled by\n any address divisible by \u003ccode\u003ex\u003c/code\u003e.  This operation is idempotent.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "alignPtr",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Int -\u003e Ptr a",
          "type": "function"
        },
        "index": {
          "description": "Given an arbitrary address and an alignment constraint alignPtr yields the next higher address that fulfills the alignment constraint An alignment constraint is fulfilled by any address divisible by This operation is idempotent",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "alignPtr",
          "normalized": "Ptr a-\u003eInt-\u003ePtr a",
          "package": "haskell2010",
          "partial": "Ptr",
          "signature": "Ptr a-\u003eInt-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:alignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCasts a \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e of a different type.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "castFunPtr",
          "package": "haskell2010",
          "signature": "FunPtr a -\u003e FunPtr b",
          "type": "function"
        },
        "index": {
          "description": "Casts FunPtr to FunPtr of different type",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "castFunPtr",
          "normalized": "FunPtr a-\u003eFunPtr b",
          "package": "haskell2010",
          "partial": "Fun Ptr",
          "signature": "FunPtr a-\u003eFunPtr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:castFunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCasts a \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e this is valid only on architectures where data and function\n pointers range over the same set of addresses, and should only be used\n for bindings to external libraries whose interface already relies on\n this assumption.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "castFunPtrToPtr",
          "package": "haskell2010",
          "signature": "FunPtr a -\u003e Ptr b",
          "type": "function"
        },
        "index": {
          "description": "Casts FunPtr to Ptr Note this is valid only on architectures where data and function pointers range over the same set of addresses and should only be used for bindings to external libraries whose interface already relies on this assumption",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "castFunPtrToPtr",
          "normalized": "FunPtr a-\u003ePtr b",
          "package": "haskell2010",
          "partial": "Fun Ptr To Ptr",
          "signature": "FunPtr a-\u003ePtr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:castFunPtrToPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecastPtr\u003c/a\u003e\u003c/code\u003e function casts a pointer from one type to another.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "castPtr",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Ptr b",
          "type": "function"
        },
        "index": {
          "description": "The castPtr function casts pointer from one type to another",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "castPtr",
          "normalized": "Ptr a-\u003ePtr b",
          "package": "haskell2010",
          "partial": "Ptr",
          "signature": "Ptr a-\u003ePtr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:castPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCasts a \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e this is valid only on architectures where data and function\n pointers range over the same set of addresses, and should only be used\n for bindings to external libraries whose interface already relies on\n this assumption.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "castPtrToFunPtr",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e FunPtr b",
          "type": "function"
        },
        "index": {
          "description": "Casts Ptr to FunPtr Note this is valid only on architectures where data and function pointers range over the same set of addresses and should only be used for bindings to external libraries whose interface already relies on this assumption",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "castPtrToFunPtr",
          "normalized": "Ptr a-\u003eFunPtr b",
          "package": "haskell2010",
          "partial": "Ptr To Fun Ptr",
          "signature": "Ptr a-\u003eFunPtr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:castPtrToFunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease the storage associated with the given \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e, which\n must have been obtained from a wrapper stub.  This should be called\n whenever the return value from a foreign import wrapper function is\n no longer required; otherwise, the storage it uses will leak.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "freeHaskellFunPtr",
          "package": "haskell2010",
          "signature": "FunPtr a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Release the storage associated with the given FunPtr which must have been obtained from wrapper stub This should be called whenever the return value from foreign import wrapper function is no longer required otherwise the storage it uses will leak",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "freeHaskellFunPtr",
          "normalized": "FunPtr a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Haskell Fun Ptr",
          "signature": "FunPtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:freeHaskellFunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecasts an \u003ccode\u003eIntPtr\u003c/code\u003e to a \u003ccode\u003ePtr\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "intPtrToPtr",
          "package": "haskell2010",
          "signature": "IntPtr -\u003e Ptr a",
          "type": "function"
        },
        "index": {
          "description": "casts an IntPtr to Ptr",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "intPtrToPtr",
          "normalized": "IntPtr-\u003ePtr a",
          "package": "haskell2010",
          "partial": "Ptr To Ptr",
          "signature": "IntPtr-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:intPtrToPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the offset required to get from the second to the first\n argument.  We have \n\u003c/p\u003e\u003cpre\u003e p2 == p1 `plusPtr` (p2 `minusPtr` p1)\n\u003c/pre\u003e",
          "module": "Foreign.Ptr",
          "name": "minusPtr",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Ptr b -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Computes the offset required to get from the second to the first argument We have p2 p1 plusPtr p2 minusPtr p1",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "minusPtr",
          "normalized": "Ptr a-\u003ePtr b-\u003eInt",
          "package": "haskell2010",
          "partial": "Ptr",
          "signature": "Ptr a-\u003ePtr b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:minusPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constant \u003ccode\u003e\u003ca\u003enullFunPtr\u003c/a\u003e\u003c/code\u003e contains a\n distinguished value of \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e that is not\n associated with a valid memory location.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "nullFunPtr",
          "package": "haskell2010",
          "signature": "FunPtr a",
          "type": "function"
        },
        "index": {
          "description": "The constant nullFunPtr contains distinguished value of FunPtr that is not associated with valid memory location",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "nullFunPtr",
          "package": "haskell2010",
          "partial": "Fun Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:nullFunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constant \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e contains a distinguished value of \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e\n that is not associated with a valid memory location.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "nullPtr",
          "package": "haskell2010",
          "signature": "Ptr a",
          "type": "function"
        },
        "index": {
          "description": "The constant nullPtr contains distinguished value of Ptr that is not associated with valid memory location",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "nullPtr",
          "package": "haskell2010",
          "partial": "Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:nullPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvances the given address by the given offset in bytes.\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "plusPtr",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Int -\u003e Ptr b",
          "type": "function"
        },
        "index": {
          "description": "Advances the given address by the given offset in bytes",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "plusPtr",
          "normalized": "Ptr a-\u003eInt-\u003ePtr b",
          "package": "haskell2010",
          "partial": "Ptr",
          "signature": "Ptr a-\u003eInt-\u003ePtr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:plusPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecasts a \u003ccode\u003ePtr\u003c/code\u003e to an \u003ccode\u003eIntPtr\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "ptrToIntPtr",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e IntPtr",
          "type": "function"
        },
        "index": {
          "description": "casts Ptr to an IntPtr",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "ptrToIntPtr",
          "normalized": "Ptr a-\u003eIntPtr",
          "package": "haskell2010",
          "partial": "To Int Ptr",
          "signature": "Ptr a-\u003eIntPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:ptrToIntPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecasts a \u003ccode\u003ePtr\u003c/code\u003e to a \u003ccode\u003eWordPtr\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "ptrToWordPtr",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e WordPtr",
          "type": "function"
        },
        "index": {
          "description": "casts Ptr to WordPtr",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "ptrToWordPtr",
          "normalized": "Ptr a-\u003eWordPtr",
          "package": "haskell2010",
          "partial": "To Word Ptr",
          "signature": "Ptr a-\u003eWordPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:ptrToWordPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecasts a \u003ccode\u003eWordPtr\u003c/code\u003e to a \u003ccode\u003ePtr\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Ptr",
          "name": "wordPtrToPtr",
          "package": "haskell2010",
          "signature": "WordPtr -\u003e Ptr a",
          "type": "function"
        },
        "index": {
          "description": "casts WordPtr to Ptr",
          "hierarchy": "Foreign Ptr",
          "module": "Foreign.Ptr",
          "name": "wordPtrToPtr",
          "normalized": "WordPtr-\u003ePtr a",
          "package": "haskell2010",
          "partial": "Ptr To Ptr",
          "signature": "WordPtr-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Ptr.html#v:wordPtrToPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.StablePtr",
          "name": "StablePtr",
          "package": "haskell2010",
          "source": "src/Foreign-StablePtr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign StablePtr",
          "module": "Foreign.StablePtr",
          "name": "StablePtr",
          "package": "haskell2010",
          "partial": "Stable Ptr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-StablePtr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003estable pointer\u003c/em\u003e is a reference to a Haskell expression that is\nguaranteed not to be affected by garbage collection, i.e., it will neither be\ndeallocated nor will the value of the stable pointer itself change during\ngarbage collection (ordinary references may be relocated during garbage\ncollection).  Consequently, stable pointers can be passed to foreign code,\nwhich can treat it as an opaque reference to a Haskell value.\n\u003c/p\u003e\u003cp\u003eA value of type \u003ccode\u003eStablePtr a\u003c/code\u003e is a stable pointer to a Haskell\nexpression of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.StablePtr",
          "name": "StablePtr",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "stable pointer is reference to Haskell expression that is guaranteed not to be affected by garbage collection i.e it will neither be deallocated nor will the value of the stable pointer itself change during garbage collection ordinary references may be relocated during garbage collection Consequently stable pointers can be passed to foreign code which can treat it as an opaque reference to Haskell value value of type StablePtr is stable pointer to Haskell expression of type",
          "hierarchy": "Foreign StablePtr",
          "module": "Foreign.StablePtr",
          "name": "StablePtr",
          "package": "haskell2010",
          "partial": "Stable Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-StablePtr.html#t:StablePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003ecastStablePtrToPtr\u003c/a\u003e\u003c/code\u003e, i.e., we have the identity\n\u003c/p\u003e\u003cpre\u003e sp == castPtrToStablePtr (castStablePtrToPtr sp)\n\u003c/pre\u003e\u003cp\u003efor any stable pointer \u003ccode\u003esp\u003c/code\u003e on which \u003ccode\u003e\u003ca\u003efreeStablePtr\u003c/a\u003e\u003c/code\u003e has\n not been executed yet.  Moreover, \u003ccode\u003e\u003ca\u003ecastPtrToStablePtr\u003c/a\u003e\u003c/code\u003e may\n only be applied to pointers that have been produced by\n \u003ccode\u003e\u003ca\u003ecastStablePtrToPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.StablePtr",
          "name": "castPtrToStablePtr",
          "package": "haskell2010",
          "signature": "Ptr () -\u003e StablePtr a",
          "type": "function"
        },
        "index": {
          "description": "The inverse of castStablePtrToPtr i.e we have the identity sp castPtrToStablePtr castStablePtrToPtr sp for any stable pointer sp on which freeStablePtr has not been executed yet Moreover castPtrToStablePtr may only be applied to pointers that have been produced by castStablePtrToPtr",
          "hierarchy": "Foreign StablePtr",
          "module": "Foreign.StablePtr",
          "name": "castPtrToStablePtr",
          "normalized": "Ptr()-\u003eStablePtr a",
          "package": "haskell2010",
          "partial": "Ptr To Stable Ptr",
          "signature": "Ptr()-\u003eStablePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-StablePtr.html#v:castPtrToStablePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoerce a stable pointer to an address. No guarantees are made about\n the resulting value, except that the original stable pointer can be\n recovered by \u003ccode\u003e\u003ca\u003ecastPtrToStablePtr\u003c/a\u003e\u003c/code\u003e.  In particular, the address may not\n refer to an accessible memory location and any attempt to pass it to\n the member functions of the class \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e leads to\n undefined behaviour.\n\u003c/p\u003e",
          "module": "Foreign.StablePtr",
          "name": "castStablePtrToPtr",
          "package": "haskell2010",
          "signature": "StablePtr a -\u003e Ptr ()",
          "type": "function"
        },
        "index": {
          "description": "Coerce stable pointer to an address No guarantees are made about the resulting value except that the original stable pointer can be recovered by castPtrToStablePtr In particular the address may not refer to an accessible memory location and any attempt to pass it to the member functions of the class Storable leads to undefined behaviour",
          "hierarchy": "Foreign StablePtr",
          "module": "Foreign.StablePtr",
          "name": "castStablePtrToPtr",
          "normalized": "StablePtr a-\u003ePtr()",
          "package": "haskell2010",
          "partial": "Stable Ptr To Ptr",
          "signature": "StablePtr a-\u003ePtr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-StablePtr.html#v:castStablePtrToPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the Haskell value referenced by a stable pointer, i.e., the\n same value that was passed to the corresponding call to\n \u003ccode\u003emakeStablePtr\u003c/code\u003e.  If the argument to \u003ccode\u003e\u003ca\u003edeRefStablePtr\u003c/a\u003e\u003c/code\u003e has\n already been freed using \u003ccode\u003e\u003ca\u003efreeStablePtr\u003c/a\u003e\u003c/code\u003e, the behaviour of\n \u003ccode\u003e\u003ca\u003edeRefStablePtr\u003c/a\u003e\u003c/code\u003e is undefined.\n\u003c/p\u003e",
          "module": "Foreign.StablePtr",
          "name": "deRefStablePtr",
          "package": "haskell2010",
          "signature": "StablePtr a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Obtain the Haskell value referenced by stable pointer i.e the same value that was passed to the corresponding call to makeStablePtr If the argument to deRefStablePtr has already been freed using freeStablePtr the behaviour of deRefStablePtr is undefined",
          "hierarchy": "Foreign StablePtr",
          "module": "Foreign.StablePtr",
          "name": "deRefStablePtr",
          "normalized": "StablePtr a-\u003eIO a",
          "package": "haskell2010",
          "partial": "Ref Stable Ptr",
          "signature": "StablePtr a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-StablePtr.html#v:deRefStablePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDissolve the association between the stable pointer and the Haskell\n value. Afterwards, if the stable pointer is passed to\n \u003ccode\u003e\u003ca\u003edeRefStablePtr\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efreeStablePtr\u003c/a\u003e\u003c/code\u003e, the behaviour is\n undefined.  However, the stable pointer may still be passed to\n \u003ccode\u003e\u003ca\u003ecastStablePtrToPtr\u003c/a\u003e\u003c/code\u003e, but the \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e value returned\n by \u003ccode\u003e\u003ca\u003ecastStablePtrToPtr\u003c/a\u003e\u003c/code\u003e, in this case, is undefined (in particular,\n it may be \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e).  Nevertheless, the call\n to \u003ccode\u003e\u003ca\u003ecastStablePtrToPtr\u003c/a\u003e\u003c/code\u003e is guaranteed not to diverge.\n\u003c/p\u003e",
          "module": "Foreign.StablePtr",
          "name": "freeStablePtr",
          "package": "haskell2010",
          "signature": "StablePtr a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Dissolve the association between the stable pointer and the Haskell value Afterwards if the stable pointer is passed to deRefStablePtr or freeStablePtr the behaviour is undefined However the stable pointer may still be passed to castStablePtrToPtr but the Ptr value returned by castStablePtrToPtr in this case is undefined in particular it may be nullPtr Nevertheless the call to castStablePtrToPtr is guaranteed not to diverge",
          "hierarchy": "Foreign StablePtr",
          "module": "Foreign.StablePtr",
          "name": "freeStablePtr",
          "normalized": "StablePtr a-\u003eIO()",
          "package": "haskell2010",
          "partial": "Stable Ptr",
          "signature": "StablePtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-StablePtr.html#v:freeStablePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a stable pointer referring to the given Haskell value.\n\u003c/p\u003e",
          "module": "Foreign.StablePtr",
          "name": "newStablePtr",
          "package": "haskell2010",
          "signature": "a -\u003e IO (StablePtr a)",
          "type": "function"
        },
        "index": {
          "description": "Create stable pointer referring to the given Haskell value",
          "hierarchy": "Foreign StablePtr",
          "module": "Foreign.StablePtr",
          "name": "newStablePtr",
          "normalized": "a-\u003eIO(StablePtr a)",
          "package": "haskell2010",
          "partial": "Stable Ptr",
          "signature": "a-\u003eIO(StablePtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-StablePtr.html#v:newStablePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable",
          "name": "Storable",
          "package": "haskell2010",
          "source": "src/Foreign-Storable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "Storable",
          "package": "haskell2010",
          "partial": "Storable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe member functions of this class facilitate writing values of\nprimitive types to raw memory (which may have been allocated with the\nabove mentioned routines) and reading values from blocks of raw\nmemory.  The class, furthermore, includes support for computing the\nstorage requirements and alignment restrictions of storable types.\n\u003c/p\u003e\u003cp\u003eMemory addresses are represented as values of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, for some\n\u003ccode\u003ea\u003c/code\u003e which is an instance of class \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e.  The type argument to\n\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e helps provide some valuable type safety in FFI code (you can't\nmix pointers of different types without an explicit cast), while\nhelping the Haskell type system figure out which marshalling method is\nneeded for a given pointer.\n\u003c/p\u003e\u003cp\u003eAll marshalling between Haskell and a foreign language ultimately\nboils down to translating Haskell data structures into the binary\nrepresentation of a corresponding data structure of the foreign\nlanguage and vice versa.  To code this marshalling in Haskell, it is\nnecessary to manipulate primitive data types stored in unstructured\nmemory blocks.  The class \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e facilitates this manipulation on\nall types for which it is instantiated, which are the standard basic\ntypes of Haskell, the fixed size \u003ccode\u003eInt\u003c/code\u003e types (\u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e), the fixed size \u003ccode\u003eWord\u003c/code\u003e types (\u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e), \u003ccode\u003e\u003ca\u003eStablePtr\u003c/a\u003e\u003c/code\u003e, all types from \u003ca\u003eForeign.C.Types\u003c/a\u003e,\nas well as \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealignment\u003c/a\u003e\u003c/code\u003e, one of \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003epeekElemOff\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epeekByteOff\u003c/a\u003e\u003c/code\u003e, and one of \u003ccode\u003e\u003ca\u003epoke\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epokeElemOff\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003epokeByteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable",
          "name": "Storable",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The member functions of this class facilitate writing values of primitive types to raw memory which may have been allocated with the above mentioned routines and reading values from blocks of raw memory The class furthermore includes support for computing the storage requirements and alignment restrictions of storable types Memory addresses are represented as values of type Ptr for some which is an instance of class Storable The type argument to Ptr helps provide some valuable type safety in FFI code you can mix pointers of different types without an explicit cast while helping the Haskell type system figure out which marshalling method is needed for given pointer All marshalling between Haskell and foreign language ultimately boils down to translating Haskell data structures into the binary representation of corresponding data structure of the foreign language and vice versa To code this marshalling in Haskell it is necessary to manipulate primitive data types stored in unstructured memory blocks The class Storable facilitates this manipulation on all types for which it is instantiated which are the standard basic types of Haskell the fixed size Int types Int8 Int16 Int32 Int64 the fixed size Word types Word8 Word16 Word32 Word64 StablePtr all types from Foreign.C.Types as well as Ptr Minimal complete definition sizeOf alignment one of peek peekElemOff and peekByteOff and one of poke pokeElemOff and pokeByteOff",
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "Storable",
          "package": "haskell2010",
          "partial": "Storable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#t:Storable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the alignment constraint of the argument.  An\n alignment constraint \u003ccode\u003ex\u003c/code\u003e is fulfilled by any address divisible\n by \u003ccode\u003ex\u003c/code\u003e.  The value of the argument is not used.\n\u003c/p\u003e",
          "module": "Foreign.Storable",
          "name": "alignment",
          "package": "haskell2010",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Computes the alignment constraint of the argument An alignment constraint is fulfilled by any address divisible by The value of the argument is not used",
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "alignment",
          "normalized": "a-\u003eInt",
          "package": "haskell2010",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#v:alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from the given memory location.\n\u003c/p\u003e\u003cp\u003eNote that the peek and poke functions might require properly\n  aligned addresses to function correctly.  This is architecture\n  dependent; thus, portable code should ensure that when peeking or\n  poking values of some type \u003ccode\u003ea\u003c/code\u003e, the alignment\n  constraint for \u003ccode\u003ea\u003c/code\u003e, as given by the function\n  \u003ccode\u003e\u003ca\u003ealignment\u003c/a\u003e\u003c/code\u003e is fulfilled.\n\u003c/p\u003e",
          "module": "Foreign.Storable",
          "name": "peek",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e IO a",
          "type": "method"
        },
        "index": {
          "description": "Read value from the given memory location Note that the peek and poke functions might require properly aligned addresses to function correctly This is architecture dependent thus portable code should ensure that when peeking or poking values of some type the alignment constraint for as given by the function alignment is fulfilled",
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "peek",
          "normalized": "Ptr a-\u003eIO a",
          "package": "haskell2010",
          "signature": "Ptr a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from a memory location given by a base\n         address and offset.  The following equality holds:\n\u003c/p\u003e\u003cpre\u003e peekByteOff addr off = peek (addr `plusPtr` off)\n\u003c/pre\u003e",
          "module": "Foreign.Storable",
          "name": "peekByteOff",
          "package": "haskell2010",
          "signature": "Ptr b -\u003e Int -\u003e IO a",
          "type": "method"
        },
        "index": {
          "description": "Read value from memory location given by base address and offset The following equality holds peekByteOff addr off peek addr plusPtr off",
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "peekByteOff",
          "normalized": "Ptr a-\u003eInt-\u003eIO b",
          "package": "haskell2010",
          "partial": "Byte Off",
          "signature": "Ptr b-\u003eInt-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#v:peekByteOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from a memory area regarded as an array\n         of values of the same kind.  The first argument specifies\n         the start address of the array and the second the index into\n         the array (the first element of the array has index\n         \u003ccode\u003e0\u003c/code\u003e).  The following equality holds,\n\u003c/p\u003e\u003cpre\u003e peekElemOff addr idx = IOExts.fixIO $ \\result -\u003e\n   peek (addr `plusPtr` (idx * sizeOf result))\n\u003c/pre\u003e\u003cp\u003eNote that this is only a specification, not\n         necessarily the concrete implementation of the\n         function.\n\u003c/p\u003e",
          "module": "Foreign.Storable",
          "name": "peekElemOff",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Int -\u003e IO a",
          "type": "method"
        },
        "index": {
          "description": "Read value from memory area regarded as an array of values of the same kind The first argument specifies the start address of the array and the second the index into the array the first element of the array has index The following equality holds peekElemOff addr idx IOExts.fixIO result peek addr plusPtr idx sizeOf result Note that this is only specification not necessarily the concrete implementation of the function",
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "peekElemOff",
          "normalized": "Ptr a-\u003eInt-\u003eIO a",
          "package": "haskell2010",
          "partial": "Elem Off",
          "signature": "Ptr a-\u003eInt-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#v:peekElemOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the given value to the given memory location.  Alignment\n restrictions might apply; see \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable",
          "name": "poke",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e a -\u003e IO ()",
          "type": "method"
        },
        "index": {
          "description": "Write the given value to the given memory location Alignment restrictions might apply see peek",
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "poke",
          "normalized": "Ptr a-\u003ea-\u003eIO()",
          "package": "haskell2010",
          "signature": "Ptr a-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#v:poke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a memory location given by a base\n         address and offset.  The following equality holds:\n\u003c/p\u003e\u003cpre\u003e pokeByteOff addr off x = poke (addr `plusPtr` off) x\n\u003c/pre\u003e",
          "module": "Foreign.Storable",
          "name": "pokeByteOff",
          "package": "haskell2010",
          "signature": "Ptr b -\u003e Int -\u003e a -\u003e IO ()",
          "type": "method"
        },
        "index": {
          "description": "Write value to memory location given by base address and offset The following equality holds pokeByteOff addr off poke addr plusPtr off",
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "pokeByteOff",
          "normalized": "Ptr a-\u003eInt-\u003eb-\u003eIO()",
          "package": "haskell2010",
          "partial": "Byte Off",
          "signature": "Ptr b-\u003eInt-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#v:pokeByteOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a memory area regarded as an array of\n         values of the same kind.  The following equality holds:\n\u003c/p\u003e\u003cpre\u003e pokeElemOff addr idx x = \n   poke (addr `plusPtr` (idx * sizeOf x)) x\n\u003c/pre\u003e",
          "module": "Foreign.Storable",
          "name": "pokeElemOff",
          "package": "haskell2010",
          "signature": "Ptr a -\u003e Int -\u003e a -\u003e IO ()",
          "type": "method"
        },
        "index": {
          "description": "Write value to memory area regarded as an array of values of the same kind The following equality holds pokeElemOff addr idx poke addr plusPtr idx sizeOf",
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "pokeElemOff",
          "normalized": "Ptr a-\u003eInt-\u003ea-\u003eIO()",
          "package": "haskell2010",
          "partial": "Elem Off",
          "signature": "Ptr a-\u003eInt-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#v:pokeElemOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the storage requirements (in bytes) of the argument.\n The value of the argument is not used.\n\u003c/p\u003e",
          "module": "Foreign.Storable",
          "name": "sizeOf",
          "package": "haskell2010",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Computes the storage requirements in bytes of the argument The value of the argument is not used",
          "hierarchy": "Foreign Storable",
          "module": "Foreign.Storable",
          "name": "sizeOf",
          "normalized": "a-\u003eInt",
          "package": "haskell2010",
          "partial": "Of",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign-Storable.html#v:sizeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign",
          "name": "Foreign",
          "package": "haskell2010",
          "source": "src/Foreign.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign",
          "module": "Foreign",
          "name": "Foreign",
          "package": "haskell2010",
          "partial": "Foreign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Foreign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric",
          "name": "Numeric",
          "package": "haskell2010",
          "source": "src/Numeric.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "Numeric",
          "package": "haskell2010",
          "partial": "Numeric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efloatToDigits\u003c/a\u003e\u003c/code\u003e takes a base and a non-negative \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e number,\n and returns a list of digits and an exponent.\n In particular, if \u003ccode\u003ex\u003e=0\u003c/code\u003e, and\n\u003c/p\u003e\u003cpre\u003e floatToDigits base x = ([d1,d2,...,dn], e)\n\u003c/pre\u003e\u003cp\u003ethen\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003en \u003e= 1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ex = 0.d1d2...dn * (base**e)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e0 \u003c= di \u003c= base-1\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Numeric",
          "name": "floatToDigits",
          "package": "haskell2010",
          "signature": "Integer -\u003e a -\u003e ([Int], Int)",
          "type": "function"
        },
        "index": {
          "description": "floatToDigits takes base and non-negative RealFloat number and returns list of digits and an exponent In particular if and floatToDigits base d1 d2 dn then d1d2...dn base di base-1",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "floatToDigits",
          "normalized": "Integer-\u003ea-\u003e([Int],Int)",
          "package": "haskell2010",
          "partial": "To Digits",
          "signature": "Integer-\u003ea-\u003e([Int],Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:floatToDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e value into any type in class \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "fromRat",
          "package": "haskell2010",
          "signature": "Rational -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Converts Rational value into any type in class RealFloat",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "fromRat",
          "normalized": "Rational-\u003ea",
          "package": "haskell2010",
          "partial": "Rat",
          "signature": "Rational-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:fromRat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a non-empty string of decimal digits.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "lexDigits",
          "package": "haskell2010",
          "signature": "ReadS String",
          "type": "function"
        },
        "index": {
          "description": "Reads non-empty string of decimal digits",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "lexDigits",
          "package": "haskell2010",
          "partial": "Digits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:lexDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an unsigned number in decimal notation.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "readDec",
          "package": "haskell2010",
          "signature": "ReadS a",
          "type": "function"
        },
        "index": {
          "description": "Read an unsigned number in decimal notation",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "readDec",
          "package": "haskell2010",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:readDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads an \u003cem\u003eunsigned\u003c/em\u003e \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e value,\n expressed in decimal scientific notation.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "readFloat",
          "package": "haskell2010",
          "signature": "ReadS a",
          "type": "function"
        },
        "index": {
          "description": "Reads an unsigned RealFrac value expressed in decimal scientific notation",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "readFloat",
          "package": "haskell2010",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:readFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an unsigned number in hexadecimal notation.\n Both upper or lower case letters are allowed.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "readHex",
          "package": "haskell2010",
          "signature": "ReadS a",
          "type": "function"
        },
        "index": {
          "description": "Read an unsigned number in hexadecimal notation Both upper or lower case letters are allowed",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "readHex",
          "package": "haskell2010",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:readHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads an \u003cem\u003eunsigned\u003c/em\u003e \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value in an arbitrary base.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "readInt",
          "package": "haskell2010",
          "signature": "a-\u003e (Char -\u003e Bool)-\u003e (Char -\u003e Int)-\u003e ReadS a",
          "type": "function"
        },
        "index": {
          "description": "Reads an unsigned Integral value in an arbitrary base",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "readInt",
          "normalized": "a-\u003e(Char-\u003eBool)-\u003e(Char-\u003eInt)-\u003eReadS a",
          "package": "haskell2010",
          "partial": "Int",
          "signature": "a-\u003e(Char-\u003eBool)-\u003e(Char-\u003eInt)-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:readInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an unsigned number in octal notation.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "readOct",
          "package": "haskell2010",
          "signature": "ReadS a",
          "type": "function"
        },
        "index": {
          "description": "Read an unsigned number in octal notation",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "readOct",
          "package": "haskell2010",
          "partial": "Oct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:readOct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a \u003cem\u003esigned\u003c/em\u003e \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e value, given a reader for an unsigned value.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "readSigned",
          "package": "haskell2010",
          "signature": "ReadS a -\u003e ReadS a",
          "type": "function"
        },
        "index": {
          "description": "Reads signed Real value given reader for an unsigned value",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "readSigned",
          "normalized": "ReadS a-\u003eReadS a",
          "package": "haskell2010",
          "partial": "Signed",
          "signature": "ReadS a-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:readSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e value\n using scientific (exponential) notation (e.g. \u003ccode\u003e2.45e2\u003c/code\u003e, \u003ccode\u003e1.5e-3\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eIn the call \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshowEFloat\u003c/a\u003e\u003c/code\u003e digs val\u003c/code\u003e, if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the value is shown to full precision; if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e d\u003c/code\u003e,\n then at most \u003ccode\u003ed\u003c/code\u003e digits after the decimal point are shown.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "showEFloat",
          "package": "haskell2010",
          "signature": "Maybe Int -\u003e a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Show signed RealFloat value using scientific exponential notation e.g e2 e-3 In the call showEFloat digs val if digs is Nothing the value is shown to full precision if digs is Just then at most digits after the decimal point are shown",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "showEFloat",
          "normalized": "Maybe Int-\u003ea-\u003eShowS",
          "package": "haskell2010",
          "partial": "EFloat",
          "signature": "Maybe Int-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:showEFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e value\n using standard decimal notation (e.g. \u003ccode\u003e245000\u003c/code\u003e, \u003ccode\u003e0.0015\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eIn the call \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshowFFloat\u003c/a\u003e\u003c/code\u003e digs val\u003c/code\u003e, if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the value is shown to full precision; if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e d\u003c/code\u003e,\n then at most \u003ccode\u003ed\u003c/code\u003e digits after the decimal point are shown.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "showFFloat",
          "package": "haskell2010",
          "signature": "Maybe Int -\u003e a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Show signed RealFloat value using standard decimal notation e.g In the call showFFloat digs val if digs is Nothing the value is shown to full precision if digs is Just then at most digits after the decimal point are shown",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "showFFloat",
          "normalized": "Maybe Int-\u003ea-\u003eShowS",
          "package": "haskell2010",
          "partial": "FFloat",
          "signature": "Maybe Int-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:showFFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e value to full precision\n using standard decimal notation for arguments whose absolute value lies\n between \u003ccode\u003e0.1\u003c/code\u003e and \u003ccode\u003e9,999,999\u003c/code\u003e, and scientific notation otherwise.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "showFloat",
          "package": "haskell2010",
          "signature": "a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Show signed RealFloat value to full precision using standard decimal notation for arguments whose absolute value lies between and and scientific notation otherwise",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "showFloat",
          "normalized": "a-\u003eShowS",
          "package": "haskell2010",
          "partial": "Float",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:showFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e value\n using standard decimal notation for arguments whose absolute value lies \n between \u003ccode\u003e0.1\u003c/code\u003e and \u003ccode\u003e9,999,999\u003c/code\u003e, and scientific notation otherwise.\n\u003c/p\u003e\u003cp\u003eIn the call \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshowGFloat\u003c/a\u003e\u003c/code\u003e digs val\u003c/code\u003e, if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the value is shown to full precision; if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e d\u003c/code\u003e,\n then at most \u003ccode\u003ed\u003c/code\u003e digits after the decimal point are shown.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "showGFloat",
          "package": "haskell2010",
          "signature": "Maybe Int -\u003e a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Show signed RealFloat value using standard decimal notation for arguments whose absolute value lies between and and scientific notation otherwise In the call showGFloat digs val if digs is Nothing the value is shown to full precision if digs is Just then at most digits after the decimal point are shown",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "showGFloat",
          "normalized": "Maybe Int-\u003ea-\u003eShowS",
          "package": "haskell2010",
          "partial": "GFloat",
          "signature": "Maybe Int-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:showGFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow \u003cem\u003enon-negative\u003c/em\u003e \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e numbers in base 16.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "showHex",
          "package": "haskell2010",
          "signature": "a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Show non-negative Integral numbers in base",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "showHex",
          "normalized": "a-\u003eShowS",
          "package": "haskell2010",
          "partial": "Hex",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:showHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow \u003cem\u003enon-negative\u003c/em\u003e \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e numbers in base 10.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "showInt",
          "package": "haskell2010",
          "signature": "a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Show non-negative Integral numbers in base",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "showInt",
          "normalized": "a-\u003eShowS",
          "package": "haskell2010",
          "partial": "Int",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:showInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows a \u003cem\u003enon-negative\u003c/em\u003e \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e number using the base specified by the\n first argument, and the character representation specified by the second.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "showIntAtBase",
          "package": "haskell2010",
          "signature": "a -\u003e (Int -\u003e Char) -\u003e a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Shows non-negative Integral number using the base specified by the first argument and the character representation specified by the second",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "showIntAtBase",
          "normalized": "a-\u003e(Int-\u003eChar)-\u003ea-\u003eShowS",
          "package": "haskell2010",
          "partial": "Int At Base",
          "signature": "a-\u003e(Int-\u003eChar)-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:showIntAtBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow \u003cem\u003enon-negative\u003c/em\u003e \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e numbers in base 8.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "showOct",
          "package": "haskell2010",
          "signature": "a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Show non-negative Integral numbers in base",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "showOct",
          "normalized": "a-\u003eShowS",
          "package": "haskell2010",
          "partial": "Oct",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:showOct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a possibly-negative \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e value to a string.\n\u003c/p\u003e",
          "module": "Numeric",
          "name": "showSigned",
          "package": "haskell2010",
          "signature": "(a -\u003e ShowS)-\u003e Int-\u003e a-\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Converts possibly-negative Real value to string",
          "hierarchy": "Numeric",
          "module": "Numeric",
          "name": "showSigned",
          "normalized": "(a-\u003eShowS)-\u003eInt-\u003ea-\u003eShowS",
          "package": "haskell2010",
          "partial": "Signed",
          "signature": "(a-\u003eShowS)-\u003eInt-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Numeric.html#v:showSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Haskell 2010 Prelude: a standard module imported by default\n into all Haskell modules.  For more documentation, see the Haskell 2010\n Report \u003ca\u003ehttp://www.haskell.org/onlinereport/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Prelude",
          "name": "Prelude",
          "package": "haskell2010",
          "source": "src/Prelude.html",
          "type": "module"
        },
        "index": {
          "description": "The Haskell Prelude standard module imported by default into all Haskell modules For more documentation see the Haskell Report http www.haskell.org onlinereport",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Prelude",
          "package": "haskell2010",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Bool",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Bool",
          "package": "haskell2010",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class is used to name the upper and lower limits of a\n type.  \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e is not a superclass of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e since types that are not\n totally ordered may also have upper and lower bounds.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class may be derived for any enumeration type;\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e is the first constructor listed in the \u003ccode\u003edata\u003c/code\u003e declaration\n and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e is the last.\n \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e may also be derived for single-constructor datatypes whose\n constituent types are in \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Bounded",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The Bounded class is used to name the upper and lower limits of type Ord is not superclass of Bounded since types that are not totally ordered may also have upper and lower bounds The Bounded class may be derived for any enumeration type minBound is the first constructor listed in the data declaration and maxBound is the last Bounded may also be derived for single-constructor datatypes whose constituent types are in Bounded",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Bounded",
          "package": "haskell2010",
          "partial": "Bounded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Bounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters (see\n\u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).  This set extends the ISO 8859-1\n(Latin-1) character set (the first 256 characters), which is itself an extension\nof the ASCII character set (the first 128 characters).  A character literal in\nHaskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from the\n\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Char",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first characters which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use toEnum and fromEnum from the Enum class respectively or equivalently ord and chr",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Char",
          "package": "haskell2010",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Double",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Double",
          "package": "haskell2010",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type represents values with two possibilities: a value of\ntype \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type is sometimes used to represent a value which is\neither correct or an error; by convention, the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e constructor is\nused to hold an error value and the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructor is used to\nhold a correct value (mnemonic: \"right\" also means \"correct\").\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Either",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "The Either type represents values with two possibilities value of type Either is either Left or Right The Either type is sometimes used to represent value which is either correct or an error by convention the Left constructor is used to hold an error value and the Right constructor is used to hold correct value mnemonic right also means correct",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Either",
          "package": "haskell2010",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e defines operations on sequentially ordered types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eenumFrom\u003c/code\u003e... methods are used in Haskell's translation of\n arithmetic sequences.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e may be derived for any enumeration type (types\n whose constructors have no fields).  The nullary constructors are\n assumed to be numbered left-to-right by \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003en-1\u003c/code\u003e.\n See Chapter 10 of the \u003cem\u003eHaskell Report\u003c/em\u003e for more details.\n\u003c/p\u003e\u003cp\u003eFor any type that is an instance of class \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e as well as \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e,\n the following should hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The calls \u003ccode\u003e\u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should result in\n   a runtime error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e should give a runtime error if the \n   result value is not representable in the result type.\n   For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e 7 :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e should be defined with an implicit bound,\n   thus:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e    enumFrom     x   = enumFromTo     x maxBound\n    enumFromThen x y = enumFromThenTo x y bound\n      where\n        bound | fromEnum y \u003e= fromEnum x = maxBound\n              | otherwise                = minBound\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "Enum",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Class Enum defines operations on sequentially ordered types The enumFrom methods are used in Haskell translation of arithmetic sequences Instances of Enum may be derived for any enumeration type types whose constructors have no fields The nullary constructors are assumed to be numbered left-to-right by fromEnum from through n-1 See Chapter of the Haskell Report for more details For any type that is an instance of class Bounded as well as Enum the following should hold The calls succ maxBound and pred minBound should result in runtime error fromEnum and toEnum should give runtime error if the result value is not representable in the result type For example toEnum Bool is an error enumFrom and enumFromThen should be defined with an implicit bound thus enumFrom enumFromTo maxBound enumFromThen enumFromThenTo bound where bound fromEnum fromEnum maxBound otherwise minBound",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Enum",
          "package": "haskell2010",
          "partial": "Enum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class defines equality (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and inequality (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e).\n All the basic datatypes exported by the \u003ca\u003ePrelude\u003c/a\u003e are instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e may be derived for any datatype whose constituents are also\n instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Eq",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The Eq class defines equality and inequality All the basic datatypes exported by the Prelude are instances of Eq and Eq may be derived for any datatype whose constituents are also instances of Eq Minimal complete definition either or",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Eq",
          "package": "haskell2010",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "FilePath",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "FilePath",
          "package": "haskell2010",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Float",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Float",
          "package": "haskell2010",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigonometric and hyperbolic functions and related functions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecosh\u003c/a\u003e\u003c/code\u003e,\n      \u003ccode\u003e\u003ca\u003easin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003easinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacosh\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatanh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Floating",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Trigonometric and hyperbolic functions and related functions Minimal complete definition pi exp log sin cos sinh cosh asin acos atan asinh acosh and atanh",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Floating",
          "package": "haskell2010",
          "partial": "Floating",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Floating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFractional numbers, supporting real division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e and (\u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Fractional",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Fractional numbers supporting real division Minimal complete definition fromRational and recip or",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Fractional",
          "package": "haskell2010",
          "partial": "Fractional",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Fractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Functor",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Functor",
          "package": "haskell2010",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a computation which, when performed,\ndoes some I/O before returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is really only one way to \"perform\" an I/O action: bind it to\n\u003ccode\u003eMain.main\u003c/code\u003e in your program.  When your program is run, the I/O will\nbe performed.  It isn't possible to perform I/O from an arbitrary\nfunction, unless that function is itself in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and called\nat some point, directly or indirectly, from \u003ccode\u003eMain.main\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is a monad, so \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be combined using either the do-notation\nor the \u003ccode\u003e\u003e\u003e\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operations from the \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "IO",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "value of type IO is computation which when performed does some before returning value of type There is really only one way to perform an action bind it to Main.main in your program When your program is run the will be performed It isn possible to perform from an arbitrary function unless that function is itself in the IO monad and called at some point directly or indirectly from Main.main IO is monad so IO actions can be combined using either the do-notation or the and operations from the Monad class",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "IO",
          "package": "haskell2010",
          "partial": "IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell 98 type for exceptions in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n Any I/O operation may raise an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e instead of returning a result.\n For a more general type of exception, including also those that arise\n in pure code, see \u003ca\u003eControl.Exception.Exception\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIn Haskell 98, this is an opaque type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "IOError",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "The Haskell type for exceptions in the IO monad Any operation may raise an IOError instead of returning result For more general type of exception including also those that arise in pure code see Control.Exception.Exception In Haskell this is an opaque type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "IOError",
          "package": "haskell2010",
          "partial": "IOError",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:IOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Int",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Int",
          "package": "haskell2010",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision integers.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Integer",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Arbitrary-precision integers",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Integer",
          "package": "haskell2010",
          "partial": "Integer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral numbers, supporting integer division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003equotRem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Integral",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Integral numbers supporting integer division Minimal complete definition quotRem and toInteger",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Integral",
          "package": "haskell2010",
          "partial": "Integral",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Maybe",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Maybe",
          "package": "haskell2010",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class defines the basic operations over a \u003cem\u003emonad\u003c/em\u003e,\na concept from a branch of mathematics known as \u003cem\u003ecategory theory\u003c/em\u003e.\nFrom the perspective of a Haskell programmer, however, it is best to\nthink of a monad as an \u003cem\u003eabstract datatype\u003c/em\u003e of actions.\nHaskell's \u003ccode\u003edo\u003c/code\u003e expressions provide a convenient syntax for writing\nmonadic expressions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e return a \u003e\u003e= k  ==  k a\n m \u003e\u003e= return  ==  m\n m \u003e\u003e= (\\x -\u003e k x \u003e\u003e= h)  ==  (m \u003e\u003e= k) \u003e\u003e= h\n\u003c/pre\u003e\u003cp\u003eInstances of both \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should additionally satisfy the law:\n\u003c/p\u003e\u003cpre\u003e fmap f xs  ==  xs \u003e\u003e= return . f\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\ndefined in the \u003ca\u003ePrelude\u003c/a\u003e satisfy these laws.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Monad",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The Monad class defines the basic operations over monad concept from branch of mathematics known as category theory From the perspective of Haskell programmer however it is best to think of monad as an abstract datatype of actions Haskell do expressions provide convenient syntax for writing monadic expressions Minimal complete definition and return Instances of Monad should satisfy the following laws return return Instances of both Monad and Functor should additionally satisfy the law fmap xs xs return The instances of Monad for lists Maybe and IO defined in the Prelude satisfy these laws",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Monad",
          "package": "haskell2010",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic numeric class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: all except \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(-)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Num",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Basic numeric class Minimal complete definition all except negate or",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Num",
          "package": "haskell2010",
          "partial": "Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class is used for totally ordered datatypes.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e can be derived for any user-defined\n datatype whose constituent types are in \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.  The declared order\n of the constructors in the data declaration determines the ordering\n in derived \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances.  The \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e datatype allows a single\n comparison to determine the precise ordering of two objects.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e.\n Using \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e can be more efficient for complex types.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Ord",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "The Ord class is used for totally ordered datatypes Instances of Ord can be derived for any user-defined datatype whose constituent types are in Ord The declared order of the constructors in the data declaration determines the ordering in derived Ord instances The Ordering datatype allows single comparison to determine the precise ordering of two objects Minimal complete definition either compare or Using compare can be more efficient for complex types",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Ord",
          "package": "haskell2010",
          "partial": "Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Ordering",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Ordering",
          "package": "haskell2010",
          "partial": "Ordering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Ordering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision rational numbers, represented as a ratio of\n two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e values.  A rational number may be constructed using\n the \u003ccode\u003e\u003ca\u003e%\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Rational",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "Arbitrary-precision rational numbers represented as ratio of two Integer values rational number may be constructed using the operator",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Rational",
          "package": "haskell2010",
          "partial": "Rational",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, producing values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e (or, for GHC only, \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e make the following assumptions, which\n derived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e obey:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then the\n   derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will parse only infix applications of\n   the constructor (not the prefix form).\n\u003c/li\u003e\u003cli\u003e Associativity is not used to reduce the occurrence of parentheses,\n   although precedence may be.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, the derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   will parse only the record-syntax form, and furthermore, the fields\n   must be given in the same order as the original declaration.\n\u003c/li\u003e\u003cli\u003e The derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance allows arbitrary Haskell whitespace\n   between tokens of the input string.  Extra parentheses are also\n   allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e in Haskell 98 is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readsPrec d r =  readParen (d \u003e app_prec)\n                          (\\r -\u003e [(Leaf m,t) |\n                                  (\"Leaf\",s) \u003c- lex r,\n                                  (m,t) \u003c- readsPrec (app_prec+1) s]) r\n\n                       ++ readParen (d \u003e up_prec)\n                          (\\r -\u003e [(u:^:v,w) |\n                                  (u,s) \u003c- readsPrec (up_prec+1) r,\n                                  (\":^:\",t) \u003c- lex s,\n                                  (v,w) \u003c- readsPrec (up_prec+1) t]) r\n\n           where app_prec = 10\n                 up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is unused.\n\u003c/p\u003e\u003cp\u003eThe derived instance in GHC is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readPrec = parens $ (prec app_prec $ do\n                                  Ident \"Leaf\" \u003c- lexP\n                                  m \u003c- step readPrec\n                                  return (Leaf m))\n\n                      +++ (prec up_prec $ do\n                                  u \u003c- step readPrec\n                                  Symbol \":^:\" \u003c- lexP\n                                  v \u003c- step readPrec\n                                  return (u :^: v))\n\n           where app_prec = 10\n                 up_prec = 5\n\n         readListPrec = readListPrecDefault\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "Read",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Parsing of String producing values Minimal complete definition readsPrec or for GHC only readPrec Derived instances of Read make the following assumptions which derived instances of Show obey If the constructor is defined to be an infix operator then the derived Read instance will parse only infix applications of the constructor not the prefix form Associativity is not used to reduce the occurrence of parentheses although precedence may be If the constructor is defined using record syntax the derived Read will parse only the record-syntax form and furthermore the fields must be given in the same order as the original declaration The derived Read instance allows arbitrary Haskell whitespace between tokens of the input string Extra parentheses are also allowed For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Read in Haskell is equivalent to instance Read Read Tree where readsPrec readParen app prec Leaf Leaf lex readsPrec app prec readParen up prec readsPrec up prec lex readsPrec up prec where app prec up prec Note that right-associativity of is unused The derived instance in GHC is equivalent to instance Read Read Tree where readPrec parens prec app prec do Ident Leaf lexP step readPrec return Leaf prec up prec do step readPrec Symbol lexP step readPrec return where app prec up prec readListPrec readListPrecDefault",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Read",
          "package": "haskell2010",
          "partial": "Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for a type \u003ccode\u003ea\u003c/code\u003e, represented as a function that takes a\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and returns a list of possible parses as \u003ccode\u003e(a,\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.\n\u003c/p\u003e\u003cp\u003eNote that this kind of backtracking parser is very inefficient;\n reading a large structure may be quite slow (cf \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "ReadS",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "parser for type represented as function that takes String and returns list of possible parses as String pairs Note that this kind of backtracking parser is very inefficient reading large structure may be quite slow cf ReadP",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ReadS",
          "package": "haskell2010",
          "partial": "Read",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:ReadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Real",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Real",
          "package": "haskell2010",
          "partial": "Real",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficient, machine-independent access to the components of a\n floating-point number.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      all except \u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignificand\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "RealFloat",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Efficient machine-independent access to the components of floating-point number Minimal complete definition all except exponent significand scaleFloat and atan2",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "RealFloat",
          "package": "haskell2010",
          "partial": "Real Float",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:RealFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting components of fractions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "RealFrac",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Extracting components of fractions Minimal complete definition properFraction",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "RealFrac",
          "package": "haskell2010",
          "partial": "Real Frac",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:RealFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Prelude",
          "name": "Show",
          "package": "haskell2010",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Show",
          "package": "haskell2010",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eshows\u003c/code\u003e functions return a function that prepends the\n output \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to an existing \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  This allows constant-time\n concatenation of results using function composition.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "ShowS",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "The shows functions return function that prepends the output String to an existing String This allows constant-time concatenation of results using function composition",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ShowS",
          "package": "haskell2010",
          "partial": "Show",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:ShowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a list of characters.  String constants in Haskell are values\n of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "String",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "String is list of characters String constants in Haskell are values of type String",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "String",
          "package": "haskell2010",
          "partial": "String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#t:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(||)",
          "package": "haskell2010",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean or",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(||) ||",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "haskell2010",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication operator.  This operator is redundant, since ordinary\n application \u003ccode\u003e(f x)\u003c/code\u003e means the same as \u003ccode\u003e(f \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e x)\u003c/code\u003e. However, \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e has\n low, right-associative binding precedence, so it sometimes allows\n parentheses to be omitted; for example:\n\u003c/p\u003e\u003cpre\u003e     f $ g $ h x  =  f (g (h x))\n\u003c/pre\u003e\u003cp\u003eIt is also useful in higher-order situations, such as \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e 0) xs\u003c/code\u003e,\n or \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e) fs xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "($)",
          "package": "haskell2010",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Application operator This operator is redundant since ordinary application means the same as However has low right-associative binding precedence so it sometimes allows parentheses to be omitted for example It is also useful in higher-order situations such as map xs or zipWith fs xs",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "($) $",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "haskell2010",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict (call-by-value) application, defined in terms of \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "($!)",
          "package": "haskell2010",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Prelude.html#%24%21",
          "type": "function"
        },
        "index": {
          "description": "Strict call-by-value application defined in terms of seq",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "($!) $!",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "haskell2010",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-36--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(&&)",
          "package": "haskell2010",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean and",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(&&) &&",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "haskell2010",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(*)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(**)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(**) **",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(+)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(-)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efractional division\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(/)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "fractional division",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(/) /",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(/=)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(/=) /=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003c)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003c) \u003c",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003c=)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003c=) \u003c=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(==)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(==) ==",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003e)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e) \u003e",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003e=)",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e=) \u003e=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, discarding any value produced\n by the first, like sequencing operators (such as the semicolon)\n in imperative languages.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(\u003e\u003e)",
          "package": "haskell2010",
          "signature": "m a -\u003e m b -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions discarding any value produced by the first like sequencing operators such as the semicolon in imperative languages",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "haskell2010",
          "signature": "m a-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, passing any value produced\n by the first as an argument to the second.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(\u003e\u003e=)",
          "package": "haskell2010",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions passing any value produced by the first as an argument to the second",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "haskell2010",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraise a number to a non-negative integral power\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(^)",
          "package": "haskell2010",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "raise number to non-negative integral power",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(^) ^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraise a number to an integral power\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(^^)",
          "package": "haskell2010",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "raise number to an integral power",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(^^) ^^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:-94--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction composition.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(.)",
          "package": "haskell2010",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Function composition",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(.) .",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "haskell2010",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "EQ",
          "package": "haskell2010",
          "signature": "EQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "EQ",
          "package": "haskell2010",
          "partial": "EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "False",
          "package": "haskell2010",
          "signature": "False",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "False",
          "package": "haskell2010",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:False"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "GT",
          "package": "haskell2010",
          "signature": "GT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "GT",
          "package": "haskell2010",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "LT",
          "package": "haskell2010",
          "signature": "LT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "LT",
          "package": "haskell2010",
          "partial": "LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:LT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Left",
          "package": "haskell2010",
          "signature": "Left a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Left",
          "package": "haskell2010",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Right",
          "package": "haskell2010",
          "signature": "Right b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Right",
          "package": "haskell2010",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "True",
          "package": "haskell2010",
          "signature": "True",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "True",
          "package": "haskell2010",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:True"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute value.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "abs",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Absolute value",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "abs",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "acos",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "acos",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "acosh",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "acosh",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "appendFile",
          "package": "haskell2010",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:appendFile\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:appendFile\"]"
        },
        "index": {
          "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "haskell2010",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.  It is usually\n used as an infix operator, and its typing forces its first argument\n (which is usually overloaded) to have the same type as the second.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "asTypeOf",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "asTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the second",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "asTypeOf",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "partial": "Type Of",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:asTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "asin",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "asin",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "asinh",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "asinh",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "atan",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "atan",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea version of arctangent taking two real floating-point arguments.\n For real floating \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e computes the angle\n (from the positive x-axis) of the vector from the origin to the\n point \u003ccode\u003e(x,y)\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e returns a value in the range [\u003ccode\u003e-pi\u003c/code\u003e,\n \u003ccode\u003epi\u003c/code\u003e].  It follows the Common Lisp semantics for the origin when\n signed zeroes are supported.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y 1\u003c/code\u003e, with \u003ccode\u003ey\u003c/code\u003e in a type\n that is \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e, should return the same value as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e.\n A default definition of \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e is provided, but implementors\n can provide a more accurate implementation.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "atan2",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "version of arctangent taking two real floating-point arguments For real floating and atan2 computes the angle from the positive x-axis of the vector from the origin to the point atan2 returns value in the range pi pi It follows the Common Lisp semantics for the origin when signed zeroes are supported atan2 with in type that is RealFloat should return the same value as atan default definition of atan2 is provided but implementors can provide more accurate implementation",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "atan2",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:atan2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "atanh",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "atanh",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e function establishes a handler that receives any\n \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e raised in the action protected by \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n An \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e is caught by\n the most recent handler established by one of the exception handling\n functions.  These handlers are\n not selective: all \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003es are caught.  Exception propagation\n must be explicitly provided in a handler by re-raising any unwanted\n exceptions.  For example, in\n\u003c/p\u003e\u003cpre\u003e f = catch g (\\e -\u003e if IO.isEOFError e then return [] else ioError e)\n\u003c/pre\u003e\u003cp\u003ethe function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e[]\u003c/code\u003e when an end-of-file exception\n (cf. \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e) occurs in \u003ccode\u003eg\u003c/code\u003e; otherwise, the\n exception is propagated to the next outer handler.\n\u003c/p\u003e\u003cp\u003eWhen an exception propagates outside the main program, the Haskell\n system prints the associated \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e value and exits the program.\n\u003c/p\u003e\u003cp\u003eNon-I/O exceptions are not caught by this variant; to catch all\n exceptions, use \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eControl.Exception\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "catch",
          "package": "haskell2010",
          "signature": "IO a -\u003e (IOError -\u003e IO a) -\u003e IO a",
          "source": "src/Prelude.html#catch",
          "type": "function"
        },
        "index": {
          "description": "The catch function establishes handler that receives any IOError raised in the action protected by catch An IOError is caught by the most recent handler established by one of the exception handling functions These handlers are not selective all IOError are caught Exception propagation must be explicitly provided in handler by re-raising any unwanted exceptions For example in catch if IO.isEOFError then return else ioError the function returns when an end-of-file exception cf isEOFError occurs in otherwise the exception is propagated to the next outer handler When an exception propagates outside the main program the Haskell system prints the associated IOError value and exits the program Non-I exceptions are not caught by this variant to catch all exceptions use catch from Control.Exception",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "catch",
          "normalized": "IO a-\u003e(IOError-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "signature": "IO a-\u003e(IOError-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the least integer not less than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "ceiling",
          "package": "haskell2010",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "ceiling returns the least integer not less than",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ceiling",
          "normalized": "a-\u003eb",
          "package": "haskell2010",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "compare",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e Ordering",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "compare",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant function.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "const",
          "package": "haskell2010",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Constant function",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "const",
          "normalized": "a-\u003eb-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "cos",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "cos",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "cosh",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "cosh",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e converts an uncurried function to a curried function.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "curry",
          "package": "haskell2010",
          "signature": "((a, b) -\u003e c) -\u003e a -\u003e b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "curry converts an uncurried function to curried function",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "curry",
          "normalized": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "haskell2010",
          "signature": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e applied to a real floating-point\n number returns the significand expressed as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e and an\n appropriately scaled exponent (an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e).  If \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e\n yields \u003ccode\u003e(m,n)\u003c/code\u003e, then \u003ccode\u003ex\u003c/code\u003e is equal in value to \u003ccode\u003em*b^^n\u003c/code\u003e, where \u003ccode\u003eb\u003c/code\u003e\n is the floating-point radix, and furthermore, either \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e\n are both zero or else \u003ccode\u003eb^(d-1) \u003c= \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e m \u003c b^d\u003c/code\u003e, where \u003ccode\u003ed\u003c/code\u003e is\n the value of \u003ccode\u003e\u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e.\n In particular, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e 0 = (0,0)\u003c/code\u003e. If the type\n contains a negative zero, also \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e (-0.0) = (0,0)\u003c/code\u003e.\n \u003cem\u003eThe result of\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eis unspecified if either of\u003c/em\u003e\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisNaN\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisInfinite\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eis\u003c/em\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "decodeFloat",
          "package": "haskell2010",
          "signature": "a -\u003e (Integer, Int)",
          "type": "method"
        },
        "index": {
          "description": "The function decodeFloat applied to real floating-point number returns the significand expressed as an Integer and an appropriately scaled exponent an Int If decodeFloat yields then is equal in value to where is the floating-point radix and furthermore either and are both zero or else d-1 abs where is the value of floatDigits In particular decodeFloat If the type contains negative zero also decodeFloat The result of decodeFloat is unspecified if either of isNaN or isInfinite is True",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "decodeFloat",
          "normalized": "a-\u003e(Integer,Int)",
          "package": "haskell2010",
          "partial": "Float",
          "signature": "a-\u003e(Integer,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:decodeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger division truncated toward negative infinity\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "div",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer division truncated toward negative infinity",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "div",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "divMod",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e (a, a)",
          "type": "method"
        },
        "index": {
          "description": "simultaneous div and mod",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "divMod",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "haskell2010",
          "partial": "Mod",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:divMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase analysis for the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n If the value is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, apply the first function to \u003ccode\u003ea\u003c/code\u003e;\n if it is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, apply the second function to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "either",
          "package": "haskell2010",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Case analysis for the Either type If the value is Left apply the first function to if it is Right apply the second function to",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "either",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "haskell2010",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e performs the inverse of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e in the\n sense that for finite \u003ccode\u003ex\u003c/code\u003e with the exception of \u003ccode\u003e-0.0\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003euncurry\u003c/code\u003e \u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x) = x\u003c/code\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e m n\u003c/code\u003e is one of the two closest representable\n floating-point numbers to \u003ccode\u003em*b^^n\u003c/code\u003e (or \u003ccode\u003e&#177;Infinity\u003c/code\u003e if overflow\n occurs); usually the closer, but if \u003ccode\u003em\u003c/code\u003e contains too many bits,\n the result may be rounded in the wrong direction.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "encodeFloat",
          "package": "haskell2010",
          "signature": "Integer -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "encodeFloat performs the inverse of decodeFloat in the sense that for finite with the exception of uncurry encodeFloat decodeFloat encodeFloat is one of the two closest representable floating-point numbers to or Infinity if overflow occurs usually the closer but if contains too many bits the result may be rounded in the wrong direction",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "encodeFloat",
          "normalized": "Integer-\u003eInt-\u003ea",
          "package": "haskell2010",
          "partial": "Float",
          "signature": "Integer-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:encodeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "enumFrom",
          "package": "haskell2010",
          "signature": "a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFrom",
          "normalized": "a-\u003e[a]",
          "package": "haskell2010",
          "partial": "From",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "enumFromThen",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromThen",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "haskell2010",
          "partial": "From Then",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:enumFromThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "enumFromThenTo",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromThenTo",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]",
          "package": "haskell2010",
          "partial": "From Then To",
          "signature": "a-\u003ea-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "enumFromTo",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of n..m",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromTo",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "haskell2010",
          "partial": "From To",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e stops execution and displays an error message.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "error",
          "package": "haskell2010",
          "signature": "[Char] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "error stops execution and displays an error message",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "error",
          "normalized": "[Char]-\u003ea",
          "package": "haskell2010",
          "signature": "[Char]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "even",
          "package": "haskell2010",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "even",
          "normalized": "a-\u003eBool",
          "package": "haskell2010",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:even"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "exp",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "exp",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e corresponds to the second component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e 0 = 0\u003c/code\u003e and for finite nonzero \u003ccode\u003ex\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e x = snd (\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x) + \u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e.\n If \u003ccode\u003ex\u003c/code\u003e is a finite floating-point number, it is equal in value to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignificand\u003c/a\u003e\u003c/code\u003e x * b ^^ \u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e, where \u003ccode\u003eb\u003c/code\u003e is the\n floating-point radix.\n The behaviour is unspecified on infinite or \u003ccode\u003eNaN\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "exponent",
          "package": "haskell2010",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "exponent corresponds to the second component of decodeFloat exponent and for finite nonzero exponent snd decodeFloat floatDigits If is finite floating-point number it is equal in value to significand exponent where is the floating-point radix The behaviour is unspecified on infinite or NaN values",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "exponent",
          "normalized": "a-\u003eInt",
          "package": "haskell2010",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with a message.  This operation is not part of the\n mathematical definition of a monad, but is invoked on pattern-match\n failure in a \u003ccode\u003edo\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fail",
          "package": "haskell2010",
          "signature": "String -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Fail with message This operation is not part of the mathematical definition of monad but is invoked on pattern-match failure in do expression",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "haskell2010",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes its (first) two arguments in the reverse order of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "flip",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "flip takes its first two arguments in the reverse order of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "flip",
          "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "haskell2010",
          "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the number of digits of\n \u003ccode\u003e\u003ca\u003efloatRadix\u003c/a\u003e\u003c/code\u003e in the significand\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "floatDigits",
          "package": "haskell2010",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the number of digits of floatRadix in the significand",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "floatDigits",
          "normalized": "a-\u003eInt",
          "package": "haskell2010",
          "partial": "Digits",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:floatDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the radix of the representation\n (often \u003ccode\u003e2\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "floatRadix",
          "package": "haskell2010",
          "signature": "a -\u003e Integer",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the radix of the representation often",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "floatRadix",
          "normalized": "a-\u003eInteger",
          "package": "haskell2010",
          "partial": "Radix",
          "signature": "a-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:floatRadix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the lowest and highest values\n the exponent may assume\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "floatRange",
          "package": "haskell2010",
          "signature": "a -\u003e (Int, Int)",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the lowest and highest values the exponent may assume",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "floatRange",
          "normalized": "a-\u003e(Int,Int)",
          "package": "haskell2010",
          "partial": "Range",
          "signature": "a-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:floatRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the greatest integer not greater than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "floor",
          "package": "haskell2010",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "floor returns the greatest integer not greater than",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "floor",
          "normalized": "a-\u003eb",
          "package": "haskell2010",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "fmap",
          "package": "haskell2010",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "haskell2010",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is implementation-dependent what \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e returns when\n applied to a value that is too large to fit in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fromEnum",
          "package": "haskell2010",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Convert to an Int It is implementation-dependent what fromEnum returns when applied to value that is too large to fit in an Int",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fromEnum",
          "normalized": "a-\u003eInt",
          "package": "haskell2010",
          "partial": "Enum",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:fromEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n An integer literal represents the application of the function\n \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e to the appropriate value of type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e,\n so such literals have type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fromInteger",
          "package": "haskell2010",
          "signature": "Integer -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Conversion from an Integer An integer literal represents the application of the function fromInteger to the appropriate value of type Integer so such literals have type Num",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fromInteger",
          "normalized": "Integer-\u003ea",
          "package": "haskell2010",
          "partial": "Integer",
          "signature": "Integer-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion from integral types\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fromIntegral",
          "package": "haskell2010",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion from integral types",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fromIntegral",
          "normalized": "a-\u003eb",
          "package": "haskell2010",
          "partial": "Integral",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:fromIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e (that is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n A floating literal stands for an application of \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e\n to a value of type \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, so such literals have type\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fromRational",
          "package": "haskell2010",
          "signature": "Rational -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Conversion from Rational that is Ratio Integer floating literal stands for an application of fromRational to value of type Rational so such literals have type Fractional",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fromRational",
          "normalized": "Rational-\u003ea",
          "package": "haskell2010",
          "partial": "Rational",
          "signature": "Rational-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:fromRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first component of a pair.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "fst",
          "package": "haskell2010",
          "signature": "(a, b) -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the first component of pair",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fst",
          "normalized": "(a,b)-\u003ea",
          "package": "haskell2010",
          "signature": "(a,b)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the greatest (positive) integer that divides both \u003ccode\u003ex\u003c/code\u003e\n and \u003ccode\u003ey\u003c/code\u003e; for example \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e (-3) 6\u003c/code\u003e = \u003ccode\u003e3\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e (-3) (-6)\u003c/code\u003e = \u003ccode\u003e3\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 4\u003c/code\u003e = \u003ccode\u003e4\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 0\u003c/code\u003e raises a runtime error.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "gcd",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Prelude.html#gcd",
          "type": "function"
        },
        "index": {
          "description": "gcd is the greatest positive integer that divides both and for example gcd gcd gcd gcd raises runtime error",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "gcd",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:gcd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "getChar",
          "package": "haskell2010",
          "signature": "IO Char",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:getChar\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:getChar\"]"
        },
        "index": {
          "description": "Read character from the standard input device same as hGetChar stdin",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "getChar",
          "package": "haskell2010",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read lazily as it is needed\n (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "getContents",
          "package": "haskell2010",
          "signature": "IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:getContents\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:getContents\"]"
        },
        "index": {
          "description": "The getContents operation returns all user input as single string which is read lazily as it is needed same as hGetContents stdin",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "getContents",
          "package": "haskell2010",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "getLine",
          "package": "haskell2010",
          "signature": "IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:getLine\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:getLine\"]"
        },
        "index": {
          "description": "Read line from the standard input device same as hGetLine stdin",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "getLine",
          "package": "haskell2010",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity function.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "id",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Identity function",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "id",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eString-\u003eString\u003c/code\u003e\n as its argument.  The entire input from the standard input device is\n passed to this function as its argument, and the resulting string is\n output on the standard output device.\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "interact",
          "package": "haskell2010",
          "signature": "(String -\u003e String) -\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:interact\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:interact\"]"
        },
        "index": {
          "description": "The interact function takes function of type String String as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "interact",
          "normalized": "(String-\u003eString)-\u003eIO()",
          "package": "haskell2010",
          "signature": "(String-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO.Error\"]",
          "name": "ioError",
          "package": "haskell2010",
          "signature": "IOError -\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:ioError\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:ioError\"]"
        },
        "index": {
          "description": "Raise an IOError in the IO monad",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ioError",
          "normalized": "IOError-\u003eIO a",
          "package": "haskell2010",
          "partial": "Error",
          "signature": "IOError-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:ioError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is too small to be represented in\n normalized format\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "isDenormalized",
          "package": "haskell2010",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is too small to be represented in normalized format",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "isDenormalized",
          "normalized": "a-\u003eBool",
          "package": "haskell2010",
          "partial": "Denormalized",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:isDenormalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE floating point number\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "isIEEE",
          "package": "haskell2010",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE floating point number",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "isIEEE",
          "normalized": "a-\u003eBool",
          "package": "haskell2010",
          "partial": "IEEE",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:isIEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE infinity or negative infinity\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "isInfinite",
          "package": "haskell2010",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE infinity or negative infinity",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "isInfinite",
          "normalized": "a-\u003eBool",
          "package": "haskell2010",
          "partial": "Infinite",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:isInfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE \"not-a-number\" (NaN) value\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "isNaN",
          "package": "haskell2010",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE not-a-number NaN value",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "isNaN",
          "normalized": "a-\u003eBool",
          "package": "haskell2010",
          "partial": "Na",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:isNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE negative zero\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "isNegativeZero",
          "package": "haskell2010",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE negative zero",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "isNegativeZero",
          "normalized": "a-\u003eBool",
          "package": "haskell2010",
          "partial": "Negative Zero",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:isNegativeZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the smallest positive integer that both \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e divide.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "lcm",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "lcm is the smallest positive integer that both and divide",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "lcm",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:lcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e function reads a single lexeme from the input, discarding\n initial white space, and returning the characters that constitute the\n lexeme.  If the input string contains only white space, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e returns a\n single successful `lexeme' consisting of the empty string.  (Thus\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e \"\" = [(\"\",\"\")]\u003c/code\u003e.)  If there is no legal lexeme at the\n beginning of the input string, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e fails (i.e. returns \u003ccode\u003e[]\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis lexer is not completely faithful to the Haskell lexical syntax\n in the following respects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Qualified names are not handled properly\n\u003c/li\u003e\u003cli\u003e Octal and hexadecimal numerics are not recognized as a single token\n\u003c/li\u003e\u003cli\u003e Comments are not treated properly\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Prelude",
          "name": "lex",
          "package": "haskell2010",
          "signature": "ReadS String",
          "type": "function"
        },
        "index": {
          "description": "The lex function reads single lexeme from the input discarding initial white space and returning the characters that constitute the lexeme If the input string contains only white space lex returns single successful lexeme consisting of the empty string Thus lex If there is no legal lexeme at the beginning of the input string lex fails i.e returns This lexer is not completely faithful to the Haskell lexical syntax in the following respects Qualified names are not handled properly Octal and hexadecimal numerics are not recognized as single token Comments are not treated properly",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "lex",
          "package": "haskell2010",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:lex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "log",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "log",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "logBase",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "logBase",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "partial": "Base",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:logBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "max",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "max",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "maxBound",
          "package": "haskell2010",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "maxBound",
          "package": "haskell2010",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:maxBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "min",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "min",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "minBound",
          "package": "haskell2010",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "minBound",
          "package": "haskell2010",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:minBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger modulus, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `div` y)*y + (x `mod` y) == x\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "mod",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer modulus satisfying div mod",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "mod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary negation.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "negate",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Unary negation",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"not\"\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "not",
          "package": "haskell2010",
          "signature": "Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean not",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "not",
          "normalized": "Bool-\u003eBool",
          "package": "haskell2010",
          "signature": "Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "odd",
          "package": "haskell2010",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "odd",
          "normalized": "a-\u003eBool",
          "package": "haskell2010",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:odd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e is defined as the value \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  It helps to make\n guards more readable.  eg.\n\u003c/p\u003e\u003cpre\u003e  f x | x \u003c 0     = ...\n      | otherwise = ...\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "otherwise",
          "package": "haskell2010",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "otherwise is defined as the value True It helps to make guards more readable eg otherwise",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "otherwise",
          "package": "haskell2010",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:otherwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "pi",
          "package": "haskell2010",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "pi",
          "package": "haskell2010",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe predecessor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e subtracts 1.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "pred",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the predecessor of value For numeric types pred subtracts",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "pred",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device.\n Printable types are those that are instances of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\n converts values to strings for output using the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e operation and\n adds a newline.\n\u003c/p\u003e\u003cp\u003eFor example, a program to print the first 20 integers and their\n powers of 2 could be written as:\n\u003c/p\u003e\u003cpre\u003e main = print ([(n, 2^n) | n \u003c- [0..19]])\n\u003c/pre\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "print",
          "package": "haskell2010",
          "signature": "a -\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:print\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:print\"]"
        },
        "index": {
          "description": "The print function outputs value of any printable type to the standard output device Printable types are those that are instances of class Show print converts values to strings for output using the show operation and adds newline For example program to print the first integers and their powers of could be written as main print",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "haskell2010",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e takes a real fractional number \u003ccode\u003ex\u003c/code\u003e\n and returns a pair \u003ccode\u003e(n,f)\u003c/code\u003e such that \u003ccode\u003ex = n+f\u003c/code\u003e, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e is an integral number with the same sign as \u003ccode\u003ex\u003c/code\u003e; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ef\u003c/code\u003e is a fraction with the same type and sign as \u003ccode\u003ex\u003c/code\u003e,\n   and with absolute value less than \u003ccode\u003e1\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default definitions of the \u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e functions are in terms of \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "properFraction",
          "package": "haskell2010",
          "signature": "a -\u003e (b, a)",
          "type": "method"
        },
        "index": {
          "description": "The function properFraction takes real fractional number and returns pair such that and is an integral number with the same sign as and is fraction with the same type and sign as and with absolute value less than The default definitions of the ceiling floor truncate and round functions are in terms of properFraction",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "properFraction",
          "normalized": "a-\u003e(b,a)",
          "package": "haskell2010",
          "partial": "Fraction",
          "signature": "a-\u003e(b,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:properFraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "putChar",
          "package": "haskell2010",
          "signature": "Char -\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:putChar\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:putChar\"]"
        },
        "index": {
          "description": "Write character to the standard output device same as hPutChar stdout",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "putChar",
          "normalized": "Char-\u003eIO()",
          "package": "haskell2010",
          "partial": "Char",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "putStr",
          "package": "haskell2010",
          "signature": "String -\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:putStr\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:putStr\"]"
        },
        "index": {
          "description": "Write string to the standard output device same as hPutStr stdout",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "haskell2010",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "putStrLn",
          "package": "haskell2010",
          "signature": "String -\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:putStrLn\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:putStrLn\"]"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "haskell2010",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger division truncated toward zero\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "quot",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer division truncated toward zero",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "quot",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "quotRem",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e (a, a)",
          "type": "method"
        },
        "index": {
          "description": "simultaneous quot and rem",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "quotRem",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "haskell2010",
          "partial": "Rem",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:quotRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function reads input from a string, which must be\n completely consumed by the input process.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "read",
          "package": "haskell2010",
          "signature": "String -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The read function reads input from string which must be completely consumed by the input process",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "read",
          "normalized": "String-\u003ea",
          "package": "haskell2010",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "readFile",
          "package": "haskell2010",
          "signature": "FilePath -\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:readFile\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:readFile\"]"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "haskell2010",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e function is similar to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e except that it signals\n parse failure to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad instead of terminating the program.\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "readIO",
          "package": "haskell2010",
          "signature": "String -\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:readIO\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:readIO\"]"
        },
        "index": {
          "description": "The readIO function is similar to read except that it signals parse failure to the IO monad instead of terminating the program",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readIO",
          "normalized": "String-\u003eIO a",
          "package": "haskell2010",
          "partial": "IO",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003ereadList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of parsing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be are\n expected to use double quotes, rather than square brackets.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "readList",
          "package": "haskell2010",
          "signature": "ReadS [a]",
          "type": "method"
        },
        "index": {
          "description": "The method readList is provided to allow the programmer to give specialised way of parsing lists of values For example this is used by the predefined Read instance of the Char type where values of type String should be are expected to use double quotes rather than square brackets",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readList",
          "normalized": "ReadS[a]",
          "package": "haskell2010",
          "partial": "List",
          "signature": "ReadS[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:readList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "readLn",
          "package": "haskell2010",
          "signature": "IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:readLn\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:readLn\"]"
        },
        "index": {
          "description": "The readLn function combines getLine and readIO",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readLn",
          "package": "haskell2010",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but surrounded with\n parentheses.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but optionally\n surrounded with parentheses.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "readParen",
          "package": "haskell2010",
          "signature": "Bool -\u003e ReadS a -\u003e ReadS a",
          "type": "function"
        },
        "index": {
          "description": "readParen True parses what parses but surrounded with parentheses readParen False parses what parses but optionally surrounded with parentheses",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readParen",
          "normalized": "Bool-\u003eReadS a-\u003eReadS a",
          "package": "haskell2010",
          "partial": "Paren",
          "signature": "Bool-\u003eReadS a-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:readParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "reads",
          "package": "haskell2010",
          "signature": "ReadS a",
          "type": "function"
        },
        "index": {
          "description": "equivalent to readsPrec with precedence of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "reads",
          "package": "haskell2010",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:reads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempts to parse a value from the front of the string, returning\n a list of (parsed value, remaining string) pairs.  If there is no\n successful parse, the returned list is empty.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "readsPrec",
          "package": "haskell2010",
          "signature": "readsPrec",
          "type": "method"
        },
        "index": {
          "description": "attempts to parse value from the front of the string returning list of parsed value remaining string pairs If there is no successful parse the returned list is empty Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "readsPrec",
          "package": "haskell2010",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:readsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion to fractional types\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "realToFrac",
          "package": "haskell2010",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion to fractional types",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "realToFrac",
          "normalized": "a-\u003eb",
          "package": "haskell2010",
          "partial": "To Frac",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:realToFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereciprocal fraction\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "recip",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "reciprocal fraction",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "recip",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger remainder, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `quot` y)*y + (x `rem` y) == x\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "rem",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer remainder satisfying quot rem",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "rem",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a value into the monadic type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "return",
          "package": "haskell2010",
          "signature": "a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Inject value into the monadic type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "haskell2010",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the nearest integer to \u003ccode\u003ex\u003c/code\u003e;\n   the even integer if \u003ccode\u003ex\u003c/code\u003e is equidistant between two integers\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "round",
          "package": "haskell2010",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "round returns the nearest integer to the even integer if is equidistant between two integers",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "round",
          "normalized": "a-\u003eb",
          "package": "haskell2010",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiplies a floating-point number by an integer power of the radix\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "scaleFloat",
          "package": "haskell2010",
          "signature": "Int -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "multiplies floating-point number by an integer power of the radix",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "scaleFloat",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "haskell2010",
          "partial": "Float",
          "signature": "Int-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:scaleFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its first argument to head normal form, and then returns its second\n \targument as the result. \n\u003c/p\u003e",
          "module": "Prelude",
          "name": "seq",
          "package": "haskell2010",
          "signature": "a -\u003e b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its first argument to head normal form and then returns its second argument as the result",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "seq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "haskell2010",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, using precedence context\n zero, and returning an ordinary \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "show",
          "package": "haskell2010",
          "signature": "a -\u003e String",
          "type": "method"
        },
        "index": {
          "description": "specialised variant of showsPrec using precedence context zero and returning an ordinary String",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "show",
          "normalized": "a-\u003eString",
          "package": "haskell2010",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the character unchanged.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showChar",
          "package": "haskell2010",
          "signature": "Char -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function converting Char to show function that simply prepends the character unchanged",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showChar",
          "normalized": "Char-\u003eShowS",
          "package": "haskell2010",
          "partial": "Char",
          "signature": "Char-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:showChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of showing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be shown\n in double quotes, rather than between square brackets.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showList",
          "package": "haskell2010",
          "signature": "[a] -\u003e ShowS",
          "type": "method"
        },
        "index": {
          "description": "The method showList is provided to allow the programmer to give specialised way of showing lists of values For example this is used by the predefined Show instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showList",
          "normalized": "[a]-\u003eShowS",
          "package": "haskell2010",
          "partial": "List",
          "signature": "[a]-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:showList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function that surrounds the inner show function with\n parentheses when the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e parameter is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showParen",
          "package": "haskell2010",
          "signature": "Bool -\u003e ShowS -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function that surrounds the inner show function with parentheses when the Bool parameter is True",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showParen",
          "normalized": "Bool-\u003eShowS-\u003eShowS",
          "package": "haskell2010",
          "partial": "Paren",
          "signature": "Bool-\u003eShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:showParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the string unchanged.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showString",
          "package": "haskell2010",
          "signature": "String -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function converting String to show function that simply prepends the string unchanged",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showString",
          "normalized": "String-\u003eShowS",
          "package": "haskell2010",
          "partial": "String",
          "signature": "String-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:showString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "shows",
          "package": "haskell2010",
          "signature": "a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "equivalent to showsPrec with precedence of",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "shows",
          "normalized": "a-\u003eShowS",
          "package": "haskell2010",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:shows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value to a readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e should satisfy the law\n\u003c/p\u003e\u003cpre\u003e showsPrec d x r ++ s  ==  showsPrec d x (r ++ s)\n\u003c/pre\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "showsPrec",
          "package": "haskell2010",
          "signature": "showsPrec",
          "type": "method"
        },
        "index": {
          "description": "Convert value to readable String showsPrec should satisfy the law showsPrec showsPrec Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "showsPrec",
          "package": "haskell2010",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:showsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e, scaled to lie in the open\n interval (\u003ccode\u003e-1\u003c/code\u003e,\u003ccode\u003e1\u003c/code\u003e), either \u003ccode\u003e0.0\u003c/code\u003e or of absolute value \u003ccode\u003e\u003e= 1/b\u003c/code\u003e,\n where \u003ccode\u003eb\u003c/code\u003e is the floating-point radix.\n The behaviour is unspecified on infinite or \u003ccode\u003eNaN\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "significand",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "The first component of decodeFloat scaled to lie in the open interval either or of absolute value where is the floating-point radix The behaviour is unspecified on infinite or NaN values",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "significand",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:significand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign of a number.\n The functions \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e should satisfy the law:\n\u003c/p\u003e\u003cpre\u003e abs x * signum x == x\n\u003c/pre\u003e\u003cp\u003eFor real numbers, the \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e is either \u003ccode\u003e-1\u003c/code\u003e (negative), \u003ccode\u003e0\u003c/code\u003e (zero)\n or \u003ccode\u003e1\u003c/code\u003e (positive).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "signum",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Sign of number The functions abs and signum should satisfy the law abs signum For real numbers the signum is either negative zero or positive",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "signum",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:signum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "sin",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sin",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "sinh",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sinh",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the second component of a pair.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "snd",
          "package": "haskell2010",
          "signature": "(a, b) -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Extract the second component of pair",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "snd",
          "normalized": "(a,b)-\u003eb",
          "package": "haskell2010",
          "signature": "(a,b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "sqrt",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sqrt",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e-\u003c/code\u003e is treated specially in the Haskell grammar,\n \u003ccode\u003e(-\u003c/code\u003e \u003cem\u003ee\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is not a section, but an application of prefix negation.\n However, \u003ccode\u003e(\u003ccode\u003e\u003ca\u003esubtract\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e \u003cem\u003eexp\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is equivalent to the disallowed section.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "subtract",
          "package": "haskell2010",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "the same as flip Because is treated specially in the Haskell grammar is not section but an application of prefix negation However subtract exp is equivalent to the disallowed section",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "subtract",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe successor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e adds 1.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "succ",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the successor of value For numeric types succ adds",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "succ",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "tan",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "tan",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "tanh",
          "package": "haskell2010",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "tanh",
          "normalized": "a-\u003ea",
          "package": "haskell2010",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "toEnum",
          "package": "haskell2010",
          "signature": "Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Convert from an Int",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "toEnum",
          "normalized": "Int-\u003ea",
          "package": "haskell2010",
          "partial": "Enum",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:toEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "toInteger",
          "package": "haskell2010",
          "signature": "a -\u003e Integer",
          "type": "method"
        },
        "index": {
          "description": "conversion to Integer",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "toInteger",
          "normalized": "a-\u003eInteger",
          "package": "haskell2010",
          "partial": "Integer",
          "signature": "a-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:toInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe rational equivalent of its real argument with full precision\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "toRational",
          "package": "haskell2010",
          "signature": "a -\u003e Rational",
          "type": "method"
        },
        "index": {
          "description": "the rational equivalent of its real argument with full precision",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "toRational",
          "normalized": "a-\u003eRational",
          "package": "haskell2010",
          "partial": "Rational",
          "signature": "a-\u003eRational",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:toRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the integer nearest \u003ccode\u003ex\u003c/code\u003e between zero and \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "truncate",
          "package": "haskell2010",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "truncate returns the integer nearest between zero and",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "truncate",
          "normalized": "a-\u003eb",
          "package": "haskell2010",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e converts a curried function to a function on pairs.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "uncurry",
          "package": "haskell2010",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "uncurry converts curried function to function on pairs",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "uncurry",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "package": "haskell2010",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n It is expected that compilers will recognize this and insert error\n messages which are more appropriate to the context in which \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\n appears. \n\u003c/p\u003e",
          "module": "Prelude",
          "name": "undefined",
          "package": "haskell2010",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "special case of error It is expected that compilers will recognize this and insert error messages which are more appropriate to the context in which undefined appears",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "undefined",
          "package": "haskell2010",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003euntil\u003c/a\u003e\u003c/code\u003e p f\u003c/code\u003e yields the result of applying \u003ccode\u003ef\u003c/code\u003e until \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "until",
          "package": "haskell2010",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "until yields the result of applying until holds",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "until",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "haskell2010",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e value with a string describing the error.\n The \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e instance of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class raises a\n \u003ccode\u003e\u003ca\u003euserError\u003c/a\u003e\u003c/code\u003e, thus:\n\u003c/p\u003e\u003cpre\u003e instance Monad IO where \n   ...\n   fail s = ioError (userError s)\n\u003c/pre\u003e",
          "module": "[\"Prelude\",\"System.IO.Error\"]",
          "name": "userError",
          "package": "haskell2010",
          "signature": "String -\u003e IOError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:userError\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:userError\"]"
        },
        "index": {
          "description": "Construct an IOError value with string describing the error The fail method of the IO instance of the Monad class raises userError thus instance Monad IO where fail ioError userError",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "userError",
          "normalized": "String-\u003eIOError",
          "package": "haskell2010",
          "partial": "Error",
          "signature": "String-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:userError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Prelude\",\"System.IO\"]",
          "name": "writeFile",
          "package": "haskell2010",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:writeFile\",\"http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:writeFile\"]"
        },
        "index": {
          "description": "The computation writeFile file str function writes the string str to the file file",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "haskell2010",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/Prelude.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment",
          "name": "Environment",
          "package": "haskell2010",
          "source": "src/System-Environment.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Environment",
          "module": "System.Environment",
          "name": "Environment",
          "package": "haskell2010",
          "partial": "Environment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Environment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e returns a list of the program's command\n line arguments (not including the program name).\n\u003c/p\u003e",
          "module": "System.Environment",
          "name": "getArgs",
          "package": "haskell2010",
          "signature": "IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Computation getArgs returns list of the program command line arguments not including the program name",
          "hierarchy": "System Environment",
          "module": "System.Environment",
          "name": "getArgs",
          "normalized": "IO[String]",
          "package": "haskell2010",
          "partial": "Args",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Environment.html#v:getArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetEnv\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evar\u003c/code\u003e returns the value\n of the environment variable \u003ccode\u003evar\u003c/code\u003e. For the inverse, POSIX users\n can use \u003ccode\u003e\u003ca\u003eputEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the environment variable\n    does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Environment",
          "name": "getEnv",
          "package": "haskell2010",
          "signature": "String -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Computation getEnv var returns the value of the environment variable var For the inverse POSIX users can use putEnv This computation may fail with isDoesNotExistError if the environment variable does not exist",
          "hierarchy": "System Environment",
          "module": "System.Environment",
          "name": "getEnv",
          "normalized": "String-\u003eIO String",
          "package": "haskell2010",
          "partial": "Env",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Environment.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetProgName\u003c/a\u003e\u003c/code\u003e returns the name of the program as it was\ninvoked.\n\u003c/p\u003e\u003cp\u003eHowever, this is hard-to-impossible to implement on some non-Unix\nOSes, so instead, for maximum portability, we just return the leafname\nof the program as invoked. Even then there are some differences\nbetween platforms: on Windows, for example, a program invoked as foo\nis probably really \u003ccode\u003eFOO.EXE\u003c/code\u003e, and that is what \u003ccode\u003e\u003ca\u003egetProgName\u003c/a\u003e\u003c/code\u003e will return.\n\u003c/p\u003e",
          "module": "System.Environment",
          "name": "getProgName",
          "package": "haskell2010",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "Computation getProgName returns the name of the program as it was invoked However this is hard-to-impossible to implement on some non-Unix OSes so instead for maximum portability we just return the leafname of the program as invoked Even then there are some differences between platforms on Windows for example program invoked as foo is probably really FOO.EXE and that is what getProgName will return",
          "hierarchy": "System Environment",
          "module": "System.Environment",
          "name": "getProgName",
          "package": "haskell2010",
          "partial": "Prog Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Environment.html#v:getProgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Exit",
          "name": "Exit",
          "package": "haskell2010",
          "source": "src/System-Exit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Exit",
          "module": "System.Exit",
          "name": "Exit",
          "package": "haskell2010",
          "partial": "Exit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Exit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the exit codes that a program can return.\n\u003c/p\u003e",
          "module": "System.Exit",
          "name": "ExitCode",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Defines the exit codes that program can return",
          "hierarchy": "System Exit",
          "module": "System.Exit",
          "name": "ExitCode",
          "package": "haskell2010",
          "partial": "Exit Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Exit.html#t:ExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates program failure with an exit code.\n The exact interpretation of the code is\n operating-system dependent.  In particular, some values\n may be prohibited (e.g. 0 on a POSIX-compliant system).\n\u003c/p\u003e",
          "module": "System.Exit",
          "name": "ExitFailure",
          "package": "haskell2010",
          "signature": "ExitFailure Int",
          "type": "function"
        },
        "index": {
          "description": "indicates program failure with an exit code The exact interpretation of the code is operating-system dependent In particular some values may be prohibited e.g on POSIX-compliant system",
          "hierarchy": "System Exit",
          "module": "System.Exit",
          "name": "ExitFailure",
          "package": "haskell2010",
          "partial": "Exit Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Exit.html#v:ExitFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates successful termination;\n\u003c/p\u003e",
          "module": "System.Exit",
          "name": "ExitSuccess",
          "package": "haskell2010",
          "signature": "ExitSuccess",
          "type": "function"
        },
        "index": {
          "description": "indicates successful termination",
          "hierarchy": "System Exit",
          "module": "System.Exit",
          "name": "ExitSuccess",
          "package": "haskell2010",
          "partial": "Exit Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Exit.html#v:ExitSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003c/code\u003e\u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e \u003cem\u003eexitfail\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e,\n where \u003cem\u003eexitfail\u003c/em\u003e is implementation-dependent.\n\u003c/p\u003e",
          "module": "System.Exit",
          "name": "exitFailure",
          "package": "haskell2010",
          "signature": "IO a",
          "type": "function"
        },
        "index": {
          "description": "The computation exitFailure is equivalent to exitWith ExitFailure exitfail where exitfail is implementation-dependent",
          "hierarchy": "System Exit",
          "module": "System.Exit",
          "name": "exitFailure",
          "package": "haskell2010",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Exit.html#v:exitFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eexitSuccess\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExitSuccess\u003c/a\u003e\u003c/code\u003e, It terminates the program\n successfully.\n\u003c/p\u003e",
          "module": "System.Exit",
          "name": "exitSuccess",
          "package": "haskell2010",
          "signature": "IO a",
          "type": "function"
        },
        "index": {
          "description": "The computation exitSuccess is equivalent to exitWith ExitSuccess It terminates the program successfully",
          "hierarchy": "System Exit",
          "module": "System.Exit",
          "name": "exitSuccess",
          "package": "haskell2010",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Exit.html#v:exitSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e code\u003c/code\u003e terminates the program, returning \u003ccode\u003ecode\u003c/code\u003e\nto the program's caller.  \nThe caller may interpret the return code as it wishes, but the program\nshould return \u003ccode\u003e\u003ca\u003eExitSuccess\u003c/a\u003e\u003c/code\u003e to mean normal completion, and\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e to mean that the program encountered a problem from\nwhich it could not recover.  The value \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e is equal to\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e exitfail)\u003c/code\u003e, where \u003ccode\u003eexitfail\u003c/code\u003e is\nimplementation-dependent.  \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e bypasses the error handling in\nthe I/O monad and cannot be intercepted by \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003ePrelude\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Exit",
          "name": "exitWith",
          "package": "haskell2010",
          "signature": "ExitCode -\u003e IO a",
          "source": "src/System-Exit.html#exitWith",
          "type": "function"
        },
        "index": {
          "description": "Computation exitWith code terminates the program returning code to the program caller The caller may interpret the return code as it wishes but the program should return ExitSuccess to mean normal completion and ExitFailure to mean that the program encountered problem from which it could not recover The value exitFailure is equal to exitWith ExitFailure exitfail where exitfail is implementation-dependent exitWith bypasses the error handling in the monad and cannot be intercepted by catch from the Prelude",
          "hierarchy": "System Exit",
          "module": "System.Exit",
          "name": "exitWith",
          "normalized": "ExitCode-\u003eIO a",
          "package": "haskell2010",
          "partial": "With",
          "signature": "ExitCode-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-Exit.html#v:exitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Error",
          "name": "Error",
          "package": "haskell2010",
          "source": "src/System-IO-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "Error",
          "package": "haskell2010",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors of type \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e are used by the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  This is an\n abstract type; the module \u003ca\u003eSystem.IO.Error\u003c/a\u003e provides functions to\n interrogate and construct values of type \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "IOError",
          "package": "haskell2010",
          "source": "src/System-IO-Error.html#IOError",
          "type": "type"
        },
        "index": {
          "description": "Errors of type IOError are used by the IO monad This is an abstract type the module System.IO.Error provides functions to interrogate and construct values of type IOError",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "IOError",
          "package": "haskell2010",
          "partial": "IOError",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#t:IOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract type that contains a value for each variant of \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "IOErrorType",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "An abstract type that contains value for each variant of IOError",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "IOErrorType",
          "package": "haskell2010",
          "partial": "IOError Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#t:IOErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because one of its arguments\n already exists.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "alreadyExistsErrorType",
          "package": "haskell2010",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because one of its arguments already exists",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "alreadyExistsErrorType",
          "package": "haskell2010",
          "partial": "Exists Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:alreadyExistsErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because one of its arguments\n is a single-use resource, which is already being used.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "alreadyInUseErrorType",
          "package": "haskell2010",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because one of its arguments is single-use resource which is already being used",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "alreadyInUseErrorType",
          "package": "haskell2010",
          "partial": "In Use Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:alreadyInUseErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a location description and maybe a file path and file handle\n to an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e.  If any of the file handle or file path is not given\n the corresponding value in the \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e remains unaltered.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "annotateIOError",
          "package": "haskell2010",
          "signature": "IOError -\u003e String -\u003e Maybe Handle -\u003e Maybe FilePath -\u003e IOError",
          "type": "function"
        },
        "index": {
          "description": "Adds location description and maybe file path and file handle to an IOError If any of the file handle or file path is not given the corresponding value in the IOError remains unaltered",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "annotateIOError",
          "normalized": "IOError-\u003eString-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIOError",
          "package": "haskell2010",
          "partial": "IOError",
          "signature": "IOError-\u003eString-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:annotateIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e function establishes a handler that receives any \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e\n raised in the action protected by \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.  An \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e is caught by\n the most recent handler established by \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.  These handlers are\n not selective: all \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003es are caught.  Exception propagation\n must be explicitly provided in a handler by re-raising any unwanted\n exceptions.  For example, in\n\u003c/p\u003e\u003cpre\u003e f = catch g (\\e -\u003e if IO.isEOFError e then return [] else ioError e)\n\u003c/pre\u003e\u003cp\u003ethe function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e[]\u003c/code\u003e when an end-of-file exception\n (cf. \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e) occurs in \u003ccode\u003eg\u003c/code\u003e; otherwise, the\n exception is propagated to the next outer handler.\n\u003c/p\u003e\u003cp\u003eWhen an exception propagates outside the main program, the Haskell\n system prints the associated \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e value and exits the program.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "catch",
          "package": "haskell2010",
          "signature": "IO a -\u003e (IOError -\u003e IO a) -\u003e IO a",
          "source": "src/System-IO-Error.html#catch",
          "type": "function"
        },
        "index": {
          "description": "The catch function establishes handler that receives any IOError raised in the action protected by catch An IOError is caught by the most recent handler established by catch These handlers are not selective all IOError are caught Exception propagation must be explicitly provided in handler by re-raising any unwanted exceptions For example in catch if IO.isEOFError then return else ioError the function returns when an end-of-file exception cf isEOFError occurs in otherwise the exception is propagated to the next outer handler When an exception propagates outside the main program the Haskell system prints the associated IOError value and exits the program",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "catch",
          "normalized": "IO a-\u003e(IOError-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "signature": "IO a-\u003e(IOError-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because one of its arguments\n does not exist.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "doesNotExistErrorType",
          "package": "haskell2010",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because one of its arguments does not exist",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "doesNotExistErrorType",
          "package": "haskell2010",
          "partial": "Not Exist Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:doesNotExistErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because the end of file has\n been reached.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "eofErrorType",
          "package": "haskell2010",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because the end of file has been reached",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "eofErrorType",
          "package": "haskell2010",
          "partial": "Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:eofErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because the device is full.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "fullErrorType",
          "package": "haskell2010",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because the device is full",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "fullErrorType",
          "package": "haskell2010",
          "partial": "Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:fullErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation is not possible.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "illegalOperationErrorType",
          "package": "haskell2010",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation is not possible",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "illegalOperationErrorType",
          "package": "haskell2010",
          "partial": "Operation Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:illegalOperationErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Error",
          "name": "ioeGetErrorString",
          "package": "haskell2010",
          "signature": "IOError -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "ioeGetErrorString",
          "normalized": "IOError-\u003eString",
          "package": "haskell2010",
          "partial": "Get Error String",
          "signature": "IOError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:ioeGetErrorString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Error",
          "name": "ioeGetFileName",
          "package": "haskell2010",
          "signature": "IOError -\u003e Maybe FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "ioeGetFileName",
          "normalized": "IOError-\u003eMaybe FilePath",
          "package": "haskell2010",
          "partial": "Get File Name",
          "signature": "IOError-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:ioeGetFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Error",
          "name": "ioeGetHandle",
          "package": "haskell2010",
          "signature": "IOError -\u003e Maybe Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "ioeGetHandle",
          "normalized": "IOError-\u003eMaybe Handle",
          "package": "haskell2010",
          "partial": "Get Handle",
          "signature": "IOError-\u003eMaybe Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:ioeGetHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n one of its arguments already exists.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "isAlreadyExistsError",
          "package": "haskell2010",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because one of its arguments already exists",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "isAlreadyExistsError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell2010",
          "partial": "Already Exists Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:isAlreadyExistsError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n one of its arguments is a single-use resource, which is already\n being used (for example, opening the same file twice for writing\n might give this error).\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "isAlreadyInUseError",
          "package": "haskell2010",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because one of its arguments is single-use resource which is already being used for example opening the same file twice for writing might give this error",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "isAlreadyInUseError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell2010",
          "partial": "Already In Use Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:isAlreadyInUseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n one of its arguments does not exist.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "isDoesNotExistError",
          "package": "haskell2010",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because one of its arguments does not exist",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "isDoesNotExistError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell2010",
          "partial": "Does Not Exist Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:isDoesNotExistError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n the end of file has been reached.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "isEOFError",
          "package": "haskell2010",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because the end of file has been reached",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "isEOFError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell2010",
          "partial": "EOFError",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:isEOFError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n the device is full.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "isFullError",
          "package": "haskell2010",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because the device is full",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "isFullError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell2010",
          "partial": "Full Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:isFullError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n the operation was not possible.\n Any computation which returns an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e result may fail with\n \u003ccode\u003e\u003ca\u003eisIllegalOperation\u003c/a\u003e\u003c/code\u003e.  In some cases, an implementation will not be\n able to distinguish between the possible error causes.  In this case\n it should fail with \u003ccode\u003e\u003ca\u003eisIllegalOperation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "isIllegalOperation",
          "package": "haskell2010",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because the operation was not possible Any computation which returns an IO result may fail with isIllegalOperation In some cases an implementation will not be able to distinguish between the possible error causes In this case it should fail with isIllegalOperation",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "isIllegalOperation",
          "normalized": "IOError-\u003eBool",
          "package": "haskell2010",
          "partial": "Illegal Operation",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:isIllegalOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n the user does not have sufficient operating system privilege\n to perform that operation.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "isPermissionError",
          "package": "haskell2010",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because the user does not have sufficient operating system privilege to perform that operation",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "isPermissionError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell2010",
          "partial": "Permission Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:isPermissionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA programmer-defined error value constructed using \u003ccode\u003e\u003ca\u003euserError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "isUserError",
          "package": "haskell2010",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "programmer-defined error value constructed using userError",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "isUserError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell2010",
          "partial": "User Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:isUserError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e of the given type where the second argument\n describes the error location and the third and fourth argument\n contain the file handle and file path of the file involved in the\n error if applicable.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "mkIOError",
          "package": "haskell2010",
          "signature": "IOErrorType -\u003e String -\u003e Maybe Handle -\u003e Maybe FilePath -\u003e IOError",
          "type": "function"
        },
        "index": {
          "description": "Construct an IOError of the given type where the second argument describes the error location and the third and fourth argument contain the file handle and file path of the file involved in the error if applicable",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "mkIOError",
          "normalized": "IOErrorType-\u003eString-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIOError",
          "package": "haskell2010",
          "partial": "IOError",
          "signature": "IOErrorType-\u003eString-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:mkIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because the user does not\n have sufficient operating system privilege to perform that operation.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "permissionErrorType",
          "package": "haskell2010",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because the user does not have sufficient operating system privilege to perform that operation",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "permissionErrorType",
          "package": "haskell2010",
          "partial": "Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:permissionErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe construct \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ecomp\u003c/code\u003e exposes IO errors which occur within a\n computation, and which are not fully handled.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "try",
          "package": "haskell2010",
          "signature": "IO a -\u003e IO (Either IOError a)",
          "source": "src/System-IO-Error.html#try",
          "type": "function"
        },
        "index": {
          "description": "The construct try comp exposes IO errors which occur within computation and which are not fully handled",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "try",
          "normalized": "IO a-\u003eIO(Either IOError a)",
          "package": "haskell2010",
          "signature": "IO a-\u003eIO(Either IOError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error that is programmer-defined.\n\u003c/p\u003e",
          "module": "System.IO.Error",
          "name": "userErrorType",
          "package": "haskell2010",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error that is programmer-defined",
          "hierarchy": "System IO Error",
          "module": "System.IO.Error",
          "name": "userErrorType",
          "package": "haskell2010",
          "partial": "Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO-Error.html#v:userErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "IO",
          "package": "haskell2010",
          "source": "src/System-IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "IO",
          "package": "haskell2010",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree kinds of buffering are supported: line-buffering, \n block-buffering or no-buffering.  These modes have the following\n effects. For output, items are written out, or \u003cem\u003eflushed\u003c/em\u003e,\n from the internal buffer according to the buffer mode:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: the entire output buffer is flushed\n    whenever a newline is output, the buffer overflows, \n    a \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: the entire buffer is written out whenever it\n    overflows, a \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: output is written immediately, and never stored\n    in the buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn implementation is free to flush the buffer more frequently,\n but not less frequently, than specified above.\n The output buffer is emptied as soon as it has been written out.\n\u003c/p\u003e\u003cp\u003eSimilarly, input occurs according to the buffer mode for the handle:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: when the buffer for the handle is not empty,\n    the next item is obtained from the buffer; otherwise, when the\n    buffer is empty, characters up to and including the next newline\n    character are read into the buffer.  No characters are available\n    until the newline character is available or the buffer is full.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: when the buffer for the handle becomes empty,\n    the next block of data is read into the buffer.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: the next input item is read and returned.\n    The \u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e operation implies that even a no-buffered\n    handle may require a one-character buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default buffering mode when a handle is opened is\n implementation-dependent and may depend on the file system object\n which is attached to that handle.\n For most implementations, physical files will normally be block-buffered \n and terminals will normally be line-buffered.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "BufferMode",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Three kinds of buffering are supported line-buffering block-buffering or no-buffering These modes have the following effects For output items are written out or flushed from the internal buffer according to the buffer mode line-buffering the entire output buffer is flushed whenever newline is output the buffer overflows hFlush is issued or the handle is closed block-buffering the entire buffer is written out whenever it overflows hFlush is issued or the handle is closed no-buffering output is written immediately and never stored in the buffer An implementation is free to flush the buffer more frequently but not less frequently than specified above The output buffer is emptied as soon as it has been written out Similarly input occurs according to the buffer mode for the handle line-buffering when the buffer for the handle is not empty the next item is obtained from the buffer otherwise when the buffer is empty characters up to and including the next newline character are read into the buffer No characters are available until the newline character is available or the buffer is full block-buffering when the buffer for the handle becomes empty the next block of data is read into the buffer no-buffering the next input item is read and returned The hLookAhead operation implies that even no-buffered handle may require one-character buffer The default buffering mode when handle is opened is implementation-dependent and may depend on the file system object which is attached to that handle For most implementations physical files will normally be block-buffered and terminals will normally be line-buffered",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "BufferMode",
          "package": "haskell2010",
          "partial": "Buffer Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#t:BufferMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "FilePath",
          "package": "haskell2010",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "FilePath",
          "package": "haskell2010",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell defines operations to read and write characters from and to files,\n represented by values of type \u003ccode\u003eHandle\u003c/code\u003e.  Each value of this type is a\n \u003cem\u003ehandle\u003c/em\u003e: a record used by the Haskell run-time system to \u003cem\u003emanage\u003c/em\u003e I/O\n with file system objects.  A handle has at least the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e whether it manages input or output or both;\n\u003c/li\u003e\u003cli\u003e whether it is \u003cem\u003eopen\u003c/em\u003e, \u003cem\u003eclosed\u003c/em\u003e or \u003cem\u003esemi-closed\u003c/em\u003e;\n\u003c/li\u003e\u003cli\u003e whether the object is seekable;\n\u003c/li\u003e\u003cli\u003e whether buffering is disabled, or enabled on a line or block basis;\n\u003c/li\u003e\u003cli\u003e a buffer (whose length may be zero).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMost handles will also have a current I/O position indicating where the next\n input or output operation will occur.  A handle is \u003cem\u003ereadable\u003c/em\u003e if it\n manages only input or both input and output; likewise, it is \u003cem\u003ewritable\u003c/em\u003e if\n it manages only output or both input and output.  A handle is \u003cem\u003eopen\u003c/em\u003e when\n first allocated.\n Once it is closed it can no longer be used for either input or output,\n though an implementation cannot re-use its storage while references\n remain to it.  Handles are in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e classes.  The string\n produced by showing a handle is system dependent; it should include\n enough information to identify the handle for debugging.  A handle is\n equal according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e only to itself; no attempt\n is made to compare the internal state of different handles for equality.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "Handle",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "Haskell defines operations to read and write characters from and to files represented by values of type Handle Each value of this type is handle record used by the Haskell run-time system to manage with file system objects handle has at least the following properties whether it manages input or output or both whether it is open closed or semi-closed whether the object is seekable whether buffering is disabled or enabled on line or block basis buffer whose length may be zero Most handles will also have current position indicating where the next input or output operation will occur handle is readable if it manages only input or both input and output likewise it is writable if it manages only output or both input and output handle is open when first allocated Once it is closed it can no longer be used for either input or output though an implementation cannot re-use its storage while references remain to it Handles are in the Show and Eq classes The string produced by showing handle is system dependent it should include enough information to identify the handle for debugging handle is equal according to only to itself no attempt is made to compare the internal state of different handles for equality",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "Handle",
          "package": "haskell2010",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "HandlePosn",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "HandlePosn",
          "package": "haskell2010",
          "partial": "Handle Posn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#t:HandlePosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a computation which, when performed,\ndoes some I/O before returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is really only one way to \"perform\" an I/O action: bind it to\n\u003ccode\u003eMain.main\u003c/code\u003e in your program.  When your program is run, the I/O will\nbe performed.  It isn't possible to perform I/O from an arbitrary\nfunction, unless that function is itself in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and called\nat some point, directly or indirectly, from \u003ccode\u003eMain.main\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is a monad, so \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be combined using either the do-notation\nor the \u003ccode\u003e\u003e\u003e\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operations from the \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "IO",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "value of type IO is computation which when performed does some before returning value of type There is really only one way to perform an action bind it to Main.main in your program When your program is run the will be performed It isn possible to perform from an arbitrary function unless that function is itself in the IO monad and called at some point directly or indirectly from Main.main IO is monad so IO actions can be combined using either the do-notation or the and operations from the Monad class",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "IO",
          "package": "haskell2010",
          "partial": "IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#t:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "IOMode",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "See openFile",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "IOMode",
          "package": "haskell2010",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mode that determines the effect of \u003ccode\u003ehSeek\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "SeekMode",
          "package": "haskell2010",
          "type": "data"
        },
        "index": {
          "description": "mode that determines the effect of hSeek hdl mode",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "SeekMode",
          "package": "haskell2010",
          "partial": "Seek Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#t:SeekMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "AbsoluteSeek",
          "package": "haskell2010",
          "signature": "AbsoluteSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "AbsoluteSeek",
          "package": "haskell2010",
          "partial": "Absolute Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:AbsoluteSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "AppendMode",
          "package": "haskell2010",
          "signature": "AppendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "AppendMode",
          "package": "haskell2010",
          "partial": "Append Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:AppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblock-buffering should be enabled if possible.\n The size of the buffer is \u003ccode\u003en\u003c/code\u003e items if the argument\n is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e and is otherwise implementation-dependent.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "BlockBuffering",
          "package": "haskell2010",
          "signature": "BlockBuffering (Maybe Int)",
          "type": "function"
        },
        "index": {
          "description": "block-buffering should be enabled if possible The size of the buffer is items if the argument is Just and is otherwise implementation-dependent",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "BlockBuffering",
          "package": "haskell2010",
          "partial": "Block Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:BlockBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline-buffering should be enabled if possible.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "LineBuffering",
          "package": "haskell2010",
          "signature": "LineBuffering",
          "type": "function"
        },
        "index": {
          "description": "line-buffering should be enabled if possible",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "LineBuffering",
          "package": "haskell2010",
          "partial": "Line Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:LineBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuffering is disabled if possible.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "NoBuffering",
          "package": "haskell2010",
          "signature": "NoBuffering",
          "type": "function"
        },
        "index": {
          "description": "buffering is disabled if possible",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "NoBuffering",
          "package": "haskell2010",
          "partial": "No Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:NoBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "ReadMode",
          "package": "haskell2010",
          "signature": "ReadMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "ReadMode",
          "package": "haskell2010",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "ReadWriteMode",
          "package": "haskell2010",
          "signature": "ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "ReadWriteMode",
          "package": "haskell2010",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the current position.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "RelativeSeek",
          "package": "haskell2010",
          "signature": "RelativeSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the current position",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "RelativeSeek",
          "package": "haskell2010",
          "partial": "Relative Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:RelativeSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the end of the file.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "SeekFromEnd",
          "package": "haskell2010",
          "signature": "SeekFromEnd",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the end of the file",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "SeekFromEnd",
          "package": "haskell2010",
          "partial": "Seek From End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:SeekFromEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "WriteMode",
          "package": "haskell2010",
          "signature": "WriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "WriteMode",
          "package": "haskell2010",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "fixIO",
          "package": "haskell2010",
          "signature": "(a -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "fixIO",
          "normalized": "(a-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "partial": "IO",
          "signature": "(a-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:fixIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e makes handle \u003ccode\u003ehdl\u003c/code\u003e closed.  Before the\n computation finishes, if \u003ccode\u003ehdl\u003c/code\u003e is writable its buffer is flushed as\n for \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e.\n Performing \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e on a handle that has already been closed has no effect; \n doing so is not an error.  All other operations on a closed handle will fail.\n If \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e fails for any reason, any further operations (apart from\n \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e) on the handle will still fail as if \u003ccode\u003ehdl\u003c/code\u003e had been successfully\n closed.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hClose",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hClose hdl makes handle hdl closed Before the computation finishes if hdl is writable its buffer is flushed as for hFlush Performing hClose on handle that has already been closed has no effect doing so is not an error All other operations on closed handle will fail If hClose fails for any reason any further operations apart from hClose on the handle will still fail as if hdl had been successfully closed",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hClose",
          "normalized": "Handle-\u003eIO()",
          "package": "haskell2010",
          "partial": "Close",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a handle \u003ccode\u003ehdl\u003c/code\u003e which attached to a physical file,\n \u003ccode\u003e\u003ca\u003ehFileSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the size of that file in 8-bit bytes.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hFileSize",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Integer",
          "type": "function"
        },
        "index": {
          "description": "For handle hdl which attached to physical file hFileSize hdl returns the size of that file in bit bytes",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hFileSize",
          "normalized": "Handle-\u003eIO Integer",
          "package": "haskell2010",
          "partial": "File Size",
          "signature": "Handle-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e causes any items buffered for output\n in handle \u003ccode\u003ehdl\u003c/code\u003e to be sent immediately to the operating system.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisFullError\u003c/code\u003e if the device is full;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if a system resource limit would be exceeded.\n    It is unspecified whether the characters in the buffer are discarded\n    or retained under these circumstances.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hFlush",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The action hFlush hdl causes any items buffered for output in handle hdl to be sent immediately to the operating system This operation may fail with isFullError if the device is full isPermissionError if system resource limit would be exceeded It is unspecified whether the characters in the buffer are discarded or retained under these circumstances",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hFlush",
          "normalized": "Handle-\u003eIO()",
          "package": "haskell2010",
          "partial": "Flush",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetBuffering\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the current buffering mode\n for \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hGetBuffering",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO BufferMode",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetBuffering hdl returns the current buffering mode for hdl",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hGetBuffering",
          "normalized": "Handle-\u003eIO BufferMode",
          "package": "haskell2010",
          "partial": "Get Buffering",
          "signature": "Handle-\u003eIO BufferMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hGetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e reads a character from the file or\n channel managed by \u003ccode\u003ehdl\u003c/code\u003e, blocking until a character is available.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hGetChar",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Char",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetChar hdl reads character from the file or channel managed by hdl blocking until character is available This operation may fail with isEOFError if the end of file has been reached",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hGetChar",
          "normalized": "Handle-\u003eIO Char",
          "package": "haskell2010",
          "partial": "Get Char",
          "signature": "Handle-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hGetChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the list of characters\n corresponding to the unread portion of the channel or file managed\n by \u003ccode\u003ehdl\u003c/code\u003e, which is put into an intermediate state, \u003cem\u003esemi-closed\u003c/em\u003e.\n In this state, \u003ccode\u003ehdl\u003c/code\u003e is effectively closed,\n but items are read from \u003ccode\u003ehdl\u003c/code\u003e on demand and accumulated in a special\n list returned by \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAny operation that fails because a handle is closed,\n also fails if a handle is semi-closed.  The only exception is \u003ccode\u003ehClose\u003c/code\u003e.\n A semi-closed handle becomes closed:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003ehClose\u003c/code\u003e is applied to it;\n\u003c/li\u003e\u003cli\u003e if an I/O error occurs when reading an item from the handle;\n\u003c/li\u003e\u003cli\u003e or once the entire contents of the handle has been read.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOnce a semi-closed handle becomes closed, the contents of the\n associated list becomes fixed.  The contents of this final list is\n only partially specified: it will contain at least all the items of\n the stream that were evaluated prior to the handle becoming closed.\n\u003c/p\u003e\u003cp\u003eAny I/O errors encountered while a handle is semi-closed are simply\n discarded.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hGetContents",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetContents hdl returns the list of characters corresponding to the unread portion of the channel or file managed by hdl which is put into an intermediate state semi-closed In this state hdl is effectively closed but items are read from hdl on demand and accumulated in special list returned by hGetContents hdl Any operation that fails because handle is closed also fails if handle is semi-closed The only exception is hClose semi-closed handle becomes closed if hClose is applied to it if an error occurs when reading an item from the handle or once the entire contents of the handle has been read Once semi-closed handle becomes closed the contents of the associated list becomes fixed The contents of this final list is only partially specified it will contain at least all the items of the stream that were evaluated prior to the handle becoming closed Any errors encountered while handle is semi-closed are simply discarded This operation may fail with isEOFError if the end of file has been reached",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO String",
          "package": "haskell2010",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the echoing status of a handle connected to a terminal.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hGetEcho",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Get the echoing status of handle connected to terminal",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hGetEcho",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Get Echo",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hGetEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e reads a line from the file or\n channel managed by \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file is encountered when reading\n    the \u003cem\u003efirst\u003c/em\u003e character of the line.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e encounters end-of-file at any other point while reading\n in a line, it is treated as a line terminator and the (partial)\n line is returned.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hGetLine",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetLine hdl reads line from the file or channel managed by hdl This operation may fail with isEOFError if the end of file is encountered when reading the first character of the line If hGetLine encounters end-of-file at any other point while reading in line it is treated as line terminator and the partial line is returned",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO String",
          "package": "haskell2010",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the current I/O position of\n \u003ccode\u003ehdl\u003c/code\u003e as a value of the abstract type \u003ccode\u003e\u003ca\u003eHandlePosn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hGetPosn",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO HandlePosn",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetPosn hdl returns the current position of hdl as value of the abstract type HandlePosn",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hGetPosn",
          "normalized": "Handle-\u003eIO HandlePosn",
          "package": "haskell2010",
          "partial": "Get Posn",
          "signature": "Handle-\u003eIO HandlePosn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hGetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "hIsClosed",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hIsClosed",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Is Closed",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hIsClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a readable handle \u003ccode\u003ehdl\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if no further input can be taken from \u003ccode\u003ehdl\u003c/code\u003e or for a\n physical file, if the current I/O position is equal to the length of\n the file.  Otherwise, it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: \u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e may block, because it has to attempt to read from\n the stream to determine whether there is any more data to be read.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hIsEOF",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "For readable handle hdl hIsEOF hdl returns True if no further input can be taken from hdl or for physical file if the current position is equal to the length of the file Otherwise it returns False NOTE hIsEOF may block because it has to attempt to read from the stream to determine whether there is any more data to be read",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hIsEOF",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Is EOF",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hIsEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "hIsOpen",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hIsOpen",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Is Open",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hIsOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "hIsReadable",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hIsReadable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Is Readable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hIsReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "hIsSeekable",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hIsSeekable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Is Seekable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hIsSeekable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the handle connected to a terminal?\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hIsTerminalDevice",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Is the handle connected to terminal",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hIsTerminalDevice",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Is Terminal Device",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hIsTerminalDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO",
          "name": "hIsWritable",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hIsWritable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Is Writable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hIsWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e returns the next character from the handle\n without removing it from the input buffer, blocking until a character\n is available.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisEOFError\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hLookAhead",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Char",
          "type": "function"
        },
        "index": {
          "description": "Computation hLookAhead returns the next character from the handle without removing it from the input buffer blocking until character is available This operation may fail with isEOFError if the end of file has been reached",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hLookAhead",
          "normalized": "Handle-\u003eIO Char",
          "package": "haskell2010",
          "partial": "Look Ahead",
          "signature": "Handle-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hLookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPrint\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl t\u003c/code\u003e writes the string representation of \u003ccode\u003et\u003c/code\u003e\n given by the \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e function to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e\n and appends a newline.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hPrint",
          "package": "haskell2010",
          "signature": "Handle -\u003e a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hPrint hdl writes the string representation of given by the shows function to the file or channel managed by hdl and appends newline This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hPrint",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "haskell2010",
          "partial": "Print",
          "signature": "Handle-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl ch\u003c/code\u003e writes the character \u003ccode\u003ech\u003c/code\u003e to the\n file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e.  Characters may be buffered if\n buffering is enabled for \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hPutChar",
          "package": "haskell2010",
          "signature": "Handle -\u003e Char -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hPutChar hdl ch writes the character ch to the file or channel managed by hdl Characters may be buffered if buffering is enabled for hdl This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hPutChar",
          "normalized": "Handle-\u003eChar-\u003eIO()",
          "package": "haskell2010",
          "partial": "Put Char",
          "signature": "Handle-\u003eChar-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl s\u003c/code\u003e writes the string\n \u003ccode\u003es\u003c/code\u003e to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hPutStr",
          "package": "haskell2010",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hPutStr hdl writes the string to the file or channel managed by hdl This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hPutStr",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "haskell2010",
          "partial": "Put Str",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hPutStrLn",
          "package": "haskell2010",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as hPutStr but adds newline character",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "haskell2010",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehReady\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e indicates whether at least one item is\n available for input from handle \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hReady",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Computation hReady hdl indicates whether at least one item is available for input from handle hdl This operation may fail with isEOFError if the end of file has been reached",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hReady",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Ready",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e sets the position of handle\n \u003ccode\u003ehdl\u003c/code\u003e depending on \u003ccode\u003emode\u003c/code\u003e.\n The offset \u003ccode\u003ei\u003c/code\u003e is given in terms of 8-bit bytes.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ehdl\u003c/code\u003e is block- or line-buffered, then seeking to a position which is not\n in the current buffer will first cause any items in the output buffer to be\n written to the device, and then cause the input buffer to be discarded.\n Some handles may not be seekable (see \u003ccode\u003e\u003ca\u003ehIsSeekable\u003c/a\u003e\u003c/code\u003e), or only support a\n subset of the possible positioning operations (for instance, it may only\n be possible to seek to the end of a tape, or to a positive offset from\n the beginning or current position).\n It is not possible to set a negative I/O position, or for\n a physical file, an I/O position beyond the current end-of-file.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisIllegalOperationError\u003c/code\u003e if the Handle is not seekable, or does\n     not support the requested seek mode.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if a system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hSeek",
          "package": "haskell2010",
          "signature": "Handle -\u003e SeekMode -\u003e Integer -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hSeek hdl mode sets the position of handle hdl depending on mode The offset is given in terms of bit bytes If hdl is block or line-buffered then seeking to position which is not in the current buffer will first cause any items in the output buffer to be written to the device and then cause the input buffer to be discarded Some handles may not be seekable see hIsSeekable or only support subset of the possible positioning operations for instance it may only be possible to seek to the end of tape or to positive offset from the beginning or current position It is not possible to set negative position or for physical file an position beyond the current end-of-file This operation may fail with isIllegalOperationError if the Handle is not seekable or does not support the requested seek mode isPermissionError if system resource limit would be exceeded",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hSeek",
          "normalized": "Handle-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "package": "haskell2010",
          "partial": "Seek",
          "signature": "Handle-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl mode\u003c/code\u003e sets the mode of buffering for\n handle \u003ccode\u003ehdl\u003c/code\u003e on subsequent reads and writes.\n\u003c/p\u003e\u003cp\u003eIf the buffer mode is changed from \u003ccode\u003e\u003ca\u003eBlockBuffering\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eLineBuffering\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eNoBuffering\u003c/a\u003e\u003c/code\u003e, then\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003ehdl\u003c/code\u003e is writable, the buffer is flushed as for \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e if \u003ccode\u003ehdl\u003c/code\u003e is not writable, the contents of the buffer is discarded.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if the handle has already been used for reading\n    or writing and the implementation does not allow the buffering mode\n    to be changed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hSetBuffering",
          "package": "haskell2010",
          "signature": "Handle -\u003e BufferMode -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hSetBuffering hdl mode sets the mode of buffering for handle hdl on subsequent reads and writes If the buffer mode is changed from BlockBuffering or LineBuffering to NoBuffering then if hdl is writable the buffer is flushed as for hFlush if hdl is not writable the contents of the buffer is discarded This operation may fail with isPermissionError if the handle has already been used for reading or writing and the implementation does not allow the buffering mode to be changed",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hSetBuffering",
          "normalized": "Handle-\u003eBufferMode-\u003eIO()",
          "package": "haskell2010",
          "partial": "Set Buffering",
          "signature": "Handle-\u003eBufferMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hSetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the echoing status of a handle connected to a terminal.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hSetEcho",
          "package": "haskell2010",
          "signature": "Handle -\u003e Bool -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the echoing status of handle connected to terminal",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hSetEcho",
          "normalized": "Handle-\u003eBool-\u003eIO()",
          "package": "haskell2010",
          "partial": "Set Echo",
          "signature": "Handle-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hSetEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehSetFileSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e \u003ccode\u003esize\u003c/code\u003e truncates the physical file with handle \u003ccode\u003ehdl\u003c/code\u003e to \u003ccode\u003esize\u003c/code\u003e bytes.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hSetFileSize",
          "package": "haskell2010",
          "signature": "Handle -\u003e Integer -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "hSetFileSize hdl size truncates the physical file with handle hdl to size bytes",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hSetFileSize",
          "normalized": "Handle-\u003eInteger-\u003eIO()",
          "package": "haskell2010",
          "partial": "Set File Size",
          "signature": "Handle-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hSetFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a call to \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns a position \u003ccode\u003ep\u003c/code\u003e,\n then computation \u003ccode\u003e\u003ca\u003ehSetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e sets the position of \u003ccode\u003ehdl\u003c/code\u003e\n to the position it held at the time of the call to \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if a system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hSetPosn",
          "package": "haskell2010",
          "signature": "HandlePosn -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "If call to hGetPosn hdl returns position then computation hSetPosn sets the position of hdl to the position it held at the time of the call to hGetPosn This operation may fail with isPermissionError if system resource limit would be exceeded",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hSetPosn",
          "normalized": "HandlePosn-\u003eIO()",
          "package": "haskell2010",
          "partial": "Set Posn",
          "signature": "HandlePosn-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hSetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehShow\u003c/a\u003e\u003c/code\u003e is in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, and gives more comprehensive output\n than the (pure) instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "hShow",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "hShow is in the IO monad and gives more comprehensive output than the pure instance of Show for Handle",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hShow",
          "normalized": "Handle-\u003eIO String",
          "package": "haskell2010",
          "partial": "Show",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehTell\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the current position of the\n handle \u003ccode\u003ehdl\u003c/code\u003e, as the number of bytes from the beginning of\n the file.  The value returned may be subsequently passed to\n \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e to reposition the handle to the current position.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisIllegalOperationError\u003c/code\u003e if the Handle is not seekable.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hTell",
          "package": "haskell2010",
          "signature": "Handle -\u003e IO Integer",
          "type": "function"
        },
        "index": {
          "description": "Computation hTell hdl returns the current position of the handle hdl as the number of bytes from the beginning of the file The value returned may be subsequently passed to hSeek to reposition the handle to the current position This operation may fail with isIllegalOperationError if the Handle is not seekable",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hTell",
          "normalized": "Handle-\u003eIO Integer",
          "package": "haskell2010",
          "partial": "Tell",
          "signature": "Handle-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl t\u003c/code\u003e\n waits until input is available on handle \u003ccode\u003ehdl\u003c/code\u003e.\n It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e as soon as input is available on \u003ccode\u003ehdl\u003c/code\u003e,\n or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if no input is available within \u003ccode\u003et\u003c/code\u003e milliseconds.  Note that\n \u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e waits until one or more full \u003cem\u003echaracters\u003c/em\u003e are available,\n which means that it needs to do decoding, and hence may fail\n with a decoding error.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003et\u003c/code\u003e is less than zero, then \u003ccode\u003ehWaitForInput\u003c/code\u003e waits indefinitely.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisEOFError\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003cli\u003e a decoding error, if the input begins with an invalid byte sequence\n    in this Handle's encoding.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "hWaitForInput",
          "package": "haskell2010",
          "signature": "Handle -\u003e Int -\u003e IO Bool",
          "source": "src/System-IO.html#hWaitForInput",
          "type": "function"
        },
        "index": {
          "description": "Computation hWaitForInput hdl waits until input is available on handle hdl It returns True as soon as input is available on hdl or False if no input is available within milliseconds Note that hWaitForInput waits until one or more full characters are available which means that it needs to do decoding and hence may fail with decoding error If is less than zero then hWaitForInput waits indefinitely This operation may fail with isEOFError if the end of file has been reached decoding error if the input begins with an invalid byte sequence in this Handle encoding",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "hWaitForInput",
          "normalized": "Handle-\u003eInt-\u003eIO Bool",
          "package": "haskell2010",
          "partial": "Wait For Input",
          "signature": "Handle-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:hWaitForInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eisEOF\u003c/a\u003e\u003c/code\u003e is identical to \u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e,\n except that it works only on \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "isEOF",
          "package": "haskell2010",
          "signature": "IO Bool",
          "type": "function"
        },
        "index": {
          "description": "The computation isEOF is identical to hIsEOF except that it works only on stdin",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "isEOF",
          "package": "haskell2010",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:isEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile mode\u003c/code\u003e allocates and returns a new, open\n handle to manage the file \u003ccode\u003efile\u003c/code\u003e.  It manages input if \u003ccode\u003emode\u003c/code\u003e\n is \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e, output if \u003ccode\u003emode\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e,\n and both input and output if mode is \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the file does not exist and it is opened for output, it should be\n created as a new file.  If \u003ccode\u003emode\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e and the file\n already exists, then it should be truncated to zero length.\n Some operating systems delete empty files, so there is no guarantee\n that the file will exist following an \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003emode\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e unless it is subsequently written to successfully.\n The handle is positioned at the end of the file if \u003ccode\u003emode\u003c/code\u003e is\n \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e, and otherwise at the beginning (in which case its\n internal position is 0).\n The initial buffer mode is implementation-dependent.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisAlreadyInUseError\u003c/code\u003e if the file is already open and cannot be reopened;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisDoesNotExistError\u003c/code\u003e if the file does not exist; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if the user does not have permission to open the file.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO",
          "name": "openFile",
          "package": "haskell2010",
          "signature": "FilePath -\u003e IOMode -\u003e IO Handle",
          "source": "src/System-IO.html#openFile",
          "type": "function"
        },
        "index": {
          "description": "Computation openFile file mode allocates and returns new open handle to manage the file file It manages input if mode is ReadMode output if mode is WriteMode or AppendMode and both input and output if mode is ReadWriteMode If the file does not exist and it is opened for output it should be created as new file If mode is WriteMode and the file already exists then it should be truncated to zero length Some operating systems delete empty files so there is no guarantee that the file will exist following an openFile with mode WriteMode unless it is subsequently written to successfully The handle is positioned at the end of the file if mode is AppendMode and otherwise at the beginning in which case its internal position is The initial buffer mode is implementation-dependent This operation may fail with isAlreadyInUseError if the file is already open and cannot be reopened isDoesNotExistError if the file does not exist or isPermissionError if the user does not have permission to open the file",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "openFile",
          "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
          "package": "haskell2010",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:openFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing output to the Haskell program's standard error channel.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "stderr",
          "package": "haskell2010",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing output to the Haskell program standard error channel",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "stderr",
          "package": "haskell2010",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing input from the Haskell program's standard input channel.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "stdin",
          "package": "haskell2010",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing input from the Haskell program standard input channel",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "stdin",
          "package": "haskell2010",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing output to the Haskell program's standard output channel.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "stdout",
          "package": "haskell2010",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing output to the Haskell program standard output channel",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "stdout",
          "package": "haskell2010",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e name mode act\u003c/code\u003e opens a file using \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e and passes\n the resulting handle to the computation \u003ccode\u003eact\u003c/code\u003e.  The handle will be\n closed on exit from \u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e, whether by normal termination or by\n raising an exception.  If closing the handle raises an exception, then\n this exception will be raised by \u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e rather than any exception\n raised by \u003ccode\u003eact\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO",
          "name": "withFile",
          "package": "haskell2010",
          "signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO r) -\u003e IO r",
          "type": "function"
        },
        "index": {
          "description": "withFile name mode act opens file using openFile and passes the resulting handle to the computation act The handle will be closed on exit from withFile whether by normal termination or by raising an exception If closing the handle raises an exception then this exception will be raised by withFile rather than any exception raised by act",
          "hierarchy": "System IO",
          "module": "System.IO",
          "name": "withFile",
          "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "haskell2010",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO r)-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell2010/docs/System-IO.html#v:withFile"
      }
    }
  ]
]