[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#",
      "description": {
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Loop.html",
        "fct-type": "module",
        "title": "Loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "Loop",
        "normalized": "",
        "package": "control-monad-loop",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#t:LoopT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLoopT\u003c/a\u003e\u003c/code\u003e is a monad transformer for the loop body.  It provides two\n capabilities:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e to the next iteration.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e the whole loop.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Loop.html#LoopT",
        "fct-type": "newtype",
        "title": "LoopT"
      },
      "index": {
        "description": "LoopT is monad transformer for the loop body It provides two capabilities continue to the next iteration exit the whole loop",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "LoopT",
        "normalized": "",
        "package": "control-monad-loop",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:LoopT",
      "description": {
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "LoopT",
        "fct-source": "src/Control-Monad-Trans-Loop.html#LoopT",
        "fct-type": "function",
        "title": "LoopT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "LoopT",
        "normalized": "",
        "package": "control-monad-loop",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:continue",
      "description": {
        "fct-descr": "\u003cp\u003eSkip the rest of the loop body and go to the next iteration.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "LoopT () e m a",
        "fct-source": "src/Control-Monad-Trans-Loop.html#continue",
        "fct-type": "function",
        "title": "continue"
      },
      "index": {
        "description": "Skip the rest of the loop body and go to the next iteration",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "continue",
        "normalized": "LoopT()a b c",
        "package": "control-monad-loop",
        "partial": "",
        "signature": "LoopT()e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:continueWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e, but return a value from the loop body.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "c -\u003e LoopT c e m a",
        "fct-source": "src/Control-Monad-Trans-Loop.html#continueWith",
        "fct-type": "function",
        "title": "continueWith"
      },
      "index": {
        "description": "Like continue but return value from the loop body",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "continueWith",
        "normalized": "a-\u003eLoopT a b c d",
        "package": "control-monad-loop",
        "partial": "With",
        "signature": "c-\u003eLoopT c e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:doWhile",
      "description": {
        "fct-descr": "\u003cp\u003eLike a \u003ccode\u003edo while\u003c/code\u003e loop in C, where the condition is tested after\n the loop body.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edoWhile\u003c/a\u003e\u003c/code\u003e returns the result of the last iteration.  This is possible\n because, unlike \u003ccode\u003e\u003ca\u003eforeach\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e, the loop body is guaranteed to be\n executed at least once.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "LoopT a a m a -\u003e m Bool -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Loop.html#doWhile",
        "fct-type": "function",
        "title": "doWhile"
      },
      "index": {
        "description": "Like do while loop in where the condition is tested after the loop body doWhile returns the result of the last iteration This is possible because unlike foreach and while the loop body is guaranteed to be executed at least once",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "doWhile",
        "normalized": "LoopT a a b a-\u003eb Bool-\u003eb a",
        "package": "control-monad-loop",
        "partial": "While",
        "signature": "LoopT a a m a-\u003em Bool-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:exit",
      "description": {
        "fct-descr": "\u003cp\u003eBreak out of the loop entirely.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "LoopT c () m a",
        "fct-source": "src/Control-Monad-Trans-Loop.html#exit",
        "fct-type": "function",
        "title": "exit"
      },
      "index": {
        "description": "Break out of the loop entirely",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "exit",
        "normalized": "LoopT a()b c",
        "package": "control-monad-loop",
        "partial": "",
        "signature": "LoopT c()m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:exitWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e, but return a value from the loop as a whole.\n See the documentation of \u003ccode\u003e\u003ca\u003eiterateLoopT\u003c/a\u003e\u003c/code\u003e for an example.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "e -\u003e LoopT c e m a",
        "fct-source": "src/Control-Monad-Trans-Loop.html#exitWith",
        "fct-type": "function",
        "title": "exitWith"
      },
      "index": {
        "description": "Like exit but return value from the loop as whole See the documentation of iterateLoopT for an example",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "exitWith",
        "normalized": "a-\u003eLoopT b a c d",
        "package": "control-monad-loop",
        "partial": "With",
        "signature": "e-\u003eLoopT c e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:foreach",
      "description": {
        "fct-descr": "\u003cp\u003eCall the loop body with each item in the list.\n\u003c/p\u003e\u003cp\u003eIf you do not need to \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e the loop, consider using\n \u003ccode\u003e\u003ca\u003eforM_\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "[a] -\u003e (a -\u003e LoopT c () m c) -\u003e m ()",
        "fct-source": "src/Control-Monad-Trans-Loop.html#foreach",
        "fct-type": "function",
        "title": "foreach"
      },
      "index": {
        "description": "Call the loop body with each item in the list If you do not need to continue or exit the loop consider using forM instead",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "foreach",
        "normalized": "[a]-\u003e(a-\u003eLoopT b()c b)-\u003ec()",
        "package": "control-monad-loop",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003eLoopT c()m c)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:iterateLoopT",
      "description": {
        "fct-descr": "\u003cp\u003eCall the loop body again and again, passing it the result of the previous\n iteration each time around.  The only way to exit \u003ccode\u003e\u003ca\u003eiterateLoopT\u003c/a\u003e\u003c/code\u003e is to call\n \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003ecount :: Int -\u003e IO Int\ncount n = iterateLoopT 0 $ \\i -\u003e\n    if i \u003c n\n        then do\n            lift $ print i\n            return $ i+1\n        else exitWith i\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "c -\u003e (c -\u003e LoopT c e m c) -\u003e m e",
        "fct-source": "src/Control-Monad-Trans-Loop.html#iterateLoopT",
        "fct-type": "function",
        "title": "iterateLoopT"
      },
      "index": {
        "description": "Call the loop body again and again passing it the result of the previous iteration each time around The only way to exit iterateLoopT is to call exit or exitWith Example count Int IO Int count iterateLoopT if then do lift print return else exitWith",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "iterateLoopT",
        "normalized": "a-\u003e(a-\u003eLoopT a b c a)-\u003ec b",
        "package": "control-monad-loop",
        "partial": "Loop",
        "signature": "c-\u003e(c-\u003eLoopT c e m c)-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:liftLocalLoopT",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function like \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003emask_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "(forall a.  m a -\u003e m a) -\u003e LoopT c e m b -\u003e LoopT c e m b",
        "fct-source": "src/Control-Monad-Trans-Loop.html#liftLocalLoopT",
        "fct-type": "function",
        "title": "liftLocalLoopT"
      },
      "index": {
        "description": "Lift function like local or mask",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "liftLocalLoopT",
        "normalized": "(a b c d-\u003ec d)-\u003eLoopT e f c g-\u003eLoopT e f c g",
        "package": "control-monad-loop",
        "partial": "Local Loop",
        "signature": "(forall a. m a-\u003em a)-\u003eLoopT c e m b-\u003eLoopT c e m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:once",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the loop body once.  This is a convenient way to introduce early\n exit support to a block of code.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e do the same thing inside of \u003ccode\u003e\u003ca\u003eonce\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "LoopT a a m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Loop.html#once",
        "fct-type": "function",
        "title": "once"
      },
      "index": {
        "description": "Execute the loop body once This is convenient way to introduce early exit support to block of code continue and exit do the same thing inside of once",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "once",
        "normalized": "LoopT a a b a-\u003eb a",
        "package": "control-monad-loop",
        "partial": "",
        "signature": "LoopT a a m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:repeatLoopT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the loop body again and again.  The only way to exit \u003ccode\u003e\u003ca\u003erepeatLoopT\u003c/a\u003e\u003c/code\u003e\n is to call \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "LoopT c e m a -\u003e m e",
        "fct-source": "src/Control-Monad-Trans-Loop.html#repeatLoopT",
        "fct-type": "function",
        "title": "repeatLoopT"
      },
      "index": {
        "description": "Execute the loop body again and again The only way to exit repeatLoopT is to call exit or exitWith",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "repeatLoopT",
        "normalized": "LoopT a b c d-\u003ec b",
        "package": "control-monad-loop",
        "partial": "Loop",
        "signature": "LoopT c e m a-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:runLoopT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "forall r.  (c -\u003e m r) -\u003e (e -\u003e m r) -\u003e (a -\u003e m r) -\u003e m r",
        "fct-source": "src/Control-Monad-Trans-Loop.html#LoopT",
        "fct-type": "function",
        "title": "runLoopT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "runLoopT",
        "normalized": "a b(c-\u003ed e)-\u003e(f-\u003ed e)-\u003e(g-\u003ed e)-\u003ed e",
        "package": "control-monad-loop",
        "partial": "Loop",
        "signature": "forall r.(c-\u003em r)-\u003e(e-\u003em r)-\u003e(a-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:stepLoopT",
      "description": {
        "fct-descr": "\u003cp\u003eCall a loop body, passing it a continuation for the next iteration.\n This can be used to construct custom looping constructs.  For example,\n here is the definition of \u003ccode\u003e\u003ca\u003eforeach\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003eforeach list body = loop list\n  where loop []     = return ()\n        loop (x:xs) = stepLoopT (body x) (\\_ -\u003e loop xs)\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "LoopT c e m c -\u003e (c -\u003e m e) -\u003e m e",
        "fct-source": "src/Control-Monad-Trans-Loop.html#stepLoopT",
        "fct-type": "function",
        "title": "stepLoopT"
      },
      "index": {
        "description": "Call loop body passing it continuation for the next iteration This can be used to construct custom looping constructs For example here is the definition of foreach foreach list body loop list where loop return loop xs stepLoopT body loop xs",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "stepLoopT",
        "normalized": "LoopT a b c a-\u003e(a-\u003ec b)-\u003ec b",
        "package": "control-monad-loop",
        "partial": "Loop",
        "signature": "LoopT c e m c-\u003e(c-\u003em e)-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-loop/docs/Control-Monad-Trans-Loop.html#v:while",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat the loop body while the predicate holds.  Like a \u003ccode\u003ewhile\u003c/code\u003e loop in C,\n the condition is tested first.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Loop",
        "fct-package": "control-monad-loop",
        "fct-signature": "m Bool -\u003e LoopT c () m c -\u003e m ()",
        "fct-source": "src/Control-Monad-Trans-Loop.html#while",
        "fct-type": "function",
        "title": "while"
      },
      "index": {
        "description": "Repeat the loop body while the predicate holds Like while loop in the condition is tested first",
        "hierarchy": "Control Monad Trans Loop",
        "module": "Control.Monad.Trans.Loop",
        "name": "while",
        "normalized": "a Bool-\u003eLoopT b()a b-\u003ea()",
        "package": "control-monad-loop",
        "partial": "",
        "signature": "m Bool-\u003eLoopT c()m c-\u003em()"
      }
    }
  }
]