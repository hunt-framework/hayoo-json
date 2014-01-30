[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe class definition of a Tardis,\n as well as a few straightforward combinators\n based on its primitives.\n\u003c/p\u003e\u003cp\u003eSee Control.Monad.Tardis for the general explanation\n of what a Tardis is and how to use it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Tardis-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "The class definition of Tardis as well as few straightforward combinators based on its primitives See Control.Monad.Tardis for the general explanation of what Tardis is and how to use it",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "Class",
        "normalized": "",
        "package": "tardis",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#t:MonadTardis",
      "description": {
        "fct-descr": "\u003cp\u003eA Tardis is parameterized by two state streams:\n a 'backwards-traveling' state and a 'forwards-traveling' state.\n This library consistently puts the backwards-traveling state first\n whenever the two are seen together.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n (\u003ca\u003etardis\u003c/a\u003e) or\n (\u003ca\u003egetPast\u003c/a\u003e, \u003ca\u003egetFuture\u003c/a\u003e, \u003ca\u003esendPast\u003c/a\u003e, and \u003ca\u003esendFuture\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Tardis-Class.html#MonadTardis",
        "fct-type": "class",
        "title": "MonadTardis"
      },
      "index": {
        "description": "Tardis is parameterized by two state streams backwards-traveling state and forwards-traveling state This library consistently puts the backwards-traveling state first whenever the two are seen together Minimal complete definition tardis or getPast getFuture sendPast and sendFuture",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "MonadTardis",
        "normalized": "",
        "package": "tardis",
        "partial": "Monad Tardis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:getFuture",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current value of the 'backwards-traveling' state,\n which therefore came backwards from the future.\n You can think of backwards-traveling state as traveling\n \u003ccode\u003eupwards\u003c/code\u003e through your code.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "m bw",
        "fct-source": "src/Control-Monad-Tardis-Class.html#getFuture",
        "fct-type": "method",
        "title": "getFuture"
      },
      "index": {
        "description": "Retrieve the current value of the backwards-traveling state which therefore came backwards from the future You can think of backwards-traveling state as traveling upwards through your code",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "getFuture",
        "normalized": "",
        "package": "tardis",
        "partial": "Future",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:getPast",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current value of the 'forwards-traveling' state,\n which therefore came forwards from the past.\n You can think of forwards-traveling state as traveling\n \u003ccode\u003edownwards\u003c/code\u003e through your code.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "m fw",
        "fct-source": "src/Control-Monad-Tardis-Class.html#getPast",
        "fct-type": "method",
        "title": "getPast"
      },
      "index": {
        "description": "Retrieve the current value of the forwards-traveling state which therefore came forwards from the past You can think of forwards-traveling state as traveling downwards through your code",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "getPast",
        "normalized": "",
        "package": "tardis",
        "partial": "Past",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:getsFuture",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a specific view of the backwards-traveling state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "(bw -\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-Tardis-Class.html#getsFuture",
        "fct-type": "function",
        "title": "getsFuture"
      },
      "index": {
        "description": "Retrieve specific view of the backwards-traveling state",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "getsFuture",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "tardis",
        "partial": "Future",
        "signature": "(bw-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:getsPast",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a specific view of the forwards-traveling state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "(fw -\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-Tardis-Class.html#getsPast",
        "fct-type": "function",
        "title": "getsPast"
      },
      "index": {
        "description": "Retrieve specific view of the forwards-traveling state",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "getsPast",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "tardis",
        "partial": "Past",
        "signature": "(fw-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:modifyBackwards",
      "description": {
        "fct-descr": "\u003cp\u003eModify the backwards-traveling state\n as it passes through from future to past.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "(bw -\u003e bw) -\u003e m ()",
        "fct-source": "src/Control-Monad-Tardis-Class.html#modifyBackwards",
        "fct-type": "function",
        "title": "modifyBackwards"
      },
      "index": {
        "description": "Modify the backwards-traveling state as it passes through from future to past",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "modifyBackwards",
        "normalized": "(a-\u003ea)-\u003eb()",
        "package": "tardis",
        "partial": "Backwards",
        "signature": "(bw-\u003ebw)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:modifyForwards",
      "description": {
        "fct-descr": "\u003cp\u003eModify the forwards-traveling state\n as it passes through from past to future.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "(fw -\u003e fw) -\u003e m ()",
        "fct-source": "src/Control-Monad-Tardis-Class.html#modifyForwards",
        "fct-type": "function",
        "title": "modifyForwards"
      },
      "index": {
        "description": "Modify the forwards-traveling state as it passes through from past to future",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "modifyForwards",
        "normalized": "(a-\u003ea)-\u003eb()",
        "package": "tardis",
        "partial": "Forwards",
        "signature": "(fw-\u003efw)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:sendFuture",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current value of the 'forwards-traveling' state,\n which will therefore be sent forwards to the future.\n This value can be retrieved by calls to \u003ca\u003egetPast\u003c/a\u003e\n located \u003ccode\u003ebelow\u003c/code\u003e the current location,\n unless it is overwritten by an intervening \u003ca\u003esendFuture\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "fw -\u003e m ()",
        "fct-source": "src/Control-Monad-Tardis-Class.html#sendFuture",
        "fct-type": "method",
        "title": "sendFuture"
      },
      "index": {
        "description": "Set the current value of the forwards-traveling state which will therefore be sent forwards to the future This value can be retrieved by calls to getPast located below the current location unless it is overwritten by an intervening sendFuture",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "sendFuture",
        "normalized": "a-\u003eb()",
        "package": "tardis",
        "partial": "Future",
        "signature": "fw-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:sendPast",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current value of the 'backwards-traveling' state,\n which will therefore be sent backwards to the past.\n This value can be retrieved by calls to \u003ca\u003egetFuture\u003c/a\u003e\n located \u003ccode\u003eabove\u003c/code\u003e the current location,\n unless it is overwritten by an intervening \u003ca\u003esendPast\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "bw -\u003e m ()",
        "fct-source": "src/Control-Monad-Tardis-Class.html#sendPast",
        "fct-type": "method",
        "title": "sendPast"
      },
      "index": {
        "description": "Set the current value of the backwards-traveling state which will therefore be sent backwards to the past This value can be retrieved by calls to getFuture located above the current location unless it is overwritten by an intervening sendPast",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "sendPast",
        "normalized": "a-\u003eb()",
        "package": "tardis",
        "partial": "Past",
        "signature": "bw-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis-Class.html#v:tardis",
      "description": {
        "fct-descr": "\u003cp\u003eA Tardis is merely a pure state transformation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Tardis.Class",
        "fct-package": "tardis",
        "fct-signature": "((bw, fw) -\u003e (a, (bw, fw))) -\u003e m a",
        "fct-source": "src/Control-Monad-Tardis-Class.html#tardis",
        "fct-type": "method",
        "title": "tardis"
      },
      "index": {
        "description": "Tardis is merely pure state transformation",
        "hierarchy": "Control Monad Tardis Class",
        "module": "Control.Monad.Tardis.Class",
        "name": "tardis",
        "normalized": "((a,b)-\u003e(c,(a,b)))-\u003ed c",
        "package": "tardis",
        "partial": "",
        "signature": "((bw,fw)-\u003e(a,(bw,fw)))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Tardis.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports both \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTardisT\u003c/a\u003e\u003c/code\u003e\n (Wherever there is overlap, the \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e version is preferred.),\n as well as the \u003ccode\u003e\u003ca\u003eTardisT\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e.\n If you installed this library with the use-undecidable-instances flag,\n then another instance was also exported:\n any \u003ccode\u003eMonadTrans\u003c/code\u003e on top of any \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e\n is also a \u003ccode\u003e\u003ca\u003eMonadTardis\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe recommended usage of a Tardis is to import this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Tardis",
        "fct-package": "tardis",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Tardis.html",
        "fct-type": "module",
        "title": "Tardis"
      },
      "index": {
        "description": "This module re-exports both MonadTardis and TardisT Wherever there is overlap the MonadTardis version is preferred as well as the TardisT instance of MonadTardis If you installed this library with the use-undecidable-instances flag then another instance was also exported any MonadTrans on top of any MonadTardis is also MonadTardis The recommended usage of Tardis is to import this module",
        "hierarchy": "Control Monad Tardis",
        "module": "Control.Monad.Tardis",
        "name": "Tardis",
        "normalized": "",
        "package": "tardis",
        "partial": "Tardis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe data definition of a \u003ca\u003eTardisT\u003c/a\u003e\n as well as its primitive operations,\n and straightforward combinators based on the primitives.\n\u003c/p\u003e\u003cp\u003eSee Control.Monad.Tardis for the general explanation\n of what a Tardis is and how to use it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Tardis.html",
        "fct-type": "module",
        "title": "Tardis"
      },
      "index": {
        "description": "The data definition of TardisT as well as its primitive operations and straightforward combinators based on the primitives See Control.Monad.Tardis for the general explanation of what Tardis is and how to use it",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "Tardis",
        "normalized": "",
        "package": "tardis",
        "partial": "Tardis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#t:Tardis",
      "description": {
        "fct-descr": "\u003cp\u003eUsing a Tardis with no monad underneath\n will prove to be most common use case.\n Practical uses of a TardisT require that the\n underlying monad be an instance of MonadFix,\n but note that the IO instance of MonadFix\n is almost certainly unsuitable for use with\n Tardis code.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#Tardis",
        "fct-type": "type",
        "title": "Tardis"
      },
      "index": {
        "description": "Using Tardis with no monad underneath will prove to be most common use case Practical uses of TardisT require that the underlying monad be an instance of MonadFix but note that the IO instance of MonadFix is almost certainly unsuitable for use with Tardis code",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "Tardis",
        "normalized": "",
        "package": "tardis",
        "partial": "Tardis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#t:TardisT",
      "description": {
        "fct-descr": "\u003cp\u003eA TardisT is parameterized by two state streams:\n a 'backwards-traveling' state and a 'forwards-traveling' state.\n This library consistently puts the backwards-traveling state first\n whenever the two are seen together.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#TardisT",
        "fct-type": "data",
        "title": "TardisT"
      },
      "index": {
        "description": "TardisT is parameterized by two state streams backwards-traveling state and forwards-traveling state This library consistently puts the backwards-traveling state first whenever the two are seen together",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "TardisT",
        "normalized": "",
        "package": "tardis",
        "partial": "Tardis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:evalTardis",
      "description": {
        "fct-descr": "\u003cp\u003eRun a Tardis, and discard the final state,\n observing only the resultant value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "Tardis bw fw a -\u003e (bw, fw) -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#evalTardis",
        "fct-type": "function",
        "title": "evalTardis"
      },
      "index": {
        "description": "Run Tardis and discard the final state observing only the resultant value",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "evalTardis",
        "normalized": "Tardis a b c-\u003e(a,b)-\u003ec",
        "package": "tardis",
        "partial": "Tardis",
        "signature": "Tardis bw fw a-\u003e(bw,fw)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:evalTardisT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a Tardis, and discard the final state,\n observing only the resultant value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "TardisT bw fw m a -\u003e (bw, fw) -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#evalTardisT",
        "fct-type": "function",
        "title": "evalTardisT"
      },
      "index": {
        "description": "Run Tardis and discard the final state observing only the resultant value",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "evalTardisT",
        "normalized": "TardisT a b c d-\u003e(a,b)-\u003ec d",
        "package": "tardis",
        "partial": "Tardis",
        "signature": "TardisT bw fw m a-\u003e(bw,fw)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:execTardis",
      "description": {
        "fct-descr": "\u003cp\u003eRun a Tardis, and discard the resultant value,\n observing only the final state (of both streams).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "Tardis bw fw a -\u003e (bw, fw) -\u003e (bw, fw)",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#execTardis",
        "fct-type": "function",
        "title": "execTardis"
      },
      "index": {
        "description": "Run Tardis and discard the resultant value observing only the final state of both streams",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "execTardis",
        "normalized": "Tardis a b c-\u003e(a,b)-\u003e(a,b)",
        "package": "tardis",
        "partial": "Tardis",
        "signature": "Tardis bw fw a-\u003e(bw,fw)-\u003e(bw,fw)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:execTardisT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a Tardis, and discard the resultant value,\n observing only the final state (of both streams).\n Note that the \u003ccode\u003efinal\u003c/code\u003e state of the backwards-traveling state\n is the state it reaches by traveling from the \u003ccode\u003ebottom\u003c/code\u003e\n of your code to the \u003ccode\u003etop\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "TardisT bw fw m a -\u003e (bw, fw) -\u003e m (bw, fw)",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#execTardisT",
        "fct-type": "function",
        "title": "execTardisT"
      },
      "index": {
        "description": "Run Tardis and discard the resultant value observing only the final state of both streams Note that the final state of the backwards-traveling state is the state it reaches by traveling from the bottom of your code to the top",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "execTardisT",
        "normalized": "TardisT a b c d-\u003e(a,b)-\u003ec(a,b)",
        "package": "tardis",
        "partial": "Tardis",
        "signature": "TardisT bw fw m a-\u003e(bw,fw)-\u003em(bw,fw)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:getFuture",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current value of the 'backwards-traveling' state,\n which therefore came backwards from the future.\n You can think of backwards-traveling state as traveling\n \u003ccode\u003eupwards\u003c/code\u003e through your code.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "TardisT bw fw m bw",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#getFuture",
        "fct-type": "function",
        "title": "getFuture"
      },
      "index": {
        "description": "Retrieve the current value of the backwards-traveling state which therefore came backwards from the future You can think of backwards-traveling state as traveling upwards through your code",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "getFuture",
        "normalized": "",
        "package": "tardis",
        "partial": "Future",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:getPast",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current value of the 'forwards-traveling' state,\n which therefore came forwards from the past.\n You can think of forwards-traveling state as traveling\n \u003ccode\u003edownwards\u003c/code\u003e through your code.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "TardisT bw fw m fw",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#getPast",
        "fct-type": "function",
        "title": "getPast"
      },
      "index": {
        "description": "Retrieve the current value of the forwards-traveling state which therefore came forwards from the past You can think of forwards-traveling state as traveling downwards through your code",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "getPast",
        "normalized": "",
        "package": "tardis",
        "partial": "Past",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:getsFuture",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a specific view of the backwards-traveling state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "(bw -\u003e a) -\u003e TardisT bw fw m a",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#getsFuture",
        "fct-type": "function",
        "title": "getsFuture"
      },
      "index": {
        "description": "Retrieve specific view of the backwards-traveling state",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "getsFuture",
        "normalized": "(a-\u003eb)-\u003eTardisT a c d b",
        "package": "tardis",
        "partial": "Future",
        "signature": "(bw-\u003ea)-\u003eTardisT bw fw m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:getsPast",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a specific view of the forwards-traveling state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "(fw -\u003e a) -\u003e TardisT bw fw m a",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#getsPast",
        "fct-type": "function",
        "title": "getsPast"
      },
      "index": {
        "description": "Retrieve specific view of the forwards-traveling state",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "getsPast",
        "normalized": "(a-\u003eb)-\u003eTardisT c a d b",
        "package": "tardis",
        "partial": "Past",
        "signature": "(fw-\u003ea)-\u003eTardisT bw fw m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:modifyBackwards",
      "description": {
        "fct-descr": "\u003cp\u003eModify the backwards-traveling state\n as it passes through from future to past.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "(bw -\u003e bw) -\u003e TardisT bw fw m ()",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#modifyBackwards",
        "fct-type": "function",
        "title": "modifyBackwards"
      },
      "index": {
        "description": "Modify the backwards-traveling state as it passes through from future to past",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "modifyBackwards",
        "normalized": "(a-\u003ea)-\u003eTardisT a b c()",
        "package": "tardis",
        "partial": "Backwards",
        "signature": "(bw-\u003ebw)-\u003eTardisT bw fw m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:modifyForwards",
      "description": {
        "fct-descr": "\u003cp\u003eModify the forwards-traveling state\n as it passes through from past to future.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "(fw -\u003e fw) -\u003e TardisT bw fw m ()",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#modifyForwards",
        "fct-type": "function",
        "title": "modifyForwards"
      },
      "index": {
        "description": "Modify the forwards-traveling state as it passes through from past to future",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "modifyForwards",
        "normalized": "(a-\u003ea)-\u003eTardisT b a c()",
        "package": "tardis",
        "partial": "Forwards",
        "signature": "(fw-\u003efw)-\u003eTardisT bw fw m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:noState",
      "description": {
        "fct-descr": "\u003cp\u003eSome Tardises never observe the \u003ccode\u003einitial\u003c/code\u003e state\n of either state stream, so it is convenient\n to simply hand dummy values to such Tardises.\n\u003c/p\u003e\u003cpre\u003e noState = (undefined, undefined)\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "(a, b)",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#noState",
        "fct-type": "function",
        "title": "noState"
      },
      "index": {
        "description": "Some Tardises never observe the initial state of either state stream so it is convenient to simply hand dummy values to such Tardises noState undefined undefined",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "noState",
        "normalized": "(a,b)",
        "package": "tardis",
        "partial": "State",
        "signature": "(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:runTardis",
      "description": {
        "fct-descr": "\u003cp\u003eA Tardis is merely a pure state transformation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "Tardis bw fw a -\u003e (bw, fw) -\u003e (a, (bw, fw))",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#runTardis",
        "fct-type": "function",
        "title": "runTardis"
      },
      "index": {
        "description": "Tardis is merely pure state transformation",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "runTardis",
        "normalized": "Tardis a b c-\u003e(a,b)-\u003e(c,(a,b))",
        "package": "tardis",
        "partial": "Tardis",
        "signature": "Tardis bw fw a-\u003e(bw,fw)-\u003e(a,(bw,fw))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:runTardisT",
      "description": {
        "fct-descr": "\u003cp\u003eA TardisT is merely an effectful state transformation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "TardisT bw fw m a -\u003e (bw, fw) -\u003e m (a, (bw, fw))",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#runTardisT",
        "fct-type": "function",
        "title": "runTardisT"
      },
      "index": {
        "description": "TardisT is merely an effectful state transformation",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "runTardisT",
        "normalized": "TardisT a b c d-\u003e(a,b)-\u003ec(d,(a,b))",
        "package": "tardis",
        "partial": "Tardis",
        "signature": "TardisT bw fw m a-\u003e(bw,fw)-\u003em(a,(bw,fw))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:sendFuture",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current value of the 'forwards-traveling' state,\n which will therefore be sent forwards to the future.\n This value can be retrieved by calls to \u003ca\u003egetPast\u003c/a\u003e\n located \u003ccode\u003ebelow\u003c/code\u003e the current location,\n unless it is overwritten by an intervening \u003ca\u003esendFuture\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "fw -\u003e TardisT bw fw m ()",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#sendFuture",
        "fct-type": "function",
        "title": "sendFuture"
      },
      "index": {
        "description": "Set the current value of the forwards-traveling state which will therefore be sent forwards to the future This value can be retrieved by calls to getPast located below the current location unless it is overwritten by an intervening sendFuture",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "sendFuture",
        "normalized": "a-\u003eTardisT b a c()",
        "package": "tardis",
        "partial": "Future",
        "signature": "fw-\u003eTardisT bw fw m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:sendPast",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current value of the 'backwards-traveling' state,\n which will therefore be sent backwards to the past.\n This value can be retrieved by calls to \u003ca\u003egetFuture\u003c/a\u003e\n located \u003ccode\u003eabove\u003c/code\u003e the current location,\n unless it is overwritten by an intervening \u003ca\u003esendPast\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "bw -\u003e TardisT bw fw m ()",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#sendPast",
        "fct-type": "function",
        "title": "sendPast"
      },
      "index": {
        "description": "Set the current value of the backwards-traveling state which will therefore be sent backwards to the past This value can be retrieved by calls to getFuture located above the current location unless it is overwritten by an intervening sendPast",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "sendPast",
        "normalized": "a-\u003eTardisT a b c()",
        "package": "tardis",
        "partial": "Past",
        "signature": "bw-\u003eTardisT bw fw m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tardis/docs/Control-Monad-Trans-Tardis.html#v:tardis",
      "description": {
        "fct-descr": "\u003cp\u003eFrom a stateful computation, construct a Tardis.\n This is the pure parallel to the constructor \u003ca\u003eTardisT\u003c/a\u003e,\n and is polymorphic in the transformed monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Tardis",
        "fct-package": "tardis",
        "fct-signature": "((bw, fw) -\u003e (a, (bw, fw))) -\u003e TardisT bw fw m a",
        "fct-source": "src/Control-Monad-Trans-Tardis.html#tardis",
        "fct-type": "function",
        "title": "tardis"
      },
      "index": {
        "description": "From stateful computation construct Tardis This is the pure parallel to the constructor TardisT and is polymorphic in the transformed monad",
        "hierarchy": "Control Monad Trans Tardis",
        "module": "Control.Monad.Trans.Tardis",
        "name": "tardis",
        "normalized": "((a,b)-\u003e(c,(a,b)))-\u003eTardisT a b d c",
        "package": "tardis",
        "partial": "",
        "signature": "((bw,fw)-\u003e(a,(bw,fw)))-\u003eTardisT bw fw m a"
      }
    }
  }
]