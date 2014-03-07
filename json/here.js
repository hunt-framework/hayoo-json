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
        "word": "here"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterpolated here docs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.String.Here.Interpolated",
          "name": "Interpolated",
          "package": "here",
          "source": "src/Data-String-Here-Interpolated.html",
          "type": "module"
        },
        "index": {
          "description": "Interpolated here docs",
          "hierarchy": "Data String Here Interpolated",
          "module": "Data.String.Here.Interpolated",
          "name": "Interpolated",
          "package": "here",
          "partial": "Interpolated",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/here/docs/Data-String-Here-Interpolated.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote a here doc with embedded antiquoted expressions\n\u003c/p\u003e\u003cp\u003eAny expression occurring between \u003ccode\u003e${\u003c/code\u003e and \u003ccode\u003e}\u003c/code\u003e (for which the type must have\n \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e instances) will be interpolated into the quoted\n string.\n\u003c/p\u003e\u003cp\u003eCharacters preceded by a backslash are treated literally. This enables the\n inclusion of the literal substring \u003ccode\u003e${\u003c/code\u003e within your quoted text by writing\n it as \u003ccode\u003e\\${\u003c/code\u003e. The literal sequence \u003ccode\u003e\\${\u003c/code\u003e may be written as \u003ccode\u003e\\\\${\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Here.Interpolated",
          "name": "i",
          "package": "here",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Here-Interpolated.html#i",
          "type": "function"
        },
        "index": {
          "description": "Quote here doc with embedded antiquoted expressions Any expression occurring between and for which the type must have Show and Typeable instances will be interpolated into the quoted string Characters preceded by backslash are treated literally This enables the inclusion of the literal substring within your quoted text by writing it as The literal sequence may be written as",
          "hierarchy": "Data String Here Interpolated",
          "module": "Data.String.Here.Interpolated",
          "name": "i",
          "package": "here",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/here/docs/Data-String-Here-Interpolated.html#v:i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ei\u003c/a\u003e\u003c/code\u003e, but with leading and trailing whitespace trimmed\n\u003c/p\u003e",
          "module": "Data.String.Here.Interpolated",
          "name": "iTrim",
          "package": "here",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Here-Interpolated.html#iTrim",
          "type": "function"
        },
        "index": {
          "description": "Like but with leading and trailing whitespace trimmed",
          "hierarchy": "Data String Here Interpolated",
          "module": "Data.String.Here.Interpolated",
          "name": "iTrim",
          "package": "here",
          "partial": "Trim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/here/docs/Data-String-Here-Interpolated.html#v:iTrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote the contents of a file as with \u003ccode\u003e\u003ca\u003ei\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis enables usage as a simple template engine\n\u003c/p\u003e",
          "module": "Data.String.Here.Interpolated",
          "name": "template",
          "package": "here",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Here-Interpolated.html#template",
          "type": "function"
        },
        "index": {
          "description": "Quote the contents of file as with This enables usage as simple template engine",
          "hierarchy": "Data String Here Interpolated",
          "module": "Data.String.Here.Interpolated",
          "name": "template",
          "package": "here",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/here/docs/Data-String-Here-Interpolated.html#v:template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLiteral, uninterpolated here docs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.String.Here.Uninterpolated",
          "name": "Uninterpolated",
          "package": "here",
          "source": "src/Data-String-Here-Uninterpolated.html",
          "type": "module"
        },
        "index": {
          "description": "Literal uninterpolated here docs",
          "hierarchy": "Data String Here Uninterpolated",
          "module": "Data.String.Here.Uninterpolated",
          "name": "Uninterpolated",
          "package": "here",
          "partial": "Uninterpolated",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/here/docs/Data-String-Here-Uninterpolated.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote a here doc, stripping leading and trailing whitespace\n\u003c/p\u003e",
          "module": "Data.String.Here.Uninterpolated",
          "name": "here",
          "package": "here",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Here-Uninterpolated.html#here",
          "type": "function"
        },
        "index": {
          "description": "Quote here doc stripping leading and trailing whitespace",
          "hierarchy": "Data String Here Uninterpolated",
          "module": "Data.String.Here.Uninterpolated",
          "name": "here",
          "package": "here",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/here/docs/Data-String-Here-Uninterpolated.html#v:here"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplice a file's contents as a here doc\n\u003c/p\u003e",
          "module": "Data.String.Here.Uninterpolated",
          "name": "hereFile",
          "package": "here",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Here-Uninterpolated.html#hereFile",
          "type": "function"
        },
        "index": {
          "description": "Splice file contents as here doc",
          "hierarchy": "Data String Here Uninterpolated",
          "module": "Data.String.Here.Uninterpolated",
          "name": "hereFile",
          "package": "here",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/here/docs/Data-String-Here-Uninterpolated.html#v:hereFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote a here doc literally, with no whitespace stripping\n\u003c/p\u003e",
          "module": "Data.String.Here.Uninterpolated",
          "name": "hereLit",
          "package": "here",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Here-Uninterpolated.html#hereLit",
          "type": "function"
        },
        "index": {
          "description": "Quote here doc literally with no whitespace stripping",
          "hierarchy": "Data String Here Uninterpolated",
          "module": "Data.String.Here.Uninterpolated",
          "name": "hereLit",
          "package": "here",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/here/docs/Data-String-Here-Uninterpolated.html#v:hereLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere docs and string interpolation via quasiquotation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.String.Here",
          "name": "Here",
          "package": "here",
          "source": "src/Data-String-Here.html",
          "type": "module"
        },
        "index": {
          "description": "Here docs and string interpolation via quasiquotation",
          "hierarchy": "Data String Here",
          "module": "Data.String.Here",
          "name": "Here",
          "package": "here",
          "partial": "Here",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/here/docs/Data-String-Here.html#"
      }
    }
  ]
]