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
        "word": "test-sandbox-hunit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sandbox.HUnit",
          "name": "HUnit",
          "package": "test-sandbox-hunit",
          "source": "src/Test-Sandbox-HUnit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Sandbox HUnit",
          "module": "Test.Sandbox.HUnit",
          "name": "HUnit",
          "package": "test-sandbox-hunit",
          "partial": "HUnit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-hunit/docs/Test-Sandbox-HUnit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the specified condition holds.\n\u003c/p\u003e",
          "module": "Test.Sandbox.HUnit",
          "name": "assertBool",
          "package": "test-sandbox-hunit",
          "signature": "String-\u003e Bool-\u003e Sandbox ()",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the specified condition holds",
          "hierarchy": "Test Sandbox HUnit",
          "module": "Test.Sandbox.HUnit",
          "name": "assertBool",
          "normalized": "String-\u003eBool-\u003eSandbox()",
          "package": "test-sandbox-hunit",
          "partial": "Bool",
          "signature": "String-\u003eBool-\u003eSandbox()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-hunit/docs/Test-Sandbox-HUnit.html#v:assertBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the specified actual value is equal to the expected value.\n\u003c/p\u003e",
          "module": "Test.Sandbox.HUnit",
          "name": "assertEqual",
          "package": "test-sandbox-hunit",
          "signature": "String-\u003e a-\u003e a-\u003e Sandbox ()",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the specified actual value is equal to the expected value",
          "hierarchy": "Test Sandbox HUnit",
          "module": "Test.Sandbox.HUnit",
          "name": "assertEqual",
          "normalized": "String-\u003ea-\u003ea-\u003eSandbox()",
          "package": "test-sandbox-hunit",
          "partial": "Equal",
          "signature": "String-\u003ea-\u003ea-\u003eSandbox()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-hunit/docs/Test-Sandbox-HUnit.html#v:assertEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignals an assertion failure if *no* exception is raised.\n\u003c/p\u003e",
          "module": "Test.Sandbox.HUnit",
          "name": "assertException",
          "package": "test-sandbox-hunit",
          "signature": "String-\u003e Sandbox a-\u003e Sandbox ()",
          "type": "function"
        },
        "index": {
          "description": "Signals an assertion failure if no exception is raised",
          "hierarchy": "Test Sandbox HUnit",
          "module": "Test.Sandbox.HUnit",
          "name": "assertException",
          "normalized": "String-\u003eSandbox a-\u003eSandbox()",
          "package": "test-sandbox-hunit",
          "partial": "Exception",
          "signature": "String-\u003eSandbox a-\u003eSandbox()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-hunit/docs/Test-Sandbox-HUnit.html#v:assertException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnconditionally signals that a failure has occured.\n\u003c/p\u003e",
          "module": "Test.Sandbox.HUnit",
          "name": "assertFailure",
          "package": "test-sandbox-hunit",
          "signature": "String-\u003e Sandbox ()",
          "type": "function"
        },
        "index": {
          "description": "Unconditionally signals that failure has occured",
          "hierarchy": "Test Sandbox HUnit",
          "module": "Test.Sandbox.HUnit",
          "name": "assertFailure",
          "normalized": "String-\u003eSandbox()",
          "package": "test-sandbox-hunit",
          "partial": "Failure",
          "signature": "String-\u003eSandbox()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-hunit/docs/Test-Sandbox-HUnit.html#v:assertFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sandbox.HUnit",
          "name": "assertString",
          "package": "test-sandbox-hunit",
          "signature": "String-\u003e Sandbox ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Sandbox HUnit",
          "module": "Test.Sandbox.HUnit",
          "name": "assertString",
          "normalized": "String-\u003eSandbox()",
          "package": "test-sandbox-hunit",
          "partial": "String",
          "signature": "String-\u003eSandbox()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-hunit/docs/Test-Sandbox-HUnit.html#v:assertString"
      }
    }
  ]
]