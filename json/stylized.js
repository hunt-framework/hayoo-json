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
        "word": "stylized"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI.Stylized",
          "name": "ColourOption",
          "package": "stylized",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#ColourOption",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "ColourOption",
          "package": "stylized",
          "partial": "Colour Option",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#t:ColourOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI.Stylized",
          "name": "Style",
          "package": "stylized",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#Style",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "Style",
          "package": "stylized",
          "partial": "Style",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI.Stylized",
          "name": "StyleOption",
          "package": "stylized",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#StyleOption",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "StyleOption",
          "package": "stylized",
          "partial": "Style Option",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#t:StyleOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given an handle, for each item set style and put string followed by newline\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutLnS",
          "package": "stylized",
          "signature": "Handle -\u003e [(Style, String)] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#hPutLnS",
          "type": "function"
        },
        "index": {
          "description": "Given an handle for each item set style and put string followed by newline",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutLnS",
          "normalized": "Handle-\u003e[(Style,String)]-\u003eIO()",
          "package": "stylized",
          "partial": "Put Ln",
          "signature": "Handle-\u003e[(Style,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:hPutLnS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a function mapping some type t to \u003ctt\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/tt\u003e, return a function\n  behaving like \u003ctt\u003e\u003ca\u003ehPutLnS\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutLnT",
          "package": "stylized",
          "signature": "(t -\u003e Style) -\u003e Handle -\u003e [(t, String)] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#hPutLnT",
          "type": "function"
        },
        "index": {
          "description": "Given function mapping some type to Style return function behaving like hPutLnS",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutLnT",
          "normalized": "(a-\u003eStyle)-\u003eHandle-\u003e[(a,String)]-\u003eIO()",
          "package": "stylized",
          "partial": "Put Ln",
          "signature": "(t-\u003eStyle)-\u003eHandle-\u003e[(t,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:hPutLnT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given an handle, for each item set style and put string\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutS",
          "package": "stylized",
          "signature": "Handle -\u003e [(Style, String)] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#hPutS",
          "type": "function"
        },
        "index": {
          "description": "Given an handle for each item set style and put string",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutS",
          "normalized": "Handle-\u003e[(Style,String)]-\u003eIO()",
          "package": "stylized",
          "partial": "Put",
          "signature": "Handle-\u003e[(Style,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:hPutS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given an handle, set style and put string followed by newline\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutStrLnS",
          "package": "stylized",
          "signature": "Handle -\u003e Style -\u003e String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#hPutStrLnS",
          "type": "function"
        },
        "index": {
          "description": "Given an handle set style and put string followed by newline",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutStrLnS",
          "normalized": "Handle-\u003eStyle-\u003eString-\u003eIO()",
          "package": "stylized",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eStyle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:hPutStrLnS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given an handle, set style and put string\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutStrS",
          "package": "stylized",
          "signature": "Handle -\u003e Style -\u003e String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#hPutStrS",
          "type": "function"
        },
        "index": {
          "description": "Given an handle set style and put string",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutStrS",
          "normalized": "Handle-\u003eStyle-\u003eString-\u003eIO()",
          "package": "stylized",
          "partial": "Put Str",
          "signature": "Handle-\u003eStyle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:hPutStrS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a function mapping some type t to \u003ctt\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/tt\u003e, return a function\n  behaving like \u003ctt\u003e\u003ca\u003ehPutS\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutT",
          "package": "stylized",
          "signature": "(t -\u003e Style) -\u003e Handle -\u003e [(t, String)] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#hPutT",
          "type": "function"
        },
        "index": {
          "description": "Given function mapping some type to Style return function behaving like hPutS",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "hPutT",
          "normalized": "(a-\u003eStyle)-\u003eHandle-\u003e[(a,String)]-\u003eIO()",
          "package": "stylized",
          "partial": "Put",
          "signature": "(t-\u003eStyle)-\u003eHandle-\u003e[(t,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:hPutT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given an handle, reset graphic rendition\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "hResetGR",
          "package": "stylized",
          "signature": "Handle -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#hResetGR",
          "type": "function"
        },
        "index": {
          "description": "Given an handle reset graphic rendition",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "hResetGR",
          "normalized": "Handle-\u003eIO()",
          "package": "stylized",
          "partial": "Reset GR",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:hResetGR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "On stdout, for each item set style and put string followed by newline\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "putLnS",
          "package": "stylized",
          "signature": "[(Style, String)] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#putLnS",
          "type": "function"
        },
        "index": {
          "description": "On stdout for each item set style and put string followed by newline",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "putLnS",
          "normalized": "[(Style,String)]-\u003eIO()",
          "package": "stylized",
          "partial": "Ln",
          "signature": "[(Style,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:putLnS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a function mapping some type t to \u003ctt\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/tt\u003e, return a function\n  behaving like \u003ctt\u003e\u003ca\u003eputLnS\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "putLnT",
          "package": "stylized",
          "signature": "(t -\u003e Style) -\u003e [(t, String)] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#putLnT",
          "type": "function"
        },
        "index": {
          "description": "Given function mapping some type to Style return function behaving like putLnS",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "putLnT",
          "normalized": "(a-\u003eStyle)-\u003e[(a,String)]-\u003eIO()",
          "package": "stylized",
          "partial": "Ln",
          "signature": "(t-\u003eStyle)-\u003e[(t,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:putLnT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "On stdout, for each item set style and put string\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "putS",
          "package": "stylized",
          "signature": "[(Style, String)] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#putS",
          "type": "function"
        },
        "index": {
          "description": "On stdout for each item set style and put string",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "putS",
          "normalized": "[(Style,String)]-\u003eIO()",
          "package": "stylized",
          "signature": "[(Style,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:putS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "On stdout, set style and put string followed by newline\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "putStrLnS",
          "package": "stylized",
          "signature": "Style -\u003e String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#putStrLnS",
          "type": "function"
        },
        "index": {
          "description": "On stdout set style and put string followed by newline",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "putStrLnS",
          "normalized": "Style-\u003eString-\u003eIO()",
          "package": "stylized",
          "partial": "Str Ln",
          "signature": "Style-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:putStrLnS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "On stdout, set style and put string\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "putStrS",
          "package": "stylized",
          "signature": "Style -\u003e String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#putStrS",
          "type": "function"
        },
        "index": {
          "description": "On stdout set style and put string",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "putStrS",
          "normalized": "Style-\u003eString-\u003eIO()",
          "package": "stylized",
          "partial": "Str",
          "signature": "Style-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:putStrS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a function mapping some type t to \u003ctt\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/tt\u003e, return a function\n  behaving like \u003ctt\u003e\u003ca\u003eputS\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "putT",
          "package": "stylized",
          "signature": "(t -\u003e Style) -\u003e [(t, String)] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#putT",
          "type": "function"
        },
        "index": {
          "description": "Given function mapping some type to Style return function behaving like putS",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "putT",
          "normalized": "(a-\u003eStyle)-\u003e[(a,String)]-\u003eIO()",
          "package": "stylized",
          "signature": "(t-\u003eStyle)-\u003e[(t,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:putT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "On stdout, reset graphic rendition\n",
          "module": "System.Console.ANSI.Stylized",
          "name": "resetGR",
          "package": "stylized",
          "signature": "IO ()",
          "source": "http://hackage.haskell.org/package/stylized/docs/src/System-Console-ANSI-Stylized.html#resetGR",
          "type": "function"
        },
        "index": {
          "description": "On stdout reset graphic rendition",
          "hierarchy": "System Console ANSI Stylized",
          "module": "System.Console.ANSI.Stylized",
          "name": "resetGR",
          "normalized": "IO()",
          "package": "stylized",
          "partial": "GR",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stylized/docs/System-Console-ANSI-Stylized.html#v:resetGR"
      }
    }
  ]
]