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
        "word": "timeit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.TimeIt",
          "name": "TimeIt",
          "package": "timeit",
          "source": "src/System-TimeIt.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System TimeIt",
          "module": "System.TimeIt",
          "name": "TimeIt",
          "package": "timeit",
          "partial": "Time It",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeit/docs/System-TimeIt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation so that it prints out the execution time.\n\u003c/p\u003e",
          "module": "System.TimeIt",
          "name": "timeIt",
          "package": "timeit",
          "signature": "IO a -\u003e IO a",
          "source": "src/System-TimeIt.html#timeIt",
          "type": "function"
        },
        "index": {
          "description": "Wrap an IO computation so that it prints out the execution time",
          "hierarchy": "System TimeIt",
          "module": "System.TimeIt",
          "name": "timeIt",
          "normalized": "IO a-\u003eIO a",
          "package": "timeit",
          "partial": "It",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeit/docs/System-TimeIt.html#v:timeIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation so that it returns execution time is seconds as well as the real value.\n\u003c/p\u003e",
          "module": "System.TimeIt",
          "name": "timeItT",
          "package": "timeit",
          "signature": "IO a -\u003e IO (Double, a)",
          "source": "src/System-TimeIt.html#timeItT",
          "type": "function"
        },
        "index": {
          "description": "Wrap an IO computation so that it returns execution time is seconds as well as the real value",
          "hierarchy": "System TimeIt",
          "module": "System.TimeIt",
          "name": "timeItT",
          "normalized": "IO a-\u003eIO(Double,a)",
          "package": "timeit",
          "partial": "It",
          "signature": "IO a-\u003eIO(Double,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeit/docs/System-TimeIt.html#v:timeItT"
      }
    }
  ]
]