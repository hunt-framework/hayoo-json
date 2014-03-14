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
        "word": "regex-tdfa-text"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules provides \u003ccode\u003e\u003ca\u003eRegexMaker\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRegexLike\u003c/a\u003e\u003c/code\u003e instances for using\n\u003ccode\u003eText\u003c/code\u003e with the TDFA backend (\u003ca\u003eText.Regex.TDFA.NewDFA.Engine\u003c/a\u003e and\n\u003ca\u003eText.Regex.TDFA.NewDFA.Tester\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003eThis exports instances of the high level API and the medium level\nAPI of \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eregexec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "Lazy",
          "package": "regex-tdfa-text",
          "source": "src/Text-Regex-TDFA-Text-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "This modules provides RegexMaker and RegexLike instances for using Text with the TDFA backend Text.Regex.TDFA.NewDFA.Engine and Text.Regex.TDFA.NewDFA.Tester This exports instances of the high level API and the medium level API of compile execute and regexec",
          "hierarchy": "Text Regex TDFA Text Lazy",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "Lazy",
          "package": "regex-tdfa-text",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl whether the pattern is multiline or case-sensitive like Text.Regex and whether to\n capture the subgroups (1, 2, etc).  Controls enabling extra anchor syntax.\n\u003c/p\u003e",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "CompOption",
          "package": "regex-tdfa-text",
          "type": "data"
        },
        "index": {
          "description": "Control whether the pattern is multiline or case-sensitive like Text.Regex and whether to capture the subgroups etc Controls enabling extra anchor syntax",
          "hierarchy": "Text Regex TDFA Text Lazy",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "CompOption",
          "package": "regex-tdfa-text",
          "partial": "Comp Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#t:CompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "ExecOption",
          "package": "regex-tdfa-text",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex TDFA Text Lazy",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "ExecOption",
          "package": "regex-tdfa-text",
          "partial": "Exec Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#t:ExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TDFA backend specific \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e type, used by this module's RegexOptions and RegexMaker\n\u003c/p\u003e",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "Regex",
          "package": "regex-tdfa-text",
          "type": "data"
        },
        "index": {
          "description": "The TDFA backend specific Regex type used by this module RegexOptions and RegexMaker",
          "hierarchy": "Text Regex TDFA Text Lazy",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "Regex",
          "package": "regex-tdfa-text",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.TDFA.Text.Lazy\",\"Text.Regex.TDFA.Text\"]",
          "name": "compile",
          "package": "regex-tdfa-text",
          "signature": "CompOption-\u003e ExecOption-\u003e Text-\u003e Either String Regex",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#v:compile\",\"http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text.html#v:compile\"]"
        },
        "index": {
          "hierarchy": "Text Regex TDFA Text Lazy",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "compile",
          "normalized": "CompOption-\u003eExecOption-\u003eText-\u003eEither String Regex",
          "package": "regex-tdfa-text",
          "signature": "CompOption-\u003eExecOption-\u003eText-\u003eEither String Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.TDFA.Text.Lazy\",\"Text.Regex.TDFA.Text\"]",
          "name": "execute",
          "package": "regex-tdfa-text",
          "signature": "Regex-\u003e Text-\u003e Either String (Maybe MatchArray)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#v:execute\",\"http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text.html#v:execute\"]"
        },
        "index": {
          "hierarchy": "Text Regex TDFA Text Lazy",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "execute",
          "normalized": "Regex-\u003eText-\u003eEither String(Maybe MatchArray)",
          "package": "regex-tdfa-text",
          "signature": "Regex-\u003eText-\u003eEither String(Maybe MatchArray)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.TDFA.Text.Lazy\",\"Text.Regex.TDFA.Text\"]",
          "name": "regexec",
          "package": "regex-tdfa-text",
          "signature": "Regex-\u003e Text-\u003e Either String (Maybe (Text, Text, Text, [Text]))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#v:regexec\",\"http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text.html#v:regexec\"]"
        },
        "index": {
          "hierarchy": "Text Regex TDFA Text Lazy",
          "module": "Text.Regex.TDFA.Text.Lazy",
          "name": "regexec",
          "normalized": "Regex-\u003eText-\u003eEither String(Maybe(Text,Text,Text,[Text]))",
          "package": "regex-tdfa-text",
          "signature": "Regex-\u003eText-\u003eEither String(Maybe(Text,Text,Text,[Text]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text-Lazy.html#v:regexec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules provides \u003ccode\u003e\u003ca\u003eRegexMaker\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRegexLike\u003c/a\u003e\u003c/code\u003e instances for using\n\u003ccode\u003eText\u003c/code\u003e with the TDFA backend (\u003ca\u003eText.Regex.TDFA.NewDFA.Engine\u003c/a\u003e and\n\u003ca\u003eText.Regex.TDFA.NewDFA.Tester\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003eThis exports instances of the high level API and the medium level\nAPI of \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eregexec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.TDFA.Text",
          "name": "Text",
          "package": "regex-tdfa-text",
          "source": "src/Text-Regex-TDFA-Text.html",
          "type": "module"
        },
        "index": {
          "description": "This modules provides RegexMaker and RegexLike instances for using Text with the TDFA backend Text.Regex.TDFA.NewDFA.Engine and Text.Regex.TDFA.NewDFA.Tester This exports instances of the high level API and the medium level API of compile execute and regexec",
          "hierarchy": "Text Regex TDFA Text",
          "module": "Text.Regex.TDFA.Text",
          "name": "Text",
          "package": "regex-tdfa-text",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl whether the pattern is multiline or case-sensitive like Text.Regex and whether to\n capture the subgroups (1, 2, etc).  Controls enabling extra anchor syntax.\n\u003c/p\u003e",
          "module": "Text.Regex.TDFA.Text",
          "name": "CompOption",
          "package": "regex-tdfa-text",
          "type": "data"
        },
        "index": {
          "description": "Control whether the pattern is multiline or case-sensitive like Text.Regex and whether to capture the subgroups etc Controls enabling extra anchor syntax",
          "hierarchy": "Text Regex TDFA Text",
          "module": "Text.Regex.TDFA.Text",
          "name": "CompOption",
          "package": "regex-tdfa-text",
          "partial": "Comp Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text.html#t:CompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.TDFA.Text",
          "name": "ExecOption",
          "package": "regex-tdfa-text",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex TDFA Text",
          "module": "Text.Regex.TDFA.Text",
          "name": "ExecOption",
          "package": "regex-tdfa-text",
          "partial": "Exec Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text.html#t:ExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TDFA backend specific \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e type, used by this module's RegexOptions and RegexMaker\n\u003c/p\u003e",
          "module": "Text.Regex.TDFA.Text",
          "name": "Regex",
          "package": "regex-tdfa-text",
          "type": "data"
        },
        "index": {
          "description": "The TDFA backend specific Regex type used by this module RegexOptions and RegexMaker",
          "hierarchy": "Text Regex TDFA Text",
          "module": "Text.Regex.TDFA.Text",
          "name": "Regex",
          "package": "regex-tdfa-text",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-tdfa-text/docs/Text-Regex-TDFA-Text.html#t:Regex"
      }
    }
  ]
]