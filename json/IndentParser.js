[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for constructing indentation aware tokeniser that can be used\nin conjuction with \u003ccode\u003e\u003ccode\u003eText.ParserCombinators.Parsec.Token\u003c/code\u003e\u003c/code\u003e. All the\ncombinator takes a \u003ccode\u003e\u003ccode\u003eText.ParserCombinators.Parsec.Token.TokenParser\u003c/code\u003e\u003c/code\u003e\nas its first argument. For every field \u003ccode\u003efoo\u003c/code\u003e of\n\u003ccode\u003e\u003ccode\u003eText.ParserCombinators.Parsec.Token.TokenParser\u003c/code\u003e\u003c/code\u003e this module\nexports a combinator \u003ccode\u003efoo\u003c/code\u003e. To define a tokeniser for an indentation\nbased language a user first defines the appropriate\n\u003ccode\u003e\u003ccode\u003eText.ParserCombinators.Parsec.Language.LanguageDef\u003c/code\u003e\u003c/code\u003e record, applies\nthe combinator \u003ccode\u003e\u003ccode\u003eText.ParserCombinators.Parsec.Token.makeTokenParser\u003c/code\u003e\u003c/code\u003e\nto get a \u003ccode\u003e\u003ccode\u003eText.ParserCombinators.Parsec.Token.TokenParser\u003c/code\u003e\u003c/code\u003e record\nsay \u003ccode\u003etokP\u003c/code\u003e and then, instead of selecting the field \u003ccode\u003efoo\u003c/code\u003e of \u003ccode\u003etokP\u003c/code\u003e,\napplies the combinator \u003ccode\u003efoo\u003c/code\u003e exported from this module to \u003ccode\u003etokP\u003c/code\u003e. The\nsemantics of the combinator \u003ccode\u003efoo\u003c/code\u003e is essentially same as that of the\nfield \u003ccode\u003efoo\u003c/code\u003e of \u003ccode\u003e\u003ccode\u003eText.ParserCombinators.Parsec.Token.TokenParser\u003c/code\u003e\u003c/code\u003e but\nthe returned parsers are indentation aware. Apart from these there are\ncertain new combinators that are defined specifically for parsing\ncertain indentation based syntactic constructs. (We have not defined\nsquares use brackets instead)\n\u003c/p\u003e\u003cp\u003eThere are two important classes of parser combinator exported by this\nmodule:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eGrouping Parser Combinator\u003c/dt\u003e\u003cdd\u003e A grouping parser combinator takes as\ninput a parser say \u003ccode\u003ep\u003c/code\u003e and returns a parser that parses \u003ccode\u003ep\u003c/code\u003e between\ntwo \u003cem\u003egrouping delimiters\u003c/em\u003e.  There are three flavours of grouping\nparsers: \u003ccode\u003efoo\u003c/code\u003e, \u003ccode\u003efooOrBlock\u003c/code\u003e and \u003ccode\u003efooOrLineFold\u003c/code\u003e where \u003ccode\u003efoo\u003c/code\u003e can be\none of \u003ccode\u003eangles\u003c/code\u003e, \u003ccode\u003ebraces\u003c/code\u003e, \u003ccode\u003eparens\u003c/code\u003e, \u003ccode\u003ebrackets\u003c/code\u003e. To illustrate we take\n\u003ccode\u003efoo\u003c/code\u003e to be \u003ccode\u003ebraces\u003c/code\u003e. The parser \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebraces\u003c/a\u003e\u003c/code\u003e tokP p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e\ndelimited by '{' and '}'. In this case \u003ccode\u003ep\u003c/code\u003e does not care about\nindentation (i.e. the parser \u003ccode\u003ep\u003c/code\u003e is run in\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eNoIndent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e mode). The\nparser \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebracesOrBlock\u003c/a\u003e\u003c/code\u003e tokP p\u003c/code\u003e is like \u003ccode\u003ebraces tokP p\u003c/code\u003e but if no\nexplicit delimiting braces are given parses \u003ccode\u003ep\u003c/code\u003e within an indented\nblock. Similarly \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebracesOrLineFold\u003c/a\u003e\u003c/code\u003e tokP p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e between '{'\nand '}' and uses line fold when no explicit braces are given. These\ncan be two varients can be defined as follows\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e bracesOrBlock tokP p    = braces tokP p \u003c|\u003e block p\n bracesOrLineFold tokP p = braces tokP p \u003c|\u003e lineFold p\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eSeperator Parser Combinator\u003c/dt\u003e\u003cdd\u003e A seperator parser combinator takes as\ninput a parser say \u003ccode\u003ep\u003c/code\u003e and returns a parser that parses a list of \u003ccode\u003ep\u003c/code\u003e\nseperated by a seperator. The module exports the combinators \u003ccode\u003efooSep\u003c/code\u003e,\n\u003ccode\u003efooSep1\u003c/code\u003e, \u003ccode\u003efooOrNewLineSep\u003c/code\u003e and \u003ccode\u003efooOrNewLineSep1\u003c/code\u003e, where \u003ccode\u003efoo\u003c/code\u003e is\neither \u003ccode\u003esemi\u003c/code\u003e (in which case the seperator is a semicolon ';') or\n\u003ccode\u003ecomma\u003c/code\u003e (in which case the seperator is a comma ',').\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eTo illustrate the use of this module we now give, as an incomplete\nexample, a parser that parses a where clause in Haskell which\nillustrates the use of this module.\n\u003c/p\u003e\u003cpre\u003e   import qualified Text.ParserCombinators.Parsec.Language as L\n   import qualified Text.ParserCombinators.Parsec.Toke as T\n   import qualified Text.ParserCombinator.Parsec.IndentToken as IT\n\u003c/pre\u003e\u003cpre\u003e   tokP = T.makeTokenParser L.haskellDef\n   semiOrNewLineSep = IT.semiOrNewLineSep tokP\n   bracesOrBlock = IT.bracesOrBlock tokP\n   identifier = IT.identifier tokP\n   ....\n   symbol = IT.symbol tokP\n\u003c/pre\u003e\u003cpre\u003e   binding = semiOrNewLineSep bind\n   bind    = do id \u003c- identifier\n                symbol (char '=')\n                e \u003c- expr\n                return (id,e)\n  whereClause = do reserved \"where\"; braceOrBlock binding\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "module",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html",
        "fct-type": "module",
        "title": "Token"
      },
      "index": {
        "description": "module for constructing indentation aware tokeniser that can be used in conjuction with Text.ParserCombinators.Parsec.Token All the combinator takes Text.ParserCombinators.Parsec.Token.TokenParser as its first argument For every field foo of Text.ParserCombinators.Parsec.Token.TokenParser this module exports combinator foo To define tokeniser for an indentation based language user first defines the appropriate Text.ParserCombinators.Parsec.Language.LanguageDef record applies the combinator Text.ParserCombinators.Parsec.Token.makeTokenParser to get Text.ParserCombinators.Parsec.Token.TokenParser record say tokP and then instead of selecting the field foo of tokP applies the combinator foo exported from this module to tokP The semantics of the combinator foo is essentially same as that of the field foo of Text.ParserCombinators.Parsec.Token.TokenParser but the returned parsers are indentation aware Apart from these there are certain new combinators that are defined specifically for parsing certain indentation based syntactic constructs We have not defined squares use brackets instead There are two important classes of parser combinator exported by this module Grouping Parser Combinator grouping parser combinator takes as input parser say and returns parser that parses between two grouping delimiters There are three flavours of grouping parsers foo fooOrBlock and fooOrLineFold where foo can be one of angles braces parens brackets To illustrate we take foo to be braces The parser braces tokP parses delimited by and In this case does not care about indentation i.e the parser is run in NoIndent mode The parser bracesOrBlock tokP is like braces tokP but if no explicit delimiting braces are given parses within an indented block Similarly bracesOrLineFold tokP parses between and and uses line fold when no explicit braces are given These can be two varients can be defined as follows bracesOrBlock tokP braces tokP block bracesOrLineFold tokP braces tokP lineFold Seperator Parser Combinator seperator parser combinator takes as input parser say and returns parser that parses list of seperated by seperator The module exports the combinators fooSep fooSep1 fooOrNewLineSep and fooOrNewLineSep1 where foo is either semi in which case the seperator is semicolon or comma in which case the seperator is comma To illustrate the use of this module we now give as an incomplete example parser that parses where clause in Haskell which illustrates the use of this module import qualified Text.ParserCombinators.Parsec.Language as import qualified Text.ParserCombinators.Parsec.Toke as import qualified Text.ParserCombinator.Parsec.IndentToken as IT tokP T.makeTokenParser L.haskellDef semiOrNewLineSep IT.semiOrNewLineSep tokP bracesOrBlock IT.bracesOrBlock tokP identifier IT.identifier tokP symbol IT.symbol tokP binding semiOrNewLineSep bind bind do id identifier symbol char expr return id whereClause do reserved where braceOrBlock binding",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "Token",
        "normalized": "",
        "package": "IndentParser",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#t:IndentCharParser",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "type",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Prim.html#IndentCharParser",
        "fct-type": "type",
        "title": "IndentCharParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "IndentCharParser",
        "normalized": "",
        "package": "IndentParser",
        "partial": "Indent Char Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#t:TokenParser",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "type",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#TokenParser",
        "fct-type": "type",
        "title": "TokenParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "TokenParser",
        "normalized": "",
        "package": "IndentParser",
        "partial": "Token Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:angles",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003eangles tokP p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e between angles. The parser \u003ccode\u003ep\u003c/code\u003e\ndoes not care about indentation i.e. \u003ccode\u003ep\u003c/code\u003e is run in\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eNoIndent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e mode.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "angles"
      },
      "index": {
        "description": "The parser angles tokP parses between angles The parser does not care about indentation i.e is run in NoIndent mode",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "angles",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:anglesOrBlock",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eangles\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but when no explicit angles are given, groups\n\u003ccode\u003ep\u003c/code\u003e by block indentation.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "anglesOrBlock"
      },
      "index": {
        "description": "Similar to angles but when no explicit angles are given groups by block indentation",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "anglesOrBlock",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "Or Block",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:anglesOrLineFold",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eangles\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but when no explicit angles are given, groups\n\u003ccode\u003ep\u003c/code\u003e by a line fold.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "anglesOrLineFold"
      },
      "index": {
        "description": "Similar to angles but when no explicit angles are given groups by line fold",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "anglesOrLineFold",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "Or Line Fold",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:braces",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003ebraces tokP p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e between '{' and '}'. The parser\n\u003ccode\u003ep\u003c/code\u003e does not care about indentation i.e. \u003ccode\u003ep\u003c/code\u003e is run in\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eNoIndent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e mode.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "The parser braces tokP parses between and The parser does not care about indentation i.e is run in NoIndent mode",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "braces",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:bracesOrBlock",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebraces\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but when no explicit '{' and '}' are given,\ngroups \u003ccode\u003ep\u003c/code\u003e by block indentation.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "bracesOrBlock"
      },
      "index": {
        "description": "Similar to braces but when no explicit and are given groups by block indentation",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "bracesOrBlock",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "Or Block",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:bracesOrLineFold",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebraces\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but when no explicit '{' and '}' are given,\ngroups \u003ccode\u003ep\u003c/code\u003e by a line fold.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "bracesOrLineFold"
      },
      "index": {
        "description": "Similar to braces but when no explicit and are given groups by line fold",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "bracesOrLineFold",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "Or Line Fold",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:brackets",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003ebrackets tokP p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e between '[' and ']'. The\nparser \u003ccode\u003ep\u003c/code\u003e does not care about indentation i.e. \u003ccode\u003ep\u003c/code\u003e is run in\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eNoIndent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e mode.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "The parser brackets tokP parses between and The parser does not care about indentation i.e is run in NoIndent mode",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "brackets",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:bracketsOrBlock",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebrackets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but when no explicit '[' and ']' are given,\ngroups \u003ccode\u003ep\u003c/code\u003e by block indentation.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "bracketsOrBlock"
      },
      "index": {
        "description": "Similar to brackets but when no explicit and are given groups by block indentation",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "bracketsOrBlock",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "Or Block",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:bracketsOrLineFold",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebrackets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but when no explicit '[' and ']' are given,\ngroups \u003ccode\u003ep\u003c/code\u003e by a line fold.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "bracketsOrLineFold"
      },
      "index": {
        "description": "Similar to brackets but when no explicit and are given groups by line fold",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "bracketsOrLineFold",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "Or Line Fold",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:charLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match a character literal (the syntax\nis assumend to be that of Hasekell which matches that of most\nprogramming language).\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#charLiteral",
        "fct-type": "function",
        "title": "charLiteral"
      },
      "index": {
        "description": "Indentation aware parser to match character literal the syntax is assumend to be that of Hasekell which matches that of most programming language",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "charLiteral",
        "normalized": "TokenParser a-\u003eIndentCharParser a Char",
        "package": "IndentParser",
        "partial": "Literal",
        "signature": "TokenParser st-\u003eIndentCharParser st Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:colon",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a colon and returns \u003ca\u003e:\u003c/a\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#colon",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "Matches colon and returns",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "colon",
        "normalized": "TokenParser a-\u003eIndentCharParser a String",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:comma",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a comma and returns \u003ca\u003e,\u003c/a\u003e.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#comma",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "Matches comma and returns",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "comma",
        "normalized": "TokenParser a-\u003eIndentCharParser a String",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:commaOrNewLineSep",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an indentation aware parser \u003ccode\u003ep\u003c/code\u003e as argument \u003ccode\u003ecommaOrNewLineSep\ntokP\u003c/code\u003e returns a parser that parses zero or more occurances of \u003ccode\u003ep\u003c/code\u003e\nseperated by either comma (',') or newlines. To seperate multiple\noccurance of \u003ccode\u003ep\u003c/code\u003e in the same line use an explicit comma (',').\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st [a]",
        "fct-type": "function",
        "title": "commaOrNewLineSep"
      },
      "index": {
        "description": "Given an indentation aware parser as argument commaOrNewLineSep tokP returns parser that parses zero or more occurances of seperated by either comma or newlines To seperate multiple occurance of in the same line use an explicit comma",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "commaOrNewLineSep",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a[b]",
        "package": "IndentParser",
        "partial": "Or New Line Sep",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:commaOrNewLineSep1",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an indentation aware parser \u003ccode\u003ep\u003c/code\u003e as argument \u003ccode\u003ecommaOrNewLineSep1\ntokP\u003c/code\u003e returns a parser that parses one or more occurances of \u003ccode\u003ep\u003c/code\u003e\nseperated by either comma (',') or newline. To seperate multiple\noccurance of \u003ccode\u003ep\u003c/code\u003e in the same line use an explicit comma (',').\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st [a]",
        "fct-type": "function",
        "title": "commaOrNewLineSep1"
      },
      "index": {
        "description": "Given an indentation aware parser as argument commaOrNewLineSep1 tokP returns parser that parses one or more occurances of seperated by either comma or newline To seperate multiple occurance of in the same line use an explicit comma",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "commaOrNewLineSep1",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a[b]",
        "package": "IndentParser",
        "partial": "Or New Line Sep",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:commaSep",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an indentation aware parser \u003ccode\u003ep\u003c/code\u003e as argument \u003ccode\u003ecommaSep tokP\u003c/code\u003e\n  returns a parser that parses zero or more occurances of \u003ccode\u003ep\u003c/code\u003e\n  seperated by comma (',') \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st [a]",
        "fct-type": "function",
        "title": "commaSep"
      },
      "index": {
        "description": "Given an indentation aware parser as argument commaSep tokP returns parser that parses zero or more occurances of seperated by comma",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "commaSep",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a[b]",
        "package": "IndentParser",
        "partial": "Sep",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:commaSep1",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an indentation aware parser \u003ccode\u003ep\u003c/code\u003e as argument \u003ccode\u003ecommaSep1 tokP\u003c/code\u003e\n  returns a parser that parses one or more occurances of \u003ccode\u003ep\u003c/code\u003e seperated\n  by comma (',') \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st [a]",
        "fct-type": "function",
        "title": "commaSep1"
      },
      "index": {
        "description": "Given an indentation aware parser as argument commaSep1 tokP returns parser that parses one or more occurances of seperated by comma",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "commaSep1",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a[b]",
        "package": "IndentParser",
        "partial": "Sep",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:decimal",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match an integer in decimal.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st Integer",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#decimal",
        "fct-type": "function",
        "title": "decimal"
      },
      "index": {
        "description": "Indentation aware parser to match an integer in decimal",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "decimal",
        "normalized": "TokenParser a-\u003eIndentCharParser a Integer",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:dot",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a dot and returns \u003ca\u003e.\u003c/a\u003e \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "Matches dot and returns",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "dot",
        "normalized": "TokenParser a-\u003eIndentCharParser a String",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:float",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match a floating point number.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st Double",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#float",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "Indentation aware parser to match floating point number",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "float",
        "normalized": "TokenParser a-\u003eIndentCharParser a Double",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:hexadecimal",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match an integer in hexadecimal.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st Integer",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#hexadecimal",
        "fct-type": "function",
        "title": "hexadecimal"
      },
      "index": {
        "description": "Indentation aware parser to match an integer in hexadecimal",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "hexadecimal",
        "normalized": "TokenParser a-\u003eIndentCharParser a Integer",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:identifier",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match a valid identifier of the\nlanguage.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#identifier",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "Indentation aware parser to match valid identifier of the language",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "identifier",
        "normalized": "TokenParser a-\u003eIndentCharParser a String",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:integer",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match an integer.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st Integer",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#integer",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "Indentation aware parser to match an integer",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "integer",
        "normalized": "TokenParser a-\u003eIndentCharParser a Integer",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:lexeme",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a lexeme parser. The resultant parser skips trailing\nspaces and is indentation aware.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "lexeme"
      },
      "index": {
        "description": "Creates lexeme parser The resultant parser skips trailing spaces and is indentation aware",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "lexeme",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:natural",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match a natural number.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st Integer",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#natural",
        "fct-type": "function",
        "title": "natural"
      },
      "index": {
        "description": "Indentation aware parser to match natural number",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "natural",
        "normalized": "TokenParser a-\u003eIndentCharParser a Integer",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:naturalOrFloat",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match either a natural number or\nFloating point number.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st (Either Integer Double)",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#naturalOrFloat",
        "fct-type": "function",
        "title": "naturalOrFloat"
      },
      "index": {
        "description": "Indentation aware parser to match either natural number or Floating point number",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "naturalOrFloat",
        "normalized": "TokenParser a-\u003eIndentCharParser a(Either Integer Double)",
        "package": "IndentParser",
        "partial": "Or Float",
        "signature": "TokenParser st-\u003eIndentCharParser st(Either Integer Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:octal",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match an integer in ocatal.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st Integer",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#octal",
        "fct-type": "function",
        "title": "octal"
      },
      "index": {
        "description": "Indentation aware parser to match an integer in ocatal",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "octal",
        "normalized": "TokenParser a-\u003eIndentCharParser a Integer",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:operator",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003ereserved tokP keyword\u003c/code\u003e parses  the reserved word keyword.\n The string keyword should have been declared as a reserved word in the \n \u003ccode\u003e\u003ccode\u003eText.ParserCombinator.Parserc.Language.LanguageDef\u003c/code\u003e\u003c/code\u003e\n                    -record.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#operator",
        "fct-type": "function",
        "title": "operator"
      },
      "index": {
        "description": "The parser reserved tokP keyword parses the reserved word keyword The string keyword should have been declared as reserved word in the Text.ParserCombinator.Parserc.Language.LanguageDef record",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "operator",
        "normalized": "TokenParser a-\u003eIndentCharParser a String",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:parens",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003eparens tokP p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e between '(' and ')'. The parser\n\u003ccode\u003ep\u003c/code\u003e does not care about indentation i.e. \u003ccode\u003ep\u003c/code\u003e is run in\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eNoIndent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e mode.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "The parser parens tokP parses between and The parser does not care about indentation i.e is run in NoIndent mode",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "parens",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:parensOrBlock",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparens\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but when no explicit '(' and ')' are given,\ngroups \u003ccode\u003ep\u003c/code\u003e by block indentation.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "parensOrBlock"
      },
      "index": {
        "description": "Similar to parens but when no explicit and are given groups by block indentation",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "parensOrBlock",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "Or Block",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:parensOrLineFold",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparens\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but when no explicit '(' and ')' are given,\ngroups \u003ccode\u003ep\u003c/code\u003e by a line fold.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st a",
        "fct-type": "function",
        "title": "parensOrLineFold"
      },
      "index": {
        "description": "Similar to parens but when no explicit and are given groups by line fold",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "parensOrLineFold",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a b",
        "package": "IndentParser",
        "partial": "Or Line Fold",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:reserved",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match a reserved word of the language.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e String-\u003e IndentCharParser st ()",
        "fct-type": "function",
        "title": "reserved"
      },
      "index": {
        "description": "Indentation aware parser to match reserved word of the language",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "reserved",
        "normalized": "TokenParser a-\u003eString-\u003eIndentCharParser a()",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eString-\u003eIndentCharParser st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:reservedOp",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match a reserved operator of the language.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e String-\u003e IndentCharParser st ()",
        "fct-type": "function",
        "title": "reservedOp"
      },
      "index": {
        "description": "Indentation aware parser to match reserved operator of the language",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "reservedOp",
        "normalized": "TokenParser a-\u003eString-\u003eIndentCharParser a()",
        "package": "IndentParser",
        "partial": "Op",
        "signature": "TokenParser st-\u003eString-\u003eIndentCharParser st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:semi",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a semicolon and returns ';'.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#semi",
        "fct-type": "function",
        "title": "semi"
      },
      "index": {
        "description": "Matches semicolon and returns",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "semi",
        "normalized": "TokenParser a-\u003eIndentCharParser a String",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eIndentCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:semiOrNewLineSep",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an indentation aware parser \u003ccode\u003ep\u003c/code\u003e as argument \u003ccode\u003esemiOrNewLineSep\ntokP\u003c/code\u003e returns a parser that parses zero or more occurances of \u003ccode\u003ep\u003c/code\u003e\nseperated by either semicolons (';') or newlines. To seperate multiple\noccurance of \u003ccode\u003ep\u003c/code\u003e in the same line use an explicit semicolon (';').\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st [a]",
        "fct-type": "function",
        "title": "semiOrNewLineSep"
      },
      "index": {
        "description": "Given an indentation aware parser as argument semiOrNewLineSep tokP returns parser that parses zero or more occurances of seperated by either semicolons or newlines To seperate multiple occurance of in the same line use an explicit semicolon",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "semiOrNewLineSep",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a[b]",
        "package": "IndentParser",
        "partial": "Or New Line Sep",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:semiOrNewLineSep1",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an indentation aware parser \u003ccode\u003ep\u003c/code\u003e as argument \u003ccode\u003esemiOrNewLineSep1\ntokP\u003c/code\u003e returns a parser that parses one or more occurances of \u003ccode\u003ep\u003c/code\u003e\nseperated by either semicolons (';') or newline. To seperate multiple\noccurance of \u003ccode\u003ep\u003c/code\u003e in the same line use an explicit semicolon (';').\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st [a]",
        "fct-type": "function",
        "title": "semiOrNewLineSep1"
      },
      "index": {
        "description": "Given an indentation aware parser as argument semiOrNewLineSep1 tokP returns parser that parses one or more occurances of seperated by either semicolons or newline To seperate multiple occurance of in the same line use an explicit semicolon",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "semiOrNewLineSep1",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a[b]",
        "package": "IndentParser",
        "partial": "Or New Line Sep",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:semiSep",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an indentation aware parser \u003ccode\u003ep\u003c/code\u003e as argument \u003ccode\u003esemiSep tokP\u003c/code\u003e\n  returns a parser that parses zero or more occurances of \u003ccode\u003ep\u003c/code\u003e\n  seperated by semicolon (';') \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st a -\u003e IndentCharParser st [a]",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#semiSep",
        "fct-type": "function",
        "title": "semiSep"
      },
      "index": {
        "description": "Given an indentation aware parser as argument semiSep tokP returns parser that parses zero or more occurances of seperated by semicolon",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "semiSep",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a[b]",
        "package": "IndentParser",
        "partial": "Sep",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:semiSep1",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an indentation aware parser \u003ccode\u003ep\u003c/code\u003e as argument \u003ccode\u003esemiSep1 tokP\u003c/code\u003e\n  returns a parser that parses one or more occurances of \u003ccode\u003ep\u003c/code\u003e seperated\n  by semicolon (';') \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st-\u003e IndentCharParser st a-\u003e IndentCharParser st [a]",
        "fct-type": "function",
        "title": "semiSep1"
      },
      "index": {
        "description": "Given an indentation aware parser as argument semiSep1 tokP returns parser that parses one or more occurances of seperated by semicolon",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "semiSep1",
        "normalized": "TokenParser a-\u003eIndentCharParser a b-\u003eIndentCharParser a[b]",
        "package": "IndentParser",
        "partial": "Sep",
        "signature": "TokenParser st-\u003eIndentCharParser st a-\u003eIndentCharParser st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:stringLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser to match a string literal (the syntax is\nassumend to be that of Hasekell which matches that of most programming\nlanguage).\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#stringLiteral",
        "fct-type": "function",
        "title": "stringLiteral"
      },
      "index": {
        "description": "Indentation aware parser to match string literal the syntax is assumend to be that of Hasekell which matches that of most programming language",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "stringLiteral",
        "normalized": "TokenParser a-\u003eIndentCharParser a String",
        "package": "IndentParser",
        "partial": "Literal",
        "signature": "TokenParser st-\u003eIndentCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:symbol",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation aware parser that is equvalent to string str.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e String -\u003e IndentCharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#symbol",
        "fct-type": "function",
        "title": "symbol"
      },
      "index": {
        "description": "Indentation aware parser that is equvalent to string str",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "symbol",
        "normalized": "TokenParser a-\u003eString-\u003eIndentCharParser a String",
        "package": "IndentParser",
        "partial": "",
        "signature": "TokenParser st-\u003eString-\u003eIndentCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser-Token.html#v:whiteSpace",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser whiteSpace skips spaces and comments. This does not\ncare about indentation as skipping spaces should be done irrespective\nof the indentation.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "fct-package": "IndentParser",
        "fct-signature": "TokenParser st -\u003e IndentCharParser st ()",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Token.html#whiteSpace",
        "fct-type": "function",
        "title": "whiteSpace"
      },
      "index": {
        "description": "The parser whiteSpace skips spaces and comments This does not care about indentation as skipping spaces should be done irrespective of the indentation",
        "hierarchy": "Text ParserCombinators Parsec IndentParser Token",
        "module": "Text.ParserCombinators.Parsec.IndentParser.Token",
        "name": "whiteSpace",
        "normalized": "TokenParser a-\u003eIndentCharParser a()",
        "package": "IndentParser",
        "partial": "Space",
        "signature": "TokenParser st-\u003eIndentCharParser st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module to construct indentation aware parsers. Many programming\nlanguage have indentation based syntax rules e.g. python and Haskell.\nThis module exports combinators to create such parsers. \n\u003c/p\u003e\u003cp\u003eThe input source can be thought of as a list of tokens. Abstractly\neach token occurs at a line and a column and has a width. The column\nnumber of a token measures is indentation. If t1 and t2 are two tokens\nthen we say that indentation of t1 is more than t2 if the column\nnumber of occurrence of t1 is greater than that of t2.\n\u003c/p\u003e\u003cp\u003eCurrently this module supports two kind of indentation based syntactic\nstructures which we now describe:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eBlock\u003c/dt\u003e\u003cdd\u003e A block of indentation \u003cem\u003ec\u003c/em\u003e is a sequence of tokens with\nindentation at least \u003cem\u003ec\u003c/em\u003e.  Examples for a block is a where clause of\nHaskell with no explicit braces.\n\u003c/dd\u003e\u003cdt\u003eLine fold\u003c/dt\u003e\u003cdd\u003e A line fold starting at line \u003cem\u003el\u003c/em\u003e and indentation \u003cem\u003ec\u003c/em\u003e is a\nsequence of tokens that start at line \u003cem\u003el\u003c/em\u003e and possibly continue to\nsubsequent lines as long as the indentation is greater than \u003cem\u003ec\u003c/em\u003e. Such\na sequence of lines need to be \u003cem\u003efolded\u003c/em\u003e to a single line. An example\nis MIME headers. Line folding based binding separation is used in\nHaskell as well.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe module exports three combinators are \u003ccode\u003e\u003ccode\u003e\u003ca\u003eindentParser\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\nand \u003ccode\u003e\u003ccode\u003e\u003ca\u003elineFold\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  To construct parsers for indentation based grammars\none typically applies the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eindentParser\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  A block can then be\nparsed using the combinator \u003ccode\u003e\u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and a line fold using\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003elineFold\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Generating indentation aware tokenisers could be tricky.\nGiven a language description via the\n\u003ccode\u003eText.ParserCombinators.Parsec.Language.LanguageDef\u003c/code\u003e record use module\n\u003ccode\u003e\u003ccode\u003eText.ParserCombinators.Parsec.IndentParser.Token\u003c/code\u003e\u003c/code\u003e to generate its\ntokeiser (this will apply \u003ccode\u003e\u003ccode\u003e\u003ca\u003eindentParser\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e on all tokenisers and then\nthe user can forget about \u003ccode\u003e\u003ccode\u003e\u003ca\u003eindentParser\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e combinator).\n\u003c/p\u003e\u003cp\u003eWarning:\n\u003c/p\u003e\u003cp\u003eInternally indentations are implemented using Parser states. If one\nwants to use parser states as well then use the \u003ccode\u003e\u003ca\u003egetState\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003esetState\u003c/a\u003e\u003c/code\u003e functions exported by this module instead of those exported\nfrom the parsec library.  Also use the \u003ccode\u003e\u003ca\u003eparseTest\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunParser\u003c/a\u003e\u003c/code\u003e\nfunction exported from this module instead of the one exported from\nParsec.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "module",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser.html",
        "fct-type": "module",
        "title": "IndentParser"
      },
      "index": {
        "description": "module to construct indentation aware parsers Many programming language have indentation based syntax rules e.g python and Haskell This module exports combinators to create such parsers The input source can be thought of as list of tokens Abstractly each token occurs at line and column and has width The column number of token measures is indentation If t1 and t2 are two tokens then we say that indentation of t1 is more than t2 if the column number of occurrence of t1 is greater than that of t2 Currently this module supports two kind of indentation based syntactic structures which we now describe Block block of indentation is sequence of tokens with indentation at least Examples for block is where clause of Haskell with no explicit braces Line fold line fold starting at line and indentation is sequence of tokens that start at line and possibly continue to subsequent lines as long as the indentation is greater than Such sequence of lines need to be folded to single line An example is MIME headers Line folding based binding separation is used in Haskell as well The module exports three combinators are indentParser block and lineFold To construct parsers for indentation based grammars one typically applies the indentParser block can then be parsed using the combinator block and line fold using lineFold Generating indentation aware tokenisers could be tricky Given language description via the Text.ParserCombinators.Parsec.Language.LanguageDef record use module Text.ParserCombinators.Parsec.IndentParser.Token to generate its tokeiser this will apply indentParser on all tokenisers and then the user can forget about indentParser combinator Warning Internally indentations are implemented using Parser states If one wants to use parser states as well then use the getState and setState functions exported by this module instead of those exported from the parsec library Also use the parseTest and runParser function exported from this module instead of the one exported from Parsec",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "IndentParser",
        "normalized": "",
        "package": "IndentParser",
        "partial": "Indent Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#t:IndentCharParser",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "type",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Prim.html#IndentCharParser",
        "fct-type": "type",
        "title": "IndentCharParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "IndentCharParser",
        "normalized": "",
        "package": "IndentParser",
        "partial": "Indent Char Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#t:IndentMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe mode of the indentation parser.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "data",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Prim.html#IndentMode",
        "fct-type": "data",
        "title": "IndentMode"
      },
      "index": {
        "description": "The mode of the indentation parser",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "IndentMode",
        "normalized": "",
        "package": "IndentParser",
        "partial": "Indent Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#t:IndentParser",
      "description": {
        "fct-descr": "\u003cp\u003eAn indentation aware parser.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "type",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Prim.html#IndentParser",
        "fct-type": "type",
        "title": "IndentParser"
      },
      "index": {
        "description": "An indentation aware parser",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "IndentParser",
        "normalized": "",
        "package": "IndentParser",
        "partial": "Indent Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:Block",
      "description": {
        "fct-descr": "\u003cp\u003eIn block mode\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "Block",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Prim.html#IndentMode",
        "fct-type": "function",
        "title": "Block"
      },
      "index": {
        "description": "In block mode",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "Block",
        "normalized": "",
        "package": "IndentParser",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:LineFold",
      "description": {
        "fct-descr": "\u003cp\u003eIn line fold mode\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "LineFold",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Prim.html#IndentMode",
        "fct-type": "function",
        "title": "LineFold"
      },
      "index": {
        "description": "In line fold mode",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "LineFold",
        "normalized": "",
        "package": "IndentParser",
        "partial": "Line Fold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:NoIndent",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore indentation\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "NoIndent",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Prim.html#IndentMode",
        "fct-type": "function",
        "title": "NoIndent"
      },
      "index": {
        "description": "Ignore indentation",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "NoIndent",
        "normalized": "",
        "package": "IndentParser",
        "partial": "No Indent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:betweenOrBlock",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003ebetweenOrBlock open close p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e between \u003ccode\u003eopen\u003c/code\u003e\nand \u003ccode\u003eclose\u003c/code\u003e. If open is matched \u003ccode\u003ep\u003c/code\u003e is parsed in \u003ccode\u003e\u003ca\u003eNoIndent\u003c/a\u003e\u003c/code\u003e mode otherwise\na block \u003ccode\u003ep\u003c/code\u003e is parsed in \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e mode. For eg. the parser for parsing\nhaskell where clause would look like\n\u003c/p\u003e\u003cpre\u003e whereClause = do reserved where; betweenOrBlock bindings\n\u003c/pre\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok st open -\u003e IndentParser tok st close -\u003e IndentParser tok st a -\u003e IndentParser tok st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser.html#betweenOrBlock",
        "fct-type": "function",
        "title": "betweenOrBlock"
      },
      "index": {
        "description": "The parser betweenOrBlock open close parses between open and close If open is matched is parsed in NoIndent mode otherwise block is parsed in Block mode For eg the parser for parsing haskell where clause would look like whereClause do reserved where betweenOrBlock bindings",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "betweenOrBlock",
        "normalized": "IndentParser a b c-\u003eIndentParser a b d-\u003eIndentParser a b e-\u003eIndentParser a b e",
        "package": "IndentParser",
        "partial": "Or Block",
        "signature": "IndentParser tok st open-\u003eIndentParser tok st close-\u003eIndentParser tok st a-\u003eIndentParser tok st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:betweenOrLineFold",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to betweenOrBlock but uses lineFold instead of block.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok st open -\u003e IndentParser tok st close -\u003e IndentParser tok st a -\u003e IndentParser tok st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser.html#betweenOrLineFold",
        "fct-type": "function",
        "title": "betweenOrLineFold"
      },
      "index": {
        "description": "Similar to betweenOrBlock but uses lineFold instead of block",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "betweenOrLineFold",
        "normalized": "IndentParser a b c-\u003eIndentParser a b d-\u003eIndentParser a b e-\u003eIndentParser a b e",
        "package": "IndentParser",
        "partial": "Or Line Fold",
        "signature": "IndentParser tok st open-\u003eIndentParser tok st close-\u003eIndentParser tok st a-\u003eIndentParser tok st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:block",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003e\u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses a \u003cem\u003eblock\u003c/em\u003e of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok st a -\u003e IndentParser tok st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser.html#block",
        "fct-type": "function",
        "title": "block"
      },
      "index": {
        "description": "The parser block parses block of",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "block",
        "normalized": "IndentParser a b c-\u003eIndentParser a b c",
        "package": "IndentParser",
        "partial": "",
        "signature": "IndentParser tok st a-\u003eIndentParser tok st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:getState",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current user state.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok st st",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Prim.html#getState",
        "fct-type": "function",
        "title": "getState"
      },
      "index": {
        "description": "Gets the current user state",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "getState",
        "normalized": "",
        "package": "IndentParser",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:indentParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe combinator indentParser makes its input parser indentation\n  aware. Usually one would want to make all the tokenisers indentation\n  aware. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok st a -\u003e IndentParser tok st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser.html#indentParser",
        "fct-type": "function",
        "title": "indentParser"
      },
      "index": {
        "description": "The combinator indentParser makes its input parser indentation aware Usually one would want to make all the tokenisers indentation aware",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "indentParser",
        "normalized": "IndentParser a b c-\u003eIndentParser a b c",
        "package": "IndentParser",
        "partial": "Parser",
        "signature": "IndentParser tok st a-\u003eIndentParser tok st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:lineFold",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003elineFold p\u003c/code\u003e parses a folded line of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok st a -\u003e IndentParser tok st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser.html#lineFold",
        "fct-type": "function",
        "title": "lineFold"
      },
      "index": {
        "description": "The parser lineFold parses folded line of",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "lineFold",
        "normalized": "IndentParser a b c-\u003eIndentParser a b c",
        "package": "IndentParser",
        "partial": "Fold",
        "signature": "IndentParser tok st a-\u003eIndentParser tok st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:noIndent",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003e\u003ccode\u003e\u003ca\u003enoIndent\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e runs \u003ccode\u003ep\u003c/code\u003e ignoring any indentation based\nstructure. This can be used to parse for example an explicitly braced\nwhere clause in Haskell.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok st a -\u003e IndentParser tok st a",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser.html#noIndent",
        "fct-type": "function",
        "title": "noIndent"
      },
      "index": {
        "description": "The parser noIndent runs ignoring any indentation based structure This can be used to parse for example an explicitly braced where clause in Haskell",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "noIndent",
        "normalized": "IndentParser a b c-\u003eIndentParser a b c",
        "package": "IndentParser",
        "partial": "Indent",
        "signature": "IndentParser tok st a-\u003eIndentParser tok st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given parser on a given input stream and returns either the\nresult or parse error.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok () a-\u003e SourceName-\u003e [tok]-\u003e Either ParseError a",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Runs the given parser on given input stream and returns either the result or parse error",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "parse",
        "normalized": "IndentParser a()b-\u003eSourceName-\u003e[a]-\u003eEither ParseError b",
        "package": "IndentParser",
        "partial": "",
        "signature": "IndentParser tok()a-\u003eSourceName-\u003e[tok]-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:parseFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but use the contents of \u003ccode\u003eSourceName\u003c/code\u003e as the input\ntokens.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentCharParser () a-\u003e SourceName-\u003e IO (Either ParseError a)",
        "fct-type": "function",
        "title": "parseFromFile"
      },
      "index": {
        "description": "Like parse but use the contents of SourceName as the input tokens",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "parseFromFile",
        "normalized": "IndentCharParser()a-\u003eSourceName-\u003eIO(Either ParseError a)",
        "package": "IndentParser",
        "partial": "From File",
        "signature": "IndentCharParser()a-\u003eSourceName-\u003eIO(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:parseTest",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the input parser on the given stream and prints the result.\nUseful for testing parsers.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok () a-\u003e [tok]-\u003e IO ()",
        "fct-type": "function",
        "title": "parseTest"
      },
      "index": {
        "description": "Runs the input parser on the given stream and prints the result Useful for testing parsers",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "parseTest",
        "normalized": "IndentParser a()b-\u003e[a]-\u003eIO()",
        "package": "IndentParser",
        "partial": "Test",
        "signature": "IndentParser tok()a-\u003e[tok]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:runParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe most generic way to run an IndentParser. Use \u003ccode\u003eparseTest\u003c/code\u003e for\ntesting your parser instead.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "IndentParser tok st a-\u003e st-\u003e IndentMode-\u003e SourceName-\u003e [tok]-\u003e Either ParseError a",
        "fct-type": "function",
        "title": "runParser"
      },
      "index": {
        "description": "The most generic way to run an IndentParser Use parseTest for testing your parser instead",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "runParser",
        "normalized": "IndentParser a b c-\u003eb-\u003eIndentMode-\u003eSourceName-\u003e[a]-\u003eEither ParseError c",
        "package": "IndentParser",
        "partial": "Parser",
        "signature": "IndentParser tok st a-\u003est-\u003eIndentMode-\u003eSourceName-\u003e[tok]-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IndentParser/docs/Text-ParserCombinators-Parsec-IndentParser.html#v:setState",
      "description": {
        "fct-descr": "\u003cp\u003eSets the user state.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.IndentParser",
        "fct-package": "IndentParser",
        "fct-signature": "st -\u003e IndentParser tok st ()",
        "fct-source": "src/Text-ParserCombinators-Parsec-IndentParser-Prim.html#setState",
        "fct-type": "function",
        "title": "setState"
      },
      "index": {
        "description": "Sets the user state",
        "hierarchy": "Text ParserCombinators Parsec IndentParser",
        "module": "Text.ParserCombinators.Parsec.IndentParser",
        "name": "setState",
        "normalized": "a-\u003eIndentParser b a()",
        "package": "IndentParser",
        "partial": "State",
        "signature": "st-\u003eIndentParser tok st()"
      }
    }
  }
]