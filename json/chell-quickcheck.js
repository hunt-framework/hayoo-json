[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell-quickcheck/docs/Test-Chell-QuickCheck.html#",
      "description": {
        "fct-module": "Test.Chell.QuickCheck",
        "fct-package": "chell-quickcheck",
        "fct-signature": "module",
        "fct-source": "src/Test-Chell-QuickCheck.html",
        "fct-type": "module",
        "title": "QuickCheck"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Chell QuickCheck",
        "module": "Test.Chell.QuickCheck",
        "name": "QuickCheck",
        "normalized": "",
        "package": "chell-quickcheck",
        "partial": "Quick Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chell-quickcheck/docs/Test-Chell-QuickCheck.html#v:property",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a QuickCheck property to a Chell \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\nimport Test.Chell\nimport Test.Chell.QuickCheck\nimport Test.QuickCheck hiding (property)\n\ntest_NullLength :: Test\ntest_NullLength = property \"null-length\"\n    (xs -\u003e not (null xs) ==\u003e length xs \u003e 0)\n\u003c/pre\u003e",
        "fct-module": "Test.Chell.QuickCheck",
        "fct-package": "chell-quickcheck",
        "fct-signature": "String -\u003e prop -\u003e Test",
        "fct-source": "src/Test-Chell-QuickCheck.html#property",
        "fct-type": "function",
        "title": "property"
      },
      "index": {
        "description": "Convert QuickCheck property to Chell Test import Test.Chell import Test.Chell.QuickCheck import Test.QuickCheck hiding property test NullLength Test test NullLength property null-length xs not null xs length xs",
        "hierarchy": "Test Chell QuickCheck",
        "module": "Test.Chell.QuickCheck",
        "name": "property",
        "normalized": "String-\u003ea-\u003eTest",
        "package": "chell-quickcheck",
        "partial": "",
        "signature": "String-\u003eprop-\u003eTest"
      }
    }
  }
]