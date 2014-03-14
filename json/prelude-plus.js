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
        "word": "prelude-plus"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides couple utility functions and re-exports some\n  useful modules.\n\u003c/p\u003e\u003cp\u003eSome modules are useful but names of functions in them are\n  confliting to Prelude's one. So if we want to use them, we need\n  qualified import or specifing no implict importing prelude.\n\u003c/p\u003e\u003cp\u003eThis library takes over these boilerplates.\n\u003c/p\u003e\u003cp\u003eSo, write after your module header\n\u003c/p\u003e\u003cpre\u003e import Prelude ()\n import Prelude.Plus\n\n -- Then your code goes here.\n\u003c/pre\u003e\u003cp\u003eSo you can use function \u003ccode\u003eor\u003c/code\u003e has type \u003ccode\u003eTraversable t =\u003e t Bool -\u003e\n  Bool\u003c/code\u003e, \u003ccode\u003eputStrLn\u003c/code\u003e works for any utf8 strings, even Applicative\n  operators, etc.\n\u003c/p\u003e\u003cp\u003eYes, \u003ca\u003eControl.Applicative\u003c/a\u003e doesn't need qualified importing but\n  importing such modules are also boilerplates, IMO.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Prelude.Plus",
          "name": "Plus",
          "package": "prelude-plus",
          "source": "src/Prelude-Plus.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides couple utility functions and re-exports some useful modules Some modules are useful but names of functions in them are confliting to Prelude one So if we want to use them we need qualified import or specifing no implict importing prelude This library takes over these boilerplates So write after your module header import Prelude import Prelude.Plus Then your code goes here So you can use function or has type Traversable Bool Bool putStrLn works for any utf8 strings even Applicative operators etc Yes Control.Applicative doesn need qualified importing but importing such modules are also boilerplates IMO",
          "hierarchy": "Prelude Plus",
          "module": "Prelude.Plus",
          "name": "Plus",
          "package": "prelude-plus",
          "partial": "Plus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prelude-plus/docs/Prelude-Plus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Plus",
          "name": "dup",
          "package": "prelude-plus",
          "signature": "a -\u003e (a, a)",
          "source": "src/Prelude-Plus.html#dup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Plus",
          "module": "Prelude.Plus",
          "name": "dup",
          "normalized": "a-\u003e(a,a)",
          "package": "prelude-plus",
          "signature": "a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prelude-plus/docs/Prelude-Plus.html#v:dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Plus",
          "name": "null",
          "package": "prelude-plus",
          "signature": "t a -\u003e Bool",
          "source": "src/Prelude-Plus.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Plus",
          "module": "Prelude.Plus",
          "name": "null",
          "normalized": "a b-\u003eBool",
          "package": "prelude-plus",
          "signature": "t a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prelude-plus/docs/Prelude-Plus.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Plus",
          "name": "size",
          "package": "prelude-plus",
          "signature": "t a -\u003e Int",
          "source": "src/Prelude-Plus.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Plus",
          "module": "Prelude.Plus",
          "name": "size",
          "normalized": "a b-\u003eInt",
          "package": "prelude-plus",
          "signature": "t a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prelude-plus/docs/Prelude-Plus.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Plus",
          "name": "swap",
          "package": "prelude-plus",
          "signature": "(a, b) -\u003e (b, a)",
          "source": "src/Prelude-Plus.html#swap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Plus",
          "module": "Prelude.Plus",
          "name": "swap",
          "normalized": "(a,b)-\u003e(b,a)",
          "package": "prelude-plus",
          "signature": "(a,b)-\u003e(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prelude-plus/docs/Prelude-Plus.html#v:swap"
      }
    }
  ]
]