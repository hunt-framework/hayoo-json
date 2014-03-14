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
        "word": "conduit-extra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdapter module to work with the foldl package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Extra.Foldl",
          "name": "Foldl",
          "package": "conduit-extra",
          "source": "src/Data-Conduit-Extra-Foldl.html",
          "type": "module"
        },
        "index": {
          "description": "Adapter module to work with the foldl package",
          "hierarchy": "Data Conduit Extra Foldl",
          "module": "Data.Conduit.Extra.Foldl",
          "name": "Foldl",
          "package": "conduit-extra",
          "partial": "Foldl",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Foldl.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.6\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Foldl",
          "name": "sinkFold",
          "package": "conduit-extra",
          "signature": "Fold a b -\u003e Consumer a m b",
          "source": "src/Data-Conduit-Extra-Foldl.html#sinkFold",
          "type": "function"
        },
        "index": {
          "description": "Convert Fold into Consumer Since",
          "hierarchy": "Data Conduit Extra Foldl",
          "module": "Data.Conduit.Extra.Foldl",
          "name": "sinkFold",
          "normalized": "Fold a b-\u003eConsumer a c b",
          "package": "conduit-extra",
          "partial": "Fold",
          "signature": "Fold a b-\u003eConsumer a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Foldl.html#v:sinkFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eFoldM\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.6\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Foldl",
          "name": "sinkFoldM",
          "package": "conduit-extra",
          "signature": "FoldM m a b -\u003e Consumer a m b",
          "source": "src/Data-Conduit-Extra-Foldl.html#sinkFoldM",
          "type": "function"
        },
        "index": {
          "description": "Convert FoldM into Consumer Since",
          "hierarchy": "Data Conduit Extra Foldl",
          "module": "Data.Conduit.Extra.Foldl",
          "name": "sinkFoldM",
          "normalized": "FoldM a b c-\u003eConsumer b a c",
          "package": "conduit-extra",
          "partial": "Fold",
          "signature": "FoldM m a b-\u003eConsumer a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Foldl.html#v:sinkFoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a convenience layer on top of conduit with functions and\n   operators similar to the pipes library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "Pipes",
          "package": "conduit-extra",
          "source": "src/Data-Conduit-Extra-Pipes.html",
          "type": "module"
        },
        "index": {
          "description": "Provides convenience layer on top of conduit with functions and operators similar to the pipes library",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "Pipes",
          "package": "conduit-extra",
          "partial": "Pipes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.Pipes",
          "name": "(\u003c-\u003c)",
          "package": "conduit-extra",
          "signature": "ConduitM a o m b -\u003e ConduitM i a m () -\u003e ConduitM i o m b",
          "source": "src/Data-Conduit-Extra-Pipes.html#%3C-%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "(\u003c-\u003c) \u003c-\u003c",
          "normalized": "ConduitM a b c d-\u003eConduitM e a c()-\u003eConduitM e b c d",
          "package": "conduit-extra",
          "signature": "ConduitM a o m b-\u003eConduitM i a m()-\u003eConduitM i o m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:-60--45--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conduit composition operator, ala pipes.  When combined with\n   \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003erunEffect\u003c/a\u003e\u003c/code\u003e, if you prefer), this is the only operator\n   needed.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "(\u003e-\u003e)",
          "package": "conduit-extra",
          "signature": "ConduitM i a m () -\u003e ConduitM a o m b -\u003e ConduitM i o m b",
          "source": "src/Data-Conduit-Extra-Pipes.html#%3E-%3E",
          "type": "function"
        },
        "index": {
          "description": "The conduit composition operator ala pipes When combined with runPipe or runEffect if you prefer this is the only operator needed",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "(\u003e-\u003e) \u003e-\u003e",
          "normalized": "ConduitM a b c()-\u003eConduitM b d c e-\u003eConduitM a d c e",
          "package": "conduit-extra",
          "signature": "ConduitM i a m()-\u003eConduitM a o m b-\u003eConduitM i o m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:-62--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e for each element of the \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e data structure, resulting\n   in a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e over these elements.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunPipe $ forP (each [1..3]) $ liftIO . print\n\u003c/code\u003e\u003c/strong\u003e1\n2\n3\n\u003c/pre\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "each",
          "package": "conduit-extra",
          "signature": "f a -\u003e Producer m a",
          "source": "src/Data-Conduit-Extra-Pipes.html#each",
          "type": "function"
        },
        "index": {
          "description": "Call yield for each element of the Foldable data structure resulting in Producer over these elements runPipe forP each liftIO print",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "each",
          "normalized": "a b-\u003eProducer c b",
          "package": "conduit-extra",
          "signature": "f a-\u003eProducer m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:each"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIterate over all the elements from source, similar to \u003ccode\u003eforM\u003c/code\u003e for a monad.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "forP",
          "package": "conduit-extra",
          "signature": "Source m a -\u003e (a -\u003e m ()) -\u003e m ()",
          "source": "src/Data-Conduit-Extra-Pipes.html#forP",
          "type": "function"
        },
        "index": {
          "description": "Iterate over all the elements from source similar to forM for monad",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "forP",
          "normalized": "Source a b-\u003e(b-\u003ea())-\u003ea()",
          "package": "conduit-extra",
          "signature": "Source m a-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:forP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeel off N items from a conduit and return them.  Synonym for Conduit's\n   \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "peel",
          "package": "conduit-extra",
          "signature": "Int -\u003e m [()]",
          "source": "src/Data-Conduit-Extra-Pipes.html#peel",
          "type": "function"
        },
        "index": {
          "description": "Peel off items from conduit and return them Synonym for Conduit take",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "peel",
          "normalized": "Int-\u003ea[()]",
          "package": "conduit-extra",
          "signature": "Int-\u003em[()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:peel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplicate a monadic action a given number of times via a producer.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "replicateM",
          "package": "conduit-extra",
          "signature": "Int -\u003e m a -\u003e Producer m a",
          "source": "src/Data-Conduit-Extra-Pipes.html#replicateM",
          "type": "function"
        },
        "index": {
          "description": "Replicate monadic action given number of times via producer",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "replicateM",
          "normalized": "Int-\u003ea b-\u003eProducer a b",
          "package": "conduit-extra",
          "signature": "Int-\u003em a-\u003eProducer m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.Pipes",
          "name": "runEffect",
          "package": "conduit-extra",
          "signature": "ConduitM () Void m b -\u003e m b",
          "source": "src/Data-Conduit-Extra-Pipes.html#runEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "runEffect",
          "normalized": "ConduitM()Void a b-\u003ea b",
          "package": "conduit-extra",
          "partial": "Effect",
          "signature": "ConduitM()Void m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:runEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a conduit.  This name may be preferable to the overly generic\n   \u003ccode\u003e\u003ca\u003erunEffect\u003c/a\u003e\u003c/code\u003e, which pipes uses.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "runPipe",
          "package": "conduit-extra",
          "signature": "ConduitM () Void m b -\u003e m b",
          "source": "src/Data-Conduit-Extra-Pipes.html#runPipe",
          "type": "function"
        },
        "index": {
          "description": "Run conduit This name may be preferable to the overly generic runEffect which pipes uses",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "runPipe",
          "normalized": "ConduitM()Void a b-\u003ea b",
          "package": "conduit-extra",
          "partial": "Pipe",
          "signature": "ConduitM()Void m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:runPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e, except implies a call to \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e, for running\n   resource-sensitive pipelines.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "runPipeR",
          "package": "conduit-extra",
          "signature": "ConduitM () Void (ResourceT m) b -\u003e m b",
          "source": "src/Data-Conduit-Extra-Pipes.html#runPipeR",
          "type": "function"
        },
        "index": {
          "description": "Like runPipe except implies call to runResourceT for running resource-sensitive pipelines",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "runPipeR",
          "normalized": "ConduitM()Void(ResourceT a)b-\u003ea b",
          "package": "conduit-extra",
          "partial": "Pipe",
          "signature": "ConduitM()Void(ResourceT m)b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:runPipeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake N items from a conduit.  Synonym for Conduit's \u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "take",
          "package": "conduit-extra",
          "signature": "Int -\u003e Conduit a m a",
          "source": "src/Data-Conduit-Extra-Pipes.html#take",
          "type": "function"
        },
        "index": {
          "description": "Take items from conduit Synonym for Conduit isolate",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "take",
          "normalized": "Int-\u003eConduit a b a",
          "package": "conduit-extra",
          "signature": "Int-\u003eConduit a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjects a sink within a pipeline which receives a copy of every input\n   argument, similar to the Unix command of the same name.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunPipe $ each [1..3] \u003e-\u003e tee (P.mapM_ f) \u003e-\u003e P.mapM_ f\n\u003c/code\u003e\u003c/strong\u003e1\n1\n2\n2\n3\n3\n\u003c/pre\u003e",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "tee",
          "package": "conduit-extra",
          "signature": "Sink a (ConduitM a a m) b -\u003e ConduitM a a m b",
          "source": "src/Data-Conduit-Extra-Pipes.html#tee",
          "type": "function"
        },
        "index": {
          "description": "Injects sink within pipeline which receives copy of every input argument similar to the Unix command of the same name runPipe each tee P.mapM P.mapM",
          "hierarchy": "Data Conduit Extra Pipes",
          "module": "Data.Conduit.Extra.Pipes",
          "name": "tee",
          "normalized": "Sink a(ConduitM a a b)c-\u003eConduitM a a b c",
          "package": "conduit-extra",
          "signature": "Sink a(ConduitM a a m)b-\u003eConduitM a a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:tee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.Resumable",
          "name": "Resumable",
          "package": "conduit-extra",
          "source": "src/Data-Conduit-Extra-Resumable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Extra Resumable",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "Resumable",
          "package": "conduit-extra",
          "partial": "Resumable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003eResumableSource\u003c/a\u003e\u003c/code\u003e. Allows to resume an arbitrary\n conduit, keeping its state and using it later (or finalizing it).\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "ResumableConduit",
          "package": "conduit-extra",
          "source": "src/Data-Conduit-Extra-Resumable.html#ResumableConduit",
          "type": "data"
        },
        "index": {
          "description": "generalization of ResumableSource Allows to resume an arbitrary conduit keeping its state and using it later or finalizing it",
          "hierarchy": "Data Conduit Extra Resumable",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "ResumableConduit",
          "package": "conduit-extra",
          "partial": "Resumable Conduit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#t:ResumableConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe connect-and-resume operator. This does not close the \u003ccode\u003eConduit\u003c/code\u003e, but\n instead returns it to be used again. This allows a \u003ccode\u003eConduit\u003c/code\u003e to be used\n incrementally in a large program, without forcing the entire program to live\n in the \u003ccode\u003eSink\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eLeftover data returned from the \u003ccode\u003eSink\u003c/code\u003e will be discarded.\n\u003c/p\u003e\u003cp\u003eMnemonic: connect + do more.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "(=$$+)",
          "package": "conduit-extra",
          "signature": "Conduit a m b -\u003e Sink b m r -\u003e Sink a m (ResumableConduit a m b, r)",
          "source": "src/Data-Conduit-Extra-Resumable.html#%3D%24%24%2B",
          "type": "function"
        },
        "index": {
          "description": "The connect-and-resume operator This does not close the Conduit but instead returns it to be used again This allows Conduit to be used incrementally in large program without forcing the entire program to live in the Sink monad Leftover data returned from the Sink will be discarded Mnemonic connect do more",
          "hierarchy": "Data Conduit Extra Resumable",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "(=$$+) =$$+",
          "normalized": "Conduit a b c-\u003eSink c b d-\u003eSink a b(ResumableConduit a b c,d)",
          "package": "conduit-extra",
          "signature": "Conduit a m b-\u003eSink b m r-\u003eSink a m(ResumableConduit a m b,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:-61--36--36--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinue processing after usage of \u003ccode\u003e\u003ca\u003e=$$+\u003c/a\u003e\u003c/code\u003e. An alias for \u003ccode\u003e\u003ca\u003econnectResume\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "(=$$++)",
          "package": "conduit-extra",
          "signature": "ResumableConduit i m o -\u003e Sink o m r -\u003e Sink i m (ResumableConduit i m o, r)",
          "source": "src/Data-Conduit-Extra-Resumable.html#%3D%24%24%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Continue processing after usage of An alias for connectResume",
          "hierarchy": "Data Conduit Extra Resumable",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "(=$$++) =$$++",
          "normalized": "ResumableConduit a b c-\u003eSink c b d-\u003eSink a b(ResumableConduit a b c,d)",
          "package": "conduit-extra",
          "signature": "ResumableConduit i m o-\u003eSink o m r-\u003eSink i m(ResumableConduit i m o,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:-61--36--36--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplete processing of a \u003ccode\u003e\u003ca\u003eResumableConduit\u003c/a\u003e\u003c/code\u003e. This will run the finalizer\n associated with the \u003ccode\u003eResumableConduit\u003c/code\u003e. In order to guarantee process\n resource finalization, you \u003cem\u003emust\u003c/em\u003e use this operator after using \u003ccode\u003e\u003ca\u003e=$$+\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003e=$$++\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "(=$$+-)",
          "package": "conduit-extra",
          "signature": "ResumableConduit i m o -\u003e Sink o m r -\u003e Sink i m r",
          "source": "src/Data-Conduit-Extra-Resumable.html#%3D%24%24%2B-",
          "type": "function"
        },
        "index": {
          "description": "Complete processing of ResumableConduit This will run the finalizer associated with the ResumableConduit In order to guarantee process resource finalization you must use this operator after using and",
          "hierarchy": "Data Conduit Extra Resumable",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "(=$$+-) =$$+-",
          "normalized": "ResumableConduit a b c-\u003eSink c b d-\u003eSink a b d",
          "package": "conduit-extra",
          "signature": "ResumableConduit i m o-\u003eSink o m r-\u003eSink i m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:-61--36--36--43--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.Resumable",
          "name": "ResumableConduit",
          "package": "conduit-extra",
          "signature": "ResumableConduit (Conduit i m o) (m ())",
          "source": "src/Data-Conduit-Extra-Resumable.html#ResumableConduit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra Resumable",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "ResumableConduit",
          "normalized": "ResumableConduit(Conduit a b c)(b())",
          "package": "conduit-extra",
          "partial": "Resumable Conduit",
          "signature": "ResumableConduit(Conduit i m o)(m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:ResumableConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect a \u003ccode\u003e\u003ca\u003eResumableConduit\u003c/a\u003e\u003c/code\u003e to a sink and return the output of the sink\n together with a new \u003ccode\u003e\u003ca\u003eResumableConduit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "connectResume",
          "package": "conduit-extra",
          "signature": "ResumableConduit i m o -\u003e Sink o m r -\u003e Sink i m (ResumableConduit i m o, r)",
          "source": "src/Data-Conduit-Extra-Resumable.html#connectResume",
          "type": "function"
        },
        "index": {
          "description": "Connect ResumableConduit to sink and return the output of the sink together with new ResumableConduit",
          "hierarchy": "Data Conduit Extra Resumable",
          "module": "Data.Conduit.Extra.Resumable",
          "name": "connectResume",
          "normalized": "ResumableConduit a b c-\u003eSink c b d-\u003eSink a b(ResumableConduit a b c,d)",
          "package": "conduit-extra",
          "partial": "Resume",
          "signature": "ResumableConduit i m o-\u003eSink o m r-\u003eSink i m(ResumableConduit i m o,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:connectResume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions currently under development which have not been moved to their\n     final destination.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Extra.Utils",
          "name": "Utils",
          "package": "conduit-extra",
          "source": "src/Data-Conduit-Extra-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Functions currently under development which have not been moved to their final destination",
          "hierarchy": "Data Conduit Extra Utils",
          "module": "Data.Conduit.Extra.Utils",
          "name": "Utils",
          "package": "conduit-extra",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.Utils",
          "name": "collect",
          "package": "conduit-extra",
          "signature": "Int -\u003e Sink a m (Vector a)",
          "source": "src/Data-Conduit-Extra-Utils.html#collect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra Utils",
          "module": "Data.Conduit.Extra.Utils",
          "name": "collect",
          "normalized": "Int-\u003eSink a b(Vector a)",
          "package": "conduit-extra",
          "signature": "Int-\u003eSink a m(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Utils.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.Utils",
          "name": "collectUnboxed",
          "package": "conduit-extra",
          "signature": "Int -\u003e Sink a m (Vector a)",
          "source": "src/Data-Conduit-Extra-Utils.html#collectUnboxed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra Utils",
          "module": "Data.Conduit.Extra.Utils",
          "name": "collectUnboxed",
          "normalized": "Int-\u003eSink a b(Vector a)",
          "package": "conduit-extra",
          "partial": "Unboxed",
          "signature": "Int-\u003eSink a m(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Utils.html#v:collectUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the last N elements from the stream.  This requires holding up to\n   N elements in memory.\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.Utils",
          "name": "dropRight",
          "package": "conduit-extra",
          "signature": "Int -\u003e Conduit a m a",
          "source": "src/Data-Conduit-Extra-Utils.html#dropRight",
          "type": "function"
        },
        "index": {
          "description": "Remove the last elements from the stream This requires holding up to elements in memory",
          "hierarchy": "Data Conduit Extra Utils",
          "module": "Data.Conduit.Extra.Utils",
          "name": "dropRight",
          "normalized": "Int-\u003eConduit a b a",
          "package": "conduit-extra",
          "partial": "Right",
          "signature": "Int-\u003eConduit a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Utils.html#v:dropRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.Utils",
          "name": "takeWhile",
          "package": "conduit-extra",
          "signature": "(a -\u003e Bool) -\u003e Conduit a m a",
          "source": "src/Data-Conduit-Extra-Utils.html#takeWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra Utils",
          "module": "Data.Conduit.Extra.Utils",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eConduit a b a",
          "package": "conduit-extra",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eConduit a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Utils.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "ZipConduit",
          "package": "conduit-extra",
          "source": "src/Data-Conduit-Extra-ZipConduit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Extra ZipConduit",
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "ZipConduit",
          "package": "conduit-extra",
          "partial": "Zip Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipConduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides an alternative \u003ccode\u003eApplicative\u003c/code\u003e instance for \u003ccode\u003eConduitM\u003c/code\u003e. In this instance,\n every incoming value is provided to all \u003ccode\u003eConduitM\u003c/code\u003es, and output is coalesced together.\n Leftovers from individual \u003ccode\u003eConduitM\u003c/code\u003es will be used within that component, and then discarded\n at the end of their computation. Output and finalizers will both be handled in a left-biased manner.\n\u003c/p\u003e\u003cp\u003eAs an example, take the following program:\n\u003c/p\u003e\u003cpre\u003e\n main :: IO ()\n main = do\n     let src = mapM_ yield [1..3 :: Int]\n         conduit1 = CL.map (+1)\n         conduit2 = CL.concatMap (replicate 2)\n         conduit = getZipConduit $ ZipConduit conduit1 \u003c* ZipConduit conduit2\n         sink = CL.mapM_ print\n     src $$ conduit =$ sink\n\u003c/pre\u003e\u003cp\u003eIt will produce the output: 2, 1, 1, 3, 2, 2, 4, 3, 3\n\u003c/p\u003e\u003cp\u003eSince 0.1.5\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "ZipConduit",
          "package": "conduit-extra",
          "source": "src/Data-Conduit-Extra-ZipConduit.html#ZipConduit",
          "type": "newtype"
        },
        "index": {
          "description": "Provides an alternative Applicative instance for ConduitM In this instance every incoming value is provided to all ConduitM and output is coalesced together Leftovers from individual ConduitM will be used within that component and then discarded at the end of their computation Output and finalizers will both be handled in left-biased manner As an example take the following program main IO main do let src mapM yield Int conduit1 CL.map conduit2 CL.concatMap replicate conduit getZipConduit ZipConduit conduit1 ZipConduit conduit2 sink CL.mapM print src conduit sink It will produce the output Since",
          "hierarchy": "Data Conduit Extra ZipConduit",
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "ZipConduit",
          "package": "conduit-extra",
          "partial": "Zip Conduit",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipConduit.html#t:ZipConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "ZipConduit",
          "package": "conduit-extra",
          "signature": "ZipConduit",
          "source": "src/Data-Conduit-Extra-ZipConduit.html#ZipConduit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra ZipConduit",
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "ZipConduit",
          "package": "conduit-extra",
          "partial": "Zip Conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipConduit.html#v:ZipConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "getZipConduit",
          "package": "conduit-extra",
          "signature": "ConduitM i o m r",
          "source": "src/Data-Conduit-Extra-ZipConduit.html#ZipConduit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra ZipConduit",
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "getZipConduit",
          "package": "conduit-extra",
          "partial": "Zip Conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipConduit.html#v:getZipConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide identical input to all of the \u003ccode\u003eConduit\u003c/code\u003es and combine their outputs\n into a single stream.\n\u003c/p\u003e\u003cp\u003eImplemented on top of \u003ccode\u003eZipConduit\u003c/code\u003e, see that data type for more details.\n\u003c/p\u003e\u003cp\u003eSince 0.1.5\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "sequenceConduits",
          "package": "conduit-extra",
          "signature": "f (ConduitM i o m r) -\u003e ConduitM i o m (f r)",
          "source": "src/Data-Conduit-Extra-ZipConduit.html#sequenceConduits",
          "type": "function"
        },
        "index": {
          "description": "Provide identical input to all of the Conduit and combine their outputs into single stream Implemented on top of ZipConduit see that data type for more details Since",
          "hierarchy": "Data Conduit Extra ZipConduit",
          "module": "Data.Conduit.Extra.ZipConduit",
          "name": "sequenceConduits",
          "normalized": "a(ConduitM b c d e)-\u003eConduitM b c d(a e)",
          "package": "conduit-extra",
          "partial": "Conduits",
          "signature": "f(ConduitM i o m r)-\u003eConduitM i o m(f r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipConduit.html#v:sequenceConduits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "ZipSink",
          "package": "conduit-extra",
          "source": "src/Data-Conduit-Extra-ZipSink.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Extra ZipSink",
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "ZipSink",
          "package": "conduit-extra",
          "partial": "Zip Sink",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for defining an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003es which allows\n to combine sinks together, generalizing \u003ccode\u003e\u003ca\u003ezipSinks\u003c/a\u003e\u003c/code\u003e. A combined sink\n distributes the input to all its participants and when all finish, produces\n the result. This allows to define functions like\n\u003c/p\u003e\u003cpre\u003e\n sequenceSinks :: (Monad m)\n           =\u003e [Sink i m r] -\u003e Sink i m [r]\n sequenceSinks = getZipSink . sequenceA . fmap ZipSink\n\u003c/pre\u003e\u003cp\u003eNote that the standard \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance for conduits works\n differently. It feeds one sink with input until it finishes, then switches\n to another, etc., and at the end combines their results.\n\u003c/p\u003e\u003cp\u003eSince 1.0.13\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "ZipSink",
          "package": "conduit-extra",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for defining an Applicative instance for Sink which allows to combine sinks together generalizing zipSinks combined sink distributes the input to all its participants and when all finish produces the result This allows to define functions like sequenceSinks Monad Sink Sink sequenceSinks getZipSink sequenceA fmap ZipSink Note that the standard Applicative instance for conduits works differently It feeds one sink with input until it finishes then switches to another etc and at the end combines their results Since",
          "hierarchy": "Data Conduit Extra ZipSink",
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "ZipSink",
          "package": "conduit-extra",
          "partial": "Zip Sink",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#t:ZipSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "ZipSink",
          "package": "conduit-extra",
          "signature": "ZipSink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra ZipSink",
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "ZipSink",
          "package": "conduit-extra",
          "partial": "Zip Sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#v:ZipSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "broadcast",
          "package": "conduit-extra",
          "signature": "f (Sink i m r) -\u003e Sink i m (f r)",
          "source": "src/Data-Conduit-Extra-ZipSink.html#broadcast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra ZipSink",
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "broadcast",
          "normalized": "a(Sink b c d)-\u003eSink b c(a d)",
          "package": "conduit-extra",
          "signature": "f(Sink i m r)-\u003eSink i m(f r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#v:broadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "getZipSink",
          "package": "conduit-extra",
          "signature": "Sink i m r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Extra ZipSink",
          "module": "Data.Conduit.Extra.ZipSink",
          "name": "getZipSink",
          "package": "conduit-extra",
          "partial": "Zip Sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#v:getZipSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Extra",
          "name": "Extra",
          "package": "conduit-extra",
          "source": "src/Data-Conduit-Extra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Extra",
          "module": "Data.Conduit.Extra",
          "name": "Extra",
          "package": "conduit-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003efuseReturnLeftovers\u003c/code\u003e, but use the provided function to convert\n downstream leftovers to upstream leftovers.\n\u003c/p\u003e\u003cp\u003eSince 1.0.4\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra",
          "name": "fuseLeftovers",
          "package": "conduit-extra",
          "signature": "([b] -\u003e [a]) -\u003e ConduitM a b m () -\u003e ConduitM b c m r -\u003e ConduitM a c m r",
          "source": "src/Data-Conduit-Extra.html#fuseLeftovers",
          "type": "function"
        },
        "index": {
          "description": "Similar to fuseReturnLeftovers but use the provided function to convert downstream leftovers to upstream leftovers Since",
          "hierarchy": "Data Conduit Extra",
          "module": "Data.Conduit.Extra",
          "name": "fuseLeftovers",
          "normalized": "([a]-\u003e[b])-\u003eConduitM b a c()-\u003eConduitM a d c e-\u003eConduitM b d c e",
          "package": "conduit-extra",
          "partial": "Leftovers",
          "signature": "([b]-\u003e[a])-\u003eConduitM a b m()-\u003eConduitM b c m r-\u003eConduitM a c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra.html#v:fuseLeftovers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as normal fusion (e.g. \u003ccode\u003e=$=\u003c/code\u003e), except instead of discarding leftovers\n from the downstream component, return them.\n\u003c/p\u003e\u003cp\u003eSince 1.0.4\n\u003c/p\u003e",
          "module": "Data.Conduit.Extra",
          "name": "fuseReturnLeftovers",
          "package": "conduit-extra",
          "signature": "ConduitM a b m () -\u003e ConduitM b c m r -\u003e ConduitM a c m (r, [b])",
          "source": "src/Data-Conduit-Extra.html#fuseReturnLeftovers",
          "type": "function"
        },
        "index": {
          "description": "Same as normal fusion e.g except instead of discarding leftovers from the downstream component return them Since",
          "hierarchy": "Data Conduit Extra",
          "module": "Data.Conduit.Extra",
          "name": "fuseReturnLeftovers",
          "normalized": "ConduitM a b c()-\u003eConduitM b d c e-\u003eConduitM a d c(e,[b])",
          "package": "conduit-extra",
          "partial": "Return Leftovers",
          "signature": "ConduitM a b m()-\u003eConduitM b c m r-\u003eConduitM a c m(r,[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra.html#v:fuseReturnLeftovers"
      }
    }
  ]
]