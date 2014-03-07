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
        "word": "monad-loops"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of loop operators for use in monads (mostly in stateful ones).\n\u003c/p\u003e\u003cp\u003eThere is a general naming pattern for many of these:\n Functions with names ending in _ discard the results of the loop body\n as in the standard Prelude \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e\u003cp\u003eFunctions with names ending in ' collect their results into \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n containers.  Note that any short-circuit effect that those types' \n \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instances may provide in a lazy context (such as the instance\n for \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e) will _not_ cause execution to short-circuit in these loops.\n\u003c/p\u003e\u003cp\u003eFunctions with names ending in neither of those will generally return\n just plain old lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Loops",
          "name": "Loops",
          "package": "monad-loops",
          "source": "src/Control-Monad-Loops.html",
          "type": "module"
        },
        "index": {
          "description": "collection of loop operators for use in monads mostly in stateful ones There is general naming pattern for many of these Functions with names ending in discard the results of the loop body as in the standard Prelude mapM functions Functions with names ending in collect their results into MonadPlus containers Note that any short-circuit effect that those types MonadPlus instances may provide in lazy context such as the instance for Maybe will not cause execution to short-circuit in these loops Functions with names ending in neither of those will generally return just plain old lists",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "Loops",
          "package": "monad-loops",
          "partial": "Loops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort-circuit \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e with a \"monadic predicate\".\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "allM",
          "package": "monad-loops",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m Bool",
          "source": "src/Control-Monad-Loops.html#allM",
          "type": "function"
        },
        "index": {
          "description": "short-circuit all with monadic predicate",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "allM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb Bool",
          "package": "monad-loops",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:allM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort-circuit \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e with a list of \"monadic predicates\".  Tests the value\n presented against each predicate in turn until one fails, then returns False.\n if none fail, returns True.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "allPM",
          "package": "monad-loops",
          "signature": "[a -\u003e m Bool] -\u003e a -\u003e m Bool",
          "source": "src/Control-Monad-Loops.html#allPM",
          "type": "function"
        },
        "index": {
          "description": "short-circuit all with list of monadic predicates Tests the value presented against each predicate in turn until one fails then returns False if none fail returns True",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "allPM",
          "normalized": "[a-\u003eb Bool]-\u003ea-\u003eb Bool",
          "package": "monad-loops",
          "partial": "PM",
          "signature": "[a-\u003em Bool]-\u003ea-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:allPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort-circuit \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e for values of type Monad m =\u003e m Bool\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "andM",
          "package": "monad-loops",
          "signature": "[m Bool] -\u003e m Bool",
          "source": "src/Control-Monad-Loops.html#andM",
          "type": "function"
        },
        "index": {
          "description": "short-circuit and for values of type Monad Bool",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "andM",
          "normalized": "[a Bool]-\u003ea Bool",
          "package": "monad-loops",
          "signature": "[m Bool]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:andM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort-circuit \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e with a \"monadic predicate\".\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "anyM",
          "package": "monad-loops",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m Bool",
          "source": "src/Control-Monad-Loops.html#anyM",
          "type": "function"
        },
        "index": {
          "description": "short-circuit any with monadic predicate",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "anyM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb Bool",
          "package": "monad-loops",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:anyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort-circuit \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e with a list of \"monadic predicates\".  Tests the\n value presented against each predicate in turn until one passes, then\n returns True without any further processing.  If none passes, returns False.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "anyPM",
          "package": "monad-loops",
          "signature": "[a -\u003e m Bool] -\u003e a -\u003e m Bool",
          "source": "src/Control-Monad-Loops.html#anyPM",
          "type": "function"
        },
        "index": {
          "description": "short-circuit any with list of monadic predicates Tests the value presented against each predicate in turn until one passes then returns True without any further processing If none passes returns False",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "anyPM",
          "normalized": "[a-\u003eb Bool]-\u003ea-\u003eb Bool",
          "package": "monad-loops",
          "partial": "PM",
          "signature": "[a-\u003em Bool]-\u003ea-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:anyPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a list of monadic actions into one action.  Composes using\n (\u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e) - that is, the output of each action is fed to the input of\n the one after it in the list.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "concatM",
          "package": "monad-loops",
          "signature": "[a -\u003e m a] -\u003e a -\u003e m a",
          "source": "src/Control-Monad-Loops.html#concatM",
          "type": "function"
        },
        "index": {
          "description": "Compose list of monadic actions into one action Composes using that is the output of each action is fed to the input of the one after it in the list",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "concatM",
          "normalized": "[a-\u003eb a]-\u003ea-\u003eb a",
          "package": "monad-loops",
          "signature": "[a-\u003em a]-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:concatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "dropWhileM",
          "package": "monad-loops",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#dropWhileM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "dropWhileM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "monad-loops",
          "partial": "While",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:dropWhileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the first value from a list, if any, satisfying the given predicate.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "firstM",
          "package": "monad-loops",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Loops.html#firstM",
          "type": "function"
        },
        "index": {
          "description": "return the first value from list if any satisfying the given predicate",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "firstM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(Maybe a)",
          "package": "monad-loops",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:firstM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but run all the actions in parallel threads, collecting up\n the results and returning them all.  Does not return until all actions finish.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "forkMapM",
          "package": "monad-loops",
          "signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [Either SomeException b]",
          "source": "src/Control-Monad-Loops.html#forkMapM",
          "type": "function"
        },
        "index": {
          "description": "Like mapM but run all the actions in parallel threads collecting up the results and returning them all Does not return until all actions finish",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "forkMapM",
          "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[Either SomeException b]",
          "package": "monad-loops",
          "partial": "Map",
          "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[Either SomeException b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:forkMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eforkMapM\u003c/a\u003e\u003c/code\u003e but without bothering to keep the return values\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "forkMapM_",
          "package": "monad-loops",
          "signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [Maybe SomeException]",
          "source": "src/Control-Monad-Loops.html#forkMapM_",
          "type": "function"
        },
        "index": {
          "description": "like forkMapM but without bothering to keep the return values",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "forkMapM_",
          "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[Maybe SomeException]",
          "package": "monad-loops",
          "partial": "Map",
          "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[Maybe SomeException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:forkMapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eforkMapM_\u003c/a\u003e\u003c/code\u003e but not even bothering to track success or failure\n of the child threads.  Still waits for them all though.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "forkMapM__",
          "package": "monad-loops",
          "signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO ()",
          "source": "src/Control-Monad-Loops.html#forkMapM__",
          "type": "function"
        },
        "index": {
          "description": "like forkMapM but not even bothering to track success or failure of the child threads Still waits for them all though",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "forkMapM__",
          "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO()",
          "package": "monad-loops",
          "partial": "Map",
          "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:forkMapM__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action forever, feeding the result of each execution as the\n input to the next.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "iterateM_",
          "package": "monad-loops",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m b",
          "source": "src/Control-Monad-Loops.html#iterateM_",
          "type": "function"
        },
        "index": {
          "description": "Execute an action forever feeding the result of each execution as the input to the next",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "iterateM_",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb c",
          "package": "monad-loops",
          "signature": "(a-\u003em a)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:iterateM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action repeatedly until its result satisfies a predicate,\n and return that result (discarding all others).\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "iterateUntil",
          "package": "monad-loops",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Loops.html#iterateUntil",
          "type": "function"
        },
        "index": {
          "description": "Execute an action repeatedly until its result satisfies predicate and return that result discarding all others",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "iterateUntil",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "monad-loops",
          "partial": "Until",
          "signature": "(a-\u003eBool)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:iterateUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogue of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003euntil\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n Yields the result of applying f until p holds.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "iterateUntilM",
          "package": "monad-loops",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Control-Monad-Loops.html#iterateUntilM",
          "type": "function"
        },
        "index": {
          "description": "Analogue of until Yields the result of applying until holds",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "iterateUntilM",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "monad-loops",
          "partial": "Until",
          "signature": "(a-\u003eBool)-\u003e(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:iterateUntilM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action repeatedly until its result fails to satisfy a predicate,\n and return that result (discarding all others).\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "iterateWhile",
          "package": "monad-loops",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Loops.html#iterateWhile",
          "type": "function"
        },
        "index": {
          "description": "Execute an action repeatedly until its result fails to satisfy predicate and return that result discarding all others",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "iterateWhile",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "monad-loops",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:iterateWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "maximaByM",
          "package": "monad-loops",
          "signature": "(a -\u003e a -\u003e m Ordering) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#maximaByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "maximaByM",
          "normalized": "(a-\u003ea-\u003eb Ordering)-\u003e[a]-\u003eb[a]",
          "package": "monad-loops",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Ordering)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:maximaByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "maximaOnByM",
          "package": "monad-loops",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e b -\u003e m Ordering) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#maximaOnByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "maximaOnByM",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ec-\u003eb Ordering)-\u003e[a]-\u003eb[a]",
          "package": "monad-loops",
          "partial": "On By",
          "signature": "(a-\u003em b)-\u003e(b-\u003eb-\u003em Ordering)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:maximaOnByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "maximaOnM",
          "package": "monad-loops",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#maximaOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "maximaOnM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[a]",
          "package": "monad-loops",
          "partial": "On",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:maximaOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "maximumByM",
          "package": "monad-loops",
          "signature": "(a -\u003e a -\u003e m Ordering) -\u003e [a] -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Loops.html#maximumByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "maximumByM",
          "normalized": "(a-\u003ea-\u003eb Ordering)-\u003e[a]-\u003eb(Maybe a)",
          "package": "monad-loops",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Ordering)-\u003e[a]-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:maximumByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "maximumOnByM",
          "package": "monad-loops",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e b -\u003e m Ordering) -\u003e [a] -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Loops.html#maximumOnByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "maximumOnByM",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ec-\u003eb Ordering)-\u003e[a]-\u003eb(Maybe a)",
          "package": "monad-loops",
          "partial": "On By",
          "signature": "(a-\u003em b)-\u003e(b-\u003eb-\u003em Ordering)-\u003e[a]-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:maximumOnByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "maximumOnM",
          "package": "monad-loops",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Loops.html#maximumOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "maximumOnM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb(Maybe a)",
          "package": "monad-loops",
          "partial": "On",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:maximumOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "minimaByM",
          "package": "monad-loops",
          "signature": "(a -\u003e a -\u003e m Ordering) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#minimaByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "minimaByM",
          "normalized": "(a-\u003ea-\u003eb Ordering)-\u003e[a]-\u003eb[a]",
          "package": "monad-loops",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Ordering)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:minimaByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "minimaOnByM",
          "package": "monad-loops",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e b -\u003e m Ordering) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#minimaOnByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "minimaOnByM",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ec-\u003eb Ordering)-\u003e[a]-\u003eb[a]",
          "package": "monad-loops",
          "partial": "On By",
          "signature": "(a-\u003em b)-\u003e(b-\u003eb-\u003em Ordering)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:minimaOnByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "minimaOnM",
          "package": "monad-loops",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#minimaOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "minimaOnM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[a]",
          "package": "monad-loops",
          "partial": "On",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:minimaOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "minimumByM",
          "package": "monad-loops",
          "signature": "(a -\u003e a -\u003e m Ordering) -\u003e [a] -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Loops.html#minimumByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "minimumByM",
          "normalized": "(a-\u003ea-\u003eb Ordering)-\u003e[a]-\u003eb(Maybe a)",
          "package": "monad-loops",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Ordering)-\u003e[a]-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:minimumByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "minimumOnByM",
          "package": "monad-loops",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e b -\u003e m Ordering) -\u003e [a] -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Loops.html#minimumOnByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "minimumOnByM",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ec-\u003eb Ordering)-\u003e[a]-\u003eb(Maybe a)",
          "package": "monad-loops",
          "partial": "On By",
          "signature": "(a-\u003em b)-\u003e(b-\u003eb-\u003em Ordering)-\u003e[a]-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:minimumOnByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops",
          "name": "minimumOnM",
          "package": "monad-loops",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Loops.html#minimumOnM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "minimumOnM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb(Maybe a)",
          "package": "monad-loops",
          "partial": "On",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:minimumOnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshort-circuit \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e for values of type Monad m =\u003e m Bool\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "orM",
          "package": "monad-loops",
          "signature": "[m Bool] -\u003e m Bool",
          "source": "src/Control-Monad-Loops.html#orM",
          "type": "function"
        },
        "index": {
          "description": "short-circuit or for values of type Monad Bool",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "orM",
          "normalized": "[a Bool]-\u003ea Bool",
          "package": "monad-loops",
          "signature": "[m Bool]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:orM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003edropWhileM\u003c/a\u003e\u003c/code\u003e but trims both ends of the list.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "trimM",
          "package": "monad-loops",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#trimM",
          "type": "function"
        },
        "index": {
          "description": "like dropWhileM but trims both ends of the list",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "trimM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "monad-loops",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:trimM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe supplied \u003ca\u003eMaybe\u003c/a\u003e expression will be repeatedly called until it\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  All values returned are collected into a list.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "unfoldM",
          "package": "monad-loops",
          "signature": "m (Maybe a) -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#unfoldM",
          "type": "function"
        },
        "index": {
          "description": "The supplied Maybe expression will be repeatedly called until it returns Nothing All values returned are collected into list",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "unfoldM",
          "normalized": "a(Maybe b)-\u003ea[b]",
          "package": "monad-loops",
          "signature": "m(Maybe a)-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:unfoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe supplied \u003ca\u003eMaybe\u003c/a\u003e expression will be repeatedly called until it\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  All values returned are collected into an arbitrary\n \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e thing.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "unfoldM'",
          "package": "monad-loops",
          "signature": "m (Maybe a) -\u003e m (f a)",
          "source": "src/Control-Monad-Loops.html#unfoldM%27",
          "type": "function"
        },
        "index": {
          "description": "The supplied Maybe expression will be repeatedly called until it returns Nothing All values returned are collected into an arbitrary MonadPlus thing",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "unfoldM'",
          "normalized": "a(Maybe b)-\u003ea(c b)",
          "package": "monad-loops",
          "partial": "M'",
          "signature": "m(Maybe a)-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:unfoldM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe supplied \u003ca\u003eMaybe\u003c/a\u003e expression will be repeatedly called until it\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  All values returned are discarded.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "unfoldM_",
          "package": "monad-loops",
          "signature": "m (Maybe a) -\u003e m ()",
          "source": "src/Control-Monad-Loops.html#unfoldM_",
          "type": "function"
        },
        "index": {
          "description": "The supplied Maybe expression will be repeatedly called until it returns Nothing All values returned are discarded",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "unfoldM_",
          "normalized": "a(Maybe b)-\u003ea()",
          "package": "monad-loops",
          "signature": "m(Maybe a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:unfoldM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly evaluates the second argument until the value satisfies\n the given predicate, and returns a list of all values that satisfied the\n predicate.  Discards the final one (which failed the predicate).\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "unfoldWhileM",
          "package": "monad-loops",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#unfoldWhileM",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly evaluates the second argument until the value satisfies the given predicate and returns list of all values that satisfied the predicate Discards the final one which failed the predicate",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "unfoldWhileM",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb[a]",
          "package": "monad-loops",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:unfoldWhileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly evaluates the second argument until the value satisfies\n the given predicate, and returns a \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e collection of all values\n that satisfied the predicate.  Discards the final one (which failed the predicate).\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "unfoldWhileM'",
          "package": "monad-loops",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m (f a)",
          "source": "src/Control-Monad-Loops.html#unfoldWhileM%27",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly evaluates the second argument until the value satisfies the given predicate and returns MonadPlus collection of all values that satisfied the predicate Discards the final one which failed the predicate",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "unfoldWhileM'",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb(c a)",
          "package": "monad-loops",
          "partial": "While M'",
          "signature": "(a-\u003eBool)-\u003em a-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:unfoldWhileM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e.  This is a monad-friendly version of that.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "unfoldrM",
          "package": "monad-loops",
          "signature": "(a -\u003e m (Maybe (b, a))) -\u003e a -\u003e m [b]",
          "source": "src/Control-Monad-Loops.html#unfoldrM",
          "type": "function"
        },
        "index": {
          "description": "See unfoldr This is monad-friendly version of that",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "unfoldrM",
          "normalized": "(a-\u003eb(Maybe(c,a)))-\u003ea-\u003eb[c]",
          "package": "monad-loops",
          "signature": "(a-\u003em(Maybe(b,a)))-\u003ea-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:unfoldrM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e.  This is a monad-friendly version of that, with a\n twist.  Rather than returning a list, it returns any MonadPlus type of your\n choice.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "unfoldrM'",
          "package": "monad-loops",
          "signature": "(a -\u003e m (Maybe (b, a))) -\u003e a -\u003e m (f b)",
          "source": "src/Control-Monad-Loops.html#unfoldrM%27",
          "type": "function"
        },
        "index": {
          "description": "See unfoldr This is monad-friendly version of that with twist Rather than returning list it returns any MonadPlus type of your choice",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "unfoldrM'",
          "normalized": "(a-\u003eb(Maybe(c,a)))-\u003ea-\u003eb(d c)",
          "package": "monad-loops",
          "partial": "M'",
          "signature": "(a-\u003em(Maybe(b,a)))-\u003ea-\u003em(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:unfoldrM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the supplied \u003ca\u003eMaybe\u003c/a\u003e computation repeatedly until it returns a\n value.  Returns that value.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "untilJust",
          "package": "monad-loops",
          "signature": "m (Maybe a) -\u003e m a",
          "source": "src/Control-Monad-Loops.html#untilJust",
          "type": "function"
        },
        "index": {
          "description": "Run the supplied Maybe computation repeatedly until it returns value Returns that value",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "untilJust",
          "normalized": "a(Maybe b)-\u003ea b",
          "package": "monad-loops",
          "partial": "Just",
          "signature": "m(Maybe a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:untilJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action repeatedly until the condition expression returns True.\n The condition is evaluated after the loop body.  Collects results into a list.\n Parameters are arranged for infix usage.  eg. do {...} \u003ccode\u003e\u003ca\u003euntilM_\u003c/a\u003e\u003c/code\u003e ...\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "untilM",
          "package": "monad-loops",
          "signature": "m a -\u003e m Bool -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#untilM",
          "type": "function"
        },
        "index": {
          "description": "Execute an action repeatedly until the condition expression returns True The condition is evaluated after the loop body Collects results into list Parameters are arranged for infix usage eg do untilM",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "untilM",
          "normalized": "a b-\u003ea Bool-\u003ea[b]",
          "package": "monad-loops",
          "signature": "m a-\u003em Bool-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:untilM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action repeatedly until the condition expression returns True.\n The condition is evaluated after the loop body.  Collects results into a\n \u003ca\u003eMonadPlus\u003c/a\u003e value.\n Parameters are arranged for infix usage.  eg. do {...} \u003ccode\u003e\u003ca\u003euntilM_\u003c/a\u003e\u003c/code\u003e ...\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "untilM'",
          "package": "monad-loops",
          "signature": "m a -\u003e m Bool -\u003e m (f a)",
          "source": "src/Control-Monad-Loops.html#untilM%27",
          "type": "function"
        },
        "index": {
          "description": "Execute an action repeatedly until the condition expression returns True The condition is evaluated after the loop body Collects results into MonadPlus value Parameters are arranged for infix usage eg do untilM",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "untilM'",
          "normalized": "a b-\u003ea Bool-\u003ea(c b)",
          "package": "monad-loops",
          "partial": "M'",
          "signature": "m a-\u003em Bool-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:untilM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action repeatedly until the condition expression returns True.\n The condition is evaluated after the loop body.  Discards results.\n Parameters are arranged for infix usage.  eg. do {...} \u003ccode\u003e\u003ca\u003euntilM_\u003c/a\u003e\u003c/code\u003e ...\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "untilM_",
          "package": "monad-loops",
          "signature": "m a -\u003e m Bool -\u003e m ()",
          "source": "src/Control-Monad-Loops.html#untilM_",
          "type": "function"
        },
        "index": {
          "description": "Execute an action repeatedly until the condition expression returns True The condition is evaluated after the loop body Discards results Parameters are arranged for infix usage eg do untilM",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "untilM_",
          "normalized": "a b-\u003ea Bool-\u003ea()",
          "package": "monad-loops",
          "signature": "m a-\u003em Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:untilM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs long as the supplied \u003ca\u003eMaybe\u003c/a\u003e expression returns \u003ca\u003eJust _\u003c/a\u003e, the loop\n body will be called and passed the value contained in the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.  Results\n are collected into a list.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "whileJust",
          "package": "monad-loops",
          "signature": "m (Maybe a) -\u003e (a -\u003e m b) -\u003e m [b]",
          "source": "src/Control-Monad-Loops.html#whileJust",
          "type": "function"
        },
        "index": {
          "description": "As long as the supplied Maybe expression returns Just the loop body will be called and passed the value contained in the Just Results are collected into list",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "whileJust",
          "normalized": "a(Maybe b)-\u003e(b-\u003ea c)-\u003ea[c]",
          "package": "monad-loops",
          "partial": "Just",
          "signature": "m(Maybe a)-\u003e(a-\u003em b)-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:whileJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs long as the supplied \u003ca\u003eMaybe\u003c/a\u003e expression returns \u003ca\u003eJust _\u003c/a\u003e, the loop\n body will be called and passed the value contained in the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.  Results\n are collected into an arbitrary MonadPlus container.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "whileJust'",
          "package": "monad-loops",
          "signature": "m (Maybe a) -\u003e (a -\u003e m b) -\u003e m (f b)",
          "source": "src/Control-Monad-Loops.html#whileJust%27",
          "type": "function"
        },
        "index": {
          "description": "As long as the supplied Maybe expression returns Just the loop body will be called and passed the value contained in the Just Results are collected into an arbitrary MonadPlus container",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "whileJust'",
          "normalized": "a(Maybe b)-\u003e(b-\u003ea c)-\u003ea(d c)",
          "package": "monad-loops",
          "partial": "Just'",
          "signature": "m(Maybe a)-\u003e(a-\u003em b)-\u003em(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:whileJust-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs long as the supplied \u003ca\u003eMaybe\u003c/a\u003e expression returns \u003ca\u003eJust _\u003c/a\u003e, the loop\n body will be called and passed the value contained in the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.  Results\n are discarded.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "whileJust_",
          "package": "monad-loops",
          "signature": "m (Maybe a) -\u003e (a -\u003e m b) -\u003e m ()",
          "source": "src/Control-Monad-Loops.html#whileJust_",
          "type": "function"
        },
        "index": {
          "description": "As long as the supplied Maybe expression returns Just the loop body will be called and passed the value contained in the Just Results are discarded",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "whileJust_",
          "normalized": "a(Maybe b)-\u003e(b-\u003ea c)-\u003ea()",
          "package": "monad-loops",
          "partial": "Just",
          "signature": "m(Maybe a)-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:whileJust_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action repeatedly as long as the given boolean expression\n returns True.  The condition is evaluated before the loop body.\n Collects the results into a list.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "whileM",
          "package": "monad-loops",
          "signature": "m Bool -\u003e m a -\u003e m [a]",
          "source": "src/Control-Monad-Loops.html#whileM",
          "type": "function"
        },
        "index": {
          "description": "Execute an action repeatedly as long as the given boolean expression returns True The condition is evaluated before the loop body Collects the results into list",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "whileM",
          "normalized": "a Bool-\u003ea b-\u003ea[b]",
          "package": "monad-loops",
          "signature": "m Bool-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:whileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action repeatedly as long as the given boolean expression\n returns True. The condition is evaluated before the loop body.\n Collects the results into an arbitrary \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "whileM'",
          "package": "monad-loops",
          "signature": "m Bool -\u003e m a -\u003e m (f a)",
          "source": "src/Control-Monad-Loops.html#whileM%27",
          "type": "function"
        },
        "index": {
          "description": "Execute an action repeatedly as long as the given boolean expression returns True The condition is evaluated before the loop body Collects the results into an arbitrary MonadPlus value",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "whileM'",
          "normalized": "a Bool-\u003ea b-\u003ea(c b)",
          "package": "monad-loops",
          "partial": "M'",
          "signature": "m Bool-\u003em a-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:whileM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action repeatedly as long as the given boolean expression\n returns True.  The condition is evaluated before the loop body.\n Discards results.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops",
          "name": "whileM_",
          "package": "monad-loops",
          "signature": "m Bool -\u003e m a -\u003e m ()",
          "source": "src/Control-Monad-Loops.html#whileM_",
          "type": "function"
        },
        "index": {
          "description": "Execute an action repeatedly as long as the given boolean expression returns True The condition is evaluated before the loop body Discards results",
          "hierarchy": "Control Monad Loops",
          "module": "Control.Monad.Loops",
          "name": "whileM_",
          "normalized": "a Bool-\u003ea b-\u003ea()",
          "package": "monad-loops",
          "signature": "m Bool-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops/docs/Control-Monad-Loops.html#v:whileM_"
      }
    }
  ]
]