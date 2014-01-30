[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-capture/docs/System-IO-Capture.html#",
      "description": {
        "fct-module": "System.IO.Capture",
        "fct-package": "io-capture",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Capture.html",
        "fct-type": "module",
        "title": "Capture"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Capture",
        "module": "System.IO.Capture",
        "name": "Capture",
        "normalized": "",
        "package": "io-capture",
        "partial": "Capture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-capture/docs/System-IO-Capture.html#v:capture",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an IO as action to run, and a String as given stdin,\n  then returns whole stdout and stderr as String of tuple.\n\u003c/p\u003e\u003cpre\u003e import System.IO.Capture (capture)\n\n main = print =\u003c\u003c capture (getLine \u003e\u003e= putStr) \"foobar\"\n   -- prints (\"foobar\",\"\")\n\u003c/pre\u003e",
        "fct-module": "System.IO.Capture",
        "fct-package": "io-capture",
        "fct-signature": "IO a -\u003e String -\u003e IO (String, String)",
        "fct-source": "src/System-IO-Capture.html#capture",
        "fct-type": "function",
        "title": "capture"
      },
      "index": {
        "description": "Takes an IO as action to run and String as given stdin then returns whole stdout and stderr as String of tuple import System.IO.Capture capture main print capture getLine putStr foobar prints foobar",
        "hierarchy": "System IO Capture",
        "module": "System.IO.Capture",
        "name": "capture",
        "normalized": "IO a-\u003eString-\u003eIO(String,String)",
        "package": "io-capture",
        "partial": "",
        "signature": "IO a-\u003eString-\u003eIO(String,String)"
      }
    }
  }
]