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
        "word": "test-framework-smallcheck"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows to use SmallCheck properties in test-framework.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Framework.Providers.SmallCheck",
          "name": "SmallCheck",
          "package": "test-framework-smallcheck",
          "source": "src/Test-Framework-Providers-SmallCheck.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows to use SmallCheck properties in test-framework",
          "hierarchy": "Test Framework Providers SmallCheck",
          "module": "Test.Framework.Providers.SmallCheck",
          "name": "SmallCheck",
          "package": "test-framework-smallcheck",
          "partial": "Small Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-smallcheck/docs/Test-Framework-Providers-SmallCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e for a SmallCheck \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e property\n testProperty :: TestName -\u003e (forall m . T.MonadIO m =\u003e SC.Testable m a) -\u003e Test\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.SmallCheck",
          "name": "testProperty",
          "package": "test-framework-smallcheck",
          "signature": "TestName -\u003e a -\u003e Test",
          "source": "src/Test-Framework-Providers-SmallCheck.html#testProperty",
          "type": "function"
        },
        "index": {
          "description": "Create Test for SmallCheck Testable property testProperty TestName forall T.MonadIO SC.Testable Test",
          "hierarchy": "Test Framework Providers SmallCheck",
          "module": "Test.Framework.Providers.SmallCheck",
          "name": "testProperty",
          "normalized": "TestName-\u003ea-\u003eTest",
          "package": "test-framework-smallcheck",
          "partial": "Property",
          "signature": "TestName-\u003ea-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-smallcheck/docs/Test-Framework-Providers-SmallCheck.html#v:testProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the default maximum test depth for a given \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a simple wrapper around \u003ccode\u003e\u003ca\u003eplusTestOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.SmallCheck",
          "name": "withDepth",
          "package": "test-framework-smallcheck",
          "signature": "Depth -\u003e Test -\u003e Test",
          "source": "src/Test-Framework-Providers-SmallCheck.html#withDepth",
          "type": "function"
        },
        "index": {
          "description": "Change the default maximum test depth for given Test This is simple wrapper around plusTestOptions",
          "hierarchy": "Test Framework Providers SmallCheck",
          "module": "Test.Framework.Providers.SmallCheck",
          "name": "withDepth",
          "normalized": "Depth-\u003eTest-\u003eTest",
          "package": "test-framework-smallcheck",
          "partial": "Depth",
          "signature": "Depth-\u003eTest-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-smallcheck/docs/Test-Framework-Providers-SmallCheck.html#v:withDepth"
      }
    }
  ]
]