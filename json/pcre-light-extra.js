[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003epcre-light utility functions for more user friendly usage.\n Instead of adding execution and compile options to the matching and\n compiling functions, the options are added to the regular expression to be\n compiled or run. Furthermore support for different matching return types\n (using typeclass \u003ccode\u003e\u003ca\u003eMatchResult\u003c/a\u003e\u003c/code\u003e) and different regular expression types\n (compiled or uncompiled using typeclass \u003ccode\u003e\u003ca\u003eRegexLike\u003c/a\u003e\u003c/code\u003e) are supported.\n\u003c/p\u003e\u003cp\u003eexamples using GHC's -XOverloadedStrings flag:\n\u003c/p\u003e\u003cp\u003esimple matching with uncompiled pattern \u003ca\u003eabc\u003c/a\u003e of type ByteString:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(\"abc\" =~ (\"abc\" :: ByteString)) :: Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cp\u003ecase insensitive matching with uncompiled pattern of type ByteString:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(\"AbCasf\" =~ caseSensitive False \"abc\") :: Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(\"AbCasf\" =~ caseSensitive False \"abc\") :: Maybe [ByteString]\n\u003c/code\u003e\u003c/strong\u003eJust [\"AbC\"]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "module",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html",
        "fct-type": "module",
        "title": "Extra"
      },
      "index": {
        "description": "pcre-light utility functions for more user friendly usage Instead of adding execution and compile options to the matching and compiling functions the options are added to the regular expression to be compiled or run Furthermore support for different matching return types using typeclass MatchResult and different regular expression types compiled or uncompiled using typeclass RegexLike are supported examples using GHC XOverloadedStrings flag simple matching with uncompiled pattern abc of type ByteString abc abc ByteString Bool True case insensitive matching with uncompiled pattern of type ByteString AbCasf caseSensitive False abc Bool True AbCasf caseSensitive False abc Maybe ByteString Just AbC",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "Extra",
        "normalized": "",
        "package": "pcre-light-extra",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#t:MatchResult",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass defining automatic conversion of PCRE matching results\n to user defined type. Used in typeclass \u003ccode\u003e\u003ca\u003eRegexLike\u003c/a\u003e\u003c/code\u003e and function (\u003ccode\u003e\u003ca\u003e=~\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "class",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#MatchResult",
        "fct-type": "class",
        "title": "MatchResult"
      },
      "index": {
        "description": "Typeclass defining automatic conversion of PCRE matching results to user defined type Used in typeclass RegexLike and function",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "MatchResult",
        "normalized": "",
        "package": "pcre-light-extra",
        "partial": "Match Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#t:RegexExecPattern",
      "description": {
        "fct-descr": "\u003cp\u003eCompiled regular expression with execution results.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "data",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#RegexExecPattern",
        "fct-type": "data",
        "title": "RegexExecPattern"
      },
      "index": {
        "description": "Compiled regular expression with execution results",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "RegexExecPattern",
        "normalized": "",
        "package": "pcre-light-extra",
        "partial": "Regex Exec Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#t:RegexLike",
      "description": {
        "fct-descr": "\u003cp\u003eRegexLike types can be compiled to regular epxression or directly used\n as regular expression.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "class",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#RegexLike",
        "fct-type": "class",
        "title": "RegexLike"
      },
      "index": {
        "description": "RegexLike types can be compiled to regular epxression or directly used as regular expression",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "RegexLike",
        "normalized": "",
        "package": "pcre-light-extra",
        "partial": "Regex Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#t:RegexPattern",
      "description": {
        "fct-descr": "\u003cp\u003eUncompiled regular expression with compile and execution options.\n Compiles to RegexExecPattern preserving execution options.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "data",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#RegexPattern",
        "fct-type": "data",
        "title": "RegexPattern"
      },
      "index": {
        "description": "Uncompiled regular expression with compile and execution options Compiles to RegexExecPattern preserving execution options",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "RegexPattern",
        "normalized": "",
        "package": "pcre-light-extra",
        "partial": "Regex Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#v:-61--126-",
      "description": {
        "fct-descr": "\u003cp\u003ematches a ByteString with a regular expression.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "ByteString -\u003e regex -\u003e ret",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#%3D~",
        "fct-type": "function",
        "title": "(=~)"
      },
      "index": {
        "description": "matches ByteString with regular expression",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "(=~) =~",
        "normalized": "ByteString-\u003ea-\u003eb",
        "package": "pcre-light-extra",
        "partial": "",
        "signature": "ByteString-\u003eregex-\u003eret"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#v:Regex",
      "description": {
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "Regex [PCREOption] [PCREExecOption] ByteString",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#RegexPattern",
        "fct-type": "function",
        "title": "Regex"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "Regex",
        "normalized": "Regex[PCREOption][PCREExecOption]ByteString",
        "package": "pcre-light-extra",
        "partial": "Regex",
        "signature": "Regex[PCREOption][PCREExecOption]ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#v:RegexExec",
      "description": {
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "RegexExec [PCREExecOption] Regex",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#RegexExecPattern",
        "fct-type": "function",
        "title": "RegexExec"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "RegexExec",
        "normalized": "RegexExec[PCREExecOption]Regex",
        "package": "pcre-light-extra",
        "partial": "Regex Exec",
        "signature": "RegexExec[PCREExecOption]Regex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#v:caseSensitive",
      "description": {
        "fct-descr": "\u003cp\u003eCreate case sensitive (first parameter is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e) or case insensitive regular expression from pattern.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "Bool -\u003e ByteString -\u003e RegexPattern",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#caseSensitive",
        "fct-type": "function",
        "title": "caseSensitive"
      },
      "index": {
        "description": "Create case sensitive first parameter is True or case insensitive regular expression from pattern",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "caseSensitive",
        "normalized": "Bool-\u003eByteString-\u003eRegexPattern",
        "package": "pcre-light-extra",
        "partial": "Sensitive",
        "signature": "Bool-\u003eByteString-\u003eRegexPattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#v:cfg",
      "description": {
        "fct-descr": "\u003cp\u003ecreate regular expression with compile and execution options.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "[PCREOption] -\u003e [PCREExecOption] -\u003e ByteString -\u003e RegexPattern",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#cfg",
        "fct-type": "function",
        "title": "cfg"
      },
      "index": {
        "description": "create regular expression with compile and execution options",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "cfg",
        "normalized": "[PCREOption]-\u003e[PCREExecOption]-\u003eByteString-\u003eRegexPattern",
        "package": "pcre-light-extra",
        "partial": "",
        "signature": "[PCREOption]-\u003e[PCREExecOption]-\u003eByteString-\u003eRegexPattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#v:compile",
      "description": {
        "fct-descr": "\u003cp\u003ecompiles a perl-compatible regular expression to an executable\n regular expression. See \u003ccode\u003eText.Regex.PCRE.Light.compileM\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "rl -\u003e Either String (RegexType rl)",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#compile",
        "fct-type": "method",
        "title": "compile"
      },
      "index": {
        "description": "compiles perl-compatible regular expression to an executable regular expression See Text.Regex.PCRE.Light.compileM",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "compile",
        "normalized": "a-\u003eEither String(RegexType a)",
        "package": "pcre-light-extra",
        "partial": "",
        "signature": "rl-\u003eEither String(RegexType rl)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#v:convert",
      "description": {
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "Maybe [ByteString] -\u003e x",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#convert",
        "fct-type": "method",
        "title": "convert"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "convert",
        "normalized": "Maybe[ByteString]-\u003ea",
        "package": "pcre-light-extra",
        "partial": "",
        "signature": "Maybe[ByteString]-\u003ex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003ematches a Bytestring with a regular expression of type rl.\n If rl needs to be compiled (for example when rl ~ ByteString or\n rl ~ RegexPattern) but is invalid, an exception will be thrown. It is\n recommended to use compiled patterns with match for better error handling.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "rl -\u003e ByteString -\u003e res",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#match",
        "fct-type": "method",
        "title": "match"
      },
      "index": {
        "description": "matches Bytestring with regular expression of type rl If rl needs to be compiled for example when rl ByteString or rl RegexPattern but is invalid an exception will be thrown It is recommended to use compiled patterns with match for better error handling",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "match",
        "normalized": "a-\u003eByteString-\u003eb",
        "package": "pcre-light-extra",
        "partial": "",
        "signature": "rl-\u003eByteString-\u003eres"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-light-extra/docs/Text-Regex-PCRE-Light-Extra.html#v:withExecOpts",
      "description": {
        "fct-descr": "\u003cp\u003eAdd execution options to compiled regular expression of pcre-light's \n   compiled regular expression type \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Light.Extra",
        "fct-package": "pcre-light-extra",
        "fct-signature": "[PCREExecOption] -\u003e Regex -\u003e RegexExecPattern",
        "fct-source": "src/Text-Regex-PCRE-Light-Extra.html#withExecOpts",
        "fct-type": "function",
        "title": "withExecOpts"
      },
      "index": {
        "description": "Add execution options to compiled regular expression of pcre-light compiled regular expression type Regex",
        "hierarchy": "Text Regex PCRE Light Extra",
        "module": "Text.Regex.PCRE.Light.Extra",
        "name": "withExecOpts",
        "normalized": "[PCREExecOption]-\u003eRegex-\u003eRegexExecPattern",
        "package": "pcre-light-extra",
        "partial": "Exec Opts",
        "signature": "[PCREExecOption]-\u003eRegex-\u003eRegexExecPattern"
      }
    }
  }
]