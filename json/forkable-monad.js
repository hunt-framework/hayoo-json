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
        "word": "forkable-monad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a generic version of \u003ccode\u003eControl.Concurrent\u003c/code\u003e's\n \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e, which can directly run some complex monadic actions as\n well as plain \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eControl.Concurrent\u003c/code\u003e's \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e accepts an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation only,\n and requires the caller to reconstruct the full monadic stack by\n hand in the new thread. In contrast, this module's \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e runs a\n computation in the same monad as the parent thread, transparently\n transplanting the monad stack to the new thread.\n\u003c/p\u003e\u003cp\u003eFor example, the following code which uses \u003ccode\u003eControl.Concurrent\u003c/code\u003e's\n \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e type MyMonad = ReaderT Int (StateT String IO)\n\n forkAndDo :: MyMonad ThreadId\n forkAndDo = do\n     r \u003c- ask\n     s \u003c- lift get\n     liftIO $ forkIO $ (runStateT (runReaderT forkedDo r) s \u003e\u003e return ())\n\n forkedDo :: MyMonad ()\n forkedDo = liftIO $ putStrLn \"forkedDo running\"\n\u003c/pre\u003e\u003cp\u003ecan be reexpressed with this module's \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e as:\n\u003c/p\u003e\u003cpre\u003e type MyMonad = ReaderT Int (StateT String IO)\n\n forkAndDo :: MyMonad ThreadId\n forkAndDo = forkIO forkedDo\n\n forkedDo :: MyMonad ()\n forkedDo = liftIO $ putStrLn \"forkedDo running\"\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e can operate on any monad that is an instance of\n \u003ccode\u003e\u003ca\u003eForkableMonad\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eForkableMonad\u003c/a\u003e\u003c/code\u003e instances are defined for\n \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e, as well as \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. Here is the precise\n meaning of \"transplant\" for each of these:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e requires no special work, since \u003ccode\u003eControl.Concurrent\u003c/code\u003e's\n     \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e already provides the \"transplanting\" of an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n     action to a new thread.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e makes the parent thread's environment available for\n     consultation in the new thread.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e makes a \u003cem\u003ecopy\u003c/em\u003e of the parent thread's state available\n     in the new thread. The states in the two threads are not\n     linked, so it is expected that they will diverge as each thread\n     updates its own copy of the state.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOther standard transformers (notably \u003ccode\u003eWriterT\u003c/code\u003e, \u003ccode\u003eErrorT\u003c/code\u003e and\n \u003ccode\u003eRWST\u003c/code\u003e) do not have an instance defined, because those instances\n can only be defined through data loss.\n\u003c/p\u003e\u003cp\u003eFor example, the current output of a \u003ccode\u003eWriter\u003c/code\u003e cannot be accessed\n from within the monad, so the best that can be done is to create a\n new pristine \u003ccode\u003eWriter\u003c/code\u003e state for the new thread, and to discard all\n data written in that thread when the thread terminates.\n\u003c/p\u003e\u003cp\u003eIf you want to use \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e on a monad stack that includes one of\n these lossy monads, you will need to define the \u003ccode\u003e\u003ca\u003eForkableMonad\u003c/a\u003e\u003c/code\u003e\n instances yourself. The same goes for any custom monads you may\n have in the stack.\n\u003c/p\u003e\u003cp\u003eThis module reexports \u003ccode\u003eControl.Concurrent\u003c/code\u003e overlayed with the\n generic \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e, so you can simply change your import from\n \u003ccode\u003eControl.Concurrent\u003c/code\u003e to \u003ccode\u003eControl.Concurrent.Forkable\u003c/code\u003e to use this\n module's \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e in your existing concurrent code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Forkable",
          "name": "Forkable",
          "package": "forkable-monad",
          "source": "src/Control-Concurrent-Forkable.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines generic version of Control.Concurrent forkIO which can directly run some complex monadic actions as well as plain IO actions Control.Concurrent forkIO accepts an IO computation only and requires the caller to reconstruct the full monadic stack by hand in the new thread In contrast this module forkIO runs computation in the same monad as the parent thread transparently transplanting the monad stack to the new thread For example the following code which uses Control.Concurrent forkIO type MyMonad ReaderT Int StateT String IO forkAndDo MyMonad ThreadId forkAndDo do ask lift get liftIO forkIO runStateT runReaderT forkedDo return forkedDo MyMonad forkedDo liftIO putStrLn forkedDo running can be reexpressed with this module forkIO as type MyMonad ReaderT Int StateT String IO forkAndDo MyMonad ThreadId forkAndDo forkIO forkedDo forkedDo MyMonad forkedDo liftIO putStrLn forkedDo running forkIO can operate on any monad that is an instance of ForkableMonad ForkableMonad instances are defined for ReaderT and StateT as well as IO Here is the precise meaning of transplant for each of these IO requires no special work since Control.Concurrent forkIO already provides the transplanting of an IO action to new thread ReaderT makes the parent thread environment available for consultation in the new thread StateT makes copy of the parent thread state available in the new thread The states in the two threads are not linked so it is expected that they will diverge as each thread updates its own copy of the state Other standard transformers notably WriterT ErrorT and RWST do not have an instance defined because those instances can only be defined through data loss For example the current output of Writer cannot be accessed from within the monad so the best that can be done is to create new pristine Writer state for the new thread and to discard all data written in that thread when the thread terminates If you want to use forkIO on monad stack that includes one of these lossy monads you will need to define the ForkableMonad instances yourself The same goes for any custom monads you may have in the stack This module reexports Control.Concurrent overlayed with the generic forkIO so you can simply change your import from Control.Concurrent to Control.Concurrent.Forkable to use this module forkIO in your existing concurrent code",
          "hierarchy": "Control Concurrent Forkable",
          "module": "Control.Concurrent.Forkable",
          "name": "Forkable",
          "package": "forkable-monad",
          "partial": "Forkable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/forkable-monad/docs/Control-Concurrent-Forkable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Forkable",
          "name": "ForkableMonad",
          "package": "forkable-monad",
          "source": "src/Control-Concurrent-Forkable.html#ForkableMonad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent Forkable",
          "module": "Control.Concurrent.Forkable",
          "name": "ForkableMonad",
          "package": "forkable-monad",
          "partial": "Forkable Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/forkable-monad/docs/Control-Concurrent-Forkable.html#t:ForkableMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpark off a new thread to run the monadic computation passed\n as the first argument, and return the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e of the newly\n created thread.\n\u003c/p\u003e\u003cp\u003eThe new thread will run the computation using the same monadic\n context as the parent thread.\n\u003c/p\u003e\u003cp\u003eAs a convenience, this forkIO accepts a computation returning\n any value, not just unit. This value is discarded when the\n computation terminates.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Forkable",
          "name": "forkIO",
          "package": "forkable-monad",
          "signature": "m a -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Forkable.html#forkIO",
          "type": "method"
        },
        "index": {
          "description": "Spark off new thread to run the monadic computation passed as the first argument and return the ThreadId of the newly created thread The new thread will run the computation using the same monadic context as the parent thread As convenience this forkIO accepts computation returning any value not just unit This value is discarded when the computation terminates",
          "hierarchy": "Control Concurrent Forkable",
          "module": "Control.Concurrent.Forkable",
          "name": "forkIO",
          "normalized": "a b-\u003ea ThreadId",
          "package": "forkable-monad",
          "partial": "IO",
          "signature": "m a-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/forkable-monad/docs/Control-Concurrent-Forkable.html#v:forkIO"
      }
    }
  ]
]