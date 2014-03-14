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
        "word": "hspec-expectations-lifted"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntroductory documentation: \u003ca\u003ehttps://github.com/sol/hspec-expectations#readme\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "Lifted",
          "package": "hspec-expectations-lifted",
          "source": "src/Test-Hspec-Expectations-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "Introductory documentation https github.com sol hspec-expectations readme",
          "hierarchy": "Test Hspec Expectations Lifted",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "Lifted",
          "package": "hspec-expectations-lifted",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-lifted/docs/Test-Hspec-Expectations-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just an alias for HUnit's \u003ccode\u003eassertFailure\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "expectationFailure",
          "package": "hspec-expectations-lifted",
          "signature": "String -\u003e m ()",
          "source": "src/Test-Hspec-Expectations-Lifted.html#expectationFailure",
          "type": "function"
        },
        "index": {
          "description": "This is just an alias for HUnit assertFailure",
          "hierarchy": "Test Hspec Expectations Lifted",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "expectationFailure",
          "normalized": "String-\u003ea()",
          "package": "hspec-expectations-lifted",
          "partial": "Failure",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-lifted/docs/Test-Hspec-Expectations-Lifted.html#v:expectationFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eactual `shouldBe` expected\u003c/code\u003e sets the expectation that \u003ccode\u003eactual\u003c/code\u003e is equal\n to \u003ccode\u003eexpected\u003c/code\u003e (this is just an alias for \u003ccode\u003e@?=\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldBe",
          "package": "hspec-expectations-lifted",
          "signature": "a -\u003e a -\u003e m ()",
          "source": "src/Test-Hspec-Expectations-Lifted.html#shouldBe",
          "type": "function"
        },
        "index": {
          "description": "actual shouldBe expected sets the expectation that actual is equal to expected this is just an alias for",
          "hierarchy": "Test Hspec Expectations Lifted",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldBe",
          "normalized": "a-\u003ea-\u003eb()",
          "package": "hspec-expectations-lifted",
          "partial": "Be",
          "signature": "a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-lifted/docs/Test-Hspec-Expectations-Lifted.html#v:shouldBe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elist `shouldContain` sublist\u003c/code\u003e sets the expectation that \u003ccode\u003esublist\u003c/code\u003e is contained,\n wholly and intact, anywhere in the second.\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldContain",
          "package": "hspec-expectations-lifted",
          "signature": "[a] -\u003e [a] -\u003e m ()",
          "source": "src/Test-Hspec-Expectations-Lifted.html#shouldContain",
          "type": "function"
        },
        "index": {
          "description": "list shouldContain sublist sets the expectation that sublist is contained wholly and intact anywhere in the second",
          "hierarchy": "Test Hspec Expectations Lifted",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldContain",
          "normalized": "[a]-\u003e[a]-\u003eb()",
          "package": "hspec-expectations-lifted",
          "partial": "Contain",
          "signature": "[a]-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-lifted/docs/Test-Hspec-Expectations-Lifted.html#v:shouldContain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003exs `shouldMatchList` ys\u003c/code\u003e sets the expectation that \u003ccode\u003exs\u003c/code\u003e has the same\n elements that \u003ccode\u003eys\u003c/code\u003e has, possibly in another order\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldMatchList",
          "package": "hspec-expectations-lifted",
          "signature": "[a] -\u003e [a] -\u003e m ()",
          "source": "src/Test-Hspec-Expectations-Lifted.html#shouldMatchList",
          "type": "function"
        },
        "index": {
          "description": "xs shouldMatchList ys sets the expectation that xs has the same elements that ys has possibly in another order",
          "hierarchy": "Test Hspec Expectations Lifted",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldMatchList",
          "normalized": "[a]-\u003e[a]-\u003eb()",
          "package": "hspec-expectations-lifted",
          "partial": "Match List",
          "signature": "[a]-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-lifted/docs/Test-Hspec-Expectations-Lifted.html#v:shouldMatchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaction `shouldReturn` expected\u003c/code\u003e sets the expectation that \u003ccode\u003eaction\u003c/code\u003e\n returns \u003ccode\u003eexpected\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldReturn",
          "package": "hspec-expectations-lifted",
          "signature": "m a -\u003e a -\u003e m ()",
          "source": "src/Test-Hspec-Expectations-Lifted.html#shouldReturn",
          "type": "function"
        },
        "index": {
          "description": "action shouldReturn expected sets the expectation that action returns expected",
          "hierarchy": "Test Hspec Expectations Lifted",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldReturn",
          "normalized": "a b-\u003eb-\u003ea()",
          "package": "hspec-expectations-lifted",
          "partial": "Return",
          "signature": "m a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-lifted/docs/Test-Hspec-Expectations-Lifted.html#v:shouldReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ev `shouldSatisfy` p\u003c/code\u003e sets the expectation that \u003ccode\u003ep v\u003c/code\u003e is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldSatisfy",
          "package": "hspec-expectations-lifted",
          "signature": "a -\u003e (a -\u003e Bool) -\u003e m ()",
          "source": "src/Test-Hspec-Expectations-Lifted.html#shouldSatisfy",
          "type": "function"
        },
        "index": {
          "description": "shouldSatisfy sets the expectation that is True",
          "hierarchy": "Test Hspec Expectations Lifted",
          "module": "Test.Hspec.Expectations.Lifted",
          "name": "shouldSatisfy",
          "normalized": "a-\u003e(a-\u003eBool)-\u003eb()",
          "package": "hspec-expectations-lifted",
          "partial": "Satisfy",
          "signature": "a-\u003e(a-\u003eBool)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-expectations-lifted/docs/Test-Hspec-Expectations-Lifted.html#v:shouldSatisfy"
      }
    }
  ]
]