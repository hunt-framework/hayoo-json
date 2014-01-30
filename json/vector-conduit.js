[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#",
      "description": {
        "fct-module": "Data.Conduit.Vector",
        "fct-package": "vector-conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Vector",
        "module": "Data.Conduit.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "vector-conduit",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:consumeMVector",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes all values from the stream and returns as a mutable vector.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Vector",
        "fct-package": "vector-conduit",
        "fct-signature": "Sink a m (v (PrimState m) a)",
        "fct-source": "src/Data-Conduit-Vector.html#consumeMVector",
        "fct-type": "function",
        "title": "consumeMVector"
      },
      "index": {
        "description": "Consumes all values from the stream and returns as mutable vector",
        "hierarchy": "Data Conduit Vector",
        "module": "Data.Conduit.Vector",
        "name": "consumeMVector",
        "normalized": "",
        "package": "vector-conduit",
        "partial": "MVector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:consumeVector",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes all values from the stream and return as an immutable vector.\n Due to the way it operates, it requires the ST monad at the minimum,\n although it can also operate IO. This is due to its dependency on\n a mutable vector.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Vector",
        "fct-package": "vector-conduit",
        "fct-signature": "Sink a m (v a)",
        "fct-source": "src/Data-Conduit-Vector.html#consumeVector",
        "fct-type": "function",
        "title": "consumeVector"
      },
      "index": {
        "description": "Consumes all values from the stream and return as an immutable vector Due to the way it operates it requires the ST monad at the minimum although it can also operate IO This is due to its dependency on mutable vector",
        "hierarchy": "Data Conduit Vector",
        "module": "Data.Conduit.Vector",
        "name": "consumeVector",
        "normalized": "",
        "package": "vector-conduit",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:freezeConduit",
      "description": {
        "fct-descr": "\u003cp\u003eConduit which freezes mutable vectors into immutable vectors\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Vector",
        "fct-package": "vector-conduit",
        "fct-signature": "Conduit (Mutable v (PrimState m) a) m (v a)",
        "fct-source": "src/Data-Conduit-Vector.html#freezeConduit",
        "fct-type": "function",
        "title": "freezeConduit"
      },
      "index": {
        "description": "Conduit which freezes mutable vectors into immutable vectors",
        "hierarchy": "Data Conduit Vector",
        "module": "Data.Conduit.Vector",
        "name": "freezeConduit",
        "normalized": "",
        "package": "vector-conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:sourceMVector",
      "description": {
        "fct-descr": "\u003cp\u003eUse a mutable vector as a source in the ST or IO monad.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Vector",
        "fct-package": "vector-conduit",
        "fct-signature": "v (PrimState m) a -\u003e Source m a",
        "fct-source": "src/Data-Conduit-Vector.html#sourceMVector",
        "fct-type": "function",
        "title": "sourceMVector"
      },
      "index": {
        "description": "Use mutable vector as source in the ST or IO monad",
        "hierarchy": "Data Conduit Vector",
        "module": "Data.Conduit.Vector",
        "name": "sourceMVector",
        "normalized": "a(PrimState b)c-\u003eSource b c",
        "package": "vector-conduit",
        "partial": "MVector",
        "signature": "v(PrimState m)a-\u003eSource m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:sourceVector",
      "description": {
        "fct-descr": "\u003cp\u003eUse an immutable vector as a source.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Vector",
        "fct-package": "vector-conduit",
        "fct-signature": "v a -\u003e Source m a",
        "fct-source": "src/Data-Conduit-Vector.html#sourceVector",
        "fct-type": "function",
        "title": "sourceVector"
      },
      "index": {
        "description": "Use an immutable vector as source",
        "hierarchy": "Data Conduit Vector",
        "module": "Data.Conduit.Vector",
        "name": "sourceVector",
        "normalized": "a b-\u003eSource c b",
        "package": "vector-conduit",
        "partial": "Vector",
        "signature": "v a-\u003eSource m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:takeMVector",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes the first n values from the stream and returns as a\n mutable vector.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Vector",
        "fct-package": "vector-conduit",
        "fct-signature": "Int -\u003e Sink a m (v (PrimState m) a)",
        "fct-source": "src/Data-Conduit-Vector.html#takeMVector",
        "fct-type": "function",
        "title": "takeMVector"
      },
      "index": {
        "description": "Consumes the first values from the stream and returns as mutable vector",
        "hierarchy": "Data Conduit Vector",
        "module": "Data.Conduit.Vector",
        "name": "takeMVector",
        "normalized": "Int-\u003eSink a b(c(PrimState b)a)",
        "package": "vector-conduit",
        "partial": "MVector",
        "signature": "Int-\u003eSink a m(v(PrimState m)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:takeVector",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes the first n values from a source and returns as an immutable\n vector.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Vector",
        "fct-package": "vector-conduit",
        "fct-signature": "Int -\u003e Sink a m (v a)",
        "fct-source": "src/Data-Conduit-Vector.html#takeVector",
        "fct-type": "function",
        "title": "takeVector"
      },
      "index": {
        "description": "Consumes the first values from source and returns as an immutable vector",
        "hierarchy": "Data Conduit Vector",
        "module": "Data.Conduit.Vector",
        "name": "takeVector",
        "normalized": "Int-\u003eSink a b(c a)",
        "package": "vector-conduit",
        "partial": "Vector",
        "signature": "Int-\u003eSink a m(v a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-conduit/docs/Data-Conduit-Vector.html#v:thawConduit",
      "description": {
        "fct-descr": "\u003cp\u003eConduit which thaws immutable vectors into mutable vectors\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Vector",
        "fct-package": "vector-conduit",
        "fct-signature": "Conduit (v a) m (Mutable v (PrimState m) a)",
        "fct-source": "src/Data-Conduit-Vector.html#thawConduit",
        "fct-type": "function",
        "title": "thawConduit"
      },
      "index": {
        "description": "Conduit which thaws immutable vectors into mutable vectors",
        "hierarchy": "Data Conduit Vector",
        "module": "Data.Conduit.Vector",
        "name": "thawConduit",
        "normalized": "",
        "package": "vector-conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  }
]