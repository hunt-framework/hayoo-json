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
        "word": "io-capture"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Capture",
          "name": "Capture",
          "package": "io-capture",
          "source": "src/System-IO-Capture.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System IO Capture",
          "module": "System.IO.Capture",
          "name": "Capture",
          "package": "io-capture",
          "partial": "Capture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/io-capture/docs/System-IO-Capture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an IO as action to run, and a String as given stdin,\n  then returns whole stdout and stderr as String of tuple.\n\u003c/p\u003e\u003cpre\u003e import System.IO.Capture (capture)\n\n main = print =\u003c\u003c capture (getLine \u003e\u003e= putStr) \"foobar\"\n   -- prints (\"foobar\",\"\")\n\u003c/pre\u003e",
          "module": "System.IO.Capture",
          "name": "capture",
          "package": "io-capture",
          "signature": "IO a -\u003e String -\u003e IO (String, String)",
          "source": "src/System-IO-Capture.html#capture",
          "type": "function"
        },
        "index": {
          "description": "Takes an IO as action to run and String as given stdin then returns whole stdout and stderr as String of tuple import System.IO.Capture capture main print capture getLine putStr foobar prints foobar",
          "hierarchy": "System IO Capture",
          "module": "System.IO.Capture",
          "name": "capture",
          "normalized": "IO a-\u003eString-\u003eIO(String,String)",
          "package": "io-capture",
          "signature": "IO a-\u003eString-\u003eIO(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-capture/docs/System-IO-Capture.html#v:capture"
      }
    }
  ]
]