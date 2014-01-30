[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA backtracking, logic programming monad.\n\u003c/p\u003e\u003cp\u003eAdapted from the paper\n    /Backtracking, Interleaving, and Terminating\n        Monad Transformers/, by\n    Oleg Kiselyov, Chung-chieh Shan, Daniel P. Friedman, Amr Sabry\n    (\u003ca\u003ehttp://www.cs.rutgers.edu/~ccshan/logicprog/LogicT-icfp2005.pdf\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Logic.Class",
        "fct-package": "logict",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Logic-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "backtracking logic programming monad Adapted from the paper Backtracking Interleaving and Terminating Monad Transformers by Oleg Kiselyov Chung-chieh Shan Daniel Friedman Amr Sabry http www.cs.rutgers.edu ccshan logicprog LogicT-icfp2005.pdf",
        "hierarchy": "Control Monad Logic Class",
        "module": "Control.Monad.Logic.Class",
        "name": "Class",
        "normalized": "",
        "package": "logict",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#t:MonadLogic",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal implementation: msplit\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic.Class",
        "fct-package": "logict",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Logic-Class.html#MonadLogic",
        "fct-type": "class",
        "title": "MonadLogic"
      },
      "index": {
        "description": "Minimal implementation msplit",
        "hierarchy": "Control Monad Logic Class",
        "module": "Control.Monad.Logic.Class",
        "name": "MonadLogic",
        "normalized": "",
        "package": "logict",
        "partial": "Monad Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:-62--62--45-",
      "description": {
        "fct-descr": "\u003cp\u003eFair conjunction. Similarly to the previous function, consider\n   the distributivity law for MonadPlus:\n\u003c/p\u003e\u003cpre\u003e (mplus a b) \u003e\u003e= k = (a \u003e\u003e= k) `mplus` (b \u003e\u003e= k)\n\u003c/pre\u003e\u003cp\u003eIf 'a \u003e\u003e= k' can backtrack arbitrarily many tmes, (b \u003e\u003e= k) may never\n   be considered. (\u003e\u003e-) takes similar care to consider both branches of\n   a disjunctive computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic.Class",
        "fct-package": "logict",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Monad-Logic-Class.html#%3E%3E-",
        "fct-type": "method",
        "title": "(\u003e\u003e-)"
      },
      "index": {
        "description": "Fair conjunction Similarly to the previous function consider the distributivity law for MonadPlus mplus mplus If can backtrack arbitrarily many tmes may never be considered takes similar care to consider both branches of disjunctive computation",
        "hierarchy": "Control Monad Logic Class",
        "module": "Control.Monad.Logic.Class",
        "name": "(\u003e\u003e-) \u003e\u003e-",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "logict",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:ifte",
      "description": {
        "fct-descr": "\u003cp\u003eLogical conditional. The equivalent of Prolog's soft-cut. If its\n   first argument succeeds at all, then the results will be fed into\n   the success branch. Otherwise, the failure branch is taken.\n   satisfies the following laws:\n\u003c/p\u003e\u003cpre\u003e ifte (return a) th el           == th a\n ifte mzero th el                == el\n ifte (return a `mplus` m) th el == th a `mplus` (m \u003e\u003e= th)\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Logic.Class",
        "fct-package": "logict",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m b -\u003e m b",
        "fct-source": "src/Control-Monad-Logic-Class.html#ifte",
        "fct-type": "method",
        "title": "ifte"
      },
      "index": {
        "description": "Logical conditional The equivalent of Prolog soft-cut If its first argument succeeds at all then the results will be fed into the success branch Otherwise the failure branch is taken satisfies the following laws ifte return th el th ifte mzero th el el ifte return mplus th el th mplus th",
        "hierarchy": "Control Monad Logic Class",
        "module": "Control.Monad.Logic.Class",
        "name": "ifte",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c-\u003ea c",
        "package": "logict",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:interleave",
      "description": {
        "fct-descr": "\u003cp\u003eFair disjunction. It is possible for a logical computation\n   to have an infinite number of potential results, for instance:\n\u003c/p\u003e\u003cpre\u003e odds = return 1 `mplus` liftM (2+) odds\n\u003c/pre\u003e\u003cp\u003eSuch computations can cause problems in some circumstances. Consider:\n\u003c/p\u003e\u003cpre\u003e do x \u003c- odds `mplus` return 2\n    if even x then return x else mzero\n\u003c/pre\u003e\u003cp\u003eSuch a computation may never consider the 'return 2', and will\n   therefore never terminate. By contrast, interleave ensures fair\n   consideration of both branches of a disjunction\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic.Class",
        "fct-package": "logict",
        "fct-signature": "m a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Logic-Class.html#interleave",
        "fct-type": "method",
        "title": "interleave"
      },
      "index": {
        "description": "Fair disjunction It is possible for logical computation to have an infinite number of potential results for instance odds return mplus liftM odds Such computations can cause problems in some circumstances Consider do odds mplus return if even then return else mzero Such computation may never consider the return and will therefore never terminate By contrast interleave ensures fair consideration of both branches of disjunction",
        "hierarchy": "Control Monad Logic Class",
        "module": "Control.Monad.Logic.Class",
        "name": "interleave",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "logict",
        "partial": "",
        "signature": "m a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:lnot",
      "description": {
        "fct-descr": "\u003cp\u003eInverts a logic computation. If \u003ccode\u003em\u003c/code\u003e succeeds with at least one value,\n \u003ccode\u003elnot m\u003c/code\u003e fails. If \u003ccode\u003em\u003c/code\u003e fails, then \u003ccode\u003elnot m\u003c/code\u003e succeeds the value \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic.Class",
        "fct-package": "logict",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Control-Monad-Logic-Class.html#lnot",
        "fct-type": "function",
        "title": "lnot"
      },
      "index": {
        "description": "Inverts logic computation If succeeds with at least one value lnot fails If fails then lnot succeeds the value",
        "hierarchy": "Control Monad Logic Class",
        "module": "Control.Monad.Logic.Class",
        "name": "lnot",
        "normalized": "a b-\u003ea()",
        "package": "logict",
        "partial": "",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:msplit",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to split the computation, giving access to the first\n   result. Satisfies the following laws:\n\u003c/p\u003e\u003cpre\u003e msplit mzero                == return Nothing\n msplit (return a `mplus` m) == return (Just (a, m))\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Logic.Class",
        "fct-package": "logict",
        "fct-signature": "m a -\u003e m (Maybe (a, m a))",
        "fct-source": "src/Control-Monad-Logic-Class.html#msplit",
        "fct-type": "method",
        "title": "msplit"
      },
      "index": {
        "description": "Attempts to split the computation giving access to the first result Satisfies the following laws msplit mzero return Nothing msplit return mplus return Just",
        "hierarchy": "Control Monad Logic Class",
        "module": "Control.Monad.Logic.Class",
        "name": "msplit",
        "normalized": "a b-\u003ea(Maybe(b,a b))",
        "package": "logict",
        "partial": "",
        "signature": "m a-\u003em(Maybe(a,m a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:once",
      "description": {
        "fct-descr": "\u003cp\u003ePruning. Selects one result out of many. Useful for when multiple\n   results of a computation will be equivalent, or should be treated as\n   such.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic.Class",
        "fct-package": "logict",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Monad-Logic-Class.html#once",
        "fct-type": "method",
        "title": "once"
      },
      "index": {
        "description": "Pruning Selects one result out of many Useful for when multiple results of computation will be equivalent or should be treated as such",
        "hierarchy": "Control Monad Logic Class",
        "module": "Control.Monad.Logic.Class",
        "name": "once",
        "normalized": "a b-\u003ea b",
        "package": "logict",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:reflect",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of msplit. Satisfies the following law:\n\u003c/p\u003e\u003cpre\u003e msplit m \u003e\u003e= reflect == m\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Logic.Class",
        "fct-package": "logict",
        "fct-signature": "Maybe (a, m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Logic-Class.html#reflect",
        "fct-type": "function",
        "title": "reflect"
      },
      "index": {
        "description": "The inverse of msplit Satisfies the following law msplit reflect",
        "hierarchy": "Control Monad Logic Class",
        "module": "Control.Monad.Logic.Class",
        "name": "reflect",
        "normalized": "Maybe(a,b a)-\u003eb a",
        "package": "logict",
        "partial": "",
        "signature": "Maybe(a,m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA backtracking, logic programming monad.\n\u003c/p\u003e\u003cp\u003eAdapted from the paper\n    /Backtracking, Interleaving, and Terminating\n        Monad Transformers/, by\n    Oleg Kiselyov, Chung-chieh Shan, Daniel P. Friedman, Amr Sabry\n    (\u003ca\u003ehttp://www.cs.rutgers.edu/~ccshan/logicprog/LogicT-icfp2005.pdf\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Logic.html",
        "fct-type": "module",
        "title": "Logic"
      },
      "index": {
        "description": "backtracking logic programming monad Adapted from the paper Backtracking Interleaving and Terminating Monad Transformers by Oleg Kiselyov Chung-chieh Shan Daniel Friedman Amr Sabry http www.cs.rutgers.edu ccshan logicprog LogicT-icfp2005.pdf",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "Logic",
        "normalized": "",
        "package": "logict",
        "partial": "Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#t:Logic",
      "description": {
        "fct-descr": "\u003cp\u003eThe basic Logic monad, for performing backtracking computations\n returning values of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Logic.html#Logic",
        "fct-type": "type",
        "title": "Logic"
      },
      "index": {
        "description": "The basic Logic monad for performing backtracking computations returning values of type",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "Logic",
        "normalized": "",
        "package": "logict",
        "partial": "Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#t:LogicT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer for performing backtracking computations\n layered over another monad \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Logic.html#LogicT",
        "fct-type": "newtype",
        "title": "LogicT"
      },
      "index": {
        "description": "monad transformer for performing backtracking computations layered over another monad",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "LogicT",
        "normalized": "",
        "package": "logict",
        "partial": "Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:LogicT",
      "description": {
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "LogicT",
        "fct-source": "src/Control-Monad-Logic.html#LogicT",
        "fct-type": "function",
        "title": "LogicT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "LogicT",
        "normalized": "",
        "package": "logict",
        "partial": "Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:logic",
      "description": {
        "fct-descr": "\u003cp\u003eA smart constructor for Logic computations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "(forall r.  (a -\u003e r -\u003e r) -\u003e r -\u003e r) -\u003e Logic a",
        "fct-source": "src/Control-Monad-Logic.html#logic",
        "fct-type": "function",
        "title": "logic"
      },
      "index": {
        "description": "smart constructor for Logic computations",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "logic",
        "normalized": "(a b(c-\u003ed-\u003ed)-\u003ed-\u003ed)-\u003eLogic c",
        "package": "logict",
        "partial": "",
        "signature": "(forall r.(a-\u003er-\u003er)-\u003er-\u003er)-\u003eLogic a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observe",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the first result from a Logic computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "Logic a -\u003e a",
        "fct-source": "src/Control-Monad-Logic.html#observe",
        "fct-type": "function",
        "title": "observe"
      },
      "index": {
        "description": "Extracts the first result from Logic computation",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "observe",
        "normalized": "Logic a-\u003ea",
        "package": "logict",
        "partial": "",
        "signature": "Logic a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeAll",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts all results from a Logic computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "Logic a -\u003e [a]",
        "fct-source": "src/Control-Monad-Logic.html#observeAll",
        "fct-type": "function",
        "title": "observeAll"
      },
      "index": {
        "description": "Extracts all results from Logic computation",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "observeAll",
        "normalized": "Logic a-\u003e[a]",
        "package": "logict",
        "partial": "All",
        "signature": "Logic a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeAllT",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts all results from a LogicT computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "LogicT m a -\u003e m [a]",
        "fct-source": "src/Control-Monad-Logic.html#observeAllT",
        "fct-type": "function",
        "title": "observeAllT"
      },
      "index": {
        "description": "Extracts all results from LogicT computation",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "observeAllT",
        "normalized": "LogicT a b-\u003ea[b]",
        "package": "logict",
        "partial": "All",
        "signature": "LogicT m a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeMany",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts up to a given number of results from a Logic computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "Int -\u003e Logic a -\u003e [a]",
        "fct-source": "src/Control-Monad-Logic.html#observeMany",
        "fct-type": "function",
        "title": "observeMany"
      },
      "index": {
        "description": "Extracts up to given number of results from Logic computation",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "observeMany",
        "normalized": "Int-\u003eLogic a-\u003e[a]",
        "package": "logict",
        "partial": "Many",
        "signature": "Int-\u003eLogic a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeManyT",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts up to a given number of results from a LogicT computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "Int -\u003e LogicT m a -\u003e m [a]",
        "fct-source": "src/Control-Monad-Logic.html#observeManyT",
        "fct-type": "function",
        "title": "observeManyT"
      },
      "index": {
        "description": "Extracts up to given number of results from LogicT computation",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "observeManyT",
        "normalized": "Int-\u003eLogicT a b-\u003ea[b]",
        "package": "logict",
        "partial": "Many",
        "signature": "Int-\u003eLogicT m a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeT",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the first result from a LogicT computation,\n failing otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "LogicT m a -\u003e m a",
        "fct-source": "src/Control-Monad-Logic.html#observeT",
        "fct-type": "function",
        "title": "observeT"
      },
      "index": {
        "description": "Extracts the first result from LogicT computation failing otherwise",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "observeT",
        "normalized": "LogicT a b-\u003ea b",
        "package": "logict",
        "partial": "",
        "signature": "LogicT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:runLogic",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a Logic computation with the specified initial success and\n failure continuations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "Logic a -\u003e (a -\u003e r -\u003e r) -\u003e r -\u003e r",
        "fct-source": "src/Control-Monad-Logic.html#runLogic",
        "fct-type": "function",
        "title": "runLogic"
      },
      "index": {
        "description": "Runs Logic computation with the specified initial success and failure continuations",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "runLogic",
        "normalized": "Logic a-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eb",
        "package": "logict",
        "partial": "Logic",
        "signature": "Logic a-\u003e(a-\u003er-\u003er)-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:runLogicT",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a LogicT computation with the specified initial success and\n failure continuations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "LogicT m a -\u003e (a -\u003e m r -\u003e m r) -\u003e m r -\u003e m r",
        "fct-source": "src/Control-Monad-Logic.html#runLogicT",
        "fct-type": "function",
        "title": "runLogicT"
      },
      "index": {
        "description": "Runs LogicT computation with the specified initial success and failure continuations",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "runLogicT",
        "normalized": "LogicT a b-\u003e(b-\u003ea c-\u003ea c)-\u003ea c-\u003ea c",
        "package": "logict",
        "partial": "Logic",
        "signature": "LogicT m a-\u003e(a-\u003em r-\u003em r)-\u003em r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:unLogicT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Logic",
        "fct-package": "logict",
        "fct-signature": "forall r.  (a -\u003e m r -\u003e m r) -\u003e m r -\u003e m r",
        "fct-source": "src/Control-Monad-Logic.html#LogicT",
        "fct-type": "function",
        "title": "unLogicT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logic",
        "module": "Control.Monad.Logic",
        "name": "unLogicT",
        "normalized": "a b(c-\u003ed e-\u003ed e)-\u003ed e-\u003ed e",
        "package": "logict",
        "partial": "Logic",
        "signature": "forall r.(a-\u003em r-\u003em r)-\u003em r-\u003em r"
      }
    }
  }
]