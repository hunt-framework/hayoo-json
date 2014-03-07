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
        "word": "orc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHierarchical concurrent threads, which kill all of their descendants\n when they are killed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Hierarchical",
          "name": "Hierarchical",
          "package": "orc",
          "source": "src/Control-Concurrent-Hierarchical.html",
          "type": "module"
        },
        "index": {
          "description": "Hierarchical concurrent threads which kill all of their descendants when they are killed",
          "hierarchy": "Control Concurrent Hierarchical",
          "module": "Control.Concurrent.Hierarchical",
          "name": "Hierarchical",
          "package": "orc",
          "partial": "Hierarchical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA thread \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e keeps tracks of its inhabitants, which may be\n threads or other \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Hierarchical",
          "name": "Group",
          "package": "orc",
          "source": "src/Control-Concurrent-Hierarchical.html#Group",
          "type": "type"
        },
        "index": {
          "description": "thread Group keeps tracks of its inhabitants which may be threads or other Group",
          "hierarchy": "Control Concurrent Hierarchical",
          "module": "Control.Concurrent.Hierarchical",
          "name": "Group",
          "package": "orc",
          "partial": "Group",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHIO\u003c/a\u003e\u003c/code\u003e monad is simply the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad augmented with an\n environment that tracks the current thread \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e.  This permits us\n to keep track of forked threads and kill them en mass when an\n ancestor is killed.  The \u003ccode\u003e\u003ca\u003eHIO\u003c/a\u003e\u003c/code\u003e monad is an instance of \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e, so\n arbitrary \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions may be embedded in it; however, the user is\n advised that any action may be summarily killed, and thus it is of\n extra importance that appropriate bracketing functions are used.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Hierarchical",
          "name": "HIO",
          "package": "orc",
          "source": "src/Control-Concurrent-Hierarchical.html#HIO",
          "type": "data"
        },
        "index": {
          "description": "The HIO monad is simply the IO monad augmented with an environment that tracks the current thread Group This permits us to keep track of forked threads and kill them en mass when an ancestor is killed The HIO monad is an instance of MonadIO so arbitrary IO actions may be embedded in it however the user is advised that any action may be summarily killed and thus it is of extra importance that appropriate bracketing functions are used",
          "hierarchy": "Control Concurrent Hierarchical",
          "module": "Control.Concurrent.Hierarchical",
          "name": "HIO",
          "package": "orc",
          "partial": "HIO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#t:HIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill all threads which are descendants of a \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e and closes the\n group, disallowing new threads or groups to be added to the group.\n Doesn't do anything if the group is already closed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Hierarchical",
          "name": "close",
          "package": "orc",
          "signature": "Group -\u003e HIO ()",
          "source": "src/Control-Concurrent-Hierarchical.html#close",
          "type": "function"
        },
        "index": {
          "description": "Kill all threads which are descendants of Group and closes the group disallowing new threads or groups to be added to the group Doesn do anything if the group is already closed",
          "hierarchy": "Control Concurrent Hierarchical",
          "module": "Control.Concurrent.Hierarchical",
          "name": "close",
          "normalized": "Group-\u003eHIO()",
          "package": "orc",
          "signature": "Group-\u003eHIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocks until the \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ew\u003c/code\u003e is finished executing.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Hierarchical",
          "name": "finished",
          "package": "orc",
          "signature": "Group -\u003e HIO ()",
          "source": "src/Control-Concurrent-Hierarchical.html#finished",
          "type": "function"
        },
        "index": {
          "description": "Blocks until the Group is finished executing",
          "hierarchy": "Control Concurrent Hierarchical",
          "module": "Control.Concurrent.Hierarchical",
          "name": "finished",
          "normalized": "Group-\u003eHIO()",
          "package": "orc",
          "signature": "Group-\u003eHIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly sets the current \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e environment for a \u003ccode\u003e\u003ca\u003eHIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Hierarchical",
          "name": "local",
          "package": "orc",
          "signature": "Group -\u003e HIO a -\u003e HIO a",
          "source": "src/Control-Concurrent-Hierarchical.html#local",
          "type": "function"
        },
        "index": {
          "description": "Explicitly sets the current Group environment for HIO monad",
          "hierarchy": "Control Concurrent Hierarchical",
          "module": "Control.Concurrent.Hierarchical",
          "name": "local",
          "normalized": "Group-\u003eHIO a-\u003eHIO a",
          "package": "orc",
          "signature": "Group-\u003eHIO a-\u003eHIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new thread group and registers the current environment's\n thread group in it.  If the current group is closed, immediately\n terminates execution of the current thread.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Hierarchical",
          "name": "newGroup",
          "package": "orc",
          "signature": "HIO Group",
          "source": "src/Control-Concurrent-Hierarchical.html#newGroup",
          "type": "function"
        },
        "index": {
          "description": "Creates new thread group and registers the current environment thread group in it If the current group is closed immediately terminates execution of the current thread",
          "hierarchy": "Control Concurrent Hierarchical",
          "module": "Control.Concurrent.Hierarchical",
          "name": "newGroup",
          "package": "orc",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:newGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new, empty thread group.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Hierarchical",
          "name": "newPrimGroup",
          "package": "orc",
          "signature": "IO Group",
          "source": "src/Control-Concurrent-Hierarchical.html#newPrimGroup",
          "type": "function"
        },
        "index": {
          "description": "Creates new empty thread group",
          "hierarchy": "Control Concurrent Hierarchical",
          "module": "Control.Concurrent.Hierarchical",
          "name": "newPrimGroup",
          "package": "orc",
          "partial": "Prim Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:newPrimGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eHIO\u003c/a\u003e\u003c/code\u003e operation inside a new thread group that has no\n parent, and blocks until all subthreads of the operation are done\n executing.  If \u003ccode\u003ecountingThreads\u003c/code\u003e is \u003ccode\u003eTrue\u003c/code\u003e, it then prints some\n debugging information about the threads run (XXX: this seems\n suboptimal.)\n\u003c/p\u003e",
          "module": "Control.Concurrent.Hierarchical",
          "name": "runHIO",
          "package": "orc",
          "signature": "HIO b -\u003e IO ()",
          "source": "src/Control-Concurrent-Hierarchical.html#runHIO",
          "type": "function"
        },
        "index": {
          "description": "Runs HIO operation inside new thread group that has no parent and blocks until all subthreads of the operation are done executing If countingThreads is True it then prints some debugging information about the threads run XXX this seems suboptimal",
          "hierarchy": "Control Concurrent Hierarchical",
          "module": "Control.Concurrent.Hierarchical",
          "name": "runHIO",
          "normalized": "HIO a-\u003eIO()",
          "package": "orc",
          "partial": "HIO",
          "signature": "HIO b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:runHIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Orc.Combinators",
          "name": "Combinators",
          "package": "orc",
          "source": "src/Orc-Combinators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "Combinators",
          "package": "orc",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, pronounced or-else, which performs and returns\n the results of \u003ccode\u003ep\u003c/code\u003e, and if \u003ccode\u003ep\u003c/code\u003e produced no answers go on and performa\n dn return the results of \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "(\u003c?\u003e)",
          "package": "orc",
          "signature": "Orc a -\u003e Orc a -\u003e Orc a",
          "source": "src/Orc-Combinators.html#%3C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "variant of pronounced or-else which performs and returns the results of and if produced no answers go on and performa dn return the results of",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "Orc a-\u003eOrc a-\u003eOrc a",
          "package": "orc",
          "signature": "Orc a-\u003eOrc a-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediately executes the computation \u003ccode\u003ep\u003c/code\u003e, but if it hasn't returned\n a result in \u003ccode\u003et\u003c/code\u003e seconds, execute the computation \u003ccode\u003eq\u003c/code\u003e and return\n whichever computations returns a result first (killing the other\n thread).\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "butAfter",
          "package": "orc",
          "signature": "Orc a -\u003e (Float, Orc a) -\u003e Orc a",
          "source": "src/Orc-Combinators.html#butAfter",
          "type": "function"
        },
        "index": {
          "description": "Immediately executes the computation but if it hasn returned result in seconds execute the computation and return whichever computations returns result first killing the other thread",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "butAfter",
          "normalized": "Orc a-\u003e(Float,Orc a)-\u003eOrc a",
          "package": "orc",
          "partial": "After",
          "signature": "Orc a-\u003e(Float,Orc a)-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:butAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollects all of the values of the computation \u003ccode\u003ep\u003c/code\u003e and delivers them\n as a list when \u003ccode\u003ep\u003c/code\u003e is completed.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "collect",
          "package": "orc",
          "signature": "Orc a -\u003e Orc [a]",
          "source": "src/Orc-Combinators.html#collect",
          "type": "function"
        },
        "index": {
          "description": "Collects all of the values of the computation and delivers them as list when is completed",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "collect",
          "normalized": "Orc a-\u003eOrc[a]",
          "package": "orc",
          "signature": "Orc a-\u003eOrc[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each value produced by \u003ccode\u003ep\u003c/code\u003e, return a \u003ccode\u003eLeft a\u003c/code\u003e.  Once \u003ccode\u003ep\u003c/code\u003e has\n finished, return a \u003ccode\u003eRight Int\u003c/code\u003e containing the number of results\n produced.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "count",
          "package": "orc",
          "signature": "Orc a -\u003e Orc (Either a Int)",
          "source": "src/Orc-Combinators.html#count",
          "type": "function"
        },
        "index": {
          "description": "For each value produced by return Left Once has finished return Right Int containing the number of results produced",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "count",
          "normalized": "Orc a-\u003eOrc(Either a Int)",
          "package": "orc",
          "signature": "Orc a-\u003eOrc(Either a Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCut executes an orc expression, waits for the first result, and then\n suppresses the rest, including killing any threads involved\n in computing the remainder. \n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "cut",
          "package": "orc",
          "signature": "Orc a -\u003e Orc a",
          "source": "src/Orc-Combinators.html#cut",
          "type": "function"
        },
        "index": {
          "description": "Cut executes an orc expression waits for the first result and then suppresses the rest including killing any threads involved in computing the remainder",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "cut",
          "normalized": "Orc a-\u003eOrc a",
          "package": "orc",
          "signature": "Orc a-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:cut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a period of w seconds, then continue processing.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "delay",
          "package": "orc",
          "signature": "a -\u003e Orc ()",
          "source": "src/Orc-Combinators.html#delay",
          "type": "function"
        },
        "index": {
          "description": "Wait for period of seconds then continue processing",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "delay",
          "normalized": "a-\u003eOrc()",
          "package": "orc",
          "signature": "a-\u003eOrc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops the first \u003ccode\u003en\u003c/code\u003e results of the computation \u003ccode\u003ep\u003c/code\u003e, and then\n returns the rest of the results.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "dropOrc",
          "package": "orc",
          "signature": "Int -\u003e Orc a -\u003e Orc a",
          "source": "src/Orc-Combinators.html#dropOrc",
          "type": "function"
        },
        "index": {
          "description": "Drops the first results of the computation and then returns the rest of the results",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "dropOrc",
          "normalized": "Int-\u003eOrc a-\u003eOrc a",
          "package": "orc",
          "partial": "Orc",
          "signature": "Int-\u003eOrc a-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:dropOrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rough inverse of \u003ccode\u003e\u003ca\u003esandbox\u003c/a\u003e\u003c/code\u003e, repeatedly reads values from the\n \u003ccode\u003evals\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e until \u003ccode\u003ej\u003c/code\u003e values have been read or the \u003ccode\u003evals\u003c/code\u003e MVar is\n exhausted (a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is passed).  When there are no more values to\n be returned, fills the \u003ccode\u003eend\u003c/code\u003e MVar.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "echo",
          "package": "orc",
          "signature": "Int -\u003e MVar (Maybe a) -\u003e MVar () -\u003e Orc a",
          "source": "src/Orc-Combinators.html#echo",
          "type": "function"
        },
        "index": {
          "description": "The rough inverse of sandbox repeatedly reads values from the vals MVar until values have been read or the vals MVar is exhausted Nothing is passed When there are no more values to be returned fills the end MVar",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "echo",
          "normalized": "Int-\u003eMVar(Maybe a)-\u003eMVar()-\u003eOrc a",
          "package": "orc",
          "signature": "Int-\u003eMVar(Maybe a)-\u003eMVar()-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a list into an Orc monad.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "liftList",
          "package": "orc",
          "signature": "[a] -\u003e list a",
          "source": "src/Orc-Combinators.html#liftList",
          "type": "function"
        },
        "index": {
          "description": "Lifts list into an Orc monad",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "liftList",
          "normalized": "[a]-\u003eb a",
          "package": "orc",
          "partial": "List",
          "signature": "[a]-\u003elist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:liftList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the computation \u003ccode\u003ep\u003c/code\u003e and returns its first result, but doesn't\n return before \u003ccode\u003ew\u003c/code\u003e seconds have elapsed.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "notBefore",
          "package": "orc",
          "signature": "Orc a -\u003e Float -\u003e Orc a",
          "source": "src/Orc-Combinators.html#notBefore",
          "type": "function"
        },
        "index": {
          "description": "Runs the computation and returns its first result but doesn return before seconds have elapsed",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "notBefore",
          "normalized": "Orc a-\u003eFloat-\u003eOrc a",
          "package": "orc",
          "partial": "Before",
          "signature": "Orc a-\u003eFloat-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:notBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the computation \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003edone\u003c/code\u003e.  Once \u003ccode\u003edone\u003c/code\u003e returns its\n first result, kill both computations and returns that result.  This\n discards the results of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "onlyUntil",
          "package": "orc",
          "signature": "Orc a -\u003e Orc b -\u003e Orc b",
          "source": "src/Orc-Combinators.html#onlyUntil",
          "type": "function"
        },
        "index": {
          "description": "Executes the computation and done Once done returns its first result kill both computations and returns that result This discards the results of",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "onlyUntil",
          "normalized": "Orc a-\u003eOrc b-\u003eOrc b",
          "package": "orc",
          "partial": "Until",
          "signature": "Orc a-\u003eOrc b-\u003eOrc b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:onlyUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an Orc computation, eagerly printing out the results of an Orc\n computation line-by-line.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "printOrc",
          "package": "orc",
          "signature": "Orc a -\u003e IO ()",
          "source": "src/Orc-Combinators.html#printOrc",
          "type": "function"
        },
        "index": {
          "description": "Runs an Orc computation eagerly printing out the results of an Orc computation line-by-line",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "printOrc",
          "normalized": "Orc a-\u003eIO()",
          "package": "orc",
          "partial": "Orc",
          "signature": "Orc a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:printOrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrompts the user for a string.  Concurrency-safe.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "prompt",
          "package": "orc",
          "signature": "String -\u003e Orc String",
          "source": "src/Orc-Combinators.html#prompt",
          "type": "function"
        },
        "index": {
          "description": "Prompts the user for string Concurrency-safe",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "prompt",
          "normalized": "String-\u003eOrc String",
          "package": "orc",
          "signature": "String-\u003eOrc String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:prompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublish is a hyperstrict form of return. It is useful\n   for combining results from multiple \u003ccode\u003e\u003ca\u003eval\u003c/a\u003e\u003c/code\u003e computations, providing\n   a synchronization point. \n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "publish",
          "package": "orc",
          "signature": "a -\u003e Orc a",
          "source": "src/Orc-Combinators.html#publish",
          "type": "function"
        },
        "index": {
          "description": "Publish is hyperstrict form of return It is useful for combining results from multiple val computations providing synchronization point",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "publish",
          "normalized": "a-\u003eOrc a",
          "package": "orc",
          "signature": "a-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:publish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a string and newline to standard output.  Concurrency-safe.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "putStrLine",
          "package": "orc",
          "signature": "String -\u003e Orc ()",
          "source": "src/Orc-Combinators.html#putStrLine",
          "type": "function"
        },
        "index": {
          "description": "Writes string and newline to standard output Concurrency-safe",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "putStrLine",
          "normalized": "String-\u003eOrc()",
          "package": "orc",
          "partial": "Str Line",
          "signature": "String-\u003eOrc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:putStrLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly executes the computation \u003ccode\u003ep\u003c/code\u003e and returns its\n results.  \u003ccode\u003e\u003ca\u003erepeating\u003c/a\u003e\u003c/code\u003e works best when \u003ccode\u003ep\u003c/code\u003e is single-valued:\n if \u003ccode\u003ep\u003c/code\u003e is multivalued Orc will spawn a repeating thread for every\n result returned, resulting in an exponential blow-up of\n threads (XXX: I don't think this was actually intended.)\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "repeating",
          "package": "orc",
          "signature": "Orc a -\u003e Orc a",
          "source": "src/Orc-Combinators.html#repeating",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly executes the computation and returns its results repeating works best when is single-valued if is multivalued Orc will spawn repeating thread for every result returned resulting in an exponential blow-up of threads XXX don think this was actually intended",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "repeating",
          "normalized": "Orc a-\u003eOrc a",
          "package": "orc",
          "signature": "Orc a-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:repeating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a computation \u003ccode\u003ep\u003c/code\u003e and writes its results to the channel \u003ccode\u003ech\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "runChan",
          "package": "orc",
          "signature": "Chan a -\u003e Orc a -\u003e IO ()",
          "source": "src/Orc-Combinators.html#runChan",
          "type": "function"
        },
        "index": {
          "description": "Runs computation and writes its results to the channel ch",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "runChan",
          "normalized": "Chan a-\u003eOrc a-\u003eIO()",
          "package": "orc",
          "partial": "Chan",
          "signature": "Chan a-\u003eOrc a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:runChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the computation \u003ccode\u003ep\u003c/code\u003e, and repeatedly puts its results (tagged\n with \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003evals\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.  Puts \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no\n results left.  Stops executing when the \u003ccode\u003eend\u003c/code\u003e MVar is filled.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "sandbox",
          "package": "orc",
          "signature": "Orc a -\u003e MVar (Maybe a) -\u003e MVar () -\u003e Orc ()",
          "source": "src/Orc-Combinators.html#sandbox",
          "type": "function"
        },
        "index": {
          "description": "Runs the computation and repeatedly puts its results tagged with Just into the vals MVar Puts Nothing if there are no results left Stops executing when the end MVar is filled",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "sandbox",
          "normalized": "Orc a-\u003eMVar(Maybe a)-\u003eMVar()-\u003eOrc()",
          "package": "orc",
          "signature": "Orc a-\u003eMVar(Maybe a)-\u003eMVar()-\u003eOrc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:sandbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to the list scan function, but the order in which\n the combining function is applied to the results produced by\n \u003ccode\u003ep\u003c/code\u003e is nondeterministic.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "scan",
          "package": "orc",
          "signature": "(a -\u003e s -\u003e s) -\u003e s -\u003e Orc a -\u003e Orc s",
          "source": "src/Orc-Combinators.html#scan",
          "type": "function"
        },
        "index": {
          "description": "Analogous to the list scan function but the order in which the combining function is applied to the results produced by is nondeterministic",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "scan",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eOrc a-\u003eOrc b",
          "package": "orc",
          "signature": "(a-\u003es-\u003es)-\u003es-\u003eOrc a-\u003eOrc s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternate phrasing of \u003ccode\u003ereturn ()\u003c/code\u003e, which can be placed at the end\n of an Orc computation to signal that it has no more values to\n produce.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "signal",
          "package": "orc",
          "signature": "Orc ()",
          "source": "src/Orc-Combinators.html#signal",
          "type": "function"
        },
        "index": {
          "description": "Alternate phrasing of return which can be placed at the end of an Orc computation to signal that it has no more values to produce",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "signal",
          "normalized": "Orc()",
          "package": "orc",
          "signature": "Orc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the computation \u003ccode\u003ep\u003c/code\u003e but suppresses its results.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "silent",
          "package": "orc",
          "signature": "Orc a -\u003e Orc b",
          "source": "src/Orc-Combinators.html#silent",
          "type": "function"
        },
        "index": {
          "description": "Executes the computation but suppresses its results",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "silent",
          "normalized": "Orc a-\u003eOrc b",
          "package": "orc",
          "signature": "Orc a-\u003eOrc b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the first result of \u003ccode\u003ep\u003c/code\u003e, the first result of\n \u003ccode\u003eq\u003c/code\u003e, and applies them to \u003ccode\u003ef\u003c/code\u003e.  The computations for \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e are\n run in parallel.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "sync",
          "package": "orc",
          "signature": "(a -\u003e b -\u003e c) -\u003e Orc a -\u003e Orc b -\u003e Orc c",
          "source": "src/Orc-Combinators.html#sync",
          "type": "function"
        },
        "index": {
          "description": "Takes the first result of the first result of and applies them to The computations for and are run in parallel",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "sync",
          "normalized": "(a-\u003eb-\u003ec)-\u003eOrc a-\u003eOrc b-\u003eOrc c",
          "package": "orc",
          "signature": "(a-\u003eb-\u003ec)-\u003eOrc a-\u003eOrc b-\u003eOrc c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a list of Orc computations \u003ccode\u003eps\u003c/code\u003e in parallel until they produce\n their first result, and returns a list of all these results.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "syncList",
          "package": "orc",
          "signature": "[Orc a] -\u003e Orc [a]",
          "source": "src/Orc-Combinators.html#syncList",
          "type": "function"
        },
        "index": {
          "description": "Runs list of Orc computations ps in parallel until they produce their first result and returns list of all these results",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "syncList",
          "normalized": "[Orc a]-\u003eOrc[a]",
          "package": "orc",
          "partial": "List",
          "signature": "[Orc a]-\u003eOrc[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:syncList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList-like functions\n\u003c/p\u003e\u003cp\u003eRuns the computation \u003ccode\u003ep\u003c/code\u003e and returns the first \u003ccode\u003en\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "takeOrc",
          "package": "orc",
          "signature": "Int -\u003e Orc a -\u003e Orc a",
          "source": "src/Orc-Combinators.html#takeOrc",
          "type": "function"
        },
        "index": {
          "description": "List-like functions Runs the computation and returns the first results",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "takeOrc",
          "normalized": "Int-\u003eOrc a-\u003eOrc a",
          "package": "orc",
          "partial": "Orc",
          "signature": "Int-\u003eOrc a-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:takeOrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation \u003ccode\u003ep\u003c/code\u003e, but if it hasn't returned a result in\n \u003ccode\u003en\u003c/code\u003e seconds return \u003ccode\u003ea\u003c/code\u003e instead (killing the \u003ccode\u003ep\u003c/code\u003e computation).\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "timeout",
          "package": "orc",
          "signature": "Float -\u003e a -\u003e Orc a -\u003e Orc a",
          "source": "src/Orc-Combinators.html#timeout",
          "type": "function"
        },
        "index": {
          "description": "Executes computation but if it hasn returned result in seconds return instead killing the computation",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "timeout",
          "normalized": "Float-\u003ea-\u003eOrc a-\u003eOrc a",
          "package": "orc",
          "signature": "Float-\u003ea-\u003eOrc a-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZips the results of two computations \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e.  When one\n computation finishes, kill the other.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "zipOrc",
          "package": "orc",
          "signature": "Orc a -\u003e Orc b -\u003e Orc (a, b)",
          "source": "src/Orc-Combinators.html#zipOrc",
          "type": "function"
        },
        "index": {
          "description": "Zips the results of two computations and When one computation finishes kill the other",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "zipOrc",
          "normalized": "Orc a-\u003eOrc b-\u003eOrc(a,b)",
          "package": "orc",
          "partial": "Orc",
          "signature": "Orc a-\u003eOrc b-\u003eOrc(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:zipOrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eecho\u003c/a\u003e\u003c/code\u003e, repeatedly reads values from the \u003ccode\u003epvals\u003c/code\u003e and \u003ccode\u003eqvals\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e, returning tuples of the values until one \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is exhausted.\n When there are no more values to be returned, fills the \u003ccode\u003eend\u003c/code\u003e MVar.\n\u003c/p\u003e",
          "module": "Orc.Combinators",
          "name": "zipp",
          "package": "orc",
          "signature": "MVar (Maybe a) -\u003e MVar (Maybe b) -\u003e MVar () -\u003e Orc (a, b)",
          "source": "src/Orc-Combinators.html#zipp",
          "type": "function"
        },
        "index": {
          "description": "Like echo repeatedly reads values from the pvals and qvals MVar returning tuples of the values until one MVar is exhausted When there are no more values to be returned fills the end MVar",
          "hierarchy": "Orc Combinators",
          "module": "Orc.Combinators",
          "name": "zipp",
          "normalized": "MVar(Maybe a)-\u003eMVar(Maybe b)-\u003eMVar()-\u003eOrc(a,b)",
          "package": "orc",
          "signature": "MVar(Maybe a)-\u003eMVar(Maybe b)-\u003eMVar()-\u003eOrc(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:zipp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive combinators for the Orc EDSL in Haskell.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Orc.Monad",
          "name": "Monad",
          "package": "orc",
          "source": "src/Orc-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive combinators for the Orc EDSL in Haskell",
          "hierarchy": "Orc Monad",
          "module": "Orc.Monad",
          "name": "Monad",
          "package": "orc",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for many-valued concurrency, external actions and managed\n resources.  An expression of type \u003ccode\u003eOrc a\u003c/code\u003e may perform many actions\n and return many results of type \u003ccode\u003ea\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance does\n not obey the Right-Zero law (\u003ccode\u003ep \u003e\u003e stop /= stop\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Orc.Monad",
          "name": "Orc",
          "package": "orc",
          "source": "src/Orc-Monad.html#Orc",
          "type": "data"
        },
        "index": {
          "description": "monad for many-valued concurrency external actions and managed resources An expression of type Orc may perform many actions and return many results of type The MonadPlus instance does not obey the Right-Zero law stop stop",
          "hierarchy": "Orc Monad",
          "module": "Orc.Monad",
          "name": "Orc",
          "package": "orc",
          "partial": "Orc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#t:Orc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBiased choice operator (pronounced and-then) that performs the\n action (and returns all the results) of \u003ccode\u003ep\u003c/code\u003e first, and then once done\n performs the action of \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Orc.Monad",
          "name": "(\u003c+\u003e)",
          "package": "orc",
          "signature": "Orc a -\u003e Orc a -\u003e Orc a",
          "source": "src/Orc-Monad.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Biased choice operator pronounced and-then that performs the action and returns all the results of first and then once done performs the action of",
          "hierarchy": "Orc Monad",
          "module": "Orc.Monad",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Orc a-\u003eOrc a-\u003eOrc a",
          "package": "orc",
          "signature": "Orc a-\u003eOrc a-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediately fires up a thread for \u003ccode\u003ep\u003c/code\u003e, and then returns a handle to\n the first result of that thread which is also of type \u003ccode\u003eOrc a\u003c/code\u003e.  An\n invocation to \u003ccode\u003e\u003ca\u003eeagerly\u003c/a\u003e\u003c/code\u003e is non-blocking, while an invocation of the\n resulting handle is blocking.  \u003ccode\u003e\u003ca\u003eeagerly\u003c/a\u003e\u003c/code\u003e satisfies the following\n laws:\n\u003c/p\u003e\u003cp\u003ePar-eagerly:\n\u003c/p\u003e\u003cpre\u003e eagerly p \u003e\u003e= (\\x -\u003e k x \u003c|\u003e h)\n == (eagerly p \u003e\u003e= k) \u003c|\u003e h\n\u003c/pre\u003e\u003cp\u003eEagerly-swap:\n\u003c/p\u003e\u003cpre\u003e do y \u003c- eagerly p\n    x \u003c- eagerly q\n    k x y\n == do x \u003c- eagerly q\n       y \u003c- eagerly p\n       k x y\n\u003c/pre\u003e\u003cp\u003eEagerly-IO:\n\u003c/p\u003e\u003cpre\u003e eagerly (liftIO m) \u003e\u003e p == (liftIO m \u003e\u003e stop) \u003c|\u003e p\n\u003c/pre\u003e",
          "module": "Orc.Monad",
          "name": "eagerly",
          "package": "orc",
          "signature": "Orc a -\u003e Orc (Orc a)",
          "source": "src/Orc-Monad.html#eagerly",
          "type": "function"
        },
        "index": {
          "description": "Immediately fires up thread for and then returns handle to the first result of that thread which is also of type Orc An invocation to eagerly is non-blocking while an invocation of the resulting handle is blocking eagerly satisfies the following laws Par-eagerly eagerly eagerly Eagerly-swap do eagerly eagerly do eagerly eagerly Eagerly-IO eagerly liftIO liftIO stop",
          "hierarchy": "Orc Monad",
          "module": "Orc.Monad",
          "name": "eagerly",
          "normalized": "Orc a-\u003eOrc(Orc a)",
          "package": "orc",
          "signature": "Orc a-\u003eOrc(Orc a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:eagerly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an Orc computation, discarding the (many) results of the\n computation.  See \u003ccode\u003ecollect\u003c/code\u003e on a mechanism for collecting the results\n of a computation into a list, which may then be passed to another IO\n thread.\n\u003c/p\u003e",
          "module": "Orc.Monad",
          "name": "runOrc",
          "package": "orc",
          "signature": "Orc a -\u003e IO ()",
          "source": "src/Orc-Monad.html#runOrc",
          "type": "function"
        },
        "index": {
          "description": "Runs an Orc computation discarding the many results of the computation See collect on mechanism for collecting the results of computation into list which may then be passed to another IO thread",
          "hierarchy": "Orc Monad",
          "module": "Orc.Monad",
          "name": "runOrc",
          "normalized": "Orc a-\u003eIO()",
          "package": "orc",
          "partial": "Orc",
          "signature": "Orc a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:runOrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinish the local thread of operations, so that anything sequenced\n afterwards is not executed.  It satisfies the following law:\n \u003ccode\u003estop \u003e\u003e= k == stop\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Orc.Monad",
          "name": "stop",
          "package": "orc",
          "signature": "Orc a",
          "source": "src/Orc-Monad.html#stop",
          "type": "function"
        },
        "index": {
          "description": "Finish the local thread of operations so that anything sequenced afterwards is not executed It satisfies the following law stop stop",
          "hierarchy": "Orc Monad",
          "module": "Orc.Monad",
          "name": "stop",
          "package": "orc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alternate mechanism for \u003ccode\u003e\u003ca\u003eeagerly\u003c/a\u003e\u003c/code\u003e, it fires up a thread for \u003ccode\u003ep\u003c/code\u003e\n and returns a lazy thunk that contains the single (trimmed) result\n of the computation.  Be careful to use this function with \u003ccode\u003epublish\u003c/code\u003e\n when these lazy values need to be fully evaluated before proceeding\n further.  For example, the following code succeeds immediately:\n\u003c/p\u003e\u003cpre\u003e do x \u003c- val p\n    return x\n\u003c/pre\u003e\u003cp\u003eWhereas this code waits until \u003ccode\u003ep\u003c/code\u003e has generated one result before\n returning:\n\u003c/p\u003e\u003cpre\u003e do x \u003c- val p\n    publish p\n\u003c/pre\u003e",
          "module": "Orc.Monad",
          "name": "val",
          "package": "orc",
          "signature": "Orc a -\u003e Orc a",
          "source": "src/Orc-Monad.html#val",
          "type": "function"
        },
        "index": {
          "description": "An alternate mechanism for eagerly it fires up thread for and returns lazy thunk that contains the single trimmed result of the computation Be careful to use this function with publish when these lazy values need to be fully evaluated before proceeding further For example the following code succeeds immediately do val return Whereas this code waits until has generated one result before returning do val publish",
          "hierarchy": "Orc Monad",
          "module": "Orc.Monad",
          "name": "val",
          "normalized": "Orc a-\u003eOrc a",
          "package": "orc",
          "signature": "Orc a-\u003eOrc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Orc",
          "name": "Orc",
          "package": "orc",
          "source": "src/Orc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Orc",
          "module": "Orc",
          "name": "Orc",
          "package": "orc",
          "partial": "Orc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/orc/docs/Orc.html#"
      }
    }
  ]
]