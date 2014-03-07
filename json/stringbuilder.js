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
        "word": "stringbuilder"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebuild\u003c/a\u003e\u003c/code\u003e function can be used to construct multi-line string literals in\n a monadic way:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Data.String.Builder\n\n mystring :: String\n mystring = build $ do\n   \"foo\"\n   \"bar\"\n   \"baz\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.String.Builder",
          "name": "Builder",
          "package": "stringbuilder",
          "source": "src/Data-String-Builder.html",
          "type": "module"
        },
        "index": {
          "description": "The build function can be used to construct multi-line string literals in monadic way LANGUAGE OverloadedStrings import Data.String.Builder mystring String mystring build do foo bar baz",
          "hierarchy": "Data String Builder",
          "module": "Data.String.Builder",
          "name": "Builder",
          "package": "stringbuilder",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Builder",
          "name": "Builder",
          "package": "stringbuilder",
          "source": "src/Data-String-Builder.html#Builder",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data String Builder",
          "module": "Data.String.Builder",
          "name": "Builder",
          "package": "stringbuilder",
          "partial": "Builder",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA writer monad for string literals.\n\u003c/p\u003e",
          "module": "Data.String.Builder",
          "name": "BuilderM",
          "package": "stringbuilder",
          "source": "src/Data-String-Builder.html#BuilderM",
          "type": "data"
        },
        "index": {
          "description": "writer monad for string literals",
          "hierarchy": "Data String Builder",
          "module": "Data.String.Builder",
          "name": "BuilderM",
          "package": "stringbuilder",
          "partial": "Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#t:BuilderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a builder.\n\u003c/p\u003e",
          "module": "Data.String.Builder",
          "name": "build",
          "package": "stringbuilder",
          "signature": "Builder -\u003e String",
          "source": "src/Data-String-Builder.html#build",
          "type": "function"
        },
        "index": {
          "description": "Run builder",
          "hierarchy": "Data String Builder",
          "module": "Data.String.Builder",
          "name": "build",
          "normalized": "Builder-\u003eString",
          "package": "stringbuilder",
          "signature": "Builder-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a literal string.\n\u003c/p\u003e",
          "module": "Data.String.Builder",
          "name": "literal",
          "package": "stringbuilder",
          "signature": "String -\u003e Builder",
          "source": "src/Data-String-Builder.html#literal",
          "type": "function"
        },
        "index": {
          "description": "Add literal string",
          "hierarchy": "Data String Builder",
          "module": "Data.String.Builder",
          "name": "literal",
          "normalized": "String-\u003eBuilder",
          "package": "stringbuilder",
          "signature": "String-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#v:literal"
      }
    }
  ]
]