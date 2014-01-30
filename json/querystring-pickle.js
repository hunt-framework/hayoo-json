[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html",
        "fct-type": "module",
        "title": "Pickle"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "Pickle",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Pickle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#t:IsQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA type that has a pairing of pickler + unpickler.\n\u003c/p\u003e\u003cp\u003eUsing the \u003ccode\u003eDeriveGeneric\u003c/code\u003e language extension, this class specifies a\n default generic implementation using \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Foo = Foo { fooIntX :: Int, fooIntY :: Int } deriving (Generic)\n\ninstance IsQuery Foo\n\u003c/pre\u003e\u003cp\u003eNote that you can parameterise some of the options to \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e\n by specifying an implementation instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe previous example:\n\u003c/p\u003e\u003cpre\u003e\n instance IsQuery Foo where\n     queryPickler = \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultQueryOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eMore examples of creating \u003ccode\u003e\u003ca\u003equeryPickler\u003c/a\u003e\u003c/code\u003e implementations can be found in the\n \u003ccode\u003eREADME\u003c/code\u003e or in the \u003ccode\u003etests\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "class",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#IsQuery",
        "fct-type": "class",
        "title": "IsQuery"
      },
      "index": {
        "description": "type that has pairing of pickler unpickler Using the DeriveGeneric language extension this class specifies default generic implementation using genericQueryPickler For example LANGUAGE DeriveGeneric import GHC.Generics data Foo Foo fooIntX Int fooIntY Int deriving Generic instance IsQuery Foo Note that you can parameterise some of the options to genericQueryPickler by specifying an implementation instead of using DefaultSignatures The previous example instance IsQuery Foo where queryPickler genericQueryPickler defaultQueryOptions More examples of creating queryPickler implementations can be found in the README or in the tests",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "IsQuery",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Is Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eInternal tree representation for queries.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "Internal tree representation for queries",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "Query",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#t:QueryOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e to parameterise how constructor and record\n field labels are un/pickled.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003eimport GHC.Generics\n\ndata Bar { barThisIsAByteString :: ByteString } deriving (Generic)\n\ninstance IsQuery Foo where\n     queryPickler = \u003ccode\u003e\u003ca\u003egenericQueryPickler\u003c/a\u003e\u003c/code\u003e $ Options\n         { queryCtorModifier  = id\n         , queryFieldModifier = dropWhile isLower\n         }\n\u003c/pre\u003e\u003cp\u003eWould remove \u003ccode\u003ebar\u003c/code\u003e from the record field \u003ccode\u003ebarThisIsAByteString\u003c/code\u003e so the resulting\n pair for that field in the association list would be \u003ccode\u003e(ThisIsAByteString, n :: Int)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe above example is how \u003ccode\u003e\u003ca\u003edefaultQueryOptions\u003c/a\u003e\u003c/code\u003e behaves.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#QueryOptions",
        "fct-type": "data",
        "title": "QueryOptions"
      },
      "index": {
        "description": "Options for genericQueryPickler to parameterise how constructor and record field labels are un pickled For example import GHC.Generics data Bar barThisIsAByteString ByteString deriving Generic instance IsQuery Foo where queryPickler genericQueryPickler Options queryCtorModifier id queryFieldModifier dropWhile isLower Would remove bar from the record field barThisIsAByteString so the resulting pair for that field in the association list would be ThisIsAByteString Int The above example is how defaultQueryOptions behaves",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "QueryOptions",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Query Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#t:QueryPU",
      "description": {
        "fct-descr": "\u003cp\u003ePairing of pickler to unpickler.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#QueryPU",
        "fct-type": "data",
        "title": "QueryPU"
      },
      "index": {
        "description": "Pairing of pickler to unpickler",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "QueryPU",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Query PU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:List",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "List [Query]",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#Query",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "List",
        "normalized": "List[Query]",
        "package": "querystring-pickle",
        "partial": "List",
        "signature": "List[Query]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:Pair",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "Pair ByteString Query",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#Query",
        "fct-type": "function",
        "title": "Pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "Pair",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:QueryOptions",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "QueryOptions",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#QueryOptions",
        "fct-type": "function",
        "title": "QueryOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "QueryOptions",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Query Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:QueryPU",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "QueryPU",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#QueryPU",
        "fct-type": "function",
        "title": "QueryPU"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "QueryPU",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Query PU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:Value",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "Value ByteString",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#Query",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "Value",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:decodeQuery",
      "description": {
        "fct-descr": "\u003cp\u003eHelper to decode a query string to an association list.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "(ByteString -\u003e ByteString)-\u003e ByteString-\u003e [(ByteString, ByteString)]",
        "fct-type": "function",
        "title": "decodeQuery"
      },
      "index": {
        "description": "Helper to decode query string to an association list",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "decodeQuery",
        "normalized": "(ByteString-\u003eByteString)-\u003eByteString-\u003e[(ByteString,ByteString)]",
        "package": "querystring-pickle",
        "partial": "Query",
        "signature": "(ByteString-\u003eByteString)-\u003eByteString-\u003e[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:defaultQueryOptions",
      "description": {
        "fct-descr": "\u003cp\u003eStrips lowercase prefixes from record fields.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "QueryOptions",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#defaultQueryOptions",
        "fct-type": "function",
        "title": "defaultQueryOptions"
      },
      "index": {
        "description": "Strips lowercase prefixes from record fields",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "defaultQueryOptions",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Query Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:encodeQuery",
      "description": {
        "fct-descr": "\u003cp\u003eHelper to encode an association list as a single canonical query string.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "(ByteString -\u003e ByteString)-\u003e [(ByteString, ByteString)]-\u003e ByteString",
        "fct-type": "function",
        "title": "encodeQuery"
      },
      "index": {
        "description": "Helper to encode an association list as single canonical query string",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "encodeQuery",
        "normalized": "(ByteString-\u003eByteString)-\u003e[(ByteString,ByteString)]-\u003eByteString",
        "package": "querystring-pickle",
        "partial": "Query",
        "signature": "(ByteString-\u003eByteString)-\u003e[(ByteString,ByteString)]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:fromQuery",
      "description": {
        "fct-descr": "\u003cp\u003eUnpickle an association list to an \u003ccode\u003e\u003ca\u003eIsQuery\u003c/a\u003e\u003c/code\u003e type, returning an error\n message when unpickling fails.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "[(ByteString, ByteString)] -\u003e Either String a",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#fromQuery",
        "fct-type": "function",
        "title": "fromQuery"
      },
      "index": {
        "description": "Unpickle an association list to an IsQuery type returning an error message when unpickling fails",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "fromQuery",
        "normalized": "[(ByteString,ByteString)]-\u003eEither String a",
        "package": "querystring-pickle",
        "partial": "Query",
        "signature": "[(ByteString,ByteString)]-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:genericQueryPickler",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "QueryOptions -\u003e PU x",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#genericQueryPickler",
        "fct-type": "function",
        "title": "genericQueryPickler"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "genericQueryPickler",
        "normalized": "QueryOptions-\u003ePU a",
        "package": "querystring-pickle",
        "partial": "Query Pickler",
        "signature": "QueryOptions-\u003ePU x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:loweredQueryOptions",
      "description": {
        "fct-descr": "\u003cp\u003eStrips lowercase prefixes from record fields and subsequently lowercases\n the remaining identifier.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "QueryOptions",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#loweredQueryOptions",
        "fct-type": "function",
        "title": "loweredQueryOptions"
      },
      "index": {
        "description": "Strips lowercase prefixes from record fields and subsequently lowercases the remaining identifier",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "loweredQueryOptions",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Query Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:pickle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "a -\u003e Query",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#QueryPU",
        "fct-type": "function",
        "title": "pickle"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "pickle",
        "normalized": "a-\u003eQuery",
        "package": "querystring-pickle",
        "partial": "",
        "signature": "a-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpDefault",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "a -\u003e PU a -\u003e PU a",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpDefault",
        "fct-type": "function",
        "title": "qpDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpDefault",
        "normalized": "a-\u003ePU a-\u003ePU a",
        "package": "querystring-pickle",
        "partial": "Default",
        "signature": "a-\u003ePU a-\u003ePU a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpEither",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "PU a -\u003e PU b -\u003e PU (Either a b)",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpEither",
        "fct-type": "function",
        "title": "qpEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpEither",
        "normalized": "PU a-\u003ePU b-\u003ePU(Either a b)",
        "package": "querystring-pickle",
        "partial": "Either",
        "signature": "PU a-\u003ePU b-\u003ePU(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpElem",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "ByteString -\u003e PU a -\u003e PU a",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpElem",
        "fct-type": "function",
        "title": "qpElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpElem",
        "normalized": "ByteString-\u003ePU a-\u003ePU a",
        "package": "querystring-pickle",
        "partial": "Elem",
        "signature": "ByteString-\u003ePU a-\u003ePU a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpLift",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "a -\u003e PU a",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpLift",
        "fct-type": "function",
        "title": "qpLift"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpLift",
        "normalized": "a-\u003ePU a",
        "package": "querystring-pickle",
        "partial": "Lift",
        "signature": "a-\u003ePU a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpList",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "PU a -\u003e PU [a]",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpList",
        "fct-type": "function",
        "title": "qpList"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpList",
        "normalized": "PU a-\u003ePU[a]",
        "package": "querystring-pickle",
        "partial": "List",
        "signature": "PU a-\u003ePU[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpOption",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "PU a -\u003e PU (Maybe a)",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpOption",
        "fct-type": "function",
        "title": "qpOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpOption",
        "normalized": "PU a-\u003ePU(Maybe a)",
        "package": "querystring-pickle",
        "partial": "Option",
        "signature": "PU a-\u003ePU(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpOrdinalList",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "PU a -\u003e PU [a]",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpOrdinalList",
        "fct-type": "function",
        "title": "qpOrdinalList"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpOrdinalList",
        "normalized": "PU a-\u003ePU[a]",
        "package": "querystring-pickle",
        "partial": "Ordinal List",
        "signature": "PU a-\u003ePU[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpPair",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "PU a -\u003e PU b -\u003e PU (a, b)",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpPair",
        "fct-type": "function",
        "title": "qpPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpPair",
        "normalized": "PU a-\u003ePU b-\u003ePU(a,b)",
        "package": "querystring-pickle",
        "partial": "Pair",
        "signature": "PU a-\u003ePU b-\u003ePU(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpPrim",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "PU a",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpPrim",
        "fct-type": "function",
        "title": "qpPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpPrim",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpSum",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "PU (f r) -\u003e PU (g r) -\u003e PU ((f :+: g) r)",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpSum",
        "fct-type": "function",
        "title": "qpSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpSum",
        "normalized": "PU(a b)-\u003ePU(c b)-\u003ePU((a c)b)",
        "package": "querystring-pickle",
        "partial": "Sum",
        "signature": "PU(f r)-\u003ePU(g r)-\u003ePU((f g)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:qpWrap",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "(a -\u003e b, b -\u003e a) -\u003e PU a -\u003e PU b",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#qpWrap",
        "fct-type": "function",
        "title": "qpWrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "qpWrap",
        "normalized": "(a-\u003eb,b-\u003ea)-\u003ePU a-\u003ePU b",
        "package": "querystring-pickle",
        "partial": "Wrap",
        "signature": "(a-\u003eb,b-\u003ea)-\u003ePU a-\u003ePU b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:queryCtorModifier",
      "description": {
        "fct-descr": "\u003cp\u003eFunction applied to constructor tags.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#QueryOptions",
        "fct-type": "function",
        "title": "queryCtorModifier"
      },
      "index": {
        "description": "Function applied to constructor tags",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "queryCtorModifier",
        "normalized": "String-\u003eString",
        "package": "querystring-pickle",
        "partial": "Ctor Modifier",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:queryFieldModifier",
      "description": {
        "fct-descr": "\u003cp\u003eFunction applied to record field labels.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#QueryOptions",
        "fct-type": "function",
        "title": "queryFieldModifier"
      },
      "index": {
        "description": "Function applied to record field labels",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "queryFieldModifier",
        "normalized": "String-\u003eString",
        "package": "querystring-pickle",
        "partial": "Field Modifier",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:queryPickler",
      "description": {
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "PU a",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#queryPickler",
        "fct-type": "method",
        "title": "queryPickler"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "queryPickler",
        "normalized": "",
        "package": "querystring-pickle",
        "partial": "Pickler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:toQuery",
      "description": {
        "fct-descr": "\u003cp\u003ePickle a data type with an \u003ccode\u003e\u003ca\u003eIsQuery\u003c/a\u003e\u003c/code\u003e instance to an association list.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "a -\u003e [(ByteString, ByteString)]",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#toQuery",
        "fct-type": "function",
        "title": "toQuery"
      },
      "index": {
        "description": "Pickle data type with an IsQuery instance to an association list",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "toQuery",
        "normalized": "a-\u003e[(ByteString,ByteString)]",
        "package": "querystring-pickle",
        "partial": "Query",
        "signature": "a-\u003e[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/querystring-pickle/docs/Network-HTTP-QueryString-Pickle.html#v:unpickle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.QueryString.Pickle",
        "fct-package": "querystring-pickle",
        "fct-signature": "Query -\u003e Either String a",
        "fct-source": "src/Network-HTTP-QueryString-Pickle.html#QueryPU",
        "fct-type": "function",
        "title": "unpickle"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString Pickle",
        "module": "Network.HTTP.QueryString.Pickle",
        "name": "unpickle",
        "normalized": "Query-\u003eEither String a",
        "package": "querystring-pickle",
        "partial": "",
        "signature": "Query-\u003eEither String a"
      }
    }
  }
]