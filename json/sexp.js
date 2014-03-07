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
        "word": "sexp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eS-Expressions are represented by \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e.  Conversion to and from arbitrary types is\n done through \u003ccode\u003e\u003ca\u003eSexpable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe encoding and decoding functions from \u003ccode\u003e\u003ca\u003eSexpable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etoSexp\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efromSexp\u003c/a\u003e\u003c/code\u003e all have\n \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e default implementations.  So, if your data-type has a \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e instance\n (which you can automatically get with the \u003ccode\u003eDeriveGeneric\u003c/code\u003e GHC extension), it also has a\n \u003ccode\u003e\u003ca\u003eSexpable\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cpre\u003e\n {-\u003ca name=\" LANGUAGE DeriveGeneric \"/\u003e-}\n\ndata MyType = Foo { unFoo :: Int }\n             deriving ( Generic )\n\ninstance Sexpable MyType\n   -- the default implementation uses the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e representation of \u003ccode\u003eMyType\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eIf you want a specific encoding for your type, just fill in the \u003ccode\u003e\u003ca\u003eSexpable\u003c/a\u003e\u003c/code\u003e instance\n methods:\n\u003c/p\u003e\u003cpre\u003e\n {-\u003ca name=\" LANGUAGE OverloadedStrings \"/\u003e-}\n\nimport Control.Applicative ( (\u003ca\u003e$\u003c/a\u003e) )\n\ndata MyType = Foo { unFoo :: Int }\n\ninstance Sexpable MyType where\n     toSexp (Foo x) = List [Atom \u003ca\u003ethis\u003c/a\u003e, Atom \u003ca\u003eis\u003c/a\u003e, toSexp x]\n\nfromSexp (List [Atom \u003ca\u003ethis\u003c/a\u003e, Atom \u003ca\u003eis\u003c/a\u003e, s]) = Foo \u003ca\u003e$\u003c/a\u003e fromSexp s\n     fromSexp _                                  = fail \u003ca\u003einvalid MyType sexp\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eThank you, \u003ccode\u003eaeson\u003c/code\u003e, for the model code for this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Sexp",
          "name": "Sexp",
          "package": "sexp",
          "source": "src/Data-Sexp.html",
          "type": "module"
        },
        "index": {
          "description": "S-Expressions are represented by Sexp Conversion to and from arbitrary types is done through Sexpable The encoding and decoding functions from Sexpable toSexp and fromSexp all have Generic default implementations So if your data-type has Generic instance which you can automatically get with the DeriveGeneric GHC extension it also has Sexpable instance data MyType Foo unFoo Int deriving Generic instance Sexpable MyType the default implementation uses the Generic representation of MyType If you want specific encoding for your type just fill in the Sexpable instance methods import Control.Applicative data MyType Foo unFoo Int instance Sexpable MyType where toSexp Foo List Atom this Atom is toSexp fromSexp List Atom this Atom is Foo fromSexp fromSexp fail invalid MyType sexp Thank you aeson for the model code for this module",
          "hierarchy": "Data Sexp",
          "module": "Data.Sexp",
          "name": "Sexp",
          "package": "sexp",
          "partial": "Sexp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e-based S-Expression.  Conceptually, a \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e is\n either an single atom represented by a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, or a list of\n \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Sexp",
          "name": "Sexp",
          "package": "sexp",
          "source": "src/Data-Sexp.html#Sexp",
          "type": "data"
        },
        "index": {
          "description": "ByteString based S-Expression Conceptually Sexp is either an single atom represented by ByteString or list of Sexp",
          "hierarchy": "Data Sexp",
          "module": "Data.Sexp",
          "name": "Sexp",
          "package": "sexp",
          "partial": "Sexp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#t:Sexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sexp",
          "name": "Sexpable",
          "package": "sexp",
          "source": "src/Data-Sexp.html#Sexpable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Sexp",
          "module": "Data.Sexp",
          "name": "Sexpable",
          "package": "sexp",
          "partial": "Sexpable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#t:Sexpable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Sexp\",\"Language.Sexp.Parser\"]",
          "name": "Atom",
          "package": "sexp",
          "signature": "Atom ByteString",
          "source": "src/Data-Sexp.html#Sexp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:Atom\",\"http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:Atom\"]"
        },
        "index": {
          "hierarchy": "Data Sexp",
          "module": "Data.Sexp",
          "name": "Atom",
          "package": "sexp",
          "partial": "Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Sexp\",\"Language.Sexp.Parser\"]",
          "name": "List",
          "package": "sexp",
          "signature": "List [Sexp]",
          "source": "src/Data-Sexp.html#Sexp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:List\",\"http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:List\"]"
        },
        "index": {
          "hierarchy": "Data Sexp",
          "module": "Data.Sexp",
          "name": "List",
          "normalized": "List[Sexp]",
          "package": "sexp",
          "partial": "List",
          "signature": "List[Sexp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sexp",
          "name": "escape",
          "package": "sexp",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Sexp.html#escape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Sexp",
          "module": "Data.Sexp",
          "name": "escape",
          "normalized": "ByteString-\u003eByteString",
          "package": "sexp",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sexp",
          "name": "fromSexp",
          "package": "sexp",
          "signature": "Sexp -\u003e m a",
          "source": "src/Data-Sexp.html#fromSexp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sexp",
          "module": "Data.Sexp",
          "name": "fromSexp",
          "normalized": "Sexp-\u003ea b",
          "package": "sexp",
          "partial": "Sexp",
          "signature": "Sexp-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:fromSexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sexp",
          "name": "toSexp",
          "package": "sexp",
          "signature": "a -\u003e Sexp",
          "source": "src/Data-Sexp.html#toSexp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sexp",
          "module": "Data.Sexp",
          "name": "toSexp",
          "normalized": "a-\u003eSexp",
          "package": "sexp",
          "partial": "Sexp",
          "signature": "a-\u003eSexp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:toSexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eescape\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Sexp",
          "name": "unescape",
          "package": "sexp",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Sexp.html#unescape",
          "type": "function"
        },
        "index": {
          "description": "The inverse of escape",
          "hierarchy": "Data Sexp",
          "module": "Data.Sexp",
          "name": "unescape",
          "normalized": "ByteString-\u003eByteString",
          "package": "sexp",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:unescape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sexp.Parser",
          "name": "Parser",
          "package": "sexp",
          "source": "src/Language-Sexp-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Sexp Parser",
          "module": "Language.Sexp.Parser",
          "name": "Parser",
          "package": "sexp",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sexp.Parser",
          "name": "ParseException",
          "package": "sexp",
          "source": "src/Language-Sexp-Parser.html#ParseException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sexp Parser",
          "module": "Language.Sexp.Parser",
          "name": "ParseException",
          "package": "sexp",
          "partial": "Parse Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#t:ParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e-based S-Expression.  Conceptually, a \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e is\n either an single atom represented by a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, or a list of\n \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sexp.Parser",
          "name": "Sexp",
          "package": "sexp",
          "source": "src/Data-Sexp.html#Sexp",
          "type": "data"
        },
        "index": {
          "description": "ByteString based S-Expression Conceptually Sexp is either an single atom represented by ByteString or list of Sexp",
          "hierarchy": "Language Sexp Parser",
          "module": "Language.Sexp.Parser",
          "name": "Sexp",
          "package": "sexp",
          "partial": "Sexp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#t:Sexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sexp.Parser",
          "name": "ParseException",
          "package": "sexp",
          "signature": "ParseException String ByteString",
          "source": "src/Language-Sexp-Parser.html#ParseException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sexp Parser",
          "module": "Language.Sexp.Parser",
          "name": "ParseException",
          "package": "sexp",
          "partial": "Parse Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:ParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse S-Expressions from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  If the parse was\n successful, \u003ccode\u003eRight sexps\u003c/code\u003e is returned; otherwise, \u003ccode\u003eLeft (errorMsg,\n leftover)\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Language.Sexp.Parser",
          "name": "parse",
          "package": "sexp",
          "signature": "ByteString -\u003e Either (String, ByteString) [Sexp]",
          "source": "src/Language-Sexp-Parser.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parse S-Expressions from lazy ByteString If the parse was successful Right sexps is returned otherwise Left errorMsg leftover is returned",
          "hierarchy": "Language Sexp Parser",
          "module": "Language.Sexp.Parser",
          "name": "parse",
          "normalized": "ByteString-\u003eEither(String,ByteString)[Sexp]",
          "package": "sexp",
          "signature": "ByteString-\u003eEither(String,ByteString)[Sexp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e that throws a \u003ccode\u003e\u003ca\u003eParseException\u003c/a\u003e\u003c/code\u003e if the parse\n fails.\n\u003c/p\u003e",
          "module": "Language.Sexp.Parser",
          "name": "parseExn",
          "package": "sexp",
          "signature": "ByteString -\u003e [Sexp]",
          "source": "src/Language-Sexp-Parser.html#parseExn",
          "type": "function"
        },
        "index": {
          "description": "variant of parse that throws ParseException if the parse fails",
          "hierarchy": "Language Sexp Parser",
          "module": "Language.Sexp.Parser",
          "name": "parseExn",
          "normalized": "ByteString-\u003e[Sexp]",
          "package": "sexp",
          "partial": "Exn",
          "signature": "ByteString-\u003e[Sexp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:parseExn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e that returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the parse fails.\n\u003c/p\u003e",
          "module": "Language.Sexp.Parser",
          "name": "parseMaybe",
          "package": "sexp",
          "signature": "ByteString -\u003e Maybe [Sexp]",
          "source": "src/Language-Sexp-Parser.html#parseMaybe",
          "type": "function"
        },
        "index": {
          "description": "variant of parse that returns Nothing if the parse fails",
          "hierarchy": "Language Sexp Parser",
          "module": "Language.Sexp.Parser",
          "name": "parseMaybe",
          "normalized": "ByteString-\u003eMaybe[Sexp]",
          "package": "sexp",
          "partial": "Maybe",
          "signature": "ByteString-\u003eMaybe[Sexp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:parseMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for S-Expressions.  Ignoring whitespace, we follow the\n following EBNF:\n\u003c/p\u003e\u003cp\u003eSEXP           ::= '(' ATOM* ')' | ATOM\n ATOM           ::= '\u003ca\u003e' ESCAPED_STRING* '\u003c/a\u003e' | [^ tn()]+\n ESCAPED_STRING ::= ...\n\u003c/p\u003e",
          "module": "Language.Sexp.Parser",
          "name": "sexpParser",
          "package": "sexp",
          "signature": "Parser Sexp",
          "source": "src/Language-Sexp-Parser.html#sexpParser",
          "type": "function"
        },
        "index": {
          "description": "parser for S-Expressions Ignoring whitespace we follow the following EBNF SEXP ATOM ATOM ATOM ESCAPED STRING tn ESCAPED STRING",
          "hierarchy": "Language Sexp Parser",
          "module": "Language.Sexp.Parser",
          "name": "sexpParser",
          "package": "sexp",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:sexpParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sexp.Printer",
          "name": "Printer",
          "package": "sexp",
          "source": "src/Language-Sexp-Printer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Sexp Printer",
          "module": "Language.Sexp.Printer",
          "name": "Printer",
          "package": "sexp",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Printer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e in a human-friendly way.\n\u003c/p\u003e",
          "module": "Language.Sexp.Printer",
          "name": "printHum",
          "package": "sexp",
          "signature": "Sexp -\u003e ByteString",
          "source": "src/Language-Sexp-Printer.html#printHum",
          "type": "function"
        },
        "index": {
          "description": "Pretty print Sexp in human-friendly way",
          "hierarchy": "Language Sexp Printer",
          "module": "Language.Sexp.Printer",
          "name": "printHum",
          "normalized": "Sexp-\u003eByteString",
          "package": "sexp",
          "partial": "Hum",
          "signature": "Sexp-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Printer.html#v:printHum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e with minimal formatting.  Suitable for\n machine processing.\n\u003c/p\u003e",
          "module": "Language.Sexp.Printer",
          "name": "printMach",
          "package": "sexp",
          "signature": "Sexp -\u003e ByteString",
          "source": "src/Language-Sexp-Printer.html#printMach",
          "type": "function"
        },
        "index": {
          "description": "Pretty print Sexp with minimal formatting Suitable for machine processing",
          "hierarchy": "Language Sexp Printer",
          "module": "Language.Sexp.Printer",
          "name": "printMach",
          "normalized": "Sexp-\u003eByteString",
          "package": "sexp",
          "partial": "Mach",
          "signature": "Sexp-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Printer.html#v:printMach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sexp",
          "name": "Sexp",
          "package": "sexp",
          "source": "src/Language-Sexp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Sexp",
          "module": "Language.Sexp",
          "name": "Sexp",
          "package": "sexp",
          "partial": "Sexp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp.html#"
      }
    }
  ]
]