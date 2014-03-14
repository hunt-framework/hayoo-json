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
        "word": "th-printf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with behavior as close to realistically possible to\n C printf, including variadic width and precision specifiers.\n\u003c/p\u003e\u003cp\u003eThe only thing you don't get with this package is printing pointers\n (although if you really want this behavior, send a pull request).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Printf.TH",
          "name": "TH",
          "package": "th-printf",
          "source": "src/Text-Printf-TH.html",
          "type": "module"
        },
        "index": {
          "description": "module with behavior as close to realistically possible to printf including variadic width and precision specifiers The only thing you don get with this package is printing pointers although if you really want this behavior send pull request",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "TH",
          "package": "th-printf",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003es\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.TH",
          "name": "lb",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#lb",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces lazy ByteString See",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "lb",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces and prints lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003esP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.TH",
          "name": "lbP",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#lbP",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces and prints lazy ByteString See sP",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "lbP",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:lbP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces lazy \u003ccode\u003eText\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003es\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.TH",
          "name": "lt",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#lt",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces lazy Text See",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "lt",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces and prints lazy \u003ccode\u003eText\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003esP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.TH",
          "name": "ltP",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#ltP",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces and prints lazy Text See sP",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "ltP",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:ltP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[s|%s %d %.3f|] \"foobar\" 10 1.23456\n\u003c/code\u003e\u003c/strong\u003e\"foobar 10 1.235\"\n\u003c/pre\u003e",
          "module": "Text.Printf.TH",
          "name": "s",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#s",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces String foobar foobar",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "s",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces and prints a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[s|%s %d %.3f|] \"foobar\" 10 1.23456\n\u003c/code\u003e\u003c/strong\u003e\u003cIO ()\u003e\n\u003c/pre\u003e\u003cp\u003eThis formatter WILL output a newline after the expanded string. If you\n don't want this behavior, use \u003ccode\u003e\u003ca\u003es\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e the result.\n\u003c/p\u003e",
          "module": "Text.Printf.TH",
          "name": "sP",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#sP",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces and prints String foobar IO This formatter WILL output newline after the expanded string If you don want this behavior use and putStr the result",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "sP",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:sP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003es\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.TH",
          "name": "sb",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#sb",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces ByteString See",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "sb",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:sb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces and prints \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003esP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.TH",
          "name": "sbP",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#sbP",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces and prints ByteString See sP",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "sbP",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:sbP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces \u003ccode\u003eText\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003es\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.TH",
          "name": "st",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#st",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces Text See",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "st",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter that produces and prints \u003ccode\u003eText\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003esP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.TH",
          "name": "stP",
          "package": "th-printf",
          "signature": "QuasiQuoter",
          "source": "src/Text-Printf-TH.html#stP",
          "type": "function"
        },
        "index": {
          "description": "formatter that produces and prints Text See sP",
          "hierarchy": "Text Printf TH",
          "module": "Text.Printf.TH",
          "name": "stP",
          "package": "th-printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-printf/docs/Text-Printf-TH.html#v:stP"
      }
    }
  ]
]