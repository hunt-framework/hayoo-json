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
        "word": "hspec-expectations-pretty"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "Pretty",
          "package": "hspec-expectations-pretty",
          "source": "src/Test-Hspec-Expectations-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Hspec Expectations Pretty",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "Pretty",
          "package": "hspec-expectations-pretty",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-pretty/docs/Test-Hspec-Expectations-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "HspecFailure",
          "package": "hspec-expectations-pretty",
          "source": "src/Test-Hspec-Expectations-Pretty.html#HspecFailure",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Hspec Expectations Pretty",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "HspecFailure",
          "package": "hspec-expectations-pretty",
          "partial": "Hspec Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-pretty/docs/Test-Hspec-Expectations-Pretty.html#t:HspecFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "HspecFailure",
          "package": "hspec-expectations-pretty",
          "signature": "HspecFailure String",
          "source": "src/Test-Hspec-Expectations-Pretty.html#HspecFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec Expectations Pretty",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "HspecFailure",
          "package": "hspec-expectations-pretty",
          "partial": "Hspec Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-pretty/docs/Test-Hspec-Expectations-Pretty.html#v:HspecFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the specified actual value is equal to the expected value.\n The output message will contain the prefix, the expected value, and the \n actual value.\n\u003c/p\u003e\u003cp\u003eIf the prefix is the empty string (i.e., \u003ccode\u003e\"\"\u003c/code\u003e), then the prefix is omitted\n and only the expected and actual values are output.\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "assertEqual",
          "package": "hspec-expectations-pretty",
          "signature": "String-\u003e a-\u003e a-\u003e Expectation",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the specified actual value is equal to the expected value The output message will contain the prefix the expected value and the actual value If the prefix is the empty string i.e then the prefix is omitted and only the expected and actual values are output",
          "hierarchy": "Test Hspec Expectations Pretty",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "assertEqual",
          "normalized": "String-\u003ea-\u003ea-\u003eExpectation",
          "package": "hspec-expectations-pretty",
          "partial": "Equal",
          "signature": "String-\u003ea-\u003ea-\u003eExpectation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-pretty/docs/Test-Hspec-Expectations-Pretty.html#v:assertEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "assertFailure",
          "package": "hspec-expectations-pretty",
          "signature": "String-\u003e Expectation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec Expectations Pretty",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "assertFailure",
          "normalized": "String-\u003eExpectation",
          "package": "hspec-expectations-pretty",
          "partial": "Failure",
          "signature": "String-\u003eExpectation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-pretty/docs/Test-Hspec-Expectations-Pretty.html#v:assertFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eactual `shouldBe` expected\u003c/code\u003e sets the expectation that \u003ccode\u003eactual\u003c/code\u003e is equal\n to \u003ccode\u003eexpected\u003c/code\u003e (this is just an alias for \u003ccode\u003e@?=\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "shouldBe",
          "package": "hspec-expectations-pretty",
          "signature": "a -\u003e a -\u003e Expectation",
          "source": "src/Test-Hspec-Expectations-Pretty.html#shouldBe",
          "type": "function"
        },
        "index": {
          "description": "actual shouldBe expected sets the expectation that actual is equal to expected this is just an alias for",
          "hierarchy": "Test Hspec Expectations Pretty",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "shouldBe",
          "normalized": "a-\u003ea-\u003eExpectation",
          "package": "hspec-expectations-pretty",
          "partial": "Be",
          "signature": "a-\u003ea-\u003eExpectation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-pretty/docs/Test-Hspec-Expectations-Pretty.html#v:shouldBe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaction `shouldReturn` expected\u003c/code\u003e sets the expectation that \u003ccode\u003eaction\u003c/code\u003e\n returns \u003ccode\u003eexpected\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "shouldReturn",
          "package": "hspec-expectations-pretty",
          "signature": "IO a -\u003e a -\u003e Expectation",
          "source": "src/Test-Hspec-Expectations-Pretty.html#shouldReturn",
          "type": "function"
        },
        "index": {
          "description": "action shouldReturn expected sets the expectation that action returns expected",
          "hierarchy": "Test Hspec Expectations Pretty",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "shouldReturn",
          "normalized": "IO a-\u003ea-\u003eExpectation",
          "package": "hspec-expectations-pretty",
          "partial": "Return",
          "signature": "IO a-\u003ea-\u003eExpectation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-pretty/docs/Test-Hspec-Expectations-Pretty.html#v:shouldReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ev `shouldSatisfy` p\u003c/code\u003e sets the expectation that \u003ccode\u003ep v\u003c/code\u003e is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "shouldSatisfy",
          "package": "hspec-expectations-pretty",
          "signature": "a -\u003e (a -\u003e Bool) -\u003e Expectation",
          "source": "src/Test-Hspec-Expectations-Pretty.html#shouldSatisfy",
          "type": "function"
        },
        "index": {
          "description": "shouldSatisfy sets the expectation that is True",
          "hierarchy": "Test Hspec Expectations Pretty",
          "module": "Test.Hspec.Expectations.Pretty",
          "name": "shouldSatisfy",
          "normalized": "a-\u003e(a-\u003eBool)-\u003eExpectation",
          "package": "hspec-expectations-pretty",
          "partial": "Satisfy",
          "signature": "a-\u003e(a-\u003eBool)-\u003eExpectation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-pretty/docs/Test-Hspec-Expectations-Pretty.html#v:shouldSatisfy"
      }
    }
  ]
]