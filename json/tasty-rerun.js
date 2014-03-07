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
        "word": "tasty-rerun"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Tasty.Ingredients.Rerun",
          "name": "Rerun",
          "package": "tasty-rerun",
          "source": "src/Test-Tasty-Ingredients-Rerun.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Tasty Ingredients Rerun",
          "module": "Test.Tasty.Ingredients.Rerun",
          "name": "Rerun",
          "package": "tasty-rerun",
          "partial": "Rerun",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tasty-rerun/docs/Test-Tasty-Ingredients-Rerun.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eIngredient\u003c/a\u003e\u003c/code\u003e transformer adds various \u003ccode\u003e--rerun\u003c/code\u003e options to your\n test program. These flags add stateful execution of your test suite, allowing\n you to rerun only tests that are failing from the previous run, or tests that\n that have been added since the last test ran, once the \u003ccode\u003e\u003ca\u003eTestTree\u003c/a\u003e\u003c/code\u003e has\n been filtered.\n\u003c/p\u003e\u003cp\u003eThe input list of \u003ccode\u003e\u003ca\u003eIngredient\u003c/a\u003e\u003c/code\u003es specifies the \u003ccode\u003e\u003ca\u003eIngredients\u003c/a\u003e\u003c/code\u003es that\n will actually work with the filtered \u003ccode\u003e\u003ca\u003eTestTree\u003c/a\u003e\u003c/code\u003e. Normally, you'll want\n at least \u003ccode\u003e\u003ca\u003econsoleTestReporter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Tasty.Ingredients.Rerun",
          "name": "rerunningTests",
          "package": "tasty-rerun",
          "signature": "[Ingredient] -\u003e Ingredient",
          "source": "src/Test-Tasty-Ingredients-Rerun.html#rerunningTests",
          "type": "function"
        },
        "index": {
          "description": "This Ingredient transformer adds various rerun options to your test program These flags add stateful execution of your test suite allowing you to rerun only tests that are failing from the previous run or tests that that have been added since the last test ran once the TestTree has been filtered The input list of Ingredient specifies the Ingredients that will actually work with the filtered TestTree Normally you ll want at least consoleTestReporter",
          "hierarchy": "Test Tasty Ingredients Rerun",
          "module": "Test.Tasty.Ingredients.Rerun",
          "name": "rerunningTests",
          "normalized": "[Ingredient]-\u003eIngredient",
          "package": "tasty-rerun",
          "partial": "Tests",
          "signature": "[Ingredient]-\u003eIngredient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-rerun/docs/Test-Tasty-Ingredients-Rerun.html#v:rerunningTests"
      }
    }
  ]
]