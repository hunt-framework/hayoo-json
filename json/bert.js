[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Packet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERP (BERT packets) support.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BERT.Packet",
        "fct-package": "bert",
        "fct-signature": "module",
        "fct-source": "src/Data-BERT-Packet.html",
        "fct-type": "module",
        "title": "Packet"
      },
      "index": {
        "description": "BERP BERT packets support",
        "hierarchy": "Data BERT Packet",
        "module": "Data.BERT.Packet",
        "name": "Packet",
        "normalized": "",
        "package": "bert",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Packet.html#t:Packet",
      "description": {
        "fct-descr": "\u003cp\u003eA single BERP. Little more than a wrapper for a term.\n\u003c/p\u003e",
        "fct-module": "Data.BERT.Packet",
        "fct-package": "bert",
        "fct-signature": "data",
        "fct-source": "src/Data-BERT-Packet.html#Packet",
        "fct-type": "data",
        "title": "Packet"
      },
      "index": {
        "description": "single BERP Little more than wrapper for term",
        "hierarchy": "Data BERT Packet",
        "module": "Data.BERT.Packet",
        "name": "Packet",
        "normalized": "",
        "package": "bert",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Packet.html#v:Packet",
      "description": {
        "fct-module": "Data.BERT.Packet",
        "fct-package": "bert",
        "fct-signature": "Packet Term",
        "fct-source": "src/Data-BERT-Packet.html#Packet",
        "fct-type": "function",
        "title": "Packet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Packet",
        "module": "Data.BERT.Packet",
        "name": "Packet",
        "normalized": "",
        "package": "bert",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Packet.html#v:fromPacket",
      "description": {
        "fct-module": "Data.BERT.Packet",
        "fct-package": "bert",
        "fct-signature": "Packet -\u003e Term",
        "fct-source": "src/Data-BERT-Packet.html#fromPacket",
        "fct-type": "function",
        "title": "fromPacket"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Packet",
        "module": "Data.BERT.Packet",
        "name": "fromPacket",
        "normalized": "Packet-\u003eTerm",
        "package": "bert",
        "partial": "Packet",
        "signature": "Packet-\u003eTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse (simple) BERTs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BERT.Parser",
        "fct-package": "bert",
        "fct-signature": "module",
        "fct-source": "src/Data-BERT-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Parse simple BERTs",
        "hierarchy": "Data BERT Parser",
        "module": "Data.BERT.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "bert",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Parser.html#v:parseTerm",
      "description": {
        "fct-descr": "\u003cp\u003eParse a simple BERT (erlang) term from a string in the erlang\n grammar. Does not attempt to decompose complex terms.\n\u003c/p\u003e",
        "fct-module": "Data.BERT.Parser",
        "fct-package": "bert",
        "fct-signature": "String -\u003e Either ParseError Term",
        "fct-source": "src/Data-BERT-Parser.html#parseTerm",
        "fct-type": "function",
        "title": "parseTerm"
      },
      "index": {
        "description": "Parse simple BERT erlang term from string in the erlang grammar Does not attempt to decompose complex terms",
        "hierarchy": "Data BERT Parser",
        "module": "Data.BERT.Parser",
        "name": "parseTerm",
        "normalized": "String-\u003eEither ParseError Term",
        "package": "bert",
        "partial": "Term",
        "signature": "String-\u003eEither ParseError Term"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefine BERT terms their binary encoding & decoding and a typeclass\n for converting Haskell values to BERT terms and back.\n\u003c/p\u003e\u003cp\u003eWe define a number of convenient instances for \u003ccode\u003e\u003ca\u003eBERT\u003c/a\u003e\u003c/code\u003e. Users will\n probably want to define their own instances for composite types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BERT.Term",
        "fct-package": "bert",
        "fct-signature": "module",
        "fct-source": "src/Data-BERT-Term.html",
        "fct-type": "module",
        "title": "Term"
      },
      "index": {
        "description": "Define BERT terms their binary encoding decoding and typeclass for converting Haskell values to BERT terms and back We define number of convenient instances for BERT Users will probably want to define their own instances for composite types",
        "hierarchy": "Data BERT Term",
        "module": "Data.BERT.Term",
        "name": "Term",
        "normalized": "",
        "package": "bert",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#t:BERT",
      "description": {
        "fct-module": "Data.BERT.Term",
        "fct-package": "bert",
        "fct-signature": "class",
        "fct-source": "src/Data-BERT-Term.html#BERT",
        "fct-type": "class",
        "title": "BERT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Term",
        "module": "Data.BERT.Term",
        "name": "BERT",
        "normalized": "",
        "package": "bert",
        "partial": "BERT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#v:parseTerm",
      "description": {
        "fct-descr": "\u003cp\u003eParse a simple BERT (erlang) term from a string in the erlang\n grammar. Does not attempt to decompose complex terms.\n\u003c/p\u003e",
        "fct-module": "Data.BERT.Term",
        "fct-package": "bert",
        "fct-signature": "String -\u003e Either ParseError Term",
        "fct-source": "src/Data-BERT-Parser.html#parseTerm",
        "fct-type": "function",
        "title": "parseTerm"
      },
      "index": {
        "description": "Parse simple BERT erlang term from string in the erlang grammar Does not attempt to decompose complex terms",
        "hierarchy": "Data BERT Term",
        "module": "Data.BERT.Term",
        "name": "parseTerm",
        "normalized": "String-\u003eEither ParseError Term",
        "package": "bert",
        "partial": "Term",
        "signature": "String-\u003eEither ParseError Term"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#v:readBERT",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to read a haskell value from a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BERT.Term",
        "fct-package": "bert",
        "fct-signature": "Term -\u003e Either String a",
        "fct-source": "src/Data-BERT-Term.html#readBERT",
        "fct-type": "method",
        "title": "readBERT"
      },
      "index": {
        "description": "Attempt to read haskell value from Term",
        "hierarchy": "Data BERT Term",
        "module": "Data.BERT.Term",
        "name": "readBERT",
        "normalized": "Term-\u003eEither String a",
        "package": "bert",
        "partial": "BERT",
        "signature": "Term-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#v:showBERT",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e from a Haskell value.\n\u003c/p\u003e",
        "fct-module": "Data.BERT.Term",
        "fct-package": "bert",
        "fct-signature": "a -\u003e Term",
        "fct-source": "src/Data-BERT-Term.html#showBERT",
        "fct-type": "method",
        "title": "showBERT"
      },
      "index": {
        "description": "Introduce Term from Haskell value",
        "hierarchy": "Data BERT Term",
        "module": "Data.BERT.Term",
        "name": "showBERT",
        "normalized": "a-\u003eTerm",
        "package": "bert",
        "partial": "BERT",
        "signature": "a-\u003eTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#v:showTerm",
      "description": {
        "fct-module": "Data.BERT.Term",
        "fct-package": "bert",
        "fct-signature": "Term -\u003e String",
        "fct-source": "src/Data-BERT-Term.html#showTerm",
        "fct-type": "function",
        "title": "showTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Term",
        "module": "Data.BERT.Term",
        "name": "showTerm",
        "normalized": "Term-\u003eString",
        "package": "bert",
        "partial": "Term",
        "signature": "Term-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Term type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "module",
        "fct-source": "src/Data-BERT-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "The Term type",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "Types",
        "normalized": "",
        "package": "bert",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#t:Term",
      "description": {
        "fct-descr": "\u003cp\u003eA single BERT term.\n\u003c/p\u003e",
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "data",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "data",
        "title": "Term"
      },
      "index": {
        "description": "single BERT term",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "Term",
        "normalized": "",
        "package": "bert",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:AtomTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "AtomTerm String",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "AtomTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "AtomTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Atom Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BigbigintTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "BigbigintTerm Integer",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "BigbigintTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "BigbigintTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Bigbigint Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BigintTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "BigintTerm Integer",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "BigintTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "BigintTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Bigint Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BinaryTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "BinaryTerm ByteString",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "BinaryTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "BinaryTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Binary Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BoolTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "BoolTerm Bool",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "BoolTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "BoolTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Bool Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BytelistTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "BytelistTerm ByteString",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "BytelistTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "BytelistTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Bytelist Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:DictionaryTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "DictionaryTerm [(Term, Term)]",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "DictionaryTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "DictionaryTerm",
        "normalized": "DictionaryTerm[(Term,Term)]",
        "package": "bert",
        "partial": "Dictionary Term",
        "signature": "DictionaryTerm[(Term,Term)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:FloatTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "FloatTerm Float",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "FloatTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "FloatTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Float Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:IntTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "IntTerm Int",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "IntTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "IntTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Int Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:ListTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "ListTerm [Term]",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "ListTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "ListTerm",
        "normalized": "ListTerm[Term]",
        "package": "bert",
        "partial": "List Term",
        "signature": "ListTerm[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:NilTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "NilTerm",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "NilTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "NilTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Nil Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:RegexTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "RegexTerm String [String]",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "RegexTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "RegexTerm",
        "normalized": "RegexTerm String[String]",
        "package": "bert",
        "partial": "Regex Term",
        "signature": "RegexTerm String[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:TimeTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "TimeTerm UTCTime",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "TimeTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "TimeTerm",
        "normalized": "",
        "package": "bert",
        "partial": "Time Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:TupleTerm",
      "description": {
        "fct-module": "Data.BERT.Types",
        "fct-package": "bert",
        "fct-signature": "TupleTerm [Term]",
        "fct-source": "src/Data-BERT-Types.html#Term",
        "fct-type": "function",
        "title": "TupleTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BERT Types",
        "module": "Data.BERT.Types",
        "name": "TupleTerm",
        "normalized": "TupleTerm[Term]",
        "package": "bert",
        "partial": "Tuple Term",
        "signature": "TupleTerm[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERT (Erlang terms) implementation. See \u003ca\u003ehttp://bert-rpc.org/\u003c/a\u003e and\n \u003ca\u003ehttp://erlang.org/doc/apps/erts/erl_ext_dist.html\u003c/a\u003e for more\n details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BERT",
        "fct-package": "bert",
        "fct-signature": "module",
        "fct-source": "src/Data-BERT.html",
        "fct-type": "module",
        "title": "BERT"
      },
      "index": {
        "description": "BERT Erlang terms implementation See http bert-rpc.org and http erlang.org doc apps erts erl ext dist.html for more details",
        "hierarchy": "Data BERT",
        "module": "Data.BERT",
        "name": "BERT",
        "normalized": "",
        "package": "bert",
        "partial": "BERT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERT-RPC client (\u003ca\u003ehttp://bert-rpc.org/\u003c/a\u003e). This implements the client RPC call logic.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.BERT.Client",
        "fct-package": "bert",
        "fct-signature": "module",
        "fct-source": "src/Network-BERT-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "BERT-RPC client http bert-rpc.org This implements the client RPC call logic",
        "hierarchy": "Network BERT Client",
        "module": "Network.BERT.Client",
        "name": "Client",
        "normalized": "",
        "package": "bert",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#t:Call",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience type for \u003ccode\u003ecall\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Client",
        "fct-package": "bert",
        "fct-signature": "type",
        "fct-source": "src/Network-BERT-Client.html#Call",
        "fct-type": "type",
        "title": "Call"
      },
      "index": {
        "description": "Convenience type for call",
        "hierarchy": "Network BERT Client",
        "module": "Network.BERT.Client",
        "name": "Call",
        "normalized": "",
        "package": "bert",
        "partial": "Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#t:Error",
      "description": {
        "fct-module": "Network.BERT.Client",
        "fct-package": "bert",
        "fct-signature": "data",
        "fct-source": "src/Network-BERT-Client.html#Error",
        "fct-type": "data",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Client",
        "module": "Network.BERT.Client",
        "name": "Error",
        "normalized": "",
        "package": "bert",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#v:ClientError",
      "description": {
        "fct-module": "Network.BERT.Client",
        "fct-package": "bert",
        "fct-signature": "ClientError String",
        "fct-source": "src/Network-BERT-Client.html#Error",
        "fct-type": "function",
        "title": "ClientError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Client",
        "module": "Network.BERT.Client",
        "name": "ClientError",
        "normalized": "",
        "package": "bert",
        "partial": "Client Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#v:ServerError",
      "description": {
        "fct-module": "Network.BERT.Client",
        "fct-package": "bert",
        "fct-signature": "ServerError Term",
        "fct-source": "src/Network-BERT-Client.html#Error",
        "fct-type": "function",
        "title": "ServerError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Client",
        "module": "Network.BERT.Client",
        "name": "ServerError",
        "normalized": "",
        "package": "bert",
        "partial": "Server Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#v:call",
      "description": {
        "fct-descr": "\u003cp\u003eCall the \u003ccode\u003e{mod, func, args}\u003c/code\u003e synchronously on the endpoint\n defined by \u003ccode\u003etransport\u003c/code\u003e, returning the results of the call or an\n error.\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Client",
        "fct-package": "bert",
        "fct-signature": "t -\u003e String -\u003e String -\u003e [a] -\u003e Call b",
        "fct-source": "src/Network-BERT-Client.html#call",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "Call the mod func args synchronously on the endpoint defined by transport returning the results of the call or an error",
        "hierarchy": "Network BERT Client",
        "module": "Network.BERT.Client",
        "name": "call",
        "normalized": "a-\u003eString-\u003eString-\u003e[b]-\u003eCall c",
        "package": "bert",
        "partial": "",
        "signature": "t-\u003eString-\u003eString-\u003e[a]-\u003eCall b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#v:tcpClient",
      "description": {
        "fct-descr": "\u003cp\u003eEstablish a connection to the TCP server and return the resulting\n transport. It can be used to make multiple requests.\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Client",
        "fct-package": "bert",
        "fct-signature": "HostName -\u003e PortNumber -\u003e IO TCP",
        "fct-source": "src/Network-BERT-Transport.html#tcpClient",
        "fct-type": "function",
        "title": "tcpClient"
      },
      "index": {
        "description": "Establish connection to the TCP server and return the resulting transport It can be used to make multiple requests",
        "hierarchy": "Network BERT Client",
        "module": "Network.BERT.Client",
        "name": "tcpClient",
        "normalized": "HostName-\u003ePortNumber-\u003eIO TCP",
        "package": "bert",
        "partial": "Client",
        "signature": "HostName-\u003ePortNumber-\u003eIO TCP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERT-RPC server (\u003ca\u003ehttp://bert-rpc.org/\u003c/a\u003e). This implements the\n client RPC call/reply logic. Only synchronous requests are\n supported at this time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.BERT.Server",
        "fct-package": "bert",
        "fct-signature": "module",
        "fct-source": "src/Network-BERT-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "BERT-RPC server http bert-rpc.org This implements the client RPC call reply logic Only synchronous requests are supported at this time",
        "hierarchy": "Network BERT Server",
        "module": "Network.BERT.Server",
        "name": "Server",
        "normalized": "",
        "package": "bert",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#t:DispatchResult",
      "description": {
        "fct-module": "Network.BERT.Server",
        "fct-package": "bert",
        "fct-signature": "data",
        "fct-source": "src/Network-BERT-Server.html#DispatchResult",
        "fct-type": "data",
        "title": "DispatchResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Server",
        "module": "Network.BERT.Server",
        "name": "DispatchResult",
        "normalized": "",
        "package": "bert",
        "partial": "Dispatch Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:NoSuchFunction",
      "description": {
        "fct-module": "Network.BERT.Server",
        "fct-package": "bert",
        "fct-signature": "NoSuchFunction",
        "fct-source": "src/Network-BERT-Server.html#DispatchResult",
        "fct-type": "function",
        "title": "NoSuchFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Server",
        "module": "Network.BERT.Server",
        "name": "NoSuchFunction",
        "normalized": "",
        "package": "bert",
        "partial": "No Such Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:NoSuchModule",
      "description": {
        "fct-module": "Network.BERT.Server",
        "fct-package": "bert",
        "fct-signature": "NoSuchModule",
        "fct-source": "src/Network-BERT-Server.html#DispatchResult",
        "fct-type": "function",
        "title": "NoSuchModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Server",
        "module": "Network.BERT.Server",
        "name": "NoSuchModule",
        "normalized": "",
        "package": "bert",
        "partial": "No Such Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:Success",
      "description": {
        "fct-module": "Network.BERT.Server",
        "fct-package": "bert",
        "fct-signature": "Success Term",
        "fct-source": "src/Network-BERT-Server.html#DispatchResult",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Server",
        "module": "Network.BERT.Server",
        "name": "Success",
        "normalized": "",
        "package": "bert",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:Undesignated",
      "description": {
        "fct-module": "Network.BERT.Server",
        "fct-package": "bert",
        "fct-signature": "Undesignated String",
        "fct-source": "src/Network-BERT-Server.html#DispatchResult",
        "fct-type": "function",
        "title": "Undesignated"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Server",
        "module": "Network.BERT.Server",
        "name": "Undesignated",
        "normalized": "",
        "package": "bert",
        "partial": "Undesignated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:serve",
      "description": {
        "fct-descr": "\u003cp\u003eServe from the given transport (forever), handling each request\n with the given dispatch function in a new thread.\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Server",
        "fct-package": "bert",
        "fct-signature": "s -\u003e (String -\u003e String -\u003e [Term] -\u003e IO DispatchResult) -\u003e IO ()",
        "fct-source": "src/Network-BERT-Server.html#serve",
        "fct-type": "function",
        "title": "serve"
      },
      "index": {
        "description": "Serve from the given transport forever handling each request with the given dispatch function in new thread",
        "hierarchy": "Network BERT Server",
        "module": "Network.BERT.Server",
        "name": "serve",
        "normalized": "a-\u003e(String-\u003eString-\u003e[Term]-\u003eIO DispatchResult)-\u003eIO()",
        "package": "bert",
        "partial": "",
        "signature": "s-\u003e(String-\u003eString-\u003e[Term]-\u003eIO DispatchResult)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:tcpServer",
      "description": {
        "fct-descr": "\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eTCPServer\u003c/a\u003e\u003c/code\u003e constructor, listens on all local interfaces.\n\u003c/p\u003e\u003cp\u003eIf you want to bind only to some of the interfaces, create the socket\n manually using the functions from \u003ca\u003eNetwork.Socket\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Server",
        "fct-package": "bert",
        "fct-signature": "PortNumber -\u003e IO TCPServer",
        "fct-source": "src/Network-BERT-Transport.html#tcpServer",
        "fct-type": "function",
        "title": "tcpServer"
      },
      "index": {
        "description": "simple TCPServer constructor listens on all local interfaces If you want to bind only to some of the interfaces create the socket manually using the functions from Network.Socket",
        "hierarchy": "Network BERT Server",
        "module": "Network.BERT.Server",
        "name": "tcpServer",
        "normalized": "PortNumber-\u003eIO TCPServer",
        "package": "bert",
        "partial": "Server",
        "signature": "PortNumber-\u003eIO TCPServer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnderlying transport abstraction\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "module",
        "fct-source": "src/Network-BERT-Transport.html",
        "fct-type": "module",
        "title": "Transport"
      },
      "index": {
        "description": "Underlying transport abstraction",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "Transport",
        "normalized": "",
        "package": "bert",
        "partial": "Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:SendPacketFn",
      "description": {
        "fct-descr": "\u003cp\u003eA function to send packets to the peer\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "type",
        "fct-source": "src/Network-BERT-Transport.html#SendPacketFn",
        "fct-type": "type",
        "title": "SendPacketFn"
      },
      "index": {
        "description": "function to send packets to the peer",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "SendPacketFn",
        "normalized": "",
        "package": "bert",
        "partial": "Send Packet Fn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:Server",
      "description": {
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "class",
        "fct-source": "src/Network-BERT-Transport.html#Server",
        "fct-type": "class",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "Server",
        "normalized": "",
        "package": "bert",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:TCP",
      "description": {
        "fct-descr": "\u003cp\u003eThe TCP transport\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "data",
        "fct-source": "src/Network-BERT-Transport.html#TCP",
        "fct-type": "data",
        "title": "TCP"
      },
      "index": {
        "description": "The TCP transport",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "TCP",
        "normalized": "",
        "package": "bert",
        "partial": "TCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:TCPServer",
      "description": {
        "fct-descr": "\u003cp\u003eThe TCP server\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "data",
        "fct-source": "src/Network-BERT-Transport.html#TCPServer",
        "fct-type": "data",
        "title": "TCPServer"
      },
      "index": {
        "description": "The TCP server",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "TCPServer",
        "normalized": "",
        "package": "bert",
        "partial": "TCPServer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:Transport",
      "description": {
        "fct-descr": "\u003cp\u003eThe class for transports\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "class",
        "fct-source": "src/Network-BERT-Transport.html#Transport",
        "fct-type": "class",
        "title": "Transport"
      },
      "index": {
        "description": "The class for transports",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "Transport",
        "normalized": "",
        "package": "bert",
        "partial": "Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:TransportM",
      "description": {
        "fct-descr": "\u003cp\u003eThe transport monad allows receiving packets through the conduit,\n and sending functions via the provided \u003ccode\u003e\u003ca\u003eSendPacketFn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "type",
        "fct-source": "src/Network-BERT-Transport.html#TransportM",
        "fct-type": "type",
        "title": "TransportM"
      },
      "index": {
        "description": "The transport monad allows receiving packets through the conduit and sending functions via the provided SendPacketFn",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "TransportM",
        "normalized": "",
        "package": "bert",
        "partial": "Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:TCP",
      "description": {
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "TCP",
        "fct-source": "src/Network-BERT-Transport.html#TCP",
        "fct-type": "function",
        "title": "TCP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "TCP",
        "normalized": "",
        "package": "bert",
        "partial": "TCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:TCPServer",
      "description": {
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "TCPServer",
        "fct-source": "src/Network-BERT-Transport.html#TCPServer",
        "fct-type": "function",
        "title": "TCPServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "TCPServer",
        "normalized": "",
        "package": "bert",
        "partial": "TCPServer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:cleanup",
      "description": {
        "fct-descr": "\u003cp\u003eFree any resources that the server has acquired (such as the\n listening socket)\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "s -\u003e IO ()",
        "fct-source": "src/Network-BERT-Transport.html#cleanup",
        "fct-type": "method",
        "title": "cleanup"
      },
      "index": {
        "description": "Free any resources that the server has acquired such as the listening socket",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "cleanup",
        "normalized": "a-\u003eIO()",
        "package": "bert",
        "partial": "",
        "signature": "s-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:closeConnection",
      "description": {
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "t -\u003e IO ()",
        "fct-source": "src/Network-BERT-Transport.html#closeConnection",
        "fct-type": "method",
        "title": "closeConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "closeConnection",
        "normalized": "a-\u003eIO()",
        "package": "bert",
        "partial": "Connection",
        "signature": "t-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:getTcpListenSocket",
      "description": {
        "fct-descr": "\u003cp\u003eThe listening socket. Assumed to be bound but not listening yet.\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "!Socket",
        "fct-source": "src/Network-BERT-Transport.html#TCPServer",
        "fct-type": "function",
        "title": "getTcpListenSocket"
      },
      "index": {
        "description": "The listening socket Assumed to be bound but not listening yet",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "getTcpListenSocket",
        "normalized": "",
        "package": "bert",
        "partial": "Tcp Listen Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:getTcpSocket",
      "description": {
        "fct-descr": "\u003cp\u003eThe socket used for communication.\n\u003c/p\u003e\u003cp\u003eThe connection is assumed to be already established when this\n structure is passed in.\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "!Socket",
        "fct-source": "src/Network-BERT-Transport.html#TCP",
        "fct-type": "function",
        "title": "getTcpSocket"
      },
      "index": {
        "description": "The socket used for communication The connection is assumed to be already established when this structure is passed in",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "getTcpSocket",
        "normalized": "",
        "package": "bert",
        "partial": "Tcp Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:recvt",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a term\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "TransportM (Maybe Term)",
        "fct-source": "src/Network-BERT-Transport.html#recvt",
        "fct-type": "function",
        "title": "recvt"
      },
      "index": {
        "description": "Receive term",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "recvt",
        "normalized": "",
        "package": "bert",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:recvtForever",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action for every incoming term, until the connection is\n closed\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "(Term -\u003e TransportM a) -\u003e TransportM ()",
        "fct-source": "src/Network-BERT-Transport.html#recvtForever",
        "fct-type": "function",
        "title": "recvtForever"
      },
      "index": {
        "description": "Execute an action for every incoming term until the connection is closed",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "recvtForever",
        "normalized": "(Term-\u003eTransportM a)-\u003eTransportM()",
        "package": "bert",
        "partial": "Forever",
        "signature": "(Term-\u003eTransportM a)-\u003eTransportM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:resolve",
      "description": {
        "fct-descr": "\u003cp\u003eA simple address resolver\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "HostName -\u003e IO HostAddress",
        "fct-source": "src/Network-BERT-Transport.html#resolve",
        "fct-type": "function",
        "title": "resolve"
      },
      "index": {
        "description": "simple address resolver",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "resolve",
        "normalized": "HostName-\u003eIO HostAddress",
        "package": "bert",
        "partial": "",
        "signature": "HostName-\u003eIO HostAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:runServer",
      "description": {
        "fct-descr": "\u003cp\u003eThis method should listen for incoming requests, establish some\n sort of a connection (represented by the transport) and then invoke\n the handling function\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "s -\u003e (ServerTransport s -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/Network-BERT-Transport.html#runServer",
        "fct-type": "method",
        "title": "runServer"
      },
      "index": {
        "description": "This method should listen for incoming requests establish some sort of connection represented by the transport and then invoke the handling function",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "runServer",
        "normalized": "a-\u003e(ServerTransport a-\u003eIO())-\u003eIO()",
        "package": "bert",
        "partial": "Server",
        "signature": "s-\u003e(ServerTransport s-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:runSession",
      "description": {
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "t -\u003e TransportM a -\u003e IO a",
        "fct-source": "src/Network-BERT-Transport.html#runSession",
        "fct-type": "method",
        "title": "runSession"
      },
      "index": {
        "description": "",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "runSession",
        "normalized": "a-\u003eTransportM b-\u003eIO b",
        "package": "bert",
        "partial": "Session",
        "signature": "t-\u003eTransportM a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:sendt",
      "description": {
        "fct-descr": "\u003cp\u003eSend a term\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "Term -\u003e TransportM ()",
        "fct-source": "src/Network-BERT-Transport.html#sendt",
        "fct-type": "function",
        "title": "sendt"
      },
      "index": {
        "description": "Send term",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "sendt",
        "normalized": "Term-\u003eTransportM()",
        "package": "bert",
        "partial": "",
        "signature": "Term-\u003eTransportM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:tcpClient",
      "description": {
        "fct-descr": "\u003cp\u003eEstablish a connection to the TCP server and return the resulting\n transport. It can be used to make multiple requests.\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "HostName -\u003e PortNumber -\u003e IO TCP",
        "fct-source": "src/Network-BERT-Transport.html#tcpClient",
        "fct-type": "function",
        "title": "tcpClient"
      },
      "index": {
        "description": "Establish connection to the TCP server and return the resulting transport It can be used to make multiple requests",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "tcpClient",
        "normalized": "HostName-\u003ePortNumber-\u003eIO TCP",
        "package": "bert",
        "partial": "Client",
        "signature": "HostName-\u003ePortNumber-\u003eIO TCP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:tcpServer",
      "description": {
        "fct-descr": "\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eTCPServer\u003c/a\u003e\u003c/code\u003e constructor, listens on all local interfaces.\n\u003c/p\u003e\u003cp\u003eIf you want to bind only to some of the interfaces, create the socket\n manually using the functions from \u003ca\u003eNetwork.Socket\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.BERT.Transport",
        "fct-package": "bert",
        "fct-signature": "PortNumber -\u003e IO TCPServer",
        "fct-source": "src/Network-BERT-Transport.html#tcpServer",
        "fct-type": "function",
        "title": "tcpServer"
      },
      "index": {
        "description": "simple TCPServer constructor listens on all local interfaces If you want to bind only to some of the interfaces create the socket manually using the functions from Network.Socket",
        "hierarchy": "Network BERT Transport",
        "module": "Network.BERT.Transport",
        "name": "tcpServer",
        "normalized": "PortNumber-\u003eIO TCPServer",
        "package": "bert",
        "partial": "Server",
        "signature": "PortNumber-\u003eIO TCPServer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERT-RPC client (\u003ca\u003ehttp://bert-rpc.org/\u003c/a\u003e). See \u003ca\u003eNetwork.BERT.Client\u003c/a\u003e and \u003ca\u003eNetwork.BERT.Server\u003c/a\u003e for more details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.BERT",
        "fct-package": "bert",
        "fct-signature": "module",
        "fct-source": "src/Network-BERT.html",
        "fct-type": "module",
        "title": "BERT"
      },
      "index": {
        "description": "BERT-RPC client http bert-rpc.org See Network.BERT.Client and Network.BERT.Server for more details",
        "hierarchy": "Network BERT",
        "module": "Network.BERT",
        "name": "BERT",
        "normalized": "",
        "package": "bert",
        "partial": "BERT",
        "signature": ""
      }
    }
  }
]