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
        "word": "final"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn alternative to \u003ca\u003eControl.Final\u003c/a\u003e is a using the writer monad.\n\u003c/p\u003e\u003cpre\u003e instance Monoid a =\u003e Monoid (IO a) where\n   mempty = return mempty\n   mappend = liftA2 mappend\n\n stmExampleW = do\n   tv \u003c- newTVarIO \"xxx\"\n   join $ atomically $ execWriterT $ do\n     val \u003c- lift $ readTVar tv\n     case val of\n       \"xxx\" -\u003e do\n         lift $ writeTVar tv \"foobar\"\n         tell $ print \"it was xxx\"\n       \"yyy\" -\u003e do\n         lift $ writeTVar tv \"quux\"\n         tell $ print \"it was yyy\"\n     tell $ print \"I finished\"\n\u003c/pre\u003e\u003cp\u003eThis works.  Unfortunately when using the writer, you have to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n every operation of the base monad and also there is no such thing\n as \u003ccode\u003efinalTell\u003c/code\u003e to specify that this is a return point of the\n function.  On the positive side, the writer alternative let's you\n gather multiple \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operations together using a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, while\n \u003ccode\u003e\u003ca\u003efinal\u003c/a\u003e\u003c/code\u003e can't do that.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Final.Alternatives",
          "name": "Alternatives",
          "package": "final",
          "source": "src/Control-Final-Alternatives.html",
          "type": "module"
        },
        "index": {
          "description": "An alternative to Control.Final is using the writer monad instance Monoid Monoid IO where mempty return mempty mappend liftA2 mappend stmExampleW do tv newTVarIO xxx join atomically execWriterT do val lift readTVar tv case val of xxx do lift writeTVar tv foobar tell print it was xxx yyy do lift writeTVar tv quux tell print it was yyy tell print finished This works Unfortunately when using the writer you have to lift every operation of the base monad and also there is no such thing as finalTell to specify that this is return point of the function On the positive side the writer alternative let you gather multiple IO operations together using Monoid while final can do that",
          "hierarchy": "Control Final Alternatives",
          "module": "Control.Final.Alternatives",
          "name": "Alternatives",
          "package": "final",
          "partial": "Alternatives",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final-Alternatives.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConsider this peace of code:\n\u003c/p\u003e\u003cpre\u003e join $ atomically $ do\n   radarPositive \u003c- readTVar radarTVar\n   launchKeyInserted \u003c- readTVar launchKeyTVar\n   case radarPositive of\n     False -\u003e do\n       modifyTVar radarNegativeCounter (+1)\n       return $ print \"No need for missiles, it's peaceful\"\n     True -\u003e do\n       modifyTVar radarPositiveCounter (+1)\n       case launchKeyInserted of\n         False -\u003e do\n           modifyTVar keyMissingCounter (+1)\n           return $ print \"No launch key, ignoring radar\"\n         True -\u003e do\n           modifyTVar launchCounter (+1)\n           return $ launchMissiles\n   return $ print \"extra debug: state checking finished\"\n\u003c/pre\u003e\u003cp\u003eWe use \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e to make state checking of multiple \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003es one atomic\n transaction.  Since we can't do \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e, we are just returning\n the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e that needs to be done in the different cases.  Unfortunately\n when we try to add the extra debugging as the last statement, that\n silently ignores all the previous \"return\" values, even\n \u003ccode\u003elaunchMissiles\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn the other hand when using final:\n\u003c/p\u003e\u003cpre\u003e atomicJoinFinal $ do\n   radarPositive \u003c- readTVar radarTVar\n   launchKeyInserted \u003c- readTVar launchKeyTVar\n   case radarPositive of\n     False -\u003e do\n       modifyTVar radarNegativeCounter (+1)\n       final $ print \"No need for missiles, it's peaceful\"\n     True -\u003e do\n       modifyTVar radarPositiveCounter (+1)\n       case launchKeyInserted of\n         False -\u003e do\n           modifyTVar keyMissingCounter (+1)\n           final $ print \"No launch key, ignoring radar\"\n         True -\u003e do\n           modifyTVar launchCounter (+1)\n           final $ launchMissiles\n   final $ print \"extra debug: state checking finished\"\n\u003c/pre\u003e\u003cp\u003eWe get a compile error that contains this:\n\u003c/p\u003e\u003cpre\u003e    Note: there are several potential instances:\n      instance FinalClass Control.Final.FinalTooManyReturns\n\u003c/pre\u003e\u003cp\u003eInternally \u003ccode\u003eFinal\u003c/code\u003e is based on ambiguity checking in the type\n system.  The prohibited ambiguity occurs, because the only way to\n decide what \u003ccode\u003e\u003ca\u003efinal\u003c/a\u003e\u003c/code\u003e means is by matching it to the corresponding\n \u003ccode\u003e\u003ca\u003eatomicJoinFinal\u003c/a\u003e\u003c/code\u003e.  This is now only possible for the \u003ccode\u003e\u003ca\u003efinal\u003c/a\u003e\u003c/code\u003e at\n the end of the function and not for the middle ones, so we get the\n error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Final.Example",
          "name": "Example",
          "package": "final",
          "source": "src/Control-Final-Example.html",
          "type": "module"
        },
        "index": {
          "description": "Consider this peace of code join atomically do radarPositive readTVar radarTVar launchKeyInserted readTVar launchKeyTVar case radarPositive of False do modifyTVar radarNegativeCounter return print No need for missiles it peaceful True do modifyTVar radarPositiveCounter case launchKeyInserted of False do modifyTVar keyMissingCounter return print No launch key ignoring radar True do modifyTVar launchCounter return launchMissiles return print extra debug state checking finished We use STM to make state checking of multiple TVar one atomic transaction Since we can do IO in STM we are just returning the IO that needs to be done in the different cases Unfortunately when we try to add the extra debugging as the last statement that silently ignores all the previous return values even launchMissiles On the other hand when using final atomicJoinFinal do radarPositive readTVar radarTVar launchKeyInserted readTVar launchKeyTVar case radarPositive of False do modifyTVar radarNegativeCounter final print No need for missiles it peaceful True do modifyTVar radarPositiveCounter case launchKeyInserted of False do modifyTVar keyMissingCounter final print No launch key ignoring radar True do modifyTVar launchCounter final launchMissiles final print extra debug state checking finished We get compile error that contains this Note there are several potential instances instance FinalClass Control.Final.FinalTooManyReturns Internally Final is based on ambiguity checking in the type system The prohibited ambiguity occurs because the only way to decide what final means is by matching it to the corresponding atomicJoinFinal This is now only possible for the final at the end of the function and not for the middle ones so we get the error",
          "hierarchy": "Control Final Example",
          "module": "Control.Final.Example",
          "name": "Example",
          "package": "final",
          "partial": "Example",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final-Example.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eFinal\u003c/code\u003e library makes it possible to point out return values in\n (monadic) functions.  This adds extra compile-time safety to your\n code, because the compiler will warn you if marked return values\n accidentally became middle parts of a big function written with do\n notation.\n\u003c/p\u003e\u003cp\u003eA worked out example can be found in \u003ca\u003eControl.Final.Example\u003c/a\u003e, and\n an alternative approach is considered in \u003ca\u003eControl.Final.Alternatives\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Final",
          "name": "Final",
          "package": "final",
          "source": "src/Control-Final.html",
          "type": "module"
        },
        "index": {
          "description": "The Final library makes it possible to point out return values in monadic functions This adds extra compile-time safety to your code because the compiler will warn you if marked return values accidentally became middle parts of big function written with do notation worked out example can be found in Control.Final.Example and an alternative approach is considered in Control.Final.Alternatives",
          "hierarchy": "Control Final",
          "module": "Control.Final",
          "name": "Final",
          "package": "final",
          "partial": "Final",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is the main idea behind \u003ccode\u003eFinal\u003c/code\u003e.  \u003ccode\u003efinalV\u003c/code\u003e is in a\n type class, so we we can have to instances, therefore if used\n incorrectly the compiler sees an ambiguity.\n\u003c/p\u003e",
          "module": "Control.Final",
          "name": "FinalClass",
          "package": "final",
          "source": "src/Control-Final.html#FinalClass",
          "type": "class"
        },
        "index": {
          "description": "This class is the main idea behind Final finalV is in type class so we we can have to instances therefore if used incorrectly the compiler sees an ambiguity",
          "hierarchy": "Control Final",
          "module": "Control.Final",
          "name": "FinalClass",
          "package": "final",
          "partial": "Final Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final.html#t:FinalClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadIO version of atomically.  Not really related to \u003ccode\u003eFinal\u003c/code\u003e,\n but if we already have \u003ccode\u003e\u003ca\u003eatomicJoinFinal\u003c/a\u003e\u003c/code\u003e in this module, it makes\n sense to provide this too.\n\u003c/p\u003e",
          "module": "Control.Final",
          "name": "atomic",
          "package": "final",
          "signature": "STM a -\u003e m a",
          "source": "src/Control-Final.html#atomic",
          "type": "function"
        },
        "index": {
          "description": "MonadIO version of atomically Not really related to Final but if we already have atomicJoinFinal in this module it makes sense to provide this too",
          "hierarchy": "Control Final",
          "module": "Control.Final",
          "name": "atomic",
          "normalized": "STM a-\u003eb a",
          "package": "final",
          "signature": "STM a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final.html#v:atomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of atomically, that joins and runFinals.  This is the\n most common usage for the author.  Details and example can be found\n in \u003ca\u003eControl.Final.Example\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Final",
          "name": "atomicJoinFinal",
          "package": "final",
          "signature": "STM (Final (m a)) -\u003e m a",
          "source": "src/Control-Final.html#atomicJoinFinal",
          "type": "function"
        },
        "index": {
          "description": "version of atomically that joins and runFinals This is the most common usage for the author Details and example can be found in Control.Final.Example",
          "hierarchy": "Control Final",
          "module": "Control.Final",
          "name": "atomicJoinFinal",
          "normalized": "STM(Final(a b))-\u003ea b",
          "package": "final",
          "partial": "Join Final",
          "signature": "STM(Final(m a))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final.html#v:atomicJoinFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this instead of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e when you want to mark this point as\n a final return for the corresponding \u003ccode\u003e\u003ca\u003erunFinal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Final",
          "name": "final",
          "package": "final",
          "signature": "x -\u003e m (f x)",
          "source": "src/Control-Final.html#final",
          "type": "function"
        },
        "index": {
          "description": "Use this instead of return when you want to mark this point as final return for the corresponding runFinal",
          "hierarchy": "Control Final",
          "module": "Control.Final",
          "name": "final",
          "normalized": "a-\u003eb(c a)",
          "package": "final",
          "signature": "x-\u003em(f x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final.html#v:final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Final",
          "name": "finalV",
          "package": "final",
          "signature": "a -\u003e f a",
          "source": "src/Control-Final.html#finalV",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Final",
          "module": "Control.Final",
          "name": "finalV",
          "normalized": "a-\u003eb a",
          "package": "final",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final.html#v:finalV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful when the final return value is a monadic computation\n itself that after returned has to be joined into the current\n computation.\n\u003c/p\u003e",
          "module": "Control.Final",
          "name": "joinFinal",
          "package": "final",
          "signature": "m (Final (m a)) -\u003e m a",
          "source": "src/Control-Final.html#joinFinal",
          "type": "function"
        },
        "index": {
          "description": "Useful when the final return value is monadic computation itself that after returned has to be joined into the current computation",
          "hierarchy": "Control Final",
          "module": "Control.Final",
          "name": "joinFinal",
          "normalized": "a(Final(a b))-\u003ea b",
          "package": "final",
          "partial": "Final",
          "signature": "m(Final(m a))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final.html#v:joinFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost commonly used at the beginning of functions to mark the\n point in the code where \u003ccode\u003e\u003ca\u003efinal\u003c/a\u003e\u003c/code\u003e calls \"return to\".\n\u003c/p\u003e\u003cp\u003eThis compiles:\n\u003c/p\u003e\u003cpre\u003e simple = runFinal $ do\n   print \"line1\"\n   do return False\n      return True\n   final True\n\u003c/pre\u003e\u003cp\u003eThis fails at the first \"\u003ccode\u003efinal\u003c/code\u003e \u003ccode\u003eTrue\u003c/code\u003e\":\n\u003c/p\u003e\u003cpre\u003e simple = runFinal $ do\n   print \"line1\"\n   do return False\n      final True\n   final True\n\u003c/pre\u003e",
          "module": "Control.Final",
          "name": "runFinal",
          "package": "final",
          "signature": "m (Final a) -\u003e m a",
          "source": "src/Control-Final.html#runFinal",
          "type": "function"
        },
        "index": {
          "description": "Most commonly used at the beginning of functions to mark the point in the code where final calls return to This compiles simple runFinal do print line1 do return False return True final True This fails at the first final True simple runFinal do print line1 do return False final True final True",
          "hierarchy": "Control Final",
          "module": "Control.Final",
          "name": "runFinal",
          "normalized": "a(Final b)-\u003ea b",
          "package": "final",
          "partial": "Final",
          "signature": "m(Final a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final.html#v:runFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsage example:\n\u003c/p\u003e\u003cpre\u003e pureExample p =\n   runFinalV $ case p of\n     True -\u003e finalV \"quux\"\n     False -\u003e finalV \"foobar\"\n\u003c/pre\u003e",
          "module": "Control.Final",
          "name": "runFinalV",
          "package": "final",
          "signature": "Final a -\u003e a",
          "source": "src/Control-Final.html#runFinalV",
          "type": "function"
        },
        "index": {
          "description": "Usage example pureExample runFinalV case of True finalV quux False finalV foobar",
          "hierarchy": "Control Final",
          "module": "Control.Final",
          "name": "runFinalV",
          "normalized": "Final a-\u003ea",
          "package": "final",
          "partial": "Final",
          "signature": "Final a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/final/docs/Control-Final.html#v:runFinalV"
      }
    }
  ]
]