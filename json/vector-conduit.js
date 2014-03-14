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
        "word": "vector-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Vector",
          "name": "Vector",
          "package": "vector-conduit",
          "source": "src/Data-Conduit-Vector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Vector",
          "module": "Data.Conduit.Vector",
          "name": "Vector",
          "package": "vector-conduit",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumes all values from the stream and returns as a mutable vector.\n\u003c/p\u003e",
          "module": "Data.Conduit.Vector",
          "name": "consumeMVector",
          "package": "vector-conduit",
          "signature": "Sink a m (v (PrimState m) a)",
          "source": "src/Data-Conduit-Vector.html#consumeMVector",
          "type": "function"
        },
        "index": {
          "description": "Consumes all values from the stream and returns as mutable vector",
          "hierarchy": "Data Conduit Vector",
          "module": "Data.Conduit.Vector",
          "name": "consumeMVector",
          "package": "vector-conduit",
          "partial": "MVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:consumeMVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumes all values from the stream and return as an immutable vector.\n Due to the way it operates, it requires the ST monad at the minimum,\n although it can also operate IO. This is due to its dependency on\n a mutable vector.\n\u003c/p\u003e",
          "module": "Data.Conduit.Vector",
          "name": "consumeVector",
          "package": "vector-conduit",
          "signature": "Sink a m (v a)",
          "source": "src/Data-Conduit-Vector.html#consumeVector",
          "type": "function"
        },
        "index": {
          "description": "Consumes all values from the stream and return as an immutable vector Due to the way it operates it requires the ST monad at the minimum although it can also operate IO This is due to its dependency on mutable vector",
          "hierarchy": "Data Conduit Vector",
          "module": "Data.Conduit.Vector",
          "name": "consumeVector",
          "package": "vector-conduit",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:consumeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit which freezes mutable vectors into immutable vectors\n\u003c/p\u003e",
          "module": "Data.Conduit.Vector",
          "name": "freezeConduit",
          "package": "vector-conduit",
          "signature": "Conduit (Mutable v (PrimState m) a) m (v a)",
          "source": "src/Data-Conduit-Vector.html#freezeConduit",
          "type": "function"
        },
        "index": {
          "description": "Conduit which freezes mutable vectors into immutable vectors",
          "hierarchy": "Data Conduit Vector",
          "module": "Data.Conduit.Vector",
          "name": "freezeConduit",
          "package": "vector-conduit",
          "partial": "Conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:freezeConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a mutable vector as a source in the ST or IO monad.\n\u003c/p\u003e",
          "module": "Data.Conduit.Vector",
          "name": "sourceMVector",
          "package": "vector-conduit",
          "signature": "v (PrimState m) a -\u003e Source m a",
          "source": "src/Data-Conduit-Vector.html#sourceMVector",
          "type": "function"
        },
        "index": {
          "description": "Use mutable vector as source in the ST or IO monad",
          "hierarchy": "Data Conduit Vector",
          "module": "Data.Conduit.Vector",
          "name": "sourceMVector",
          "normalized": "a(PrimState b)c-\u003eSource b c",
          "package": "vector-conduit",
          "partial": "MVector",
          "signature": "v(PrimState m)a-\u003eSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:sourceMVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse an immutable vector as a source.\n\u003c/p\u003e",
          "module": "Data.Conduit.Vector",
          "name": "sourceVector",
          "package": "vector-conduit",
          "signature": "v a -\u003e Source m a",
          "source": "src/Data-Conduit-Vector.html#sourceVector",
          "type": "function"
        },
        "index": {
          "description": "Use an immutable vector as source",
          "hierarchy": "Data Conduit Vector",
          "module": "Data.Conduit.Vector",
          "name": "sourceVector",
          "normalized": "a b-\u003eSource c b",
          "package": "vector-conduit",
          "partial": "Vector",
          "signature": "v a-\u003eSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:sourceVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumes the first n values from the stream and returns as a\n mutable vector.\n\u003c/p\u003e",
          "module": "Data.Conduit.Vector",
          "name": "takeMVector",
          "package": "vector-conduit",
          "signature": "Int -\u003e Sink a m (v (PrimState m) a)",
          "source": "src/Data-Conduit-Vector.html#takeMVector",
          "type": "function"
        },
        "index": {
          "description": "Consumes the first values from the stream and returns as mutable vector",
          "hierarchy": "Data Conduit Vector",
          "module": "Data.Conduit.Vector",
          "name": "takeMVector",
          "normalized": "Int-\u003eSink a b(c(PrimState b)a)",
          "package": "vector-conduit",
          "partial": "MVector",
          "signature": "Int-\u003eSink a m(v(PrimState m)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:takeMVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumes the first n values from a source and returns as an immutable\n vector.\n\u003c/p\u003e",
          "module": "Data.Conduit.Vector",
          "name": "takeVector",
          "package": "vector-conduit",
          "signature": "Int -\u003e Sink a m (v a)",
          "source": "src/Data-Conduit-Vector.html#takeVector",
          "type": "function"
        },
        "index": {
          "description": "Consumes the first values from source and returns as an immutable vector",
          "hierarchy": "Data Conduit Vector",
          "module": "Data.Conduit.Vector",
          "name": "takeVector",
          "normalized": "Int-\u003eSink a b(c a)",
          "package": "vector-conduit",
          "partial": "Vector",
          "signature": "Int-\u003eSink a m(v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:takeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit which thaws immutable vectors into mutable vectors\n\u003c/p\u003e",
          "module": "Data.Conduit.Vector",
          "name": "thawConduit",
          "package": "vector-conduit",
          "signature": "Conduit (v a) m (Mutable v (PrimState m) a)",
          "source": "src/Data-Conduit-Vector.html#thawConduit",
          "type": "function"
        },
        "index": {
          "description": "Conduit which thaws immutable vectors into mutable vectors",
          "hierarchy": "Data Conduit Vector",
          "module": "Data.Conduit.Vector",
          "name": "thawConduit",
          "package": "vector-conduit",
          "partial": "Conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:thawConduit"
      }
    }
  ]
]