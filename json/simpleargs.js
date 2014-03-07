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
        "word": "simpleargs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide a \u003ccode\u003egetArgs\u003c/code\u003e function that is slightly more advanced than the default, without\n   going the entire \u003ccode\u003eSystem.Console.GetOpt\u003c/code\u003e route.\n\u003c/p\u003e\u003cp\u003eThe idea is to return a tuple (including the 0-tuple \u003ccode\u003e()\u003c/code\u003e or 1-tuple)\n   if the supplied arguments match the demands of the program (in number and in type)\n   or a sensible error message if not.\n   The returned tuple must contain elements that are in the \u003ccode\u003eTypeable\u003c/code\u003e and \u003ccode\u003eRead\u003c/code\u003e classes.\n\u003c/p\u003e\u003cp\u003eAs an examle, here's a simple line counting program. \n Here \u003ccode\u003egetArgs\u003c/code\u003e makes the program take a single parameter, and returns it\n as a \u003ccode\u003eString\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e main = getArgs \u003e\u003e= readFile \u003e\u003e= print . length . lines\n\u003c/pre\u003e\u003cp\u003eThis program will take two parameters, a \u003ccode\u003eChar\u003c/code\u003e and a \u003ccode\u003eString\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e main = do\n    (ch,name) \u003c- getArgs\n    putStrLn (ch:\"Name is: \"++name)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.SimpleArgs",
          "name": "SimpleArgs",
          "package": "simpleargs",
          "source": "src/System-SimpleArgs.html",
          "type": "module"
        },
        "index": {
          "description": "Provide getArgs function that is slightly more advanced than the default without going the entire System.Console.GetOpt route The idea is to return tuple including the tuple or tuple if the supplied arguments match the demands of the program in number and in type or sensible error message if not The returned tuple must contain elements that are in the Typeable and Read classes As an examle here simple line counting program Here getArgs makes the program take single parameter and returns it as String main getArgs readFile print length lines This program will take two parameters Char and String main do ch name getArgs putStrLn ch Name is name",
          "hierarchy": "System SimpleArgs",
          "module": "System.SimpleArgs",
          "name": "SimpleArgs",
          "package": "simpleargs",
          "partial": "Simple Args",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simpleargs/docs/System-SimpleArgs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.SimpleArgs",
          "name": "Args",
          "package": "simpleargs",
          "source": "src/System-SimpleArgs.html#Args",
          "type": "class"
        },
        "index": {
          "hierarchy": "System SimpleArgs",
          "module": "System.SimpleArgs",
          "name": "Args",
          "package": "simpleargs",
          "partial": "Args",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simpleargs/docs/System-SimpleArgs.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn appropriately typed program arguments.\n\u003c/p\u003e",
          "module": "System.SimpleArgs",
          "name": "getArgs",
          "package": "simpleargs",
          "signature": "IO a",
          "source": "src/System-SimpleArgs.html#getArgs",
          "type": "method"
        },
        "index": {
          "description": "Return appropriately typed program arguments",
          "hierarchy": "System SimpleArgs",
          "module": "System.SimpleArgs",
          "name": "getArgs",
          "package": "simpleargs",
          "partial": "Args",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simpleargs/docs/System-SimpleArgs.html#v:getArgs"
      }
    }
  ]
]