[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert-failure/docs/Control-Exception-Assert-Sugar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSyntactic sugar that improves the usability of \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is actually a bunch of hacks wrapping the original \u003ccode\u003eassert\u003c/code\u003e function,\n which is, as of GHC 7.8, the only simple way of obtaining source positions.\n The original \u003ccode\u003eassert\u003c/code\u003e function is here re-exported for convenience.\n\u003c/p\u003e\u003cp\u003eMake sure to enable assertions for your cabal package, e.g., by setting\n\u003c/p\u003e\u003cpre\u003e ghc-options: -fno-ignore-asserts\n\u003c/pre\u003e\u003cp\u003ein your .cabal file. Otherwise, some of the functions will have\n no effect at all.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Exception.Assert.Sugar",
        "fct-package": "assert-failure",
        "fct-signature": "module",
        "fct-source": "src/Control-Exception-Assert-Sugar.html",
        "fct-type": "module",
        "title": "Sugar"
      },
      "index": {
        "description": "Syntactic sugar that improves the usability of assert and error This is actually bunch of hacks wrapping the original assert function which is as of GHC the only simple way of obtaining source positions The original assert function is here re-exported for convenience Make sure to enable assertions for your cabal package e.g by setting ghc-options fno-ignore-asserts in your cabal file Otherwise some of the functions will have no effect at all",
        "hierarchy": "Control Exception Assert Sugar",
        "module": "Control.Exception.Assert.Sugar",
        "name": "Sugar",
        "normalized": "",
        "package": "assert-failure",
        "partial": "Sugar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert-failure/docs/Control-Exception-Assert-Sugar.html#v:allB",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e, but if the predicate fails, blame all the list elements\n and especially those for which it fails. To be used as in\n\u003c/p\u003e\u003cpre\u003e assert (allB (\u003c= height) [yf, y1, y2])\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.Assert.Sugar",
        "fct-package": "assert-failure",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
        "fct-source": "src/Control-Exception-Assert-Sugar.html#allB",
        "fct-type": "function",
        "title": "allB"
      },
      "index": {
        "description": "Like all but if the predicate fails blame all the list elements and especially those for which it fails To be used as in assert allB height yf y1 y2",
        "hierarchy": "Control Exception Assert Sugar",
        "module": "Control.Exception.Assert.Sugar",
        "name": "allB",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
        "package": "assert-failure",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert-failure/docs/Control-Exception-Assert-Sugar.html#v:assert",
      "description": {
        "fct-descr": "\u003cp\u003eIf the first argument evaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, then the result is the\n second argument.  Otherwise an \u003ccode\u003eAssertionFailed\u003c/code\u003e exception is raised,\n containing a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e with the source file and line number of the\n call to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAssertions can normally be turned on or off with a compiler flag\n (for GHC, assertions are normally on unless optimisation is turned on \n with \u003ccode\u003e-O\u003c/code\u003e or the \u003ccode\u003e-fignore-asserts\u003c/code\u003e\n option is given).  When assertions are turned off, the first\n argument to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e is ignored, and the second argument is\n returned as the result.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Assert.Sugar",
        "fct-package": "assert-failure",
        "fct-signature": "Bool -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "assert"
      },
      "index": {
        "description": "If the first argument evaluates to True then the result is the second argument Otherwise an AssertionFailed exception is raised containing String with the source file and line number of the call to assert Assertions can normally be turned on or off with compiler flag for GHC assertions are normally on unless optimisation is turned on with or the fignore-asserts option is given When assertions are turned off the first argument to assert is ignored and the second argument is returned as the result",
        "hierarchy": "Control Exception Assert Sugar",
        "module": "Control.Exception.Assert.Sugar",
        "name": "assert",
        "normalized": "Bool-\u003ea-\u003ea",
        "package": "assert-failure",
        "partial": "",
        "signature": "Bool-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert-failure/docs/Control-Exception-Assert-Sugar.html#v:blame",
      "description": {
        "fct-descr": "\u003cp\u003eIf the condition fails, display the value blamed for the failure.\n Used as in\n\u003c/p\u003e\u003cpre\u003e assert (age \u003e= 0 `blame` age) $ savings / (99 - age)\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.Assert.Sugar",
        "fct-package": "assert-failure",
        "fct-signature": "Bool -\u003e a -\u003e Bool",
        "fct-source": "src/Control-Exception-Assert-Sugar.html#blame",
        "fct-type": "function",
        "title": "blame"
      },
      "index": {
        "description": "If the condition fails display the value blamed for the failure Used as in assert age blame age savings age",
        "hierarchy": "Control Exception Assert Sugar",
        "module": "Control.Exception.Assert.Sugar",
        "name": "blame",
        "normalized": "Bool-\u003ea-\u003eBool",
        "package": "assert-failure",
        "partial": "",
        "signature": "Bool-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert-failure/docs/Control-Exception-Assert-Sugar.html#v:failure",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e, but shows the source position and also\n the value to blame for the failure. To be used as in\n\u003c/p\u003e\u003cpre\u003e case xs of\n   0 : _ -\u003e assert `failure` (xs, \"has an insignificant zero\")\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.Assert.Sugar",
        "fct-package": "assert-failure",
        "fct-signature": "(forall x.  Bool -\u003e x -\u003e x) -\u003e a -\u003e b",
        "fct-source": "src/Control-Exception-Assert-Sugar.html#failure",
        "fct-type": "function",
        "title": "failure"
      },
      "index": {
        "description": "Like error but shows the source position and also the value to blame for the failure To be used as in case xs of assert failure xs has an insignificant zero",
        "hierarchy": "Control Exception Assert Sugar",
        "module": "Control.Exception.Assert.Sugar",
        "name": "failure",
        "normalized": "(a b Bool-\u003ec-\u003ec)-\u003ed-\u003ee",
        "package": "assert-failure",
        "partial": "",
        "signature": "(forall x. Bool-\u003ex-\u003ex)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert-failure/docs/Control-Exception-Assert-Sugar.html#v:forceEither",
      "description": {
        "fct-descr": "\u003cp\u003eAssuming that \u003ccode\u003eLeft\u003c/code\u003e signifies an error condition,\n check the \u003ccode\u003eEither\u003c/code\u003e value and, if \u003ccode\u003eLeft\u003c/code\u003e is encountered,\n fail outright and show the error message. Used as in\n\u003c/p\u003e\u003cpre\u003e assert `forceEither` parseOrFailWithMessage code\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.Assert.Sugar",
        "fct-package": "assert-failure",
        "fct-signature": "(forall x.  Bool -\u003e x -\u003e x) -\u003e Either a b -\u003e b",
        "fct-source": "src/Control-Exception-Assert-Sugar.html#forceEither",
        "fct-type": "function",
        "title": "forceEither"
      },
      "index": {
        "description": "Assuming that Left signifies an error condition check the Either value and if Left is encountered fail outright and show the error message Used as in assert forceEither parseOrFailWithMessage code",
        "hierarchy": "Control Exception Assert Sugar",
        "module": "Control.Exception.Assert.Sugar",
        "name": "forceEither",
        "normalized": "(a b Bool-\u003ec-\u003ec)-\u003eEither d e-\u003ee",
        "package": "assert-failure",
        "partial": "Either",
        "signature": "(forall x. Bool-\u003ex-\u003ex)-\u003eEither a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert-failure/docs/Control-Exception-Assert-Sugar.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eTo be used in place of the verbose \u003ccode\u003e(return ())\u003c/code\u003e, as in\n\u003c/p\u003e\u003cpre\u003e do k \u003c- getK7 r\n    assert (k \u003c= maxK `blame` \"K7 too large\" `twith` r) skip\n    return $ k \u003e= averageK\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.Assert.Sugar",
        "fct-package": "assert-failure",
        "fct-signature": "m ()",
        "fct-source": "src/Control-Exception-Assert-Sugar.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "To be used in place of the verbose return as in do getK7 assert maxK blame K7 too large twith skip return averageK",
        "hierarchy": "Control Exception Assert Sugar",
        "module": "Control.Exception.Assert.Sugar",
        "name": "skip",
        "normalized": "a()",
        "package": "assert-failure",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert-failure/docs/Control-Exception-Assert-Sugar.html#v:swith",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003etwith\u003c/a\u003e\u003c/code\u003e, but for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, not \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSyntactic sugar for the pair operation, to be used in \u003ccode\u003e\u003ca\u003eblame\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003efailure\u003c/a\u003e\u003c/code\u003e as in\n\u003c/p\u003e\u003cpre\u003e assert (age \u003e= 0 `blame` \"negative age\" `swith` age) $ savings / (99 - age)\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e case xs of\n   0 : _ -\u003e assert `failure` \"insignificant zero\" `swith` xs\n\u003c/pre\u003e\u003cp\u003eFixing the first component of the pair to \u003ccode\u003eString\u003c/code\u003e prevents warnings\n about defaulting.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Assert.Sugar",
        "fct-package": "assert-failure",
        "fct-signature": "String -\u003e b -\u003e (String, b)",
        "fct-source": "src/Control-Exception-Assert-Sugar.html#swith",
        "fct-type": "function",
        "title": "swith"
      },
      "index": {
        "description": "The same as twith but for String not Text Syntactic sugar for the pair operation to be used in blame and failure as in assert age blame negative age swith age savings age or case xs of assert failure insignificant zero swith xs Fixing the first component of the pair to String prevents warnings about defaulting",
        "hierarchy": "Control Exception Assert Sugar",
        "module": "Control.Exception.Assert.Sugar",
        "name": "swith",
        "normalized": "String-\u003ea-\u003e(String,a)",
        "package": "assert-failure",
        "partial": "",
        "signature": "String-\u003eb-\u003e(String,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert-failure/docs/Control-Exception-Assert-Sugar.html#v:twith",
      "description": {
        "fct-descr": "\u003cp\u003eSyntactic sugar for the pair operation, to be used in \u003ccode\u003e\u003ca\u003eblame\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003efailure\u003c/a\u003e\u003c/code\u003e as in\n\u003c/p\u003e\u003cpre\u003e assert (age \u003e= 0 `blame` \"negative age\" `twith` age) $ savings / (99 - age)\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e case xs of\n   0 : _ -\u003e assert `failure` \"insignificant zero\" `twith` xs\n\u003c/pre\u003e\u003cp\u003eFixing the first component of the pair to \u003ccode\u003eText\u003c/code\u003e prevents warnings\n about defaulting.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Assert.Sugar",
        "fct-package": "assert-failure",
        "fct-signature": "Text -\u003e b -\u003e (Text, b)",
        "fct-source": "src/Control-Exception-Assert-Sugar.html#twith",
        "fct-type": "function",
        "title": "twith"
      },
      "index": {
        "description": "Syntactic sugar for the pair operation to be used in blame and failure as in assert age blame negative age twith age savings age or case xs of assert failure insignificant zero twith xs Fixing the first component of the pair to Text prevents warnings about defaulting",
        "hierarchy": "Control Exception Assert Sugar",
        "module": "Control.Exception.Assert.Sugar",
        "name": "twith",
        "normalized": "Text-\u003ea-\u003e(Text,a)",
        "package": "assert-failure",
        "partial": "",
        "signature": "Text-\u003eb-\u003e(Text,b)"
      }
    }
  }
]