[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fibonacci/docs/Data-Numbers-Fibonacci.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast computation of Fibonacci numbers. Use version \u003ccode\u003e0.1.*\u003c/code\u003e if you\n prefer the Fibonacci sequence to start with one instead of\n zero. Version \u003ccode\u003e0.2.*\u003c/code\u003e adds correct handling of negative arguments\n and changes the implementation to satisfy \u003ccode\u003efib 0 = 0\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://en.wikipedia.org/wiki/Fibonacci_number#Matrix_form\u003c/a\u003e for\n a description of the employed method.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Numbers.Fibonacci",
        "fct-package": "fibonacci",
        "fct-signature": "module",
        "fct-source": "src/Data-Numbers-Fibonacci.html",
        "fct-type": "module",
        "title": "Fibonacci"
      },
      "index": {
        "description": "Fast computation of Fibonacci numbers Use version if you prefer the Fibonacci sequence to start with one instead of zero Version adds correct handling of negative arguments and changes the implementation to satisfy fib See http en.wikipedia.org wiki Fibonacci number Matrix form for description of the employed method",
        "hierarchy": "Data Numbers Fibonacci",
        "module": "Data.Numbers.Fibonacci",
        "name": "Fibonacci",
        "normalized": "",
        "package": "fibonacci",
        "partial": "Fibonacci",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fibonacci/docs/Data-Numbers-Fibonacci.html#v:fib",
      "description": {
        "fct-descr": "\u003cp\u003eComputes Fibonacci numbers. Yields the same results as\n\u003c/p\u003e\u003cpre\u003e fib 0         = 0\n fib 1         = 1\n fib n | n \u003e 1 = fib (n-2) + fib (n-1)\n       | n \u003c 0 = (-1)^(1-n) * fib (-n)\n\u003c/pre\u003e\u003cp\u003ebut more efficiently.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e map fib [0..9]\n [0,1,1,2,3,5,8,13,21,34]\n ghci\u003e map (fib . negate) [0..9]\n [0,1,-1,2,-3,5,-8,13,-21,34]\n ghci\u003e length . show $ fib 10000000\n 2089877\n\u003c/pre\u003e",
        "fct-module": "Data.Numbers.Fibonacci",
        "fct-package": "fibonacci",
        "fct-signature": "int -\u003e num",
        "fct-source": "src/Data-Numbers-Fibonacci.html#fib",
        "fct-type": "function",
        "title": "fib"
      },
      "index": {
        "description": "Computes Fibonacci numbers Yields the same results as fib fib fib fib n-2 fib n-1 fib but more efficiently Examples ghci map fib ghci map fib negate ghci length show fib",
        "hierarchy": "Data Numbers Fibonacci",
        "module": "Data.Numbers.Fibonacci",
        "name": "fib",
        "normalized": "a-\u003eb",
        "package": "fibonacci",
        "partial": "",
        "signature": "int-\u003enum"
      }
    }
  }
]