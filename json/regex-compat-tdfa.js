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
        "word": "regex-compat-tdfa"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRegular expression matching.  Uses the POSIX regular expression\n interface in \u003ca\u003eText.Regex.TDFA\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex",
          "name": "Regex",
          "package": "regex-compat-tdfa",
          "source": "src/Text-Regex.html",
          "type": "module"
        },
        "index": {
          "description": "Regular expression matching Uses the POSIX regular expression interface in Text.Regex.TDFA",
          "hierarchy": "Text Regex",
          "module": "Text.Regex",
          "name": "Regex",
          "package": "regex-compat-tdfa",
          "partial": "Regex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-compat-tdfa/docs/Text-Regex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TDFA backend specific \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e type, used by this module's RegexOptions and RegexMaker\n\u003c/p\u003e",
          "module": "Text.Regex",
          "name": "Regex",
          "package": "regex-compat-tdfa",
          "type": "data"
        },
        "index": {
          "description": "The TDFA backend specific Regex type used by this module RegexOptions and RegexMaker",
          "hierarchy": "Text Regex",
          "module": "Text.Regex",
          "name": "Regex",
          "package": "regex-compat-tdfa",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-compat-tdfa/docs/Text-Regex.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a regular expression against a string\n\u003c/p\u003e",
          "module": "Text.Regex",
          "name": "matchRegex",
          "package": "regex-compat-tdfa",
          "signature": "Regex-\u003e String-\u003e Maybe [String]",
          "type": "function"
        },
        "index": {
          "description": "Match regular expression against string",
          "hierarchy": "Text Regex",
          "module": "Text.Regex",
          "name": "matchRegex",
          "normalized": "Regex-\u003eString-\u003eMaybe[String]",
          "package": "regex-compat-tdfa",
          "partial": "Regex",
          "signature": "Regex-\u003eString-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-compat-tdfa/docs/Text-Regex.html#v:matchRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a regular expression against a string, returning more information\n about the match.\n\u003c/p\u003e",
          "module": "Text.Regex",
          "name": "matchRegexAll",
          "package": "regex-compat-tdfa",
          "signature": "Regex-\u003e String-\u003e Maybe (String, String, String, [String])",
          "type": "function"
        },
        "index": {
          "description": "Match regular expression against string returning more information about the match",
          "hierarchy": "Text Regex",
          "module": "Text.Regex",
          "name": "matchRegexAll",
          "normalized": "Regex-\u003eString-\u003eMaybe(String,String,String,[String])",
          "package": "regex-compat-tdfa",
          "partial": "Regex All",
          "signature": "Regex-\u003eString-\u003eMaybe(String,String,String,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-compat-tdfa/docs/Text-Regex.html#v:matchRegexAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a regular expression with the default options (multi-line,\n case-sensitive).  The syntax of regular expressions is\n otherwise that of \u003ccode\u003eegrep\u003c/code\u003e (i.e. POSIX \"extended\" regular\n expressions).\n\u003c/p\u003e",
          "module": "Text.Regex",
          "name": "mkRegex",
          "package": "regex-compat-tdfa",
          "signature": "String -\u003e Regex",
          "source": "src/Text-Regex.html#mkRegex",
          "type": "function"
        },
        "index": {
          "description": "Makes regular expression with the default options multi-line case-sensitive The syntax of regular expressions is otherwise that of egrep i.e POSIX extended regular expressions",
          "hierarchy": "Text Regex",
          "module": "Text.Regex",
          "name": "mkRegex",
          "normalized": "String-\u003eRegex",
          "package": "regex-compat-tdfa",
          "partial": "Regex",
          "signature": "String-\u003eRegex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-compat-tdfa/docs/Text-Regex.html#v:mkRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a regular expression, where the multi-line and\n case-sensitive options can be changed from the default settings.\n\u003c/p\u003e",
          "module": "Text.Regex",
          "name": "mkRegexWithOpts",
          "package": "regex-compat-tdfa",
          "signature": "String-\u003e Bool-\u003e Bool-\u003e Regex",
          "type": "function"
        },
        "index": {
          "description": "Makes regular expression where the multi-line and case-sensitive options can be changed from the default settings",
          "hierarchy": "Text Regex",
          "module": "Text.Regex",
          "name": "mkRegexWithOpts",
          "normalized": "String-\u003eBool-\u003eBool-\u003eRegex",
          "package": "regex-compat-tdfa",
          "partial": "Regex With Opts",
          "signature": "String-\u003eBool-\u003eBool-\u003eRegex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-compat-tdfa/docs/Text-Regex.html#v:mkRegexWithOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a string based on a regular expression.  The regular expression\nshould identify one delimiter.\n\u003c/p\u003e\u003cp\u003eThis does not advance and produces an infinite list of [] if the regex\nmatches an empty string.  This misfeature is here to match the\nbehavior of the the original Text.Regex API.\n\u003c/p\u003e",
          "module": "Text.Regex",
          "name": "splitRegex",
          "package": "regex-compat-tdfa",
          "signature": "Regex -\u003e String -\u003e [String]",
          "source": "src/Text-Regex.html#splitRegex",
          "type": "function"
        },
        "index": {
          "description": "Splits string based on regular expression The regular expression should identify one delimiter This does not advance and produces an infinite list of if the regex matches an empty string This misfeature is here to match the behavior of the the original Text.Regex API",
          "hierarchy": "Text Regex",
          "module": "Text.Regex",
          "name": "splitRegex",
          "normalized": "Regex-\u003eString-\u003e[String]",
          "package": "regex-compat-tdfa",
          "partial": "Regex",
          "signature": "Regex-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-compat-tdfa/docs/Text-Regex.html#v:splitRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces every occurance of the given regexp with the replacement string.\n\u003c/p\u003e\u003cp\u003eIn the replacement string, \u003ccode\u003e\"\\1\"\u003c/code\u003e refers to the first substring;\n\u003ccode\u003e\"\\2\"\u003c/code\u003e to the second, etc; and \u003ccode\u003e\"\\0\"\u003c/code\u003e to the entire match.\n\u003ccode\u003e\"\\\\\\\\\"\u003c/code\u003e will insert a literal backslash.\n\u003c/p\u003e\u003cp\u003eThis does not advance if the regex matches an empty string.  This\nmisfeature is here to match the behavior of the the original\nText.Regex API.\n\u003c/p\u003e",
          "module": "Text.Regex",
          "name": "subRegex",
          "package": "regex-compat-tdfa",
          "signature": "Regex-\u003e String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Replaces every occurance of the given regexp with the replacement string In the replacement string refers to the first substring to the second etc and to the entire match will insert literal backslash This does not advance if the regex matches an empty string This misfeature is here to match the behavior of the the original Text.Regex API",
          "hierarchy": "Text Regex",
          "module": "Text.Regex",
          "name": "subRegex",
          "normalized": "Regex-\u003eString-\u003eString-\u003eString",
          "package": "regex-compat-tdfa",
          "partial": "Regex",
          "signature": "Regex-\u003eString-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-compat-tdfa/docs/Text-Regex.html#v:subRegex"
      }
    }
  ]
]