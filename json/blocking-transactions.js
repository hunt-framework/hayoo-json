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
        "word": "blocking-transactions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComposable blocking transactions, based on the\n blog post:\n \u003ca\u003ehttp://blog.downstairspeople.org/2010/06/06/composable-blocking-transactions/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "BlockingTransactions",
          "package": "blocking-transactions",
          "source": "src/BlockingTransactions-BlockingTransactions.html",
          "type": "module"
        },
        "index": {
          "description": "Composable blocking transactions based on the blog post http blog.downstairspeople.org composable-blocking-transactions",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "BlockingTransactions",
          "package": "blocking-transactions",
          "partial": "Blocking Transactions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe blocking transaction arrow.  The semantics are\n identical to the equivalent operations on the\n monadic interface.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "BTA",
          "package": "blocking-transactions",
          "source": "src/BlockingTransactions-BlockingTransactions.html#BTA",
          "type": "data"
        },
        "index": {
          "description": "The blocking transaction arrow The semantics are identical to the equivalent operations on the monadic interface",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "BTA",
          "package": "blocking-transactions",
          "partial": "BTA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#t:BTA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe blocking transaction monad.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "BTM",
          "package": "blocking-transactions",
          "source": "src/BlockingTransactions-BlockingTransactions.html#BTM",
          "type": "data"
        },
        "index": {
          "description": "The blocking transaction monad",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "BTM",
          "package": "blocking-transactions",
          "partial": "BTM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#t:BTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transactional variable with a blocking implementation.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "BVar",
          "package": "blocking-transactions",
          "source": "src/BlockingTransactions-BlockingTransactions.html#BVar",
          "type": "data"
        },
        "index": {
          "description": "transactional variable with blocking implementation",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "BVar",
          "package": "blocking-transactions",
          "partial": "BVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#t:BVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque value.  It can be modified and combined with other opaque values,\n but not observed.\n\u003c/p\u003e\u003cp\u003eThe type variable \u003ccode\u003ee\u003c/code\u003e binds the value to the monadic context in which it\n occurs, (this is identical to the \u003ccode\u003erunST\u003c/code\u003e existential type trick).\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "Value",
          "package": "blocking-transactions",
          "source": "src/BlockingTransactions-BlockingTransactions.html#Value",
          "type": "data"
        },
        "index": {
          "description": "An opaque value It can be modified and combined with other opaque values but not observed The type variable binds the value to the monadic context in which it occurs this is identical to the runST existential type trick",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "Value",
          "package": "blocking-transactions",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003ewriteBVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "fetchBVar",
          "package": "blocking-transactions",
          "signature": "BVar a -\u003e BTA () a",
          "source": "src/BlockingTransactions-BlockingTransactions.html#fetchBVar",
          "type": "function"
        },
        "index": {
          "description": "As writeBVar",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "fetchBVar",
          "normalized": "BVar a-\u003eBTA()a",
          "package": "blocking-transactions",
          "partial": "BVar",
          "signature": "BVar a-\u003eBTA()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:fetchBVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a transaction using only a single variable.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "modifyBVar",
          "package": "blocking-transactions",
          "signature": "BVar a -\u003e (a -\u003e (a, b)) -\u003e IO b",
          "source": "src/BlockingTransactions-BlockingTransactions.html#modifyBVar",
          "type": "function"
        },
        "index": {
          "description": "Perform transaction using only single variable",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "modifyBVar",
          "normalized": "BVar a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "package": "blocking-transactions",
          "partial": "BVar",
          "signature": "BVar a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:modifyBVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new transactional variable.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "newBVar",
          "package": "blocking-transactions",
          "signature": "a -\u003e IO (BVar a)",
          "source": "src/BlockingTransactions-BlockingTransactions.html#newBVar",
          "type": "function"
        },
        "index": {
          "description": "Construct new transactional variable",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "newBVar",
          "normalized": "a-\u003eIO(BVar a)",
          "package": "blocking-transactions",
          "partial": "BVar",
          "signature": "a-\u003eIO(BVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:newBVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObserve the contents of a transactional variable.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "peekBVar",
          "package": "blocking-transactions",
          "signature": "BVar a -\u003e IO a",
          "source": "src/BlockingTransactions-BlockingTransactions.html#peekBVar",
          "type": "function"
        },
        "index": {
          "description": "Observe the contents of transactional variable",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "peekBVar",
          "normalized": "BVar a-\u003eIO a",
          "package": "blocking-transactions",
          "partial": "BVar",
          "signature": "BVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:peekBVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-off write to a transactional variable.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "pokeBVar",
          "package": "blocking-transactions",
          "signature": "BVar a -\u003e a -\u003e IO ()",
          "source": "src/BlockingTransactions-BlockingTransactions.html#pokeBVar",
          "type": "function"
        },
        "index": {
          "description": "One-off write to transactional variable",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "pokeBVar",
          "normalized": "BVar a-\u003ea-\u003eIO()",
          "package": "blocking-transactions",
          "partial": "BVar",
          "signature": "BVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:pokeBVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from a variable.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "readBVar",
          "package": "blocking-transactions",
          "signature": "BVar a -\u003e BTM e (Value e a)",
          "source": "src/BlockingTransactions-BlockingTransactions.html#readBVar",
          "type": "function"
        },
        "index": {
          "description": "Read from variable",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "readBVar",
          "normalized": "BVar a-\u003eBTM b(Value b a)",
          "package": "blocking-transactions",
          "partial": "BVar",
          "signature": "BVar a-\u003eBTM e(Value e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:readBVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElectively retry.  This will restore all variables to their\n state before the transaction began, and listen for a change\n to any variable in the working set before trying the\n transaction again.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "retry",
          "package": "blocking-transactions",
          "signature": "BTM e (Value e ())",
          "source": "src/BlockingTransactions-BlockingTransactions.html#retry",
          "type": "function"
        },
        "index": {
          "description": "Electively retry This will restore all variables to their state before the transaction began and listen for change to any variable in the working set before trying the transaction again",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "retry",
          "normalized": "BTM a(Value a())",
          "package": "blocking-transactions",
          "signature": "BTM e(Value e())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "retryUnless",
          "package": "blocking-transactions",
          "signature": "BTA Bool ()",
          "source": "src/BlockingTransactions-BlockingTransactions.html#retryUnless",
          "type": "function"
        },
        "index": {
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "retryUnless",
          "normalized": "BTA Bool()",
          "package": "blocking-transactions",
          "partial": "Unless",
          "signature": "BTA Bool()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:retryUnless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "retryWhen",
          "package": "blocking-transactions",
          "signature": "BTA Bool ()",
          "source": "src/BlockingTransactions-BlockingTransactions.html#retryWhen",
          "type": "function"
        },
        "index": {
          "description": "As retry",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "retryWhen",
          "normalized": "BTA Bool()",
          "package": "blocking-transactions",
          "partial": "When",
          "signature": "BTA Bool()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:retryWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "runBTA",
          "package": "blocking-transactions",
          "signature": "BTA a b -\u003e a -\u003e IO b",
          "source": "src/BlockingTransactions-BlockingTransactions.html#runBTA",
          "type": "function"
        },
        "index": {
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "runBTA",
          "normalized": "BTA a b-\u003ea-\u003eIO b",
          "package": "blocking-transactions",
          "partial": "BTA",
          "signature": "BTA a b-\u003ea-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:runBTA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit a blocking transaction.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "runBTM",
          "package": "blocking-transactions",
          "signature": "(forall e.  BTM e (Value e a)) -\u003e IO a",
          "source": "src/BlockingTransactions-BlockingTransactions.html#runBTM",
          "type": "function"
        },
        "index": {
          "description": "Commit blocking transaction",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "runBTM",
          "normalized": "(a b BTM c(Value c d))-\u003eIO d",
          "package": "blocking-transactions",
          "partial": "BTM",
          "signature": "(forall e. BTM e(Value e a))-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:runBTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003ereadBVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "storeBVar",
          "package": "blocking-transactions",
          "signature": "BVar a -\u003e BTA a ()",
          "source": "src/BlockingTransactions-BlockingTransactions.html#storeBVar",
          "type": "function"
        },
        "index": {
          "description": "As readBVar",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "storeBVar",
          "normalized": "BVar a-\u003eBTA a()",
          "package": "blocking-transactions",
          "partial": "BVar",
          "signature": "BVar a-\u003eBTA a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:storeBVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlow control.  Skip the critical section if the predicate is true.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "unless",
          "package": "blocking-transactions",
          "signature": "Value e Bool -\u003e BTM e (Value e ()) -\u003e BTM e (Value e ())",
          "source": "src/BlockingTransactions-BlockingTransactions.html#unless",
          "type": "function"
        },
        "index": {
          "description": "Flow control Skip the critical section if the predicate is true",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "unless",
          "normalized": "Value a Bool-\u003eBTM a(Value a())-\u003eBTM a(Value a())",
          "package": "blocking-transactions",
          "signature": "Value e Bool-\u003eBTM e(Value e())-\u003eBTM e(Value e())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlow control.  Skip the critical section if the predicate is false.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "when",
          "package": "blocking-transactions",
          "signature": "Value e Bool -\u003e BTM e (Value e ()) -\u003e BTM e (Value e ())",
          "source": "src/BlockingTransactions-BlockingTransactions.html#when",
          "type": "function"
        },
        "index": {
          "description": "Flow control Skip the critical section if the predicate is false",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "when",
          "normalized": "Value a Bool-\u003eBTM a(Value a())-\u003eBTM a(Value a())",
          "package": "blocking-transactions",
          "signature": "Value e Bool-\u003eBTM e(Value e())-\u003eBTM e(Value e())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to a variable.\n\u003c/p\u003e",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "writeBVar",
          "package": "blocking-transactions",
          "signature": "BVar a -\u003e Value e a -\u003e BTM e (Value e ())",
          "source": "src/BlockingTransactions-BlockingTransactions.html#writeBVar",
          "type": "function"
        },
        "index": {
          "description": "Write to variable",
          "hierarchy": "BlockingTransactions BlockingTransactions",
          "module": "BlockingTransactions.BlockingTransactions",
          "name": "writeBVar",
          "normalized": "BVar a-\u003eValue b a-\u003eBTM b(Value b())",
          "package": "blocking-transactions",
          "partial": "BVar",
          "signature": "BVar a-\u003eValue e a-\u003eBTM e(Value e())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blocking-transactions/docs/BlockingTransactions-BlockingTransactions.html#v:writeBVar"
      }
    }
  ]
]