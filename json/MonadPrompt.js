[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of monads that allow the computation\nto \u003ccode\u003e\u003ca\u003eprompt\u003c/a\u003e\u003c/code\u003e for further input.\n\u003c/p\u003e\u003cp\u003e(c) 2008 Bertram Felgenhauer & Ryan Ingram\nReleased as open source under a 3 clause BSD license. See the LICENSE\nfile in the source code distribution for further information.\n\u003c/p\u003e\u003cp\u003eRecPromptT added by Cale Gibbard, contributed under the same license.\n\u003c/p\u003e\u003cp\u003eMonadPrompt monads allow you to pass some object of the prompt\ntype in, and get a result of the prompt's answer type out.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Prompt.html",
        "fct-type": "module",
        "title": "Prompt"
      },
      "index": {
        "description": "Implementation of monads that allow the computation to prompt for further input Bertram Felgenhauer Ryan Ingram Released as open source under clause BSD license See the LICENSE file in the source code distribution for further information RecPromptT added by Cale Gibbard contributed under the same license MonadPrompt monads allow you to pass some object of the prompt type in and get result of the prompt answer type out",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "Prompt",
        "normalized": "",
        "package": "MonadPrompt",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#t:Lift",
      "description": {
        "fct-descr": "\u003cp\u003eA higher-kinded Either, used in defining \u003ccode\u003e\u003ca\u003ePromptT\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Prompt.html#Lift",
        "fct-type": "data",
        "title": "Lift"
      },
      "index": {
        "description": "higher-kinded Either used in defining PromptT",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "Lift",
        "normalized": "",
        "package": "MonadPrompt",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#t:MonadPrompt",
      "description": {
        "fct-descr": "\u003cp\u003eYou can construct a monad very simply with prompt, by putting\nall of its effects as terms in a GADT, like the following example:\n\u003c/p\u003e\u003cpre\u003e\ndata PromptState s a where\n    Put :: s -\u003e PromptState s ()\n    Get :: PromptState s s\n\u003c/pre\u003e\u003cp\u003eYou then use \u003ccode\u003e\u003ca\u003eprompt\u003c/a\u003e\u003c/code\u003e to access effects:\n\u003c/p\u003e\u003cpre\u003e\npostIncrement :: MonadPrompt (PromptState Int) m =\u003e m Int\npostIncrement =\n  do x \u003c- prompt Get\n     prompt (Put (x+1))\n     return x\n\u003c/pre\u003e\u003cp\u003eThe advantage of Prompt over implementing effects directly:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Prompt is pure; it is only through the observation function\n   runPromptC that you can cause effects.\n\u003c/li\u003e\u003cli\u003e You don't have to worry about the monad laws; they are\n   correct by construction and you cannot break them.\n\u003c/li\u003e\u003cli\u003e You can implement several observation functions for the same\n   type.  See, for example, \u003ca\u003ehttp://paste.lisp.org/display/53766\u003c/a\u003e\n   where a guessing game is implemented with an IO observation\n   function for the user, and an AI observation function that\n   plays the game automatically.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIn these ways Prompt is similar to Unimo, but bind and return\nare inlined into the computation, whereas in Unimo they are\nhandled as a term calculus.\nSee \u003ca\u003ehttp://sneezy.cs.nott.ac.uk/fplunch/weblog/?p=89\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Prompt.html#MonadPrompt",
        "fct-type": "class",
        "title": "MonadPrompt"
      },
      "index": {
        "description": "You can construct monad very simply with prompt by putting all of its effects as terms in GADT like the following example data PromptState where Put PromptState Get PromptState You then use prompt to access effects postIncrement MonadPrompt PromptState Int Int postIncrement do prompt Get prompt Put return The advantage of Prompt over implementing effects directly Prompt is pure it is only through the observation function runPromptC that you can cause effects You don have to worry about the monad laws they are correct by construction and you cannot break them You can implement several observation functions for the same type See for example http paste.lisp.org display where guessing game is implemented with an IO observation function for the user and an AI observation function that plays the game automatically In these ways Prompt is similar to Unimo but bind and return are inlined into the computation whereas in Unimo they are handled as term calculus See http sneezy.cs.nott.ac.uk fplunch weblog",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "MonadPrompt",
        "normalized": "",
        "package": "MonadPrompt",
        "partial": "Monad Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#t:Prompt",
      "description": {
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Prompt.html#Prompt",
        "fct-type": "data",
        "title": "Prompt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "Prompt",
        "normalized": "",
        "package": "MonadPrompt",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#t:PromptT",
      "description": {
        "fct-descr": "\u003cp\u003ePrompt can also be used to define monad transformers.\n\u003c/p\u003e\u003cp\u003eYou will notice the lack of a \u003ccode\u003eMonad m\u003c/code\u003e constraint; this is allowed\nbecause Prompt doesn't use the underlying monad at all; instead\nthe observation function (generally implemented via \u003ccode\u003e\u003ca\u003erunPromptT\u003c/a\u003e\u003c/code\u003e)\nwill have the constraint.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Prompt.html#PromptT",
        "fct-type": "data",
        "title": "PromptT"
      },
      "index": {
        "description": "Prompt can also be used to define monad transformers You will notice the lack of Monad constraint this is allowed because Prompt doesn use the underlying monad at all instead the observation function generally implemented via runPromptT will have the constraint",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "PromptT",
        "normalized": "",
        "package": "MonadPrompt",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#t:RecPrompt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRecPrompt\u003c/a\u003e\u003c/code\u003e is for prompts which are dependent on the prompt monad.\n\u003c/p\u003e\u003cp\u003eFor example, a \u003ccode\u003eMonadPlus\u003c/code\u003e prompt:\n\u003c/p\u003e\u003cpre\u003e\ndata PromptPlus m a where\n  PromptZero :: PromptPlus m a\n  PromptPlus :: m a -\u003e m a -\u003e PromptPlus m a\n\ninstance MonadPlus (RecPrompt PromptPlus) where\n  mzero = prompt PromptZero\n  mplus x y = prompt (PromptPlus x y)\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Prompt.html#RecPrompt",
        "fct-type": "data",
        "title": "RecPrompt"
      },
      "index": {
        "description": "RecPrompt is for prompts which are dependent on the prompt monad For example MonadPlus prompt data PromptPlus where PromptZero PromptPlus PromptPlus PromptPlus instance MonadPlus RecPrompt PromptPlus where mzero prompt PromptZero mplus prompt PromptPlus",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "RecPrompt",
        "normalized": "",
        "package": "MonadPrompt",
        "partial": "Rec Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#t:RecPromptT",
      "description": {
        "fct-descr": "\u003cp\u003eA recursive variant of the prompt monad transformer. \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Prompt.html#RecPromptT",
        "fct-type": "data",
        "title": "RecPromptT"
      },
      "index": {
        "description": "recursive variant of the prompt monad transformer",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "RecPromptT",
        "normalized": "",
        "package": "MonadPrompt",
        "partial": "Rec Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:Effect",
      "description": {
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "Effect (p a)",
        "fct-source": "src/Control-Monad-Prompt.html#Lift",
        "fct-type": "function",
        "title": "Effect"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "Effect",
        "normalized": "",
        "package": "MonadPrompt",
        "partial": "Effect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:Lift",
      "description": {
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "Lift (m a)",
        "fct-source": "src/Control-Monad-Prompt.html#Lift",
        "fct-type": "function",
        "title": "Lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "Lift",
        "normalized": "",
        "package": "MonadPrompt",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:liftP",
      "description": {
        "fct-descr": "\u003cp\u003eYou can also lift any Prompt computation into a PromptT (or more generally, any appropriate MonadPrompt instance). This is the kind of place where the advantage of being able to use multiple observation functions on Prompt really shows. \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "Prompt p r -\u003e m r",
        "fct-source": "src/Control-Monad-Prompt.html#liftP",
        "fct-type": "function",
        "title": "liftP"
      },
      "index": {
        "description": "You can also lift any Prompt computation into PromptT or more generally any appropriate MonadPrompt instance This is the kind of place where the advantage of being able to use multiple observation functions on Prompt really shows",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "liftP",
        "normalized": "Prompt a b-\u003ec b",
        "package": "MonadPrompt",
        "partial": "",
        "signature": "Prompt p r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:prompt",
      "description": {
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "p a -\u003e m a",
        "fct-source": "src/Control-Monad-Prompt.html#prompt",
        "fct-type": "method",
        "title": "prompt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "prompt",
        "normalized": "a b-\u003ec b",
        "package": "MonadPrompt",
        "partial": "",
        "signature": "p a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:runPrompt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunPrompt\u003c/a\u003e\u003c/code\u003e takes a way of converting prompts to an element in a pure\nfashion and calculates the result of the prompt \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "(forall a.  p a -\u003e a) -\u003e Prompt p r -\u003e r",
        "fct-source": "src/Control-Monad-Prompt.html#runPrompt",
        "fct-type": "function",
        "title": "runPrompt"
      },
      "index": {
        "description": "runPrompt takes way of converting prompts to an element in pure fashion and calculates the result of the prompt",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "runPrompt",
        "normalized": "(a b c d-\u003ed)-\u003ePrompt c e-\u003ee",
        "package": "MonadPrompt",
        "partial": "Prompt",
        "signature": "(forall a. p a-\u003ea)-\u003ePrompt p r-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:runPromptC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunPromptC\u003c/a\u003e\u003c/code\u003e is the observation function for prompts.  It takes\ntwo functions as arguments:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003eret\u003c/code\u003e will be called with the final result of the computation,\n   to convert it to the answer type.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eprm\u003c/code\u003e will be called if there are any effects; it is passed\n   a prompt and a continuation function.  prm can apply\n   the effect requested by the prompt and call the continuation.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIn some cases prm can return the answer type directly; it\nmay be useful to abort the remainder of the computation, or\nsave off the continuation to be called later.  There is a great\nexample of using this to implement a UI for peg solitaire in Bertram\nFelgenhauer's post to Haskell-Cafe at\n\u003ca\u003ehttp://www.haskell.org/pipermail/haskell-cafe/2008-January/038301.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "(r -\u003e b)-\u003e (forall a.  p a -\u003e (a -\u003e b) -\u003e b)-\u003e Prompt p r-\u003e b",
        "fct-type": "function",
        "title": "runPromptC"
      },
      "index": {
        "description": "runPromptC is the observation function for prompts It takes two functions as arguments ret will be called with the final result of the computation to convert it to the answer type prm will be called if there are any effects it is passed prompt and continuation function prm can apply the effect requested by the prompt and call the continuation In some cases prm can return the answer type directly it may be useful to abort the remainder of the computation or save off the continuation to be called later There is great example of using this to implement UI for peg solitaire in Bertram Felgenhauer post to Haskell-Cafe at http www.haskell.org pipermail haskell-cafe January html",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "runPromptC",
        "normalized": "(a-\u003eb)-\u003e(c d e f-\u003e(f-\u003eb)-\u003eb)-\u003ePrompt e a-\u003eb",
        "package": "MonadPrompt",
        "partial": "Prompt",
        "signature": "(r-\u003eb)-\u003e(forall a. p a-\u003e(a-\u003eb)-\u003eb)-\u003ePrompt p r-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:runPromptM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunPromptM\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003erunPrompt\u003c/a\u003e\u003c/code\u003e but allows the computation to happen in any monad. \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "(forall a.  p a -\u003e m a) -\u003e Prompt p r -\u003e m r",
        "fct-source": "src/Control-Monad-Prompt.html#runPromptM",
        "fct-type": "function",
        "title": "runPromptM"
      },
      "index": {
        "description": "runPromptM is similar to runPrompt but allows the computation to happen in any monad",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "runPromptM",
        "normalized": "(a b c d-\u003ee d)-\u003ePrompt c f-\u003ee f",
        "package": "MonadPrompt",
        "partial": "Prompt",
        "signature": "(forall a. p a-\u003em a)-\u003ePrompt p r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:runPromptT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunPromptT\u003c/a\u003e\u003c/code\u003e runs a prompt monad transformer. \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "(r -\u003e b)-\u003e (forall a.  p a -\u003e (a -\u003e b) -\u003e b)-\u003e (forall a.  m a -\u003e (a -\u003e b) -\u003e b)-\u003e PromptT p m r-\u003e b",
        "fct-type": "function",
        "title": "runPromptT"
      },
      "index": {
        "description": "runPromptT runs prompt monad transformer",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "runPromptT",
        "normalized": "(a-\u003eb)-\u003e(c d e f-\u003e(f-\u003eb)-\u003eb)-\u003e(c d g f-\u003e(f-\u003eb)-\u003eb)-\u003ePromptT e g a-\u003eb",
        "package": "MonadPrompt",
        "partial": "Prompt",
        "signature": "(r-\u003eb)-\u003e(forall a. p a-\u003e(a-\u003eb)-\u003eb)-\u003e(forall a. m a-\u003e(a-\u003eb)-\u003eb)-\u003ePromptT p m r-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:runRecPrompt",
      "description": {
        "fct-descr": "\u003cp\u003eRun a recursive prompt computation in a pure fashion, similar to \u003ccode\u003e\u003ca\u003erunPrompt\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "(forall a.  p (RecPrompt p) a -\u003e a) -\u003e RecPrompt p r -\u003e r",
        "fct-source": "src/Control-Monad-Prompt.html#runRecPrompt",
        "fct-type": "function",
        "title": "runRecPrompt"
      },
      "index": {
        "description": "Run recursive prompt computation in pure fashion similar to runPrompt",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "runRecPrompt",
        "normalized": "(a b c(RecPrompt c)d-\u003ed)-\u003eRecPrompt c e-\u003ee",
        "package": "MonadPrompt",
        "partial": "Rec Prompt",
        "signature": "(forall a. p(RecPrompt p)a-\u003ea)-\u003eRecPrompt p r-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:runRecPromptC",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a recursive prompt computation. This is similar to \u003ccode\u003e\u003ca\u003erunPromptC\u003c/a\u003e\u003c/code\u003e, but for recursive prompt types. \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "(r -\u003e b)-\u003e (forall a.  p (RecPrompt p) a -\u003e (a -\u003e b) -\u003e b)-\u003e RecPrompt p r-\u003e b",
        "fct-type": "function",
        "title": "runRecPromptC"
      },
      "index": {
        "description": "Runs recursive prompt computation This is similar to runPromptC but for recursive prompt types",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "runRecPromptC",
        "normalized": "(a-\u003eb)-\u003e(c d e(RecPrompt e)f-\u003e(f-\u003eb)-\u003eb)-\u003eRecPrompt e a-\u003eb",
        "package": "MonadPrompt",
        "partial": "Rec Prompt",
        "signature": "(r-\u003eb)-\u003e(forall a. p(RecPrompt p)a-\u003e(a-\u003eb)-\u003eb)-\u003eRecPrompt p r-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:runRecPromptM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a recursive prompt computation in an arbitrary monad, similar to \u003ccode\u003e\u003ca\u003erunPromptM\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "(forall a.  p (RecPrompt p) a -\u003e m a) -\u003e RecPrompt p r -\u003e m r",
        "fct-source": "src/Control-Monad-Prompt.html#runRecPromptM",
        "fct-type": "function",
        "title": "runRecPromptM"
      },
      "index": {
        "description": "Run recursive prompt computation in an arbitrary monad similar to runPromptM",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "runRecPromptM",
        "normalized": "(a b c(RecPrompt c)d-\u003ee d)-\u003eRecPrompt c f-\u003ee f",
        "package": "MonadPrompt",
        "partial": "Rec Prompt",
        "signature": "(forall a. p(RecPrompt p)a-\u003em a)-\u003eRecPrompt p r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:runRecPromptT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a recursive prompt monad transformer. \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "(r -\u003e b)-\u003e (forall a.  p (RecPromptT p m) a -\u003e (a -\u003e b) -\u003e b)-\u003e (forall a.  m a -\u003e (a -\u003e b) -\u003e b)-\u003e RecPromptT p m r-\u003e b",
        "fct-type": "function",
        "title": "runRecPromptT"
      },
      "index": {
        "description": "Run recursive prompt monad transformer",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "runRecPromptT",
        "normalized": "(a-\u003eb)-\u003e(c d e(RecPromptT e f)g-\u003e(g-\u003eb)-\u003eb)-\u003e(c d f g-\u003e(g-\u003eb)-\u003eb)-\u003eRecPromptT e f a-\u003eb",
        "package": "MonadPrompt",
        "partial": "Rec Prompt",
        "signature": "(r-\u003eb)-\u003e(forall a. p(RecPromptT p m)a-\u003e(a-\u003eb)-\u003eb)-\u003e(forall a. m a-\u003e(a-\u003eb)-\u003eb)-\u003eRecPromptT p m r-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:unPromptT",
      "description": {
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "PromptT p m a -\u003e Prompt (Lift p m) a",
        "fct-source": "src/Control-Monad-Prompt.html#unPromptT",
        "fct-type": "function",
        "title": "unPromptT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "unPromptT",
        "normalized": "PromptT a b c-\u003ePrompt(Lift a b)c",
        "package": "MonadPrompt",
        "partial": "Prompt",
        "signature": "PromptT p m a-\u003ePrompt(Lift p m)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:unRecPrompt",
      "description": {
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "RecPrompt p r -\u003e Prompt (p (RecPrompt p)) r",
        "fct-source": "src/Control-Monad-Prompt.html#unRecPrompt",
        "fct-type": "function",
        "title": "unRecPrompt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "unRecPrompt",
        "normalized": "RecPrompt a b-\u003ePrompt(a(RecPrompt a))b",
        "package": "MonadPrompt",
        "partial": "Rec Prompt",
        "signature": "RecPrompt p r-\u003ePrompt(p(RecPrompt p))r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadPrompt/docs/Control-Monad-Prompt.html#v:unRecPromptT",
      "description": {
        "fct-module": "Control.Monad.Prompt",
        "fct-package": "MonadPrompt",
        "fct-signature": "RecPromptT p m a -\u003e Prompt (Lift (p (RecPromptT p m)) m) a",
        "fct-source": "src/Control-Monad-Prompt.html#unRecPromptT",
        "fct-type": "function",
        "title": "unRecPromptT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Prompt",
        "module": "Control.Monad.Prompt",
        "name": "unRecPromptT",
        "normalized": "RecPromptT a b c-\u003ePrompt(Lift(a(RecPromptT a b))b)c",
        "package": "MonadPrompt",
        "partial": "Rec Prompt",
        "signature": "RecPromptT p m a-\u003ePrompt(Lift(p(RecPromptT p m))m)a"
      }
    }
  }
]