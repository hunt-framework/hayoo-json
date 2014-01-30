[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest.Runner.Backends contains the types and functions that make it possible\n   to run tests constructed with different test packages with the same driver\n   framework from Test.Runner.Driver.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Runner.Backends",
        "fct-package": "testrunner",
        "fct-signature": "module",
        "fct-source": "src/Test-Runner-Backends.html",
        "fct-type": "module",
        "title": "Backends"
      },
      "index": {
        "description": "Test.Runner.Backends contains the types and functions that make it possible to run tests constructed with different test packages with the same driver framework from Test.Runner.Driver",
        "hierarchy": "Test Runner Backends",
        "module": "Test.Runner.Backends",
        "name": "Backends",
        "normalized": "",
        "package": "testrunner",
        "partial": "Backends",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#t:RunWithQuickCheck",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRunWithQuickCheck\u003c/a\u003e\u003c/code\u003e turns a QuickCheck test into something that can be run\n   with testrunner. This type-level indirection is necessary to please the\n   type checker.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Backends",
        "fct-package": "testrunner",
        "fct-signature": "data",
        "fct-source": "src/Test-Runner-Backends.html#RunWithQuickCheck",
        "fct-type": "data",
        "title": "RunWithQuickCheck"
      },
      "index": {
        "description": "RunWithQuickCheck turns QuickCheck test into something that can be run with testrunner This type-level indirection is necessary to please the type checker",
        "hierarchy": "Test Runner Backends",
        "module": "Test.Runner.Backends",
        "name": "RunWithQuickCheck",
        "normalized": "",
        "package": "testrunner",
        "partial": "Run With Quick Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#t:RunnableTest",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of all types that testrunner can treat as a test. The method\n   \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e should return \u003ccode\u003eNothing\u003c/code\u003e if the test succeeds, or \u003ccode\u003eJust s\u003c/code\u003e if the test\n   fails, where \u003ccode\u003es\u003c/code\u003e is a human-readable description of the failure.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Backends",
        "fct-package": "testrunner",
        "fct-signature": "class",
        "fct-source": "src/Test-Runner-Backends.html#RunnableTest",
        "fct-type": "class",
        "title": "RunnableTest"
      },
      "index": {
        "description": "The class of all types that testrunner can treat as test The method run should return Nothing if the test succeeds or Just if the test fails where is human-readable description of the failure",
        "hierarchy": "Test Runner Backends",
        "module": "Test.Runner.Backends",
        "name": "RunnableTest",
        "normalized": "",
        "package": "testrunner",
        "partial": "Runnable Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#t:TestRunnerTest",
      "description": {
        "fct-descr": "\u003cp\u003eA TestRunnerTest is a data type that hides the actual type of the test -\n   QuickCheck, plain IO action, or any other RunnableTest. This is required to\n   be able to put tests of different types in a single list.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Backends",
        "fct-package": "testrunner",
        "fct-signature": "data",
        "fct-source": "src/Test-Runner-Backends.html#TestRunnerTest",
        "fct-type": "data",
        "title": "TestRunnerTest"
      },
      "index": {
        "description": "TestRunnerTest is data type that hides the actual type of the test QuickCheck plain IO action or any other RunnableTest This is required to be able to put tests of different types in single list",
        "hierarchy": "Test Runner Backends",
        "module": "Test.Runner.Backends",
        "name": "TestRunnerTest",
        "normalized": "",
        "package": "testrunner",
        "partial": "Test Runner Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:RunWithQuickCheck",
      "description": {
        "fct-module": "Test.Runner.Backends",
        "fct-package": "testrunner",
        "fct-signature": "a -\u003e RunWithQuickCheck",
        "fct-source": "src/Test-Runner-Backends.html#RunWithQuickCheck",
        "fct-type": "function",
        "title": "RunWithQuickCheck"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Runner Backends",
        "module": "Test.Runner.Backends",
        "name": "RunWithQuickCheck",
        "normalized": "a-\u003eRunWithQuickCheck",
        "package": "testrunner",
        "partial": "Run With Quick Check",
        "signature": "a-\u003eRunWithQuickCheck"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:TestRunnerTest",
      "description": {
        "fct-module": "Test.Runner.Backends",
        "fct-package": "testrunner",
        "fct-signature": "a -\u003e TestRunnerTest",
        "fct-source": "src/Test-Runner-Backends.html#TestRunnerTest",
        "fct-type": "function",
        "title": "TestRunnerTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Runner Backends",
        "module": "Test.Runner.Backends",
        "name": "TestRunnerTest",
        "normalized": "a-\u003eTestRunnerTest",
        "package": "testrunner",
        "partial": "Test Runner Test",
        "signature": "a-\u003eTestRunnerTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:run",
      "description": {
        "fct-module": "Test.Runner.Backends",
        "fct-package": "testrunner",
        "fct-signature": "a -\u003e IO (Maybe String)",
        "fct-source": "src/Test-Runner-Backends.html#run",
        "fct-type": "method",
        "title": "run"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Runner Backends",
        "module": "Test.Runner.Backends",
        "name": "run",
        "normalized": "a-\u003eIO(Maybe String)",
        "package": "testrunner",
        "partial": "",
        "signature": "a-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:runWithArgs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunWithArgs\u003c/a\u003e\u003c/code\u003e runs the test with specified QuickCheck arguments. For\n   all non-QuickCheck tests, this defaults to just \u003ccode\u003erun\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Backends",
        "fct-package": "testrunner",
        "fct-signature": "Args -\u003e a -\u003e IO (Maybe String)",
        "fct-source": "src/Test-Runner-Backends.html#runWithArgs",
        "fct-type": "method",
        "title": "runWithArgs"
      },
      "index": {
        "description": "runWithArgs runs the test with specified QuickCheck arguments For all non-QuickCheck tests this defaults to just run",
        "hierarchy": "Test Runner Backends",
        "module": "Test.Runner.Backends",
        "name": "runWithArgs",
        "normalized": "Args-\u003ea-\u003eIO(Maybe String)",
        "package": "testrunner",
        "partial": "With Args",
        "signature": "Args-\u003ea-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:runWithQuickCheck",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function to go from something testable by QuickCheck to a\n   \u003ccode\u003eTestRunnerTest\u003c/code\u003e in one step.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Backends",
        "fct-package": "testrunner",
        "fct-signature": "a -\u003e TestRunnerTest",
        "fct-source": "src/Test-Runner-Backends.html#runWithQuickCheck",
        "fct-type": "function",
        "title": "runWithQuickCheck"
      },
      "index": {
        "description": "Convenience function to go from something testable by QuickCheck to TestRunnerTest in one step",
        "hierarchy": "Test Runner Backends",
        "module": "Test.Runner.Backends",
        "name": "runWithQuickCheck",
        "normalized": "a-\u003eTestRunnerTest",
        "package": "testrunner",
        "partial": "With Quick Check",
        "signature": "a-\u003eTestRunnerTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest.Runner.Driver contains the functions that determine which tests are\n   run, with which parameters and by how many threads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Runner.Driver",
        "fct-package": "testrunner",
        "fct-signature": "module",
        "fct-source": "src/Test-Runner-Driver.html",
        "fct-type": "module",
        "title": "Driver"
      },
      "index": {
        "description": "Test.Runner.Driver contains the functions that determine which tests are run with which parameters and by how many threads",
        "hierarchy": "Test Runner Driver",
        "module": "Test.Runner.Driver",
        "name": "Driver",
        "normalized": "",
        "package": "testrunner",
        "partial": "Driver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of the test runner mentions how many tests passed, and the names\n   and failure messages of the tests that failed.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Driver",
        "fct-package": "testrunner",
        "fct-signature": "data",
        "fct-source": "src/Test-Runner-Driver.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "The result of the test runner mentions how many tests passed and the names and failure messages of the tests that failed",
        "hierarchy": "Test Runner Driver",
        "module": "Test.Runner.Driver",
        "name": "Result",
        "normalized": "",
        "package": "testrunner",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:Result",
      "description": {
        "fct-module": "Test.Runner.Driver",
        "fct-package": "testrunner",
        "fct-signature": "Result",
        "fct-source": "src/Test-Runner-Driver.html#Result",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Runner Driver",
        "module": "Test.Runner.Driver",
        "name": "Result",
        "normalized": "",
        "package": "testrunner",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:failures",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Runner.Driver",
        "fct-package": "testrunner",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/Test-Runner-Driver.html#Result",
        "fct-type": "function",
        "title": "failures"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Runner Driver",
        "module": "Test.Runner.Driver",
        "name": "failures",
        "normalized": "[(String,String)]",
        "package": "testrunner",
        "partial": "",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:numPassed",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Runner.Driver",
        "fct-package": "testrunner",
        "fct-signature": "Int",
        "fct-source": "src/Test-Runner-Driver.html#Result",
        "fct-type": "function",
        "title": "numPassed"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Runner Driver",
        "module": "Test.Runner.Driver",
        "name": "numPassed",
        "normalized": "",
        "package": "testrunner",
        "partial": "Passed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:runTests",
      "description": {
        "fct-descr": "\u003cp\u003eRun a list of named tests.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Driver",
        "fct-package": "testrunner",
        "fct-signature": "[(String, TestRunnerTest)] -\u003e IO Result",
        "fct-source": "src/Test-Runner-Driver.html#runTests",
        "fct-type": "function",
        "title": "runTests"
      },
      "index": {
        "description": "Run list of named tests",
        "hierarchy": "Test Runner Driver",
        "module": "Test.Runner.Driver",
        "name": "runTests",
        "normalized": "[(String,TestRunnerTest)]-\u003eIO Result",
        "package": "testrunner",
        "partial": "Tests",
        "signature": "[(String,TestRunnerTest)]-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:runTestsParallel",
      "description": {
        "fct-descr": "\u003cp\u003eUses multiple threads to run a set of unit tests.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Driver",
        "fct-package": "testrunner",
        "fct-signature": "Int-\u003e [(String, TestRunnerTest)]-\u003e IO Result",
        "fct-type": "function",
        "title": "runTestsParallel"
      },
      "index": {
        "description": "Uses multiple threads to run set of unit tests",
        "hierarchy": "Test Runner Driver",
        "module": "Test.Runner.Driver",
        "name": "runTestsParallel",
        "normalized": "Int-\u003e[(String,TestRunnerTest)]-\u003eIO Result",
        "package": "testrunner",
        "partial": "Tests Parallel",
        "signature": "Int-\u003e[(String,TestRunnerTest)]-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:runTestsParallelWithArgs",
      "description": {
        "fct-descr": "\u003cp\u003eUse multiple threads to run a set of unit tests, and run the QuickCheck\n   tests with the given QuickCheck \u003ccode\u003eArgs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Driver",
        "fct-package": "testrunner",
        "fct-signature": "Int-\u003e Args-\u003e [(String, TestRunnerTest)]-\u003e IO Result",
        "fct-type": "function",
        "title": "runTestsParallelWithArgs"
      },
      "index": {
        "description": "Use multiple threads to run set of unit tests and run the QuickCheck tests with the given QuickCheck Args",
        "hierarchy": "Test Runner Driver",
        "module": "Test.Runner.Driver",
        "name": "runTestsParallelWithArgs",
        "normalized": "Int-\u003eArgs-\u003e[(String,TestRunnerTest)]-\u003eIO Result",
        "package": "testrunner",
        "partial": "Tests Parallel With Args",
        "signature": "Int-\u003eArgs-\u003e[(String,TestRunnerTest)]-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:runTestsWithArgs",
      "description": {
        "fct-descr": "\u003cp\u003eRun a list of named tests, using the given QuickCheck \u003ccode\u003eArgs\u003c/code\u003e for the\n   QuickCHeck tests.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Driver",
        "fct-package": "testrunner",
        "fct-signature": "Args -\u003e [(String, TestRunnerTest)] -\u003e IO Result",
        "fct-source": "src/Test-Runner-Driver.html#runTestsWithArgs",
        "fct-type": "function",
        "title": "runTestsWithArgs"
      },
      "index": {
        "description": "Run list of named tests using the given QuickCheck Args for the QuickCHeck tests",
        "hierarchy": "Test Runner Driver",
        "module": "Test.Runner.Driver",
        "name": "runTestsWithArgs",
        "normalized": "Args-\u003e[(String,TestRunnerTest)]-\u003eIO Result",
        "package": "testrunner",
        "partial": "Tests With Args",
        "signature": "Args-\u003e[(String,TestRunnerTest)]-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Frontend.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest.Runner.Frontend contains the code for the prefabricated unit test\n   executable, like command-line argument parsing and handling.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Runner.Frontend",
        "fct-package": "testrunner",
        "fct-signature": "module",
        "fct-source": "src/Test-Runner-Frontend.html",
        "fct-type": "module",
        "title": "Frontend"
      },
      "index": {
        "description": "Test.Runner.Frontend contains the code for the prefabricated unit test executable like command-line argument parsing and handling",
        "hierarchy": "Test Runner Frontend",
        "module": "Test.Runner.Frontend",
        "name": "Frontend",
        "normalized": "",
        "package": "testrunner",
        "partial": "Frontend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Frontend.html#v:testRunnerMain",
      "description": {
        "fct-descr": "\u003cp\u003etestRunnerMain is intended to be used as the main function of a unit test\n   program. It takes as an argument the complete list of unit tests for a\n   package.\n\u003c/p\u003e",
        "fct-module": "Test.Runner.Frontend",
        "fct-package": "testrunner",
        "fct-signature": "[(String, TestRunnerTest)] -\u003e IO ()",
        "fct-source": "src/Test-Runner-Frontend.html#testRunnerMain",
        "fct-type": "function",
        "title": "testRunnerMain"
      },
      "index": {
        "description": "testRunnerMain is intended to be used as the main function of unit test program It takes as an argument the complete list of unit tests for package",
        "hierarchy": "Test Runner Frontend",
        "module": "Test.Runner.Frontend",
        "name": "testRunnerMain",
        "normalized": "[(String,TestRunnerTest)]-\u003eIO()",
        "package": "testrunner",
        "partial": "Runner Main",
        "signature": "[(String,TestRunnerTest)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner.html#",
      "description": {
        "fct-module": "Test.Runner",
        "fct-package": "testrunner",
        "fct-signature": "module",
        "fct-source": "src/Test-Runner.html",
        "fct-type": "module",
        "title": "Runner"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Runner",
        "module": "Test.Runner",
        "name": "Runner",
        "normalized": "",
        "package": "testrunner",
        "partial": "Runner",
        "signature": ""
      }
    }
  }
]