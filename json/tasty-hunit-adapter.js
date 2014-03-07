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
        "word": "tasty-hunit-adapter"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a function that converts exisiting HUnit tests to a TestTree\n list that can be used with tasty testing framework. Example usage:\n\u003c/p\u003e\u003cpre\u003e module Main where\n\n import Test.HUnit               ( (~:), (@=?)            )\n import Test.Tasty               ( defaultMain, testGroup )\n import Test.Tasty.HUnit.Adapter ( hUnitTestToTestTree    )\n\n main :: IO ()\n main = defaultMain $ testGroup \"Migrated from HUnit\" $\n                      hUnitTestToTestTree (\"HUnit test\" ~: 2 + 2 @=? 4)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.Tasty.HUnit.Adapter",
          "name": "Adapter",
          "package": "tasty-hunit-adapter",
          "source": "src/Test-Tasty-HUnit-Adapter.html",
          "type": "module"
        },
        "index": {
          "description": "Provides function that converts exisiting HUnit tests to TestTree list that can be used with tasty testing framework Example usage module Main where import Test.HUnit import Test.Tasty defaultMain testGroup import Test.Tasty.HUnit.Adapter hUnitTestToTestTree main IO main defaultMain testGroup Migrated from HUnit hUnitTestToTestTree HUnit test",
          "hierarchy": "Test Tasty HUnit Adapter",
          "module": "Test.Tasty.HUnit.Adapter",
          "name": "Adapter",
          "package": "tasty-hunit-adapter",
          "partial": "Adapter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tasty-hunit-adapter/docs/Test-Tasty-HUnit-Adapter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert existing HUnit test to a TestTree list that can be used with tasty.\n\u003c/p\u003e",
          "module": "Test.Tasty.HUnit.Adapter",
          "name": "hUnitTestToTestTree",
          "package": "tasty-hunit-adapter",
          "signature": "Test -\u003e [TestTree]",
          "source": "src/Test-Tasty-HUnit-Adapter.html#hUnitTestToTestTree",
          "type": "function"
        },
        "index": {
          "description": "Convert existing HUnit test to TestTree list that can be used with tasty",
          "hierarchy": "Test Tasty HUnit Adapter",
          "module": "Test.Tasty.HUnit.Adapter",
          "name": "hUnitTestToTestTree",
          "normalized": "Test-\u003e[TestTree]",
          "package": "tasty-hunit-adapter",
          "partial": "Unit Test To Test Tree",
          "signature": "Test-\u003e[TestTree]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-hunit-adapter/docs/Test-Tasty-HUnit-Adapter.html#v:hUnitTestToTestTree"
      }
    }
  ]
]