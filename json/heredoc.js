[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heredoc/docs/Text-Heredoc.html#",
      "description": {
        "fct-module": "Text.Heredoc",
        "fct-package": "heredoc",
        "fct-signature": "module",
        "fct-source": "src/Text-Heredoc.html",
        "fct-type": "module",
        "title": "Heredoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Heredoc",
        "module": "Text.Heredoc",
        "name": "Heredoc",
        "normalized": "",
        "package": "heredoc",
        "partial": "Heredoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heredoc/docs/Text-Heredoc.html#v:here",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a string-literal expression from the string being quoted.\n\u003c/p\u003e\u003cp\u003eNewline literals are normalized to UNIX newlines (one '\\n' character).\n\u003c/p\u003e",
        "fct-module": "Text.Heredoc",
        "fct-package": "heredoc",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Heredoc.html#here",
        "fct-type": "function",
        "title": "here"
      },
      "index": {
        "description": "Create string-literal expression from the string being quoted Newline literals are normalized to UNIX newlines one character",
        "hierarchy": "Text Heredoc",
        "module": "Text.Heredoc",
        "name": "here",
        "normalized": "",
        "package": "heredoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heredoc/docs/Text-Heredoc.html#v:str",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a multi-line string literal whose left edge is demarcated by the\n    \u003ca\u003epipe\u003c/a\u003e character ('|'). For example,\n\u003c/p\u003e\u003cpre\u003efamousQuote = [str|Any dictator would admire the\n                  |uniformity and obedience of the U.S. media.\n                  |\n                  |    -- Noam Chomsky\n                  |]\n\u003c/pre\u003e\u003cp\u003eis functionally equivalent to\n\u003c/p\u003e\u003cpre\u003efamousQuote = \"Any dictator would admire the\\n\" ++\n              \"uniformity and obedience of the U.S. media.\\n\" ++\n              \"\\n\" ++\n              \"    -- Noam Chomsky\\n\"\n\u003c/pre\u003e\u003cp\u003eIf desired, you can have a ragged left-edge, so\n\u003c/p\u003e\u003cpre\u003emyHtml = [str|\u003chtml\u003e\n                 |\u003cbody\u003e\n                     |\u003ch1\u003eMy home page\u003c/h1\u003e\n                 |\u003c/body\u003e\n             |\u003c/html\u003e\n             |]\n\u003c/pre\u003e\u003cp\u003eis functionally equivalent to\n\u003c/p\u003e\u003cpre\u003emyHtml = \"\u003chtml\u003e\\n\" ++\n         \"\u003cbody\u003e\\n\" ++\n         \"\u003ch1\u003eMy home page\u003c/h1\u003e\\n\" ++\n          \"\u003c/body\u003e\\n\" ++\n         \"\u003c/html\u003e\\n\"\n\u003c/pre\u003e",
        "fct-module": "Text.Heredoc",
        "fct-package": "heredoc",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Heredoc.html#str",
        "fct-type": "function",
        "title": "str"
      },
      "index": {
        "description": "Create multi-line string literal whose left edge is demarcated by the pipe character For example famousQuote str Any dictator would admire the uniformity and obedience of the U.S media Noam Chomsky is functionally equivalent to famousQuote Any dictator would admire the uniformity and obedience of the U.S media Noam Chomsky If desired you can have ragged left-edge so myHtml str html body h1 My home page h1 body html is functionally equivalent to myHtml html body h1 My home page h1 body html",
        "hierarchy": "Text Heredoc",
        "module": "Text.Heredoc",
        "name": "str",
        "normalized": "",
        "package": "heredoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heredoc/docs/Text-Heredoc.html#v:there",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a string-literal expression from\n    the contents of the file at the filepath being quoted.\n\u003c/p\u003e\u003cp\u003eNewline literals are normalized to UNIX newlines (one '\\n' character).\n\u003c/p\u003e",
        "fct-module": "Text.Heredoc",
        "fct-package": "heredoc",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Heredoc.html#there",
        "fct-type": "function",
        "title": "there"
      },
      "index": {
        "description": "Create string-literal expression from the contents of the file at the filepath being quoted Newline literals are normalized to UNIX newlines one character",
        "hierarchy": "Text Heredoc",
        "module": "Text.Heredoc",
        "name": "there",
        "normalized": "",
        "package": "heredoc",
        "partial": "",
        "signature": ""
      }
    }
  }
]