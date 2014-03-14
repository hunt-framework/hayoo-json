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
        "word": "chell-quickcheck"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Chell.QuickCheck",
          "name": "QuickCheck",
          "package": "chell-quickcheck",
          "source": "src/Test-Chell-QuickCheck.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Chell QuickCheck",
          "module": "Test.Chell.QuickCheck",
          "name": "QuickCheck",
          "package": "chell-quickcheck",
          "partial": "Quick Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chell-quickcheck/docs/Test-Chell-QuickCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a QuickCheck property to a Chell \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\nimport Test.Chell\nimport Test.Chell.QuickCheck\nimport Test.QuickCheck hiding (property)\n\ntest_NullLength :: Test\ntest_NullLength = property \"null-length\"\n    (xs -\u003e not (null xs) ==\u003e length xs \u003e 0)\n\u003c/pre\u003e",
          "module": "Test.Chell.QuickCheck",
          "name": "property",
          "package": "chell-quickcheck",
          "signature": "String -\u003e prop -\u003e Test",
          "source": "src/Test-Chell-QuickCheck.html#property",
          "type": "function"
        },
        "index": {
          "description": "Convert QuickCheck property to Chell Test import Test.Chell import Test.Chell.QuickCheck import Test.QuickCheck hiding property test NullLength Test test NullLength property null-length xs not null xs length xs",
          "hierarchy": "Test Chell QuickCheck",
          "module": "Test.Chell.QuickCheck",
          "name": "property",
          "normalized": "String-\u003ea-\u003eTest",
          "package": "chell-quickcheck",
          "signature": "String-\u003eprop-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chell-quickcheck/docs/Test-Chell-QuickCheck.html#v:property"
      }
    }
  ]
]