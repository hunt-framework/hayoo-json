[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#",
      "description": {
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Indent.html",
        "fct-type": "module",
        "title": "Indent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "Indent",
        "normalized": "",
        "package": "indents",
        "partial": "Indent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#t:IndentParser",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation sensitive parser type. Usually \u003ccode\u003e m \u003c/code\u003e will\n   be \u003ccode\u003e Identity \u003c/code\u003e as with any \u003ccode\u003e ParsecT \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Indent.html#IndentParser",
        "fct-type": "type",
        "title": "IndentParser"
      },
      "index": {
        "description": "Indentation sensitive parser type Usually will be Identity as with any ParsecT",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "IndentParser",
        "normalized": "",
        "package": "indents",
        "partial": "Indent Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#t:Optional",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype used to optional parsing\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Indent.html#Optional",
        "fct-type": "data",
        "title": "Optional"
      },
      "index": {
        "description": "Datatype used to optional parsing",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "Optional",
        "normalized": "",
        "package": "indents",
        "partial": "Optional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:-60--42--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e\u003c+/\u003e\u003c/a\u003e\u003c/code\u003e but applies the second parser many times\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u ([a] -\u003e b) -\u003e IndentParser s u a -\u003e IndentParser s u b",
        "fct-source": "src/Text-Parsec-Indent.html#%3C%2A%2F%3E",
        "fct-type": "function",
        "title": "(\u003c*/\u003e)"
      },
      "index": {
        "description": "Like but applies the second parser many times",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "(\u003c*/\u003e) \u003c*/\u003e",
        "normalized": "IndentParser a b([c]-\u003ed)-\u003eIndentParser a b c-\u003eIndentParser a b d",
        "package": "indents",
        "partial": "",
        "signature": "IndentParser s u([a]-\u003eb)-\u003eIndentParser s u a-\u003eIndentParser s u b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:-60--43--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c+/\u003e\u003c/a\u003e\u003c/code\u003e is to indentation sensitive parsers what \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e is to monads\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u (a -\u003e b) -\u003e IndentParser s u a -\u003e IndentParser s u b",
        "fct-source": "src/Text-Parsec-Indent.html#%3C%2B%2F%3E",
        "fct-type": "function",
        "title": "(\u003c+/\u003e)"
      },
      "index": {
        "description": "is to indentation sensitive parsers what ap is to monads",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "(\u003c+/\u003e) \u003c+/\u003e",
        "normalized": "IndentParser a b(c-\u003ed)-\u003eIndentParser a b c-\u003eIndentParser a b d",
        "package": "indents",
        "partial": "",
        "signature": "IndentParser s u(a-\u003eb)-\u003eIndentParser s u a-\u003eIndentParser s u b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:-60--45--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c-/\u003e\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003e\u003c+/\u003e\u003c/a\u003e\u003c/code\u003e, but doesn't apply the function to the parsed value\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u a -\u003e IndentParser s u b -\u003e IndentParser s u a",
        "fct-source": "src/Text-Parsec-Indent.html#%3C-%2F%3E",
        "fct-type": "function",
        "title": "(\u003c-/\u003e)"
      },
      "index": {
        "description": "is like but doesn apply the function to the parsed value",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "(\u003c-/\u003e) \u003c-/\u003e",
        "normalized": "IndentParser a b c-\u003eIndentParser a b d-\u003eIndentParser a b c",
        "package": "indents",
        "partial": "",
        "signature": "IndentParser s u a-\u003eIndentParser s u b-\u003eIndentParser s u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:-60--63--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e\u003c+/\u003e\u003c/a\u003e\u003c/code\u003e but applies the second parser optionally using the \u003ccode\u003e\u003ca\u003eOptional\u003c/a\u003e\u003c/code\u003e datatype\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u (a -\u003e b) -\u003e Optional s u a -\u003e IndentParser s u b",
        "fct-source": "src/Text-Parsec-Indent.html#%3C%3F%2F%3E",
        "fct-type": "function",
        "title": "(\u003c?/\u003e)"
      },
      "index": {
        "description": "Like but applies the second parser optionally using the Optional datatype",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "(\u003c?/\u003e) \u003c?/\u003e",
        "normalized": "IndentParser a b(c-\u003ed)-\u003eOptional a b c-\u003eIndentParser a b d",
        "package": "indents",
        "partial": "",
        "signature": "IndentParser s u(a-\u003eb)-\u003eOptional s u a-\u003eIndentParser s u b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:Opt",
      "description": {
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "Opt a (IndentParser s u a)",
        "fct-source": "src/Text-Parsec-Indent.html#Optional",
        "fct-type": "function",
        "title": "Opt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "Opt",
        "normalized": "",
        "package": "indents",
        "partial": "Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:block",
      "description": {
        "fct-descr": "\u003cp\u003eParses a block of lines at the same indentation level\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u a -\u003e IndentParser s u [a]",
        "fct-source": "src/Text-Parsec-Indent.html#block",
        "fct-type": "function",
        "title": "block"
      },
      "index": {
        "description": "Parses block of lines at the same indentation level",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "block",
        "normalized": "IndentParser a b c-\u003eIndentParser a b[c]",
        "package": "indents",
        "partial": "",
        "signature": "IndentParser s u a-\u003eIndentParser s u[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:checkIndent",
      "description": {
        "fct-descr": "\u003cp\u003eEnsures the current indentation level matches that of the reference\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u ()",
        "fct-source": "src/Text-Parsec-Indent.html#checkIndent",
        "fct-type": "function",
        "title": "checkIndent"
      },
      "index": {
        "description": "Ensures the current indentation level matches that of the reference",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "checkIndent",
        "normalized": "IndentParser a b()",
        "package": "indents",
        "partial": "Indent",
        "signature": "IndentParser s u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indentAngles",
      "description": {
        "fct-descr": "\u003cp\u003eparses with surrounding angle brackets\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "GenTokenParser s u (State SourcePos) -\u003e IndentParser s u a -\u003e IndentParser s u a",
        "fct-source": "src/Text-Parsec-Indent.html#indentAngles",
        "fct-type": "function",
        "title": "indentAngles"
      },
      "index": {
        "description": "parses with surrounding angle brackets",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "indentAngles",
        "normalized": "GenTokenParser a b(State SourcePos)-\u003eIndentParser a b c-\u003eIndentParser a b c",
        "package": "indents",
        "partial": "Angles",
        "signature": "GenTokenParser s u(State SourcePos)-\u003eIndentParser s u a-\u003eIndentParser s u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indentBraces",
      "description": {
        "fct-descr": "\u003cp\u003eparses with surrounding braces\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "GenTokenParser s u (State SourcePos) -\u003e IndentParser s u a -\u003e IndentParser s u a",
        "fct-source": "src/Text-Parsec-Indent.html#indentBraces",
        "fct-type": "function",
        "title": "indentBraces"
      },
      "index": {
        "description": "parses with surrounding braces",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "indentBraces",
        "normalized": "GenTokenParser a b(State SourcePos)-\u003eIndentParser a b c-\u003eIndentParser a b c",
        "package": "indents",
        "partial": "Braces",
        "signature": "GenTokenParser s u(State SourcePos)-\u003eIndentParser s u a-\u003eIndentParser s u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indentBrackets",
      "description": {
        "fct-descr": "\u003cp\u003eparses with surrounding brackets\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "GenTokenParser s u (State SourcePos) -\u003e IndentParser s u a -\u003e IndentParser s u a",
        "fct-source": "src/Text-Parsec-Indent.html#indentBrackets",
        "fct-type": "function",
        "title": "indentBrackets"
      },
      "index": {
        "description": "parses with surrounding brackets",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "indentBrackets",
        "normalized": "GenTokenParser a b(State SourcePos)-\u003eIndentParser a b c-\u003eIndentParser a b c",
        "package": "indents",
        "partial": "Brackets",
        "signature": "GenTokenParser s u(State SourcePos)-\u003eIndentParser s u a-\u003eIndentParser s u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indentParens",
      "description": {
        "fct-descr": "\u003cp\u003eparses with surrounding parentheses \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "GenTokenParser s u (State SourcePos) -\u003e IndentParser s u a -\u003e IndentParser s u a",
        "fct-source": "src/Text-Parsec-Indent.html#indentParens",
        "fct-type": "function",
        "title": "indentParens"
      },
      "index": {
        "description": "parses with surrounding parentheses",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "indentParens",
        "normalized": "GenTokenParser a b(State SourcePos)-\u003eIndentParser a b c-\u003eIndentParser a b c",
        "package": "indents",
        "partial": "Parens",
        "signature": "GenTokenParser s u(State SourcePos)-\u003eIndentParser s u a-\u003eIndentParser s u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:indented",
      "description": {
        "fct-descr": "\u003cp\u003eParses only when indented past the level of the reference\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u ()",
        "fct-source": "src/Text-Parsec-Indent.html#indented",
        "fct-type": "function",
        "title": "indented"
      },
      "index": {
        "description": "Parses only when indented past the level of the reference",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "indented",
        "normalized": "IndentParser a b()",
        "package": "indents",
        "partial": "",
        "signature": "IndentParser s u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:runIndent",
      "description": {
        "fct-descr": "\u003cp\u003eRun the result of an indentation sensitive parse\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "SourceName -\u003e State SourcePos a -\u003e a",
        "fct-source": "src/Text-Parsec-Indent.html#runIndent",
        "fct-type": "function",
        "title": "runIndent"
      },
      "index": {
        "description": "Run the result of an indentation sensitive parse",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "runIndent",
        "normalized": "SourceName-\u003eState SourcePos a-\u003ea",
        "package": "indents",
        "partial": "Indent",
        "signature": "SourceName-\u003eState SourcePos a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:same",
      "description": {
        "fct-descr": "\u003cp\u003eParses only on the same line as the reference\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u ()",
        "fct-source": "src/Text-Parsec-Indent.html#same",
        "fct-type": "function",
        "title": "same"
      },
      "index": {
        "description": "Parses only on the same line as the reference",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "same",
        "normalized": "IndentParser a b()",
        "package": "indents",
        "partial": "",
        "signature": "IndentParser s u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:sameOrIndented",
      "description": {
        "fct-descr": "\u003cp\u003eParses only when indented past the level of the reference or on the same line\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u ()",
        "fct-source": "src/Text-Parsec-Indent.html#sameOrIndented",
        "fct-type": "function",
        "title": "sameOrIndented"
      },
      "index": {
        "description": "Parses only when indented past the level of the reference or on the same line",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "sameOrIndented",
        "normalized": "IndentParser a b()",
        "package": "indents",
        "partial": "Or Indented",
        "signature": "IndentParser s u()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:withBlock",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e \u003ccode\u003e\u003ca\u003ewithBlock\u003c/a\u003e\u003c/code\u003e f a p \u003c/code\u003e parses \u003ccode\u003e a \u003c/code\u003e\n   followed by an indented block of \u003ccode\u003e p \u003c/code\u003e\n   combining them with \u003ccode\u003e f \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "(a -\u003e [b] -\u003e c) -\u003e IndentParser s u a -\u003e IndentParser s u b -\u003e IndentParser s u c",
        "fct-source": "src/Text-Parsec-Indent.html#withBlock",
        "fct-type": "function",
        "title": "withBlock"
      },
      "index": {
        "description": "withBlock parses followed by an indented block of combining them with",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "withBlock",
        "normalized": "(a-\u003e[b]-\u003ec)-\u003eIndentParser d e a-\u003eIndentParser d e b-\u003eIndentParser d e c",
        "package": "indents",
        "partial": "Block",
        "signature": "(a-\u003e[b]-\u003ec)-\u003eIndentParser s u a-\u003eIndentParser s u b-\u003eIndentParser s u c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:withBlock-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithBlock\u003c/a\u003e\u003c/code\u003e, but throws away initial parse result\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u a -\u003e IndentParser s u b -\u003e IndentParser s u [b]",
        "fct-source": "src/Text-Parsec-Indent.html#withBlock%27",
        "fct-type": "function",
        "title": "withBlock'"
      },
      "index": {
        "description": "Like withBlock but throws away initial parse result",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "withBlock'",
        "normalized": "IndentParser a b c-\u003eIndentParser a b d-\u003eIndentParser a b[d]",
        "package": "indents",
        "partial": "Block'",
        "signature": "IndentParser s u a-\u003eIndentParser s u b-\u003eIndentParser s u[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/indents/docs/Text-Parsec-Indent.html#v:withPos",
      "description": {
        "fct-descr": "\u003cp\u003eParses using the current location for indentation reference\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Indent",
        "fct-package": "indents",
        "fct-signature": "IndentParser s u a -\u003e IndentParser s u a",
        "fct-source": "src/Text-Parsec-Indent.html#withPos",
        "fct-type": "function",
        "title": "withPos"
      },
      "index": {
        "description": "Parses using the current location for indentation reference",
        "hierarchy": "Text Parsec Indent",
        "module": "Text.Parsec.Indent",
        "name": "withPos",
        "normalized": "IndentParser a b c-\u003eIndentParser a b c",
        "package": "indents",
        "partial": "Pos",
        "signature": "IndentParser s u a-\u003eIndentParser s u a"
      }
    }
  }
]