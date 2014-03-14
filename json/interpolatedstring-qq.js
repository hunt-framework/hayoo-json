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
        "word": "interpolatedstring-qq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuasiQuoter for interpolated strings using Ruby syntax. Expressions inside #{} will have\n \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e called. Multi-line strings are supported. Escaping of '#' and '{' is done with backslash.\n\u003c/p\u003e\u003cpre\u003e\n v :: String\n v = [$istr| well #{\"hello\" ++ \" there\"} #{6*7}]\n\u003c/pre\u003e\u003cp\u003ev will have the value \" well hello there 42\"\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.InterpolatedString.QQ",
          "name": "QQ",
          "package": "interpolatedstring-qq",
          "source": "src/Text-InterpolatedString-QQ.html",
          "type": "module"
        },
        "index": {
          "description": "QuasiQuoter for interpolated strings using Ruby syntax Expressions inside will have show called Multi-line strings are supported Escaping of and is done with backslash String istr well hello there will have the value well hello there",
          "hierarchy": "Text InterpolatedString QQ",
          "module": "Text.InterpolatedString.QQ",
          "name": "QQ",
          "package": "interpolatedstring-qq",
          "partial": "QQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/interpolatedstring-qq/docs/Text-InterpolatedString-QQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuoter for interpolating Haskell values into a string literal. The pattern portion is undefined.\n\u003c/p\u003e",
          "module": "Text.InterpolatedString.QQ",
          "name": "istr",
          "package": "interpolatedstring-qq",
          "signature": "QuasiQuoter",
          "source": "src/Text-InterpolatedString-QQ.html#istr",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter for interpolating Haskell values into string literal The pattern portion is undefined",
          "hierarchy": "Text InterpolatedString QQ",
          "module": "Text.InterpolatedString.QQ",
          "name": "istr",
          "package": "interpolatedstring-qq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interpolatedstring-qq/docs/Text-InterpolatedString-QQ.html#v:istr"
      }
    }
  ]
]