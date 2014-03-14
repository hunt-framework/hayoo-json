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
        "word": "io-memoize"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMemoize IO actions,\n performing them at most once,\n but recalling their result for subsequent invocations.\n This library provides three sequencing strategies:\n lazy (\u003ccode\u003e\u003ca\u003eioMemo\u003c/a\u003e\u003c/code\u003e), eager (\u003ccode\u003e\u003ca\u003eioMemo'\u003c/a\u003e\u003c/code\u003e), and concurrent (\u003ccode\u003e\u003ca\u003eioMemoPar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe lazy and eager approaches give stronger sequencing guarantees.\n\u003c/p\u003e\u003cp\u003eThe following property holds: \u003ccode\u003ejoin . ioMemo === id\u003c/code\u003e.\n The same is true for \u003ccode\u003eioMemo'\u003c/code\u003e and \u003ccode\u003eioMemoPar\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlso, for the three memoizers in this library,\n the memory allocated for the result will not\n be available for garbage collection until the corresponding\n memoized action is also available for garbage collection,\n unless your compiler performs deep magicks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.Memoize",
          "name": "Memoize",
          "package": "io-memoize",
          "source": "src/System-IO-Memoize.html",
          "type": "module"
        },
        "index": {
          "description": "Memoize IO actions performing them at most once but recalling their result for subsequent invocations This library provides three sequencing strategies lazy ioMemo eager ioMemo and concurrent ioMemoPar The lazy and eager approaches give stronger sequencing guarantees The following property holds join ioMemo id The same is true for ioMemo and ioMemoPar Also for the three memoizers in this library the memory allocated for the result will not be available for garbage collection until the corresponding memoized action is also available for garbage collection unless your compiler performs deep magicks",
          "hierarchy": "System IO Memoize",
          "module": "System.IO.Memoize",
          "name": "Memoize",
          "package": "io-memoize",
          "partial": "Memoize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/io-memoize/docs/System-IO-Memoize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize an IO action.\n The action will be performed\n the first time that it its value is demanded;\n all subsequent invocations\n will simply recall the value acquired\n from the first call.\n If the value is never demanded,\n then the action will never be performed.\n\u003c/p\u003e\u003cp\u003eThis is basically a safe version of\n \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e.\n This function is also thread-safe:\n it is guaranteed that the action passed in\n will be performed exactly 0 or 1 times\n by this code. Exceptions will be propagated\n to the caller.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetLine' \u003c- ioMemo getLine\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereplicateM 3 getLine'\n\u003c/code\u003e\u003c/strong\u003eHello\n[\"Hello\", \"Hello\", \"Hello\"]\n\u003c/pre\u003e",
          "module": "System.IO.Memoize",
          "name": "ioMemo",
          "package": "io-memoize",
          "signature": "IO a -\u003e IO (IO a)",
          "source": "src/System-IO-Memoize.html#ioMemo",
          "type": "function"
        },
        "index": {
          "description": "Memoize an IO action The action will be performed the first time that it its value is demanded all subsequent invocations will simply recall the value acquired from the first call If the value is never demanded then the action will never be performed This is basically safe version of unsafeInterleaveIO This function is also thread-safe it is guaranteed that the action passed in will be performed exactly or times by this code Exceptions will be propagated to the caller Example usage getLine ioMemo getLine replicateM getLine Hello Hello Hello Hello",
          "hierarchy": "System IO Memoize",
          "module": "System.IO.Memoize",
          "name": "ioMemo",
          "normalized": "IO a-\u003eIO(IO a)",
          "package": "io-memoize",
          "partial": "Memo",
          "signature": "IO a-\u003eIO(IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-memoize/docs/System-IO-Memoize.html#v:ioMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize an IO action.\n The action will be performed immediately;\n all subsequent invocations\n will recall the value acquired.\n\u003c/p\u003e",
          "module": "System.IO.Memoize",
          "name": "ioMemo'",
          "package": "io-memoize",
          "signature": "IO a -\u003e IO (IO a)",
          "source": "src/System-IO-Memoize.html#ioMemo%27",
          "type": "function"
        },
        "index": {
          "description": "Memoize an IO action The action will be performed immediately all subsequent invocations will recall the value acquired",
          "hierarchy": "System IO Memoize",
          "module": "System.IO.Memoize",
          "name": "ioMemo'",
          "normalized": "IO a-\u003eIO(IO a)",
          "package": "io-memoize",
          "partial": "Memo'",
          "signature": "IO a-\u003eIO(IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-memoize/docs/System-IO-Memoize.html#v:ioMemo-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize an IO action.\n The action will be performed immediately\n in a spawned thread.\n Attempts to access the result\n will block until the action is finished.\n\u003c/p\u003e\u003cp\u003eThis is simply a synonym for \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.IO.Memoize",
          "name": "ioMemoPar",
          "package": "io-memoize",
          "signature": "IO a -\u003e IO (IO a)",
          "source": "src/System-IO-Memoize.html#ioMemoPar",
          "type": "function"
        },
        "index": {
          "description": "Memoize an IO action The action will be performed immediately in spawned thread Attempts to access the result will block until the action is finished This is simply synonym for spawn",
          "hierarchy": "System IO Memoize",
          "module": "System.IO.Memoize",
          "name": "ioMemoPar",
          "normalized": "IO a-\u003eIO(IO a)",
          "package": "io-memoize",
          "partial": "Memo Par",
          "signature": "IO a-\u003eIO(IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-memoize/docs/System-IO-Memoize.html#v:ioMemoPar"
      }
    }
  ]
]