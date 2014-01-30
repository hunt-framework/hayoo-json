[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the implementation of the \u003ccode\u003e\u003ca\u003eSTT\u003c/a\u003e\u003c/code\u003e type for those\n   occasions where it's needed in order to implement new liftings through\n   operations in other monads.\n\u003c/p\u003e\u003cp\u003eWarning! This monad transformer should not be used with monads that\n   can contain multiple answers, like the list monad. The reason is that \n   the will be duplicated across the different answers and this cause\n   Bad Things to happen (such as loss of referential transparency). Safe \n   monads include the monads State, Reader, Writer, Maybe and \n   combinations of their corresponding monad transformers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.ST.Trans.Internal",
        "fct-package": "STMonadTrans",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-ST-Trans-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module provides the implementation of the STT type for those occasions where it needed in order to implement new liftings through operations in other monads Warning This monad transformer should not be used with monads that can contain multiple answers like the list monad The reason is that the will be duplicated across the different answers and this cause Bad Things to happen such as loss of referential transparency Safe monads include the monads State Reader Writer Maybe and combinations of their corresponding monad transformers",
        "hierarchy": "Control Monad ST Trans Internal",
        "module": "Control.Monad.ST.Trans.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "STMonadTrans",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#t:STT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSTT\u003c/a\u003e\u003c/code\u003e is the monad transformer providing polymorphic updateable references\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans.Internal",
        "fct-package": "STMonadTrans",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-ST-Trans-Internal.html#STT",
        "fct-type": "newtype",
        "title": "STT"
      },
      "index": {
        "description": "STT is the monad transformer providing polymorphic updateable references",
        "hierarchy": "Control Monad ST Trans Internal",
        "module": "Control.Monad.ST.Trans.Internal",
        "name": "STT",
        "normalized": "",
        "package": "STMonadTrans",
        "partial": "STT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#t:STTRet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSTTRet\u003c/a\u003e\u003c/code\u003e is needed to encapsulate the unboxed state token that GHC passes\n   around. This type is essentially a pair, but an ordinary pair is not\n   not allowed to contain unboxed types.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans.Internal",
        "fct-package": "STMonadTrans",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Trans-Internal.html#STTRet",
        "fct-type": "data",
        "title": "STTRet"
      },
      "index": {
        "description": "STTRet is needed to encapsulate the unboxed state token that GHC passes around This type is essentially pair but an ordinary pair is not not allowed to contain unboxed types",
        "hierarchy": "Control Monad ST Trans Internal",
        "module": "Control.Monad.ST.Trans.Internal",
        "name": "STTRet",
        "normalized": "",
        "package": "STMonadTrans",
        "partial": "STTRet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#v:STT",
      "description": {
        "fct-module": "Control.Monad.ST.Trans.Internal",
        "fct-package": "STMonadTrans",
        "fct-signature": "STT (State# s -\u003e m (STTRet s a))",
        "fct-source": "src/Control-Monad-ST-Trans-Internal.html#STT",
        "fct-type": "function",
        "title": "STT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Trans Internal",
        "module": "Control.Monad.ST.Trans.Internal",
        "name": "STT",
        "normalized": "STT(State # a-\u003eb(STTRet a c))",
        "package": "STMonadTrans",
        "partial": "STT",
        "signature": "STT(State # s-\u003em(STTRet s a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#v:STTRet",
      "description": {
        "fct-module": "Control.Monad.ST.Trans.Internal",
        "fct-package": "STMonadTrans",
        "fct-signature": "STTRet (State# s) a",
        "fct-source": "src/Control-Monad-ST-Trans-Internal.html#STTRet",
        "fct-type": "function",
        "title": "STTRet"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Trans Internal",
        "module": "Control.Monad.ST.Trans.Internal",
        "name": "STTRet",
        "normalized": "",
        "package": "STMonadTrans",
        "partial": "STTRet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#v:unSTT",
      "description": {
        "fct-module": "Control.Monad.ST.Trans.Internal",
        "fct-package": "STMonadTrans",
        "fct-signature": "STT s m a -\u003e State# s -\u003e m (STTRet s a)",
        "fct-source": "src/Control-Monad-ST-Trans-Internal.html#unSTT",
        "fct-type": "function",
        "title": "unSTT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Trans Internal",
        "module": "Control.Monad.ST.Trans.Internal",
        "name": "unSTT",
        "normalized": "STT a b c-\u003eState # a-\u003eb(STTRet a c)",
        "package": "STMonadTrans",
        "partial": "STT",
        "signature": "STT s m a-\u003eState # s-\u003em(STTRet s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides a monad transformer version of the ST monad.\n\u003c/p\u003e\u003cp\u003eWarning! This monad transformer should not be used with monads that\n   can contain multiple answers, like the list monad. The reason is that \n   the will be duplicated across the different answers and this cause\n   Bad Things to happen (such as loss of referential transparency). Safe \n   monads include the monads State, Reader, Writer, Maybe and \n   combinations of their corresponding monad transformers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-ST-Trans.html",
        "fct-type": "module",
        "title": "Trans"
      },
      "index": {
        "description": "This library provides monad transformer version of the ST monad Warning This monad transformer should not be used with monads that can contain multiple answers like the list monad The reason is that the will be duplicated across the different answers and this cause Bad Things to happen such as loss of referential transparency Safe monads include the monads State Reader Writer Maybe and combinations of their corresponding monad transformers",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "Trans",
        "normalized": "",
        "package": "STMonadTrans",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#t:STArray",
      "description": {
        "fct-descr": "\u003cp\u003eMutable arrays\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Trans.html#STArray",
        "fct-type": "data",
        "title": "STArray"
      },
      "index": {
        "description": "Mutable arrays",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "STArray",
        "normalized": "",
        "package": "STMonadTrans",
        "partial": "STArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#t:STRef",
      "description": {
        "fct-descr": "\u003cp\u003eMutable references\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Trans.html#STRef",
        "fct-type": "data",
        "title": "STRef"
      },
      "index": {
        "description": "Mutable references",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "STRef",
        "normalized": "",
        "package": "STMonadTrans",
        "partial": "STRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#t:STT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSTT\u003c/a\u003e\u003c/code\u003e is the monad transformer providing polymorphic updateable references\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Trans-Internal.html#STT",
        "fct-type": "data",
        "title": "STT"
      },
      "index": {
        "description": "STT is the monad transformer providing polymorphic updateable references",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "STT",
        "normalized": "",
        "package": "STMonadTrans",
        "partial": "STT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:boundsSTArray",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the lowest and highest indices of the array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "STArray s i e -\u003e (i, i)",
        "fct-source": "src/Control-Monad-ST-Trans.html#boundsSTArray",
        "fct-type": "function",
        "title": "boundsSTArray"
      },
      "index": {
        "description": "Returns the lowest and highest indices of the array",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "boundsSTArray",
        "normalized": "STArray a b c-\u003e(b,b)",
        "package": "STMonadTrans",
        "partial": "STArray",
        "signature": "STArray s i e-\u003e(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:freezeSTArray",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a mutable array and turn it into an immutable array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "STArray s i e -\u003e STT s m (Array i e)",
        "fct-source": "src/Control-Monad-ST-Trans.html#freezeSTArray",
        "fct-type": "function",
        "title": "freezeSTArray"
      },
      "index": {
        "description": "Copy mutable array and turn it into an immutable array",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "freezeSTArray",
        "normalized": "STArray a b c-\u003eSTT a d(Array b c)",
        "package": "STMonadTrans",
        "partial": "STArray",
        "signature": "STArray s i e-\u003eSTT s m(Array i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:newSTArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new mutable array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "(i, i) -\u003e e -\u003e STT s m (STArray s i e)",
        "fct-source": "src/Control-Monad-ST-Trans.html#newSTArray",
        "fct-type": "function",
        "title": "newSTArray"
      },
      "index": {
        "description": "Creates new mutable array",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "newSTArray",
        "normalized": "(a,a)-\u003eb-\u003eSTT c d(STArray c a b)",
        "package": "STMonadTrans",
        "partial": "STArray",
        "signature": "(i,i)-\u003ee-\u003eSTT s m(STArray s i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:newSTRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new reference\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "a -\u003e STT s m (STRef s a)",
        "fct-source": "src/Control-Monad-ST-Trans.html#newSTRef",
        "fct-type": "function",
        "title": "newSTRef"
      },
      "index": {
        "description": "Create new reference",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "newSTRef",
        "normalized": "a-\u003eSTT b c(STRef b a)",
        "package": "STMonadTrans",
        "partial": "STRef",
        "signature": "a-\u003eSTT s m(STRef s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:numElementsSTArray",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of elements in the array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "STArray s i e -\u003e Int",
        "fct-source": "src/Control-Monad-ST-Trans.html#numElementsSTArray",
        "fct-type": "function",
        "title": "numElementsSTArray"
      },
      "index": {
        "description": "Returns the number of elements in the array",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "numElementsSTArray",
        "normalized": "STArray a b c-\u003eInt",
        "package": "STMonadTrans",
        "partial": "Elements STArray",
        "signature": "STArray s i e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:readSTArray",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves an element from the array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "STArray s i e -\u003e i -\u003e STT s m e",
        "fct-source": "src/Control-Monad-ST-Trans.html#readSTArray",
        "fct-type": "function",
        "title": "readSTArray"
      },
      "index": {
        "description": "Retrieves an element from the array",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "readSTArray",
        "normalized": "STArray a b c-\u003eb-\u003eSTT a d c",
        "package": "STMonadTrans",
        "partial": "STArray",
        "signature": "STArray s i e-\u003ei-\u003eSTT s m e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:readSTRef",
      "description": {
        "fct-descr": "\u003cp\u003eReads the value of a reference\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "STRef s a -\u003e STT s m a",
        "fct-source": "src/Control-Monad-ST-Trans.html#readSTRef",
        "fct-type": "function",
        "title": "readSTRef"
      },
      "index": {
        "description": "Reads the value of reference",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "readSTRef",
        "normalized": "STRef a b-\u003eSTT a c b",
        "package": "STMonadTrans",
        "partial": "STRef",
        "signature": "STRef s a-\u003eSTT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:runST",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a computation in the \u003ccode\u003e\u003ca\u003eSTT\u003c/a\u003e\u003c/code\u003e monad transformer\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "(forall s.  STT s m a) -\u003e m a",
        "fct-source": "src/Control-Monad-ST-Trans.html#runST",
        "fct-type": "function",
        "title": "runST"
      },
      "index": {
        "description": "Executes computation in the STT monad transformer",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "runST",
        "normalized": "(a b STT c d e)-\u003ed e",
        "package": "STMonadTrans",
        "partial": "ST",
        "signature": "(forall s. STT s m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:runSTArray",
      "description": {
        "fct-descr": "\u003cp\u003eA safe way to create and work with a mutable array before returning an\n immutable array for later perusal.  This function avoids copying\n the array before returning it.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "(forall s.  STT s m (STArray s i e)) -\u003e m (Array i e)",
        "fct-source": "src/Control-Monad-ST-Trans.html#runSTArray",
        "fct-type": "function",
        "title": "runSTArray"
      },
      "index": {
        "description": "safe way to create and work with mutable array before returning an immutable array for later perusal This function avoids copying the array before returning it",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "runSTArray",
        "normalized": "(a b STT c d(STArray c e f))-\u003ed(Array e f)",
        "package": "STMonadTrans",
        "partial": "STArray",
        "signature": "(forall s. STT s m(STArray s i e))-\u003em(Array i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:thawSTArray",
      "description": {
        "fct-descr": "\u003cp\u003eCopy an immutable array and turn it into a mutable array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "Array i e -\u003e STT s m (STArray s i e)",
        "fct-source": "src/Control-Monad-ST-Trans.html#thawSTArray",
        "fct-type": "function",
        "title": "thawSTArray"
      },
      "index": {
        "description": "Copy an immutable array and turn it into mutable array",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "thawSTArray",
        "normalized": "Array a b-\u003eSTT c d(STArray c a b)",
        "package": "STMonadTrans",
        "partial": "STArray",
        "signature": "Array i e-\u003eSTT s m(STArray s i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:unsafeIORefToSTRef",
      "description": {
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "IORef a -\u003e STRef s a",
        "fct-source": "src/Control-Monad-ST-Trans.html#unsafeIORefToSTRef",
        "fct-type": "function",
        "title": "unsafeIORefToSTRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "unsafeIORefToSTRef",
        "normalized": "IORef a-\u003eSTRef b a",
        "package": "STMonadTrans",
        "partial": "IORef To STRef",
        "signature": "IORef a-\u003eSTRef s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:unsafeIOToSTT",
      "description": {
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "IO a -\u003e STT s m a",
        "fct-source": "src/Control-Monad-ST-Trans.html#unsafeIOToSTT",
        "fct-type": "function",
        "title": "unsafeIOToSTT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "unsafeIOToSTT",
        "normalized": "IO a-\u003eSTT b c a",
        "package": "STMonadTrans",
        "partial": "IOTo STT",
        "signature": "IO a-\u003eSTT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:unsafeSTRefToIORef",
      "description": {
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "STRef s a -\u003e IORef a",
        "fct-source": "src/Control-Monad-ST-Trans.html#unsafeSTRefToIORef",
        "fct-type": "function",
        "title": "unsafeSTRefToIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "unsafeSTRefToIORef",
        "normalized": "STRef a b-\u003eIORef b",
        "package": "STMonadTrans",
        "partial": "STRef To IORef",
        "signature": "STRef s a-\u003eIORef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:unsafeSTToIO",
      "description": {
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "STT s IO a -\u003e IO a",
        "fct-source": "src/Control-Monad-ST-Trans.html#unsafeSTToIO",
        "fct-type": "function",
        "title": "unsafeSTToIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "unsafeSTToIO",
        "normalized": "STT a IO b-\u003eIO b",
        "package": "STMonadTrans",
        "partial": "STTo IO",
        "signature": "STT s IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:writeSTArray",
      "description": {
        "fct-descr": "\u003cp\u003eModifies an element in the array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "STArray s i e -\u003e i -\u003e e -\u003e STT s m ()",
        "fct-source": "src/Control-Monad-ST-Trans.html#writeSTArray",
        "fct-type": "function",
        "title": "writeSTArray"
      },
      "index": {
        "description": "Modifies an element in the array",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "writeSTArray",
        "normalized": "STArray a b c-\u003eb-\u003ec-\u003eSTT a d()",
        "package": "STMonadTrans",
        "partial": "STArray",
        "signature": "STArray s i e-\u003ei-\u003ee-\u003eSTT s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:writeSTRef",
      "description": {
        "fct-descr": "\u003cp\u003eModifies the value of a reference\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Trans",
        "fct-package": "STMonadTrans",
        "fct-signature": "STRef s a -\u003e a -\u003e STT s m ()",
        "fct-source": "src/Control-Monad-ST-Trans.html#writeSTRef",
        "fct-type": "function",
        "title": "writeSTRef"
      },
      "index": {
        "description": "Modifies the value of reference",
        "hierarchy": "Control Monad ST Trans",
        "module": "Control.Monad.ST.Trans",
        "name": "writeSTRef",
        "normalized": "STRef a b-\u003eb-\u003eSTT a c()",
        "package": "STMonadTrans",
        "partial": "STRef",
        "signature": "STRef s a-\u003ea-\u003eSTT s m()"
      }
    }
  }
]