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
        "word": "pcre-utils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module implementing regexp-based split and substitute.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esubstituteCompile \"(a+)\" \"lapin\" \"'\\\\1'\"\n\u003c/code\u003e\u003c/strong\u003eRight \"l'a'pin\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplitCompile \"\\\\d\" \"a1b2c3\"\n\u003c/code\u003e\u003c/strong\u003eRight [\"a\",\"b\",\"c\"]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "Utils",
          "package": "pcre-utils",
          "source": "src/Text-Regex-PCRE-ByteString-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "module implementing regexp-based split and substitute substituteCompile lapin Right pin splitCompile a1b2c3 Right",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "Utils",
          "package": "pcre-utils",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "CompOption",
          "package": "pcre-utils",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "CompOption",
          "package": "pcre-utils",
          "partial": "Comp Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#t:CompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "ExecOption",
          "package": "pcre-utils",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "ExecOption",
          "package": "pcre-utils",
          "partial": "Exec Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#t:ExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "Regex",
          "package": "pcre-utils",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "Regex",
          "package": "pcre-utils",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "compBlank",
          "package": "pcre-utils",
          "signature": "CompOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "compBlank",
          "package": "pcre-utils",
          "partial": "Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:compBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure version of \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e, using unsafePerformIO.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "compile'",
          "package": "pcre-utils",
          "signature": "CompOption -\u003e ExecOption -\u003e ByteString -\u003e Either (MatchOffset, String) Regex",
          "source": "src/Text-Regex-PCRE-ByteString-Utils.html#compile%27",
          "type": "function"
        },
        "index": {
          "description": "pure version of compile using unsafePerformIO",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "compile'",
          "normalized": "CompOption-\u003eExecOption-\u003eByteString-\u003eEither(MatchOffset,String)Regex",
          "package": "pcre-utils",
          "signature": "CompOption-\u003eExecOption-\u003eByteString-\u003eEither(MatchOffset,String)Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:compile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "execBlank",
          "package": "pcre-utils",
          "signature": "ExecOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "execBlank",
          "package": "pcre-utils",
          "partial": "Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:execBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure version of \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e, using unsafePerformIO.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "execute'",
          "package": "pcre-utils",
          "signature": "Regex -\u003e ByteString -\u003e Either WrapError (Maybe (Array Int (MatchOffset, MatchLength)))",
          "source": "src/Text-Regex-PCRE-ByteString-Utils.html#execute%27",
          "type": "function"
        },
        "index": {
          "description": "pure version of execute using unsafePerformIO",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "execute'",
          "normalized": "Regex-\u003eByteString-\u003eEither WrapError(Maybe(Array Int(MatchOffset,MatchLength)))",
          "package": "pcre-utils",
          "signature": "Regex-\u003eByteString-\u003eEither WrapError(Maybe(Array Int(MatchOffset,MatchLength)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:execute-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits strings, using a \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e as delimiter.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "split",
          "package": "pcre-utils",
          "signature": "Regex-\u003e ByteString-\u003e IO (Either String [ByteString])",
          "type": "function"
        },
        "index": {
          "description": "Splits strings using Regex as delimiter",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "split",
          "normalized": "Regex-\u003eByteString-\u003eIO(Either String[ByteString])",
          "package": "pcre-utils",
          "signature": "Regex-\u003eByteString-\u003eIO(Either String[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure version of \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, using unsafePerformIO.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "split'",
          "package": "pcre-utils",
          "signature": "Regex-\u003e ByteString-\u003e Either String [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "pure version of split using unsafePerformIO",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "split'",
          "normalized": "Regex-\u003eByteString-\u003eEither String[ByteString]",
          "package": "pcre-utils",
          "signature": "Regex-\u003eByteString-\u003eEither String[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:split-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles the regular expression (using default options) and \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "splitCompile",
          "package": "pcre-utils",
          "signature": "ByteString-\u003e ByteString-\u003e IO (Either String [ByteString])",
          "type": "function"
        },
        "index": {
          "description": "Compiles the regular expression using default options and split",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "splitCompile",
          "normalized": "ByteString-\u003eByteString-\u003eIO(Either String[ByteString])",
          "package": "pcre-utils",
          "partial": "Compile",
          "signature": "ByteString-\u003eByteString-\u003eIO(Either String[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:splitCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure version of \u003ccode\u003e\u003ca\u003esplitCompile\u003c/a\u003e\u003c/code\u003e, using unsafePerformIO.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "splitCompile'",
          "package": "pcre-utils",
          "signature": "ByteString-\u003e ByteString-\u003e Either String [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "pure version of splitCompile using unsafePerformIO",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "splitCompile'",
          "normalized": "ByteString-\u003eByteString-\u003eEither String[ByteString]",
          "package": "pcre-utils",
          "partial": "Compile'",
          "signature": "ByteString-\u003eByteString-\u003eEither String[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:splitCompile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitutes values matched by a \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e. References can be used.\n\u003c/p\u003e\u003cp\u003eIt doesn't support anything else than global substitution for now ..\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "substitute",
          "package": "pcre-utils",
          "signature": "Regex-\u003e ByteString-\u003e ByteString-\u003e IO (Either String ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Substitutes values matched by Regex References can be used It doesn support anything else than global substitution for now",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "substitute",
          "normalized": "Regex-\u003eByteString-\u003eByteString-\u003eIO(Either String ByteString)",
          "package": "pcre-utils",
          "signature": "Regex-\u003eByteString-\u003eByteString-\u003eIO(Either String ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:substitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure version of \u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e, using unsafePerformIO.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "substitute'",
          "package": "pcre-utils",
          "signature": "Regex-\u003e ByteString-\u003e ByteString-\u003e Either String ByteString",
          "type": "function"
        },
        "index": {
          "description": "pure version of substitute using unsafePerformIO",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "substitute'",
          "normalized": "Regex-\u003eByteString-\u003eByteString-\u003eEither String ByteString",
          "package": "pcre-utils",
          "signature": "Regex-\u003eByteString-\u003eByteString-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:substitute-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles the regular expression (using default options) and \u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "substituteCompile",
          "package": "pcre-utils",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e IO (Either String ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Compiles the regular expression using default options and substitute",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "substituteCompile",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eIO(Either String ByteString)",
          "package": "pcre-utils",
          "partial": "Compile",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eIO(Either String ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:substituteCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure version of \u003ccode\u003e\u003ca\u003esubstituteCompile\u003c/a\u003e\u003c/code\u003e, using unsafePerformIO.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "substituteCompile'",
          "package": "pcre-utils",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Either String ByteString",
          "type": "function"
        },
        "index": {
          "description": "pure version of substituteCompile using unsafePerformIO",
          "hierarchy": "Text Regex PCRE ByteString Utils",
          "module": "Text.Regex.PCRE.ByteString.Utils",
          "name": "substituteCompile'",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eEither String ByteString",
          "package": "pcre-utils",
          "partial": "Compile'",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:substituteCompile-39-"
      }
    }
  ]
]