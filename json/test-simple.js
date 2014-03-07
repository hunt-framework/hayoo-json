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
        "word": "test-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest.Simple is yet another testing library for Haskell. It has testing primitives\n familiar to recovering Perl programmers :).\n\u003c/p\u003e\u003cp\u003eHaving \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance allows to cut tests early e.g using \u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eBeing monad transformer it includes integration with \u003ccode\u003eQuickCheck\u003c/code\u003e by declaring \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e instance \n on \u003ccode\u003eTestSimpleT Gen a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTest.Simple also has the ability to run in pure context (see \u003ccode\u003e\u003ca\u003erunTestSimple\u003c/a\u003e\u003c/code\u003e function).\n\u003c/p\u003e\u003cp\u003eHere is an example suitable for cabal test-suite integration. Note that TemplateHaskell\n usage is optional and is needed for test failure locations only.\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE TemplateHaskell #-}\n\nimport Test.Simple\nimport Control.Monad\n\nmain :: IO ()\nmain = testSimpleMain $ do\n          plan 7\n          ok True\n          is 1 1\n          isnt \"a\" \"b\"\n          like \"abcd\" \"bc\"\n          unlike \"a\" \"b\"\n          diag \"Successful so far, failures follow ...\"\n          $loc \u003e\u003e ok False -- location will be recorded\n          is \"a\" \"b\" \u003e\u003e= guard\n          diag \"I am not being called\" -- not reached because of the guard: MonadPlus FTW!\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.Simple",
          "name": "Simple",
          "package": "test-simple",
          "source": "src/Test-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "Test.Simple is yet another testing library for Haskell It has testing primitives familiar to recovering Perl programmers Having MonadPlus instance allows to cut tests early e.g using guard function Being monad transformer it includes integration with QuickCheck by declaring Testable instance on TestSimpleT Gen Test.Simple also has the ability to run in pure context see runTestSimple function Here is an example suitable for cabal test-suite integration Note that TemplateHaskell usage is optional and is needed for test failure locations only LANGUAGE TemplateHaskell import Test.Simple import Control.Monad main IO main testSimpleMain do plan ok True is isnt like abcd bc unlike diag Successful so far failures follow loc ok False location will be recorded is guard diag am not being called not reached because of the guard MonadPlus FTW",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "Simple",
          "package": "test-simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs used in \u003ccode\u003e\u003ca\u003elike\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunlike\u003c/a\u003e\u003c/code\u003e tests.\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "Likeable",
          "package": "test-simple",
          "source": "src/Test-Simple.html#Likeable",
          "type": "class"
        },
        "index": {
          "description": "Is used in like unlike tests",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "Likeable",
          "package": "test-simple",
          "partial": "Likeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#t:Likeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest.Simple is implemented as monad transformer.\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "TestSimpleT",
          "package": "test-simple",
          "source": "src/Test-Simple.html#TestSimpleT",
          "type": "data"
        },
        "index": {
          "description": "Test.Simple is implemented as monad transformer",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "TestSimpleT",
          "package": "test-simple",
          "partial": "Test Simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#t:TestSimpleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs diagnostics message.\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "diag",
          "package": "test-simple",
          "signature": "String -\u003e TestSimpleT m ()",
          "source": "src/Test-Simple.html#diag",
          "type": "function"
        },
        "index": {
          "description": "Outputs diagnostics message",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "diag",
          "normalized": "String-\u003eTestSimpleT a()",
          "package": "test-simple",
          "signature": "String-\u003eTestSimpleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates and logs (through \u003ccode\u003e\u003ca\u003ediag\u003c/a\u003e\u003c/code\u003e) arbitrary value. Also outputs current location.\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "diagen",
          "package": "test-simple",
          "signature": "String -\u003e Gen a -\u003e TestSimpleT Gen a",
          "source": "src/Test-Simple.html#diagen",
          "type": "function"
        },
        "index": {
          "description": "Generates and logs through diag arbitrary value Also outputs current location",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "diagen",
          "normalized": "String-\u003eGen a-\u003eTestSimpleT Gen a",
          "package": "test-simple",
          "signature": "String-\u003eGen a-\u003eTestSimpleT Gen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:diagen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre values equal?\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "is",
          "package": "test-simple",
          "signature": "a -\u003e a -\u003e TestSimpleT m Bool",
          "source": "src/Test-Simple.html#is",
          "type": "function"
        },
        "index": {
          "description": "Are values equal",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "is",
          "normalized": "a-\u003ea-\u003eTestSimpleT b Bool",
          "package": "test-simple",
          "signature": "a-\u003ea-\u003eTestSimpleT m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ea\u003c/code\u003e is like \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "isLike",
          "package": "test-simple",
          "signature": "a -\u003e b -\u003e Bool",
          "source": "src/Test-Simple.html#isLike",
          "type": "method"
        },
        "index": {
          "description": "Returns True if is like",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "isLike",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "test-simple",
          "partial": "Like",
          "signature": "a-\u003eb-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:isLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e right?\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "isRight",
          "package": "test-simple",
          "signature": "Either a b -\u003e TestSimpleT m Bool",
          "source": "src/Test-Simple.html#isRight",
          "type": "function"
        },
        "index": {
          "description": "Is Either right",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "isRight",
          "normalized": "Either a b-\u003eTestSimpleT c Bool",
          "package": "test-simple",
          "partial": "Right",
          "signature": "Either a b-\u003eTestSimpleT m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre values different?\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "isnt",
          "package": "test-simple",
          "signature": "a -\u003e a -\u003e TestSimpleT m Bool",
          "source": "src/Test-Simple.html#isnt",
          "type": "function"
        },
        "index": {
          "description": "Are values different",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "isnt",
          "normalized": "a-\u003ea-\u003eTestSimpleT b Bool",
          "package": "test-simple",
          "signature": "a-\u003ea-\u003eTestSimpleT m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:isnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003ea\u003c/code\u003e like \u003ccode\u003eb\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "like",
          "package": "test-simple",
          "signature": "a -\u003e b -\u003e TestSimpleT m Bool",
          "source": "src/Test-Simple.html#like",
          "type": "function"
        },
        "index": {
          "description": "Is like",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "like",
          "normalized": "a-\u003eb-\u003eTestSimpleT c Bool",
          "package": "test-simple",
          "signature": "a-\u003eb-\u003eTestSimpleT m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:like"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords current location to output in case of failures.\n Necessary caveat: failing later without updating location produces the last location recorded.\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "loc",
          "package": "test-simple",
          "signature": "Q Exp",
          "source": "src/Test-Simple.html#loc",
          "type": "function"
        },
        "index": {
          "description": "Records current location to output in case of failures Necessary caveat failing later without updating location produces the last location recorded",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "loc",
          "package": "test-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003eBool\u003c/code\u003e ok?\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "ok",
          "package": "test-simple",
          "signature": "Bool -\u003e TestSimpleT m Bool",
          "source": "src/Test-Simple.html#ok",
          "type": "function"
        },
        "index": {
          "description": "Is Bool ok",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "ok",
          "normalized": "Bool-\u003eTestSimpleT a Bool",
          "package": "test-simple",
          "signature": "Bool-\u003eTestSimpleT m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets expected number of tests. Running more or less tests is considered failure.\n Note, that plans are composable, e.g:\n\u003c/p\u003e\u003cpre\u003e\n (plan 1 \u003e\u003e ok True) \u003e\u003e (plan 1 \u003e\u003e ok True)\n\u003c/pre\u003e\u003cp\u003ewill expect 2 tests.\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "plan",
          "package": "test-simple",
          "signature": "Int -\u003e TestSimpleT m ()",
          "source": "src/Test-Simple.html#plan",
          "type": "function"
        },
        "index": {
          "description": "Sets expected number of tests Running more or less tests is considered failure Note that plans are composable e.g plan ok True plan ok True will expect tests",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "plan",
          "normalized": "Int-\u003eTestSimpleT a()",
          "package": "test-simple",
          "signature": "Int-\u003eTestSimpleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:plan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun some \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e monad through \u003ccode\u003eQuickCheck\u003c/code\u003e. Exit with failure on error.\n Equivalent to \u003ccode\u003e\u003ca\u003eqcTestSimpleWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003equickCheckResult\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "qcTestSimpleMain",
          "package": "test-simple",
          "signature": "m a -\u003e IO ()",
          "source": "src/Test-Simple.html#qcTestSimpleMain",
          "type": "function"
        },
        "index": {
          "description": "Run some Testable monad through QuickCheck Exit with failure on error Equivalent to qcTestSimpleWith quickCheckResult",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "qcTestSimpleMain",
          "normalized": "a b-\u003eIO()",
          "package": "test-simple",
          "partial": "Test Simple Main",
          "signature": "m a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:qcTestSimpleMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun some \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e monad through \u003ccode\u003eQuickCheck\u003c/code\u003e function. Exit with failure on error.\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "qcTestSimpleWith",
          "package": "test-simple",
          "signature": "(m a -\u003e IO Result) -\u003e m a -\u003e IO ()",
          "source": "src/Test-Simple.html#qcTestSimpleWith",
          "type": "function"
        },
        "index": {
          "description": "Run some Testable monad through QuickCheck function Exit with failure on error",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "qcTestSimpleWith",
          "normalized": "(a b-\u003eIO Result)-\u003ea b-\u003eIO()",
          "package": "test-simple",
          "partial": "Test Simple With",
          "signature": "(m a-\u003eIO Result)-\u003em a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:qcTestSimpleWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns \u003ccode\u003e\u003ca\u003eTestSimpleT\u003c/a\u003e\u003c/code\u003e transformer. Returns whether the tests where successful and resulting\n output.\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "runTestSimple",
          "package": "test-simple",
          "signature": "TestSimpleT m a -\u003e m (Bool, [String])",
          "source": "src/Test-Simple.html#runTestSimple",
          "type": "function"
        },
        "index": {
          "description": "Runs TestSimpleT transformer Returns whether the tests where successful and resulting output",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "runTestSimple",
          "normalized": "TestSimpleT a b-\u003ea(Bool,[String])",
          "package": "test-simple",
          "partial": "Test Simple",
          "signature": "TestSimpleT m a-\u003em(Bool,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:runTestSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns \u003ccode\u003e\u003ca\u003eTestSimpleT\u003c/a\u003e\u003c/code\u003e transformer in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. Outputs results in TAP format.\n Exits with error on test failure.\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "testSimpleMain",
          "package": "test-simple",
          "signature": "TestSimpleT m a -\u003e m ()",
          "source": "src/Test-Simple.html#testSimpleMain",
          "type": "function"
        },
        "index": {
          "description": "Runs TestSimpleT transformer in IO Outputs results in TAP format Exits with error on test failure",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "testSimpleMain",
          "normalized": "TestSimpleT a b-\u003ea()",
          "package": "test-simple",
          "partial": "Simple Main",
          "signature": "TestSimpleT m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:testSimpleMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003ea\u003c/code\u003e unlike \u003ccode\u003eb\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Test.Simple",
          "name": "unlike",
          "package": "test-simple",
          "signature": "a -\u003e b -\u003e TestSimpleT m Bool",
          "source": "src/Test-Simple.html#unlike",
          "type": "function"
        },
        "index": {
          "description": "Is unlike",
          "hierarchy": "Test Simple",
          "module": "Test.Simple",
          "name": "unlike",
          "normalized": "a-\u003eb-\u003eTestSimpleT c Bool",
          "package": "test-simple",
          "signature": "a-\u003eb-\u003eTestSimpleT m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-simple/docs/Test-Simple.html#v:unlike"
      }
    }
  ]
]