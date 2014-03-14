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
        "word": "test-framework-hunit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllows HUnit test cases to be used with the test-framework package.\n\u003c/p\u003e\u003cp\u003eFor an example of how to use test-framework, please see \u003ca\u003ehttp://github.com/batterseapower/test-framework/raw/master/example/Test/Framework/Example.lhs\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Framework.Providers.HUnit",
          "name": "HUnit",
          "package": "test-framework-hunit",
          "source": "src/Test-Framework-Providers-HUnit.html",
          "type": "module"
        },
        "index": {
          "description": "Allows HUnit test cases to be used with the test-framework package For an example of how to use test-framework please see http github.com batterseapower test-framework raw master example Test Framework Example.lhs",
          "hierarchy": "Test Framework Providers HUnit",
          "module": "Test.Framework.Providers.HUnit",
          "name": "HUnit",
          "package": "test-framework-hunit",
          "partial": "HUnit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-hunit/docs/Test-Framework-Providers-HUnit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdapt an existing HUnit test into a list of test-framework tests.\n This is useful when migrating your existing HUnit test suite to test-framework.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.HUnit",
          "name": "hUnitTestToTests",
          "package": "test-framework-hunit",
          "signature": "Test -\u003e [Test]",
          "source": "src/Test-Framework-Providers-HUnit.html#hUnitTestToTests",
          "type": "function"
        },
        "index": {
          "description": "Adapt an existing HUnit test into list of test-framework tests This is useful when migrating your existing HUnit test suite to test-framework",
          "hierarchy": "Test Framework Providers HUnit",
          "module": "Test.Framework.Providers.HUnit",
          "name": "hUnitTestToTests",
          "normalized": "Test-\u003e[Test]",
          "package": "test-framework-hunit",
          "partial": "Unit Test To Tests",
          "signature": "Test-\u003e[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-hunit/docs/Test-Framework-Providers-HUnit.html#v:hUnitTestToTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e for a HUnit \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.HUnit",
          "name": "testCase",
          "package": "test-framework-hunit",
          "signature": "TestName -\u003e Assertion -\u003e Test",
          "source": "src/Test-Framework-Providers-HUnit.html#testCase",
          "type": "function"
        },
        "index": {
          "description": "Create Test for HUnit Assertion",
          "hierarchy": "Test Framework Providers HUnit",
          "module": "Test.Framework.Providers.HUnit",
          "name": "testCase",
          "normalized": "TestName-\u003eAssertion-\u003eTest",
          "package": "test-framework-hunit",
          "partial": "Case",
          "signature": "TestName-\u003eAssertion-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-hunit/docs/Test-Framework-Providers-HUnit.html#v:testCase"
      }
    }
  ]
]