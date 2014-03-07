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
        "word": "cabal-test-quickcheck"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJoins the QuickCheck testing library with Cabal's detailed interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "QuickCheck",
          "package": "cabal-test-quickcheck",
          "source": "src/Distribution-TestSuite-QuickCheck.html",
          "type": "module"
        },
        "index": {
          "description": "Joins the QuickCheck testing library with Cabal detailed interface",
          "hierarchy": "Distribution TestSuite QuickCheck",
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "QuickCheck",
          "package": "cabal-test-quickcheck",
          "partial": "Quick Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-test-quickcheck/docs/Distribution-TestSuite-QuickCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "Test",
          "package": "cabal-test-quickcheck",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution TestSuite QuickCheck",
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "Test",
          "package": "cabal-test-quickcheck",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-test-quickcheck/docs/Distribution-TestSuite-QuickCheck.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "testGroup",
          "package": "cabal-test-quickcheck",
          "signature": "String -\u003e [Test] -\u003e Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution TestSuite QuickCheck",
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "testGroup",
          "normalized": "String-\u003e[Test]-\u003eTest",
          "package": "cabal-test-quickcheck",
          "partial": "Group",
          "signature": "String-\u003e[Test]-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-test-quickcheck/docs/Distribution-TestSuite-QuickCheck.html#v:testGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a QuickCheck property using the current arguments and the given\n name.\n\u003c/p\u003e",
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "testProperty",
          "package": "cabal-test-quickcheck",
          "signature": "String -\u003e p -\u003e Test",
          "source": "src/Distribution-TestSuite-QuickCheck.html#testProperty",
          "type": "function"
        },
        "index": {
          "description": "Test QuickCheck property using the current arguments and the given name",
          "hierarchy": "Distribution TestSuite QuickCheck",
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "testProperty",
          "normalized": "String-\u003ea-\u003eTest",
          "package": "cabal-test-quickcheck",
          "partial": "Property",
          "signature": "String-\u003ep-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-test-quickcheck/docs/Distribution-TestSuite-QuickCheck.html#v:testProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a QuickCheck property using the given arguments and name.\n\u003c/p\u003e",
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "testPropertyWithOptions",
          "package": "cabal-test-quickcheck",
          "signature": "String -\u003e Options -\u003e p -\u003e Either String Test",
          "source": "src/Distribution-TestSuite-QuickCheck.html#testPropertyWithOptions",
          "type": "function"
        },
        "index": {
          "description": "Test QuickCheck property using the given arguments and name",
          "hierarchy": "Distribution TestSuite QuickCheck",
          "module": "Distribution.TestSuite.QuickCheck",
          "name": "testPropertyWithOptions",
          "normalized": "String-\u003eOptions-\u003ea-\u003eEither String Test",
          "package": "cabal-test-quickcheck",
          "partial": "Property With Options",
          "signature": "String-\u003eOptions-\u003ep-\u003eEither String Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-test-quickcheck/docs/Distribution-TestSuite-QuickCheck.html#v:testPropertyWithOptions"
      }
    }
  ]
]