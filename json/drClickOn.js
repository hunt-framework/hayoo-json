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
        "word": "drClickOn"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic FRP basic definitions and composition functions.\n\u003c/p\u003e\u003cp\u003eSee the paper \u003ca\u003eMonadic Functional Reactive Programming\u003c/a\u003e by Atze van der Ploeg. Haskell Symposium '13. \u003ca\u003ehttp://homepages.cwi.nl/~ploeg/papers/monfrp.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAn example can be found at \u003ca\u003ehttps://github.com/cwi-swat/monadic-frp\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNotice that currently Monadic FRP relies on a closed union (ADT) of basic events, which has the following downsides:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Reactive level sharing requires an explicit call to a memoization function.\n\u003c/li\u003e\u003cli\u003e Reactive level recursion is problematic.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA function preprended with i indices a initialized signal variant of an signal computation function. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.MonadicFRP",
          "name": "MonadicFRP",
          "package": "drClickOn",
          "source": "src/Control-MonadicFRP.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic FRP basic definitions and composition functions See the paper Monadic Functional Reactive Programming by Atze van der Ploeg Haskell Symposium http homepages.cwi.nl ploeg papers monfrp.pdf An example can be found at https github.com cwi-swat monadic-frp Notice that currently Monadic FRP relies on closed union ADT of basic events which has the following downsides Reactive level sharing requires an explicit call to memoization function Reactive level recursion is problematic function preprended with indices initialized signal variant of an signal computation function",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "MonadicFRP",
          "package": "drClickOn",
          "partial": "Monadic FRP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for a set of event occurances\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "EvOccs",
          "package": "drClickOn",
          "source": "src/Control-MonadicFRP.html#EvOccs",
          "type": "type"
        },
        "index": {
          "description": "An alias for set of event occurances",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "EvOccs",
          "package": "drClickOn",
          "partial": "Ev Occs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#t:EvOccs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for a set of event requests\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "EvReqs",
          "package": "drClickOn",
          "source": "src/Control-MonadicFRP.html#EvReqs",
          "type": "type"
        },
        "index": {
          "description": "An alias for set of event requests",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "EvReqs",
          "package": "drClickOn",
          "partial": "Ev Reqs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#t:EvReqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "Event",
          "package": "drClickOn",
          "source": "src/Control-MonadicFRP.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "Event",
          "package": "drClickOn",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn initialized signal \n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "ISig",
          "package": "drClickOn",
          "source": "src/Control-MonadicFRP.html#ISig",
          "type": "data"
        },
        "index": {
          "description": "An initialized signal",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "ISig",
          "package": "drClickOn",
          "partial": "ISig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#t:ISig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reactive computation\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "React",
          "package": "drClickOn",
          "source": "src/Control-MonadicFRP.html#React",
          "type": "data"
        },
        "index": {
          "description": "reactive computation",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "React",
          "package": "drClickOn",
          "partial": "React",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#t:React"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal computation is a reactive computation of an initialized signal\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "Sig",
          "package": "drClickOn",
          "source": "src/Control-MonadicFRP.html#Sig",
          "type": "newtype"
        },
        "index": {
          "description": "signal computation is reactive computation of an initialized signal",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "Sig",
          "package": "drClickOn",
          "partial": "Sig",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#t:Sig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the values from the second signal computation to the values from the first signal computation over time. When one ends, the new state of both is returned.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "(\u003c^\u003e)",
          "package": "drClickOn",
          "signature": "Sig e (t -\u003e a) b -\u003e Sig e t t1 -\u003e Sig e a (ISig e (t -\u003e a) b, ISig e t t1)",
          "source": "src/Control-MonadicFRP.html#%3C%5E%3E",
          "type": "function"
        },
        "index": {
          "description": "Apply the values from the second signal computation to the values from the first signal computation over time When one ends the new state of both is returned",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "(\u003c^\u003e) \u003c^\u003e",
          "normalized": "Sig a(b-\u003ec)d-\u003eSig a b b-\u003eSig a c(ISig a(b-\u003ec)d,ISig a b b)",
          "package": "drClickOn",
          "signature": "Sig e(t-\u003ea)b-\u003eSig e t t-\u003eSig e a(ISig e(t-\u003ea)b,ISig e t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:-60--94--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": ":|",
          "package": "drClickOn",
          "signature": "a :| (Sig e a b)",
          "source": "src/Control-MonadicFRP.html#ISig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": ":|",
          "package": "drClickOn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v::-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "Await",
          "package": "drClickOn",
          "signature": "Await (EvReqs e) (EvOccs e -\u003e React e alpha)",
          "source": "src/Control-MonadicFRP.html#React",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "Await",
          "normalized": "Await(EvReqs a)(EvOccs a-\u003eReact a b)",
          "package": "drClickOn",
          "partial": "Await",
          "signature": "Await(EvReqs e)(EvOccs e-\u003eReact e alpha)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:Await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "Done",
          "package": "drClickOn",
          "signature": "Done alpha",
          "source": "src/Control-MonadicFRP.html#React",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "Done",
          "package": "drClickOn",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "End",
          "package": "drClickOn",
          "signature": "End b",
          "source": "src/Control-MonadicFRP.html#ISig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "End",
          "package": "drClickOn",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "Occurred",
          "package": "drClickOn",
          "signature": "Occurred a",
          "source": "src/Control-MonadicFRP.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "Occurred",
          "package": "drClickOn",
          "partial": "Occurred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:Occurred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "Request",
          "package": "drClickOn",
          "signature": "Request",
          "source": "src/Control-MonadicFRP.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "Request",
          "package": "drClickOn",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "Sig",
          "package": "drClickOn",
          "signature": "Sig (React e (ISig e a b))",
          "source": "src/Control-MonadicFRP.html#Sig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "Sig",
          "package": "drClickOn",
          "partial": "Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:Sig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that alway has the given form.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "always",
          "package": "drClickOn",
          "signature": "a -\u003e Sig e a b",
          "source": "src/Control-MonadicFRP.html#always",
          "type": "function"
        },
        "index": {
          "description": "signal that alway has the given form",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "always",
          "normalized": "a-\u003eSig b a c",
          "package": "drClickOn",
          "signature": "a-\u003eSig e a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample the form of the signal computation at the time the reactive computation completes\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "at",
          "package": "drClickOn",
          "signature": "Sig t a t1 -\u003e React t b -\u003e React t (Maybe a)",
          "source": "src/Control-MonadicFRP.html#at",
          "type": "function"
        },
        "index": {
          "description": "Sample the form of the signal computation at the time the reactive computation completes",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "at",
          "normalized": "Sig a b a-\u003eReact a c-\u003eReact a(Maybe b)",
          "package": "drClickOn",
          "signature": "Sig t a t-\u003eReact t b-\u003eReact t(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for both signal computation to become initialized, and then return both their initizialized signals.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "bothStart",
          "package": "drClickOn",
          "signature": "Sig t4 t t1 -\u003e Sig t4 t2 t3 -\u003e React t4 (ISig t4 t t1, ISig t4 t2 t3)",
          "source": "src/Control-MonadicFRP.html#bothStart",
          "type": "function"
        },
        "index": {
          "description": "Wait for both signal computation to become initialized and then return both their initizialized signals",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "bothStart",
          "normalized": "Sig a a a-\u003eSig a a a-\u003eReact a(ISig a a a,ISig a a a)",
          "package": "drClickOn",
          "partial": "Start",
          "signature": "Sig t t t-\u003eSig t t t-\u003eReact t(ISig t t t,ISig t t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:bothStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the signal computation as long as the given predicate does not hold on the emitted values. Once a value is emmited on which the predicate holds, the rest of the signal computation is returned.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "break",
          "package": "drClickOn",
          "signature": "(a -\u003e Bool) -\u003e Sig e a b -\u003e Sig e a (ISig e a b)",
          "source": "src/Control-MonadicFRP.html#break",
          "type": "function"
        },
        "index": {
          "description": "Run the signal computation as long as the given predicate does not hold on the emitted values Once value is emmited on which the predicate holds the rest of the signal computation is returned",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eSig b a c-\u003eSig b a(ISig b a c)",
          "package": "drClickOn",
          "signature": "(a-\u003eBool)-\u003eSig e a b-\u003eSig e a(ISig e a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCons the values from the first signal computation to the values form the latter signal computation over time.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "cons",
          "package": "drClickOn",
          "signature": "ISig e a l -\u003e ISig e [a] r -\u003e ISig e [a] ()",
          "source": "src/Control-MonadicFRP.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Cons the values from the first signal computation to the values form the latter signal computation over time",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "cons",
          "normalized": "ISig a b c-\u003eISig a[b]d-\u003eISig a[b]()",
          "package": "drClickOn",
          "signature": "ISig e a l-\u003eISig e[a]r-\u003eISig e[a]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the current value of a signal computation, if any.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "cur",
          "package": "drClickOn",
          "signature": "Sig t a t1 -\u003e Maybe a",
          "source": "src/Control-MonadicFRP.html#cur",
          "type": "function"
        },
        "index": {
          "description": "Give the current value of signal computation if any",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "cur",
          "normalized": "Sig a b a-\u003eMaybe b",
          "package": "drClickOn",
          "signature": "Sig t a t-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:cur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the result of a reactive computation if it is done\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "done",
          "package": "drClickOn",
          "signature": "React t a -\u003e Maybe a",
          "source": "src/Control-MonadicFRP.html#done",
          "type": "function"
        },
        "index": {
          "description": "Return the result of reactive computation if it is done",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "done",
          "normalized": "React a b-\u003eMaybe b",
          "package": "drClickOn",
          "signature": "React t a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003edone\u003c/a\u003e\u003c/code\u003e that throws an error if it the result is not done.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "done'",
          "package": "drClickOn",
          "signature": "React t c -\u003e c",
          "source": "src/Control-MonadicFRP.html#done%27",
          "type": "function"
        },
        "index": {
          "description": "Version of done that throws an error if it the result is not done",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "done'",
          "normalized": "React a b-\u003eb",
          "package": "drClickOn",
          "signature": "React t c-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:done-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a single value in the signal computation mondad\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "emit",
          "package": "drClickOn",
          "signature": "a -\u003e Sig e a ()",
          "source": "src/Control-MonadicFRP.html#emit",
          "type": "function"
        },
        "index": {
          "description": "Emit single value in the signal computation mondad",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "emit",
          "normalized": "a-\u003eSig b a()",
          "package": "drClickOn",
          "signature": "a-\u003eSig e a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a initialized signal to a signal computation\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "emitAll",
          "package": "drClickOn",
          "signature": "ISig e a b -\u003e Sig e a b",
          "source": "src/Control-MonadicFRP.html#emitAll",
          "type": "function"
        },
        "index": {
          "description": "Convert initialized signal to signal computation",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "emitAll",
          "normalized": "ISig a b c-\u003eSig a b c",
          "package": "drClickOn",
          "partial": "All",
          "signature": "ISig e a b-\u003eSig e a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:emitAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest a single event\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "exper",
          "package": "drClickOn",
          "signature": "e -\u003e React e e",
          "source": "src/Control-MonadicFRP.html#exper",
          "type": "function"
        },
        "index": {
          "description": "Request single event",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "exper",
          "normalized": "a-\u003eReact a a",
          "package": "drClickOn",
          "signature": "e-\u003eReact e e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:exper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the first emmited value on which the predicate hold.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "find",
          "package": "drClickOn",
          "signature": "(a -\u003e Bool) -\u003e Sig t a t1 -\u003e React t (Maybe a)",
          "source": "src/Control-MonadicFRP.html#find",
          "type": "function"
        },
        "index": {
          "description": "Find the first emmited value on which the predicate hold",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eSig b a b-\u003eReact b(Maybe a)",
          "package": "drClickOn",
          "signature": "(a-\u003eBool)-\u003eSig t a t-\u003eReact t(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun two reactive computations in parallel until either completes, and return the new state of both.\n\u003c/p\u003e\u003cp\u003eNotice that \n \u003ccode\u003e\n     flip first == first\n  \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "first",
          "package": "drClickOn",
          "signature": "React e a -\u003e React e b -\u003e React e (React e a, React e b)",
          "source": "src/Control-MonadicFRP.html#first",
          "type": "function"
        },
        "index": {
          "description": "Run two reactive computations in parallel until either completes and return the new state of both Notice that flip first first",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "first",
          "normalized": "React a b-\u003eReact a c-\u003eReact a(React a b,React a c)",
          "package": "drClickOn",
          "signature": "React e a-\u003eReact e b-\u003eReact e(React e a,React e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e|foldl| on signal computations behaves the same as waiting for the signal computation to end and then applying the \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e on the list of emitted values.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "foldl",
          "package": "drClickOn",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Sig e b r -\u003e React e a",
          "source": "src/Control-MonadicFRP.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl on signal computations behaves the same as waiting for the signal computation to end and then applying the fold on the list of emitted values",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSig c b d-\u003eReact c a",
          "package": "drClickOn",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eSig e b r-\u003eReact e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reactive computation that never completes.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "hold",
          "package": "drClickOn",
          "signature": "Sig e a b",
          "source": "src/Control-MonadicFRP.html#hold",
          "type": "function"
        },
        "index": {
          "description": "The reactive computation that never completes",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "hold",
          "package": "drClickOn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:hold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "ibreak",
          "package": "drClickOn",
          "signature": "(a -\u003e Bool) -\u003e ISig e a b -\u003e ISig e a (ISig e a b)",
          "source": "src/Control-MonadicFRP.html#ibreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "ibreak",
          "normalized": "(a-\u003eBool)-\u003eISig b a c-\u003eISig b a(ISig b a c)",
          "package": "drClickOn",
          "signature": "(a-\u003eBool)-\u003eISig e a b-\u003eISig e a(ISig e a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:ibreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe head of an initalized signal, if any.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "icur",
          "package": "drClickOn",
          "signature": "ISig t a t1 -\u003e Maybe a",
          "source": "src/Control-MonadicFRP.html#icur",
          "type": "function"
        },
        "index": {
          "description": "the head of an initalized signal if any",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "icur",
          "normalized": "ISig a b a-\u003eMaybe b",
          "package": "drClickOn",
          "signature": "ISig t a t-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:icur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "ifoldl",
          "package": "drClickOn",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e ISig e b r -\u003e React e a",
          "source": "src/Control-MonadicFRP.html#ifoldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "ifoldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eISig c b d-\u003eReact c a",
          "package": "drClickOn",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eISig e b r-\u003eReact e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:ifoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "iindexBy",
          "package": "drClickOn",
          "signature": "ISig e a b -\u003e Sig e t t1 -\u003e Sig e a ()",
          "source": "src/Control-MonadicFRP.html#iindexBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "iindexBy",
          "normalized": "ISig a b c-\u003eSig a d d-\u003eSig a b()",
          "package": "drClickOn",
          "partial": "By",
          "signature": "ISig e a b-\u003eSig e t t-\u003eSig e a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:iindexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the emmited values of an initialized signal computation by applying the function to each of them. \n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "imap",
          "package": "drClickOn",
          "signature": "(t -\u003e a) -\u003e ISig e t b -\u003e ISig e a b",
          "source": "src/Control-MonadicFRP.html#imap",
          "type": "function"
        },
        "index": {
          "description": "Transform the emmited values of an initialized signal computation by applying the function to each of them",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "imap",
          "normalized": "(a-\u003eb)-\u003eISig c a d-\u003eISig c b d",
          "package": "drClickOn",
          "signature": "(t-\u003ea)-\u003eISig e t b-\u003eISig e a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "imemoSig",
          "package": "drClickOn",
          "signature": "ISig e a b -\u003e ISig e a b",
          "source": "src/Control-MonadicFRP.html#imemoSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "imemoSig",
          "normalized": "ISig a b c-\u003eISig a b c",
          "package": "drClickOn",
          "partial": "Sig",
          "signature": "ISig e a b-\u003eISig e a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:imemoSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample the former signal computation each time the later emits a value.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "indexBy",
          "package": "drClickOn",
          "signature": "Sig e a l -\u003e Sig e b r -\u003e Sig e a ()",
          "source": "src/Control-MonadicFRP.html#indexBy",
          "type": "function"
        },
        "index": {
          "description": "Sample the former signal computation each time the later emits value",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "indexBy",
          "normalized": "Sig a b c-\u003eSig a d e-\u003eSig a b()",
          "package": "drClickOn",
          "partial": "By",
          "signature": "Sig e a l-\u003eSig e b r-\u003eSig e a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:indexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interpreter for reactive computations. The first argument\n is a function that answers event requests in the monad m, the second \n is the reactive computation.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "interpret",
          "package": "drClickOn",
          "signature": "(EvReqs e -\u003e m (EvOccs e)) -\u003e React e a -\u003e m a",
          "source": "src/Control-MonadicFRP.html#interpret",
          "type": "function"
        },
        "index": {
          "description": "The interpreter for reactive computations The first argument is function that answers event requests in the monad the second is the reactive computation",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "interpret",
          "normalized": "(EvReqs a-\u003eb(EvOccs a))-\u003eReact a c-\u003eb c",
          "package": "drClickOn",
          "signature": "(EvReqs e-\u003em(EvOccs e))-\u003eReact e a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:interpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interpreter for signal computations taking three arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a function that answers event requests in the monad m\n\u003c/li\u003e\u003cli\u003e a function that processes the emitted values in the monad m\n\u003c/li\u003e\u003cli\u003e the signal computation.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.MonadicFRP",
          "name": "interpretSig",
          "package": "drClickOn",
          "signature": "(EvReqs e -\u003e m (EvOccs e)) -\u003e (a -\u003e m r) -\u003e Sig e a b -\u003e m b",
          "source": "src/Control-MonadicFRP.html#interpretSig",
          "type": "function"
        },
        "index": {
          "description": "The interpreter for signal computations taking three arguments function that answers event requests in the monad function that processes the emitted values in the monad the signal computation",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "interpretSig",
          "normalized": "(EvReqs a-\u003eb(EvOccs a))-\u003e(c-\u003eb d)-\u003eSig a c e-\u003eb e",
          "package": "drClickOn",
          "partial": "Sig",
          "signature": "(EvReqs e-\u003em(EvOccs e))-\u003e(a-\u003em r)-\u003eSig e a b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:interpretSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "iparList",
          "package": "drClickOn",
          "signature": "Sig e (ISig e a l) r -\u003e ISig e [a] ()",
          "source": "src/Control-MonadicFRP.html#iparList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "iparList",
          "normalized": "Sig a(ISig a b c)d-\u003eISig a[b]()",
          "package": "drClickOn",
          "partial": "List",
          "signature": "Sig e(ISig e a l)r-\u003eISig e[a]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:iparList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the result of an initialized signal a reactive computation.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "ires",
          "package": "drClickOn",
          "signature": "ISig t t1 b -\u003e React t b",
          "source": "src/Control-MonadicFRP.html#ires",
          "type": "function"
        },
        "index": {
          "description": "Convert the result of an initialized signal reactive computation",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "ires",
          "normalized": "ISig a a b-\u003eReact a b",
          "package": "drClickOn",
          "signature": "ISig t t b-\u003eReact t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:ires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "iscanl",
          "package": "drClickOn",
          "signature": "(a -\u003e t -\u003e a) -\u003e a -\u003e Sig e t t1 -\u003e ISig e a t1",
          "source": "src/Control-MonadicFRP.html#iscanl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "iscanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSig c b b-\u003eISig c a b",
          "package": "drClickOn",
          "signature": "(a-\u003et-\u003ea)-\u003ea-\u003eSig e t t-\u003eISig e a t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:iscanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadicFRP",
          "name": "iuntil",
          "package": "drClickOn",
          "signature": "ISig t a b -\u003e React t alpha -\u003e ISig t a (ISig t a b, React t alpha)",
          "source": "src/Control-MonadicFRP.html#iuntil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "iuntil",
          "normalized": "ISig a b c-\u003eReact a d-\u003eISig a b(ISig a b c,React a d)",
          "package": "drClickOn",
          "signature": "ISig t a b-\u003eReact t alpha-\u003eISig t a(ISig t a b,React t alpha)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:iuntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the emmited values of a signal computation by applying the function to each of them. \n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "map",
          "package": "drClickOn",
          "signature": "(t -\u003e a) -\u003e Sig e t b -\u003e Sig e a b",
          "source": "src/Control-MonadicFRP.html#map",
          "type": "function"
        },
        "index": {
          "description": "Transform the emmited values of signal computation by applying the function to each of them",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eSig c a d-\u003eSig c b d",
          "package": "drClickOn",
          "signature": "(t-\u003ea)-\u003eSig e t b-\u003eSig e a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the continuation function of the reactive computation, and the continuation function of all next states.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "memo",
          "package": "drClickOn",
          "signature": "React e a -\u003e React e a",
          "source": "src/Control-MonadicFRP.html#memo",
          "type": "function"
        },
        "index": {
          "description": "Memoize the continuation function of the reactive computation and the continuation function of all next states",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "memo",
          "normalized": "React a b-\u003eReact a b",
          "package": "drClickOn",
          "signature": "React e a-\u003eReact e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the reactive computation of the initialized signal, and memoize the signal computation of the tail (if any).\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "memoSig",
          "package": "drClickOn",
          "signature": "Sig e a b -\u003e Sig e a b",
          "source": "src/Control-MonadicFRP.html#memoSig",
          "type": "function"
        },
        "index": {
          "description": "Memoize the reactive computation of the initialized signal and memoize the signal computation of the tail if any",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "memoSig",
          "normalized": "Sig a b c-\u003eSig a b c",
          "package": "drClickOn",
          "partial": "Sig",
          "signature": "Sig e a b-\u003eSig e a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:memoSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmitted the pairs of the emitted values from both signal computations over time.  When one ends, the new state of both is returned.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "pairs",
          "package": "drClickOn",
          "signature": "ISig e t1 b -\u003e ISig e t2 t -\u003e ISig e (t1, t2) (ISig e t1 b, ISig e t2 t)",
          "source": "src/Control-MonadicFRP.html#pairs",
          "type": "function"
        },
        "index": {
          "description": "Emitted the pairs of the emitted values from both signal computations over time When one ends the new state of both is returned",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "pairs",
          "normalized": "ISig a b c-\u003eISig a b b-\u003eISig a(b,b)(ISig a b c,ISig a b b)",
          "package": "drClickOn",
          "signature": "ISig e t b-\u003eISig e t t-\u003eISig e(t,t)(ISig e t b,ISig e t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:pairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the initialized signals from the given signal computation in parallel, and emit the lists of the current form of all alive initialized signals.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "parList",
          "package": "drClickOn",
          "signature": "Sig e (ISig e a l) r -\u003e Sig e [a] ()",
          "source": "src/Control-MonadicFRP.html#parList",
          "type": "function"
        },
        "index": {
          "description": "Run the initialized signals from the given signal computation in parallel and emit the lists of the current form of all alive initialized signals",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "parList",
          "normalized": "Sig a(ISig a b c)d-\u003eSig a[b]()",
          "package": "drClickOn",
          "partial": "List",
          "signature": "Sig e(ISig e a l)r-\u003eSig e[a]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:parList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "parR",
          "package": "drClickOn",
          "signature": "React e a -\u003e React e b -\u003e React e (React e a, React e b)",
          "source": "src/Control-MonadicFRP.html#parR",
          "type": "function"
        },
        "index": {
          "description": "Alias for first",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "parR",
          "normalized": "React a b-\u003eReact a c-\u003eReact a(React a b,React a c)",
          "package": "drClickOn",
          "signature": "React e a-\u003eReact e b-\u003eReact e(React e a,React e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:parR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat the given reactive computation indefinitely, each time emitting its result.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "repeat",
          "package": "drClickOn",
          "signature": "React e a -\u003e Sig e a b",
          "source": "src/Control-MonadicFRP.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "Repeat the given reactive computation indefinitely each time emitting its result",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "repeat",
          "normalized": "React a b-\u003eSig a b c",
          "package": "drClickOn",
          "signature": "React e a-\u003eSig e a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the result of a signal computation to a reactive computation.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "res",
          "package": "drClickOn",
          "signature": "Sig t t1 b -\u003e React t b",
          "source": "src/Control-MonadicFRP.html#res",
          "type": "function"
        },
        "index": {
          "description": "Convert the result of signal computation to reactive computation",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "res",
          "normalized": "Sig a a b-\u003eReact a b",
          "package": "drClickOn",
          "signature": "Sig t t b-\u003eReact t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:res"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list function scanl is similar to foldl, but returns a list of successive reduced values instead of a single value. \n the signal variant works analogously.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "scanl",
          "package": "drClickOn",
          "signature": "(a -\u003e t -\u003e a) -\u003e a -\u003e Sig e t t1 -\u003e Sig e a t1",
          "source": "src/Control-MonadicFRP.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "The list function scanl is similar to foldl but returns list of successive reduced values instead of single value the signal variant works analogously",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSig c b b-\u003eSig c a b",
          "package": "drClickOn",
          "signature": "(a-\u003et-\u003ea)-\u003ea-\u003eSig e t t-\u003eSig e a t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat the given signal computation indefinitely, each time emitting its initialized signal result.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "spawn",
          "package": "drClickOn",
          "signature": "Sig e t t1 -\u003e Sig e (ISig e t t1) b",
          "source": "src/Control-MonadicFRP.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "Repeat the given signal computation indefinitely each time emitting its initialized signal result",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "spawn",
          "normalized": "Sig a b b-\u003eSig a(ISig a b b)c",
          "package": "drClickOn",
          "signature": "Sig e t t-\u003eSig e(ISig e t t)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the signal computation until the reactive computation completes, and return the new state of both computations.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "until",
          "package": "drClickOn",
          "signature": "Sig e a t -\u003e React e b -\u003e Sig e a (Sig e a t, React e b)",
          "source": "src/Control-MonadicFRP.html#until",
          "type": "function"
        },
        "index": {
          "description": "Run the signal computation until the reactive computation completes and return the new state of both computations",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "until",
          "normalized": "Sig a b c-\u003eReact a d-\u003eSig a b(Sig a b c,React a d)",
          "package": "drClickOn",
          "signature": "Sig e a t-\u003eReact e b-\u003eSig e a(Sig e a t,React e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the continuation function of a reactive computation if it awaits at least one of the event occurences.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "update",
          "package": "drClickOn",
          "signature": "React e a -\u003e EvOccs e -\u003e React e a",
          "source": "src/Control-MonadicFRP.html#update",
          "type": "function"
        },
        "index": {
          "description": "Call the continuation function of reactive computation if it awaits at least one of the event occurences",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "update",
          "normalized": "React a b-\u003eEvOccs a-\u003eReact a b",
          "package": "drClickOn",
          "signature": "React e a-\u003eEvOccs e-\u003eReact e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a reactive computation to a signal computation.\n\u003c/p\u003e",
          "module": "Control.MonadicFRP",
          "name": "waitFor",
          "package": "drClickOn",
          "signature": "React e b -\u003e Sig e a b",
          "source": "src/Control-MonadicFRP.html#waitFor",
          "type": "function"
        },
        "index": {
          "description": "Convert reactive computation to signal computation",
          "hierarchy": "Control MonadicFRP",
          "module": "Control.MonadicFRP",
          "name": "waitFor",
          "normalized": "React a b-\u003eSig a c b",
          "package": "drClickOn",
          "partial": "For",
          "signature": "React e b-\u003eSig e a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/drClickOn/docs/Control-MonadicFRP.html#v:waitFor"
      }
    }
  ]
]