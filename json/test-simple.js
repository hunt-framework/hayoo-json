[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest.Simple is yet another testing library for Haskell. It has testing primitives\n familiar to recovering Perl programmers :).\n\u003c/p\u003e\u003cp\u003eHaving \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance allows to cut tests early e.g using \u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eBeing monad transformer it includes integration with \u003ccode\u003eQuickCheck\u003c/code\u003e by declaring \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e instance \n on \u003ccode\u003eTestSimpleT Gen a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTest.Simple also has the ability to run in pure context (see \u003ccode\u003e\u003ca\u003erunTestSimple\u003c/a\u003e\u003c/code\u003e function).\n\u003c/p\u003e\u003cp\u003eHere is an example suitable for cabal test-suite integration. Note that TemplateHaskell\n usage is optional and is needed for test failure locations only.\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE TemplateHaskell #-}\n\nimport Test.Simple\nimport Control.Monad\n\nmain :: IO ()\nmain = testSimpleMain $ do\n          plan 7\n          ok True\n          is 1 1\n          isnt \"a\" \"b\"\n          like \"abcd\" \"bc\"\n          unlike \"a\" \"b\"\n          diag \"Successful so far, failures follow ...\"\n          $loc \u003e\u003e ok False -- location will be recorded\n          is \"a\" \"b\" \u003e\u003e= guard\n          diag \"I am not being called\" -- not reached because of the guard: MonadPlus FTW!\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "module",
        "fct-source": "src/Test-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "Test.Simple is yet another testing library for Haskell It has testing primitives familiar to recovering Perl programmers Having MonadPlus instance allows to cut tests early e.g using guard function Being monad transformer it includes integration with QuickCheck by declaring Testable instance on TestSimpleT Gen Test.Simple also has the ability to run in pure context see runTestSimple function Here is an example suitable for cabal test-suite integration Note that TemplateHaskell usage is optional and is needed for test failure locations only LANGUAGE TemplateHaskell import Test.Simple import Control.Monad main IO main testSimpleMain do plan ok True is isnt like abcd bc unlike diag Successful so far failures follow loc ok False location will be recorded is guard diag am not being called not reached because of the guard MonadPlus FTW",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "test-simple",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#t:Likeable",
      "description": {
        "fct-descr": "\u003cp\u003eIs used in \u003ccode\u003e\u003ca\u003elike\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunlike\u003c/a\u003e\u003c/code\u003e tests.\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "class",
        "fct-source": "src/Test-Simple.html#Likeable",
        "fct-type": "class",
        "title": "Likeable"
      },
      "index": {
        "description": "Is used in like unlike tests",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "Likeable",
        "normalized": "",
        "package": "test-simple",
        "partial": "Likeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#t:TestSimpleT",
      "description": {
        "fct-descr": "\u003cp\u003eTest.Simple is implemented as monad transformer.\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "data",
        "fct-source": "src/Test-Simple.html#TestSimpleT",
        "fct-type": "data",
        "title": "TestSimpleT"
      },
      "index": {
        "description": "Test.Simple is implemented as monad transformer",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "TestSimpleT",
        "normalized": "",
        "package": "test-simple",
        "partial": "Test Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:diag",
      "description": {
        "fct-descr": "\u003cp\u003eOutputs diagnostics message.\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "String -\u003e TestSimpleT m ()",
        "fct-source": "src/Test-Simple.html#diag",
        "fct-type": "function",
        "title": "diag"
      },
      "index": {
        "description": "Outputs diagnostics message",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "diag",
        "normalized": "String-\u003eTestSimpleT a()",
        "package": "test-simple",
        "partial": "",
        "signature": "String-\u003eTestSimpleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:diagen",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates and logs (through \u003ccode\u003e\u003ca\u003ediag\u003c/a\u003e\u003c/code\u003e) arbitrary value. Also outputs current location.\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "String -\u003e Gen a -\u003e TestSimpleT Gen a",
        "fct-source": "src/Test-Simple.html#diagen",
        "fct-type": "function",
        "title": "diagen"
      },
      "index": {
        "description": "Generates and logs through diag arbitrary value Also outputs current location",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "diagen",
        "normalized": "String-\u003eGen a-\u003eTestSimpleT Gen a",
        "package": "test-simple",
        "partial": "",
        "signature": "String-\u003eGen a-\u003eTestSimpleT Gen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:is",
      "description": {
        "fct-descr": "\u003cp\u003eAre values equal?\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "a -\u003e a -\u003e TestSimpleT m Bool",
        "fct-source": "src/Test-Simple.html#is",
        "fct-type": "function",
        "title": "is"
      },
      "index": {
        "description": "Are values equal",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "is",
        "normalized": "a-\u003ea-\u003eTestSimpleT b Bool",
        "package": "test-simple",
        "partial": "",
        "signature": "a-\u003ea-\u003eTestSimpleT m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:isLike",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ea\u003c/code\u003e is like \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "a -\u003e b -\u003e Bool",
        "fct-source": "src/Test-Simple.html#isLike",
        "fct-type": "method",
        "title": "isLike"
      },
      "index": {
        "description": "Returns True if is like",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "isLike",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "test-simple",
        "partial": "Like",
        "signature": "a-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:isRight",
      "description": {
        "fct-descr": "\u003cp\u003eIs \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e right?\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "Either a b -\u003e TestSimpleT m Bool",
        "fct-source": "src/Test-Simple.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "Is Either right",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "isRight",
        "normalized": "Either a b-\u003eTestSimpleT c Bool",
        "package": "test-simple",
        "partial": "Right",
        "signature": "Either a b-\u003eTestSimpleT m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:isnt",
      "description": {
        "fct-descr": "\u003cp\u003eAre values different?\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "a -\u003e a -\u003e TestSimpleT m Bool",
        "fct-source": "src/Test-Simple.html#isnt",
        "fct-type": "function",
        "title": "isnt"
      },
      "index": {
        "description": "Are values different",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "isnt",
        "normalized": "a-\u003ea-\u003eTestSimpleT b Bool",
        "package": "test-simple",
        "partial": "",
        "signature": "a-\u003ea-\u003eTestSimpleT m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:like",
      "description": {
        "fct-descr": "\u003cp\u003eIs \u003ccode\u003ea\u003c/code\u003e like \u003ccode\u003eb\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "a -\u003e b -\u003e TestSimpleT m Bool",
        "fct-source": "src/Test-Simple.html#like",
        "fct-type": "function",
        "title": "like"
      },
      "index": {
        "description": "Is like",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "like",
        "normalized": "a-\u003eb-\u003eTestSimpleT c Bool",
        "package": "test-simple",
        "partial": "",
        "signature": "a-\u003eb-\u003eTestSimpleT m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:loc",
      "description": {
        "fct-descr": "\u003cp\u003eRecords current location to output in case of failures.\n Necessary caveat: failing later without updating location produces the last location recorded.\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-Simple.html#loc",
        "fct-type": "function",
        "title": "loc"
      },
      "index": {
        "description": "Records current location to output in case of failures Necessary caveat failing later without updating location produces the last location recorded",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "loc",
        "normalized": "",
        "package": "test-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:ok",
      "description": {
        "fct-descr": "\u003cp\u003eIs \u003ccode\u003eBool\u003c/code\u003e ok?\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "Bool -\u003e TestSimpleT m Bool",
        "fct-source": "src/Test-Simple.html#ok",
        "fct-type": "function",
        "title": "ok"
      },
      "index": {
        "description": "Is Bool ok",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "ok",
        "normalized": "Bool-\u003eTestSimpleT a Bool",
        "package": "test-simple",
        "partial": "",
        "signature": "Bool-\u003eTestSimpleT m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:plan",
      "description": {
        "fct-descr": "\u003cp\u003eSets expected number of tests. Running more or less tests is considered failure.\n Note, that plans are composable, e.g:\n\u003c/p\u003e\u003cpre\u003e\n (plan 1 \u003e\u003e ok True) \u003e\u003e (plan 1 \u003e\u003e ok True)\n\u003c/pre\u003e\u003cp\u003ewill expect 2 tests.\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "Int -\u003e TestSimpleT m ()",
        "fct-source": "src/Test-Simple.html#plan",
        "fct-type": "function",
        "title": "plan"
      },
      "index": {
        "description": "Sets expected number of tests Running more or less tests is considered failure Note that plans are composable e.g plan ok True plan ok True will expect tests",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "plan",
        "normalized": "Int-\u003eTestSimpleT a()",
        "package": "test-simple",
        "partial": "",
        "signature": "Int-\u003eTestSimpleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:qcTestSimpleMain",
      "description": {
        "fct-descr": "\u003cp\u003eRun some \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e monad through \u003ccode\u003eQuickCheck\u003c/code\u003e. Exit with failure on error.\n Equivalent to \u003ccode\u003e\u003ca\u003eqcTestSimpleWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003equickCheckResult\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "m a -\u003e IO ()",
        "fct-source": "src/Test-Simple.html#qcTestSimpleMain",
        "fct-type": "function",
        "title": "qcTestSimpleMain"
      },
      "index": {
        "description": "Run some Testable monad through QuickCheck Exit with failure on error Equivalent to qcTestSimpleWith quickCheckResult",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "qcTestSimpleMain",
        "normalized": "a b-\u003eIO()",
        "package": "test-simple",
        "partial": "Test Simple Main",
        "signature": "m a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:qcTestSimpleWith",
      "description": {
        "fct-descr": "\u003cp\u003eRun some \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e monad through \u003ccode\u003eQuickCheck\u003c/code\u003e function. Exit with failure on error.\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "(m a -\u003e IO Result) -\u003e m a -\u003e IO ()",
        "fct-source": "src/Test-Simple.html#qcTestSimpleWith",
        "fct-type": "function",
        "title": "qcTestSimpleWith"
      },
      "index": {
        "description": "Run some Testable monad through QuickCheck function Exit with failure on error",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "qcTestSimpleWith",
        "normalized": "(a b-\u003eIO Result)-\u003ea b-\u003eIO()",
        "package": "test-simple",
        "partial": "Test Simple With",
        "signature": "(m a-\u003eIO Result)-\u003em a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:runTestSimple",
      "description": {
        "fct-descr": "\u003cp\u003eRuns \u003ccode\u003e\u003ca\u003eTestSimpleT\u003c/a\u003e\u003c/code\u003e transformer. Returns whether the tests where successful and resulting\n output.\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "TestSimpleT m a -\u003e m (Bool, [String])",
        "fct-source": "src/Test-Simple.html#runTestSimple",
        "fct-type": "function",
        "title": "runTestSimple"
      },
      "index": {
        "description": "Runs TestSimpleT transformer Returns whether the tests where successful and resulting output",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "runTestSimple",
        "normalized": "TestSimpleT a b-\u003ea(Bool,[String])",
        "package": "test-simple",
        "partial": "Test Simple",
        "signature": "TestSimpleT m a-\u003em(Bool,[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:testSimpleMain",
      "description": {
        "fct-descr": "\u003cp\u003eRuns \u003ccode\u003e\u003ca\u003eTestSimpleT\u003c/a\u003e\u003c/code\u003e transformer in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. Outputs results in TAP format.\n Exits with error on test failure.\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "TestSimpleT m a -\u003e m ()",
        "fct-source": "src/Test-Simple.html#testSimpleMain",
        "fct-type": "function",
        "title": "testSimpleMain"
      },
      "index": {
        "description": "Runs TestSimpleT transformer in IO Outputs results in TAP format Exits with error on test failure",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "testSimpleMain",
        "normalized": "TestSimpleT a b-\u003ea()",
        "package": "test-simple",
        "partial": "Simple Main",
        "signature": "TestSimpleT m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:unlike",
      "description": {
        "fct-descr": "\u003cp\u003eIs \u003ccode\u003ea\u003c/code\u003e unlike \u003ccode\u003eb\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Test.Simple",
        "fct-package": "test-simple",
        "fct-signature": "a -\u003e b -\u003e TestSimpleT m Bool",
        "fct-source": "src/Test-Simple.html#unlike",
        "fct-type": "function",
        "title": "unlike"
      },
      "index": {
        "description": "Is unlike",
        "hierarchy": "Test Simple",
        "module": "Test.Simple",
        "name": "unlike",
        "normalized": "a-\u003eb-\u003eTestSimpleT c Bool",
        "package": "test-simple",
        "partial": "",
        "signature": "a-\u003eb-\u003eTestSimpleT m Bool"
      }
    }
  }
]