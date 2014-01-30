[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive state-transformer monads\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Primitive.html",
        "fct-type": "module",
        "title": "Primitive"
      },
      "index": {
        "description": "Primitive state-transformer monads",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "Primitive",
        "normalized": "",
        "package": "primitive",
        "partial": "Primitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#t:PrimMonad",
      "description": {
        "fct-descr": "\u003cp\u003eClass of primitive state-transformer monads\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Primitive.html#PrimMonad",
        "fct-type": "class",
        "title": "PrimMonad"
      },
      "index": {
        "description": "Class of primitive state-transformer monads",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "PrimMonad",
        "normalized": "",
        "package": "primitive",
        "partial": "Prim Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#t:RealWorld",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eRealWorld\u003c/code\u003e is deeply magical.  It is \u003cem\u003eprimitive\u003c/em\u003e, but it is not\n \t\u003cem\u003eunlifted\u003c/em\u003e (hence \u003ccode\u003eptrArg\u003c/code\u003e).  We never manipulate values of type\n \t\u003ccode\u003eRealWorld\u003c/code\u003e; it's only used in the type system, to parameterise \u003ccode\u003eState#\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RealWorld"
      },
      "index": {
        "description": "RealWorld is deeply magical It is primitive but it is not unlifted hence ptrArg We never manipulate values of type RealWorld it only used in the type system to parameterise State",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "RealWorld",
        "normalized": "",
        "package": "primitive",
        "partial": "Real World",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:internal",
      "description": {
        "fct-descr": "\u003cp\u003eExpose the internal structure of the monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "m a -\u003e State# (PrimState m) -\u003e (#State# (PrimState m), a#)",
        "fct-source": "src/Control-Monad-Primitive.html#internal",
        "fct-type": "method",
        "title": "internal"
      },
      "index": {
        "description": "Expose the internal structure of the monad",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "internal",
        "normalized": "a b-\u003eState #(PrimState a)-\u003e(#State #(PrimState a),b #)",
        "package": "primitive",
        "partial": "",
        "signature": "m a-\u003eState #(PrimState m)-\u003e(#State #(PrimState m),a #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primToIO",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eRealWorld\u003c/a\u003e\u003c/code\u003e state token to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "m a -\u003e IO a",
        "fct-source": "src/Control-Monad-Primitive.html#primToIO",
        "fct-type": "function",
        "title": "primToIO"
      },
      "index": {
        "description": "Convert PrimMonad with RealWorld state token to IO",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "primToIO",
        "normalized": "a b-\u003eIO b",
        "package": "primitive",
        "partial": "To IO",
        "signature": "m a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primToPrim",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to another monad with the same state token.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "m1 a -\u003e m2 a",
        "fct-source": "src/Control-Monad-Primitive.html#primToPrim",
        "fct-type": "function",
        "title": "primToPrim"
      },
      "index": {
        "description": "Convert PrimMonad to another monad with the same state token",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "primToPrim",
        "normalized": "a b-\u003ea b",
        "package": "primitive",
        "partial": "To Prim",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primToST",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "m a -\u003e ST (PrimState m) a",
        "fct-source": "src/Control-Monad-Primitive.html#primToST",
        "fct-type": "function",
        "title": "primToST"
      },
      "index": {
        "description": "Convert PrimMonad to ST",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "primToST",
        "normalized": "a b-\u003eST(PrimState a)b",
        "package": "primitive",
        "partial": "To ST",
        "signature": "m a-\u003eST(PrimState m)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primitive",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a primitive operation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "(State# (PrimState m) -\u003e (#State# (PrimState m), a#)) -\u003e m a",
        "fct-source": "src/Control-Monad-Primitive.html#primitive",
        "fct-type": "method",
        "title": "primitive"
      },
      "index": {
        "description": "Execute primitive operation",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "primitive",
        "normalized": "(State #(PrimState a)-\u003e(#State #(PrimState a),b #))-\u003ea b",
        "package": "primitive",
        "partial": "",
        "signature": "(State #(PrimState m)-\u003e(#State #(PrimState m),a #))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:primitive_",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a primitive operation with no result\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "(State# (PrimState m) -\u003e State# (PrimState m)) -\u003e m ()",
        "fct-source": "src/Control-Monad-Primitive.html#primitive_",
        "fct-type": "function",
        "title": "primitive_"
      },
      "index": {
        "description": "Execute primitive operation with no result",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "primitive_",
        "normalized": "(State #(PrimState a)-\u003eState #(PrimState a))-\u003ea()",
        "package": "primitive",
        "partial": "",
        "signature": "(State #(PrimState m)-\u003eState #(PrimState m))-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:touch",
      "description": {
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Control-Monad-Primitive.html#touch",
        "fct-type": "function",
        "title": "touch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "touch",
        "normalized": "a-\u003eb()",
        "package": "primitive",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafeInlineIO",
      "description": {
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "IO a -\u003e a",
        "fct-source": "src/Control-Monad-Primitive.html#unsafeInlineIO",
        "fct-type": "function",
        "title": "unsafeInlineIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "unsafeInlineIO",
        "normalized": "IO a-\u003ea",
        "package": "primitive",
        "partial": "Inline IO",
        "signature": "IO a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafeInlinePrim",
      "description": {
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "m a -\u003e a",
        "fct-source": "src/Control-Monad-Primitive.html#unsafeInlinePrim",
        "fct-type": "function",
        "title": "unsafeInlinePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "unsafeInlinePrim",
        "normalized": "a b-\u003eb",
        "package": "primitive",
        "partial": "Inline Prim",
        "signature": "m a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafeInlineST",
      "description": {
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "ST s a -\u003e a",
        "fct-source": "src/Control-Monad-Primitive.html#unsafeInlineST",
        "fct-type": "function",
        "title": "unsafeInlineST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "unsafeInlineST",
        "normalized": "ST a b-\u003eb",
        "package": "primitive",
        "partial": "Inline ST",
        "signature": "ST s a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafePrimToIO",
      "description": {
        "fct-descr": "\u003cp\u003eConvert any \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. This operation is highly unsafe!\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "m a -\u003e IO a",
        "fct-source": "src/Control-Monad-Primitive.html#unsafePrimToIO",
        "fct-type": "function",
        "title": "unsafePrimToIO"
      },
      "index": {
        "description": "Convert any PrimMonad to IO This operation is highly unsafe",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "unsafePrimToIO",
        "normalized": "a b-\u003eIO b",
        "package": "primitive",
        "partial": "Prim To IO",
        "signature": "m a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafePrimToPrim",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to another monad with a possibly different state\n token. This operation is highly unsafe!\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "m1 a -\u003e m2 a",
        "fct-source": "src/Control-Monad-Primitive.html#unsafePrimToPrim",
        "fct-type": "function",
        "title": "unsafePrimToPrim"
      },
      "index": {
        "description": "Convert PrimMonad to another monad with possibly different state token This operation is highly unsafe",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "unsafePrimToPrim",
        "normalized": "a b-\u003ea b",
        "package": "primitive",
        "partial": "Prim To Prim",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Control-Monad-Primitive.html#v:unsafePrimToST",
      "description": {
        "fct-descr": "\u003cp\u003eConvert any \u003ccode\u003e\u003ca\u003ePrimMonad\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e with an arbitrary state token. This\n operation is highly unsafe!\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Primitive",
        "fct-package": "primitive",
        "fct-signature": "m a -\u003e ST s a",
        "fct-source": "src/Control-Monad-Primitive.html#unsafePrimToST",
        "fct-type": "function",
        "title": "unsafePrimToST"
      },
      "index": {
        "description": "Convert any PrimMonad to ST with an arbitrary state token This operation is highly unsafe",
        "hierarchy": "Control Monad Primitive",
        "module": "Control.Monad.Primitive",
        "name": "unsafePrimToST",
        "normalized": "a b-\u003eST c b",
        "package": "primitive",
        "partial": "Prim To ST",
        "signature": "m a-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive operations on machine addresses\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "module",
        "fct-source": "src/Data-Primitive-Addr.html",
        "fct-type": "module",
        "title": "Addr"
      },
      "index": {
        "description": "Primitive operations on machine addresses",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "Addr",
        "normalized": "",
        "package": "primitive",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#t:Addr",
      "description": {
        "fct-descr": "\u003cp\u003eA machine address\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-source": "src/Data-Primitive-Types.html#Addr",
        "fct-type": "data",
        "title": "Addr"
      },
      "index": {
        "description": "machine address",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "Addr",
        "normalized": "",
        "package": "primitive",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:Addr",
      "description": {
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr Addr#",
        "fct-source": "src/Data-Primitive-Types.html#Addr",
        "fct-type": "function",
        "title": "Addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "Addr",
        "normalized": "",
        "package": "primitive",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:copyAddr",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the given number of bytes from the second \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e to the first. The\n areas may not overlap.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr-\u003e Addr-\u003e Int-\u003e m ()",
        "fct-type": "function",
        "title": "copyAddr"
      },
      "index": {
        "description": "Copy the given number of bytes from the second Addr to the first The areas may not overlap",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "copyAddr",
        "normalized": "Addr-\u003eAddr-\u003eInt-\u003ea()",
        "package": "primitive",
        "partial": "Addr",
        "signature": "Addr-\u003eAddr-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:indexOffAddr",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from a memory position given by an address and an offset.\n The memory block the address refers to must be immutable. The offset is in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr -\u003e Int -\u003e a",
        "fct-source": "src/Data-Primitive-Addr.html#indexOffAddr",
        "fct-type": "function",
        "title": "indexOffAddr"
      },
      "index": {
        "description": "Read value from memory position given by an address and an offset The memory block the address refers to must be immutable The offset is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "indexOffAddr",
        "normalized": "Addr-\u003eInt-\u003ea",
        "package": "primitive",
        "partial": "Off Addr",
        "signature": "Addr-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:minusAddr",
      "description": {
        "fct-descr": "\u003cp\u003eDistance in bytes between two addresses. The result is only valid if the\n difference fits in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr -\u003e Addr -\u003e Int",
        "fct-source": "src/Data-Primitive-Addr.html#minusAddr",
        "fct-type": "function",
        "title": "minusAddr"
      },
      "index": {
        "description": "Distance in bytes between two addresses The result is only valid if the difference fits in an Int",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "minusAddr",
        "normalized": "Addr-\u003eAddr-\u003eInt",
        "package": "primitive",
        "partial": "Addr",
        "signature": "Addr-\u003eAddr-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:moveAddr",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the given number of bytes from the second \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e to the first. The\n areas may overlap.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr-\u003e Addr-\u003e Int-\u003e m ()",
        "fct-type": "function",
        "title": "moveAddr"
      },
      "index": {
        "description": "Copy the given number of bytes from the second Addr to the first The areas may overlap",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "moveAddr",
        "normalized": "Addr-\u003eAddr-\u003eInt-\u003ea()",
        "package": "primitive",
        "partial": "Addr",
        "signature": "Addr-\u003eAddr-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:nullAddr",
      "description": {
        "fct-descr": "\u003cp\u003eThe null address\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr",
        "fct-source": "src/Data-Primitive-Addr.html#nullAddr",
        "fct-type": "function",
        "title": "nullAddr"
      },
      "index": {
        "description": "The null address",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "nullAddr",
        "normalized": "",
        "package": "primitive",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:plusAddr",
      "description": {
        "fct-descr": "\u003cp\u003eOffset an address by the given number of bytes\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr -\u003e Int -\u003e Addr",
        "fct-source": "src/Data-Primitive-Addr.html#plusAddr",
        "fct-type": "function",
        "title": "plusAddr"
      },
      "index": {
        "description": "Offset an address by the given number of bytes",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "plusAddr",
        "normalized": "Addr-\u003eInt-\u003eAddr",
        "package": "primitive",
        "partial": "Addr",
        "signature": "Addr-\u003eInt-\u003eAddr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:readOffAddr",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from a memory position given by an address and an offset.\n The offset is in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr -\u003e Int -\u003e m a",
        "fct-source": "src/Data-Primitive-Addr.html#readOffAddr",
        "fct-type": "function",
        "title": "readOffAddr"
      },
      "index": {
        "description": "Read value from memory position given by an address and an offset The offset is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "readOffAddr",
        "normalized": "Addr-\u003eInt-\u003ea b",
        "package": "primitive",
        "partial": "Off Addr",
        "signature": "Addr-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:remAddr",
      "description": {
        "fct-descr": "\u003cp\u003eThe remainder of the address and the integer.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Primitive-Addr.html#remAddr",
        "fct-type": "function",
        "title": "remAddr"
      },
      "index": {
        "description": "The remainder of the address and the integer",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "remAddr",
        "normalized": "Addr-\u003eInt-\u003eInt",
        "package": "primitive",
        "partial": "Addr",
        "signature": "Addr-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:setAddr",
      "description": {
        "fct-descr": "\u003cp\u003eFill a memory block of with the given value. The length is in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr -\u003e Int -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Primitive-Addr.html#setAddr",
        "fct-type": "function",
        "title": "setAddr"
      },
      "index": {
        "description": "Fill memory block of with the given value The length is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "setAddr",
        "normalized": "Addr-\u003eInt-\u003ea-\u003eb()",
        "package": "primitive",
        "partial": "Addr",
        "signature": "Addr-\u003eInt-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Addr.html#v:writeOffAddr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to a memory position given by an address and an offset.\n The offset is in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Addr",
        "fct-package": "primitive",
        "fct-signature": "Addr -\u003e Int -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Primitive-Addr.html#writeOffAddr",
        "fct-type": "function",
        "title": "writeOffAddr"
      },
      "index": {
        "description": "Write value to memory position given by an address and an offset The offset is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Addr",
        "module": "Data.Primitive.Addr",
        "name": "writeOffAddr",
        "normalized": "Addr-\u003eInt-\u003ea-\u003eb()",
        "package": "primitive",
        "partial": "Off Addr",
        "signature": "Addr-\u003eInt-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive boxed arrays\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "module",
        "fct-source": "src/Data-Primitive-Array.html",
        "fct-type": "module",
        "title": "Array"
      },
      "index": {
        "description": "Primitive boxed arrays",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "Array",
        "normalized": "",
        "package": "primitive",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eBoxed arrays\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-source": "src/Data-Primitive-Array.html#Array",
        "fct-type": "data",
        "title": "Array"
      },
      "index": {
        "description": "Boxed arrays",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "Array",
        "normalized": "",
        "package": "primitive",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#t:MutableArray",
      "description": {
        "fct-descr": "\u003cp\u003eMutable boxed arrays associated with a primitive state token.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-source": "src/Data-Primitive-Array.html#MutableArray",
        "fct-type": "data",
        "title": "MutableArray"
      },
      "index": {
        "description": "Mutable boxed arrays associated with primitive state token",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "MutableArray",
        "normalized": "",
        "package": "primitive",
        "partial": "Mutable Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:Array",
      "description": {
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "Array (Array# a)",
        "fct-source": "src/Data-Primitive-Array.html#Array",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "Array",
        "normalized": "",
        "package": "primitive",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:MutableArray",
      "description": {
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "MutableArray (MutableArray# s a)",
        "fct-source": "src/Data-Primitive-Array.html#MutableArray",
        "fct-type": "function",
        "title": "MutableArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "MutableArray",
        "normalized": "",
        "package": "primitive",
        "partial": "Mutable Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:copyArray",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a slice of an immutable array to a mutable array.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "MutableArray (PrimState m) a-\u003e Int-\u003e Array a-\u003e Int-\u003e Int-\u003e m ()",
        "fct-type": "function",
        "title": "copyArray"
      },
      "index": {
        "description": "Copy slice of an immutable array to mutable array",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "copyArray",
        "normalized": "MutableArray(PrimState a)b-\u003eInt-\u003eArray b-\u003eInt-\u003eInt-\u003ea()",
        "package": "primitive",
        "partial": "Array",
        "signature": "MutableArray(PrimState m)a-\u003eInt-\u003eArray a-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:copyMutableArray",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a slice of a mutable array to another array. The two arrays may\n not be the same.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "MutableArray (PrimState m) a-\u003e Int-\u003e MutableArray (PrimState m) a-\u003e Int-\u003e Int-\u003e m ()",
        "fct-type": "function",
        "title": "copyMutableArray"
      },
      "index": {
        "description": "Copy slice of mutable array to another array The two arrays may not be the same",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "copyMutableArray",
        "normalized": "MutableArray(PrimState a)b-\u003eInt-\u003eMutableArray(PrimState a)b-\u003eInt-\u003eInt-\u003ea()",
        "package": "primitive",
        "partial": "Mutable Array",
        "signature": "MutableArray(PrimState m)a-\u003eInt-\u003eMutableArray(PrimState m)a-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:indexArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from the immutable array at the given index.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "Array a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Primitive-Array.html#indexArray",
        "fct-type": "function",
        "title": "indexArray"
      },
      "index": {
        "description": "Read value from the immutable array at the given index",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "indexArray",
        "normalized": "Array a-\u003eInt-\u003ea",
        "package": "primitive",
        "partial": "Array",
        "signature": "Array a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:indexArrayM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadically read a value from the immutable array at the given index.\n This allows us to be strict in the array while remaining lazy in the read\n element which is very useful for collective operations. Suppose we want to\n copy an array. We could do something like this:\n\u003c/p\u003e\u003cpre\u003e copy marr arr ... = do ...\n                        writeArray marr i (indexArray arr i) ...\n                        ...\n\u003c/pre\u003e\u003cp\u003eBut since primitive arrays are lazy, the calls to \u003ccode\u003e\u003ca\u003eindexArray\u003c/a\u003e\u003c/code\u003e will not be\n evaluated. Rather, \u003ccode\u003emarr\u003c/code\u003e will be filled with thunks each of which would\n retain a reference to \u003ccode\u003earr\u003c/code\u003e. This is definitely not what we want!\n\u003c/p\u003e\u003cp\u003eWith \u003ccode\u003e\u003ca\u003eindexArrayM\u003c/a\u003e\u003c/code\u003e, we can instead write\n\u003c/p\u003e\u003cpre\u003e copy marr arr ... = do ...\n                        x \u003c- indexArrayM arr i\n                        writeArray marr i x\n                        ...\n\u003c/pre\u003e\u003cp\u003eNow, indexing is executed immediately although the returned element is\n still not evaluated.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "Array a -\u003e Int -\u003e m a",
        "fct-source": "src/Data-Primitive-Array.html#indexArrayM",
        "fct-type": "function",
        "title": "indexArrayM"
      },
      "index": {
        "description": "Monadically read value from the immutable array at the given index This allows us to be strict in the array while remaining lazy in the read element which is very useful for collective operations Suppose we want to copy an array We could do something like this copy marr arr do writeArray marr indexArray arr But since primitive arrays are lazy the calls to indexArray will not be evaluated Rather marr will be filled with thunks each of which would retain reference to arr This is definitely not what we want With indexArrayM we can instead write copy marr arr do indexArrayM arr writeArray marr Now indexing is executed immediately although the returned element is still not evaluated",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "indexArrayM",
        "normalized": "Array a-\u003eInt-\u003eb a",
        "package": "primitive",
        "partial": "Array",
        "signature": "Array a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:newArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new mutable array of the specified size and initialise all\n elements with the given value.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "Int -\u003e a -\u003e m (MutableArray (PrimState m) a)",
        "fct-source": "src/Data-Primitive-Array.html#newArray",
        "fct-type": "function",
        "title": "newArray"
      },
      "index": {
        "description": "Create new mutable array of the specified size and initialise all elements with the given value",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "newArray",
        "normalized": "Int-\u003ea-\u003eb(MutableArray(PrimState b)a)",
        "package": "primitive",
        "partial": "Array",
        "signature": "Int-\u003ea-\u003em(MutableArray(PrimState m)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:readArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from the array at the given index.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "MutableArray (PrimState m) a -\u003e Int -\u003e m a",
        "fct-source": "src/Data-Primitive-Array.html#readArray",
        "fct-type": "function",
        "title": "readArray"
      },
      "index": {
        "description": "Read value from the array at the given index",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "readArray",
        "normalized": "MutableArray(PrimState a)b-\u003eInt-\u003ea b",
        "package": "primitive",
        "partial": "Array",
        "signature": "MutableArray(PrimState m)a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:sameMutableArray",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the two arrays refer to the same memory block.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "MutableArray s a -\u003e MutableArray s a -\u003e Bool",
        "fct-source": "src/Data-Primitive-Array.html#sameMutableArray",
        "fct-type": "function",
        "title": "sameMutableArray"
      },
      "index": {
        "description": "Check whether the two arrays refer to the same memory block",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "sameMutableArray",
        "normalized": "MutableArray a b-\u003eMutableArray a b-\u003eBool",
        "package": "primitive",
        "partial": "Mutable Array",
        "signature": "MutableArray s a-\u003eMutableArray s a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:unsafeFreezeArray",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a mutable array to an immutable one without copying. The\n array should not be modified after the conversion.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "MutableArray (PrimState m) a -\u003e m (Array a)",
        "fct-source": "src/Data-Primitive-Array.html#unsafeFreezeArray",
        "fct-type": "function",
        "title": "unsafeFreezeArray"
      },
      "index": {
        "description": "Convert mutable array to an immutable one without copying The array should not be modified after the conversion",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "unsafeFreezeArray",
        "normalized": "MutableArray(PrimState a)b-\u003ea(Array b)",
        "package": "primitive",
        "partial": "Freeze Array",
        "signature": "MutableArray(PrimState m)a-\u003em(Array a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:unsafeThawArray",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an immutable array to an mutable one without copying. The\n immutable array should not be used after the conversion.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "Array a -\u003e m (MutableArray (PrimState m) a)",
        "fct-source": "src/Data-Primitive-Array.html#unsafeThawArray",
        "fct-type": "function",
        "title": "unsafeThawArray"
      },
      "index": {
        "description": "Convert an immutable array to an mutable one without copying The immutable array should not be used after the conversion",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "unsafeThawArray",
        "normalized": "Array a-\u003eb(MutableArray(PrimState b)a)",
        "package": "primitive",
        "partial": "Thaw Array",
        "signature": "Array a-\u003em(MutableArray(PrimState m)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Array.html#v:writeArray",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to the array at the given index.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Array",
        "fct-package": "primitive",
        "fct-signature": "MutableArray (PrimState m) a -\u003e Int -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Primitive-Array.html#writeArray",
        "fct-type": "function",
        "title": "writeArray"
      },
      "index": {
        "description": "Write value to the array at the given index",
        "hierarchy": "Data Primitive Array",
        "module": "Data.Primitive.Array",
        "name": "writeArray",
        "normalized": "MutableArray(PrimState a)b-\u003eInt-\u003eb-\u003ea()",
        "package": "primitive",
        "partial": "Array",
        "signature": "MutableArray(PrimState m)a-\u003eInt-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive operations on ByteArrays\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "module",
        "fct-source": "src/Data-Primitive-ByteArray.html",
        "fct-type": "module",
        "title": "ByteArray"
      },
      "index": {
        "description": "Primitive operations on ByteArrays",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "ByteArray",
        "normalized": "",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#t:ByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eByte arrays\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-source": "src/Data-Primitive-ByteArray.html#ByteArray",
        "fct-type": "data",
        "title": "ByteArray"
      },
      "index": {
        "description": "Byte arrays",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "ByteArray",
        "normalized": "",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#t:ByteArray-35-",
      "description": {
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ByteArray#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "ByteArray#",
        "normalized": "",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#t:MutableByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eMutable byte arrays associated with a primitive state token\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-source": "src/Data-Primitive-ByteArray.html#MutableByteArray",
        "fct-type": "data",
        "title": "MutableByteArray"
      },
      "index": {
        "description": "Mutable byte arrays associated with primitive state token",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "MutableByteArray",
        "normalized": "",
        "package": "primitive",
        "partial": "Mutable Byte Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#t:MutableByteArray-35-",
      "description": {
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "MutableByteArray#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "MutableByteArray#",
        "normalized": "",
        "package": "primitive",
        "partial": "Mutable Byte Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:ByteArray",
      "description": {
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "ByteArray ByteArray#",
        "fct-source": "src/Data-Primitive-ByteArray.html#ByteArray",
        "fct-type": "function",
        "title": "ByteArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "ByteArray",
        "normalized": "",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:MutableByteArray",
      "description": {
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray (MutableByteArray# s)",
        "fct-source": "src/Data-Primitive-ByteArray.html#MutableByteArray",
        "fct-type": "function",
        "title": "MutableByteArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "MutableByteArray",
        "normalized": "",
        "package": "primitive",
        "partial": "Mutable Byte Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:byteArrayContents",
      "description": {
        "fct-descr": "\u003cp\u003eYield a pointer to the array's data. This operation is only safe on\n \u003cem\u003epinned\u003c/em\u003e byte arrays allocated by \u003ccode\u003e\u003ca\u003enewPinnedByteArray\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003enewAlignedPinnedByteArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "ByteArray -\u003e Addr",
        "fct-source": "src/Data-Primitive-ByteArray.html#byteArrayContents",
        "fct-type": "function",
        "title": "byteArrayContents"
      },
      "index": {
        "description": "Yield pointer to the array data This operation is only safe on pinned byte arrays allocated by newPinnedByteArray or newAlignedPinnedByteArray",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "byteArrayContents",
        "normalized": "ByteArray-\u003eAddr",
        "package": "primitive",
        "partial": "Array Contents",
        "signature": "ByteArray-\u003eAddr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:copyByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a slice of an immutable byte array to a mutable byte array.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e ByteArray-\u003e Int-\u003e Int-\u003e m ()",
        "fct-type": "function",
        "title": "copyByteArray"
      },
      "index": {
        "description": "Copy slice of an immutable byte array to mutable byte array",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "copyByteArray",
        "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eByteArray-\u003eInt-\u003eInt-\u003ea()",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eByteArray-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:copyMutableByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a slice of a mutable byte array into another array. The two slices\n may not overlap.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e MutableByteArray (PrimState m)-\u003e Int-\u003e Int-\u003e m ()",
        "fct-type": "function",
        "title": "copyMutableByteArray"
      },
      "index": {
        "description": "Copy slice of mutable byte array into another array The two slices may not overlap",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "copyMutableByteArray",
        "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eMutableByteArray(PrimState a)-\u003eInt-\u003eInt-\u003ea()",
        "package": "primitive",
        "partial": "Mutable Byte Array",
        "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eMutableByteArray(PrimState m)-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:fillByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eFill a slice of a mutable byte array with a byte.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e Int-\u003e Word8-\u003e m ()",
        "fct-type": "function",
        "title": "fillByteArray"
      },
      "index": {
        "description": "Fill slice of mutable byte array with byte",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "fillByteArray",
        "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eInt-\u003eWord-\u003ea()",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eInt-\u003eWord-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:indexByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead a primitive value from the byte array. The offset is given in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "ByteArray -\u003e Int -\u003e a",
        "fct-source": "src/Data-Primitive-ByteArray.html#indexByteArray",
        "fct-type": "function",
        "title": "indexByteArray"
      },
      "index": {
        "description": "Read primitive value from the byte array The offset is given in elements of type rather than in bytes",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "indexByteArray",
        "normalized": "ByteArray-\u003eInt-\u003ea",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "ByteArray-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:moveByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a slice of a mutable byte array into another, potentially\n overlapping array.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e MutableByteArray (PrimState m)-\u003e Int-\u003e Int-\u003e m ()",
        "fct-type": "function",
        "title": "moveByteArray"
      },
      "index": {
        "description": "Copy slice of mutable byte array into another potentially overlapping array",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "moveByteArray",
        "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eMutableByteArray(PrimState a)-\u003eInt-\u003eInt-\u003ea()",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eMutableByteArray(PrimState m)-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:mutableByteArrayContents",
      "description": {
        "fct-descr": "\u003cp\u003eYield a pointer to the array's data. This operation is only safe on\n \u003cem\u003epinned\u003c/em\u003e byte arrays allocated by \u003ccode\u003e\u003ca\u003enewPinnedByteArray\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003enewAlignedPinnedByteArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray s -\u003e Addr",
        "fct-source": "src/Data-Primitive-ByteArray.html#mutableByteArrayContents",
        "fct-type": "function",
        "title": "mutableByteArrayContents"
      },
      "index": {
        "description": "Yield pointer to the array data This operation is only safe on pinned byte arrays allocated by newPinnedByteArray or newAlignedPinnedByteArray",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "mutableByteArrayContents",
        "normalized": "MutableByteArray a-\u003eAddr",
        "package": "primitive",
        "partial": "Byte Array Contents",
        "signature": "MutableByteArray s-\u003eAddr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:newAlignedPinnedByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003cem\u003epinned\u003c/em\u003e byte array of the specified size and with the give\n alignment. The garbage collector is guaranteed not to move it.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "Int -\u003e Int -\u003e m (MutableByteArray (PrimState m))",
        "fct-source": "src/Data-Primitive-ByteArray.html#newAlignedPinnedByteArray",
        "fct-type": "function",
        "title": "newAlignedPinnedByteArray"
      },
      "index": {
        "description": "Create pinned byte array of the specified size and with the give alignment The garbage collector is guaranteed not to move it",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "newAlignedPinnedByteArray",
        "normalized": "Int-\u003eInt-\u003ea(MutableByteArray(PrimState a))",
        "package": "primitive",
        "partial": "Aligned Pinned Byte Array",
        "signature": "Int-\u003eInt-\u003em(MutableByteArray(PrimState m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:newByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new mutable byte array of the specified size.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "Int -\u003e m (MutableByteArray (PrimState m))",
        "fct-source": "src/Data-Primitive-ByteArray.html#newByteArray",
        "fct-type": "function",
        "title": "newByteArray"
      },
      "index": {
        "description": "Create new mutable byte array of the specified size",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "newByteArray",
        "normalized": "Int-\u003ea(MutableByteArray(PrimState a))",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "Int-\u003em(MutableByteArray(PrimState m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:newPinnedByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003cem\u003epinned\u003c/em\u003e byte array of the specified size. The garbage collector\n is guaranteed not to move it.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "Int -\u003e m (MutableByteArray (PrimState m))",
        "fct-source": "src/Data-Primitive-ByteArray.html#newPinnedByteArray",
        "fct-type": "function",
        "title": "newPinnedByteArray"
      },
      "index": {
        "description": "Create pinned byte array of the specified size The garbage collector is guaranteed not to move it",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "newPinnedByteArray",
        "normalized": "Int-\u003ea(MutableByteArray(PrimState a))",
        "package": "primitive",
        "partial": "Pinned Byte Array",
        "signature": "Int-\u003em(MutableByteArray(PrimState m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:readByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead a primitive value from the byte array. The offset is given in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray (PrimState m) -\u003e Int -\u003e m a",
        "fct-source": "src/Data-Primitive-ByteArray.html#readByteArray",
        "fct-type": "function",
        "title": "readByteArray"
      },
      "index": {
        "description": "Read primitive value from the byte array The offset is given in elements of type rather than in bytes",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "readByteArray",
        "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003ea b",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:sameMutableByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the two arrays refer to the same memory block.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray s -\u003e MutableByteArray s -\u003e Bool",
        "fct-source": "src/Data-Primitive-ByteArray.html#sameMutableByteArray",
        "fct-type": "function",
        "title": "sameMutableByteArray"
      },
      "index": {
        "description": "Check if the two arrays refer to the same memory block",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "sameMutableByteArray",
        "normalized": "MutableByteArray a-\u003eMutableByteArray a-\u003eBool",
        "package": "primitive",
        "partial": "Mutable Byte Array",
        "signature": "MutableByteArray s-\u003eMutableByteArray s-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:setByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eFill a slice of a mutable byte array with a value. The offset and length\n are given in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray (PrimState m)-\u003e Int-\u003e Int-\u003e a-\u003e m ()",
        "fct-type": "function",
        "title": "setByteArray"
      },
      "index": {
        "description": "Fill slice of mutable byte array with value The offset and length are given in elements of type rather than in bytes",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "setByteArray",
        "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eInt-\u003eb-\u003ea()",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003eInt-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:sizeofByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the byte array.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "ByteArray -\u003e Int",
        "fct-source": "src/Data-Primitive-ByteArray.html#sizeofByteArray",
        "fct-type": "function",
        "title": "sizeofByteArray"
      },
      "index": {
        "description": "Size of the byte array",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "sizeofByteArray",
        "normalized": "ByteArray-\u003eInt",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "ByteArray-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:sizeofMutableByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the mutable byte array.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray s -\u003e Int",
        "fct-source": "src/Data-Primitive-ByteArray.html#sizeofMutableByteArray",
        "fct-type": "function",
        "title": "sizeofMutableByteArray"
      },
      "index": {
        "description": "Size of the mutable byte array",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "sizeofMutableByteArray",
        "normalized": "MutableByteArray a-\u003eInt",
        "package": "primitive",
        "partial": "Mutable Byte Array",
        "signature": "MutableByteArray s-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:unsafeFreezeByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a mutable byte array to an immutable one without copying. The\n array should not be modified after the conversion.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray (PrimState m) -\u003e m ByteArray",
        "fct-source": "src/Data-Primitive-ByteArray.html#unsafeFreezeByteArray",
        "fct-type": "function",
        "title": "unsafeFreezeByteArray"
      },
      "index": {
        "description": "Convert mutable byte array to an immutable one without copying The array should not be modified after the conversion",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "unsafeFreezeByteArray",
        "normalized": "MutableByteArray(PrimState a)-\u003ea ByteArray",
        "package": "primitive",
        "partial": "Freeze Byte Array",
        "signature": "MutableByteArray(PrimState m)-\u003em ByteArray"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:unsafeThawByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an immutable byte array to a mutable one without copying. The\n original array should not be used after the conversion.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "ByteArray -\u003e m (MutableByteArray (PrimState m))",
        "fct-source": "src/Data-Primitive-ByteArray.html#unsafeThawByteArray",
        "fct-type": "function",
        "title": "unsafeThawByteArray"
      },
      "index": {
        "description": "Convert an immutable byte array to mutable one without copying The original array should not be used after the conversion",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "unsafeThawByteArray",
        "normalized": "ByteArray-\u003ea(MutableByteArray(PrimState a))",
        "package": "primitive",
        "partial": "Thaw Byte Array",
        "signature": "ByteArray-\u003em(MutableByteArray(PrimState m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-ByteArray.html#v:writeByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a primitive value to the byte array. The offset is given in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.ByteArray",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray (PrimState m) -\u003e Int -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Primitive-ByteArray.html#writeByteArray",
        "fct-type": "function",
        "title": "writeByteArray"
      },
      "index": {
        "description": "Write primitive value to the byte array The offset is given in elements of type rather than in bytes",
        "hierarchy": "Data Primitive ByteArray",
        "module": "Data.Primitive.ByteArray",
        "name": "writeByteArray",
        "normalized": "MutableByteArray(PrimState a)-\u003eInt-\u003eb-\u003ea()",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "MutableByteArray(PrimState m)-\u003eInt-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMachine-dependent constants\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "module",
        "fct-source": "src/Data-Primitive-MachDeps.html",
        "fct-type": "module",
        "title": "MachDeps"
      },
      "index": {
        "description": "Machine-dependent constants",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "MachDeps",
        "normalized": "",
        "package": "primitive",
        "partial": "Mach Deps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#t:Int64_-35-",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "type",
        "fct-source": "src/Data-Primitive-MachDeps.html#Int64_%23",
        "fct-type": "type",
        "title": "Int64_#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "Int64_#",
        "normalized": "",
        "package": "primitive",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#t:Word64_-35-",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "type",
        "fct-source": "src/Data-Primitive-MachDeps.html#Word64_%23",
        "fct-type": "type",
        "title": "Word64_#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "Word64_#",
        "normalized": "",
        "package": "primitive",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_CHAR",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_CHAR",
        "fct-type": "function",
        "title": "aLIGNMENT_CHAR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_CHAR",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT CHAR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_DOUBLE",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_DOUBLE",
        "fct-type": "function",
        "title": "aLIGNMENT_DOUBLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_DOUBLE",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT DOUBLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_FLOAT",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_FLOAT",
        "fct-type": "function",
        "title": "aLIGNMENT_FLOAT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_FLOAT",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT FLOAT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_FUNPTR",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_FUNPTR",
        "fct-type": "function",
        "title": "aLIGNMENT_FUNPTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_FUNPTR",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT FUNPTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT",
        "fct-type": "function",
        "title": "aLIGNMENT_INT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_INT",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT16",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT16",
        "fct-type": "function",
        "title": "aLIGNMENT_INT16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_INT16",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT32",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT32",
        "fct-type": "function",
        "title": "aLIGNMENT_INT32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_INT32",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT64",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT64",
        "fct-type": "function",
        "title": "aLIGNMENT_INT64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_INT64",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_INT8",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_INT8",
        "fct-type": "function",
        "title": "aLIGNMENT_INT8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_INT8",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_PTR",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_PTR",
        "fct-type": "function",
        "title": "aLIGNMENT_PTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_PTR",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT PTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_STABLEPTR",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_STABLEPTR",
        "fct-type": "function",
        "title": "aLIGNMENT_STABLEPTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_STABLEPTR",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT STABLEPTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD",
        "fct-type": "function",
        "title": "aLIGNMENT_WORD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_WORD",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD16",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD16",
        "fct-type": "function",
        "title": "aLIGNMENT_WORD16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_WORD16",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD32",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD32",
        "fct-type": "function",
        "title": "aLIGNMENT_WORD32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_WORD32",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD64",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD64",
        "fct-type": "function",
        "title": "aLIGNMENT_WORD64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_WORD64",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:aLIGNMENT_WORD8",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#aLIGNMENT_WORD8",
        "fct-type": "function",
        "title": "aLIGNMENT_WORD8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "aLIGNMENT_WORD8",
        "normalized": "",
        "package": "primitive",
        "partial": "LIGNMENT WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_CHAR",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_CHAR",
        "fct-type": "function",
        "title": "sIZEOF_CHAR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_CHAR",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF CHAR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_DOUBLE",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_DOUBLE",
        "fct-type": "function",
        "title": "sIZEOF_DOUBLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_DOUBLE",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF DOUBLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_FLOAT",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_FLOAT",
        "fct-type": "function",
        "title": "sIZEOF_FLOAT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_FLOAT",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF FLOAT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_FUNPTR",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_FUNPTR",
        "fct-type": "function",
        "title": "sIZEOF_FUNPTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_FUNPTR",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF FUNPTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT",
        "fct-type": "function",
        "title": "sIZEOF_INT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_INT",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT16",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT16",
        "fct-type": "function",
        "title": "sIZEOF_INT16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_INT16",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT32",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT32",
        "fct-type": "function",
        "title": "sIZEOF_INT32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_INT32",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT64",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT64",
        "fct-type": "function",
        "title": "sIZEOF_INT64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_INT64",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_INT8",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_INT8",
        "fct-type": "function",
        "title": "sIZEOF_INT8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_INT8",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF INT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_PTR",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_PTR",
        "fct-type": "function",
        "title": "sIZEOF_PTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_PTR",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF PTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_STABLEPTR",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_STABLEPTR",
        "fct-type": "function",
        "title": "sIZEOF_STABLEPTR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_STABLEPTR",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF STABLEPTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD",
        "fct-type": "function",
        "title": "sIZEOF_WORD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_WORD",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD16",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD16",
        "fct-type": "function",
        "title": "sIZEOF_WORD16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_WORD16",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD32",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD32",
        "fct-type": "function",
        "title": "sIZEOF_WORD32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_WORD32",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD64",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD64",
        "fct-type": "function",
        "title": "sIZEOF_WORD64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_WORD64",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MachDeps.html#v:sIZEOF_WORD8",
      "description": {
        "fct-module": "Data.Primitive.MachDeps",
        "fct-package": "primitive",
        "fct-signature": "Int",
        "fct-source": "src/Data-Primitive-MachDeps.html#sIZEOF_WORD8",
        "fct-type": "function",
        "title": "sIZEOF_WORD8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MachDeps",
        "module": "Data.Primitive.MachDeps",
        "name": "sIZEOF_WORD8",
        "normalized": "",
        "package": "primitive",
        "partial": "IZEOF WORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive boxed mutable variables\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Primitive.MutVar",
        "fct-package": "primitive",
        "fct-signature": "module",
        "fct-source": "src/Data-Primitive-MutVar.html",
        "fct-type": "module",
        "title": "MutVar"
      },
      "index": {
        "description": "Primitive boxed mutable variables",
        "hierarchy": "Data Primitive MutVar",
        "module": "Data.Primitive.MutVar",
        "name": "MutVar",
        "normalized": "",
        "package": "primitive",
        "partial": "Mut Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#t:MutVar",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e behaves like a single-element mutable array associated\n with a primitive state token.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.MutVar",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-source": "src/Data-Primitive-MutVar.html#MutVar",
        "fct-type": "data",
        "title": "MutVar"
      },
      "index": {
        "description": "MutVar behaves like single-element mutable array associated with primitive state token",
        "hierarchy": "Data Primitive MutVar",
        "module": "Data.Primitive.MutVar",
        "name": "MutVar",
        "normalized": "",
        "package": "primitive",
        "partial": "Mut Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:MutVar",
      "description": {
        "fct-module": "Data.Primitive.MutVar",
        "fct-package": "primitive",
        "fct-signature": "MutVar (MutVar# s a)",
        "fct-source": "src/Data-Primitive-MutVar.html#MutVar",
        "fct-type": "function",
        "title": "MutVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive MutVar",
        "module": "Data.Primitive.MutVar",
        "name": "MutVar",
        "normalized": "",
        "package": "primitive",
        "partial": "Mut Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:atomicModifyMutVar",
      "description": {
        "fct-descr": "\u003cp\u003eAtomically mutate the contents of a \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.MutVar",
        "fct-package": "primitive",
        "fct-signature": "MutVar (PrimState m) a -\u003e (a -\u003e (a, b)) -\u003e m b",
        "fct-source": "src/Data-Primitive-MutVar.html#atomicModifyMutVar",
        "fct-type": "function",
        "title": "atomicModifyMutVar"
      },
      "index": {
        "description": "Atomically mutate the contents of MutVar",
        "hierarchy": "Data Primitive MutVar",
        "module": "Data.Primitive.MutVar",
        "name": "atomicModifyMutVar",
        "normalized": "MutVar(PrimState a)b-\u003e(b-\u003e(b,c))-\u003ea c",
        "package": "primitive",
        "partial": "Modify Mut Var",
        "signature": "MutVar(PrimState m)a-\u003e(a-\u003e(a,b))-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:modifyMutVar",
      "description": {
        "fct-descr": "\u003cp\u003eMutate the contents of a \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.MutVar",
        "fct-package": "primitive",
        "fct-signature": "MutVar (PrimState m) a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-Primitive-MutVar.html#modifyMutVar",
        "fct-type": "function",
        "title": "modifyMutVar"
      },
      "index": {
        "description": "Mutate the contents of MutVar",
        "hierarchy": "Data Primitive MutVar",
        "module": "Data.Primitive.MutVar",
        "name": "modifyMutVar",
        "normalized": "MutVar(PrimState a)b-\u003e(b-\u003eb)-\u003ea()",
        "package": "primitive",
        "partial": "Mut Var",
        "signature": "MutVar(PrimState m)a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:newMutVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e with the specified initial value\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.MutVar",
        "fct-package": "primitive",
        "fct-signature": "a -\u003e m (MutVar (PrimState m) a)",
        "fct-source": "src/Data-Primitive-MutVar.html#newMutVar",
        "fct-type": "function",
        "title": "newMutVar"
      },
      "index": {
        "description": "Create new MutVar with the specified initial value",
        "hierarchy": "Data Primitive MutVar",
        "module": "Data.Primitive.MutVar",
        "name": "newMutVar",
        "normalized": "a-\u003eb(MutVar(PrimState b)a)",
        "package": "primitive",
        "partial": "Mut Var",
        "signature": "a-\u003em(MutVar(PrimState m)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:readMutVar",
      "description": {
        "fct-descr": "\u003cp\u003eRead the value of a \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.MutVar",
        "fct-package": "primitive",
        "fct-signature": "MutVar (PrimState m) a -\u003e m a",
        "fct-source": "src/Data-Primitive-MutVar.html#readMutVar",
        "fct-type": "function",
        "title": "readMutVar"
      },
      "index": {
        "description": "Read the value of MutVar",
        "hierarchy": "Data Primitive MutVar",
        "module": "Data.Primitive.MutVar",
        "name": "readMutVar",
        "normalized": "MutVar(PrimState a)b-\u003ea b",
        "package": "primitive",
        "partial": "Mut Var",
        "signature": "MutVar(PrimState m)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-MutVar.html#v:writeMutVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value into a \u003ccode\u003e\u003ca\u003eMutVar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.MutVar",
        "fct-package": "primitive",
        "fct-signature": "MutVar (PrimState m) a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Primitive-MutVar.html#writeMutVar",
        "fct-type": "function",
        "title": "writeMutVar"
      },
      "index": {
        "description": "Write new value into MutVar",
        "hierarchy": "Data Primitive MutVar",
        "module": "Data.Primitive.MutVar",
        "name": "writeMutVar",
        "normalized": "MutVar(PrimState a)b-\u003eb-\u003ea()",
        "package": "primitive",
        "partial": "Mut Var",
        "signature": "MutVar(PrimState m)a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types and classes for primitive array operations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "module",
        "fct-source": "src/Data-Primitive-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Basic types and classes for primitive array operations",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "Types",
        "normalized": "",
        "package": "primitive",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#t:Addr",
      "description": {
        "fct-descr": "\u003cp\u003eA machine address\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "data",
        "fct-source": "src/Data-Primitive-Types.html#Addr",
        "fct-type": "data",
        "title": "Addr"
      },
      "index": {
        "description": "machine address",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "Addr",
        "normalized": "",
        "package": "primitive",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#t:Prim",
      "description": {
        "fct-descr": "\u003cp\u003eClass of types supporting primitive array operations\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "class",
        "fct-source": "src/Data-Primitive-Types.html#Prim",
        "fct-type": "class",
        "title": "Prim"
      },
      "index": {
        "description": "Class of types supporting primitive array operations",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "Prim",
        "normalized": "",
        "package": "primitive",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:Addr",
      "description": {
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "Addr Addr#",
        "fct-source": "src/Data-Primitive-Types.html#Addr",
        "fct-type": "function",
        "title": "Addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "Addr",
        "normalized": "",
        "package": "primitive",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:alignment-35-",
      "description": {
        "fct-descr": "\u003cp\u003eAlignment of values of type \u003ccode\u003ea\u003c/code\u003e. The argument is not used.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "a -\u003e Int#",
        "fct-source": "src/Data-Primitive-Types.html#alignment%23",
        "fct-type": "method",
        "title": "alignment#"
      },
      "index": {
        "description": "Alignment of values of type The argument is not used",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "alignment#",
        "normalized": "a-\u003eInt #",
        "package": "primitive",
        "partial": "",
        "signature": "a-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:indexByteArray-35-",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from the array. The offset is in elements of type\n \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "ByteArray# -\u003e Int# -\u003e a",
        "fct-source": "src/Data-Primitive-Types.html#indexByteArray%23",
        "fct-type": "method",
        "title": "indexByteArray#"
      },
      "index": {
        "description": "Read value from the array The offset is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "indexByteArray#",
        "normalized": "ByteArray #-\u003eInt #-\u003ea",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "ByteArray #-\u003eInt #-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:indexOffAddr-35-",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from a memory position given by an address and an offset.\n The memory block the address refers to must be immutable. The offset is in\n elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "Addr# -\u003e Int# -\u003e a",
        "fct-source": "src/Data-Primitive-Types.html#indexOffAddr%23",
        "fct-type": "method",
        "title": "indexOffAddr#"
      },
      "index": {
        "description": "Read value from memory position given by an address and an offset The memory block the address refers to must be immutable The offset is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "indexOffAddr#",
        "normalized": "Addr #-\u003eInt #-\u003ea",
        "package": "primitive",
        "partial": "Off Addr",
        "signature": "Addr #-\u003eInt #-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:readByteArray-35-",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from the mutable array. The offset is in elements of type\n \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray# s -\u003e Int# -\u003e State# s -\u003e (#State# s, a#)",
        "fct-source": "src/Data-Primitive-Types.html#readByteArray%23",
        "fct-type": "method",
        "title": "readByteArray#"
      },
      "index": {
        "description": "Read value from the mutable array The offset is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "readByteArray#",
        "normalized": "MutableByteArray # a-\u003eInt #-\u003eState # a-\u003e(#State # a,b #)",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "MutableByteArray # s-\u003eInt #-\u003eState # s-\u003e(#State # s,a #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:readOffAddr-35-",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from a memory position given by an address and an offset.\n The offset is in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "Addr# -\u003e Int# -\u003e State# s -\u003e (#State# s, a#)",
        "fct-source": "src/Data-Primitive-Types.html#readOffAddr%23",
        "fct-type": "method",
        "title": "readOffAddr#"
      },
      "index": {
        "description": "Read value from memory position given by an address and an offset The offset is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "readOffAddr#",
        "normalized": "Addr #-\u003eInt #-\u003eState # a-\u003e(#State # a,b #)",
        "package": "primitive",
        "partial": "Off Addr",
        "signature": "Addr #-\u003eInt #-\u003eState # s-\u003e(#State # s,a #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:setByteArray-35-",
      "description": {
        "fct-descr": "\u003cp\u003eFill a slice of the mutable array with a value. The offset and length\n of the chunk are in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray# s -\u003e Int# -\u003e Int# -\u003e a -\u003e State# s -\u003e State# s",
        "fct-source": "src/Data-Primitive-Types.html#setByteArray%23",
        "fct-type": "method",
        "title": "setByteArray#"
      },
      "index": {
        "description": "Fill slice of the mutable array with value The offset and length of the chunk are in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "setByteArray#",
        "normalized": "MutableByteArray # a-\u003eInt #-\u003eInt #-\u003eb-\u003eState # a-\u003eState # a",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "MutableByteArray # s-\u003eInt #-\u003eInt #-\u003ea-\u003eState # s-\u003eState # s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:setOffAddr-35-",
      "description": {
        "fct-descr": "\u003cp\u003eFill a memory block given by an address, an offset and a length.\n The offset and length are in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "Addr# -\u003e Int# -\u003e Int# -\u003e a -\u003e State# s -\u003e State# s",
        "fct-source": "src/Data-Primitive-Types.html#setOffAddr%23",
        "fct-type": "method",
        "title": "setOffAddr#"
      },
      "index": {
        "description": "Fill memory block given by an address an offset and length The offset and length are in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "setOffAddr#",
        "normalized": "Addr #-\u003eInt #-\u003eInt #-\u003ea-\u003eState # b-\u003eState # b",
        "package": "primitive",
        "partial": "Off Addr",
        "signature": "Addr #-\u003eInt #-\u003eInt #-\u003ea-\u003eState # s-\u003eState # s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:sizeOf-35-",
      "description": {
        "fct-descr": "\u003cp\u003eSize of values of type \u003ccode\u003ea\u003c/code\u003e. The argument is not used.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "a -\u003e Int#",
        "fct-source": "src/Data-Primitive-Types.html#sizeOf%23",
        "fct-type": "method",
        "title": "sizeOf#"
      },
      "index": {
        "description": "Size of values of type The argument is not used",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "sizeOf#",
        "normalized": "a-\u003eInt #",
        "package": "primitive",
        "partial": "Of",
        "signature": "a-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:writeByteArray-35-",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to the mutable array. The offset is in elements of type\n \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "MutableByteArray# s -\u003e Int# -\u003e a -\u003e State# s -\u003e State# s",
        "fct-source": "src/Data-Primitive-Types.html#writeByteArray%23",
        "fct-type": "method",
        "title": "writeByteArray#"
      },
      "index": {
        "description": "Write value to the mutable array The offset is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "writeByteArray#",
        "normalized": "MutableByteArray # a-\u003eInt #-\u003eb-\u003eState # a-\u003eState # a",
        "package": "primitive",
        "partial": "Byte Array",
        "signature": "MutableByteArray # s-\u003eInt #-\u003ea-\u003eState # s-\u003eState # s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive-Types.html#v:writeOffAddr-35-",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to a memory position given by an address and an offset.\n The offset is in elements of type \u003ccode\u003ea\u003c/code\u003e rather than in bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive.Types",
        "fct-package": "primitive",
        "fct-signature": "Addr# -\u003e Int# -\u003e a -\u003e State# s -\u003e State# s",
        "fct-source": "src/Data-Primitive-Types.html#writeOffAddr%23",
        "fct-type": "method",
        "title": "writeOffAddr#"
      },
      "index": {
        "description": "Write value to memory position given by an address and an offset The offset is in elements of type rather than in bytes",
        "hierarchy": "Data Primitive Types",
        "module": "Data.Primitive.Types",
        "name": "writeOffAddr#",
        "normalized": "Addr #-\u003eInt #-\u003ea-\u003eState # b-\u003eState # b",
        "package": "primitive",
        "partial": "Off Addr",
        "signature": "Addr #-\u003eInt #-\u003ea-\u003eState # s-\u003eState # s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReexports all primitive operations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Primitive",
        "fct-package": "primitive",
        "fct-signature": "module",
        "fct-source": "src/Data-Primitive.html",
        "fct-type": "module",
        "title": "Primitive"
      },
      "index": {
        "description": "Reexports all primitive operations",
        "hierarchy": "Data Primitive",
        "module": "Data.Primitive",
        "name": "Primitive",
        "normalized": "",
        "package": "primitive",
        "partial": "Primitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive.html#v:alignment",
      "description": {
        "fct-descr": "\u003cp\u003eAlignment of values of type \u003ccode\u003ea\u003c/code\u003e. The argument is not used.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive",
        "fct-package": "primitive",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Primitive.html#alignment",
        "fct-type": "function",
        "title": "alignment"
      },
      "index": {
        "description": "Alignment of values of type The argument is not used",
        "hierarchy": "Data Primitive",
        "module": "Data.Primitive",
        "name": "alignment",
        "normalized": "a-\u003eInt",
        "package": "primitive",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/primitive/docs/Data-Primitive.html#v:sizeOf",
      "description": {
        "fct-descr": "\u003cp\u003eSize of values of type \u003ccode\u003ea\u003c/code\u003e. The argument is not used.\n\u003c/p\u003e",
        "fct-module": "Data.Primitive",
        "fct-package": "primitive",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Primitive.html#sizeOf",
        "fct-type": "function",
        "title": "sizeOf"
      },
      "index": {
        "description": "Size of values of type The argument is not used",
        "hierarchy": "Data Primitive",
        "module": "Data.Primitive",
        "name": "sizeOf",
        "normalized": "a-\u003eInt",
        "package": "primitive",
        "partial": "Of",
        "signature": "a-\u003eInt"
      }
    }
  }
]