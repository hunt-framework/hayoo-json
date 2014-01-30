[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eS-Expressions are represented by \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e.  Conversion to and from arbitrary types is\n done through \u003ccode\u003e\u003ca\u003eSexpable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe encoding and decoding functions from \u003ccode\u003e\u003ca\u003eSexpable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etoSexp\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efromSexp\u003c/a\u003e\u003c/code\u003e all have\n \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e default implementations.  So, if your data-type has a \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e instance\n (which you can automatically get with the \u003ccode\u003eDeriveGeneric\u003c/code\u003e GHC extension), it also has a\n \u003ccode\u003e\u003ca\u003eSexpable\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cpre\u003e\n {-\u003ca name=\" LANGUAGE DeriveGeneric \"/\u003e-}\n\ndata MyType = Foo { unFoo :: Int }\n             deriving ( Generic )\n\ninstance Sexpable MyType\n   -- the default implementation uses the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e representation of \u003ccode\u003eMyType\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eIf you want a specific encoding for your type, just fill in the \u003ccode\u003e\u003ca\u003eSexpable\u003c/a\u003e\u003c/code\u003e instance\n methods:\n\u003c/p\u003e\u003cpre\u003e\n {-\u003ca name=\" LANGUAGE OverloadedStrings \"/\u003e-}\n\nimport Control.Applicative ( (\u003ca\u003e$\u003c/a\u003e) )\n\ndata MyType = Foo { unFoo :: Int }\n\ninstance Sexpable MyType where\n     toSexp (Foo x) = List [Atom \u003ca\u003ethis\u003c/a\u003e, Atom \u003ca\u003eis\u003c/a\u003e, toSexp x]\n\nfromSexp (List [Atom \u003ca\u003ethis\u003c/a\u003e, Atom \u003ca\u003eis\u003c/a\u003e, s]) = Foo \u003ca\u003e$\u003c/a\u003e fromSexp s\n     fromSexp _                                  = fail \u003ca\u003einvalid MyType sexp\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eThank you, \u003ccode\u003eaeson\u003c/code\u003e, for the model code for this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Sexp",
        "fct-package": "sexp",
        "fct-signature": "module",
        "fct-source": "src/Data-Sexp.html",
        "fct-type": "module",
        "title": "Sexp"
      },
      "index": {
        "description": "S-Expressions are represented by Sexp Conversion to and from arbitrary types is done through Sexpable The encoding and decoding functions from Sexpable toSexp and fromSexp all have Generic default implementations So if your data-type has Generic instance which you can automatically get with the DeriveGeneric GHC extension it also has Sexpable instance data MyType Foo unFoo Int deriving Generic instance Sexpable MyType the default implementation uses the Generic representation of MyType If you want specific encoding for your type just fill in the Sexpable instance methods import Control.Applicative data MyType Foo unFoo Int instance Sexpable MyType where toSexp Foo List Atom this Atom is toSexp fromSexp List Atom this Atom is Foo fromSexp fromSexp fail invalid MyType sexp Thank you aeson for the model code for this module",
        "hierarchy": "Data Sexp",
        "module": "Data.Sexp",
        "name": "Sexp",
        "normalized": "",
        "package": "sexp",
        "partial": "Sexp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#t:Sexp",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e-based S-Expression.  Conceptually, a \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e is\n either an single atom represented by a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, or a list of\n \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Sexp",
        "fct-package": "sexp",
        "fct-signature": "data",
        "fct-source": "src/Data-Sexp.html#Sexp",
        "fct-type": "data",
        "title": "Sexp"
      },
      "index": {
        "description": "ByteString based S-Expression Conceptually Sexp is either an single atom represented by ByteString or list of Sexp",
        "hierarchy": "Data Sexp",
        "module": "Data.Sexp",
        "name": "Sexp",
        "normalized": "",
        "package": "sexp",
        "partial": "Sexp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#t:Sexpable",
      "description": {
        "fct-module": "Data.Sexp",
        "fct-package": "sexp",
        "fct-signature": "class",
        "fct-source": "src/Data-Sexp.html#Sexpable",
        "fct-type": "class",
        "title": "Sexpable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Sexp",
        "module": "Data.Sexp",
        "name": "Sexpable",
        "normalized": "",
        "package": "sexp",
        "partial": "Sexpable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:Atom",
      "description": {
        "fct-module": "Data.Sexp",
        "fct-package": "sexp",
        "fct-signature": "Atom ByteString",
        "fct-source": "src/Data-Sexp.html#Sexp",
        "fct-type": "function",
        "title": "Atom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Sexp",
        "module": "Data.Sexp",
        "name": "Atom",
        "normalized": "",
        "package": "sexp",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:List",
      "description": {
        "fct-module": "Data.Sexp",
        "fct-package": "sexp",
        "fct-signature": "List [Sexp]",
        "fct-source": "src/Data-Sexp.html#Sexp",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Sexp",
        "module": "Data.Sexp",
        "name": "List",
        "normalized": "List[Sexp]",
        "package": "sexp",
        "partial": "List",
        "signature": "List[Sexp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:escape",
      "description": {
        "fct-module": "Data.Sexp",
        "fct-package": "sexp",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-Sexp.html#escape",
        "fct-type": "function",
        "title": "escape"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Sexp",
        "module": "Data.Sexp",
        "name": "escape",
        "normalized": "ByteString-\u003eByteString",
        "package": "sexp",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:fromSexp",
      "description": {
        "fct-module": "Data.Sexp",
        "fct-package": "sexp",
        "fct-signature": "Sexp -\u003e m a",
        "fct-source": "src/Data-Sexp.html#fromSexp",
        "fct-type": "method",
        "title": "fromSexp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Sexp",
        "module": "Data.Sexp",
        "name": "fromSexp",
        "normalized": "Sexp-\u003ea b",
        "package": "sexp",
        "partial": "Sexp",
        "signature": "Sexp-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:toSexp",
      "description": {
        "fct-module": "Data.Sexp",
        "fct-package": "sexp",
        "fct-signature": "a -\u003e Sexp",
        "fct-source": "src/Data-Sexp.html#toSexp",
        "fct-type": "method",
        "title": "toSexp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Sexp",
        "module": "Data.Sexp",
        "name": "toSexp",
        "normalized": "a-\u003eSexp",
        "package": "sexp",
        "partial": "Sexp",
        "signature": "a-\u003eSexp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Data-Sexp.html#v:unescape",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eescape\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Sexp",
        "fct-package": "sexp",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-Sexp.html#unescape",
        "fct-type": "function",
        "title": "unescape"
      },
      "index": {
        "description": "The inverse of escape",
        "hierarchy": "Data Sexp",
        "module": "Data.Sexp",
        "name": "unescape",
        "normalized": "ByteString-\u003eByteString",
        "package": "sexp",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#",
      "description": {
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "module",
        "fct-source": "src/Language-Sexp-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "sexp",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#t:ParseException",
      "description": {
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "data",
        "fct-source": "src/Language-Sexp-Parser.html#ParseException",
        "fct-type": "data",
        "title": "ParseException"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "ParseException",
        "normalized": "",
        "package": "sexp",
        "partial": "Parse Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#t:Sexp",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e-based S-Expression.  Conceptually, a \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e is\n either an single atom represented by a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, or a list of\n \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "data",
        "fct-source": "src/Data-Sexp.html#Sexp",
        "fct-type": "data",
        "title": "Sexp"
      },
      "index": {
        "description": "ByteString based S-Expression Conceptually Sexp is either an single atom represented by ByteString or list of Sexp",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "Sexp",
        "normalized": "",
        "package": "sexp",
        "partial": "Sexp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:Atom",
      "description": {
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "Atom ByteString",
        "fct-source": "src/Data-Sexp.html#Sexp",
        "fct-type": "function",
        "title": "Atom"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "Atom",
        "normalized": "",
        "package": "sexp",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:List",
      "description": {
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "List [Sexp]",
        "fct-source": "src/Data-Sexp.html#Sexp",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "List",
        "normalized": "List[Sexp]",
        "package": "sexp",
        "partial": "List",
        "signature": "List[Sexp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:ParseException",
      "description": {
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "ParseException String ByteString",
        "fct-source": "src/Language-Sexp-Parser.html#ParseException",
        "fct-type": "function",
        "title": "ParseException"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "ParseException",
        "normalized": "",
        "package": "sexp",
        "partial": "Parse Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eParse S-Expressions from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  If the parse was\n successful, \u003ccode\u003eRight sexps\u003c/code\u003e is returned; otherwise, \u003ccode\u003eLeft (errorMsg,\n leftover)\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "ByteString -\u003e Either (String, ByteString) [Sexp]",
        "fct-source": "src/Language-Sexp-Parser.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Parse S-Expressions from lazy ByteString If the parse was successful Right sexps is returned otherwise Left errorMsg leftover is returned",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "parse",
        "normalized": "ByteString-\u003eEither(String,ByteString)[Sexp]",
        "package": "sexp",
        "partial": "",
        "signature": "ByteString-\u003eEither(String,ByteString)[Sexp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:parseExn",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e that throws a \u003ccode\u003e\u003ca\u003eParseException\u003c/a\u003e\u003c/code\u003e if the parse\n fails.\n\u003c/p\u003e",
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "ByteString -\u003e [Sexp]",
        "fct-source": "src/Language-Sexp-Parser.html#parseExn",
        "fct-type": "function",
        "title": "parseExn"
      },
      "index": {
        "description": "variant of parse that throws ParseException if the parse fails",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "parseExn",
        "normalized": "ByteString-\u003e[Sexp]",
        "package": "sexp",
        "partial": "Exn",
        "signature": "ByteString-\u003e[Sexp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:parseMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e that returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the parse fails.\n\u003c/p\u003e",
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "ByteString -\u003e Maybe [Sexp]",
        "fct-source": "src/Language-Sexp-Parser.html#parseMaybe",
        "fct-type": "function",
        "title": "parseMaybe"
      },
      "index": {
        "description": "variant of parse that returns Nothing if the parse fails",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "parseMaybe",
        "normalized": "ByteString-\u003eMaybe[Sexp]",
        "package": "sexp",
        "partial": "Maybe",
        "signature": "ByteString-\u003eMaybe[Sexp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Parser.html#v:sexpParser",
      "description": {
        "fct-descr": "\u003cp\u003eA parser for S-Expressions.  Ignoring whitespace, we follow the\n following EBNF:\n\u003c/p\u003e\u003cp\u003eSEXP           ::= '(' ATOM* ')' | ATOM\n ATOM           ::= '\u003ca\u003e' ESCAPED_STRING* '\u003c/a\u003e' | [^ tn()]+\n ESCAPED_STRING ::= ...\n\u003c/p\u003e",
        "fct-module": "Language.Sexp.Parser",
        "fct-package": "sexp",
        "fct-signature": "Parser Sexp",
        "fct-source": "src/Language-Sexp-Parser.html#sexpParser",
        "fct-type": "function",
        "title": "sexpParser"
      },
      "index": {
        "description": "parser for S-Expressions Ignoring whitespace we follow the following EBNF SEXP ATOM ATOM ATOM ESCAPED STRING tn ESCAPED STRING",
        "hierarchy": "Language Sexp Parser",
        "module": "Language.Sexp.Parser",
        "name": "sexpParser",
        "normalized": "",
        "package": "sexp",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Printer.html#",
      "description": {
        "fct-module": "Language.Sexp.Printer",
        "fct-package": "sexp",
        "fct-signature": "module",
        "fct-source": "src/Language-Sexp-Printer.html",
        "fct-type": "module",
        "title": "Printer"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sexp Printer",
        "module": "Language.Sexp.Printer",
        "name": "Printer",
        "normalized": "",
        "package": "sexp",
        "partial": "Printer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Printer.html#v:printHum",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e in a human-friendly way.\n\u003c/p\u003e",
        "fct-module": "Language.Sexp.Printer",
        "fct-package": "sexp",
        "fct-signature": "Sexp -\u003e ByteString",
        "fct-source": "src/Language-Sexp-Printer.html#printHum",
        "fct-type": "function",
        "title": "printHum"
      },
      "index": {
        "description": "Pretty print Sexp in human-friendly way",
        "hierarchy": "Language Sexp Printer",
        "module": "Language.Sexp.Printer",
        "name": "printHum",
        "normalized": "Sexp-\u003eByteString",
        "package": "sexp",
        "partial": "Hum",
        "signature": "Sexp-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp-Printer.html#v:printMach",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eSexp\u003c/a\u003e\u003c/code\u003e with minimal formatting.  Suitable for\n machine processing.\n\u003c/p\u003e",
        "fct-module": "Language.Sexp.Printer",
        "fct-package": "sexp",
        "fct-signature": "Sexp -\u003e ByteString",
        "fct-source": "src/Language-Sexp-Printer.html#printMach",
        "fct-type": "function",
        "title": "printMach"
      },
      "index": {
        "description": "Pretty print Sexp with minimal formatting Suitable for machine processing",
        "hierarchy": "Language Sexp Printer",
        "module": "Language.Sexp.Printer",
        "name": "printMach",
        "normalized": "Sexp-\u003eByteString",
        "package": "sexp",
        "partial": "Mach",
        "signature": "Sexp-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sexp/docs/Language-Sexp.html#",
      "description": {
        "fct-module": "Language.Sexp",
        "fct-package": "sexp",
        "fct-signature": "module",
        "fct-source": "src/Language-Sexp.html",
        "fct-type": "module",
        "title": "Sexp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sexp",
        "module": "Language.Sexp",
        "name": "Sexp",
        "normalized": "",
        "package": "sexp",
        "partial": "Sexp",
        "signature": ""
      }
    }
  }
]