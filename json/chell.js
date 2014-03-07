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
        "word": "chell"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eChell is a simple and intuitive library for automated testing. It natively\n supports assertion-based testing, and can use companion libraries\n such as \u003ccode\u003echell-quickcheck\u003c/code\u003e to support more complex testing strategies.\n\u003c/p\u003e\u003cp\u003eAn example test suite, which verifies the behavior of artithmetic operators.\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE TemplateHaskell #-}\n\nimport Test.Chell\n\ntests_Math :: Suite\ntests_Math = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"math\"\n    test_Addition\n    test_Subtraction\n\ntest_Addition :: Test\ntest_Addition = \u003ccode\u003e\u003ca\u003eassertions\u003c/a\u003e\u003c/code\u003e \"addition\" $ do\n    $\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eequal\u003c/a\u003e\u003c/code\u003e (2 + 1) 3)\n    $\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eequal\u003c/a\u003e\u003c/code\u003e (1 + 2) 3)\n\ntest_Subtraction :: Test\ntest_Subtraction = \u003ccode\u003e\u003ca\u003eassertions\u003c/a\u003e\u003c/code\u003e \"subtraction\" $ do\n    $\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eequal\u003c/a\u003e\u003c/code\u003e (2 - 1) 1)\n    $\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eequal\u003c/a\u003e\u003c/code\u003e (1 - 2) (-1))\n\nmain :: IO ()\nmain = \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e [tests_Math]\n\u003c/pre\u003e\u003cpre\u003e$ ghc --make chell-example.hs\n$ ./chell-example\nPASS: 2 tests run, 2 tests passed\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.Chell",
          "name": "Chell",
          "package": "chell",
          "source": "src/Test-Chell.html",
          "type": "module"
        },
        "index": {
          "description": "Chell is simple and intuitive library for automated testing It natively supports assertion-based testing and can use companion libraries such as chell-quickcheck to support more complex testing strategies An example test suite which verifies the behavior of artithmetic operators LANGUAGE TemplateHaskell import Test.Chell tests Math Suite tests Math suite math test Addition test Subtraction test Addition Test test Addition assertions addition do expect equal expect equal test Subtraction Test test Subtraction assertions subtraction do expect equal expect equal main IO main defaultMain tests Math ghc make chell-example.hs chell-example PASS tests run tests passed",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "Chell",
          "package": "chell",
          "partial": "Chell",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single pass/fail assertion. Failed assertions include an explanatory\n message.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "Assertion",
          "package": "chell",
          "source": "src/Test-Chell.html#Assertion",
          "type": "data"
        },
        "index": {
          "description": "single pass fail assertion Failed assertions include an explanatory message",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "Assertion",
          "package": "chell",
          "partial": "Assertion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Assertion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eassertions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "Assertions",
          "package": "chell",
          "source": "src/Test-Chell.html#Assertions",
          "type": "data"
        },
        "index": {
          "description": "See assertions",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "Assertions",
          "package": "chell",
          "partial": "Assertions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Assertions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "BuildSuite",
          "package": "chell",
          "source": "src/Test-Chell-Types.html#BuildSuite",
          "type": "class"
        },
        "index": {
          "description": "See suite",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "BuildSuite",
          "package": "chell",
          "partial": "Build Suite",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:BuildSuite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains details about a test failure.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "Failure",
          "package": "chell",
          "source": "src/Test-Chell-Types.html#Failure",
          "type": "data"
        },
        "index": {
          "description": "Contains details about test failure",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "Failure",
          "package": "chell",
          "partial": "Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "IsAssertion",
          "package": "chell",
          "source": "src/Test-Chell.html#IsAssertion",
          "type": "class"
        },
        "index": {
          "description": "See assert and expect",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "IsAssertion",
          "package": "chell",
          "partial": "Is Assertion",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:IsAssertion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for types which can be treated as text; see \u003ccode\u003e\u003ca\u003eequalLines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "IsText",
          "package": "chell",
          "source": "src/Test-Chell.html#IsText",
          "type": "class"
        },
        "index": {
          "description": "Class for types which can be treated as text see equalLines",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "IsText",
          "package": "chell",
          "partial": "Is Text",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:IsText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains details about a location in the test source file.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "Location",
          "package": "chell",
          "source": "src/Test-Chell-Types.html#Location",
          "type": "data"
        },
        "index": {
          "description": "Contains details about location in the test source file",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "Location",
          "package": "chell",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA suite is a node in a hierarchy of tests, similar to a directory in the\n filesystem. Each suite has a name and a list of children, which are either\n suites or tests.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "Suite",
          "package": "chell",
          "source": "src/Test-Chell-Types.html#Suite",
          "type": "data"
        },
        "index": {
          "description": "suite is node in hierarchy of tests similar to directory in the filesystem Each suite has name and list of children which are either suites or tests",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "Suite",
          "package": "chell",
          "partial": "Suite",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Suite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "SuiteOrTest",
          "package": "chell",
          "source": "src/Test-Chell-Types.html#SuiteOrTest",
          "type": "class"
        },
        "index": {
          "description": "See suite",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "SuiteOrTest",
          "package": "chell",
          "partial": "Suite Or Test",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:SuiteOrTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e is, essentially, an IO action that returns a \u003ccode\u003e\u003ca\u003eTestResult\u003c/a\u003e\u003c/code\u003e. Tests\n are aggregated into suites (see \u003ccode\u003e\u003ca\u003eSuite\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "Test",
          "package": "chell",
          "source": "src/Test-Chell-Types.html#Test",
          "type": "data"
        },
        "index": {
          "description": "Test is essentially an IO action that returns TestResult Tests are aggregated into suites see Suite",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "Test",
          "package": "chell",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest options are passed to each test, and control details about how the\n test should be run.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "TestOptions",
          "package": "chell",
          "source": "src/Test-Chell-Types.html#TestOptions",
          "type": "data"
        },
        "index": {
          "description": "Test options are passed to each test and control details about how the test should be run",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "TestOptions",
          "package": "chell",
          "partial": "Test Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:TestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of running a test.\n\u003c/p\u003e\u003cp\u003eTo support future extensions to the testing API, any users of this module\n who pattern-match against the \u003ccode\u003e\u003ca\u003eTestResult\u003c/a\u003e\u003c/code\u003e constructors should include a\n default case. If no default case is provided, a warning will be issued.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "TestResult",
          "package": "chell",
          "source": "src/Test-Chell-Types.html#TestResult",
          "type": "data"
        },
        "index": {
          "description": "The result of running test To support future extensions to the testing API any users of this module who pattern-match against the TestResult constructors should include default case If no default case is provided warning will be issued",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "TestResult",
          "package": "chell",
          "partial": "Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test aborted with an error message, and generated the given\n notes.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "TestAborted",
          "package": "chell",
          "signature": "TestAborted [(String, String)] String",
          "source": "src/Test-Chell-Types.html#TestResult",
          "type": "function"
        },
        "index": {
          "description": "The test aborted with an error message and generated the given notes",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "TestAborted",
          "normalized": "TestAborted[(String,String)]String",
          "package": "chell",
          "partial": "Test Aborted",
          "signature": "TestAborted[(String,String)]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:TestAborted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test failed, generating the given notes and failures.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "TestFailed",
          "package": "chell",
          "signature": "TestFailed [(String, String)] [Failure]",
          "source": "src/Test-Chell-Types.html#TestResult",
          "type": "function"
        },
        "index": {
          "description": "The test failed generating the given notes and failures",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "TestFailed",
          "normalized": "TestFailed[(String,String)][Failure]",
          "package": "chell",
          "partial": "Test Failed",
          "signature": "TestFailed[(String,String)][Failure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:TestFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test passed, and generated the given notes.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "TestPassed",
          "package": "chell",
          "signature": "TestPassed [(String, String)]",
          "source": "src/Test-Chell-Types.html#TestResult",
          "type": "function"
        },
        "index": {
          "description": "The test passed and generated the given notes",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "TestPassed",
          "normalized": "TestPassed[(String,String)]",
          "package": "chell",
          "partial": "Test Passed",
          "signature": "TestPassed[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:TestPassed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test did not run, because it was skipped with \u003ccode\u003e\u003ca\u003eskipIf\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eskipWhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "TestSkipped",
          "package": "chell",
          "signature": "TestSkipped",
          "source": "src/Test-Chell-Types.html#TestResult",
          "type": "function"
        },
        "index": {
          "description": "The test did not run because it was skipped with skipIf or skipWhen",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "TestSkipped",
          "package": "chell",
          "partial": "Test Skipped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:TestSkipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister an IO action to be run after the test completes. This action\n will run even if the test failed or aborted.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "afterTest",
          "package": "chell",
          "signature": "IO () -\u003e Assertions ()",
          "source": "src/Test-Chell.html#afterTest",
          "type": "function"
        },
        "index": {
          "description": "Register an IO action to be run after the test completes This action will run even if the test failed or aborted",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "afterTest",
          "normalized": "IO()-\u003eAssertions()",
          "package": "chell",
          "partial": "Test",
          "signature": "IO()-\u003eAssertions()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:afterTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck an assertion. If the assertion fails, the test will immediately\n fail.\n\u003c/p\u003e\u003cp\u003eThe assertion to check can be a boolean value, an \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e, or an IO\n action returning one of the above.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file location\n from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $assert :: \u003ccode\u003e\u003ca\u003eIsAssertion\u003c/a\u003e\u003c/code\u003e assertion =\u003e assertion -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e ()\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "assert",
          "package": "chell",
          "signature": "Q Exp",
          "source": "src/Test-Chell.html#assert",
          "type": "function"
        },
        "index": {
          "description": "Check an assertion If the assertion fails the test will immediately fail The assertion to check can be boolean value an Assertion or an IO action returning one of the above assert is Template Haskell macro to retain the source-file location from which it was used Its effective type is assert IsAssertion assertion assertion Assertions",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "assert",
          "package": "chell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "assertionFailed",
          "package": "chell",
          "signature": "String -\u003e Assertion",
          "source": "src/Test-Chell.html#assertionFailed",
          "type": "function"
        },
        "index": {
          "description": "See Assertion",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "assertionFailed",
          "normalized": "String-\u003eAssertion",
          "package": "chell",
          "partial": "Failed",
          "signature": "String-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:assertionFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "assertionPassed",
          "package": "chell",
          "signature": "Assertion",
          "source": "src/Test-Chell.html#assertionPassed",
          "type": "function"
        },
        "index": {
          "description": "See Assertion",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "assertionPassed",
          "package": "chell",
          "partial": "Passed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:assertionPassed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a sequence of pass/fail assertions into a runnable test.\n\u003c/p\u003e\u003cpre\u003e\n test_Equality :: Test\n test_Equality = assertions \"equality\" $ do\n     $assert (1 == 1)\n     $assert (equal 1 1)\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "assertions",
          "package": "chell",
          "signature": "String -\u003e Assertions a -\u003e Test",
          "source": "src/Test-Chell.html#assertions",
          "type": "function"
        },
        "index": {
          "description": "Convert sequence of pass fail assertions into runnable test test Equality Test test Equality assertions equality do assert assert equal",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "assertions",
          "normalized": "String-\u003eAssertions a-\u003eTest",
          "package": "chell",
          "signature": "String-\u003eAssertions a-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:assertions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple default main function, which runs a list of tests and logs\n statistics to stdout.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "defaultMain",
          "package": "chell",
          "signature": "[Suite] -\u003e IO ()",
          "source": "src/Test-Chell-Main.html#defaultMain",
          "type": "function"
        },
        "index": {
          "description": "simple default main function which runs list of tests and logs statistics to stdout",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "defaultMain",
          "normalized": "[Suite]-\u003eIO()",
          "package": "chell",
          "partial": "Main",
          "signature": "[Suite]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault test options.\n\u003c/p\u003e\u003cpre\u003e$ ghci\nPrelude\u003e import Test.Chell\n\nTest.Chell\u003e testOptionSeed defaultTestOptions\n0\n\nTest.Chell\u003e testOptionTimeout defaultTestOptions\nNothing\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "defaultTestOptions",
          "package": "chell",
          "signature": "TestOptions",
          "source": "src/Test-Chell-Types.html#defaultTestOptions",
          "type": "function"
        },
        "index": {
          "description": "Default test options ghci Prelude import Test.Chell Test.Chell testOptionSeed defaultTestOptions Test.Chell testOptionTimeout defaultTestOptions Nothing",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "defaultTestOptions",
          "package": "chell",
          "partial": "Test Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:defaultTestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCause a test to immediately fail, with a message.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edie\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file location from\n which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $die :: \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e a\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "die",
          "package": "chell",
          "signature": "Q Exp",
          "source": "src/Test-Chell.html#die",
          "type": "function"
        },
        "index": {
          "description": "Cause test to immediately fail with message die is Template Haskell macro to retain the source-file location from which it was used Its effective type is die String Assertions",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "die",
          "package": "chell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:die"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that two values are equal.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "equal",
          "package": "chell",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Test-Chell.html#equal",
          "type": "function"
        },
        "index": {
          "description": "Assert that two values are equal",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "equal",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "chell",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that two containers have the same items, in the same order.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "equalItems",
          "package": "chell",
          "signature": "container item -\u003e container item -\u003e Assertion",
          "source": "src/Test-Chell.html#equalItems",
          "type": "function"
        },
        "index": {
          "description": "Assert that two containers have the same items in the same order",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "equalItems",
          "normalized": "a b-\u003ea b-\u003eAssertion",
          "package": "chell",
          "partial": "Items",
          "signature": "container item-\u003econtainer item-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equalItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that two pieces of text are equal. This uses a diff algorithm\n to check line-by-line, so the error message will be easier to read on\n large inputs.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "equalLines",
          "package": "chell",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Test-Chell.html#equalLines",
          "type": "function"
        },
        "index": {
          "description": "Assert that two pieces of text are equal This uses diff algorithm to check line-by-line so the error message will be easier to read on large inputs",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "equalLines",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "chell",
          "partial": "Lines",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equalLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eequalLines\u003c/a\u003e\u003c/code\u003e which allows a user-specified line-splitting\n predicate.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "equalLinesWith",
          "package": "chell",
          "signature": "(a -\u003e [String]) -\u003e a -\u003e a -\u003e Assertion",
          "source": "src/Test-Chell.html#equalLinesWith",
          "type": "function"
        },
        "index": {
          "description": "Variant of equalLines which allows user-specified line-splitting predicate",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "equalLinesWith",
          "normalized": "(a-\u003e[String])-\u003ea-\u003ea-\u003eAssertion",
          "package": "chell",
          "partial": "Lines With",
          "signature": "(a-\u003e[String])-\u003ea-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equalLinesWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that two values are within some delta of each other.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "equalWithin",
          "package": "chell",
          "signature": "a-\u003e a-\u003e a-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Assert that two values are within some delta of each other",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "equalWithin",
          "normalized": "a-\u003ea-\u003ea-\u003eAssertion",
          "package": "chell",
          "partial": "Within",
          "signature": "a-\u003ea-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equalWithin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck an assertion. If the assertion fails, the test will continue to\n run until it finishes, a call to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e fails, or the test runs \u003ccode\u003e\u003ca\u003edie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe assertion to check can be a boolean value, an \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e, or an IO\n action returning one of the above.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file location\n from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $expect :: \u003ccode\u003e\u003ca\u003eIsAssertion\u003c/a\u003e\u003c/code\u003e assertion =\u003e assertion -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e ()\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "expect",
          "package": "chell",
          "signature": "Q Exp",
          "source": "src/Test-Chell.html#expect",
          "type": "function"
        },
        "index": {
          "description": "Check an assertion If the assertion fails the test will continue to run until it finishes call to assert fails or the test runs die The assertion to check can be boolean value an Assertion or an IO action returning one of the above expect is Template Haskell macro to retain the source-file location from which it was used Its effective type is expect IsAssertion assertion assertion Assertions",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "expect",
          "package": "chell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e; use the field accessors to populate this value.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "failure",
          "package": "chell",
          "signature": "Failure",
          "source": "src/Test-Chell-Types.html#failure",
          "type": "function"
        },
        "index": {
          "description": "An empty Failure use the field accessors to populate this value",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "failure",
          "package": "chell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf given, the location of the failing assertion, expectation,\n etc.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efailureLocation\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "failureLocation",
          "package": "chell",
          "signature": "Failure -\u003e Maybe Location",
          "source": "src/Test-Chell-Types.html#failureLocation",
          "type": "function"
        },
        "index": {
          "description": "If given the location of the failing assertion expectation etc failureLocation is field accessor and can be used to update Failure value",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "failureLocation",
          "normalized": "Failure-\u003eMaybe Location",
          "package": "chell",
          "partial": "Location",
          "signature": "Failure-\u003eMaybe Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:failureLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf given, a message which explains why the test failed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efailureMessage\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "failureMessage",
          "package": "chell",
          "signature": "Failure -\u003e String",
          "source": "src/Test-Chell-Types.html#failureMessage",
          "type": "function"
        },
        "index": {
          "description": "If given message which explains why the test failed failureMessage is field accessor and can be used to update Failure value",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "failureMessage",
          "normalized": "Failure-\u003eString",
          "package": "chell",
          "partial": "Message",
          "signature": "Failure-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:failureMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert a value is greater than another.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "greater",
          "package": "chell",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Test-Chell.html#greater",
          "type": "function"
        },
        "index": {
          "description": "Assert value is greater than another",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "greater",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "chell",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:greater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert a value is greater than or equal to another.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "greaterEqual",
          "package": "chell",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Test-Chell.html#greaterEqual",
          "type": "function"
        },
        "index": {
          "description": "Assert value is greater than or equal to another",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "greaterEqual",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "chell",
          "partial": "Equal",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:greaterEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that some value is \u003ccode\u003eJust\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "just",
          "package": "chell",
          "signature": "Maybe a -\u003e Assertion",
          "source": "src/Test-Chell.html#just",
          "type": "function"
        },
        "index": {
          "description": "Assert that some value is Just",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "just",
          "normalized": "Maybe a-\u003eAssertion",
          "package": "chell",
          "signature": "Maybe a-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that some value is \u003ccode\u003eLeft\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "left",
          "package": "chell",
          "signature": "Either a b -\u003e Assertion",
          "source": "src/Test-Chell.html#left",
          "type": "function"
        },
        "index": {
          "description": "Assert that some value is Left",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "left",
          "normalized": "Either a b-\u003eAssertion",
          "package": "chell",
          "signature": "Either a b-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert a value is less than another.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "lesser",
          "package": "chell",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Test-Chell.html#lesser",
          "type": "function"
        },
        "index": {
          "description": "Assert value is less than another",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "lesser",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "chell",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:lesser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert a value is less than or equal to another.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "lesserEqual",
          "package": "chell",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Test-Chell.html#lesserEqual",
          "type": "function"
        },
        "index": {
          "description": "Assert value is less than or equal to another",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "lesserEqual",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "chell",
          "partial": "Equal",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:lesserEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e; use the field accessors to populate this value.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "location",
          "package": "chell",
          "signature": "Location",
          "source": "src/Test-Chell-Types.html#location",
          "type": "function"
        },
        "index": {
          "description": "An empty Location use the field accessors to populate this value",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "location",
          "package": "chell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path to a source file, or empty if not provided.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003elocationFile\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "locationFile",
          "package": "chell",
          "signature": "Location -\u003e String",
          "source": "src/Test-Chell-Types.html#locationFile",
          "type": "function"
        },
        "index": {
          "description": "path to source file or empty if not provided locationFile is field accessor and can be used to update Location value",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "locationFile",
          "normalized": "Location-\u003eString",
          "package": "chell",
          "partial": "File",
          "signature": "Location-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:locationFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line number, or Nothing if not provided.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003elocationLine\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "locationLine",
          "package": "chell",
          "signature": "Location -\u003e Maybe Integer",
          "source": "src/Test-Chell-Types.html#locationLine",
          "type": "function"
        },
        "index": {
          "description": "line number or Nothing if not provided locationLine is field accessor and can be used to update Location value",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "locationLine",
          "normalized": "Location-\u003eMaybe Integer",
          "package": "chell",
          "partial": "Line",
          "signature": "Location-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:locationLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Haskell module name, or empty if not provided.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003elocationModule\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "locationModule",
          "package": "chell",
          "signature": "Location -\u003e String",
          "source": "src/Test-Chell-Types.html#locationModule",
          "type": "function"
        },
        "index": {
          "description": "Haskell module name or empty if not provided locationModule is field accessor and can be used to update Location value",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "locationModule",
          "normalized": "Location-\u003eString",
          "package": "chell",
          "partial": "Module",
          "signature": "Location-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:locationModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that two values are not equal.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "notEqual",
          "package": "chell",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Test-Chell.html#notEqual",
          "type": "function"
        },
        "index": {
          "description": "Assert that two values are not equal",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "notEqual",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "chell",
          "partial": "Equal",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:notEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach a note to a test run. Notes will be printed to stdout and\n included in reports, even if the test fails or aborts. Notes are useful for\n debugging failing tests.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "note",
          "package": "chell",
          "signature": "String -\u003e String -\u003e Assertions ()",
          "source": "src/Test-Chell.html#note",
          "type": "function"
        },
        "index": {
          "description": "Attach note to test run Notes will be printed to stdout and included in reports even if the test fails or aborts Notes are useful for debugging failing tests",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "note",
          "normalized": "String-\u003eString-\u003eAssertions()",
          "package": "chell",
          "signature": "String-\u003eString-\u003eAssertions()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that some value is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "nothing",
          "package": "chell",
          "signature": "Maybe a -\u003e Assertion",
          "source": "src/Test-Chell.html#nothing",
          "type": "function"
        },
        "index": {
          "description": "Assert that some value is Nothing",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "nothing",
          "normalized": "Maybe a-\u003eAssertion",
          "package": "chell",
          "signature": "Maybe a-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value to be \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e, and return its contents. If\n the value is \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e, fail the test.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erequireLeft\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file\n location from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $requireLeft :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e b =\u003e \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e a\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "requireLeft",
          "package": "chell",
          "signature": "Q Exp",
          "source": "src/Test-Chell.html#requireLeft",
          "type": "function"
        },
        "index": {
          "description": "Require an Either value to be Left and return its contents If the value is Right fail the test requireLeft is Template Haskell macro to retain the source-file location from which it was used Its effective type is requireLeft Show Either Assertions",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "requireLeft",
          "package": "chell",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:requireLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value to be \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e, and return its contents. If\n the value is \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e, fail the test.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erequireRight\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file\n location from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $requireRight :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e b\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "requireRight",
          "package": "chell",
          "signature": "Q Exp",
          "source": "src/Test-Chell.html#requireRight",
          "type": "function"
        },
        "index": {
          "description": "Require an Either value to be Right and return its contents If the value is Left fail the test requireRight is Template Haskell macro to retain the source-file location from which it was used Its effective type is requireRight Show Either Assertions",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "requireRight",
          "package": "chell",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:requireRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that some value is \u003ccode\u003eRight\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "right",
          "package": "chell",
          "signature": "Either a b -\u003e Assertion",
          "source": "src/Test-Chell.html#right",
          "type": "function"
        },
        "index": {
          "description": "Assert that some value is Right",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "right",
          "normalized": "Either a b-\u003eAssertion",
          "package": "chell",
          "signature": "Either a b-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a test, wrapped in error handlers. This will return \u003ccode\u003e\u003ca\u003eTestAborted\u003c/a\u003e\u003c/code\u003e if\n the test throws an exception or times out.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "runTest",
          "package": "chell",
          "signature": "Test -\u003e TestOptions -\u003e IO TestResult",
          "source": "src/Test-Chell-Types.html#runTest",
          "type": "function"
        },
        "index": {
          "description": "Run test wrapped in error handlers This will return TestAborted if the test throws an exception or times out",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "runTest",
          "normalized": "Test-\u003eTestOptions-\u003eIO TestResult",
          "package": "chell",
          "partial": "Test",
          "signature": "Test-\u003eTestOptions-\u003eIO TestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:runTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that two containers have the same items, in any order.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "sameItems",
          "package": "chell",
          "signature": "container item -\u003e container item -\u003e Assertion",
          "source": "src/Test-Chell.html#sameItems",
          "type": "function"
        },
        "index": {
          "description": "Assert that two containers have the same items in any order",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "sameItems",
          "normalized": "a b-\u003ea b-\u003eAssertion",
          "package": "chell",
          "partial": "Items",
          "signature": "container item-\u003econtainer item-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:sameItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally skip tests. Use this to avoid commenting out tests\n which are currently broken, or do not work on the current platform.\n\u003c/p\u003e\u003cpre\u003e\ntests :: Suite\ntests = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"tests\"\n    test_Foo\n    (\u003ccode\u003e\u003ca\u003eskipIf\u003c/a\u003e\u003c/code\u003e builtOnUnix test_WindowsSpecific)\n    test_Bar\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "skipIf",
          "package": "chell",
          "signature": "Bool -\u003e a -\u003e a",
          "source": "src/Test-Chell-Types.html#skipIf",
          "type": "function"
        },
        "index": {
          "description": "Conditionally skip tests Use this to avoid commenting out tests which are currently broken or do not work on the current platform tests Suite tests suite tests test Foo skipIf builtOnUnix test WindowsSpecific test Bar",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "skipIf",
          "normalized": "Bool-\u003ea-\u003ea",
          "package": "chell",
          "partial": "If",
          "signature": "Bool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:skipIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally skip tests, depending on the result of a runtime check. The\n predicate is checked before each test is started.\n\u003c/p\u003e\u003cpre\u003e\ntests :: Suite\ntests = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"tests\"\n    test_Foo\n    (\u003ccode\u003e\u003ca\u003eskipWhen\u003c/a\u003e\u003c/code\u003e noNetwork test_PingGoogle)\n    test_Bar\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "skipWhen",
          "package": "chell",
          "signature": "IO Bool -\u003e a -\u003e a",
          "source": "src/Test-Chell-Types.html#skipWhen",
          "type": "function"
        },
        "index": {
          "description": "Conditionally skip tests depending on the result of runtime check The predicate is checked before each test is started tests Suite tests suite tests test Foo skipWhen noNetwork test PingGoogle test Bar",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "skipWhen",
          "normalized": "IO Bool-\u003ea-\u003ea",
          "package": "chell",
          "partial": "When",
          "signature": "IO Bool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:skipWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a new \u003ccode\u003e\u003ca\u003eSuite\u003c/a\u003e\u003c/code\u003e, with the given name and children.\n\u003c/p\u003e\u003cp\u003eThe type of this function allows any number of children to be added,\n without requiring them to be homogenous types.\n\u003c/p\u003e\u003cpre\u003e\ntest_Addition :: Test\ntest_Subtraction :: Test\ntest_Show :: Test\n\ntests_Math :: Suite\ntests_Math = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"math\"\n    test_Addition\n    test_Subtraction\n\ntests_Prelude :: Suite\ntests_Prelude = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"prelude\"\n    tests_Math\n    test_Show\n\u003c/pre\u003e\u003cp\u003eCompatibility note: in GHC 7.0 and earlier, a maximum of 20 parameters may\n be passed to variadic functions. Suites containing more than 20 children\n may cause a compilation error that looks like:\n\u003c/p\u003e\u003cpre\u003eContext reduction stack overflow; size = 21\nUse -fcontext-stack=N to increase stack size to N\n  $dBuildSuite :: BuildSuite (Suite -\u003e Test -\u003e Test -\u003e Suite)\n\u003c/pre\u003e\u003cp\u003eThere are three potential solutions:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e If possible, upgrade to a more recent version of GHC.\n\u003c/li\u003e\u003cli\u003e Set the GHC flag \u003ccode\u003e-fcontext-stack\u003c/code\u003e to a larger number.\n\u003c/li\u003e\u003cli\u003e Re-organize your tests such that no suite has more than 20 children.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Test.Chell",
          "name": "suite",
          "package": "chell",
          "signature": "String -\u003e a",
          "source": "src/Test-Chell-Types.html#suite",
          "type": "function"
        },
        "index": {
          "description": "Define new Suite with the given name and children The type of this function allows any number of children to be added without requiring them to be homogenous types test Addition Test test Subtraction Test test Show Test tests Math Suite tests Math suite math test Addition test Subtraction tests Prelude Suite tests Prelude suite prelude tests Math test Show Compatibility note in GHC and earlier maximum of parameters may be passed to variadic functions Suites containing more than children may cause compilation error that looks like Context reduction stack overflow size Use fcontext-stack to increase stack size to dBuildSuite BuildSuite Suite Test Test Suite There are three potential solutions If possible upgrade to more recent version of GHC Set the GHC flag fcontext-stack to larger number Re-organize your tests such that no suite has more than children",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "suite",
          "normalized": "String-\u003ea",
          "package": "chell",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:suite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a suite's name. Suite names may be any string, but are typically\n plain ASCII so users can easily type them on the command line.\n\u003c/p\u003e\u003cpre\u003e$ ghci chell-example.hs\nOk, modules loaded: Main.\n\n*Main\u003e suiteName tests_Math\n\"math\"\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "suiteName",
          "package": "chell",
          "signature": "Suite -\u003e String",
          "source": "src/Test-Chell-Types.html#suiteName",
          "type": "function"
        },
        "index": {
          "description": "Get suite name Suite names may be any string but are typically plain ASCII so users can easily type them on the command line ghci chell-example.hs Ok modules loaded Main Main suiteName tests Math math",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "suiteName",
          "normalized": "Suite-\u003eString",
          "package": "chell",
          "partial": "Name",
          "signature": "Suite-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:suiteName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the full list of tests contained within this \u003ccode\u003e\u003ca\u003eSuite\u003c/a\u003e\u003c/code\u003e. Each test is\n given its full name within the test hierarchy, where names are separated\n by periods.\n\u003c/p\u003e\u003cpre\u003e$ ghci chell-example.hs\nOk, modules loaded: Main.\n\n*Main\u003e suiteTests tests_Math\n[Test \"math.addition\",Test \"math.subtraction\"]\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "suiteTests",
          "package": "chell",
          "signature": "Suite -\u003e [Test]",
          "source": "src/Test-Chell-Types.html#suiteTests",
          "type": "function"
        },
        "index": {
          "description": "Get the full list of tests contained within this Suite Each test is given its full name within the test hierarchy where names are separated by periods ghci chell-example.hs Ok modules loaded Main Main suiteTests tests Math Test math.addition Test math.subtraction",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "suiteTests",
          "normalized": "Suite-\u003e[Test]",
          "package": "chell",
          "partial": "Tests",
          "signature": "Suite-\u003e[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:suiteTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a test, with the given name and implementation.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "test",
          "package": "chell",
          "signature": "String -\u003e (TestOptions -\u003e IO TestResult) -\u003e Test",
          "source": "src/Test-Chell-Types.html#test",
          "type": "function"
        },
        "index": {
          "description": "Define test with the given name and implementation",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "test",
          "normalized": "String-\u003e(TestOptions-\u003eIO TestResult)-\u003eTest",
          "package": "chell",
          "signature": "String-\u003e(TestOptions-\u003eIO TestResult)-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name a test was given when it was defined; see \u003ccode\u003e\u003ca\u003etest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "testName",
          "package": "chell",
          "signature": "Test -\u003e String",
          "source": "src/Test-Chell-Types.html#testName",
          "type": "function"
        },
        "index": {
          "description": "Get the name test was given when it was defined see test",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "testName",
          "normalized": "Test-\u003eString",
          "package": "chell",
          "partial": "Name",
          "signature": "Test-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:testName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the RNG seed for this test run. The seed is generated once, in\n \u003ccode\u003edefaultMain\u003c/code\u003e, and used for all tests. It is also logged to reports\n using a note.\n\u003c/p\u003e\u003cp\u003eWhen using \u003ccode\u003edefaultMain\u003c/code\u003e, users may specify a seed using the\n \u003ccode\u003e--seed\u003c/code\u003e command-line option.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etestOptionSeed\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eTestOptions\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "testOptionSeed",
          "package": "chell",
          "signature": "TestOptions -\u003e Int",
          "source": "src/Test-Chell-Types.html#testOptionSeed",
          "type": "function"
        },
        "index": {
          "description": "Get the RNG seed for this test run The seed is generated once in defaultMain and used for all tests It is also logged to reports using note When using defaultMain users may specify seed using the seed command-line option testOptionSeed is field accessor and can be used to update TestOptions value",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "testOptionSeed",
          "normalized": "TestOptions-\u003eInt",
          "package": "chell",
          "partial": "Option Seed",
          "signature": "TestOptions-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:testOptionSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optional timeout, in millseconds. Tests which run longer than\n this timeout will be aborted.\n\u003c/p\u003e\u003cp\u003eWhen using \u003ccode\u003edefaultMain\u003c/code\u003e, users may specify a timeout using the\n \u003ccode\u003e--timeout\u003c/code\u003e command-line option.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etestOptionTimeout\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eTestOptions\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "testOptionTimeout",
          "package": "chell",
          "signature": "TestOptions -\u003e Maybe Int",
          "source": "src/Test-Chell-Types.html#testOptionTimeout",
          "type": "function"
        },
        "index": {
          "description": "An optional timeout in millseconds Tests which run longer than this timeout will be aborted When using defaultMain users may specify timeout using the timeout command-line option testOptionTimeout is field accessor and can be used to update TestOptions value",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "testOptionTimeout",
          "normalized": "TestOptions-\u003eMaybe Int",
          "package": "chell",
          "partial": "Option Timeout",
          "signature": "TestOptions-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:testOptionTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that some computation throws an exception matching the provided\n predicate. This is mostly useful for exception types which do not have an\n instance for \u003ccode\u003eEq\u003c/code\u003e, such as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eErrorCall\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "throws",
          "package": "chell",
          "signature": "(err -\u003e Bool) -\u003e IO a -\u003e IO Assertion",
          "source": "src/Test-Chell.html#throws",
          "type": "function"
        },
        "index": {
          "description": "Assert that some computation throws an exception matching the provided predicate This is mostly useful for exception types which do not have an instance for Eq such as ErrorCall",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "throws",
          "normalized": "(a-\u003eBool)-\u003eIO b-\u003eIO Assertion",
          "package": "chell",
          "signature": "(err-\u003eBool)-\u003eIO a-\u003eIO Assertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:throws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that some computation throws an exception equal to the given\n exception. This is better than just checking that the correct type was\n thrown, because the test can also verify the exception contains the correct\n information.\n\u003c/p\u003e",
          "module": "Test.Chell",
          "name": "throwsEq",
          "package": "chell",
          "signature": "err -\u003e IO a -\u003e IO Assertion",
          "source": "src/Test-Chell.html#throwsEq",
          "type": "function"
        },
        "index": {
          "description": "Assert that some computation throws an exception equal to the given exception This is better than just checking that the correct type was thrown because the test can also verify the exception contains the correct information",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "throwsEq",
          "normalized": "a-\u003eIO b-\u003eIO Assertion",
          "package": "chell",
          "partial": "Eq",
          "signature": "err-\u003eIO a-\u003eIO Assertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:throwsEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a message from within a test. This is just a helper for debugging,\n so you don't have to import \u003ccode\u003eDebug.Trace\u003c/code\u003e. Messages will be prefixed with\n the filename and line number where \u003ccode\u003e$trace\u003c/code\u003e was called.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file location\n from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $trace :: \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e ()\n\u003c/pre\u003e",
          "module": "Test.Chell",
          "name": "trace",
          "package": "chell",
          "signature": "Q Exp",
          "source": "src/Test-Chell.html#trace",
          "type": "function"
        },
        "index": {
          "description": "Print message from within test This is just helper for debugging so you don have to import Debug.Trace Messages will be prefixed with the filename and line number where trace was called trace is Template Haskell macro to retain the source-file location from which it was used Its effective type is trace String Assertions",
          "hierarchy": "Test Chell",
          "module": "Test.Chell",
          "name": "trace",
          "package": "chell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:trace"
      }
    }
  ]
]