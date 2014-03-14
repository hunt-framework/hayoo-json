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
        "word": "indents"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Indent",
          "name": "Indent",
          "package": "indents",
          "source": "src/Text-Parsec-Indent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "Indent",
          "package": "indents",
          "partial": "Indent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation sensitive parser type. Usually \u003ccode\u003e m \u003c/code\u003e will\n   be \u003ccode\u003e Identity \u003c/code\u003e as with any \u003ccode\u003e ParsecT \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "IndentParser",
          "package": "indents",
          "source": "src/Text-Parsec-Indent.html#IndentParser",
          "type": "type"
        },
        "index": {
          "description": "Indentation sensitive parser type Usually will be Identity as with any ParsecT",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "IndentParser",
          "package": "indents",
          "partial": "Indent Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#t:IndentParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype used to optional parsing\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "Optional",
          "package": "indents",
          "source": "src/Text-Parsec-Indent.html#Optional",
          "type": "data"
        },
        "index": {
          "description": "Datatype used to optional parsing",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "Optional",
          "package": "indents",
          "partial": "Optional",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#t:Optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e\u003c+/\u003e\u003c/a\u003e\u003c/code\u003e but applies the second parser many times\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "(\u003c*/\u003e)",
          "package": "indents",
          "signature": "IndentParser s u ([a] -\u003e b) -\u003e IndentParser s u a -\u003e IndentParser s u b",
          "source": "src/Text-Parsec-Indent.html#%3C%2A%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "Like but applies the second parser many times",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "(\u003c*/\u003e) \u003c*/\u003e",
          "normalized": "IndentParser a b([c]-\u003ed)-\u003eIndentParser a b c-\u003eIndentParser a b d",
          "package": "indents",
          "signature": "IndentParser s u([a]-\u003eb)-\u003eIndentParser s u a-\u003eIndentParser s u b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:-60--42--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c+/\u003e\u003c/a\u003e\u003c/code\u003e is to indentation sensitive parsers what \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e is to monads\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "(\u003c+/\u003e)",
          "package": "indents",
          "signature": "IndentParser s u (a -\u003e b) -\u003e IndentParser s u a -\u003e IndentParser s u b",
          "source": "src/Text-Parsec-Indent.html#%3C%2B%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "is to indentation sensitive parsers what ap is to monads",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "(\u003c+/\u003e) \u003c+/\u003e",
          "normalized": "IndentParser a b(c-\u003ed)-\u003eIndentParser a b c-\u003eIndentParser a b d",
          "package": "indents",
          "signature": "IndentParser s u(a-\u003eb)-\u003eIndentParser s u a-\u003eIndentParser s u b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:-60--43--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c-/\u003e\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003e\u003c+/\u003e\u003c/a\u003e\u003c/code\u003e, but doesn't apply the function to the parsed value\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "(\u003c-/\u003e)",
          "package": "indents",
          "signature": "IndentParser s u a -\u003e IndentParser s u b -\u003e IndentParser s u a",
          "source": "src/Text-Parsec-Indent.html#%3C-%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "is like but doesn apply the function to the parsed value",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "(\u003c-/\u003e) \u003c-/\u003e",
          "normalized": "IndentParser a b c-\u003eIndentParser a b d-\u003eIndentParser a b c",
          "package": "indents",
          "signature": "IndentParser s u a-\u003eIndentParser s u b-\u003eIndentParser s u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:-60--45--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e\u003c+/\u003e\u003c/a\u003e\u003c/code\u003e but applies the second parser optionally using the \u003ccode\u003e\u003ca\u003eOptional\u003c/a\u003e\u003c/code\u003e datatype\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "(\u003c?/\u003e)",
          "package": "indents",
          "signature": "IndentParser s u (a -\u003e b) -\u003e Optional s u a -\u003e IndentParser s u b",
          "source": "src/Text-Parsec-Indent.html#%3C%3F%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "Like but applies the second parser optionally using the Optional datatype",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "(\u003c?/\u003e) \u003c?/\u003e",
          "normalized": "IndentParser a b(c-\u003ed)-\u003eOptional a b c-\u003eIndentParser a b d",
          "package": "indents",
          "signature": "IndentParser s u(a-\u003eb)-\u003eOptional s u a-\u003eIndentParser s u b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:-60--63--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Indent",
          "name": "Opt",
          "package": "indents",
          "signature": "Opt a (IndentParser s u a)",
          "source": "src/Text-Parsec-Indent.html#Optional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "Opt",
          "package": "indents",
          "partial": "Opt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:Opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a block of lines at the same indentation level\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "block",
          "package": "indents",
          "signature": "IndentParser s u a -\u003e IndentParser s u [a]",
          "source": "src/Text-Parsec-Indent.html#block",
          "type": "function"
        },
        "index": {
          "description": "Parses block of lines at the same indentation level",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "block",
          "normalized": "IndentParser a b c-\u003eIndentParser a b[c]",
          "package": "indents",
          "signature": "IndentParser s u a-\u003eIndentParser s u[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsures the current indentation level matches that of the reference\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "checkIndent",
          "package": "indents",
          "signature": "IndentParser s u ()",
          "source": "src/Text-Parsec-Indent.html#checkIndent",
          "type": "function"
        },
        "index": {
          "description": "Ensures the current indentation level matches that of the reference",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "checkIndent",
          "normalized": "IndentParser a b()",
          "package": "indents",
          "partial": "Indent",
          "signature": "IndentParser s u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:checkIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparses with surrounding angle brackets\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "indentAngles",
          "package": "indents",
          "signature": "GenTokenParser s u (State SourcePos) -\u003e IndentParser s u a -\u003e IndentParser s u a",
          "source": "src/Text-Parsec-Indent.html#indentAngles",
          "type": "function"
        },
        "index": {
          "description": "parses with surrounding angle brackets",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "indentAngles",
          "normalized": "GenTokenParser a b(State SourcePos)-\u003eIndentParser a b c-\u003eIndentParser a b c",
          "package": "indents",
          "partial": "Angles",
          "signature": "GenTokenParser s u(State SourcePos)-\u003eIndentParser s u a-\u003eIndentParser s u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indentAngles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparses with surrounding braces\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "indentBraces",
          "package": "indents",
          "signature": "GenTokenParser s u (State SourcePos) -\u003e IndentParser s u a -\u003e IndentParser s u a",
          "source": "src/Text-Parsec-Indent.html#indentBraces",
          "type": "function"
        },
        "index": {
          "description": "parses with surrounding braces",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "indentBraces",
          "normalized": "GenTokenParser a b(State SourcePos)-\u003eIndentParser a b c-\u003eIndentParser a b c",
          "package": "indents",
          "partial": "Braces",
          "signature": "GenTokenParser s u(State SourcePos)-\u003eIndentParser s u a-\u003eIndentParser s u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indentBraces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparses with surrounding brackets\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "indentBrackets",
          "package": "indents",
          "signature": "GenTokenParser s u (State SourcePos) -\u003e IndentParser s u a -\u003e IndentParser s u a",
          "source": "src/Text-Parsec-Indent.html#indentBrackets",
          "type": "function"
        },
        "index": {
          "description": "parses with surrounding brackets",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "indentBrackets",
          "normalized": "GenTokenParser a b(State SourcePos)-\u003eIndentParser a b c-\u003eIndentParser a b c",
          "package": "indents",
          "partial": "Brackets",
          "signature": "GenTokenParser s u(State SourcePos)-\u003eIndentParser s u a-\u003eIndentParser s u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indentBrackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparses with surrounding parentheses \n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "indentParens",
          "package": "indents",
          "signature": "GenTokenParser s u (State SourcePos) -\u003e IndentParser s u a -\u003e IndentParser s u a",
          "source": "src/Text-Parsec-Indent.html#indentParens",
          "type": "function"
        },
        "index": {
          "description": "parses with surrounding parentheses",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "indentParens",
          "normalized": "GenTokenParser a b(State SourcePos)-\u003eIndentParser a b c-\u003eIndentParser a b c",
          "package": "indents",
          "partial": "Parens",
          "signature": "GenTokenParser s u(State SourcePos)-\u003eIndentParser s u a-\u003eIndentParser s u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indentParens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses only when indented past the level of the reference\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "indented",
          "package": "indents",
          "signature": "IndentParser s u ()",
          "source": "src/Text-Parsec-Indent.html#indented",
          "type": "function"
        },
        "index": {
          "description": "Parses only when indented past the level of the reference",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "indented",
          "normalized": "IndentParser a b()",
          "package": "indents",
          "signature": "IndentParser s u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the result of an indentation sensitive parse\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "runIndent",
          "package": "indents",
          "signature": "SourceName -\u003e State SourcePos a -\u003e a",
          "source": "src/Text-Parsec-Indent.html#runIndent",
          "type": "function"
        },
        "index": {
          "description": "Run the result of an indentation sensitive parse",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "runIndent",
          "normalized": "SourceName-\u003eState SourcePos a-\u003ea",
          "package": "indents",
          "partial": "Indent",
          "signature": "SourceName-\u003eState SourcePos a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:runIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses only on the same line as the reference\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "same",
          "package": "indents",
          "signature": "IndentParser s u ()",
          "source": "src/Text-Parsec-Indent.html#same",
          "type": "function"
        },
        "index": {
          "description": "Parses only on the same line as the reference",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "same",
          "normalized": "IndentParser a b()",
          "package": "indents",
          "signature": "IndentParser s u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:same"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses only when indented past the level of the reference or on the same line\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "sameOrIndented",
          "package": "indents",
          "signature": "IndentParser s u ()",
          "source": "src/Text-Parsec-Indent.html#sameOrIndented",
          "type": "function"
        },
        "index": {
          "description": "Parses only when indented past the level of the reference or on the same line",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "sameOrIndented",
          "normalized": "IndentParser a b()",
          "package": "indents",
          "partial": "Or Indented",
          "signature": "IndentParser s u()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:sameOrIndented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e \u003ccode\u003e\u003ca\u003ewithBlock\u003c/a\u003e\u003c/code\u003e f a p \u003c/code\u003e parses \u003ccode\u003e a \u003c/code\u003e\n   followed by an indented block of \u003ccode\u003e p \u003c/code\u003e\n   combining them with \u003ccode\u003e f \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "withBlock",
          "package": "indents",
          "signature": "(a -\u003e [b] -\u003e c) -\u003e IndentParser s u a -\u003e IndentParser s u b -\u003e IndentParser s u c",
          "source": "src/Text-Parsec-Indent.html#withBlock",
          "type": "function"
        },
        "index": {
          "description": "withBlock parses followed by an indented block of combining them with",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "withBlock",
          "normalized": "(a-\u003e[b]-\u003ec)-\u003eIndentParser d e a-\u003eIndentParser d e b-\u003eIndentParser d e c",
          "package": "indents",
          "partial": "Block",
          "signature": "(a-\u003e[b]-\u003ec)-\u003eIndentParser s u a-\u003eIndentParser s u b-\u003eIndentParser s u c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:withBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithBlock\u003c/a\u003e\u003c/code\u003e, but throws away initial parse result\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "withBlock'",
          "package": "indents",
          "signature": "IndentParser s u a -\u003e IndentParser s u b -\u003e IndentParser s u [b]",
          "source": "src/Text-Parsec-Indent.html#withBlock%27",
          "type": "function"
        },
        "index": {
          "description": "Like withBlock but throws away initial parse result",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "withBlock'",
          "normalized": "IndentParser a b c-\u003eIndentParser a b d-\u003eIndentParser a b[d]",
          "package": "indents",
          "partial": "Block'",
          "signature": "IndentParser s u a-\u003eIndentParser s u b-\u003eIndentParser s u[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:withBlock-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses using the current location for indentation reference\n\u003c/p\u003e",
          "module": "Text.Parsec.Indent",
          "name": "withPos",
          "package": "indents",
          "signature": "IndentParser s u a -\u003e IndentParser s u a",
          "source": "src/Text-Parsec-Indent.html#withPos",
          "type": "function"
        },
        "index": {
          "description": "Parses using the current location for indentation reference",
          "hierarchy": "Text Parsec Indent",
          "module": "Text.Parsec.Indent",
          "name": "withPos",
          "normalized": "IndentParser a b c-\u003eIndentParser a b c",
          "package": "indents",
          "partial": "Pos",
          "signature": "IndentParser s u a-\u003eIndentParser s u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:withPos"
      }
    }
  ]
]