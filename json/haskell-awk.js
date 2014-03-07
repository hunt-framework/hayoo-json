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
        "word": "haskell-awk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed by Hawk's runtime to write to stdout.\n   The API may change at any time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Hawk.IO",
          "name": "IO",
          "package": "haskell-awk",
          "type": "module"
        },
        "index": {
          "description": "Used by Hawk runtime to write to stdout The API may change at any time",
          "hierarchy": "System Console Hawk IO",
          "module": "System.Console.Hawk.IO",
          "name": "IO",
          "package": "haskell-awk",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.IO",
          "name": "getInput",
          "package": "haskell-awk",
          "signature": "Maybe FilePath -\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk IO",
          "module": "System.Console.Hawk.IO",
          "name": "getInput",
          "normalized": "Maybe FilePath-\u003eIO ByteString",
          "package": "haskell-awk",
          "partial": "Input",
          "signature": "Maybe FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-IO.html#v:getInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.IO",
          "name": "printOutput",
          "package": "haskell-awk",
          "signature": "ByteString -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk IO",
          "module": "System.Console.Hawk.IO",
          "name": "printOutput",
          "normalized": "ByteString-\u003eIO()",
          "package": "haskell-awk",
          "partial": "Output",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-IO.html#v:printOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed by Hawk's runtime to format the output of a Hawk expression.\n    You can use this from your user prelude if you want Hawk to print\n    your custom datatypes in a console-friendly format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Hawk.Representable",
          "name": "Representable",
          "package": "haskell-awk",
          "type": "module"
        },
        "index": {
          "description": "Used by Hawk runtime to format the output of Hawk expression You can use this from your user prelude if you want Hawk to print your custom datatypes in console-friendly format",
          "hierarchy": "System Console Hawk Representable",
          "module": "System.Console.Hawk.Representable",
          "name": "Representable",
          "package": "haskell-awk",
          "partial": "Representable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that instantiate ListAsRow is a type that has a representation\n when is embedded inside a list\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ Data.ByteString.Lazy.Char8.putStrLn $ repr Data.ByteString.Lazy.Char8.empty \"test\"\n\u003c/code\u003e\u003c/strong\u003etest\n\u003c/pre\u003e",
          "module": "System.Console.Hawk.Representable",
          "name": "ListAsRow",
          "package": "haskell-awk",
          "type": "class"
        },
        "index": {
          "description": "type that instantiate ListAsRow is type that has representation when is embedded inside list For example mapM Data.ByteString.Lazy.Char8.putStrLn repr Data.ByteString.Lazy.Char8.empty test test",
          "hierarchy": "System Console Hawk Representable",
          "module": "System.Console.Hawk.Representable",
          "name": "ListAsRow",
          "package": "haskell-awk",
          "partial": "List As Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#t:ListAsRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that instantiate ListAsRows is a type that has a representation\n when is embedded inside a list\n\u003c/p\u003e\u003cp\u003eNote: we use this class for representing a list of chars as String\n instead of the standard list representation. Without this repr \u003ca\u003etest\u003c/a\u003e would\n yield [\u003ccode\u003et\u003c/code\u003e,\u003ccode\u003ee\u003c/code\u003e,\u003ccode\u003es\u003c/code\u003e,\u003ccode\u003er\u003c/code\u003e] instead of \u003ca\u003etest\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ Data.ByteString.Lazy.Char8.putStrLn $ repr Data.ByteString.Lazy.Char8.empty \"test\"\n\u003c/code\u003e\u003c/strong\u003etest\n\u003c/pre\u003e",
          "module": "System.Console.Hawk.Representable",
          "name": "ListAsRows",
          "package": "haskell-awk",
          "type": "class"
        },
        "index": {
          "description": "type that instantiate ListAsRows is type that has representation when is embedded inside list Note we use this class for representing list of chars as String instead of the standard list representation Without this repr test would yield instead of test For example mapM Data.ByteString.Lazy.Char8.putStrLn repr Data.ByteString.Lazy.Char8.empty test test",
          "hierarchy": "System Console Hawk Representable",
          "module": "System.Console.Hawk.Representable",
          "name": "ListAsRows",
          "package": "haskell-awk",
          "partial": "List As Rows",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#t:ListAsRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Row is something that can be expressed as a line. \n The output of repr' should be formatted such that\n it can be read and processed from the command line.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eIO.putStrLn $ show [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e[1,2,3,4]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.ByteString.Lazy.Char8.putStrLn $ repr' (Data.ByteString.Lazy.Char8.pack \" \") [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e1 2 3 4\n\u003c/pre\u003e",
          "module": "System.Console.Hawk.Representable",
          "name": "Row",
          "package": "haskell-awk",
          "type": "class"
        },
        "index": {
          "description": "Row is something that can be expressed as line The output of repr should be formatted such that it can be read and processed from the command line For example IO.putStrLn show Data.ByteString.Lazy.Char8.putStrLn repr Data.ByteString.Lazy.Char8.pack",
          "hierarchy": "System Console Hawk Representable",
          "module": "System.Console.Hawk.Representable",
          "name": "Row",
          "package": "haskell-awk",
          "partial": "Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that instantiate Rows is a type that can be represented as\n a list of rows, where typically a row is a line.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ Data.ByteString.Lazy.Char8.putStrLn $ repr (Data.ByteString.Lazy.Char8.singleton '\\n') [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e1\n2\n3\n4\n\u003c/pre\u003e",
          "module": "System.Console.Hawk.Representable",
          "name": "Rows",
          "package": "haskell-awk",
          "type": "class"
        },
        "index": {
          "description": "type that instantiate Rows is type that can be represented as list of rows where typically row is line For example mapM Data.ByteString.Lazy.Char8.putStrLn repr Data.ByteString.Lazy.Char8.singleton",
          "hierarchy": "System Console Hawk Representable",
          "module": "System.Console.Hawk.Representable",
          "name": "Rows",
          "package": "haskell-awk",
          "partial": "Rows",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#t:Rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Representable",
          "name": "listRepr",
          "package": "haskell-awk",
          "signature": "listRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Hawk Representable",
          "module": "System.Console.Hawk.Representable",
          "name": "listRepr",
          "package": "haskell-awk",
          "partial": "Repr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#v:listRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Representable",
          "name": "listRepr'",
          "package": "haskell-awk",
          "signature": "ByteString -\u003e [a] -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Hawk Representable",
          "module": "System.Console.Hawk.Representable",
          "name": "listRepr'",
          "normalized": "ByteString-\u003e[a]-\u003eByteString",
          "package": "haskell-awk",
          "partial": "Repr'",
          "signature": "ByteString-\u003e[a]-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#v:listRepr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a representation of the given value as list of strings.\n\u003c/p\u003e",
          "module": "System.Console.Hawk.Representable",
          "name": "repr",
          "package": "haskell-awk",
          "signature": "repr",
          "type": "method"
        },
        "index": {
          "description": "Return representation of the given value as list of strings",
          "hierarchy": "System Console Hawk Representable",
          "module": "System.Console.Hawk.Representable",
          "name": "repr",
          "package": "haskell-awk",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#v:repr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Representable",
          "name": "repr'",
          "package": "haskell-awk",
          "signature": "repr'",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Hawk Representable",
          "module": "System.Console.Hawk.Representable",
          "name": "repr'",
          "package": "haskell-awk",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#v:repr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is Hawk's runtime, it needs to be installed in order to evaluate Hawk\n   expressions. The API may change at any time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Hawk.Runtime",
          "name": "Runtime",
          "package": "haskell-awk",
          "type": "module"
        },
        "index": {
          "description": "This is Hawk runtime it needs to be installed in order to evaluate Hawk expressions The API may change at any time",
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "Runtime",
          "package": "haskell-awk",
          "partial": "Runtime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "c8pack",
          "package": "haskell-awk",
          "signature": "String -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "c8pack",
          "normalized": "String-\u003eByteString",
          "package": "haskell-awk",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:c8pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "listMap",
          "package": "haskell-awk",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "listMap",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "haskell-awk",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:listMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "listMapWords",
          "package": "haskell-awk",
          "signature": "([a] -\u003e b) -\u003e [[a]] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "listMapWords",
          "normalized": "([a]-\u003eb)-\u003e[[a]]-\u003e[b]",
          "package": "haskell-awk",
          "partial": "Map Words",
          "signature": "([a]-\u003eb)-\u003e[[a]]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:listMapWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "parseRows",
          "package": "haskell-awk",
          "signature": "ByteString -\u003e ByteString -\u003e [ByteString]",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "parseRows",
          "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
          "package": "haskell-awk",
          "partial": "Rows",
          "signature": "ByteString-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:parseRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "parseWords",
          "package": "haskell-awk",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e [[ByteString]]",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "parseWords",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003e[[ByteString]]",
          "package": "haskell-awk",
          "partial": "Words",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003e[[ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:parseWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "printRow",
          "package": "haskell-awk",
          "signature": "Bool-\u003e ByteString-\u003e a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "printRow",
          "normalized": "Bool-\u003eByteString-\u003ea-\u003eIO()",
          "package": "haskell-awk",
          "partial": "Row",
          "signature": "Bool-\u003eByteString-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:printRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "printRows",
          "package": "haskell-awk",
          "signature": "Bool-\u003e ByteString-\u003e ByteString-\u003e a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "printRows",
          "normalized": "Bool-\u003eByteString-\u003eByteString-\u003ea-\u003eIO()",
          "package": "haskell-awk",
          "partial": "Rows",
          "signature": "Bool-\u003eByteString-\u003eByteString-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:printRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "runExpr",
          "package": "haskell-awk",
          "signature": "Maybe FilePath-\u003e (Maybe FilePath -\u003e IO ByteString)-\u003e (ByteString -\u003e ByteString)-\u003e (ByteString -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "runExpr",
          "normalized": "Maybe FilePath-\u003e(Maybe FilePath-\u003eIO ByteString)-\u003e(ByteString-\u003eByteString)-\u003e(ByteString-\u003eIO())-\u003eIO()",
          "package": "haskell-awk",
          "partial": "Expr",
          "signature": "Maybe FilePath-\u003e(Maybe FilePath-\u003eIO ByteString)-\u003e(ByteString-\u003eByteString)-\u003e(ByteString-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:runExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "sc8pack",
          "package": "haskell-awk",
          "signature": "String -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "sc8pack",
          "normalized": "String-\u003eByteString",
          "package": "haskell-awk",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:sc8pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Hawk.Runtime",
          "name": "showRows",
          "package": "haskell-awk",
          "signature": "ByteString-\u003e ByteString-\u003e a-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Hawk Runtime",
          "module": "System.Console.Hawk.Runtime",
          "name": "showRows",
          "normalized": "ByteString-\u003eByteString-\u003ea-\u003eByteString",
          "package": "haskell-awk",
          "partial": "Rows",
          "signature": "ByteString-\u003eByteString-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:showRows"
      }
    }
  ]
]