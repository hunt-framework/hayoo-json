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
        "word": "indentparser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule containing combinators to parse some indentation based\nstructures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "Combinator",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Module containing combinators to parse some indentation based structures",
          "hierarchy": "Text Parsec IndentParsec Combinator",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "Combinator",
          "package": "indentparser",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003eText.Parsec.Combinator.between\u003c/code\u003e\u003c/code\u003e. However, the\n\u003ccode\u003e\u003ccode\u003eText.Parsec.Combinator.between\u003c/code\u003e\u003c/code\u003e will not work as expected because\nit will not turn off the indentation check of its input parser.\n\u003c/p\u003e\u003cp\u003eSo something like\n\u003c/p\u003e\u003cpre\u003e whereClause = between lbrack rbrack bindings\n lbrack = do char '{'; spaces\n rbrack = do char '}'; spaces\n\u003c/pre\u003e\u003cp\u003ewill not be able to parse say\n\u003c/p\u003e\u003cpre\u003e    where {\n a = 10\n }\n\u003c/pre\u003e\u003cp\u003eUse the version exported by this module instead.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "between",
          "package": "indentparser",
          "signature": "GenIndentParsecT i s u m open-\u003e GenIndentParsecT i s u m close-\u003e GenIndentParsecT i s u m a-\u003e GenIndentParsecT i s u m a",
          "type": "function"
        },
        "index": {
          "description": "Similar to Text.Parsec.Combinator.between However the Text.Parsec.Combinator.between will not work as expected because it will not turn off the indentation check of its input parser So something like whereClause between lbrack rbrack bindings lbrack do char spaces rbrack do char spaces will not be able to parse say where Use the version exported by this module instead",
          "hierarchy": "Text Parsec IndentParsec Combinator",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "between",
          "normalized": "GenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d f-\u003eGenIndentParsecT a b c d g-\u003eGenIndentParsecT a b c d g",
          "package": "indentparser",
          "signature": "GenIndentParsecT i s u m open-\u003eGenIndentParsecT i s u m close-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Combinator.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebetween\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but if the opening and closing delimiters are\nnot given, uses a block to delimit the nesting. For example, a haskell\nwhere clause will look like\n\u003c/p\u003e\u003cpre\u003e whereClause = betweenBlock lbrack rbrack bindings\n lbrack = do char '{'; spaces\n rbrack = do char '}'; spaces\n\u003c/pre\u003e",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "betweenBlock",
          "package": "indentparser",
          "signature": "IndentParsecT s u m open-\u003e IndentParsecT s u m close-\u003e IndentParsecT s u m a-\u003e IndentParsecT s u m a",
          "type": "function"
        },
        "index": {
          "description": "Similar to between but if the opening and closing delimiters are not given uses block to delimit the nesting For example haskell where clause will look like whereClause betweenBlock lbrack rbrack bindings lbrack do char spaces rbrack do char spaces",
          "hierarchy": "Text Parsec IndentParsec Combinator",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "betweenBlock",
          "normalized": "IndentParsecT a b c d-\u003eIndentParsecT a b c e-\u003eIndentParsecT a b c f-\u003eIndentParsecT a b c f",
          "package": "indentparser",
          "partial": "Block",
          "signature": "IndentParsecT s u m open-\u003eIndentParsecT s u m close-\u003eIndentParsecT s u m a-\u003eIndentParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Combinator.html#v:betweenBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a given parser inside a block.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "blockOf",
          "package": "indentparser",
          "signature": "IndentParsecT s u m a -\u003e IndentParsecT s u m a",
          "source": "src/Text-Parsec-IndentParsec-Combinator.html#blockOf",
          "type": "function"
        },
        "index": {
          "description": "run given parser inside block",
          "hierarchy": "Text Parsec IndentParsec Combinator",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "blockOf",
          "normalized": "IndentParsecT a b c d-\u003eIndentParsecT a b c d",
          "package": "indentparser",
          "partial": "Of",
          "signature": "IndentParsecT s u m a-\u003eIndentParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Combinator.html#v:blockOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a given parser inside a line fold.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "foldedLinesOf",
          "package": "indentparser",
          "signature": "IndentParsecT s u m a -\u003e IndentParsecT s u m a",
          "source": "src/Text-Parsec-IndentParsec-Combinator.html#foldedLinesOf",
          "type": "function"
        },
        "index": {
          "description": "run given parser inside line fold",
          "hierarchy": "Text Parsec IndentParsec Combinator",
          "module": "Text.Parsec.IndentParsec.Combinator",
          "name": "foldedLinesOf",
          "normalized": "IndentParsecT a b c d-\u003eIndentParsecT a b c d",
          "package": "indentparser",
          "partial": "Lines Of",
          "signature": "IndentParsecT s u m a-\u003eIndentParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Combinator.html#v:foldedLinesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn general, an indentation structure is a predicate on the position\nwhich tells us whether the token is acceptable or not. Besides the\npredicate to check if a token at a given position is acceptable, we\nalso need to specify how indentations can be nested. This is captured\nby the type class \u003ccode\u003e\u003ca\u003eIndentation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Prim",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "In general an indentation structure is predicate on the position which tells us whether the token is acceptable or not Besides the predicate to check if token at given position is acceptable we also need to specify how indentations can be nested This is captured by the type class Indentation",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Prim",
          "package": "indentparser",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "GenIndentParsec",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#GenIndentParsec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "GenIndentParsec",
          "package": "indentparser",
          "partial": "Gen Indent Parsec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#t:GenIndentParsec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe indentation parser.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "GenIndentParsecT",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#GenIndentParsecT",
          "type": "type"
        },
        "index": {
          "description": "The indentation parser",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "GenIndentParsecT",
          "package": "indentparser",
          "partial": "Gen Indent Parsec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#t:GenIndentParsecT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType to capture Haskell like indentation. Besides \u003ccode\u003e\u003ca\u003ealways\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enever\u003c/a\u003e\u003c/code\u003e\nthe important indentations are blocks and line folds. A block starting\nat position \u003ccode\u003ep\u003c/code\u003e consists of all tokens that have indentation at least\nas much as \u003ccode\u003ep\u003c/code\u003e. A folded like starting at position \u003ccode\u003ep\u003c/code\u003e is\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "HaskellLike",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#HaskellLike",
          "type": "data"
        },
        "index": {
          "description": "Type to capture Haskell like indentation Besides always and never the important indentations are blocks and line folds block starting at position consists of all tokens that have indentation at least as much as folded like starting at position is",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "HaskellLike",
          "package": "indentparser",
          "partial": "Haskell Like",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#t:HaskellLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "IndentParsec",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#IndentParsec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "IndentParsec",
          "package": "indentparser",
          "partial": "Indent Parsec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#t:IndentParsec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "IndentParsecT",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#IndentParsecT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "IndentParsecT",
          "package": "indentparser",
          "partial": "Indent Parsec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#t:IndentParsecT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inner monad for indent parsers.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "IndentT",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#IndentT",
          "type": "type"
        },
        "index": {
          "description": "The inner monad for indent parsers",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "IndentT",
          "package": "indentparser",
          "partial": "Indent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#t:IndentT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class that captures generic indentation rule. It should follow\nthe condition that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eacceptable\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enever\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Indentation",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#Indentation",
          "type": "class"
        },
        "index": {
          "description": "Type class that captures generic indentation rule It should follow the condition that acceptable never const False",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Indentation",
          "package": "indentparser",
          "partial": "Indentation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#t:Indentation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Block",
          "package": "indentparser",
          "signature": "Block SourcePos",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#HaskellLike",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Block",
          "package": "indentparser",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "LineFold",
          "package": "indentparser",
          "signature": "LineFold SourcePos",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#HaskellLike",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "LineFold",
          "package": "indentparser",
          "partial": "Line Fold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:LineFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Neglect",
          "package": "indentparser",
          "signature": "Neglect",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#HaskellLike",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Neglect",
          "package": "indentparser",
          "partial": "Neglect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:Neglect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Never",
          "package": "indentparser",
          "signature": "Never",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#HaskellLike",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "Never",
          "package": "indentparser",
          "partial": "Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:Never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "acceptable",
          "package": "indentparser",
          "signature": "acceptable",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#acceptable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "acceptable",
          "package": "indentparser",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:acceptable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "always",
          "package": "indentparser",
          "signature": "always",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#always",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "always",
          "package": "indentparser",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a given parser neglecting indentation.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "neglectIndent",
          "package": "indentparser",
          "signature": "GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m a",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#neglectIndent",
          "type": "function"
        },
        "index": {
          "description": "run given parser neglecting indentation",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "neglectIndent",
          "normalized": "GenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d e",
          "package": "indentparser",
          "partial": "Indent",
          "signature": "GenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:neglectIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny nested indentation starts at a position. Given an indentor\nfunction, i.e. a function to compute the indentation state from the\ncurrent position, and a parser to parse the body of the indentation,\nruns the parser inside the nested indentation context given by the\nindentor.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "nest",
          "package": "indentparser",
          "signature": "(SourcePos -\u003e i)-\u003e GenIndentParsecT i s u m body-\u003e GenIndentParsecT i s u m body",
          "type": "function"
        },
        "index": {
          "description": "Any nested indentation starts at position Given an indentor function i.e function to compute the indentation state from the current position and parser to parse the body of the indentation runs the parser inside the nested indentation context given by the indentor",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "nest",
          "normalized": "(SourcePos-\u003ea)-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d e",
          "package": "indentparser",
          "signature": "(SourcePos-\u003ei)-\u003eGenIndentParsecT i s u m body-\u003eGenIndentParsecT i s u m body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "nestableIn",
          "package": "indentparser",
          "signature": "nestableIn",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#nestableIn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "nestableIn",
          "package": "indentparser",
          "partial": "In",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:nestableIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "never",
          "package": "indentparser",
          "signature": "never",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#never",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "never",
          "package": "indentparser",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunGIPT'\u003c/a\u003e\u003c/code\u003e always\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "runGIPT",
          "package": "indentparser",
          "signature": "GenIndentParsecT i s u m a-\u003e u-\u003e SourceName-\u003e s-\u003e m (Either ParseError a)",
          "type": "function"
        },
        "index": {
          "description": "Same as runGIPT always",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "runGIPT",
          "normalized": "GenIndentParsecT a b c d e-\u003ec-\u003eSourceName-\u003eb-\u003ed(Either ParseError e)",
          "package": "indentparser",
          "partial": "GIPT",
          "signature": "GenIndentParsecT i s u m a-\u003eu-\u003eSourceName-\u003es-\u003em(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:runGIPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a given indentation aware parser with a starting indentation.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "runGIPT'",
          "package": "indentparser",
          "signature": "i-\u003e GenIndentParsecT i s u m a-\u003e u-\u003e SourceName-\u003e s-\u003e m (Either ParseError a)",
          "type": "function"
        },
        "index": {
          "description": "Run given indentation aware parser with starting indentation",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "runGIPT'",
          "normalized": "a-\u003eGenIndentParsecT a b c d e-\u003ec-\u003eSourceName-\u003eb-\u003ed(Either ParseError e)",
          "package": "indentparser",
          "partial": "GIPT'",
          "signature": "i-\u003eGenIndentParsecT i s u m a-\u003eu-\u003eSourceName-\u003es-\u003em(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:runGIPT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild indentation awareness into the parser\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "tokeniser",
          "package": "indentparser",
          "signature": "GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m a",
          "source": "src/Text-Parsec-IndentParsec-Prim.html#tokeniser",
          "type": "function"
        },
        "index": {
          "description": "Build indentation awareness into the parser",
          "hierarchy": "Text Parsec IndentParsec Prim",
          "module": "Text.Parsec.IndentParsec.Prim",
          "name": "tokeniser",
          "normalized": "GenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d e",
          "package": "indentparser",
          "signature": "GenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Prim.html#v:tokeniser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to create indentation aware tokenisers. Despite the simplicity\nof parser combinators, getting tokenisers for common language\ncontructs right is tricky. The parsec way of handling this involves\nthe following steps.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Define the description of the language via the\n    \u003ccode\u003e\u003ccode\u003eText.Parsec.Language.LanguageDef\u003c/code\u003e\u003c/code\u003e record.\n\u003c/li\u003e\u003cli\u003e Apply the \u003ccode\u003eText.Parsec.Token.makeTokenParser\u003c/code\u003e combinator get hold\n    of \u003ccode\u003e\u003ccode\u003eText.Parsec.Token.TokenParser\u003c/code\u003e\u003c/code\u003e. The actual tokenisers are\n    the fields of this record.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module provides a similar interfaces for generating indentation\naware tokenisers. There are few specific things that an indentation\naware tokeniser should be careful aboute\n\u003c/p\u003e\u003col\u003e\u003cli\u003e All tokenisers should be indentation aware.\n\u003c/li\u003e\u003cli\u003e Whitespaces and comments should be skipped irrespective on which\n      indentation mode one is in\n\u003c/li\u003e\u003cli\u003e The tokenisers should themselves be lexeme parsers and should skip trailing\n      whitespace.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eGetting all this working can often be tricky.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "Token",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Token.html",
          "type": "module"
        },
        "index": {
          "description": "Module to create indentation aware tokenisers Despite the simplicity of parser combinators getting tokenisers for common language contructs right is tricky The parsec way of handling this involves the following steps Define the description of the language via the Text.Parsec.Language.LanguageDef record Apply the Text.Parsec.Token.makeTokenParser combinator get hold of Text.Parsec.Token.TokenParser The actual tokenisers are the fields of this record This module provides similar interfaces for generating indentation aware tokenisers There are few specific things that an indentation aware tokeniser should be careful aboute All tokenisers should be indentation aware Whitespaces and comments should be skipped irrespective on which indentation mode one is in The tokenisers should themselves be lexeme parsers and should skip trailing whitespace Getting all this working can often be tricky",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "Token",
          "package": "indentparser",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "GenIndentTokenParser",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Token.html#GenIndentTokenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "GenIndentTokenParser",
          "package": "indentparser",
          "partial": "Gen Indent Token Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#t:GenIndentTokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "IndentTokenParser",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec-Token.html#IndentTokenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "IndentTokenParser",
          "package": "indentparser",
          "partial": "Indent Token Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#t:IndentTokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the input parser \u003ccode\u003ep\u003c/code\u003e within a pair of angular brackets, i.e. \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e\nand \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "angles",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m a",
          "source": "src/Text-Parsec-IndentParsec-Token.html#angles",
          "type": "function"
        },
        "index": {
          "description": "Match the input parser within pair of angular brackets i.e and",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "angles",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d e",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:angles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eangles\u003c/a\u003e\u003c/code\u003e but if no explicit anglular brackets are given,\nmatches p inside and indented block.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "anglesBlock",
          "package": "indentparser",
          "signature": "GenIndentTokenParser HaskellLike s u m -\u003e GenIndentParsecT HaskellLike s u m a -\u003e GenIndentParsecT HaskellLike s u m a",
          "source": "src/Text-Parsec-IndentParsec-Token.html#anglesBlock",
          "type": "function"
        },
        "index": {
          "description": "Same as angles but if no explicit anglular brackets are given matches inside and indented block",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "anglesBlock",
          "normalized": "GenIndentTokenParser HaskellLike a b c-\u003eGenIndentParsecT HaskellLike a b c d-\u003eGenIndentParsecT HaskellLike a b c d",
          "package": "indentparser",
          "partial": "Block",
          "signature": "GenIndentTokenParser HaskellLike s u m-\u003eGenIndentParsecT HaskellLike s u m a-\u003eGenIndentParsecT HaskellLike s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:anglesBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the input parser \u003ccode\u003ep\u003c/code\u003e within a pair of braces\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "braces",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m a",
          "source": "src/Text-Parsec-IndentParsec-Token.html#braces",
          "type": "function"
        },
        "index": {
          "description": "Match the input parser within pair of braces",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "braces",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d e",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ebraces\u003c/a\u003e\u003c/code\u003e but if no explicit braces are given, matches \u003ccode\u003ep\u003c/code\u003e\ninside an indented block.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "bracesBlock",
          "package": "indentparser",
          "signature": "GenIndentTokenParser HaskellLike s u m -\u003e GenIndentParsecT HaskellLike s u m a -\u003e GenIndentParsecT HaskellLike s u m a",
          "source": "src/Text-Parsec-IndentParsec-Token.html#bracesBlock",
          "type": "function"
        },
        "index": {
          "description": "Same as braces but if no explicit braces are given matches inside an indented block",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "bracesBlock",
          "normalized": "GenIndentTokenParser HaskellLike a b c-\u003eGenIndentParsecT HaskellLike a b c d-\u003eGenIndentParsecT HaskellLike a b c d",
          "package": "indentparser",
          "partial": "Block",
          "signature": "GenIndentTokenParser HaskellLike s u m-\u003eGenIndentParsecT HaskellLike s u m a-\u003eGenIndentParsecT HaskellLike s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:bracesBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch p within a angular brackets i.e. '[' and ']'.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "brackets",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m a",
          "source": "src/Text-Parsec-IndentParsec-Token.html#brackets",
          "type": "function"
        },
        "index": {
          "description": "Match within angular brackets i.e and",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "brackets",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d e",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ebrackets\u003c/a\u003e\u003c/code\u003e but if no explicit brackets are given, matches p\ninside and indented block.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "bracketsBlock",
          "package": "indentparser",
          "signature": "GenIndentTokenParser HaskellLike s u m -\u003e GenIndentParsecT HaskellLike s u m a -\u003e GenIndentParsecT HaskellLike s u m a",
          "source": "src/Text-Parsec-IndentParsec-Token.html#bracketsBlock",
          "type": "function"
        },
        "index": {
          "description": "Same as brackets but if no explicit brackets are given matches inside and indented block",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "bracketsBlock",
          "normalized": "GenIndentTokenParser HaskellLike a b c-\u003eGenIndentParsecT HaskellLike a b c d-\u003eGenIndentParsecT HaskellLike a b c d",
          "package": "indentparser",
          "partial": "Block",
          "signature": "GenIndentTokenParser HaskellLike s u m-\u003eGenIndentParsecT HaskellLike s u m a-\u003eGenIndentParsecT HaskellLike s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:bracketsBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware parser to match a character literal (the syntax\n is assumend to be that of Hasekell which matches that of most\n programming language\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "charLiteral",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m Char",
          "source": "src/Text-Parsec-IndentParsec-Token.html#charLiteral",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware parser to match character literal the syntax is assumend to be that of Hasekell which matches that of most programming language",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "charLiteral",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d Char",
          "package": "indentparser",
          "partial": "Literal",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:charLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a colon and returns \u003ca\u003e:\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "colon",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m String",
          "source": "src/Text-Parsec-IndentParsec-Token.html#colon",
          "type": "function"
        },
        "index": {
          "description": "Matches colon and returns",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "colon",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d String",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a comma and returns \u003ca\u003e,\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "comma",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m String",
          "source": "src/Text-Parsec-IndentParsec-Token.html#comma",
          "type": "function"
        },
        "index": {
          "description": "Matches comma and returns",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "comma",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d String",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse zero or more \u003ccode\u003ep\u003c/code\u003e seperated by by a comma.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "commaSep",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m [a]",
          "source": "src/Text-Parsec-IndentParsec-Token.html#commaSep",
          "type": "function"
        },
        "index": {
          "description": "Parse zero or more seperated by by comma",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "commaSep",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d[e]",
          "package": "indentparser",
          "partial": "Sep",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:commaSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more \u003ccode\u003ep\u003c/code\u003e seperated by a comma.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "commaSep1",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m [a]",
          "source": "src/Text-Parsec-IndentParsec-Token.html#commaSep1",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more seperated by comma",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "commaSep1",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d[e]",
          "package": "indentparser",
          "partial": "Sep",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:commaSep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse zero or more \u003ccode\u003ep\u003c/code\u003e seperated by comma or new line. Long lines are\ncontinued using line folding.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "commaSepOrFoldedLines",
          "package": "indentparser",
          "signature": "GenIndentTokenParser HaskellLike s u m -\u003e GenIndentParsecT HaskellLike s u m a -\u003e GenIndentParsecT HaskellLike s u m [a]",
          "source": "src/Text-Parsec-IndentParsec-Token.html#commaSepOrFoldedLines",
          "type": "function"
        },
        "index": {
          "description": "Parse zero or more seperated by comma or new line Long lines are continued using line folding",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "commaSepOrFoldedLines",
          "normalized": "GenIndentTokenParser HaskellLike a b c-\u003eGenIndentParsecT HaskellLike a b c d-\u003eGenIndentParsecT HaskellLike a b c[d]",
          "package": "indentparser",
          "partial": "Sep Or Folded Lines",
          "signature": "GenIndentTokenParser HaskellLike s u m-\u003eGenIndentParsecT HaskellLike s u m a-\u003eGenIndentParsecT HaskellLike s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:commaSepOrFoldedLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more \u003ccode\u003ep\u003c/code\u003e seperated by comma or new line. Long lines are\ncontinued using line folding.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "commaSepOrFoldedLines1",
          "package": "indentparser",
          "signature": "GenIndentTokenParser HaskellLike s u m -\u003e GenIndentParsecT HaskellLike s u m a -\u003e GenIndentParsecT HaskellLike s u m [a]",
          "source": "src/Text-Parsec-IndentParsec-Token.html#commaSepOrFoldedLines1",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more seperated by comma or new line Long lines are continued using line folding",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "commaSepOrFoldedLines1",
          "normalized": "GenIndentTokenParser HaskellLike a b c-\u003eGenIndentParsecT HaskellLike a b c d-\u003eGenIndentParsecT HaskellLike a b c[d]",
          "package": "indentparser",
          "partial": "Sep Or Folded Lines",
          "signature": "GenIndentTokenParser HaskellLike s u m-\u003eGenIndentParsecT HaskellLike s u m a-\u003eGenIndentParsecT HaskellLike s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:commaSepOrFoldedLines1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware tokensier to match an integer in decimal.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "decimal",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m Integer",
          "source": "src/Text-Parsec-IndentParsec-Token.html#decimal",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware tokensier to match an integer in decimal",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "decimal",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d Integer",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a dot and returns \u003ca\u003e.\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "dot",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m String",
          "source": "src/Text-Parsec-IndentParsec-Token.html#dot",
          "type": "function"
        },
        "index": {
          "description": "Matches dot and returns",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "dot",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d String",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware tokeniser to match a floating point number.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "float",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m Double",
          "source": "src/Text-Parsec-IndentParsec-Token.html#float",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware tokeniser to match floating point number",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "float",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d Double",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware tokeniser to match an integer in hexadecimal.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "hexadecimal",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m Integer",
          "source": "src/Text-Parsec-IndentParsec-Token.html#hexadecimal",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware tokeniser to match an integer in hexadecimal",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "hexadecimal",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d Integer",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:hexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware tokeniser to match a valid identifier.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "identifier",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m String",
          "source": "src/Text-Parsec-IndentParsec-Token.html#identifier",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware tokeniser to match valid identifier",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "identifier",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d String",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware parser to match an integer.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "integer",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m Integer",
          "source": "src/Text-Parsec-IndentParsec-Token.html#integer",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware parser to match an integer",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "integer",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d Integer",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a lexeme tokeniser. The resultant tokeniser indentation\n aware and skips trailing white spaces/comments.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "lexeme",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m a",
          "source": "src/Text-Parsec-IndentParsec-Token.html#lexeme",
          "type": "function"
        },
        "index": {
          "description": "Creates lexeme tokeniser The resultant tokeniser indentation aware and skips trailing white spaces comments",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "lexeme",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d e",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:lexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware parser to match a natural number.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "natural",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m Integer",
          "source": "src/Text-Parsec-IndentParsec-Token.html#natural",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware parser to match natural number",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "natural",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d Integer",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware tokensier to match either a natural number or\n Floating point number.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "naturalOrFloat",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m (Either Integer Double)",
          "source": "src/Text-Parsec-IndentParsec-Token.html#naturalOrFloat",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware tokensier to match either natural number or Floating point number",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "naturalOrFloat",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d(Either Integer Double)",
          "package": "indentparser",
          "partial": "Or Float",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m(Either Integer Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:naturalOrFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware tokeniser to match an integer in ocatal.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "octal",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m Integer",
          "source": "src/Text-Parsec-IndentParsec-Token.html#octal",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware tokeniser to match an integer in ocatal",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "octal",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d Integer",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:octal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware tokeniser matches an operator.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "operator",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m String",
          "source": "src/Text-Parsec-IndentParsec-Token.html#operator",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware tokeniser matches an operator",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "operator",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d String",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the input parser \u003ccode\u003ep\u003c/code\u003e within a pair of paranthesis.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "parens",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m a",
          "source": "src/Text-Parsec-IndentParsec-Token.html#parens",
          "type": "function"
        },
        "index": {
          "description": "Match the input parser within pair of paranthesis",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "parens",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d e",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eparens\u003c/a\u003e\u003c/code\u003e but if no explicit paranthesis are given, matches \u003ccode\u003ep\u003c/code\u003e\ninside an indented block.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "parensBlock",
          "package": "indentparser",
          "signature": "GenIndentTokenParser HaskellLike s u m -\u003e GenIndentParsecT HaskellLike s u m a -\u003e GenIndentParsecT HaskellLike s u m a",
          "source": "src/Text-Parsec-IndentParsec-Token.html#parensBlock",
          "type": "function"
        },
        "index": {
          "description": "Same as parens but if no explicit paranthesis are given matches inside an indented block",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "parensBlock",
          "normalized": "GenIndentTokenParser HaskellLike a b c-\u003eGenIndentParsecT HaskellLike a b c d-\u003eGenIndentParsecT HaskellLike a b c d",
          "package": "indentparser",
          "partial": "Block",
          "signature": "GenIndentTokenParser HaskellLike s u m-\u003eGenIndentParsecT HaskellLike s u m a-\u003eGenIndentParsecT HaskellLike s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:parensBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware tokeniser to match a reserved word.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "reserved",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003e String-\u003e GenIndentParsecT i s u m ()",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware tokeniser to match reserved word",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "reserved",
          "normalized": "GenIndentTokenParser a b c d-\u003eString-\u003eGenIndentParsecT a b c d()",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eString-\u003eGenIndentParsecT i s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:reserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware parser to match a reserved operator of the\n language.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "reservedOp",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003e String-\u003e GenIndentParsecT i s u m ()",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware parser to match reserved operator of the language",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "reservedOp",
          "normalized": "GenIndentTokenParser a b c d-\u003eString-\u003eGenIndentParsecT a b c d()",
          "package": "indentparser",
          "partial": "Op",
          "signature": "GenIndentTokenParser i s u m-\u003eString-\u003eGenIndentParsecT i s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:reservedOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a semicolon and returns ';'.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semi",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m String",
          "source": "src/Text-Parsec-IndentParsec-Token.html#semi",
          "type": "function"
        },
        "index": {
          "description": "Matches semicolon and returns",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semi",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d String",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse zero or more \u003ccode\u003ep\u003c/code\u003e seperated by by a semicolon\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semiSep",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m [a]",
          "source": "src/Text-Parsec-IndentParsec-Token.html#semiSep",
          "type": "function"
        },
        "index": {
          "description": "Parse zero or more seperated by by semicolon",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semiSep",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d[e]",
          "package": "indentparser",
          "partial": "Sep",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:semiSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more \u003ccode\u003ep\u003c/code\u003e seperated by a semicolon\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semiSep1",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m a -\u003e GenIndentParsecT i s u m [a]",
          "source": "src/Text-Parsec-IndentParsec-Token.html#semiSep1",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more seperated by semicolon",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semiSep1",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d e-\u003eGenIndentParsecT a b c d[e]",
          "package": "indentparser",
          "partial": "Sep",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m a-\u003eGenIndentParsecT i s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:semiSep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse zero or more \u003ccode\u003ep\u003c/code\u003e seperated by semicolon or new line. Long lines\nare continued using line folding.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semiSepOrFoldedLines",
          "package": "indentparser",
          "signature": "GenIndentTokenParser HaskellLike s u m -\u003e GenIndentParsecT HaskellLike s u m a -\u003e GenIndentParsecT HaskellLike s u m [a]",
          "source": "src/Text-Parsec-IndentParsec-Token.html#semiSepOrFoldedLines",
          "type": "function"
        },
        "index": {
          "description": "Parse zero or more seperated by semicolon or new line Long lines are continued using line folding",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semiSepOrFoldedLines",
          "normalized": "GenIndentTokenParser HaskellLike a b c-\u003eGenIndentParsecT HaskellLike a b c d-\u003eGenIndentParsecT HaskellLike a b c[d]",
          "package": "indentparser",
          "partial": "Sep Or Folded Lines",
          "signature": "GenIndentTokenParser HaskellLike s u m-\u003eGenIndentParsecT HaskellLike s u m a-\u003eGenIndentParsecT HaskellLike s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:semiSepOrFoldedLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more \u003ccode\u003ep\u003c/code\u003e seperated by semicolon or new line. Long lines\nare continued using line folding.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semiSepOrFoldedLines1",
          "package": "indentparser",
          "signature": "GenIndentTokenParser HaskellLike s u m -\u003e GenIndentParsecT HaskellLike s u m a -\u003e GenIndentParsecT HaskellLike s u m [a]",
          "source": "src/Text-Parsec-IndentParsec-Token.html#semiSepOrFoldedLines1",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more seperated by semicolon or new line Long lines are continued using line folding",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "semiSepOrFoldedLines1",
          "normalized": "GenIndentTokenParser HaskellLike a b c-\u003eGenIndentParsecT HaskellLike a b c d-\u003eGenIndentParsecT HaskellLike a b c[d]",
          "package": "indentparser",
          "partial": "Sep Or Folded Lines",
          "signature": "GenIndentTokenParser HaskellLike s u m-\u003eGenIndentParsecT HaskellLike s u m a-\u003eGenIndentParsecT HaskellLike s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:semiSepOrFoldedLines1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware parser to match a string literal (the syntax is\n assumend to be that of Hasekell which matches that of most\n programming language).\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "stringLiteral",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m String",
          "source": "src/Text-Parsec-IndentParsec-Token.html#stringLiteral",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware parser to match string literal the syntax is assumend to be that of Hasekell which matches that of most programming language",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "stringLiteral",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d String",
          "package": "indentparser",
          "partial": "Literal",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:stringLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation aware tokeniser that is equvalent to \u003ccode\u003e\u003ccode\u003estring\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "symbol",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e String -\u003e GenIndentParsecT i s u m String",
          "source": "src/Text-Parsec-IndentParsec-Token.html#symbol",
          "type": "function"
        },
        "index": {
          "description": "Indentation aware tokeniser that is equvalent to string",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "symbol",
          "normalized": "GenIndentTokenParser a b c d-\u003eString-\u003eGenIndentParsecT a b c d String",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m-\u003eString-\u003eGenIndentParsecT i s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser whiteSpace skips spaces and comments. This does not\n care about indentation as skipping spaces should be done\n irrespective of the indentation\n\u003c/p\u003e",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "whiteSpace",
          "package": "indentparser",
          "signature": "GenIndentTokenParser i s u m -\u003e GenIndentParsecT i s u m ()",
          "source": "src/Text-Parsec-IndentParsec-Token.html#whiteSpace",
          "type": "function"
        },
        "index": {
          "description": "The parser whiteSpace skips spaces and comments This does not care about indentation as skipping spaces should be done irrespective of the indentation",
          "hierarchy": "Text Parsec IndentParsec Token",
          "module": "Text.Parsec.IndentParsec.Token",
          "name": "whiteSpace",
          "normalized": "GenIndentTokenParser a b c d-\u003eGenIndentParsecT a b c d()",
          "package": "indentparser",
          "partial": "Space",
          "signature": "GenIndentTokenParser i s u m-\u003eGenIndentParsecT i s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec-Token.html#v:whiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module to construct indentation aware parsers. Many programming\nlanguage have indentation based syntax rules e.g. python and Haskell.\nThis module exports combinators to create such parsers. This is a\nrewrite of the IndentParser package. There are a few changes in the\nnames of functions besides the underlying code is simplified.\n\u003c/p\u003e\u003cp\u003eThe input source can be thought of as a list of tokens. Abstractly\neach token occurs at a line and a column and has a width. The column\nnumber of a token measures is indentation. If t1 and t2 are two tokens\nthen we say that indentation of t1 is more than t2 if the column\nnumber of occurrence of t1 is greater than that of t2.\n\u003c/p\u003e\u003cp\u003eCurrently this module supports two kind of indentation based syntactic\nstructures which we now describe:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eBlock\u003c/dt\u003e\u003cdd\u003e A block of indentation \u003cem\u003ec\u003c/em\u003e is a sequence of tokens with\nindentation at least \u003cem\u003ec\u003c/em\u003e.  Examples for a block is a where clause of\nHaskell with no explicit braces.\n\u003c/dd\u003e\u003cdt\u003eLine fold\u003c/dt\u003e\u003cdd\u003e A line fold starting at line \u003cem\u003el\u003c/em\u003e and indentation \u003cem\u003ec\u003c/em\u003e is a\nsequence of tokens that start at line \u003cem\u003el\u003c/em\u003e and possibly continue to\nsubsequent lines as long as the indentation is greater than \u003cem\u003ec\u003c/em\u003e. Such\na sequence of lines need to be \u003cem\u003efolded\u003c/em\u003e to a single line. An example\nis MIME headers. Line folding based binding separation is used in\nHaskell as well.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eFor indentation based grammars notice the following should be true\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Combinators for skipping whitespace/comments should skip spaces and\ncomments no matter what the indentation is.\n\u003c/li\u003e\u003cli\u003e All tokenisers of the language should check for indentation. The\ncombinator \u003ccode\u003e\u003ca\u003etokeniser\u003c/a\u003e\u003c/code\u003e makes its input parser indentation aware. Use\nit on all tokenisers of the language.\n\u003c/li\u003e\u003cli\u003e All tokenisers themselves should skip trailing whitespaces and\ncomments, i.e. they should be lexeme parsers. Otherwise, the will be\nproblem matching the next token.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eA block can then be parsed using the combinator \u003ccode\u003e\u003ca\u003eblockOf\u003c/a\u003e\u003c/code\u003e and a line\nfold using \u003ccode\u003e\u003ca\u003efoldedLinesOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGenerating indentation aware tokenisers could be tricky.  One can use\nthe module \u003ca\u003eText.Parsec.IndentParsec.Token\u003c/a\u003e for this.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.IndentParsec",
          "name": "IndentParsec",
          "package": "indentparser",
          "source": "src/Text-Parsec-IndentParsec.html",
          "type": "module"
        },
        "index": {
          "description": "module to construct indentation aware parsers Many programming language have indentation based syntax rules e.g python and Haskell This module exports combinators to create such parsers This is rewrite of the IndentParser package There are few changes in the names of functions besides the underlying code is simplified The input source can be thought of as list of tokens Abstractly each token occurs at line and column and has width The column number of token measures is indentation If t1 and t2 are two tokens then we say that indentation of t1 is more than t2 if the column number of occurrence of t1 is greater than that of t2 Currently this module supports two kind of indentation based syntactic structures which we now describe Block block of indentation is sequence of tokens with indentation at least Examples for block is where clause of Haskell with no explicit braces Line fold line fold starting at line and indentation is sequence of tokens that start at line and possibly continue to subsequent lines as long as the indentation is greater than Such sequence of lines need to be folded to single line An example is MIME headers Line folding based binding separation is used in Haskell as well For indentation based grammars notice the following should be true Combinators for skipping whitespace comments should skip spaces and comments no matter what the indentation is All tokenisers of the language should check for indentation The combinator tokeniser makes its input parser indentation aware Use it on all tokenisers of the language All tokenisers themselves should skip trailing whitespaces and comments i.e they should be lexeme parsers Otherwise the will be problem matching the next token block can then be parsed using the combinator blockOf and line fold using foldedLinesOf Generating indentation aware tokenisers could be tricky One can use the module Text.Parsec.IndentParsec.Token for this",
          "hierarchy": "Text Parsec IndentParsec",
          "module": "Text.Parsec.IndentParsec",
          "name": "IndentParsec",
          "package": "indentparser",
          "partial": "Indent Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indentparser/docs/Text-Parsec-IndentParsec.html#"
      }
    }
  ]
]