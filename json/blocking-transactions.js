[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComposable blocking transactions, based on the\n blog post:\n \u003ca\u003ehttp://blog.downstairspeople.org/2010/06/06/composable-blocking-transactions/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "module",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html",
        "fct-type": "module",
        "title": "BlockingTransactions"
      },
      "index": {
        "description": "Composable blocking transactions based on the blog post http blog.downstairspeople.org composable-blocking-transactions",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "BlockingTransactions",
        "normalized": "",
        "package": "blocking-transactions",
        "partial": "Blocking Transactions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#t:BTA",
      "description": {
        "fct-descr": "\u003cp\u003eThe blocking transaction arrow.  The semantics are\n identical to the equivalent operations on the\n monadic interface.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "data",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#BTA",
        "fct-type": "data",
        "title": "BTA"
      },
      "index": {
        "description": "The blocking transaction arrow The semantics are identical to the equivalent operations on the monadic interface",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "BTA",
        "normalized": "",
        "package": "blocking-transactions",
        "partial": "BTA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#t:BTM",
      "description": {
        "fct-descr": "\u003cp\u003eThe blocking transaction monad.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "data",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#BTM",
        "fct-type": "data",
        "title": "BTM"
      },
      "index": {
        "description": "The blocking transaction monad",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "BTM",
        "normalized": "",
        "package": "blocking-transactions",
        "partial": "BTM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#t:BVar",
      "description": {
        "fct-descr": "\u003cp\u003eA transactional variable with a blocking implementation.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "data",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#BVar",
        "fct-type": "data",
        "title": "BVar"
      },
      "index": {
        "description": "transactional variable with blocking implementation",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "BVar",
        "normalized": "",
        "package": "blocking-transactions",
        "partial": "BVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque value.  It can be modified and combined with other opaque values,\n but not observed.\n\u003c/p\u003e\u003cp\u003eThe type variable \u003ccode\u003ee\u003c/code\u003e binds the value to the monadic context in which it\n occurs, (this is identical to the \u003ccode\u003erunST\u003c/code\u003e existential type trick).\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "data",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "An opaque value It can be modified and combined with other opaque values but not observed The type variable binds the value to the monadic context in which it occurs this is identical to the runST existential type trick",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "Value",
        "normalized": "",
        "package": "blocking-transactions",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:fetchBVar",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003ewriteBVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BVar a -\u003e BTA () a",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#fetchBVar",
        "fct-type": "function",
        "title": "fetchBVar"
      },
      "index": {
        "description": "As writeBVar",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "fetchBVar",
        "normalized": "BVar a-\u003eBTA()a",
        "package": "blocking-transactions",
        "partial": "BVar",
        "signature": "BVar a-\u003eBTA()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:modifyBVar",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a transaction using only a single variable.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BVar a -\u003e (a -\u003e (a, b)) -\u003e IO b",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#modifyBVar",
        "fct-type": "function",
        "title": "modifyBVar"
      },
      "index": {
        "description": "Perform transaction using only single variable",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "modifyBVar",
        "normalized": "BVar a-\u003e(a-\u003e(a,b))-\u003eIO b",
        "package": "blocking-transactions",
        "partial": "BVar",
        "signature": "BVar a-\u003e(a-\u003e(a,b))-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:newBVar",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new transactional variable.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "a -\u003e IO (BVar a)",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#newBVar",
        "fct-type": "function",
        "title": "newBVar"
      },
      "index": {
        "description": "Construct new transactional variable",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "newBVar",
        "normalized": "a-\u003eIO(BVar a)",
        "package": "blocking-transactions",
        "partial": "BVar",
        "signature": "a-\u003eIO(BVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:peekBVar",
      "description": {
        "fct-descr": "\u003cp\u003eObserve the contents of a transactional variable.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BVar a -\u003e IO a",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#peekBVar",
        "fct-type": "function",
        "title": "peekBVar"
      },
      "index": {
        "description": "Observe the contents of transactional variable",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "peekBVar",
        "normalized": "BVar a-\u003eIO a",
        "package": "blocking-transactions",
        "partial": "BVar",
        "signature": "BVar a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:pokeBVar",
      "description": {
        "fct-descr": "\u003cp\u003eOne-off write to a transactional variable.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BVar a -\u003e a -\u003e IO ()",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#pokeBVar",
        "fct-type": "function",
        "title": "pokeBVar"
      },
      "index": {
        "description": "One-off write to transactional variable",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "pokeBVar",
        "normalized": "BVar a-\u003ea-\u003eIO()",
        "package": "blocking-transactions",
        "partial": "BVar",
        "signature": "BVar a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:readBVar",
      "description": {
        "fct-descr": "\u003cp\u003eRead from a variable.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BVar a -\u003e BTM e (Value e a)",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#readBVar",
        "fct-type": "function",
        "title": "readBVar"
      },
      "index": {
        "description": "Read from variable",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "readBVar",
        "normalized": "BVar a-\u003eBTM b(Value b a)",
        "package": "blocking-transactions",
        "partial": "BVar",
        "signature": "BVar a-\u003eBTM e(Value e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:retry",
      "description": {
        "fct-descr": "\u003cp\u003eElectively retry.  This will restore all variables to their\n state before the transaction began, and listen for a change\n to any variable in the working set before trying the\n transaction again.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BTM e (Value e ())",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#retry",
        "fct-type": "function",
        "title": "retry"
      },
      "index": {
        "description": "Electively retry This will restore all variables to their state before the transaction began and listen for change to any variable in the working set before trying the transaction again",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "retry",
        "normalized": "BTM a(Value a())",
        "package": "blocking-transactions",
        "partial": "",
        "signature": "BTM e(Value e())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:retryUnless",
      "description": {
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BTA Bool ()",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#retryUnless",
        "fct-type": "function",
        "title": "retryUnless"
      },
      "index": {
        "description": "",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "retryUnless",
        "normalized": "BTA Bool()",
        "package": "blocking-transactions",
        "partial": "Unless",
        "signature": "BTA Bool()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:retryWhen",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BTA Bool ()",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#retryWhen",
        "fct-type": "function",
        "title": "retryWhen"
      },
      "index": {
        "description": "As retry",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "retryWhen",
        "normalized": "BTA Bool()",
        "package": "blocking-transactions",
        "partial": "When",
        "signature": "BTA Bool()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:runBTA",
      "description": {
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BTA a b -\u003e a -\u003e IO b",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#runBTA",
        "fct-type": "function",
        "title": "runBTA"
      },
      "index": {
        "description": "",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "runBTA",
        "normalized": "BTA a b-\u003ea-\u003eIO b",
        "package": "blocking-transactions",
        "partial": "BTA",
        "signature": "BTA a b-\u003ea-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:runBTM",
      "description": {
        "fct-descr": "\u003cp\u003eCommit a blocking transaction.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "(forall e.  BTM e (Value e a)) -\u003e IO a",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#runBTM",
        "fct-type": "function",
        "title": "runBTM"
      },
      "index": {
        "description": "Commit blocking transaction",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "runBTM",
        "normalized": "(a b BTM c(Value c d))-\u003eIO d",
        "package": "blocking-transactions",
        "partial": "BTM",
        "signature": "(forall e. BTM e(Value e a))-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:storeBVar",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003ereadBVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BVar a -\u003e BTA a ()",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#storeBVar",
        "fct-type": "function",
        "title": "storeBVar"
      },
      "index": {
        "description": "As readBVar",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "storeBVar",
        "normalized": "BVar a-\u003eBTA a()",
        "package": "blocking-transactions",
        "partial": "BVar",
        "signature": "BVar a-\u003eBTA a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:unless",
      "description": {
        "fct-descr": "\u003cp\u003eFlow control.  Skip the critical section if the predicate is true.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "Value e Bool -\u003e BTM e (Value e ()) -\u003e BTM e (Value e ())",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#unless",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "Flow control Skip the critical section if the predicate is true",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "unless",
        "normalized": "Value a Bool-\u003eBTM a(Value a())-\u003eBTM a(Value a())",
        "package": "blocking-transactions",
        "partial": "",
        "signature": "Value e Bool-\u003eBTM e(Value e())-\u003eBTM e(Value e())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003eFlow control.  Skip the critical section if the predicate is false.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "Value e Bool -\u003e BTM e (Value e ()) -\u003e BTM e (Value e ())",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#when",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "Flow control Skip the critical section if the predicate is false",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "when",
        "normalized": "Value a Bool-\u003eBTM a(Value a())-\u003eBTM a(Value a())",
        "package": "blocking-transactions",
        "partial": "",
        "signature": "Value e Bool-\u003eBTM e(Value e())-\u003eBTM e(Value e())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:writeBVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite to a variable.\n\u003c/p\u003e",
        "fct-module": "BlockingTransactions.BlockingTransactions",
        "fct-package": "blocking-transactions",
        "fct-signature": "BVar a -\u003e Value e a -\u003e BTM e (Value e ())",
        "fct-source": "src/BlockingTransactions-BlockingTransactions.html#writeBVar",
        "fct-type": "function",
        "title": "writeBVar"
      },
      "index": {
        "description": "Write to variable",
        "hierarchy": "BlockingTransactions BlockingTransactions",
        "module": "BlockingTransactions.BlockingTransactions",
        "name": "writeBVar",
        "normalized": "BVar a-\u003eValue b a-\u003eBTM b(Value b())",
        "package": "blocking-transactions",
        "partial": "BVar",
        "signature": "BVar a-\u003eValue e a-\u003eBTM e(Value e())"
      }
    }
  }
]