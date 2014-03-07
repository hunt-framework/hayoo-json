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
        "word": "Control-Monad-ST2"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e monad is like the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad, but with\n  finer-grained control over access to mutable state. The phantom type\n  parameters \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ew\u003c/code\u003e are used to track the read and write\n  dependencies of the computation. If a computation of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e r w\n  a\u003c/code\u003e is polymorphic in w then it does not write any external state. If\n  it is also polymorphic in \u003ccode\u003er\u003c/code\u003e then it does not read any external\n  state.  Operations which modify state, such as \u003ccode\u003e\u003ca\u003ewriteST2Ref\u003c/a\u003e\u003c/code\u003e, are\n  considered to read external state as well as write it, so it is\n  impossible for a computation of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e r w a\u003c/code\u003e to be polymorphic\n  in \u003ccode\u003er\u003c/code\u003e but not in \u003ccode\u003ew\u003c/code\u003e. This means that the \u003ccode\u003er\u003c/code\u003e type parameter\n  behaves exactly like the \u003ccode\u003es\u003c/code\u003e type parameter on the\n  \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad, but the \u003ccode\u003ew\u003c/code\u003e type parameter provides\n  extra information which is not available in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e\n  monad.\n\u003c/p\u003e\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad, the \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e monad allows mutable\n  references and arrays to be created, read, and written within a\n  computation.  Provided that the mutable state does not escape, it\n  does not affect the type signature of the top-level computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.ST2",
          "name": "ST2",
          "package": "Control-Monad-ST2",
          "source": "src/Control-Monad-ST2.html",
          "type": "module"
        },
        "index": {
          "description": "The ST2 monad is like the ST monad but with finer-grained control over access to mutable state The phantom type parameters and are used to track the read and write dependencies of the computation If computation of type ST2 is polymorphic in then it does not write any external state If it is also polymorphic in then it does not read any external state Operations which modify state such as writeST2Ref are considered to read external state as well as write it so it is impossible for computation of type ST2 to be polymorphic in but not in This means that the type parameter behaves exactly like the type parameter on the ST monad but the type parameter provides extra information which is not available in the ST monad Like the ST monad the ST2 monad allows mutable references and arrays to be created read and written within computation Provided that the mutable state does not escape it does not affect the type signature of the top-level computation",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "ST2",
          "package": "Control-Monad-ST2",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunPureST2\u003c/a\u003e\u003c/code\u003e is semantically equivalent to pureST2, but uses a\n newtype to package the \u003ccode\u003eforall\u003c/code\u003e. Sometimes this packaging is\n convenient when passing a value of type \u003ccode\u003e\u003ca\u003ePureST2\u003c/a\u003e\u003c/code\u003e as an argument\n because it avoids the need for a nested \u003ccode\u003eforall\u003c/code\u003e in the type\n signature.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "PureST2",
          "package": "Control-Monad-ST2",
          "source": "src/Control-Monad-ST2.html#PureST2",
          "type": "newtype"
        },
        "index": {
          "description": "runPureST2 is semantically equivalent to pureST2 but uses newtype to package the forall Sometimes this packaging is convenient when passing value of type PureST2 as an argument because it avoids the need for nested forall in the type signature",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "PureST2",
          "package": "Control-Monad-ST2",
          "partial": "Pure ST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#t:PureST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunReadOnlyST2\u003c/a\u003e\u003c/code\u003e is semantically equivalent to readOnlyST2, but\n uses a newtype to package the \u003ccode\u003eforall\u003c/code\u003e. Sometimes this packaging is\n convenient when passing a value of type \u003ccode\u003e\u003ca\u003eReadOnlyST2\u003c/a\u003e\u003c/code\u003e as an\n argument because it avoids the need for a nested \u003ccode\u003eforall\u003c/code\u003e in the\n type signature.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "ReadOnlyST2",
          "package": "Control-Monad-ST2",
          "source": "src/Control-Monad-ST2.html#ReadOnlyST2",
          "type": "newtype"
        },
        "index": {
          "description": "runReadOnlyST2 is semantically equivalent to readOnlyST2 but uses newtype to package the forall Sometimes this packaging is convenient when passing value of type ReadOnlyST2 as an argument because it avoids the need for nested forall in the type signature",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "ReadOnlyST2",
          "package": "Control-Monad-ST2",
          "partial": "Read Only ST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#t:ReadOnlyST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e monad is a newtype of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. The type parameters \u003ccode\u003er\u003c/code\u003e and\n \u003ccode\u003ew\u003c/code\u003e are phantom type parameters which are used to track the read\n and write dependencies of the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "ST2",
          "package": "Control-Monad-ST2",
          "source": "src/Control-Monad-ST2.html#ST2",
          "type": "data"
        },
        "index": {
          "description": "The ST2 monad is newtype of IO The type parameters and are phantom type parameters which are used to track the read and write dependencies of the computation",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "ST2",
          "package": "Control-Monad-ST2",
          "partial": "ST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#t:ST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable array. \u003ccode\u003e\u003ca\u003eST2Array\u003c/a\u003e\u003c/code\u003e is actually just a newtype of an\n \u003ccode\u003e\u003ca\u003eIOArray\u003c/a\u003e\u003c/code\u003e, but the \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ew\u003c/code\u003e type parameters allow the read and\n write dependencies to be tracked by the type system.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "ST2Array",
          "package": "Control-Monad-ST2",
          "source": "src/Control-Monad-ST2.html#ST2Array",
          "type": "data"
        },
        "index": {
          "description": "Mutable array ST2Array is actually just newtype of an IOArray but the and type parameters allow the read and write dependencies to be tracked by the type system",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "ST2Array",
          "package": "Control-Monad-ST2",
          "partial": "ST Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#t:ST2Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead-only array. Existential quantification is used to hide the\n \u003ccode\u003ew\u003c/code\u003e type parameter. This means that it can escape a \u003ccode\u003e\u003ca\u003eReadOnlyST2\u003c/a\u003e\u003c/code\u003e\n context, and can be read in the enclosing context. However, it is\n impossible for anyone to write to the array outside of the\n \u003ccode\u003e\u003ca\u003eReadOnlyST2\u003c/a\u003e\u003c/code\u003e context in which the array was created.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "ST2RArray",
          "package": "Control-Monad-ST2",
          "source": "src/Control-Monad-ST2.html#ST2RArray",
          "type": "data"
        },
        "index": {
          "description": "Read-only array Existential quantification is used to hide the type parameter This means that it can escape ReadOnlyST2 context and can be read in the enclosing context However it is impossible for anyone to write to the array outside of the ReadOnlyST2 context in which the array was created",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "ST2RArray",
          "package": "Control-Monad-ST2",
          "partial": "ST RArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#t:ST2RArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable reference. \u003ccode\u003e\u003ca\u003eST2Ref\u003c/a\u003e\u003c/code\u003e is actually just a newtype of an\n \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e, but the \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ew\u003c/code\u003e type parameters allow the read and\n write dependencies to be tracked by the type system.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "ST2Ref",
          "package": "Control-Monad-ST2",
          "source": "src/Control-Monad-ST2.html#ST2Ref",
          "type": "data"
        },
        "index": {
          "description": "Mutable reference ST2Ref is actually just newtype of an IORef but the and type parameters allow the read and write dependencies to be tracked by the type system",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "ST2Ref",
          "package": "Control-Monad-ST2",
          "partial": "ST Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#t:ST2Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST2",
          "name": "PureST2",
          "package": "Control-Monad-ST2",
          "signature": "PureST2",
          "source": "src/Control-Monad-ST2.html#PureST2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "PureST2",
          "package": "Control-Monad-ST2",
          "partial": "Pure ST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:PureST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST2",
          "name": "ReadOnlyST2",
          "package": "Control-Monad-ST2",
          "signature": "ReadOnlyST2",
          "source": "src/Control-Monad-ST2.html#ReadOnlyST2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "ReadOnlyST2",
          "package": "Control-Monad-ST2",
          "partial": "Read Only ST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:ReadOnlyST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the size of the array. Neither type parameter is unified with\n the \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e monad because the array itself is not accessed.\n (Conceptually, an \u003ccode\u003e\u003ca\u003eST2Array\u003c/a\u003e\u003c/code\u003e is a pair, consisting of the size\n information and the array. This function only accesses the size\n information, which is immutable.)\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "boundsST2Array",
          "package": "Control-Monad-ST2",
          "signature": "ST2Array r w i a -\u003e ST2 r' w' (i, i)",
          "source": "src/Control-Monad-ST2.html#boundsST2Array",
          "type": "function"
        },
        "index": {
          "description": "Read the size of the array Neither type parameter is unified with the ST2 monad because the array itself is not accessed Conceptually an ST2Array is pair consisting of the size information and the array This function only accesses the size information which is immutable",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "boundsST2Array",
          "normalized": "ST Array a b c d-\u003eST e f(c,c)",
          "package": "Control-Monad-ST2",
          "partial": "ST Array",
          "signature": "ST Array r w i a-\u003eST r' w'(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:boundsST2Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an ST2Array to an IOArray.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "exportST2Array",
          "package": "Control-Monad-ST2",
          "signature": "ST2Array () () i a -\u003e IOArray i a",
          "source": "src/Control-Monad-ST2.html#exportST2Array",
          "type": "function"
        },
        "index": {
          "description": "Convert an ST2Array to an IOArray",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "exportST2Array",
          "normalized": "ST Array()()a b-\u003eIOArray a b",
          "package": "Control-Monad-ST2",
          "partial": "ST Array",
          "signature": "ST Array()()i a-\u003eIOArray i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:exportST2Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an ST2Ref to an IORef.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "exportST2Ref",
          "package": "Control-Monad-ST2",
          "signature": "ST2Ref () () a -\u003e IORef a",
          "source": "src/Control-Monad-ST2.html#exportST2Ref",
          "type": "function"
        },
        "index": {
          "description": "Convert an ST2Ref to an IORef",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "exportST2Ref",
          "normalized": "ST Ref()()a-\u003eIORef a",
          "package": "Control-Monad-ST2",
          "partial": "ST Ref",
          "signature": "ST Ref()()a-\u003eIORef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:exportST2Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an IOArray to an ST2Array.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "importST2Array",
          "package": "Control-Monad-ST2",
          "signature": "IOArray i a -\u003e ST2Array () () i a",
          "source": "src/Control-Monad-ST2.html#importST2Array",
          "type": "function"
        },
        "index": {
          "description": "Convert an IOArray to an ST2Array",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "importST2Array",
          "normalized": "IOArray a b-\u003eST Array()()a b",
          "package": "Control-Monad-ST2",
          "partial": "ST Array",
          "signature": "IOArray i a-\u003eST Array()()i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:importST2Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an IORef to an ST2Ref.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "importST2Ref",
          "package": "Control-Monad-ST2",
          "signature": "IORef a -\u003e ST2Ref () () a",
          "source": "src/Control-Monad-ST2.html#importST2Ref",
          "type": "function"
        },
        "index": {
          "description": "Convert an IORef to an ST2Ref",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "importST2Ref",
          "normalized": "IORef a-\u003eST Ref()()a",
          "package": "Control-Monad-ST2",
          "partial": "ST Ref",
          "signature": "IORef a-\u003eST Ref()()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:importST2Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations can be converted to \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e computations, but\n only with a monomorphic type signature.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "ioToST2",
          "package": "Control-Monad-ST2",
          "signature": "IO a -\u003e ST2 () () a",
          "source": "src/Control-Monad-ST2.html#ioToST2",
          "type": "function"
        },
        "index": {
          "description": "IO computations can be converted to ST2 computations but only with monomorphic type signature",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "ioToST2",
          "normalized": "IO a-\u003eST()()a",
          "package": "Control-Monad-ST2",
          "partial": "To ST",
          "signature": "IO a-\u003eST()()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:ioToST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a read-only array. It is important to note that this\n function does not make the original \u003ccode\u003e\u003ca\u003eST2Array\u003c/a\u003e\u003c/code\u003e immutable. It merely\n creates a read-only reference to the original array. However, the\n \u003ccode\u003e\u003ca\u003eST2RArray\u003c/a\u003e\u003c/code\u003e can be returned through a \u003ccode\u003e\u003ca\u003ereadOnlyST2\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eReadOnlyST2\u003c/a\u003e\u003c/code\u003e context and the typing rules ensure that the original\n \u003ccode\u003e\u003ca\u003eST2Array\u003c/a\u003e\u003c/code\u003e cannot be modified outside of the \u003ccode\u003e\u003ca\u003eReadOnlyST2\u003c/a\u003e\u003c/code\u003e context\n in which it was created. In other words, the original \u003ccode\u003e\u003ca\u003eST2Array\u003c/a\u003e\u003c/code\u003e\n can continue to be modified after the \u003ccode\u003e\u003ca\u003eST2RArray\u003c/a\u003e\u003c/code\u003e is created, but\n only until the \u003ccode\u003e\u003ca\u003eST2RArray\u003c/a\u003e\u003c/code\u003e is returned through a \u003ccode\u003e\u003ca\u003eReadOnlyST2\u003c/a\u003e\u003c/code\u003e\n context.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "mkST2RArray",
          "package": "Control-Monad-ST2",
          "signature": "ST2Array r w i a -\u003e ST2RArray r i a",
          "source": "src/Control-Monad-ST2.html#mkST2RArray",
          "type": "function"
        },
        "index": {
          "description": "Create read-only array It is important to note that this function does not make the original ST2Array immutable It merely creates read-only reference to the original array However the ST2RArray can be returned through readOnlyST2 or ReadOnlyST2 context and the typing rules ensure that the original ST2Array cannot be modified outside of the ReadOnlyST2 context in which it was created In other words the original ST2Array can continue to be modified after the ST2RArray is created but only until the ST2RArray is returned through ReadOnlyST2 context",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "mkST2RArray",
          "normalized": "ST Array a b c d-\u003eST RArray a c d",
          "package": "Control-Monad-ST2",
          "partial": "ST RArray",
          "signature": "ST Array r w i a-\u003eST RArray r i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:mkST2RArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a reference.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "modifyST2Ref",
          "package": "Control-Monad-ST2",
          "signature": "ST2Ref r w a -\u003e (a -\u003e a) -\u003e ST2 r w ()",
          "source": "src/Control-Monad-ST2.html#modifyST2Ref",
          "type": "function"
        },
        "index": {
          "description": "Modify reference",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "modifyST2Ref",
          "normalized": "ST Ref a b c-\u003e(c-\u003ec)-\u003eST a b()",
          "package": "Control-Monad-ST2",
          "partial": "ST Ref",
          "signature": "ST Ref r w a-\u003e(a-\u003ea)-\u003eST r w()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:modifyST2Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an array with an initial value.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "newST2Array",
          "package": "Control-Monad-ST2",
          "signature": "(i, i) -\u003e a -\u003e ST2 r w (ST2Array r w i a)",
          "source": "src/Control-Monad-ST2.html#newST2Array",
          "type": "function"
        },
        "index": {
          "description": "Create an array with an initial value",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "newST2Array",
          "normalized": "(a,a)-\u003eb-\u003eST c d(ST Array c d a b)",
          "package": "Control-Monad-ST2",
          "partial": "ST Array",
          "signature": "(i,i)-\u003ea-\u003eST r w(ST Array r w i a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:newST2Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an uninitialised array.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "newST2Array_",
          "package": "Control-Monad-ST2",
          "signature": "(i, i) -\u003e ST2 r w (ST2Array r w i a)",
          "source": "src/Control-Monad-ST2.html#newST2Array_",
          "type": "function"
        },
        "index": {
          "description": "Create an uninitialised array",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "newST2Array_",
          "normalized": "(a,a)-\u003eST b c(ST Array b c a d)",
          "package": "Control-Monad-ST2",
          "partial": "ST Array",
          "signature": "(i,i)-\u003eST r w(ST Array r w i a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:newST2Array_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new reference. The \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ew\u003c/code\u003e type parameters of the\n reference are unified with the \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e monad to indicate that new\n state is created in the enclosing context.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "newST2Ref",
          "package": "Control-Monad-ST2",
          "signature": "a -\u003e ST2 r w (ST2Ref r w a)",
          "source": "src/Control-Monad-ST2.html#newST2Ref",
          "type": "function"
        },
        "index": {
          "description": "Create new reference The and type parameters of the reference are unified with the ST2 monad to indicate that new state is created in the enclosing context",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "newST2Ref",
          "normalized": "a-\u003eST b c(ST Ref b c a)",
          "package": "Control-Monad-ST2",
          "partial": "ST Ref",
          "signature": "a-\u003eST r w(ST Ref r w a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:newST2Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn one thread for each index in the range and wait for all the\n threads to finish. Each thread is parameterised by its index, which\n is an element of the range.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "parallelST2",
          "package": "Control-Monad-ST2",
          "signature": "(i, i) -\u003e (i -\u003e ST2 r w ()) -\u003e ST2 r w ()",
          "source": "src/Control-Monad-ST2.html#parallelST2",
          "type": "function"
        },
        "index": {
          "description": "Spawn one thread for each index in the range and wait for all the threads to finish Each thread is parameterised by its index which is an element of the range",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "parallelST2",
          "normalized": "(a,a)-\u003e(a-\u003eST b c())-\u003eST b c()",
          "package": "Control-Monad-ST2",
          "partial": "ST",
          "signature": "(i,i)-\u003e(i-\u003eST r w())-\u003eST r w()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:parallelST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function checks that the sub-computation is polymorphic in\n both type parameters. This means that the sub-computation does not\n read or write any state from the enclosing context.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "pureST2",
          "package": "Control-Monad-ST2",
          "signature": "(forall r w.  ST2 r w a) -\u003e ST2 r' w' a",
          "source": "src/Control-Monad-ST2.html#pureST2",
          "type": "function"
        },
        "index": {
          "description": "This function checks that the sub-computation is polymorphic in both type parameters This means that the sub-computation does not read or write any state from the enclosing context",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "pureST2",
          "normalized": "(a b c ST b d e)-\u003eST f g e",
          "package": "Control-Monad-ST2",
          "partial": "ST",
          "signature": "(forall r w. ST r w a)-\u003eST r' w' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:pureST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function checks that the sub-computation is polymorphic in\n the \u003ccode\u003ew\u003c/code\u003e type parameter. This means that the sub-computation does\n not write any state from the enclosing context (but read-only\n operations are permitted).\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "readOnlyST2",
          "package": "Control-Monad-ST2",
          "signature": "(forall w.  ST2 r w a) -\u003e ST2 r w' a",
          "source": "src/Control-Monad-ST2.html#readOnlyST2",
          "type": "function"
        },
        "index": {
          "description": "This function checks that the sub-computation is polymorphic in the type parameter This means that the sub-computation does not write any state from the enclosing context but read-only operations are permitted",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "readOnlyST2",
          "normalized": "(a b ST c d e)-\u003eST c f e",
          "package": "Control-Monad-ST2",
          "partial": "Only ST",
          "signature": "(forall w. ST r w a)-\u003eST r w' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:readOnlyST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an index of the array. The \u003ccode\u003ew\u003c/code\u003e type parameter of the\n reference is not unified with the \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e monad to indicate that this\n access is read-only.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "readST2Array",
          "package": "Control-Monad-ST2",
          "signature": "ST2Array r w i a -\u003e i -\u003e ST2 r w' a",
          "source": "src/Control-Monad-ST2.html#readST2Array",
          "type": "function"
        },
        "index": {
          "description": "Read an index of the array The type parameter of the reference is not unified with the ST2 monad to indicate that this access is read-only",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "readST2Array",
          "normalized": "ST Array a b c d-\u003ec-\u003eST a e d",
          "package": "Control-Monad-ST2",
          "partial": "ST Array",
          "signature": "ST Array r w i a-\u003ei-\u003eST r w' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:readST2Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an index of the read-only array.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "readST2RArray",
          "package": "Control-Monad-ST2",
          "signature": "ST2RArray r i a -\u003e i -\u003e ST2 r w a",
          "source": "src/Control-Monad-ST2.html#readST2RArray",
          "type": "function"
        },
        "index": {
          "description": "Read an index of the read-only array",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "readST2RArray",
          "normalized": "ST RArray a b c-\u003eb-\u003eST a d c",
          "package": "Control-Monad-ST2",
          "partial": "ST RArray",
          "signature": "ST RArray r i a-\u003ei-\u003eST r w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:readST2RArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a reference. The \u003ccode\u003ew\u003c/code\u003e type parameter of the reference is not\n unified with the \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e monad to indicate that this access is\n read-only.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "readST2Ref",
          "package": "Control-Monad-ST2",
          "signature": "ST2Ref r w a -\u003e ST2 r w' a",
          "source": "src/Control-Monad-ST2.html#readST2Ref",
          "type": "function"
        },
        "index": {
          "description": "Read reference The type parameter of the reference is not unified with the ST2 monad to indicate that this access is read-only",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "readST2Ref",
          "normalized": "ST Ref a b c-\u003eST a d c",
          "package": "Control-Monad-ST2",
          "partial": "ST Ref",
          "signature": "ST Ref r w a-\u003eST r w' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:readST2Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST2",
          "name": "runPureST2",
          "package": "Control-Monad-ST2",
          "signature": "forall r w.  ST2 r w a",
          "source": "src/Control-Monad-ST2.html#PureST2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "runPureST2",
          "package": "Control-Monad-ST2",
          "partial": "Pure ST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:runPureST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST2",
          "name": "runReadOnlyST2",
          "package": "Control-Monad-ST2",
          "signature": "forall w.  ST2 r w a",
          "source": "src/Control-Monad-ST2.html#ReadOnlyST2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "runReadOnlyST2",
          "package": "Control-Monad-ST2",
          "partial": "Read Only ST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:runReadOnlyST2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e computations can be converted to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations, but\n only with a monomorphic type signature.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "st2ToIO",
          "package": "Control-Monad-ST2",
          "signature": "ST2 () () a -\u003e IO a",
          "source": "src/Control-Monad-ST2.html#st2ToIO",
          "type": "function"
        },
        "index": {
          "description": "ST2 computations can be converted to IO computations but only with monomorphic type signature",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "st2ToIO",
          "normalized": "ST()()a-\u003eIO a",
          "package": "Control-Monad-ST2",
          "partial": "To IO",
          "signature": "ST()()a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:st2ToIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an index of the array. The \u003ccode\u003ew\u003c/code\u003e type parameter of the array\n is unified with the \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e monad to indicate that state is written\n in the enclosing context.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "writeST2Array",
          "package": "Control-Monad-ST2",
          "signature": "ST2Array r w i a -\u003e i -\u003e a -\u003e ST2 r w ()",
          "source": "src/Control-Monad-ST2.html#writeST2Array",
          "type": "function"
        },
        "index": {
          "description": "Write an index of the array The type parameter of the array is unified with the ST2 monad to indicate that state is written in the enclosing context",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "writeST2Array",
          "normalized": "ST Array a b c d-\u003ec-\u003ed-\u003eST a b()",
          "package": "Control-Monad-ST2",
          "partial": "ST Array",
          "signature": "ST Array r w i a-\u003ei-\u003ea-\u003eST r w()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:writeST2Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to a reference. The \u003ccode\u003ew\u003c/code\u003e type parameter of the reference is\n unified with the \u003ccode\u003e\u003ca\u003eST2\u003c/a\u003e\u003c/code\u003e monad to indicate that state is written in\n the enclosing context.\n\u003c/p\u003e",
          "module": "Control.Monad.ST2",
          "name": "writeST2Ref",
          "package": "Control-Monad-ST2",
          "signature": "ST2Ref r w a -\u003e a -\u003e ST2 r w ()",
          "source": "src/Control-Monad-ST2.html#writeST2Ref",
          "type": "function"
        },
        "index": {
          "description": "Write to reference The type parameter of the reference is unified with the ST2 monad to indicate that state is written in the enclosing context",
          "hierarchy": "Control Monad ST2",
          "module": "Control.Monad.ST2",
          "name": "writeST2Ref",
          "normalized": "ST Ref a b c-\u003ec-\u003eST a b()",
          "package": "Control-Monad-ST2",
          "partial": "ST Ref",
          "signature": "ST Ref r w a-\u003ea-\u003eST r w()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Monad-ST2/docs/Control-Monad-ST2.html#v:writeST2Ref"
      }
    }
  ]
]