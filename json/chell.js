[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eChell is a simple and intuitive library for automated testing. It natively\n supports assertion-based testing, and can use companion libraries\n such as \u003ccode\u003echell-quickcheck\u003c/code\u003e to support more complex testing strategies.\n\u003c/p\u003e\u003cp\u003eAn example test suite, which verifies the behavior of artithmetic operators.\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE TemplateHaskell #-}\n\nimport Test.Chell\n\ntests_Math :: Suite\ntests_Math = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"math\"\n    test_Addition\n    test_Subtraction\n\ntest_Addition :: Test\ntest_Addition = \u003ccode\u003e\u003ca\u003eassertions\u003c/a\u003e\u003c/code\u003e \"addition\" $ do\n    $\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eequal\u003c/a\u003e\u003c/code\u003e (2 + 1) 3)\n    $\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eequal\u003c/a\u003e\u003c/code\u003e (1 + 2) 3)\n\ntest_Subtraction :: Test\ntest_Subtraction = \u003ccode\u003e\u003ca\u003eassertions\u003c/a\u003e\u003c/code\u003e \"subtraction\" $ do\n    $\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eequal\u003c/a\u003e\u003c/code\u003e (2 - 1) 1)\n    $\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eequal\u003c/a\u003e\u003c/code\u003e (1 - 2) (-1))\n\nmain :: IO ()\nmain = \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e [tests_Math]\n\u003c/pre\u003e\u003cpre\u003e$ ghc --make chell-example.hs\n$ ./chell-example\nPASS: 2 tests run, 2 tests passed\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "module",
        "fct-source": "src/Test-Chell.html",
        "fct-type": "module",
        "title": "Chell"
      },
      "index": {
        "description": "Chell is simple and intuitive library for automated testing It natively supports assertion-based testing and can use companion libraries such as chell-quickcheck to support more complex testing strategies An example test suite which verifies the behavior of artithmetic operators LANGUAGE TemplateHaskell import Test.Chell tests Math Suite tests Math suite math test Addition test Subtraction test Addition Test test Addition assertions addition do expect equal expect equal test Subtraction Test test Subtraction assertions subtraction do expect equal expect equal main IO main defaultMain tests Math ghc make chell-example.hs chell-example PASS tests run tests passed",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "Chell",
        "normalized": "",
        "package": "chell",
        "partial": "Chell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Assertion",
      "description": {
        "fct-descr": "\u003cp\u003eA single pass/fail assertion. Failed assertions include an explanatory\n message.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "data",
        "fct-source": "src/Test-Chell.html#Assertion",
        "fct-type": "data",
        "title": "Assertion"
      },
      "index": {
        "description": "single pass fail assertion Failed assertions include an explanatory message",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "Assertion",
        "normalized": "",
        "package": "chell",
        "partial": "Assertion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Assertions",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eassertions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "data",
        "fct-source": "src/Test-Chell.html#Assertions",
        "fct-type": "data",
        "title": "Assertions"
      },
      "index": {
        "description": "See assertions",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "Assertions",
        "normalized": "",
        "package": "chell",
        "partial": "Assertions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:BuildSuite",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "class",
        "fct-source": "src/Test-Chell-Types.html#BuildSuite",
        "fct-type": "class",
        "title": "BuildSuite"
      },
      "index": {
        "description": "See suite",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "BuildSuite",
        "normalized": "",
        "package": "chell",
        "partial": "Build Suite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Failure",
      "description": {
        "fct-descr": "\u003cp\u003eContains details about a test failure.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "data",
        "fct-source": "src/Test-Chell-Types.html#Failure",
        "fct-type": "data",
        "title": "Failure"
      },
      "index": {
        "description": "Contains details about test failure",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "Failure",
        "normalized": "",
        "package": "chell",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:IsAssertion",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "class",
        "fct-source": "src/Test-Chell.html#IsAssertion",
        "fct-type": "class",
        "title": "IsAssertion"
      },
      "index": {
        "description": "See assert and expect",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "IsAssertion",
        "normalized": "",
        "package": "chell",
        "partial": "Is Assertion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:IsText",
      "description": {
        "fct-descr": "\u003cp\u003eClass for types which can be treated as text; see \u003ccode\u003e\u003ca\u003eequalLines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "class",
        "fct-source": "src/Test-Chell.html#IsText",
        "fct-type": "class",
        "title": "IsText"
      },
      "index": {
        "description": "Class for types which can be treated as text see equalLines",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "IsText",
        "normalized": "",
        "package": "chell",
        "partial": "Is Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Location",
      "description": {
        "fct-descr": "\u003cp\u003eContains details about a location in the test source file.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "data",
        "fct-source": "src/Test-Chell-Types.html#Location",
        "fct-type": "data",
        "title": "Location"
      },
      "index": {
        "description": "Contains details about location in the test source file",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "Location",
        "normalized": "",
        "package": "chell",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Suite",
      "description": {
        "fct-descr": "\u003cp\u003eA suite is a node in a hierarchy of tests, similar to a directory in the\n filesystem. Each suite has a name and a list of children, which are either\n suites or tests.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "data",
        "fct-source": "src/Test-Chell-Types.html#Suite",
        "fct-type": "data",
        "title": "Suite"
      },
      "index": {
        "description": "suite is node in hierarchy of tests similar to directory in the filesystem Each suite has name and list of children which are either suites or tests",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "Suite",
        "normalized": "",
        "package": "chell",
        "partial": "Suite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:SuiteOrTest",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "class",
        "fct-source": "src/Test-Chell-Types.html#SuiteOrTest",
        "fct-type": "class",
        "title": "SuiteOrTest"
      },
      "index": {
        "description": "See suite",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "SuiteOrTest",
        "normalized": "",
        "package": "chell",
        "partial": "Suite Or Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:Test",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e is, essentially, an IO action that returns a \u003ccode\u003e\u003ca\u003eTestResult\u003c/a\u003e\u003c/code\u003e. Tests\n are aggregated into suites (see \u003ccode\u003e\u003ca\u003eSuite\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "data",
        "fct-source": "src/Test-Chell-Types.html#Test",
        "fct-type": "data",
        "title": "Test"
      },
      "index": {
        "description": "Test is essentially an IO action that returns TestResult Tests are aggregated into suites see Suite",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "Test",
        "normalized": "",
        "package": "chell",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:TestOptions",
      "description": {
        "fct-descr": "\u003cp\u003eTest options are passed to each test, and control details about how the\n test should be run.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "data",
        "fct-source": "src/Test-Chell-Types.html#TestOptions",
        "fct-type": "data",
        "title": "TestOptions"
      },
      "index": {
        "description": "Test options are passed to each test and control details about how the test should be run",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "TestOptions",
        "normalized": "",
        "package": "chell",
        "partial": "Test Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#t:TestResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of running a test.\n\u003c/p\u003e\u003cp\u003eTo support future extensions to the testing API, any users of this module\n who pattern-match against the \u003ccode\u003e\u003ca\u003eTestResult\u003c/a\u003e\u003c/code\u003e constructors should include a\n default case. If no default case is provided, a warning will be issued.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "data",
        "fct-source": "src/Test-Chell-Types.html#TestResult",
        "fct-type": "data",
        "title": "TestResult"
      },
      "index": {
        "description": "The result of running test To support future extensions to the testing API any users of this module who pattern-match against the TestResult constructors should include default case If no default case is provided warning will be issued",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "TestResult",
        "normalized": "",
        "package": "chell",
        "partial": "Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:TestAborted",
      "description": {
        "fct-descr": "\u003cp\u003eThe test aborted with an error message, and generated the given\n notes.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "TestAborted [(String, String)] String",
        "fct-source": "src/Test-Chell-Types.html#TestResult",
        "fct-type": "function",
        "title": "TestAborted"
      },
      "index": {
        "description": "The test aborted with an error message and generated the given notes",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "TestAborted",
        "normalized": "TestAborted[(String,String)]String",
        "package": "chell",
        "partial": "Test Aborted",
        "signature": "TestAborted[(String,String)]String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:TestFailed",
      "description": {
        "fct-descr": "\u003cp\u003eThe test failed, generating the given notes and failures.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "TestFailed [(String, String)] [Failure]",
        "fct-source": "src/Test-Chell-Types.html#TestResult",
        "fct-type": "function",
        "title": "TestFailed"
      },
      "index": {
        "description": "The test failed generating the given notes and failures",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "TestFailed",
        "normalized": "TestFailed[(String,String)][Failure]",
        "package": "chell",
        "partial": "Test Failed",
        "signature": "TestFailed[(String,String)][Failure]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:TestPassed",
      "description": {
        "fct-descr": "\u003cp\u003eThe test passed, and generated the given notes.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "TestPassed [(String, String)]",
        "fct-source": "src/Test-Chell-Types.html#TestResult",
        "fct-type": "function",
        "title": "TestPassed"
      },
      "index": {
        "description": "The test passed and generated the given notes",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "TestPassed",
        "normalized": "TestPassed[(String,String)]",
        "package": "chell",
        "partial": "Test Passed",
        "signature": "TestPassed[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:TestSkipped",
      "description": {
        "fct-descr": "\u003cp\u003eThe test did not run, because it was skipped with \u003ccode\u003e\u003ca\u003eskipIf\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eskipWhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "TestSkipped",
        "fct-source": "src/Test-Chell-Types.html#TestResult",
        "fct-type": "function",
        "title": "TestSkipped"
      },
      "index": {
        "description": "The test did not run because it was skipped with skipIf or skipWhen",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "TestSkipped",
        "normalized": "",
        "package": "chell",
        "partial": "Test Skipped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:afterTest",
      "description": {
        "fct-descr": "\u003cp\u003eRegister an IO action to be run after the test completes. This action\n will run even if the test failed or aborted.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "IO () -\u003e Assertions ()",
        "fct-source": "src/Test-Chell.html#afterTest",
        "fct-type": "function",
        "title": "afterTest"
      },
      "index": {
        "description": "Register an IO action to be run after the test completes This action will run even if the test failed or aborted",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "afterTest",
        "normalized": "IO()-\u003eAssertions()",
        "package": "chell",
        "partial": "Test",
        "signature": "IO()-\u003eAssertions()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:assert",
      "description": {
        "fct-descr": "\u003cp\u003eCheck an assertion. If the assertion fails, the test will immediately\n fail.\n\u003c/p\u003e\u003cp\u003eThe assertion to check can be a boolean value, an \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e, or an IO\n action returning one of the above.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file location\n from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $assert :: \u003ccode\u003e\u003ca\u003eIsAssertion\u003c/a\u003e\u003c/code\u003e assertion =\u003e assertion -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e ()\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-Chell.html#assert",
        "fct-type": "function",
        "title": "assert"
      },
      "index": {
        "description": "Check an assertion If the assertion fails the test will immediately fail The assertion to check can be boolean value an Assertion or an IO action returning one of the above assert is Template Haskell macro to retain the source-file location from which it was used Its effective type is assert IsAssertion assertion assertion Assertions",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "assert",
        "normalized": "",
        "package": "chell",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:assertionFailed",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "String -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#assertionFailed",
        "fct-type": "function",
        "title": "assertionFailed"
      },
      "index": {
        "description": "See Assertion",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "assertionFailed",
        "normalized": "String-\u003eAssertion",
        "package": "chell",
        "partial": "Failed",
        "signature": "String-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:assertionPassed",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Assertion",
        "fct-source": "src/Test-Chell.html#assertionPassed",
        "fct-type": "function",
        "title": "assertionPassed"
      },
      "index": {
        "description": "See Assertion",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "assertionPassed",
        "normalized": "",
        "package": "chell",
        "partial": "Passed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:assertions",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a sequence of pass/fail assertions into a runnable test.\n\u003c/p\u003e\u003cpre\u003e\n test_Equality :: Test\n test_Equality = assertions \"equality\" $ do\n     $assert (1 == 1)\n     $assert (equal 1 1)\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "String -\u003e Assertions a -\u003e Test",
        "fct-source": "src/Test-Chell.html#assertions",
        "fct-type": "function",
        "title": "assertions"
      },
      "index": {
        "description": "Convert sequence of pass fail assertions into runnable test test Equality Test test Equality assertions equality do assert assert equal",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "assertions",
        "normalized": "String-\u003eAssertions a-\u003eTest",
        "package": "chell",
        "partial": "",
        "signature": "String-\u003eAssertions a-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:defaultMain",
      "description": {
        "fct-descr": "\u003cp\u003eA simple default main function, which runs a list of tests and logs\n statistics to stdout.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "[Suite] -\u003e IO ()",
        "fct-source": "src/Test-Chell-Main.html#defaultMain",
        "fct-type": "function",
        "title": "defaultMain"
      },
      "index": {
        "description": "simple default main function which runs list of tests and logs statistics to stdout",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "defaultMain",
        "normalized": "[Suite]-\u003eIO()",
        "package": "chell",
        "partial": "Main",
        "signature": "[Suite]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:defaultTestOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDefault test options.\n\u003c/p\u003e\u003cpre\u003e$ ghci\nPrelude\u003e import Test.Chell\n\nTest.Chell\u003e testOptionSeed defaultTestOptions\n0\n\nTest.Chell\u003e testOptionTimeout defaultTestOptions\nNothing\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "TestOptions",
        "fct-source": "src/Test-Chell-Types.html#defaultTestOptions",
        "fct-type": "function",
        "title": "defaultTestOptions"
      },
      "index": {
        "description": "Default test options ghci Prelude import Test.Chell Test.Chell testOptionSeed defaultTestOptions Test.Chell testOptionTimeout defaultTestOptions Nothing",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "defaultTestOptions",
        "normalized": "",
        "package": "chell",
        "partial": "Test Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:die",
      "description": {
        "fct-descr": "\u003cp\u003eCause a test to immediately fail, with a message.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edie\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file location from\n which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $die :: \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e a\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-Chell.html#die",
        "fct-type": "function",
        "title": "die"
      },
      "index": {
        "description": "Cause test to immediately fail with message die is Template Haskell macro to retain the source-file location from which it was used Its effective type is die String Assertions",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "die",
        "normalized": "",
        "package": "chell",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equal",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that two values are equal.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#equal",
        "fct-type": "function",
        "title": "equal"
      },
      "index": {
        "description": "Assert that two values are equal",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "equal",
        "normalized": "a-\u003ea-\u003eAssertion",
        "package": "chell",
        "partial": "",
        "signature": "a-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equalItems",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that two containers have the same items, in the same order.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "container item -\u003e container item -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#equalItems",
        "fct-type": "function",
        "title": "equalItems"
      },
      "index": {
        "description": "Assert that two containers have the same items in the same order",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "equalItems",
        "normalized": "a b-\u003ea b-\u003eAssertion",
        "package": "chell",
        "partial": "Items",
        "signature": "container item-\u003econtainer item-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equalLines",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that two pieces of text are equal. This uses a diff algorithm\n to check line-by-line, so the error message will be easier to read on\n large inputs.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#equalLines",
        "fct-type": "function",
        "title": "equalLines"
      },
      "index": {
        "description": "Assert that two pieces of text are equal This uses diff algorithm to check line-by-line so the error message will be easier to read on large inputs",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "equalLines",
        "normalized": "a-\u003ea-\u003eAssertion",
        "package": "chell",
        "partial": "Lines",
        "signature": "a-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equalLinesWith",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eequalLines\u003c/a\u003e\u003c/code\u003e which allows a user-specified line-splitting\n predicate.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "(a -\u003e [String]) -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#equalLinesWith",
        "fct-type": "function",
        "title": "equalLinesWith"
      },
      "index": {
        "description": "Variant of equalLines which allows user-specified line-splitting predicate",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "equalLinesWith",
        "normalized": "(a-\u003e[String])-\u003ea-\u003ea-\u003eAssertion",
        "package": "chell",
        "partial": "Lines With",
        "signature": "(a-\u003e[String])-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:equalWithin",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that two values are within some delta of each other.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "a-\u003e a-\u003e a-\u003e Assertion",
        "fct-type": "function",
        "title": "equalWithin"
      },
      "index": {
        "description": "Assert that two values are within some delta of each other",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "equalWithin",
        "normalized": "a-\u003ea-\u003ea-\u003eAssertion",
        "package": "chell",
        "partial": "Within",
        "signature": "a-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:expect",
      "description": {
        "fct-descr": "\u003cp\u003eCheck an assertion. If the assertion fails, the test will continue to\n run until it finishes, a call to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e fails, or the test runs \u003ccode\u003e\u003ca\u003edie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe assertion to check can be a boolean value, an \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e, or an IO\n action returning one of the above.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file location\n from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $expect :: \u003ccode\u003e\u003ca\u003eIsAssertion\u003c/a\u003e\u003c/code\u003e assertion =\u003e assertion -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e ()\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-Chell.html#expect",
        "fct-type": "function",
        "title": "expect"
      },
      "index": {
        "description": "Check an assertion If the assertion fails the test will continue to run until it finishes call to assert fails or the test runs die The assertion to check can be boolean value an Assertion or an IO action returning one of the above expect is Template Haskell macro to retain the source-file location from which it was used Its effective type is expect IsAssertion assertion assertion Assertions",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "expect",
        "normalized": "",
        "package": "chell",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:failure",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e; use the field accessors to populate this value.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Failure",
        "fct-source": "src/Test-Chell-Types.html#failure",
        "fct-type": "function",
        "title": "failure"
      },
      "index": {
        "description": "An empty Failure use the field accessors to populate this value",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "failure",
        "normalized": "",
        "package": "chell",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:failureLocation",
      "description": {
        "fct-descr": "\u003cp\u003eIf given, the location of the failing assertion, expectation,\n etc.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efailureLocation\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Failure -\u003e Maybe Location",
        "fct-source": "src/Test-Chell-Types.html#failureLocation",
        "fct-type": "function",
        "title": "failureLocation"
      },
      "index": {
        "description": "If given the location of the failing assertion expectation etc failureLocation is field accessor and can be used to update Failure value",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "failureLocation",
        "normalized": "Failure-\u003eMaybe Location",
        "package": "chell",
        "partial": "Location",
        "signature": "Failure-\u003eMaybe Location"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:failureMessage",
      "description": {
        "fct-descr": "\u003cp\u003eIf given, a message which explains why the test failed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efailureMessage\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Failure -\u003e String",
        "fct-source": "src/Test-Chell-Types.html#failureMessage",
        "fct-type": "function",
        "title": "failureMessage"
      },
      "index": {
        "description": "If given message which explains why the test failed failureMessage is field accessor and can be used to update Failure value",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "failureMessage",
        "normalized": "Failure-\u003eString",
        "package": "chell",
        "partial": "Message",
        "signature": "Failure-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:greater",
      "description": {
        "fct-descr": "\u003cp\u003eAssert a value is greater than another.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#greater",
        "fct-type": "function",
        "title": "greater"
      },
      "index": {
        "description": "Assert value is greater than another",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "greater",
        "normalized": "a-\u003ea-\u003eAssertion",
        "package": "chell",
        "partial": "",
        "signature": "a-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:greaterEqual",
      "description": {
        "fct-descr": "\u003cp\u003eAssert a value is greater than or equal to another.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#greaterEqual",
        "fct-type": "function",
        "title": "greaterEqual"
      },
      "index": {
        "description": "Assert value is greater than or equal to another",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "greaterEqual",
        "normalized": "a-\u003ea-\u003eAssertion",
        "package": "chell",
        "partial": "Equal",
        "signature": "a-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:just",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that some value is \u003ccode\u003eJust\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Maybe a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#just",
        "fct-type": "function",
        "title": "just"
      },
      "index": {
        "description": "Assert that some value is Just",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "just",
        "normalized": "Maybe a-\u003eAssertion",
        "package": "chell",
        "partial": "",
        "signature": "Maybe a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that some value is \u003ccode\u003eLeft\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Either a b -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "Assert that some value is Left",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "left",
        "normalized": "Either a b-\u003eAssertion",
        "package": "chell",
        "partial": "",
        "signature": "Either a b-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:lesser",
      "description": {
        "fct-descr": "\u003cp\u003eAssert a value is less than another.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#lesser",
        "fct-type": "function",
        "title": "lesser"
      },
      "index": {
        "description": "Assert value is less than another",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "lesser",
        "normalized": "a-\u003ea-\u003eAssertion",
        "package": "chell",
        "partial": "",
        "signature": "a-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:lesserEqual",
      "description": {
        "fct-descr": "\u003cp\u003eAssert a value is less than or equal to another.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#lesserEqual",
        "fct-type": "function",
        "title": "lesserEqual"
      },
      "index": {
        "description": "Assert value is less than or equal to another",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "lesserEqual",
        "normalized": "a-\u003ea-\u003eAssertion",
        "package": "chell",
        "partial": "Equal",
        "signature": "a-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:location",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e; use the field accessors to populate this value.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Location",
        "fct-source": "src/Test-Chell-Types.html#location",
        "fct-type": "function",
        "title": "location"
      },
      "index": {
        "description": "An empty Location use the field accessors to populate this value",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "location",
        "normalized": "",
        "package": "chell",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:locationFile",
      "description": {
        "fct-descr": "\u003cp\u003eA path to a source file, or empty if not provided.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003elocationFile\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Location -\u003e String",
        "fct-source": "src/Test-Chell-Types.html#locationFile",
        "fct-type": "function",
        "title": "locationFile"
      },
      "index": {
        "description": "path to source file or empty if not provided locationFile is field accessor and can be used to update Location value",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "locationFile",
        "normalized": "Location-\u003eString",
        "package": "chell",
        "partial": "File",
        "signature": "Location-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:locationLine",
      "description": {
        "fct-descr": "\u003cp\u003eA line number, or Nothing if not provided.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003elocationLine\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Location -\u003e Maybe Integer",
        "fct-source": "src/Test-Chell-Types.html#locationLine",
        "fct-type": "function",
        "title": "locationLine"
      },
      "index": {
        "description": "line number or Nothing if not provided locationLine is field accessor and can be used to update Location value",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "locationLine",
        "normalized": "Location-\u003eMaybe Integer",
        "package": "chell",
        "partial": "Line",
        "signature": "Location-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:locationModule",
      "description": {
        "fct-descr": "\u003cp\u003eA Haskell module name, or empty if not provided.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003elocationModule\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Location -\u003e String",
        "fct-source": "src/Test-Chell-Types.html#locationModule",
        "fct-type": "function",
        "title": "locationModule"
      },
      "index": {
        "description": "Haskell module name or empty if not provided locationModule is field accessor and can be used to update Location value",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "locationModule",
        "normalized": "Location-\u003eString",
        "package": "chell",
        "partial": "Module",
        "signature": "Location-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:notEqual",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that two values are not equal.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#notEqual",
        "fct-type": "function",
        "title": "notEqual"
      },
      "index": {
        "description": "Assert that two values are not equal",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "notEqual",
        "normalized": "a-\u003ea-\u003eAssertion",
        "package": "chell",
        "partial": "Equal",
        "signature": "a-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:note",
      "description": {
        "fct-descr": "\u003cp\u003eAttach a note to a test run. Notes will be printed to stdout and\n included in reports, even if the test fails or aborts. Notes are useful for\n debugging failing tests.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "String -\u003e String -\u003e Assertions ()",
        "fct-source": "src/Test-Chell.html#note",
        "fct-type": "function",
        "title": "note"
      },
      "index": {
        "description": "Attach note to test run Notes will be printed to stdout and included in reports even if the test fails or aborts Notes are useful for debugging failing tests",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "note",
        "normalized": "String-\u003eString-\u003eAssertions()",
        "package": "chell",
        "partial": "",
        "signature": "String-\u003eString-\u003eAssertions()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:nothing",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that some value is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Maybe a -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#nothing",
        "fct-type": "function",
        "title": "nothing"
      },
      "index": {
        "description": "Assert that some value is Nothing",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "nothing",
        "normalized": "Maybe a-\u003eAssertion",
        "package": "chell",
        "partial": "",
        "signature": "Maybe a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:requireLeft",
      "description": {
        "fct-descr": "\u003cp\u003eRequire an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value to be \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e, and return its contents. If\n the value is \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e, fail the test.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erequireLeft\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file\n location from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $requireLeft :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e b =\u003e \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e a\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-Chell.html#requireLeft",
        "fct-type": "function",
        "title": "requireLeft"
      },
      "index": {
        "description": "Require an Either value to be Left and return its contents If the value is Right fail the test requireLeft is Template Haskell macro to retain the source-file location from which it was used Its effective type is requireLeft Show Either Assertions",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "requireLeft",
        "normalized": "",
        "package": "chell",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:requireRight",
      "description": {
        "fct-descr": "\u003cp\u003eRequire an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value to be \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e, and return its contents. If\n the value is \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e, fail the test.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erequireRight\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file\n location from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $requireRight :: \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e b\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-Chell.html#requireRight",
        "fct-type": "function",
        "title": "requireRight"
      },
      "index": {
        "description": "Require an Either value to be Right and return its contents If the value is Left fail the test requireRight is Template Haskell macro to retain the source-file location from which it was used Its effective type is requireRight Show Either Assertions",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "requireRight",
        "normalized": "",
        "package": "chell",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that some value is \u003ccode\u003eRight\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Either a b -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "Assert that some value is Right",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "right",
        "normalized": "Either a b-\u003eAssertion",
        "package": "chell",
        "partial": "",
        "signature": "Either a b-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:runTest",
      "description": {
        "fct-descr": "\u003cp\u003eRun a test, wrapped in error handlers. This will return \u003ccode\u003e\u003ca\u003eTestAborted\u003c/a\u003e\u003c/code\u003e if\n the test throws an exception or times out.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Test -\u003e TestOptions -\u003e IO TestResult",
        "fct-source": "src/Test-Chell-Types.html#runTest",
        "fct-type": "function",
        "title": "runTest"
      },
      "index": {
        "description": "Run test wrapped in error handlers This will return TestAborted if the test throws an exception or times out",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "runTest",
        "normalized": "Test-\u003eTestOptions-\u003eIO TestResult",
        "package": "chell",
        "partial": "Test",
        "signature": "Test-\u003eTestOptions-\u003eIO TestResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:sameItems",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that two containers have the same items, in any order.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "container item -\u003e container item -\u003e Assertion",
        "fct-source": "src/Test-Chell.html#sameItems",
        "fct-type": "function",
        "title": "sameItems"
      },
      "index": {
        "description": "Assert that two containers have the same items in any order",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "sameItems",
        "normalized": "a b-\u003ea b-\u003eAssertion",
        "package": "chell",
        "partial": "Items",
        "signature": "container item-\u003econtainer item-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:skipIf",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally skip tests. Use this to avoid commenting out tests\n which are currently broken, or do not work on the current platform.\n\u003c/p\u003e\u003cpre\u003e\ntests :: Suite\ntests = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"tests\"\n    test_Foo\n    (\u003ccode\u003e\u003ca\u003eskipIf\u003c/a\u003e\u003c/code\u003e builtOnUnix test_WindowsSpecific)\n    test_Bar\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Bool -\u003e a -\u003e a",
        "fct-source": "src/Test-Chell-Types.html#skipIf",
        "fct-type": "function",
        "title": "skipIf"
      },
      "index": {
        "description": "Conditionally skip tests Use this to avoid commenting out tests which are currently broken or do not work on the current platform tests Suite tests suite tests test Foo skipIf builtOnUnix test WindowsSpecific test Bar",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "skipIf",
        "normalized": "Bool-\u003ea-\u003ea",
        "package": "chell",
        "partial": "If",
        "signature": "Bool-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:skipWhen",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally skip tests, depending on the result of a runtime check. The\n predicate is checked before each test is started.\n\u003c/p\u003e\u003cpre\u003e\ntests :: Suite\ntests = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"tests\"\n    test_Foo\n    (\u003ccode\u003e\u003ca\u003eskipWhen\u003c/a\u003e\u003c/code\u003e noNetwork test_PingGoogle)\n    test_Bar\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "IO Bool -\u003e a -\u003e a",
        "fct-source": "src/Test-Chell-Types.html#skipWhen",
        "fct-type": "function",
        "title": "skipWhen"
      },
      "index": {
        "description": "Conditionally skip tests depending on the result of runtime check The predicate is checked before each test is started tests Suite tests suite tests test Foo skipWhen noNetwork test PingGoogle test Bar",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "skipWhen",
        "normalized": "IO Bool-\u003ea-\u003ea",
        "package": "chell",
        "partial": "When",
        "signature": "IO Bool-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:suite",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a new \u003ccode\u003e\u003ca\u003eSuite\u003c/a\u003e\u003c/code\u003e, with the given name and children.\n\u003c/p\u003e\u003cp\u003eThe type of this function allows any number of children to be added,\n without requiring them to be homogenous types.\n\u003c/p\u003e\u003cpre\u003e\ntest_Addition :: Test\ntest_Subtraction :: Test\ntest_Show :: Test\n\ntests_Math :: Suite\ntests_Math = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"math\"\n    test_Addition\n    test_Subtraction\n\ntests_Prelude :: Suite\ntests_Prelude = \u003ccode\u003e\u003ca\u003esuite\u003c/a\u003e\u003c/code\u003e \"prelude\"\n    tests_Math\n    test_Show\n\u003c/pre\u003e\u003cp\u003eCompatibility note: in GHC 7.0 and earlier, a maximum of 20 parameters may\n be passed to variadic functions. Suites containing more than 20 children\n may cause a compilation error that looks like:\n\u003c/p\u003e\u003cpre\u003eContext reduction stack overflow; size = 21\nUse -fcontext-stack=N to increase stack size to N\n  $dBuildSuite :: BuildSuite (Suite -\u003e Test -\u003e Test -\u003e Suite)\n\u003c/pre\u003e\u003cp\u003eThere are three potential solutions:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e If possible, upgrade to a more recent version of GHC.\n\u003c/li\u003e\u003cli\u003e Set the GHC flag \u003ccode\u003e-fcontext-stack\u003c/code\u003e to a larger number.\n\u003c/li\u003e\u003cli\u003e Re-organize your tests such that no suite has more than 20 children.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Test-Chell-Types.html#suite",
        "fct-type": "function",
        "title": "suite"
      },
      "index": {
        "description": "Define new Suite with the given name and children The type of this function allows any number of children to be added without requiring them to be homogenous types test Addition Test test Subtraction Test test Show Test tests Math Suite tests Math suite math test Addition test Subtraction tests Prelude Suite tests Prelude suite prelude tests Math test Show Compatibility note in GHC and earlier maximum of parameters may be passed to variadic functions Suites containing more than children may cause compilation error that looks like Context reduction stack overflow size Use fcontext-stack to increase stack size to dBuildSuite BuildSuite Suite Test Test Suite There are three potential solutions If possible upgrade to more recent version of GHC Set the GHC flag fcontext-stack to larger number Re-organize your tests such that no suite has more than children",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "suite",
        "normalized": "String-\u003ea",
        "package": "chell",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:suiteName",
      "description": {
        "fct-descr": "\u003cp\u003eGet a suite's name. Suite names may be any string, but are typically\n plain ASCII so users can easily type them on the command line.\n\u003c/p\u003e\u003cpre\u003e$ ghci chell-example.hs\nOk, modules loaded: Main.\n\n*Main\u003e suiteName tests_Math\n\"math\"\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Suite -\u003e String",
        "fct-source": "src/Test-Chell-Types.html#suiteName",
        "fct-type": "function",
        "title": "suiteName"
      },
      "index": {
        "description": "Get suite name Suite names may be any string but are typically plain ASCII so users can easily type them on the command line ghci chell-example.hs Ok modules loaded Main Main suiteName tests Math math",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "suiteName",
        "normalized": "Suite-\u003eString",
        "package": "chell",
        "partial": "Name",
        "signature": "Suite-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:suiteTests",
      "description": {
        "fct-descr": "\u003cp\u003eGet the full list of tests contained within this \u003ccode\u003e\u003ca\u003eSuite\u003c/a\u003e\u003c/code\u003e. Each test is\n given its full name within the test hierarchy, where names are separated\n by periods.\n\u003c/p\u003e\u003cpre\u003e$ ghci chell-example.hs\nOk, modules loaded: Main.\n\n*Main\u003e suiteTests tests_Math\n[Test \"math.addition\",Test \"math.subtraction\"]\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Suite -\u003e [Test]",
        "fct-source": "src/Test-Chell-Types.html#suiteTests",
        "fct-type": "function",
        "title": "suiteTests"
      },
      "index": {
        "description": "Get the full list of tests contained within this Suite Each test is given its full name within the test hierarchy where names are separated by periods ghci chell-example.hs Ok modules loaded Main Main suiteTests tests Math Test math.addition Test math.subtraction",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "suiteTests",
        "normalized": "Suite-\u003e[Test]",
        "package": "chell",
        "partial": "Tests",
        "signature": "Suite-\u003e[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:test",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a test, with the given name and implementation.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "String -\u003e (TestOptions -\u003e IO TestResult) -\u003e Test",
        "fct-source": "src/Test-Chell-Types.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "Define test with the given name and implementation",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "test",
        "normalized": "String-\u003e(TestOptions-\u003eIO TestResult)-\u003eTest",
        "package": "chell",
        "partial": "",
        "signature": "String-\u003e(TestOptions-\u003eIO TestResult)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:testName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name a test was given when it was defined; see \u003ccode\u003e\u003ca\u003etest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Test -\u003e String",
        "fct-source": "src/Test-Chell-Types.html#testName",
        "fct-type": "function",
        "title": "testName"
      },
      "index": {
        "description": "Get the name test was given when it was defined see test",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "testName",
        "normalized": "Test-\u003eString",
        "package": "chell",
        "partial": "Name",
        "signature": "Test-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:testOptionSeed",
      "description": {
        "fct-descr": "\u003cp\u003eGet the RNG seed for this test run. The seed is generated once, in\n \u003ccode\u003edefaultMain\u003c/code\u003e, and used for all tests. It is also logged to reports\n using a note.\n\u003c/p\u003e\u003cp\u003eWhen using \u003ccode\u003edefaultMain\u003c/code\u003e, users may specify a seed using the\n \u003ccode\u003e--seed\u003c/code\u003e command-line option.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etestOptionSeed\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eTestOptions\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "TestOptions -\u003e Int",
        "fct-source": "src/Test-Chell-Types.html#testOptionSeed",
        "fct-type": "function",
        "title": "testOptionSeed"
      },
      "index": {
        "description": "Get the RNG seed for this test run The seed is generated once in defaultMain and used for all tests It is also logged to reports using note When using defaultMain users may specify seed using the seed command-line option testOptionSeed is field accessor and can be used to update TestOptions value",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "testOptionSeed",
        "normalized": "TestOptions-\u003eInt",
        "package": "chell",
        "partial": "Option Seed",
        "signature": "TestOptions-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:testOptionTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eAn optional timeout, in millseconds. Tests which run longer than\n this timeout will be aborted.\n\u003c/p\u003e\u003cp\u003eWhen using \u003ccode\u003edefaultMain\u003c/code\u003e, users may specify a timeout using the\n \u003ccode\u003e--timeout\u003c/code\u003e command-line option.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etestOptionTimeout\u003c/a\u003e\u003c/code\u003e is a field accessor, and can be used to update\n a \u003ccode\u003e\u003ca\u003eTestOptions\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "TestOptions -\u003e Maybe Int",
        "fct-source": "src/Test-Chell-Types.html#testOptionTimeout",
        "fct-type": "function",
        "title": "testOptionTimeout"
      },
      "index": {
        "description": "An optional timeout in millseconds Tests which run longer than this timeout will be aborted When using defaultMain users may specify timeout using the timeout command-line option testOptionTimeout is field accessor and can be used to update TestOptions value",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "testOptionTimeout",
        "normalized": "TestOptions-\u003eMaybe Int",
        "package": "chell",
        "partial": "Option Timeout",
        "signature": "TestOptions-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:throws",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that some computation throws an exception matching the provided\n predicate. This is mostly useful for exception types which do not have an\n instance for \u003ccode\u003eEq\u003c/code\u003e, such as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eErrorCall\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "(err -\u003e Bool) -\u003e IO a -\u003e IO Assertion",
        "fct-source": "src/Test-Chell.html#throws",
        "fct-type": "function",
        "title": "throws"
      },
      "index": {
        "description": "Assert that some computation throws an exception matching the provided predicate This is mostly useful for exception types which do not have an instance for Eq such as ErrorCall",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "throws",
        "normalized": "(a-\u003eBool)-\u003eIO b-\u003eIO Assertion",
        "package": "chell",
        "partial": "",
        "signature": "(err-\u003eBool)-\u003eIO a-\u003eIO Assertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:throwsEq",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that some computation throws an exception equal to the given\n exception. This is better than just checking that the correct type was\n thrown, because the test can also verify the exception contains the correct\n information.\n\u003c/p\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "err -\u003e IO a -\u003e IO Assertion",
        "fct-source": "src/Test-Chell.html#throwsEq",
        "fct-type": "function",
        "title": "throwsEq"
      },
      "index": {
        "description": "Assert that some computation throws an exception equal to the given exception This is better than just checking that the correct type was thrown because the test can also verify the exception contains the correct information",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "throwsEq",
        "normalized": "a-\u003eIO b-\u003eIO Assertion",
        "package": "chell",
        "partial": "Eq",
        "signature": "err-\u003eIO a-\u003eIO Assertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell/docs/Test-Chell.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a message from within a test. This is just a helper for debugging,\n so you don't have to import \u003ccode\u003eDebug.Trace\u003c/code\u003e. Messages will be prefixed with\n the filename and line number where \u003ccode\u003e$trace\u003c/code\u003e was called.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e is a Template Haskell macro, to retain the source-file location\n from which it was used. Its effective type is:\n\u003c/p\u003e\u003cpre\u003e\n $trace :: \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eAssertions\u003c/a\u003e\u003c/code\u003e ()\n\u003c/pre\u003e",
        "fct-module": "Test.Chell",
        "fct-package": "chell",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-Chell.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "Print message from within test This is just helper for debugging so you don have to import Debug.Trace Messages will be prefixed with the filename and line number where trace was called trace is Template Haskell macro to retain the source-file location from which it was used Its effective type is trace String Assertions",
        "hierarchy": "Test Chell",
        "module": "Test.Chell",
        "name": "trace",
        "normalized": "",
        "package": "chell",
        "partial": "",
        "signature": ""
      }
    }
  }
]