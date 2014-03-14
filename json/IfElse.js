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
        "word": "IfElse"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for control flow inside of monads with anaphoric variants on if and when and a C-like \"switch\" function.\n\u003c/p\u003e\u003cp\u003eInformation: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAuthor\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Jeff Heard\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCopyright\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e 2008 Jeff Heard\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eLicense\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e BSD\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eVersion\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e 1.0\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eStatus\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Alpha\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Control.Monad.IfElse",
          "name": "IfElse",
          "package": "IfElse",
          "source": "src/Control-Monad-IfElse.html",
          "type": "module"
        },
        "index": {
          "description": "Library for control flow inside of monads with anaphoric variants on if and when and C-like switch function Information Author Jeff Heard Copyright Jeff Heard License BSD Version Status Alpha",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "IfElse",
          "package": "IfElse",
          "partial": "If Else",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnaphoric when-else chain.  Like a switch statement, but less cluttered\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "acond",
          "package": "IfElse",
          "signature": "[(Maybe a, a -\u003e m ())] -\u003e m ()",
          "source": "src/Control-Monad-IfElse.html#acond",
          "type": "function"
        },
        "index": {
          "description": "Anaphoric when-else chain Like switch statement but less cluttered",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "acond",
          "normalized": "[(Maybe a,a-\u003eb())]-\u003eb()",
          "package": "IfElse",
          "signature": "[(Maybe a,a-\u003em())]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:acond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnaphoric if.\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "aif",
          "package": "IfElse",
          "signature": "Maybe a -\u003e (a -\u003e m b) -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-IfElse.html#aif",
          "type": "function"
        },
        "index": {
          "description": "Anaphoric if",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "aif",
          "normalized": "Maybe a-\u003e(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "IfElse",
          "signature": "Maybe a-\u003e(a-\u003em b)-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:aif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnaphoric if where the test is in Monad m.\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "aifM",
          "package": "IfElse",
          "signature": "m (Maybe a) -\u003e (a -\u003e m b) -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-IfElse.html#aifM",
          "type": "function"
        },
        "index": {
          "description": "Anaphoric if where the test is in Monad",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "aifM",
          "normalized": "a(Maybe b)-\u003e(b-\u003ea c)-\u003ea c-\u003ea c",
          "package": "IfElse",
          "signature": "m(Maybe a)-\u003e(a-\u003em b)-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:aifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChainable anaphoric when.  Takes a maybe value.  \n\u003c/p\u003e\u003cp\u003eif the value is Just x then execute \u003ccode\u003e action x \u003c/code\u003e , then return \u003ccode\u003e True \u003c/code\u003e .  otherwise return \u003ccode\u003e False \u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "awhen",
          "package": "IfElse",
          "signature": "Maybe a -\u003e (a -\u003e m ()) -\u003e m ()",
          "source": "src/Control-Monad-IfElse.html#awhen",
          "type": "function"
        },
        "index": {
          "description": "Chainable anaphoric when Takes maybe value if the value is Just then execute action then return True otherwise return False",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "awhen",
          "normalized": "Maybe a-\u003e(a-\u003eb())-\u003eb()",
          "package": "IfElse",
          "signature": "Maybe a-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:awhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChainable anaphoric whenM.\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "awhenM",
          "package": "IfElse",
          "signature": "m (Maybe a) -\u003e (a -\u003e m ()) -\u003e m ()",
          "source": "src/Control-Monad-IfElse.html#awhenM",
          "type": "function"
        },
        "index": {
          "description": "Chainable anaphoric whenM",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "awhenM",
          "normalized": "a(Maybe b)-\u003e(b-\u003ea())-\u003ea()",
          "package": "IfElse",
          "signature": "m(Maybe a)-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:awhenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike a switch statement, and less cluttered than if else if\n\u003c/p\u003e\u003cpre\u003e cond [ (t1,a1), (t2,a2), ... ]\n\u003c/pre\u003e",
          "module": "Control.Monad.IfElse",
          "name": "cond",
          "package": "IfElse",
          "signature": "[(Bool, m ())] -\u003e m ()",
          "source": "src/Control-Monad-IfElse.html#cond",
          "type": "function"
        },
        "index": {
          "description": "Like switch statement and less cluttered than if else if cond t1 a1 t2 a2",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "cond",
          "normalized": "[(Bool,a())]-\u003ea()",
          "package": "IfElse",
          "signature": "[(Bool,m())]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike a switch statement, and less cluttered than if else if \n\u003c/p\u003e\u003cpre\u003e condM [ (t1,a1), (t2,a2), ... ]\n\u003c/pre\u003e",
          "module": "Control.Monad.IfElse",
          "name": "condM",
          "package": "IfElse",
          "signature": "[(m Bool, m ())] -\u003e m ()",
          "source": "src/Control-Monad-IfElse.html#condM",
          "type": "function"
        },
        "index": {
          "description": "Like switch statement and less cluttered than if else if condM t1 a1 t2 a2",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "condM",
          "normalized": "[(a Bool,a())]-\u003ea()",
          "package": "IfElse",
          "signature": "[(m Bool,m())]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:condM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis conversion is common enough to make a name for.\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "maybeMP",
          "package": "IfElse",
          "signature": "Maybe a -\u003e m a",
          "source": "src/Control-Monad-IfElse.html#maybeMP",
          "type": "function"
        },
        "index": {
          "description": "This conversion is common enough to make name for",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "maybeMP",
          "normalized": "Maybe a-\u003eb a",
          "package": "IfElse",
          "partial": "MP",
          "signature": "Maybe a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:maybeMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContrapositive of whenM, if not x then do y\n\u003c/p\u003e\u003cp\u003eunless-else chain.\n\u003c/p\u003e\u003cp\u003emonadic unless-else chain\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "ncondM",
          "package": "IfElse",
          "signature": "[(m Bool, m ())] -\u003e m ()",
          "source": "src/Control-Monad-IfElse.html#ncondM",
          "type": "function"
        },
        "index": {
          "description": "Contrapositive of whenM if not then do unless-else chain monadic unless-else chain",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "ncondM",
          "normalized": "[(a Bool,a())]-\u003ea()",
          "package": "IfElse",
          "signature": "[(m Bool,m())]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:ncondM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e because usually we don't need that\n extra thunk.\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "return'",
          "package": "IfElse",
          "signature": "a -\u003e m a",
          "source": "src/Control-Monad-IfElse.html#return%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of return because usually we don need that extra thunk",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "return'",
          "normalized": "a-\u003eb a",
          "package": "IfElse",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:return-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake an action and make it into a side-effecting \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n Because I seem to keep running into \u003ccode\u003em ()\u003c/code\u003e and the like.\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "returning",
          "package": "IfElse",
          "signature": "(a -\u003e m b) -\u003e a -\u003e m a",
          "source": "src/Control-Monad-IfElse.html#returning",
          "type": "function"
        },
        "index": {
          "description": "Take an action and make it into side-effecting return Because seem to keep running into and the like",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "returning",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb a",
          "package": "IfElse",
          "signature": "(a-\u003em b)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:returning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation of \u003ccode\u003e\u003ca\u003ewhileM\u003c/a\u003e\u003c/code\u003e: execute an action so long as the boolean\n returns false.\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "untilM",
          "package": "IfElse",
          "signature": "m Bool -\u003e m () -\u003e m ()",
          "source": "src/Control-Monad-IfElse.html#untilM",
          "type": "function"
        },
        "index": {
          "description": "Negation of whileM execute an action so long as the boolean returns false",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "untilM",
          "normalized": "a Bool-\u003ea()-\u003ea()",
          "package": "IfElse",
          "signature": "m Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:untilM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA if with no else for unit returning thunks.\n   Returns the value of the test.\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "whenM",
          "package": "IfElse",
          "signature": "m Bool -\u003e m () -\u003e m ()",
          "source": "src/Control-Monad-IfElse.html#whenM",
          "type": "function"
        },
        "index": {
          "description": "if with no else for unit returning thunks Returns the value of the test",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "whenM",
          "normalized": "a Bool-\u003ea()-\u003ea()",
          "package": "IfElse",
          "signature": "m Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:whenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIO lifted \u003ccode\u003e && \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIO lifted \u003ccode\u003e || \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eConditionally do the right action based on the truth value of the left expression\n\u003c/p\u003e\u003cp\u003eunless the left side is true, perform the right action\n\u003c/p\u003e\u003cp\u003eunless the (monadic) left side is true, perform the right action\n\u003c/p\u003e\u003cp\u003eBind the result of the last expression in an anaphoric when.  \n\u003c/p\u003e\u003cp\u003ecomposition of \u003ccode\u003e \u003e\u003e= \u003c/code\u003e and \u003ccode\u003e \u003e\u003e? \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ecomposition of \u003ccode\u003e \u003e\u003e= \u003c/code\u003e and \u003ccode\u003e \u003e\u003e=? \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eExecute a monadic action so long as a monadic boolean returns\n true.\n\u003c/p\u003e",
          "module": "Control.Monad.IfElse",
          "name": "whileM",
          "package": "IfElse",
          "signature": "m Bool -\u003e m () -\u003e m ()",
          "source": "src/Control-Monad-IfElse.html#whileM",
          "type": "function"
        },
        "index": {
          "description": "IO lifted IO lifted Conditionally do the right action based on the truth value of the left expression unless the left side is true perform the right action unless the monadic left side is true perform the right action Bind the result of the last expression in an anaphoric when composition of and composition of and Execute monadic action so long as monadic boolean returns true",
          "hierarchy": "Control Monad IfElse",
          "module": "Control.Monad.IfElse",
          "name": "whileM",
          "normalized": "a Bool-\u003ea()-\u003ea()",
          "package": "IfElse",
          "signature": "m Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IfElse/docs/Control-Monad-IfElse.html#v:whileM"
      }
    }
  ]
]