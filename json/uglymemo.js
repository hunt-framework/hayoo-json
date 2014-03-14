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
        "word": "uglymemo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoUgly",
          "name": "MemoUgly",
          "package": "uglymemo",
          "source": "src/Data-MemoUgly.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data MemoUgly",
          "module": "Data.MemoUgly",
          "name": "MemoUgly",
          "package": "uglymemo",
          "partial": "Memo Ugly",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uglymemo/docs/Data-MemoUgly.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure version of \u003ccode\u003e\u003ca\u003ememoIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MemoUgly",
          "name": "memo",
          "package": "uglymemo",
          "signature": "(a -\u003e b)-\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The pure version of memoIO",
          "hierarchy": "Data MemoUgly",
          "module": "Data.MemoUgly",
          "name": "memo",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "uglymemo",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uglymemo/docs/Data-MemoUgly.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the given function by allocating a memo table,\n and then updating the memo table on each function call.\n\u003c/p\u003e",
          "module": "Data.MemoUgly",
          "name": "memoIO",
          "package": "uglymemo",
          "signature": "(a -\u003e b)-\u003e IO (a -\u003e IO b)",
          "type": "function"
        },
        "index": {
          "description": "Memoize the given function by allocating memo table and then updating the memo table on each function call",
          "hierarchy": "Data MemoUgly",
          "module": "Data.MemoUgly",
          "name": "memoIO",
          "normalized": "(a-\u003eb)-\u003eIO(a-\u003eIO b)",
          "package": "uglymemo",
          "partial": "IO",
          "signature": "(a-\u003eb)-\u003eIO(a-\u003eIO b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uglymemo/docs/Data-MemoUgly.html#v:memoIO"
      }
    }
  ]
]