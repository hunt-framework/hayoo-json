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
        "word": "lambdabot-utils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTime compatibility layer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lambdabot.AltTime",
          "name": "AltTime",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-AltTime.html",
          "type": "module"
        },
        "index": {
          "description": "Time compatibility layer",
          "hierarchy": "Lambdabot AltTime",
          "module": "Lambdabot.AltTime",
          "name": "AltTime",
          "package": "lambdabot-utils",
          "partial": "Alt Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapping ClockTime (which doesn't provide a Read instance!) seems\n easier than talking care of the serialization of UserStatus\n ourselves.\n\u003c/p\u003e",
          "module": "Lambdabot.AltTime",
          "name": "ClockTime",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-AltTime.html#ClockTime",
          "type": "data"
        },
        "index": {
          "description": "Wrapping ClockTime which doesn provide Read instance seems easier than talking care of the serialization of UserStatus ourselves",
          "hierarchy": "Lambdabot AltTime",
          "module": "Lambdabot.AltTime",
          "name": "ClockTime",
          "package": "lambdabot-utils",
          "partial": "Clock Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#t:ClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddToClockTime\u003c/a\u003e\u003c/code\u003e d t\u003c/code\u003e adds a time difference \u003ccode\u003ed\u003c/code\u003e and a -- clock\n time \u003ccode\u003et\u003c/code\u003e to yield a new clock time.\n\u003c/p\u003e",
          "module": "Lambdabot.AltTime",
          "name": "addToClockTime",
          "package": "lambdabot-utils",
          "signature": "TimeDiff -\u003e ClockTime -\u003e ClockTime",
          "source": "src/Lambdabot-AltTime.html#addToClockTime",
          "type": "function"
        },
        "index": {
          "description": "addToClockTime adds time difference and clock time to yield new clock time",
          "hierarchy": "Lambdabot AltTime",
          "module": "Lambdabot.AltTime",
          "name": "addToClockTime",
          "normalized": "TimeDiff-\u003eClockTime-\u003eClockTime",
          "package": "lambdabot-utils",
          "partial": "To Clock Time",
          "signature": "TimeDiff-\u003eClockTime-\u003eClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#v:addToClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference of two clock times\n\u003c/p\u003e",
          "module": "Lambdabot.AltTime",
          "name": "diffClockTimes",
          "package": "lambdabot-utils",
          "signature": "ClockTime -\u003e ClockTime -\u003e TimeDiff",
          "source": "src/Lambdabot-AltTime.html#diffClockTimes",
          "type": "function"
        },
        "index": {
          "description": "Difference of two clock times",
          "hierarchy": "Lambdabot AltTime",
          "module": "Lambdabot.AltTime",
          "name": "diffClockTimes",
          "normalized": "ClockTime-\u003eClockTime-\u003eTimeDiff",
          "package": "lambdabot-utils",
          "partial": "Clock Times",
          "signature": "ClockTime-\u003eClockTime-\u003eTimeDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#v:diffClockTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current clocktime\n\u003c/p\u003e",
          "module": "Lambdabot.AltTime",
          "name": "getClockTime",
          "package": "lambdabot-utils",
          "signature": "IO ClockTime",
          "source": "src/Lambdabot-AltTime.html#getClockTime",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the current clocktime",
          "hierarchy": "Lambdabot AltTime",
          "module": "Lambdabot.AltTime",
          "name": "getClockTime",
          "package": "lambdabot-utils",
          "partial": "Clock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#v:getClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a TimeDiff. Both positive and negative Timediffs produce\n   the same output.\n\u003c/p\u003e\u003cp\u003e14d 17h 8m 53s\n\u003c/p\u003e",
          "module": "Lambdabot.AltTime",
          "name": "timeDiffPretty",
          "package": "lambdabot-utils",
          "signature": "TimeDiff -\u003e String",
          "source": "src/Lambdabot-AltTime.html#timeDiffPretty",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print TimeDiff Both positive and negative Timediffs produce the same output",
          "hierarchy": "Lambdabot AltTime",
          "module": "Lambdabot.AltTime",
          "name": "timeDiffPretty",
          "normalized": "TimeDiff-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Diff Pretty",
          "signature": "TimeDiff-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-AltTime.html#v:timeDiffPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eError utilities\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lambdabot.Error",
          "name": "Error",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Error utilities",
          "hierarchy": "Lambdabot Error",
          "module": "Lambdabot.Error",
          "name": "Error",
          "package": "lambdabot-utils",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebracketError\u003c/a\u003e\u003c/code\u003e is the monadic version of DYNAMIC-WIND from Scheme\n   fame. Parameters are: before, after and m. before is the in-guard\n   being executed before m. after is the out-guard and protects fails\n   of the m.\n   In the Haskell world, this scheme is called a bracket and is often\n   seen employed to manage resources.\n\u003c/p\u003e",
          "module": "Lambdabot.Error",
          "name": "bracketError",
          "package": "lambdabot-utils",
          "signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "bracketError is the monadic version of DYNAMIC-WIND from Scheme fame Parameters are before after and before is the in-guard being executed before after is the out-guard and protects fails of the In the Haskell world this scheme is called bracket and is often seen employed to manage resources",
          "hierarchy": "Lambdabot Error",
          "module": "Lambdabot.Error",
          "name": "bracketError",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "lambdabot-utils",
          "partial": "Error",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:bracketError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebracketError_\u003c/a\u003e\u003c/code\u003e is the non-bound version of \u003ccode\u003e\u003ca\u003ebracketError\u003c/a\u003e\u003c/code\u003e. The\n   naming scheme follows usual Haskell convention.\n\u003c/p\u003e",
          "module": "Lambdabot.Error",
          "name": "bracketError_",
          "package": "lambdabot-utils",
          "signature": "m a-\u003e m b-\u003e m c-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "bracketError is the non-bound version of bracketError The naming scheme follows usual Haskell convention",
          "hierarchy": "Lambdabot Error",
          "module": "Lambdabot.Error",
          "name": "bracketError_",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "lambdabot-utils",
          "partial": "Error",
          "signature": "m a-\u003em b-\u003em c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:bracketError_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecatchErrorJust\u003c/a\u003e\u003c/code\u003e is an error catcher for the Maybe type. As input is given\n   a deciding function, a monad and a handler. When an error is caught, the\n   decider is executed to decide if the error should be handled or not.\n   Then the handler is eventually called to handle the error.\n\u003c/p\u003e",
          "module": "Lambdabot.Error",
          "name": "catchErrorJust",
          "package": "lambdabot-utils",
          "signature": "(e -\u003e Maybe b)-\u003e m a-\u003e (b -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "catchErrorJust is an error catcher for the Maybe type As input is given deciding function monad and handler When an error is caught the decider is executed to decide if the error should be handled or not Then the handler is eventually called to handle the error",
          "hierarchy": "Lambdabot Error",
          "module": "Lambdabot.Error",
          "name": "catchErrorJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
          "package": "lambdabot-utils",
          "partial": "Error Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003e(b-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:catchErrorJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efinallyError\u003c/a\u003e\u003c/code\u003e is a monadic version of the classic UNWIND-PROTECT of\n   lisp fame. Given parameters m and after (both monads) we proceed to\n   work on m. If an error is caught, we execute the out-guard, after,\n   before rethrowing the error. If m does not fail, after is executed\n   and the value of m is returned.\n\u003c/p\u003e",
          "module": "Lambdabot.Error",
          "name": "finallyError",
          "package": "lambdabot-utils",
          "signature": "m a-\u003e m b-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "finallyError is monadic version of the classic UNWIND-PROTECT of lisp fame Given parameters and after both monads we proceed to work on If an error is caught we execute the out-guard after before rethrowing the error If does not fail after is executed and the value of is returned",
          "hierarchy": "Lambdabot Error",
          "module": "Lambdabot.Error",
          "name": "finallyError",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "lambdabot-utils",
          "partial": "Error",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:finallyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehandleError\u003c/a\u003e\u003c/code\u003e is the flipped version of \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lambdabot.Error",
          "name": "handleError",
          "package": "lambdabot-utils",
          "signature": "(e -\u003e m a)-\u003e m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "handleError is the flipped version of catchError",
          "hierarchy": "Lambdabot Error",
          "module": "Lambdabot.Error",
          "name": "handleError",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "lambdabot-utils",
          "partial": "Error",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:handleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehandleErrorJust\u003c/a\u003e\u003c/code\u003e is the flipped version of \u003ccode\u003e\u003ca\u003ecatchErrorJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lambdabot.Error",
          "name": "handleErrorJust",
          "package": "lambdabot-utils",
          "signature": "(e -\u003e Maybe b)-\u003e (b -\u003e m a)-\u003e m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "handleErrorJust is the flipped version of catchErrorJust",
          "hierarchy": "Lambdabot Error",
          "module": "Lambdabot.Error",
          "name": "handleErrorJust",
          "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec d)-\u003ec d-\u003ec d",
          "package": "lambdabot-utils",
          "partial": "Error Just",
          "signature": "(e-\u003eMaybe b)-\u003e(b-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:handleErrorJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etryError\u003c/a\u003e\u003c/code\u003e uses Either to explicitly define the outcome of a\n   monadic operation. An error is caught and placed into Right,\n   whereas successful operation is placed into Left.\n\u003c/p\u003e",
          "module": "Lambdabot.Error",
          "name": "tryError",
          "package": "lambdabot-utils",
          "signature": "m a-\u003e m (Either e a)",
          "type": "function"
        },
        "index": {
          "description": "tryError uses Either to explicitly define the outcome of monadic operation An error is caught and placed into Right whereas successful operation is placed into Left",
          "hierarchy": "Lambdabot Error",
          "module": "Lambdabot.Error",
          "name": "tryError",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "lambdabot-utils",
          "partial": "Error",
          "signature": "m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:tryError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etryErrorJust\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003ecatchErrorJust\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003etryError\u003c/a\u003e\u003c/code\u003e\n   given is a decider guarding whether or not the error should be\n   handled. The handler will always Right and no errors are Left'ed\n   through. If the decider returns Nothing, the error will be thrown\n   further up.\n\u003c/p\u003e",
          "module": "Lambdabot.Error",
          "name": "tryErrorJust",
          "package": "lambdabot-utils",
          "signature": "(e -\u003e Maybe b)-\u003e m a-\u003e m (Either b a)",
          "type": "function"
        },
        "index": {
          "description": "tryErrorJust is the catchErrorJust version of tryError given is decider guarding whether or not the error should be handled The handler will always Right and no errors are Left ed through If the decider returns Nothing the error will be thrown further up",
          "hierarchy": "Lambdabot Error",
          "module": "Lambdabot.Error",
          "name": "tryErrorJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
          "package": "lambdabot-utils",
          "partial": "Error Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003em(Either b a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Error.html#v:tryErrorJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.FixPrecedence",
          "name": "FixPrecedence",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-FixPrecedence.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lambdabot FixPrecedence",
          "module": "Lambdabot.FixPrecedence",
          "name": "FixPrecedence",
          "package": "lambdabot-utils",
          "partial": "Fix Precedence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.FixPrecedence",
          "name": "FixPrecedence",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-FixPrecedence.html#FixPrecedence",
          "type": "class"
        },
        "index": {
          "hierarchy": "Lambdabot FixPrecedence",
          "module": "Lambdabot.FixPrecedence",
          "name": "FixPrecedence",
          "package": "lambdabot-utils",
          "partial": "Fix Precedence",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#t:FixPrecedence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.FixPrecedence",
          "name": "fixPrecedence",
          "package": "lambdabot-utils",
          "signature": "a -\u003e a",
          "source": "src/Lambdabot-FixPrecedence.html#fixPrecedence",
          "type": "method"
        },
        "index": {
          "hierarchy": "Lambdabot FixPrecedence",
          "module": "Lambdabot.FixPrecedence",
          "name": "fixPrecedence",
          "normalized": "a-\u003ea",
          "package": "lambdabot-utils",
          "partial": "Precedence",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#v:fixPrecedence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.FixPrecedence",
          "name": "precTable",
          "package": "lambdabot-utils",
          "signature": "PrecedenceData",
          "source": "src/Lambdabot-FixPrecedence.html#precTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot FixPrecedence",
          "module": "Lambdabot.FixPrecedence",
          "name": "precTable",
          "package": "lambdabot-utils",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#v:precTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.FixPrecedence",
          "name": "withPrecDecl",
          "package": "lambdabot-utils",
          "signature": "PrecedenceData -\u003e HsDecl -\u003e (PrecedenceData, HsDecl)",
          "source": "src/Lambdabot-FixPrecedence.html#withPrecDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot FixPrecedence",
          "module": "Lambdabot.FixPrecedence",
          "name": "withPrecDecl",
          "normalized": "PrecedenceData-\u003eHsDecl-\u003e(PrecedenceData,HsDecl)",
          "package": "lambdabot-utils",
          "partial": "Prec Decl",
          "signature": "PrecedenceData-\u003eHsDecl-\u003e(PrecedenceData,HsDecl)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#v:withPrecDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.FixPrecedence",
          "name": "withPrecExp",
          "package": "lambdabot-utils",
          "signature": "PrecedenceData -\u003e HsExp -\u003e HsExp",
          "source": "src/Lambdabot-FixPrecedence.html#withPrecExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot FixPrecedence",
          "module": "Lambdabot.FixPrecedence",
          "name": "withPrecExp",
          "normalized": "PrecedenceData-\u003eHsExp-\u003eHsExp",
          "package": "lambdabot-utils",
          "partial": "Prec Exp",
          "signature": "PrecedenceData-\u003eHsExp-\u003eHsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-FixPrecedence.html#v:withPrecExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHTTP protocol binding.\n \u003ca\u003ehttp://homepages.paradise.net.nz/warrickg/haskell/http/\u003c/a\u003e\n \u003ca\u003ehttp://www.dtek.chalmers.se/~d00bring/haskell-xml-rpc/http.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lambdabot.MiniHTTP",
          "name": "MiniHTTP",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-MiniHTTP.html",
          "type": "module"
        },
        "index": {
          "description": "HTTP protocol binding http homepages.paradise.net.nz warrickg haskell http http www.dtek.chalmers.se d00bring haskell-xml-rpc http.html",
          "hierarchy": "Lambdabot MiniHTTP",
          "module": "Lambdabot.MiniHTTP",
          "name": "MiniHTTP",
          "package": "lambdabot-utils",
          "partial": "Mini HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.MiniHTTP",
          "name": "Proxy",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-MiniHTTP.html#Proxy",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lambdabot MiniHTTP",
          "module": "Lambdabot.MiniHTTP",
          "name": "Proxy",
          "package": "lambdabot-utils",
          "partial": "Proxy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.MiniHTTP",
          "name": "mkPost",
          "package": "lambdabot-utils",
          "signature": "URI -\u003e String -\u003e [String]",
          "source": "src/Lambdabot-MiniHTTP.html#mkPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot MiniHTTP",
          "module": "Lambdabot.MiniHTTP",
          "name": "mkPost",
          "normalized": "URI-\u003eString-\u003e[String]",
          "package": "lambdabot-utils",
          "partial": "Post",
          "signature": "URI-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:mkPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.MiniHTTP",
          "name": "readNBytes",
          "package": "lambdabot-utils",
          "signature": "Int -\u003e Proxy -\u003e URI -\u003e [String] -\u003e String -\u003e IO [String]",
          "source": "src/Lambdabot-MiniHTTP.html#readNBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot MiniHTTP",
          "module": "Lambdabot.MiniHTTP",
          "name": "readNBytes",
          "normalized": "Int-\u003eProxy-\u003eURI-\u003e[String]-\u003eString-\u003eIO[String]",
          "package": "lambdabot-utils",
          "partial": "NBytes",
          "signature": "Int-\u003eProxy-\u003eURI-\u003e[String]-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:readNBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.MiniHTTP",
          "name": "readPage",
          "package": "lambdabot-utils",
          "signature": "Proxy -\u003e URI -\u003e [String] -\u003e String -\u003e IO [String]",
          "source": "src/Lambdabot-MiniHTTP.html#readPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot MiniHTTP",
          "module": "Lambdabot.MiniHTTP",
          "name": "readPage",
          "normalized": "Proxy-\u003eURI-\u003e[String]-\u003eString-\u003eIO[String]",
          "package": "lambdabot-utils",
          "partial": "Page",
          "signature": "Proxy-\u003eURI-\u003e[String]-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:readPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.MiniHTTP",
          "name": "urlDecode",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-MiniHTTP.html#urlDecode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot MiniHTTP",
          "module": "Lambdabot.MiniHTTP",
          "name": "urlDecode",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Decode",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:urlDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.MiniHTTP",
          "name": "urlEncode",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-MiniHTTP.html#urlEncode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot MiniHTTP",
          "module": "Lambdabot.MiniHTTP",
          "name": "urlEncode",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Encode",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-MiniHTTP.html#v:urlEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Parser",
          "name": "Parser",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lambdabot Parser",
          "module": "Lambdabot.Parser",
          "name": "Parser",
          "package": "lambdabot-utils",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Parser",
          "name": "parseDecl",
          "package": "lambdabot-utils",
          "signature": "String -\u003e Either String HsDecl",
          "source": "src/Lambdabot-Parser.html#parseDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Parser",
          "module": "Lambdabot.Parser",
          "name": "parseDecl",
          "normalized": "String-\u003eEither String HsDecl",
          "package": "lambdabot-utils",
          "partial": "Decl",
          "signature": "String-\u003eEither String HsDecl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#v:parseDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Parser",
          "name": "parseExpr",
          "package": "lambdabot-utils",
          "signature": "String -\u003e Either String HsExp",
          "source": "src/Lambdabot-Parser.html#parseExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Parser",
          "module": "Lambdabot.Parser",
          "name": "parseExpr",
          "normalized": "String-\u003eEither String HsExp",
          "package": "lambdabot-utils",
          "partial": "Expr",
          "signature": "String-\u003eEither String HsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#v:parseExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Parser",
          "name": "prettyPrintInLine",
          "package": "lambdabot-utils",
          "signature": "a -\u003e String",
          "source": "src/Lambdabot-Parser.html#prettyPrintInLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Parser",
          "module": "Lambdabot.Parser",
          "name": "prettyPrintInLine",
          "normalized": "a-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Print In Line",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#v:prettyPrintInLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Parser",
          "name": "withParsed",
          "package": "lambdabot-utils",
          "signature": "a -\u003e a) -\u003e String -\u003e String",
          "source": "src/Lambdabot-Parser.html#withParsed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Parser",
          "module": "Lambdabot.Parser",
          "name": "withParsed",
          "normalized": "a-\u003ea)-\u003eString-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Parsed",
          "signature": "a-\u003ea)-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Parser.html#v:withParsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Pointful",
          "name": "Pointful",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Pointful.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lambdabot Pointful",
          "module": "Lambdabot.Pointful",
          "name": "Pointful",
          "package": "lambdabot-utils",
          "partial": "Pointful",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.\n\u003c/p\u003e",
          "module": "Lambdabot.Pointful",
          "name": "ParseResult",
          "package": "lambdabot-utils",
          "type": "data"
        },
        "index": {
          "description": "The result of parse",
          "hierarchy": "Lambdabot Pointful",
          "module": "Lambdabot.Pointful",
          "name": "ParseResult",
          "package": "lambdabot-utils",
          "partial": "Parse Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#t:ParseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse failed at the specified\n source location, with an error message.\n\u003c/p\u003e",
          "module": "Lambdabot.Pointful",
          "name": "ParseFailed",
          "package": "lambdabot-utils",
          "signature": "ParseFailed SrcLoc String",
          "type": "function"
        },
        "index": {
          "description": "The parse failed at the specified source location with an error message",
          "hierarchy": "Lambdabot Pointful",
          "module": "Lambdabot.Pointful",
          "name": "ParseFailed",
          "package": "lambdabot-utils",
          "partial": "Parse Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:ParseFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse succeeded, yielding a value.\n\u003c/p\u003e",
          "module": "Lambdabot.Pointful",
          "name": "ParseOk",
          "package": "lambdabot-utils",
          "signature": "ParseOk a",
          "type": "function"
        },
        "index": {
          "description": "The parse succeeded yielding value",
          "hierarchy": "Lambdabot Pointful",
          "module": "Lambdabot.Pointful",
          "name": "ParseOk",
          "package": "lambdabot-utils",
          "partial": "Parse Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:ParseOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Pointful",
          "name": "combinatorModule",
          "package": "lambdabot-utils",
          "signature": "String",
          "source": "src/Lambdabot-Pointful.html#combinatorModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Pointful",
          "module": "Lambdabot.Pointful",
          "name": "combinatorModule",
          "package": "lambdabot-utils",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:combinatorModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Pointful",
          "name": "main",
          "package": "lambdabot-utils",
          "signature": "IO ()",
          "source": "src/Lambdabot-Pointful.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Pointful",
          "module": "Lambdabot.Pointful",
          "name": "main",
          "normalized": "IO()",
          "package": "lambdabot-utils",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Pointful",
          "name": "pointful",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-Pointful.html#pointful",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Pointful",
          "module": "Lambdabot.Pointful",
          "name": "pointful",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:pointful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Pointful",
          "name": "test",
          "package": "lambdabot-utils",
          "signature": "String -\u003e IO ()",
          "source": "src/Lambdabot-Pointful.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Pointful",
          "module": "Lambdabot.Pointful",
          "name": "test",
          "normalized": "String-\u003eIO()",
          "package": "lambdabot-utils",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Pointful.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Posix.popen compatibility mapping.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lambdabot.Process",
          "name": "Process",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Process.html",
          "type": "module"
        },
        "index": {
          "description": "Posix.popen compatibility mapping",
          "hierarchy": "Lambdabot Process",
          "module": "Lambdabot.Process",
          "name": "Process",
          "package": "lambdabot-utils",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epopen lets you run a binary with specified arguments. This bypasses the shell.\n | It'll also terminate (SIGTERM) the spawned process in case of\n | exception, this is very important if the timeout for a Plugin\n | expires while it is waiting for the result of a looping process.\n | It's fundamental to link the final executable with -threaded.\n\u003c/p\u003e",
          "module": "Lambdabot.Process",
          "name": "popen",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003e [String]-\u003e Maybe String-\u003e IO (String, String, ExitCode)",
          "type": "function"
        },
        "index": {
          "description": "popen lets you run binary with specified arguments This bypasses the shell It ll also terminate SIGTERM the spawned process in case of exception this is very important if the timeout for Plugin expires while it is waiting for the result of looping process It fundamental to link the final executable with threaded",
          "hierarchy": "Lambdabot Process",
          "module": "Lambdabot.Process",
          "name": "popen",
          "normalized": "FilePath-\u003e[String]-\u003eMaybe String-\u003eIO(String,String,ExitCode)",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003e[String]-\u003eMaybe String-\u003eIO(String,String,ExitCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Process.html#v:popen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Process",
          "name": "run",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e String -\u003e (String -\u003e String) -\u003e IO String",
          "source": "src/Lambdabot-Process.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Process",
          "module": "Lambdabot.Process",
          "name": "run",
          "normalized": "FilePath-\u003eString-\u003e(String-\u003eString)-\u003eIO String",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003eString-\u003e(String-\u003eString)-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Process.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Regex",
          "name": "Regex",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Regex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lambdabot Regex",
          "module": "Lambdabot.Regex",
          "name": "Regex",
          "package": "lambdabot-utils",
          "partial": "Regex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Regex",
          "name": "matches",
          "package": "lambdabot-utils",
          "signature": "Regex -\u003e ByteString -\u003e Bool",
          "source": "src/Lambdabot-Regex.html#matches",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Regex",
          "module": "Lambdabot.Regex",
          "name": "matches",
          "normalized": "Regex-\u003eByteString-\u003eBool",
          "package": "lambdabot-utils",
          "signature": "Regex-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Regex",
          "name": "matches'",
          "package": "lambdabot-utils",
          "signature": "Regex -\u003e String -\u003e Bool",
          "source": "src/Lambdabot-Regex.html#matches%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Regex",
          "module": "Lambdabot.Regex",
          "name": "matches'",
          "normalized": "Regex-\u003eString-\u003eBool",
          "package": "lambdabot-utils",
          "signature": "Regex-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#v:matches-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Regex",
          "name": "regex",
          "package": "lambdabot-utils",
          "signature": "ByteString -\u003e Regex",
          "source": "src/Lambdabot-Regex.html#regex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Regex",
          "module": "Lambdabot.Regex",
          "name": "regex",
          "normalized": "ByteString-\u003eRegex",
          "package": "lambdabot-utils",
          "signature": "ByteString-\u003eRegex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#v:regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Regex",
          "name": "regex'",
          "package": "lambdabot-utils",
          "signature": "String -\u003e Regex",
          "source": "src/Lambdabot-Regex.html#regex%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Regex",
          "module": "Lambdabot.Regex",
          "name": "regex'",
          "normalized": "String-\u003eRegex",
          "package": "lambdabot-utils",
          "signature": "String-\u003eRegex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Regex.html#v:regex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSerialisation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lambdabot.Serial",
          "name": "Serial",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Serial.html",
          "type": "module"
        },
        "index": {
          "description": "Serialisation",
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "Serial",
          "package": "lambdabot-utils",
          "partial": "Serial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "Packable",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Serial.html#Packable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "Packable",
          "package": "lambdabot-utils",
          "partial": "Packable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#t:Packable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "Serial",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Serial.html#Serial",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "Serial",
          "package": "lambdabot-utils",
          "partial": "Serial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#t:Serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "Serial",
          "package": "lambdabot-utils",
          "signature": "Serial",
          "source": "src/Lambdabot-Serial.html#Serial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "Serial",
          "package": "lambdabot-utils",
          "partial": "Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:Serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "assocListPackedSerial",
          "package": "lambdabot-utils",
          "signature": "Serial [(ByteString, ByteString)]",
          "source": "src/Lambdabot-Serial.html#assocListPackedSerial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "assocListPackedSerial",
          "normalized": "Serial[(ByteString,ByteString)]",
          "package": "lambdabot-utils",
          "partial": "List Packed Serial",
          "signature": "Serial[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:assocListPackedSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "deserialize",
          "package": "lambdabot-utils",
          "signature": "ByteString -\u003e Maybe s",
          "source": "src/Lambdabot-Serial.html#Serial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "deserialize",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "lambdabot-utils",
          "signature": "ByteString-\u003eMaybe s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "gunzip",
          "package": "lambdabot-utils",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Lambdabot-Serial.html#gunzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "gunzip",
          "normalized": "ByteString-\u003eByteString",
          "package": "lambdabot-utils",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:gunzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "gzip",
          "package": "lambdabot-utils",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Lambdabot-Serial.html#gzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "gzip",
          "normalized": "ByteString-\u003eByteString",
          "package": "lambdabot-utils",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:gzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a list of \u003ccode\u003ea\u003c/code\u003es. As for the \u003ccode\u003emapSerializer\u003c/code\u003e, its output is line-wise.\n\u003c/p\u003e",
          "module": "Lambdabot.Serial",
          "name": "listSerial",
          "package": "lambdabot-utils",
          "signature": "Serial [a]",
          "source": "src/Lambdabot-Serial.html#listSerial",
          "type": "function"
        },
        "index": {
          "description": "Serialize list of As for the mapSerializer its output is line-wise",
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "listSerial",
          "normalized": "Serial[a]",
          "package": "lambdabot-utils",
          "partial": "Serial",
          "signature": "Serial[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:listSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "mapListPackedSerial",
          "package": "lambdabot-utils",
          "signature": "Serial (Map ByteString [ByteString])",
          "source": "src/Lambdabot-Serial.html#mapListPackedSerial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "mapListPackedSerial",
          "normalized": "Serial(Map ByteString[ByteString])",
          "package": "lambdabot-utils",
          "partial": "List Packed Serial",
          "signature": "Serial(Map ByteString[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:mapListPackedSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "mapPackedSerial",
          "package": "lambdabot-utils",
          "signature": "Serial (Map ByteString ByteString)",
          "source": "src/Lambdabot-Serial.html#mapPackedSerial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "mapPackedSerial",
          "package": "lambdabot-utils",
          "partial": "Packed Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:mapPackedSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerializes a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e type if both the key and the value are instances\n of Read and Show. The serialization is done by converting the map to\n and from lists. Results are saved line-wise, for better editing and\n revison control.\n\u003c/p\u003e",
          "module": "Lambdabot.Serial",
          "name": "mapSerial",
          "package": "lambdabot-utils",
          "signature": "Serial (Map k v)",
          "source": "src/Lambdabot-Serial.html#mapSerial",
          "type": "function"
        },
        "index": {
          "description": "Serializes Map type if both the key and the value are instances of Read and Show The serialization is done by converting the map to and from lists Results are saved line-wise for better editing and revison control",
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "mapSerial",
          "package": "lambdabot-utils",
          "partial": "Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:mapSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "packedListSerial",
          "package": "lambdabot-utils",
          "signature": "Serial [ByteString]",
          "source": "src/Lambdabot-Serial.html#packedListSerial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "packedListSerial",
          "normalized": "Serial[ByteString]",
          "package": "lambdabot-utils",
          "partial": "List Serial",
          "signature": "Serial[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:packedListSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereadM\u003c/a\u003e\u003c/code\u003e behaves like read, but catches failure in a monad.\n this allocates a 20-30 M on startup...\n\u003c/p\u003e",
          "module": "Lambdabot.Serial",
          "name": "readM",
          "package": "lambdabot-utils",
          "signature": "String -\u003e m a",
          "source": "src/Lambdabot-Serial.html#readM",
          "type": "function"
        },
        "index": {
          "description": "readM behaves like read but catches failure in monad this allocates on startup",
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "readM",
          "normalized": "String-\u003ea b",
          "package": "lambdabot-utils",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:readM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "readOnly",
          "package": "lambdabot-utils",
          "signature": "(ByteString -\u003e b) -\u003e Serial b",
          "source": "src/Lambdabot-Serial.html#readOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "readOnly",
          "normalized": "(ByteString-\u003ea)-\u003eSerial a",
          "package": "lambdabot-utils",
          "partial": "Only",
          "signature": "(ByteString-\u003eb)-\u003eSerial b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:readOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "readPacked",
          "package": "lambdabot-utils",
          "signature": "ByteString -\u003e t",
          "source": "src/Lambdabot-Serial.html#readPacked",
          "type": "method"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "readPacked",
          "normalized": "ByteString-\u003ea",
          "package": "lambdabot-utils",
          "partial": "Packed",
          "signature": "ByteString-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:readPacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "serialize",
          "package": "lambdabot-utils",
          "signature": "s -\u003e Maybe ByteString",
          "source": "src/Lambdabot-Serial.html#Serial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "serialize",
          "normalized": "a-\u003eMaybe ByteString",
          "package": "lambdabot-utils",
          "signature": "s-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Serial",
          "name": "showPacked",
          "package": "lambdabot-utils",
          "signature": "t -\u003e ByteString",
          "source": "src/Lambdabot-Serial.html#showPacked",
          "type": "method"
        },
        "index": {
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "showPacked",
          "normalized": "a-\u003eByteString",
          "package": "lambdabot-utils",
          "partial": "Packed",
          "signature": "t-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:showPacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault `instance' for a Serial\n\u003c/p\u003e",
          "module": "Lambdabot.Serial",
          "name": "stdSerial",
          "package": "lambdabot-utils",
          "signature": "Serial s",
          "source": "src/Lambdabot-Serial.html#stdSerial",
          "type": "function"
        },
        "index": {
          "description": "Default instance for Serial",
          "hierarchy": "Lambdabot Serial",
          "module": "Lambdabot.Serial",
          "name": "stdSerial",
          "package": "lambdabot-utils",
          "partial": "Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Serial.html#v:stdSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe signal story.\n Posix signals are external events that invoke signal handlers in\n Haskell. The signal handlers in turn throw dynamic exceptions.  Our\n instance of MonadError for LB maps the dynamic exceptions to\n SignalCaughts, which can then be caught by a normal catchIrc or\n handleIrc\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lambdabot.Signals",
          "name": "Signals",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Signals.html",
          "type": "module"
        },
        "index": {
          "description": "The signal story Posix signals are external events that invoke signal handlers in Haskell The signal handlers in turn throw dynamic exceptions Our instance of MonadError for LB maps the dynamic exceptions to SignalCaughts which can then be caught by normal catchIrc or handleIrc",
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "Signals",
          "package": "lambdabot-utils",
          "partial": "Signals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Signals",
          "name": "SignalException",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Signals.html#SignalException",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "SignalException",
          "package": "lambdabot-utils",
          "partial": "Signal Exception",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#t:SignalException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Signals",
          "name": "SignalException",
          "package": "lambdabot-utils",
          "signature": "SignalException Signal",
          "source": "src/Lambdabot-Signals.html#SignalException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "SignalException",
          "package": "lambdabot-utils",
          "partial": "Signal Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:SignalException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Signals",
          "name": "catchLock",
          "package": "lambdabot-utils",
          "signature": "MVar ()",
          "source": "src/Lambdabot-Signals.html#catchLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "catchLock",
          "normalized": "MVar()",
          "package": "lambdabot-utils",
          "partial": "Lock",
          "signature": "MVar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:catchLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Signals",
          "name": "ircSignalHandler",
          "package": "lambdabot-utils",
          "signature": "ThreadId -\u003e Signal -\u003e Handler",
          "source": "src/Lambdabot-Signals.html#ircSignalHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "ircSignalHandler",
          "normalized": "ThreadId-\u003eSignal-\u003eHandler",
          "package": "lambdabot-utils",
          "partial": "Signal Handler",
          "signature": "ThreadId-\u003eSignal-\u003eHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:ircSignalHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Signals",
          "name": "ircSignalMessage",
          "package": "lambdabot-utils",
          "signature": "Signal -\u003e [Char]",
          "source": "src/Lambdabot-Signals.html#ircSignalMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "ircSignalMessage",
          "normalized": "Signal-\u003e[Char]",
          "package": "lambdabot-utils",
          "partial": "Signal Message",
          "signature": "Signal-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:ircSignalMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Signals",
          "name": "ircSignalsToCatch",
          "package": "lambdabot-utils",
          "signature": "[Signal]",
          "source": "src/Lambdabot-Signals.html#ircSignalsToCatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "ircSignalsToCatch",
          "normalized": "[Signal]",
          "package": "lambdabot-utils",
          "partial": "Signals To Catch",
          "signature": "[Signal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:ircSignalsToCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease all signal handlers\n\u003c/p\u003e",
          "module": "Lambdabot.Signals",
          "name": "releaseSignals",
          "package": "lambdabot-utils",
          "signature": "IO ()",
          "source": "src/Lambdabot-Signals.html#releaseSignals",
          "type": "function"
        },
        "index": {
          "description": "Release all signal handlers",
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "releaseSignals",
          "normalized": "IO()",
          "package": "lambdabot-utils",
          "partial": "Signals",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:releaseSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Signals",
          "name": "withHandler",
          "package": "lambdabot-utils",
          "signature": "Signal -\u003e Handler -\u003e m () -\u003e m ()",
          "source": "src/Lambdabot-Signals.html#withHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "withHandler",
          "normalized": "Signal-\u003eHandler-\u003ea()-\u003ea()",
          "package": "lambdabot-utils",
          "partial": "Handler",
          "signature": "Signal-\u003eHandler-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:withHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Signals",
          "name": "withHandlerList",
          "package": "lambdabot-utils",
          "signature": "[Signal] -\u003e (Signal -\u003e Handler) -\u003e m () -\u003e m ()",
          "source": "src/Lambdabot-Signals.html#withHandlerList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "withHandlerList",
          "normalized": "[Signal]-\u003e(Signal-\u003eHandler)-\u003ea()-\u003ea()",
          "package": "lambdabot-utils",
          "partial": "Handler List",
          "signature": "[Signal]-\u003e(Signal-\u003eHandler)-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:withHandlerList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister signal handlers to catch external signals\n\u003c/p\u003e",
          "module": "Lambdabot.Signals",
          "name": "withIrcSignalCatch",
          "package": "lambdabot-utils",
          "signature": "m () -\u003e m ()",
          "source": "src/Lambdabot-Signals.html#withIrcSignalCatch",
          "type": "function"
        },
        "index": {
          "description": "Register signal handlers to catch external signals",
          "hierarchy": "Lambdabot Signals",
          "module": "Lambdabot.Signals",
          "name": "withIrcSignalCatch",
          "normalized": "a()-\u003ea()",
          "package": "lambdabot-utils",
          "partial": "Irc Signal Catch",
          "signature": "m()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Signals.html#v:withIrcSignalCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eURL Utility Functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lambdabot.Url",
          "name": "Url",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Url.html",
          "type": "module"
        },
        "index": {
          "description": "URL Utility Functions",
          "hierarchy": "Lambdabot Url",
          "module": "Lambdabot.Url",
          "name": "Url",
          "package": "lambdabot-utils",
          "partial": "Url",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the specified header from the server response being\n careful to strip the trailing carriage return.  I swiped this code\n from Search.hs, but had to modify it because it was not properly\n stripping off the trailing CR (must not have manifested itself as a\n bug in that code; however, parseURI will fail against CR-terminated\n strings.\n\u003c/p\u003e",
          "module": "Lambdabot.Url",
          "name": "getHeader",
          "package": "lambdabot-utils",
          "signature": "String -\u003e [String] -\u003e Maybe String",
          "source": "src/Lambdabot-Url.html#getHeader",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the specified header from the server response being careful to strip the trailing carriage return swiped this code from Search.hs but had to modify it because it was not properly stripping off the trailing CR must not have manifested itself as bug in that code however parseURI will fail against CR-terminated strings",
          "hierarchy": "Lambdabot Url",
          "module": "Lambdabot.Url",
          "name": "getHeader",
          "normalized": "String-\u003e[String]-\u003eMaybe String",
          "package": "lambdabot-utils",
          "partial": "Header",
          "signature": "String-\u003e[String]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:getHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the contents of a URL following HTTP redirects.  It returns\n a list of strings comprising the server response which includes the\n status line, response headers, and body.\n\u003c/p\u003e",
          "module": "Lambdabot.Url",
          "name": "getHtmlPage",
          "package": "lambdabot-utils",
          "signature": "URI -\u003e WebReq [String]",
          "source": "src/Lambdabot-Url.html#getHtmlPage",
          "type": "function"
        },
        "index": {
          "description": "Fetch the contents of URL following HTTP redirects It returns list of strings comprising the server response which includes the status line response headers and body",
          "hierarchy": "Lambdabot Url",
          "module": "Lambdabot.Url",
          "name": "getHtmlPage",
          "normalized": "URI-\u003eWebReq[String]",
          "package": "lambdabot-utils",
          "partial": "Html Page",
          "signature": "URI-\u003eWebReq[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:getHtmlPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetches a page title for the specified URL.  This function should\n only be used by other plugins if and only if the result is not to\n be displayed in an IRC channel.  Instead, use \u003ccode\u003e\u003ca\u003eurlPageTitle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lambdabot.Url",
          "name": "rawPageTitle",
          "package": "lambdabot-utils",
          "signature": "String -\u003e WebReq (Maybe String)",
          "source": "src/Lambdabot-Url.html#rawPageTitle",
          "type": "function"
        },
        "index": {
          "description": "Fetches page title for the specified URL This function should only be used by other plugins if and only if the result is not to be displayed in an IRC channel Instead use urlPageTitle",
          "hierarchy": "Lambdabot Url",
          "module": "Lambdabot.Url",
          "name": "rawPageTitle",
          "normalized": "String-\u003eWebReq(Maybe String)",
          "package": "lambdabot-utils",
          "partial": "Page Title",
          "signature": "String-\u003eWebReq(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:rawPageTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Url",
          "name": "runWebReq",
          "package": "lambdabot-utils",
          "signature": "WebReq a -\u003e Proxy -\u003e IO a",
          "source": "src/Lambdabot-Url.html#runWebReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Url",
          "module": "Lambdabot.Url",
          "name": "runWebReq",
          "normalized": "WebReq a-\u003eProxy-\u003eIO a",
          "package": "lambdabot-utils",
          "partial": "Web Req",
          "signature": "WebReq a-\u003eProxy-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:runWebReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetches a page title suitable for display.  Ideally, other\n plugins should make use of this function if the result is to be\n displayed in an IRC channel because it ensures that a consistent\n look is used (and also lets the URL plugin effectively ignore\n contextual URLs that might be generated by another instance of\n lambdabot; the URL plugin matches on \u003ccode\u003e\u003ca\u003eurlTitlePrompt\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Lambdabot.Url",
          "name": "urlPageTitle",
          "package": "lambdabot-utils",
          "signature": "String -\u003e WebReq (Maybe String)",
          "source": "src/Lambdabot-Url.html#urlPageTitle",
          "type": "function"
        },
        "index": {
          "description": "Fetches page title suitable for display Ideally other plugins should make use of this function if the result is to be displayed in an IRC channel because it ensures that consistent look is used and also lets the URL plugin effectively ignore contextual URLs that might be generated by another instance of lambdabot the URL plugin matches on urlTitlePrompt",
          "hierarchy": "Lambdabot Url",
          "module": "Lambdabot.Url",
          "name": "urlPageTitle",
          "normalized": "String-\u003eWebReq(Maybe String)",
          "package": "lambdabot-utils",
          "partial": "Page Title",
          "signature": "String-\u003eWebReq(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:urlPageTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe string that I prepend to the quoted page title.\n\u003c/p\u003e",
          "module": "Lambdabot.Url",
          "name": "urlTitlePrompt",
          "package": "lambdabot-utils",
          "signature": "String",
          "source": "src/Lambdabot-Url.html#urlTitlePrompt",
          "type": "function"
        },
        "index": {
          "description": "The string that prepend to the quoted page title",
          "hierarchy": "Lambdabot Url",
          "module": "Lambdabot.Url",
          "name": "urlTitlePrompt",
          "package": "lambdabot-utils",
          "partial": "Title Prompt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Url.html#v:urlTitlePrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString and other utilities\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lambdabot.Util",
          "name": "Util",
          "package": "lambdabot-utils",
          "source": "src/Lambdabot-Util.html",
          "type": "module"
        },
        "index": {
          "description": "String and other utilities",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "Util",
          "package": "lambdabot-utils",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "(\u003c$\u003e)",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/Lambdabot-Util.html#%3C%24%3E",
          "type": "function"
        },
        "index": {
          "description": "join two path components",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "(\u003c+\u003e)",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/Lambdabot-Util.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "join two path components",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "(\u003c/\u003e)",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/Lambdabot-Util.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "join two path components",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "(\u003c\u003e)",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/Lambdabot-Util.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "join two path components",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "(\u003c.\u003e)",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/Lambdabot-Util.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "join two path components",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "addList",
          "package": "lambdabot-utils",
          "signature": "[(k, a)] -\u003e Map k a -\u003e Map k a",
          "source": "src/Lambdabot-Util.html#addList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "addList",
          "normalized": "[(a,b)]-\u003eMap a b-\u003eMap a b",
          "package": "lambdabot-utils",
          "partial": "List",
          "signature": "[(k,a)]-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:addList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eafter\u003c/a\u003e\u003c/code\u003e takes 2 strings, called the prefix and data. A necessary\n   precondition is that\n\u003c/p\u003e\u003cpre\u003e Data.List.isPrefixOf prefix data ===\u003e True\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eafter\u003c/a\u003e\u003c/code\u003e returns a string based on data, where the prefix has been\n   removed as well as any excess space characters. Example:\n\u003c/p\u003e\u003cpre\u003e after \"This is\" \"This is a string\" ===\u003e \"a string\"\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "after",
          "package": "lambdabot-utils",
          "signature": "String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "after takes strings called the prefix and data necessary precondition is that Data.List.isPrefixOf prefix data True after returns string based on data where the prefix has been removed as well as any excess space characters Example after This is This is string string",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "after",
          "normalized": "String-\u003eString-\u003eString",
          "package": "lambdabot-utils",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "arePrefixesOf",
          "package": "lambdabot-utils",
          "signature": "[String] -\u003e String -\u003e Bool",
          "source": "src/Lambdabot-Util.html#arePrefixesOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "arePrefixesOf",
          "normalized": "[String]-\u003eString-\u003eBool",
          "package": "lambdabot-utils",
          "partial": "Prefixes Of",
          "signature": "[String]-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:arePrefixesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "arePrefixesWithSpaceOf",
          "package": "lambdabot-utils",
          "signature": "[String] -\u003e String -\u003e Bool",
          "source": "src/Lambdabot-Util.html#arePrefixesWithSpaceOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "arePrefixesWithSpaceOf",
          "normalized": "[String]-\u003eString-\u003eBool",
          "package": "lambdabot-utils",
          "partial": "Prefixes With Space Of",
          "signature": "[String]-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:arePrefixesWithSpaceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "basename",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Lambdabot-Util.html#basename",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "basename",
          "normalized": "FilePath-\u003eFilePath",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:basename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak off the first piece of a list held together by glue,\n   leaving the glue attached to the remainder of the list.  Example:\n   Like break, but works with a [a] match.\n\u003c/p\u003e\u003cpre\u003e breakOnGlue \", \" \"one, two, three\" ===\u003e (\"one\", \", two, three\")\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "breakOnGlue",
          "package": "lambdabot-utils",
          "signature": "[a]-\u003e [a]-\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "Break off the first piece of list held together by glue leaving the glue attached to the remainder of the list Example Like break but works with match breakOnGlue one two three one two three",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "breakOnGlue",
          "normalized": "[a]-\u003e[a]-\u003e([a],[a])",
          "package": "lambdabot-utils",
          "partial": "On Glue",
          "signature": "[a]-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:breakOnGlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "choice",
          "package": "lambdabot-utils",
          "signature": "(r -\u003e Bool) -\u003e (r -\u003e a) -\u003e (r -\u003e a) -\u003e r -\u003e a",
          "source": "src/Lambdabot-Util.html#choice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "choice",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "package": "lambdabot-utils",
          "signature": "(r-\u003eBool)-\u003e(r-\u003ea)-\u003e(r-\u003ea)-\u003er-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eclean\u003c/a\u003e\u003c/code\u003e takes a Char x and returns [x] unless the Char is '\\CR' in\n   case [] is returned.\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "clean",
          "package": "lambdabot-utils",
          "signature": "Char -\u003e [Char]",
          "source": "src/Lambdabot-Util.html#clean",
          "type": "function"
        },
        "index": {
          "description": "clean takes Char and returns unless the Char is CR in case is returned",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "clean",
          "normalized": "Char-\u003e[Char]",
          "package": "lambdabot-utils",
          "signature": "Char-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:clean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind string in list with smallest levenshtein distance from first\n argument, return the string and the distance from pat it is.  Will\n return the alphabetically first match if there are multiple matches\n (this may not be desirable, e.g. \u003ca\u003emroe\u003c/a\u003e -\u003e \u003ca\u003emoo\u003c/a\u003e, not \u003ca\u003emore\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "closest",
          "package": "lambdabot-utils",
          "signature": "String -\u003e [String] -\u003e (Int, String)",
          "source": "src/Lambdabot-Util.html#closest",
          "type": "function"
        },
        "index": {
          "description": "Find string in list with smallest levenshtein distance from first argument return the string and the distance from pat it is Will return the alphabetically first match if there are multiple matches this may not be desirable e.g mroe moo not more",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "closest",
          "normalized": "String-\u003e[String]-\u003e(Int,String)",
          "package": "lambdabot-utils",
          "signature": "String-\u003e[String]-\u003e(Int,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:closest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "closests",
          "package": "lambdabot-utils",
          "signature": "String -\u003e [String] -\u003e (Int, [String])",
          "source": "src/Lambdabot-Util.html#closests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "closests",
          "normalized": "String-\u003e[String]-\u003e(Int,[String])",
          "package": "lambdabot-utils",
          "signature": "String-\u003e[String]-\u003e(Int,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:closests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcatWith\u003c/a\u003e\u003c/code\u003e joins lists with the given glue elements. Example:\n\u003c/p\u003e\u003cpre\u003e concatWith \", \" [\"one\",\"two\",\"three\"] ===\u003e \"one, two, three\"\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "concatWith",
          "package": "lambdabot-utils",
          "signature": "[a]-\u003e [[a]]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "concatWith joins lists with the given glue elements Example concatWith one two three one two three",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "concatWith",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "lambdabot-utils",
          "partial": "With",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:concatWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "confirmation",
          "package": "lambdabot-utils",
          "signature": "[String]",
          "source": "src/Lambdabot-Util.html#confirmation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "confirmation",
          "normalized": "[String]",
          "package": "lambdabot-utils",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:confirmation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edebugStr\u003c/a\u003e\u003c/code\u003e checks if we have the verbose flag turned on. If we have\n   it outputs the String given. Else, it is a no-op.\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "debugStr",
          "package": "lambdabot-utils",
          "signature": "String -\u003e m ()",
          "source": "src/Lambdabot-Util.html#debugStr",
          "type": "function"
        },
        "index": {
          "description": "debugStr checks if we have the verbose flag turned on If we have it outputs the String given Else it is no-op",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "debugStr",
          "normalized": "String-\u003ea()",
          "package": "lambdabot-utils",
          "partial": "Str",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:debugStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edebugStrLn\u003c/a\u003e\u003c/code\u003e is a version of \u003ccode\u003e\u003ca\u003edebugStr\u003c/a\u003e\u003c/code\u003e that adds a newline to the end\n   of the string outputted.\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "debugStrLn",
          "package": "lambdabot-utils",
          "signature": "[Char] -\u003e m ()",
          "source": "src/Lambdabot-Util.html#debugStrLn",
          "type": "function"
        },
        "index": {
          "description": "debugStrLn is version of debugStr that adds newline to the end of the string outputted",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "debugStrLn",
          "normalized": "[Char]-\u003ea()",
          "package": "lambdabot-utils",
          "partial": "Str Ln",
          "signature": "[Char]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:debugStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "dirname",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Lambdabot-Util.html#dirname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "dirname",
          "normalized": "FilePath-\u003eFilePath",
          "package": "lambdabot-utils",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dirname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "dropNL",
          "package": "lambdabot-utils",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Lambdabot-Util.html#dropNL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "dropNL",
          "normalized": "[Char]-\u003e[Char]",
          "package": "lambdabot-utils",
          "partial": "NL",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dropNL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropSpace\u003c/a\u003e\u003c/code\u003e takes as input a String and strips spaces from the\n   prefix as well as the suffix of the String. Example:\n\u003c/p\u003e\u003cpre\u003e dropSpace \"   abc  \" ===\u003e \"abc\"\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "dropSpace",
          "package": "lambdabot-utils",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Lambdabot-Util.html#dropSpace",
          "type": "function"
        },
        "index": {
          "description": "dropSpace takes as input String and strips spaces from the prefix as well as the suffix of the String Example dropSpace abc abc",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "dropSpace",
          "normalized": "[Char]-\u003e[Char]",
          "package": "lambdabot-utils",
          "partial": "Space",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dropSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop space from the end of the string\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "dropSpaceEnd",
          "package": "lambdabot-utils",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Lambdabot-Util.html#dropSpaceEnd",
          "type": "function"
        },
        "index": {
          "description": "Drop space from the end of the string",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "dropSpaceEnd",
          "normalized": "[Char]-\u003e[Char]",
          "package": "lambdabot-utils",
          "partial": "Space End",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dropSpaceEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "dropSuffix",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Lambdabot-Util.html#dropSuffix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "dropSuffix",
          "normalized": "FilePath-\u003eFilePath",
          "package": "lambdabot-utils",
          "partial": "Suffix",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:dropSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euntab an string\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "expandTab",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-Util.html#expandTab",
          "type": "function"
        },
        "index": {
          "description": "untab an string",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "expandTab",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Tab",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:expandTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first word of a string. Example:\n\u003c/p\u003e\u003cpre\u003e first_word \"This is a fine day\" ===\u003e \"This\"\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "firstWord",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-Util.html#firstWord",
          "type": "function"
        },
        "index": {
          "description": "Get the first word of string Example first word This is fine day This",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "firstWord",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Word",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:firstWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetRandItem\u003c/a\u003e\u003c/code\u003e takes as input a list and a random number generator. It\n   then returns a random element from the list, paired with the altered\n   state of the RNG\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "getRandItem",
          "package": "lambdabot-utils",
          "signature": "[a]-\u003e g-\u003e (a, g)",
          "type": "function"
        },
        "index": {
          "description": "getRandItem takes as input list and random number generator It then returns random element from the list paired with the altered state of the RNG",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "getRandItem",
          "normalized": "[a]-\u003eb-\u003e(a,b)",
          "package": "lambdabot-utils",
          "partial": "Rand Item",
          "signature": "[a]-\u003eg-\u003e(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:getRandItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis makes way more sense than \u003ccode\u003einsertWith\u003c/code\u003e because we don't need to\n   remember the order of arguments of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "insertUpd",
          "package": "lambdabot-utils",
          "signature": "(a -\u003e a) -\u003e k -\u003e a -\u003e Map k a -\u003e Map k a",
          "source": "src/Lambdabot-Util.html#insertUpd",
          "type": "function"
        },
        "index": {
          "description": "This makes way more sense than insertWith because we don need to remember the order of arguments of",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "insertUpd",
          "normalized": "(a-\u003ea)-\u003eb-\u003ea-\u003eMap b a-\u003eMap b a",
          "package": "lambdabot-utils",
          "partial": "Upd",
          "signature": "(a-\u003ea)-\u003ek-\u003ea-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:insertUpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "insult",
          "package": "lambdabot-utils",
          "signature": "[String]",
          "source": "src/Lambdabot-Util.html#insult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "insult",
          "normalized": "[String]",
          "package": "lambdabot-utils",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:insult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "io",
          "package": "lambdabot-utils",
          "signature": "IO a -\u003e m a",
          "source": "src/Lambdabot-Util.html#io",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "io",
          "normalized": "IO a-\u003eb a",
          "package": "lambdabot-utils",
          "signature": "IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo functions that really should be in Data.Either\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "isLeft",
          "package": "lambdabot-utils",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Lambdabot-Util.html#isLeft",
          "type": "function"
        },
        "index": {
          "description": "Two functions that really should be in Data.Either",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "isLeft",
          "normalized": "Either a b-\u003eBool",
          "package": "lambdabot-utils",
          "partial": "Left",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo functions that really should be in Data.Either\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "isRight",
          "package": "lambdabot-utils",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Lambdabot-Util.html#isRight",
          "type": "function"
        },
        "index": {
          "description": "Two functions that really should be in Data.Either",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "isRight",
          "normalized": "Either a b-\u003eBool",
          "package": "lambdabot-utils",
          "partial": "Right",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "joinPath",
          "package": "lambdabot-utils",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/Lambdabot-Util.html#joinPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "joinPath",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "lambdabot-utils",
          "partial": "Path",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:joinPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003elistToMaybeAll = listToMaybeWith id\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "listToMaybeAll",
          "package": "lambdabot-utils",
          "signature": "[a] -\u003e Maybe [a]",
          "source": "src/Lambdabot-Util.html#listToMaybeAll",
          "type": "function"
        },
        "index": {
          "description": "listToMaybeAll listToMaybeWith id",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "listToMaybeAll",
          "normalized": "[a]-\u003eMaybe[a]",
          "package": "lambdabot-utils",
          "partial": "To Maybe All",
          "signature": "[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:listToMaybeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elistToMaybe\u003c/a\u003e\u003c/code\u003e, but take a function to use in case of a non-null list.\n   I.e. \u003ccode\u003elistToMaybe = listToMaybeWith head\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "listToMaybeWith",
          "package": "lambdabot-utils",
          "signature": "([a] -\u003e b) -\u003e [a] -\u003e Maybe b",
          "source": "src/Lambdabot-Util.html#listToMaybeWith",
          "type": "function"
        },
        "index": {
          "description": "Like listToMaybe but take function to use in case of non-null list I.e listToMaybe listToMaybeWith head",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "listToMaybeWith",
          "normalized": "([a]-\u003eb)-\u003e[a]-\u003eMaybe b",
          "package": "lambdabot-utils",
          "partial": "To Maybe With",
          "signature": "([a]-\u003eb)-\u003e[a]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:listToMaybeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a list of terms using a single conjunction. Example:\n\u003c/p\u003e\u003cpre\u003e listToStr \"and\" [\"a\", \"b\", \"c\"] ===\u003e \"a, b and c\"\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "listToStr",
          "package": "lambdabot-utils",
          "signature": "String -\u003e [String] -\u003e String",
          "source": "src/Lambdabot-Util.html#listToStr",
          "type": "function"
        },
        "index": {
          "description": "Form list of terms using single conjunction Example listToStr and and",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "listToStr",
          "normalized": "String-\u003e[String]-\u003eString",
          "package": "lambdabot-utils",
          "partial": "To Str",
          "signature": "String-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:listToStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elowerCaseString\u003c/a\u003e\u003c/code\u003e transforms the string given to lower case.\n\u003c/p\u003e\u003cpre\u003e Example: lowerCaseString \"MiXeDCaSe\" ===\u003e \"mixedcase\"\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "lowerCaseString",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-Util.html#lowerCaseString",
          "type": "function"
        },
        "index": {
          "description": "lowerCaseString transforms the string given to lower case Example lowerCaseString MiXeDCaSe mixedcase",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "lowerCaseString",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Case String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:lowerCaseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elowerize\u003c/a\u003e\u003c/code\u003e forces the first char of a string to be lowercase.\n   if the string is empty, the empty string is returned.\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "lowerize",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-Util.html#lowerize",
          "type": "function"
        },
        "index": {
          "description": "lowerize forces the first char of string to be lowercase if the string is empty the empty string is returned",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "lowerize",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:lowerize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData.Maybe.mapMaybe for Maps\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "mapMaybeMap",
          "package": "lambdabot-utils",
          "signature": "(a -\u003e Maybe b) -\u003e Map k a -\u003e Map k b",
          "source": "src/Lambdabot-Util.html#mapMaybeMap",
          "type": "function"
        },
        "index": {
          "description": "Data.Maybe.mapMaybe for Maps",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "mapMaybeMap",
          "normalized": "(a-\u003eMaybe b)-\u003eMap c a-\u003eMap c b",
          "package": "lambdabot-utils",
          "partial": "Maybe Map",
          "signature": "(a-\u003eMaybe b)-\u003eMap k a-\u003eMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:mapMaybeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "parIO",
          "package": "lambdabot-utils",
          "signature": "IO a -\u003e IO a -\u003e IO a",
          "source": "src/Lambdabot-Util.html#parIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "parIO",
          "normalized": "IO a-\u003eIO a-\u003eIO a",
          "package": "lambdabot-utils",
          "partial": "IO",
          "signature": "IO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:parIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "pprKeys",
          "package": "lambdabot-utils",
          "signature": "Map k a -\u003e String",
          "source": "src/Lambdabot-Util.html#pprKeys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "pprKeys",
          "normalized": "Map a b-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Keys",
          "signature": "Map k a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:pprKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003equote\u003c/a\u003e\u003c/code\u003e puts a string into quotes but does not escape quotes in\n   the string itself.\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "quote",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-Util.html#quote",
          "type": "function"
        },
        "index": {
          "description": "quote puts string into quotes but does not escape quotes in the string itself",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "quote",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "random",
          "package": "lambdabot-utils",
          "signature": "[a] -\u003e m a",
          "source": "src/Lambdabot-Util.html#random",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "random",
          "normalized": "[a]-\u003eb a",
          "package": "lambdabot-utils",
          "signature": "[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "randomElem",
          "package": "lambdabot-utils",
          "signature": "[a] -\u003e IO a",
          "source": "src/Lambdabot-Util.html#randomElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "randomElem",
          "normalized": "[a]-\u003eIO a",
          "package": "lambdabot-utils",
          "partial": "Elem",
          "signature": "[a]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:randomElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow a list without heavyweight formatting\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "showClean",
          "package": "lambdabot-utils",
          "signature": "[a] -\u003e String",
          "source": "src/Lambdabot-Util.html#showClean",
          "type": "function"
        },
        "index": {
          "description": "show list without heavyweight formatting",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "showClean",
          "normalized": "[a]-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Clean",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:showClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a number, padded to the left with zeroes up to the specified width\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "showWidth",
          "package": "lambdabot-utils",
          "signature": "Int-\u003e Int-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Show number padded to the left with zeroes up to the specified width",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "showWidth",
          "normalized": "Int-\u003eInt-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Width",
          "signature": "Int-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:showWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse cons. Add an element to the back of a list. Example:\n\u003c/p\u003e\u003cpre\u003e snoc 3 [2, 1] ===\u003e [2, 1, 3]\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "snoc",
          "package": "lambdabot-utils",
          "signature": "a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Reverse cons Add an element to the back of list Example snoc",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "snoc",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "lambdabot-utils",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a list into pieces that were held together by glue.  Example:\n\u003c/p\u003e\u003cpre\u003e split \", \" \"one, two, three\" ===\u003e [\"one\",\"two\",\"three\"]\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "split",
          "package": "lambdabot-utils",
          "signature": "[a]-\u003e [a]-\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "Split list into pieces that were held together by glue Example split one two three one two three",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "split",
          "normalized": "[a]-\u003e[a]-\u003e[[a]]",
          "package": "lambdabot-utils",
          "signature": "[a]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "split2",
          "package": "lambdabot-utils",
          "signature": "Char -\u003e Int -\u003e String -\u003e [String]",
          "source": "src/Lambdabot-Util.html#split2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "split2",
          "normalized": "Char-\u003eInt-\u003eString-\u003e[String]",
          "package": "lambdabot-utils",
          "signature": "Char-\u003eInt-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:split2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a String into it's first word, and the rest of the string. Example:\n\u003c/p\u003e\u003cpre\u003e split_first_word \"A fine day\" ===\u003e (\"A\", \"fine day)\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "splitFirstWord",
          "package": "lambdabot-utils",
          "signature": "String-\u003e (String, String)",
          "type": "function"
        },
        "index": {
          "description": "Break String into it first word and the rest of the string Example split first word fine day fine day",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "splitFirstWord",
          "normalized": "String-\u003e(String,String)",
          "package": "lambdabot-utils",
          "partial": "First Word",
          "signature": "String-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:splitFirstWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estdGetRandItem\u003c/a\u003e\u003c/code\u003e is the specialization of \u003ccode\u003e\u003ca\u003egetRandItem\u003c/a\u003e\u003c/code\u003e to the standard\n   RNG embedded within the IO monad. The advantage of using this is that\n   you use the Operating Systems provided RNG instead of rolling your own\n   and the state of the RNG is hidden, so one don't need to pass it\n   explicitly.\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "stdGetRandItem",
          "package": "lambdabot-utils",
          "signature": "[a] -\u003e IO a",
          "source": "src/Lambdabot-Util.html#stdGetRandItem",
          "type": "function"
        },
        "index": {
          "description": "stdGetRandItem is the specialization of getRandItem to the standard RNG embedded within the IO monad The advantage of using this is that you use the Operating Systems provided RNG instead of rolling your own and the state of the RNG is hidden so one don need to pass it explicitly",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "stdGetRandItem",
          "normalized": "[a]-\u003eIO a",
          "package": "lambdabot-utils",
          "partial": "Get Rand Item",
          "signature": "[a]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:stdGetRandItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lambdabot.Util",
          "name": "timeStamp",
          "package": "lambdabot-utils",
          "signature": "ClockTime -\u003e String",
          "source": "src/Lambdabot-Util.html#timeStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "timeStamp",
          "normalized": "ClockTime-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Stamp",
          "signature": "ClockTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:timeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun an action with a timeout\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "timeout",
          "package": "lambdabot-utils",
          "signature": "Int -\u003e IO a -\u003e IO (Maybe a)",
          "source": "src/Lambdabot-Util.html#timeout",
          "type": "function"
        },
        "index": {
          "description": "run an action with timeout",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "timeout",
          "normalized": "Int-\u003eIO a-\u003eIO(Maybe a)",
          "package": "lambdabot-utils",
          "signature": "Int-\u003eIO a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother useful Either function to easily get out of an Either\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "unEither",
          "package": "lambdabot-utils",
          "signature": "Either a a -\u003e a",
          "source": "src/Lambdabot-Util.html#unEither",
          "type": "function"
        },
        "index": {
          "description": "Another useful Either function to easily get out of an Either",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "unEither",
          "normalized": "Either a a-\u003ea",
          "package": "lambdabot-utils",
          "partial": "Either",
          "signature": "Either a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:unEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eupperCaseString\u003c/a\u003e\u003c/code\u003e transforms the string given to upper case.\n\u003c/p\u003e\u003cpre\u003e Example: upperCaseString \"MiXeDcaSe\" ===\u003e \"MIXEDCASE\"\n\u003c/pre\u003e",
          "module": "Lambdabot.Util",
          "name": "upperCaseString",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-Util.html#upperCaseString",
          "type": "function"
        },
        "index": {
          "description": "upperCaseString transforms the string given to upper case Example upperCaseString MiXeDcaSe MIXEDCASE",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "upperCaseString",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "partial": "Case String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:upperCaseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eupperize\u003c/a\u003e\u003c/code\u003e forces the first char of a string to be uppercase.\n   if the string is empty, the empty string is returned.\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "upperize",
          "package": "lambdabot-utils",
          "signature": "String -\u003e String",
          "source": "src/Lambdabot-Util.html#upperize",
          "type": "function"
        },
        "index": {
          "description": "upperize forces the first char of string to be uppercase if the string is empty the empty string is returned",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "upperize",
          "normalized": "String-\u003eString",
          "package": "lambdabot-utils",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:upperize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThread-safe modification of an MVar.\n\u003c/p\u003e",
          "module": "Lambdabot.Util",
          "name": "withMWriter",
          "package": "lambdabot-utils",
          "signature": "MVar a -\u003e (a -\u003e (a -\u003e IO ()) -\u003e IO b) -\u003e IO b",
          "source": "src/Lambdabot-Util.html#withMWriter",
          "type": "function"
        },
        "index": {
          "description": "Thread-safe modification of an MVar",
          "hierarchy": "Lambdabot Util",
          "module": "Lambdabot.Util",
          "name": "withMWriter",
          "normalized": "MVar a-\u003e(a-\u003e(a-\u003eIO())-\u003eIO b)-\u003eIO b",
          "package": "lambdabot-utils",
          "partial": "MWriter",
          "signature": "MVar a-\u003e(a-\u003e(a-\u003eIO())-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambdabot-utils/docs/Lambdabot-Util.html#v:withMWriter"
      }
    }
  ]
]