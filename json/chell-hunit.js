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
        "word": "chell-hunit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Chell.HUnit",
          "name": "HUnit",
          "package": "chell-hunit",
          "source": "src/Test-Chell-HUnit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Chell HUnit",
          "module": "Test.Chell.HUnit",
          "name": "HUnit",
          "package": "chell-hunit",
          "partial": "HUnit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chell-hunit/docs/Test-Chell-HUnit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a sequence of HUnit assertions (embedded in IO) to a Chell\n \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\nimport Test.Chell\nimport Test.Chell.HUnit\nimport Test.HUnit\n\ntest_Addition :: Test\ntest_addition = hunit \"addition\" $ do\n    1 + 2 @?= 3\n    2 + 3 @?= 5\n\u003c/pre\u003e",
          "module": "Test.Chell.HUnit",
          "name": "hunit",
          "package": "chell-hunit",
          "signature": "String -\u003e Assertion -\u003e Test",
          "source": "src/Test-Chell-HUnit.html#hunit",
          "type": "function"
        },
        "index": {
          "description": "Convert sequence of HUnit assertions embedded in IO to Chell Test import Test.Chell import Test.Chell.HUnit import Test.HUnit test Addition Test test addition hunit addition do",
          "hierarchy": "Test Chell HUnit",
          "module": "Test.Chell.HUnit",
          "name": "hunit",
          "normalized": "String-\u003eAssertion-\u003eTest",
          "package": "chell-hunit",
          "signature": "String-\u003eAssertion-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell-hunit/docs/Test-Chell-HUnit.html#v:hunit"
      }
    }
  ]
]