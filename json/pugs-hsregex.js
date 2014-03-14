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
        "word": "pugs-hsregex"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.PCRE",
          "name": "PCRE",
          "package": "pugs-hsregex",
          "source": "src/RRegex-PCRE.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "PCRE",
          "package": "pugs-hsregex",
          "partial": "PCRE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression\n\u003c/p\u003e",
          "module": "RRegex.PCRE",
          "name": "Regex",
          "package": "pugs-hsregex",
          "source": "src/RRegex-PCRE.html#Regex",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression",
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "Regex",
          "package": "pugs-hsregex",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles a regular expression\n\u003c/p\u003e",
          "module": "RRegex.PCRE",
          "name": "compile",
          "package": "pugs-hsregex",
          "signature": "String-\u003e Int-\u003e IO (Either (Int, String) Regex)",
          "type": "function"
        },
        "index": {
          "description": "Compiles regular expression",
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "compile",
          "normalized": "String-\u003eInt-\u003eIO(Either(Int,String)Regex)",
          "package": "pugs-hsregex",
          "signature": "String-\u003eInt-\u003eIO(Either(Int,String)Regex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a regular expression against a string\n\u003c/p\u003e",
          "module": "RRegex.PCRE",
          "name": "execute",
          "package": "pugs-hsregex",
          "signature": "Regex-\u003e String-\u003e Int-\u003e IO (Maybe (Array Int (Int, Int)))",
          "type": "function"
        },
        "index": {
          "description": "Matches regular expression against string",
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "execute",
          "normalized": "Regex-\u003eString-\u003eInt-\u003eIO(Maybe(Array Int(Int,Int)))",
          "package": "pugs-hsregex",
          "signature": "Regex-\u003eString-\u003eInt-\u003eIO(Maybe(Array Int(Int,Int)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexecute match and extract substrings rather than just offsets\n\u003c/p\u003e",
          "module": "RRegex.PCRE",
          "name": "executeExtract",
          "package": "pugs-hsregex",
          "signature": "Regex-\u003e String-\u003e Int-\u003e IO (Maybe (String, String, Array Int String))",
          "type": "function"
        },
        "index": {
          "description": "execute match and extract substrings rather than just offsets",
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "executeExtract",
          "normalized": "Regex-\u003eString-\u003eInt-\u003eIO(Maybe(String,String,Array Int String))",
          "package": "pugs-hsregex",
          "partial": "Extract",
          "signature": "Regex-\u003eString-\u003eInt-\u003eIO(Maybe(String,String,Array Int String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:executeExtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn version of pcre used or Nothing if pcre is not available.\n\u003c/p\u003e",
          "module": "RRegex.PCRE",
          "name": "getVersion",
          "package": "pugs-hsregex",
          "signature": "Maybe String",
          "source": "src/RRegex-PCRE.html#getVersion",
          "type": "function"
        },
        "index": {
          "description": "return version of pcre used or Nothing if pcre is not available",
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "getVersion",
          "package": "pugs-hsregex",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:getVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "numSubs",
          "package": "pugs-hsregex",
          "signature": "Regex -\u003e IO Int",
          "source": "src/RRegex-PCRE.html#numSubs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:numSubs\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:numSubs\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "numSubs",
          "normalized": "Regex-\u003eIO Int",
          "package": "pugs-hsregex",
          "partial": "Subs",
          "signature": "Regex-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:numSubs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreAnchored",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreAnchored",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreAnchored\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreAnchored\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreAnchored",
          "package": "pugs-hsregex",
          "partial": "Anchored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreAnchored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreCaseless",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreCaseless",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreCaseless\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreCaseless\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreCaseless",
          "package": "pugs-hsregex",
          "partial": "Caseless",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreCaseless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreDollarEndonly",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreDollarEndonly",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreDollarEndonly\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreDollarEndonly\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreDollarEndonly",
          "package": "pugs-hsregex",
          "partial": "Dollar Endonly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreDollarEndonly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreDotall",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreDotall",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreDotall\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreDotall\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreDotall",
          "package": "pugs-hsregex",
          "partial": "Dotall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreDotall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreExtended",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreExtended",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreExtended\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreExtended\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreExtended",
          "package": "pugs-hsregex",
          "partial": "Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreExtended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreExtra",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreExtra",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreExtra\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreExtra\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreExtra",
          "package": "pugs-hsregex",
          "partial": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreMultiline",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreMultiline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreMultiline\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreMultiline\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreMultiline",
          "package": "pugs-hsregex",
          "partial": "Multiline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreMultiline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreNotbol",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreNotbol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreNotbol\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreNotbol\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreNotbol",
          "package": "pugs-hsregex",
          "partial": "Notbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreNotbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreNotempty",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreNotempty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreNotempty\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreNotempty\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreNotempty",
          "package": "pugs-hsregex",
          "partial": "Notempty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreNotempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreNoteol",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreNoteol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreNoteol\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreNoteol\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreNoteol",
          "package": "pugs-hsregex",
          "partial": "Noteol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreNoteol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreUngreedy",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreUngreedy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreUngreedy\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreUngreedy\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreUngreedy",
          "package": "pugs-hsregex",
          "partial": "Ungreedy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreUngreedy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"RRegex.PCRE\",\"RRegex\"]",
          "name": "pcreUtf8",
          "package": "pugs-hsregex",
          "signature": "Int",
          "source": "src/RRegex-PCRE.html#pcreUtf8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreUtf8\",\"http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:pcreUtf8\"]"
        },
        "index": {
          "hierarchy": "RRegex PCRE",
          "module": "RRegex.PCRE",
          "name": "pcreUtf8",
          "package": "pugs-hsregex",
          "partial": "Utf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-PCRE.html#v:pcreUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ebasic usage:\n\u003c/p\u003e\u003cp\u003estring =~ 'regular expression' returns different things depending on context\n\u003c/p\u003e\u003cp\u003etype - what it evaluates to\n---------------------------\nInt - number of times the regular expression matches\nString -  matching portion of string\n(String,String,String) - (text before match, matching text, text after match)\n[Either String String] - list of matching and nonmatching strings, if concated, the original string results.  Left = notmatching, Right = matching.\nBool - whether the string matches\n() - always returns () (useful in monad context, see below)\n[String] - list of matches\nArray Int String - list of substring matches for first match \n(String, Array Int String) - full matching text and substring matches\n[(String, Array Int String)] - all matches, full match plus substrings\n[Array Int String] - all substrings from all matches\n\u003c/p\u003e\u003cp\u003ealso, there is the monadic version (=~~) which always behaves exactly the same\nas (=~) except when the match fails, instead of returning a default value, the\nmonad fails. \n\u003c/p\u003e\u003cp\u003eregular expressions:\n\u003c/p\u003e\u003cp\u003ethese may be strings, which are interpreted as regular expressions, or Regex's\nfrom the Text.Regex module. or any other instance of the RegexLike class. \n\u003c/p\u003e\u003cp\u003ewhen using strings, you may prefix the regex by \u003ca\u003e(?flags)\u003c/a\u003e where flags is one\nof \u003ccode\u003ei\u003c/code\u003e for a case insensitive match and \u003ccode\u003em\u003c/code\u003e means a multi-line match. other \nflags may be available depending on your implementation\n\u003c/p\u003e\u003cp\u003eadvanced features:\n\u003c/p\u003e\u003cp\u003enot just strings can be matched, but rather lists of anything a matcher is\ndefined for.  RegexLikeImp data class can be used for in-place code generated\nby template haskell for compile-time checked regular expresions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RRegex.Syntax",
          "name": "Syntax",
          "package": "pugs-hsregex",
          "source": "src/RRegex-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "basic usage string regular expression returns different things depending on context type what it evaluates to Int number of times the regular expression matches String matching portion of string String String String text before match matching text text after match Either String String list of matching and nonmatching strings if concated the original string results Left notmatching Right matching Bool whether the string matches always returns useful in monad context see below String list of matches Array Int String list of substring matches for first match String Array Int String full matching text and substring matches String Array Int String all matches full match plus substrings Array Int String all substrings from all matches also there is the monadic version which always behaves exactly the same as except when the match fails instead of returning default value the monad fails regular expressions these may be strings which are interpreted as regular expressions or Regex from the Text.Regex module or any other instance of the RegexLike class when using strings you may prefix the regex by flags where flags is one of for case insensitive match and means multi-line match other flags may be available depending on your implementation advanced features not just strings can be matched but rather lists of anything matcher is defined for RegexLikeImp data class can be used for in-place code generated by template haskell for compile-time checked regular expresions",
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "Syntax",
          "package": "pugs-hsregex",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.Syntax",
          "name": "MatchResult",
          "package": "pugs-hsregex",
          "source": "src/RRegex-Syntax.html#MatchResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "MatchResult",
          "package": "pugs-hsregex",
          "partial": "Match Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#t:MatchResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.Syntax",
          "name": "RegexContext",
          "package": "pugs-hsregex",
          "source": "src/RRegex-Syntax.html#RegexContext",
          "type": "class"
        },
        "index": {
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "RegexContext",
          "package": "pugs-hsregex",
          "partial": "Regex Context",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#t:RegexContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einstances of this class may be used as regular expressions with this syntax.\n\u003c/p\u003e",
          "module": "RRegex.Syntax",
          "name": "RegexLike",
          "package": "pugs-hsregex",
          "source": "src/RRegex-Syntax.html#RegexLike",
          "type": "class"
        },
        "index": {
          "description": "instances of this class may be used as regular expressions with this syntax",
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "RegexLike",
          "package": "pugs-hsregex",
          "partial": "Regex Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#t:RegexLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck if regular expression does not match\n\u003c/p\u003e",
          "module": "RRegex.Syntax",
          "name": "(!~~)",
          "package": "pugs-hsregex",
          "signature": "[x] -\u003e r -\u003e Bool",
          "source": "src/RRegex-Syntax.html#%21~~",
          "type": "function"
        },
        "index": {
          "description": "check if regular expression does not match",
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "(!~~) !~~",
          "normalized": "[a]-\u003eb-\u003eBool",
          "package": "pugs-hsregex",
          "signature": "[x]-\u003er-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:-33--126--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch a list against a regular expression, changing its behavior based on its result type.\n\u003c/p\u003e",
          "module": "RRegex.Syntax",
          "name": "(=~)",
          "package": "pugs-hsregex",
          "signature": "[x] -\u003e r -\u003e a",
          "source": "src/RRegex-Syntax.html#%3D~",
          "type": "method"
        },
        "index": {
          "description": "match list against regular expression changing its behavior based on its result type",
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "(=~) =~",
          "normalized": "[a]-\u003eb-\u003ec",
          "package": "pugs-hsregex",
          "signature": "[x]-\u003er-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:-61--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of (=~). behaves identically, except it causes the monad to fail when the expression does not match, rather than returning a default value.\n\u003c/p\u003e",
          "module": "RRegex.Syntax",
          "name": "(=~~)",
          "package": "pugs-hsregex",
          "signature": "[x] -\u003e r -\u003e m a",
          "source": "src/RRegex-Syntax.html#%3D~~",
          "type": "method"
        },
        "index": {
          "description": "Monadic version of behaves identically except it causes the monad to fail when the expression does not match rather than returning default value",
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "(=~~) =~~",
          "normalized": "[a]-\u003eb-\u003ec d",
          "package": "pugs-hsregex",
          "signature": "[x]-\u003er-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:-61--126--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.Syntax",
          "name": "MR",
          "package": "pugs-hsregex",
          "signature": "MR",
          "source": "src/RRegex-Syntax.html#MatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "MR",
          "package": "pugs-hsregex",
          "partial": "MR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:MR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn all matches\n\u003c/p\u003e",
          "module": "RRegex.Syntax",
          "name": "matchAll",
          "package": "pugs-hsregex",
          "signature": "r -\u003e [a] -\u003e [Array Int (Int, Int)]",
          "source": "src/RRegex-Syntax.html#matchAll",
          "type": "method"
        },
        "index": {
          "description": "return all matches",
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "matchAll",
          "normalized": "a-\u003e[b]-\u003e[Array Int(Int,Int)]",
          "package": "pugs-hsregex",
          "partial": "All",
          "signature": "r-\u003e[a]-\u003e[Array Int(Int,Int)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:matchAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of times the regex matches\n\u003c/p\u003e",
          "module": "RRegex.Syntax",
          "name": "matchCount",
          "package": "pugs-hsregex",
          "signature": "r -\u003e [a] -\u003e Int",
          "source": "src/RRegex-Syntax.html#matchCount",
          "type": "method"
        },
        "index": {
          "description": "Count the number of times the regex matches",
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "matchCount",
          "normalized": "a-\u003e[b]-\u003eInt",
          "package": "pugs-hsregex",
          "partial": "Count",
          "signature": "r-\u003e[a]-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:matchCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch once\n\u003c/p\u003e",
          "module": "RRegex.Syntax",
          "name": "matchOnce",
          "package": "pugs-hsregex",
          "signature": "matchOnce",
          "source": "src/RRegex-Syntax.html#matchOnce",
          "type": "method"
        },
        "index": {
          "description": "match once",
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "matchOnce",
          "package": "pugs-hsregex",
          "partial": "Once",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:matchOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.Syntax",
          "name": "matchShow",
          "package": "pugs-hsregex",
          "signature": "matchShow",
          "source": "src/RRegex-Syntax.html#matchShow",
          "type": "method"
        },
        "index": {
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "matchShow",
          "package": "pugs-hsregex",
          "partial": "Show",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:matchShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the regex matches at all\n\u003c/p\u003e",
          "module": "RRegex.Syntax",
          "name": "matchTest",
          "package": "pugs-hsregex",
          "signature": "r -\u003e [a] -\u003e Bool",
          "source": "src/RRegex-Syntax.html#matchTest",
          "type": "method"
        },
        "index": {
          "description": "Test whether the regex matches at all",
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "matchTest",
          "normalized": "a-\u003e[b]-\u003eBool",
          "package": "pugs-hsregex",
          "partial": "Test",
          "signature": "r-\u003e[a]-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:matchTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.Syntax",
          "name": "mrAfter",
          "package": "pugs-hsregex",
          "signature": "[a]",
          "source": "src/RRegex-Syntax.html#MatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "mrAfter",
          "normalized": "[a]",
          "package": "pugs-hsregex",
          "partial": "After",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:mrAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.Syntax",
          "name": "mrBefore",
          "package": "pugs-hsregex",
          "signature": "[a]",
          "source": "src/RRegex-Syntax.html#MatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "mrBefore",
          "normalized": "[a]",
          "package": "pugs-hsregex",
          "partial": "Before",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:mrBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.Syntax",
          "name": "mrMatch",
          "package": "pugs-hsregex",
          "signature": "[a]",
          "source": "src/RRegex-Syntax.html#MatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "mrMatch",
          "normalized": "[a]",
          "package": "pugs-hsregex",
          "partial": "Match",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:mrMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.Syntax",
          "name": "mrSubList",
          "package": "pugs-hsregex",
          "signature": "[[a]]",
          "source": "src/RRegex-Syntax.html#MatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "mrSubList",
          "normalized": "[[a]]",
          "package": "pugs-hsregex",
          "partial": "Sub List",
          "signature": "[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:mrSubList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex.Syntax",
          "name": "mrSubs",
          "package": "pugs-hsregex",
          "signature": "Array Int [a]",
          "source": "src/RRegex-Syntax.html#MatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "RRegex Syntax",
          "module": "RRegex.Syntax",
          "name": "mrSubs",
          "normalized": "Array Int[a]",
          "package": "pugs-hsregex",
          "partial": "Subs",
          "signature": "Array Int[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex-Syntax.html#v:mrSubs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRegular expressions, based on PCRE.\n\u003c/p\u003e\u003cpre\u003e   A king he was on carven throne\n   In many-pillared halls of stone\n   With golden roof and silver floor,\n   And runes of power upon the door...\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "RRegex",
          "name": "RRegex",
          "package": "pugs-hsregex",
          "source": "src/RRegex.html",
          "type": "module"
        },
        "index": {
          "description": "Regular expressions based on PCRE king he was on carven throne In many-pillared halls of stone With golden roof and silver floor And runes of power upon the door",
          "hierarchy": "RRegex",
          "module": "RRegex",
          "name": "RRegex",
          "package": "pugs-hsregex",
          "partial": "RRegex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression\n\u003c/p\u003e",
          "module": "RRegex",
          "name": "Regex",
          "package": "pugs-hsregex",
          "source": "src/RRegex-PCRE.html#Regex",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression",
          "hierarchy": "RRegex",
          "module": "RRegex",
          "name": "Regex",
          "package": "pugs-hsregex",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a regular expression against a string\n\u003c/p\u003e",
          "module": "RRegex",
          "name": "matchRegex",
          "package": "pugs-hsregex",
          "signature": "Regex-\u003e String-\u003e Maybe [String]",
          "type": "function"
        },
        "index": {
          "description": "Match regular expression against string",
          "hierarchy": "RRegex",
          "module": "RRegex",
          "name": "matchRegex",
          "normalized": "Regex-\u003eString-\u003eMaybe[String]",
          "package": "pugs-hsregex",
          "partial": "Regex",
          "signature": "Regex-\u003eString-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:matchRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a regular expression against a string, returning more information\n about the match.\n\u003c/p\u003e",
          "module": "RRegex",
          "name": "matchRegexAll",
          "package": "pugs-hsregex",
          "signature": "Regex-\u003e String-\u003e Maybe (String, String, String, [String])",
          "type": "function"
        },
        "index": {
          "description": "Match regular expression against string returning more information about the match",
          "hierarchy": "RRegex",
          "module": "RRegex",
          "name": "matchRegexAll",
          "normalized": "Regex-\u003eString-\u003eMaybe(String,String,String,[String])",
          "package": "pugs-hsregex",
          "partial": "Regex All",
          "signature": "Regex-\u003eString-\u003eMaybe(String,String,String,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:matchRegexAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RRegex",
          "name": "matchRegexWithPCRE",
          "package": "pugs-hsregex",
          "signature": "Regex-\u003e String-\u003e Int-\u003e IO (Maybe (Array Int (Int, Int)))",
          "type": "function"
        },
        "index": {
          "hierarchy": "RRegex",
          "module": "RRegex",
          "name": "matchRegexWithPCRE",
          "normalized": "Regex-\u003eString-\u003eInt-\u003eIO(Maybe(Array Int(Int,Int)))",
          "package": "pugs-hsregex",
          "partial": "Regex With PCRE",
          "signature": "Regex-\u003eString-\u003eInt-\u003eIO(Maybe(Array Int(Int,Int)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:matchRegexWithPCRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a regular expression with the default options (multi-line,\n case-sensitive).  The syntax of regular expressions is\n otherwise that of \u003ccode\u003eegrep\u003c/code\u003e (i.e. POSIX \"extended\" regular\n expressions). Note: this is arguably the incorrect default. single line \n is the default everywhere else.\n\u003c/p\u003e",
          "module": "RRegex",
          "name": "mkRegex",
          "package": "pugs-hsregex",
          "signature": "String -\u003e Regex",
          "source": "src/RRegex.html#mkRegex",
          "type": "function"
        },
        "index": {
          "description": "Makes regular expression with the default options multi-line case-sensitive The syntax of regular expressions is otherwise that of egrep i.e POSIX extended regular expressions Note this is arguably the incorrect default single line is the default everywhere else",
          "hierarchy": "RRegex",
          "module": "RRegex",
          "name": "mkRegex",
          "normalized": "String-\u003eRegex",
          "package": "pugs-hsregex",
          "partial": "Regex",
          "signature": "String-\u003eRegex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:mkRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a regular expression, where the multi-line and\n case-sensitve options can be changed from the default settings.\n\u003c/p\u003e",
          "module": "RRegex",
          "name": "mkRegexWithOpts",
          "package": "pugs-hsregex",
          "signature": "String-\u003e Bool-\u003e Bool-\u003e Regex",
          "type": "function"
        },
        "index": {
          "description": "Makes regular expression where the multi-line and case-sensitve options can be changed from the default settings",
          "hierarchy": "RRegex",
          "module": "RRegex",
          "name": "mkRegexWithOpts",
          "normalized": "String-\u003eBool-\u003eBool-\u003eRegex",
          "package": "pugs-hsregex",
          "partial": "Regex With Opts",
          "signature": "String-\u003eBool-\u003eBool-\u003eRegex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:mkRegexWithOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a regular expression with PCRE flags\n\u003c/p\u003e",
          "module": "RRegex",
          "name": "mkRegexWithPCRE",
          "package": "pugs-hsregex",
          "signature": "String-\u003e [Int]-\u003e Regex",
          "type": "function"
        },
        "index": {
          "description": "Makes regular expression with PCRE flags",
          "hierarchy": "RRegex",
          "module": "RRegex",
          "name": "mkRegexWithPCRE",
          "normalized": "String-\u003e[Int]-\u003eRegex",
          "package": "pugs-hsregex",
          "partial": "Regex With PCRE",
          "signature": "String-\u003e[Int]-\u003eRegex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-hsregex/docs/RRegex.html#v:mkRegexWithPCRE"
      }
    }
  ]
]