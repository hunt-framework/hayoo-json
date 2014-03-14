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
        "word": "querystring-pickle"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "Pickle",
          "package": "querystring-pickle",
          "source": "src/Network-HTTP-QueryString-Pickle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "Pickle",
          "package": "querystring-pickle",
          "partial": "Pickle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that has a pairing of pickler + unpickler.\n\u003c/p\u003e\u003cp\u003eUsing the \u003ccode\u003eDeriveGeneric\u003c/code\u003e language extension, this class specifies a\n default generic implementation using \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Foo = Foo { fooIntX :: Int, fooIntY :: Int } deriving (Generic)\n\ninstance IsQuery Foo\n\u003c/pre\u003e\u003cp\u003eNote that you can parameterise some of the options to \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e\n by specifying an implementation instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe previous example:\n\u003c/p\u003e\u003cpre\u003e\n instance IsQuery Foo where\n     queryPickler = \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultQueryOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eMore examples of creating \u003ccode\u003e\u003ca\u003equeryPickler\u003c/a\u003e\u003c/code\u003e implementations can be found in the\n \u003ccode\u003eREADME\u003c/code\u003e or in the \u003ccode\u003etests\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "IsQuery",
          "package": "querystring-pickle",
          "source": "src/Network-HTTP-QueryString-Pickle.html#IsQuery",
          "type": "class"
        },
        "index": {
          "description": "type that has pairing of pickler unpickler Using the DeriveGeneric language extension this class specifies default generic implementation using genericQueryPickler For example LANGUAGE DeriveGeneric import GHC.Generics data Foo Foo fooIntX Int fooIntY Int deriving Generic instance IsQuery Foo Note that you can parameterise some of the options to genericQueryPickler by specifying an implementation instead of using DefaultSignatures The previous example instance IsQuery Foo where queryPickler genericQueryPickler defaultQueryOptions More examples of creating queryPickler implementations can be found in the README or in the tests",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "IsQuery",
          "package": "querystring-pickle",
          "partial": "Is Query",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#t:IsQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal tree representation for queries.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "Query",
          "package": "querystring-pickle",
          "source": "src/Network-HTTP-QueryString-Pickle.html#Query",
          "type": "data"
        },
        "index": {
          "description": "Internal tree representation for queries",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "Query",
          "package": "querystring-pickle",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e to parameterise how constructor and record\n field labels are un/pickled.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003eimport GHC.Generics\n\ndata Bar { barThisIsAByteString :: ByteString } deriving (Generic)\n\ninstance IsQuery Foo where\n     queryPickler = \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e $ Options\n         { queryCtorModifier  = id\n         , queryFieldModifier = dropWhile isLower\n         }\n\u003c/pre\u003e\u003cp\u003eWould remove \u003ccode\u003ebar\u003c/code\u003e from the record field \u003ccode\u003ebarThisIsAByteString\u003c/code\u003e so the resulting\n pair for that field in the association list would be \u003ccode\u003e(ThisIsAByteString, n :: Int)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe above example is how \u003ccode\u003e\u003ca\u003edefaultQueryOptions\u003c/a\u003e\u003c/code\u003e behaves.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "QueryOptions",
          "package": "querystring-pickle",
          "source": "src/Network-HTTP-QueryString-Pickle.html#QueryOptions",
          "type": "data"
        },
        "index": {
          "description": "Options for genericQueryPickler to parameterise how constructor and record field labels are un pickled For example import GHC.Generics data Bar barThisIsAByteString ByteString deriving Generic instance IsQuery Foo where queryPickler genericQueryPickler Options queryCtorModifier id queryFieldModifier dropWhile isLower Would remove bar from the record field barThisIsAByteString so the resulting pair for that field in the association list would be ThisIsAByteString Int The above example is how defaultQueryOptions behaves",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "QueryOptions",
          "package": "querystring-pickle",
          "partial": "Query Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#t:QueryOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePairing of pickler to unpickler.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "QueryPU",
          "package": "querystring-pickle",
          "source": "src/Network-HTTP-QueryString-Pickle.html#QueryPU",
          "type": "data"
        },
        "index": {
          "description": "Pairing of pickler to unpickler",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "QueryPU",
          "package": "querystring-pickle",
          "partial": "Query PU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#t:QueryPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "List",
          "package": "querystring-pickle",
          "signature": "List [Query]",
          "source": "src/Network-HTTP-QueryString-Pickle.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "List",
          "normalized": "List[Query]",
          "package": "querystring-pickle",
          "partial": "List",
          "signature": "List[Query]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "Pair",
          "package": "querystring-pickle",
          "signature": "Pair ByteString Query",
          "source": "src/Network-HTTP-QueryString-Pickle.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "Pair",
          "package": "querystring-pickle",
          "partial": "Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "QueryOptions",
          "package": "querystring-pickle",
          "signature": "QueryOptions",
          "source": "src/Network-HTTP-QueryString-Pickle.html#QueryOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "QueryOptions",
          "package": "querystring-pickle",
          "partial": "Query Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:QueryOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "QueryPU",
          "package": "querystring-pickle",
          "signature": "QueryPU",
          "source": "src/Network-HTTP-QueryString-Pickle.html#QueryPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "QueryPU",
          "package": "querystring-pickle",
          "partial": "Query PU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:QueryPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "Value",
          "package": "querystring-pickle",
          "signature": "Value ByteString",
          "source": "src/Network-HTTP-QueryString-Pickle.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "Value",
          "package": "querystring-pickle",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper to decode a query string to an association list.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "decodeQuery",
          "package": "querystring-pickle",
          "signature": "(ByteString -\u003e ByteString)-\u003e ByteString-\u003e [(ByteString, ByteString)]",
          "type": "function"
        },
        "index": {
          "description": "Helper to decode query string to an association list",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "decodeQuery",
          "normalized": "(ByteString-\u003eByteString)-\u003eByteString-\u003e[(ByteString,ByteString)]",
          "package": "querystring-pickle",
          "partial": "Query",
          "signature": "(ByteString-\u003eByteString)-\u003eByteString-\u003e[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:decodeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrips lowercase prefixes from record fields.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "defaultQueryOptions",
          "package": "querystring-pickle",
          "signature": "QueryOptions",
          "source": "src/Network-HTTP-QueryString-Pickle.html#defaultQueryOptions",
          "type": "function"
        },
        "index": {
          "description": "Strips lowercase prefixes from record fields",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "defaultQueryOptions",
          "package": "querystring-pickle",
          "partial": "Query Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:defaultQueryOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper to encode an association list as a single canonical query string.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "encodeQuery",
          "package": "querystring-pickle",
          "signature": "(ByteString -\u003e ByteString)-\u003e [(ByteString, ByteString)]-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Helper to encode an association list as single canonical query string",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "encodeQuery",
          "normalized": "(ByteString-\u003eByteString)-\u003e[(ByteString,ByteString)]-\u003eByteString",
          "package": "querystring-pickle",
          "partial": "Query",
          "signature": "(ByteString-\u003eByteString)-\u003e[(ByteString,ByteString)]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:encodeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpickle an association list to an \u003ccode\u003e\u003ca\u003eIsQuery\u003c/a\u003e\u003c/code\u003e type, returning an error\n message when unpickling fails.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "fromQuery",
          "package": "querystring-pickle",
          "signature": "[(ByteString, ByteString)] -\u003e Either String a",
          "source": "src/Network-HTTP-QueryString-Pickle.html#fromQuery",
          "type": "function"
        },
        "index": {
          "description": "Unpickle an association list to an IsQuery type returning an error message when unpickling fails",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "fromQuery",
          "normalized": "[(ByteString,ByteString)]-\u003eEither String a",
          "package": "querystring-pickle",
          "partial": "Query",
          "signature": "[(ByteString,ByteString)]-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:fromQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "genericQueryPickler",
          "package": "querystring-pickle",
          "signature": "QueryOptions -\u003e PU x",
          "source": "src/Network-HTTP-QueryString-Pickle.html#genericQueryPickler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "genericQueryPickler",
          "normalized": "QueryOptions-\u003ePU a",
          "package": "querystring-pickle",
          "partial": "Query Pickler",
          "signature": "QueryOptions-\u003ePU x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:genericQueryPickler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrips lowercase prefixes from record fields and subsequently lowercases\n the remaining identifier.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "loweredQueryOptions",
          "package": "querystring-pickle",
          "signature": "QueryOptions",
          "source": "src/Network-HTTP-QueryString-Pickle.html#loweredQueryOptions",
          "type": "function"
        },
        "index": {
          "description": "Strips lowercase prefixes from record fields and subsequently lowercases the remaining identifier",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "loweredQueryOptions",
          "package": "querystring-pickle",
          "partial": "Query Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:loweredQueryOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "pickle",
          "package": "querystring-pickle",
          "signature": "a -\u003e Query",
          "source": "src/Network-HTTP-QueryString-Pickle.html#QueryPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "pickle",
          "normalized": "a-\u003eQuery",
          "package": "querystring-pickle",
          "signature": "a-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:pickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpDefault",
          "package": "querystring-pickle",
          "signature": "a -\u003e PU a -\u003e PU a",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpDefault",
          "normalized": "a-\u003ePU a-\u003ePU a",
          "package": "querystring-pickle",
          "partial": "Default",
          "signature": "a-\u003ePU a-\u003ePU a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpEither",
          "package": "querystring-pickle",
          "signature": "PU a -\u003e PU b -\u003e PU (Either a b)",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpEither",
          "normalized": "PU a-\u003ePU b-\u003ePU(Either a b)",
          "package": "querystring-pickle",
          "partial": "Either",
          "signature": "PU a-\u003ePU b-\u003ePU(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpElem",
          "package": "querystring-pickle",
          "signature": "ByteString -\u003e PU a -\u003e PU a",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpElem",
          "normalized": "ByteString-\u003ePU a-\u003ePU a",
          "package": "querystring-pickle",
          "partial": "Elem",
          "signature": "ByteString-\u003ePU a-\u003ePU a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpLift",
          "package": "querystring-pickle",
          "signature": "a -\u003e PU a",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpLift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpLift",
          "normalized": "a-\u003ePU a",
          "package": "querystring-pickle",
          "partial": "Lift",
          "signature": "a-\u003ePU a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpList",
          "package": "querystring-pickle",
          "signature": "PU a -\u003e PU [a]",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpList",
          "normalized": "PU a-\u003ePU[a]",
          "package": "querystring-pickle",
          "partial": "List",
          "signature": "PU a-\u003ePU[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpOption",
          "package": "querystring-pickle",
          "signature": "PU a -\u003e PU (Maybe a)",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpOption",
          "normalized": "PU a-\u003ePU(Maybe a)",
          "package": "querystring-pickle",
          "partial": "Option",
          "signature": "PU a-\u003ePU(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpOrdinalList",
          "package": "querystring-pickle",
          "signature": "PU a -\u003e PU [a]",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpOrdinalList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpOrdinalList",
          "normalized": "PU a-\u003ePU[a]",
          "package": "querystring-pickle",
          "partial": "Ordinal List",
          "signature": "PU a-\u003ePU[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpOrdinalList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpPair",
          "package": "querystring-pickle",
          "signature": "PU a -\u003e PU b -\u003e PU (a, b)",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpPair",
          "normalized": "PU a-\u003ePU b-\u003ePU(a,b)",
          "package": "querystring-pickle",
          "partial": "Pair",
          "signature": "PU a-\u003ePU b-\u003ePU(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpPrim",
          "package": "querystring-pickle",
          "signature": "PU a",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpPrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpPrim",
          "package": "querystring-pickle",
          "partial": "Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpSum",
          "package": "querystring-pickle",
          "signature": "PU (f r) -\u003e PU (g r) -\u003e PU ((f :+: g) r)",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpSum",
          "normalized": "PU(a b)-\u003ePU(c b)-\u003ePU((a c)b)",
          "package": "querystring-pickle",
          "partial": "Sum",
          "signature": "PU(f r)-\u003ePU(g r)-\u003ePU((f g)r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpWrap",
          "package": "querystring-pickle",
          "signature": "(a -\u003e b, b -\u003e a) -\u003e PU a -\u003e PU b",
          "source": "src/Network-HTTP-QueryString-Pickle.html#qpWrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "qpWrap",
          "normalized": "(a-\u003eb,b-\u003ea)-\u003ePU a-\u003ePU b",
          "package": "querystring-pickle",
          "partial": "Wrap",
          "signature": "(a-\u003eb,b-\u003ea)-\u003ePU a-\u003ePU b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction applied to constructor tags.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "queryCtorModifier",
          "package": "querystring-pickle",
          "signature": "String -\u003e String",
          "source": "src/Network-HTTP-QueryString-Pickle.html#QueryOptions",
          "type": "function"
        },
        "index": {
          "description": "Function applied to constructor tags",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "queryCtorModifier",
          "normalized": "String-\u003eString",
          "package": "querystring-pickle",
          "partial": "Ctor Modifier",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:queryCtorModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction applied to record field labels.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "queryFieldModifier",
          "package": "querystring-pickle",
          "signature": "String -\u003e String",
          "source": "src/Network-HTTP-QueryString-Pickle.html#QueryOptions",
          "type": "function"
        },
        "index": {
          "description": "Function applied to record field labels",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "queryFieldModifier",
          "normalized": "String-\u003eString",
          "package": "querystring-pickle",
          "partial": "Field Modifier",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:queryFieldModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "queryPickler",
          "package": "querystring-pickle",
          "signature": "PU a",
          "source": "src/Network-HTTP-QueryString-Pickle.html#queryPickler",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "queryPickler",
          "package": "querystring-pickle",
          "partial": "Pickler",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:queryPickler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePickle a data type with an \u003ccode\u003e\u003ca\u003eIsQuery\u003c/a\u003e\u003c/code\u003e instance to an association list.\n\u003c/p\u003e",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "toQuery",
          "package": "querystring-pickle",
          "signature": "a -\u003e [(ByteString, ByteString)]",
          "source": "src/Network-HTTP-QueryString-Pickle.html#toQuery",
          "type": "function"
        },
        "index": {
          "description": "Pickle data type with an IsQuery instance to an association list",
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "toQuery",
          "normalized": "a-\u003e[(ByteString,ByteString)]",
          "package": "querystring-pickle",
          "partial": "Query",
          "signature": "a-\u003e[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:toQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "unpickle",
          "package": "querystring-pickle",
          "signature": "Query -\u003e Either String a",
          "source": "src/Network-HTTP-QueryString-Pickle.html#QueryPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString Pickle",
          "module": "Network.HTTP.QueryString.Pickle",
          "name": "unpickle",
          "normalized": "Query-\u003eEither String a",
          "package": "querystring-pickle",
          "signature": "Query-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:unpickle"
      }
    }
  ]
]