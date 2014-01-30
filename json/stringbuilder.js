[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebuild\u003c/a\u003e\u003c/code\u003e function can be used to construct multi-line string literals in\n a monadic way:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Data.String.Builder\n\n mystring :: String\n mystring = build $ do\n   \"foo\"\n   \"bar\"\n   \"baz\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.String.Builder",
        "fct-package": "stringbuilder",
        "fct-signature": "module",
        "fct-source": "src/Data-String-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "The build function can be used to construct multi-line string literals in monadic way LANGUAGE OverloadedStrings import Data.String.Builder mystring String mystring build do foo bar baz",
        "hierarchy": "Data String Builder",
        "module": "Data.String.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "stringbuilder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#t:Builder",
      "description": {
        "fct-module": "Data.String.Builder",
        "fct-package": "stringbuilder",
        "fct-signature": "type",
        "fct-source": "src/Data-String-Builder.html#Builder",
        "fct-type": "type",
        "title": "Builder"
      },
      "index": {
        "description": "",
        "hierarchy": "Data String Builder",
        "module": "Data.String.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "stringbuilder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#t:BuilderM",
      "description": {
        "fct-descr": "\u003cp\u003eA writer monad for string literals.\n\u003c/p\u003e",
        "fct-module": "Data.String.Builder",
        "fct-package": "stringbuilder",
        "fct-signature": "data",
        "fct-source": "src/Data-String-Builder.html#BuilderM",
        "fct-type": "data",
        "title": "BuilderM"
      },
      "index": {
        "description": "writer monad for string literals",
        "hierarchy": "Data String Builder",
        "module": "Data.String.Builder",
        "name": "BuilderM",
        "normalized": "",
        "package": "stringbuilder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#v:build",
      "description": {
        "fct-descr": "\u003cp\u003eRun a builder.\n\u003c/p\u003e",
        "fct-module": "Data.String.Builder",
        "fct-package": "stringbuilder",
        "fct-signature": "Builder -\u003e String",
        "fct-source": "src/Data-String-Builder.html#build",
        "fct-type": "function",
        "title": "build"
      },
      "index": {
        "description": "Run builder",
        "hierarchy": "Data String Builder",
        "module": "Data.String.Builder",
        "name": "build",
        "normalized": "Builder-\u003eString",
        "package": "stringbuilder",
        "partial": "",
        "signature": "Builder-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stringbuilder/docs/Data-String-Builder.html#v:literal",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a literal string.\n\u003c/p\u003e",
        "fct-module": "Data.String.Builder",
        "fct-package": "stringbuilder",
        "fct-signature": "String -\u003e Builder",
        "fct-source": "src/Data-String-Builder.html#literal",
        "fct-type": "function",
        "title": "literal"
      },
      "index": {
        "description": "Add literal string",
        "hierarchy": "Data String Builder",
        "module": "Data.String.Builder",
        "name": "literal",
        "normalized": "String-\u003eBuilder",
        "package": "stringbuilder",
        "partial": "",
        "signature": "String-\u003eBuilder"
      }
    }
  }
]