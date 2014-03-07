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
        "word": "monad-param"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements a notion of parameterized monad by varying the monad itself, this lets us \n avoid having to carry a parameter around for monads that do not need it, and we can rederive\n the normal notion of a parameterized monad from this variation for those that do.\n The signature of \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e costs us type inference for the types of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e,\n so we restore that by defining \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e as the unit of the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e as \n the unit of the trivial bottom monad, and appealing to the monad laws to allow these to combine\n with all other monads satisfying the monad laws through \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eCaveat: Do-notation works in a recent GHC, see also http:\u003cem/\u003ehackage.haskell.org\u003cem\u003etrac\u003c/em\u003eghc\u003cem\u003eticket\u003c/em\u003e1537\n\u003c/p\u003e\u003cp\u003eThis imports and defines the correct instances for a good portion of the \u003ccode\u003eMTL\u003c/code\u003e, primarily because\n it is so awkward to import them all otherwise due to the fact that most of them re-export the \u003ccode\u003eControl.Monad.Monad\u003c/code\u003e syntax.\n Does not export \u003ca\u003eControl.Monad.ST\u003c/a\u003e or \u003ca\u003eControl.Monad.Writer\u003c/a\u003e since it is unclear if you want strict or lazy versions in scope\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "Parameterized",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html",
          "type": "module"
        },
        "index": {
          "description": "Implements notion of parameterized monad by varying the monad itself this lets us avoid having to carry parameter around for monads that do not need it and we can rederive the normal notion of parameterized monad from this variation for those that do The signature of costs us type inference for the types of return and mzero so we restore that by defining return as the unit of the Identity monad and mzero as the unit of the trivial bottom monad and appealing to the monad laws to allow these to combine with all other monads satisfying the monad laws through Caveat Do-notation works in recent GHC see also http hackage.haskell.org trac ghc ticket This imports and defines the correct instances for good portion of the MTL primarily because it is so awkward to import them all otherwise due to the fact that most of them re-export the Control.Monad.Monad syntax Does not export Control.Monad.ST or Control.Monad.Writer since it is unclear if you want strict or lazy versions in scope",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "Parameterized",
          "package": "monad-param",
          "partial": "Parameterized",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplement parameterized monads like Oleg's restricted monads, but vary the monad itself rather than restrict its parameters\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "Bind",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html#Bind",
          "type": "class"
        },
        "index": {
          "description": "Implement parameterized monads like Oleg restricted monads but vary the monad itself rather than restrict its parameters",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "Bind",
          "package": "monad-param",
          "partial": "Bind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#t:Bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict the cases where we allow pattern matching to \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e. You have to explicitly supply this for your \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "Fail",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html#Fail",
          "type": "class"
        },
        "index": {
          "description": "Restrict the cases where we allow pattern matching to fail You have to explicitly supply this for your Monad",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "Fail",
          "package": "monad-param",
          "partial": "Fail",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#t:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNow of course we can have \u003ccode\u003e\u003ca\u003eMZero\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003es float to the top of a \u003ccode\u003edo\u003c/code\u003e expression, so we need a way to convert them to any \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance respectively\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "Go",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html#Go",
          "type": "class"
        },
        "index": {
          "description": "Now of course we can have MZero and Identity float to the top of do expression so we need way to convert them to any Monad or MonadPlus instance respectively",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "Go",
          "package": "monad-param",
          "partial": "Go",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#t:Go"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak out mplus\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "MPlus",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html#MPlus",
          "type": "class"
        },
        "index": {
          "description": "Break out mplus",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "MPlus",
          "package": "monad-param",
          "partial": "MPlus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#t:MPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame trick using with \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e to build a canonical \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, here we exploit the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e laws to make a canonical \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e. Has no members except bottom.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "MZero",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html#MZero",
          "type": "data"
        },
        "index": {
          "description": "Same trick using with Identity to build canonical return here we exploit the MonadPlus laws to make canonical mzero Has no members except bottom",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "MZero",
          "package": "monad-param",
          "partial": "MZero",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#t:MZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a parameterized monad can be used without varying its parameter, we can get the ease of use of the original \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "Monad",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html#Monad",
          "type": "class"
        },
        "index": {
          "description": "When parameterized monad can be used without varying its parameter we can get the ease of use of the original Monad class",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "Monad",
          "package": "monad-param",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass alias to get back an approximation of the original, easy-to-specify \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e class where available\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "MonadPlus",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html#MonadPlus",
          "type": "class"
        },
        "index": {
          "description": "Class alias to get back an approximation of the original easy-to-specify MonadPlus class where available",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "MonadPlus",
          "package": "monad-param",
          "partial": "Monad Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#t:MonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraditional \u003ccode\u003eControl.Monad.mzero\u003c/code\u003e, note this probably has lost its type inference. \n You probably want \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "MonadZero",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html#MonadZero",
          "type": "class"
        },
        "index": {
          "description": "Traditional Control.Monad.mzero note this probably has lost its type inference You probably want mzero",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "MonadZero",
          "package": "monad-param",
          "partial": "Monad Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#t:MonadZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe traditional \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, note this probably has lost its type inference where you want to use it. \n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "Return",
          "package": "monad-param",
          "source": "src/Control-Monad-Parameterized.html#Return",
          "type": "class"
        },
        "index": {
          "description": "The traditional return note this probably has lost its type inference where you want to use it",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "Return",
          "package": "monad-param",
          "partial": "Return",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#t:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Parameterized",
          "name": "(=\u003c\u003c)",
          "package": "monad-param",
          "signature": "(a -\u003e m' b) -\u003e m a -\u003e m'' b",
          "source": "src/Control-Monad-Parameterized.html#%3D%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003ee c",
          "package": "monad-param",
          "signature": "(a-\u003em' b)-\u003em a-\u003em'' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Parameterized",
          "name": "(\u003e\u003e)",
          "package": "monad-param",
          "signature": "m a -\u003e m' b -\u003e m'' b",
          "source": "src/Control-Monad-Parameterized.html#%3E%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ec d-\u003ee d",
          "package": "monad-param",
          "signature": "m a-\u003em' b-\u003em'' b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Parameterized",
          "name": "(\u003e\u003e=)",
          "package": "monad-param",
          "signature": "m a -\u003e (a -\u003e m' b) -\u003e m'' b",
          "source": "src/Control-Monad-Parameterized.html#%3E%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ec d)-\u003ee d",
          "package": "monad-param",
          "signature": "m a-\u003e(a-\u003em' b)-\u003em'' b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn many situations, the \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e operations can be replaced by uses of\n\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, which promotes function application. \n\u003c/p\u003e\u003cpre\u003e       return f `ap` x1 `ap` ... `ap` xn\n\u003c/pre\u003e\u003cp\u003eis equivalent to \n\u003c/p\u003e\u003cpre\u003e       liftMn f x1 x2 ... xn\n\u003c/pre\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "ap",
          "package": "monad-param",
          "signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "In many situations the liftM operations can be replaced by uses of ap which promotes function application return ap x1 ap ap xn is equivalent to liftMn x1 x2 xn",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "ap",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "monad-param",
          "signature": "m(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Parameterized",
          "name": "fail",
          "package": "monad-param",
          "signature": "String -\u003e m a",
          "source": "src/Control-Monad-Parameterized.html#fail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "monad-param",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "filterM",
          "package": "monad-param",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based filter function",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "monad-param",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e function is analogous to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, except that its result is\nencapsulated in a monad. Note that \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e works from left-to-right over\nthe list arguments. This could be an issue where \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and the `folded\nfunction' are not commutative.\n\u003c/p\u003e\u003cpre\u003e       foldM f a1 [x1, x2, ..., xm]\n\u003c/pre\u003e\u003cp\u003e==  \n\u003c/p\u003e\u003cpre\u003e       do\n         a2 \u003c- f a1 x1\n         a3 \u003c- f a2 x2\n         ...\n         f am xm\n\u003c/pre\u003e\u003cp\u003eIf right-to-left evaluation is required, the input list should be reversed.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "foldM",
          "package": "monad-param",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The foldM function is analogous to foldl except that its result is encapsulated in monad Note that foldM works from left-to-right over the list arguments This could be an issue where and the folded function are not commutative foldM a1 x1 x2 xm do a2 a1 x1 a3 a2 x2 am xm If right-to-left evaluation is required the input list should be reversed",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec a",
          "package": "monad-param",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "foldM_",
          "package": "monad-param",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like foldM but discards the result",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "foldM_",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec()",
          "package": "monad-param",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:foldM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "forM",
          "package": "monad-param",
          "signature": "[a] -\u003e (a -\u003e m b) -\u003e m [b]",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "forM",
          "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb[c]",
          "package": "monad-param",
          "signature": "[a]-\u003e(a-\u003em b)-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "forM_",
          "package": "monad-param",
          "signature": "[a] -\u003e (a -\u003e m b) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "forM_",
          "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb()",
          "package": "monad-param",
          "signature": "[a]-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsage: \u003ccode\u003ego (do something)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "go",
          "package": "monad-param",
          "signature": "n a -\u003e m a",
          "source": "src/Control-Monad-Parameterized.html#go",
          "type": "method"
        },
        "index": {
          "description": "Usage go do something",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "go",
          "normalized": "a b-\u003ec b",
          "package": "monad-param",
          "signature": "n a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:go"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "guard",
          "package": "monad-param",
          "signature": "Bool -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "guard is return if is True and mzero if is False",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "guard",
          "normalized": "Bool-\u003ea()",
          "package": "monad-param",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e function is the conventional monad join operator. It is used to\n remove one level of monadic structure, projecting its bound argument into the\n outer level.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "join",
          "package": "monad-param",
          "signature": "m (m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The join function is the conventional monad join operator It is used to remove one level of monadic structure projecting its bound argument into the outer level",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "monad-param",
          "signature": "m(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "liftM",
          "package": "monad-param",
          "signature": "(a1 -\u003e r) -\u003e m a1 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "liftM",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "monad-param",
          "signature": "(a-\u003er)-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:liftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right.  For example,\n\u003c/p\u003e\u003cpre\u003e    liftM2 (+) [0,1] [0,2] = [0,2,1,3]\n    liftM2 (+) (Just 1) Nothing = Nothing\n\u003c/pre\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "liftM2",
          "package": "monad-param",
          "signature": "(a1 -\u003e a2 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right For example liftM2 liftM2 Just Nothing Nothing",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "liftM2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
          "package": "monad-param",
          "signature": "(a-\u003ea-\u003er)-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:liftM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "liftM3",
          "package": "monad-param",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "liftM3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "monad-param",
          "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:liftM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "liftM4",
          "package": "monad-param",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "liftM4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "monad-param",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:liftM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "liftM5",
          "package": "monad-param",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m a5 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "liftM5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "monad-param",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:liftM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAndUnzipM\u003c/a\u003e\u003c/code\u003e function maps its first argument over a list, returning\n the result as a pair of lists. This function is mainly used with complicated\n data structures or a state-transforming monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "mapAndUnzipM",
          "package": "monad-param",
          "signature": "(a -\u003e m (b, c)) -\u003e [a] -\u003e m ([b], [c])",
          "type": "function"
        },
        "index": {
          "description": "The mapAndUnzipM function maps its first argument over list returning the result as pair of lists This function is mainly used with complicated data structures or state-transforming monad",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "mapAndUnzipM",
          "normalized": "(a-\u003eb(c,d))-\u003e[a]-\u003eb([c],[d])",
          "package": "monad-param",
          "partial": "And Unzip",
          "signature": "(a-\u003em(b,c))-\u003e[a]-\u003em([b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:mapAndUnzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "mapM",
          "package": "monad-param",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
          "package": "monad-param",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence_\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "mapM_",
          "package": "monad-param",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
          "package": "monad-param",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Parameterized",
          "name": "mplus",
          "package": "monad-param",
          "signature": "m a -\u003e m' a -\u003e m'' a",
          "source": "src/Control-Monad-Parameterized.html#mplus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "mplus",
          "normalized": "a b-\u003ec b-\u003ed b",
          "package": "monad-param",
          "signature": "m a-\u003em' a-\u003em'' a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:mplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "msum",
          "package": "monad-param",
          "signature": "[m a] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based concat function",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "msum",
          "normalized": "[a b]-\u003ea b",
          "package": "monad-param",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn inferable version of \u003ccode\u003eControl.Monad.mzero\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "mzero",
          "package": "monad-param",
          "signature": "MZero a",
          "source": "src/Control-Monad-Parameterized.html#mzero",
          "type": "function"
        },
        "index": {
          "description": "An inferable version of Control.Monad.mzero",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "mzero",
          "package": "monad-param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:mzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Parameterized",
          "name": "mzeroM",
          "package": "monad-param",
          "signature": "m a",
          "source": "src/Control-Monad-Parameterized.html#mzeroM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "mzeroM",
          "package": "monad-param",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:mzeroM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n act\u003c/code\u003e performs the action \u003ccode\u003en\u003c/code\u003e times,\n gathering the results.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "replicateM",
          "package": "monad-param",
          "signature": "Int -\u003e m a -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "replicateM act performs the action times gathering the results",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "replicateM",
          "normalized": "Int-\u003ea b-\u003ea[b]",
          "package": "monad-param",
          "signature": "Int-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "replicateM_",
          "package": "monad-param",
          "signature": "Int -\u003e m a -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like replicateM but discards the result",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "replicateM_",
          "normalized": "Int-\u003ea b-\u003ea()",
          "package": "monad-param",
          "signature": "Int-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:replicateM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn inferable version of \u003ccode\u003ePrelude.return\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "return",
          "package": "monad-param",
          "signature": "a -\u003e Identity a",
          "source": "src/Control-Monad-Parameterized.html#return",
          "type": "function"
        },
        "index": {
          "description": "An inferable version of Prelude.return",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "return",
          "normalized": "a-\u003eIdentity a",
          "package": "monad-param",
          "signature": "a-\u003eIdentity a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Parameterized",
          "name": "returnM",
          "package": "monad-param",
          "signature": "a -\u003e m a",
          "source": "src/Control-Monad-Parameterized.html#returnM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "returnM",
          "normalized": "a-\u003eb a",
          "package": "monad-param",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:returnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "sequence",
          "package": "monad-param",
          "signature": "[m a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and collect the results",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "sequence",
          "normalized": "[a b]-\u003ea[b]",
          "package": "monad-param",
          "signature": "[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and ignore the results.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "sequence_",
          "package": "monad-param",
          "signature": "[m a] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and ignore the results",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "sequence_",
          "normalized": "[a b]-\u003ea()",
          "package": "monad-param",
          "signature": "[m a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "unless",
          "package": "monad-param",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "The reverse of when",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "unless",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "monad-param",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "when",
          "package": "monad-param",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "when",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "monad-param",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e to arbitrary monads.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "zipWithM",
          "package": "monad-param",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
          "type": "function"
        },
        "index": {
          "description": "The zipWithM function generalizes zipWith to arbitrary monads",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "zipWithM",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
          "package": "monad-param",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:zipWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWithM_\u003c/a\u003e\u003c/code\u003e is the extension of \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e which ignores the final result.\n\u003c/p\u003e",
          "module": "Control.Monad.Parameterized",
          "name": "zipWithM_",
          "package": "monad-param",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "zipWithM is the extension of zipWithM which ignores the final result",
          "hierarchy": "Control Monad Parameterized",
          "module": "Control.Monad.Parameterized",
          "name": "zipWithM_",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec()",
          "package": "monad-param",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-param/docs/Control-Monad-Parameterized.html#v:zipWithM_"
      }
    }
  ]
]