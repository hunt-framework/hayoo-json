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
        "word": "gitlib-cross"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foo",
          "name": "Foo",
          "package": "gitlib-cross",
          "source": "src/Foo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foo",
          "module": "Foo",
          "name": "Foo",
          "package": "gitlib-cross",
          "partial": "Foo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cross/docs/Foo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foo",
          "name": "foo",
          "package": "gitlib-cross",
          "signature": "a",
          "source": "src/Foo.html#foo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foo",
          "module": "Foo",
          "name": "foo",
          "package": "gitlib-cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cross/docs/Foo.html#v:foo"
      }
    }
  ]
]