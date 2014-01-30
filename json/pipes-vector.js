[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-vector/docs/Pipes-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePipes for interfacing with \u003ca\u003eData.Vector\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this only provides functionality for building \u003ccode\u003eVectors\u003c/code\u003e\n    from Pipes; as \u003ccode\u003eVectors\u003c/code\u003e are \u003ccode\u003eFoldable\u003c/code\u003e the inverse can be\n    accomplished with \u003ca\u003ePipes.each\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Vector",
        "fct-package": "pipes-vector",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "Pipes for interfacing with Data.Vector Note that this only provides functionality for building Vectors from Pipes as Vectors are Foldable the inverse can be accomplished with Pipes.each",
        "hierarchy": "Pipes Vector",
        "module": "Pipes.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "pipes-vector",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-vector/docs/Pipes-Vector.html#t:ToVector",
      "description": {
        "fct-module": "Pipes.Vector",
        "fct-package": "pipes-vector",
        "fct-signature": "data",
        "fct-source": "src/Pipes-Vector.html#ToVector",
        "fct-type": "data",
        "title": "ToVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Vector",
        "module": "Pipes.Vector",
        "name": "ToVector",
        "normalized": "",
        "package": "pipes-vector",
        "partial": "To Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-vector/docs/Pipes-Vector.html#v:fromProducer",
      "description": {
        "fct-module": "Pipes.Vector",
        "fct-package": "pipes-vector",
        "fct-signature": "Producer' e (ToVector v e m) r -\u003e m (v e)",
        "fct-source": "src/Pipes-Vector.html#fromProducer",
        "fct-type": "function",
        "title": "fromProducer"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Vector",
        "module": "Pipes.Vector",
        "name": "fromProducer",
        "normalized": "Producer' a(ToVector b a c)d-\u003ec(b a)",
        "package": "pipes-vector",
        "partial": "Producer",
        "signature": "Producer' e(ToVector v e m)r-\u003em(v e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-vector/docs/Pipes-Vector.html#v:runToVector",
      "description": {
        "fct-module": "Pipes.Vector",
        "fct-package": "pipes-vector",
        "fct-signature": "ToVector v e m r -\u003e m (v e)",
        "fct-source": "src/Pipes-Vector.html#runToVector",
        "fct-type": "function",
        "title": "runToVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Vector",
        "module": "Pipes.Vector",
        "name": "runToVector",
        "normalized": "ToVector a b c d-\u003ec(a b)",
        "package": "pipes-vector",
        "partial": "To Vector",
        "signature": "ToVector v e m r-\u003em(v e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-vector/docs/Pipes-Vector.html#v:runToVectorP",
      "description": {
        "fct-descr": "\u003cp\u003eExtract and freeze the constructed vector\n\u003c/p\u003e",
        "fct-module": "Pipes.Vector",
        "fct-package": "pipes-vector",
        "fct-signature": "Proxy a' a b' b (ToVector v e m) r -\u003e Proxy a' a b' b m (v e)",
        "fct-source": "src/Pipes-Vector.html#runToVectorP",
        "fct-type": "function",
        "title": "runToVectorP"
      },
      "index": {
        "description": "Extract and freeze the constructed vector",
        "hierarchy": "Pipes Vector",
        "module": "Pipes.Vector",
        "name": "runToVectorP",
        "normalized": "Proxy a b c d(ToVector e f g)h-\u003eProxy a b c d g(e f)",
        "package": "pipes-vector",
        "partial": "To Vector",
        "signature": "Proxy a' a b' b(ToVector v e m)r-\u003eProxy a' a b' b m(v e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-vector/docs/Pipes-Vector.html#v:toVector",
      "description": {
        "fct-descr": "\u003cp\u003eConsume items from a Pipe and place them into a vector\n\u003c/p\u003e\u003cp\u003eFor efficient filling, the vector is grown geometrically up to a\n maximum chunk size.\n\u003c/p\u003e",
        "fct-module": "Pipes.Vector",
        "fct-package": "pipes-vector",
        "fct-signature": "Consumer e (ToVector v e m) r",
        "fct-source": "src/Pipes-Vector.html#toVector",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "Consume items from Pipe and place them into vector For efficient filling the vector is grown geometrically up to maximum chunk size",
        "hierarchy": "Pipes Vector",
        "module": "Pipes.Vector",
        "name": "toVector",
        "normalized": "",
        "package": "pipes-vector",
        "partial": "Vector",
        "signature": ""
      }
    }
  }
]