[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA convenient set of useful conditional operators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "module",
        "fct-source": "src/Control-Conditional.html",
        "fct-type": "module",
        "title": "Conditional"
      },
      "index": {
        "description": "convenient set of useful conditional operators",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "Conditional",
        "normalized": "",
        "package": "cond",
        "partial": "Conditional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#t:ToBool",
      "description": {
        "fct-descr": "\u003cp\u003eConversion of values to \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eToBool\u003c/a\u003e\u003c/code\u003e that are also \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e should obey the following laws:\n\u003c/p\u003e\u003cpre\u003e p || q = if toBool p then true else q\n\u003c/pre\u003e\u003cpre\u003e p && q = if toBool p then q else false\n\u003c/pre\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "class",
        "fct-source": "src/Control-Conditional.html#ToBool",
        "fct-type": "class",
        "title": "ToBool"
      },
      "index": {
        "description": "Conversion of values to Bool Instances of ToBool that are also Boolean should obey the following laws if toBool then true else if toBool then else false",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "ToBool",
        "normalized": "",
        "package": "cond",
        "partial": "To Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eRight bracket of the conditional choice operator. If the predicate\n is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, otherwise it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the right-hand\n argument.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "bool -\u003e a -\u003e Maybe a",
        "fct-source": "src/Control-Conditional.html#%7C%3E",
        "fct-type": "function",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "Right bracket of the conditional choice operator If the predicate is True returns Nothing otherwise it returns Just the right-hand argument",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(|\u003e) |\u003e",
        "normalized": "a-\u003eb-\u003eMaybe b",
        "package": "cond",
        "partial": "",
        "signature": "bool-\u003ea-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-124--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic variant of \u003ccode\u003e\u003ca\u003e|\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool -\u003e m a -\u003e m (Maybe a)",
        "fct-source": "src/Control-Conditional.html#%7C%3E%3E",
        "fct-type": "function",
        "title": "(|\u003e\u003e)"
      },
      "index": {
        "description": "monadic variant of",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(|\u003e\u003e) |\u003e\u003e",
        "normalized": "a b-\u003ea c-\u003ea(Maybe c)",
        "package": "cond",
        "partial": "",
        "signature": "m bool-\u003em a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-60--124-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft bracket of the conditional choice operator. This is equivalent to\n \u003ccode\u003e\u003ca\u003efromMaybe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "a -\u003e Maybe a -\u003e a",
        "fct-source": "src/Control-Conditional.html#%3C%7C",
        "fct-type": "function",
        "title": "(\u003c|)"
      },
      "index": {
        "description": "Left bracket of the conditional choice operator This is equivalent to fromMaybe",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(\u003c|) \u003c|",
        "normalized": "a-\u003eMaybe a-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "a-\u003eMaybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted inclusive disjunction. Unlike \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e), This function is \n short-circuiting in the monad. Fixity is the same as \u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e (infixr 2).\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool -\u003e m bool -\u003e m bool",
        "fct-source": "src/Control-Conditional.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "Lifted inclusive disjunction Unlike liftM2 This function is short-circuiting in the monad Fixity is the same as infixr",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "cond",
        "partial": "",
        "signature": "m bool-\u003em bool-\u003em bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-60--38--38--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted conjunction. Unlike \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e), this function is \n short-circuiting in the monad. Fixity is the same as \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e (infxr 3).\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool -\u003e m bool -\u003e m bool",
        "fct-source": "src/Control-Conditional.html#%3C%26%26%3E",
        "fct-type": "function",
        "title": "(\u003c&&\u003e)"
      },
      "index": {
        "description": "Lifted conjunction Unlike liftM2 this function is short-circuiting in the monad Fixity is the same as infxr",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(\u003c&&\u003e) \u003c&&\u003e",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "cond",
        "partial": "",
        "signature": "m bool-\u003em bool-\u003em bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-60--60--124-",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic variant of \u003ccode\u003e\u003ca\u003e\u003c|\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m a -\u003e m (Maybe a) -\u003e m a",
        "fct-source": "src/Control-Conditional.html#%3C%3C%7C",
        "fct-type": "function",
        "title": "(\u003c\u003c|)"
      },
      "index": {
        "description": "monadic variant of",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(\u003c\u003c|) \u003c\u003c|",
        "normalized": "a b-\u003ea(Maybe b)-\u003ea b",
        "package": "cond",
        "partial": "",
        "signature": "m a-\u003em(Maybe a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-63-",
      "description": {
        "fct-descr": "\u003cp\u003eAn operator that allows you to write C-style ternary conditionals of\n the form:\n\u003c/p\u003e\u003cpre\u003e p ? t ?? f\n\u003c/pre\u003e\u003cp\u003eNote that parentheses are required in order to chain sequences of\n conditionals together. This is probably a good thing.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "b -\u003e (b -\u003e a) -\u003e a",
        "fct-source": "src/Control-Conditional.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "An operator that allows you to write C-style ternary conditionals of the form Note that parentheses are required in order to chain sequences of conditionals together This is probably good thing",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(?) ?",
        "normalized": "a-\u003e(a-\u003eb)-\u003eb",
        "package": "cond",
        "partial": "",
        "signature": "b-\u003e(b-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-63--60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eConditional monoid operator. If the predicate is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the second\n argument is replaced with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e. The fixity of this operator is one\n level higher than \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eIt can also be used to chain multiple predicates together, like this: \n\u003c/p\u003e\u003cpre\u003e even (length ls) ?\u003c\u003e not (null ls) ?\u003c\u003e ls\n\u003c/pre\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "bool -\u003e a -\u003e a",
        "fct-source": "src/Control-Conditional.html#%3F%3C%3E",
        "fct-type": "function",
        "title": "(?\u003c\u003e)"
      },
      "index": {
        "description": "Conditional monoid operator If the predicate is False the second argument is replaced with mempty The fixity of this operator is one level higher than It can also be used to chain multiple predicates together like this even length ls not null ls ls",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(?\u003c\u003e) ?\u003c\u003e",
        "normalized": "a-\u003eb-\u003eb",
        "package": "cond",
        "partial": "",
        "signature": "bool-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-63--63-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eif'\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e argument at the end (infixr 1).\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "a -\u003e a -\u003e bool -\u003e a",
        "fct-source": "src/Control-Conditional.html#%3F%3F",
        "fct-type": "function",
        "title": "(??)"
      },
      "index": {
        "description": "if with the Bool argument at the end infixr",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(??) ??",
        "normalized": "a-\u003ea-\u003eb-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "a-\u003ea-\u003ebool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-63-.",
      "description": {
        "fct-descr": "\u003cp\u003eConditional composition. If the predicate is False, \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e is returned\n instead of the second argument. This function, for example, can be used to \n conditionally add functions to a composition chain.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "bool -\u003e cat a a -\u003e cat a a",
        "fct-source": "src/Control-Conditional.html#%3F.",
        "fct-type": "function",
        "title": "(?.)"
      },
      "index": {
        "description": "Conditional composition If the predicate is False id is returned instead of the second argument This function for example can be used to conditionally add functions to composition chain",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(?.) ?.",
        "normalized": "a-\u003eb c c-\u003eb c c",
        "package": "cond",
        "partial": "",
        "signature": "bool-\u003ecat a a-\u003ecat a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-8882-",
      "description": {
        "fct-descr": "\u003cp\u003eUnicode rebinding of \u003ccode\u003e\u003ca\u003e\u003c|\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "a -\u003e Maybe a -\u003e a",
        "fct-source": "src/Control-Conditional.html#%22B2",
        "fct-type": "function",
        "title": "(⊲)"
      },
      "index": {
        "description": "Unicode rebinding of",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(⊲) ⊲",
        "normalized": "a-\u003eMaybe a-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "a-\u003eMaybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:-8883-",
      "description": {
        "fct-descr": "\u003cp\u003eUnicode rebinding of \u003ccode\u003e\u003ca\u003e|\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "bool -\u003e a -\u003e Maybe a",
        "fct-source": "src/Control-Conditional.html#%22B3",
        "fct-type": "function",
        "title": "(⊳)"
      },
      "index": {
        "description": "Unicode rebinding of",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "(⊳) ⊳",
        "normalized": "a-\u003eb-\u003eMaybe b",
        "package": "cond",
        "partial": "",
        "signature": "bool-\u003ea-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:bool",
      "description": {
        "fct-descr": "\u003cp\u003eA catamorphism (aka fold) for booleans. This is analogous to \n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e. The first argument is \n the false case, the second argument is the true case, and the last argument \n is the predicate value.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "a -\u003e a -\u003e bool -\u003e a",
        "fct-source": "src/Control-Conditional.html#bool",
        "fct-type": "function",
        "title": "bool"
      },
      "index": {
        "description": "catamorphism aka fold for booleans This is analogous to foldr maybe and either The first argument is the false case the second argument is the true case and the last argument is the predicate value",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "bool",
        "normalized": "a-\u003ea-\u003eb-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "a-\u003ea-\u003ebool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:cond",
      "description": {
        "fct-descr": "\u003cp\u003eLisp-style conditionals. If no conditions match, then a runtime exception\n is thrown. Here's a trivial example:\n\u003c/p\u003e\u003cpre\u003e\n   signum x = cond [(x \u003e 0     , 1 )\n                   ,(x \u003c 0     , -1)\n                   ,(otherwise , 0 )]\n\u003c/pre\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "[(bool, a)] -\u003e a",
        "fct-source": "src/Control-Conditional.html#cond",
        "fct-type": "function",
        "title": "cond"
      },
      "index": {
        "description": "Lisp-style conditionals If no conditions match then runtime exception is thrown Here trivial example signum cond otherwise",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "cond",
        "normalized": "[(a,b)]-\u003eb",
        "package": "cond",
        "partial": "",
        "signature": "[(bool,a)]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:condDefault",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to the \u003ccode\u003e\u003ca\u003econd\u003c/a\u003e\u003c/code\u003e function with a default value supplied,\n which will be used when no condition in the list is matched.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "a -\u003e [(bool, a)] -\u003e a",
        "fct-source": "src/Control-Conditional.html#condDefault",
        "fct-type": "function",
        "title": "condDefault"
      },
      "index": {
        "description": "Analogous to the cond function with default value supplied which will be used when no condition in the list is matched",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "condDefault",
        "normalized": "a-\u003e[(b,a)]-\u003ea",
        "package": "cond",
        "partial": "Default",
        "signature": "a-\u003e[(bool,a)]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:condM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econd\u003c/a\u003e\u003c/code\u003e lifted to \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. If no conditions match, a runtime exception\n is thrown.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "[(m bool, m a)] -\u003e m a",
        "fct-source": "src/Control-Conditional.html#condM",
        "fct-type": "function",
        "title": "condM"
      },
      "index": {
        "description": "cond lifted to Monad If no conditions match runtime exception is thrown",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "condM",
        "normalized": "[(a b,a c)]-\u003ea c",
        "package": "cond",
        "partial": "",
        "signature": "[(m bool,m a)]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:condPlus",
      "description": {
        "fct-descr": "\u003cp\u003eLisp-style conditionals generalized over \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e. If no conditions\n match, then the result is \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e. This is a safer variant of \u003ccode\u003e\u003ca\u003econd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere's a highly contrived example using \u003ccode\u003e\u003ca\u003efromMaybe\u003c/a\u003e\u003c/code\u003e: \n\u003c/p\u003e\u003cpre\u003e\n   signum x = fromMaybe 0 . condPlus $ [(x \u003e 0, 1 ) \n                                       ,(x \u003c 0, -1)]\n\u003c/pre\u003e\u003cp\u003eAlternatively, you could use the \u003ccode\u003e\u003ca\u003e\u003c|\u003c/a\u003e\u003c/code\u003e operator from Hoare's ternary\n conditional choice operator, like so:\n\u003c/p\u003e\u003cpre\u003e\n   signum x = 0 \u003c| condPlus [(x \u003e 0, 1 ) \n                            ,(x \u003c 0, -1)]\n\u003c/pre\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "[(bool, a)] -\u003e m a",
        "fct-source": "src/Control-Conditional.html#condPlus",
        "fct-type": "function",
        "title": "condPlus"
      },
      "index": {
        "description": "Lisp-style conditionals generalized over MonadPlus If no conditions match then the result is mzero This is safer variant of cond Here highly contrived example using fromMaybe signum fromMaybe condPlus Alternatively you could use the operator from Hoare ternary conditional choice operator like so signum condPlus",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "condPlus",
        "normalized": "[(a,b)]-\u003ec b",
        "package": "cond",
        "partial": "Plus",
        "signature": "[(bool,a)]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:condPlusM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econdPlus\u003c/a\u003e\u003c/code\u003e lifted to \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. If no conditions match, then \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "[(m bool, m a)] -\u003e m a",
        "fct-source": "src/Control-Conditional.html#condPlusM",
        "fct-type": "function",
        "title": "condPlusM"
      },
      "index": {
        "description": "condPlus lifted to Monad If no conditions match then mzero is returned",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "condPlusM",
        "normalized": "[(a b,a c)]-\u003ea c",
        "package": "cond",
        "partial": "Plus",
        "signature": "[(m bool,m a)]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:guard",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "bool -\u003e m ()",
        "fct-source": "src/Control-Conditional.html#guard",
        "fct-type": "function",
        "title": "guard"
      },
      "index": {
        "description": "Generalization of guard",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "guard",
        "normalized": "a-\u003eb()",
        "package": "cond",
        "partial": "",
        "signature": "bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:guardM",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e with a monadic predicate.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool -\u003e m ()",
        "fct-source": "src/Control-Conditional.html#guardM",
        "fct-type": "function",
        "title": "guardM"
      },
      "index": {
        "description": "variant of guard with monadic predicate",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "guardM",
        "normalized": "a b-\u003ea()",
        "package": "cond",
        "partial": "",
        "signature": "m bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:if-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA simple conditional operator\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "bool -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Control-Conditional.html#if%27",
        "fct-type": "function",
        "title": "if'"
      },
      "index": {
        "description": "simple conditional operator",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "if'",
        "normalized": "a-\u003eb-\u003eb-\u003eb",
        "package": "cond",
        "partial": "",
        "signature": "bool-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:ifM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eif'\u003c/a\u003e\u003c/code\u003e lifted to \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. Unlike \u003ccode\u003e\u003ca\u003eliftM3\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eif'\u003c/a\u003e\u003c/code\u003e, this is  \n short-circuiting in the monad, such that only the predicate action and one of\n the remaining argument actions are executed.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool -\u003e m a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Conditional.html#ifM",
        "fct-type": "function",
        "title": "ifM"
      },
      "index": {
        "description": "if lifted to Monad Unlike liftM3 if this is short-circuiting in the monad such that only the predicate action and one of the remaining argument actions are executed",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "ifM",
        "normalized": "a b-\u003ea c-\u003ea c-\u003ea c",
        "package": "cond",
        "partial": "",
        "signature": "m bool-\u003em a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:notM",
      "description": {
        "fct-descr": "\u003cp\u003eLifted boolean negation.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool -\u003e m bool",
        "fct-source": "src/Control-Conditional.html#notM",
        "fct-type": "function",
        "title": "notM"
      },
      "index": {
        "description": "Lifted boolean negation",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "notM",
        "normalized": "a b-\u003ea b",
        "package": "cond",
        "partial": "",
        "signature": "m bool-\u003em bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:otherwiseM",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool",
        "fct-source": "src/Control-Conditional.html#otherwiseM",
        "fct-type": "function",
        "title": "otherwiseM"
      },
      "index": {
        "description": "synonym for return true",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "otherwiseM",
        "normalized": "",
        "package": "cond",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eComposes a predicate function and 2 functions into a single\n function. The first function is called when the predicate yields True, the\n second when the predicate yields False.\n\u003c/p\u003e\u003cp\u003eNote that after importing \u003ca\u003eControl.Monad.Instances\u003c/a\u003e, \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e becomes a  \n special case of \u003ccode\u003e\u003ca\u003eifM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "(a -\u003e bool) -\u003e (a -\u003e b) -\u003e (a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Control-Conditional.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Composes predicate function and functions into single function The first function is called when the predicate yields True the second when the predicate yields False Note that after importing Control.Monad.Instances select becomes special case of ifM",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "select",
        "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(a-\u003ec)-\u003ea-\u003ec",
        "package": "cond",
        "partial": "",
        "signature": "(a-\u003ebool)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:selectM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e lifted to \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "(a -\u003e m bool) -\u003e (a -\u003e m b) -\u003e (a -\u003e m b) -\u003e a -\u003e m b",
        "fct-source": "src/Control-Conditional.html#selectM",
        "fct-type": "function",
        "title": "selectM"
      },
      "index": {
        "description": "select lifted to Monad",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "selectM",
        "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003e(a-\u003eb d)-\u003ea-\u003eb d",
        "package": "cond",
        "partial": "",
        "signature": "(a-\u003em bool)-\u003e(a-\u003em b)-\u003e(a-\u003em b)-\u003ea-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:toBool",
      "description": {
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "bool -\u003e Bool",
        "fct-source": "src/Control-Conditional.html#toBool",
        "fct-type": "method",
        "title": "toBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "toBool",
        "normalized": "a-\u003eBool",
        "package": "cond",
        "partial": "Bool",
        "signature": "bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:unless",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eunless\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-Conditional.html#unless",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "Generalization of unless",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "unless",
        "normalized": "a-\u003eb()-\u003eb()",
        "package": "cond",
        "partial": "",
        "signature": "bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:unlessM",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eunless\u003c/a\u003e\u003c/code\u003e with a monadic predicate.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-Conditional.html#unlessM",
        "fct-type": "function",
        "title": "unlessM"
      },
      "index": {
        "description": "variant of unless with monadic predicate",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "unlessM",
        "normalized": "a b-\u003ea()-\u003ea()",
        "package": "cond",
        "partial": "",
        "signature": "m bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-Conditional.html#when",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "Generalization of when",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "when",
        "normalized": "a-\u003eb()-\u003eb()",
        "package": "cond",
        "partial": "",
        "signature": "bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:whenM",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e with a monadic predicate.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-Conditional.html#whenM",
        "fct-type": "function",
        "title": "whenM"
      },
      "index": {
        "description": "variant of when with monadic predicate",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "whenM",
        "normalized": "a b-\u003ea()-\u003ea()",
        "package": "cond",
        "partial": "",
        "signature": "m bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Control-Conditional.html#v:xorM",
      "description": {
        "fct-descr": "\u003cp\u003eLifted boolean exclusive disjunction.\n\u003c/p\u003e",
        "fct-module": "Control.Conditional",
        "fct-package": "cond",
        "fct-signature": "m bool -\u003e m bool -\u003e m bool",
        "fct-source": "src/Control-Conditional.html#xorM",
        "fct-type": "function",
        "title": "xorM"
      },
      "index": {
        "description": "Lifted boolean exclusive disjunction",
        "hierarchy": "Control Conditional",
        "module": "Control.Conditional",
        "name": "xorM",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "cond",
        "partial": "",
        "signature": "m bool-\u003em bool-\u003em bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#",
      "description": {
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "module",
        "fct-source": "src/Data-Algebra-Boolean.html",
        "fct-type": "module",
        "title": "Boolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "Boolean",
        "normalized": "",
        "package": "cond",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#t:Bitwise",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype wrapper that derives a \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e instance from any type that is both\n a \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e instance and a \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance,\n such that boolean logic operations on the \u003ccode\u003e\u003ca\u003eBitwise\u003c/a\u003e\u003c/code\u003e wrapper correspond to \n bitwise logic operations on the inner type. It should be noted that \u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e is\n defined as \u003ccode\u003e\u003ca\u003eBitwise\u003c/a\u003e\u003c/code\u003e 0 and \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e is defined as \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn addition, a number of other classes are automatically derived from the inner \n type. These classes were chosen on the basis that many other \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e \n instances defined in base are also instances of these classes.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Algebra-Boolean.html#Bitwise",
        "fct-type": "newtype",
        "title": "Bitwise"
      },
      "index": {
        "description": "newtype wrapper that derives Boolean instance from any type that is both Bits instance and Num instance such that boolean logic operations on the Bitwise wrapper correspond to bitwise logic operations on the inner type It should be noted that false is defined as Bitwise and true is defined as not false In addition number of other classes are automatically derived from the inner type These classes were chosen on the basis that many other Bits instances defined in base are also instances of these classes",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "Bitwise",
        "normalized": "",
        "package": "cond",
        "partial": "Bitwise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#t:Boolean",
      "description": {
        "fct-descr": "\u003cp\u003eA class for boolean algebras. Instances of this class are expected to obey\n all the laws of boolean algebra.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003c--\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "class",
        "fct-source": "src/Data-Algebra-Boolean.html#Boolean",
        "fct-type": "class",
        "title": "Boolean"
      },
      "index": {
        "description": "class for boolean algebras Instances of this class are expected to obey all the laws of boolean algebra Minimal complete definition true or false not or or",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "Boolean",
        "normalized": "",
        "package": "cond",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eLogical inclusive disjunction. (infixr 2)\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "b -\u003e b -\u003e b",
        "fct-source": "src/Data-Algebra-Boolean.html#%7C%7C",
        "fct-type": "method",
        "title": "(||)"
      },
      "index": {
        "description": "Logical inclusive disjunction infixr",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "(||) ||",
        "normalized": "a-\u003ea-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "b-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eLogical conjunction. (infxr 3)\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "b -\u003e b -\u003e b",
        "fct-source": "src/Data-Algebra-Boolean.html#%26%26",
        "fct-type": "method",
        "title": "(&&)"
      },
      "index": {
        "description": "Logical conjunction infxr",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "(&&) &&",
        "normalized": "a-\u003ea-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "b-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:-45--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLogical implication. (infixr 1)\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "b -\u003e b -\u003e b",
        "fct-source": "src/Data-Algebra-Boolean.html#--%3E",
        "fct-type": "method",
        "title": "(--\u003e)"
      },
      "index": {
        "description": "Logical implication infixr",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "(--\u003e) --\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "b-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:-60--45--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLogical biconditional. (infixr 1)\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "b -\u003e b -\u003e b",
        "fct-source": "src/Data-Algebra-Boolean.html#%3C--%3E",
        "fct-type": "method",
        "title": "(\u003c--\u003e)"
      },
      "index": {
        "description": "Logical biconditional infixr",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "(\u003c--\u003e) \u003c--\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "b-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:Bitwise",
      "description": {
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "Bitwise",
        "fct-source": "src/Data-Algebra-Boolean.html#Bitwise",
        "fct-type": "function",
        "title": "Bitwise"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "Bitwise",
        "normalized": "",
        "package": "cond",
        "partial": "Bitwise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:false",
      "description": {
        "fct-descr": "\u003cp\u003eFalse value, defined as the bottom of the bounded lattice.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "b",
        "fct-source": "src/Data-Algebra-Boolean.html#false",
        "fct-type": "method",
        "title": "false"
      },
      "index": {
        "description": "False value defined as the bottom of the bounded lattice",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "false",
        "normalized": "",
        "package": "cond",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:fromBool",
      "description": {
        "fct-descr": "\u003cp\u003eInjection from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e into a boolean algebra.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "Bool -\u003e b",
        "fct-source": "src/Data-Algebra-Boolean.html#fromBool",
        "fct-type": "function",
        "title": "fromBool"
      },
      "index": {
        "description": "Injection from Bool into boolean algebra",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "fromBool",
        "normalized": "Bool-\u003ea",
        "package": "cond",
        "partial": "Bool",
        "signature": "Bool-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:getBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "a",
        "fct-source": "src/Data-Algebra-Boolean.html#Bitwise",
        "fct-type": "function",
        "title": "getBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "getBits",
        "normalized": "",
        "package": "cond",
        "partial": "Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:not",
      "description": {
        "fct-descr": "\u003cp\u003eLogical negation.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "b -\u003e b",
        "fct-source": "src/Data-Algebra-Boolean.html#not",
        "fct-type": "method",
        "title": "not"
      },
      "index": {
        "description": "Logical negation",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "not",
        "normalized": "a-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:true",
      "description": {
        "fct-descr": "\u003cp\u003eTruth value, defined as the top of the bounded lattice\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "b",
        "fct-source": "src/Data-Algebra-Boolean.html#true",
        "fct-type": "method",
        "title": "true"
      },
      "index": {
        "description": "Truth value defined as the top of the bounded lattice",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "true",
        "normalized": "",
        "package": "cond",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cond/docs/Data-Algebra-Boolean.html#v:xor",
      "description": {
        "fct-descr": "\u003cp\u003eLogical exclusive disjunction. (infixr 1)\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Boolean",
        "fct-package": "cond",
        "fct-signature": "b -\u003e b -\u003e b",
        "fct-source": "src/Data-Algebra-Boolean.html#xor",
        "fct-type": "method",
        "title": "xor"
      },
      "index": {
        "description": "Logical exclusive disjunction infixr",
        "hierarchy": "Data Algebra Boolean",
        "module": "Data.Algebra.Boolean",
        "name": "xor",
        "normalized": "a-\u003ea-\u003ea",
        "package": "cond",
        "partial": "",
        "signature": "b-\u003eb-\u003eb"
      }
    }
  }
]