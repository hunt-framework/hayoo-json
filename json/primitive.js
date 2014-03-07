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
        "word": "primitive"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive state-transformer monads\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Primitive",
          "name": "Primitive",
          "package": "primitive",
          "source": "src/Control-Monad-Primitive.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive state-transformer monads",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "Primitive",
          "package": "primitive",
          "partial": "Primitive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of primitive state-transformer monads\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "PrimMonad",
          "package": "primitive",
          "source": "src/Control-Monad-Primitive.html#PrimMonad",
          "type": "class"
        },
        "index": {
          "description": "Class of primitive state-transformer monads",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "PrimMonad",
          "package": "primitive",
          "partial": "Prim Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#t:PrimMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eRealWorld\u003c/code\u003e is deeply magical.  It is \u003cem\u003eprimitive\u003c/em\u003e, but it is not\n \t\u003cem\u003eunlifted\u003c/em\u003e (hence \u003ccode\u003eptrArg\u003c/code\u003e).  We never manipulate values of type\n \t\u003ccode\u003eRealWorld\u003c/code\u003e; it's only used in the type system, to parameterise \u003ccode\u003eState#\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "RealWorld",
          "package": "primitive",
          "type": "data"
        },
        "index": {
          "description": "RealWorld is deeply magical It is primitive but it is not unlifted hence ptrArg We never manipulate values of type RealWorld it only used in the type system to parameterise State",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "RealWorld",
          "package": "primitive",
          "partial": "Real World",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#t:RealWorld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpose the internal structure of the monad\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "internal",
          "package": "primitive",
          "signature": "m a -\u003e State# (PrimState m) -\u003e (#State# (PrimState m), a#)",
          "source": "src/Control-Monad-Primitive.html#internal",
          "type": "method"
        },
        "index": {
          "description": "Expose the internal structure of the monad",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "internal",
          "normalized": "a b-\u003eState #(PrimState a)-\u003e(#State #(PrimState a),b #)",
          "package": "primitive",
          "signature": "m a-\u003eState #(PrimState m)-\u003e(#State #(PrimState m),a #)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eRealWorld\u003c/a\u003e\u003c/code\u003e state token to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "primToIO",
          "package": "primitive",
          "signature": "m a -\u003e IO a",
          "source": "src/Control-Monad-Primitive.html#primToIO",
          "type": "function"
        },
        "index": {
          "description": "Convert PrimMonad with RealWorld state token to IO",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "primToIO",
          "normalized": "a b-\u003eIO b",
          "package": "primitive",
          "partial": "To IO",
          "signature": "m a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primToIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to another monad with the same state token.\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "primToPrim",
          "package": "primitive",
          "signature": "m1 a -\u003e m2 a",
          "source": "src/Control-Monad-Primitive.html#primToPrim",
          "type": "function"
        },
        "index": {
          "description": "Convert PrimMonad to another monad with the same state token",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "primToPrim",
          "normalized": "a b-\u003ea b",
          "package": "primitive",
          "partial": "To Prim",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primToPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "primToST",
          "package": "primitive",
          "signature": "m a -\u003e ST (PrimState m) a",
          "source": "src/Control-Monad-Primitive.html#primToST",
          "type": "function"
        },
        "index": {
          "description": "Convert PrimMonad to ST",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "primToST",
          "normalized": "a b-\u003eST(PrimState a)b",
          "package": "primitive",
          "partial": "To ST",
          "signature": "m a-\u003eST(PrimState m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primToST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a primitive operation\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "primitive",
          "package": "primitive",
          "signature": "(State# (PrimState m) -\u003e (#State# (PrimState m), a#)) -\u003e m a",
          "source": "src/Control-Monad-Primitive.html#primitive",
          "type": "method"
        },
        "index": {
          "description": "Execute primitive operation",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "primitive",
          "normalized": "(State #(PrimState a)-\u003e(#State #(PrimState a),b #))-\u003ea b",
          "package": "primitive",
          "signature": "(State #(PrimState m)-\u003e(#State #(PrimState m),a #))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a primitive operation with no result\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "primitive_",
          "package": "primitive",
          "signature": "(State# (PrimState m) -\u003e State# (PrimState m)) -\u003e m ()",
          "source": "src/Control-Monad-Primitive.html#primitive_",
          "type": "function"
        },
        "index": {
          "description": "Execute primitive operation with no result",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "primitive_",
          "normalized": "(State #(PrimState a)-\u003eState #(PrimState a))-\u003ea()",
          "package": "primitive",
          "signature": "(State #(PrimState m)-\u003eState #(PrimState m))-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primitive_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Primitive",
          "name": "touch",
          "package": "primitive",
          "signature": "a -\u003e m ()",
          "source": "src/Control-Monad-Primitive.html#touch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "touch",
          "normalized": "a-\u003eb()",
          "package": "primitive",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:touch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Primitive",
          "name": "unsafeInlineIO",
          "package": "primitive",
          "signature": "IO a -\u003e a",
          "source": "src/Control-Monad-Primitive.html#unsafeInlineIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "unsafeInlineIO",
          "normalized": "IO a-\u003ea",
          "package": "primitive",
          "partial": "Inline IO",
          "signature": "IO a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafeInlineIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Primitive",
          "name": "unsafeInlinePrim",
          "package": "primitive",
          "signature": "m a -\u003e a",
          "source": "src/Control-Monad-Primitive.html#unsafeInlinePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "unsafeInlinePrim",
          "normalized": "a b-\u003eb",
          "package": "primitive",
          "partial": "Inline Prim",
          "signature": "m a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafeInlinePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Primitive",
          "name": "unsafeInlineST",
          "package": "primitive",
          "signature": "ST s a -\u003e a",
          "source": "src/Control-Monad-Primitive.html#unsafeInlineST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "unsafeInlineST",
          "normalized": "ST a b-\u003eb",
          "package": "primitive",
          "partial": "Inline ST",
          "signature": "ST s a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafeInlineST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert any \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. This operation is highly unsafe!\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "unsafePrimToIO",
          "package": "primitive",
          "signature": "m a -\u003e IO a",
          "source": "src/Control-Monad-Primitive.html#unsafePrimToIO",
          "type": "function"
        },
        "index": {
          "description": "Convert any PrimMonad to IO This operation is highly unsafe",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "unsafePrimToIO",
          "normalized": "a b-\u003eIO b",
          "package": "primitive",
          "partial": "Prim To IO",
          "signature": "m a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafePrimToIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to another monad with a possibly different state\n token. This operation is highly unsafe!\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "unsafePrimToPrim",
          "package": "primitive",
          "signature": "m1 a -\u003e m2 a",
          "source": "src/Control-Monad-Primitive.html#unsafePrimToPrim",
          "type": "function"
        },
        "index": {
          "description": "Convert PrimMonad to another monad with possibly different state token This operation is highly unsafe",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "unsafePrimToPrim",
          "normalized": "a b-\u003ea b",
          "package": "primitive",
          "partial": "Prim To Prim",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafePrimToPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert any \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e with an arbitrary state token. This\n operation is highly unsafe!\n\u003c/p\u003e",
          "module": "Control.Monad.Primitive",
          "name": "unsafePrimToST",
          "package": "primitive",
          "signature": "m a -\u003e ST s a",
          "source": "src/Control-Monad-Primitive.html#unsafePrimToST",
          "type": "function"
        },
        "index": {
          "description": "Convert any PrimMonad to ST with an arbitrary state token This operation is highly unsafe",
          "hierarchy": "Control Monad Primitive",
          "module": "Control.Monad.Primitive",
          "name": "unsafePrimToST",
          "normalized": "a b-\u003eST c b",
          "package": "primitive",
          "partial": "Prim To ST",
          "signature": "m a-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafePrimToST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive operations on machine addresses\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Primitive.Addr",
          "name": "Addr",
          "package": "primitive",
          "source": "src/Data-Primitive-Addr.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive operations on machine addresses",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "Addr",
          "package": "primitive",
          "partial": "Addr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA machine address\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "Addr",
          "package": "primitive",
          "source": "src/Data-Primitive-Types.html#Addr",
          "type": "data"
        },
        "index": {
          "description": "machine address",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "Addr",
          "package": "primitive",
          "partial": "Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#t:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Primitive.Addr\",\"Data.Primitive.Types\"]",
          "name": "Addr",
          "package": "primitive",
          "signature": "Addr Addr#",
          "source": "src/Data-Primitive-Types.html#Addr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:Addr\",\"http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:Addr\"]"
        },
        "index": {
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "Addr",
          "package": "primitive",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the given number of bytes from the second \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e to the first. The\n areas may not overlap.\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "copyAddr",
          "package": "primitive",
          "signature": "Addr-\u003e Addr-\u003e Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the given number of bytes from the second Addr to the first The areas may not overlap",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "copyAddr",
          "normalized": "Addr-\u003eAddr-\u003eInt-\u003ea()",
          "package": "primitive",
          "partial": "Addr",
          "signature": "Addr-\u003eAddr-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:copyAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from a memory position given by an address and an offset.\n The memory block the address refers to must be immutable. The offset is in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "indexOffAddr",
          "package": "primitive",
          "signature": "Addr -\u003e Int -\u003e a",
          "source": "src/Data-Primitive-Addr.html#indexOffAddr",
          "type": "function"
        },
        "index": {
          "description": "Read value from memory position given by an address and an offset The memory block the address refers to must be immutable The offset is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "indexOffAddr",
          "normalized": "Addr-\u003eInt-\u003ea",
          "package": "primitive",
          "partial": "Off Addr",
          "signature": "Addr-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:indexOffAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance in bytes between two addresses. The result is only valid if the\n difference fits in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "minusAddr",
          "package": "primitive",
          "signature": "Addr -\u003e Addr -\u003e Int",
          "source": "src/Data-Primitive-Addr.html#minusAddr",
          "type": "function"
        },
        "index": {
          "description": "Distance in bytes between two addresses The result is only valid if the difference fits in an Int",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "minusAddr",
          "normalized": "Addr-\u003eAddr-\u003eInt",
          "package": "primitive",
          "partial": "Addr",
          "signature": "Addr-\u003eAddr-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:minusAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the given number of bytes from the second \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e to the first. The\n areas may overlap.\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "moveAddr",
          "package": "primitive",
          "signature": "Addr-\u003e Addr-\u003e Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the given number of bytes from the second Addr to the first The areas may overlap",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "moveAddr",
          "normalized": "Addr-\u003eAddr-\u003eInt-\u003ea()",
          "package": "primitive",
          "partial": "Addr",
          "signature": "Addr-\u003eAddr-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:moveAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe null address\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "nullAddr",
          "package": "primitive",
          "signature": "Addr",
          "source": "src/Data-Primitive-Addr.html#nullAddr",
          "type": "function"
        },
        "index": {
          "description": "The null address",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "nullAddr",
          "package": "primitive",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:nullAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset an address by the given number of bytes\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "plusAddr",
          "package": "primitive",
          "signature": "Addr -\u003e Int -\u003e Addr",
          "source": "src/Data-Primitive-Addr.html#plusAddr",
          "type": "function"
        },
        "index": {
          "description": "Offset an address by the given number of bytes",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "plusAddr",
          "normalized": "Addr-\u003eInt-\u003eAddr",
          "package": "primitive",
          "partial": "Addr",
          "signature": "Addr-\u003eInt-\u003eAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:plusAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from a memory position given by an address and an offset.\n The offset is in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "readOffAddr",
          "package": "primitive",
          "signature": "Addr -\u003e Int -\u003e m a",
          "source": "src/Data-Primitive-Addr.html#readOffAddr",
          "type": "function"
        },
        "index": {
          "description": "Read value from memory position given by an address and an offset The offset is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "readOffAddr",
          "normalized": "Addr-\u003eInt-\u003ea b",
          "package": "primitive",
          "partial": "Off Addr",
          "signature": "Addr-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:readOffAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe remainder of the address and the integer.\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "remAddr",
          "package": "primitive",
          "signature": "Addr -\u003e Int -\u003e Int",
          "source": "src/Data-Primitive-Addr.html#remAddr",
          "type": "function"
        },
        "index": {
          "description": "The remainder of the address and the integer",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "remAddr",
          "normalized": "Addr-\u003eInt-\u003eInt",
          "package": "primitive",
          "partial": "Addr",
          "signature": "Addr-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:remAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a memory block of with the given value. The length is in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "setAddr",
          "package": "primitive",
          "signature": "Addr -\u003e Int -\u003e a -\u003e m ()",
          "source": "src/Data-Primitive-Addr.html#setAddr",
          "type": "function"
        },
        "index": {
          "description": "Fill memory block of with the given value The length is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "setAddr",
          "normalized": "Addr-\u003eInt-\u003ea-\u003eb()",
          "package": "primitive",
          "partial": "Addr",
          "signature": "Addr-\u003eInt-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:setAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a memory position given by an address and an offset.\n The offset is in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Addr",
          "name": "writeOffAddr",
          "package": "primitive",
          "signature": "Addr -\u003e Int -\u003e a -\u003e m ()",
          "source": "src/Data-Primitive-Addr.html#writeOffAddr",
          "type": "function"
        },
        "index": {
          "description": "Write value to memory position given by an address and an offset The offset is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Addr",
          "module": "Data.Primitive.Addr",
          "name": "writeOffAddr",
          "normalized": "Addr-\u003eInt-\u003ea-\u003eb()",
          "package": "primitive",
          "partial": "Off Addr",
          "signature": "Addr-\u003eInt-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:writeOffAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive boxed arrays\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Primitive.Array",
          "name": "Array",
          "package": "primitive",
          "source": "src/Data-Primitive-Array.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive boxed arrays",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "Array",
          "package": "primitive",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoxed arrays\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "Array",
          "package": "primitive",
          "source": "src/Data-Primitive-Array.html#Array",
          "type": "data"
        },
        "index": {
          "description": "Boxed arrays",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "Array",
          "package": "primitive",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable boxed arrays associated with a primitive state token.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "MutableArray",
          "package": "primitive",
          "source": "src/Data-Primitive-Array.html#MutableArray",
          "type": "data"
        },
        "index": {
          "description": "Mutable boxed arrays associated with primitive state token",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "MutableArray",
          "package": "primitive",
          "partial": "Mutable Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#t:MutableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.Array",
          "name": "Array",
          "package": "primitive",
          "signature": "Array (Array# a)",
          "source": "src/Data-Primitive-Array.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "Array",
          "package": "primitive",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.Array",
          "name": "MutableArray",
          "package": "primitive",
          "signature": "MutableArray (MutableArray# s a)",
          "source": "src/Data-Primitive-Array.html#MutableArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "MutableArray",
          "package": "primitive",
          "partial": "Mutable Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:MutableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a slice of an immutable array to a mutable array.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "copyArray",
          "package": "primitive",
          "signature": "MutableArray (PrimState m) a-\u003e Int-\u003e Array a-\u003e Int-\u003e Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy slice of an immutable array to mutable array",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "copyArray",
          "normalized": "MutableArray(PrimState a)b-\u003eInt-\u003eArray b-\u003eInt-\u003eInt-\u003ea()",
          "package": "primitive",
          "partial": "Array",
          "signature": "MutableArray(PrimState m)a-\u003eInt-\u003eArray a-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:copyArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a slice of a mutable array to another array. The two arrays may\n not be the same.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "copyMutableArray",
          "package": "primitive",
          "signature": "MutableArray (PrimState m) a-\u003e Int-\u003e MutableArray (PrimState m) a-\u003e Int-\u003e Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy slice of mutable array to another array The two arrays may not be the same",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "copyMutableArray",
          "normalized": "MutableArray(PrimState a)b-\u003eInt-\u003eMutableArray(PrimState a)b-\u003eInt-\u003eInt-\u003ea()",
          "package": "primitive",
          "partial": "Mutable Array",
          "signature": "MutableArray(PrimState m)a-\u003eInt-\u003eMutableArray(PrimState m)a-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:copyMutableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from the immutable array at the given index.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "indexArray",
          "package": "primitive",
          "signature": "Array a -\u003e Int -\u003e a",
          "source": "src/Data-Primitive-Array.html#indexArray",
          "type": "function"
        },
        "index": {
          "description": "Read value from the immutable array at the given index",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "indexArray",
          "normalized": "Array a-\u003eInt-\u003ea",
          "package": "primitive",
          "partial": "Array",
          "signature": "Array a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:indexArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadically read a value from the immutable array at the given index.\n This allows us to be strict in the array while remaining lazy in the read\n element which is very useful for collective operations. Suppose we want to\n copy an array. We could do something like this:\n\u003c/p\u003e\u003cpre\u003e copy marr arr ... = do ...\n                        writeArray marr i (indexArray arr i) ...\n                        ...\n\u003c/pre\u003e\u003cp\u003eBut since primitive arrays are lazy, the calls to \u003ccode\u003e\u003ca\u003eindexArray\u003c/a\u003e\u003c/code\u003e will not be\n evaluated. Rather, \u003ccode\u003emarr\u003c/code\u003e will be filled with thunks each of which would\n retain a reference to \u003ccode\u003earr\u003c/code\u003e. This is definitely not what we want!\n\u003c/p\u003e\u003cp\u003eWith \u003ccode\u003e\u003ca\u003eindexArrayM\u003c/a\u003e\u003c/code\u003e, we can instead write\n\u003c/p\u003e\u003cpre\u003e copy marr arr ... = do ...\n                        x \u003c- indexArrayM arr i\n                        writeArray marr i x\n                        ...\n\u003c/pre\u003e\u003cp\u003eNow, indexing is executed immediately although the returned element is\n still not evaluated.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "indexArrayM",
          "package": "primitive",
          "signature": "Array a -\u003e Int -\u003e m a",
          "source": "src/Data-Primitive-Array.html#indexArrayM",
          "type": "function"
        },
        "index": {
          "description": "Monadically read value from the immutable array at the given index This allows us to be strict in the array while remaining lazy in the read element which is very useful for collective operations Suppose we want to copy an array We could do something like this copy marr arr do writeArray marr indexArray arr But since primitive arrays are lazy the calls to indexArray will not be evaluated Rather marr will be filled with thunks each of which would retain reference to arr This is definitely not what we want With indexArrayM we can instead write copy marr arr do indexArrayM arr writeArray marr Now indexing is executed immediately although the returned element is still not evaluated",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "indexArrayM",
          "normalized": "Array a-\u003eInt-\u003eb a",
          "package": "primitive",
          "partial": "Array",
          "signature": "Array a-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:indexArrayM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new mutable array of the specified size and initialise all\n elements with the given value.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "newArray",
          "package": "primitive",
          "signature": "Int -\u003e a -\u003e m (MutableArray (PrimState m) a)",
          "source": "src/Data-Primitive-Array.html#newArray",
          "type": "function"
        },
        "index": {
          "description": "Create new mutable array of the specified size and initialise all elements with the given value",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "newArray",
          "normalized": "Int-\u003ea-\u003eb(MutableArray(PrimState b)a)",
          "package": "primitive",
          "partial": "Array",
          "signature": "Int-\u003ea-\u003em(MutableArray(PrimState m)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from the array at the given index.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "readArray",
          "package": "primitive",
          "signature": "MutableArray (PrimState m) a -\u003e Int -\u003e m a",
          "source": "src/Data-Primitive-Array.html#readArray",
          "type": "function"
        },
        "index": {
          "description": "Read value from the array at the given index",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "readArray",
          "normalized": "MutableArray(PrimState a)b-\u003eInt-\u003ea b",
          "package": "primitive",
          "partial": "Array",
          "signature": "MutableArray(PrimState m)a-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:readArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the two arrays refer to the same memory block.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "sameMutableArray",
          "package": "primitive",
          "signature": "MutableArray s a -\u003e MutableArray s a -\u003e Bool",
          "source": "src/Data-Primitive-Array.html#sameMutableArray",
          "type": "function"
        },
        "index": {
          "description": "Check whether the two arrays refer to the same memory block",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "sameMutableArray",
          "normalized": "MutableArray a b-\u003eMutableArray a b-\u003eBool",
          "package": "primitive",
          "partial": "Mutable Array",
          "signature": "MutableArray s a-\u003eMutableArray s a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:sameMutableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a mutable array to an immutable one without copying. The\n array should not be modified after the conversion.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "unsafeFreezeArray",
          "package": "primitive",
          "signature": "MutableArray (PrimState m) a -\u003e m (Array a)",
          "source": "src/Data-Primitive-Array.html#unsafeFreezeArray",
          "type": "function"
        },
        "index": {
          "description": "Convert mutable array to an immutable one without copying The array should not be modified after the conversion",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "unsafeFreezeArray",
          "normalized": "MutableArray(PrimState a)b-\u003ea(Array b)",
          "package": "primitive",
          "partial": "Freeze Array",
          "signature": "MutableArray(PrimState m)a-\u003em(Array a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:unsafeFreezeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an immutable array to an mutable one without copying. The\n immutable array should not be used after the conversion.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "unsafeThawArray",
          "package": "primitive",
          "signature": "Array a -\u003e m (MutableArray (PrimState m) a)",
          "source": "src/Data-Primitive-Array.html#unsafeThawArray",
          "type": "function"
        },
        "index": {
          "description": "Convert an immutable array to an mutable one without copying The immutable array should not be used after the conversion",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "unsafeThawArray",
          "normalized": "Array a-\u003eb(MutableArray(PrimState b)a)",
          "package": "primitive",
          "partial": "Thaw Array",
          "signature": "Array a-\u003em(MutableArray(PrimState m)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:unsafeThawArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to the array at the given index.\n\u003c/p\u003e",
          "module": "Data.Primitive.Array",
          "name": "writeArray",
          "package": "primitive",
          "signature": "MutableArray (PrimState m) a -\u003e Int -\u003e a -\u003e m ()",
          "source": "src/Data-Primitive-Array.html#writeArray",
          "type": "function"
        },
        "index": {
          "description": "Write value to the array at the given index",
          "hierarchy": "Data Primitive Array",
          "module": "Data.Primitive.Array",
          "name": "writeArray",
          "normalized": "MutableArray(PrimState a)b-\u003eInt-\u003eb-\u003ea()",
          "package": "primitive",
          "partial": "Array",
          "signature": "MutableArray(PrimState m)a-\u003eInt-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:writeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive operations on ByteArrays\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "ByteArray",
          "package": "primitive",
          "source": "src/Data-Primitive-ByteArray.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive operations on ByteArrays",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "ByteArray",
          "package": "primitive",
          "partial": "Byte Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eByte arrays\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "ByteArray",
          "package": "primitive",
          "source": "src/Data-Primitive-ByteArray.html#ByteArray",
          "type": "data"
        },
        "index": {
          "description": "Byte arrays",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "ByteArray",
          "package": "primitive",
          "partial": "Byte Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#t:ByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.ByteArray",
          "name": "ByteArray#",
          "package": "primitive",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "ByteArray#",
          "package": "primitive",
          "partial": "Byte Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#t:ByteArray-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable byte arrays associated with a primitive state token\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "MutableByteArray",
          "package": "primitive",
          "source": "src/Data-Primitive-ByteArray.html#MutableByteArray",
          "type": "data"
        },
        "index": {
          "description": "Mutable byte arrays associated with primitive state token",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "MutableByteArray",
          "package": "primitive",
          "partial": "Mutable Byte Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#t:MutableByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.ByteArray",
          "name": "MutableByteArray#",
          "package": "primitive",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "MutableByteArray#",
          "package": "primitive",
          "partial": "Mutable Byte Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#t:MutableByteArray-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.ByteArray",
          "name": "ByteArray",
          "package": "primitive",
          "signature": "ByteArray ByteArray#",
          "source": "src/Data-Primitive-ByteArray.html#ByteArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "ByteArray",
          "package": "primitive",
          "partial": "Byte Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:ByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.ByteArray",
          "name": "MutableByteArray",
          "package": "primitive",
          "signature": "MutableByteArray (MutableByteArray# s)",
          "source": "src/Data-Primitive-ByteArray.html#MutableByteArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "MutableByteArray",
          "package": "primitive",
          "partial": "Mutable Byte Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:MutableByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a pointer to the array's data. This operation is only safe on\n \u003cem\u003epinned\u003c/em\u003e byte arrays allocated by \u003ccode\u003e\u003ca\u003enewPinnedByteArray\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003enewAlignedPinnedByteArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "byteArrayContents",
          "package": "primitive",
          "signature": "ByteArray -\u003e Addr",
          "source": "src/Data-Primitive-ByteArray.html#byteArrayContents",
          "type": "function"
        },
        "index": {
          "description": "Yield pointer to the array data This operation is only safe on pinned byte arrays allocated by newPinnedByteArray or newAlignedPinnedByteArray",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "byteArrayContents",
          "normalized": "ByteArray-\u003eAddr",
          "package": "primitive",
          "partial": "Array Contents",
          "signature": "ByteArray-\u003eAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:byteArrayContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a slice of an immutable byte array to a mutable byte array.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "copyByteArray",
          "package": "primitive",
          "signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e ByteArray-\u003e Int-\u003e Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy slice of an immutable byte array to mutable byte array",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "copyByteArray",
          "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eByteArray-\u003eInt-\u003eInt-\u003ea()",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eByteArray-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:copyByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a slice of a mutable byte array into another array. The two slices\n may not overlap.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "copyMutableByteArray",
          "package": "primitive",
          "signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e MutableByteArray (PrimState m)-\u003e Int-\u003e Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy slice of mutable byte array into another array The two slices may not overlap",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "copyMutableByteArray",
          "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eMutableByteArray(PrimState a)-\u003eInt-\u003eInt-\u003ea()",
          "package": "primitive",
          "partial": "Mutable Byte Array",
          "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eMutableByteArray(PrimState m)-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:copyMutableByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a slice of a mutable byte array with a byte.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "fillByteArray",
          "package": "primitive",
          "signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e Int-\u003e Word8-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Fill slice of mutable byte array with byte",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "fillByteArray",
          "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eInt-\u003eWord-\u003ea()",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eInt-\u003eWord-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:fillByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a primitive value from the byte array. The offset is given in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "indexByteArray",
          "package": "primitive",
          "signature": "ByteArray -\u003e Int -\u003e a",
          "source": "src/Data-Primitive-ByteArray.html#indexByteArray",
          "type": "function"
        },
        "index": {
          "description": "Read primitive value from the byte array The offset is given in elements of type rather than in bytes",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "indexByteArray",
          "normalized": "ByteArray-\u003eInt-\u003ea",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "ByteArray-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:indexByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a slice of a mutable byte array into another, potentially\n overlapping array.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "moveByteArray",
          "package": "primitive",
          "signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e MutableByteArray (PrimState m)-\u003e Int-\u003e Int-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy slice of mutable byte array into another potentially overlapping array",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "moveByteArray",
          "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eMutableByteArray(PrimState a)-\u003eInt-\u003eInt-\u003ea()",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eMutableByteArray(PrimState m)-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:moveByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a pointer to the array's data. This operation is only safe on\n \u003cem\u003epinned\u003c/em\u003e byte arrays allocated by \u003ccode\u003e\u003ca\u003enewPinnedByteArray\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003enewAlignedPinnedByteArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "mutableByteArrayContents",
          "package": "primitive",
          "signature": "MutableByteArray s -\u003e Addr",
          "source": "src/Data-Primitive-ByteArray.html#mutableByteArrayContents",
          "type": "function"
        },
        "index": {
          "description": "Yield pointer to the array data This operation is only safe on pinned byte arrays allocated by newPinnedByteArray or newAlignedPinnedByteArray",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "mutableByteArrayContents",
          "normalized": "MutableByteArray a-\u003eAddr",
          "package": "primitive",
          "partial": "Byte Array Contents",
          "signature": "MutableByteArray s-\u003eAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:mutableByteArrayContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003cem\u003epinned\u003c/em\u003e byte array of the specified size and with the give\n alignment. The garbage collector is guaranteed not to move it.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "newAlignedPinnedByteArray",
          "package": "primitive",
          "signature": "Int -\u003e Int -\u003e m (MutableByteArray (PrimState m))",
          "source": "src/Data-Primitive-ByteArray.html#newAlignedPinnedByteArray",
          "type": "function"
        },
        "index": {
          "description": "Create pinned byte array of the specified size and with the give alignment The garbage collector is guaranteed not to move it",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "newAlignedPinnedByteArray",
          "normalized": "Int-\u003eInt-\u003ea(MutableByteArray(PrimState a))",
          "package": "primitive",
          "partial": "Aligned Pinned Byte Array",
          "signature": "Int-\u003eInt-\u003em(MutableByteArray(PrimState m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:newAlignedPinnedByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new mutable byte array of the specified size.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "newByteArray",
          "package": "primitive",
          "signature": "Int -\u003e m (MutableByteArray (PrimState m))",
          "source": "src/Data-Primitive-ByteArray.html#newByteArray",
          "type": "function"
        },
        "index": {
          "description": "Create new mutable byte array of the specified size",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "newByteArray",
          "normalized": "Int-\u003ea(MutableByteArray(PrimState a))",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "Int-\u003em(MutableByteArray(PrimState m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:newByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003cem\u003epinned\u003c/em\u003e byte array of the specified size. The garbage collector\n is guaranteed not to move it.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "newPinnedByteArray",
          "package": "primitive",
          "signature": "Int -\u003e m (MutableByteArray (PrimState m))",
          "source": "src/Data-Primitive-ByteArray.html#newPinnedByteArray",
          "type": "function"
        },
        "index": {
          "description": "Create pinned byte array of the specified size The garbage collector is guaranteed not to move it",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "newPinnedByteArray",
          "normalized": "Int-\u003ea(MutableByteArray(PrimState a))",
          "package": "primitive",
          "partial": "Pinned Byte Array",
          "signature": "Int-\u003em(MutableByteArray(PrimState m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:newPinnedByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a primitive value from the byte array. The offset is given in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "readByteArray",
          "package": "primitive",
          "signature": "MutableByteArray (PrimState m) -\u003e Int -\u003e m a",
          "source": "src/Data-Primitive-ByteArray.html#readByteArray",
          "type": "function"
        },
        "index": {
          "description": "Read primitive value from the byte array The offset is given in elements of type rather than in bytes",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "readByteArray",
          "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003ea b",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:readByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the two arrays refer to the same memory block.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "sameMutableByteArray",
          "package": "primitive",
          "signature": "MutableByteArray s -\u003e MutableByteArray s -\u003e Bool",
          "source": "src/Data-Primitive-ByteArray.html#sameMutableByteArray",
          "type": "function"
        },
        "index": {
          "description": "Check if the two arrays refer to the same memory block",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "sameMutableByteArray",
          "normalized": "MutableByteArray a-\u003eMutableByteArray a-\u003eBool",
          "package": "primitive",
          "partial": "Mutable Byte Array",
          "signature": "MutableByteArray s-\u003eMutableByteArray s-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:sameMutableByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a slice of a mutable byte array with a value. The offset and length\n are given in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "setByteArray",
          "package": "primitive",
          "signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e Int-\u003e a-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Fill slice of mutable byte array with value The offset and length are given in elements of type rather than in bytes",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "setByteArray",
          "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eInt-\u003eb-\u003ea()",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eInt-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:setByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the byte array.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "sizeofByteArray",
          "package": "primitive",
          "signature": "ByteArray -\u003e Int",
          "source": "src/Data-Primitive-ByteArray.html#sizeofByteArray",
          "type": "function"
        },
        "index": {
          "description": "Size of the byte array",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "sizeofByteArray",
          "normalized": "ByteArray-\u003eInt",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "ByteArray-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:sizeofByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the mutable byte array.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "sizeofMutableByteArray",
          "package": "primitive",
          "signature": "MutableByteArray s -\u003e Int",
          "source": "src/Data-Primitive-ByteArray.html#sizeofMutableByteArray",
          "type": "function"
        },
        "index": {
          "description": "Size of the mutable byte array",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "sizeofMutableByteArray",
          "normalized": "MutableByteArray a-\u003eInt",
          "package": "primitive",
          "partial": "Mutable Byte Array",
          "signature": "MutableByteArray s-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:sizeofMutableByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a mutable byte array to an immutable one without copying. The\n array should not be modified after the conversion.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "unsafeFreezeByteArray",
          "package": "primitive",
          "signature": "MutableByteArray (PrimState m) -\u003e m ByteArray",
          "source": "src/Data-Primitive-ByteArray.html#unsafeFreezeByteArray",
          "type": "function"
        },
        "index": {
          "description": "Convert mutable byte array to an immutable one without copying The array should not be modified after the conversion",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "unsafeFreezeByteArray",
          "normalized": "MutableByteArray(PrimState a)-\u003ea ByteArray",
          "package": "primitive",
          "partial": "Freeze Byte Array",
          "signature": "MutableByteArray(PrimState m)-\u003em ByteArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:unsafeFreezeByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an immutable byte array to a mutable one without copying. The\n original array should not be used after the conversion.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "unsafeThawByteArray",
          "package": "primitive",
          "signature": "ByteArray -\u003e m (MutableByteArray (PrimState m))",
          "source": "src/Data-Primitive-ByteArray.html#unsafeThawByteArray",
          "type": "function"
        },
        "index": {
          "description": "Convert an immutable byte array to mutable one without copying The original array should not be used after the conversion",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "unsafeThawByteArray",
          "normalized": "ByteArray-\u003ea(MutableByteArray(PrimState a))",
          "package": "primitive",
          "partial": "Thaw Byte Array",
          "signature": "ByteArray-\u003em(MutableByteArray(PrimState m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:unsafeThawByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a primitive value to the byte array. The offset is given in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.ByteArray",
          "name": "writeByteArray",
          "package": "primitive",
          "signature": "MutableByteArray (PrimState m) -\u003e Int -\u003e a -\u003e m ()",
          "source": "src/Data-Primitive-ByteArray.html#writeByteArray",
          "type": "function"
        },
        "index": {
          "description": "Write primitive value to the byte array The offset is given in elements of type rather than in bytes",
          "hierarchy": "Data Primitive ByteArray",
          "module": "Data.Primitive.ByteArray",
          "name": "writeByteArray",
          "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eb-\u003ea()",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:writeByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMachine-dependent constants\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Primitive.MachDeps",
          "name": "MachDeps",
          "package": "primitive",
          "source": "src/Data-Primitive-MachDeps.html",
          "type": "module"
        },
        "index": {
          "description": "Machine-dependent constants",
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "MachDeps",
          "package": "primitive",
          "partial": "Mach Deps",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "Int64_#",
          "package": "primitive",
          "source": "src/Data-Primitive-MachDeps.html#Int64_%23",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "Int64_#",
          "package": "primitive",
          "partial": "Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#t:Int64_-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "Word64_#",
          "package": "primitive",
          "source": "src/Data-Primitive-MachDeps.html#Word64_%23",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "Word64_#",
          "package": "primitive",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#t:Word64_-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_CHAR",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_CHAR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_CHAR",
          "package": "primitive",
          "partial": "LIGNMENT CHAR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_CHAR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_DOUBLE",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_DOUBLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_DOUBLE",
          "package": "primitive",
          "partial": "LIGNMENT DOUBLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_DOUBLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_FLOAT",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_FLOAT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_FLOAT",
          "package": "primitive",
          "partial": "LIGNMENT FLOAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_FLOAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_FUNPTR",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_FUNPTR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_FUNPTR",
          "package": "primitive",
          "partial": "LIGNMENT FUNPTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_FUNPTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT",
          "package": "primitive",
          "partial": "LIGNMENT INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT16",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT16",
          "package": "primitive",
          "partial": "LIGNMENT INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT32",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT32",
          "package": "primitive",
          "partial": "LIGNMENT INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT64",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT64",
          "package": "primitive",
          "partial": "LIGNMENT INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT8",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_INT8",
          "package": "primitive",
          "partial": "LIGNMENT INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_PTR",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_PTR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_PTR",
          "package": "primitive",
          "partial": "LIGNMENT PTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_PTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_STABLEPTR",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_STABLEPTR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_STABLEPTR",
          "package": "primitive",
          "partial": "LIGNMENT STABLEPTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_STABLEPTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD",
          "package": "primitive",
          "partial": "LIGNMENT WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD16",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD16",
          "package": "primitive",
          "partial": "LIGNMENT WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD32",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD32",
          "package": "primitive",
          "partial": "LIGNMENT WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD64",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD64",
          "package": "primitive",
          "partial": "LIGNMENT WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD8",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "aLIGNMENT_WORD8",
          "package": "primitive",
          "partial": "LIGNMENT WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_CHAR",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_CHAR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_CHAR",
          "package": "primitive",
          "partial": "IZEOF CHAR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_CHAR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_DOUBLE",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_DOUBLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_DOUBLE",
          "package": "primitive",
          "partial": "IZEOF DOUBLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_DOUBLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_FLOAT",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_FLOAT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_FLOAT",
          "package": "primitive",
          "partial": "IZEOF FLOAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_FLOAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_FUNPTR",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_FUNPTR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_FUNPTR",
          "package": "primitive",
          "partial": "IZEOF FUNPTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_FUNPTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT",
          "package": "primitive",
          "partial": "IZEOF INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT16",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT16",
          "package": "primitive",
          "partial": "IZEOF INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT32",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT32",
          "package": "primitive",
          "partial": "IZEOF INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT64",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT64",
          "package": "primitive",
          "partial": "IZEOF INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT8",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_INT8",
          "package": "primitive",
          "partial": "IZEOF INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_PTR",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_PTR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_PTR",
          "package": "primitive",
          "partial": "IZEOF PTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_PTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_STABLEPTR",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_STABLEPTR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_STABLEPTR",
          "package": "primitive",
          "partial": "IZEOF STABLEPTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_STABLEPTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD",
          "package": "primitive",
          "partial": "IZEOF WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD16",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD16",
          "package": "primitive",
          "partial": "IZEOF WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD32",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD32",
          "package": "primitive",
          "partial": "IZEOF WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD64",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD64",
          "package": "primitive",
          "partial": "IZEOF WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD8",
          "package": "primitive",
          "signature": "Int",
          "source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MachDeps",
          "module": "Data.Primitive.MachDeps",
          "name": "sIZEOF_WORD8",
          "package": "primitive",
          "partial": "IZEOF WORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive boxed mutable variables\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Primitive.MutVar",
          "name": "MutVar",
          "package": "primitive",
          "source": "src/Data-Primitive-MutVar.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive boxed mutable variables",
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "MutVar",
          "package": "primitive",
          "partial": "Mut Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e behaves like a single-element mutable array associated\n with a primitive state token.\n\u003c/p\u003e",
          "module": "Data.Primitive.MutVar",
          "name": "MutVar",
          "package": "primitive",
          "source": "src/Data-Primitive-MutVar.html#MutVar",
          "type": "data"
        },
        "index": {
          "description": "MutVar behaves like single-element mutable array associated with primitive state token",
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "MutVar",
          "package": "primitive",
          "partial": "Mut Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#t:MutVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Primitive.MutVar",
          "name": "MutVar",
          "package": "primitive",
          "signature": "MutVar (MutVar# s a)",
          "source": "src/Data-Primitive-MutVar.html#MutVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "MutVar",
          "package": "primitive",
          "partial": "Mut Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:MutVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically mutate the contents of a \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Primitive.MutVar",
          "name": "atomicModifyMutVar",
          "package": "primitive",
          "signature": "MutVar (PrimState m) a -\u003e (a -\u003e (a, b)) -\u003e m b",
          "source": "src/Data-Primitive-MutVar.html#atomicModifyMutVar",
          "type": "function"
        },
        "index": {
          "description": "Atomically mutate the contents of MutVar",
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "atomicModifyMutVar",
          "normalized": "MutVar(PrimState a)b-\u003e(b-\u003e(b,c))-\u003ea c",
          "package": "primitive",
          "partial": "Modify Mut Var",
          "signature": "MutVar(PrimState m)a-\u003e(a-\u003e(a,b))-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:atomicModifyMutVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003eatomicModifyMutVar\u003c/a\u003e\u003c/code\u003e. This forces both the value stored\n in the \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e as well as the value returned.\n\u003c/p\u003e",
          "module": "Data.Primitive.MutVar",
          "name": "atomicModifyMutVar'",
          "package": "primitive",
          "signature": "MutVar (PrimState m) a -\u003e (a -\u003e (a, b)) -\u003e m b",
          "source": "src/Data-Primitive-MutVar.html#atomicModifyMutVar%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of atomicModifyMutVar This forces both the value stored in the MutVar as well as the value returned",
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "atomicModifyMutVar'",
          "normalized": "MutVar(PrimState a)b-\u003e(b-\u003e(b,c))-\u003ea c",
          "package": "primitive",
          "partial": "Modify Mut Var'",
          "signature": "MutVar(PrimState m)a-\u003e(a-\u003e(a,b))-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:atomicModifyMutVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of a \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Primitive.MutVar",
          "name": "modifyMutVar",
          "package": "primitive",
          "signature": "MutVar (PrimState m) a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Primitive-MutVar.html#modifyMutVar",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of MutVar",
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "modifyMutVar",
          "normalized": "MutVar(PrimState a)b-\u003e(b-\u003eb)-\u003ea()",
          "package": "primitive",
          "partial": "Mut Var",
          "signature": "MutVar(PrimState m)a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:modifyMutVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003emodifyMutVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Primitive.MutVar",
          "name": "modifyMutVar'",
          "package": "primitive",
          "signature": "MutVar (PrimState m) a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Primitive-MutVar.html#modifyMutVar%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of modifyMutVar",
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "modifyMutVar'",
          "normalized": "MutVar(PrimState a)b-\u003e(b-\u003eb)-\u003ea()",
          "package": "primitive",
          "partial": "Mut Var'",
          "signature": "MutVar(PrimState m)a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:modifyMutVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e with the specified initial value\n\u003c/p\u003e",
          "module": "Data.Primitive.MutVar",
          "name": "newMutVar",
          "package": "primitive",
          "signature": "a -\u003e m (MutVar (PrimState m) a)",
          "source": "src/Data-Primitive-MutVar.html#newMutVar",
          "type": "function"
        },
        "index": {
          "description": "Create new MutVar with the specified initial value",
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "newMutVar",
          "normalized": "a-\u003eb(MutVar(PrimState b)a)",
          "package": "primitive",
          "partial": "Mut Var",
          "signature": "a-\u003em(MutVar(PrimState m)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:newMutVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Primitive.MutVar",
          "name": "readMutVar",
          "package": "primitive",
          "signature": "MutVar (PrimState m) a -\u003e m a",
          "source": "src/Data-Primitive-MutVar.html#readMutVar",
          "type": "function"
        },
        "index": {
          "description": "Read the value of MutVar",
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "readMutVar",
          "normalized": "MutVar(PrimState a)b-\u003ea b",
          "package": "primitive",
          "partial": "Mut Var",
          "signature": "MutVar(PrimState m)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:readMutVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into a \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Primitive.MutVar",
          "name": "writeMutVar",
          "package": "primitive",
          "signature": "MutVar (PrimState m) a -\u003e a -\u003e m ()",
          "source": "src/Data-Primitive-MutVar.html#writeMutVar",
          "type": "function"
        },
        "index": {
          "description": "Write new value into MutVar",
          "hierarchy": "Data Primitive MutVar",
          "module": "Data.Primitive.MutVar",
          "name": "writeMutVar",
          "normalized": "MutVar(PrimState a)b-\u003eb-\u003ea()",
          "package": "primitive",
          "partial": "Mut Var",
          "signature": "MutVar(PrimState m)a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:writeMutVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types and classes for primitive array operations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Primitive.Types",
          "name": "Types",
          "package": "primitive",
          "source": "src/Data-Primitive-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Basic types and classes for primitive array operations",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "Types",
          "package": "primitive",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA machine address\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "Addr",
          "package": "primitive",
          "source": "src/Data-Primitive-Types.html#Addr",
          "type": "data"
        },
        "index": {
          "description": "machine address",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "Addr",
          "package": "primitive",
          "partial": "Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#t:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types supporting primitive array operations\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "Prim",
          "package": "primitive",
          "source": "src/Data-Primitive-Types.html#Prim",
          "type": "class"
        },
        "index": {
          "description": "Class of types supporting primitive array operations",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "Prim",
          "package": "primitive",
          "partial": "Prim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#t:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignment of values of type \u003ccode\u003ea\u003c/code\u003e. The argument is not used.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "alignment#",
          "package": "primitive",
          "signature": "a -\u003e Int#",
          "source": "src/Data-Primitive-Types.html#alignment%23",
          "type": "method"
        },
        "index": {
          "description": "Alignment of values of type The argument is not used",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "alignment#",
          "normalized": "a-\u003eInt #",
          "package": "primitive",
          "signature": "a-\u003eInt #",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:alignment-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from the array. The offset is in elements of type\n \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "indexByteArray#",
          "package": "primitive",
          "signature": "ByteArray# -\u003e Int# -\u003e a",
          "source": "src/Data-Primitive-Types.html#indexByteArray%23",
          "type": "method"
        },
        "index": {
          "description": "Read value from the array The offset is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "indexByteArray#",
          "normalized": "ByteArray #-\u003eInt #-\u003ea",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "ByteArray #-\u003eInt #-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:indexByteArray-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from a memory position given by an address and an offset.\n The memory block the address refers to must be immutable. The offset is in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "indexOffAddr#",
          "package": "primitive",
          "signature": "Addr# -\u003e Int# -\u003e a",
          "source": "src/Data-Primitive-Types.html#indexOffAddr%23",
          "type": "method"
        },
        "index": {
          "description": "Read value from memory position given by an address and an offset The memory block the address refers to must be immutable The offset is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "indexOffAddr#",
          "normalized": "Addr #-\u003eInt #-\u003ea",
          "package": "primitive",
          "partial": "Off Addr",
          "signature": "Addr #-\u003eInt #-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:indexOffAddr-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from the mutable array. The offset is in elements of type\n \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "readByteArray#",
          "package": "primitive",
          "signature": "MutableByteArray# s -\u003e Int# -\u003e State# s -\u003e (#State# s, a#)",
          "source": "src/Data-Primitive-Types.html#readByteArray%23",
          "type": "method"
        },
        "index": {
          "description": "Read value from the mutable array The offset is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "readByteArray#",
          "normalized": "MutableByteArray # a-\u003eInt #-\u003eState # a-\u003e(#State # a,b #)",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "MutableByteArray # s-\u003eInt #-\u003eState # s-\u003e(#State # s,a #)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:readByteArray-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from a memory position given by an address and an offset.\n The offset is in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "readOffAddr#",
          "package": "primitive",
          "signature": "Addr# -\u003e Int# -\u003e State# s -\u003e (#State# s, a#)",
          "source": "src/Data-Primitive-Types.html#readOffAddr%23",
          "type": "method"
        },
        "index": {
          "description": "Read value from memory position given by an address and an offset The offset is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "readOffAddr#",
          "normalized": "Addr #-\u003eInt #-\u003eState # a-\u003e(#State # a,b #)",
          "package": "primitive",
          "partial": "Off Addr",
          "signature": "Addr #-\u003eInt #-\u003eState # s-\u003e(#State # s,a #)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:readOffAddr-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a slice of the mutable array with a value. The offset and length\n of the chunk are in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "setByteArray#",
          "package": "primitive",
          "signature": "MutableByteArray# s -\u003e Int# -\u003e Int# -\u003e a -\u003e State# s -\u003e State# s",
          "source": "src/Data-Primitive-Types.html#setByteArray%23",
          "type": "method"
        },
        "index": {
          "description": "Fill slice of the mutable array with value The offset and length of the chunk are in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "setByteArray#",
          "normalized": "MutableByteArray # a-\u003eInt #-\u003eInt #-\u003eb-\u003eState # a-\u003eState # a",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "MutableByteArray # s-\u003eInt #-\u003eInt #-\u003ea-\u003eState # s-\u003eState # s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:setByteArray-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a memory block given by an address, an offset and a length.\n The offset and length are in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "setOffAddr#",
          "package": "primitive",
          "signature": "Addr# -\u003e Int# -\u003e Int# -\u003e a -\u003e State# s -\u003e State# s",
          "source": "src/Data-Primitive-Types.html#setOffAddr%23",
          "type": "method"
        },
        "index": {
          "description": "Fill memory block given by an address an offset and length The offset and length are in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "setOffAddr#",
          "normalized": "Addr #-\u003eInt #-\u003eInt #-\u003ea-\u003eState # b-\u003eState # b",
          "package": "primitive",
          "partial": "Off Addr",
          "signature": "Addr #-\u003eInt #-\u003eInt #-\u003ea-\u003eState # s-\u003eState # s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:setOffAddr-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of values of type \u003ccode\u003ea\u003c/code\u003e. The argument is not used.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "sizeOf#",
          "package": "primitive",
          "signature": "a -\u003e Int#",
          "source": "src/Data-Primitive-Types.html#sizeOf%23",
          "type": "method"
        },
        "index": {
          "description": "Size of values of type The argument is not used",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "sizeOf#",
          "normalized": "a-\u003eInt #",
          "package": "primitive",
          "partial": "Of",
          "signature": "a-\u003eInt #",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:sizeOf-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to the mutable array. The offset is in elements of type\n \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "writeByteArray#",
          "package": "primitive",
          "signature": "MutableByteArray# s -\u003e Int# -\u003e a -\u003e State# s -\u003e State# s",
          "source": "src/Data-Primitive-Types.html#writeByteArray%23",
          "type": "method"
        },
        "index": {
          "description": "Write value to the mutable array The offset is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "writeByteArray#",
          "normalized": "MutableByteArray # a-\u003eInt #-\u003eb-\u003eState # a-\u003eState # a",
          "package": "primitive",
          "partial": "Byte Array",
          "signature": "MutableByteArray # s-\u003eInt #-\u003ea-\u003eState # s-\u003eState # s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:writeByteArray-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a memory position given by an address and an offset.\n The offset is in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
          "module": "Data.Primitive.Types",
          "name": "writeOffAddr#",
          "package": "primitive",
          "signature": "Addr# -\u003e Int# -\u003e a -\u003e State# s -\u003e State# s",
          "source": "src/Data-Primitive-Types.html#writeOffAddr%23",
          "type": "method"
        },
        "index": {
          "description": "Write value to memory position given by an address and an offset The offset is in elements of type rather than in bytes",
          "hierarchy": "Data Primitive Types",
          "module": "Data.Primitive.Types",
          "name": "writeOffAddr#",
          "normalized": "Addr #-\u003eInt #-\u003ea-\u003eState # b-\u003eState # b",
          "package": "primitive",
          "partial": "Off Addr",
          "signature": "Addr #-\u003eInt #-\u003ea-\u003eState # s-\u003eState # s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:writeOffAddr-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReexports all primitive operations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Primitive",
          "name": "Primitive",
          "package": "primitive",
          "source": "src/Data-Primitive.html",
          "type": "module"
        },
        "index": {
          "description": "Reexports all primitive operations",
          "hierarchy": "Data Primitive",
          "module": "Data.Primitive",
          "name": "Primitive",
          "package": "primitive",
          "partial": "Primitive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignment of values of type \u003ccode\u003ea\u003c/code\u003e. The argument is not used.\n\u003c/p\u003e",
          "module": "Data.Primitive",
          "name": "alignment",
          "package": "primitive",
          "signature": "a -\u003e Int",
          "source": "src/Data-Primitive.html#alignment",
          "type": "function"
        },
        "index": {
          "description": "Alignment of values of type The argument is not used",
          "hierarchy": "Data Primitive",
          "module": "Data.Primitive",
          "name": "alignment",
          "normalized": "a-\u003eInt",
          "package": "primitive",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive.html#v:alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of values of type \u003ccode\u003ea\u003c/code\u003e. The argument is not used.\n\u003c/p\u003e",
          "module": "Data.Primitive",
          "name": "sizeOf",
          "package": "primitive",
          "signature": "a -\u003e Int",
          "source": "src/Data-Primitive.html#sizeOf",
          "type": "function"
        },
        "index": {
          "description": "Size of values of type The argument is not used",
          "hierarchy": "Data Primitive",
          "module": "Data.Primitive",
          "name": "sizeOf",
          "normalized": "a-\u003eInt",
          "package": "primitive",
          "partial": "Of",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive.html#v:sizeOf"
      }
    }
  ]
]