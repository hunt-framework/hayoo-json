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
        "word": "logict"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA backtracking, logic programming monad.\n\u003c/p\u003e\u003cp\u003eAdapted from the paper\n    /Backtracking, Interleaving, and Terminating\n        Monad Transformers/, by\n    Oleg Kiselyov, Chung-chieh Shan, Daniel P. Friedman, Amr Sabry\n    (\u003ca\u003ehttp://www.cs.rutgers.edu/~ccshan/logicprog/LogicT-icfp2005.pdf\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Logic.Class",
          "name": "Class",
          "package": "logict",
          "source": "src/Control-Monad-Logic-Class.html",
          "type": "module"
        },
        "index": {
          "description": "backtracking logic programming monad Adapted from the paper Backtracking Interleaving and Terminating Monad Transformers by Oleg Kiselyov Chung-chieh Shan Daniel Friedman Amr Sabry http www.cs.rutgers.edu ccshan logicprog LogicT-icfp2005.pdf",
          "hierarchy": "Control Monad Logic Class",
          "module": "Control.Monad.Logic.Class",
          "name": "Class",
          "package": "logict",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal implementation: msplit\n\u003c/p\u003e",
          "module": "Control.Monad.Logic.Class",
          "name": "MonadLogic",
          "package": "logict",
          "source": "src/Control-Monad-Logic-Class.html#MonadLogic",
          "type": "class"
        },
        "index": {
          "description": "Minimal implementation msplit",
          "hierarchy": "Control Monad Logic Class",
          "module": "Control.Monad.Logic.Class",
          "name": "MonadLogic",
          "package": "logict",
          "partial": "Monad Logic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#t:MonadLogic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFair conjunction. Similarly to the previous function, consider\n   the distributivity law for MonadPlus:\n\u003c/p\u003e\u003cpre\u003e (mplus a b) \u003e\u003e= k = (a \u003e\u003e= k) `mplus` (b \u003e\u003e= k)\n\u003c/pre\u003e\u003cp\u003eIf 'a \u003e\u003e= k' can backtrack arbitrarily many tmes, (b \u003e\u003e= k) may never\n   be considered. (\u003e\u003e-) takes similar care to consider both branches of\n   a disjunctive computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic.Class",
          "name": "(\u003e\u003e-)",
          "package": "logict",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-Logic-Class.html#%3E%3E-",
          "type": "method"
        },
        "index": {
          "description": "Fair conjunction Similarly to the previous function consider the distributivity law for MonadPlus mplus mplus If can backtrack arbitrarily many tmes may never be considered takes similar care to consider both branches of disjunctive computation",
          "hierarchy": "Control Monad Logic Class",
          "module": "Control.Monad.Logic.Class",
          "name": "(\u003e\u003e-) \u003e\u003e-",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "logict",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:-62--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical conditional. The equivalent of Prolog's soft-cut. If its\n   first argument succeeds at all, then the results will be fed into\n   the success branch. Otherwise, the failure branch is taken.\n   satisfies the following laws:\n\u003c/p\u003e\u003cpre\u003e ifte (return a) th el           == th a\n ifte mzero th el                == el\n ifte (return a `mplus` m) th el == th a `mplus` (m \u003e\u003e= th)\n\u003c/pre\u003e",
          "module": "Control.Monad.Logic.Class",
          "name": "ifte",
          "package": "logict",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-Logic-Class.html#ifte",
          "type": "method"
        },
        "index": {
          "description": "Logical conditional The equivalent of Prolog soft-cut If its first argument succeeds at all then the results will be fed into the success branch Otherwise the failure branch is taken satisfies the following laws ifte return th el th ifte mzero th el el ifte return mplus th el th mplus th",
          "hierarchy": "Control Monad Logic Class",
          "module": "Control.Monad.Logic.Class",
          "name": "ifte",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c-\u003ea c",
          "package": "logict",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:ifte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFair disjunction. It is possible for a logical computation\n   to have an infinite number of potential results, for instance:\n\u003c/p\u003e\u003cpre\u003e odds = return 1 `mplus` liftM (2+) odds\n\u003c/pre\u003e\u003cp\u003eSuch computations can cause problems in some circumstances. Consider:\n\u003c/p\u003e\u003cpre\u003e do x \u003c- odds `mplus` return 2\n    if even x then return x else mzero\n\u003c/pre\u003e\u003cp\u003eSuch a computation may never consider the 'return 2', and will\n   therefore never terminate. By contrast, interleave ensures fair\n   consideration of both branches of a disjunction\n\u003c/p\u003e",
          "module": "Control.Monad.Logic.Class",
          "name": "interleave",
          "package": "logict",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Logic-Class.html#interleave",
          "type": "method"
        },
        "index": {
          "description": "Fair disjunction It is possible for logical computation to have an infinite number of potential results for instance odds return mplus liftM odds Such computations can cause problems in some circumstances Consider do odds mplus return if even then return else mzero Such computation may never consider the return and will therefore never terminate By contrast interleave ensures fair consideration of both branches of disjunction",
          "hierarchy": "Control Monad Logic Class",
          "module": "Control.Monad.Logic.Class",
          "name": "interleave",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "logict",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverts a logic computation. If \u003ccode\u003em\u003c/code\u003e succeeds with at least one value,\n \u003ccode\u003elnot m\u003c/code\u003e fails. If \u003ccode\u003em\u003c/code\u003e fails, then \u003ccode\u003elnot m\u003c/code\u003e succeeds the value \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic.Class",
          "name": "lnot",
          "package": "logict",
          "signature": "m a -\u003e m ()",
          "source": "src/Control-Monad-Logic-Class.html#lnot",
          "type": "function"
        },
        "index": {
          "description": "Inverts logic computation If succeeds with at least one value lnot fails If fails then lnot succeeds the value",
          "hierarchy": "Control Monad Logic Class",
          "module": "Control.Monad.Logic.Class",
          "name": "lnot",
          "normalized": "a b-\u003ea()",
          "package": "logict",
          "signature": "m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:lnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to split the computation, giving access to the first\n   result. Satisfies the following laws:\n\u003c/p\u003e\u003cpre\u003e msplit mzero                == return Nothing\n msplit (return a `mplus` m) == return (Just (a, m))\n\u003c/pre\u003e",
          "module": "Control.Monad.Logic.Class",
          "name": "msplit",
          "package": "logict",
          "signature": "m a -\u003e m (Maybe (a, m a))",
          "source": "src/Control-Monad-Logic-Class.html#msplit",
          "type": "method"
        },
        "index": {
          "description": "Attempts to split the computation giving access to the first result Satisfies the following laws msplit mzero return Nothing msplit return mplus return Just",
          "hierarchy": "Control Monad Logic Class",
          "module": "Control.Monad.Logic.Class",
          "name": "msplit",
          "normalized": "a b-\u003ea(Maybe(b,a b))",
          "package": "logict",
          "signature": "m a-\u003em(Maybe(a,m a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:msplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePruning. Selects one result out of many. Useful for when multiple\n   results of a computation will be equivalent, or should be treated as\n   such.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic.Class",
          "name": "once",
          "package": "logict",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Logic-Class.html#once",
          "type": "method"
        },
        "index": {
          "description": "Pruning Selects one result out of many Useful for when multiple results of computation will be equivalent or should be treated as such",
          "hierarchy": "Control Monad Logic Class",
          "module": "Control.Monad.Logic.Class",
          "name": "once",
          "normalized": "a b-\u003ea b",
          "package": "logict",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of msplit. Satisfies the following law:\n\u003c/p\u003e\u003cpre\u003e msplit m \u003e\u003e= reflect == m\n\u003c/pre\u003e",
          "module": "Control.Monad.Logic.Class",
          "name": "reflect",
          "package": "logict",
          "signature": "Maybe (a, m a) -\u003e m a",
          "source": "src/Control-Monad-Logic-Class.html#reflect",
          "type": "function"
        },
        "index": {
          "description": "The inverse of msplit Satisfies the following law msplit reflect",
          "hierarchy": "Control Monad Logic Class",
          "module": "Control.Monad.Logic.Class",
          "name": "reflect",
          "normalized": "Maybe(a,b a)-\u003eb a",
          "package": "logict",
          "signature": "Maybe(a,m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic-Class.html#v:reflect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA backtracking, logic programming monad.\n\u003c/p\u003e\u003cp\u003eAdapted from the paper\n    /Backtracking, Interleaving, and Terminating\n        Monad Transformers/, by\n    Oleg Kiselyov, Chung-chieh Shan, Daniel P. Friedman, Amr Sabry\n    (\u003ca\u003ehttp://www.cs.rutgers.edu/~ccshan/logicprog/LogicT-icfp2005.pdf\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Logic",
          "name": "Logic",
          "package": "logict",
          "source": "src/Control-Monad-Logic.html",
          "type": "module"
        },
        "index": {
          "description": "backtracking logic programming monad Adapted from the paper Backtracking Interleaving and Terminating Monad Transformers by Oleg Kiselyov Chung-chieh Shan Daniel Friedman Amr Sabry http www.cs.rutgers.edu ccshan logicprog LogicT-icfp2005.pdf",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "Logic",
          "package": "logict",
          "partial": "Logic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic Logic monad, for performing backtracking computations\n returning values of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "Logic",
          "package": "logict",
          "source": "src/Control-Monad-Logic.html#Logic",
          "type": "type"
        },
        "index": {
          "description": "The basic Logic monad for performing backtracking computations returning values of type",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "Logic",
          "package": "logict",
          "partial": "Logic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#t:Logic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer for performing backtracking computations\n layered over another monad \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "LogicT",
          "package": "logict",
          "source": "src/Control-Monad-Logic.html#LogicT",
          "type": "newtype"
        },
        "index": {
          "description": "monad transformer for performing backtracking computations layered over another monad",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "LogicT",
          "package": "logict",
          "partial": "Logic",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#t:LogicT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logic",
          "name": "LogicT",
          "package": "logict",
          "signature": "LogicT",
          "source": "src/Control-Monad-Logic.html#LogicT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "LogicT",
          "package": "logict",
          "partial": "Logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:LogicT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA smart constructor for Logic computations.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "logic",
          "package": "logict",
          "signature": "(forall r.  (a -\u003e r -\u003e r) -\u003e r -\u003e r) -\u003e Logic a",
          "source": "src/Control-Monad-Logic.html#logic",
          "type": "function"
        },
        "index": {
          "description": "smart constructor for Logic computations",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "logic",
          "normalized": "(a b(c-\u003ed-\u003ed)-\u003ed-\u003ed)-\u003eLogic c",
          "package": "logict",
          "signature": "(forall r.(a-\u003er-\u003er)-\u003er-\u003er)-\u003eLogic a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:logic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the first result from a Logic computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "observe",
          "package": "logict",
          "signature": "Logic a -\u003e a",
          "source": "src/Control-Monad-Logic.html#observe",
          "type": "function"
        },
        "index": {
          "description": "Extracts the first result from Logic computation",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "observe",
          "normalized": "Logic a-\u003ea",
          "package": "logict",
          "signature": "Logic a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts all results from a Logic computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "observeAll",
          "package": "logict",
          "signature": "Logic a -\u003e [a]",
          "source": "src/Control-Monad-Logic.html#observeAll",
          "type": "function"
        },
        "index": {
          "description": "Extracts all results from Logic computation",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "observeAll",
          "normalized": "Logic a-\u003e[a]",
          "package": "logict",
          "partial": "All",
          "signature": "Logic a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts all results from a LogicT computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "observeAllT",
          "package": "logict",
          "signature": "LogicT m a -\u003e m [a]",
          "source": "src/Control-Monad-Logic.html#observeAllT",
          "type": "function"
        },
        "index": {
          "description": "Extracts all results from LogicT computation",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "observeAllT",
          "normalized": "LogicT a b-\u003ea[b]",
          "package": "logict",
          "partial": "All",
          "signature": "LogicT m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeAllT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts up to a given number of results from a Logic computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "observeMany",
          "package": "logict",
          "signature": "Int -\u003e Logic a -\u003e [a]",
          "source": "src/Control-Monad-Logic.html#observeMany",
          "type": "function"
        },
        "index": {
          "description": "Extracts up to given number of results from Logic computation",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "observeMany",
          "normalized": "Int-\u003eLogic a-\u003e[a]",
          "package": "logict",
          "partial": "Many",
          "signature": "Int-\u003eLogic a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts up to a given number of results from a LogicT computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "observeManyT",
          "package": "logict",
          "signature": "Int -\u003e LogicT m a -\u003e m [a]",
          "source": "src/Control-Monad-Logic.html#observeManyT",
          "type": "function"
        },
        "index": {
          "description": "Extracts up to given number of results from LogicT computation",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "observeManyT",
          "normalized": "Int-\u003eLogicT a b-\u003ea[b]",
          "package": "logict",
          "partial": "Many",
          "signature": "Int-\u003eLogicT m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeManyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the first result from a LogicT computation,\n failing otherwise.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "observeT",
          "package": "logict",
          "signature": "LogicT m a -\u003e m a",
          "source": "src/Control-Monad-Logic.html#observeT",
          "type": "function"
        },
        "index": {
          "description": "Extracts the first result from LogicT computation failing otherwise",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "observeT",
          "normalized": "LogicT a b-\u003ea b",
          "package": "logict",
          "signature": "LogicT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:observeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a Logic computation with the specified initial success and\n failure continuations.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "runLogic",
          "package": "logict",
          "signature": "Logic a -\u003e (a -\u003e r -\u003e r) -\u003e r -\u003e r",
          "source": "src/Control-Monad-Logic.html#runLogic",
          "type": "function"
        },
        "index": {
          "description": "Runs Logic computation with the specified initial success and failure continuations",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "runLogic",
          "normalized": "Logic a-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eb",
          "package": "logict",
          "partial": "Logic",
          "signature": "Logic a-\u003e(a-\u003er-\u003er)-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:runLogic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a LogicT computation with the specified initial success and\n failure continuations.\n\u003c/p\u003e",
          "module": "Control.Monad.Logic",
          "name": "runLogicT",
          "package": "logict",
          "signature": "LogicT m a -\u003e (a -\u003e m r -\u003e m r) -\u003e m r -\u003e m r",
          "source": "src/Control-Monad-Logic.html#runLogicT",
          "type": "function"
        },
        "index": {
          "description": "Runs LogicT computation with the specified initial success and failure continuations",
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "runLogicT",
          "normalized": "LogicT a b-\u003e(b-\u003ea c-\u003ea c)-\u003ea c-\u003ea c",
          "package": "logict",
          "partial": "Logic",
          "signature": "LogicT m a-\u003e(a-\u003em r-\u003em r)-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:runLogicT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logic",
          "name": "unLogicT",
          "package": "logict",
          "signature": "forall r.  (a -\u003e m r -\u003e m r) -\u003e m r -\u003e m r",
          "source": "src/Control-Monad-Logic.html#LogicT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logic",
          "module": "Control.Monad.Logic",
          "name": "unLogicT",
          "normalized": "a b(c-\u003ed e-\u003ed e)-\u003ed e-\u003ed e",
          "package": "logict",
          "partial": "Logic",
          "signature": "forall r.(a-\u003em r-\u003em r)-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logict/docs/Control-Monad-Logic.html#v:unLogicT"
      }
    }
  ]
]