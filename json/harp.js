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
        "word": "harp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions that simulate the behavior of regular patterns\n using a Match monad for parsing lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Harp.Match",
          "name": "Match",
          "package": "harp",
          "source": "src/Harp-Match.html",
          "type": "module"
        },
        "index": {
          "description": "Functions that simulate the behavior of regular patterns using Match monad for parsing lists",
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "Match",
          "package": "harp",
          "partial": "Match",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Match monad\n\u003c/p\u003e",
          "module": "Harp.Match",
          "name": "Match",
          "package": "harp",
          "source": "src/Harp-Match.html#Match",
          "type": "data"
        },
        "index": {
          "description": "The Match monad",
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "Match",
          "package": "harp",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harp.Match",
          "name": "(+++)",
          "package": "harp",
          "signature": "Match e a -\u003e Match e a -\u003e Match e a",
          "source": "src/Harp-Match.html#%2B%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "(+++) +++",
          "normalized": "Match a b-\u003eMatch a b-\u003eMatch a b",
          "package": "harp",
          "signature": "Match e a-\u003eMatch e a-\u003eMatch e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harp.Match",
          "name": "baseMatch",
          "package": "harp",
          "signature": "(a -\u003e Maybe b) -\u003e Match a (a, b)",
          "source": "src/Harp-Match.html#baseMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "baseMatch",
          "normalized": "(a-\u003eMaybe b)-\u003eMatch a(a,b)",
          "package": "harp",
          "partial": "Match",
          "signature": "(a-\u003eMaybe b)-\u003eMatch a(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:baseMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harp.Match",
          "name": "foldComp",
          "package": "harp",
          "signature": "[[a] -\u003e [a]] -\u003e [a] -\u003e [a]",
          "source": "src/Harp-Match.html#foldComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "foldComp",
          "normalized": "[[a]-\u003e[a]]-\u003e[a]-\u003e[a]",
          "package": "harp",
          "partial": "Comp",
          "signature": "[[a]-\u003e[a]]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:foldComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harp.Match",
          "name": "gManyMatch",
          "package": "harp",
          "signature": "Match e a -\u003e Match e [a]",
          "source": "src/Harp-Match.html#gManyMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "gManyMatch",
          "normalized": "Match a b-\u003eMatch a[b]",
          "package": "harp",
          "partial": "Many Match",
          "signature": "Match e a-\u003eMatch e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:gManyMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harp.Match",
          "name": "manyMatch",
          "package": "harp",
          "signature": "Match e a -\u003e Match e [a]",
          "source": "src/Harp-Match.html#manyMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "manyMatch",
          "normalized": "Match a b-\u003eMatch a[b]",
          "package": "harp",
          "partial": "Match",
          "signature": "Match e a-\u003eMatch e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:manyMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harp.Match",
          "name": "runMatch",
          "package": "harp",
          "signature": "Match e a -\u003e [e] -\u003e Maybe a",
          "source": "src/Harp-Match.html#runMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "runMatch",
          "normalized": "Match a b-\u003e[a]-\u003eMaybe b",
          "package": "harp",
          "partial": "Match",
          "signature": "Match e a-\u003e[e]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:runMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harp.Match",
          "name": "unzip0",
          "package": "harp",
          "signature": "[()] -\u003e ()",
          "source": "src/Harp-Match.html#unzip0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "unzip0",
          "normalized": "[()]-\u003e()",
          "package": "harp",
          "signature": "[()]-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:unzip0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harp.Match",
          "name": "unzip1",
          "package": "harp",
          "signature": "[a] -\u003e [a]",
          "source": "src/Harp-Match.html#unzip1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "unzip1",
          "normalized": "[a]-\u003e[a]",
          "package": "harp",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:unzip1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harp.Match",
          "name": "unzip2",
          "package": "harp",
          "signature": "[(a, b)] -\u003e ([a], [b])",
          "source": "src/Harp-Match.html#unzip2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "unzip2",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "harp",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:unzip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip3\u003c/a\u003e\u003c/code\u003e function takes a list of triples and returns three\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Harp.Match",
          "name": "unzip3",
          "package": "harp",
          "signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
          "type": "function"
        },
        "index": {
          "description": "The unzip3 function takes list of triples and returns three lists analogous to unzip",
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "unzip3",
          "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
          "package": "harp",
          "signature": "[(a,b,c)]-\u003e([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip4\u003c/a\u003e\u003c/code\u003e function takes a list of quadruples and returns four\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Harp.Match",
          "name": "unzip4",
          "package": "harp",
          "signature": "[(a, b, c, d)] -\u003e ([a], [b], [c], [d])",
          "type": "function"
        },
        "index": {
          "description": "The unzip4 function takes list of quadruples and returns four lists analogous to unzip",
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "unzip4",
          "normalized": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "package": "harp",
          "signature": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip5\u003c/a\u003e\u003c/code\u003e function takes a list of five-tuples and returns five\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Harp.Match",
          "name": "unzip5",
          "package": "harp",
          "signature": "[(a, b, c, d, e)] -\u003e ([a], [b], [c], [d], [e])",
          "type": "function"
        },
        "index": {
          "description": "The unzip5 function takes list of five-tuples and returns five lists analogous to unzip",
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "unzip5",
          "normalized": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "package": "harp",
          "signature": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip6\u003c/a\u003e\u003c/code\u003e function takes a list of six-tuples and returns six\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Harp.Match",
          "name": "unzip6",
          "package": "harp",
          "signature": "[(a, b, c, d, e, f)] -\u003e ([a], [b], [c], [d], [e], [f])",
          "type": "function"
        },
        "index": {
          "description": "The unzip6 function takes list of six-tuples and returns six lists analogous to unzip",
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "unzip6",
          "normalized": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "package": "harp",
          "signature": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip7\u003c/a\u003e\u003c/code\u003e function takes a list of seven-tuples and returns\n seven lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Harp.Match",
          "name": "unzip7",
          "package": "harp",
          "signature": "[(a, b, c, d, e, f, g)] -\u003e ([a], [b], [c], [d], [e], [f], [g])",
          "type": "function"
        },
        "index": {
          "description": "The unzip7 function takes list of seven-tuples and returns seven lists analogous to unzip",
          "hierarchy": "Harp Match",
          "module": "Harp.Match",
          "name": "unzip7",
          "normalized": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "package": "harp",
          "signature": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harp/docs/Harp-Match.html#v:unzip7"
      }
    }
  ]
]