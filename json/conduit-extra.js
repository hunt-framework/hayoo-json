[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a convenience layer on top of conduit with functions and\n   operators similar to the pipes library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html",
        "fct-type": "module",
        "title": "Pipes"
      },
      "index": {
        "description": "Provides convenience layer on top of conduit with functions and operators similar to the pipes library",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "Pipes",
        "normalized": "",
        "package": "conduit-extra",
        "partial": "Pipes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:-60--45--60-",
      "description": {
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "ConduitM a o m b -\u003e ConduitM i a m () -\u003e ConduitM i o m b",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#%3C-%3C",
        "fct-type": "function",
        "title": "(\u003c-\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "(\u003c-\u003c) \u003c-\u003c",
        "normalized": "ConduitM a b c d-\u003eConduitM e a c()-\u003eConduitM e b c d",
        "package": "conduit-extra",
        "partial": "",
        "signature": "ConduitM a o m b-\u003eConduitM i a m()-\u003eConduitM i o m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:-62--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe conduit composition operator, ala pipes.  When combined with\n   \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003erunEffect\u003c/a\u003e\u003c/code\u003e, if you prefer), this is the only operator\n   needed.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "ConduitM i a m () -\u003e ConduitM a o m b -\u003e ConduitM i o m b",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#%3E-%3E",
        "fct-type": "function",
        "title": "(\u003e-\u003e)"
      },
      "index": {
        "description": "The conduit composition operator ala pipes When combined with runPipe or runEffect if you prefer this is the only operator needed",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "(\u003e-\u003e) \u003e-\u003e",
        "normalized": "ConduitM a b c()-\u003eConduitM b d c e-\u003eConduitM a d c e",
        "package": "conduit-extra",
        "partial": "",
        "signature": "ConduitM i a m()-\u003eConduitM a o m b-\u003eConduitM i o m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:each",
      "description": {
        "fct-descr": "\u003cp\u003eCall \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e for each element of the \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e data structure, resulting\n   in a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e over these elements.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunPipe $ forP (each [1..3]) $ liftIO . print\n\u003c/code\u003e\u003c/strong\u003e1\n2\n3\n\u003c/pre\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "f a -\u003e Producer m a",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#each",
        "fct-type": "function",
        "title": "each"
      },
      "index": {
        "description": "Call yield for each element of the Foldable data structure resulting in Producer over these elements runPipe forP each liftIO print",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "each",
        "normalized": "a b-\u003eProducer c b",
        "package": "conduit-extra",
        "partial": "",
        "signature": "f a-\u003eProducer m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:forP",
      "description": {
        "fct-descr": "\u003cp\u003eIterate over all the elements from source, similar to \u003ccode\u003eforM\u003c/code\u003e for a monad.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "Source m a -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#forP",
        "fct-type": "function",
        "title": "forP"
      },
      "index": {
        "description": "Iterate over all the elements from source similar to forM for monad",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "forP",
        "normalized": "Source a b-\u003e(b-\u003ea())-\u003ea()",
        "package": "conduit-extra",
        "partial": "",
        "signature": "Source m a-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:peel",
      "description": {
        "fct-descr": "\u003cp\u003ePeel off N items from a conduit and return them.  Synonym for Conduit's\n   \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "Int -\u003e m [()]",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#peel",
        "fct-type": "function",
        "title": "peel"
      },
      "index": {
        "description": "Peel off items from conduit and return them Synonym for Conduit take",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "peel",
        "normalized": "Int-\u003ea[()]",
        "package": "conduit-extra",
        "partial": "",
        "signature": "Int-\u003em[()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:replicateM",
      "description": {
        "fct-descr": "\u003cp\u003eReplicate a monadic action a given number of times via a producer.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "Int -\u003e m a -\u003e Producer m a",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#replicateM",
        "fct-type": "function",
        "title": "replicateM"
      },
      "index": {
        "description": "Replicate monadic action given number of times via producer",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "replicateM",
        "normalized": "Int-\u003ea b-\u003eProducer a b",
        "package": "conduit-extra",
        "partial": "",
        "signature": "Int-\u003em a-\u003eProducer m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:runEffect",
      "description": {
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "ConduitM () Void m b -\u003e m b",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#runEffect",
        "fct-type": "function",
        "title": "runEffect"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "runEffect",
        "normalized": "ConduitM()Void a b-\u003ea b",
        "package": "conduit-extra",
        "partial": "Effect",
        "signature": "ConduitM()Void m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:runPipe",
      "description": {
        "fct-descr": "\u003cp\u003eRun a conduit.  This name may be preferable to the overly generic\n   \u003ccode\u003e\u003ca\u003erunEffect\u003c/a\u003e\u003c/code\u003e, which pipes uses.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "ConduitM () Void m b -\u003e m b",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#runPipe",
        "fct-type": "function",
        "title": "runPipe"
      },
      "index": {
        "description": "Run conduit This name may be preferable to the overly generic runEffect which pipes uses",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "runPipe",
        "normalized": "ConduitM()Void a b-\u003ea b",
        "package": "conduit-extra",
        "partial": "Pipe",
        "signature": "ConduitM()Void m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:runPipeR",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunPipe\u003c/a\u003e\u003c/code\u003e, except implies a call to \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e, for running\n   resource-sensitive pipelines.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "ConduitM () Void (ResourceT m) b -\u003e m b",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#runPipeR",
        "fct-type": "function",
        "title": "runPipeR"
      },
      "index": {
        "description": "Like runPipe except implies call to runResourceT for running resource-sensitive pipelines",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "runPipeR",
        "normalized": "ConduitM()Void(ResourceT a)b-\u003ea b",
        "package": "conduit-extra",
        "partial": "Pipe",
        "signature": "ConduitM()Void(ResourceT m)b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eTake N items from a conduit.  Synonym for Conduit's \u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "Int -\u003e Conduit a m a",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Take items from conduit Synonym for Conduit isolate",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "take",
        "normalized": "Int-\u003eConduit a b a",
        "package": "conduit-extra",
        "partial": "",
        "signature": "Int-\u003eConduit a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Pipes.html#v:tee",
      "description": {
        "fct-descr": "\u003cp\u003eInjects a sink within a pipeline which receives a copy of every input\n   argument, similar to the Unix command of the same name.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunPipe $ each [1..3] \u003e-\u003e tee (P.mapM_ f) \u003e-\u003e P.mapM_ f\n\u003c/code\u003e\u003c/strong\u003e1\n1\n2\n2\n3\n3\n\u003c/pre\u003e",
        "fct-module": "Data.Conduit.Extra.Pipes",
        "fct-package": "conduit-extra",
        "fct-signature": "Sink a (ConduitM a a m) b -\u003e ConduitM a a m b",
        "fct-source": "src/Data-Conduit-Extra-Pipes.html#tee",
        "fct-type": "function",
        "title": "tee"
      },
      "index": {
        "description": "Injects sink within pipeline which receives copy of every input argument similar to the Unix command of the same name runPipe each tee P.mapM P.mapM",
        "hierarchy": "Data Conduit Extra Pipes",
        "module": "Data.Conduit.Extra.Pipes",
        "name": "tee",
        "normalized": "Sink a(ConduitM a a b)c-\u003eConduitM a a b c",
        "package": "conduit-extra",
        "partial": "",
        "signature": "Sink a(ConduitM a a m)b-\u003eConduitM a a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#",
      "description": {
        "fct-module": "Data.Conduit.Extra.Resumable",
        "fct-package": "conduit-extra",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Extra-Resumable.html",
        "fct-type": "module",
        "title": "Resumable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Extra Resumable",
        "module": "Data.Conduit.Extra.Resumable",
        "name": "Resumable",
        "normalized": "",
        "package": "conduit-extra",
        "partial": "Resumable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#t:ResumableConduit",
      "description": {
        "fct-descr": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003eResumableSource\u003c/a\u003e\u003c/code\u003e. Allows to resume an arbitrary\n conduit, keeping its state and using it later (or finalizing it).\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Resumable",
        "fct-package": "conduit-extra",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit-Extra-Resumable.html#ResumableConduit",
        "fct-type": "data",
        "title": "ResumableConduit"
      },
      "index": {
        "description": "generalization of ResumableSource Allows to resume an arbitrary conduit keeping its state and using it later or finalizing it",
        "hierarchy": "Data Conduit Extra Resumable",
        "module": "Data.Conduit.Extra.Resumable",
        "name": "ResumableConduit",
        "normalized": "",
        "package": "conduit-extra",
        "partial": "Resumable Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:-61--36--36--43-",
      "description": {
        "fct-descr": "\u003cp\u003eThe connect-and-resume operator. This does not close the \u003ccode\u003eConduit\u003c/code\u003e, but\n instead returns it to be used again. This allows a \u003ccode\u003eConduit\u003c/code\u003e to be used\n incrementally in a large program, without forcing the entire program to live\n in the \u003ccode\u003eSink\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eLeftover data returned from the \u003ccode\u003eSink\u003c/code\u003e will be discarded.\n\u003c/p\u003e\u003cp\u003eMnemonic: connect + do more.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Resumable",
        "fct-package": "conduit-extra",
        "fct-signature": "Conduit a m b -\u003e Sink b m r -\u003e Sink a m (ResumableConduit a m b, r)",
        "fct-source": "src/Data-Conduit-Extra-Resumable.html#%3D%24%24%2B",
        "fct-type": "function",
        "title": "(=$$+)"
      },
      "index": {
        "description": "The connect-and-resume operator This does not close the Conduit but instead returns it to be used again This allows Conduit to be used incrementally in large program without forcing the entire program to live in the Sink monad Leftover data returned from the Sink will be discarded Mnemonic connect do more",
        "hierarchy": "Data Conduit Extra Resumable",
        "module": "Data.Conduit.Extra.Resumable",
        "name": "(=$$+) =$$+",
        "normalized": "Conduit a b c-\u003eSink c b d-\u003eSink a b(ResumableConduit a b c,d)",
        "package": "conduit-extra",
        "partial": "",
        "signature": "Conduit a m b-\u003eSink b m r-\u003eSink a m(ResumableConduit a m b,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:-61--36--36--43--43-",
      "description": {
        "fct-descr": "\u003cp\u003eContinue processing after usage of \u003ccode\u003e\u003ca\u003e=$$+\u003c/a\u003e\u003c/code\u003e. An alias for \u003ccode\u003e\u003ca\u003econnectResume\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Resumable",
        "fct-package": "conduit-extra",
        "fct-signature": "ResumableConduit i m o -\u003e Sink o m r -\u003e Sink i m (ResumableConduit i m o, r)",
        "fct-source": "src/Data-Conduit-Extra-Resumable.html#%3D%24%24%2B%2B",
        "fct-type": "function",
        "title": "(=$$++)"
      },
      "index": {
        "description": "Continue processing after usage of An alias for connectResume",
        "hierarchy": "Data Conduit Extra Resumable",
        "module": "Data.Conduit.Extra.Resumable",
        "name": "(=$$++) =$$++",
        "normalized": "ResumableConduit a b c-\u003eSink c b d-\u003eSink a b(ResumableConduit a b c,d)",
        "package": "conduit-extra",
        "partial": "",
        "signature": "ResumableConduit i m o-\u003eSink o m r-\u003eSink i m(ResumableConduit i m o,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:-61--36--36--43--45-",
      "description": {
        "fct-descr": "\u003cp\u003eComplete processing of a \u003ccode\u003e\u003ca\u003eResumableConduit\u003c/a\u003e\u003c/code\u003e. This will run the finalizer\n associated with the \u003ccode\u003eResumableConduit\u003c/code\u003e. In order to guarantee process\n resource finalization, you \u003cem\u003emust\u003c/em\u003e use this operator after using \u003ccode\u003e\u003ca\u003e=$$+\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003e=$$++\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Resumable",
        "fct-package": "conduit-extra",
        "fct-signature": "ResumableConduit i m o -\u003e Sink o m r -\u003e Sink i m r",
        "fct-source": "src/Data-Conduit-Extra-Resumable.html#%3D%24%24%2B-",
        "fct-type": "function",
        "title": "(=$$+-)"
      },
      "index": {
        "description": "Complete processing of ResumableConduit This will run the finalizer associated with the ResumableConduit In order to guarantee process resource finalization you must use this operator after using and",
        "hierarchy": "Data Conduit Extra Resumable",
        "module": "Data.Conduit.Extra.Resumable",
        "name": "(=$$+-) =$$+-",
        "normalized": "ResumableConduit a b c-\u003eSink c b d-\u003eSink a b d",
        "package": "conduit-extra",
        "partial": "",
        "signature": "ResumableConduit i m o-\u003eSink o m r-\u003eSink i m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:ResumableConduit",
      "description": {
        "fct-module": "Data.Conduit.Extra.Resumable",
        "fct-package": "conduit-extra",
        "fct-signature": "ResumableConduit (Conduit i m o) (m ())",
        "fct-source": "src/Data-Conduit-Extra-Resumable.html#ResumableConduit",
        "fct-type": "function",
        "title": "ResumableConduit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Extra Resumable",
        "module": "Data.Conduit.Extra.Resumable",
        "name": "ResumableConduit",
        "normalized": "ResumableConduit(Conduit a b c)(b())",
        "package": "conduit-extra",
        "partial": "Resumable Conduit",
        "signature": "ResumableConduit(Conduit i m o)(m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-Resumable.html#v:connectResume",
      "description": {
        "fct-descr": "\u003cp\u003eConnect a \u003ccode\u003e\u003ca\u003eResumableConduit\u003c/a\u003e\u003c/code\u003e to a sink and return the output of the sink\n together with a new \u003ccode\u003e\u003ca\u003eResumableConduit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.Resumable",
        "fct-package": "conduit-extra",
        "fct-signature": "ResumableConduit i m o -\u003e Sink o m r -\u003e Sink i m (ResumableConduit i m o, r)",
        "fct-source": "src/Data-Conduit-Extra-Resumable.html#connectResume",
        "fct-type": "function",
        "title": "connectResume"
      },
      "index": {
        "description": "Connect ResumableConduit to sink and return the output of the sink together with new ResumableConduit",
        "hierarchy": "Data Conduit Extra Resumable",
        "module": "Data.Conduit.Extra.Resumable",
        "name": "connectResume",
        "normalized": "ResumableConduit a b c-\u003eSink c b d-\u003eSink a b(ResumableConduit a b c,d)",
        "package": "conduit-extra",
        "partial": "Resume",
        "signature": "ResumableConduit i m o-\u003eSink o m r-\u003eSink i m(ResumableConduit i m o,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#",
      "description": {
        "fct-module": "Data.Conduit.Extra.ZipSink",
        "fct-package": "conduit-extra",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Extra-ZipSink.html",
        "fct-type": "module",
        "title": "ZipSink"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Extra ZipSink",
        "module": "Data.Conduit.Extra.ZipSink",
        "name": "ZipSink",
        "normalized": "",
        "package": "conduit-extra",
        "partial": "Zip Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#t:ZipSink",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper for defining an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003es which allows\n to combine sinks together, generalizing \u003ccode\u003e\u003ca\u003ezipSinks\u003c/a\u003e\u003c/code\u003e. A combined sink\n distributes the input to all its participants and when all finish, produces\n the result. This allows to define functions like\n\u003c/p\u003e\u003cpre\u003e\n broadcast :: (Monad m)\n           =\u003e [Sink i m r] -\u003e Sink i m [r]\n broadcast = getZipSink . sequenceA . fmap ZipSink\n\u003c/pre\u003e\u003cp\u003eNote that the standard \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance for conduits works\n differently. It feeds one sink with input until it finishes, then switches\n to another, etc., and at the end combines their results.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Extra.ZipSink",
        "fct-package": "conduit-extra",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Conduit-Extra-ZipSink.html#ZipSink",
        "fct-type": "newtype",
        "title": "ZipSink"
      },
      "index": {
        "description": "wrapper for defining an Applicative instance for Sink which allows to combine sinks together generalizing zipSinks combined sink distributes the input to all its participants and when all finish produces the result This allows to define functions like broadcast Monad Sink Sink broadcast getZipSink sequenceA fmap ZipSink Note that the standard Applicative instance for conduits works differently It feeds one sink with input until it finishes then switches to another etc and at the end combines their results",
        "hierarchy": "Data Conduit Extra ZipSink",
        "module": "Data.Conduit.Extra.ZipSink",
        "name": "ZipSink",
        "normalized": "",
        "package": "conduit-extra",
        "partial": "Zip Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#v:ZipSink",
      "description": {
        "fct-module": "Data.Conduit.Extra.ZipSink",
        "fct-package": "conduit-extra",
        "fct-signature": "ZipSink",
        "fct-source": "src/Data-Conduit-Extra-ZipSink.html#ZipSink",
        "fct-type": "function",
        "title": "ZipSink"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Extra ZipSink",
        "module": "Data.Conduit.Extra.ZipSink",
        "name": "ZipSink",
        "normalized": "",
        "package": "conduit-extra",
        "partial": "Zip Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#v:broadcast",
      "description": {
        "fct-module": "Data.Conduit.Extra.ZipSink",
        "fct-package": "conduit-extra",
        "fct-signature": "f (Sink i m r) -\u003e Sink i m (f r)",
        "fct-source": "src/Data-Conduit-Extra-ZipSink.html#broadcast",
        "fct-type": "function",
        "title": "broadcast"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Extra ZipSink",
        "module": "Data.Conduit.Extra.ZipSink",
        "name": "broadcast",
        "normalized": "a(Sink b c d)-\u003eSink b c(a d)",
        "package": "conduit-extra",
        "partial": "",
        "signature": "f(Sink i m r)-\u003eSink i m(f r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra-ZipSink.html#v:getZipSink",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Conduit.Extra.ZipSink",
        "fct-package": "conduit-extra",
        "fct-signature": "Sink i m r",
        "fct-source": "src/Data-Conduit-Extra-ZipSink.html#ZipSink",
        "fct-type": "function",
        "title": "getZipSink"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Extra ZipSink",
        "module": "Data.Conduit.Extra.ZipSink",
        "name": "getZipSink",
        "normalized": "",
        "package": "conduit-extra",
        "partial": "Zip Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-extra/docs/Data-Conduit-Extra.html#",
      "description": {
        "fct-module": "Data.Conduit.Extra",
        "fct-package": "conduit-extra",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Extra.html",
        "fct-type": "module",
        "title": "Extra"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Extra",
        "module": "Data.Conduit.Extra",
        "name": "Extra",
        "normalized": "",
        "package": "conduit-extra",
        "partial": "Extra",
        "signature": ""
      }
    }
  }
]