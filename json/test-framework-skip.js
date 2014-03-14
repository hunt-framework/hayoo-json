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
        "word": "test-framework-skip"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Skip",
          "name": "Skip",
          "package": "test-framework-skip",
          "source": "src/Test-Framework-Skip.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Framework Skip",
          "module": "Test.Framework.Skip",
          "name": "Skip",
          "package": "test-framework-skip",
          "partial": "Skip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-skip/docs/Test-Framework-Skip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauses the given test or test suite to be skipped, though it will still show up as being \u003ca\u003eskipped\u003c/a\u003e when the suite is run.  If given a test suite, \u003ccode\u003e\u003ca\u003eskip\u003c/a\u003e\u003c/code\u003e recursively applies it itself to the child tests and suites, all of which (except for the groups) will show up as being \u003ccode\u003eskipped\u003c/code\u003e when the test suite is run.\n\u003c/p\u003e",
          "module": "Test.Framework.Skip",
          "name": "skip",
          "package": "test-framework-skip",
          "signature": "Test -\u003e Test",
          "source": "src/Test-Framework-Skip.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Causes the given test or test suite to be skipped though it will still show up as being skipped when the suite is run If given test suite skip recursively applies it itself to the child tests and suites all of which except for the groups will show up as being skipped when the test suite is run",
          "hierarchy": "Test Framework Skip",
          "module": "Test.Framework.Skip",
          "name": "skip",
          "normalized": "Test-\u003eTest",
          "package": "test-framework-skip",
          "signature": "Test-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-skip/docs/Test-Framework-Skip.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstead of using the \u003ccode\u003e\u003ca\u003eskip\u003c/a\u003e\u003c/code\u003e function, you can change \u003ccode\u003etestCase\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eskipTestCase\u003c/a\u003e\u003c/code\u003e to cause the test to be skipped.\n\u003c/p\u003e",
          "module": "Test.Framework.Skip",
          "name": "skipTestCase",
          "package": "test-framework-skip",
          "signature": "String -\u003e a -\u003e Test",
          "source": "src/Test-Framework-Skip.html#skipTestCase",
          "type": "function"
        },
        "index": {
          "description": "Instead of using the skip function you can change testCase to skipTestCase to cause the test to be skipped",
          "hierarchy": "Test Framework Skip",
          "module": "Test.Framework.Skip",
          "name": "skipTestCase",
          "normalized": "String-\u003ea-\u003eTest",
          "package": "test-framework-skip",
          "partial": "Test Case",
          "signature": "String-\u003ea-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-skip/docs/Test-Framework-Skip.html#v:skipTestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstead of using the \u003ccode\u003e\u003ca\u003eskip\u003c/a\u003e\u003c/code\u003e function, you can change \u003ccode\u003etestGroup\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eskipTestGroup\u003c/a\u003e\u003c/code\u003e to cause the test suite to be skipped.\n\u003c/p\u003e",
          "module": "Test.Framework.Skip",
          "name": "skipTestGroup",
          "package": "test-framework-skip",
          "signature": "String -\u003e [Test] -\u003e Test",
          "source": "src/Test-Framework-Skip.html#skipTestGroup",
          "type": "function"
        },
        "index": {
          "description": "Instead of using the skip function you can change testGroup to skipTestGroup to cause the test suite to be skipped",
          "hierarchy": "Test Framework Skip",
          "module": "Test.Framework.Skip",
          "name": "skipTestGroup",
          "normalized": "String-\u003e[Test]-\u003eTest",
          "package": "test-framework-skip",
          "partial": "Test Group",
          "signature": "String-\u003e[Test]-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-skip/docs/Test-Framework-Skip.html#v:skipTestGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstead of using the \u003ccode\u003e\u003ca\u003eskip\u003c/a\u003e\u003c/code\u003e function, you can change \u003ccode\u003etestProperty\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eskipTestProperty\u003c/a\u003e\u003c/code\u003e to cause the test to be skipped.  (Note that this work regardless of whether you are using QuickCheck or SmallCheck for this particular test.)\n\u003c/p\u003e",
          "module": "Test.Framework.Skip",
          "name": "skipTestProperty",
          "package": "test-framework-skip",
          "signature": "String -\u003e a -\u003e Test",
          "source": "src/Test-Framework-Skip.html#skipTestProperty",
          "type": "function"
        },
        "index": {
          "description": "Instead of using the skip function you can change testProperty to skipTestProperty to cause the test to be skipped Note that this work regardless of whether you are using QuickCheck or SmallCheck for this particular test",
          "hierarchy": "Test Framework Skip",
          "module": "Test.Framework.Skip",
          "name": "skipTestProperty",
          "normalized": "String-\u003ea-\u003eTest",
          "package": "test-framework-skip",
          "partial": "Test Property",
          "signature": "String-\u003ea-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-skip/docs/Test-Framework-Skip.html#v:skipTestProperty"
      }
    }
  ]
]