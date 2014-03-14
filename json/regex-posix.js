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
        "word": "regex-posix"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides \u003ccode\u003e\u003ca\u003eLazy\u003c/a\u003e\u003c/code\u003e instances for RegexMaker and RegexLike\n based on \u003ca\u003eText.Regex.Posix.Wrap\u003c/a\u003e, and a (RegexContext Regex\n ByteString ByteString) instance.\n\u003c/p\u003e\u003cp\u003eTo use these instance, you would normally import\n \u003ca\u003eText.Regex.Posix\u003c/a\u003e.  You only need to import this module to use\n the medium level API of the compile, regexec, and execute\n functions.  All of these report error by returning Left values\n instead of undefined or error or fail.\n\u003c/p\u003e\u003cp\u003eA Lazy ByteString with more than one chunk cannot be be passed to\n the library efficiently (as a pointer).  It will have to converted\n via a full copy to a temporary normal bytestring (with a null byte\n appended if necessary).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "Lazy",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-ByteString-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "This provides Lazy instances for RegexMaker and RegexLike based on Text.Regex.Posix.Wrap and RegexContext Regex ByteString ByteString instance To use these instance you would normally import Text.Regex.Posix You only need to import this module to use the medium level API of the compile regexec and execute functions All of these report error by returning Left values instead of undefined or error or fail Lazy ByteString with more than one chunk cannot be be passed to the library efficiently as pointer It will have to converted via full copy to temporary normal bytestring with null byte appended if necessary",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "Lazy",
          "package": "regex-posix",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for compilation of regular\n expressions.  Option values (and their man 3 regcomp names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompBlank\u003c/a\u003e\u003c/code\u003e which is a completely zero value for all the flags.\n    This is also the \u003ccode\u003e\u003ca\u003eblankCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompExtended\u003c/a\u003e\u003c/code\u003e (REG_EXTENDED) which can be set to use extended instead\n    of basic regular expressions.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNewline\u003c/a\u003e\u003c/code\u003e (REG_NEWLINE) turns on newline sensitivity: The dot (.)\n    and inverted set \u003ccode\u003e[^ ]\u003c/code\u003e never match newline, and ^ and $ anchors do\n    match after and before newlines.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompIgnoreCase\u003c/a\u003e\u003c/code\u003e (REG_ICASE) which can be set to match ignoring upper\n    and lower distinctions.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNoSub\u003c/a\u003e\u003c/code\u003e (REG_NOSUB) which turns off all information from matching\n    except whether a match exists.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "CompOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#CompOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for compilation of regular expressions Option values and their man regcomp names are compBlank which is completely zero value for all the flags This is also the blankCompOpt value compExtended REG EXTENDED which can be set to use extended instead of basic regular expressions This is set in the defaultCompOpt value compNewline REG NEWLINE turns on newline sensitivity The dot and inverted set never match newline and and anchors do match after and before newlines This is set in the defaultCompOpt value compIgnoreCase REG ICASE which can be set to match ignoring upper and lower distinctions compNoSub REG NOSUB which turns off all information from matching except whether match exists",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "CompOption",
          "package": "regex-posix",
          "partial": "Comp Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#t:CompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for execution of compiled\n regular expressions.  Option values (and their man 3 regexec names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecBlank\u003c/a\u003e\u003c/code\u003e which is a complete zero value for all the flags.  This is\n    the blankExecOpt value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotBOL\u003c/a\u003e\u003c/code\u003e (REG_NOTBOL) can be set to prevent ^ from matching at the\n    start of the input.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotEOL\u003c/a\u003e\u003c/code\u003e (REG_NOTEOL) can be set to prevent $ from matching at the\n    end of the input (before the terminating NUL).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "ExecOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ExecOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for execution of compiled regular expressions Option values and their man regexec names are execBlank which is complete zero value for all the flags This is the blankExecOpt value execNotBOL REG NOTBOL can be set to prevent from matching at the start of the input execNotEOL REG NOTEOL can be set to prevent from matching at the end of the input before the terminating NUL",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "ExecOption",
          "package": "regex-posix",
          "partial": "Exec Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#t:ExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enon-negative length of a match\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "MatchLength",
          "package": "regex-posix",
          "type": "type"
        },
        "index": {
          "description": "non-negative length of match",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "MatchLength",
          "package": "regex-posix",
          "partial": "Match Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#t:MatchLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0 based index from start of source, or (-1) for unused\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "MatchOffset",
          "package": "regex-posix",
          "type": "type"
        },
        "index": {
          "description": "based index from start of source or for unused",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "MatchOffset",
          "package": "regex-posix",
          "partial": "Match Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#t:MatchOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "Regex",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#Regex",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "Regex",
          "package": "regex-posix",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturnCode is an enumerated \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e, corresponding to the error codes\n from \u003ccode\u003eman 3 regex\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadbr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADBR\u003c/code\u003e) invalid repetition count(s) in \u003ccode\u003e{ }\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadpat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADPAT\u003c/code\u003e) invalid regular expression\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadrpt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADRPT\u003c/code\u003e) \u003ccode\u003e?\u003c/code\u003e, \u003ccode\u003e*\u003c/code\u003e, or \u003ccode\u003e+\u003c/code\u003e operand invalid\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEcollate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECOLLATE\u003c/code\u003e) invalid collating element\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEctype\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECTYPE\u003c/code\u003e) invalid character class\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEescape\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EESCAPE\u003c/code\u003e) \u003ccode\u003e\\\u003c/code\u003e applied to unescapable character\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEsubreg\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESUBREG\u003c/code\u003e) invalid backreference number\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrack\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACK\u003c/code\u003e) brackets \u003ccode\u003e[ ]\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEparen\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EPAREN\u003c/code\u003e) parentheses \u003ccode\u003e( )\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACE\u003c/code\u003e) braces \u003ccode\u003e{ }\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretErange\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ERANGE\u003c/code\u003e) invalid character range in \u003ccode\u003e[ ]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEspace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESPACE\u003c/code\u003e) ran out of memory\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eretNoMatch\u003c/code\u003e (\u003ccode\u003eREG_NOMATCH\u003c/code\u003e) The regexec() function failed to match\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "ReturnCode",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ReturnCode",
          "type": "data"
        },
        "index": {
          "description": "ReturnCode is an enumerated CInt corresponding to the error codes from man regex retBadbr REG BADBR invalid repetition count in retBadpat REG BADPAT invalid regular expression retBadrpt REG BADRPT or operand invalid retEcollate REG ECOLLATE invalid collating element retEctype REG ECTYPE invalid character class retEescape REG EESCAPE applied to unescapable character retEsubreg REG ESUBREG invalid backreference number retEbrack REG EBRACK brackets not balanced retEparen REG EPAREN parentheses not balanced retEbrace REG EBRACE braces not balanced retErange REG ERANGE invalid character range in retEspace REG ESPACE ran out of memory retNoMatch REG NOMATCH The regexec function failed to match",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "ReturnCode",
          "package": "regex-posix",
          "partial": "Return Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#t:ReturnCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe return code will be retOk when it is the Haskell wrapper and\n not the underlying library generating the error message.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "WrapError",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#WrapError",
          "type": "type"
        },
        "index": {
          "description": "The return code will be retOk when it is the Haskell wrapper and not the underlying library generating the error message",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "WrapError",
          "package": "regex-posix",
          "partial": "Wrap Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#t:WrapError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "CompOption",
          "package": "regex-posix",
          "signature": "CompOption CInt",
          "source": "src/Text-Regex-Posix-Wrap.html#CompOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:CompOption\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:CompOption\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:CompOption\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:CompOption\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:CompOption\"]"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "CompOption",
          "package": "regex-posix",
          "partial": "Comp Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:CompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "ExecOption",
          "package": "regex-posix",
          "signature": "ExecOption CInt",
          "source": "src/Text-Regex-Posix-Wrap.html#ExecOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:ExecOption\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:ExecOption\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:ExecOption\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:ExecOption\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:ExecOption\"]"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "ExecOption",
          "package": "regex-posix",
          "partial": "Exec Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:ExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA completely zero value for all the flags.\n This is also the \u003ccode\u003e\u003ca\u003eblankCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "compBlank",
          "package": "regex-posix",
          "signature": "CompOption",
          "source": "src/Text-Regex-Posix-Wrap.html#compBlank",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compBlank\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:compBlank\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:compBlank\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:compBlank\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:compBlank\"]"
        },
        "index": {
          "description": "completely zero value for all the flags This is also the blankCompOpt value",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "compBlank",
          "package": "regex-posix",
          "partial": "Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "compExtended",
          "package": "regex-posix",
          "signature": "CompOption",
          "source": "src/Text-Regex-Posix-Wrap.html#compExtended",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compExtended\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:compExtended\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:compExtended\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:compExtended\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:compExtended\"]"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "compExtended",
          "package": "regex-posix",
          "partial": "Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compExtended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "compIgnoreCase",
          "package": "regex-posix",
          "signature": "CompOption",
          "source": "src/Text-Regex-Posix-Wrap.html#compIgnoreCase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compIgnoreCase\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:compIgnoreCase\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:compIgnoreCase\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:compIgnoreCase\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:compIgnoreCase\"]"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "compIgnoreCase",
          "package": "regex-posix",
          "partial": "Ignore Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compIgnoreCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "compNewline",
          "package": "regex-posix",
          "signature": "CompOption",
          "source": "src/Text-Regex-Posix-Wrap.html#compNewline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compNewline\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:compNewline\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:compNewline\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:compNewline\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:compNewline\"]"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "compNewline",
          "package": "regex-posix",
          "partial": "Newline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compNewline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "compNoSub",
          "package": "regex-posix",
          "signature": "CompOption",
          "source": "src/Text-Regex-Posix-Wrap.html#compNoSub",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compNoSub\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:compNoSub\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:compNoSub\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:compNoSub\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:compNoSub\"]"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "compNoSub",
          "package": "regex-posix",
          "partial": "No Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compNoSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles a regular expression\n\u003c/p\u003e",
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\"]",
          "name": "compile",
          "package": "regex-posix",
          "signature": "CompOption-\u003e ExecOption-\u003e ByteString-\u003e IO (Either WrapError Regex)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compile\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:compile\"]"
        },
        "index": {
          "description": "Compiles regular expression",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "compile",
          "normalized": "CompOption-\u003eExecOption-\u003eByteString-\u003eIO(Either WrapError Regex)",
          "package": "regex-posix",
          "signature": "CompOption-\u003eExecOption-\u003eByteString-\u003eIO(Either WrapError Regex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA completely zero value for all the flags.\n This is also the \u003ccode\u003e\u003ca\u003eblankExecOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "execBlank",
          "package": "regex-posix",
          "signature": "ExecOption",
          "source": "src/Text-Regex-Posix-Wrap.html#execBlank",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:execBlank\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:execBlank\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:execBlank\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:execBlank\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:execBlank\"]"
        },
        "index": {
          "description": "completely zero value for all the flags This is also the blankExecOpt value",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "execBlank",
          "package": "regex-posix",
          "partial": "Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:execBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "execNotBOL",
          "package": "regex-posix",
          "signature": "ExecOption",
          "source": "src/Text-Regex-Posix-Wrap.html#execNotBOL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:execNotBOL\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:execNotBOL\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:execNotBOL\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:execNotBOL\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:execNotBOL\"]"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "execNotBOL",
          "package": "regex-posix",
          "partial": "Not BOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:execNotBOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\",\"Text.Regex.Posix.Sequence\",\"Text.Regex.Posix.String\",\"Text.Regex.Posix.Wrap\"]",
          "name": "execNotEOL",
          "package": "regex-posix",
          "signature": "ExecOption",
          "source": "src/Text-Regex-Posix-Wrap.html#execNotEOL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:execNotEOL\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:execNotEOL\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:execNotEOL\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:execNotEOL\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:execNotEOL\"]"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "execNotEOL",
          "package": "regex-posix",
          "partial": "Not EOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:execNotEOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a regular expression against a buffer, returning the buffer\n indicies of the match, and any submatches\n\u003c/p\u003e\u003cp\u003e| Matches a regular expression against a string\n\u003c/p\u003e",
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\"]",
          "name": "execute",
          "package": "regex-posix",
          "signature": "Regex-\u003e ByteString-\u003e IO (Either WrapError (Maybe (Array Int (MatchOffset, MatchLength))))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:execute\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:execute\"]"
        },
        "index": {
          "description": "Matches regular expression against buffer returning the buffer indicies of the match and any submatches Matches regular expression against string",
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "execute",
          "normalized": "Regex-\u003eByteString-\u003eIO(Either WrapError(Maybe(Array Int(MatchOffset,MatchLength))))",
          "package": "regex-posix",
          "signature": "Regex-\u003eByteString-\u003eIO(Either WrapError(Maybe(Array Int(MatchOffset,MatchLength))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.Posix.ByteString.Lazy\",\"Text.Regex.Posix.ByteString\"]",
          "name": "regexec",
          "package": "regex-posix",
          "signature": "Regex-\u003e ByteString-\u003e IO (Either WrapError (Maybe (ByteString, ByteString, ByteString, [ByteString])))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:regexec\",\"http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:regexec\"]"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "regexec",
          "normalized": "Regex-\u003eByteString-\u003eIO(Either WrapError(Maybe(ByteString,ByteString,ByteString,[ByteString])))",
          "package": "regex-posix",
          "signature": "Regex-\u003eByteString-\u003eIO(Either WrapError(Maybe(ByteString,ByteString,ByteString,[ByteString])))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:regexec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "unusedOffset",
          "package": "regex-posix",
          "signature": "Int",
          "source": "src/Text-Regex-Posix-ByteString-Lazy.html#unusedOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString Lazy",
          "module": "Text.Regex.Posix.ByteString.Lazy",
          "name": "unusedOffset",
          "package": "regex-posix",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString-Lazy.html#v:unusedOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e instances for RegexMaker and RegexLike\n based on \u003ca\u003eText.Regex.Posix.Wrap\u003c/a\u003e, and a (RegexContext Regex\n ByteString ByteString) instance.\n\u003c/p\u003e\u003cp\u003eTo use these instance, you would normally import\n \u003ca\u003eText.Regex.Posix\u003c/a\u003e.  You only need to import this module to use\n the medium level API of the compile, regexec, and execute\n functions.  All of these report error by returning Left values\n instead of undefined or error or fail.\n\u003c/p\u003e\u003cp\u003eThe ByteString will only be passed to the library efficiently (as a\n pointer) if it ends in a NUL byte.  Otherwise a temporary copy must\n be made with the 0 byte appended.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.Posix.ByteString",
          "name": "ByteString",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "This provides ByteString instances for RegexMaker and RegexLike based on Text.Regex.Posix.Wrap and RegexContext Regex ByteString ByteString instance To use these instance you would normally import Text.Regex.Posix You only need to import this module to use the medium level API of the compile regexec and execute functions All of these report error by returning Left values instead of undefined or error or fail The ByteString will only be passed to the library efficiently as pointer if it ends in NUL byte Otherwise temporary copy must be made with the byte appended",
          "hierarchy": "Text Regex Posix ByteString",
          "module": "Text.Regex.Posix.ByteString",
          "name": "ByteString",
          "package": "regex-posix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for compilation of regular\n expressions.  Option values (and their man 3 regcomp names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompBlank\u003c/a\u003e\u003c/code\u003e which is a completely zero value for all the flags.\n    This is also the \u003ccode\u003e\u003ca\u003eblankCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompExtended\u003c/a\u003e\u003c/code\u003e (REG_EXTENDED) which can be set to use extended instead\n    of basic regular expressions.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNewline\u003c/a\u003e\u003c/code\u003e (REG_NEWLINE) turns on newline sensitivity: The dot (.)\n    and inverted set \u003ccode\u003e[^ ]\u003c/code\u003e never match newline, and ^ and $ anchors do\n    match after and before newlines.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompIgnoreCase\u003c/a\u003e\u003c/code\u003e (REG_ICASE) which can be set to match ignoring upper\n    and lower distinctions.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNoSub\u003c/a\u003e\u003c/code\u003e (REG_NOSUB) which turns off all information from matching\n    except whether a match exists.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.ByteString",
          "name": "CompOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#CompOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for compilation of regular expressions Option values and their man regcomp names are compBlank which is completely zero value for all the flags This is also the blankCompOpt value compExtended REG EXTENDED which can be set to use extended instead of basic regular expressions This is set in the defaultCompOpt value compNewline REG NEWLINE turns on newline sensitivity The dot and inverted set never match newline and and anchors do match after and before newlines This is set in the defaultCompOpt value compIgnoreCase REG ICASE which can be set to match ignoring upper and lower distinctions compNoSub REG NOSUB which turns off all information from matching except whether match exists",
          "hierarchy": "Text Regex Posix ByteString",
          "module": "Text.Regex.Posix.ByteString",
          "name": "CompOption",
          "package": "regex-posix",
          "partial": "Comp Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#t:CompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for execution of compiled\n regular expressions.  Option values (and their man 3 regexec names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecBlank\u003c/a\u003e\u003c/code\u003e which is a complete zero value for all the flags.  This is\n    the blankExecOpt value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotBOL\u003c/a\u003e\u003c/code\u003e (REG_NOTBOL) can be set to prevent ^ from matching at the\n    start of the input.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotEOL\u003c/a\u003e\u003c/code\u003e (REG_NOTEOL) can be set to prevent $ from matching at the\n    end of the input (before the terminating NUL).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.ByteString",
          "name": "ExecOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ExecOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for execution of compiled regular expressions Option values and their man regexec names are execBlank which is complete zero value for all the flags This is the blankExecOpt value execNotBOL REG NOTBOL can be set to prevent from matching at the start of the input execNotEOL REG NOTEOL can be set to prevent from matching at the end of the input before the terminating NUL",
          "hierarchy": "Text Regex Posix ByteString",
          "module": "Text.Regex.Posix.ByteString",
          "name": "ExecOption",
          "package": "regex-posix",
          "partial": "Exec Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#t:ExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enon-negative length of a match\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.ByteString",
          "name": "MatchLength",
          "package": "regex-posix",
          "type": "type"
        },
        "index": {
          "description": "non-negative length of match",
          "hierarchy": "Text Regex Posix ByteString",
          "module": "Text.Regex.Posix.ByteString",
          "name": "MatchLength",
          "package": "regex-posix",
          "partial": "Match Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#t:MatchLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0 based index from start of source, or (-1) for unused\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.ByteString",
          "name": "MatchOffset",
          "package": "regex-posix",
          "type": "type"
        },
        "index": {
          "description": "based index from start of source or for unused",
          "hierarchy": "Text Regex Posix ByteString",
          "module": "Text.Regex.Posix.ByteString",
          "name": "MatchOffset",
          "package": "regex-posix",
          "partial": "Match Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#t:MatchOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.ByteString",
          "name": "Regex",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#Regex",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression",
          "hierarchy": "Text Regex Posix ByteString",
          "module": "Text.Regex.Posix.ByteString",
          "name": "Regex",
          "package": "regex-posix",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturnCode is an enumerated \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e, corresponding to the error codes\n from \u003ccode\u003eman 3 regex\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadbr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADBR\u003c/code\u003e) invalid repetition count(s) in \u003ccode\u003e{ }\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadpat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADPAT\u003c/code\u003e) invalid regular expression\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadrpt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADRPT\u003c/code\u003e) \u003ccode\u003e?\u003c/code\u003e, \u003ccode\u003e*\u003c/code\u003e, or \u003ccode\u003e+\u003c/code\u003e operand invalid\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEcollate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECOLLATE\u003c/code\u003e) invalid collating element\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEctype\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECTYPE\u003c/code\u003e) invalid character class\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEescape\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EESCAPE\u003c/code\u003e) \u003ccode\u003e\\\u003c/code\u003e applied to unescapable character\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEsubreg\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESUBREG\u003c/code\u003e) invalid backreference number\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrack\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACK\u003c/code\u003e) brackets \u003ccode\u003e[ ]\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEparen\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EPAREN\u003c/code\u003e) parentheses \u003ccode\u003e( )\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACE\u003c/code\u003e) braces \u003ccode\u003e{ }\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretErange\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ERANGE\u003c/code\u003e) invalid character range in \u003ccode\u003e[ ]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEspace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESPACE\u003c/code\u003e) ran out of memory\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eretNoMatch\u003c/code\u003e (\u003ccode\u003eREG_NOMATCH\u003c/code\u003e) The regexec() function failed to match\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.ByteString",
          "name": "ReturnCode",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ReturnCode",
          "type": "data"
        },
        "index": {
          "description": "ReturnCode is an enumerated CInt corresponding to the error codes from man regex retBadbr REG BADBR invalid repetition count in retBadpat REG BADPAT invalid regular expression retBadrpt REG BADRPT or operand invalid retEcollate REG ECOLLATE invalid collating element retEctype REG ECTYPE invalid character class retEescape REG EESCAPE applied to unescapable character retEsubreg REG ESUBREG invalid backreference number retEbrack REG EBRACK brackets not balanced retEparen REG EPAREN parentheses not balanced retEbrace REG EBRACE braces not balanced retErange REG ERANGE invalid character range in retEspace REG ESPACE ran out of memory retNoMatch REG NOMATCH The regexec function failed to match",
          "hierarchy": "Text Regex Posix ByteString",
          "module": "Text.Regex.Posix.ByteString",
          "name": "ReturnCode",
          "package": "regex-posix",
          "partial": "Return Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#t:ReturnCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe return code will be retOk when it is the Haskell wrapper and\n not the underlying library generating the error message.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.ByteString",
          "name": "WrapError",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#WrapError",
          "type": "type"
        },
        "index": {
          "description": "The return code will be retOk when it is the Haskell wrapper and not the underlying library generating the error message",
          "hierarchy": "Text Regex Posix ByteString",
          "module": "Text.Regex.Posix.ByteString",
          "name": "WrapError",
          "package": "regex-posix",
          "partial": "Wrap Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#t:WrapError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.ByteString",
          "name": "unusedOffset",
          "package": "regex-posix",
          "signature": "Int",
          "source": "src/Text-Regex-Posix-ByteString.html#unusedOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix ByteString",
          "module": "Text.Regex.Posix.ByteString",
          "name": "unusedOffset",
          "package": "regex-posix",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-ByteString.html#v:unusedOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eRegexMaker\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRegexLike\u003c/a\u003e\u003c/code\u003e based\n on \u003ca\u003eText.Regex.Posix.Wrap\u003c/a\u003e, and a (\u003ccode\u003e\u003ca\u003eRegexContext\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\n instance.\n\u003c/p\u003e\u003cp\u003eTo use these instance, you would normally import\n \u003ca\u003eText.Regex.Posix\u003c/a\u003e.  You only need to import this module to use\n the medium level API of the compile, regexec, and execute\n functions.  All of these report error by returning Left values\n instead of undefined or error or fail.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "Sequence",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Sequence.html",
          "type": "module"
        },
        "index": {
          "description": "This provides String instances for RegexMaker and RegexLike based on Text.Regex.Posix.Wrap and RegexContext Regex String String instance To use these instance you would normally import Text.Regex.Posix You only need to import this module to use the medium level API of the compile regexec and execute functions All of these report error by returning Left values instead of undefined or error or fail",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "Sequence",
          "package": "regex-posix",
          "partial": "Sequence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for compilation of regular\n expressions.  Option values (and their man 3 regcomp names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompBlank\u003c/a\u003e\u003c/code\u003e which is a completely zero value for all the flags.\n    This is also the \u003ccode\u003e\u003ca\u003eblankCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompExtended\u003c/a\u003e\u003c/code\u003e (REG_EXTENDED) which can be set to use extended instead\n    of basic regular expressions.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNewline\u003c/a\u003e\u003c/code\u003e (REG_NEWLINE) turns on newline sensitivity: The dot (.)\n    and inverted set \u003ccode\u003e[^ ]\u003c/code\u003e never match newline, and ^ and $ anchors do\n    match after and before newlines.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompIgnoreCase\u003c/a\u003e\u003c/code\u003e (REG_ICASE) which can be set to match ignoring upper\n    and lower distinctions.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNoSub\u003c/a\u003e\u003c/code\u003e (REG_NOSUB) which turns off all information from matching\n    except whether a match exists.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "CompOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#CompOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for compilation of regular expressions Option values and their man regcomp names are compBlank which is completely zero value for all the flags This is also the blankCompOpt value compExtended REG EXTENDED which can be set to use extended instead of basic regular expressions This is set in the defaultCompOpt value compNewline REG NEWLINE turns on newline sensitivity The dot and inverted set never match newline and and anchors do match after and before newlines This is set in the defaultCompOpt value compIgnoreCase REG ICASE which can be set to match ignoring upper and lower distinctions compNoSub REG NOSUB which turns off all information from matching except whether match exists",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "CompOption",
          "package": "regex-posix",
          "partial": "Comp Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#t:CompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for execution of compiled\n regular expressions.  Option values (and their man 3 regexec names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecBlank\u003c/a\u003e\u003c/code\u003e which is a complete zero value for all the flags.  This is\n    the blankExecOpt value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotBOL\u003c/a\u003e\u003c/code\u003e (REG_NOTBOL) can be set to prevent ^ from matching at the\n    start of the input.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotEOL\u003c/a\u003e\u003c/code\u003e (REG_NOTEOL) can be set to prevent $ from matching at the\n    end of the input (before the terminating NUL).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "ExecOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ExecOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for execution of compiled regular expressions Option values and their man regexec names are execBlank which is complete zero value for all the flags This is the blankExecOpt value execNotBOL REG NOTBOL can be set to prevent from matching at the start of the input execNotEOL REG NOTEOL can be set to prevent from matching at the end of the input before the terminating NUL",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "ExecOption",
          "package": "regex-posix",
          "partial": "Exec Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#t:ExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enon-negative length of a match\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "MatchLength",
          "package": "regex-posix",
          "type": "type"
        },
        "index": {
          "description": "non-negative length of match",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "MatchLength",
          "package": "regex-posix",
          "partial": "Match Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#t:MatchLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0 based index from start of source, or (-1) for unused\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "MatchOffset",
          "package": "regex-posix",
          "type": "type"
        },
        "index": {
          "description": "based index from start of source or for unused",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "MatchOffset",
          "package": "regex-posix",
          "partial": "Match Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#t:MatchOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "Regex",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#Regex",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "Regex",
          "package": "regex-posix",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturnCode is an enumerated \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e, corresponding to the error codes\n from \u003ccode\u003eman 3 regex\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadbr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADBR\u003c/code\u003e) invalid repetition count(s) in \u003ccode\u003e{ }\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadpat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADPAT\u003c/code\u003e) invalid regular expression\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadrpt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADRPT\u003c/code\u003e) \u003ccode\u003e?\u003c/code\u003e, \u003ccode\u003e*\u003c/code\u003e, or \u003ccode\u003e+\u003c/code\u003e operand invalid\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEcollate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECOLLATE\u003c/code\u003e) invalid collating element\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEctype\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECTYPE\u003c/code\u003e) invalid character class\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEescape\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EESCAPE\u003c/code\u003e) \u003ccode\u003e\\\u003c/code\u003e applied to unescapable character\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEsubreg\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESUBREG\u003c/code\u003e) invalid backreference number\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrack\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACK\u003c/code\u003e) brackets \u003ccode\u003e[ ]\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEparen\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EPAREN\u003c/code\u003e) parentheses \u003ccode\u003e( )\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACE\u003c/code\u003e) braces \u003ccode\u003e{ }\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretErange\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ERANGE\u003c/code\u003e) invalid character range in \u003ccode\u003e[ ]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEspace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESPACE\u003c/code\u003e) ran out of memory\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eretNoMatch\u003c/code\u003e (\u003ccode\u003eREG_NOMATCH\u003c/code\u003e) The regexec() function failed to match\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "ReturnCode",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ReturnCode",
          "type": "data"
        },
        "index": {
          "description": "ReturnCode is an enumerated CInt corresponding to the error codes from man regex retBadbr REG BADBR invalid repetition count in retBadpat REG BADPAT invalid regular expression retBadrpt REG BADRPT or operand invalid retEcollate REG ECOLLATE invalid collating element retEctype REG ECTYPE invalid character class retEescape REG EESCAPE applied to unescapable character retEsubreg REG ESUBREG invalid backreference number retEbrack REG EBRACK brackets not balanced retEparen REG EPAREN parentheses not balanced retEbrace REG EBRACE braces not balanced retErange REG ERANGE invalid character range in retEspace REG ESPACE ran out of memory retNoMatch REG NOMATCH The regexec function failed to match",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "ReturnCode",
          "package": "regex-posix",
          "partial": "Return Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#t:ReturnCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe return code will be retOk when it is the Haskell wrapper and\n not the underlying library generating the error message.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "WrapError",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#WrapError",
          "type": "type"
        },
        "index": {
          "description": "The return code will be retOk when it is the Haskell wrapper and not the underlying library generating the error message",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "WrapError",
          "package": "regex-posix",
          "partial": "Wrap Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#t:WrapError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Sequence",
          "name": "compile",
          "package": "regex-posix",
          "signature": "CompOption-\u003e ExecOption-\u003e Seq Char-\u003e IO (Either WrapError Regex)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "compile",
          "normalized": "CompOption-\u003eExecOption-\u003eSeq Char-\u003eIO(Either WrapError Regex)",
          "package": "regex-posix",
          "signature": "CompOption-\u003eExecOption-\u003eSeq Char-\u003eIO(Either WrapError Regex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a regular expression against a string\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "execute",
          "package": "regex-posix",
          "signature": "Regex-\u003e Seq Char-\u003e IO (Either WrapError (Maybe (Array Int (MatchOffset, MatchLength))))",
          "type": "function"
        },
        "index": {
          "description": "Matches regular expression against string",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "execute",
          "normalized": "Regex-\u003eSeq Char-\u003eIO(Either WrapError(Maybe(Array Int(MatchOffset,MatchLength))))",
          "package": "regex-posix",
          "signature": "Regex-\u003eSeq Char-\u003eIO(Either WrapError(Maybe(Array Int(MatchOffset,MatchLength))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a regular expression against a string\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Sequence",
          "name": "regexec",
          "package": "regex-posix",
          "signature": "Regex-\u003e Seq Char-\u003e IO (Either WrapError (Maybe (Seq Char, Seq Char, Seq Char, [Seq Char])))",
          "type": "function"
        },
        "index": {
          "description": "Matches regular expression against string",
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "regexec",
          "normalized": "Regex-\u003eSeq Char-\u003eIO(Either WrapError(Maybe(Seq Char,Seq Char,Seq Char,[Seq Char])))",
          "package": "regex-posix",
          "signature": "Regex-\u003eSeq Char-\u003eIO(Either WrapError(Maybe(Seq Char,Seq Char,Seq Char,[Seq Char])))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:regexec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Sequence",
          "name": "unusedOffset",
          "package": "regex-posix",
          "signature": "Int",
          "source": "src/Text-Regex-Posix-Sequence.html#unusedOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Sequence",
          "module": "Text.Regex.Posix.Sequence",
          "name": "unusedOffset",
          "package": "regex-posix",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Sequence.html#v:unusedOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eRegexMaker\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRegexLike\u003c/a\u003e\u003c/code\u003e based\n on \u003ca\u003eText.Regex.Posix.Wrap\u003c/a\u003e, and a (\u003ccode\u003e\u003ca\u003eRegexContext\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\n instance.\n\u003c/p\u003e\u003cp\u003eTo use these instance, you would normally import\n \u003ca\u003eText.Regex.Posix\u003c/a\u003e.  You only need to import this module to use\n the medium level API of the compile, regexec, and execute\n functions.  All of these report error by returning Left values\n instead of undefined or error or fail.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "String",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-String.html",
          "type": "module"
        },
        "index": {
          "description": "This provides String instances for RegexMaker and RegexLike based on Text.Regex.Posix.Wrap and RegexContext Regex String String instance To use these instance you would normally import Text.Regex.Posix You only need to import this module to use the medium level API of the compile regexec and execute functions All of these report error by returning Left values instead of undefined or error or fail",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "String",
          "package": "regex-posix",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for compilation of regular\n expressions.  Option values (and their man 3 regcomp names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompBlank\u003c/a\u003e\u003c/code\u003e which is a completely zero value for all the flags.\n    This is also the \u003ccode\u003e\u003ca\u003eblankCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompExtended\u003c/a\u003e\u003c/code\u003e (REG_EXTENDED) which can be set to use extended instead\n    of basic regular expressions.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNewline\u003c/a\u003e\u003c/code\u003e (REG_NEWLINE) turns on newline sensitivity: The dot (.)\n    and inverted set \u003ccode\u003e[^ ]\u003c/code\u003e never match newline, and ^ and $ anchors do\n    match after and before newlines.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompIgnoreCase\u003c/a\u003e\u003c/code\u003e (REG_ICASE) which can be set to match ignoring upper\n    and lower distinctions.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNoSub\u003c/a\u003e\u003c/code\u003e (REG_NOSUB) which turns off all information from matching\n    except whether a match exists.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "CompOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#CompOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for compilation of regular expressions Option values and their man regcomp names are compBlank which is completely zero value for all the flags This is also the blankCompOpt value compExtended REG EXTENDED which can be set to use extended instead of basic regular expressions This is set in the defaultCompOpt value compNewline REG NEWLINE turns on newline sensitivity The dot and inverted set never match newline and and anchors do match after and before newlines This is set in the defaultCompOpt value compIgnoreCase REG ICASE which can be set to match ignoring upper and lower distinctions compNoSub REG NOSUB which turns off all information from matching except whether match exists",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "CompOption",
          "package": "regex-posix",
          "partial": "Comp Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#t:CompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for execution of compiled\n regular expressions.  Option values (and their man 3 regexec names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecBlank\u003c/a\u003e\u003c/code\u003e which is a complete zero value for all the flags.  This is\n    the blankExecOpt value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotBOL\u003c/a\u003e\u003c/code\u003e (REG_NOTBOL) can be set to prevent ^ from matching at the\n    start of the input.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotEOL\u003c/a\u003e\u003c/code\u003e (REG_NOTEOL) can be set to prevent $ from matching at the\n    end of the input (before the terminating NUL).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "ExecOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ExecOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for execution of compiled regular expressions Option values and their man regexec names are execBlank which is complete zero value for all the flags This is the blankExecOpt value execNotBOL REG NOTBOL can be set to prevent from matching at the start of the input execNotEOL REG NOTEOL can be set to prevent from matching at the end of the input before the terminating NUL",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "ExecOption",
          "package": "regex-posix",
          "partial": "Exec Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#t:ExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enon-negative length of a match\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "MatchLength",
          "package": "regex-posix",
          "type": "type"
        },
        "index": {
          "description": "non-negative length of match",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "MatchLength",
          "package": "regex-posix",
          "partial": "Match Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#t:MatchLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0 based index from start of source, or (-1) for unused\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "MatchOffset",
          "package": "regex-posix",
          "type": "type"
        },
        "index": {
          "description": "based index from start of source or for unused",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "MatchOffset",
          "package": "regex-posix",
          "partial": "Match Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#t:MatchOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "Regex",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#Regex",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "Regex",
          "package": "regex-posix",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturnCode is an enumerated \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e, corresponding to the error codes\n from \u003ccode\u003eman 3 regex\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadbr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADBR\u003c/code\u003e) invalid repetition count(s) in \u003ccode\u003e{ }\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadpat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADPAT\u003c/code\u003e) invalid regular expression\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadrpt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADRPT\u003c/code\u003e) \u003ccode\u003e?\u003c/code\u003e, \u003ccode\u003e*\u003c/code\u003e, or \u003ccode\u003e+\u003c/code\u003e operand invalid\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEcollate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECOLLATE\u003c/code\u003e) invalid collating element\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEctype\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECTYPE\u003c/code\u003e) invalid character class\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEescape\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EESCAPE\u003c/code\u003e) \u003ccode\u003e\\\u003c/code\u003e applied to unescapable character\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEsubreg\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESUBREG\u003c/code\u003e) invalid backreference number\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrack\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACK\u003c/code\u003e) brackets \u003ccode\u003e[ ]\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEparen\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EPAREN\u003c/code\u003e) parentheses \u003ccode\u003e( )\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACE\u003c/code\u003e) braces \u003ccode\u003e{ }\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretErange\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ERANGE\u003c/code\u003e) invalid character range in \u003ccode\u003e[ ]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEspace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESPACE\u003c/code\u003e) ran out of memory\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eretNoMatch\u003c/code\u003e (\u003ccode\u003eREG_NOMATCH\u003c/code\u003e) The regexec() function failed to match\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "ReturnCode",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ReturnCode",
          "type": "data"
        },
        "index": {
          "description": "ReturnCode is an enumerated CInt corresponding to the error codes from man regex retBadbr REG BADBR invalid repetition count in retBadpat REG BADPAT invalid regular expression retBadrpt REG BADRPT or operand invalid retEcollate REG ECOLLATE invalid collating element retEctype REG ECTYPE invalid character class retEescape REG EESCAPE applied to unescapable character retEsubreg REG ESUBREG invalid backreference number retEbrack REG EBRACK brackets not balanced retEparen REG EPAREN parentheses not balanced retEbrace REG EBRACE braces not balanced retErange REG ERANGE invalid character range in retEspace REG ESPACE ran out of memory retNoMatch REG NOMATCH The regexec function failed to match",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "ReturnCode",
          "package": "regex-posix",
          "partial": "Return Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#t:ReturnCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe return code will be retOk when it is the Haskell wrapper and\n not the underlying library generating the error message.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "WrapError",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#WrapError",
          "type": "type"
        },
        "index": {
          "description": "The return code will be retOk when it is the Haskell wrapper and not the underlying library generating the error message",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "WrapError",
          "package": "regex-posix",
          "partial": "Wrap Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#t:WrapError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.String",
          "name": "compile",
          "package": "regex-posix",
          "signature": "CompOption-\u003e ExecOption-\u003e String-\u003e IO (Either WrapError Regex)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "compile",
          "normalized": "CompOption-\u003eExecOption-\u003eString-\u003eIO(Either WrapError Regex)",
          "package": "regex-posix",
          "signature": "CompOption-\u003eExecOption-\u003eString-\u003eIO(Either WrapError Regex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a regular expression against a string\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "execute",
          "package": "regex-posix",
          "signature": "Regex-\u003e String-\u003e IO (Either WrapError (Maybe (Array Int (MatchOffset, MatchLength))))",
          "type": "function"
        },
        "index": {
          "description": "Matches regular expression against string",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "execute",
          "normalized": "Regex-\u003eString-\u003eIO(Either WrapError(Maybe(Array Int(MatchOffset,MatchLength))))",
          "package": "regex-posix",
          "signature": "Regex-\u003eString-\u003eIO(Either WrapError(Maybe(Array Int(MatchOffset,MatchLength))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a regular expression against a string\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.String",
          "name": "regexec",
          "package": "regex-posix",
          "signature": "Regex-\u003e String-\u003e IO (Either WrapError (Maybe (String, String, String, [String])))",
          "type": "function"
        },
        "index": {
          "description": "Matches regular expression against string",
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "regexec",
          "normalized": "Regex-\u003eString-\u003eIO(Either WrapError(Maybe(String,String,String,[String])))",
          "package": "regex-posix",
          "signature": "Regex-\u003eString-\u003eIO(Either WrapError(Maybe(String,String,String,[String])))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:regexec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.String",
          "name": "unusedOffset",
          "package": "regex-posix",
          "signature": "Int",
          "source": "src/Text-Regex-Posix-String.html#unusedOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix String",
          "module": "Text.Regex.Posix.String",
          "name": "unusedOffset",
          "package": "regex-posix",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-String.html#v:unusedOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrapPosix.hsc exports a wrapped version of the ffi imports.  To\n increase type safety, the flags are newtype'd.  The other important\n export is a \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e type that is specific to the Posix library\n backend.  The flags are documented in \u003ca\u003eText.Regex.Posix\u003c/a\u003e.  The\n \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e(compExtended .|. compNewline)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCompOption\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eExecOption\u003c/a\u003e\u003c/code\u003e types and their \u003ccode\u003e\u003ca\u003eRegexOptions\u003c/a\u003e\u003c/code\u003e\n instance is declared.  The \u003ccode\u003e\u003ca\u003e=~\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e=~~\u003c/a\u003e\u003c/code\u003e convenience functions are\n defined.\n\u003c/p\u003e\u003cp\u003eThe exported symbols are the same whether 1 is defined, but\n when it is not defined then \u003ccode\u003egetVersion == Nothing\u003c/code\u003e and all other\n exported values will call error or fail.\n\u003c/p\u003e\u003cp\u003eThis module will fail or error only if allocation fails or a nullPtr\n is passed in.\n\u003c/p\u003e\u003cp\u003e2009-January : wrapMatchAll and wrapCount now adjust the execution\n option execNotBOL after the first result to take into account '\\n'\n in the text immediately before the next matches. (version 0.93.3)\n\u003c/p\u003e\u003cp\u003e2009-January : wrapMatchAll and wrapCount have been changed to\n return all non-overlapping matches, including empty matches even if\n they coincide with the end of the previous non-empty match.  The\n change is that the first non-empty match no longer terminates the\n search.  One can filter the results to obtain the old behavior or\n to obtain the behavior of \u003ca\u003esed\u003c/a\u003e, where \u003ca\u003esed\u003c/a\u003e eliminates the empty\n matches which coincide with the end of non-empty matches. (version\n 0.94.0)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.Posix.Wrap",
          "name": "Wrap",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html",
          "type": "module"
        },
        "index": {
          "description": "WrapPosix.hsc exports wrapped version of the ffi imports To increase type safety the flags are newtype The other important export is Regex type that is specific to the Posix library backend The flags are documented in Text.Regex.Posix The defaultCompOpt is compExtended compNewline The Regex CompOption and ExecOption types and their RegexOptions instance is declared The and convenience functions are defined The exported symbols are the same whether is defined but when it is not defined then getVersion Nothing and all other exported values will call error or fail This module will fail or error only if allocation fails or nullPtr is passed in January wrapMatchAll and wrapCount now adjust the execution option execNotBOL after the first result to take into account in the text immediately before the next matches version January wrapMatchAll and wrapCount have been changed to return all non-overlapping matches including empty matches even if they coincide with the end of the previous non-empty match The change is that the first non-empty match no longer terminates the search One can filter the results to obtain the old behavior or to obtain the behavior of sed where sed eliminates the empty matches which coincide with the end of non-empty matches version",
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "Wrap",
          "package": "regex-posix",
          "partial": "Wrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for compilation of regular\n expressions.  Option values (and their man 3 regcomp names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompBlank\u003c/a\u003e\u003c/code\u003e which is a completely zero value for all the flags.\n    This is also the \u003ccode\u003e\u003ca\u003eblankCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompExtended\u003c/a\u003e\u003c/code\u003e (REG_EXTENDED) which can be set to use extended instead\n    of basic regular expressions.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNewline\u003c/a\u003e\u003c/code\u003e (REG_NEWLINE) turns on newline sensitivity: The dot (.)\n    and inverted set \u003ccode\u003e[^ ]\u003c/code\u003e never match newline, and ^ and $ anchors do\n    match after and before newlines.\n    This is set in the \u003ccode\u003e\u003ca\u003edefaultCompOpt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompIgnoreCase\u003c/a\u003e\u003c/code\u003e (REG_ICASE) which can be set to match ignoring upper\n    and lower distinctions.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecompNoSub\u003c/a\u003e\u003c/code\u003e (REG_NOSUB) which turns off all information from matching\n    except whether a match exists.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.Wrap",
          "name": "CompOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#CompOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for compilation of regular expressions Option values and their man regcomp names are compBlank which is completely zero value for all the flags This is also the blankCompOpt value compExtended REG EXTENDED which can be set to use extended instead of basic regular expressions This is set in the defaultCompOpt value compNewline REG NEWLINE turns on newline sensitivity The dot and inverted set never match newline and and anchors do match after and before newlines This is set in the defaultCompOpt value compIgnoreCase REG ICASE which can be set to match ignoring upper and lower distinctions compNoSub REG NOSUB which turns off all information from matching except whether match exists",
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "CompOption",
          "package": "regex-posix",
          "partial": "Comp Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#t:CompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmapped \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e containing options for execution of compiled\n regular expressions.  Option values (and their man 3 regexec names) are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecBlank\u003c/a\u003e\u003c/code\u003e which is a complete zero value for all the flags.  This is\n    the blankExecOpt value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotBOL\u003c/a\u003e\u003c/code\u003e (REG_NOTBOL) can be set to prevent ^ from matching at the\n    start of the input.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecNotEOL\u003c/a\u003e\u003c/code\u003e (REG_NOTEOL) can be set to prevent $ from matching at the\n    end of the input (before the terminating NUL).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.Wrap",
          "name": "ExecOption",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ExecOption",
          "type": "newtype"
        },
        "index": {
          "description": "bitmapped CInt containing options for execution of compiled regular expressions Option values and their man regexec names are execBlank which is complete zero value for all the flags This is the blankExecOpt value execNotBOL REG NOTBOL can be set to prevent from matching at the start of the input execNotEOL REG NOTEOL can be set to prevent from matching at the end of the input before the terminating NUL",
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "ExecOption",
          "package": "regex-posix",
          "partial": "Exec Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#t:ExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegOffset is \u003ca\u003etypedef int regoff_t\u003c/a\u003e on Linux and ultimately \u003ca\u003etypedef\n long long __int64_t\u003c/a\u003e on Max OS X.  So rather than saying\n 2,147,483,647 is all the length you need, I'll take the larger:\n 9,223,372,036,854,775,807 should be enough bytes for anyone, no\n need for Integer. The alternative is to compile to different sizes\n in a platform dependent manner with \u003ca\u003etype RegOffset = (\u003c/a\u003e, which I do not want to do.\n\u003c/p\u003e\u003cp\u003eThere is also a special value \u003ccode\u003e\u003ca\u003eunusedRegOffset\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eRegOffset\u003c/a\u003e\u003c/code\u003e which is\n (-1) and as a starting index means that the subgroup capture was\n unused.  Otherwise the RegOffset indicates a character boundary that\n is before the character at that index offset, with the first\n character at index offset 0. So starting at 1 and ending at 2 means\n to take only the second character.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Wrap",
          "name": "RegOffset",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#RegOffset",
          "type": "type"
        },
        "index": {
          "description": "RegOffset is typedef int regoff on Linux and ultimately typedef long long int64 on Max OS So rather than saying is all the length you need ll take the larger should be enough bytes for anyone no need for Integer The alternative is to compile to different sizes in platform dependent manner with type RegOffset which do not want to do There is also special value unusedRegOffset RegOffset which is and as starting index means that the subgroup capture was unused Otherwise the RegOffset indicates character boundary that is before the character at that index offset with the first character at index offset So starting at and ending at means to take only the second character",
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "RegOffset",
          "package": "regex-posix",
          "partial": "Reg Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#t:RegOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "RegOffsetT",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#RegOffsetT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "RegOffsetT",
          "package": "regex-posix",
          "partial": "Reg Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#t:RegOffsetT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Wrap",
          "name": "Regex",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#Regex",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression",
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "Regex",
          "package": "regex-posix",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturnCode is an enumerated \u003ccode\u003e\u003ca\u003eCInt\u003c/a\u003e\u003c/code\u003e, corresponding to the error codes\n from \u003ccode\u003eman 3 regex\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadbr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADBR\u003c/code\u003e) invalid repetition count(s) in \u003ccode\u003e{ }\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadpat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADPAT\u003c/code\u003e) invalid regular expression\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretBadrpt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_BADRPT\u003c/code\u003e) \u003ccode\u003e?\u003c/code\u003e, \u003ccode\u003e*\u003c/code\u003e, or \u003ccode\u003e+\u003c/code\u003e operand invalid\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEcollate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECOLLATE\u003c/code\u003e) invalid collating element\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEctype\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ECTYPE\u003c/code\u003e) invalid character class\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEescape\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EESCAPE\u003c/code\u003e) \u003ccode\u003e\\\u003c/code\u003e applied to unescapable character\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEsubreg\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESUBREG\u003c/code\u003e) invalid backreference number\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrack\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACK\u003c/code\u003e) brackets \u003ccode\u003e[ ]\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEparen\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EPAREN\u003c/code\u003e) parentheses \u003ccode\u003e( )\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEbrace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_EBRACE\u003c/code\u003e) braces \u003ccode\u003e{ }\u003c/code\u003e not balanced\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretErange\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ERANGE\u003c/code\u003e) invalid character range in \u003ccode\u003e[ ]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eretEspace\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eREG_ESPACE\u003c/code\u003e) ran out of memory\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eretNoMatch\u003c/code\u003e (\u003ccode\u003eREG_NOMATCH\u003c/code\u003e) The regexec() function failed to match\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Regex.Posix.Wrap",
          "name": "ReturnCode",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#ReturnCode",
          "type": "newtype"
        },
        "index": {
          "description": "ReturnCode is an enumerated CInt corresponding to the error codes from man regex retBadbr REG BADBR invalid repetition count in retBadpat REG BADPAT invalid regular expression retBadrpt REG BADRPT or operand invalid retEcollate REG ECOLLATE invalid collating element retEctype REG ECTYPE invalid character class retEescape REG EESCAPE applied to unescapable character retEsubreg REG ESUBREG invalid backreference number retEbrack REG EBRACK brackets not balanced retEparen REG EPAREN parentheses not balanced retEbrace REG EBRACE braces not balanced retErange REG ERANGE invalid character range in retEspace REG ESPACE ran out of memory retNoMatch REG NOMATCH The regexec function failed to match",
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "ReturnCode",
          "package": "regex-posix",
          "partial": "Return Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#t:ReturnCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe return code will be retOk when it is the Haskell wrapper and\n not the underlying library generating the error message.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Wrap",
          "name": "WrapError",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix-Wrap.html#WrapError",
          "type": "type"
        },
        "index": {
          "description": "The return code will be retOk when it is the Haskell wrapper and not the underlying library generating the error message",
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "WrapError",
          "package": "regex-posix",
          "partial": "Wrap Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#t:WrapError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "(=~)",
          "package": "regex-posix",
          "signature": "source1 -\u003e source -\u003e target",
          "source": "src/Text-Regex-Posix-Wrap.html#%3D~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "(=~) =~",
          "normalized": "a-\u003ea-\u003eb",
          "package": "regex-posix",
          "signature": "source-\u003esource-\u003etarget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:-61--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "(=~~)",
          "package": "regex-posix",
          "signature": "source1 -\u003e source -\u003e m target",
          "source": "src/Text-Regex-Posix-Wrap.html#%3D~~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "(=~~) =~~",
          "normalized": "a-\u003ea-\u003eb c",
          "package": "regex-posix",
          "signature": "source-\u003esource-\u003em target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:-61--126--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "ReturnCode",
          "package": "regex-posix",
          "signature": "ReturnCode CInt",
          "source": "src/Text-Regex-Posix-Wrap.html#ReturnCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "ReturnCode",
          "package": "regex-posix",
          "partial": "Return Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:ReturnCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retBadbr",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retBadbr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retBadbr",
          "package": "regex-posix",
          "partial": "Badbr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retBadbr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retBadpat",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retBadpat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retBadpat",
          "package": "regex-posix",
          "partial": "Badpat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retBadpat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retBadrpt",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retBadrpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retBadrpt",
          "package": "regex-posix",
          "partial": "Badrpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retBadrpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEbrace",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retEbrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEbrace",
          "package": "regex-posix",
          "partial": "Ebrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retEbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEbrack",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retEbrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEbrack",
          "package": "regex-posix",
          "partial": "Ebrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retEbrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEcollate",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retEcollate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEcollate",
          "package": "regex-posix",
          "partial": "Ecollate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retEcollate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEctype",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retEctype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEctype",
          "package": "regex-posix",
          "partial": "Ectype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retEctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEescape",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retEescape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEescape",
          "package": "regex-posix",
          "partial": "Eescape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retEescape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEparen",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retEparen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEparen",
          "package": "regex-posix",
          "partial": "Eparen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retEparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retErange",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retErange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retErange",
          "package": "regex-posix",
          "partial": "Erange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retErange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEspace",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retEspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEspace",
          "package": "regex-posix",
          "partial": "Espace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retEspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEsubreg",
          "package": "regex-posix",
          "signature": "ReturnCode",
          "source": "src/Text-Regex-Posix-Wrap.html#retEsubreg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "retEsubreg",
          "package": "regex-posix",
          "partial": "Esubreg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:retEsubreg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "unusedRegOffset",
          "package": "regex-posix",
          "signature": "RegOffset",
          "source": "src/Text-Regex-Posix-Wrap.html#unusedRegOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "unusedRegOffset",
          "package": "regex-posix",
          "partial": "Reg Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:unusedRegOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapCompile",
          "package": "regex-posix",
          "signature": "CompOption-\u003e ExecOption-\u003e CString-\u003e IO (Either WrapError Regex)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapCompile",
          "normalized": "CompOption-\u003eExecOption-\u003eCString-\u003eIO(Either WrapError Regex)",
          "package": "regex-posix",
          "partial": "Compile",
          "signature": "CompOption-\u003eExecOption-\u003eCString-\u003eIO(Either WrapError Regex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:wrapCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapCount",
          "package": "regex-posix",
          "signature": "Regex -\u003e CString -\u003e IO (Either WrapError Int)",
          "source": "src/Text-Regex-Posix-Wrap.html#wrapCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapCount",
          "normalized": "Regex-\u003eCString-\u003eIO(Either WrapError Int)",
          "package": "regex-posix",
          "partial": "Count",
          "signature": "Regex-\u003eCString-\u003eIO(Either WrapError Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:wrapCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrapMatch returns offsets for the begin and end of each capture.\n Unused captures have offsets of unusedRegOffset which is (-1)\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapMatch",
          "package": "regex-posix",
          "signature": "Regex -\u003e CString -\u003e IO (Either WrapError (Maybe [(RegOffset, RegOffset)]))",
          "source": "src/Text-Regex-Posix-Wrap.html#wrapMatch",
          "type": "function"
        },
        "index": {
          "description": "wrapMatch returns offsets for the begin and end of each capture Unused captures have offsets of unusedRegOffset which is",
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapMatch",
          "normalized": "Regex-\u003eCString-\u003eIO(Either WrapError(Maybe[(RegOffset,RegOffset)]))",
          "package": "regex-posix",
          "partial": "Match",
          "signature": "Regex-\u003eCString-\u003eIO(Either WrapError(Maybe[(RegOffset,RegOffset)]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:wrapMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrapMatchAll returns the offset and length of each capture.\n Unused captures have an offset of unusedRegOffset which is (-1) and\n length of 0.\n\u003c/p\u003e",
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapMatchAll",
          "package": "regex-posix",
          "signature": "Regex -\u003e CString -\u003e IO (Either WrapError [MatchArray])",
          "source": "src/Text-Regex-Posix-Wrap.html#wrapMatchAll",
          "type": "function"
        },
        "index": {
          "description": "wrapMatchAll returns the offset and length of each capture Unused captures have an offset of unusedRegOffset which is and length of",
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapMatchAll",
          "normalized": "Regex-\u003eCString-\u003eIO(Either WrapError[MatchArray])",
          "package": "regex-posix",
          "partial": "Match All",
          "signature": "Regex-\u003eCString-\u003eIO(Either WrapError[MatchArray])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:wrapMatchAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapTest",
          "package": "regex-posix",
          "signature": "Regex -\u003e CString -\u003e IO (Either WrapError Bool)",
          "source": "src/Text-Regex-Posix-Wrap.html#wrapTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix Wrap",
          "module": "Text.Regex.Posix.Wrap",
          "name": "wrapTest",
          "normalized": "Regex-\u003eCString-\u003eIO(Either WrapError Bool)",
          "package": "regex-posix",
          "partial": "Test",
          "signature": "Regex-\u003eCString-\u003eIO(Either WrapError Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix-Wrap.html#v:wrapTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule that provides the Regex backend that wraps the c posix regex api.\n This is the backend being used by the regex-compat package to replace\n Text.Regex\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003eText.Regex.Posix\u003c/a\u003e module provides a backend for regular\n expressions. If you import this along with other backends, then\n you should do so with qualified imports, perhaps renamed for\n convenience.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003e=~\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e=~~\u003c/a\u003e\u003c/code\u003e functions are too high level, you can use the\n compile, regexec, and execute functions from importing either\n \u003ca\u003eText.Regex.Posix.String\u003c/a\u003e or \u003ca\u003eText.Regex.Posix.ByteString\u003c/a\u003e.  If you\n want to use a low-level \u003ccode\u003e\u003ca\u003eCString\u003c/a\u003e\u003c/code\u003e interface to the library,\n then import \u003ca\u003eText.Regex.Posix.Wrap\u003c/a\u003e and use the wrap* functions.\n\u003c/p\u003e\u003cp\u003eThis module is only efficient with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e only\n if it is null terminated, i.e. \u003ccode\u003e(Bytestring.last bs)==0\u003c/code\u003e.  Otherwise the\n library must make a temporary copy of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n and append the NUL byte.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e will be converted into a \u003ccode\u003e\u003ca\u003eCString\u003c/a\u003e\u003c/code\u003e for processing.\n Doing this repeatedly will be very inefficient.\n\u003c/p\u003e\u003cp\u003eNote that the posix library works with single byte characters, and\n does not understand Unicode.  If you need Unicode support you will\n have to use a different backend.\n\u003c/p\u003e\u003cp\u003eWhen offsets are reported for subexpression captures, a subexpression\n that did not match anything (as opposed to matching an empty string)\n will have its offset set to the \u003ccode\u003e\u003ca\u003eunusedRegOffset\u003c/a\u003e\u003c/code\u003e value, which is (-1).\n\u003c/p\u003e\u003cp\u003eBenchmarking shows the default regex library on many platforms is very\n inefficient.  You might increase performace by an order of magnitude\n by obtaining libpcre and regex-pcre or libtre and regex-tre.  If you\n do not need the captured substrings then you can also get great\n performance from regex-dfa.  If you do need the capture substrings\n then you may be able to use regex-parsec to improve performance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.Posix",
          "name": "Posix",
          "package": "regex-posix",
          "source": "src/Text-Regex-Posix.html",
          "type": "module"
        },
        "index": {
          "description": "Module that provides the Regex backend that wraps the posix regex api This is the backend being used by the regex-compat package to replace Text.Regex The Text.Regex.Posix module provides backend for regular expressions If you import this along with other backends then you should do so with qualified imports perhaps renamed for convenience If the and functions are too high level you can use the compile regexec and execute functions from importing either Text.Regex.Posix.String or Text.Regex.Posix.ByteString If you want to use low-level CString interface to the library then import Text.Regex.Posix.Wrap and use the wrap functions This module is only efficient with ByteString only if it is null terminated i.e Bytestring.last bs Otherwise the library must make temporary copy of the ByteString and append the NUL byte String will be converted into CString for processing Doing this repeatedly will be very inefficient Note that the posix library works with single byte characters and does not understand Unicode If you need Unicode support you will have to use different backend When offsets are reported for subexpression captures subexpression that did not match anything as opposed to matching an empty string will have its offset set to the unusedRegOffset value which is Benchmarking shows the default regex library on many platforms is very inefficient You might increase performace by an order of magnitude by obtaining libpcre and regex-pcre or libtre and regex-tre If you do not need the captured substrings then you can also get great performance from regex-dfa If you do need the capture substrings then you may be able to use regex-parsec to improve performance",
          "hierarchy": "Text Regex Posix",
          "module": "Text.Regex.Posix",
          "name": "Posix",
          "package": "regex-posix",
          "partial": "Posix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.Posix",
          "name": "getVersion_Text_Regex_Posix",
          "package": "regex-posix",
          "signature": "Version",
          "source": "src/Text-Regex-Posix.html#getVersion_Text_Regex_Posix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex Posix",
          "module": "Text.Regex.Posix",
          "name": "getVersion_Text_Regex_Posix",
          "package": "regex-posix",
          "partial": "Version Text Regex Posix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-posix/docs/Text-Regex-Posix.html#v:getVersion_Text_Regex_Posix"
      }
    }
  ]
]