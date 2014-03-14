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
        "word": "relit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLiteral notation for regular expression.\n\u003c/p\u003e\u003cp\u003eImporting this module with the \u003ccode\u003eQuasiQuotes\u003c/code\u003e and \u003ccode\u003eOverloadedStrings\u003c/code\u003e\n extensions making possible to directly specify reqular expression\n literal. This means that awkward backslashes are not necessary.\n\u003c/p\u003e\u003cp\u003eYou can copy a regular expression in other languages and paste it\n to your Haskell program.\n\u003c/p\u003e\u003cp\u003eSample code:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes, OverloadedStrings #-}\n\n import Text.Regex.Literal\n import Text.Regex.Posix\n\n -- Regular expression as the regular expression literal\n regexp :: Regex\n regexp = [$re|\\\\(foo)\\\\(bar\\.c)|]\n\u003c/pre\u003e\u003cp\u003eCompare with regular expression as the String literal.\n\u003c/p\u003e\u003cpre\u003e regexp :: Regex\n regexp = makeRegex (\"\\\\\\\\(foo)\\\\\\\\(bar\\\\.c)\" :: String)\n\u003c/pre\u003e\u003cp\u003eGHC 6.12.3 or earlier requires the dollar sign before \"re\".\n\u003c/p\u003e\u003cp\u003eGHC 7.0.1 does not allow the dollar sign before \"re\".\n\u003c/p\u003e\u003cp\u003eGHC 7.0.2 or later allows the dollar sign before \"re\" as an\n obsoleted syntax.\n\u003c/p\u003e\u003cp\u003eSo, use GHC other than 7.0.1 and specify the dollor sign for\n portability.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.Literal",
          "name": "Literal",
          "package": "relit",
          "source": "src/Text-Regex-Literal.html",
          "type": "module"
        },
        "index": {
          "description": "Literal notation for regular expression Importing this module with the QuasiQuotes and OverloadedStrings extensions making possible to directly specify reqular expression literal This means that awkward backslashes are not necessary You can copy regular expression in other languages and paste it to your Haskell program Sample code LANGUAGE QuasiQuotes OverloadedStrings import Text.Regex.Literal import Text.Regex.Posix Regular expression as the regular expression literal regexp Regex regexp re foo bar Compare with regular expression as the String literal regexp Regex regexp makeRegex foo bar String GHC or earlier requires the dollar sign before re GHC does not allow the dollar sign before re GHC or later allows the dollar sign before re as an obsoleted syntax So use GHC other than and specify the dollor sign for portability",
          "hierarchy": "Text Regex Literal",
          "module": "Text.Regex.Literal",
          "name": "Literal",
          "package": "relit",
          "partial": "Literal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/relit/docs/Text-Regex-Literal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eQuasiQuoter\u003c/a\u003e\u003c/code\u003e function to implement regular expression literal.\n\u003c/p\u003e",
          "module": "Text.Regex.Literal",
          "name": "re",
          "package": "relit",
          "signature": "QuasiQuoter",
          "source": "src/Text-Regex-Literal.html#re",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter function to implement regular expression literal",
          "hierarchy": "Text Regex Literal",
          "module": "Text.Regex.Literal",
          "name": "re",
          "package": "relit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relit/docs/Text-Regex-Literal.html#v:re"
      }
    }
  ]
]