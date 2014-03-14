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
        "word": "test-framework"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Options",
          "name": "Options",
          "package": "test-framework",
          "source": "src/Test-Framework-Options.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "Options",
          "package": "test-framework",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Options",
          "name": "CompleteTestOptions",
          "package": "test-framework",
          "source": "src/Test-Framework-Options.html#CompleteTestOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "CompleteTestOptions",
          "package": "test-framework",
          "partial": "Complete Test Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#t:CompleteTestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Options",
          "name": "TestOptions",
          "package": "test-framework",
          "source": "src/Test-Framework-Options.html#TestOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "TestOptions",
          "package": "test-framework",
          "partial": "Test Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#t:TestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Options",
          "name": "TestOptions'",
          "package": "test-framework",
          "source": "src/Test-Framework-Options.html#TestOptions%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "TestOptions'",
          "package": "test-framework",
          "partial": "Test Options'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#t:TestOptions-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Options",
          "name": "TestOptions",
          "package": "test-framework",
          "signature": "TestOptions",
          "source": "src/Test-Framework-Options.html#TestOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "TestOptions",
          "package": "test-framework",
          "partial": "Test Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#v:TestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of tests to generate when using something like QuickCheck\n\u003c/p\u003e",
          "module": "Test.Framework.Options",
          "name": "topt_maximum_generated_tests",
          "package": "test-framework",
          "signature": "f Int",
          "source": "src/Test-Framework-Options.html#TestOptions%27",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of tests to generate when using something like QuickCheck",
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "topt_maximum_generated_tests",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#v:topt_maximum_generated_tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum depth of generated tests when using something like SmallCheck\n\u003c/p\u003e",
          "module": "Test.Framework.Options",
          "name": "topt_maximum_test_depth",
          "package": "test-framework",
          "signature": "f Int",
          "source": "src/Test-Framework-Options.html#TestOptions%27",
          "type": "function"
        },
        "index": {
          "description": "Maximum depth of generated tests when using something like SmallCheck",
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "topt_maximum_test_depth",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#v:topt_maximum_test_depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum size of generated tests when using something like QuickCheck\n\u003c/p\u003e",
          "module": "Test.Framework.Options",
          "name": "topt_maximum_test_size",
          "package": "test-framework",
          "signature": "f Int",
          "source": "src/Test-Framework-Options.html#TestOptions%27",
          "type": "function"
        },
        "index": {
          "description": "Maximum size of generated tests when using something like QuickCheck",
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "topt_maximum_test_size",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#v:topt_maximum_test_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of unsuitable tests to consider before giving up when using something like QuickCheck\n\u003c/p\u003e",
          "module": "Test.Framework.Options",
          "name": "topt_maximum_unsuitable_generated_tests",
          "package": "test-framework",
          "signature": "f Int",
          "source": "src/Test-Framework-Options.html#TestOptions%27",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of unsuitable tests to consider before giving up when using something like QuickCheck",
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "topt_maximum_unsuitable_generated_tests",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#v:topt_maximum_unsuitable_generated_tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeed that should be used to create random numbers for generated tests\n\u003c/p\u003e",
          "module": "Test.Framework.Options",
          "name": "topt_seed",
          "package": "test-framework",
          "signature": "f Seed",
          "source": "src/Test-Framework-Options.html#TestOptions%27",
          "type": "function"
        },
        "index": {
          "description": "Seed that should be used to create random numbers for generated tests",
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "topt_seed",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#v:topt_seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of microseconds to run tests for before considering them a failure\n\u003c/p\u003e",
          "module": "Test.Framework.Options",
          "name": "topt_timeout",
          "package": "test-framework",
          "signature": "f (Maybe Int)",
          "source": "src/Test-Framework-Options.html#TestOptions%27",
          "type": "function"
        },
        "index": {
          "description": "The number of microseconds to run tests for before considering them failure",
          "hierarchy": "Test Framework Options",
          "module": "Test.Framework.Options",
          "name": "topt_timeout",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Options.html#v:topt_timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports everything that you need to be able to create your own framework test provider.\n To create a provider you need to:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Create an instance of the \u003ccode\u003e\u003ca\u003eTestlike\u003c/a\u003e\u003c/code\u003e class\n\u003c/li\u003e\u003cli\u003e Create an instance of the \u003ccode\u003e\u003ca\u003eTestResultlike\u003c/a\u003e\u003c/code\u003e class\n\u003c/li\u003e\u003cli\u003e Expose a function that lets people construct \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e values using your new instances\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Test.Framework.Providers.API",
          "name": "API",
          "package": "test-framework",
          "source": "src/Test-Framework-Providers-API.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports everything that you need to be able to create your own framework test provider To create provider you need to Create an instance of the Testlike class Create an instance of the TestResultlike class Expose function that lets people construct Test values using your new instances",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "API",
          "package": "test-framework",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": ":~\u003e",
          "package": "test-framework",
          "source": "src/Test-Framework-Improving.html#%3A~%3E",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": ":~\u003e",
          "package": "test-framework",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "ImprovingIO",
          "package": "test-framework",
          "source": "src/Test-Framework-Improving.html#ImprovingIO",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "ImprovingIO",
          "package": "test-framework",
          "partial": "Improving IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#t:ImprovingIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "K",
          "package": "test-framework",
          "source": "src/Test-Framework-Utilities.html#K",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "K",
          "package": "test-framework",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#t:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "MutuallyExcluded",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#MutuallyExcluded",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "MutuallyExcluded",
          "package": "test-framework",
          "partial": "Mutually Excluded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#t:MutuallyExcluded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain test data type: builds up a list of tests to be run. Users should use the\n utility functions in e.g. the test-framework-hunit and test-framework-quickcheck\n packages to create instances of \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e, and then build them up into testsuites\n by using \u003ccode\u003e\u003ca\u003etestGroup\u003c/a\u003e\u003c/code\u003e and lists.\n\u003c/p\u003e\u003cp\u003eFor an example of how to use test-framework, please see\n \u003ca\u003ehttp://github.com/batterseapower/test-framework/raw/master/example/Test/Framework/Example.lhs\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.API",
          "name": "Test",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#Test",
          "type": "data"
        },
        "index": {
          "description": "Main test data type builds up list of tests to be run Users should use the utility functions in e.g the test-framework-hunit and test-framework-quickcheck packages to create instances of Test and then build them up into testsuites by using testGroup and lists For an example of how to use test-framework please see http github.com batterseapower test-framework raw master example Test Framework Example.lhs",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "Test",
          "package": "test-framework",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest names or descriptions. These are shown to the user\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.API",
          "name": "TestName",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#TestName",
          "type": "type"
        },
        "index": {
          "description": "Test names or descriptions These are shown to the user",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "TestName",
          "package": "test-framework",
          "partial": "Test Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#t:TestName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething like the result of a test: works in concert with \u003ccode\u003e\u003ca\u003eTestlike\u003c/a\u003e\u003c/code\u003e.\n The type parameters are the type that is used for progress reports and the\n type of the final output of the test respectively.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.API",
          "name": "TestResultlike",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#TestResultlike",
          "type": "class"
        },
        "index": {
          "description": "Something like the result of test works in concert with Testlike The type parameters are the type that is used for progress reports and the type of the final output of the test respectively",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "TestResultlike",
          "package": "test-framework",
          "partial": "Test Resultlike",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#t:TestResultlike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a type of test, such as \u003ca\u003eProperties\u003c/a\u003e or \u003ca\u003eTest Cases\u003c/a\u003e. Tests of\n types of the same names will be grouped together in the test run summary.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.API",
          "name": "TestTypeName",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#TestTypeName",
          "type": "type"
        },
        "index": {
          "description": "The name of type of test such as Properties or Test Cases Tests of types of the same names will be grouped together in the test run summary",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "TestTypeName",
          "package": "test-framework",
          "partial": "Test Type Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#t:TestTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething test-like in its behaviour. The type parameters are the type that\n is used for progress reports, the type of the final output of the test and the\n data type encapsulating the whole potential to do a test respectively.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.API",
          "name": "Testlike",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#Testlike",
          "type": "class"
        },
        "index": {
          "description": "Something test-like in its behaviour The type parameters are the type that is used for progress reports the type of the final output of the test and the data type encapsulating the whole potential to do test respectively",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "Testlike",
          "package": "test-framework",
          "partial": "Testlike",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#t:Testlike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience for creating tests from an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action, with cleanup\n\u003c/p\u003e",
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "BuildTestBracketed",
          "package": "test-framework",
          "signature": "BuildTestBracketed (IO (Test, IO ()))",
          "source": "src/Test-Framework-Core.html#Test",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:BuildTestBracketed\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:BuildTestBracketed\"]"
        },
        "index": {
          "description": "Convenience for creating tests from an IO action with cleanup",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "BuildTestBracketed",
          "normalized": "BuildTestBracketed(IO(Test,IO()))",
          "package": "test-framework",
          "partial": "Build Test Bracketed",
          "signature": "BuildTestBracketed(IO(Test,IO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:BuildTestBracketed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "Finished",
          "package": "test-framework",
          "signature": "Finished f",
          "source": "src/Test-Framework-Improving.html#%3A~%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "Finished",
          "package": "test-framework",
          "partial": "Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:Finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "Improving",
          "package": "test-framework",
          "signature": "Improving i (i :~\u003e f)",
          "source": "src/Test-Framework-Improving.html#%3A~%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "Improving",
          "package": "test-framework",
          "partial": "Improving",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:Improving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "K",
          "package": "test-framework",
          "signature": "K",
          "source": "src/Test-Framework-Utilities.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "K",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "ME",
          "package": "test-framework",
          "signature": "ME (MVar ()) t",
          "source": "src/Test-Framework-Core.html#MutuallyExcluded",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:ME\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:ME\"]"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "ME",
          "normalized": "ME(MVar())a",
          "package": "test-framework",
          "partial": "ME",
          "signature": "ME(MVar())t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:ME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd some options to child tests\n\u003c/p\u003e",
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "PlusTestOptions",
          "package": "test-framework",
          "signature": "PlusTestOptions TestOptions Test",
          "source": "src/Test-Framework-Core.html#Test",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:PlusTestOptions\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:PlusTestOptions\"]"
        },
        "index": {
          "description": "Add some options to child tests",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "PlusTestOptions",
          "package": "test-framework",
          "partial": "Plus Test Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:PlusTestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single test of some particular type\n\u003c/p\u003e",
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "Test",
          "package": "test-framework",
          "signature": "Test TestName t",
          "source": "src/Test-Framework-Core.html#Test",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:Test\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:Test\"]"
        },
        "index": {
          "description": "single test of some particular type",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "Test",
          "package": "test-framework",
          "partial": "Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssemble a number of tests into a cohesive group\n\u003c/p\u003e",
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "TestGroup",
          "package": "test-framework",
          "signature": "TestGroup TestName [Test]",
          "source": "src/Test-Framework-Core.html#Test",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:TestGroup\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:TestGroup\"]"
        },
        "index": {
          "description": "Assemble number of tests into cohesive group",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "TestGroup",
          "normalized": "TestGroup TestName[Test]",
          "package": "test-framework",
          "partial": "Test Group",
          "signature": "TestGroup TestName[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:TestGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "bimapImproving",
          "package": "test-framework",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e (a :~\u003e b) -\u003e c :~\u003e d",
          "source": "src/Test-Framework-Improving.html#bimapImproving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "bimapImproving",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a c)-\u003eb d",
          "package": "test-framework",
          "partial": "Improving",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003e(a b)-\u003ec d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:bimapImproving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience for creating tests from an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action\n\u003c/p\u003e",
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "buildTest",
          "package": "test-framework",
          "signature": "IO Test -\u003e Test",
          "source": "src/Test-Framework-Core.html#buildTest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:buildTest\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:buildTest\"]"
        },
        "index": {
          "description": "Convenience for creating tests from an IO action",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "buildTest",
          "normalized": "IO Test-\u003eTest",
          "package": "test-framework",
          "partial": "Test",
          "signature": "IO Test-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:buildTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience for creating tests from an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action, with a cleanup handler for when tests are finished\n\u003c/p\u003e",
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "buildTestBracketed",
          "package": "test-framework",
          "signature": "IO (Test, IO ()) -\u003e Test",
          "source": "src/Test-Framework-Core.html#buildTestBracketed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:buildTestBracketed\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:buildTestBracketed\"]"
        },
        "index": {
          "description": "Convenience for creating tests from an IO action with cleanup handler for when tests are finished",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "buildTestBracketed",
          "normalized": "IO(Test,IO())-\u003eTest",
          "package": "test-framework",
          "partial": "Test Bracketed",
          "signature": "IO(Test,IO())-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:buildTestBracketed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "consumeImproving",
          "package": "test-framework",
          "signature": "(a :~\u003e b) -\u003e [a :~\u003e b]",
          "source": "src/Test-Framework-Improving.html#consumeImproving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "consumeImproving",
          "normalized": "(a b)-\u003e[a b]",
          "package": "test-framework",
          "partial": "Improving",
          "signature": "(a b)-\u003e[a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:consumeImproving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "dropLast",
          "package": "test-framework",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Test-Framework-Utilities.html#dropLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "dropLast",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "test-framework",
          "partial": "Last",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:dropLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "improvingLast",
          "package": "test-framework",
          "signature": "(a :~\u003e b) -\u003e b",
          "source": "src/Test-Framework-Improving.html#improvingLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "improvingLast",
          "normalized": "(a b)-\u003eb",
          "package": "test-framework",
          "partial": "Last",
          "signature": "(a b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:improvingLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "liftIO",
          "package": "test-framework",
          "signature": "IO a -\u003e ImprovingIO i f a",
          "source": "src/Test-Framework-Improving.html#liftIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "liftIO",
          "normalized": "IO a-\u003eImprovingIO b c a",
          "package": "test-framework",
          "partial": "IO",
          "signature": "IO a-\u003eImprovingIO i f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "listToMaybeLast",
          "package": "test-framework",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Test-Framework-Utilities.html#listToMaybeLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "listToMaybeLast",
          "normalized": "[a]-\u003eMaybe a",
          "package": "test-framework",
          "partial": "To Maybe Last",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:listToMaybeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "mapAccumLM",
          "package": "test-framework",
          "signature": "(acc -\u003e x -\u003e m (acc, y)) -\u003e acc -\u003e [x] -\u003e m (acc, [y])",
          "source": "src/Test-Framework-Utilities.html#mapAccumLM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "mapAccumLM",
          "normalized": "(a-\u003eb-\u003ec(a,d))-\u003ea-\u003e[b]-\u003ec(a,[d])",
          "package": "test-framework",
          "partial": "Accum LM",
          "signature": "(acc-\u003ex-\u003em(acc,y))-\u003eacc-\u003e[x]-\u003em(acc,[y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:mapAccumLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "mappendBy",
          "package": "test-framework",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e b",
          "source": "src/Test-Framework-Utilities.html#mappendBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "mappendBy",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "test-framework",
          "partial": "By",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:mappendBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003etimeoutImprovingIO\u003c/a\u003e\u003c/code\u003e, but don't bother applying a timeout to the action if \u003ccode\u003eNothing\u003c/code\u003e is given\n as the number of microseconds to apply the time out for.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.API",
          "name": "maybeTimeoutImprovingIO",
          "package": "test-framework",
          "signature": "Maybe Int -\u003e ImprovingIO i f a -\u003e ImprovingIO i f (Maybe a)",
          "source": "src/Test-Framework-Improving.html#maybeTimeoutImprovingIO",
          "type": "function"
        },
        "index": {
          "description": "As timeoutImprovingIO but don bother applying timeout to the action if Nothing is given as the number of microseconds to apply the time out for",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "maybeTimeoutImprovingIO",
          "normalized": "Maybe Int-\u003eImprovingIO a b c-\u003eImprovingIO a b(Maybe c)",
          "package": "test-framework",
          "partial": "Timeout Improving IO",
          "signature": "Maybe Int-\u003eImprovingIO i f a-\u003eImprovingIO i f(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:maybeTimeoutImprovingIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "microsecondsToPicoseconds",
          "package": "test-framework",
          "signature": "a -\u003e a",
          "source": "src/Test-Framework-Utilities.html#microsecondsToPicoseconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "microsecondsToPicoseconds",
          "normalized": "a-\u003ea",
          "package": "test-framework",
          "partial": "To Picoseconds",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:microsecondsToPicoseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark all tests in this portion of the tree as mutually exclusive, so only one runs at a time\n\u003c/p\u003e",
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "mutuallyExclusive",
          "package": "test-framework",
          "signature": "Test -\u003e Test",
          "source": "src/Test-Framework-Core.html#mutuallyExclusive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:mutuallyExclusive\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:mutuallyExclusive\"]"
        },
        "index": {
          "description": "Mark all tests in this portion of the tree as mutually exclusive so only one runs at time",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "mutuallyExclusive",
          "normalized": "Test-\u003eTest",
          "package": "test-framework",
          "partial": "Exclusive",
          "signature": "Test-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:mutuallyExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "onLeft",
          "package": "test-framework",
          "signature": "(a -\u003e c) -\u003e (a, b) -\u003e (c, b)",
          "source": "src/Test-Framework-Utilities.html#onLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "onLeft",
          "normalized": "(a-\u003eb)-\u003e(a,c)-\u003e(b,c)",
          "package": "test-framework",
          "partial": "Left",
          "signature": "(a-\u003ec)-\u003e(a,b)-\u003e(c,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:onLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "onRight",
          "package": "test-framework",
          "signature": "(b -\u003e c) -\u003e (a, b) -\u003e (a, c)",
          "source": "src/Test-Framework-Utilities.html#onRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "onRight",
          "normalized": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
          "package": "test-framework",
          "partial": "Right",
          "signature": "(b-\u003ec)-\u003e(a,b)-\u003e(a,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:onRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "orElse",
          "package": "test-framework",
          "signature": "Maybe a -\u003e a -\u003e a",
          "source": "src/Test-Framework-Utilities.html#orElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "orElse",
          "normalized": "Maybe a-\u003ea-\u003ea",
          "package": "test-framework",
          "partial": "Else",
          "signature": "Maybe a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "padRight",
          "package": "test-framework",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Test-Framework-Utilities.html#padRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "padRight",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "test-framework",
          "partial": "Right",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:padRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd some options to child tests\n\u003c/p\u003e",
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "plusTestOptions",
          "package": "test-framework",
          "signature": "TestOptions -\u003e Test -\u003e Test",
          "source": "src/Test-Framework-Core.html#plusTestOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:plusTestOptions\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:plusTestOptions\"]"
        },
        "index": {
          "description": "Add some options to child tests",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "plusTestOptions",
          "normalized": "TestOptions-\u003eTest-\u003eTest",
          "package": "test-framework",
          "partial": "Test Options",
          "signature": "TestOptions-\u003eTest-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:plusTestOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "runImprovingIO",
          "package": "test-framework",
          "signature": "ImprovingIO i f f -\u003e IO (i :~\u003e f, IO ())",
          "source": "src/Test-Framework-Improving.html#runImprovingIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "runImprovingIO",
          "normalized": "ImprovingIO a b b-\u003eIO(a b,IO())",
          "package": "test-framework",
          "partial": "Improving IO",
          "signature": "ImprovingIO i f f-\u003eIO(i f,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:runImprovingIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "runTest",
          "package": "test-framework",
          "signature": "CompleteTestOptions -\u003e t -\u003e IO (i :~\u003e r, IO ())",
          "source": "src/Test-Framework-Core.html#runTest",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "runTest",
          "normalized": "CompleteTestOptions-\u003ea-\u003eIO(b c,IO())",
          "package": "test-framework",
          "partial": "Test",
          "signature": "CompleteTestOptions-\u003et-\u003eIO(i r,IO())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:runTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "secondsToMicroseconds",
          "package": "test-framework",
          "signature": "a -\u003e a",
          "source": "src/Test-Framework-Utilities.html#secondsToMicroseconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "secondsToMicroseconds",
          "normalized": "a-\u003ea",
          "package": "test-framework",
          "partial": "To Microseconds",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:secondsToMicroseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssemble a number of tests into a cohesive group\n\u003c/p\u003e",
          "module": "[\"Test.Framework.Providers.API\",\"Test.Framework\"]",
          "name": "testGroup",
          "package": "test-framework",
          "signature": "TestName -\u003e [Test] -\u003e Test",
          "source": "src/Test-Framework-Core.html#testGroup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:testGroup\",\"http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:testGroup\"]"
        },
        "index": {
          "description": "Assemble number of tests into cohesive group",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "testGroup",
          "normalized": "TestName-\u003e[Test]-\u003eTest",
          "package": "test-framework",
          "partial": "Group",
          "signature": "TestName-\u003e[Test]-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:testGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "testSucceeded",
          "package": "test-framework",
          "signature": "r -\u003e Bool",
          "source": "src/Test-Framework-Core.html#testSucceeded",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "testSucceeded",
          "normalized": "a-\u003eBool",
          "package": "test-framework",
          "partial": "Succeeded",
          "signature": "r-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:testSucceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "testTypeName",
          "package": "test-framework",
          "signature": "t -\u003e TestTypeName",
          "source": "src/Test-Framework-Core.html#testTypeName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "testTypeName",
          "normalized": "a-\u003eTestTypeName",
          "package": "test-framework",
          "partial": "Type Name",
          "signature": "t-\u003eTestTypeName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:testTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a number of microseconds and an improving IO action, run that improving IO action only\n for at most the given period before giving up. See also \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.API",
          "name": "timeoutImprovingIO",
          "package": "test-framework",
          "signature": "Int -\u003e ImprovingIO i f a -\u003e ImprovingIO i f (Maybe a)",
          "source": "src/Test-Framework-Improving.html#timeoutImprovingIO",
          "type": "function"
        },
        "index": {
          "description": "Given number of microseconds and an improving IO action run that improving IO action only for at most the given period before giving up See also timeout",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "timeoutImprovingIO",
          "normalized": "Int-\u003eImprovingIO a b c-\u003eImprovingIO a b(Maybe c)",
          "package": "test-framework",
          "partial": "Improving IO",
          "signature": "Int-\u003eImprovingIO i f a-\u003eImprovingIO i f(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:timeoutImprovingIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "tunnelImprovingIO",
          "package": "test-framework",
          "signature": "ImprovingIO i f (ImprovingIO i f a -\u003e IO a)",
          "source": "src/Test-Framework-Improving.html#tunnelImprovingIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "tunnelImprovingIO",
          "normalized": "ImprovingIO a b(ImprovingIO a b c-\u003eIO c)",
          "package": "test-framework",
          "partial": "Improving IO",
          "signature": "ImprovingIO i f(ImprovingIO i f a-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:tunnelImprovingIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "unK",
          "package": "test-framework",
          "signature": "a",
          "source": "src/Test-Framework-Utilities.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "unK",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:unK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e, but does not append a trailing newline if there\n is at least one line.  For example:\n\u003c/p\u003e\u003cpre\u003e unlinesConcise [\"A\", \"B\"] == \"A\\nB\"\n unlinesConcise [] == \"\"\n\u003c/pre\u003e\u003cp\u003eWhereas:\n\u003c/p\u003e\u003cpre\u003e unlines [\"A\", \"B\"] == \"A\\nB\\n\"\n unlines [] == \"\"\n\u003c/pre\u003e\u003cp\u003eThis is closer to the behaviour of \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e, which does not append\n a trailing space.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.API",
          "name": "unlinesConcise",
          "package": "test-framework",
          "signature": "[String] -\u003e String",
          "source": "src/Test-Framework-Utilities.html#unlinesConcise",
          "type": "function"
        },
        "index": {
          "description": "Like unlines but does not append trailing newline if there is at least one line For example unlinesConcise nB unlinesConcise Whereas unlines nB unlines This is closer to the behaviour of unwords which does not append trailing space",
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "unlinesConcise",
          "normalized": "[String]-\u003eString",
          "package": "test-framework",
          "partial": "Concise",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:unlinesConcise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.API",
          "name": "yieldImprovement",
          "package": "test-framework",
          "signature": "i -\u003e ImprovingIO i f ()",
          "source": "src/Test-Framework-Improving.html#yieldImprovement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Providers API",
          "module": "Test.Framework.Providers.API",
          "name": "yieldImprovement",
          "normalized": "a-\u003eImprovingIO a b()",
          "package": "test-framework",
          "partial": "Improvement",
          "signature": "i-\u003eImprovingIO i f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Providers-API.html#v:yieldImprovement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports everything that you need to be able to create your own test runner.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Framework.Runners.API",
          "name": "API",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-API.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports everything that you need to be able to create your own test runner",
          "hierarchy": "Test Framework Runners API",
          "module": "Test.Framework.Runners.API",
          "name": "API",
          "package": "test-framework",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTestRunner\u003c/a\u003e\u003c/code\u003e class simplifies folding a \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e. You need to specify\n the important semantic actions by instantiating this class, and\n \u003ccode\u003e\u003ca\u003erunTestTree\u003c/a\u003e\u003c/code\u003e will take care of recursion and test filtering.\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.API",
          "name": "TestRunner",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-Core.html#TestRunner",
          "type": "class"
        },
        "index": {
          "description": "TestRunner class simplifies folding Test You need to specify the important semantic actions by instantiating this class and runTestTree will take care of recursion and test filtering",
          "hierarchy": "Test Framework Runners API",
          "module": "Test.Framework.Runners.API",
          "name": "TestRunner",
          "package": "test-framework",
          "partial": "Test Runner",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-API.html#t:TestRunner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to run a test group\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.API",
          "name": "runGroup",
          "package": "test-framework",
          "signature": "TestName -\u003e [b] -\u003e b",
          "source": "src/Test-Framework-Runners-Core.html#runGroup",
          "type": "method"
        },
        "index": {
          "description": "How to run test group",
          "hierarchy": "Test Framework Runners API",
          "module": "Test.Framework.Runners.API",
          "name": "runGroup",
          "normalized": "TestName-\u003e[a]-\u003ea",
          "package": "test-framework",
          "partial": "Group",
          "signature": "TestName-\u003e[b]-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-API.html#v:runGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to handle an IO test (created with \u003ccode\u003e\u003ca\u003ebuildTestBracketed\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.API",
          "name": "runIOTest",
          "package": "test-framework",
          "signature": "IO (b, IO ()) -\u003e b",
          "source": "src/Test-Framework-Runners-Core.html#runIOTest",
          "type": "method"
        },
        "index": {
          "description": "How to handle an IO test created with buildTestBracketed",
          "hierarchy": "Test Framework Runners API",
          "module": "Test.Framework.Runners.API",
          "name": "runIOTest",
          "normalized": "IO(a,IO())-\u003ea",
          "package": "test-framework",
          "partial": "IOTest",
          "signature": "IO(b,IO())-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-API.html#v:runIOTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to handle a single test\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.API",
          "name": "runSimpleTest",
          "package": "test-framework",
          "signature": "TestOptions -\u003e TestName -\u003e t -\u003e b",
          "source": "src/Test-Framework-Runners-Core.html#runSimpleTest",
          "type": "method"
        },
        "index": {
          "description": "How to handle single test",
          "hierarchy": "Test Framework Runners API",
          "module": "Test.Framework.Runners.API",
          "name": "runSimpleTest",
          "normalized": "TestOptions-\u003eTestName-\u003ea-\u003eb",
          "package": "test-framework",
          "partial": "Simple Test",
          "signature": "TestOptions-\u003eTestName-\u003et-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-API.html#v:runSimpleTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the test tree using a \u003ccode\u003e\u003ca\u003eTestRunner\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.API",
          "name": "runTestTree",
          "package": "test-framework",
          "signature": "TestOptions-\u003e [TestPattern]-\u003e Test-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Run the test tree using TestRunner",
          "hierarchy": "Test Framework Runners API",
          "module": "Test.Framework.Runners.API",
          "name": "runTestTree",
          "normalized": "TestOptions-\u003e[TestPattern]-\u003eTest-\u003ea",
          "package": "test-framework",
          "partial": "Test Tree",
          "signature": "TestOptions-\u003e[TestPattern]-\u003eTest-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-API.html#v:runTestTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to skip a test that doesn't satisfy the pattern\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.API",
          "name": "skipTest",
          "package": "test-framework",
          "signature": "b",
          "source": "src/Test-Framework-Runners-Core.html#skipTest",
          "type": "method"
        },
        "index": {
          "description": "How to skip test that doesn satisfy the pattern",
          "hierarchy": "Test Framework Runners API",
          "module": "Test.Framework.Runners.API",
          "name": "skipTest",
          "package": "test-framework",
          "partial": "Test",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-API.html#v:skipTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Console",
          "name": "Console",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-Console.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Framework Runners Console",
          "module": "Test.Framework.Runners.Console",
          "name": "Console",
          "package": "test-framework",
          "partial": "Console",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Console.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNothing\u003c/code\u003e signifies that usage information should be displayed.\n \u003ccode\u003eJust\u003c/code\u003e simply gives us the contribution to overall options by the command line option.\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.Console",
          "name": "SuppliedRunnerOptions",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-Console.html#SuppliedRunnerOptions",
          "type": "type"
        },
        "index": {
          "description": "Nothing signifies that usage information should be displayed Just simply gives us the contribution to overall options by the command line option",
          "hierarchy": "Test Framework Runners Console",
          "module": "Test.Framework.Runners.Console",
          "name": "SuppliedRunnerOptions",
          "package": "test-framework",
          "partial": "Supplied Runner Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Console.html#t:SuppliedRunnerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Console",
          "name": "defaultMain",
          "package": "test-framework",
          "signature": "[Test] -\u003e IO ()",
          "source": "src/Test-Framework-Runners-Console.html#defaultMain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Console",
          "module": "Test.Framework.Runners.Console",
          "name": "defaultMain",
          "normalized": "[Test]-\u003eIO()",
          "package": "test-framework",
          "partial": "Main",
          "signature": "[Test]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Console.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e that lets you ignore the command line arguments\n in favour of another list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.Console",
          "name": "defaultMainWithArgs",
          "package": "test-framework",
          "signature": "[Test] -\u003e [String] -\u003e IO ()",
          "source": "src/Test-Framework-Runners-Console.html#defaultMainWithArgs",
          "type": "function"
        },
        "index": {
          "description": "version of defaultMain that lets you ignore the command line arguments in favour of another list of String",
          "hierarchy": "Test Framework Runners Console",
          "module": "Test.Framework.Runners.Console",
          "name": "defaultMainWithArgs",
          "normalized": "[Test]-\u003e[String]-\u003eIO()",
          "package": "test-framework",
          "partial": "Main With Args",
          "signature": "[Test]-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Console.html#v:defaultMainWithArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e that lets you ignore the command line arguments\n in favour of an explicit set of \u003ccode\u003e\u003ca\u003eRunnerOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.Console",
          "name": "defaultMainWithOpts",
          "package": "test-framework",
          "signature": "[Test] -\u003e RunnerOptions -\u003e IO ()",
          "source": "src/Test-Framework-Runners-Console.html#defaultMainWithOpts",
          "type": "function"
        },
        "index": {
          "description": "version of defaultMain that lets you ignore the command line arguments in favour of an explicit set of RunnerOptions",
          "hierarchy": "Test Framework Runners Console",
          "module": "Test.Framework.Runners.Console",
          "name": "defaultMainWithOpts",
          "normalized": "[Test]-\u003eRunnerOptions-\u003eIO()",
          "package": "test-framework",
          "partial": "Main With Opts",
          "signature": "[Test]-\u003eRunnerOptions-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Console.html#v:defaultMainWithOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the specified command line arguments into a \u003ccode\u003e\u003ca\u003eRunnerOptions\u003c/a\u003e\u003c/code\u003e and some remaining arguments,\n or return a reason as to why we can't.\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.Console",
          "name": "interpretArgs",
          "package": "test-framework",
          "signature": "[String] -\u003e IO (Either String (RunnerOptions, [String]))",
          "source": "src/Test-Framework-Runners-Console.html#interpretArgs",
          "type": "function"
        },
        "index": {
          "description": "Parse the specified command line arguments into RunnerOptions and some remaining arguments or return reason as to why we can",
          "hierarchy": "Test Framework Runners Console",
          "module": "Test.Framework.Runners.Console",
          "name": "interpretArgs",
          "normalized": "[String]-\u003eIO(Either String(RunnerOptions,[String]))",
          "package": "test-framework",
          "partial": "Args",
          "signature": "[String]-\u003eIO(Either String(RunnerOptions,[String]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Console.html#v:interpretArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003einterpretArgs\u003c/a\u003e\u003c/code\u003e that ends the process if it fails.\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.Console",
          "name": "interpretArgsOrExit",
          "package": "test-framework",
          "signature": "[String] -\u003e IO RunnerOptions",
          "source": "src/Test-Framework-Runners-Console.html#interpretArgsOrExit",
          "type": "function"
        },
        "index": {
          "description": "version of interpretArgs that ends the process if it fails",
          "hierarchy": "Test Framework Runners Console",
          "module": "Test.Framework.Runners.Console",
          "name": "interpretArgsOrExit",
          "normalized": "[String]-\u003eIO RunnerOptions",
          "package": "test-framework",
          "partial": "Args Or Exit",
          "signature": "[String]-\u003eIO RunnerOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Console.html#v:interpretArgsOrExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions understood by test-framework. This can be used to add more\n options to the tester executable.\n\u003c/p\u003e",
          "module": "Test.Framework.Runners.Console",
          "name": "optionsDescription",
          "package": "test-framework",
          "signature": "[OptDescr SuppliedRunnerOptions]",
          "source": "src/Test-Framework-Runners-Console.html#optionsDescription",
          "type": "function"
        },
        "index": {
          "description": "Options understood by test-framework This can be used to add more options to the tester executable",
          "hierarchy": "Test Framework Runners Console",
          "module": "Test.Framework.Runners.Console",
          "name": "optionsDescription",
          "normalized": "[OptDescr SuppliedRunnerOptions]",
          "package": "test-framework",
          "partial": "Description",
          "signature": "[OptDescr SuppliedRunnerOptions]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Console.html#v:optionsDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "Options",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-Options.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "Options",
          "package": "test-framework",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ColorMode",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-Options.html#ColorMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ColorMode",
          "package": "test-framework",
          "partial": "Color Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#t:ColorMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "CompleteRunnerOptions",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-Options.html#CompleteRunnerOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "CompleteRunnerOptions",
          "package": "test-framework",
          "partial": "Complete Runner Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#t:CompleteRunnerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "RunnerOptions",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "RunnerOptions",
          "package": "test-framework",
          "partial": "Runner Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#t:RunnerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "RunnerOptions'",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "RunnerOptions'",
          "package": "test-framework",
          "partial": "Runner Options'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#t:RunnerOptions-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "TestPattern",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-TestPattern.html#TestPattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "TestPattern",
          "package": "test-framework",
          "partial": "Test Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#t:TestPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ColorAlways",
          "package": "test-framework",
          "signature": "ColorAlways",
          "source": "src/Test-Framework-Runners-Options.html#ColorMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ColorAlways",
          "package": "test-framework",
          "partial": "Color Always",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ColorAlways"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ColorAuto",
          "package": "test-framework",
          "signature": "ColorAuto",
          "source": "src/Test-Framework-Runners-Options.html#ColorMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ColorAuto",
          "package": "test-framework",
          "partial": "Color Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ColorAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ColorNever",
          "package": "test-framework",
          "signature": "ColorNever",
          "source": "src/Test-Framework-Runners-Options.html#ColorMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ColorNever",
          "package": "test-framework",
          "partial": "Color Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ColorNever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "RunnerOptions",
          "package": "test-framework",
          "signature": "RunnerOptions",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "RunnerOptions",
          "package": "test-framework",
          "partial": "Runner Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:RunnerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_color_mode",
          "package": "test-framework",
          "signature": "f ColorMode",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_color_mode",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ropt_color_mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_hide_successes",
          "package": "test-framework",
          "signature": "f Bool",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_hide_successes",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ropt_hide_successes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_list_only",
          "package": "test-framework",
          "signature": "f Bool",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_list_only",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ropt_list_only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_test_options",
          "package": "test-framework",
          "signature": "f TestOptions",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_test_options",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ropt_test_options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_test_patterns",
          "package": "test-framework",
          "signature": "f [TestPattern]",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_test_patterns",
          "normalized": "a[TestPattern]",
          "package": "test-framework",
          "signature": "f[TestPattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ropt_test_patterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_threads",
          "package": "test-framework",
          "signature": "f Int",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_threads",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ropt_threads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_xml_nested",
          "package": "test-framework",
          "signature": "f Bool",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_xml_nested",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ropt_xml_nested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_xml_output",
          "package": "test-framework",
          "signature": "f (Maybe FilePath)",
          "source": "src/Test-Framework-Runners-Options.html#RunnerOptions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners Options",
          "module": "Test.Framework.Runners.Options",
          "name": "ropt_xml_output",
          "package": "test-framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-Options.html#v:ropt_xml_output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.TestPattern",
          "name": "TestPattern",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-TestPattern.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Framework Runners TestPattern",
          "module": "Test.Framework.Runners.TestPattern",
          "name": "TestPattern",
          "package": "test-framework",
          "partial": "Test Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-TestPattern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.TestPattern",
          "name": "TestPattern",
          "package": "test-framework",
          "source": "src/Test-Framework-Runners-TestPattern.html#TestPattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework Runners TestPattern",
          "module": "Test.Framework.Runners.TestPattern",
          "name": "TestPattern",
          "package": "test-framework",
          "partial": "Test Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-TestPattern.html#t:TestPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.TestPattern",
          "name": "parseTestPattern",
          "package": "test-framework",
          "signature": "String -\u003e TestPattern",
          "source": "src/Test-Framework-Runners-TestPattern.html#parseTestPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners TestPattern",
          "module": "Test.Framework.Runners.TestPattern",
          "name": "parseTestPattern",
          "normalized": "String-\u003eTestPattern",
          "package": "test-framework",
          "partial": "Test Pattern",
          "signature": "String-\u003eTestPattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-TestPattern.html#v:parseTestPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Runners.TestPattern",
          "name": "testPatternMatches",
          "package": "test-framework",
          "signature": "TestPattern -\u003e [String] -\u003e Bool",
          "source": "src/Test-Framework-Runners-TestPattern.html#testPatternMatches",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Runners TestPattern",
          "module": "Test.Framework.Runners.TestPattern",
          "name": "testPatternMatches",
          "normalized": "TestPattern-\u003e[String]-\u003eBool",
          "package": "test-framework",
          "partial": "Pattern Matches",
          "signature": "TestPattern-\u003e[String]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Runners-TestPattern.html#v:testPatternMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Seed",
          "name": "Seed",
          "package": "test-framework",
          "source": "src/Test-Framework-Seed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Framework Seed",
          "module": "Test.Framework.Seed",
          "name": "Seed",
          "package": "test-framework",
          "partial": "Seed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Seed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Seed",
          "name": "Seed",
          "package": "test-framework",
          "source": "src/Test-Framework-Seed.html#Seed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework Seed",
          "module": "Test.Framework.Seed",
          "name": "Seed",
          "package": "test-framework",
          "partial": "Seed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Seed.html#t:Seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Seed",
          "name": "FixedSeed",
          "package": "test-framework",
          "signature": "FixedSeed Int",
          "source": "src/Test-Framework-Seed.html#Seed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Seed",
          "module": "Test.Framework.Seed",
          "name": "FixedSeed",
          "package": "test-framework",
          "partial": "Fixed Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Seed.html#v:FixedSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Seed",
          "name": "RandomSeed",
          "package": "test-framework",
          "signature": "RandomSeed",
          "source": "src/Test-Framework-Seed.html#Seed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Seed",
          "module": "Test.Framework.Seed",
          "name": "RandomSeed",
          "package": "test-framework",
          "partial": "Random Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Seed.html#v:RandomSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e, returns a new random number generator based on that seed and the\n actual numeric seed that was used to build that generator, so it can be recreated.\n\u003c/p\u003e",
          "module": "Test.Framework.Seed",
          "name": "newSeededStdGen",
          "package": "test-framework",
          "signature": "Seed -\u003e IO (StdGen, Int)",
          "source": "src/Test-Framework-Seed.html#newSeededStdGen",
          "type": "function"
        },
        "index": {
          "description": "Given Seed returns new random number generator based on that seed and the actual numeric seed that was used to build that generator so it can be recreated",
          "hierarchy": "Test Framework Seed",
          "module": "Test.Framework.Seed",
          "name": "newSeededStdGen",
          "normalized": "Seed-\u003eIO(StdGen,Int)",
          "package": "test-framework",
          "partial": "Seeded Std Gen",
          "signature": "Seed-\u003eIO(StdGen,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Seed.html#v:newSeededStdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Seed",
          "name": "newStdGenWithKnownSeed",
          "package": "test-framework",
          "signature": "IO (StdGen, Int)",
          "source": "src/Test-Framework-Seed.html#newStdGenWithKnownSeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Framework Seed",
          "module": "Test.Framework.Seed",
          "name": "newStdGenWithKnownSeed",
          "normalized": "IO(StdGen,Int)",
          "package": "test-framework",
          "partial": "Std Gen With Known Seed",
          "signature": "IO(StdGen,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework-Seed.html#v:newStdGenWithKnownSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generic test framework for all types of Haskell test.\n\u003c/p\u003e\u003cp\u003eFor an example of how to use test-framework, please see\n \u003ca\u003ehttp://github.com/batterseapower/test-framework/raw/master/example/Test/Framework/Example.lhs\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Framework",
          "name": "Framework",
          "package": "test-framework",
          "source": "src/Test-Framework.html",
          "type": "module"
        },
        "index": {
          "description": "generic test framework for all types of Haskell test For an example of how to use test-framework please see http github.com batterseapower test-framework raw master example Test Framework Example.lhs",
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "Framework",
          "package": "test-framework",
          "partial": "Framework",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework",
          "name": "MutuallyExcluded",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#MutuallyExcluded",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "MutuallyExcluded",
          "package": "test-framework",
          "partial": "Mutually Excluded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#t:MutuallyExcluded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain test data type: builds up a list of tests to be run. Users should use the\n utility functions in e.g. the test-framework-hunit and test-framework-quickcheck\n packages to create instances of \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e, and then build them up into testsuites\n by using \u003ccode\u003e\u003ca\u003etestGroup\u003c/a\u003e\u003c/code\u003e and lists.\n\u003c/p\u003e\u003cp\u003eFor an example of how to use test-framework, please see\n \u003ca\u003ehttp://github.com/batterseapower/test-framework/raw/master/example/Test/Framework/Example.lhs\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Test.Framework",
          "name": "Test",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#Test",
          "type": "data"
        },
        "index": {
          "description": "Main test data type builds up list of tests to be run Users should use the utility functions in e.g the test-framework-hunit and test-framework-quickcheck packages to create instances of Test and then build them up into testsuites by using testGroup and lists For an example of how to use test-framework please see http github.com batterseapower test-framework raw master example Test Framework Example.lhs",
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "Test",
          "package": "test-framework",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest names or descriptions. These are shown to the user\n\u003c/p\u003e",
          "module": "Test.Framework",
          "name": "TestName",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#TestName",
          "type": "type"
        },
        "index": {
          "description": "Test names or descriptions These are shown to the user",
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "TestName",
          "package": "test-framework",
          "partial": "Test Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#t:TestName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething like the result of a test: works in concert with \u003ccode\u003e\u003ca\u003eTestlike\u003c/a\u003e\u003c/code\u003e.\n The type parameters are the type that is used for progress reports and the\n type of the final output of the test respectively.\n\u003c/p\u003e",
          "module": "Test.Framework",
          "name": "TestResultlike",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#TestResultlike",
          "type": "class"
        },
        "index": {
          "description": "Something like the result of test works in concert with Testlike The type parameters are the type that is used for progress reports and the type of the final output of the test respectively",
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "TestResultlike",
          "package": "test-framework",
          "partial": "Test Resultlike",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#t:TestResultlike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a type of test, such as \u003ca\u003eProperties\u003c/a\u003e or \u003ca\u003eTest Cases\u003c/a\u003e. Tests of\n types of the same names will be grouped together in the test run summary.\n\u003c/p\u003e",
          "module": "Test.Framework",
          "name": "TestTypeName",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#TestTypeName",
          "type": "type"
        },
        "index": {
          "description": "The name of type of test such as Properties or Test Cases Tests of types of the same names will be grouped together in the test run summary",
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "TestTypeName",
          "package": "test-framework",
          "partial": "Test Type Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#t:TestTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething test-like in its behaviour. The type parameters are the type that\n is used for progress reports, the type of the final output of the test and the\n data type encapsulating the whole potential to do a test respectively.\n\u003c/p\u003e",
          "module": "Test.Framework",
          "name": "Testlike",
          "package": "test-framework",
          "source": "src/Test-Framework-Core.html#Testlike",
          "type": "class"
        },
        "index": {
          "description": "Something test-like in its behaviour The type parameters are the type that is used for progress reports the type of the final output of the test and the data type encapsulating the whole potential to do test respectively",
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "Testlike",
          "package": "test-framework",
          "partial": "Testlike",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#t:Testlike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework",
          "name": "runTest",
          "package": "test-framework",
          "signature": "CompleteTestOptions -\u003e t -\u003e IO (i :~\u003e r, IO ())",
          "source": "src/Test-Framework-Core.html#runTest",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "runTest",
          "normalized": "CompleteTestOptions-\u003ea-\u003eIO(b c,IO())",
          "package": "test-framework",
          "partial": "Test",
          "signature": "CompleteTestOptions-\u003et-\u003eIO(i r,IO())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:runTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework",
          "name": "testSucceeded",
          "package": "test-framework",
          "signature": "r -\u003e Bool",
          "source": "src/Test-Framework-Core.html#testSucceeded",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "testSucceeded",
          "normalized": "a-\u003eBool",
          "package": "test-framework",
          "partial": "Succeeded",
          "signature": "r-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:testSucceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework",
          "name": "testTypeName",
          "package": "test-framework",
          "signature": "t -\u003e TestTypeName",
          "source": "src/Test-Framework-Core.html#testTypeName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test Framework",
          "module": "Test.Framework",
          "name": "testTypeName",
          "normalized": "a-\u003eTestTypeName",
          "package": "test-framework",
          "partial": "Type Name",
          "signature": "t-\u003eTestTypeName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/test-framework/docs/Test-Framework.html#v:testTypeName"
      }
    }
  ]
]