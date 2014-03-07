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
        "word": "hsprocess"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.HSProcess.Representable",
          "name": "Representable",
          "package": "hsprocess",
          "source": "src/System-Console-HSProcess-Representable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console HSProcess Representable",
          "module": "System.Console.HSProcess.Representable",
          "name": "Representable",
          "package": "hsprocess",
          "partial": "Representable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Row is something that can be expressed as a line. \n The output of repr' should be formatted such that\n it can be read and processed from the command line.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eIO.putStrLn $ show [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e[1,2,3,4]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.ByteString.Lazy.Char8.putStrLn $ repr' [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e1 2 3 4\n\u003c/pre\u003e",
          "module": "System.Console.HSProcess.Representable",
          "name": "Row",
          "package": "hsprocess",
          "source": "src/System-Console-HSProcess-Representable.html#Row",
          "type": "class"
        },
        "index": {
          "description": "Row is something that can be expressed as line The output of repr should be formatted such that it can be read and processed from the command line For example IO.putStrLn show Data.ByteString.Lazy.Char8.putStrLn repr",
          "hierarchy": "System Console HSProcess Representable",
          "module": "System.Console.HSProcess.Representable",
          "name": "Row",
          "package": "hsprocess",
          "partial": "Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that instantiate Rows is a type that can be represented as\n a list of rows, where typically a row is a line.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ Data.ByteString.Lazy.Char8.putStrLn $ repr [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e1\n2\n3\n4\n\u003c/pre\u003e",
          "module": "System.Console.HSProcess.Representable",
          "name": "Rows",
          "package": "hsprocess",
          "source": "src/System-Console-HSProcess-Representable.html#Rows",
          "type": "class"
        },
        "index": {
          "description": "type that instantiate Rows is type that can be represented as list of rows where typically row is line For example mapM Data.ByteString.Lazy.Char8.putStrLn repr",
          "hierarchy": "System Console HSProcess Representable",
          "module": "System.Console.HSProcess.Representable",
          "name": "Rows",
          "package": "hsprocess",
          "partial": "Rows",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#t:Rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.HSProcess.Representable",
          "name": "printRow",
          "package": "hsprocess",
          "signature": "Bool -\u003e a -\u003e IO ()",
          "source": "src/System-Console-HSProcess-Representable.html#printRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console HSProcess Representable",
          "module": "System.Console.HSProcess.Representable",
          "name": "printRow",
          "normalized": "Bool-\u003ea-\u003eIO()",
          "package": "hsprocess",
          "partial": "Row",
          "signature": "Bool-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#v:printRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.HSProcess.Representable",
          "name": "printRows",
          "package": "hsprocess",
          "signature": "Bool -\u003e a -\u003e IO ()",
          "source": "src/System-Console-HSProcess-Representable.html#printRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console HSProcess Representable",
          "module": "System.Console.HSProcess.Representable",
          "name": "printRows",
          "normalized": "Bool-\u003ea-\u003eIO()",
          "package": "hsprocess",
          "partial": "Rows",
          "signature": "Bool-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#v:printRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.HSProcess.Representable",
          "name": "repr",
          "package": "hsprocess",
          "signature": "a -\u003e [ByteString]",
          "source": "src/System-Console-HSProcess-Representable.html#repr",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console HSProcess Representable",
          "module": "System.Console.HSProcess.Representable",
          "name": "repr",
          "normalized": "a-\u003e[ByteString]",
          "package": "hsprocess",
          "signature": "a-\u003e[ByteString]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#v:repr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.HSProcess.Representable",
          "name": "repr'",
          "package": "hsprocess",
          "signature": "a -\u003e ByteString",
          "source": "src/System-Console-HSProcess-Representable.html#repr%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console HSProcess Representable",
          "module": "System.Console.HSProcess.Representable",
          "name": "repr'",
          "normalized": "a-\u003eByteString",
          "package": "hsprocess",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsprocess/docs/System-Console-HSProcess-Representable.html#v:repr-39-"
      }
    }
  ]
]