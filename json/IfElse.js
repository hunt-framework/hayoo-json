[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for control flow inside of monads with anaphoric variants on if and when and a C-like \"switch\" function.\n\u003c/p\u003e\u003cp\u003eInformation: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAuthor\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Jeff Heard\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCopyright\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e 2008 Jeff Heard\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eLicense\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e BSD\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eVersion\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e 1.0\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eStatus\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Alpha\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-IfElse.html",
        "fct-type": "module",
        "title": "IfElse"
      },
      "index": {
        "description": "Library for control flow inside of monads with anaphoric variants on if and when and C-like switch function Information Author Jeff Heard Copyright Jeff Heard License BSD Version Status Alpha",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "IfElse",
        "normalized": "",
        "package": "IfElse",
        "partial": "If Else",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:acond",
      "description": {
        "fct-descr": "\u003cp\u003eAnaphoric when-else chain.  Like a switch statement, but less cluttered\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "[(Maybe a, a -\u003e m ())] -\u003e m ()",
        "fct-source": "src/Control-Monad-IfElse.html#acond",
        "fct-type": "function",
        "title": "acond"
      },
      "index": {
        "description": "Anaphoric when-else chain Like switch statement but less cluttered",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "acond",
        "normalized": "[(Maybe a,a-\u003eb())]-\u003eb()",
        "package": "IfElse",
        "partial": "",
        "signature": "[(Maybe a,a-\u003em())]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:aif",
      "description": {
        "fct-descr": "\u003cp\u003eAnaphoric if.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "Maybe a -\u003e (a -\u003e m b) -\u003e m b -\u003e m b",
        "fct-source": "src/Control-Monad-IfElse.html#aif",
        "fct-type": "function",
        "title": "aif"
      },
      "index": {
        "description": "Anaphoric if",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "aif",
        "normalized": "Maybe a-\u003e(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "IfElse",
        "partial": "",
        "signature": "Maybe a-\u003e(a-\u003em b)-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:aifM",
      "description": {
        "fct-descr": "\u003cp\u003eAnaphoric if where the test is in Monad m.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "m (Maybe a) -\u003e (a -\u003e m b) -\u003e m b -\u003e m b",
        "fct-source": "src/Control-Monad-IfElse.html#aifM",
        "fct-type": "function",
        "title": "aifM"
      },
      "index": {
        "description": "Anaphoric if where the test is in Monad",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "aifM",
        "normalized": "a(Maybe b)-\u003e(b-\u003ea c)-\u003ea c-\u003ea c",
        "package": "IfElse",
        "partial": "",
        "signature": "m(Maybe a)-\u003e(a-\u003em b)-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:awhen",
      "description": {
        "fct-descr": "\u003cp\u003eChainable anaphoric when.  Takes a maybe value.  \n\u003c/p\u003e\u003cp\u003eif the value is Just x then execute \u003ccode\u003e action x \u003c/code\u003e , then return \u003ccode\u003e True \u003c/code\u003e .  otherwise return \u003ccode\u003e False \u003c/code\u003e .\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "Maybe a -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Control-Monad-IfElse.html#awhen",
        "fct-type": "function",
        "title": "awhen"
      },
      "index": {
        "description": "Chainable anaphoric when Takes maybe value if the value is Just then execute action then return True otherwise return False",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "awhen",
        "normalized": "Maybe a-\u003e(a-\u003eb())-\u003eb()",
        "package": "IfElse",
        "partial": "",
        "signature": "Maybe a-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:awhenM",
      "description": {
        "fct-descr": "\u003cp\u003eChainable anaphoric whenM.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "m (Maybe a) -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Control-Monad-IfElse.html#awhenM",
        "fct-type": "function",
        "title": "awhenM"
      },
      "index": {
        "description": "Chainable anaphoric whenM",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "awhenM",
        "normalized": "a(Maybe b)-\u003e(b-\u003ea())-\u003ea()",
        "package": "IfElse",
        "partial": "",
        "signature": "m(Maybe a)-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:cond",
      "description": {
        "fct-descr": "\u003cp\u003eLike a switch statement, and less cluttered than if else if\n\u003c/p\u003e\u003cpre\u003e cond [ (t1,a1), (t2,a2), ... ]\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "[(Bool, m ())] -\u003e m ()",
        "fct-source": "src/Control-Monad-IfElse.html#cond",
        "fct-type": "function",
        "title": "cond"
      },
      "index": {
        "description": "Like switch statement and less cluttered than if else if cond t1 a1 t2 a2",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "cond",
        "normalized": "[(Bool,a())]-\u003ea()",
        "package": "IfElse",
        "partial": "",
        "signature": "[(Bool,m())]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:condM",
      "description": {
        "fct-descr": "\u003cp\u003eLike a switch statement, and less cluttered than if else if \n\u003c/p\u003e\u003cpre\u003e condM [ (t1,a1), (t2,a2), ... ]\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "[(m Bool, m ())] -\u003e m ()",
        "fct-source": "src/Control-Monad-IfElse.html#condM",
        "fct-type": "function",
        "title": "condM"
      },
      "index": {
        "description": "Like switch statement and less cluttered than if else if condM t1 a1 t2 a2",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "condM",
        "normalized": "[(a Bool,a())]-\u003ea()",
        "package": "IfElse",
        "partial": "",
        "signature": "[(m Bool,m())]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:maybeMP",
      "description": {
        "fct-descr": "\u003cp\u003eThis conversion is common enough to make a name for.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "Maybe a -\u003e m a",
        "fct-source": "src/Control-Monad-IfElse.html#maybeMP",
        "fct-type": "function",
        "title": "maybeMP"
      },
      "index": {
        "description": "This conversion is common enough to make name for",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "maybeMP",
        "normalized": "Maybe a-\u003eb a",
        "package": "IfElse",
        "partial": "MP",
        "signature": "Maybe a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:ncondM",
      "description": {
        "fct-descr": "\u003cp\u003eContrapositive of whenM, if not x then do y\n\u003c/p\u003e\u003cp\u003eunless-else chain.\n\u003c/p\u003e\u003cp\u003emonadic unless-else chain\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "[(m Bool, m ())] -\u003e m ()",
        "fct-source": "src/Control-Monad-IfElse.html#ncondM",
        "fct-type": "function",
        "title": "ncondM"
      },
      "index": {
        "description": "Contrapositive of whenM if not then do unless-else chain monadic unless-else chain",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "ncondM",
        "normalized": "[(a Bool,a())]-\u003ea()",
        "package": "IfElse",
        "partial": "",
        "signature": "[(m Bool,m())]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:return-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e because usually we don't need that\n extra thunk.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "a -\u003e m a",
        "fct-source": "src/Control-Monad-IfElse.html#return%27",
        "fct-type": "function",
        "title": "return'"
      },
      "index": {
        "description": "Strict version of return because usually we don need that extra thunk",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "return'",
        "normalized": "a-\u003eb a",
        "package": "IfElse",
        "partial": "",
        "signature": "a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:returning",
      "description": {
        "fct-descr": "\u003cp\u003eTake an action and make it into a side-effecting \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n Because I seem to keep running into \u003ccode\u003em ()\u003c/code\u003e and the like.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "(a -\u003e m b) -\u003e a -\u003e m a",
        "fct-source": "src/Control-Monad-IfElse.html#returning",
        "fct-type": "function",
        "title": "returning"
      },
      "index": {
        "description": "Take an action and make it into side-effecting return Because seem to keep running into and the like",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "returning",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb a",
        "package": "IfElse",
        "partial": "",
        "signature": "(a-\u003em b)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:untilM",
      "description": {
        "fct-descr": "\u003cp\u003eNegation of \u003ccode\u003e\u003ca\u003ewhileM\u003c/a\u003e\u003c/code\u003e: execute an action so long as the boolean\n returns false.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-Monad-IfElse.html#untilM",
        "fct-type": "function",
        "title": "untilM"
      },
      "index": {
        "description": "Negation of whileM execute an action so long as the boolean returns false",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "untilM",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "IfElse",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:whenM",
      "description": {
        "fct-descr": "\u003cp\u003eA if with no else for unit returning thunks.\n   Returns the value of the test.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-Monad-IfElse.html#whenM",
        "fct-type": "function",
        "title": "whenM"
      },
      "index": {
        "description": "if with no else for unit returning thunks Returns the value of the test",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "whenM",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "IfElse",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:whileM",
      "description": {
        "fct-descr": "\u003cp\u003eIO lifted \u003ccode\u003e && \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIO lifted \u003ccode\u003e || \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eConditionally do the right action based on the truth value of the left expression\n\u003c/p\u003e\u003cp\u003eunless the left side is true, perform the right action\n\u003c/p\u003e\u003cp\u003eunless the (monadic) left side is true, perform the right action\n\u003c/p\u003e\u003cp\u003eBind the result of the last expression in an anaphoric when.  \n\u003c/p\u003e\u003cp\u003ecomposition of \u003ccode\u003e \u003e\u003e= \u003c/code\u003e and \u003ccode\u003e \u003e\u003e? \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ecomposition of \u003ccode\u003e \u003e\u003e= \u003c/code\u003e and \u003ccode\u003e \u003e\u003e=? \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eExecute a monadic action so long as a monadic boolean returns\n true.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IfElse",
        "fct-package": "IfElse",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-Monad-IfElse.html#whileM",
        "fct-type": "function",
        "title": "whileM"
      },
      "index": {
        "description": "IO lifted IO lifted Conditionally do the right action based on the truth value of the left expression unless the left side is true perform the right action unless the monadic left side is true perform the right action Bind the result of the last expression in an anaphoric when composition of and composition of and Execute monadic action so long as monadic boolean returns true",
        "hierarchy": "Control Monad IfElse",
        "module": "Control.Monad.IfElse",
        "name": "whileM",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "IfElse",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  }
]