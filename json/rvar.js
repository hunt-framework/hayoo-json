[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom variables.  An \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e is a sampleable random variable.  Because\n probability distributions form a monad, they are quite easy to work with\n in the standard Haskell monadic styles.  For examples, see the source for\n any of the \u003ccode\u003eDistribution\u003c/code\u003e instances - they all are defined in terms of\n \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "module",
        "fct-source": "src/Data-RVar.html",
        "fct-type": "module",
        "title": "RVar"
      },
      "index": {
        "description": "Random variables An RVar is sampleable random variable Because probability distributions form monad they are quite easy to work with in the standard Haskell monadic styles For examples see the source for any of the Distribution instances they all are defined in terms of RVar",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "RVar",
        "normalized": "",
        "package": "rvar",
        "partial": "RVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#t:MonadRandom",
      "description": {
        "fct-descr": "\u003cp\u003eA typeclass for monads with a chosen source of entropy.  For example,\n \u003ccode\u003eRVar\u003c/code\u003e is such a monad - the source from which it is (eventually) sampled\n is the only source from which a random variable is permitted to draw, so\n when directly requesting entropy for a random variable these functions\n are used.\n\u003c/p\u003e\u003cp\u003eMinimum implementation is either the internal \u003ccode\u003e\u003ca\u003egetRandomPrim\u003c/a\u003e\u003c/code\u003e or all\n other functions.  Additionally, this class's interface is subject to \n extension at any time, so it is very, very strongly recommended that\n the \u003ccode\u003emonadRandom\u003c/code\u003e Template Haskell function be used to implement this \n function rather than directly implementing it.  That function takes care\n of choosing default implementations for any missing functions; as long as\n at least one function is implemented, it will derive sensible \n implementations of all others.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003emonadRandom\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell and GADTs language extensions):\n\u003c/p\u003e\u003cpre\u003e $(monadRandom [d|\n         instance MonadRandom FooM where\n             getRandomDouble = return pi\n             getRandomWord16 = return 4\n             {- etc... -}\n     |])\n\u003c/pre\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadRandom"
      },
      "index": {
        "description": "typeclass for monads with chosen source of entropy For example RVar is such monad the source from which it is eventually sampled is the only source from which random variable is permitted to draw so when directly requesting entropy for random variable these functions are used Minimum implementation is either the internal getRandomPrim or all other functions Additionally this class interface is subject to extension at any time so it is very very strongly recommended that the monadRandom Template Haskell function be used to implement this function rather than directly implementing it That function takes care of choosing default implementations for any missing functions as long as at least one function is implemented it will derive sensible implementations of all others To use monadRandom just wrap your instance declaration as follows and enable the TemplateHaskell and GADTs language extensions monadRandom instance MonadRandom FooM where getRandomDouble return pi getRandomWord16 return etc",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "MonadRandom",
        "normalized": "",
        "package": "rvar",
        "partial": "Monad Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#t:RVar",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque type modeling a \"random variable\" - a value \n which depends on the outcome of some random event.  \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es \n can be conveniently defined by an imperative-looking style:\n\u003c/p\u003e\u003cpre\u003e normalPair =  do\n     u \u003c- stdUniform\n     t \u003c- stdUniform\n     let r = sqrt (-2 * log u)\n         theta = (2 * pi) * t\n         \n         x = r * cos theta\n         y = r * sin theta\n     return (x,y)\n\u003c/pre\u003e\u003cp\u003eOR by a more applicative style:\n\u003c/p\u003e\u003cpre\u003e logNormal = exp \u003c$\u003e stdNormal\n\u003c/pre\u003e\u003cp\u003eOnce defined (in any style), there are several ways to sample \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In a monad, using a \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e runRVar (uniform 1 100) DevRandom :: IO Int\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e In a monad, using a \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e sampleRVar (uniform 1 100) :: State PureMT Int\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e As a pure function transforming a functional RNG:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e sampleState (uniform 1 100) :: StdGen -\u003e (Int, StdGen)\n\u003c/pre\u003e\u003cp\u003e(where \u003ccode\u003esampleState = runState . sampleRVar\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "type",
        "fct-source": "src/Data-RVar.html#RVar",
        "fct-type": "type",
        "title": "RVar"
      },
      "index": {
        "description": "An opaque type modeling random variable value which depends on the outcome of some random event RVar can be conveniently defined by an imperative-looking style normalPair do stdUniform stdUniform let sqrt log theta pi cos theta sin theta return OR by more applicative style logNormal exp stdNormal Once defined in any style there are several ways to sample RVar In monad using RandomSource runRVar uniform DevRandom IO Int In monad using MonadRandom instance sampleRVar uniform State PureMT Int As pure function transforming functional RNG sampleState uniform StdGen Int StdGen where sampleState runState sampleRVar",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "RVar",
        "normalized": "",
        "package": "rvar",
        "partial": "RVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#t:RVarT",
      "description": {
        "fct-descr": "\u003cp\u003eA random variable with access to operations in an underlying monad.  Useful\n examples include any form of state for implementing random processes with hysteresis,\n or writer monads for implementing tracing of complicated algorithms.\n\u003c/p\u003e\u003cp\u003eFor example, a simple random walk can be implemented as an \u003ccode\u003e\u003ca\u003eRVarT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e value:\n\u003c/p\u003e\u003cpre\u003e rwalkIO :: IO (RVarT IO Double)\n rwalkIO d = do\n     lastVal \u003c- newIORef 0\n     \n     let x = do\n             prev    \u003c- lift (readIORef lastVal)\n             change  \u003c- rvarT StdNormal\n             \n             let new = prev + change\n             lift (writeIORef lastVal new)\n             return new\n         \n     return x\n\u003c/pre\u003e\u003cp\u003eTo run the random walk it must first be initialized, after which it can be sampled as usual:\n\u003c/p\u003e\u003cpre\u003e do\n     rw \u003c- rwalkIO\n     x \u003c- sampleRVarT rw\n     y \u003c- sampleRVarT rw\n     ...\n\u003c/pre\u003e\u003cp\u003eThe same random-walk process as above can be implemented using MTL types\n as follows (using \u003ccode\u003eimport Control.Monad.Trans as MTL\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e rwalkState :: RVarT (State Double) Double\n rwalkState = do\n     prev \u003c- MTL.lift get\n     change  \u003c- rvarT StdNormal\n     \n     let new = prev + change\n     MTL.lift (put new)\n     return new\n\u003c/pre\u003e\u003cp\u003eInvocation is straightforward (although a bit noisy) if you're used to MTL:\n\u003c/p\u003e\u003cpre\u003e rwalk :: Int -\u003e Double -\u003e StdGen -\u003e ([Double], StdGen)\n rwalk count start gen = \n     flip evalState start .\n         flip runStateT gen .\n             sampleRVarTWith MTL.lift $\n                 replicateM count rwalkState\n\u003c/pre\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "data",
        "fct-source": "src/Data-RVar.html#RVarT",
        "fct-type": "data",
        "title": "RVarT"
      },
      "index": {
        "description": "random variable with access to operations in an underlying monad Useful examples include any form of state for implementing random processes with hysteresis or writer monads for implementing tracing of complicated algorithms For example simple random walk can be implemented as an RVarT IO value rwalkIO IO RVarT IO Double rwalkIO do lastVal newIORef let do prev lift readIORef lastVal change rvarT StdNormal let new prev change lift writeIORef lastVal new return new return To run the random walk it must first be initialized after which it can be sampled as usual do rw rwalkIO sampleRVarT rw sampleRVarT rw The same random-walk process as above can be implemented using MTL types as follows using import Control.Monad.Trans as MTL rwalkState RVarT State Double Double rwalkState do prev MTL.lift get change rvarT StdNormal let new prev change MTL.lift put new return new Invocation is straightforward although bit noisy if you re used to MTL rwalk Int Double StdGen Double StdGen rwalk count start gen flip evalState start flip runStateT gen sampleRVarTWith MTL.lift replicateM count rwalkState",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "RVarT",
        "normalized": "",
        "package": "rvar",
        "partial": "RVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#t:RandomSource",
      "description": {
        "fct-descr": "\u003cp\u003eA source of entropy which can be used in the given monad.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimum implementation is either the internal \u003ccode\u003e\u003ca\u003egetRandomPrimFrom\u003c/a\u003e\u003c/code\u003e or all\n other functions.  Additionally, this class's interface is subject to \n extension at any time, so it is very, very strongly recommended that\n the \u003ccode\u003erandomSource\u003c/code\u003e Template Haskell function be used to implement this \n function rather than directly implementing it.  That function takes care\n of choosing default implementations for any missing functions; as long as\n at least one function is implemented, it will derive sensible \n implementations of all others.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003erandomSource\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell, MultiParamTypeClasses and GADTs language\n extensions, as well as any others required by your instances, such as\n FlexibleInstances):\n\u003c/p\u003e\u003cpre\u003e $(randomSource [d|\n         instance RandomSource FooM Bar where\n             {- at least one RandomSource function... -}\n     |])\n\u003c/pre\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "RandomSource"
      },
      "index": {
        "description": "source of entropy which can be used in the given monad See also MonadRandom Minimum implementation is either the internal getRandomPrimFrom or all other functions Additionally this class interface is subject to extension at any time so it is very very strongly recommended that the randomSource Template Haskell function be used to implement this function rather than directly implementing it That function takes care of choosing default implementations for any missing functions as long as at least one function is implemented it will derive sensible implementations of all others To use randomSource just wrap your instance declaration as follows and enable the TemplateHaskell MultiParamTypeClasses and GADTs language extensions as well as any others required by your instances such as FlexibleInstances randomSource instance RandomSource FooM Bar where at least one RandomSource function",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "RandomSource",
        "normalized": "",
        "package": "rvar",
        "partial": "Random Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:getRandomDouble",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 1\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "m Double",
        "fct-type": "method",
        "title": "getRandomDouble"
      },
      "index": {
        "description": "Generate uniformly distributed random Double in the range",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "getRandomDouble",
        "normalized": "",
        "package": "rvar",
        "partial": "Random Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:getRandomNByteInteger",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e in the range 0 \u003c= U \u003c 256^n\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "Int -\u003e m Integer",
        "fct-type": "method",
        "title": "getRandomNByteInteger"
      },
      "index": {
        "description": "Generate uniformly distributed random Integer in the range",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "getRandomNByteInteger",
        "normalized": "Int-\u003ea Integer",
        "package": "rvar",
        "partial": "Random NByte Integer",
        "signature": "Int-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:getRandomWord16",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "m Word16",
        "fct-type": "method",
        "title": "getRandomWord16"
      },
      "index": {
        "description": "Generate uniformly distributed random Word16",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "getRandomWord16",
        "normalized": "",
        "package": "rvar",
        "partial": "Random Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:getRandomWord32",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "m Word32",
        "fct-type": "method",
        "title": "getRandomWord32"
      },
      "index": {
        "description": "Generate uniformly distributed random Word32",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "getRandomWord32",
        "normalized": "",
        "package": "rvar",
        "partial": "Random Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:getRandomWord64",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "m Word64",
        "fct-type": "method",
        "title": "getRandomWord64"
      },
      "index": {
        "description": "Generate uniformly distributed random Word64",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "getRandomWord64",
        "normalized": "",
        "package": "rvar",
        "partial": "Random Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:getRandomWord8",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a uniformly distributed random \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "m Word8",
        "fct-type": "method",
        "title": "getRandomWord8"
      },
      "index": {
        "description": "Generate uniformly distributed random Word8",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "getRandomWord8",
        "normalized": "",
        "package": "rvar",
        "partial": "Random Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:runRVar",
      "description": {
        "fct-descr": "\u003cp\u003e\"Run\" an \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e - samples the random variable from the provided\n source of entropy.\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "RVar a -\u003e s -\u003e m a",
        "fct-source": "src/Data-RVar.html#runRVar",
        "fct-type": "function",
        "title": "runRVar"
      },
      "index": {
        "description": "Run an RVar samples the random variable from the provided source of entropy",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "runRVar",
        "normalized": "RVar a-\u003eb-\u003ec a",
        "package": "rvar",
        "partial": "RVar",
        "signature": "RVar a-\u003es-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:runRVarT",
      "description": {
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "RVarT m a -\u003e s -\u003e m a",
        "fct-source": "src/Data-RVar.html#runRVarT",
        "fct-type": "function",
        "title": "runRVarT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "runRVarT",
        "normalized": "RVarT a b-\u003ec-\u003ea b",
        "package": "rvar",
        "partial": "RVar",
        "signature": "RVarT m a-\u003es-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:runRVarTWith",
      "description": {
        "fct-descr": "\u003cp\u003e\"Runs\" an \u003ccode\u003e\u003ca\u003eRVarT\u003c/a\u003e\u003c/code\u003e, sampling the random variable it defines.\n\u003c/p\u003e\u003cp\u003eThe first argument lifts the base monad into the sampling monad.  This \n operation must obey the \"monad transformer\" laws:\n\u003c/p\u003e\u003cpre\u003e lift . return = return\n lift (x \u003e\u003e= f) = (lift x) \u003e\u003e= (lift . f)\n\u003c/pre\u003e\u003cp\u003eOne example of a useful non-standard lifting would be one that takes\n \u003ccode\u003eState s\u003c/code\u003e to another monad with a different state representation (such as\n \u003ccode\u003eIO\u003c/code\u003e with the state mapped to an \u003ccode\u003eIORef\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e embedState :: (Monad m) =\u003e m s -\u003e (s -\u003e m ()) -\u003e State s a -\u003e m a\n embedState get put = \\m -\u003e do\n     s \u003c- get\n     (res,s) \u003c- return (runState m s)\n     put s\n     return res\n\u003c/pre\u003e\u003cp\u003eThe ability to lift is very important - without it, every \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e would have\n to either be given access to the full capability of the monad in which it\n will eventually be sampled (which, incidentally, would also have to be \n monomorphic so you couldn't sample one \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e in more than one monad)\n or functions manipulating \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es would have to use higher-ranked \n types to enforce the same kind of isolation and polymorphism.\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "(forall t.  n t -\u003e m t) -\u003e RVarT n a -\u003e s -\u003e m a",
        "fct-source": "src/Data-RVar.html#runRVarTWith",
        "fct-type": "function",
        "title": "runRVarTWith"
      },
      "index": {
        "description": "Runs an RVarT sampling the random variable it defines The first argument lifts the base monad into the sampling monad This operation must obey the monad transformer laws lift return return lift lift lift One example of useful non-standard lifting would be one that takes State to another monad with different state representation such as IO with the state mapped to an IORef embedState Monad State embedState get put do get res return runState put return res The ability to lift is very important without it every RVar would have to either be given access to the full capability of the monad in which it will eventually be sampled which incidentally would also have to be monomorphic so you couldn sample one RVar in more than one monad or functions manipulating RVar would have to use higher-ranked types to enforce the same kind of isolation and polymorphism",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "runRVarTWith",
        "normalized": "(a b c d-\u003ee d)-\u003eRVarT c f-\u003eg-\u003ee f",
        "package": "rvar",
        "partial": "RVar TWith",
        "signature": "(forall t. n t-\u003em t)-\u003eRVarT n a-\u003es-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:sampleRVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esampleRVar x\u003c/code\u003e is equivalent to \u003ccode\u003erunRVar x \u003ccode\u003eStdRandom\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "RVar a -\u003e m a",
        "fct-source": "src/Data-RVar.html#sampleRVar",
        "fct-type": "function",
        "title": "sampleRVar"
      },
      "index": {
        "description": "sampleRVar is equivalent to runRVar StdRandom",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "sampleRVar",
        "normalized": "RVar a-\u003eb a",
        "package": "rvar",
        "partial": "RVar",
        "signature": "RVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:sampleRVarT",
      "description": {
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "RVarT m a -\u003e m a",
        "fct-source": "src/Data-RVar.html#sampleRVarT",
        "fct-type": "function",
        "title": "sampleRVarT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "sampleRVarT",
        "normalized": "RVarT a b-\u003ea b",
        "package": "rvar",
        "partial": "RVar",
        "signature": "RVarT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rvar/docs/Data-RVar.html#v:sampleRVarTWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esampleRVarTWith lift x\u003c/code\u003e is equivalent to \u003ccode\u003erunRVarTWith lift x \u003ccode\u003eStdRandom\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RVar",
        "fct-package": "rvar",
        "fct-signature": "(forall t.  n t -\u003e m t) -\u003e RVarT n a -\u003e m a",
        "fct-source": "src/Data-RVar.html#sampleRVarTWith",
        "fct-type": "function",
        "title": "sampleRVarTWith"
      },
      "index": {
        "description": "sampleRVarTWith lift is equivalent to runRVarTWith lift StdRandom",
        "hierarchy": "Data RVar",
        "module": "Data.RVar",
        "name": "sampleRVarTWith",
        "normalized": "(a b c d-\u003ee d)-\u003eRVarT c f-\u003ee f",
        "package": "rvar",
        "partial": "RVar TWith",
        "signature": "(forall t. n t-\u003em t)-\u003eRVarT n a-\u003em a"
      }
    }
  }
]