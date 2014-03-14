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
        "word": "fresh"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn the context of this library, a fresh variable has the form:\n\u003c/p\u003e\u003cpre\u003e Ident \"@foo\"\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003e\u003ca\u003eIdent\u003c/a\u003e\u003c/code\u003e is a constructor of the \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e type from\n Language.Haskell.Exts, and \"foo\" is the variable's name. A concrete\n variable is any other variable that appears in the source code.\n\u003c/p\u003e\u003cp\u003eTo concretize a fresh variable means to remove the '@' character that\n appears before its name and to rename the variable (keeping its existing\n name as a prefix) so that it is globally unique across an AST.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Exts.Fresh",
          "name": "Fresh",
          "package": "fresh",
          "source": "src/Language-Haskell-Exts-Fresh.html",
          "type": "module"
        },
        "index": {
          "description": "In the context of this library fresh variable has the form Ident foo where Ident is constructor of the Name type from Language.Haskell.Exts and foo is the variable name concrete variable is any other variable that appears in the source code To concretize fresh variable means to remove the character that appears before its name and to rename the variable keeping its existing name as prefix so that it is globally unique across an AST",
          "hierarchy": "Language Haskell Exts Fresh",
          "module": "Language.Haskell.Exts.Fresh",
          "name": "Fresh",
          "package": "fresh",
          "partial": "Fresh",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fresh/docs/Language-Haskell-Exts-Fresh.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps fresh variables with conflicting names to unique names that are\n non-conflicting.\n\u003c/p\u003e",
          "module": "Language.Haskell.Exts.Fresh",
          "name": "ConflictTable",
          "package": "fresh",
          "source": "src/Language-Haskell-Exts-Fresh.html#ConflictTable",
          "type": "type"
        },
        "index": {
          "description": "Maps fresh variables with conflicting names to unique names that are non-conflicting",
          "hierarchy": "Language Haskell Exts Fresh",
          "module": "Language.Haskell.Exts.Fresh",
          "name": "ConflictTable",
          "package": "fresh",
          "partial": "Conflict Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fresh/docs/Language-Haskell-Exts-Fresh.html#t:ConflictTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcretize all of the fresh variables appearing in the given \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\n value (most likely a Haskell AST).\n\u003c/p\u003e",
          "module": "Language.Haskell.Exts.Fresh",
          "name": "concretize",
          "package": "fresh",
          "signature": "a -\u003e a",
          "source": "src/Language-Haskell-Exts-Fresh.html#concretize",
          "type": "function"
        },
        "index": {
          "description": "Concretize all of the fresh variables appearing in the given Data value most likely Haskell AST",
          "hierarchy": "Language Haskell Exts Fresh",
          "module": "Language.Haskell.Exts.Fresh",
          "name": "concretize",
          "normalized": "a-\u003ea",
          "package": "fresh",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fresh/docs/Language-Haskell-Exts-Fresh.html#v:concretize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003econcretize\u003c/a\u003e\u003c/code\u003e, but returns the \u003ccode\u003e\u003ca\u003eConflictTable\u003c/a\u003e\u003c/code\u003e used for\n concretization.\n\u003c/p\u003e",
          "module": "Language.Haskell.Exts.Fresh",
          "name": "concretize'",
          "package": "fresh",
          "signature": "a -\u003e (a, ConflictTable)",
          "source": "src/Language-Haskell-Exts-Fresh.html#concretize%27",
          "type": "function"
        },
        "index": {
          "description": "Same as concretize but returns the ConflictTable used for concretization",
          "hierarchy": "Language Haskell Exts Fresh",
          "module": "Language.Haskell.Exts.Fresh",
          "name": "concretize'",
          "normalized": "a-\u003e(a,ConflictTable)",
          "package": "fresh",
          "signature": "a-\u003e(a,ConflictTable)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fresh/docs/Language-Haskell-Exts-Fresh.html#v:concretize-39-"
      }
    }
  ]
]