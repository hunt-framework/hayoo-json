[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-permutation/docs/Text-Parsec-Permutation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eText.Parsec.Permutation is a permutation parser for parsec intended as\n a generalized replacement for Text.Parsec.Perm in parsec.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e import Text.Parsec.Permutation\n\n fooParser :: ParsecT s u m a -\u003e ParsecT s u m [a]\n fooParser = runPermParser $\n                 (,,) \u003c$\u003e oncePerm (char 'A')\n                      \u003c*\u003e manyPerm (char 'B')\n                      \u003c*\u003e optionMaybePerm (char 'C' \u003e\u003e char 'D')\n\u003c/pre\u003e\u003cp\u003eThis parser will return (\u003ccode\u003eA\u003c/code\u003e, \"BBB\", Just \u003ccode\u003eD\u003c/code\u003e) when parsing for example\n the strings \"BCDABB\", \"CDBBAB\", &etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Permutation",
        "fct-package": "parsec-permutation",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Permutation.html",
        "fct-type": "module",
        "title": "Permutation"
      },
      "index": {
        "description": "Text.Parsec.Permutation is permutation parser for parsec intended as generalized replacement for Text.Parsec.Perm in parsec Example usage import Text.Parsec.Permutation fooParser ParsecT ParsecT fooParser runPermParser oncePerm char manyPerm char optionMaybePerm char char This parser will return BBB Just when parsing for example the strings BCDABB CDBBAB etc",
        "hierarchy": "Text Parsec Permutation",
        "module": "Text.Parsec.Permutation",
        "name": "Permutation",
        "normalized": "",
        "package": "parsec-permutation",
        "partial": "Permutation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-permutation/docs/Text-Parsec-Permutation.html#t:PermParser",
      "description": {
        "fct-module": "Text.Parsec.Permutation",
        "fct-package": "parsec-permutation",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Permutation.html#PermParser",
        "fct-type": "data",
        "title": "PermParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Permutation",
        "module": "Text.Parsec.Permutation",
        "name": "PermParser",
        "normalized": "",
        "package": "parsec-permutation",
        "partial": "Perm Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-permutation/docs/Text-Parsec-Permutation.html#v:many1Perm",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ca\u003emanyPerm\u003c/a\u003e, but fails when the parsing doesn't succeed at least\n   once.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Permutation",
        "fct-package": "parsec-permutation",
        "fct-signature": "ParsecT s u m a -\u003e PermParser s u m [a]",
        "fct-source": "src/Text-Parsec-Permutation.html#many1Perm",
        "fct-type": "function",
        "title": "many1Perm"
      },
      "index": {
        "description": "Same as manyPerm but fails when the parsing doesn succeed at least once",
        "hierarchy": "Text Parsec Permutation",
        "module": "Text.Parsec.Permutation",
        "name": "many1Perm",
        "normalized": "ParsecT a b c d-\u003ePermParser a b c[d]",
        "package": "parsec-permutation",
        "partial": "Perm",
        "signature": "ParsecT s u m a-\u003ePermParser s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-permutation/docs/Text-Parsec-Permutation.html#v:manyPerm",
      "description": {
        "fct-descr": "\u003cp\u003eParses a given value as many times as possible in the permutation. As with\n   Parsec.Prim.many in parsec, you need to make sure that the provided parser\n   consumes input when succeeding to prevent infinite recursion.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Permutation",
        "fct-package": "parsec-permutation",
        "fct-signature": "ParsecT s u m a -\u003e PermParser s u m [a]",
        "fct-source": "src/Text-Parsec-Permutation.html#manyPerm",
        "fct-type": "function",
        "title": "manyPerm"
      },
      "index": {
        "description": "Parses given value as many times as possible in the permutation As with Parsec.Prim.many in parsec you need to make sure that the provided parser consumes input when succeeding to prevent infinite recursion",
        "hierarchy": "Text Parsec Permutation",
        "module": "Text.Parsec.Permutation",
        "name": "manyPerm",
        "normalized": "ParsecT a b c d-\u003ePermParser a b c[d]",
        "package": "parsec-permutation",
        "partial": "Perm",
        "signature": "ParsecT s u m a-\u003ePermParser s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-permutation/docs/Text-Parsec-Permutation.html#v:oncePerm",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt parsing a value once. Fails if parsing the value succeeds multiple\n   times.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Permutation",
        "fct-package": "parsec-permutation",
        "fct-signature": "ParsecT s u m a -\u003e PermParser s u m a",
        "fct-source": "src/Text-Parsec-Permutation.html#oncePerm",
        "fct-type": "function",
        "title": "oncePerm"
      },
      "index": {
        "description": "Attempt parsing value once Fails if parsing the value succeeds multiple times",
        "hierarchy": "Text Parsec Permutation",
        "module": "Text.Parsec.Permutation",
        "name": "oncePerm",
        "normalized": "ParsecT a b c d-\u003ePermParser a b c d",
        "package": "parsec-permutation",
        "partial": "Perm",
        "signature": "ParsecT s u m a-\u003ePermParser s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-permutation/docs/Text-Parsec-Permutation.html#v:optionMaybePerm",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ca\u003eoptionPerm\u003c/a\u003e, but uses Nothing as the default value.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Permutation",
        "fct-package": "parsec-permutation",
        "fct-signature": "ParsecT s u m a -\u003e PermParser s u m (Maybe a)",
        "fct-source": "src/Text-Parsec-Permutation.html#optionMaybePerm",
        "fct-type": "function",
        "title": "optionMaybePerm"
      },
      "index": {
        "description": "Similar to optionPerm but uses Nothing as the default value",
        "hierarchy": "Text Parsec Permutation",
        "module": "Text.Parsec.Permutation",
        "name": "optionMaybePerm",
        "normalized": "ParsecT a b c d-\u003ePermParser a b c(Maybe d)",
        "package": "parsec-permutation",
        "partial": "Maybe Perm",
        "signature": "ParsecT s u m a-\u003ePermParser s u m(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-permutation/docs/Text-Parsec-Permutation.html#v:optionPerm",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt parsing a value at most once. Fails when parsing the value\n   succeeds multiple times. The first argument is the default value to be\n   used when parsing never succeeds.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Permutation",
        "fct-package": "parsec-permutation",
        "fct-signature": "a -\u003e ParsecT s u m a -\u003e PermParser s u m a",
        "fct-source": "src/Text-Parsec-Permutation.html#optionPerm",
        "fct-type": "function",
        "title": "optionPerm"
      },
      "index": {
        "description": "Attempt parsing value at most once Fails when parsing the value succeeds multiple times The first argument is the default value to be used when parsing never succeeds",
        "hierarchy": "Text Parsec Permutation",
        "module": "Text.Parsec.Permutation",
        "name": "optionPerm",
        "normalized": "a-\u003eParsecT b c d a-\u003ePermParser b c d a",
        "package": "parsec-permutation",
        "partial": "Perm",
        "signature": "a-\u003eParsecT s u m a-\u003ePermParser s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-permutation/docs/Text-Parsec-Permutation.html#v:runPermParser",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a permutation parser into a regular parsec parser.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Permutation",
        "fct-package": "parsec-permutation",
        "fct-signature": "PermParser s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Permutation.html#runPermParser",
        "fct-type": "function",
        "title": "runPermParser"
      },
      "index": {
        "description": "Turns permutation parser into regular parsec parser",
        "hierarchy": "Text Parsec Permutation",
        "module": "Text.Parsec.Permutation",
        "name": "runPermParser",
        "normalized": "PermParser a b c d-\u003eParsecT a b c d",
        "package": "parsec-permutation",
        "partial": "Perm Parser",
        "signature": "PermParser s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-permutation/docs/Text-Parsec-Permutation.html#v:runPermParserTill",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to runPermParser, but attempts parsing permutations only until the\n   given \u003ccode\u003euntilParser\u003c/code\u003e succeeds (similar to \u003ccode\u003emanyTill\u003c/code\u003e in Text.Parsec).\n\u003c/p\u003e\u003cp\u003eThe text parsed by the untilParser is not consumed, however, so that its\n   contents can be parsed later if necessary.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Permutation",
        "fct-package": "parsec-permutation",
        "fct-signature": "ParsecT s u m end -\u003e PermParser s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Permutation.html#runPermParserTill",
        "fct-type": "function",
        "title": "runPermParserTill"
      },
      "index": {
        "description": "Similar to runPermParser but attempts parsing permutations only until the given untilParser succeeds similar to manyTill in Text.Parsec The text parsed by the untilParser is not consumed however so that its contents can be parsed later if necessary",
        "hierarchy": "Text Parsec Permutation",
        "module": "Text.Parsec.Permutation",
        "name": "runPermParserTill",
        "normalized": "ParsecT a b c d-\u003ePermParser a b c e-\u003eParsecT a b c e",
        "package": "parsec-permutation",
        "partial": "Perm Parser Till",
        "signature": "ParsecT s u m end-\u003ePermParser s u m a-\u003eParsecT s u m a"
      }
    }
  }
]