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
        "word": "regex-dfa"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Have a match to Regexp be consider a success\n",
          "module": "[\"Text.Regex.DFA.ByteString.EngineFPS\",\"Text.Regex.DFA.Engine\",\"Text.Regex.DFA.EngineFPS\",\"Text.Regex.DFA.EngineSeq\"]",
          "name": "3Aaccept",
          "package": "regex-dfa",
          "signature": "Regexp -\u003e Lexer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3Aaccept\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3Aaccept\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineFPS.html#v:3Aaccept\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineSeq.html#v:3Aaccept\"]"
        },
        "index": {
          "description": "Have match to Regexp be consider success",
          "hierarchy": "Text Regex DFA ByteString EngineFPS",
          "module": "Text.Regex.DFA.ByteString.EngineFPS",
          "name": "3Aaccept",
          "normalized": "Regexp-\u003eLexer",
          "package": "regex-dfa",
          "partial": "Aaccept",
          "signature": "Regexp-\u003eLexer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3Aaccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This counts the number of matches to regex in the string, (it\n checks each possible starting position).  This should be the same\n as ((length (splitRegex re input))-1) but more efficient\n",
          "module": "[\"Text.Regex.DFA.ByteString.EngineFPS\",\"Text.Regex.DFA.EngineFPS\"]",
          "name": "3AcountRegex",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e ByteString -\u003e Int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3AcountRegex\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineFPS.html#v:3AcountRegex\"]"
        },
        "index": {
          "description": "This counts the number of matches to regex in the string it checks each possible starting position This should be the same as length splitRegex re input but more efficient",
          "hierarchy": "Text Regex DFA ByteString EngineFPS",
          "module": "Text.Regex.DFA.ByteString.EngineFPS",
          "name": "3AcountRegex",
          "normalized": "Lexer-\u003eByteString-\u003eInt",
          "package": "regex-dfa",
          "partial": "Acount Regex",
          "signature": "Lexer-\u003eByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3AcountRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The regular expression to match\nThe input string to scan along, looking for a match\nThe length of the string before the match, Nothing if there was no match or Just length of the match, index of the input past the match\n",
          "module": "[\"Text.Regex.DFA.ByteString.EngineFPS\",\"Text.Regex.DFA.EngineFPS\"]",
          "name": "3AfindRegex",
          "package": "regex-dfa",
          "signature": "Lexer-\u003e ByteString-\u003e (Int, Maybe (Int, Int))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3AfindRegex\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineFPS.html#v:3AfindRegex\"]"
        },
        "index": {
          "description": "The regular expression to match The input string to scan along looking for match The length of the string before the match Nothing if there was no match or Just length of the match index of the input past the match",
          "hierarchy": "Text Regex DFA ByteString EngineFPS",
          "module": "Text.Regex.DFA.ByteString.EngineFPS",
          "name": "3AfindRegex",
          "normalized": "Lexer-\u003eByteString-\u003e(Int,Maybe(Int,Int))",
          "package": "regex-dfa",
          "partial": "Afind Regex",
          "signature": "Lexer-\u003eByteString-\u003e(Int,Maybe(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3AfindRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This checks the regex anchored at the start of the ByteString and return\n Nothing if there is no match or (Just n) for a match of length n\n",
          "module": "[\"Text.Regex.DFA.ByteString.EngineFPS\",\"Text.Regex.DFA.EngineFPS\"]",
          "name": "3AmatchesHere",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e ByteString -\u003e Maybe Int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3AmatchesHere\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineFPS.html#v:3AmatchesHere\"]"
        },
        "index": {
          "description": "This checks the regex anchored at the start of the ByteString and return Nothing if there is no match or Just for match of length",
          "hierarchy": "Text Regex DFA ByteString EngineFPS",
          "module": "Text.Regex.DFA.ByteString.EngineFPS",
          "name": "3AmatchesHere",
          "normalized": "Lexer-\u003eByteString-\u003eMaybe Int",
          "package": "regex-dfa",
          "partial": "Amatches Here",
          "signature": "Lexer-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3AmatchesHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Regex.DFA.ByteString.EngineFPS\",\"Text.Regex.DFA.EngineFPS\"]",
          "name": "3AmatchesRegex",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e ByteString -\u003e Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3AmatchesRegex\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineFPS.html#v:3AmatchesRegex\"]"
        },
        "index": {
          "hierarchy": "Text Regex DFA ByteString EngineFPS",
          "module": "Text.Regex.DFA.ByteString.EngineFPS",
          "name": "3AmatchesRegex",
          "normalized": "Lexer-\u003eByteString-\u003eBool",
          "package": "regex-dfa",
          "partial": "Amatches Regex",
          "signature": "Lexer-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-EngineFPS.html#v:3AmatchesRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.ByteString.Lazy",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA ByteString Lazy",
          "module": "Text.Regex.DFA.ByteString.Lazy",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "partial": "AComp Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-Lazy.html#t:3ACompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.ByteString.Lazy",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA ByteString Lazy",
          "module": "Text.Regex.DFA.ByteString.Lazy",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "partial": "AExec Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-Lazy.html#t:3AExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.ByteString.Lazy",
          "name": "3ARegex",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA ByteString Lazy",
          "module": "Text.Regex.DFA.ByteString.Lazy",
          "name": "3ARegex",
          "package": "regex-dfa",
          "partial": "ARegex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-Lazy.html#t:3ARegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Flags (summed together)\nFlags (summed together)\nThe regular expression to compile\nReturns: the compiled regular expression\n",
          "module": "[\"Text.Regex.DFA.ByteString.Lazy\",\"Text.Regex.DFA.ByteString\"]",
          "name": "3Acompile",
          "package": "regex-dfa",
          "signature": "CompOption-\u003e ExecOption-\u003e ByteString-\u003e Either String Regex",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-Lazy.html#v:3Acompile\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString.html#v:3Acompile\"]"
        },
        "index": {
          "description": "Flags summed together Flags summed together The regular expression to compile Returns the compiled regular expression",
          "hierarchy": "Text Regex DFA ByteString Lazy",
          "module": "Text.Regex.DFA.ByteString.Lazy",
          "name": "3Acompile",
          "normalized": "CompOption-\u003eExecOption-\u003eByteString-\u003eEither String Regex",
          "package": "regex-dfa",
          "partial": "Acompile",
          "signature": "CompOption-\u003eExecOption-\u003eByteString-\u003eEither String Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-Lazy.html#v:3Acompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Compiled regular expression\nByteString to match against\n",
          "module": "[\"Text.Regex.DFA.ByteString.Lazy\",\"Text.Regex.DFA.ByteString\"]",
          "name": "3Aexecute",
          "package": "regex-dfa",
          "signature": "Regex-\u003e ByteString-\u003e Either String (Maybe (Array Int (Int, Int)))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-Lazy.html#v:3Aexecute\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString.html#v:3Aexecute\"]"
        },
        "index": {
          "description": "Compiled regular expression ByteString to match against",
          "hierarchy": "Text Regex DFA ByteString Lazy",
          "module": "Text.Regex.DFA.ByteString.Lazy",
          "name": "3Aexecute",
          "normalized": "Regex-\u003eByteString-\u003eEither String(Maybe(Array Int(Int,Int)))",
          "package": "regex-dfa",
          "partial": "Aexecute",
          "signature": "Regex-\u003eByteString-\u003eEither String(Maybe(Array Int(Int,Int)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-Lazy.html#v:3Aexecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Compiled regular expression\nByteString to match against\n",
          "module": "[\"Text.Regex.DFA.ByteString.Lazy\",\"Text.Regex.DFA.ByteString\"]",
          "name": "3Aregexec",
          "package": "regex-dfa",
          "signature": "Regex-\u003e ByteString-\u003e Either String (Maybe (ByteString, ByteString, ByteString, [ByteString]))",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-Lazy.html#v:3Aregexec\",\"http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString.html#v:3Aregexec\"]"
        },
        "index": {
          "description": "Compiled regular expression ByteString to match against",
          "hierarchy": "Text Regex DFA ByteString Lazy",
          "module": "Text.Regex.DFA.ByteString.Lazy",
          "name": "3Aregexec",
          "normalized": "Regex-\u003eByteString-\u003eEither String(Maybe(ByteString,ByteString,ByteString,[ByteString]))",
          "package": "regex-dfa",
          "partial": "Aregexec",
          "signature": "Regex-\u003eByteString-\u003eEither String(Maybe(ByteString,ByteString,ByteString,[ByteString]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString-Lazy.html#v:3Aregexec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.ByteString",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA ByteString",
          "module": "Text.Regex.DFA.ByteString",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "partial": "AComp Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString.html#t:3ACompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.ByteString",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA ByteString",
          "module": "Text.Regex.DFA.ByteString",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "partial": "AExec Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString.html#t:3AExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.ByteString",
          "name": "3ARegex",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA ByteString",
          "module": "Text.Regex.DFA.ByteString",
          "name": "3ARegex",
          "package": "regex-dfa",
          "partial": "ARegex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ByteString.html#t:3ARegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3AAboutMatch",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3AAboutMatch",
          "package": "regex-dfa",
          "partial": "AAbout Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3AAboutMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3ABoolCaseSensitive",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3ABoolCaseSensitive",
          "package": "regex-dfa",
          "partial": "ABool Case Sensitive",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3ABoolCaseSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3ABoolMultiline",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3ABoolMultiline",
          "package": "regex-dfa",
          "partial": "ABool Multiline",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3ABoolMultiline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "partial": "AComp Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3ACompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "partial": "AExec Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3AExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ctt\u003e\u003ca\u003eMatchedStrings\u003c/a\u003e\u003c/tt\u003e is an IntMap where the keys are PatternIndex\n numbers and the values are completed substring captures.\n\u003c/p\u003e\u003cp\u003eThis has now been augmented to also remember the offset and length\n of the matched string.\n\u003c/p\u003e",
          "module": "Text.Regex.DFA.Common",
          "name": "3AMatchedStrings",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "description": "MatchedStrings is an IntMap where the keys are PatternIndex numbers and the values are completed substring captures This has now been augmented to also remember the offset and length of the matched string",
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3AMatchedStrings",
          "package": "regex-dfa",
          "partial": "AMatched Strings",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3AMatchedStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringAfterMatch",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringAfterMatch",
          "package": "regex-dfa",
          "partial": "AString After Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3AStringAfterMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringBeforeMatch",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringBeforeMatch",
          "package": "regex-dfa",
          "partial": "AString Before Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3AStringBeforeMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringInput",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringInput",
          "package": "regex-dfa",
          "partial": "AString Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3AStringInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringOfMatch",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringOfMatch",
          "package": "regex-dfa",
          "partial": "AString Of Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3AStringOfMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringSubPattern",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringSubPattern",
          "package": "regex-dfa",
          "partial": "AString Sub Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3AStringSubPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringSubgroups",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Regex DFA Common",
          "module": "Text.Regex.DFA.Common",
          "name": "3AStringSubgroups",
          "package": "regex-dfa",
          "partial": "AString Subgroups",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Common.html#t:3AStringSubgroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3ABoundary",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3ABoundary",
          "package": "regex-dfa",
          "partial": "ABoundary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#t:3ABoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3ACont",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3ACont",
          "package": "regex-dfa",
          "partial": "ACont",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#t:3ACont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3ALexAction",
          "package": "regex-dfa",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3ALexAction",
          "package": "regex-dfa",
          "partial": "ALex Action",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#t:3ALexAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3ALexer",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3ALexer",
          "package": "regex-dfa",
          "partial": "ALexer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#t:3ALexer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a regular expression\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3ARegexp",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "description": "regular expression",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3ARegexp",
          "package": "regex-dfa",
          "partial": "ARegexp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#t:3ARegexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese combine two Regexp's\n\u003c/p\u003e\u003cp\u003eConcatenation of regexps is just concatenation of functions\n x +\u003e y corresponds to xy\n\u003c/p\u003e",
          "module": "Text.Regex.DFA.Engine",
          "name": "3A+\u003e",
          "package": "regex-dfa",
          "signature": "Regexp -\u003e Regexp -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "These combine two Regexp Concatenation of regexps is just concatenation of functions corresponds to xy",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3A+\u003e",
          "normalized": "Regexp-\u003eRegexp-\u003eRegexp",
          "package": "regex-dfa",
          "signature": "Regexp-\u003eRegexp-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3A+\u003e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edisjunctive combination of two regexps, corresponding to x|y.\n\u003c/p\u003e\u003cp\u003eThis will find the longest match\n\u003c/p\u003e",
          "module": "Text.Regex.DFA.Engine",
          "name": "3A\u003e|\u003c",
          "package": "regex-dfa",
          "signature": "Regexp -\u003e Regexp -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "disjunctive combination of two regexps corresponding to This will find the longest match",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3A\u003e|\u003c",
          "normalized": "Regexp-\u003eRegexp-\u003eRegexp",
          "package": "regex-dfa",
          "signature": "Regexp-\u003eRegexp-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3A\u003e|\u003c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "disjunctive combination of two lexers (longest match, right biased)\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3A\u003e||\u003c",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e Lexer -\u003e Lexer",
          "type": "function"
        },
        "index": {
          "description": "disjunctive combination of two lexers longest match right biased",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3A\u003e||\u003c",
          "normalized": "Lexer-\u003eLexer-\u003eLexer",
          "package": "regex-dfa",
          "signature": "Lexer-\u003eLexer-\u003eLexer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3A\u003e||\u003c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "accepts any character\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AallChar",
          "package": "regex-dfa",
          "signature": "DoPa -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "accepts any character",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AallChar",
          "normalized": "DoPa-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Aall Char",
          "signature": "DoPa-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AallChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "accepts a list of alternative characters\n Equiv. to `(foldr1 (\u003e|\u003c) . map char) cs', but much faster\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Aalt",
          "package": "regex-dfa",
          "signature": "DoPa -\u003e [Char] -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "accepts list of alternative characters Equiv to foldr1 map char cs but much faster",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Aalt",
          "normalized": "DoPa-\u003e[Char]-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Aalt",
          "signature": "DoPa-\u003e[Char]-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3Aalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "accepts an inverted list of alternative characters\n Equiv. to `(foldr1 (\u003e|\u003c) . map char) cs', but much faster\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AaltNot",
          "package": "regex-dfa",
          "signature": "DoPa -\u003e [Char] -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "accepts an inverted list of alternative characters Equiv to foldr1 map char cs but much faster",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AaltNot",
          "normalized": "DoPa-\u003e[Char]-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Aalt Not",
          "signature": "DoPa-\u003e[Char]-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AaltNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AbeginInput",
          "package": "regex-dfa",
          "signature": "DoPa -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AbeginInput",
          "normalized": "DoPa-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Abegin Input",
          "signature": "DoPa-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AbeginInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AbeginLine",
          "package": "regex-dfa",
          "signature": "DoPa -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AbeginLine",
          "normalized": "DoPa-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Abegin Line",
          "signature": "DoPa-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AbeginLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "One character regexp\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Achar",
          "package": "regex-dfa",
          "signature": "DoPa -\u003e Char -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "One character regexp",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Achar",
          "normalized": "DoPa-\u003eChar-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Achar",
          "signature": "DoPa-\u003eChar-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3Achar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AconcatRE",
          "package": "regex-dfa",
          "signature": "[Regexp] -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AconcatRE",
          "normalized": "[Regexp]-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Aconcat RE",
          "signature": "[Regexp]-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AconcatRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This counts the number of matches to regex in the string, (it\n checks each possible starting position).  This should be the same\n as ((length (splitRegex re input))-1) but more efficient\n ^^^ fix\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AcountRegex",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e [Char] -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "This counts the number of matches to regex in the string it checks each possible starting position This should be the same as length splitRegex re input but more efficient fix",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AcountRegex",
          "normalized": "Lexer-\u003e[Char]-\u003eInt",
          "package": "regex-dfa",
          "partial": "Acount Regex",
          "signature": "Lexer-\u003e[Char]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AcountRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese create Regexp\n\u003c/p\u003e\u003cp\u003eEmpty lexeme (noop)\n\u003c/p\u003e",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AemptyOp",
          "package": "regex-dfa",
          "signature": "Regexp",
          "type": "function"
        },
        "index": {
          "description": "These create Regexp Empty lexeme noop",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AemptyOp",
          "package": "regex-dfa",
          "partial": "Aempty Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AemptyOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AendInput",
          "package": "regex-dfa",
          "signature": "DoPa -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AendInput",
          "normalized": "DoPa-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Aend Input",
          "signature": "DoPa-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AendInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AendLine",
          "package": "regex-dfa",
          "signature": "DoPa -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AendLine",
          "normalized": "DoPa-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Aend Line",
          "signature": "DoPa-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AendLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3Afailure",
          "package": "regex-dfa",
          "signature": "Lexer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Afailure",
          "package": "regex-dfa",
          "partial": "Afailure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3Afailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The regular expression to match\nThe input string to scan along, looking for a match\nThe input string before the match, length of the string before the match, Nothing if there was no match or Just input string at the start of the match, length of the match, input string starting just past the match\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AfindRegex",
          "package": "regex-dfa",
          "signature": "Lexer-\u003e String-\u003e (String, Int, Maybe (String, Int, String))",
          "type": "function"
        },
        "index": {
          "description": "The regular expression to match The input string to scan along looking for match The input string before the match length of the string before the match Nothing if there was no match or Just input string at the start of the match length of the match input string starting just past the match",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AfindRegex",
          "normalized": "Lexer-\u003eString-\u003e(String,Int,Maybe(String,Int,String))",
          "package": "regex-dfa",
          "partial": "Afind Regex",
          "signature": "Lexer-\u003eString-\u003e(String,Int,Maybe(String,Int,String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AfindRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This is a version of findRegex that does not compute the length of the prefix\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AfindRegexS",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e String -\u003e (String, Maybe (String, Int, String))",
          "type": "function"
        },
        "index": {
          "description": "This is version of findRegex that does not compute the length of the prefix",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AfindRegexS",
          "normalized": "Lexer-\u003eString-\u003e(String,Maybe(String,Int,String))",
          "package": "regex-dfa",
          "partial": "Afind Regex",
          "signature": "Lexer-\u003eString-\u003e(String,Maybe(String,Int,String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AfindRegexS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AinBounds",
          "package": "regex-dfa",
          "signature": "Char -\u003e BoundsNum -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AinBounds",
          "normalized": "Char-\u003eBoundsNum-\u003eBool",
          "package": "regex-dfa",
          "partial": "Ain Bounds",
          "signature": "Char-\u003eBoundsNum-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AinBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AlexAccept",
          "package": "regex-dfa",
          "signature": "LexAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AlexAccept",
          "package": "regex-dfa",
          "partial": "Alex Accept",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AlexAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AlexContinue",
          "package": "regex-dfa",
          "signature": "LexAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AlexContinue",
          "package": "regex-dfa",
          "partial": "Alex Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AlexContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AlexFailure",
          "package": "regex-dfa",
          "signature": "LexAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AlexFailure",
          "package": "regex-dfa",
          "partial": "Alex Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AlexFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This searches the input string for a match to the regex\n There is no need to wait for the longest match, so stop at first lexAccept\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AmatchesRegex",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e [Char] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "This searches the input string for match to the regex There is no need to wait for the longest match so stop at first lexAccept",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AmatchesRegex",
          "normalized": "Lexer-\u003e[Char]-\u003eBool",
          "package": "regex-dfa",
          "partial": "Amatches Regex",
          "signature": "Lexer-\u003e[Char]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AmatchesRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3AorRE",
          "package": "regex-dfa",
          "signature": "[Regexp] -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AorRE",
          "normalized": "[Regexp]-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Aor RE",
          "signature": "[Regexp]-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AorRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Engine",
          "name": "3Apeek",
          "package": "regex-dfa",
          "signature": "Cont -\u003e Char -\u003e Lexer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Apeek",
          "normalized": "Cont-\u003eChar-\u003eLexer",
          "package": "regex-dfa",
          "partial": "Apeek",
          "signature": "Cont-\u003eChar-\u003eLexer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3Apeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "x \u003ctt\u003e\u003ca\u003eplus\u003c/a\u003e\u003c/tt\u003e y corresponds to the regular expression x+y\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Aplus",
          "package": "regex-dfa",
          "signature": "Regexp -\u003e Regexp -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "plus corresponds to the regular expression",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Aplus",
          "normalized": "Regexp-\u003eRegexp-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Aplus",
          "signature": "Regexp-\u003eRegexp-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3Aplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "x \u003ctt\u003e\u003ca\u003equest\u003c/a\u003e\u003c/tt\u003e y corresponds to the regular expression x?y\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Aquest",
          "package": "regex-dfa",
          "signature": "Regexp -\u003e Regexp -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "quest corresponds to the regular expression",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Aquest",
          "normalized": "Regexp-\u003eRegexp-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Aquest",
          "signature": "Regexp-\u003eRegexp-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3Aquest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "x \u003ctt\u003e\u003ca\u003estar\u003c/a\u003e\u003c/tt\u003e y corresponds to the regular expression x*y\n \u003ca\u003eself\u003c/a\u003e is of type Lexer\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Astar",
          "package": "regex-dfa",
          "signature": "Regexp -\u003e Regexp -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "star corresponds to the regular expression self is of type Lexer",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3Astar",
          "normalized": "Regexp-\u003eRegexp-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Astar",
          "signature": "Regexp-\u003eRegexp-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3Astar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "current lexeme\nOrigin offset\nprevious input character\ncurrent input\n",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AtestHere",
          "package": "regex-dfa",
          "signature": "Lexer-\u003e Int-\u003e Char-\u003e [Char]-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "current lexeme Origin offset previous input character current input",
          "hierarchy": "Text Regex DFA Engine",
          "module": "Text.Regex.DFA.Engine",
          "name": "3AtestHere",
          "normalized": "Lexer-\u003eInt-\u003eChar-\u003e[Char]-\u003eBool",
          "package": "regex-dfa",
          "partial": "Atest Here",
          "signature": "Lexer-\u003eInt-\u003eChar-\u003e[Char]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Engine.html#v:3AtestHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This counts the number of matches to regex in the string, (it\n checks each possible starting position).  This should be the same\n as ((length (splitRegex re input))-1) but more efficient\n ^^^ fix\n",
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AcountRegex",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e Seq Char -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "This counts the number of matches to regex in the string it checks each possible starting position This should be the same as length splitRegex re input but more efficient fix",
          "hierarchy": "Text Regex DFA EngineSeq",
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AcountRegex",
          "normalized": "Lexer-\u003eSeq Char-\u003eInt",
          "package": "regex-dfa",
          "partial": "Acount Regex",
          "signature": "Lexer-\u003eSeq Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineSeq.html#v:3AcountRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The regular expression to match\nThe input SEq Char to scan along, looking for a match\nThe input string before the match, length of the string before the match, Nothing if there was no match or Just input string at the start of the match, length of the match, input string starting just past the match\n",
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AfindRegex",
          "package": "regex-dfa",
          "signature": "Lexer-\u003e Seq Char-\u003e (Seq Char, Int, Maybe (Seq Char, Int, Seq Char))",
          "type": "function"
        },
        "index": {
          "description": "The regular expression to match The input SEq Char to scan along looking for match The input string before the match length of the string before the match Nothing if there was no match or Just input string at the start of the match length of the match input string starting just past the match",
          "hierarchy": "Text Regex DFA EngineSeq",
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AfindRegex",
          "normalized": "Lexer-\u003eSeq Char-\u003e(Seq Char,Int,Maybe(Seq Char,Int,Seq Char))",
          "package": "regex-dfa",
          "partial": "Afind Regex",
          "signature": "Lexer-\u003eSeq Char-\u003e(Seq Char,Int,Maybe(Seq Char,Int,Seq Char))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineSeq.html#v:3AfindRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This is a version of findRegex that does not compute the length of the prefix\n",
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AfindRegexS",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e Seq Char -\u003e (Seq Char, Maybe (Seq Char, Int, Seq Char))",
          "type": "function"
        },
        "index": {
          "description": "This is version of findRegex that does not compute the length of the prefix",
          "hierarchy": "Text Regex DFA EngineSeq",
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AfindRegexS",
          "normalized": "Lexer-\u003eSeq Char-\u003e(Seq Char,Maybe(Seq Char,Int,Seq Char))",
          "package": "regex-dfa",
          "partial": "Afind Regex",
          "signature": "Lexer-\u003eSeq Char-\u003e(Seq Char,Maybe(Seq Char,Int,Seq Char))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineSeq.html#v:3AfindRegexS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This searches the input string for a match to the regex\n There is no need to wait for the longest match, so stop at first lexAccept\n",
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AmatchesRegex",
          "package": "regex-dfa",
          "signature": "Lexer -\u003e Seq Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "This searches the input string for match to the regex There is no need to wait for the longest match so stop at first lexAccept",
          "hierarchy": "Text Regex DFA EngineSeq",
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AmatchesRegex",
          "normalized": "Lexer-\u003eSeq Char-\u003eBool",
          "package": "regex-dfa",
          "partial": "Amatches Regex",
          "signature": "Lexer-\u003eSeq Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineSeq.html#v:3AmatchesRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AtoList",
          "package": "regex-dfa",
          "signature": "Seq Char -\u003e [Char]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA EngineSeq",
          "module": "Text.Regex.DFA.EngineSeq",
          "name": "3AtoList",
          "normalized": "Seq Char-\u003e[Char]",
          "package": "regex-dfa",
          "partial": "Ato List",
          "signature": "Seq Char-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-EngineSeq.html#v:3AtoList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Pattern",
          "name": "3ADoPa",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3ADoPa",
          "package": "regex-dfa",
          "partial": "ADo Pa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#t:3ADoPa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APattern",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APattern",
          "package": "regex-dfa",
          "partial": "APattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#t:3APattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "PatternIndex is for indexing submatches from  parenthesized groups (PGroup)\n",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternIndex",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "description": "PatternIndex is for indexing submatches from parenthesized groups PGroup",
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternIndex",
          "package": "regex-dfa",
          "partial": "APattern Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#t:3APatternIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternSet",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternSet",
          "package": "regex-dfa",
          "partial": "APattern Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#t:3APatternSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternSetCharacterClass",
          "package": "regex-dfa",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternSetCharacterClass",
          "package": "regex-dfa",
          "partial": "APattern Set Character Class",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#t:3APatternSetCharacterClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternSetCollatingElement",
          "package": "regex-dfa",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternSetCollatingElement",
          "package": "regex-dfa",
          "partial": "APattern Set Collating Element",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#t:3APatternSetCollatingElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternSetEquivalenceClass",
          "package": "regex-dfa",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3APatternSetEquivalenceClass",
          "package": "regex-dfa",
          "partial": "APattern Set Equivalence Class",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#t:3APatternSetEquivalenceClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Pattern",
          "name": "3AnewDoPa",
          "package": "regex-dfa",
          "signature": "Int -\u003e DoPa",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3AnewDoPa",
          "normalized": "Int-\u003eDoPa",
          "package": "regex-dfa",
          "partial": "Anew Do Pa",
          "signature": "Int-\u003eDoPa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#v:3AnewDoPa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Pattern",
          "name": "3AshowPattern",
          "package": "regex-dfa",
          "signature": "Pattern -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3AshowPattern",
          "normalized": "Pattern-\u003eString",
          "package": "regex-dfa",
          "partial": "Ashow Pattern",
          "signature": "Pattern-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#v:3AshowPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Pattern",
          "name": "3AshowPatternP",
          "package": "regex-dfa",
          "signature": "Pattern -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Pattern",
          "module": "Text.Regex.DFA.Pattern",
          "name": "3AshowPatternP",
          "normalized": "Pattern-\u003eString",
          "package": "regex-dfa",
          "partial": "Ashow Pattern",
          "signature": "Pattern-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Pattern.html#v:3AshowPatternP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "PatternIndex is for indexing submatches from  parenthesized groups (PGroup)\n",
          "module": "Text.Regex.DFA.ReadRegex",
          "name": "3APatternIndex",
          "package": "regex-dfa",
          "type": "type"
        },
        "index": {
          "description": "PatternIndex is for indexing submatches from parenthesized groups PGroup",
          "hierarchy": "Text Regex DFA ReadRegex",
          "module": "Text.Regex.DFA.ReadRegex",
          "name": "3APatternIndex",
          "package": "regex-dfa",
          "partial": "APattern Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ReadRegex.html#t:3APatternIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.ReadRegex",
          "name": "3AparseRegex",
          "package": "regex-dfa",
          "signature": "String -\u003e Either ParseError (Pattern, (Int, Int))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA ReadRegex",
          "module": "Text.Regex.DFA.ReadRegex",
          "name": "3AparseRegex",
          "normalized": "String-\u003eEither ParseError(Pattern,(Int,Int))",
          "package": "regex-dfa",
          "partial": "Aparse Regex",
          "signature": "String-\u003eEither ParseError(Pattern,(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-ReadRegex.html#v:3AparseRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Sequence",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Sequence",
          "module": "Text.Regex.DFA.Sequence",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "partial": "AComp Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Sequence.html#t:3ACompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Sequence",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Sequence",
          "module": "Text.Regex.DFA.Sequence",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "partial": "AExec Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Sequence.html#t:3AExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Sequence",
          "name": "3ARegex",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Sequence",
          "module": "Text.Regex.DFA.Sequence",
          "name": "3ARegex",
          "package": "regex-dfa",
          "partial": "ARegex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Sequence.html#t:3ARegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Flags (summed together)\nFlags (summed together)\nThe regular expression to compile\nReturns: the compiled regular expression\n",
          "module": "Text.Regex.DFA.Sequence",
          "name": "3Acompile",
          "package": "regex-dfa",
          "signature": "CompOption-\u003e ExecOption-\u003e Seq Char-\u003e Either String Regex",
          "type": "function"
        },
        "index": {
          "description": "Flags summed together Flags summed together The regular expression to compile Returns the compiled regular expression",
          "hierarchy": "Text Regex DFA Sequence",
          "module": "Text.Regex.DFA.Sequence",
          "name": "3Acompile",
          "normalized": "CompOption-\u003eExecOption-\u003eSeq Char-\u003eEither String Regex",
          "package": "regex-dfa",
          "partial": "Acompile",
          "signature": "CompOption-\u003eExecOption-\u003eSeq Char-\u003eEither String Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Sequence.html#v:3Acompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Compiled regular expression\nSeq Char to match against\n",
          "module": "Text.Regex.DFA.Sequence",
          "name": "3Aexecute",
          "package": "regex-dfa",
          "signature": "Regex-\u003e Seq Char-\u003e Either String (Maybe (Array Int (MatchOffset, MatchLength)))",
          "type": "function"
        },
        "index": {
          "description": "Compiled regular expression Seq Char to match against",
          "hierarchy": "Text Regex DFA Sequence",
          "module": "Text.Regex.DFA.Sequence",
          "name": "3Aexecute",
          "normalized": "Regex-\u003eSeq Char-\u003eEither String(Maybe(Array Int(MatchOffset,MatchLength)))",
          "package": "regex-dfa",
          "partial": "Aexecute",
          "signature": "Regex-\u003eSeq Char-\u003eEither String(Maybe(Array Int(MatchOffset,MatchLength)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Sequence.html#v:3Aexecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Compiled regular expression\nSeq Char to match against\n",
          "module": "Text.Regex.DFA.Sequence",
          "name": "3Aregexec",
          "package": "regex-dfa",
          "signature": "Regex-\u003e Seq Char-\u003e Either String (Maybe (Seq Char, Seq Char, Seq Char, [Seq Char]))",
          "type": "function"
        },
        "index": {
          "description": "Compiled regular expression Seq Char to match against",
          "hierarchy": "Text Regex DFA Sequence",
          "module": "Text.Regex.DFA.Sequence",
          "name": "3Aregexec",
          "normalized": "Regex-\u003eSeq Char-\u003eEither String(Maybe(Seq Char,Seq Char,Seq Char,[Seq Char]))",
          "package": "regex-dfa",
          "partial": "Aregexec",
          "signature": "Regex-\u003eSeq Char-\u003eEither String(Maybe(Seq Char,Seq Char,Seq Char,[Seq Char]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Sequence.html#v:3Aregexec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.String",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA String",
          "module": "Text.Regex.DFA.String",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "partial": "AComp Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-String.html#t:3ACompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.String",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA String",
          "module": "Text.Regex.DFA.String",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "partial": "AExec Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-String.html#t:3AExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.String",
          "name": "3ARegex",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA String",
          "module": "Text.Regex.DFA.String",
          "name": "3ARegex",
          "package": "regex-dfa",
          "partial": "ARegex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-String.html#t:3ARegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Flags (summed together)\nFlags (summed together)\nThe regular expression to compile (ASCII only, no null bytes)\nReturns: the compiled regular expression\n",
          "module": "Text.Regex.DFA.String",
          "name": "3Acompile",
          "package": "regex-dfa",
          "signature": "CompOption-\u003e ExecOption-\u003e String-\u003e Either String Regex",
          "type": "function"
        },
        "index": {
          "description": "Flags summed together Flags summed together The regular expression to compile ASCII only no null bytes Returns the compiled regular expression",
          "hierarchy": "Text Regex DFA String",
          "module": "Text.Regex.DFA.String",
          "name": "3Acompile",
          "normalized": "CompOption-\u003eExecOption-\u003eString-\u003eEither String Regex",
          "package": "regex-dfa",
          "partial": "Acompile",
          "signature": "CompOption-\u003eExecOption-\u003eString-\u003eEither String Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-String.html#v:3Acompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Compiled regular expression\nString to match against\n",
          "module": "Text.Regex.DFA.String",
          "name": "3Aexecute",
          "package": "regex-dfa",
          "signature": "Regex-\u003e String-\u003e Either String (Maybe (Array Int (MatchOffset, MatchLength)))",
          "type": "function"
        },
        "index": {
          "description": "Compiled regular expression String to match against",
          "hierarchy": "Text Regex DFA String",
          "module": "Text.Regex.DFA.String",
          "name": "3Aexecute",
          "normalized": "Regex-\u003eString-\u003eEither String(Maybe(Array Int(MatchOffset,MatchLength)))",
          "package": "regex-dfa",
          "partial": "Aexecute",
          "signature": "Regex-\u003eString-\u003eEither String(Maybe(Array Int(MatchOffset,MatchLength)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-String.html#v:3Aexecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Compiled regular expression\nString to match against\n",
          "module": "Text.Regex.DFA.String",
          "name": "3Aregexec",
          "package": "regex-dfa",
          "signature": "Regex-\u003e String-\u003e Either String (Maybe (String, String, String, [String]))",
          "type": "function"
        },
        "index": {
          "description": "Compiled regular expression String to match against",
          "hierarchy": "Text Regex DFA String",
          "module": "Text.Regex.DFA.String",
          "name": "3Aregexec",
          "normalized": "Regex-\u003eString-\u003eEither String(Maybe(String,String,String,[String]))",
          "package": "regex-dfa",
          "partial": "Aregexec",
          "signature": "Regex-\u003eString-\u003eEither String(Maybe(String,String,String,[String]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-String.html#v:3Aregexec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AcanMatchNull",
          "package": "regex-dfa",
          "signature": "Pattern -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Transitions",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AcanMatchNull",
          "normalized": "Pattern-\u003eBool",
          "package": "regex-dfa",
          "partial": "Acan Match Null",
          "signature": "Pattern-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Transitions.html#v:3AcanMatchNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AcannotMatchNull",
          "package": "regex-dfa",
          "signature": "Pattern -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Transitions",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AcannotMatchNull",
          "normalized": "Pattern-\u003eBool",
          "package": "regex-dfa",
          "partial": "Acannot Match Null",
          "signature": "Pattern-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Transitions.html#v:3AcannotMatchNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Change a pattern so it will not loop in the DFA construction.\n Previously have used starTrans on the Pattern.  The problems comes\n from PStar applied to a pattern which may match 0 characters.  This\n *will* return a safe pattern, which can match null if and only if\n the input pattern could.\n",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AnoLoop",
          "package": "regex-dfa",
          "signature": "Pattern -\u003e Pattern",
          "type": "function"
        },
        "index": {
          "description": "Change pattern so it will not loop in the DFA construction Previously have used starTrans on the Pattern The problems comes from PStar applied to pattern which may match characters This will return safe pattern which can match null if and only if the input pattern could",
          "hierarchy": "Text Regex DFA Transitions",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AnoLoop",
          "normalized": "Pattern-\u003ePattern",
          "package": "regex-dfa",
          "partial": "Ano Loop",
          "signature": "Pattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Transitions.html#v:3AnoLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Transitions",
          "name": "3Asimplify",
          "package": "regex-dfa",
          "signature": "Pattern -\u003e Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA Transitions",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3Asimplify",
          "normalized": "Pattern-\u003ePattern",
          "package": "regex-dfa",
          "partial": "Asimplify",
          "signature": "Pattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Transitions.html#v:3Asimplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "starTrans replaces PQuest,PPlus,PBound,PGroup with combinations of\n PEmpty,POr,PConcat,PStar.  Malformed limits on the PBound will be\n replaced with PEmpty rather than calling error.  This will also\n simplify the resulting Pattern as it works.\n",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AstarTrans",
          "package": "regex-dfa",
          "signature": "Pattern -\u003e Pattern",
          "type": "function"
        },
        "index": {
          "description": "starTrans replaces PQuest PPlus PBound PGroup with combinations of PEmpty POr PConcat PStar Malformed limits on the PBound will be replaced with PEmpty rather than calling error This will also simplify the resulting Pattern as it works",
          "hierarchy": "Text Regex DFA Transitions",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AstarTrans",
          "normalized": "Pattern-\u003ePattern",
          "package": "regex-dfa",
          "partial": "Astar Trans",
          "signature": "Pattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Transitions.html#v:3AstarTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "I did this overly cleverly.  It descends the Pattern depth first\n and computes what is nullable along with creating id numbers for\n the DFA states.  This works, but amusingly required mdo.  The main\n output is funnel out via the tell to the WriterT and is the NFA\n state before, the DoPa index of the transition character,\n",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AstateAn",
          "package": "regex-dfa",
          "signature": "Pattern -\u003e [(Int, DoPa, Int)]",
          "type": "function"
        },
        "index": {
          "description": "did this overly cleverly It descends the Pattern depth first and computes what is nullable along with creating id numbers for the DFA states This works but amusingly required mdo The main output is funnel out via the tell to the WriterT and is the NFA state before the DoPa index of the transition character",
          "hierarchy": "Text Regex DFA Transitions",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AstateAn",
          "normalized": "Pattern-\u003e[(Int,DoPa,Int)]",
          "package": "regex-dfa",
          "partial": "Astate An",
          "signature": "Pattern-\u003e[(Int,DoPa,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Transitions.html#v:3AstateAn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "topNoLoop descends, looking for PStar, for which it calls\n breakLoop.  This *will* return a safe pattern, which can match null\n \u003ca\u003eif\u003c/a\u003e and \u003ca\u003eonly if\u003c/a\u003e the input pattern could.\n",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AtopNoLoop",
          "package": "regex-dfa",
          "signature": "Pattern -\u003e Pattern",
          "type": "function"
        },
        "index": {
          "description": "topNoLoop descends looking for PStar for which it calls breakLoop This will return safe pattern which can match null if and only if the input pattern could",
          "hierarchy": "Text Regex DFA Transitions",
          "module": "Text.Regex.DFA.Transitions",
          "name": "3AtopNoLoop",
          "normalized": "Pattern-\u003ePattern",
          "package": "regex-dfa",
          "partial": "Atop No Loop",
          "signature": "Pattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Transitions.html#v:3AtopNoLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Wrap",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Wrap",
          "module": "Text.Regex.DFA.Wrap",
          "name": "3ACompOption",
          "package": "regex-dfa",
          "partial": "AComp Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Wrap.html#t:3ACompOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Wrap",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Wrap",
          "module": "Text.Regex.DFA.Wrap",
          "name": "3AExecOption",
          "package": "regex-dfa",
          "partial": "AExec Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Wrap.html#t:3AExecOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA.Wrap",
          "name": "3ARegex",
          "package": "regex-dfa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex DFA Wrap",
          "module": "Text.Regex.DFA.Wrap",
          "name": "3ARegex",
          "package": "regex-dfa",
          "partial": "ARegex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Wrap.html#t:3ARegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This is the pure functional matching operator.  If the target\n cannot be produced then some empty result will be returned.  If\n there is an error in processing, then \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e will be called.\n",
          "module": "Text.Regex.DFA.Wrap",
          "name": "3A=~",
          "package": "regex-dfa",
          "signature": "source1 -\u003e source -\u003e target",
          "type": "function"
        },
        "index": {
          "description": "This is the pure functional matching operator If the target cannot be produced then some empty result will be returned If there is an error in processing then error will be called",
          "hierarchy": "Text Regex DFA Wrap",
          "module": "Text.Regex.DFA.Wrap",
          "name": "3A=~",
          "normalized": "a-\u003ea-\u003eb",
          "package": "regex-dfa",
          "signature": "source-\u003esource-\u003etarget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Wrap.html#v:3A=~"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This is the monadic matching operator.  If a single match fails,\n then \u003ctt\u003e\u003ca\u003efail\u003c/a\u003e\u003c/tt\u003e will be called.\n",
          "module": "Text.Regex.DFA.Wrap",
          "name": "3A=~~",
          "package": "regex-dfa",
          "signature": "source1 -\u003e source -\u003e m target",
          "type": "function"
        },
        "index": {
          "description": "This is the monadic matching operator If single match fails then fail will be called",
          "hierarchy": "Text Regex DFA Wrap",
          "module": "Text.Regex.DFA.Wrap",
          "name": "3A=~~",
          "normalized": "a-\u003ea-\u003eb c",
          "package": "regex-dfa",
          "signature": "source-\u003esource-\u003em target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Wrap.html#v:3A=~~"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If (dfaClean pat) is True then (\u003ctt\u003e\u003ca\u003emakeCompat\u003c/a\u003e\u003c/tt\u003e pat) should not throw\n an error.  This translates a \u003ctt\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/tt\u003e into a DFA \u003ctt\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Text.Regex.DFA.Wrap",
          "name": "3AmakeCompat",
          "package": "regex-dfa",
          "signature": "CompOption -\u003e Pattern -\u003e Regexp",
          "type": "function"
        },
        "index": {
          "description": "If dfaClean pat is True then makeCompat pat should not throw an error This translates Pattern into DFA Regex",
          "hierarchy": "Text Regex DFA Wrap",
          "module": "Text.Regex.DFA.Wrap",
          "name": "3AmakeCompat",
          "normalized": "CompOption-\u003ePattern-\u003eRegexp",
          "package": "regex-dfa",
          "partial": "Amake Compat",
          "signature": "CompOption-\u003ePattern-\u003eRegexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA-Wrap.html#v:3AmakeCompat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.DFA",
          "name": "3AgetVersion_Text_Regex_DFA",
          "package": "regex-dfa",
          "signature": "Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex DFA",
          "module": "Text.Regex.DFA",
          "name": "3AgetVersion_Text_Regex_DFA",
          "package": "regex-dfa",
          "partial": "Aget Version Text Regex DFA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-dfa/docs/Text-Regex-DFA.html#v:3AgetVersion_Text_Regex_DFA"
      }
    }
  ]
]