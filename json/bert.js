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
        "word": "bert"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERP (BERT packets) support.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BERT.Packet",
          "name": "Packet",
          "package": "bert",
          "source": "src/Data-BERT-Packet.html",
          "type": "module"
        },
        "index": {
          "description": "BERP BERT packets support",
          "hierarchy": "Data BERT Packet",
          "module": "Data.BERT.Packet",
          "name": "Packet",
          "package": "bert",
          "partial": "Packet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Packet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single BERP. Little more than a wrapper for a term.\n\u003c/p\u003e",
          "module": "Data.BERT.Packet",
          "name": "Packet",
          "package": "bert",
          "source": "src/Data-BERT-Packet.html#Packet",
          "type": "data"
        },
        "index": {
          "description": "single BERP Little more than wrapper for term",
          "hierarchy": "Data BERT Packet",
          "module": "Data.BERT.Packet",
          "name": "Packet",
          "package": "bert",
          "partial": "Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Packet.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Packet",
          "name": "Packet",
          "package": "bert",
          "signature": "Packet Term",
          "source": "src/Data-BERT-Packet.html#Packet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Packet",
          "module": "Data.BERT.Packet",
          "name": "Packet",
          "package": "bert",
          "partial": "Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Packet.html#v:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Packet",
          "name": "fromPacket",
          "package": "bert",
          "signature": "Packet -\u003e Term",
          "source": "src/Data-BERT-Packet.html#fromPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Packet",
          "module": "Data.BERT.Packet",
          "name": "fromPacket",
          "normalized": "Packet-\u003eTerm",
          "package": "bert",
          "partial": "Packet",
          "signature": "Packet-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Packet.html#v:fromPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse (simple) BERTs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BERT.Parser",
          "name": "Parser",
          "package": "bert",
          "source": "src/Data-BERT-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parse simple BERTs",
          "hierarchy": "Data BERT Parser",
          "module": "Data.BERT.Parser",
          "name": "Parser",
          "package": "bert",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a simple BERT (erlang) term from a string in the erlang\n grammar. Does not attempt to decompose complex terms.\n\u003c/p\u003e",
          "module": "[\"Data.BERT.Parser\",\"Data.BERT.Term\"]",
          "name": "parseTerm",
          "package": "bert",
          "signature": "String -\u003e Either ParseError Term",
          "source": "src/Data-BERT-Parser.html#parseTerm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bert/docs/Data-BERT-Parser.html#v:parseTerm\",\"http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#v:parseTerm\"]"
        },
        "index": {
          "description": "Parse simple BERT erlang term from string in the erlang grammar Does not attempt to decompose complex terms",
          "hierarchy": "Data BERT Parser",
          "module": "Data.BERT.Parser",
          "name": "parseTerm",
          "normalized": "String-\u003eEither ParseError Term",
          "package": "bert",
          "partial": "Term",
          "signature": "String-\u003eEither ParseError Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Parser.html#v:parseTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefine BERT terms their binary encoding & decoding and a typeclass\n for converting Haskell values to BERT terms and back.\n\u003c/p\u003e\u003cp\u003eWe define a number of convenient instances for \u003ccode\u003e\u003ca\u003eBERT\u003c/a\u003e\u003c/code\u003e. Users will\n probably want to define their own instances for composite types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BERT.Term",
          "name": "Term",
          "package": "bert",
          "source": "src/Data-BERT-Term.html",
          "type": "module"
        },
        "index": {
          "description": "Define BERT terms their binary encoding decoding and typeclass for converting Haskell values to BERT terms and back We define number of convenient instances for BERT Users will probably want to define their own instances for composite types",
          "hierarchy": "Data BERT Term",
          "module": "Data.BERT.Term",
          "name": "Term",
          "package": "bert",
          "partial": "Term",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Term",
          "name": "BERT",
          "package": "bert",
          "source": "src/Data-BERT-Term.html#BERT",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data BERT Term",
          "module": "Data.BERT.Term",
          "name": "BERT",
          "package": "bert",
          "partial": "BERT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#t:BERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to read a haskell value from a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BERT.Term",
          "name": "readBERT",
          "package": "bert",
          "signature": "Term -\u003e Either String a",
          "source": "src/Data-BERT-Term.html#readBERT",
          "type": "method"
        },
        "index": {
          "description": "Attempt to read haskell value from Term",
          "hierarchy": "Data BERT Term",
          "module": "Data.BERT.Term",
          "name": "readBERT",
          "normalized": "Term-\u003eEither String a",
          "package": "bert",
          "partial": "BERT",
          "signature": "Term-\u003eEither String a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#v:readBERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e from a Haskell value.\n\u003c/p\u003e",
          "module": "Data.BERT.Term",
          "name": "showBERT",
          "package": "bert",
          "signature": "a -\u003e Term",
          "source": "src/Data-BERT-Term.html#showBERT",
          "type": "method"
        },
        "index": {
          "description": "Introduce Term from Haskell value",
          "hierarchy": "Data BERT Term",
          "module": "Data.BERT.Term",
          "name": "showBERT",
          "normalized": "a-\u003eTerm",
          "package": "bert",
          "partial": "BERT",
          "signature": "a-\u003eTerm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#v:showBERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Term",
          "name": "showTerm",
          "package": "bert",
          "signature": "Term -\u003e String",
          "source": "src/Data-BERT-Term.html#showTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Term",
          "module": "Data.BERT.Term",
          "name": "showTerm",
          "normalized": "Term-\u003eString",
          "package": "bert",
          "partial": "Term",
          "signature": "Term-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Term.html#v:showTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Term type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BERT.Types",
          "name": "Types",
          "package": "bert",
          "source": "src/Data-BERT-Types.html",
          "type": "module"
        },
        "index": {
          "description": "The Term type",
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "Types",
          "package": "bert",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single BERT term.\n\u003c/p\u003e",
          "module": "Data.BERT.Types",
          "name": "Term",
          "package": "bert",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "data"
        },
        "index": {
          "description": "single BERT term",
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "Term",
          "package": "bert",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "AtomTerm",
          "package": "bert",
          "signature": "AtomTerm String",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "AtomTerm",
          "package": "bert",
          "partial": "Atom Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:AtomTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "BigbigintTerm",
          "package": "bert",
          "signature": "BigbigintTerm Integer",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "BigbigintTerm",
          "package": "bert",
          "partial": "Bigbigint Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BigbigintTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "BigintTerm",
          "package": "bert",
          "signature": "BigintTerm Integer",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "BigintTerm",
          "package": "bert",
          "partial": "Bigint Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BigintTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "BinaryTerm",
          "package": "bert",
          "signature": "BinaryTerm ByteString",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "BinaryTerm",
          "package": "bert",
          "partial": "Binary Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BinaryTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "BoolTerm",
          "package": "bert",
          "signature": "BoolTerm Bool",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "BoolTerm",
          "package": "bert",
          "partial": "Bool Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BoolTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "BytelistTerm",
          "package": "bert",
          "signature": "BytelistTerm ByteString",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "BytelistTerm",
          "package": "bert",
          "partial": "Bytelist Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:BytelistTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "DictionaryTerm",
          "package": "bert",
          "signature": "DictionaryTerm [(Term, Term)]",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "DictionaryTerm",
          "normalized": "DictionaryTerm[(Term,Term)]",
          "package": "bert",
          "partial": "Dictionary Term",
          "signature": "DictionaryTerm[(Term,Term)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:DictionaryTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "FloatTerm",
          "package": "bert",
          "signature": "FloatTerm Float",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "FloatTerm",
          "package": "bert",
          "partial": "Float Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:FloatTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "IntTerm",
          "package": "bert",
          "signature": "IntTerm Int",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "IntTerm",
          "package": "bert",
          "partial": "Int Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:IntTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "ListTerm",
          "package": "bert",
          "signature": "ListTerm [Term]",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "ListTerm",
          "normalized": "ListTerm[Term]",
          "package": "bert",
          "partial": "List Term",
          "signature": "ListTerm[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:ListTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "NilTerm",
          "package": "bert",
          "signature": "NilTerm",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "NilTerm",
          "package": "bert",
          "partial": "Nil Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:NilTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "RegexTerm",
          "package": "bert",
          "signature": "RegexTerm String [String]",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "RegexTerm",
          "normalized": "RegexTerm String[String]",
          "package": "bert",
          "partial": "Regex Term",
          "signature": "RegexTerm String[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:RegexTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "TimeTerm",
          "package": "bert",
          "signature": "TimeTerm UTCTime",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "TimeTerm",
          "package": "bert",
          "partial": "Time Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:TimeTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BERT.Types",
          "name": "TupleTerm",
          "package": "bert",
          "signature": "TupleTerm [Term]",
          "source": "src/Data-BERT-Types.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BERT Types",
          "module": "Data.BERT.Types",
          "name": "TupleTerm",
          "normalized": "TupleTerm[Term]",
          "package": "bert",
          "partial": "Tuple Term",
          "signature": "TupleTerm[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT-Types.html#v:TupleTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERT (Erlang terms) implementation. See \u003ca\u003ehttp://bert-rpc.org/\u003c/a\u003e and\n \u003ca\u003ehttp://erlang.org/doc/apps/erts/erl_ext_dist.html\u003c/a\u003e for more\n details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BERT",
          "name": "BERT",
          "package": "bert",
          "source": "src/Data-BERT.html",
          "type": "module"
        },
        "index": {
          "description": "BERT Erlang terms implementation See http bert-rpc.org and http erlang.org doc apps erts erl ext dist.html for more details",
          "hierarchy": "Data BERT",
          "module": "Data.BERT",
          "name": "BERT",
          "package": "bert",
          "partial": "BERT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Data-BERT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERT-RPC client (\u003ca\u003ehttp://bert-rpc.org/\u003c/a\u003e). This implements the client RPC call logic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.BERT.Client",
          "name": "Client",
          "package": "bert",
          "source": "src/Network-BERT-Client.html",
          "type": "module"
        },
        "index": {
          "description": "BERT-RPC client http bert-rpc.org This implements the client RPC call logic",
          "hierarchy": "Network BERT Client",
          "module": "Network.BERT.Client",
          "name": "Client",
          "package": "bert",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience type for \u003ccode\u003ecall\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.BERT.Client",
          "name": "Call",
          "package": "bert",
          "source": "src/Network-BERT-Client.html#Call",
          "type": "type"
        },
        "index": {
          "description": "Convenience type for call",
          "hierarchy": "Network BERT Client",
          "module": "Network.BERT.Client",
          "name": "Call",
          "package": "bert",
          "partial": "Call",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#t:Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Client",
          "name": "Error",
          "package": "bert",
          "source": "src/Network-BERT-Client.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network BERT Client",
          "module": "Network.BERT.Client",
          "name": "Error",
          "package": "bert",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Client",
          "name": "ClientError",
          "package": "bert",
          "signature": "ClientError String",
          "source": "src/Network-BERT-Client.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BERT Client",
          "module": "Network.BERT.Client",
          "name": "ClientError",
          "package": "bert",
          "partial": "Client Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#v:ClientError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Client",
          "name": "ServerError",
          "package": "bert",
          "signature": "ServerError Term",
          "source": "src/Network-BERT-Client.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BERT Client",
          "module": "Network.BERT.Client",
          "name": "ServerError",
          "package": "bert",
          "partial": "Server Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#v:ServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the \u003ccode\u003e{mod, func, args}\u003c/code\u003e synchronously on the endpoint\n defined by \u003ccode\u003etransport\u003c/code\u003e, returning the results of the call or an\n error.\n\u003c/p\u003e",
          "module": "Network.BERT.Client",
          "name": "call",
          "package": "bert",
          "signature": "t -\u003e String -\u003e String -\u003e [a] -\u003e Call b",
          "source": "src/Network-BERT-Client.html#call",
          "type": "function"
        },
        "index": {
          "description": "Call the mod func args synchronously on the endpoint defined by transport returning the results of the call or an error",
          "hierarchy": "Network BERT Client",
          "module": "Network.BERT.Client",
          "name": "call",
          "normalized": "a-\u003eString-\u003eString-\u003e[b]-\u003eCall c",
          "package": "bert",
          "signature": "t-\u003eString-\u003eString-\u003e[a]-\u003eCall b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablish a connection to the TCP server and return the resulting\n transport. It can be used to make multiple requests.\n\u003c/p\u003e",
          "module": "[\"Network.BERT.Client\",\"Network.BERT.Transport\"]",
          "name": "tcpClient",
          "package": "bert",
          "signature": "HostName -\u003e PortNumber -\u003e IO TCP",
          "source": "src/Network-BERT-Transport.html#tcpClient",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#v:tcpClient\",\"http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:tcpClient\"]"
        },
        "index": {
          "description": "Establish connection to the TCP server and return the resulting transport It can be used to make multiple requests",
          "hierarchy": "Network BERT Client",
          "module": "Network.BERT.Client",
          "name": "tcpClient",
          "normalized": "HostName-\u003ePortNumber-\u003eIO TCP",
          "package": "bert",
          "partial": "Client",
          "signature": "HostName-\u003ePortNumber-\u003eIO TCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Client.html#v:tcpClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERT-RPC server (\u003ca\u003ehttp://bert-rpc.org/\u003c/a\u003e). This implements the\n client RPC call/reply logic. Only synchronous requests are\n supported at this time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.BERT.Server",
          "name": "Server",
          "package": "bert",
          "source": "src/Network-BERT-Server.html",
          "type": "module"
        },
        "index": {
          "description": "BERT-RPC server http bert-rpc.org This implements the client RPC call reply logic Only synchronous requests are supported at this time",
          "hierarchy": "Network BERT Server",
          "module": "Network.BERT.Server",
          "name": "Server",
          "package": "bert",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Server",
          "name": "DispatchResult",
          "package": "bert",
          "source": "src/Network-BERT-Server.html#DispatchResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network BERT Server",
          "module": "Network.BERT.Server",
          "name": "DispatchResult",
          "package": "bert",
          "partial": "Dispatch Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#t:DispatchResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Server",
          "name": "NoSuchFunction",
          "package": "bert",
          "signature": "NoSuchFunction",
          "source": "src/Network-BERT-Server.html#DispatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BERT Server",
          "module": "Network.BERT.Server",
          "name": "NoSuchFunction",
          "package": "bert",
          "partial": "No Such Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:NoSuchFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Server",
          "name": "NoSuchModule",
          "package": "bert",
          "signature": "NoSuchModule",
          "source": "src/Network-BERT-Server.html#DispatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BERT Server",
          "module": "Network.BERT.Server",
          "name": "NoSuchModule",
          "package": "bert",
          "partial": "No Such Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:NoSuchModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Server",
          "name": "Success",
          "package": "bert",
          "signature": "Success Term",
          "source": "src/Network-BERT-Server.html#DispatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BERT Server",
          "module": "Network.BERT.Server",
          "name": "Success",
          "package": "bert",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Server",
          "name": "Undesignated",
          "package": "bert",
          "signature": "Undesignated String",
          "source": "src/Network-BERT-Server.html#DispatchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BERT Server",
          "module": "Network.BERT.Server",
          "name": "Undesignated",
          "package": "bert",
          "partial": "Undesignated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:Undesignated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe from the given transport (forever), handling each request\n with the given dispatch function in a new thread.\n\u003c/p\u003e",
          "module": "Network.BERT.Server",
          "name": "serve",
          "package": "bert",
          "signature": "s -\u003e (String -\u003e String -\u003e [Term] -\u003e IO DispatchResult) -\u003e IO ()",
          "source": "src/Network-BERT-Server.html#serve",
          "type": "function"
        },
        "index": {
          "description": "Serve from the given transport forever handling each request with the given dispatch function in new thread",
          "hierarchy": "Network BERT Server",
          "module": "Network.BERT.Server",
          "name": "serve",
          "normalized": "a-\u003e(String-\u003eString-\u003e[Term]-\u003eIO DispatchResult)-\u003eIO()",
          "package": "bert",
          "signature": "s-\u003e(String-\u003eString-\u003e[Term]-\u003eIO DispatchResult)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eTCPServer\u003c/a\u003e\u003c/code\u003e constructor, listens on all local interfaces.\n\u003c/p\u003e\u003cp\u003eIf you want to bind only to some of the interfaces, create the socket\n manually using the functions from \u003ca\u003eNetwork.Socket\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.BERT.Server\",\"Network.BERT.Transport\"]",
          "name": "tcpServer",
          "package": "bert",
          "signature": "PortNumber -\u003e IO TCPServer",
          "source": "src/Network-BERT-Transport.html#tcpServer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:tcpServer\",\"http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:tcpServer\"]"
        },
        "index": {
          "description": "simple TCPServer constructor listens on all local interfaces If you want to bind only to some of the interfaces create the socket manually using the functions from Network.Socket",
          "hierarchy": "Network BERT Server",
          "module": "Network.BERT.Server",
          "name": "tcpServer",
          "normalized": "PortNumber-\u003eIO TCPServer",
          "package": "bert",
          "partial": "Server",
          "signature": "PortNumber-\u003eIO TCPServer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Server.html#v:tcpServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnderlying transport abstraction\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.BERT.Transport",
          "name": "Transport",
          "package": "bert",
          "source": "src/Network-BERT-Transport.html",
          "type": "module"
        },
        "index": {
          "description": "Underlying transport abstraction",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "Transport",
          "package": "bert",
          "partial": "Transport",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to send packets to the peer\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "SendPacketFn",
          "package": "bert",
          "source": "src/Network-BERT-Transport.html#SendPacketFn",
          "type": "type"
        },
        "index": {
          "description": "function to send packets to the peer",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "SendPacketFn",
          "package": "bert",
          "partial": "Send Packet Fn",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:SendPacketFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Transport",
          "name": "Server",
          "package": "bert",
          "source": "src/Network-BERT-Transport.html#Server",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "Server",
          "package": "bert",
          "partial": "Server",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TCP transport\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "TCP",
          "package": "bert",
          "source": "src/Network-BERT-Transport.html#TCP",
          "type": "data"
        },
        "index": {
          "description": "The TCP transport",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "TCP",
          "package": "bert",
          "partial": "TCP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:TCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TCP server\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "TCPServer",
          "package": "bert",
          "source": "src/Network-BERT-Transport.html#TCPServer",
          "type": "data"
        },
        "index": {
          "description": "The TCP server",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "TCPServer",
          "package": "bert",
          "partial": "TCPServer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:TCPServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class for transports\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "Transport",
          "package": "bert",
          "source": "src/Network-BERT-Transport.html#Transport",
          "type": "class"
        },
        "index": {
          "description": "The class for transports",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "Transport",
          "package": "bert",
          "partial": "Transport",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transport monad allows receiving packets through the conduit,\n and sending functions via the provided \u003ccode\u003e\u003ca\u003eSendPacketFn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "TransportM",
          "package": "bert",
          "source": "src/Network-BERT-Transport.html#TransportM",
          "type": "type"
        },
        "index": {
          "description": "The transport monad allows receiving packets through the conduit and sending functions via the provided SendPacketFn",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "TransportM",
          "package": "bert",
          "partial": "Transport",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#t:TransportM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Transport",
          "name": "TCP",
          "package": "bert",
          "signature": "TCP",
          "source": "src/Network-BERT-Transport.html#TCP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "TCP",
          "package": "bert",
          "partial": "TCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:TCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Transport",
          "name": "TCPServer",
          "package": "bert",
          "signature": "TCPServer",
          "source": "src/Network-BERT-Transport.html#TCPServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "TCPServer",
          "package": "bert",
          "partial": "TCPServer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:TCPServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree any resources that the server has acquired (such as the\n listening socket)\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "cleanup",
          "package": "bert",
          "signature": "s -\u003e IO ()",
          "source": "src/Network-BERT-Transport.html#cleanup",
          "type": "method"
        },
        "index": {
          "description": "Free any resources that the server has acquired such as the listening socket",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "cleanup",
          "normalized": "a-\u003eIO()",
          "package": "bert",
          "signature": "s-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:cleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Transport",
          "name": "closeConnection",
          "package": "bert",
          "signature": "t -\u003e IO ()",
          "source": "src/Network-BERT-Transport.html#closeConnection",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "closeConnection",
          "normalized": "a-\u003eIO()",
          "package": "bert",
          "partial": "Connection",
          "signature": "t-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:closeConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe listening socket. Assumed to be bound but not listening yet.\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "getTcpListenSocket",
          "package": "bert",
          "signature": "Socket",
          "source": "src/Network-BERT-Transport.html#TCPServer",
          "type": "function"
        },
        "index": {
          "description": "The listening socket Assumed to be bound but not listening yet",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "getTcpListenSocket",
          "package": "bert",
          "partial": "Tcp Listen Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:getTcpListenSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe socket used for communication.\n\u003c/p\u003e\u003cp\u003eThe connection is assumed to be already established when this\n structure is passed in.\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "getTcpSocket",
          "package": "bert",
          "signature": "Socket",
          "source": "src/Network-BERT-Transport.html#TCP",
          "type": "function"
        },
        "index": {
          "description": "The socket used for communication The connection is assumed to be already established when this structure is passed in",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "getTcpSocket",
          "package": "bert",
          "partial": "Tcp Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:getTcpSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a term\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "recvt",
          "package": "bert",
          "signature": "TransportM (Maybe Term)",
          "source": "src/Network-BERT-Transport.html#recvt",
          "type": "function"
        },
        "index": {
          "description": "Receive term",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "recvt",
          "package": "bert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:recvt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action for every incoming term, until the connection is\n closed\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "recvtForever",
          "package": "bert",
          "signature": "(Term -\u003e TransportM a) -\u003e TransportM ()",
          "source": "src/Network-BERT-Transport.html#recvtForever",
          "type": "function"
        },
        "index": {
          "description": "Execute an action for every incoming term until the connection is closed",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "recvtForever",
          "normalized": "(Term-\u003eTransportM a)-\u003eTransportM()",
          "package": "bert",
          "partial": "Forever",
          "signature": "(Term-\u003eTransportM a)-\u003eTransportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:recvtForever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple address resolver\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "resolve",
          "package": "bert",
          "signature": "HostName -\u003e IO HostAddress",
          "source": "src/Network-BERT-Transport.html#resolve",
          "type": "function"
        },
        "index": {
          "description": "simple address resolver",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "resolve",
          "normalized": "HostName-\u003eIO HostAddress",
          "package": "bert",
          "signature": "HostName-\u003eIO HostAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method should listen for incoming requests, establish some\n sort of a connection (represented by the transport) and then invoke\n the handling function\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "runServer",
          "package": "bert",
          "signature": "s -\u003e (ServerTransport s -\u003e IO ()) -\u003e IO ()",
          "source": "src/Network-BERT-Transport.html#runServer",
          "type": "method"
        },
        "index": {
          "description": "This method should listen for incoming requests establish some sort of connection represented by the transport and then invoke the handling function",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "runServer",
          "normalized": "a-\u003e(ServerTransport a-\u003eIO())-\u003eIO()",
          "package": "bert",
          "partial": "Server",
          "signature": "s-\u003e(ServerTransport s-\u003eIO())-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:runServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BERT.Transport",
          "name": "runSession",
          "package": "bert",
          "signature": "t -\u003e TransportM a -\u003e IO a",
          "source": "src/Network-BERT-Transport.html#runSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "runSession",
          "normalized": "a-\u003eTransportM b-\u003eIO b",
          "package": "bert",
          "partial": "Session",
          "signature": "t-\u003eTransportM a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:runSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a term\n\u003c/p\u003e",
          "module": "Network.BERT.Transport",
          "name": "sendt",
          "package": "bert",
          "signature": "Term -\u003e TransportM ()",
          "source": "src/Network-BERT-Transport.html#sendt",
          "type": "function"
        },
        "index": {
          "description": "Send term",
          "hierarchy": "Network BERT Transport",
          "module": "Network.BERT.Transport",
          "name": "sendt",
          "normalized": "Term-\u003eTransportM()",
          "package": "bert",
          "signature": "Term-\u003eTransportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT-Transport.html#v:sendt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBERT-RPC client (\u003ca\u003ehttp://bert-rpc.org/\u003c/a\u003e). See \u003ca\u003eNetwork.BERT.Client\u003c/a\u003e and \u003ca\u003eNetwork.BERT.Server\u003c/a\u003e for more details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.BERT",
          "name": "BERT",
          "package": "bert",
          "source": "src/Network-BERT.html",
          "type": "module"
        },
        "index": {
          "description": "BERT-RPC client http bert-rpc.org See Network.BERT.Client and Network.BERT.Server for more details",
          "hierarchy": "Network BERT",
          "module": "Network.BERT",
          "name": "BERT",
          "package": "bert",
          "partial": "BERT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bert/docs/Network-BERT.html#"
      }
    }
  ]
]