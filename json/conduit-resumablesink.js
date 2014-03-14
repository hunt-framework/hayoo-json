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
        "word": "conduit-resumablesink"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ResumableSink",
          "name": "ResumableSink",
          "package": "conduit-resumablesink",
          "source": "src/Data-Conduit-ResumableSink.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit ResumableSink",
          "module": "Data.Conduit.ResumableSink",
          "name": "ResumableSink",
          "package": "conduit-resumablesink",
          "partial": "Resumable Sink",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ResumableSink",
          "name": "ResumableSink",
          "package": "conduit-resumablesink",
          "source": "src/Data-Conduit-ResumableSink.html#ResumableSink",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit ResumableSink",
          "module": "Data.Conduit.ResumableSink",
          "name": "ResumableSink",
          "package": "conduit-resumablesink",
          "partial": "Resumable Sink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#t:ResumableSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects a source and a sink. The result will be Right a\n   ResumableSink or Left result if the Sink completes.\n\u003c/p\u003e",
          "module": "Data.Conduit.ResumableSink",
          "name": "(+$$)",
          "package": "conduit-resumablesink",
          "signature": "Source m i -\u003e Sink i m r -\u003e m (Either r (ResumableSink m i r))",
          "source": "src/Data-Conduit-ResumableSink.html#%2B%24%24",
          "type": "function"
        },
        "index": {
          "description": "Connects source and sink The result will be Right ResumableSink or Left result if the Sink completes",
          "hierarchy": "Data Conduit ResumableSink",
          "module": "Data.Conduit.ResumableSink",
          "name": "(+$$) +$$",
          "normalized": "Source a b-\u003eSink b a c-\u003ea(Either c(ResumableSink a b c))",
          "package": "conduit-resumablesink",
          "signature": "Source m i-\u003eSink i m r-\u003em(Either r(ResumableSink m i r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:-43--36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects a new source to a resumable sink. The result will be Right an updated\n   ResumableSink or Left result if the Sink completes.\n\u003c/p\u003e",
          "module": "Data.Conduit.ResumableSink",
          "name": "(++$$)",
          "package": "conduit-resumablesink",
          "signature": "Source m i -\u003e ResumableSink m i r -\u003e m (Either r (ResumableSink m i r))",
          "source": "src/Data-Conduit-ResumableSink.html#%2B%2B%24%24",
          "type": "function"
        },
        "index": {
          "description": "Connects new source to resumable sink The result will be Right an updated ResumableSink or Left result if the Sink completes",
          "hierarchy": "Data Conduit ResumableSink",
          "module": "Data.Conduit.ResumableSink",
          "name": "(++$$) ++$$",
          "normalized": "Source a b-\u003eResumableSink a b c-\u003ea(Either c(ResumableSink a b c))",
          "package": "conduit-resumablesink",
          "signature": "Source m i-\u003eResumableSink m i r-\u003em(Either r(ResumableSink m i r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:-43--43--36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttaches a source to a resumable sink, finishing the sink and returning a result.\n\u003c/p\u003e",
          "module": "Data.Conduit.ResumableSink",
          "name": "(-++$$)",
          "package": "conduit-resumablesink",
          "signature": "Source m i -\u003e ResumableSink m i r -\u003e m r",
          "source": "src/Data-Conduit-ResumableSink.html#-%2B%2B%24%24",
          "type": "function"
        },
        "index": {
          "description": "Attaches source to resumable sink finishing the sink and returning result",
          "hierarchy": "Data Conduit ResumableSink",
          "module": "Data.Conduit.ResumableSink",
          "name": "(-++$$) -++$$",
          "normalized": "Source a b-\u003eResumableSink a b c-\u003ea c",
          "package": "conduit-resumablesink",
          "signature": "Source m i-\u003eResumableSink m i r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:-45--43--43--36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.ResumableSink",
          "name": "ResumableSink",
          "package": "conduit-resumablesink",
          "signature": "ResumableSink (Sink i m r)",
          "source": "src/Data-Conduit-ResumableSink.html#ResumableSink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit ResumableSink",
          "module": "Data.Conduit.ResumableSink",
          "name": "ResumableSink",
          "package": "conduit-resumablesink",
          "partial": "Resumable Sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:ResumableSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses a ResumableSink and gets the final result.\n\u003c/p\u003e",
          "module": "Data.Conduit.ResumableSink",
          "name": "closeResumableSink",
          "package": "conduit-resumablesink",
          "signature": "ResumableSink m i r -\u003e m r",
          "source": "src/Data-Conduit-ResumableSink.html#closeResumableSink",
          "type": "function"
        },
        "index": {
          "description": "Closes ResumableSink and gets the final result",
          "hierarchy": "Data Conduit ResumableSink",
          "module": "Data.Conduit.ResumableSink",
          "name": "closeResumableSink",
          "normalized": "ResumableSink a b c-\u003ea c",
          "package": "conduit-resumablesink",
          "partial": "Resumable Sink",
          "signature": "ResumableSink m i r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:closeResumableSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects a new source to a resumable sink. The result will be Right an updated\n   ResumableSink or Left result if the Sink completes.\n\u003c/p\u003e",
          "module": "Data.Conduit.ResumableSink",
          "name": "connectResumeSink",
          "package": "conduit-resumablesink",
          "signature": "Source m i -\u003e ResumableSink m i r -\u003e m (Either r (ResumableSink m i r))",
          "source": "src/Data-Conduit-ResumableSink.html#connectResumeSink",
          "type": "function"
        },
        "index": {
          "description": "Connects new source to resumable sink The result will be Right an updated ResumableSink or Left result if the Sink completes",
          "hierarchy": "Data Conduit ResumableSink",
          "module": "Data.Conduit.ResumableSink",
          "name": "connectResumeSink",
          "normalized": "Source a b-\u003eResumableSink a b c-\u003ea(Either c(ResumableSink a b c))",
          "package": "conduit-resumablesink",
          "partial": "Resume Sink",
          "signature": "Source m i-\u003eResumableSink m i r-\u003em(Either r(ResumableSink m i r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:connectResumeSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a sink into a ResumableSink that can be used with ++$$\n\u003c/p\u003e",
          "module": "Data.Conduit.ResumableSink",
          "name": "newResumableSink",
          "package": "conduit-resumablesink",
          "signature": "Sink i m r -\u003e ResumableSink m i r",
          "source": "src/Data-Conduit-ResumableSink.html#newResumableSink",
          "type": "function"
        },
        "index": {
          "description": "Converts sink into ResumableSink that can be used with",
          "hierarchy": "Data Conduit ResumableSink",
          "module": "Data.Conduit.ResumableSink",
          "name": "newResumableSink",
          "normalized": "Sink a b c-\u003eResumableSink b a c",
          "package": "conduit-resumablesink",
          "partial": "Resumable Sink",
          "signature": "Sink i m r-\u003eResumableSink m i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conduit-resumablesink/docs/Data-Conduit-ResumableSink.html#v:newResumableSink"
      }
    }
  ]
]