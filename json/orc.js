[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHierarchical concurrent threads, which kill all of their descendants\n when they are killed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Hierarchical",
        "fct-package": "orc",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Hierarchical.html",
        "fct-type": "module",
        "title": "Hierarchical"
      },
      "index": {
        "description": "Hierarchical concurrent threads which kill all of their descendants when they are killed",
        "hierarchy": "Control Concurrent Hierarchical",
        "module": "Control.Concurrent.Hierarchical",
        "name": "Hierarchical",
        "normalized": "",
        "package": "orc",
        "partial": "Hierarchical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#t:Group",
      "description": {
        "fct-descr": "\u003cp\u003eA thread \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e keeps tracks of its inhabitants, which may be\n threads or other \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Hierarchical",
        "fct-package": "orc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Hierarchical.html#Group",
        "fct-type": "type",
        "title": "Group"
      },
      "index": {
        "description": "thread Group keeps tracks of its inhabitants which may be threads or other Group",
        "hierarchy": "Control Concurrent Hierarchical",
        "module": "Control.Concurrent.Hierarchical",
        "name": "Group",
        "normalized": "",
        "package": "orc",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#t:HIO",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHIO\u003c/a\u003e\u003c/code\u003e monad is simply the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad augmented with an\n environment that tracks the current thread \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e.  This permits us\n to keep track of forked threads and kill them en mass when an\n ancestor is killed.  The \u003ccode\u003e\u003ca\u003eHIO\u003c/a\u003e\u003c/code\u003e monad is an instance of \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e, so\n arbitrary \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions may be embedded in it; however, the user is\n advised that any action may be summarily killed, and thus it is of\n extra importance that appropriate bracketing functions are used.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Hierarchical",
        "fct-package": "orc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Hierarchical.html#HIO",
        "fct-type": "data",
        "title": "HIO"
      },
      "index": {
        "description": "The HIO monad is simply the IO monad augmented with an environment that tracks the current thread Group This permits us to keep track of forked threads and kill them en mass when an ancestor is killed The HIO monad is an instance of MonadIO so arbitrary IO actions may be embedded in it however the user is advised that any action may be summarily killed and thus it is of extra importance that appropriate bracketing functions are used",
        "hierarchy": "Control Concurrent Hierarchical",
        "module": "Control.Concurrent.Hierarchical",
        "name": "HIO",
        "normalized": "",
        "package": "orc",
        "partial": "HIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eKill all threads which are descendants of a \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e and closes the\n group, disallowing new threads or groups to be added to the group.\n Doesn't do anything if the group is already closed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Hierarchical",
        "fct-package": "orc",
        "fct-signature": "Group -\u003e HIO ()",
        "fct-source": "src/Control-Concurrent-Hierarchical.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Kill all threads which are descendants of Group and closes the group disallowing new threads or groups to be added to the group Doesn do anything if the group is already closed",
        "hierarchy": "Control Concurrent Hierarchical",
        "module": "Control.Concurrent.Hierarchical",
        "name": "close",
        "normalized": "Group-\u003eHIO()",
        "package": "orc",
        "partial": "",
        "signature": "Group-\u003eHIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:finished",
      "description": {
        "fct-descr": "\u003cp\u003eBlocks until the \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ew\u003c/code\u003e is finished executing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Hierarchical",
        "fct-package": "orc",
        "fct-signature": "Group -\u003e HIO ()",
        "fct-source": "src/Control-Concurrent-Hierarchical.html#finished",
        "fct-type": "function",
        "title": "finished"
      },
      "index": {
        "description": "Blocks until the Group is finished executing",
        "hierarchy": "Control Concurrent Hierarchical",
        "module": "Control.Concurrent.Hierarchical",
        "name": "finished",
        "normalized": "Group-\u003eHIO()",
        "package": "orc",
        "partial": "",
        "signature": "Group-\u003eHIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eExplicitly sets the current \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e environment for a \u003ccode\u003e\u003ca\u003eHIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Hierarchical",
        "fct-package": "orc",
        "fct-signature": "Group -\u003e HIO a -\u003e HIO a",
        "fct-source": "src/Control-Concurrent-Hierarchical.html#local",
        "fct-type": "function",
        "title": "local"
      },
      "index": {
        "description": "Explicitly sets the current Group environment for HIO monad",
        "hierarchy": "Control Concurrent Hierarchical",
        "module": "Control.Concurrent.Hierarchical",
        "name": "local",
        "normalized": "Group-\u003eHIO a-\u003eHIO a",
        "package": "orc",
        "partial": "",
        "signature": "Group-\u003eHIO a-\u003eHIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:newGroup",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new thread group and registers the current environment's\n thread group in it.  If the current group is closed, immediately\n terminates execution of the current thread.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Hierarchical",
        "fct-package": "orc",
        "fct-signature": "HIO Group",
        "fct-source": "src/Control-Concurrent-Hierarchical.html#newGroup",
        "fct-type": "function",
        "title": "newGroup"
      },
      "index": {
        "description": "Creates new thread group and registers the current environment thread group in it If the current group is closed immediately terminates execution of the current thread",
        "hierarchy": "Control Concurrent Hierarchical",
        "module": "Control.Concurrent.Hierarchical",
        "name": "newGroup",
        "normalized": "",
        "package": "orc",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:newPrimGroup",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new, empty thread group.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Hierarchical",
        "fct-package": "orc",
        "fct-signature": "IO Group",
        "fct-source": "src/Control-Concurrent-Hierarchical.html#newPrimGroup",
        "fct-type": "function",
        "title": "newPrimGroup"
      },
      "index": {
        "description": "Creates new empty thread group",
        "hierarchy": "Control Concurrent Hierarchical",
        "module": "Control.Concurrent.Hierarchical",
        "name": "newPrimGroup",
        "normalized": "",
        "package": "orc",
        "partial": "Prim Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Control-Concurrent-Hierarchical.html#v:runHIO",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eHIO\u003c/a\u003e\u003c/code\u003e operation inside a new thread group that has no\n parent, and blocks until all subthreads of the operation are done\n executing.  If \u003ccode\u003ecountingThreads\u003c/code\u003e is \u003ccode\u003eTrue\u003c/code\u003e, it then prints some\n debugging information about the threads run (XXX: this seems\n suboptimal.)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Hierarchical",
        "fct-package": "orc",
        "fct-signature": "HIO b -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Hierarchical.html#runHIO",
        "fct-type": "function",
        "title": "runHIO"
      },
      "index": {
        "description": "Runs HIO operation inside new thread group that has no parent and blocks until all subthreads of the operation are done executing If countingThreads is True it then prints some debugging information about the threads run XXX this seems suboptimal",
        "hierarchy": "Control Concurrent Hierarchical",
        "module": "Control.Concurrent.Hierarchical",
        "name": "runHIO",
        "normalized": "HIO a-\u003eIO()",
        "package": "orc",
        "partial": "HIO",
        "signature": "HIO b-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#",
      "description": {
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "module",
        "fct-source": "src/Orc-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "orc",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:-60--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, pronounced or-else, which performs and returns\n the results of \u003ccode\u003ep\u003c/code\u003e, and if \u003ccode\u003ep\u003c/code\u003e produced no answers go on and performa\n dn return the results of \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc a -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#%3C%3F%3E",
        "fct-type": "function",
        "title": "(\u003c?\u003e)"
      },
      "index": {
        "description": "variant of pronounced or-else which performs and returns the results of and if produced no answers go on and performa dn return the results of",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "(\u003c?\u003e) \u003c?\u003e",
        "normalized": "Orc a-\u003eOrc a-\u003eOrc a",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eOrc a-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:butAfter",
      "description": {
        "fct-descr": "\u003cp\u003eImmediately executes the computation \u003ccode\u003ep\u003c/code\u003e, but if it hasn't returned\n a result in \u003ccode\u003et\u003c/code\u003e seconds, execute the computation \u003ccode\u003eq\u003c/code\u003e and return\n whichever computations returns a result first (killing the other\n thread).\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e (Float, Orc a) -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#butAfter",
        "fct-type": "function",
        "title": "butAfter"
      },
      "index": {
        "description": "Immediately executes the computation but if it hasn returned result in seconds execute the computation and return whichever computations returns result first killing the other thread",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "butAfter",
        "normalized": "Orc a-\u003e(Float,Orc a)-\u003eOrc a",
        "package": "orc",
        "partial": "After",
        "signature": "Orc a-\u003e(Float,Orc a)-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:collect",
      "description": {
        "fct-descr": "\u003cp\u003eCollects all of the values of the computation \u003ccode\u003ep\u003c/code\u003e and delivers them\n as a list when \u003ccode\u003ep\u003c/code\u003e is completed.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc [a]",
        "fct-source": "src/Orc-Combinators.html#collect",
        "fct-type": "function",
        "title": "collect"
      },
      "index": {
        "description": "Collects all of the values of the computation and delivers them as list when is completed",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "collect",
        "normalized": "Orc a-\u003eOrc[a]",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eOrc[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eFor each value produced by \u003ccode\u003ep\u003c/code\u003e, return a \u003ccode\u003eLeft a\u003c/code\u003e.  Once \u003ccode\u003ep\u003c/code\u003e has\n finished, return a \u003ccode\u003eRight Int\u003c/code\u003e containing the number of results\n produced.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc (Either a Int)",
        "fct-source": "src/Orc-Combinators.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "For each value produced by return Left Once has finished return Right Int containing the number of results produced",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "count",
        "normalized": "Orc a-\u003eOrc(Either a Int)",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eOrc(Either a Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:cut",
      "description": {
        "fct-descr": "\u003cp\u003eCut executes an orc expression, waits for the first result, and then\n suppresses the rest, including killing any threads involved\n in computing the remainder. \n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#cut",
        "fct-type": "function",
        "title": "cut"
      },
      "index": {
        "description": "Cut executes an orc expression waits for the first result and then suppresses the rest including killing any threads involved in computing the remainder",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "cut",
        "normalized": "Orc a-\u003eOrc a",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:delay",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a period of w seconds, then continue processing.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "a -\u003e Orc ()",
        "fct-source": "src/Orc-Combinators.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "Wait for period of seconds then continue processing",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "delay",
        "normalized": "a-\u003eOrc()",
        "package": "orc",
        "partial": "",
        "signature": "a-\u003eOrc()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:dropOrc",
      "description": {
        "fct-descr": "\u003cp\u003eDrops the first \u003ccode\u003en\u003c/code\u003e results of the computation \u003ccode\u003ep\u003c/code\u003e, and then\n returns the rest of the results.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Int -\u003e Orc a -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#dropOrc",
        "fct-type": "function",
        "title": "dropOrc"
      },
      "index": {
        "description": "Drops the first results of the computation and then returns the rest of the results",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "dropOrc",
        "normalized": "Int-\u003eOrc a-\u003eOrc a",
        "package": "orc",
        "partial": "Orc",
        "signature": "Int-\u003eOrc a-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:echo",
      "description": {
        "fct-descr": "\u003cp\u003eThe rough inverse of \u003ccode\u003e\u003ca\u003esandbox\u003c/a\u003e\u003c/code\u003e, repeatedly reads values from the\n \u003ccode\u003evals\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e until \u003ccode\u003ej\u003c/code\u003e values have been read or the \u003ccode\u003evals\u003c/code\u003e MVar is\n exhausted (a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is passed).  When there are no more values to\n be returned, fills the \u003ccode\u003eend\u003c/code\u003e MVar.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Int -\u003e MVar (Maybe a) -\u003e MVar () -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#echo",
        "fct-type": "function",
        "title": "echo"
      },
      "index": {
        "description": "The rough inverse of sandbox repeatedly reads values from the vals MVar until values have been read or the vals MVar is exhausted Nothing is passed When there are no more values to be returned fills the end MVar",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "echo",
        "normalized": "Int-\u003eMVar(Maybe a)-\u003eMVar()-\u003eOrc a",
        "package": "orc",
        "partial": "",
        "signature": "Int-\u003eMVar(Maybe a)-\u003eMVar()-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:liftList",
      "description": {
        "fct-descr": "\u003cp\u003eLifts a list into an Orc monad.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "[a] -\u003e list a",
        "fct-source": "src/Orc-Combinators.html#liftList",
        "fct-type": "function",
        "title": "liftList"
      },
      "index": {
        "description": "Lifts list into an Orc monad",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "liftList",
        "normalized": "[a]-\u003eb a",
        "package": "orc",
        "partial": "List",
        "signature": "[a]-\u003elist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:notBefore",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the computation \u003ccode\u003ep\u003c/code\u003e and returns its first result, but doesn't\n return before \u003ccode\u003ew\u003c/code\u003e seconds have elapsed.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Float -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#notBefore",
        "fct-type": "function",
        "title": "notBefore"
      },
      "index": {
        "description": "Runs the computation and returns its first result but doesn return before seconds have elapsed",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "notBefore",
        "normalized": "Orc a-\u003eFloat-\u003eOrc a",
        "package": "orc",
        "partial": "Before",
        "signature": "Orc a-\u003eFloat-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:onlyUntil",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the computation \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003edone\u003c/code\u003e.  Once \u003ccode\u003edone\u003c/code\u003e returns its\n first result, kill both computations and returns that result.  This\n discards the results of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc b -\u003e Orc b",
        "fct-source": "src/Orc-Combinators.html#onlyUntil",
        "fct-type": "function",
        "title": "onlyUntil"
      },
      "index": {
        "description": "Executes the computation and done Once done returns its first result kill both computations and returns that result This discards the results of",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "onlyUntil",
        "normalized": "Orc a-\u003eOrc b-\u003eOrc b",
        "package": "orc",
        "partial": "Until",
        "signature": "Orc a-\u003eOrc b-\u003eOrc b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:printOrc",
      "description": {
        "fct-descr": "\u003cp\u003eRuns an Orc computation, eagerly printing out the results of an Orc\n computation line-by-line.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e IO ()",
        "fct-source": "src/Orc-Combinators.html#printOrc",
        "fct-type": "function",
        "title": "printOrc"
      },
      "index": {
        "description": "Runs an Orc computation eagerly printing out the results of an Orc computation line-by-line",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "printOrc",
        "normalized": "Orc a-\u003eIO()",
        "package": "orc",
        "partial": "Orc",
        "signature": "Orc a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:prompt",
      "description": {
        "fct-descr": "\u003cp\u003ePrompts the user for a string.  Concurrency-safe.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "String -\u003e Orc String",
        "fct-source": "src/Orc-Combinators.html#prompt",
        "fct-type": "function",
        "title": "prompt"
      },
      "index": {
        "description": "Prompts the user for string Concurrency-safe",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "prompt",
        "normalized": "String-\u003eOrc String",
        "package": "orc",
        "partial": "",
        "signature": "String-\u003eOrc String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:publish",
      "description": {
        "fct-descr": "\u003cp\u003ePublish is a hyperstrict form of return. It is useful\n   for combining results from multiple \u003ccode\u003e\u003ca\u003eval\u003c/a\u003e\u003c/code\u003e computations, providing\n   a synchronization point. \n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "a -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#publish",
        "fct-type": "function",
        "title": "publish"
      },
      "index": {
        "description": "Publish is hyperstrict form of return It is useful for combining results from multiple val computations providing synchronization point",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "publish",
        "normalized": "a-\u003eOrc a",
        "package": "orc",
        "partial": "",
        "signature": "a-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:putStrLine",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a string and newline to standard output.  Concurrency-safe.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "String -\u003e Orc ()",
        "fct-source": "src/Orc-Combinators.html#putStrLine",
        "fct-type": "function",
        "title": "putStrLine"
      },
      "index": {
        "description": "Writes string and newline to standard output Concurrency-safe",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "putStrLine",
        "normalized": "String-\u003eOrc()",
        "package": "orc",
        "partial": "Str Line",
        "signature": "String-\u003eOrc()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:repeating",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly executes the computation \u003ccode\u003ep\u003c/code\u003e and returns its\n results.  \u003ccode\u003e\u003ca\u003erepeating\u003c/a\u003e\u003c/code\u003e works best when \u003ccode\u003ep\u003c/code\u003e is single-valued:\n if \u003ccode\u003ep\u003c/code\u003e is multivalued Orc will spawn a repeating thread for every\n result returned, resulting in an exponential blow-up of\n threads (XXX: I don't think this was actually intended.)\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#repeating",
        "fct-type": "function",
        "title": "repeating"
      },
      "index": {
        "description": "Repeatedly executes the computation and returns its results repeating works best when is single-valued if is multivalued Orc will spawn repeating thread for every result returned resulting in an exponential blow-up of threads XXX don think this was actually intended",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "repeating",
        "normalized": "Orc a-\u003eOrc a",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:runChan",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a computation \u003ccode\u003ep\u003c/code\u003e and writes its results to the channel \u003ccode\u003ech\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Chan a -\u003e Orc a -\u003e IO ()",
        "fct-source": "src/Orc-Combinators.html#runChan",
        "fct-type": "function",
        "title": "runChan"
      },
      "index": {
        "description": "Runs computation and writes its results to the channel ch",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "runChan",
        "normalized": "Chan a-\u003eOrc a-\u003eIO()",
        "package": "orc",
        "partial": "Chan",
        "signature": "Chan a-\u003eOrc a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:sandbox",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the computation \u003ccode\u003ep\u003c/code\u003e, and repeatedly puts its results (tagged\n with \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003evals\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.  Puts \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no\n results left.  Stops executing when the \u003ccode\u003eend\u003c/code\u003e MVar is filled.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e MVar (Maybe a) -\u003e MVar () -\u003e Orc ()",
        "fct-source": "src/Orc-Combinators.html#sandbox",
        "fct-type": "function",
        "title": "sandbox"
      },
      "index": {
        "description": "Runs the computation and repeatedly puts its results tagged with Just into the vals MVar Puts Nothing if there are no results left Stops executing when the end MVar is filled",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "sandbox",
        "normalized": "Orc a-\u003eMVar(Maybe a)-\u003eMVar()-\u003eOrc()",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eMVar(Maybe a)-\u003eMVar()-\u003eOrc()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:scan",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to the list scan function, but the order in which\n the combining function is applied to the results produced by\n \u003ccode\u003ep\u003c/code\u003e is nondeterministic.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "(a -\u003e s -\u003e s) -\u003e s -\u003e Orc a -\u003e Orc s",
        "fct-source": "src/Orc-Combinators.html#scan",
        "fct-type": "function",
        "title": "scan"
      },
      "index": {
        "description": "Analogous to the list scan function but the order in which the combining function is applied to the results produced by is nondeterministic",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "scan",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eOrc a-\u003eOrc b",
        "package": "orc",
        "partial": "",
        "signature": "(a-\u003es-\u003es)-\u003es-\u003eOrc a-\u003eOrc s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003eAlternate phrasing of \u003ccode\u003ereturn ()\u003c/code\u003e, which can be placed at the end\n of an Orc computation to signal that it has no more values to\n produce.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc ()",
        "fct-source": "src/Orc-Combinators.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "Alternate phrasing of return which can be placed at the end of an Orc computation to signal that it has no more values to produce",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "signal",
        "normalized": "Orc()",
        "package": "orc",
        "partial": "",
        "signature": "Orc()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:silent",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the computation \u003ccode\u003ep\u003c/code\u003e but suppresses its results.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc b",
        "fct-source": "src/Orc-Combinators.html#silent",
        "fct-type": "function",
        "title": "silent"
      },
      "index": {
        "description": "Executes the computation but suppresses its results",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "silent",
        "normalized": "Orc a-\u003eOrc b",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eOrc b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:sync",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the first result of \u003ccode\u003ep\u003c/code\u003e, the first result of\n \u003ccode\u003eq\u003c/code\u003e, and applies them to \u003ccode\u003ef\u003c/code\u003e.  The computations for \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e are\n run in parallel.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Orc a -\u003e Orc b -\u003e Orc c",
        "fct-source": "src/Orc-Combinators.html#sync",
        "fct-type": "function",
        "title": "sync"
      },
      "index": {
        "description": "Takes the first result of the first result of and applies them to The computations for and are run in parallel",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "sync",
        "normalized": "(a-\u003eb-\u003ec)-\u003eOrc a-\u003eOrc b-\u003eOrc c",
        "package": "orc",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eOrc a-\u003eOrc b-\u003eOrc c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:syncList",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a list of Orc computations \u003ccode\u003eps\u003c/code\u003e in parallel until they produce\n their first result, and returns a list of all these results.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "[Orc a] -\u003e Orc [a]",
        "fct-source": "src/Orc-Combinators.html#syncList",
        "fct-type": "function",
        "title": "syncList"
      },
      "index": {
        "description": "Runs list of Orc computations ps in parallel until they produce their first result and returns list of all these results",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "syncList",
        "normalized": "[Orc a]-\u003eOrc[a]",
        "package": "orc",
        "partial": "List",
        "signature": "[Orc a]-\u003eOrc[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:takeOrc",
      "description": {
        "fct-descr": "\u003cp\u003eList-like functions\n\u003c/p\u003e\u003cp\u003eRuns the computation \u003ccode\u003ep\u003c/code\u003e and returns the first \u003ccode\u003en\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Int -\u003e Orc a -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#takeOrc",
        "fct-type": "function",
        "title": "takeOrc"
      },
      "index": {
        "description": "List-like functions Runs the computation and returns the first results",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "takeOrc",
        "normalized": "Int-\u003eOrc a-\u003eOrc a",
        "package": "orc",
        "partial": "Orc",
        "signature": "Int-\u003eOrc a-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:timeout",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a computation \u003ccode\u003ep\u003c/code\u003e, but if it hasn't returned a result in\n \u003ccode\u003en\u003c/code\u003e seconds return \u003ccode\u003ea\u003c/code\u003e instead (killing the \u003ccode\u003ep\u003c/code\u003e computation).\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Float -\u003e a -\u003e Orc a -\u003e Orc a",
        "fct-source": "src/Orc-Combinators.html#timeout",
        "fct-type": "function",
        "title": "timeout"
      },
      "index": {
        "description": "Executes computation but if it hasn returned result in seconds return instead killing the computation",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "timeout",
        "normalized": "Float-\u003ea-\u003eOrc a-\u003eOrc a",
        "package": "orc",
        "partial": "",
        "signature": "Float-\u003ea-\u003eOrc a-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:zipOrc",
      "description": {
        "fct-descr": "\u003cp\u003eZips the results of two computations \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e.  When one\n computation finishes, kill the other.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc b -\u003e Orc (a, b)",
        "fct-source": "src/Orc-Combinators.html#zipOrc",
        "fct-type": "function",
        "title": "zipOrc"
      },
      "index": {
        "description": "Zips the results of two computations and When one computation finishes kill the other",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "zipOrc",
        "normalized": "Orc a-\u003eOrc b-\u003eOrc(a,b)",
        "package": "orc",
        "partial": "Orc",
        "signature": "Orc a-\u003eOrc b-\u003eOrc(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Combinators.html#v:zipp",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eecho\u003c/a\u003e\u003c/code\u003e, repeatedly reads values from the \u003ccode\u003epvals\u003c/code\u003e and \u003ccode\u003eqvals\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e, returning tuples of the values until one \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is exhausted.\n When there are no more values to be returned, fills the \u003ccode\u003eend\u003c/code\u003e MVar.\n\u003c/p\u003e",
        "fct-module": "Orc.Combinators",
        "fct-package": "orc",
        "fct-signature": "MVar (Maybe a) -\u003e MVar (Maybe b) -\u003e MVar () -\u003e Orc (a, b)",
        "fct-source": "src/Orc-Combinators.html#zipp",
        "fct-type": "function",
        "title": "zipp"
      },
      "index": {
        "description": "Like echo repeatedly reads values from the pvals and qvals MVar returning tuples of the values until one MVar is exhausted When there are no more values to be returned fills the end MVar",
        "hierarchy": "Orc Combinators",
        "module": "Orc.Combinators",
        "name": "zipp",
        "normalized": "MVar(Maybe a)-\u003eMVar(Maybe b)-\u003eMVar()-\u003eOrc(a,b)",
        "package": "orc",
        "partial": "",
        "signature": "MVar(Maybe a)-\u003eMVar(Maybe b)-\u003eMVar()-\u003eOrc(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive combinators for the Orc EDSL in Haskell.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Orc.Monad",
        "fct-package": "orc",
        "fct-signature": "module",
        "fct-source": "src/Orc-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "Primitive combinators for the Orc EDSL in Haskell",
        "hierarchy": "Orc Monad",
        "module": "Orc.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "orc",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#t:Orc",
      "description": {
        "fct-descr": "\u003cp\u003eA monad for many-valued concurrency, external actions and managed\n resources.  An expression of type \u003ccode\u003eOrc a\u003c/code\u003e may perform many actions\n and return many results of type \u003ccode\u003ea\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance does\n not obey the Right-Zero law (\u003ccode\u003ep \u003e\u003e stop /= stop\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Orc.Monad",
        "fct-package": "orc",
        "fct-signature": "data",
        "fct-source": "src/Orc-Monad.html#Orc",
        "fct-type": "data",
        "title": "Orc"
      },
      "index": {
        "description": "monad for many-valued concurrency external actions and managed resources An expression of type Orc may perform many actions and return many results of type The MonadPlus instance does not obey the Right-Zero law stop stop",
        "hierarchy": "Orc Monad",
        "module": "Orc.Monad",
        "name": "Orc",
        "normalized": "",
        "package": "orc",
        "partial": "Orc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBiased choice operator (pronounced and-then) that performs the\n action (and returns all the results) of \u003ccode\u003ep\u003c/code\u003e first, and then once done\n performs the action of \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Orc.Monad",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc a -\u003e Orc a",
        "fct-source": "src/Orc-Monad.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Biased choice operator pronounced and-then that performs the action and returns all the results of first and then once done performs the action of",
        "hierarchy": "Orc Monad",
        "module": "Orc.Monad",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Orc a-\u003eOrc a-\u003eOrc a",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eOrc a-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:eagerly",
      "description": {
        "fct-descr": "\u003cp\u003eImmediately fires up a thread for \u003ccode\u003ep\u003c/code\u003e, and then returns a handle to\n the first result of that thread which is also of type \u003ccode\u003eOrc a\u003c/code\u003e.  An\n invocation to \u003ccode\u003e\u003ca\u003eeagerly\u003c/a\u003e\u003c/code\u003e is non-blocking, while an invocation of the\n resulting handle is blocking.  \u003ccode\u003e\u003ca\u003eeagerly\u003c/a\u003e\u003c/code\u003e satisfies the following\n laws:\n\u003c/p\u003e\u003cp\u003ePar-eagerly:\n\u003c/p\u003e\u003cpre\u003e eagerly p \u003e\u003e= (\\x -\u003e k x \u003c|\u003e h)\n == (eagerly p \u003e\u003e= k) \u003c|\u003e h\n\u003c/pre\u003e\u003cp\u003eEagerly-swap:\n\u003c/p\u003e\u003cpre\u003e do y \u003c- eagerly p\n    x \u003c- eagerly q\n    k x y\n == do x \u003c- eagerly q\n       y \u003c- eagerly p\n       k x y\n\u003c/pre\u003e\u003cp\u003eEagerly-IO:\n\u003c/p\u003e\u003cpre\u003e eagerly (liftIO m) \u003e\u003e p == (liftIO m \u003e\u003e stop) \u003c|\u003e p\n\u003c/pre\u003e",
        "fct-module": "Orc.Monad",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc (Orc a)",
        "fct-source": "src/Orc-Monad.html#eagerly",
        "fct-type": "function",
        "title": "eagerly"
      },
      "index": {
        "description": "Immediately fires up thread for and then returns handle to the first result of that thread which is also of type Orc An invocation to eagerly is non-blocking while an invocation of the resulting handle is blocking eagerly satisfies the following laws Par-eagerly eagerly eagerly Eagerly-swap do eagerly eagerly do eagerly eagerly Eagerly-IO eagerly liftIO liftIO stop",
        "hierarchy": "Orc Monad",
        "module": "Orc.Monad",
        "name": "eagerly",
        "normalized": "Orc a-\u003eOrc(Orc a)",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eOrc(Orc a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:runOrc",
      "description": {
        "fct-descr": "\u003cp\u003eRuns an Orc computation, discarding the (many) results of the\n computation.  See \u003ccode\u003ecollect\u003c/code\u003e on a mechanism for collecting the results\n of a computation into a list, which may then be passed to another IO\n thread.\n\u003c/p\u003e",
        "fct-module": "Orc.Monad",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e IO ()",
        "fct-source": "src/Orc-Monad.html#runOrc",
        "fct-type": "function",
        "title": "runOrc"
      },
      "index": {
        "description": "Runs an Orc computation discarding the many results of the computation See collect on mechanism for collecting the results of computation into list which may then be passed to another IO thread",
        "hierarchy": "Orc Monad",
        "module": "Orc.Monad",
        "name": "runOrc",
        "normalized": "Orc a-\u003eIO()",
        "package": "orc",
        "partial": "Orc",
        "signature": "Orc a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003eFinish the local thread of operations, so that anything sequenced\n afterwards is not executed.  It satisfies the following law:\n \u003ccode\u003estop \u003e\u003e= k == stop\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Orc.Monad",
        "fct-package": "orc",
        "fct-signature": "Orc a",
        "fct-source": "src/Orc-Monad.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "Finish the local thread of operations so that anything sequenced afterwards is not executed It satisfies the following law stop stop",
        "hierarchy": "Orc Monad",
        "module": "Orc.Monad",
        "name": "stop",
        "normalized": "",
        "package": "orc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc-Monad.html#v:val",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternate mechanism for \u003ccode\u003e\u003ca\u003eeagerly\u003c/a\u003e\u003c/code\u003e, it fires up a thread for \u003ccode\u003ep\u003c/code\u003e\n and returns a lazy thunk that contains the single (trimmed) result\n of the computation.  Be careful to use this function with \u003ccode\u003epublish\u003c/code\u003e\n when these lazy values need to be fully evaluated before proceeding\n further.  For example, the following code succeeds immediately:\n\u003c/p\u003e\u003cpre\u003e do x \u003c- val p\n    return x\n\u003c/pre\u003e\u003cp\u003eWhereas this code waits until \u003ccode\u003ep\u003c/code\u003e has generated one result before\n returning:\n\u003c/p\u003e\u003cpre\u003e do x \u003c- val p\n    publish p\n\u003c/pre\u003e",
        "fct-module": "Orc.Monad",
        "fct-package": "orc",
        "fct-signature": "Orc a -\u003e Orc a",
        "fct-source": "src/Orc-Monad.html#val",
        "fct-type": "function",
        "title": "val"
      },
      "index": {
        "description": "An alternate mechanism for eagerly it fires up thread for and returns lazy thunk that contains the single trimmed result of the computation Be careful to use this function with publish when these lazy values need to be fully evaluated before proceeding further For example the following code succeeds immediately do val return Whereas this code waits until has generated one result before returning do val publish",
        "hierarchy": "Orc Monad",
        "module": "Orc.Monad",
        "name": "val",
        "normalized": "Orc a-\u003eOrc a",
        "package": "orc",
        "partial": "",
        "signature": "Orc a-\u003eOrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/orc/docs/Orc.html#",
      "description": {
        "fct-module": "Orc",
        "fct-package": "orc",
        "fct-signature": "module",
        "fct-source": "src/Orc.html",
        "fct-type": "module",
        "title": "Orc"
      },
      "index": {
        "description": "",
        "hierarchy": "Orc",
        "module": "Orc",
        "name": "Orc",
        "normalized": "",
        "package": "orc",
        "partial": "Orc",
        "signature": ""
      }
    }
  }
]