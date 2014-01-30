[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTime compatibility layer\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lambdabot.AltTime",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-AltTime.html",
        "fct-type": "module",
        "title": "AltTime"
      },
      "index": {
        "description": "Time compatibility layer",
        "hierarchy": "Lambdabot AltTime",
        "module": "Lambdabot.AltTime",
        "name": "AltTime",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Alt Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#t:ClockTime",
      "description": {
        "fct-descr": "\u003cp\u003eWrapping ClockTime (which doesn't provide a Read instance!) seems\n easier than talking care of the serialization of UserStatus\n ourselves.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.AltTime",
        "fct-package": "lambdabot-utils",
        "fct-signature": "data",
        "fct-source": "src/Lambdabot-AltTime.html#ClockTime",
        "fct-type": "data",
        "title": "ClockTime"
      },
      "index": {
        "description": "Wrapping ClockTime which doesn provide Read instance seems easier than talking care of the serialization of UserStatus ourselves",
        "hierarchy": "Lambdabot AltTime",
        "module": "Lambdabot.AltTime",
        "name": "ClockTime",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Clock Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#v:addToClockTime",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddToClockTime\u003c/a\u003e\u003c/code\u003e d t\u003c/code\u003e adds a time difference \u003ccode\u003ed\u003c/code\u003e and a -- clock\n time \u003ccode\u003et\u003c/code\u003e to yield a new clock time.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.AltTime",
        "fct-package": "lambdabot-utils",
        "fct-signature": "TimeDiff -\u003e ClockTime -\u003e ClockTime",
        "fct-source": "src/Lambdabot-AltTime.html#addToClockTime",
        "fct-type": "function",
        "title": "addToClockTime"
      },
      "index": {
        "description": "addToClockTime adds time difference and clock time to yield new clock time",
        "hierarchy": "Lambdabot AltTime",
        "module": "Lambdabot.AltTime",
        "name": "addToClockTime",
        "normalized": "TimeDiff-\u003eClockTime-\u003eClockTime",
        "package": "lambdabot-utils",
        "partial": "To Clock Time",
        "signature": "TimeDiff-\u003eClockTime-\u003eClockTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#v:diffClockTimes",
      "description": {
        "fct-descr": "\u003cp\u003eDifference of two clock times\n\u003c/p\u003e",
        "fct-module": "Lambdabot.AltTime",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ClockTime -\u003e ClockTime -\u003e TimeDiff",
        "fct-source": "src/Lambdabot-AltTime.html#diffClockTimes",
        "fct-type": "function",
        "title": "diffClockTimes"
      },
      "index": {
        "description": "Difference of two clock times",
        "hierarchy": "Lambdabot AltTime",
        "module": "Lambdabot.AltTime",
        "name": "diffClockTimes",
        "normalized": "ClockTime-\u003eClockTime-\u003eTimeDiff",
        "package": "lambdabot-utils",
        "partial": "Clock Times",
        "signature": "ClockTime-\u003eClockTime-\u003eTimeDiff"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#v:getClockTime",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current clocktime\n\u003c/p\u003e",
        "fct-module": "Lambdabot.AltTime",
        "fct-package": "lambdabot-utils",
        "fct-signature": "IO ClockTime",
        "fct-source": "src/Lambdabot-AltTime.html#getClockTime",
        "fct-type": "function",
        "title": "getClockTime"
      },
      "index": {
        "description": "Retrieve the current clocktime",
        "hierarchy": "Lambdabot AltTime",
        "module": "Lambdabot.AltTime",
        "name": "getClockTime",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Clock Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#v:timeDiffPretty",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a TimeDiff. Both positive and negative Timediffs produce\n   the same output.\n\u003c/p\u003e\u003cp\u003e14d 17h 8m 53s\n\u003c/p\u003e",
        "fct-module": "Lambdabot.AltTime",
        "fct-package": "lambdabot-utils",
        "fct-signature": "TimeDiff -\u003e String",
        "fct-source": "src/Lambdabot-AltTime.html#timeDiffPretty",
        "fct-type": "function",
        "title": "timeDiffPretty"
      },
      "index": {
        "description": "Pretty-print TimeDiff Both positive and negative Timediffs produce the same output",
        "hierarchy": "Lambdabot AltTime",
        "module": "Lambdabot.AltTime",
        "name": "timeDiffPretty",
        "normalized": "TimeDiff-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Diff Pretty",
        "signature": "TimeDiff-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eError utilities\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lambdabot.Error",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "Error utilities",
        "hierarchy": "Lambdabot Error",
        "module": "Lambdabot.Error",
        "name": "Error",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:bracketError",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebracketError\u003c/a\u003e\u003c/code\u003e is the monadic version of DYNAMIC-WIND from Scheme\n   fame. Parameters are: before, after and m. before is the in-guard\n   being executed before m. after is the out-guard and protects fails\n   of the m.\n   In the Haskell world, this scheme is called a bracket and is often\n   seen employed to manage resources.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Error",
        "fct-package": "lambdabot-utils",
        "fct-signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
        "fct-type": "function",
        "title": "bracketError"
      },
      "index": {
        "description": "bracketError is the monadic version of DYNAMIC-WIND from Scheme fame Parameters are before after and before is the in-guard being executed before after is the out-guard and protects fails of the In the Haskell world this scheme is called bracket and is often seen employed to manage resources",
        "hierarchy": "Lambdabot Error",
        "module": "Lambdabot.Error",
        "name": "bracketError",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "lambdabot-utils",
        "partial": "Error",
        "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:bracketError_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebracketError_\u003c/a\u003e\u003c/code\u003e is the non-bound version of \u003ccode\u003e\u003ca\u003ebracketError\u003c/a\u003e\u003c/code\u003e. The\n   naming scheme follows usual Haskell convention.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Error",
        "fct-package": "lambdabot-utils",
        "fct-signature": "m a-\u003e m b-\u003e m c-\u003e m c",
        "fct-type": "function",
        "title": "bracketError_"
      },
      "index": {
        "description": "bracketError is the non-bound version of bracketError The naming scheme follows usual Haskell convention",
        "hierarchy": "Lambdabot Error",
        "module": "Lambdabot.Error",
        "name": "bracketError_",
        "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
        "package": "lambdabot-utils",
        "partial": "Error",
        "signature": "m a-\u003em b-\u003em c-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:catchErrorJust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecatchErrorJust\u003c/a\u003e\u003c/code\u003e is an error catcher for the Maybe type. As input is given\n   a deciding function, a monad and a handler. When an error is caught, the\n   decider is executed to decide if the error should be handled or not.\n   Then the handler is eventually called to handle the error.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Error",
        "fct-package": "lambdabot-utils",
        "fct-signature": "(e -\u003e Maybe b)-\u003e m a-\u003e (b -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "catchErrorJust"
      },
      "index": {
        "description": "catchErrorJust is an error catcher for the Maybe type As input is given deciding function monad and handler When an error is caught the decider is executed to decide if the error should be handled or not Then the handler is eventually called to handle the error",
        "hierarchy": "Lambdabot Error",
        "module": "Lambdabot.Error",
        "name": "catchErrorJust",
        "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
        "package": "lambdabot-utils",
        "partial": "Error Just",
        "signature": "(e-\u003eMaybe b)-\u003em a-\u003e(b-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:finallyError",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efinallyError\u003c/a\u003e\u003c/code\u003e is a monadic version of the classic UNWIND-PROTECT of\n   lisp fame. Given parameters m and after (both monads) we proceed to\n   work on m. If an error is caught, we execute the out-guard, after,\n   before rethrowing the error. If m does not fail, after is executed\n   and the value of m is returned.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Error",
        "fct-package": "lambdabot-utils",
        "fct-signature": "m a-\u003e m b-\u003e m a",
        "fct-type": "function",
        "title": "finallyError"
      },
      "index": {
        "description": "finallyError is monadic version of the classic UNWIND-PROTECT of lisp fame Given parameters and after both monads we proceed to work on If an error is caught we execute the out-guard after before rethrowing the error If does not fail after is executed and the value of is returned",
        "hierarchy": "Lambdabot Error",
        "module": "Lambdabot.Error",
        "name": "finallyError",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "lambdabot-utils",
        "partial": "Error",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:handleError",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehandleError\u003c/a\u003e\u003c/code\u003e is the flipped version of \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Error",
        "fct-package": "lambdabot-utils",
        "fct-signature": "(e -\u003e m a)-\u003e m a-\u003e m a",
        "fct-type": "function",
        "title": "handleError"
      },
      "index": {
        "description": "handleError is the flipped version of catchError",
        "hierarchy": "Lambdabot Error",
        "module": "Lambdabot.Error",
        "name": "handleError",
        "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "lambdabot-utils",
        "partial": "Error",
        "signature": "(e-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:handleErrorJust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehandleErrorJust\u003c/a\u003e\u003c/code\u003e is the flipped version of \u003ccode\u003e\u003ca\u003ecatchErrorJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Error",
        "fct-package": "lambdabot-utils",
        "fct-signature": "(e -\u003e Maybe b)-\u003e (b -\u003e m a)-\u003e m a-\u003e m a",
        "fct-type": "function",
        "title": "handleErrorJust"
      },
      "index": {
        "description": "handleErrorJust is the flipped version of catchErrorJust",
        "hierarchy": "Lambdabot Error",
        "module": "Lambdabot.Error",
        "name": "handleErrorJust",
        "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec d)-\u003ec d-\u003ec d",
        "package": "lambdabot-utils",
        "partial": "Error Just",
        "signature": "(e-\u003eMaybe b)-\u003e(b-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:tryError",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etryError\u003c/a\u003e\u003c/code\u003e uses Either to explicitly define the outcome of a\n   monadic operation. An error is caught and placed into Right,\n   whereas successful operation is placed into Left.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Error",
        "fct-package": "lambdabot-utils",
        "fct-signature": "m a-\u003e m (Either e a)",
        "fct-type": "function",
        "title": "tryError"
      },
      "index": {
        "description": "tryError uses Either to explicitly define the outcome of monadic operation An error is caught and placed into Right whereas successful operation is placed into Left",
        "hierarchy": "Lambdabot Error",
        "module": "Lambdabot.Error",
        "name": "tryError",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "lambdabot-utils",
        "partial": "Error",
        "signature": "m a-\u003em(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:tryErrorJust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etryErrorJust\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003ecatchErrorJust\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003etryError\u003c/a\u003e\u003c/code\u003e\n   given is a decider guarding whether or not the error should be\n   handled. The handler will always Right and no errors are Left'ed\n   through. If the decider returns Nothing, the error will be thrown\n   further up.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Error",
        "fct-package": "lambdabot-utils",
        "fct-signature": "(e -\u003e Maybe b)-\u003e m a-\u003e m (Either b a)",
        "fct-type": "function",
        "title": "tryErrorJust"
      },
      "index": {
        "description": "tryErrorJust is the catchErrorJust version of tryError given is decider guarding whether or not the error should be handled The handler will always Right and no errors are Left ed through If the decider returns Nothing the error will be thrown further up",
        "hierarchy": "Lambdabot Error",
        "module": "Lambdabot.Error",
        "name": "tryErrorJust",
        "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
        "package": "lambdabot-utils",
        "partial": "Error Just",
        "signature": "(e-\u003eMaybe b)-\u003em a-\u003em(Either b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#",
      "description": {
        "fct-module": "Lambdabot.FixPrecedence",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-FixPrecedence.html",
        "fct-type": "module",
        "title": "FixPrecedence"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot FixPrecedence",
        "module": "Lambdabot.FixPrecedence",
        "name": "FixPrecedence",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Fix Precedence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#t:FixPrecedence",
      "description": {
        "fct-module": "Lambdabot.FixPrecedence",
        "fct-package": "lambdabot-utils",
        "fct-signature": "class",
        "fct-source": "src/Lambdabot-FixPrecedence.html#FixPrecedence",
        "fct-type": "class",
        "title": "FixPrecedence"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot FixPrecedence",
        "module": "Lambdabot.FixPrecedence",
        "name": "FixPrecedence",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Fix Precedence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#v:fixPrecedence",
      "description": {
        "fct-module": "Lambdabot.FixPrecedence",
        "fct-package": "lambdabot-utils",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Lambdabot-FixPrecedence.html#fixPrecedence",
        "fct-type": "method",
        "title": "fixPrecedence"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot FixPrecedence",
        "module": "Lambdabot.FixPrecedence",
        "name": "fixPrecedence",
        "normalized": "a-\u003ea",
        "package": "lambdabot-utils",
        "partial": "Precedence",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#v:precTable",
      "description": {
        "fct-module": "Lambdabot.FixPrecedence",
        "fct-package": "lambdabot-utils",
        "fct-signature": "PrecedenceData",
        "fct-source": "src/Lambdabot-FixPrecedence.html#precTable",
        "fct-type": "function",
        "title": "precTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot FixPrecedence",
        "module": "Lambdabot.FixPrecedence",
        "name": "precTable",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#v:withPrecDecl",
      "description": {
        "fct-module": "Lambdabot.FixPrecedence",
        "fct-package": "lambdabot-utils",
        "fct-signature": "PrecedenceData -\u003e HsDecl -\u003e (PrecedenceData, HsDecl)",
        "fct-source": "src/Lambdabot-FixPrecedence.html#withPrecDecl",
        "fct-type": "function",
        "title": "withPrecDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot FixPrecedence",
        "module": "Lambdabot.FixPrecedence",
        "name": "withPrecDecl",
        "normalized": "PrecedenceData-\u003eHsDecl-\u003e(PrecedenceData,HsDecl)",
        "package": "lambdabot-utils",
        "partial": "Prec Decl",
        "signature": "PrecedenceData-\u003eHsDecl-\u003e(PrecedenceData,HsDecl)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#v:withPrecExp",
      "description": {
        "fct-module": "Lambdabot.FixPrecedence",
        "fct-package": "lambdabot-utils",
        "fct-signature": "PrecedenceData -\u003e HsExp -\u003e HsExp",
        "fct-source": "src/Lambdabot-FixPrecedence.html#withPrecExp",
        "fct-type": "function",
        "title": "withPrecExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot FixPrecedence",
        "module": "Lambdabot.FixPrecedence",
        "name": "withPrecExp",
        "normalized": "PrecedenceData-\u003eHsExp-\u003eHsExp",
        "package": "lambdabot-utils",
        "partial": "Prec Exp",
        "signature": "PrecedenceData-\u003eHsExp-\u003eHsExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHTTP protocol binding.\n \u003ca\u003ehttp://homepages.paradise.net.nz/warrickg/haskell/http/\u003c/a\u003e\n \u003ca\u003ehttp://www.dtek.chalmers.se/~d00bring/haskell-xml-rpc/http.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lambdabot.MiniHTTP",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-MiniHTTP.html",
        "fct-type": "module",
        "title": "MiniHTTP"
      },
      "index": {
        "description": "HTTP protocol binding http homepages.paradise.net.nz warrickg haskell http http www.dtek.chalmers.se d00bring haskell-xml-rpc http.html",
        "hierarchy": "Lambdabot MiniHTTP",
        "module": "Lambdabot.MiniHTTP",
        "name": "MiniHTTP",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Mini HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#t:Proxy",
      "description": {
        "fct-module": "Lambdabot.MiniHTTP",
        "fct-package": "lambdabot-utils",
        "fct-signature": "type",
        "fct-source": "src/Lambdabot-MiniHTTP.html#Proxy",
        "fct-type": "type",
        "title": "Proxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot MiniHTTP",
        "module": "Lambdabot.MiniHTTP",
        "name": "Proxy",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:mkPost",
      "description": {
        "fct-module": "Lambdabot.MiniHTTP",
        "fct-package": "lambdabot-utils",
        "fct-signature": "URI -\u003e String -\u003e [String]",
        "fct-source": "src/Lambdabot-MiniHTTP.html#mkPost",
        "fct-type": "function",
        "title": "mkPost"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot MiniHTTP",
        "module": "Lambdabot.MiniHTTP",
        "name": "mkPost",
        "normalized": "URI-\u003eString-\u003e[String]",
        "package": "lambdabot-utils",
        "partial": "Post",
        "signature": "URI-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:readNBytes",
      "description": {
        "fct-module": "Lambdabot.MiniHTTP",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Int -\u003e Proxy -\u003e URI -\u003e [String] -\u003e String -\u003e IO [String]",
        "fct-source": "src/Lambdabot-MiniHTTP.html#readNBytes",
        "fct-type": "function",
        "title": "readNBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot MiniHTTP",
        "module": "Lambdabot.MiniHTTP",
        "name": "readNBytes",
        "normalized": "Int-\u003eProxy-\u003eURI-\u003e[String]-\u003eString-\u003eIO[String]",
        "package": "lambdabot-utils",
        "partial": "NBytes",
        "signature": "Int-\u003eProxy-\u003eURI-\u003e[String]-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:readPage",
      "description": {
        "fct-module": "Lambdabot.MiniHTTP",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Proxy -\u003e URI -\u003e [String] -\u003e String -\u003e IO [String]",
        "fct-source": "src/Lambdabot-MiniHTTP.html#readPage",
        "fct-type": "function",
        "title": "readPage"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot MiniHTTP",
        "module": "Lambdabot.MiniHTTP",
        "name": "readPage",
        "normalized": "Proxy-\u003eURI-\u003e[String]-\u003eString-\u003eIO[String]",
        "package": "lambdabot-utils",
        "partial": "Page",
        "signature": "Proxy-\u003eURI-\u003e[String]-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:urlDecode",
      "description": {
        "fct-module": "Lambdabot.MiniHTTP",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-MiniHTTP.html#urlDecode",
        "fct-type": "function",
        "title": "urlDecode"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot MiniHTTP",
        "module": "Lambdabot.MiniHTTP",
        "name": "urlDecode",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Decode",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:urlEncode",
      "description": {
        "fct-module": "Lambdabot.MiniHTTP",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-MiniHTTP.html#urlEncode",
        "fct-type": "function",
        "title": "urlEncode"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot MiniHTTP",
        "module": "Lambdabot.MiniHTTP",
        "name": "urlEncode",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Encode",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#",
      "description": {
        "fct-module": "Lambdabot.Parser",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Parser",
        "module": "Lambdabot.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#v:parseDecl",
      "description": {
        "fct-module": "Lambdabot.Parser",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e Either String HsDecl",
        "fct-source": "src/Lambdabot-Parser.html#parseDecl",
        "fct-type": "function",
        "title": "parseDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Parser",
        "module": "Lambdabot.Parser",
        "name": "parseDecl",
        "normalized": "String-\u003eEither String HsDecl",
        "package": "lambdabot-utils",
        "partial": "Decl",
        "signature": "String-\u003eEither String HsDecl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#v:parseExpr",
      "description": {
        "fct-module": "Lambdabot.Parser",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e Either String HsExp",
        "fct-source": "src/Lambdabot-Parser.html#parseExpr",
        "fct-type": "function",
        "title": "parseExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Parser",
        "module": "Lambdabot.Parser",
        "name": "parseExpr",
        "normalized": "String-\u003eEither String HsExp",
        "package": "lambdabot-utils",
        "partial": "Expr",
        "signature": "String-\u003eEither String HsExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#v:prettyPrintInLine",
      "description": {
        "fct-module": "Lambdabot.Parser",
        "fct-package": "lambdabot-utils",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Lambdabot-Parser.html#prettyPrintInLine",
        "fct-type": "function",
        "title": "prettyPrintInLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Parser",
        "module": "Lambdabot.Parser",
        "name": "prettyPrintInLine",
        "normalized": "a-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Print In Line",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#v:withParsed",
      "description": {
        "fct-module": "Lambdabot.Parser",
        "fct-package": "lambdabot-utils",
        "fct-signature": "a -\u003e a) -\u003e String -\u003e String",
        "fct-source": "src/Lambdabot-Parser.html#withParsed",
        "fct-type": "function",
        "title": "withParsed"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Parser",
        "module": "Lambdabot.Parser",
        "name": "withParsed",
        "normalized": "a-\u003ea)-\u003eString-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Parsed",
        "signature": "a-\u003ea)-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#",
      "description": {
        "fct-module": "Lambdabot.Pointful",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-Pointful.html",
        "fct-type": "module",
        "title": "Pointful"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Pointful",
        "module": "Lambdabot.Pointful",
        "name": "Pointful",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Pointful",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#t:ParseResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a parse.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Pointful",
        "fct-package": "lambdabot-utils",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ParseResult"
      },
      "index": {
        "description": "The result of parse",
        "hierarchy": "Lambdabot Pointful",
        "module": "Lambdabot.Pointful",
        "name": "ParseResult",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Parse Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:ParseFailed",
      "description": {
        "fct-descr": "\u003cp\u003eThe parse failed at the specified\n source location, with an error message.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Pointful",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ParseFailed SrcLoc String",
        "fct-type": "function",
        "title": "ParseFailed"
      },
      "index": {
        "description": "The parse failed at the specified source location with an error message",
        "hierarchy": "Lambdabot Pointful",
        "module": "Lambdabot.Pointful",
        "name": "ParseFailed",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Parse Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:ParseOk",
      "description": {
        "fct-descr": "\u003cp\u003eThe parse succeeded, yielding a value.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Pointful",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ParseOk a",
        "fct-type": "function",
        "title": "ParseOk"
      },
      "index": {
        "description": "The parse succeeded yielding value",
        "hierarchy": "Lambdabot Pointful",
        "module": "Lambdabot.Pointful",
        "name": "ParseOk",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Parse Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:combinatorModule",
      "description": {
        "fct-module": "Lambdabot.Pointful",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String",
        "fct-source": "src/Lambdabot-Pointful.html#combinatorModule",
        "fct-type": "function",
        "title": "combinatorModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Pointful",
        "module": "Lambdabot.Pointful",
        "name": "combinatorModule",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:main",
      "description": {
        "fct-module": "Lambdabot.Pointful",
        "fct-package": "lambdabot-utils",
        "fct-signature": "IO ()",
        "fct-source": "src/Lambdabot-Pointful.html#main",
        "fct-type": "function",
        "title": "main"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Pointful",
        "module": "Lambdabot.Pointful",
        "name": "main",
        "normalized": "IO()",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:pointful",
      "description": {
        "fct-module": "Lambdabot.Pointful",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-Pointful.html#pointful",
        "fct-type": "function",
        "title": "pointful"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Pointful",
        "module": "Lambdabot.Pointful",
        "name": "pointful",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:test",
      "description": {
        "fct-module": "Lambdabot.Pointful",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Lambdabot-Pointful.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Pointful",
        "module": "Lambdabot.Pointful",
        "name": "test",
        "normalized": "String-\u003eIO()",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Posix.popen compatibility mapping.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lambdabot.Process",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "Posix.popen compatibility mapping",
        "hierarchy": "Lambdabot Process",
        "module": "Lambdabot.Process",
        "name": "Process",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Process.html#v:popen",
      "description": {
        "fct-descr": "\u003cp\u003epopen lets you run a binary with specified arguments. This bypasses the shell.\n | It'll also terminate (SIGTERM) the spawned process in case of\n | exception, this is very important if the timeout for a Plugin\n | expires while it is waiting for the result of a looping process.\n | It's fundamental to link the final executable with -threaded.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Process",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath-\u003e [String]-\u003e Maybe String-\u003e IO (String, String, ExitCode)",
        "fct-type": "function",
        "title": "popen"
      },
      "index": {
        "description": "popen lets you run binary with specified arguments This bypasses the shell It ll also terminate SIGTERM the spawned process in case of exception this is very important if the timeout for Plugin expires while it is waiting for the result of looping process It fundamental to link the final executable with threaded",
        "hierarchy": "Lambdabot Process",
        "module": "Lambdabot.Process",
        "name": "popen",
        "normalized": "FilePath-\u003e[String]-\u003eMaybe String-\u003eIO(String,String,ExitCode)",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "FilePath-\u003e[String]-\u003eMaybe String-\u003eIO(String,String,ExitCode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Process.html#v:run",
      "description": {
        "fct-module": "Lambdabot.Process",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e String -\u003e (String -\u003e String) -\u003e IO String",
        "fct-source": "src/Lambdabot-Process.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Process",
        "module": "Lambdabot.Process",
        "name": "run",
        "normalized": "FilePath-\u003eString-\u003e(String-\u003eString)-\u003eIO String",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "FilePath-\u003eString-\u003e(String-\u003eString)-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#",
      "description": {
        "fct-module": "Lambdabot.Regex",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-Regex.html",
        "fct-type": "module",
        "title": "Regex"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Regex",
        "module": "Lambdabot.Regex",
        "name": "Regex",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Regex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#v:matches",
      "description": {
        "fct-module": "Lambdabot.Regex",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Regex -\u003e ByteString -\u003e Bool",
        "fct-source": "src/Lambdabot-Regex.html#matches",
        "fct-type": "function",
        "title": "matches"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Regex",
        "module": "Lambdabot.Regex",
        "name": "matches",
        "normalized": "Regex-\u003eByteString-\u003eBool",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "Regex-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#v:matches-39-",
      "description": {
        "fct-module": "Lambdabot.Regex",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Regex -\u003e String -\u003e Bool",
        "fct-source": "src/Lambdabot-Regex.html#matches%27",
        "fct-type": "function",
        "title": "matches'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Regex",
        "module": "Lambdabot.Regex",
        "name": "matches'",
        "normalized": "Regex-\u003eString-\u003eBool",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "Regex-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#v:regex",
      "description": {
        "fct-module": "Lambdabot.Regex",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ByteString -\u003e Regex",
        "fct-source": "src/Lambdabot-Regex.html#regex",
        "fct-type": "function",
        "title": "regex"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Regex",
        "module": "Lambdabot.Regex",
        "name": "regex",
        "normalized": "ByteString-\u003eRegex",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "ByteString-\u003eRegex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#v:regex-39-",
      "description": {
        "fct-module": "Lambdabot.Regex",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e Regex",
        "fct-source": "src/Lambdabot-Regex.html#regex%27",
        "fct-type": "function",
        "title": "regex'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Regex",
        "module": "Lambdabot.Regex",
        "name": "regex'",
        "normalized": "String-\u003eRegex",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003eRegex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSerialisation\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-Serial.html",
        "fct-type": "module",
        "title": "Serial"
      },
      "index": {
        "description": "Serialisation",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "Serial",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#t:Packable",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "class",
        "fct-source": "src/Lambdabot-Serial.html#Packable",
        "fct-type": "class",
        "title": "Packable"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "Packable",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Packable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#t:Serial",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "data",
        "fct-source": "src/Lambdabot-Serial.html#Serial",
        "fct-type": "data",
        "title": "Serial"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "Serial",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:Serial",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Serial",
        "fct-source": "src/Lambdabot-Serial.html#Serial",
        "fct-type": "function",
        "title": "Serial"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "Serial",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:assocListPackedSerial",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Serial [(ByteString, ByteString)]",
        "fct-source": "src/Lambdabot-Serial.html#assocListPackedSerial",
        "fct-type": "function",
        "title": "assocListPackedSerial"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "assocListPackedSerial",
        "normalized": "Serial[(ByteString,ByteString)]",
        "package": "lambdabot-utils",
        "partial": "List Packed Serial",
        "signature": "Serial[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:deserialize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ByteString -\u003e Maybe s",
        "fct-source": "src/Lambdabot-Serial.html#Serial",
        "fct-type": "function",
        "title": "deserialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "deserialize",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "ByteString-\u003eMaybe s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:gunzip",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Lambdabot-Serial.html#gunzip",
        "fct-type": "function",
        "title": "gunzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "gunzip",
        "normalized": "ByteString-\u003eByteString",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:gzip",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Lambdabot-Serial.html#gzip",
        "fct-type": "function",
        "title": "gzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "gzip",
        "normalized": "ByteString-\u003eByteString",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:listSerial",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003ea\u003c/code\u003es. As for the \u003ccode\u003emapSerializer\u003c/code\u003e, its output is line-wise.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Serial [a]",
        "fct-source": "src/Lambdabot-Serial.html#listSerial",
        "fct-type": "function",
        "title": "listSerial"
      },
      "index": {
        "description": "Serialize list of As for the mapSerializer its output is line-wise",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "listSerial",
        "normalized": "Serial[a]",
        "package": "lambdabot-utils",
        "partial": "Serial",
        "signature": "Serial[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:mapListPackedSerial",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Serial (Map ByteString [ByteString])",
        "fct-source": "src/Lambdabot-Serial.html#mapListPackedSerial",
        "fct-type": "function",
        "title": "mapListPackedSerial"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "mapListPackedSerial",
        "normalized": "Serial(Map ByteString[ByteString])",
        "package": "lambdabot-utils",
        "partial": "List Packed Serial",
        "signature": "Serial(Map ByteString[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:mapPackedSerial",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Serial (Map ByteString ByteString)",
        "fct-source": "src/Lambdabot-Serial.html#mapPackedSerial",
        "fct-type": "function",
        "title": "mapPackedSerial"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "mapPackedSerial",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Packed Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:mapSerial",
      "description": {
        "fct-descr": "\u003cp\u003eSerializes a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e type if both the key and the value are instances\n of Read and Show. The serialization is done by converting the map to\n and from lists. Results are saved line-wise, for better editing and\n revison control.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Serial (Map k v)",
        "fct-source": "src/Lambdabot-Serial.html#mapSerial",
        "fct-type": "function",
        "title": "mapSerial"
      },
      "index": {
        "description": "Serializes Map type if both the key and the value are instances of Read and Show The serialization is done by converting the map to and from lists Results are saved line-wise for better editing and revison control",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "mapSerial",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:packedListSerial",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Serial [ByteString]",
        "fct-source": "src/Lambdabot-Serial.html#packedListSerial",
        "fct-type": "function",
        "title": "packedListSerial"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "packedListSerial",
        "normalized": "Serial[ByteString]",
        "package": "lambdabot-utils",
        "partial": "List Serial",
        "signature": "Serial[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:readM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereadM\u003c/a\u003e\u003c/code\u003e behaves like read, but catches failure in a monad.\n this allocates a 20-30 M on startup...\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e m a",
        "fct-source": "src/Lambdabot-Serial.html#readM",
        "fct-type": "function",
        "title": "readM"
      },
      "index": {
        "description": "readM behaves like read but catches failure in monad this allocates on startup",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "readM",
        "normalized": "String-\u003ea b",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:readOnly",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "(ByteString -\u003e b) -\u003e Serial b",
        "fct-source": "src/Lambdabot-Serial.html#readOnly",
        "fct-type": "function",
        "title": "readOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "readOnly",
        "normalized": "(ByteString-\u003ea)-\u003eSerial a",
        "package": "lambdabot-utils",
        "partial": "Only",
        "signature": "(ByteString-\u003eb)-\u003eSerial b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:readPacked",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ByteString -\u003e t",
        "fct-source": "src/Lambdabot-Serial.html#readPacked",
        "fct-type": "method",
        "title": "readPacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "readPacked",
        "normalized": "ByteString-\u003ea",
        "package": "lambdabot-utils",
        "partial": "Packed",
        "signature": "ByteString-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:serialize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "s -\u003e Maybe ByteString",
        "fct-source": "src/Lambdabot-Serial.html#Serial",
        "fct-type": "function",
        "title": "serialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "serialize",
        "normalized": "a-\u003eMaybe ByteString",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "s-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:showPacked",
      "description": {
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "t -\u003e ByteString",
        "fct-source": "src/Lambdabot-Serial.html#showPacked",
        "fct-type": "method",
        "title": "showPacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "showPacked",
        "normalized": "a-\u003eByteString",
        "package": "lambdabot-utils",
        "partial": "Packed",
        "signature": "t-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:stdSerial",
      "description": {
        "fct-descr": "\u003cp\u003eDefault `instance' for a Serial\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Serial",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Serial s",
        "fct-source": "src/Lambdabot-Serial.html#stdSerial",
        "fct-type": "function",
        "title": "stdSerial"
      },
      "index": {
        "description": "Default instance for Serial",
        "hierarchy": "Lambdabot Serial",
        "module": "Lambdabot.Serial",
        "name": "stdSerial",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe signal story.\n Posix signals are external events that invoke signal handlers in\n Haskell. The signal handlers in turn throw dynamic exceptions.  Our\n instance of MonadError for LB maps the dynamic exceptions to\n SignalCaughts, which can then be caught by a normal catchIrc or\n handleIrc\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-Signals.html",
        "fct-type": "module",
        "title": "Signals"
      },
      "index": {
        "description": "The signal story Posix signals are external events that invoke signal handlers in Haskell The signal handlers in turn throw dynamic exceptions Our instance of MonadError for LB maps the dynamic exceptions to SignalCaughts which can then be caught by normal catchIrc or handleIrc",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "Signals",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Signals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#t:SignalException",
      "description": {
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "newtype",
        "fct-source": "src/Lambdabot-Signals.html#SignalException",
        "fct-type": "newtype",
        "title": "SignalException"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "SignalException",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Signal Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:SignalException",
      "description": {
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "SignalException Signal",
        "fct-source": "src/Lambdabot-Signals.html#SignalException",
        "fct-type": "function",
        "title": "SignalException"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "SignalException",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Signal Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:catchLock",
      "description": {
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "MVar ()",
        "fct-source": "src/Lambdabot-Signals.html#catchLock",
        "fct-type": "function",
        "title": "catchLock"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "catchLock",
        "normalized": "MVar()",
        "package": "lambdabot-utils",
        "partial": "Lock",
        "signature": "MVar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:ircSignalHandler",
      "description": {
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ThreadId -\u003e Signal -\u003e Handler",
        "fct-source": "src/Lambdabot-Signals.html#ircSignalHandler",
        "fct-type": "function",
        "title": "ircSignalHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "ircSignalHandler",
        "normalized": "ThreadId-\u003eSignal-\u003eHandler",
        "package": "lambdabot-utils",
        "partial": "Signal Handler",
        "signature": "ThreadId-\u003eSignal-\u003eHandler"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:ircSignalMessage",
      "description": {
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Signal -\u003e [Char]",
        "fct-source": "src/Lambdabot-Signals.html#ircSignalMessage",
        "fct-type": "function",
        "title": "ircSignalMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "ircSignalMessage",
        "normalized": "Signal-\u003e[Char]",
        "package": "lambdabot-utils",
        "partial": "Signal Message",
        "signature": "Signal-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:ircSignalsToCatch",
      "description": {
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[Signal]",
        "fct-source": "src/Lambdabot-Signals.html#ircSignalsToCatch",
        "fct-type": "function",
        "title": "ircSignalsToCatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "ircSignalsToCatch",
        "normalized": "[Signal]",
        "package": "lambdabot-utils",
        "partial": "Signals To Catch",
        "signature": "[Signal]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:releaseSignals",
      "description": {
        "fct-descr": "\u003cp\u003eRelease all signal handlers\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "IO ()",
        "fct-source": "src/Lambdabot-Signals.html#releaseSignals",
        "fct-type": "function",
        "title": "releaseSignals"
      },
      "index": {
        "description": "Release all signal handlers",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "releaseSignals",
        "normalized": "IO()",
        "package": "lambdabot-utils",
        "partial": "Signals",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:withHandler",
      "description": {
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Signal -\u003e Handler -\u003e m () -\u003e m ()",
        "fct-source": "src/Lambdabot-Signals.html#withHandler",
        "fct-type": "function",
        "title": "withHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "withHandler",
        "normalized": "Signal-\u003eHandler-\u003ea()-\u003ea()",
        "package": "lambdabot-utils",
        "partial": "Handler",
        "signature": "Signal-\u003eHandler-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:withHandlerList",
      "description": {
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[Signal] -\u003e (Signal -\u003e Handler) -\u003e m () -\u003e m ()",
        "fct-source": "src/Lambdabot-Signals.html#withHandlerList",
        "fct-type": "function",
        "title": "withHandlerList"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "withHandlerList",
        "normalized": "[Signal]-\u003e(Signal-\u003eHandler)-\u003ea()-\u003ea()",
        "package": "lambdabot-utils",
        "partial": "Handler List",
        "signature": "[Signal]-\u003e(Signal-\u003eHandler)-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:withIrcSignalCatch",
      "description": {
        "fct-descr": "\u003cp\u003eRegister signal handlers to catch external signals\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Signals",
        "fct-package": "lambdabot-utils",
        "fct-signature": "m () -\u003e m ()",
        "fct-source": "src/Lambdabot-Signals.html#withIrcSignalCatch",
        "fct-type": "function",
        "title": "withIrcSignalCatch"
      },
      "index": {
        "description": "Register signal handlers to catch external signals",
        "hierarchy": "Lambdabot Signals",
        "module": "Lambdabot.Signals",
        "name": "withIrcSignalCatch",
        "normalized": "a()-\u003ea()",
        "package": "lambdabot-utils",
        "partial": "Irc Signal Catch",
        "signature": "m()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eURL Utility Functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lambdabot.Url",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-Url.html",
        "fct-type": "module",
        "title": "Url"
      },
      "index": {
        "description": "URL Utility Functions",
        "hierarchy": "Lambdabot Url",
        "module": "Lambdabot.Url",
        "name": "Url",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:getHeader",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the specified header from the server response being\n careful to strip the trailing carriage return.  I swiped this code\n from Search.hs, but had to modify it because it was not properly\n stripping off the trailing CR (must not have manifested itself as a\n bug in that code; however, parseURI will fail against CR-terminated\n strings.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Url",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e [String] -\u003e Maybe String",
        "fct-source": "src/Lambdabot-Url.html#getHeader",
        "fct-type": "function",
        "title": "getHeader"
      },
      "index": {
        "description": "Retrieve the specified header from the server response being careful to strip the trailing carriage return swiped this code from Search.hs but had to modify it because it was not properly stripping off the trailing CR must not have manifested itself as bug in that code however parseURI will fail against CR-terminated strings",
        "hierarchy": "Lambdabot Url",
        "module": "Lambdabot.Url",
        "name": "getHeader",
        "normalized": "String-\u003e[String]-\u003eMaybe String",
        "package": "lambdabot-utils",
        "partial": "Header",
        "signature": "String-\u003e[String]-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:getHtmlPage",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the contents of a URL following HTTP redirects.  It returns\n a list of strings comprising the server response which includes the\n status line, response headers, and body.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Url",
        "fct-package": "lambdabot-utils",
        "fct-signature": "URI -\u003e WebReq [String]",
        "fct-source": "src/Lambdabot-Url.html#getHtmlPage",
        "fct-type": "function",
        "title": "getHtmlPage"
      },
      "index": {
        "description": "Fetch the contents of URL following HTTP redirects It returns list of strings comprising the server response which includes the status line response headers and body",
        "hierarchy": "Lambdabot Url",
        "module": "Lambdabot.Url",
        "name": "getHtmlPage",
        "normalized": "URI-\u003eWebReq[String]",
        "package": "lambdabot-utils",
        "partial": "Html Page",
        "signature": "URI-\u003eWebReq[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:rawPageTitle",
      "description": {
        "fct-descr": "\u003cp\u003eFetches a page title for the specified URL.  This function should\n only be used by other plugins if and only if the result is not to\n be displayed in an IRC channel.  Instead, use \u003ccode\u003e\u003ca\u003eurlPageTitle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Url",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e WebReq (Maybe String)",
        "fct-source": "src/Lambdabot-Url.html#rawPageTitle",
        "fct-type": "function",
        "title": "rawPageTitle"
      },
      "index": {
        "description": "Fetches page title for the specified URL This function should only be used by other plugins if and only if the result is not to be displayed in an IRC channel Instead use urlPageTitle",
        "hierarchy": "Lambdabot Url",
        "module": "Lambdabot.Url",
        "name": "rawPageTitle",
        "normalized": "String-\u003eWebReq(Maybe String)",
        "package": "lambdabot-utils",
        "partial": "Page Title",
        "signature": "String-\u003eWebReq(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:runWebReq",
      "description": {
        "fct-module": "Lambdabot.Url",
        "fct-package": "lambdabot-utils",
        "fct-signature": "WebReq a -\u003e Proxy -\u003e IO a",
        "fct-source": "src/Lambdabot-Url.html#runWebReq",
        "fct-type": "function",
        "title": "runWebReq"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Url",
        "module": "Lambdabot.Url",
        "name": "runWebReq",
        "normalized": "WebReq a-\u003eProxy-\u003eIO a",
        "package": "lambdabot-utils",
        "partial": "Web Req",
        "signature": "WebReq a-\u003eProxy-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:urlPageTitle",
      "description": {
        "fct-descr": "\u003cp\u003eFetches a page title suitable for display.  Ideally, other\n plugins should make use of this function if the result is to be\n displayed in an IRC channel because it ensures that a consistent\n look is used (and also lets the URL plugin effectively ignore\n contextual URLs that might be generated by another instance of\n lambdabot; the URL plugin matches on \u003ccode\u003e\u003ca\u003eurlTitlePrompt\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Url",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e WebReq (Maybe String)",
        "fct-source": "src/Lambdabot-Url.html#urlPageTitle",
        "fct-type": "function",
        "title": "urlPageTitle"
      },
      "index": {
        "description": "Fetches page title suitable for display Ideally other plugins should make use of this function if the result is to be displayed in an IRC channel because it ensures that consistent look is used and also lets the URL plugin effectively ignore contextual URLs that might be generated by another instance of lambdabot the URL plugin matches on urlTitlePrompt",
        "hierarchy": "Lambdabot Url",
        "module": "Lambdabot.Url",
        "name": "urlPageTitle",
        "normalized": "String-\u003eWebReq(Maybe String)",
        "package": "lambdabot-utils",
        "partial": "Page Title",
        "signature": "String-\u003eWebReq(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:urlTitlePrompt",
      "description": {
        "fct-descr": "\u003cp\u003eThe string that I prepend to the quoted page title.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Url",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String",
        "fct-source": "src/Lambdabot-Url.html#urlTitlePrompt",
        "fct-type": "function",
        "title": "urlTitlePrompt"
      },
      "index": {
        "description": "The string that prepend to the quoted page title",
        "hierarchy": "Lambdabot Url",
        "module": "Lambdabot.Url",
        "name": "urlTitlePrompt",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Title Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString and other utilities\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "module",
        "fct-source": "src/Lambdabot-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "String and other utilities",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "Util",
        "normalized": "",
        "package": "lambdabot-utils",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/Lambdabot-Util.html#%3C%24%3E",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "join two path components",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/Lambdabot-Util.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "join two path components",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/Lambdabot-Util.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "join two path components",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/Lambdabot-Util.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "join two path components",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60-.-62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/Lambdabot-Util.html#%3C.%3E",
        "fct-type": "function",
        "title": "(\u003c.\u003e)"
      },
      "index": {
        "description": "join two path components",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "(\u003c.\u003e) \u003c.\u003e",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:addList",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[(k, a)] -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Lambdabot-Util.html#addList",
        "fct-type": "function",
        "title": "addList"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "addList",
        "normalized": "[(a,b)]-\u003eMap a b-\u003eMap a b",
        "package": "lambdabot-utils",
        "partial": "List",
        "signature": "[(k,a)]-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:after",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eafter\u003c/a\u003e\u003c/code\u003e takes 2 strings, called the prefix and data. A necessary\n   precondition is that\n\u003c/p\u003e\u003cpre\u003e Data.List.isPrefixOf prefix data ===\u003e True\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eafter\u003c/a\u003e\u003c/code\u003e returns a string based on data, where the prefix has been\n   removed as well as any excess space characters. Example:\n\u003c/p\u003e\u003cpre\u003e after \"This is\" \"This is a string\" ===\u003e \"a string\"\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String-\u003e String-\u003e String",
        "fct-type": "function",
        "title": "after"
      },
      "index": {
        "description": "after takes strings called the prefix and data necessary precondition is that Data.List.isPrefixOf prefix data True after returns string based on data where the prefix has been removed as well as any excess space characters Example after This is This is string string",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "after",
        "normalized": "String-\u003eString-\u003eString",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:arePrefixesOf",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[String] -\u003e String -\u003e Bool",
        "fct-source": "src/Lambdabot-Util.html#arePrefixesOf",
        "fct-type": "function",
        "title": "arePrefixesOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "arePrefixesOf",
        "normalized": "[String]-\u003eString-\u003eBool",
        "package": "lambdabot-utils",
        "partial": "Prefixes Of",
        "signature": "[String]-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:arePrefixesWithSpaceOf",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[String] -\u003e String -\u003e Bool",
        "fct-source": "src/Lambdabot-Util.html#arePrefixesWithSpaceOf",
        "fct-type": "function",
        "title": "arePrefixesWithSpaceOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "arePrefixesWithSpaceOf",
        "normalized": "[String]-\u003eString-\u003eBool",
        "package": "lambdabot-utils",
        "partial": "Prefixes With Space Of",
        "signature": "[String]-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:basename",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Lambdabot-Util.html#basename",
        "fct-type": "function",
        "title": "basename"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "basename",
        "normalized": "FilePath-\u003eFilePath",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:breakOnGlue",
      "description": {
        "fct-descr": "\u003cp\u003eBreak off the first piece of a list held together by glue,\n   leaving the glue attached to the remainder of the list.  Example:\n   Like break, but works with a [a] match.\n\u003c/p\u003e\u003cpre\u003e breakOnGlue \", \" \"one, two, three\" ===\u003e (\"one\", \", two, three\")\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[a]-\u003e [a]-\u003e ([a], [a])",
        "fct-type": "function",
        "title": "breakOnGlue"
      },
      "index": {
        "description": "Break off the first piece of list held together by glue leaving the glue attached to the remainder of the list Example Like break but works with match breakOnGlue one two three one two three",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "breakOnGlue",
        "normalized": "[a]-\u003e[a]-\u003e([a],[a])",
        "package": "lambdabot-utils",
        "partial": "On Glue",
        "signature": "[a]-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:choice",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "(r -\u003e Bool) -\u003e (r -\u003e a) -\u003e (r -\u003e a) -\u003e r -\u003e a",
        "fct-source": "src/Lambdabot-Util.html#choice",
        "fct-type": "function",
        "title": "choice"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "choice",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "(r-\u003eBool)-\u003e(r-\u003ea)-\u003e(r-\u003ea)-\u003er-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:clean",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eclean\u003c/a\u003e\u003c/code\u003e takes a Char x and returns [x] unless the Char is '\\CR' in\n   case [] is returned.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Char -\u003e [Char]",
        "fct-source": "src/Lambdabot-Util.html#clean",
        "fct-type": "function",
        "title": "clean"
      },
      "index": {
        "description": "clean takes Char and returns unless the Char is CR in case is returned",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "clean",
        "normalized": "Char-\u003e[Char]",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "Char-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:closest",
      "description": {
        "fct-descr": "\u003cp\u003eFind string in list with smallest levenshtein distance from first\n argument, return the string and the distance from pat it is.  Will\n return the alphabetically first match if there are multiple matches\n (this may not be desirable, e.g. \u003ca\u003emroe\u003c/a\u003e -\u003e \u003ca\u003emoo\u003c/a\u003e, not \u003ca\u003emore\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e [String] -\u003e (Int, String)",
        "fct-source": "src/Lambdabot-Util.html#closest",
        "fct-type": "function",
        "title": "closest"
      },
      "index": {
        "description": "Find string in list with smallest levenshtein distance from first argument return the string and the distance from pat it is Will return the alphabetically first match if there are multiple matches this may not be desirable e.g mroe moo not more",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "closest",
        "normalized": "String-\u003e[String]-\u003e(Int,String)",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003e[String]-\u003e(Int,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:closests",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e [String] -\u003e (Int, [String])",
        "fct-source": "src/Lambdabot-Util.html#closests",
        "fct-type": "function",
        "title": "closests"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "closests",
        "normalized": "String-\u003e[String]-\u003e(Int,[String])",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003e[String]-\u003e(Int,[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:concatWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcatWith\u003c/a\u003e\u003c/code\u003e joins lists with the given glue elements. Example:\n\u003c/p\u003e\u003cpre\u003e concatWith \", \" [\"one\",\"two\",\"three\"] ===\u003e \"one, two, three\"\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[a]-\u003e [[a]]-\u003e [a]",
        "fct-type": "function",
        "title": "concatWith"
      },
      "index": {
        "description": "concatWith joins lists with the given glue elements Example concatWith one two three one two three",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "concatWith",
        "normalized": "[a]-\u003e[[a]]-\u003e[a]",
        "package": "lambdabot-utils",
        "partial": "With",
        "signature": "[a]-\u003e[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:confirmation",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[String]",
        "fct-source": "src/Lambdabot-Util.html#confirmation",
        "fct-type": "function",
        "title": "confirmation"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "confirmation",
        "normalized": "[String]",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:debugStr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edebugStr\u003c/a\u003e\u003c/code\u003e checks if we have the verbose flag turned on. If we have\n   it outputs the String given. Else, it is a no-op.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Lambdabot-Util.html#debugStr",
        "fct-type": "function",
        "title": "debugStr"
      },
      "index": {
        "description": "debugStr checks if we have the verbose flag turned on If we have it outputs the String given Else it is no-op",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "debugStr",
        "normalized": "String-\u003ea()",
        "package": "lambdabot-utils",
        "partial": "Str",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:debugStrLn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edebugStrLn\u003c/a\u003e\u003c/code\u003e is a version of \u003ccode\u003e\u003ca\u003edebugStr\u003c/a\u003e\u003c/code\u003e that adds a newline to the end\n   of the string outputted.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[Char] -\u003e m ()",
        "fct-source": "src/Lambdabot-Util.html#debugStrLn",
        "fct-type": "function",
        "title": "debugStrLn"
      },
      "index": {
        "description": "debugStrLn is version of debugStr that adds newline to the end of the string outputted",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "debugStrLn",
        "normalized": "[Char]-\u003ea()",
        "package": "lambdabot-utils",
        "partial": "Str Ln",
        "signature": "[Char]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dirname",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Lambdabot-Util.html#dirname",
        "fct-type": "function",
        "title": "dirname"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "dirname",
        "normalized": "FilePath-\u003eFilePath",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dropNL",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Lambdabot-Util.html#dropNL",
        "fct-type": "function",
        "title": "dropNL"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "dropNL",
        "normalized": "[Char]-\u003e[Char]",
        "package": "lambdabot-utils",
        "partial": "NL",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dropSpace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropSpace\u003c/a\u003e\u003c/code\u003e takes as input a String and strips spaces from the\n   prefix as well as the suffix of the String. Example:\n\u003c/p\u003e\u003cpre\u003e dropSpace \"   abc  \" ===\u003e \"abc\"\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Lambdabot-Util.html#dropSpace",
        "fct-type": "function",
        "title": "dropSpace"
      },
      "index": {
        "description": "dropSpace takes as input String and strips spaces from the prefix as well as the suffix of the String Example dropSpace abc abc",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "dropSpace",
        "normalized": "[Char]-\u003e[Char]",
        "package": "lambdabot-utils",
        "partial": "Space",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dropSpaceEnd",
      "description": {
        "fct-descr": "\u003cp\u003eDrop space from the end of the string\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Lambdabot-Util.html#dropSpaceEnd",
        "fct-type": "function",
        "title": "dropSpaceEnd"
      },
      "index": {
        "description": "Drop space from the end of the string",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "dropSpaceEnd",
        "normalized": "[Char]-\u003e[Char]",
        "package": "lambdabot-utils",
        "partial": "Space End",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dropSuffix",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Lambdabot-Util.html#dropSuffix",
        "fct-type": "function",
        "title": "dropSuffix"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "dropSuffix",
        "normalized": "FilePath-\u003eFilePath",
        "package": "lambdabot-utils",
        "partial": "Suffix",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:expandTab",
      "description": {
        "fct-descr": "\u003cp\u003euntab an string\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#expandTab",
        "fct-type": "function",
        "title": "expandTab"
      },
      "index": {
        "description": "untab an string",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "expandTab",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Tab",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:firstWord",
      "description": {
        "fct-descr": "\u003cp\u003eGet the first word of a string. Example:\n\u003c/p\u003e\u003cpre\u003e first_word \"This is a fine day\" ===\u003e \"This\"\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#firstWord",
        "fct-type": "function",
        "title": "firstWord"
      },
      "index": {
        "description": "Get the first word of string Example first word This is fine day This",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "firstWord",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Word",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:getRandItem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetRandItem\u003c/a\u003e\u003c/code\u003e takes as input a list and a random number generator. It\n   then returns a random element from the list, paired with the altered\n   state of the RNG\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[a]-\u003e g-\u003e (a, g)",
        "fct-type": "function",
        "title": "getRandItem"
      },
      "index": {
        "description": "getRandItem takes as input list and random number generator It then returns random element from the list paired with the altered state of the RNG",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "getRandItem",
        "normalized": "[a]-\u003eb-\u003e(a,b)",
        "package": "lambdabot-utils",
        "partial": "Rand Item",
        "signature": "[a]-\u003eg-\u003e(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:insertUpd",
      "description": {
        "fct-descr": "\u003cp\u003eThis makes way more sense than \u003ccode\u003einsertWith\u003c/code\u003e because we don't need to\n   remember the order of arguments of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "(a -\u003e a) -\u003e k -\u003e a -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Lambdabot-Util.html#insertUpd",
        "fct-type": "function",
        "title": "insertUpd"
      },
      "index": {
        "description": "This makes way more sense than insertWith because we don need to remember the order of arguments of",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "insertUpd",
        "normalized": "(a-\u003ea)-\u003eb-\u003ea-\u003eMap b a-\u003eMap b a",
        "package": "lambdabot-utils",
        "partial": "Upd",
        "signature": "(a-\u003ea)-\u003ek-\u003ea-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:insult",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[String]",
        "fct-source": "src/Lambdabot-Util.html#insult",
        "fct-type": "function",
        "title": "insult"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "insult",
        "normalized": "[String]",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:io",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Lambdabot-Util.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "io",
        "normalized": "IO a-\u003eb a",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:isLeft",
      "description": {
        "fct-descr": "\u003cp\u003eTwo functions that really should be in Data.Either\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Lambdabot-Util.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "Two functions that really should be in Data.Either",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "isLeft",
        "normalized": "Either a b-\u003eBool",
        "package": "lambdabot-utils",
        "partial": "Left",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:isRight",
      "description": {
        "fct-descr": "\u003cp\u003eTwo functions that really should be in Data.Either\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Lambdabot-Util.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "Two functions that really should be in Data.Either",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "isRight",
        "normalized": "Either a b-\u003eBool",
        "package": "lambdabot-utils",
        "partial": "Right",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:joinPath",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/Lambdabot-Util.html#joinPath",
        "fct-type": "function",
        "title": "joinPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "joinPath",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "lambdabot-utils",
        "partial": "Path",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:listToMaybeAll",
      "description": {
        "fct-descr": "\u003cpre\u003elistToMaybeAll = listToMaybeWith id\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[a] -\u003e Maybe [a]",
        "fct-source": "src/Lambdabot-Util.html#listToMaybeAll",
        "fct-type": "function",
        "title": "listToMaybeAll"
      },
      "index": {
        "description": "listToMaybeAll listToMaybeWith id",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "listToMaybeAll",
        "normalized": "[a]-\u003eMaybe[a]",
        "package": "lambdabot-utils",
        "partial": "To Maybe All",
        "signature": "[a]-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:listToMaybeWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elistToMaybe\u003c/a\u003e\u003c/code\u003e, but take a function to use in case of a non-null list.\n   I.e. \u003ccode\u003elistToMaybe = listToMaybeWith head\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "([a] -\u003e b) -\u003e [a] -\u003e Maybe b",
        "fct-source": "src/Lambdabot-Util.html#listToMaybeWith",
        "fct-type": "function",
        "title": "listToMaybeWith"
      },
      "index": {
        "description": "Like listToMaybe but take function to use in case of non-null list I.e listToMaybe listToMaybeWith head",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "listToMaybeWith",
        "normalized": "([a]-\u003eb)-\u003e[a]-\u003eMaybe b",
        "package": "lambdabot-utils",
        "partial": "To Maybe With",
        "signature": "([a]-\u003eb)-\u003e[a]-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:listToStr",
      "description": {
        "fct-descr": "\u003cp\u003eForm a list of terms using a single conjunction. Example:\n\u003c/p\u003e\u003cpre\u003e listToStr \"and\" [\"a\", \"b\", \"c\"] ===\u003e \"a, b and c\"\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e [String] -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#listToStr",
        "fct-type": "function",
        "title": "listToStr"
      },
      "index": {
        "description": "Form list of terms using single conjunction Example listToStr and and",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "listToStr",
        "normalized": "String-\u003e[String]-\u003eString",
        "package": "lambdabot-utils",
        "partial": "To Str",
        "signature": "String-\u003e[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:lowerCaseString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elowerCaseString\u003c/a\u003e\u003c/code\u003e transforms the string given to lower case.\n\u003c/p\u003e\u003cpre\u003e Example: lowerCaseString \"MiXeDCaSe\" ===\u003e \"mixedcase\"\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#lowerCaseString",
        "fct-type": "function",
        "title": "lowerCaseString"
      },
      "index": {
        "description": "lowerCaseString transforms the string given to lower case Example lowerCaseString MiXeDCaSe mixedcase",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "lowerCaseString",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Case String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:lowerize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elowerize\u003c/a\u003e\u003c/code\u003e forces the first char of a string to be lowercase.\n   if the string is empty, the empty string is returned.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#lowerize",
        "fct-type": "function",
        "title": "lowerize"
      },
      "index": {
        "description": "lowerize forces the first char of string to be lowercase if the string is empty the empty string is returned",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "lowerize",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:mapMaybeMap",
      "description": {
        "fct-descr": "\u003cp\u003eData.Maybe.mapMaybe for Maps\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "(a -\u003e Maybe b) -\u003e Map k a -\u003e Map k b",
        "fct-source": "src/Lambdabot-Util.html#mapMaybeMap",
        "fct-type": "function",
        "title": "mapMaybeMap"
      },
      "index": {
        "description": "Data.Maybe.mapMaybe for Maps",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "mapMaybeMap",
        "normalized": "(a-\u003eMaybe b)-\u003eMap c a-\u003eMap c b",
        "package": "lambdabot-utils",
        "partial": "Maybe Map",
        "signature": "(a-\u003eMaybe b)-\u003eMap k a-\u003eMap k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:parIO",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "IO a -\u003e IO a -\u003e IO a",
        "fct-source": "src/Lambdabot-Util.html#parIO",
        "fct-type": "function",
        "title": "parIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "parIO",
        "normalized": "IO a-\u003eIO a-\u003eIO a",
        "package": "lambdabot-utils",
        "partial": "IO",
        "signature": "IO a-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:pprKeys",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Map k a -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#pprKeys",
        "fct-type": "function",
        "title": "pprKeys"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "pprKeys",
        "normalized": "Map a b-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Keys",
        "signature": "Map k a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:quote",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003equote\u003c/a\u003e\u003c/code\u003e puts a string into quotes but does not escape quotes in\n   the string itself.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#quote",
        "fct-type": "function",
        "title": "quote"
      },
      "index": {
        "description": "quote puts string into quotes but does not escape quotes in the string itself",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "quote",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:random",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[a] -\u003e m a",
        "fct-source": "src/Lambdabot-Util.html#random",
        "fct-type": "function",
        "title": "random"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "random",
        "normalized": "[a]-\u003eb a",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:randomElem",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[a] -\u003e IO a",
        "fct-source": "src/Lambdabot-Util.html#randomElem",
        "fct-type": "function",
        "title": "randomElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "randomElem",
        "normalized": "[a]-\u003eIO a",
        "package": "lambdabot-utils",
        "partial": "Elem",
        "signature": "[a]-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:showClean",
      "description": {
        "fct-descr": "\u003cp\u003eshow a list without heavyweight formatting\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[a] -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#showClean",
        "fct-type": "function",
        "title": "showClean"
      },
      "index": {
        "description": "show list without heavyweight formatting",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "showClean",
        "normalized": "[a]-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Clean",
        "signature": "[a]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:showWidth",
      "description": {
        "fct-descr": "\u003cp\u003eShow a number, padded to the left with zeroes up to the specified width\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Int-\u003e Int-\u003e String",
        "fct-type": "function",
        "title": "showWidth"
      },
      "index": {
        "description": "Show number padded to the left with zeroes up to the specified width",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "showWidth",
        "normalized": "Int-\u003eInt-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Width",
        "signature": "Int-\u003eInt-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:snoc",
      "description": {
        "fct-descr": "\u003cp\u003eReverse cons. Add an element to the back of a list. Example:\n\u003c/p\u003e\u003cpre\u003e snoc 3 [2, 1] ===\u003e [2, 1, 3]\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "a-\u003e [a]-\u003e [a]",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "Reverse cons Add an element to the back of list Example snoc",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "snoc",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a list into pieces that were held together by glue.  Example:\n\u003c/p\u003e\u003cpre\u003e split \", \" \"one, two, three\" ===\u003e [\"one\",\"two\",\"three\"]\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[a]-\u003e [a]-\u003e [[a]]",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Split list into pieces that were held together by glue Example split one two three one two three",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "split",
        "normalized": "[a]-\u003e[a]-\u003e[[a]]",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:split2",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Char -\u003e Int -\u003e String -\u003e [String]",
        "fct-source": "src/Lambdabot-Util.html#split2",
        "fct-type": "function",
        "title": "split2"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "split2",
        "normalized": "Char-\u003eInt-\u003eString-\u003e[String]",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "Char-\u003eInt-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:splitFirstWord",
      "description": {
        "fct-descr": "\u003cp\u003eBreak a String into it's first word, and the rest of the string. Example:\n\u003c/p\u003e\u003cpre\u003e split_first_word \"A fine day\" ===\u003e (\"A\", \"fine day)\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String-\u003e (String, String)",
        "fct-type": "function",
        "title": "splitFirstWord"
      },
      "index": {
        "description": "Break String into it first word and the rest of the string Example split first word fine day fine day",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "splitFirstWord",
        "normalized": "String-\u003e(String,String)",
        "package": "lambdabot-utils",
        "partial": "First Word",
        "signature": "String-\u003e(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:stdGetRandItem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estdGetRandItem\u003c/a\u003e\u003c/code\u003e is the specialization of \u003ccode\u003e\u003ca\u003egetRandItem\u003c/a\u003e\u003c/code\u003e to the standard\n   RNG embedded within the IO monad. The advantage of using this is that\n   you use the Operating Systems provided RNG instead of rolling your own\n   and the state of the RNG is hidden, so one don't need to pass it\n   explicitly.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "[a] -\u003e IO a",
        "fct-source": "src/Lambdabot-Util.html#stdGetRandItem",
        "fct-type": "function",
        "title": "stdGetRandItem"
      },
      "index": {
        "description": "stdGetRandItem is the specialization of getRandItem to the standard RNG embedded within the IO monad The advantage of using this is that you use the Operating Systems provided RNG instead of rolling your own and the state of the RNG is hidden so one don need to pass it explicitly",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "stdGetRandItem",
        "normalized": "[a]-\u003eIO a",
        "package": "lambdabot-utils",
        "partial": "Get Rand Item",
        "signature": "[a]-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:timeStamp",
      "description": {
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "ClockTime -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#timeStamp",
        "fct-type": "function",
        "title": "timeStamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "timeStamp",
        "normalized": "ClockTime-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Stamp",
        "signature": "ClockTime-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:timeout",
      "description": {
        "fct-descr": "\u003cp\u003erun an action with a timeout\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Int -\u003e IO a -\u003e IO (Maybe a)",
        "fct-source": "src/Lambdabot-Util.html#timeout",
        "fct-type": "function",
        "title": "timeout"
      },
      "index": {
        "description": "run an action with timeout",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "timeout",
        "normalized": "Int-\u003eIO a-\u003eIO(Maybe a)",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "Int-\u003eIO a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:unEither",
      "description": {
        "fct-descr": "\u003cp\u003eAnother useful Either function to easily get out of an Either\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "Either a a -\u003e a",
        "fct-source": "src/Lambdabot-Util.html#unEither",
        "fct-type": "function",
        "title": "unEither"
      },
      "index": {
        "description": "Another useful Either function to easily get out of an Either",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "unEither",
        "normalized": "Either a a-\u003ea",
        "package": "lambdabot-utils",
        "partial": "Either",
        "signature": "Either a a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:upperCaseString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eupperCaseString\u003c/a\u003e\u003c/code\u003e transforms the string given to upper case.\n\u003c/p\u003e\u003cpre\u003e Example: upperCaseString \"MiXeDcaSe\" ===\u003e \"MIXEDCASE\"\n\u003c/pre\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#upperCaseString",
        "fct-type": "function",
        "title": "upperCaseString"
      },
      "index": {
        "description": "upperCaseString transforms the string given to upper case Example upperCaseString MiXeDcaSe MIXEDCASE",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "upperCaseString",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "Case String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:upperize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eupperize\u003c/a\u003e\u003c/code\u003e forces the first char of a string to be uppercase.\n   if the string is empty, the empty string is returned.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Lambdabot-Util.html#upperize",
        "fct-type": "function",
        "title": "upperize"
      },
      "index": {
        "description": "upperize forces the first char of string to be uppercase if the string is empty the empty string is returned",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "upperize",
        "normalized": "String-\u003eString",
        "package": "lambdabot-utils",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:withMWriter",
      "description": {
        "fct-descr": "\u003cp\u003eThread-safe modification of an MVar.\n\u003c/p\u003e",
        "fct-module": "Lambdabot.Util",
        "fct-package": "lambdabot-utils",
        "fct-signature": "MVar a -\u003e (a -\u003e (a -\u003e IO ()) -\u003e IO b) -\u003e IO b",
        "fct-source": "src/Lambdabot-Util.html#withMWriter",
        "fct-type": "function",
        "title": "withMWriter"
      },
      "index": {
        "description": "Thread-safe modification of an MVar",
        "hierarchy": "Lambdabot Util",
        "module": "Lambdabot.Util",
        "name": "withMWriter",
        "normalized": "MVar a-\u003e(a-\u003e(a-\u003eIO())-\u003eIO b)-\u003eIO b",
        "package": "lambdabot-utils",
        "partial": "MWriter",
        "signature": "MVar a-\u003e(a-\u003e(a-\u003eIO())-\u003eIO b)-\u003eIO b"
      }
    }
  }
]