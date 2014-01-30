[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htrace/docs/Debug-HTrace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLike Debug.Trace.trace, but with indentation corresponding to the\n level of nesting in the evaluation tree of expressions under htrace.\n WARNING: Currently only works in single-threaded programs.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e xs = map (\\x -\u003e htrace (show x) x) [1..10]\n\n s = foldl (\\a b -\u003e htrace \"+\" (a+b)) 0 xs\n s2 = foldl' (\\a b -\u003e htrace \"+\" (a+b)) 0 xs\n\n b = htrace \"b\" 2\n c = htrace \"c\" 3\n a = htrace \"a\" $ b + c\n x = htrace \"x\" $ b + c\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ea\n\u003c/code\u003e\u003c/strong\u003ea\n    b\n    c\n5\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ex\n\u003c/code\u003e\u003c/strong\u003ex\n5\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003es\n\u003c/code\u003e\u003c/strong\u003e+\n    +\n        +\n            +\n                +\n                    +\n                        +\n                            +\n                                +\n                                    +\n                                        1\n                                    2\n                                3\n                            4\n                        5\n                    6\n                7\n            8\n        9\n    10\n55\n\u003c/pre\u003e\u003cp\u003e(reload)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003es2\n\u003c/code\u003e\u003c/strong\u003e+\n    1\n+\n    2\n+\n    3\n+\n    4\n+\n    5\n+\n    6\n+\n    7\n+\n    8\n+\n    9\n+\n    10\n55\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Debug.HTrace",
        "fct-package": "htrace",
        "fct-signature": "module",
        "fct-source": "src/Debug-HTrace.html",
        "fct-type": "module",
        "title": "HTrace"
      },
      "index": {
        "description": "Like Debug.Trace.trace but with indentation corresponding to the level of nesting in the evaluation tree of expressions under htrace WARNING Currently only works in single-threaded programs Example xs map htrace show foldl htrace xs s2 foldl htrace xs htrace htrace htrace htrace reload s2",
        "hierarchy": "Debug HTrace",
        "module": "Debug.HTrace",
        "name": "HTrace",
        "normalized": "",
        "package": "htrace",
        "partial": "HTrace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htrace/docs/Debug-HTrace.html#v:htrace",
      "description": {
        "fct-module": "Debug.HTrace",
        "fct-package": "htrace",
        "fct-signature": "[Char] -\u003e a -\u003e a",
        "fct-source": "src/Debug-HTrace.html#htrace",
        "fct-type": "function",
        "title": "htrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug HTrace",
        "module": "Debug.HTrace",
        "name": "htrace",
        "normalized": "[Char]-\u003ea-\u003ea",
        "package": "htrace",
        "partial": "",
        "signature": "[Char]-\u003ea-\u003ea"
      }
    }
  }
]