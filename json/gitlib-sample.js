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
        "word": "gitlib-sample"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Sample",
          "name": "Sample",
          "package": "gitlib-sample",
          "source": "src/Git-Sample.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Sample",
          "module": "Git.Sample",
          "name": "Sample",
          "package": "gitlib-sample",
          "partial": "Sample",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-sample/docs/Git-Sample.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Sample",
          "name": "SampleRepository",
          "package": "gitlib-sample",
          "source": "src/Git-Sample.html#SampleRepository",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Sample",
          "module": "Git.Sample",
          "name": "SampleRepository",
          "package": "gitlib-sample",
          "partial": "Sample Repository",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-sample/docs/Git-Sample.html#t:SampleRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Sample",
          "name": "SampleRepository",
          "package": "gitlib-sample",
          "signature": "SampleRepository",
          "source": "src/Git-Sample.html#SampleRepository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Sample",
          "module": "Git.Sample",
          "name": "SampleRepository",
          "package": "gitlib-sample",
          "partial": "Sample Repository",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-sample/docs/Git-Sample.html#v:SampleRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Sample",
          "name": "sampleFactory",
          "package": "gitlib-sample",
          "signature": "RepositoryFactory (ReaderT SampleRepository m) m SampleRepository",
          "source": "src/Git-Sample.html#sampleFactory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Sample",
          "module": "Git.Sample",
          "name": "sampleFactory",
          "package": "gitlib-sample",
          "partial": "Factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-sample/docs/Git-Sample.html#v:sampleFactory"
      }
    }
  ]
]