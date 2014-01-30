[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#",
      "description": {
        "fct-module": "Data.Conduit.ResumableSink",
        "fct-package": "conduit-resumablesink",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-ResumableSink.html",
        "fct-type": "module",
        "title": "ResumableSink"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit ResumableSink",
        "module": "Data.Conduit.ResumableSink",
        "name": "ResumableSink",
        "normalized": "",
        "package": "conduit-resumablesink",
        "partial": "Resumable Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#t:ResumableSink",
      "description": {
        "fct-module": "Data.Conduit.ResumableSink",
        "fct-package": "conduit-resumablesink",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit-ResumableSink.html#ResumableSink",
        "fct-type": "data",
        "title": "ResumableSink"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit ResumableSink",
        "module": "Data.Conduit.ResumableSink",
        "name": "ResumableSink",
        "normalized": "",
        "package": "conduit-resumablesink",
        "partial": "Resumable Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:-43--36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eConnects a source and a sink. The result will be Right a\n   ResumableSink or Left result if the Sink completes.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.ResumableSink",
        "fct-package": "conduit-resumablesink",
        "fct-signature": "Source m i -\u003e Sink i m r -\u003e m (Either r (ResumableSink m i r))",
        "fct-source": "src/Data-Conduit-ResumableSink.html#%2B%24%24",
        "fct-type": "function",
        "title": "(+$$)"
      },
      "index": {
        "description": "Connects source and sink The result will be Right ResumableSink or Left result if the Sink completes",
        "hierarchy": "Data Conduit ResumableSink",
        "module": "Data.Conduit.ResumableSink",
        "name": "(+$$) +$$",
        "normalized": "Source a b-\u003eSink b a c-\u003ea(Either c(ResumableSink a b c))",
        "package": "conduit-resumablesink",
        "partial": "",
        "signature": "Source m i-\u003eSink i m r-\u003em(Either r(ResumableSink m i r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:-43--43--36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eConnects a new source to a resumable sink. The result will be Right an updated\n   ResumableSink or Left result if the Sink completes.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.ResumableSink",
        "fct-package": "conduit-resumablesink",
        "fct-signature": "Source m i -\u003e ResumableSink m i r -\u003e m (Either r (ResumableSink m i r))",
        "fct-source": "src/Data-Conduit-ResumableSink.html#%2B%2B%24%24",
        "fct-type": "function",
        "title": "(++$$)"
      },
      "index": {
        "description": "Connects new source to resumable sink The result will be Right an updated ResumableSink or Left result if the Sink completes",
        "hierarchy": "Data Conduit ResumableSink",
        "module": "Data.Conduit.ResumableSink",
        "name": "(++$$) ++$$",
        "normalized": "Source a b-\u003eResumableSink a b c-\u003ea(Either c(ResumableSink a b c))",
        "package": "conduit-resumablesink",
        "partial": "",
        "signature": "Source m i-\u003eResumableSink m i r-\u003em(Either r(ResumableSink m i r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:-45--43--43--36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eAttaches a source to a resumable sink, finishing the sink and returning a result.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.ResumableSink",
        "fct-package": "conduit-resumablesink",
        "fct-signature": "Source m i -\u003e ResumableSink m i r -\u003e m r",
        "fct-source": "src/Data-Conduit-ResumableSink.html#-%2B%2B%24%24",
        "fct-type": "function",
        "title": "(-++$$)"
      },
      "index": {
        "description": "Attaches source to resumable sink finishing the sink and returning result",
        "hierarchy": "Data Conduit ResumableSink",
        "module": "Data.Conduit.ResumableSink",
        "name": "(-++$$) -++$$",
        "normalized": "Source a b-\u003eResumableSink a b c-\u003ea c",
        "package": "conduit-resumablesink",
        "partial": "",
        "signature": "Source m i-\u003eResumableSink m i r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:ResumableSink",
      "description": {
        "fct-module": "Data.Conduit.ResumableSink",
        "fct-package": "conduit-resumablesink",
        "fct-signature": "ResumableSink (Sink i m r)",
        "fct-source": "src/Data-Conduit-ResumableSink.html#ResumableSink",
        "fct-type": "function",
        "title": "ResumableSink"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit ResumableSink",
        "module": "Data.Conduit.ResumableSink",
        "name": "ResumableSink",
        "normalized": "",
        "package": "conduit-resumablesink",
        "partial": "Resumable Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:closeResumableSink",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a ResumableSink and gets the final result.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.ResumableSink",
        "fct-package": "conduit-resumablesink",
        "fct-signature": "ResumableSink m i r -\u003e m r",
        "fct-source": "src/Data-Conduit-ResumableSink.html#closeResumableSink",
        "fct-type": "function",
        "title": "closeResumableSink"
      },
      "index": {
        "description": "Closes ResumableSink and gets the final result",
        "hierarchy": "Data Conduit ResumableSink",
        "module": "Data.Conduit.ResumableSink",
        "name": "closeResumableSink",
        "normalized": "ResumableSink a b c-\u003ea c",
        "package": "conduit-resumablesink",
        "partial": "Resumable Sink",
        "signature": "ResumableSink m i r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:connectResumeSink",
      "description": {
        "fct-descr": "\u003cp\u003eConnects a new source to a resumable sink. The result will be Right an updated\n   ResumableSink or Left result if the Sink completes.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.ResumableSink",
        "fct-package": "conduit-resumablesink",
        "fct-signature": "Source m i -\u003e ResumableSink m i r -\u003e m (Either r (ResumableSink m i r))",
        "fct-source": "src/Data-Conduit-ResumableSink.html#connectResumeSink",
        "fct-type": "function",
        "title": "connectResumeSink"
      },
      "index": {
        "description": "Connects new source to resumable sink The result will be Right an updated ResumableSink or Left result if the Sink completes",
        "hierarchy": "Data Conduit ResumableSink",
        "module": "Data.Conduit.ResumableSink",
        "name": "connectResumeSink",
        "normalized": "Source a b-\u003eResumableSink a b c-\u003ea(Either c(ResumableSink a b c))",
        "package": "conduit-resumablesink",
        "partial": "Resume Sink",
        "signature": "Source m i-\u003eResumableSink m i r-\u003em(Either r(ResumableSink m i r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:newResumableSink",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a sink into a ResumableSink that can be used with ++$$\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.ResumableSink",
        "fct-package": "conduit-resumablesink",
        "fct-signature": "Sink i m r -\u003e ResumableSink m i r",
        "fct-source": "src/Data-Conduit-ResumableSink.html#newResumableSink",
        "fct-type": "function",
        "title": "newResumableSink"
      },
      "index": {
        "description": "Converts sink into ResumableSink that can be used with",
        "hierarchy": "Data Conduit ResumableSink",
        "module": "Data.Conduit.ResumableSink",
        "name": "newResumableSink",
        "normalized": "Sink a b c-\u003eResumableSink b a c",
        "package": "conduit-resumablesink",
        "partial": "Resumable Sink",
        "signature": "Sink i m r-\u003eResumableSink m i r"
      }
    }
  }
]