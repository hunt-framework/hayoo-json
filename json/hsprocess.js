[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#",
      "description": {
        "fct-module": "System.Console.HSProcess.Representable",
        "fct-package": "hsprocess",
        "fct-signature": "module",
        "fct-source": "src/System-Console-HSProcess-Representable.html",
        "fct-type": "module",
        "title": "Representable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console HSProcess Representable",
        "module": "System.Console.HSProcess.Representable",
        "name": "Representable",
        "normalized": "",
        "package": "hsprocess",
        "partial": "Representable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#t:Row",
      "description": {
        "fct-descr": "\u003cp\u003eA Row is something that can be expressed as a line. \n The output of repr' should be formatted such that\n it can be read and processed from the command line.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eIO.putStrLn $ show [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e[1,2,3,4]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.ByteString.Lazy.Char8.putStrLn $ repr' [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e1 2 3 4\n\u003c/pre\u003e",
        "fct-module": "System.Console.HSProcess.Representable",
        "fct-package": "hsprocess",
        "fct-signature": "class",
        "fct-source": "src/System-Console-HSProcess-Representable.html#Row",
        "fct-type": "class",
        "title": "Row"
      },
      "index": {
        "description": "Row is something that can be expressed as line The output of repr should be formatted such that it can be read and processed from the command line For example IO.putStrLn show Data.ByteString.Lazy.Char8.putStrLn repr",
        "hierarchy": "System Console HSProcess Representable",
        "module": "System.Console.HSProcess.Representable",
        "name": "Row",
        "normalized": "",
        "package": "hsprocess",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#t:Rows",
      "description": {
        "fct-descr": "\u003cp\u003eA type that instantiate Rows is a type that can be represented as\n a list of rows, where typically a row is a line.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ Data.ByteString.Lazy.Char8.putStrLn $ repr [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e1\n2\n3\n4\n\u003c/pre\u003e",
        "fct-module": "System.Console.HSProcess.Representable",
        "fct-package": "hsprocess",
        "fct-signature": "class",
        "fct-source": "src/System-Console-HSProcess-Representable.html#Rows",
        "fct-type": "class",
        "title": "Rows"
      },
      "index": {
        "description": "type that instantiate Rows is type that can be represented as list of rows where typically row is line For example mapM Data.ByteString.Lazy.Char8.putStrLn repr",
        "hierarchy": "System Console HSProcess Representable",
        "module": "System.Console.HSProcess.Representable",
        "name": "Rows",
        "normalized": "",
        "package": "hsprocess",
        "partial": "Rows",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#v:printRow",
      "description": {
        "fct-module": "System.Console.HSProcess.Representable",
        "fct-package": "hsprocess",
        "fct-signature": "Bool -\u003e a -\u003e IO ()",
        "fct-source": "src/System-Console-HSProcess-Representable.html#printRow",
        "fct-type": "function",
        "title": "printRow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console HSProcess Representable",
        "module": "System.Console.HSProcess.Representable",
        "name": "printRow",
        "normalized": "Bool-\u003ea-\u003eIO()",
        "package": "hsprocess",
        "partial": "Row",
        "signature": "Bool-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#v:printRows",
      "description": {
        "fct-module": "System.Console.HSProcess.Representable",
        "fct-package": "hsprocess",
        "fct-signature": "Bool -\u003e a -\u003e IO ()",
        "fct-source": "src/System-Console-HSProcess-Representable.html#printRows",
        "fct-type": "function",
        "title": "printRows"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console HSProcess Representable",
        "module": "System.Console.HSProcess.Representable",
        "name": "printRows",
        "normalized": "Bool-\u003ea-\u003eIO()",
        "package": "hsprocess",
        "partial": "Rows",
        "signature": "Bool-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#v:repr",
      "description": {
        "fct-module": "System.Console.HSProcess.Representable",
        "fct-package": "hsprocess",
        "fct-signature": "a -\u003e [ByteString]",
        "fct-source": "src/System-Console-HSProcess-Representable.html#repr",
        "fct-type": "method",
        "title": "repr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console HSProcess Representable",
        "module": "System.Console.HSProcess.Representable",
        "name": "repr",
        "normalized": "a-\u003e[ByteString]",
        "package": "hsprocess",
        "partial": "",
        "signature": "a-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#v:repr-39-",
      "description": {
        "fct-module": "System.Console.HSProcess.Representable",
        "fct-package": "hsprocess",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/System-Console-HSProcess-Representable.html#repr%27",
        "fct-type": "method",
        "title": "repr'"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console HSProcess Representable",
        "module": "System.Console.HSProcess.Representable",
        "name": "repr'",
        "normalized": "a-\u003eByteString",
        "package": "hsprocess",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  }
]