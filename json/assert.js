[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert/docs/Control-Exception-Assert.html#",
      "description": {
        "fct-module": "Control.Exception.Assert",
        "fct-package": "assert",
        "fct-signature": "module",
        "fct-source": "src/Control-Exception-Assert.html",
        "fct-type": "module",
        "title": "Assert"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception Assert",
        "module": "Control.Exception.Assert",
        "name": "Assert",
        "normalized": "",
        "package": "assert",
        "partial": "Assert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert/docs/Control-Exception-Assert.html#t:Arse",
      "description": {
        "fct-descr": "\u003cp\u003eA distict \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eAssertionFailed\u003c/a\u003e\u003c/code\u003e, so that we stop fudging\n the exception message after the first \u003ccode\u003e\u003ca\u003emapException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe name comes from abbreviating &#8216;assert&#8217; and translating the result to\n my native tongue.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Assert",
        "fct-package": "assert",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Exception-Assert.html#Arse",
        "fct-type": "newtype",
        "title": "Arse"
      },
      "index": {
        "description": "distict Exception from AssertionFailed so that we stop fudging the exception message after the first mapException The name comes from abbreviating assert and translating the result to my native tongue",
        "hierarchy": "Control Exception Assert",
        "module": "Control.Exception.Assert",
        "name": "Arse",
        "normalized": "",
        "package": "assert",
        "partial": "Arse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert/docs/Control-Exception-Assert.html#v:Arse",
      "description": {
        "fct-module": "Control.Exception.Assert",
        "fct-package": "assert",
        "fct-signature": "Arse String",
        "fct-source": "src/Control-Exception-Assert.html#Arse",
        "fct-type": "function",
        "title": "Arse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception Assert",
        "module": "Control.Exception.Assert",
        "name": "Arse",
        "normalized": "",
        "package": "assert",
        "partial": "Arse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert/docs/Control-Exception-Assert.html#v:assert",
      "description": {
        "fct-descr": "\u003cp\u003eIf the first argument evaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, then the result is the\n second argument.  Otherwise an \u003ccode\u003eAssertionFailed\u003c/code\u003e exception is raised,\n containing a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e with the source file and line number of the\n call to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAssertions can normally be turned on or off with a compiler flag\n (for GHC, assertions are normally on unless optimisation is turned on \n with \u003ccode\u003e-O\u003c/code\u003e or the \u003ccode\u003e-fignore-asserts\u003c/code\u003e\n option is given).  When assertions are turned off, the first\n argument to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e is ignored, and the second argument is\n returned as the result.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Assert",
        "fct-package": "assert",
        "fct-signature": "Bool -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "assert"
      },
      "index": {
        "description": "If the first argument evaluates to True then the result is the second argument Otherwise an AssertionFailed exception is raised containing String with the source file and line number of the call to assert Assertions can normally be turned on or off with compiler flag for GHC assertions are normally on unless optimisation is turned on with or the fignore-asserts option is given When assertions are turned off the first argument to assert is ignored and the second argument is returned as the result",
        "hierarchy": "Control Exception Assert",
        "module": "Control.Exception.Assert",
        "name": "assert",
        "normalized": "Bool-\u003ea-\u003ea",
        "package": "assert",
        "partial": "",
        "signature": "Bool-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert/docs/Control-Exception-Assert.html#v:assertMessage",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric helper for \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e that maps \u003ccode\u003eAssertFailure\u003c/code\u003e \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003es to\n \u003ccode\u003e\u003ca\u003eArse\u003c/a\u003e\u003c/code\u003e, adding a descriptive message along the way. Use this to build\n your own \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e helpers, such as \u003ccode\u003e\u003ca\u003ebyOrd\u003c/a\u003e\u003c/code\u003e. A rule is included which\n rewrites \u003ccode\u003e\u003ca\u003eassertMessage\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e when compiling with \u003ccode\u003e-fignore-asserts\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Assert",
        "fct-package": "assert",
        "fct-signature": "String -\u003e String -\u003e (a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/Control-Exception-Assert.html#assertMessage",
        "fct-type": "function",
        "title": "assertMessage"
      },
      "index": {
        "description": "Generic helper for assert that maps AssertFailure Exception to Arse adding descriptive message along the way Use this to build your own assert helpers such as byOrd rule is included which rewrites assertMessage to id when compiling with fignore-asserts",
        "hierarchy": "Control Exception Assert",
        "module": "Control.Exception.Assert",
        "name": "assertMessage",
        "normalized": "String-\u003eString-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "assert",
        "partial": "Message",
        "signature": "String-\u003eString-\u003e(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert/docs/Control-Exception-Assert.html#v:byEq",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that two values are equal.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebyEq assert \"Bool\" False True ()\n\u003c/code\u003e\u003c/strong\u003e*** Exception: &#8230; Assertion failed \"Bool\", False &#8800; True\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.Assert",
        "fct-package": "assert",
        "fct-signature": "(Bool -\u003e a -\u003e a) -\u003e String -\u003e x -\u003e x -\u003e a -\u003e a",
        "fct-source": "src/Control-Exception-Assert.html#byEq",
        "fct-type": "function",
        "title": "byEq"
      },
      "index": {
        "description": "Assert that two values are equal byEq assert Bool False True Exception Assertion failed Bool False True",
        "hierarchy": "Control Exception Assert",
        "module": "Control.Exception.Assert",
        "name": "byEq",
        "normalized": "(Bool-\u003ea-\u003ea)-\u003eString-\u003eb-\u003eb-\u003ea-\u003ea",
        "package": "assert",
        "partial": "Eq",
        "signature": "(Bool-\u003ea-\u003ea)-\u003eString-\u003ex-\u003ex-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert/docs/Control-Exception-Assert.html#v:byOrd",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that two values obey the given \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebyOrd assert \"Int\" LT 0 1 ()\n\u003c/code\u003e\u003c/strong\u003e()\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.Assert",
        "fct-package": "assert",
        "fct-signature": "(Bool -\u003e a -\u003e a) -\u003e String -\u003e Ordering -\u003e x -\u003e x -\u003e a -\u003e a",
        "fct-source": "src/Control-Exception-Assert.html#byOrd",
        "fct-type": "function",
        "title": "byOrd"
      },
      "index": {
        "description": "Assert that two values obey the given Ordering byOrd assert Int LT",
        "hierarchy": "Control Exception Assert",
        "module": "Control.Exception.Assert",
        "name": "byOrd",
        "normalized": "(Bool-\u003ea-\u003ea)-\u003eString-\u003eOrdering-\u003eb-\u003eb-\u003ea-\u003ea",
        "package": "assert",
        "partial": "Ord",
        "signature": "(Bool-\u003ea-\u003ea)-\u003eString-\u003eOrdering-\u003ex-\u003ex-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/assert/docs/Control-Exception-Assert.html#v:byPred",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that a value satisfies the given predicate.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebyPred assert \"Odd\" odd 4 ()\n\u003c/code\u003e\u003c/strong\u003e*** Exception: &#8230; Assertion failed \"Odd\", 4\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.Assert",
        "fct-package": "assert",
        "fct-signature": "(Bool -\u003e a -\u003e a) -\u003e String -\u003e (x -\u003e Bool) -\u003e x -\u003e a -\u003e a",
        "fct-source": "src/Control-Exception-Assert.html#byPred",
        "fct-type": "function",
        "title": "byPred"
      },
      "index": {
        "description": "Assert that value satisfies the given predicate byPred assert Odd odd Exception Assertion failed Odd",
        "hierarchy": "Control Exception Assert",
        "module": "Control.Exception.Assert",
        "name": "byPred",
        "normalized": "(Bool-\u003ea-\u003ea)-\u003eString-\u003e(b-\u003eBool)-\u003eb-\u003ea-\u003ea",
        "package": "assert",
        "partial": "Pred",
        "signature": "(Bool-\u003ea-\u003ea)-\u003eString-\u003e(x-\u003eBool)-\u003ex-\u003ea-\u003ea"
      }
    }
  }
]