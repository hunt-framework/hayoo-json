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
        "word": "doctest"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.DocTest",
          "name": "DocTest",
          "package": "doctest",
          "source": "src/Test-DocTest.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test DocTest",
          "module": "Test.DocTest",
          "name": "DocTest",
          "package": "doctest",
          "partial": "Doc Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/doctest/docs/Test-DocTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun doctest with given list of arguments.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edoctest [\"-iexample/src\", \"example/src/Example.hs\"]\n\u003c/code\u003e\u003c/strong\u003eExamples: 2  Tried: 2  Errors: 0  Failures: 0\n\u003c/pre\u003e\u003cp\u003eThis can be used to create a Cabal test suite that runs doctest for your\n project.\n\u003c/p\u003e",
          "module": "Test.DocTest",
          "name": "doctest",
          "package": "doctest",
          "signature": "[String] -\u003e IO ()",
          "source": "src/Run.html#doctest",
          "type": "function"
        },
        "index": {
          "description": "Run doctest with given list of arguments Example doctest iexample src example src Example.hs Examples Tried Errors Failures This can be used to create Cabal test suite that runs doctest for your project",
          "hierarchy": "Test DocTest",
          "module": "Test.DocTest",
          "name": "doctest",
          "normalized": "[String]-\u003eIO()",
          "package": "doctest",
          "signature": "[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/doctest/docs/Test-DocTest.html#v:doctest"
      }
    }
  ]
]