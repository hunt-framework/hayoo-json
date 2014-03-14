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
        "word": "STMonadTrans"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the implementation of the \u003ccode\u003e\u003ca\u003eSTT\u003c/a\u003e\u003c/code\u003e type for those\n   occasions where it's needed in order to implement new liftings through\n   operations in other monads.\n\u003c/p\u003e\u003cp\u003eWarning! This monad transformer should not be used with monads that\n   can contain multiple answers, like the list monad. The reason is that \n   the will be duplicated across the different answers and this cause\n   Bad Things to happen (such as loss of referential transparency). Safe \n   monads include the monads State, Reader, Writer, Maybe and \n   combinations of their corresponding monad transformers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "Internal",
          "package": "STMonadTrans",
          "source": "src/Control-Monad-ST-Trans-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the implementation of the STT type for those occasions where it needed in order to implement new liftings through operations in other monads Warning This monad transformer should not be used with monads that can contain multiple answers like the list monad The reason is that the will be duplicated across the different answers and this cause Bad Things to happen such as loss of referential transparency Safe monads include the monads State Reader Writer Maybe and combinations of their corresponding monad transformers",
          "hierarchy": "Control Monad ST Trans Internal",
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "Internal",
          "package": "STMonadTrans",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSTT\u003c/a\u003e\u003c/code\u003e is the monad transformer providing polymorphic updateable references\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "STT",
          "package": "STMonadTrans",
          "source": "src/Control-Monad-ST-Trans-Internal.html#STT",
          "type": "newtype"
        },
        "index": {
          "description": "STT is the monad transformer providing polymorphic updateable references",
          "hierarchy": "Control Monad ST Trans Internal",
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "STT",
          "package": "STMonadTrans",
          "partial": "STT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#t:STT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSTTRet\u003c/a\u003e\u003c/code\u003e is needed to encapsulate the unboxed state token that GHC passes\n   around. This type is essentially a pair, but an ordinary pair is not\n   not allowed to contain unboxed types.\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "STTRet",
          "package": "STMonadTrans",
          "source": "src/Control-Monad-ST-Trans-Internal.html#STTRet",
          "type": "data"
        },
        "index": {
          "description": "STTRet is needed to encapsulate the unboxed state token that GHC passes around This type is essentially pair but an ordinary pair is not not allowed to contain unboxed types",
          "hierarchy": "Control Monad ST Trans Internal",
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "STTRet",
          "package": "STMonadTrans",
          "partial": "STTRet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#t:STTRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "STT",
          "package": "STMonadTrans",
          "signature": "STT (State# s -\u003e m (STTRet s a))",
          "source": "src/Control-Monad-ST-Trans-Internal.html#STT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Trans Internal",
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "STT",
          "normalized": "STT(State # a-\u003eb(STTRet a c))",
          "package": "STMonadTrans",
          "partial": "STT",
          "signature": "STT(State # s-\u003em(STTRet s a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#v:STT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "STTRet",
          "package": "STMonadTrans",
          "signature": "STTRet (State# s) a",
          "source": "src/Control-Monad-ST-Trans-Internal.html#STTRet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Trans Internal",
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "STTRet",
          "package": "STMonadTrans",
          "partial": "STTRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#v:STTRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "unSTT",
          "package": "STMonadTrans",
          "signature": "STT s m a -\u003e State# s -\u003e m (STTRet s a)",
          "source": "src/Control-Monad-ST-Trans-Internal.html#unSTT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Trans Internal",
          "module": "Control.Monad.ST.Trans.Internal",
          "name": "unSTT",
          "normalized": "STT a b c-\u003eState # a-\u003eb(STTRet a c)",
          "package": "STMonadTrans",
          "partial": "STT",
          "signature": "STT s m a-\u003eState # s-\u003em(STTRet s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans-Internal.html#v:unSTT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides a monad transformer version of the ST monad.\n\u003c/p\u003e\u003cp\u003eWarning! This monad transformer should not be used with monads that\n   can contain multiple answers, like the list monad. The reason is that \n   the will be duplicated across the different answers and this cause\n   Bad Things to happen (such as loss of referential transparency). Safe \n   monads include the monads State, Reader, Writer, Maybe and \n   combinations of their corresponding monad transformers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "Trans",
          "package": "STMonadTrans",
          "source": "src/Control-Monad-ST-Trans.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides monad transformer version of the ST monad Warning This monad transformer should not be used with monads that can contain multiple answers like the list monad The reason is that the will be duplicated across the different answers and this cause Bad Things to happen such as loss of referential transparency Safe monads include the monads State Reader Writer Maybe and combinations of their corresponding monad transformers",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "Trans",
          "package": "STMonadTrans",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable arrays\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "STArray",
          "package": "STMonadTrans",
          "source": "src/Control-Monad-ST-Trans.html#STArray",
          "type": "data"
        },
        "index": {
          "description": "Mutable arrays",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "STArray",
          "package": "STMonadTrans",
          "partial": "STArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#t:STArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable references\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "STRef",
          "package": "STMonadTrans",
          "source": "src/Control-Monad-ST-Trans.html#STRef",
          "type": "data"
        },
        "index": {
          "description": "Mutable references",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "STRef",
          "package": "STMonadTrans",
          "partial": "STRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#t:STRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSTT\u003c/a\u003e\u003c/code\u003e is the monad transformer providing polymorphic updateable references\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "STT",
          "package": "STMonadTrans",
          "source": "src/Control-Monad-ST-Trans-Internal.html#STT",
          "type": "data"
        },
        "index": {
          "description": "STT is the monad transformer providing polymorphic updateable references",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "STT",
          "package": "STMonadTrans",
          "partial": "STT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#t:STT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the lowest and highest indices of the array\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "boundsSTArray",
          "package": "STMonadTrans",
          "signature": "STArray s i e -\u003e (i, i)",
          "source": "src/Control-Monad-ST-Trans.html#boundsSTArray",
          "type": "function"
        },
        "index": {
          "description": "Returns the lowest and highest indices of the array",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "boundsSTArray",
          "normalized": "STArray a b c-\u003e(b,b)",
          "package": "STMonadTrans",
          "partial": "STArray",
          "signature": "STArray s i e-\u003e(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:boundsSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a mutable array and turn it into an immutable array\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "freezeSTArray",
          "package": "STMonadTrans",
          "signature": "STArray s i e -\u003e STT s m (Array i e)",
          "source": "src/Control-Monad-ST-Trans.html#freezeSTArray",
          "type": "function"
        },
        "index": {
          "description": "Copy mutable array and turn it into an immutable array",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "freezeSTArray",
          "normalized": "STArray a b c-\u003eSTT a d(Array b c)",
          "package": "STMonadTrans",
          "partial": "STArray",
          "signature": "STArray s i e-\u003eSTT s m(Array i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:freezeSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new mutable array\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "newSTArray",
          "package": "STMonadTrans",
          "signature": "(i, i) -\u003e e -\u003e STT s m (STArray s i e)",
          "source": "src/Control-Monad-ST-Trans.html#newSTArray",
          "type": "function"
        },
        "index": {
          "description": "Creates new mutable array",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "newSTArray",
          "normalized": "(a,a)-\u003eb-\u003eSTT c d(STArray c a b)",
          "package": "STMonadTrans",
          "partial": "STArray",
          "signature": "(i,i)-\u003ee-\u003eSTT s m(STArray s i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:newSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new reference\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "newSTRef",
          "package": "STMonadTrans",
          "signature": "a -\u003e STT s m (STRef s a)",
          "source": "src/Control-Monad-ST-Trans.html#newSTRef",
          "type": "function"
        },
        "index": {
          "description": "Create new reference",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "newSTRef",
          "normalized": "a-\u003eSTT b c(STRef b a)",
          "package": "STMonadTrans",
          "partial": "STRef",
          "signature": "a-\u003eSTT s m(STRef s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:newSTRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of elements in the array\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "numElementsSTArray",
          "package": "STMonadTrans",
          "signature": "STArray s i e -\u003e Int",
          "source": "src/Control-Monad-ST-Trans.html#numElementsSTArray",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of elements in the array",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "numElementsSTArray",
          "normalized": "STArray a b c-\u003eInt",
          "package": "STMonadTrans",
          "partial": "Elements STArray",
          "signature": "STArray s i e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:numElementsSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves an element from the array\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "readSTArray",
          "package": "STMonadTrans",
          "signature": "STArray s i e -\u003e i -\u003e STT s m e",
          "source": "src/Control-Monad-ST-Trans.html#readSTArray",
          "type": "function"
        },
        "index": {
          "description": "Retrieves an element from the array",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "readSTArray",
          "normalized": "STArray a b c-\u003eb-\u003eSTT a d c",
          "package": "STMonadTrans",
          "partial": "STArray",
          "signature": "STArray s i e-\u003ei-\u003eSTT s m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:readSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the value of a reference\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "readSTRef",
          "package": "STMonadTrans",
          "signature": "STRef s a -\u003e STT s m a",
          "source": "src/Control-Monad-ST-Trans.html#readSTRef",
          "type": "function"
        },
        "index": {
          "description": "Reads the value of reference",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "readSTRef",
          "normalized": "STRef a b-\u003eSTT a c b",
          "package": "STMonadTrans",
          "partial": "STRef",
          "signature": "STRef s a-\u003eSTT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:readSTRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation in the \u003ccode\u003e\u003ca\u003eSTT\u003c/a\u003e\u003c/code\u003e monad transformer\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "runST",
          "package": "STMonadTrans",
          "signature": "(forall s.  STT s m a) -\u003e m a",
          "source": "src/Control-Monad-ST-Trans.html#runST",
          "type": "function"
        },
        "index": {
          "description": "Executes computation in the STT monad transformer",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "runST",
          "normalized": "(a b STT c d e)-\u003ed e",
          "package": "STMonadTrans",
          "partial": "ST",
          "signature": "(forall s. STT s m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:runST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe way to create and work with a mutable array before returning an\n immutable array for later perusal.  This function avoids copying\n the array before returning it.\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "runSTArray",
          "package": "STMonadTrans",
          "signature": "(forall s.  STT s m (STArray s i e)) -\u003e m (Array i e)",
          "source": "src/Control-Monad-ST-Trans.html#runSTArray",
          "type": "function"
        },
        "index": {
          "description": "safe way to create and work with mutable array before returning an immutable array for later perusal This function avoids copying the array before returning it",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "runSTArray",
          "normalized": "(a b STT c d(STArray c e f))-\u003ed(Array e f)",
          "package": "STMonadTrans",
          "partial": "STArray",
          "signature": "(forall s. STT s m(STArray s i e))-\u003em(Array i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:runSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy an immutable array and turn it into a mutable array\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "thawSTArray",
          "package": "STMonadTrans",
          "signature": "Array i e -\u003e STT s m (STArray s i e)",
          "source": "src/Control-Monad-ST-Trans.html#thawSTArray",
          "type": "function"
        },
        "index": {
          "description": "Copy an immutable array and turn it into mutable array",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "thawSTArray",
          "normalized": "Array a b-\u003eSTT c d(STArray c a b)",
          "package": "STMonadTrans",
          "partial": "STArray",
          "signature": "Array i e-\u003eSTT s m(STArray s i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:thawSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Trans",
          "name": "unsafeIORefToSTRef",
          "package": "STMonadTrans",
          "signature": "IORef a -\u003e STRef s a",
          "source": "src/Control-Monad-ST-Trans.html#unsafeIORefToSTRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "unsafeIORefToSTRef",
          "normalized": "IORef a-\u003eSTRef b a",
          "package": "STMonadTrans",
          "partial": "IORef To STRef",
          "signature": "IORef a-\u003eSTRef s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:unsafeIORefToSTRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Trans",
          "name": "unsafeIOToSTT",
          "package": "STMonadTrans",
          "signature": "IO a -\u003e STT s m a",
          "source": "src/Control-Monad-ST-Trans.html#unsafeIOToSTT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "unsafeIOToSTT",
          "normalized": "IO a-\u003eSTT b c a",
          "package": "STMonadTrans",
          "partial": "IOTo STT",
          "signature": "IO a-\u003eSTT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:unsafeIOToSTT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Trans",
          "name": "unsafeSTRefToIORef",
          "package": "STMonadTrans",
          "signature": "STRef s a -\u003e IORef a",
          "source": "src/Control-Monad-ST-Trans.html#unsafeSTRefToIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "unsafeSTRefToIORef",
          "normalized": "STRef a b-\u003eIORef b",
          "package": "STMonadTrans",
          "partial": "STRef To IORef",
          "signature": "STRef s a-\u003eIORef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:unsafeSTRefToIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Trans",
          "name": "unsafeSTToIO",
          "package": "STMonadTrans",
          "signature": "STT s IO a -\u003e IO a",
          "source": "src/Control-Monad-ST-Trans.html#unsafeSTToIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "unsafeSTToIO",
          "normalized": "STT a IO b-\u003eIO b",
          "package": "STMonadTrans",
          "partial": "STTo IO",
          "signature": "STT s IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:unsafeSTToIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies an element in the array\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "writeSTArray",
          "package": "STMonadTrans",
          "signature": "STArray s i e -\u003e i -\u003e e -\u003e STT s m ()",
          "source": "src/Control-Monad-ST-Trans.html#writeSTArray",
          "type": "function"
        },
        "index": {
          "description": "Modifies an element in the array",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "writeSTArray",
          "normalized": "STArray a b c-\u003eb-\u003ec-\u003eSTT a d()",
          "package": "STMonadTrans",
          "partial": "STArray",
          "signature": "STArray s i e-\u003ei-\u003ee-\u003eSTT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:writeSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the value of a reference\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Trans",
          "name": "writeSTRef",
          "package": "STMonadTrans",
          "signature": "STRef s a -\u003e a -\u003e STT s m ()",
          "source": "src/Control-Monad-ST-Trans.html#writeSTRef",
          "type": "function"
        },
        "index": {
          "description": "Modifies the value of reference",
          "hierarchy": "Control Monad ST Trans",
          "module": "Control.Monad.ST.Trans",
          "name": "writeSTRef",
          "normalized": "STRef a b-\u003eb-\u003eSTT a c()",
          "package": "STMonadTrans",
          "partial": "STRef",
          "signature": "STRef s a-\u003ea-\u003eSTT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/STMonadTrans/docs/Control-Monad-ST-Trans.html#v:writeSTRef"
      }
    }
  ]
]