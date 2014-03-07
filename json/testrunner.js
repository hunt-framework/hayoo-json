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
        "word": "testrunner"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest.Runner.Backends contains the types and functions that make it possible\n   to run tests constructed with different test packages with the same driver\n   framework from Test.Runner.Driver.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Runner.Backends",
          "name": "Backends",
          "package": "testrunner",
          "source": "src/Test-Runner-Backends.html",
          "type": "module"
        },
        "index": {
          "description": "Test.Runner.Backends contains the types and functions that make it possible to run tests constructed with different test packages with the same driver framework from Test.Runner.Driver",
          "hierarchy": "Test Runner Backends",
          "module": "Test.Runner.Backends",
          "name": "Backends",
          "package": "testrunner",
          "partial": "Backends",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRunWithQuickCheck\u003c/a\u003e\u003c/code\u003e turns a QuickCheck test into something that can be run\n   with testrunner. This type-level indirection is necessary to please the\n   type checker.\n\u003c/p\u003e",
          "module": "Test.Runner.Backends",
          "name": "RunWithQuickCheck",
          "package": "testrunner",
          "source": "src/Test-Runner-Backends.html#RunWithQuickCheck",
          "type": "data"
        },
        "index": {
          "description": "RunWithQuickCheck turns QuickCheck test into something that can be run with testrunner This type-level indirection is necessary to please the type checker",
          "hierarchy": "Test Runner Backends",
          "module": "Test.Runner.Backends",
          "name": "RunWithQuickCheck",
          "package": "testrunner",
          "partial": "Run With Quick Check",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#t:RunWithQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all types that testrunner can treat as a test. The method\n   \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e should return \u003ccode\u003eNothing\u003c/code\u003e if the test succeeds, or \u003ccode\u003eJust s\u003c/code\u003e if the test\n   fails, where \u003ccode\u003es\u003c/code\u003e is a human-readable description of the failure.\n\u003c/p\u003e",
          "module": "Test.Runner.Backends",
          "name": "RunnableTest",
          "package": "testrunner",
          "source": "src/Test-Runner-Backends.html#RunnableTest",
          "type": "class"
        },
        "index": {
          "description": "The class of all types that testrunner can treat as test The method run should return Nothing if the test succeeds or Just if the test fails where is human-readable description of the failure",
          "hierarchy": "Test Runner Backends",
          "module": "Test.Runner.Backends",
          "name": "RunnableTest",
          "package": "testrunner",
          "partial": "Runnable Test",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#t:RunnableTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA TestRunnerTest is a data type that hides the actual type of the test -\n   QuickCheck, plain IO action, or any other RunnableTest. This is required to\n   be able to put tests of different types in a single list.\n\u003c/p\u003e",
          "module": "Test.Runner.Backends",
          "name": "TestRunnerTest",
          "package": "testrunner",
          "source": "src/Test-Runner-Backends.html#TestRunnerTest",
          "type": "data"
        },
        "index": {
          "description": "TestRunnerTest is data type that hides the actual type of the test QuickCheck plain IO action or any other RunnableTest This is required to be able to put tests of different types in single list",
          "hierarchy": "Test Runner Backends",
          "module": "Test.Runner.Backends",
          "name": "TestRunnerTest",
          "package": "testrunner",
          "partial": "Test Runner Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#t:TestRunnerTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Runner.Backends",
          "name": "RunWithQuickCheck",
          "package": "testrunner",
          "signature": "a -\u003e RunWithQuickCheck",
          "source": "src/Test-Runner-Backends.html#RunWithQuickCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Runner Backends",
          "module": "Test.Runner.Backends",
          "name": "RunWithQuickCheck",
          "normalized": "a-\u003eRunWithQuickCheck",
          "package": "testrunner",
          "partial": "Run With Quick Check",
          "signature": "a-\u003eRunWithQuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:RunWithQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Runner.Backends",
          "name": "TestRunnerTest",
          "package": "testrunner",
          "signature": "a -\u003e TestRunnerTest",
          "source": "src/Test-Runner-Backends.html#TestRunnerTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Runner Backends",
          "module": "Test.Runner.Backends",
          "name": "TestRunnerTest",
          "normalized": "a-\u003eTestRunnerTest",
          "package": "testrunner",
          "partial": "Test Runner Test",
          "signature": "a-\u003eTestRunnerTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:TestRunnerTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Runner.Backends",
          "name": "run",
          "package": "testrunner",
          "signature": "a -\u003e IO (Maybe String)",
          "source": "src/Test-Runner-Backends.html#run",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test Runner Backends",
          "module": "Test.Runner.Backends",
          "name": "run",
          "normalized": "a-\u003eIO(Maybe String)",
          "package": "testrunner",
          "signature": "a-\u003eIO(Maybe String)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunWithArgs\u003c/a\u003e\u003c/code\u003e runs the test with specified QuickCheck arguments. For\n   all non-QuickCheck tests, this defaults to just \u003ccode\u003erun\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Runner.Backends",
          "name": "runWithArgs",
          "package": "testrunner",
          "signature": "Args -\u003e a -\u003e IO (Maybe String)",
          "source": "src/Test-Runner-Backends.html#runWithArgs",
          "type": "method"
        },
        "index": {
          "description": "runWithArgs runs the test with specified QuickCheck arguments For all non-QuickCheck tests this defaults to just run",
          "hierarchy": "Test Runner Backends",
          "module": "Test.Runner.Backends",
          "name": "runWithArgs",
          "normalized": "Args-\u003ea-\u003eIO(Maybe String)",
          "package": "testrunner",
          "partial": "With Args",
          "signature": "Args-\u003ea-\u003eIO(Maybe String)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:runWithArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to go from something testable by QuickCheck to a\n   \u003ccode\u003eTestRunnerTest\u003c/code\u003e in one step.\n\u003c/p\u003e",
          "module": "Test.Runner.Backends",
          "name": "runWithQuickCheck",
          "package": "testrunner",
          "signature": "a -\u003e TestRunnerTest",
          "source": "src/Test-Runner-Backends.html#runWithQuickCheck",
          "type": "function"
        },
        "index": {
          "description": "Convenience function to go from something testable by QuickCheck to TestRunnerTest in one step",
          "hierarchy": "Test Runner Backends",
          "module": "Test.Runner.Backends",
          "name": "runWithQuickCheck",
          "normalized": "a-\u003eTestRunnerTest",
          "package": "testrunner",
          "partial": "With Quick Check",
          "signature": "a-\u003eTestRunnerTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Backends.html#v:runWithQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest.Runner.Driver contains the functions that determine which tests are\n   run, with which parameters and by how many threads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Runner.Driver",
          "name": "Driver",
          "package": "testrunner",
          "source": "src/Test-Runner-Driver.html",
          "type": "module"
        },
        "index": {
          "description": "Test.Runner.Driver contains the functions that determine which tests are run with which parameters and by how many threads",
          "hierarchy": "Test Runner Driver",
          "module": "Test.Runner.Driver",
          "name": "Driver",
          "package": "testrunner",
          "partial": "Driver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of the test runner mentions how many tests passed, and the names\n   and failure messages of the tests that failed.\n\u003c/p\u003e",
          "module": "Test.Runner.Driver",
          "name": "Result",
          "package": "testrunner",
          "source": "src/Test-Runner-Driver.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of the test runner mentions how many tests passed and the names and failure messages of the tests that failed",
          "hierarchy": "Test Runner Driver",
          "module": "Test.Runner.Driver",
          "name": "Result",
          "package": "testrunner",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Runner.Driver",
          "name": "Result",
          "package": "testrunner",
          "signature": "Result",
          "source": "src/Test-Runner-Driver.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Runner Driver",
          "module": "Test.Runner.Driver",
          "name": "Result",
          "package": "testrunner",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Runner.Driver",
          "name": "failures",
          "package": "testrunner",
          "signature": "[(String, String)]",
          "source": "src/Test-Runner-Driver.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Runner Driver",
          "module": "Test.Runner.Driver",
          "name": "failures",
          "normalized": "[(String,String)]",
          "package": "testrunner",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:failures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Runner.Driver",
          "name": "numPassed",
          "package": "testrunner",
          "signature": "Int",
          "source": "src/Test-Runner-Driver.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Runner Driver",
          "module": "Test.Runner.Driver",
          "name": "numPassed",
          "package": "testrunner",
          "partial": "Passed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:numPassed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a list of named tests.\n\u003c/p\u003e",
          "module": "Test.Runner.Driver",
          "name": "runTests",
          "package": "testrunner",
          "signature": "[(String, TestRunnerTest)] -\u003e IO Result",
          "source": "src/Test-Runner-Driver.html#runTests",
          "type": "function"
        },
        "index": {
          "description": "Run list of named tests",
          "hierarchy": "Test Runner Driver",
          "module": "Test.Runner.Driver",
          "name": "runTests",
          "normalized": "[(String,TestRunnerTest)]-\u003eIO Result",
          "package": "testrunner",
          "partial": "Tests",
          "signature": "[(String,TestRunnerTest)]-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:runTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses multiple threads to run a set of unit tests.\n\u003c/p\u003e",
          "module": "Test.Runner.Driver",
          "name": "runTestsParallel",
          "package": "testrunner",
          "signature": "Int-\u003e [(String, TestRunnerTest)]-\u003e IO Result",
          "type": "function"
        },
        "index": {
          "description": "Uses multiple threads to run set of unit tests",
          "hierarchy": "Test Runner Driver",
          "module": "Test.Runner.Driver",
          "name": "runTestsParallel",
          "normalized": "Int-\u003e[(String,TestRunnerTest)]-\u003eIO Result",
          "package": "testrunner",
          "partial": "Tests Parallel",
          "signature": "Int-\u003e[(String,TestRunnerTest)]-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:runTestsParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse multiple threads to run a set of unit tests, and run the QuickCheck\n   tests with the given QuickCheck \u003ccode\u003eArgs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Runner.Driver",
          "name": "runTestsParallelWithArgs",
          "package": "testrunner",
          "signature": "Int-\u003e Args-\u003e [(String, TestRunnerTest)]-\u003e IO Result",
          "type": "function"
        },
        "index": {
          "description": "Use multiple threads to run set of unit tests and run the QuickCheck tests with the given QuickCheck Args",
          "hierarchy": "Test Runner Driver",
          "module": "Test.Runner.Driver",
          "name": "runTestsParallelWithArgs",
          "normalized": "Int-\u003eArgs-\u003e[(String,TestRunnerTest)]-\u003eIO Result",
          "package": "testrunner",
          "partial": "Tests Parallel With Args",
          "signature": "Int-\u003eArgs-\u003e[(String,TestRunnerTest)]-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:runTestsParallelWithArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a list of named tests, using the given QuickCheck \u003ccode\u003eArgs\u003c/code\u003e for the\n   QuickCHeck tests.\n\u003c/p\u003e",
          "module": "Test.Runner.Driver",
          "name": "runTestsWithArgs",
          "package": "testrunner",
          "signature": "Args -\u003e [(String, TestRunnerTest)] -\u003e IO Result",
          "source": "src/Test-Runner-Driver.html#runTestsWithArgs",
          "type": "function"
        },
        "index": {
          "description": "Run list of named tests using the given QuickCheck Args for the QuickCHeck tests",
          "hierarchy": "Test Runner Driver",
          "module": "Test.Runner.Driver",
          "name": "runTestsWithArgs",
          "normalized": "Args-\u003e[(String,TestRunnerTest)]-\u003eIO Result",
          "package": "testrunner",
          "partial": "Tests With Args",
          "signature": "Args-\u003e[(String,TestRunnerTest)]-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Driver.html#v:runTestsWithArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest.Runner.Frontend contains the code for the prefabricated unit test\n   executable, like command-line argument parsing and handling.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Runner.Frontend",
          "name": "Frontend",
          "package": "testrunner",
          "source": "src/Test-Runner-Frontend.html",
          "type": "module"
        },
        "index": {
          "description": "Test.Runner.Frontend contains the code for the prefabricated unit test executable like command-line argument parsing and handling",
          "hierarchy": "Test Runner Frontend",
          "module": "Test.Runner.Frontend",
          "name": "Frontend",
          "package": "testrunner",
          "partial": "Frontend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Frontend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etestRunnerMain is intended to be used as the main function of a unit test\n   program. It takes as an argument the complete list of unit tests for a\n   package.\n\u003c/p\u003e",
          "module": "Test.Runner.Frontend",
          "name": "testRunnerMain",
          "package": "testrunner",
          "signature": "[(String, TestRunnerTest)] -\u003e IO ()",
          "source": "src/Test-Runner-Frontend.html#testRunnerMain",
          "type": "function"
        },
        "index": {
          "description": "testRunnerMain is intended to be used as the main function of unit test program It takes as an argument the complete list of unit tests for package",
          "hierarchy": "Test Runner Frontend",
          "module": "Test.Runner.Frontend",
          "name": "testRunnerMain",
          "normalized": "[(String,TestRunnerTest)]-\u003eIO()",
          "package": "testrunner",
          "partial": "Runner Main",
          "signature": "[(String,TestRunnerTest)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner-Frontend.html#v:testRunnerMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Runner",
          "name": "Runner",
          "package": "testrunner",
          "source": "src/Test-Runner.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Runner",
          "module": "Test.Runner",
          "name": "Runner",
          "package": "testrunner",
          "partial": "Runner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testrunner/docs/Test-Runner.html#"
      }
    }
  ]
]