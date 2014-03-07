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
        "word": "heredoc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Heredoc",
          "name": "Heredoc",
          "package": "heredoc",
          "source": "src/Text-Heredoc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Heredoc",
          "module": "Text.Heredoc",
          "name": "Heredoc",
          "package": "heredoc",
          "partial": "Heredoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heredoc/docs/Text-Heredoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a string-literal expression from the string being quoted.\n\u003c/p\u003e\u003cp\u003eNewline literals are normalized to UNIX newlines (one '\\n' character).\n\u003c/p\u003e",
          "module": "Text.Heredoc",
          "name": "here",
          "package": "heredoc",
          "signature": "QuasiQuoter",
          "source": "src/Text-Heredoc.html#here",
          "type": "function"
        },
        "index": {
          "description": "Create string-literal expression from the string being quoted Newline literals are normalized to UNIX newlines one character",
          "hierarchy": "Text Heredoc",
          "module": "Text.Heredoc",
          "name": "here",
          "package": "heredoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heredoc/docs/Text-Heredoc.html#v:here"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a multi-line string literal whose left edge is demarcated by the\n    \u003ca\u003epipe\u003c/a\u003e character ('|'). For example,\n\u003c/p\u003e\u003cpre\u003efamousQuote = [str|Any dictator would admire the\n                  |uniformity and obedience of the U.S. media.\n                  |\n                  |    -- Noam Chomsky\n                  |]\n\u003c/pre\u003e\u003cp\u003eis functionally equivalent to\n\u003c/p\u003e\u003cpre\u003efamousQuote = \"Any dictator would admire the\\n\" ++\n              \"uniformity and obedience of the U.S. media.\\n\" ++\n              \"\\n\" ++\n              \"    -- Noam Chomsky\\n\"\n\u003c/pre\u003e\u003cp\u003eIf desired, you can have a ragged left-edge, so\n\u003c/p\u003e\u003cpre\u003emyHtml = [str|\u003chtml\u003e\n                 |\u003cbody\u003e\n                     |\u003ch1\u003eMy home page\u003c/h1\u003e\n                 |\u003c/body\u003e\n             |\u003c/html\u003e\n             |]\n\u003c/pre\u003e\u003cp\u003eis functionally equivalent to\n\u003c/p\u003e\u003cpre\u003emyHtml = \"\u003chtml\u003e\\n\" ++\n         \"\u003cbody\u003e\\n\" ++\n         \"\u003ch1\u003eMy home page\u003c/h1\u003e\\n\" ++\n          \"\u003c/body\u003e\\n\" ++\n         \"\u003c/html\u003e\\n\"\n\u003c/pre\u003e",
          "module": "Text.Heredoc",
          "name": "str",
          "package": "heredoc",
          "signature": "QuasiQuoter",
          "source": "src/Text-Heredoc.html#str",
          "type": "function"
        },
        "index": {
          "description": "Create multi-line string literal whose left edge is demarcated by the pipe character For example famousQuote str Any dictator would admire the uniformity and obedience of the U.S media Noam Chomsky is functionally equivalent to famousQuote Any dictator would admire the uniformity and obedience of the U.S media Noam Chomsky If desired you can have ragged left-edge so myHtml str html body h1 My home page h1 body html is functionally equivalent to myHtml html body h1 My home page h1 body html",
          "hierarchy": "Text Heredoc",
          "module": "Text.Heredoc",
          "name": "str",
          "package": "heredoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heredoc/docs/Text-Heredoc.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a string-literal expression from\n    the contents of the file at the filepath being quoted.\n\u003c/p\u003e\u003cp\u003eNewline literals are normalized to UNIX newlines (one '\\n' character).\n\u003c/p\u003e",
          "module": "Text.Heredoc",
          "name": "there",
          "package": "heredoc",
          "signature": "QuasiQuoter",
          "source": "src/Text-Heredoc.html#there",
          "type": "function"
        },
        "index": {
          "description": "Create string-literal expression from the contents of the file at the filepath being quoted Newline literals are normalized to UNIX newlines one character",
          "hierarchy": "Text Heredoc",
          "module": "Text.Heredoc",
          "name": "there",
          "package": "heredoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heredoc/docs/Text-Heredoc.html#v:there"
      }
    }
  ]
]