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
        "word": "cereal-plus"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad-transformer over \u003ca\u003eData.Serialize.Get\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CerealPlus.Deserialize",
          "name": "Deserialize",
          "package": "cereal-plus",
          "source": "src/CerealPlus-Deserialize.html",
          "type": "module"
        },
        "index": {
          "description": "monad-transformer over Data.Serialize.Get",
          "hierarchy": "CerealPlus Deserialize",
          "module": "CerealPlus.Deserialize",
          "name": "Deserialize",
          "package": "cereal-plus",
          "partial": "Deserialize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Deserialize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA deserialization monad transformer. \n\u003c/p\u003e",
          "module": "CerealPlus.Deserialize",
          "name": "Deserialize",
          "package": "cereal-plus",
          "source": "src/CerealPlus-Deserialize.html#Deserialize",
          "type": "data"
        },
        "index": {
          "description": "deserialization monad transformer",
          "hierarchy": "CerealPlus Deserialize",
          "module": "CerealPlus.Deserialize",
          "name": "Deserialize",
          "package": "cereal-plus",
          "partial": "Deserialize",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Deserialize.html#t:Deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA partial result of deserialization.\n\u003c/p\u003e",
          "module": "CerealPlus.Deserialize",
          "name": "Result",
          "package": "cereal-plus",
          "source": "src/CerealPlus-Deserialize.html#Result",
          "type": "data"
        },
        "index": {
          "description": "partial result of deserialization",
          "hierarchy": "CerealPlus Deserialize",
          "module": "CerealPlus.Deserialize",
          "name": "Result",
          "package": "cereal-plus",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Deserialize.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA deserialized data structure and a remaining chunk.\n\u003c/p\u003e",
          "module": "CerealPlus.Deserialize",
          "name": "Done",
          "package": "cereal-plus",
          "signature": "Done a ByteString",
          "source": "src/CerealPlus-Deserialize.html#Result",
          "type": "function"
        },
        "index": {
          "description": "deserialized data structure and remaining chunk",
          "hierarchy": "CerealPlus Deserialize",
          "module": "CerealPlus.Deserialize",
          "name": "Done",
          "package": "cereal-plus",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Deserialize.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message describing the deserialization failure and a remaining chunk.\n\u003c/p\u003e",
          "module": "CerealPlus.Deserialize",
          "name": "Fail",
          "package": "cereal-plus",
          "signature": "Fail Text ByteString",
          "source": "src/CerealPlus-Deserialize.html#Result",
          "type": "function"
        },
        "index": {
          "description": "message describing the deserialization failure and remaining chunk",
          "hierarchy": "CerealPlus Deserialize",
          "module": "CerealPlus.Deserialize",
          "name": "Fail",
          "package": "cereal-plus",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Deserialize.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA continuation function, which should be supplied with the next chunk.\n\u003c/p\u003e",
          "module": "CerealPlus.Deserialize",
          "name": "Partial",
          "package": "cereal-plus",
          "signature": "Partial (ByteString -\u003e m (Result m a))",
          "source": "src/CerealPlus-Deserialize.html#Result",
          "type": "function"
        },
        "index": {
          "description": "continuation function which should be supplied with the next chunk",
          "hierarchy": "CerealPlus Deserialize",
          "module": "CerealPlus.Deserialize",
          "name": "Partial",
          "normalized": "Partial(ByteString-\u003ea(Result a b))",
          "package": "cereal-plus",
          "partial": "Partial",
          "signature": "Partial(ByteString-\u003em(Result m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Deserialize.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e action of the \"cereal\" library.\n\u003c/p\u003e",
          "module": "CerealPlus.Deserialize",
          "name": "liftGet",
          "package": "cereal-plus",
          "signature": "Get a -\u003e Deserialize m a",
          "source": "src/CerealPlus-Deserialize.html#liftGet",
          "type": "function"
        },
        "index": {
          "description": "Run Get action of the cereal library",
          "hierarchy": "CerealPlus Deserialize",
          "module": "CerealPlus.Deserialize",
          "name": "liftGet",
          "normalized": "Get a-\u003eDeserialize b a",
          "package": "cereal-plus",
          "partial": "Get",
          "signature": "Get a-\u003eDeserialize m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Deserialize.html#v:liftGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the base monad. Same as \u003ccode\u003e\u003ca\u003etransMap\u003c/a\u003e\u003c/code\u003e of the \"layers\" library.\n\u003c/p\u003e",
          "module": "CerealPlus.Deserialize",
          "name": "mapBase",
          "package": "cereal-plus",
          "signature": "(forall b.  m b -\u003e m' b) -\u003e Deserialize m a -\u003e Deserialize m' a",
          "source": "src/CerealPlus-Deserialize.html#mapBase",
          "type": "function"
        },
        "index": {
          "description": "Change the base monad Same as transMap of the layers library",
          "hierarchy": "CerealPlus Deserialize",
          "module": "CerealPlus.Deserialize",
          "name": "mapBase",
          "normalized": "(a b c d-\u003ee d)-\u003eDeserialize c f-\u003eDeserialize e f",
          "package": "cereal-plus",
          "partial": "Base",
          "signature": "(forall b. m b-\u003em' b)-\u003eDeserialize m a-\u003eDeserialize m' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Deserialize.html#v:mapBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun on a chunk of data and get a partial result.\n\u003c/p\u003e",
          "module": "CerealPlus.Deserialize",
          "name": "runPartial",
          "package": "cereal-plus",
          "signature": "Deserialize m a -\u003e ByteString -\u003e m (Result m a)",
          "source": "src/CerealPlus-Deserialize.html#runPartial",
          "type": "function"
        },
        "index": {
          "description": "Run on chunk of data and get partial result",
          "hierarchy": "CerealPlus Deserialize",
          "module": "CerealPlus.Deserialize",
          "name": "runPartial",
          "normalized": "Deserialize a b-\u003eByteString-\u003ea(Result a b)",
          "package": "cereal-plus",
          "partial": "Partial",
          "signature": "Deserialize m a-\u003eByteString-\u003em(Result m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Deserialize.html#v:runPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CerealPlus.Serializable",
          "name": "Serializable",
          "package": "cereal-plus",
          "source": "src/CerealPlus-Serializable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CerealPlus Serializable",
          "module": "CerealPlus.Serializable",
          "name": "Serializable",
          "package": "cereal-plus",
          "partial": "Serializable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serializable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupport for serialization of a data type in a monadic context \n (e.g., \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e),\n meaning that this can be used to provide serialization support for mutable data.\n\u003c/p\u003e\u003cp\u003eTo use it in a pure context, refer to \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "CerealPlus.Serializable",
          "name": "Serializable",
          "package": "cereal-plus",
          "source": "src/CerealPlus-Serializable.html#Serializable",
          "type": "class"
        },
        "index": {
          "description": "Support for serialization of data type in monadic context e.g IO ST STM Identity meaning that this can be used to provide serialization support for mutable data To use it in pure context refer to Identity monad",
          "hierarchy": "CerealPlus Serializable",
          "module": "CerealPlus.Serializable",
          "name": "Serializable",
          "package": "cereal-plus",
          "partial": "Serializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serializable.html#t:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CerealPlus.Serializable",
          "name": "deserialize",
          "package": "cereal-plus",
          "signature": "Deserialize m a",
          "source": "src/CerealPlus-Serializable.html#deserialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "CerealPlus Serializable",
          "module": "CerealPlus.Serializable",
          "name": "deserialize",
          "package": "cereal-plus",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serializable.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CerealPlus.Serializable",
          "name": "serialize",
          "package": "cereal-plus",
          "signature": "a -\u003e Serialize m ()",
          "source": "src/CerealPlus-Serializable.html#serialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "CerealPlus Serializable",
          "module": "CerealPlus.Serializable",
          "name": "serialize",
          "normalized": "a-\u003eSerialize b()",
          "package": "cereal-plus",
          "signature": "a-\u003eSerialize m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serializable.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad-transformer over \u003ca\u003eData.Serialize.Put\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CerealPlus.Serialize",
          "name": "Serialize",
          "package": "cereal-plus",
          "source": "src/CerealPlus-Serialize.html",
          "type": "module"
        },
        "index": {
          "description": "monad-transformer over Data.Serialize.Put",
          "hierarchy": "CerealPlus Serialize",
          "module": "CerealPlus.Serialize",
          "name": "Serialize",
          "package": "cereal-plus",
          "partial": "Serialize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serialize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA serialization monad transformer.\n\u003c/p\u003e",
          "module": "CerealPlus.Serialize",
          "name": "Serialize",
          "package": "cereal-plus",
          "source": "src/CerealPlus-Serialize.html#Serialize",
          "type": "data"
        },
        "index": {
          "description": "serialization monad transformer",
          "hierarchy": "CerealPlus Serialize",
          "module": "CerealPlus.Serialize",
          "name": "Serialize",
          "package": "cereal-plus",
          "partial": "Serialize",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serialize.html#t:Serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun and get a bytestring of serialized data.\n\u003c/p\u003e",
          "module": "CerealPlus.Serialize",
          "name": "exec",
          "package": "cereal-plus",
          "signature": "Serialize m a -\u003e m ByteString",
          "source": "src/CerealPlus-Serialize.html#exec",
          "type": "function"
        },
        "index": {
          "description": "Run and get bytestring of serialized data",
          "hierarchy": "CerealPlus Serialize",
          "module": "CerealPlus.Serialize",
          "name": "exec",
          "normalized": "Serialize a b-\u003ea ByteString",
          "package": "cereal-plus",
          "signature": "Serialize m a-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serialize.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun and get a lazy bytestring of serialized data.\n\u003c/p\u003e",
          "module": "CerealPlus.Serialize",
          "name": "execLazy",
          "package": "cereal-plus",
          "signature": "Serialize m a -\u003e m LazyByteString",
          "source": "src/CerealPlus-Serialize.html#execLazy",
          "type": "function"
        },
        "index": {
          "description": "Run and get lazy bytestring of serialized data",
          "hierarchy": "CerealPlus Serialize",
          "module": "CerealPlus.Serialize",
          "name": "execLazy",
          "normalized": "Serialize a b-\u003ea LazyByteString",
          "package": "cereal-plus",
          "partial": "Lazy",
          "signature": "Serialize m a-\u003em LazyByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serialize.html#v:execLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e action of the \"cereal\" library.\n\u003c/p\u003e",
          "module": "CerealPlus.Serialize",
          "name": "liftPut",
          "package": "cereal-plus",
          "signature": "Put -\u003e Serialize m ()",
          "source": "src/CerealPlus-Serialize.html#liftPut",
          "type": "function"
        },
        "index": {
          "description": "Run Put action of the cereal library",
          "hierarchy": "CerealPlus Serialize",
          "module": "CerealPlus.Serialize",
          "name": "liftPut",
          "normalized": "Put-\u003eSerialize a()",
          "package": "cereal-plus",
          "partial": "Put",
          "signature": "Put-\u003eSerialize m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serialize.html#v:liftPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the base monad. Same as \u003ccode\u003e\u003ca\u003etransMap\u003c/a\u003e\u003c/code\u003e of the \"layers\" library.\n\u003c/p\u003e",
          "module": "CerealPlus.Serialize",
          "name": "mapBase",
          "package": "cereal-plus",
          "signature": "(forall b.  m b -\u003e m' b) -\u003e Serialize m a -\u003e Serialize m' a",
          "source": "src/CerealPlus-Serialize.html#mapBase",
          "type": "function"
        },
        "index": {
          "description": "Change the base monad Same as transMap of the layers library",
          "hierarchy": "CerealPlus Serialize",
          "module": "CerealPlus.Serialize",
          "name": "mapBase",
          "normalized": "(a b c d-\u003ee d)-\u003eSerialize c f-\u003eSerialize e f",
          "package": "cereal-plus",
          "partial": "Base",
          "signature": "(forall b. m b-\u003em' b)-\u003eSerialize m a-\u003eSerialize m' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serialize.html#v:mapBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun and get the monad result paired with a bytestring of serialized data.\n\u003c/p\u003e",
          "module": "CerealPlus.Serialize",
          "name": "run",
          "package": "cereal-plus",
          "signature": "Serialize m a -\u003e m (a, ByteString)",
          "source": "src/CerealPlus-Serialize.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run and get the monad result paired with bytestring of serialized data",
          "hierarchy": "CerealPlus Serialize",
          "module": "CerealPlus.Serialize",
          "name": "run",
          "normalized": "Serialize a b-\u003ea(b,ByteString)",
          "package": "cereal-plus",
          "signature": "Serialize m a-\u003em(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serialize.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun and get the monad result paired with a lazy bytestring of serialized data.\n\u003c/p\u003e",
          "module": "CerealPlus.Serialize",
          "name": "runLazy",
          "package": "cereal-plus",
          "signature": "Serialize m a -\u003e m (a, LazyByteString)",
          "source": "src/CerealPlus-Serialize.html#runLazy",
          "type": "function"
        },
        "index": {
          "description": "Run and get the monad result paired with lazy bytestring of serialized data",
          "hierarchy": "CerealPlus Serialize",
          "module": "CerealPlus.Serialize",
          "name": "runLazy",
          "normalized": "Serialize a b-\u003ea(b,LazyByteString)",
          "package": "cereal-plus",
          "partial": "Lazy",
          "signature": "Serialize m a-\u003em(a,LazyByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-plus/docs/CerealPlus-Serialize.html#v:runLazy"
      }
    }
  ]
]