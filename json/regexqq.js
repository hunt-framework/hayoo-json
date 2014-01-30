[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regexqq/docs/Text-Regex-PCRE-QQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA quasiquoter for Text.Regex.PCRE regexes.\n  This makes use of a new GHC extension known as QuasiQuotes.\n  See the README for the temporary location of the docs for\n  Language.Haskell.TH.Quote. See the EXAMPLES file for examples.\n\u003c/p\u003e\u003cpre\u003e ghci\u003e [$rx|([aeiou]).*(er|ing|tion)([\\.,\\?]*)$|] \"helloing.!?!?!\"\n Just [\"elloing.!?!?!\",\"e\",\"ing\",\".!?!?!\"]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Regex.PCRE.QQ",
        "fct-package": "regexqq",
        "fct-signature": "module",
        "fct-source": "src/Text-Regex-PCRE-QQ.html",
        "fct-type": "module",
        "title": "QQ"
      },
      "index": {
        "description": "quasiquoter for Text.Regex.PCRE regexes This makes use of new GHC extension known as QuasiQuotes See the README for the temporary location of the docs for Language.Haskell.TH.Quote See the EXAMPLES file for examples ghci rx aeiou er ing tion helloing Just elloing ing",
        "hierarchy": "Text Regex PCRE QQ",
        "module": "Text.Regex.PCRE.QQ",
        "name": "QQ",
        "normalized": "",
        "package": "regexqq",
        "partial": "QQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regexqq/docs/Text-Regex-PCRE-QQ.html#v:regexToExpQ",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a string rep\n of a regex to an ExpQ. The\n resulting ExpQ, when spliced,\n results in a function of type\n \u003ccode\u003eString -\u003e Maybe [String]\u003c/code\u003e,\n where the input is the String\n to match on. The result is\n Nothing on error, and Just\n a list of results on success.\n Note: I'm packing/unpacking/...\n the ByteString unnecessarily\n for convenience in testing\n out the first go at this.\n This will be dealt with in\n the future.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.QQ",
        "fct-package": "regexqq",
        "fct-signature": "String -\u003e ExpQ",
        "fct-source": "src/Text-Regex-PCRE-QQ.html#regexToExpQ",
        "fct-type": "function",
        "title": "regexToExpQ"
      },
      "index": {
        "description": "Transform string rep of regex to an ExpQ The resulting ExpQ when spliced results in function of type String Maybe String where the input is the String to match on The result is Nothing on error and Just list of results on success Note packing unpacking the ByteString unnecessarily for convenience in testing out the first go at this This will be dealt with in the future",
        "hierarchy": "Text Regex PCRE QQ",
        "module": "Text.Regex.PCRE.QQ",
        "name": "regexToExpQ",
        "normalized": "String-\u003eExpQ",
        "package": "regexqq",
        "partial": "To Exp",
        "signature": "String-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regexqq/docs/Text-Regex-PCRE-QQ.html#v:regexToPatQ",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a string (presumably)\n  containing a regex to a PatQ.\n NOTE: Given a regex, a pattern\n    is constructed which matches\n    a literal string containing\n    the verbatim regex. It does\n    this because I couldn't think\n    of anything better for it to\n    do off the cuff. This needs\n    thought.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.QQ",
        "fct-package": "regexqq",
        "fct-signature": "String -\u003e PatQ",
        "fct-source": "src/Text-Regex-PCRE-QQ.html#regexToPatQ",
        "fct-type": "function",
        "title": "regexToPatQ"
      },
      "index": {
        "description": "Transform string presumably containing regex to PatQ NOTE Given regex pattern is constructed which matches literal string containing the verbatim regex It does this because couldn think of anything better for it to do off the cuff This needs thought",
        "hierarchy": "Text Regex PCRE QQ",
        "module": "Text.Regex.PCRE.QQ",
        "name": "regexToPatQ",
        "normalized": "String-\u003ePatQ",
        "package": "regexqq",
        "partial": "To Pat",
        "signature": "String-\u003ePatQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regexqq/docs/Text-Regex-PCRE-QQ.html#v:rx",
      "description": {
        "fct-descr": "\u003cpre\u003e ghci\u003e maybe [] tail $ [$rx|^([+-])?([0-9]+)\\.([0-9]+)|] (show $ negate pi)\n [\"-\",\"3\",\"141592653589793\"]\n\u003c/pre\u003e",
        "fct-module": "Text.Regex.PCRE.QQ",
        "fct-package": "regexqq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Regex-PCRE-QQ.html#rx",
        "fct-type": "function",
        "title": "rx"
      },
      "index": {
        "description": "ghci maybe tail rx show negate pi",
        "hierarchy": "Text Regex PCRE QQ",
        "module": "Text.Regex.PCRE.QQ",
        "name": "rx",
        "normalized": "",
        "package": "regexqq",
        "partial": "",
        "signature": ""
      }
    }
  }
]