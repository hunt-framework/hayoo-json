[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed by Hawk's runtime to write to stdout.\n   The API may change at any time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Hawk.IO",
        "fct-package": "haskell-awk",
        "fct-signature": "module",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Used by Hawk runtime to write to stdout The API may change at any time",
        "hierarchy": "System Console Hawk IO",
        "module": "System.Console.Hawk.IO",
        "name": "IO",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-IO.html#v:getInput",
      "description": {
        "fct-module": "System.Console.Hawk.IO",
        "fct-package": "haskell-awk",
        "fct-signature": "Maybe FilePath -\u003e IO ByteString",
        "fct-type": "function",
        "title": "getInput"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk IO",
        "module": "System.Console.Hawk.IO",
        "name": "getInput",
        "normalized": "Maybe FilePath-\u003eIO ByteString",
        "package": "haskell-awk",
        "partial": "Input",
        "signature": "Maybe FilePath-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-IO.html#v:printOutput",
      "description": {
        "fct-module": "System.Console.Hawk.IO",
        "fct-package": "haskell-awk",
        "fct-signature": "ByteString -\u003e IO ()",
        "fct-type": "function",
        "title": "printOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk IO",
        "module": "System.Console.Hawk.IO",
        "name": "printOutput",
        "normalized": "ByteString-\u003eIO()",
        "package": "haskell-awk",
        "partial": "Output",
        "signature": "ByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed by Hawk's runtime to format the output of a Hawk expression.\n    You can use this from your user prelude if you want Hawk to print\n    your custom datatypes in a console-friendly format.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Hawk.Representable",
        "fct-package": "haskell-awk",
        "fct-signature": "module",
        "fct-type": "module",
        "title": "Representable"
      },
      "index": {
        "description": "Used by Hawk runtime to format the output of Hawk expression You can use this from your user prelude if you want Hawk to print your custom datatypes in console-friendly format",
        "hierarchy": "System Console Hawk Representable",
        "module": "System.Console.Hawk.Representable",
        "name": "Representable",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "Representable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#t:ListAsRow",
      "description": {
        "fct-descr": "\u003cp\u003eA type that instantiate ListAsRow is a type that has a representation\n when is embedded inside a list\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ Data.ByteString.Lazy.Char8.putStrLn $ repr Data.ByteString.Lazy.Char8.empty \"test\"\n\u003c/code\u003e\u003c/strong\u003etest\n\u003c/pre\u003e",
        "fct-module": "System.Console.Hawk.Representable",
        "fct-package": "haskell-awk",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "ListAsRow"
      },
      "index": {
        "description": "type that instantiate ListAsRow is type that has representation when is embedded inside list For example mapM Data.ByteString.Lazy.Char8.putStrLn repr Data.ByteString.Lazy.Char8.empty test test",
        "hierarchy": "System Console Hawk Representable",
        "module": "System.Console.Hawk.Representable",
        "name": "ListAsRow",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "List As Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#t:ListAsRows",
      "description": {
        "fct-descr": "\u003cp\u003eA type that instantiate ListAsRows is a type that has a representation\n when is embedded inside a list\n\u003c/p\u003e\u003cp\u003eNote: we use this class for representing a list of chars as String\n instead of the standard list representation. Without this repr \u003ca\u003etest\u003c/a\u003e would\n yield [\u003ccode\u003et\u003c/code\u003e,\u003ccode\u003ee\u003c/code\u003e,\u003ccode\u003es\u003c/code\u003e,\u003ccode\u003er\u003c/code\u003e] instead of \u003ca\u003etest\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ Data.ByteString.Lazy.Char8.putStrLn $ repr Data.ByteString.Lazy.Char8.empty \"test\"\n\u003c/code\u003e\u003c/strong\u003etest\n\u003c/pre\u003e",
        "fct-module": "System.Console.Hawk.Representable",
        "fct-package": "haskell-awk",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "ListAsRows"
      },
      "index": {
        "description": "type that instantiate ListAsRows is type that has representation when is embedded inside list Note we use this class for representing list of chars as String instead of the standard list representation Without this repr test would yield instead of test For example mapM Data.ByteString.Lazy.Char8.putStrLn repr Data.ByteString.Lazy.Char8.empty test test",
        "hierarchy": "System Console Hawk Representable",
        "module": "System.Console.Hawk.Representable",
        "name": "ListAsRows",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "List As Rows",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#t:Row",
      "description": {
        "fct-descr": "\u003cp\u003eA Row is something that can be expressed as a line. \n The output of repr' should be formatted such that\n it can be read and processed from the command line.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eIO.putStrLn $ show [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e[1,2,3,4]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.ByteString.Lazy.Char8.putStrLn $ repr' (Data.ByteString.Lazy.Char8.pack \" \") [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e1 2 3 4\n\u003c/pre\u003e",
        "fct-module": "System.Console.Hawk.Representable",
        "fct-package": "haskell-awk",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Row"
      },
      "index": {
        "description": "Row is something that can be expressed as line The output of repr should be formatted such that it can be read and processed from the command line For example IO.putStrLn show Data.ByteString.Lazy.Char8.putStrLn repr Data.ByteString.Lazy.Char8.pack",
        "hierarchy": "System Console Hawk Representable",
        "module": "System.Console.Hawk.Representable",
        "name": "Row",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#t:Rows",
      "description": {
        "fct-descr": "\u003cp\u003eA type that instantiate Rows is a type that can be represented as\n a list of rows, where typically a row is a line.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ Data.ByteString.Lazy.Char8.putStrLn $ repr (Data.ByteString.Lazy.Char8.singleton '\\n') [1,2,3,4]\n\u003c/code\u003e\u003c/strong\u003e1\n2\n3\n4\n\u003c/pre\u003e",
        "fct-module": "System.Console.Hawk.Representable",
        "fct-package": "haskell-awk",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Rows"
      },
      "index": {
        "description": "type that instantiate Rows is type that can be represented as list of rows where typically row is line For example mapM Data.ByteString.Lazy.Char8.putStrLn repr Data.ByteString.Lazy.Char8.singleton",
        "hierarchy": "System Console Hawk Representable",
        "module": "System.Console.Hawk.Representable",
        "name": "Rows",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "Rows",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#v:listRepr",
      "description": {
        "fct-module": "System.Console.Hawk.Representable",
        "fct-package": "haskell-awk",
        "fct-signature": "listRepr",
        "fct-type": "method",
        "title": "listRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Representable",
        "module": "System.Console.Hawk.Representable",
        "name": "listRepr",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "Repr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#v:listRepr-39-",
      "description": {
        "fct-module": "System.Console.Hawk.Representable",
        "fct-package": "haskell-awk",
        "fct-signature": "ByteString -\u003e [a] -\u003e ByteString",
        "fct-type": "method",
        "title": "listRepr'"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Representable",
        "module": "System.Console.Hawk.Representable",
        "name": "listRepr'",
        "normalized": "ByteString-\u003e[a]-\u003eByteString",
        "package": "haskell-awk",
        "partial": "Repr'",
        "signature": "ByteString-\u003e[a]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#v:repr",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a representation of the given value as list of strings.\n\u003c/p\u003e",
        "fct-module": "System.Console.Hawk.Representable",
        "fct-package": "haskell-awk",
        "fct-signature": "repr",
        "fct-type": "method",
        "title": "repr"
      },
      "index": {
        "description": "Return representation of the given value as list of strings",
        "hierarchy": "System Console Hawk Representable",
        "module": "System.Console.Hawk.Representable",
        "name": "repr",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Representable.html#v:repr-39-",
      "description": {
        "fct-module": "System.Console.Hawk.Representable",
        "fct-package": "haskell-awk",
        "fct-signature": "repr'",
        "fct-type": "method",
        "title": "repr'"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Representable",
        "module": "System.Console.Hawk.Representable",
        "name": "repr'",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is Hawk's runtime, it needs to be installed in order to evaluate Hawk\n   expressions. The API may change at any time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "module",
        "fct-type": "module",
        "title": "Runtime"
      },
      "index": {
        "description": "This is Hawk runtime it needs to be installed in order to evaluate Hawk expressions The API may change at any time",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "Runtime",
        "normalized": "",
        "package": "haskell-awk",
        "partial": "Runtime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:c8pack",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "String -\u003e ByteString",
        "fct-type": "function",
        "title": "c8pack"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "c8pack",
        "normalized": "String-\u003eByteString",
        "package": "haskell-awk",
        "partial": "",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:listMap",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
        "fct-type": "function",
        "title": "listMap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "listMap",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
        "package": "haskell-awk",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:listMapWords",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "([a] -\u003e b) -\u003e [[a]] -\u003e [b]",
        "fct-type": "function",
        "title": "listMapWords"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "listMapWords",
        "normalized": "([a]-\u003eb)-\u003e[[a]]-\u003e[b]",
        "package": "haskell-awk",
        "partial": "Map Words",
        "signature": "([a]-\u003eb)-\u003e[[a]]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:parseRows",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "ByteString -\u003e ByteString -\u003e [ByteString]",
        "fct-type": "function",
        "title": "parseRows"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "parseRows",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]",
        "package": "haskell-awk",
        "partial": "Rows",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:parseWords",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e [[ByteString]]",
        "fct-type": "function",
        "title": "parseWords"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "parseWords",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003e[[ByteString]]",
        "package": "haskell-awk",
        "partial": "Words",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003e[[ByteString]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:printRow",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "Bool-\u003e ByteString-\u003e a-\u003e IO ()",
        "fct-type": "function",
        "title": "printRow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "printRow",
        "normalized": "Bool-\u003eByteString-\u003ea-\u003eIO()",
        "package": "haskell-awk",
        "partial": "Row",
        "signature": "Bool-\u003eByteString-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:printRows",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "Bool-\u003e ByteString-\u003e ByteString-\u003e a-\u003e IO ()",
        "fct-type": "function",
        "title": "printRows"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "printRows",
        "normalized": "Bool-\u003eByteString-\u003eByteString-\u003ea-\u003eIO()",
        "package": "haskell-awk",
        "partial": "Rows",
        "signature": "Bool-\u003eByteString-\u003eByteString-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:runExpr",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "Maybe FilePath-\u003e (Maybe FilePath -\u003e IO ByteString)-\u003e (ByteString -\u003e ByteString)-\u003e (ByteString -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "runExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "runExpr",
        "normalized": "Maybe FilePath-\u003e(Maybe FilePath-\u003eIO ByteString)-\u003e(ByteString-\u003eByteString)-\u003e(ByteString-\u003eIO())-\u003eIO()",
        "package": "haskell-awk",
        "partial": "Expr",
        "signature": "Maybe FilePath-\u003e(Maybe FilePath-\u003eIO ByteString)-\u003e(ByteString-\u003eByteString)-\u003e(ByteString-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:sc8pack",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "String -\u003e ByteString",
        "fct-type": "function",
        "title": "sc8pack"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "sc8pack",
        "normalized": "String-\u003eByteString",
        "package": "haskell-awk",
        "partial": "",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-awk/docs/System-Console-Hawk-Runtime.html#v:showRows",
      "description": {
        "fct-module": "System.Console.Hawk.Runtime",
        "fct-package": "haskell-awk",
        "fct-signature": "ByteString-\u003e ByteString-\u003e a-\u003e ByteString",
        "fct-type": "function",
        "title": "showRows"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Hawk Runtime",
        "module": "System.Console.Hawk.Runtime",
        "name": "showRows",
        "normalized": "ByteString-\u003eByteString-\u003ea-\u003eByteString",
        "package": "haskell-awk",
        "partial": "Rows",
        "signature": "ByteString-\u003eByteString-\u003ea-\u003eByteString"
      }
    }
  }
]