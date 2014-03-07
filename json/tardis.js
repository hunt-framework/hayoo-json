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
        "word": "tardis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe class definition of a Tardis,\n as well as a few straightforward combinators\n based on its primitives.\n\u003c/p\u003e\u003cp\u003eSee Control.Monad.Tardis for the general explanation\n of what a Tardis is and how to use it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "Class",
          "package": "tardis",
          "source": "src/Control-Monad-Tardis-Class.html",
          "type": "module"
        },
        "index": {
          "description": "The class definition of Tardis as well as few straightforward combinators based on its primitives See Control.Monad.Tardis for the general explanation of what Tardis is and how to use it",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "Class",
          "package": "tardis",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Tardis is parameterized by two state streams:\n a 'backwards-traveling' state and a 'forwards-traveling' state.\n This library consistently puts the backwards-traveling state first\n whenever the two are seen together.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n (\u003ca\u003etardis\u003c/a\u003e) or\n (\u003ca\u003egetPast\u003c/a\u003e, \u003ca\u003egetFuture\u003c/a\u003e, \u003ca\u003esendPast\u003c/a\u003e, and \u003ca\u003esendFuture\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "MonadTardis",
          "package": "tardis",
          "source": "src/Control-Monad-Tardis-Class.html#MonadTardis",
          "type": "class"
        },
        "index": {
          "description": "Tardis is parameterized by two state streams backwards-traveling state and forwards-traveling state This library consistently puts the backwards-traveling state first whenever the two are seen together Minimal complete definition tardis or getPast getFuture sendPast and sendFuture",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "MonadTardis",
          "package": "tardis",
          "partial": "Monad Tardis",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#t:MonadTardis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current value of the 'backwards-traveling' state,\n which therefore came backwards from the future.\n You can think of backwards-traveling state as traveling\n \u003ccode\u003eupwards\u003c/code\u003e through your code.\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "getFuture",
          "package": "tardis",
          "signature": "m bw",
          "source": "src/Control-Monad-Tardis-Class.html#getFuture",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the current value of the backwards-traveling state which therefore came backwards from the future You can think of backwards-traveling state as traveling upwards through your code",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "getFuture",
          "package": "tardis",
          "partial": "Future",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:getFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current value of the 'forwards-traveling' state,\n which therefore came forwards from the past.\n You can think of forwards-traveling state as traveling\n \u003ccode\u003edownwards\u003c/code\u003e through your code.\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "getPast",
          "package": "tardis",
          "signature": "m fw",
          "source": "src/Control-Monad-Tardis-Class.html#getPast",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the current value of the forwards-traveling state which therefore came forwards from the past You can think of forwards-traveling state as traveling downwards through your code",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "getPast",
          "package": "tardis",
          "partial": "Past",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:getPast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a specific view of the backwards-traveling state.\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "getsFuture",
          "package": "tardis",
          "signature": "(bw -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Tardis-Class.html#getsFuture",
          "type": "function"
        },
        "index": {
          "description": "Retrieve specific view of the backwards-traveling state",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "getsFuture",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "tardis",
          "partial": "Future",
          "signature": "(bw-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:getsFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a specific view of the forwards-traveling state.\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "getsPast",
          "package": "tardis",
          "signature": "(fw -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Tardis-Class.html#getsPast",
          "type": "function"
        },
        "index": {
          "description": "Retrieve specific view of the forwards-traveling state",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "getsPast",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "tardis",
          "partial": "Past",
          "signature": "(fw-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:getsPast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the backwards-traveling state\n as it passes through from future to past.\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "modifyBackwards",
          "package": "tardis",
          "signature": "(bw -\u003e bw) -\u003e m ()",
          "source": "src/Control-Monad-Tardis-Class.html#modifyBackwards",
          "type": "function"
        },
        "index": {
          "description": "Modify the backwards-traveling state as it passes through from future to past",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "modifyBackwards",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "tardis",
          "partial": "Backwards",
          "signature": "(bw-\u003ebw)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:modifyBackwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the forwards-traveling state\n as it passes through from past to future.\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "modifyForwards",
          "package": "tardis",
          "signature": "(fw -\u003e fw) -\u003e m ()",
          "source": "src/Control-Monad-Tardis-Class.html#modifyForwards",
          "type": "function"
        },
        "index": {
          "description": "Modify the forwards-traveling state as it passes through from past to future",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "modifyForwards",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "tardis",
          "partial": "Forwards",
          "signature": "(fw-\u003efw)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:modifyForwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current value of the 'forwards-traveling' state,\n which will therefore be sent forwards to the future.\n This value can be retrieved by calls to \u003ca\u003egetPast\u003c/a\u003e\n located \u003ccode\u003ebelow\u003c/code\u003e the current location,\n unless it is overwritten by an intervening \u003ca\u003esendFuture\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "sendFuture",
          "package": "tardis",
          "signature": "fw -\u003e m ()",
          "source": "src/Control-Monad-Tardis-Class.html#sendFuture",
          "type": "method"
        },
        "index": {
          "description": "Set the current value of the forwards-traveling state which will therefore be sent forwards to the future This value can be retrieved by calls to getPast located below the current location unless it is overwritten by an intervening sendFuture",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "sendFuture",
          "normalized": "a-\u003eb()",
          "package": "tardis",
          "partial": "Future",
          "signature": "fw-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:sendFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current value of the 'backwards-traveling' state,\n which will therefore be sent backwards to the past.\n This value can be retrieved by calls to \u003ca\u003egetFuture\u003c/a\u003e\n located \u003ccode\u003eabove\u003c/code\u003e the current location,\n unless it is overwritten by an intervening \u003ca\u003esendPast\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "sendPast",
          "package": "tardis",
          "signature": "bw -\u003e m ()",
          "source": "src/Control-Monad-Tardis-Class.html#sendPast",
          "type": "method"
        },
        "index": {
          "description": "Set the current value of the backwards-traveling state which will therefore be sent backwards to the past This value can be retrieved by calls to getFuture located above the current location unless it is overwritten by an intervening sendPast",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "sendPast",
          "normalized": "a-\u003eb()",
          "package": "tardis",
          "partial": "Past",
          "signature": "bw-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:sendPast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Tardis is merely a pure state transformation.\n\u003c/p\u003e",
          "module": "Control.Monad.Tardis.Class",
          "name": "tardis",
          "package": "tardis",
          "signature": "((bw, fw) -\u003e (a, (bw, fw))) -\u003e m a",
          "source": "src/Control-Monad-Tardis-Class.html#tardis",
          "type": "method"
        },
        "index": {
          "description": "Tardis is merely pure state transformation",
          "hierarchy": "Control Monad Tardis Class",
          "module": "Control.Monad.Tardis.Class",
          "name": "tardis",
          "normalized": "((a,b)-\u003e(c,(a,b)))-\u003ed c",
          "package": "tardis",
          "signature": "((bw,fw)-\u003e(a,(bw,fw)))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:tardis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports both \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTardisT\u003c/a\u003e\u003c/code\u003e\n (Wherever there is overlap, the \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e version is preferred.),\n as well as the \u003ccode\u003e\u003ca\u003eTardisT\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e.\n If you installed this library with the use-undecidable-instances flag,\n then another instance was also exported:\n any \u003ccode\u003eMonadTrans\u003c/code\u003e on top of any \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e\n is also a \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe recommended usage of a Tardis is to import this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Tardis",
          "name": "Tardis",
          "package": "tardis",
          "source": "src/Control-Monad-Tardis.html",
          "type": "module"
        },
        "index": {
          "description": "This module re-exports both MonadTardis and TardisT Wherever there is overlap the MonadTardis version is preferred as well as the TardisT instance of MonadTardis If you installed this library with the use-undecidable-instances flag then another instance was also exported any MonadTrans on top of any MonadTardis is also MonadTardis The recommended usage of Tardis is to import this module",
          "hierarchy": "Control Monad Tardis",
          "module": "Control.Monad.Tardis",
          "name": "Tardis",
          "package": "tardis",
          "partial": "Tardis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe data definition of a \u003ca\u003eTardisT\u003c/a\u003e\n as well as its primitive operations,\n and straightforward combinators based on the primitives.\n\u003c/p\u003e\u003cp\u003eSee Control.Monad.Tardis for the general explanation\n of what a Tardis is and how to use it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "Tardis",
          "package": "tardis",
          "source": "src/Control-Monad-Trans-Tardis.html",
          "type": "module"
        },
        "index": {
          "description": "The data definition of TardisT as well as its primitive operations and straightforward combinators based on the primitives See Control.Monad.Tardis for the general explanation of what Tardis is and how to use it",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "Tardis",
          "package": "tardis",
          "partial": "Tardis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing a Tardis with no monad underneath\n will prove to be most common use case.\n Practical uses of a TardisT require that the\n underlying monad be an instance of MonadFix,\n but note that the IO instance of MonadFix\n is almost certainly unsuitable for use with\n Tardis code.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "Tardis",
          "package": "tardis",
          "source": "src/Control-Monad-Trans-Tardis.html#Tardis",
          "type": "type"
        },
        "index": {
          "description": "Using Tardis with no monad underneath will prove to be most common use case Practical uses of TardisT require that the underlying monad be an instance of MonadFix but note that the IO instance of MonadFix is almost certainly unsuitable for use with Tardis code",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "Tardis",
          "package": "tardis",
          "partial": "Tardis",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#t:Tardis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA TardisT is parameterized by two state streams:\n a 'backwards-traveling' state and a 'forwards-traveling' state.\n This library consistently puts the backwards-traveling state first\n whenever the two are seen together.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "TardisT",
          "package": "tardis",
          "source": "src/Control-Monad-Trans-Tardis.html#TardisT",
          "type": "data"
        },
        "index": {
          "description": "TardisT is parameterized by two state streams backwards-traveling state and forwards-traveling state This library consistently puts the backwards-traveling state first whenever the two are seen together",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "TardisT",
          "package": "tardis",
          "partial": "Tardis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#t:TardisT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Tardis, and discard the final state,\n observing only the resultant value.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "evalTardis",
          "package": "tardis",
          "signature": "Tardis bw fw a -\u003e (bw, fw) -\u003e a",
          "source": "src/Control-Monad-Trans-Tardis.html#evalTardis",
          "type": "function"
        },
        "index": {
          "description": "Run Tardis and discard the final state observing only the resultant value",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "evalTardis",
          "normalized": "Tardis a b c-\u003e(a,b)-\u003ec",
          "package": "tardis",
          "partial": "Tardis",
          "signature": "Tardis bw fw a-\u003e(bw,fw)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:evalTardis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Tardis, and discard the final state,\n observing only the resultant value.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "evalTardisT",
          "package": "tardis",
          "signature": "TardisT bw fw m a -\u003e (bw, fw) -\u003e m a",
          "source": "src/Control-Monad-Trans-Tardis.html#evalTardisT",
          "type": "function"
        },
        "index": {
          "description": "Run Tardis and discard the final state observing only the resultant value",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "evalTardisT",
          "normalized": "TardisT a b c d-\u003e(a,b)-\u003ec d",
          "package": "tardis",
          "partial": "Tardis",
          "signature": "TardisT bw fw m a-\u003e(bw,fw)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:evalTardisT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Tardis, and discard the resultant value,\n observing only the final state (of both streams).\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "execTardis",
          "package": "tardis",
          "signature": "Tardis bw fw a -\u003e (bw, fw) -\u003e (bw, fw)",
          "source": "src/Control-Monad-Trans-Tardis.html#execTardis",
          "type": "function"
        },
        "index": {
          "description": "Run Tardis and discard the resultant value observing only the final state of both streams",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "execTardis",
          "normalized": "Tardis a b c-\u003e(a,b)-\u003e(a,b)",
          "package": "tardis",
          "partial": "Tardis",
          "signature": "Tardis bw fw a-\u003e(bw,fw)-\u003e(bw,fw)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:execTardis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Tardis, and discard the resultant value,\n observing only the final state (of both streams).\n Note that the \u003ccode\u003efinal\u003c/code\u003e state of the backwards-traveling state\n is the state it reaches by traveling from the \u003ccode\u003ebottom\u003c/code\u003e\n of your code to the \u003ccode\u003etop\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "execTardisT",
          "package": "tardis",
          "signature": "TardisT bw fw m a -\u003e (bw, fw) -\u003e m (bw, fw)",
          "source": "src/Control-Monad-Trans-Tardis.html#execTardisT",
          "type": "function"
        },
        "index": {
          "description": "Run Tardis and discard the resultant value observing only the final state of both streams Note that the final state of the backwards-traveling state is the state it reaches by traveling from the bottom of your code to the top",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "execTardisT",
          "normalized": "TardisT a b c d-\u003e(a,b)-\u003ec(a,b)",
          "package": "tardis",
          "partial": "Tardis",
          "signature": "TardisT bw fw m a-\u003e(bw,fw)-\u003em(bw,fw)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:execTardisT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current value of the 'backwards-traveling' state,\n which therefore came backwards from the future.\n You can think of backwards-traveling state as traveling\n \u003ccode\u003eupwards\u003c/code\u003e through your code.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "getFuture",
          "package": "tardis",
          "signature": "TardisT bw fw m bw",
          "source": "src/Control-Monad-Trans-Tardis.html#getFuture",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the current value of the backwards-traveling state which therefore came backwards from the future You can think of backwards-traveling state as traveling upwards through your code",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "getFuture",
          "package": "tardis",
          "partial": "Future",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:getFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current value of the 'forwards-traveling' state,\n which therefore came forwards from the past.\n You can think of forwards-traveling state as traveling\n \u003ccode\u003edownwards\u003c/code\u003e through your code.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "getPast",
          "package": "tardis",
          "signature": "TardisT bw fw m fw",
          "source": "src/Control-Monad-Trans-Tardis.html#getPast",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the current value of the forwards-traveling state which therefore came forwards from the past You can think of forwards-traveling state as traveling downwards through your code",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "getPast",
          "package": "tardis",
          "partial": "Past",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:getPast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a specific view of the backwards-traveling state.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "getsFuture",
          "package": "tardis",
          "signature": "(bw -\u003e a) -\u003e TardisT bw fw m a",
          "source": "src/Control-Monad-Trans-Tardis.html#getsFuture",
          "type": "function"
        },
        "index": {
          "description": "Retrieve specific view of the backwards-traveling state",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "getsFuture",
          "normalized": "(a-\u003eb)-\u003eTardisT a c d b",
          "package": "tardis",
          "partial": "Future",
          "signature": "(bw-\u003ea)-\u003eTardisT bw fw m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:getsFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a specific view of the forwards-traveling state.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "getsPast",
          "package": "tardis",
          "signature": "(fw -\u003e a) -\u003e TardisT bw fw m a",
          "source": "src/Control-Monad-Trans-Tardis.html#getsPast",
          "type": "function"
        },
        "index": {
          "description": "Retrieve specific view of the forwards-traveling state",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "getsPast",
          "normalized": "(a-\u003eb)-\u003eTardisT c a d b",
          "package": "tardis",
          "partial": "Past",
          "signature": "(fw-\u003ea)-\u003eTardisT bw fw m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:getsPast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the backwards-traveling state\n as it passes through from future to past.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "modifyBackwards",
          "package": "tardis",
          "signature": "(bw -\u003e bw) -\u003e TardisT bw fw m ()",
          "source": "src/Control-Monad-Trans-Tardis.html#modifyBackwards",
          "type": "function"
        },
        "index": {
          "description": "Modify the backwards-traveling state as it passes through from future to past",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "modifyBackwards",
          "normalized": "(a-\u003ea)-\u003eTardisT a b c()",
          "package": "tardis",
          "partial": "Backwards",
          "signature": "(bw-\u003ebw)-\u003eTardisT bw fw m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:modifyBackwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the forwards-traveling state\n as it passes through from past to future.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "modifyForwards",
          "package": "tardis",
          "signature": "(fw -\u003e fw) -\u003e TardisT bw fw m ()",
          "source": "src/Control-Monad-Trans-Tardis.html#modifyForwards",
          "type": "function"
        },
        "index": {
          "description": "Modify the forwards-traveling state as it passes through from past to future",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "modifyForwards",
          "normalized": "(a-\u003ea)-\u003eTardisT b a c()",
          "package": "tardis",
          "partial": "Forwards",
          "signature": "(fw-\u003efw)-\u003eTardisT bw fw m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:modifyForwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome Tardises never observe the \u003ccode\u003einitial\u003c/code\u003e state\n of either state stream, so it is convenient\n to simply hand dummy values to such Tardises.\n\u003c/p\u003e\u003cpre\u003e noState = (undefined, undefined)\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "noState",
          "package": "tardis",
          "signature": "(a, b)",
          "source": "src/Control-Monad-Trans-Tardis.html#noState",
          "type": "function"
        },
        "index": {
          "description": "Some Tardises never observe the initial state of either state stream so it is convenient to simply hand dummy values to such Tardises noState undefined undefined",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "noState",
          "normalized": "(a,b)",
          "package": "tardis",
          "partial": "State",
          "signature": "(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:noState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Tardis is merely a pure state transformation.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "runTardis",
          "package": "tardis",
          "signature": "Tardis bw fw a -\u003e (bw, fw) -\u003e (a, (bw, fw))",
          "source": "src/Control-Monad-Trans-Tardis.html#runTardis",
          "type": "function"
        },
        "index": {
          "description": "Tardis is merely pure state transformation",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "runTardis",
          "normalized": "Tardis a b c-\u003e(a,b)-\u003e(c,(a,b))",
          "package": "tardis",
          "partial": "Tardis",
          "signature": "Tardis bw fw a-\u003e(bw,fw)-\u003e(a,(bw,fw))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:runTardis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA TardisT is merely an effectful state transformation\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "runTardisT",
          "package": "tardis",
          "signature": "TardisT bw fw m a -\u003e (bw, fw) -\u003e m (a, (bw, fw))",
          "source": "src/Control-Monad-Trans-Tardis.html#runTardisT",
          "type": "function"
        },
        "index": {
          "description": "TardisT is merely an effectful state transformation",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "runTardisT",
          "normalized": "TardisT a b c d-\u003e(a,b)-\u003ec(d,(a,b))",
          "package": "tardis",
          "partial": "Tardis",
          "signature": "TardisT bw fw m a-\u003e(bw,fw)-\u003em(a,(bw,fw))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:runTardisT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current value of the 'forwards-traveling' state,\n which will therefore be sent forwards to the future.\n This value can be retrieved by calls to \u003ca\u003egetPast\u003c/a\u003e\n located \u003ccode\u003ebelow\u003c/code\u003e the current location,\n unless it is overwritten by an intervening \u003ca\u003esendFuture\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "sendFuture",
          "package": "tardis",
          "signature": "fw -\u003e TardisT bw fw m ()",
          "source": "src/Control-Monad-Trans-Tardis.html#sendFuture",
          "type": "function"
        },
        "index": {
          "description": "Set the current value of the forwards-traveling state which will therefore be sent forwards to the future This value can be retrieved by calls to getPast located below the current location unless it is overwritten by an intervening sendFuture",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "sendFuture",
          "normalized": "a-\u003eTardisT b a c()",
          "package": "tardis",
          "partial": "Future",
          "signature": "fw-\u003eTardisT bw fw m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:sendFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current value of the 'backwards-traveling' state,\n which will therefore be sent backwards to the past.\n This value can be retrieved by calls to \u003ca\u003egetFuture\u003c/a\u003e\n located \u003ccode\u003eabove\u003c/code\u003e the current location,\n unless it is overwritten by an intervening \u003ca\u003esendPast\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "sendPast",
          "package": "tardis",
          "signature": "bw -\u003e TardisT bw fw m ()",
          "source": "src/Control-Monad-Trans-Tardis.html#sendPast",
          "type": "function"
        },
        "index": {
          "description": "Set the current value of the backwards-traveling state which will therefore be sent backwards to the past This value can be retrieved by calls to getFuture located above the current location unless it is overwritten by an intervening sendPast",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "sendPast",
          "normalized": "a-\u003eTardisT a b c()",
          "package": "tardis",
          "partial": "Past",
          "signature": "bw-\u003eTardisT bw fw m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:sendPast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom a stateful computation, construct a Tardis.\n This is the pure parallel to the constructor \u003ca\u003eTardisT\u003c/a\u003e,\n and is polymorphic in the transformed monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Tardis",
          "name": "tardis",
          "package": "tardis",
          "signature": "((bw, fw) -\u003e (a, (bw, fw))) -\u003e TardisT bw fw m a",
          "source": "src/Control-Monad-Trans-Tardis.html#tardis",
          "type": "function"
        },
        "index": {
          "description": "From stateful computation construct Tardis This is the pure parallel to the constructor TardisT and is polymorphic in the transformed monad",
          "hierarchy": "Control Monad Trans Tardis",
          "module": "Control.Monad.Trans.Tardis",
          "name": "tardis",
          "normalized": "((a,b)-\u003e(c,(a,b)))-\u003eTardisT a b d c",
          "package": "tardis",
          "signature": "((bw,fw)-\u003e(a,(bw,fw)))-\u003eTardisT bw fw m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:tardis"
      }
    }
  ]
]