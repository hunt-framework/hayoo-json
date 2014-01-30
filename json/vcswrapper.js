[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports types and functions common to all VCS.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "module",
        "fct-source": "src/VCSWrapper-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "This module exports types and functions common to all VCS",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Common",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Author",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor to be passed to VCS commands where applicable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "data",
        "title": "Author"
      },
      "index": {
        "description": "Author to be passed to VCS commands where applicable",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration of the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e the VCS commands will be executed in.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Configuration of the Ctx the VCS commands will be executed in",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Config",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Ctx",
      "description": {
        "fct-descr": "\u003cp\u003eContext for all VCS commands.\n\u003c/p\u003e\u003cp\u003eE.g. to create a new Git repository use something like this:\n\u003c/p\u003e\u003cpre\u003eimport VCSWrapper.Git\nmyInitRepoFn = do\n    let config = makeConfig \"path/to/repo\" Nothing Nothing\n    runVcs config $ initDB False\n\u003c/pre\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "newtype",
        "fct-source": "src/VCSWrapper-Common-Types.html#Ctx",
        "fct-type": "newtype",
        "title": "Ctx"
      },
      "index": {
        "description": "Context for all VCS commands E.g to create new Git repository use something like this import VCSWrapper.Git myInitRepoFn do let config makeConfig path to repo Nothing Nothing runVcs config initDB False",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Ctx",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:IsLocked",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if this file is locked by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "type",
        "fct-source": "src/VCSWrapper-Common-Types.html#IsLocked",
        "fct-type": "type",
        "title": "IsLocked"
      },
      "index": {
        "description": "True if this file is locked by the VCS",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "IsLocked",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Is Locked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:LogEntry",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a log entry in the history managed by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "data",
        "title": "LogEntry"
      },
      "index": {
        "description": "Represents log entry in the history managed by the VCS",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "LogEntry",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Modification",
      "description": {
        "fct-descr": "\u003cp\u003eFlags to describe the state of a file.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "data",
        "title": "Modification"
      },
      "index": {
        "description": "Flags to describe the state of file",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Modification",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Modification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Status",
      "description": {
        "fct-descr": "\u003cp\u003eStatus of a file managed by the respective VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "Status of file managed by the respective VCS",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Status",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:VCSException",
      "description": {
        "fct-descr": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e-type will be thrown if a VCS command fails unexpectedly.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSException",
        "fct-type": "data",
        "title": "VCSException"
      },
      "index": {
        "description": "This Exception type will be thrown if VCS command fails unexpectedly",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "VCSException",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "VCSException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:VCSType",
      "description": {
        "fct-descr": "\u003cp\u003eAvailable VCS types implemented in this package.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "data",
        "title": "VCSType"
      },
      "index": {
        "description": "Available VCS types implemented in this package",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "VCSType",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "VCSType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Added",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been selected to be managed by the respective VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Added",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Added"
      },
      "index": {
        "description": "File has been selected to be managed by the respective VCS",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Added",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Added",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Author",
      "description": {
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Author",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "Author"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Config",
      "description": {
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Config",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Config",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Conflicting",
      "description": {
        "fct-descr": "\u003cp\u003eFile is in conflicting state. Manually resolving the conflict may be necessary.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Conflicting",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Conflicting"
      },
      "index": {
        "description": "File is in conflicting state Manually resolving the conflict may be necessary",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Conflicting",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Conflicting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Ctx",
      "description": {
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx (ReaderT Config IO a)",
        "fct-source": "src/VCSWrapper-Common-Types.html#Ctx",
        "fct-type": "function",
        "title": "Ctx"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Ctx",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Deleted",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been deleted.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Deleted",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Deleted"
      },
      "index": {
        "description": "File has been deleted",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Deleted",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:GIT",
      "description": {
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "GIT",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "GIT"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "GIT",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "GIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:GITStatus",
      "description": {
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "GITStatus FilePath Modification",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "function",
        "title": "GITStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "GITStatus",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "GITStatus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Ignored",
      "description": {
        "fct-descr": "\u003cp\u003eFile is ignored by VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Ignored",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Ignored"
      },
      "index": {
        "description": "File is ignored by VCS",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Ignored",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ignored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:LogEntry",
      "description": {
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "LogEntry",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "LogEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "LogEntry",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Mercurial",
      "description": {
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Mercurial",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "Mercurial"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Mercurial",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Mercurial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Missing",
      "description": {
        "fct-descr": "\u003cp\u003eFile is missing.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Missing",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Missing"
      },
      "index": {
        "description": "File is missing",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Missing",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Modified",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been modified since last commit.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Modified",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Modified"
      },
      "index": {
        "description": "File has been modified since last commit",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Modified",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:None",
      "description": {
        "fct-descr": "\u003cp\u003eFile hasn't been modified.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "None",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "File hasn been modified",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "None",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Replaced",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been replaced by a different file.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Replaced",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Replaced"
      },
      "index": {
        "description": "File has been replaced by different file",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Replaced",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Replaced",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:SVN",
      "description": {
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "SVN",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "SVN"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "SVN",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "SVN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:SVNStatus",
      "description": {
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "SVNStatus FilePath Modification IsLocked",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "function",
        "title": "SVNStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "SVNStatus",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "SVNStatus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Unknown",
      "description": {
        "fct-descr": "\u003cp\u003eState of file is unknown.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Unknown",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Unknown"
      },
      "index": {
        "description": "State of file is unknown",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Unknown",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Untracked",
      "description": {
        "fct-descr": "\u003cp\u003eFile is currently not known by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Untracked",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Untracked"
      },
      "index": {
        "description": "File is currently not known by the VCS",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "Untracked",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Untracked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:VCSException",
      "description": {
        "fct-descr": "\u003cp\u003eExit code -\u003e stdout -\u003e errout -\u003e \u003ccode\u003e\u003ca\u003econfigCwd\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e -\u003e List containing the executed command and its options\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "VCSException Int String String String [String]",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSException",
        "fct-type": "function",
        "title": "VCSException"
      },
      "index": {
        "description": "Exit code stdout errout configCwd of the Config List containing the executed command and its options",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "VCSException",
        "normalized": "VCSException Int String String String[String]",
        "package": "vcswrapper",
        "partial": "VCSException",
        "signature": "VCSException Int String String String[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:author",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor of this commit.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "author"
      },
      "index": {
        "description": "Author of this commit",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:authorEmail",
      "description": {
        "fct-descr": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "authorEmail"
      },
      "index": {
        "description": "Email address of the author",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "authorEmail",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:authorName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "authorName"
      },
      "index": {
        "description": "Name of the author",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "authorName",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eLong body of the commit message.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "Long body of the commit message",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "body",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:commitID",
      "description": {
        "fct-descr": "\u003cp\u003eCommit identifier\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "commitID"
      },
      "index": {
        "description": "Commit identifier",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "commitID",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configAuthor",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor to be used for different VCS actions. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the default for the selected repository will be used.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe Author",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configAuthor"
      },
      "index": {
        "description": "Author to be used for different VCS actions If Nothing the default for the selected repository will be used",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "configAuthor",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configCwd",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the main directory of the repository. E.g. for Git: the directory of the repository containing the \u003ccode\u003e.git\u003c/code\u003e config directory.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configCwd"
      },
      "index": {
        "description": "Path to the main directory of the repository E.g for Git the directory of the repository containing the git config directory",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "configCwd",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Cwd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eList of environment variables mappings passed to the underlying VCS executable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configEnvironment"
      },
      "index": {
        "description": "List of environment variables mappings passed to the underlying VCS executable",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "configEnvironment",
        "normalized": "[(String,String)]",
        "package": "vcswrapper",
        "partial": "Environment",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configPath",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the vcs executable. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the PATH environment variable will be search for a matching executable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configPath"
      },
      "index": {
        "description": "Path to the vcs executable If Nothing the PATH environment variable will be search for matching executable",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "configPath",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:date",
      "description": {
        "fct-descr": "\u003cp\u003eDate this log entry was created.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "Date this log entry was created",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "date",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:email",
      "description": {
        "fct-descr": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "email"
      },
      "index": {
        "description": "Email address of the author",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "email",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:exec",
      "description": {
        "fct-descr": "\u003cp\u003eInternal function to execute a VCS command\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String-\u003e [String]-\u003e [(String, String)]-\u003e String-\u003e (Config -\u003e Maybe FilePath)-\u003e Ctx (Either VCSException String)",
        "fct-type": "function",
        "title": "exec"
      },
      "index": {
        "description": "Internal function to execute VCS command",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "exec",
        "normalized": "String-\u003e[String]-\u003e[(String,String)]-\u003eString-\u003e(Config-\u003eMaybe FilePath)-\u003eCtx(Either VCSException String)",
        "package": "vcswrapper",
        "partial": "",
        "signature": "String-\u003e[String]-\u003e[(String,String)]-\u003eString-\u003e(Config-\u003eMaybe FilePath)-\u003eCtx(Either VCSException String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:filePath",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#filePath",
        "fct-type": "function",
        "title": "filePath"
      },
      "index": {
        "description": "Retrieve the FilePath of any VCS Status",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "filePath",
        "normalized": "Status-\u003eFilePath",
        "package": "vcswrapper",
        "partial": "Path",
        "signature": "Status-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:isLocked",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eIsLocked\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e. For Git, this returns always \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e IsLocked",
        "fct-source": "src/VCSWrapper-Common-Types.html#isLocked",
        "fct-type": "function",
        "title": "isLocked"
      },
      "index": {
        "description": "Retrieve the IsLocked of any VCS Status For Git this returns always False",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "isLocked",
        "normalized": "Status-\u003eIsLocked",
        "package": "vcswrapper",
        "partial": "Locked",
        "signature": "Status-\u003eIsLocked"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:makeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e Config",
        "fct-type": "function",
        "title": "makeConfig"
      },
      "index": {
        "description": "Creates new Config",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "makeConfig",
        "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:makeConfigWithEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e with a list of environment variables.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e [(String, String)]-\u003e Config",
        "fct-type": "function",
        "title": "makeConfigWithEnvironment"
      },
      "index": {
        "description": "Creates new Config with list of environment variables",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "makeConfigWithEnvironment",
        "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig",
        "package": "vcswrapper",
        "partial": "Config With Environment",
        "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:mbBranch",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe Branchname\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "mbBranch"
      },
      "index": {
        "description": "Maybe Branchname",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "mbBranch",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:modification",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eModification\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e Modification",
        "fct-source": "src/VCSWrapper-Common-Types.html#modification",
        "fct-type": "function",
        "title": "modification"
      },
      "index": {
        "description": "Retrieve the Modification of any VCS Status",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "modification",
        "normalized": "Status-\u003eModification",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Status-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:runVcs",
      "description": {
        "fct-descr": "\u003cp\u003eRun a VCS \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e and returns the result\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "Config-\u003e Ctx t-\u003e IO t",
        "fct-type": "function",
        "title": "runVcs"
      },
      "index": {
        "description": "Run VCS Ctx from Config and returns the result",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "runVcs",
        "normalized": "Config-\u003eCtx a-\u003eIO a",
        "package": "vcswrapper",
        "partial": "Vcs",
        "signature": "Config-\u003eCtx t-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:subject",
      "description": {
        "fct-descr": "\u003cp\u003eShort commit message.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "subject"
      },
      "index": {
        "description": "Short commit message",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "subject",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:vcsExec",
      "description": {
        "fct-descr": "\u003cp\u003eInternal function to execute a VCS command\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String-\u003e String-\u003e [String]-\u003e [(String, String)]-\u003e Ctx (Either VCSException String)",
        "fct-type": "function",
        "title": "vcsExec"
      },
      "index": {
        "description": "Internal function to execute VCS command",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "vcsExec",
        "normalized": "String-\u003eString-\u003e[String]-\u003e[(String,String)]-\u003eCtx(Either VCSException String)",
        "package": "vcswrapper",
        "partial": "Exec",
        "signature": "String-\u003eString-\u003e[String]-\u003e[(String,String)]-\u003eCtx(Either VCSException String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:vcsExecThrowingOnError",
      "description": {
        "fct-descr": "\u003cp\u003eInternal function to execute a VCS command. Throws an exception if the command fails.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Common",
        "fct-package": "vcswrapper",
        "fct-signature": "String-\u003e String-\u003e [String]-\u003e [(String, String)]-\u003e Ctx String",
        "fct-type": "function",
        "title": "vcsExecThrowingOnError"
      },
      "index": {
        "description": "Internal function to execute VCS command Throws an exception if the command fails",
        "hierarchy": "VCSWrapper Common",
        "module": "VCSWrapper.Common",
        "name": "vcsExecThrowingOnError",
        "normalized": "String-\u003eString-\u003e[String]-\u003e[(String,String)]-\u003eCtx String",
        "package": "vcswrapper",
        "partial": "Exec Throwing On Error",
        "signature": "String-\u003eString-\u003e[String]-\u003e[(String,String)]-\u003eCtx String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides high-level Git functions like \u003ccode\u003ecommit\u003c/code\u003e, \u003ccode\u003echeckout\u003c/code\u003e, \u003ccode\u003estatus\u003c/code\u003e, \u003ccode\u003elog\u003c/code\u003e,...\n\u003c/p\u003e\u003cp\u003eAll functions of this module run in the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e monad, common to all VCS.\n On unexpected behavior, these functions will throw a \u003ccode\u003e\u003ca\u003eVCSException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "module",
        "fct-source": "src/VCSWrapper-Git.html",
        "fct-type": "module",
        "title": "Git"
      },
      "index": {
        "description": "Provides high-level Git functions like commit checkout status log All functions of this module run in the Ctx monad common to all VCS On unexpected behavior these functions will throw VCSException",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Git",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Git",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Author",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor to be passed to VCS commands where applicable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "data",
        "title": "Author"
      },
      "index": {
        "description": "Author to be passed to VCS commands where applicable",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration of the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e the VCS commands will be executed in.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Configuration of the Ctx the VCS commands will be executed in",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Config",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Ctx",
      "description": {
        "fct-descr": "\u003cp\u003eContext for all VCS commands.\n\u003c/p\u003e\u003cp\u003eE.g. to create a new Git repository use something like this:\n\u003c/p\u003e\u003cpre\u003eimport VCSWrapper.Git\nmyInitRepoFn = do\n    let config = makeConfig \"path/to/repo\" Nothing Nothing\n    runVcs config $ initDB False\n\u003c/pre\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "newtype",
        "fct-source": "src/VCSWrapper-Common-Types.html#Ctx",
        "fct-type": "newtype",
        "title": "Ctx"
      },
      "index": {
        "description": "Context for all VCS commands E.g to create new Git repository use something like this import VCSWrapper.Git myInitRepoFn do let config makeConfig path to repo Nothing Nothing runVcs config initDB False",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Ctx",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:IsLocked",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if this file is locked by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "type",
        "fct-source": "src/VCSWrapper-Common-Types.html#IsLocked",
        "fct-type": "type",
        "title": "IsLocked"
      },
      "index": {
        "description": "True if this file is locked by the VCS",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "IsLocked",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Is Locked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:LogEntry",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a log entry in the history managed by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "data",
        "title": "LogEntry"
      },
      "index": {
        "description": "Represents log entry in the history managed by the VCS",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "LogEntry",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Modification",
      "description": {
        "fct-descr": "\u003cp\u003eFlags to describe the state of a file.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "data",
        "title": "Modification"
      },
      "index": {
        "description": "Flags to describe the state of file",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Modification",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Modification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Status",
      "description": {
        "fct-descr": "\u003cp\u003eStatus of a file managed by the respective VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "Status of file managed by the respective VCS",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Status",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:VCSException",
      "description": {
        "fct-descr": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e-type will be thrown if a VCS command fails unexpectedly.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSException",
        "fct-type": "data",
        "title": "VCSException"
      },
      "index": {
        "description": "This Exception type will be thrown if VCS command fails unexpectedly",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "VCSException",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "VCSException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:VCSType",
      "description": {
        "fct-descr": "\u003cp\u003eAvailable VCS types implemented in this package.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "data",
        "title": "VCSType"
      },
      "index": {
        "description": "Available VCS types implemented in this package",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "VCSType",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "VCSType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Added",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been selected to be managed by the respective VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Added",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Added"
      },
      "index": {
        "description": "File has been selected to be managed by the respective VCS",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Added",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Added",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Author",
      "description": {
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Author",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "Author"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Config",
      "description": {
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Config",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Config",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Conflicting",
      "description": {
        "fct-descr": "\u003cp\u003eFile is in conflicting state. Manually resolving the conflict may be necessary.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Conflicting",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Conflicting"
      },
      "index": {
        "description": "File is in conflicting state Manually resolving the conflict may be necessary",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Conflicting",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Conflicting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Ctx",
      "description": {
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx (ReaderT Config IO a)",
        "fct-source": "src/VCSWrapper-Common-Types.html#Ctx",
        "fct-type": "function",
        "title": "Ctx"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Ctx",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Deleted",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been deleted.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Deleted",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Deleted"
      },
      "index": {
        "description": "File has been deleted",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Deleted",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:GIT",
      "description": {
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "GIT",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "GIT"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "GIT",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "GIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:GITStatus",
      "description": {
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "GITStatus FilePath Modification",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "function",
        "title": "GITStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "GITStatus",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "GITStatus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Ignored",
      "description": {
        "fct-descr": "\u003cp\u003eFile is ignored by VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Ignored",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Ignored"
      },
      "index": {
        "description": "File is ignored by VCS",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Ignored",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ignored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:LogEntry",
      "description": {
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "LogEntry",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "LogEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "LogEntry",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Mercurial",
      "description": {
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Mercurial",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "Mercurial"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Mercurial",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Mercurial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Missing",
      "description": {
        "fct-descr": "\u003cp\u003eFile is missing.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Missing",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Missing"
      },
      "index": {
        "description": "File is missing",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Missing",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Modified",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been modified since last commit.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Modified",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Modified"
      },
      "index": {
        "description": "File has been modified since last commit",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Modified",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:None",
      "description": {
        "fct-descr": "\u003cp\u003eFile hasn't been modified.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "None",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "File hasn been modified",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "None",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Replaced",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been replaced by a different file.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Replaced",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Replaced"
      },
      "index": {
        "description": "File has been replaced by different file",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Replaced",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Replaced",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:SVN",
      "description": {
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "SVN",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "SVN"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "SVN",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "SVN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:SVNStatus",
      "description": {
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "SVNStatus FilePath Modification IsLocked",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "function",
        "title": "SVNStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "SVNStatus",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "SVNStatus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Unknown",
      "description": {
        "fct-descr": "\u003cp\u003eState of file is unknown.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Unknown",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Unknown"
      },
      "index": {
        "description": "State of file is unknown",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Unknown",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Untracked",
      "description": {
        "fct-descr": "\u003cp\u003eFile is currently not known by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Untracked",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Untracked"
      },
      "index": {
        "description": "File is currently not known by the VCS",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "Untracked",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Untracked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:VCSException",
      "description": {
        "fct-descr": "\u003cp\u003eExit code -\u003e stdout -\u003e errout -\u003e \u003ccode\u003e\u003ca\u003econfigCwd\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e -\u003e List containing the executed command and its options\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "VCSException Int String String String [String]",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSException",
        "fct-type": "function",
        "title": "VCSException"
      },
      "index": {
        "description": "Exit code stdout errout configCwd of the Config List containing the executed command and its options",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "VCSException",
        "normalized": "VCSException Int String String String[String]",
        "package": "vcswrapper",
        "partial": "VCSException",
        "signature": "VCSException Int String String String[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:add",
      "description": {
        "fct-descr": "\u003cp\u003eAdd files to the index. Executes \u003ccode\u003egit add\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "Add files to the index Executes git add",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "add",
        "normalized": "[FilePath]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:author",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor of this commit.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "author"
      },
      "index": {
        "description": "Author of this commit",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:authorEmail",
      "description": {
        "fct-descr": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "authorEmail"
      },
      "index": {
        "description": "Email address of the author",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "authorEmail",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:authorName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "authorName"
      },
      "index": {
        "description": "Name of the author",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "authorName",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eLong body of the commit message.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "Long body of the commit message",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "body",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:checkout",
      "description": {
        "fct-descr": "\u003cp\u003eCheckout the index to some commit ID. Executes \u003ccode\u003egit checkout\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String-\u003e Maybe String-\u003e Ctx ()",
        "fct-type": "function",
        "title": "checkout"
      },
      "index": {
        "description": "Checkout the index to some commit ID Executes git checkout",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "checkout",
        "normalized": "Maybe String-\u003eMaybe String-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Maybe String-\u003eMaybe String-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eCommit the current index or the specified files to the repository. Executes \u003ccode\u003egit commit\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e Maybe (String, String)-\u003e String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "Commit the current index or the specified files to the repository Executes git commit",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "commit",
        "normalized": "[FilePath]-\u003eMaybe(String,String)-\u003eString-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eMaybe(String,String)-\u003eString-\u003e[String]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:commitID",
      "description": {
        "fct-descr": "\u003cp\u003eCommit identifier\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "commitID"
      },
      "index": {
        "description": "Commit identifier",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "commitID",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:configAuthor",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor to be used for different VCS actions. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the default for the selected repository will be used.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe Author",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configAuthor"
      },
      "index": {
        "description": "Author to be used for different VCS actions If Nothing the default for the selected repository will be used",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "configAuthor",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:configCwd",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the main directory of the repository. E.g. for Git: the directory of the repository containing the \u003ccode\u003e.git\u003c/code\u003e config directory.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configCwd"
      },
      "index": {
        "description": "Path to the main directory of the repository E.g for Git the directory of the repository containing the git config directory",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "configCwd",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Cwd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:configEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eList of environment variables mappings passed to the underlying VCS executable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configEnvironment"
      },
      "index": {
        "description": "List of environment variables mappings passed to the underlying VCS executable",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "configEnvironment",
        "normalized": "[(String,String)]",
        "package": "vcswrapper",
        "partial": "Environment",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:configPath",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the vcs executable. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the PATH environment variable will be search for a matching executable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configPath"
      },
      "index": {
        "description": "Path to the vcs executable If Nothing the PATH environment variable will be search for matching executable",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "configPath",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:date",
      "description": {
        "fct-descr": "\u003cp\u003eDate this log entry was created.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "Date this log entry was created",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "date",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:email",
      "description": {
        "fct-descr": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "email"
      },
      "index": {
        "description": "Email address of the author",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "email",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:filePath",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#filePath",
        "fct-type": "function",
        "title": "filePath"
      },
      "index": {
        "description": "Retrieve the FilePath of any VCS Status",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "filePath",
        "normalized": "Status-\u003eFilePath",
        "package": "vcswrapper",
        "partial": "Path",
        "signature": "Status-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:initDB",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize a new git repository. Executes \u003ccode\u003egit init\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Bool-\u003e Ctx ()",
        "fct-type": "function",
        "title": "initDB"
      },
      "index": {
        "description": "Initialize new git repository Executes git init",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "initDB",
        "normalized": "Bool-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "DB",
        "signature": "Bool-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:isLocked",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eIsLocked\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e. For Git, this returns always \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e IsLocked",
        "fct-source": "src/VCSWrapper-Common-Types.html#isLocked",
        "fct-type": "function",
        "title": "isLocked"
      },
      "index": {
        "description": "Retrieve the IsLocked of any VCS Status For Git this returns always False",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "isLocked",
        "normalized": "Status-\u003eIsLocked",
        "package": "vcswrapper",
        "partial": "Locked",
        "signature": "Status-\u003eIsLocked"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:localBranches",
      "description": {
        "fct-descr": "\u003cp\u003eGet all local branches. Executes \u003ccode\u003egit branch\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx (String, [String])",
        "fct-type": "function",
        "title": "localBranches"
      },
      "index": {
        "description": "Get all local branches Executes git branch",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "localBranches",
        "normalized": "Ctx(String,[String])",
        "package": "vcswrapper",
        "partial": "Branches",
        "signature": "Ctx(String,[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:makeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e Config",
        "fct-type": "function",
        "title": "makeConfig"
      },
      "index": {
        "description": "Creates new Config",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "makeConfig",
        "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:makeConfigWithEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e with a list of environment variables.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e [(String, String)]-\u003e Config",
        "fct-type": "function",
        "title": "makeConfigWithEnvironment"
      },
      "index": {
        "description": "Creates new Config with list of environment variables",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "makeConfigWithEnvironment",
        "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig",
        "package": "vcswrapper",
        "partial": "Config With Environment",
        "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:mbBranch",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe Branchname\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "mbBranch"
      },
      "index": {
        "description": "Maybe Branchname",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "mbBranch",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:modification",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eModification\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e Modification",
        "fct-source": "src/VCSWrapper-Common-Types.html#modification",
        "fct-type": "function",
        "title": "modification"
      },
      "index": {
        "description": "Retrieve the Modification of any VCS Status",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "modification",
        "normalized": "Status-\u003eModification",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Status-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:pull",
      "description": {
        "fct-descr": "\u003cp\u003ePull changes from the remote as configured in the git configuration. If a merge conflict\n    is detected, the error message is returned, otherwise 'Right ()' is returned.\n    Executes \u003ccode\u003egit pull\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx (Either String ())",
        "fct-source": "src/VCSWrapper-Git.html#pull",
        "fct-type": "function",
        "title": "pull"
      },
      "index": {
        "description": "Pull changes from the remote as configured in the git configuration If merge conflict is detected the error message is returned otherwise Right is returned Executes git pull",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "pull",
        "normalized": "Ctx(Either String())",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Ctx(Either String())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePush changes to the remote as configured in the git configuration. Executes \u003ccode\u003egit push\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx ()",
        "fct-source": "src/VCSWrapper-Git.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Push changes to the remote as configured in the git configuration Executes git push",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "push",
        "normalized": "Ctx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Ctx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:remote",
      "description": {
        "fct-descr": "\u003cp\u003eGet all remotes. Executes \u003ccode\u003egit remote\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx [String]",
        "fct-source": "src/VCSWrapper-Git.html#remote",
        "fct-type": "function",
        "title": "remote"
      },
      "index": {
        "description": "Get all remotes Executes git remote",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "remote",
        "normalized": "Ctx[String]",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Ctx[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:revparse",
      "description": {
        "fct-descr": "\u003cp\u003eRev-parse a revision. Executes \u003ccode\u003egit rev-parse\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "String-\u003e Ctx String",
        "fct-type": "function",
        "title": "revparse"
      },
      "index": {
        "description": "Rev-parse revision Executes git rev-parse",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "revparse",
        "normalized": "String-\u003eCtx String",
        "package": "vcswrapper",
        "partial": "",
        "signature": "String-\u003eCtx String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:rm",
      "description": {
        "fct-descr": "\u003cp\u003eRemove files from the index and the working directory. Executes \u003ccode\u003egit rm\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "rm"
      },
      "index": {
        "description": "Remove files from the index and the working directory Executes git rm",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "rm",
        "normalized": "[FilePath]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:runVcs",
      "description": {
        "fct-descr": "\u003cp\u003eRun a VCS \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e and returns the result\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Config-\u003e Ctx t-\u003e IO t",
        "fct-type": "function",
        "title": "runVcs"
      },
      "index": {
        "description": "Run VCS Ctx from Config and returns the result",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "runVcs",
        "normalized": "Config-\u003eCtx a-\u003eIO a",
        "package": "vcswrapper",
        "partial": "Vcs",
        "signature": "Config-\u003eCtx t-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:simpleLog",
      "description": {
        "fct-descr": "\u003cp\u003eGet all commit messages. Executes \u003ccode\u003egit log\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String-\u003e Ctx [LogEntry]",
        "fct-type": "function",
        "title": "simpleLog"
      },
      "index": {
        "description": "Get all commit messages Executes git log",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "simpleLog",
        "normalized": "Maybe String-\u003eCtx[LogEntry]",
        "package": "vcswrapper",
        "partial": "Log",
        "signature": "Maybe String-\u003eCtx[LogEntry]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eReturn status of the repository as a list of \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e. Executes \u003ccode\u003egit status\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx [Status]",
        "fct-source": "src/VCSWrapper-Git.html#status",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "Return status of the repository as list of Status Executes git status",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "status",
        "normalized": "Ctx[Status]",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Ctx[Status]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:subject",
      "description": {
        "fct-descr": "\u003cp\u003eShort commit message.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Git",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "subject"
      },
      "index": {
        "description": "Short commit message",
        "hierarchy": "VCSWrapper Git",
        "module": "VCSWrapper.Git",
        "name": "subject",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "module",
        "fct-source": "src/VCSWrapper-Mercurial.html",
        "fct-type": "module",
        "title": "Mercurial"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Mercurial",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Mercurial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Author",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor to be passed to VCS commands where applicable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "data",
        "title": "Author"
      },
      "index": {
        "description": "Author to be passed to VCS commands where applicable",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration of the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e the VCS commands will be executed in.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Configuration of the Ctx the VCS commands will be executed in",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Config",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Ctx",
      "description": {
        "fct-descr": "\u003cp\u003eContext for all VCS commands.\n\u003c/p\u003e\u003cp\u003eE.g. to create a new Git repository use something like this:\n\u003c/p\u003e\u003cpre\u003eimport VCSWrapper.Git\nmyInitRepoFn = do\n    let config = makeConfig \"path/to/repo\" Nothing Nothing\n    runVcs config $ initDB False\n\u003c/pre\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "newtype",
        "fct-source": "src/VCSWrapper-Common-Types.html#Ctx",
        "fct-type": "newtype",
        "title": "Ctx"
      },
      "index": {
        "description": "Context for all VCS commands E.g to create new Git repository use something like this import VCSWrapper.Git myInitRepoFn do let config makeConfig path to repo Nothing Nothing runVcs config initDB False",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Ctx",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:IsLocked",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if this file is locked by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "type",
        "fct-source": "src/VCSWrapper-Common-Types.html#IsLocked",
        "fct-type": "type",
        "title": "IsLocked"
      },
      "index": {
        "description": "True if this file is locked by the VCS",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "IsLocked",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Is Locked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:LogEntry",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a log entry in the history managed by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "data",
        "title": "LogEntry"
      },
      "index": {
        "description": "Represents log entry in the history managed by the VCS",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "LogEntry",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Modification",
      "description": {
        "fct-descr": "\u003cp\u003eFlags to describe the state of a file.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "data",
        "title": "Modification"
      },
      "index": {
        "description": "Flags to describe the state of file",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Modification",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Modification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Status",
      "description": {
        "fct-descr": "\u003cp\u003eStatus of a file managed by the respective VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "Status of file managed by the respective VCS",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Status",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:VCSException",
      "description": {
        "fct-descr": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e-type will be thrown if a VCS command fails unexpectedly.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSException",
        "fct-type": "data",
        "title": "VCSException"
      },
      "index": {
        "description": "This Exception type will be thrown if VCS command fails unexpectedly",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "VCSException",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "VCSException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:VCSType",
      "description": {
        "fct-descr": "\u003cp\u003eAvailable VCS types implemented in this package.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "data",
        "title": "VCSType"
      },
      "index": {
        "description": "Available VCS types implemented in this package",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "VCSType",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "VCSType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Added",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been selected to be managed by the respective VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Added",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Added"
      },
      "index": {
        "description": "File has been selected to be managed by the respective VCS",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Added",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Added",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Author",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Author",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "Author"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Config",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Config",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Config",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Conflicting",
      "description": {
        "fct-descr": "\u003cp\u003eFile is in conflicting state. Manually resolving the conflict may be necessary.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Conflicting",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Conflicting"
      },
      "index": {
        "description": "File is in conflicting state Manually resolving the conflict may be necessary",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Conflicting",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Conflicting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Ctx",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx (ReaderT Config IO a)",
        "fct-source": "src/VCSWrapper-Common-Types.html#Ctx",
        "fct-type": "function",
        "title": "Ctx"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Ctx",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Deleted",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been deleted.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Deleted",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Deleted"
      },
      "index": {
        "description": "File has been deleted",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Deleted",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:GIT",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "GIT",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "GIT"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "GIT",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "GIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:GITStatus",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "GITStatus FilePath Modification",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "function",
        "title": "GITStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "GITStatus",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "GITStatus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Ignored",
      "description": {
        "fct-descr": "\u003cp\u003eFile is ignored by VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Ignored",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Ignored"
      },
      "index": {
        "description": "File is ignored by VCS",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Ignored",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ignored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:LogEntry",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "LogEntry",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "LogEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "LogEntry",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Mercurial",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Mercurial",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "Mercurial"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Mercurial",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Mercurial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Missing",
      "description": {
        "fct-descr": "\u003cp\u003eFile is missing.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Missing",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Missing"
      },
      "index": {
        "description": "File is missing",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Missing",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Modified",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been modified since last commit.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Modified",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Modified"
      },
      "index": {
        "description": "File has been modified since last commit",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Modified",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:None",
      "description": {
        "fct-descr": "\u003cp\u003eFile hasn't been modified.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "None",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "File hasn been modified",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "None",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Replaced",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been replaced by a different file.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Replaced",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Replaced"
      },
      "index": {
        "description": "File has been replaced by different file",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Replaced",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Replaced",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:SVN",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "SVN",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "SVN"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "SVN",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "SVN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:SVNStatus",
      "description": {
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "SVNStatus FilePath Modification IsLocked",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "function",
        "title": "SVNStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "SVNStatus",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "SVNStatus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Unknown",
      "description": {
        "fct-descr": "\u003cp\u003eState of file is unknown.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Unknown",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Unknown"
      },
      "index": {
        "description": "State of file is unknown",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Unknown",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Untracked",
      "description": {
        "fct-descr": "\u003cp\u003eFile is currently not known by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Untracked",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Untracked"
      },
      "index": {
        "description": "File is currently not known by the VCS",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "Untracked",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Untracked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:VCSException",
      "description": {
        "fct-descr": "\u003cp\u003eExit code -\u003e stdout -\u003e errout -\u003e \u003ccode\u003e\u003ca\u003econfigCwd\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e -\u003e List containing the executed command and its options\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "VCSException Int String String String [String]",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSException",
        "fct-type": "function",
        "title": "VCSException"
      },
      "index": {
        "description": "Exit code stdout errout configCwd of the Config List containing the executed command and its options",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "VCSException",
        "normalized": "VCSException Int String String String[String]",
        "package": "vcswrapper",
        "partial": "VCSException",
        "signature": "VCSException Int String String String[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:addremove",
      "description": {
        "fct-descr": "\u003cp\u003eAdd all new files, delete all missing files. Executes \u003ccode\u003ehg addremove\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "addremove"
      },
      "index": {
        "description": "Add all new files delete all missing files Executes hg addremove",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "addremove",
        "normalized": "[FilePath]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:author",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor of this commit.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "author"
      },
      "index": {
        "description": "Author of this commit",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:authorEmail",
      "description": {
        "fct-descr": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "authorEmail"
      },
      "index": {
        "description": "Email address of the author",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "authorEmail",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:authorName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "authorName"
      },
      "index": {
        "description": "Name of the author",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "authorName",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eLong body of the commit message.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "Long body of the commit message",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "body",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eCommit the specified files or all outstanding changes. Executes \u003ccode\u003ehg commit\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "Commit the specified files or all outstanding changes Executes hg commit",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "commit",
        "normalized": "[FilePath]-\u003eString-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eString-\u003e[String]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:commitID",
      "description": {
        "fct-descr": "\u003cp\u003eCommit identifier\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "commitID"
      },
      "index": {
        "description": "Commit identifier",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "commitID",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:configAuthor",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor to be used for different VCS actions. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the default for the selected repository will be used.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe Author",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configAuthor"
      },
      "index": {
        "description": "Author to be used for different VCS actions If Nothing the default for the selected repository will be used",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "configAuthor",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:configCwd",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the main directory of the repository. E.g. for Git: the directory of the repository containing the \u003ccode\u003e.git\u003c/code\u003e config directory.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configCwd"
      },
      "index": {
        "description": "Path to the main directory of the repository E.g for Git the directory of the repository containing the git config directory",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "configCwd",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Cwd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:configEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eList of environment variables mappings passed to the underlying VCS executable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configEnvironment"
      },
      "index": {
        "description": "List of environment variables mappings passed to the underlying VCS executable",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "configEnvironment",
        "normalized": "[(String,String)]",
        "package": "vcswrapper",
        "partial": "Environment",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:configPath",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the vcs executable. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the PATH environment variable will be search for a matching executable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configPath"
      },
      "index": {
        "description": "Path to the vcs executable If Nothing the PATH environment variable will be search for matching executable",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "configPath",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:date",
      "description": {
        "fct-descr": "\u003cp\u003eDate this log entry was created.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "Date this log entry was created",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "date",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:email",
      "description": {
        "fct-descr": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "email"
      },
      "index": {
        "description": "Email address of the author",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "email",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:filePath",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#filePath",
        "fct-type": "function",
        "title": "filePath"
      },
      "index": {
        "description": "Retrieve the FilePath of any VCS Status",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "filePath",
        "normalized": "Status-\u003eFilePath",
        "package": "vcswrapper",
        "partial": "Path",
        "signature": "Status-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:isLocked",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eIsLocked\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e. For Git, this returns always \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e IsLocked",
        "fct-source": "src/VCSWrapper-Common-Types.html#isLocked",
        "fct-type": "function",
        "title": "isLocked"
      },
      "index": {
        "description": "Retrieve the IsLocked of any VCS Status For Git this returns always False",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "isLocked",
        "normalized": "Status-\u003eIsLocked",
        "package": "vcswrapper",
        "partial": "Locked",
        "signature": "Status-\u003eIsLocked"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:makeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e Config",
        "fct-type": "function",
        "title": "makeConfig"
      },
      "index": {
        "description": "Creates new Config",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "makeConfig",
        "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:makeConfigWithEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e with a list of environment variables.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e [(String, String)]-\u003e Config",
        "fct-type": "function",
        "title": "makeConfigWithEnvironment"
      },
      "index": {
        "description": "Creates new Config with list of environment variables",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "makeConfigWithEnvironment",
        "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig",
        "package": "vcswrapper",
        "partial": "Config With Environment",
        "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:mbBranch",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe Branchname\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "mbBranch"
      },
      "index": {
        "description": "Maybe Branchname",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "mbBranch",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:modification",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eModification\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e Modification",
        "fct-source": "src/VCSWrapper-Common-Types.html#modification",
        "fct-type": "function",
        "title": "modification"
      },
      "index": {
        "description": "Retrieve the Modification of any VCS Status",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "modification",
        "normalized": "Status-\u003eModification",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Status-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:pull",
      "description": {
        "fct-descr": "\u003cp\u003ePull changes from a remote repository to a local one. If a merge conflict is detected, the error\n    message is returned, otherwise 'Right ()' is returned. Executes \u003ccode\u003ehg pull\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx ()",
        "fct-source": "src/VCSWrapper-Mercurial.html#pull",
        "fct-type": "function",
        "title": "pull"
      },
      "index": {
        "description": "Pull changes from remote repository to local one If merge conflict is detected the error message is returned otherwise Right is returned Executes hg pull",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "pull",
        "normalized": "Ctx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Ctx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePush changesets from the local repository to the default destination.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx ()",
        "fct-source": "src/VCSWrapper-Mercurial.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Push changesets from the local repository to the default destination",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "push",
        "normalized": "Ctx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Ctx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:runVcs",
      "description": {
        "fct-descr": "\u003cp\u003eRun a VCS \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e and returns the result\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Config-\u003e Ctx t-\u003e IO t",
        "fct-type": "function",
        "title": "runVcs"
      },
      "index": {
        "description": "Run VCS Ctx from Config and returns the result",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "runVcs",
        "normalized": "Config-\u003eCtx a-\u003eIO a",
        "package": "vcswrapper",
        "partial": "Vcs",
        "signature": "Config-\u003eCtx t-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:simpleLog",
      "description": {
        "fct-descr": "\u003cp\u003eShow revision history of entire repository or files. Executes \u003ccode\u003ehg log\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String-\u003e Ctx [LogEntry]",
        "fct-type": "function",
        "title": "simpleLog"
      },
      "index": {
        "description": "Show revision history of entire repository or files Executes hg log",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "simpleLog",
        "normalized": "Maybe String-\u003eCtx[LogEntry]",
        "package": "vcswrapper",
        "partial": "Log",
        "signature": "Maybe String-\u003eCtx[LogEntry]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eShow changed files in the working directory as a list of \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e. Executes \u003ccode\u003ehg status\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx [Status]",
        "fct-source": "src/VCSWrapper-Mercurial.html#status",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "Show changed files in the working directory as list of Status Executes hg status",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "status",
        "normalized": "Ctx[Status]",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Ctx[Status]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:subject",
      "description": {
        "fct-descr": "\u003cp\u003eShort commit message.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "subject"
      },
      "index": {
        "description": "Short commit message",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "subject",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the repository's working directory to the specified changeset. If\n    no changeset is specified, update to the tip of the current named branch.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Mercurial",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String -\u003e Ctx ()",
        "fct-source": "src/VCSWrapper-Mercurial.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update the repository working directory to the specified changeset If no changeset is specified update to the tip of the current named branch",
        "hierarchy": "VCSWrapper Mercurial",
        "module": "VCSWrapper.Mercurial",
        "name": "update",
        "normalized": "Maybe String-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Maybe String-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides high level SVN functions like \u003ccode\u003ecommit\u003c/code\u003e, \u003ccode\u003echeckout\u003c/code\u003e, \u003ccode\u003eupdate\u003c/code\u003e and others.\n\u003c/p\u003e\u003cp\u003eAll functions of this module run in the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e monad, common to all VCS.\n On unexpected behavior, these functions will throw a \u003ccode\u003e\u003ca\u003eVCSException\u003c/a\u003e\u003c/code\u003e.\n All functions will be executed with options \u003ccode\u003e--non-interactive\u003c/code\u003e and \u003ccode\u003e--no-auth-cache\u003c/code\u003e set.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "module",
        "fct-source": "src/VCSWrapper-Svn.html",
        "fct-type": "module",
        "title": "Svn"
      },
      "index": {
        "description": "Provides high level SVN functions like commit checkout update and others All functions of this module run in the Ctx monad common to all VCS On unexpected behavior these functions will throw VCSException All functions will be executed with options non-interactive and no-auth-cache set",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Svn",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Svn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Author",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor to be passed to VCS commands where applicable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "data",
        "title": "Author"
      },
      "index": {
        "description": "Author to be passed to VCS commands where applicable",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration of the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e the VCS commands will be executed in.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Configuration of the Ctx the VCS commands will be executed in",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Config",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Ctx",
      "description": {
        "fct-descr": "\u003cp\u003eContext for all VCS commands.\n\u003c/p\u003e\u003cp\u003eE.g. to create a new Git repository use something like this:\n\u003c/p\u003e\u003cpre\u003eimport VCSWrapper.Git\nmyInitRepoFn = do\n    let config = makeConfig \"path/to/repo\" Nothing Nothing\n    runVcs config $ initDB False\n\u003c/pre\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "newtype",
        "fct-source": "src/VCSWrapper-Common-Types.html#Ctx",
        "fct-type": "newtype",
        "title": "Ctx"
      },
      "index": {
        "description": "Context for all VCS commands E.g to create new Git repository use something like this import VCSWrapper.Git myInitRepoFn do let config makeConfig path to repo Nothing Nothing runVcs config initDB False",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Ctx",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:IsLocked",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if this file is locked by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "type",
        "fct-source": "src/VCSWrapper-Common-Types.html#IsLocked",
        "fct-type": "type",
        "title": "IsLocked"
      },
      "index": {
        "description": "True if this file is locked by the VCS",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "IsLocked",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Is Locked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:LogEntry",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a log entry in the history managed by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "data",
        "title": "LogEntry"
      },
      "index": {
        "description": "Represents log entry in the history managed by the VCS",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "LogEntry",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Modification",
      "description": {
        "fct-descr": "\u003cp\u003eFlags to describe the state of a file.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "data",
        "title": "Modification"
      },
      "index": {
        "description": "Flags to describe the state of file",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Modification",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Modification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Status",
      "description": {
        "fct-descr": "\u003cp\u003eStatus of a file managed by the respective VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "Status of file managed by the respective VCS",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Status",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:VCSException",
      "description": {
        "fct-descr": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e-type will be thrown if a VCS command fails unexpectedly.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSException",
        "fct-type": "data",
        "title": "VCSException"
      },
      "index": {
        "description": "This Exception type will be thrown if VCS command fails unexpectedly",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "VCSException",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "VCSException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:VCSType",
      "description": {
        "fct-descr": "\u003cp\u003eAvailable VCS types implemented in this package.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "data",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "data",
        "title": "VCSType"
      },
      "index": {
        "description": "Available VCS types implemented in this package",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "VCSType",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "VCSType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Added",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been selected to be managed by the respective VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Added",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Added"
      },
      "index": {
        "description": "File has been selected to be managed by the respective VCS",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Added",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Added",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Author",
      "description": {
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Author",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "Author"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Config",
      "description": {
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Config",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Config",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Conflicting",
      "description": {
        "fct-descr": "\u003cp\u003eFile is in conflicting state. Manually resolving the conflict may be necessary.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Conflicting",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Conflicting"
      },
      "index": {
        "description": "File is in conflicting state Manually resolving the conflict may be necessary",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Conflicting",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Conflicting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Ctx",
      "description": {
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx (ReaderT Config IO a)",
        "fct-source": "src/VCSWrapper-Common-Types.html#Ctx",
        "fct-type": "function",
        "title": "Ctx"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Ctx",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Deleted",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been deleted.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Deleted",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Deleted"
      },
      "index": {
        "description": "File has been deleted",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Deleted",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:GIT",
      "description": {
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "GIT",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "GIT"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "GIT",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "GIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:GITStatus",
      "description": {
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "GITStatus FilePath Modification",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "function",
        "title": "GITStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "GITStatus",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "GITStatus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Ignored",
      "description": {
        "fct-descr": "\u003cp\u003eFile is ignored by VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Ignored",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Ignored"
      },
      "index": {
        "description": "File is ignored by VCS",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Ignored",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Ignored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:LogEntry",
      "description": {
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "LogEntry",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "LogEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "LogEntry",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Mercurial",
      "description": {
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Mercurial",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "Mercurial"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Mercurial",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Mercurial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Missing",
      "description": {
        "fct-descr": "\u003cp\u003eFile is missing.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Missing",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Missing"
      },
      "index": {
        "description": "File is missing",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Missing",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Modified",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been modified since last commit.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Modified",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Modified"
      },
      "index": {
        "description": "File has been modified since last commit",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Modified",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:None",
      "description": {
        "fct-descr": "\u003cp\u003eFile hasn't been modified.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "None",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "File hasn been modified",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "None",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Replaced",
      "description": {
        "fct-descr": "\u003cp\u003eFile has been replaced by a different file.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Replaced",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Replaced"
      },
      "index": {
        "description": "File has been replaced by different file",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Replaced",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Replaced",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:SVN",
      "description": {
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "SVN",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSType",
        "fct-type": "function",
        "title": "SVN"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "SVN",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "SVN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:SVNStatus",
      "description": {
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "SVNStatus FilePath Modification IsLocked",
        "fct-source": "src/VCSWrapper-Common-Types.html#Status",
        "fct-type": "function",
        "title": "SVNStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "SVNStatus",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "SVNStatus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Unknown",
      "description": {
        "fct-descr": "\u003cp\u003eState of file is unknown.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Unknown",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Unknown"
      },
      "index": {
        "description": "State of file is unknown",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Unknown",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Untracked",
      "description": {
        "fct-descr": "\u003cp\u003eFile is currently not known by the VCS.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Untracked",
        "fct-source": "src/VCSWrapper-Common-Types.html#Modification",
        "fct-type": "function",
        "title": "Untracked"
      },
      "index": {
        "description": "File is currently not known by the VCS",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "Untracked",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Untracked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:VCSException",
      "description": {
        "fct-descr": "\u003cp\u003eExit code -\u003e stdout -\u003e errout -\u003e \u003ccode\u003e\u003ca\u003econfigCwd\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e -\u003e List containing the executed command and its options\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "VCSException Int String String String [String]",
        "fct-source": "src/VCSWrapper-Common-Types.html#VCSException",
        "fct-type": "function",
        "title": "VCSException"
      },
      "index": {
        "description": "Exit code stdout errout configCwd of the Config List containing the executed command and its options",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "VCSException",
        "normalized": "VCSException Int String String String[String]",
        "package": "vcswrapper",
        "partial": "VCSException",
        "signature": "VCSException Int String String String[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:add",
      "description": {
        "fct-descr": "\u003cp\u003ePut files and directories under version control, scheduling them for addition to repository.\n    They will be added in next commit.. Executes \u003ccode\u003esvn add\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "Put files and directories under version control scheduling them for addition to repository They will be added in next commit Executes svn add",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "add",
        "normalized": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:author",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor of this commit.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "author"
      },
      "index": {
        "description": "Author of this commit",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "author",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:authorEmail",
      "description": {
        "fct-descr": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "authorEmail"
      },
      "index": {
        "description": "Email address of the author",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "authorEmail",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:authorName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#Author",
        "fct-type": "function",
        "title": "authorName"
      },
      "index": {
        "description": "Name of the author",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "authorName",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eLong body of the commit message.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "Long body of the commit message",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "body",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:checkout",
      "description": {
        "fct-descr": "\u003cp\u003eCheckout out a working copy from a repository. Executes \u003ccode\u003esvn checkout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "[(String, Maybe String)]-\u003e Maybe String-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "checkout"
      },
      "index": {
        "description": "Checkout out working copy from repository Executes svn checkout",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "checkout",
        "normalized": "[(String,Maybe String)]-\u003eMaybe String-\u003eMaybe String-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[(String,Maybe String)]-\u003eMaybe String-\u003eMaybe String-\u003e[String]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eSend changes from your working copy to the repository. Executes \u003ccode\u003esvn commit\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e String-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "Send changes from your working copy to the repository Executes svn commit",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "commit",
        "normalized": "[FilePath]-\u003eString-\u003eMaybe String-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eString-\u003eMaybe String-\u003e[String]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:commitID",
      "description": {
        "fct-descr": "\u003cp\u003eCommit identifier\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "commitID"
      },
      "index": {
        "description": "Commit identifier",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "commitID",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:configAuthor",
      "description": {
        "fct-descr": "\u003cp\u003eAuthor to be used for different VCS actions. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the default for the selected repository will be used.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe Author",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configAuthor"
      },
      "index": {
        "description": "Author to be used for different VCS actions If Nothing the default for the selected repository will be used",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "configAuthor",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:configCwd",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the main directory of the repository. E.g. for Git: the directory of the repository containing the \u003ccode\u003e.git\u003c/code\u003e config directory.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configCwd"
      },
      "index": {
        "description": "Path to the main directory of the repository E.g for Git the directory of the repository containing the git config directory",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "configCwd",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Cwd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:configEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eList of environment variables mappings passed to the underlying VCS executable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configEnvironment"
      },
      "index": {
        "description": "List of environment variables mappings passed to the underlying VCS executable",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "configEnvironment",
        "normalized": "[(String,String)]",
        "package": "vcswrapper",
        "partial": "Environment",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:configPath",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the vcs executable. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the PATH environment variable will be search for a matching executable.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#Config",
        "fct-type": "function",
        "title": "configPath"
      },
      "index": {
        "description": "Path to the vcs executable If Nothing the PATH environment variable will be search for matching executable",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "configPath",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:date",
      "description": {
        "fct-descr": "\u003cp\u003eDate this log entry was created.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "Date this log entry was created",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "date",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:email",
      "description": {
        "fct-descr": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "email"
      },
      "index": {
        "description": "Email address of the author",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "email",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:filePath",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e FilePath",
        "fct-source": "src/VCSWrapper-Common-Types.html#filePath",
        "fct-type": "function",
        "title": "filePath"
      },
      "index": {
        "description": "Retrieve the FilePath of any VCS Status",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "filePath",
        "normalized": "Status-\u003eFilePath",
        "package": "vcswrapper",
        "partial": "Path",
        "signature": "Status-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:getFilesInConflict",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all files of a conflict indicated by its associated filename. E.g. for file \u003ca\u003eTypes.hs\u003c/a\u003e\n    this might be \u003ca\u003eTypes.hs\u003c/a\u003e, \u003ca\u003eTypes.hs.r1\u003c/a\u003e, \u003ca\u003eTypes.hs.r2\u003c/a\u003e and \u003ca\u003eTypes.hs.mine\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "FilePath-\u003e Ctx [FilePath]",
        "fct-type": "function",
        "title": "getFilesInConflict"
      },
      "index": {
        "description": "Returns all files of conflict indicated by its associated filename E.g for file Types.hs this might be Types.hs Types.hs.r1 Types.hs.r2 and Types.hs.mine",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "getFilesInConflict",
        "normalized": "FilePath-\u003eCtx[FilePath]",
        "package": "vcswrapper",
        "partial": "Files In Conflict",
        "signature": "FilePath-\u003eCtx[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:isLocked",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eIsLocked\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e. For Git, this returns always \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e IsLocked",
        "fct-source": "src/VCSWrapper-Common-Types.html#isLocked",
        "fct-type": "function",
        "title": "isLocked"
      },
      "index": {
        "description": "Retrieve the IsLocked of any VCS Status For Git this returns always False",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "isLocked",
        "normalized": "Status-\u003eIsLocked",
        "package": "vcswrapper",
        "partial": "Locked",
        "signature": "Status-\u003eIsLocked"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:lock",
      "description": {
        "fct-descr": "\u003cp\u003eLock working copy paths or URLs in the repository, so that no other user can commit changes to\n    them. Executes \u003ccode\u003esvn lock\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "lock"
      },
      "index": {
        "description": "Lock working copy paths or URLs in the repository so that no other user can commit changes to them Executes svn lock",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "lock",
        "normalized": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:makeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e Config",
        "fct-type": "function",
        "title": "makeConfig"
      },
      "index": {
        "description": "Creates new Config",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "makeConfig",
        "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig",
        "package": "vcswrapper",
        "partial": "Config",
        "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:makeConfigWithEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e with a list of environment variables.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e [(String, String)]-\u003e Config",
        "fct-type": "function",
        "title": "makeConfigWithEnvironment"
      },
      "index": {
        "description": "Creates new Config with list of environment variables",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "makeConfigWithEnvironment",
        "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig",
        "package": "vcswrapper",
        "partial": "Config With Environment",
        "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:mbBranch",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe Branchname\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "mbBranch"
      },
      "index": {
        "description": "Maybe Branchname",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "mbBranch",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:mergeHeadToRevision",
      "description": {
        "fct-descr": "\u003cp\u003eReverts working copy to given revision. Executes \u003ccode\u003esvn merge -rHEAD:$revision .\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Integer-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "mergeHeadToRevision"
      },
      "index": {
        "description": "Reverts working copy to given revision Executes svn merge rHEAD revision",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "mergeHeadToRevision",
        "normalized": "Integer-\u003eMaybe String-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "Head To Revision",
        "signature": "Integer-\u003eMaybe String-\u003e[String]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:modification",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eModification\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Status -\u003e Modification",
        "fct-source": "src/VCSWrapper-Common-Types.html#modification",
        "fct-type": "function",
        "title": "modification"
      },
      "index": {
        "description": "Retrieve the Modification of any VCS Status",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "modification",
        "normalized": "Status-\u003eModification",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Status-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:resolved",
      "description": {
        "fct-descr": "\u003cp\u003eRemove \u003ccode\u003econflicted\u003c/code\u003e state on working copy files or directories. Executes \u003ccode\u003esvn resolved\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "resolved"
      },
      "index": {
        "description": "Remove conflicted state on working copy files or directories Executes svn resolved",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "resolved",
        "normalized": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:runVcs",
      "description": {
        "fct-descr": "\u003cp\u003eRun a VCS \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e and returns the result\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Config-\u003e Ctx t-\u003e IO t",
        "fct-type": "function",
        "title": "runVcs"
      },
      "index": {
        "description": "Run VCS Ctx from Config and returns the result",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "runVcs",
        "normalized": "Config-\u003eCtx a-\u003eIO a",
        "package": "vcswrapper",
        "partial": "Vcs",
        "signature": "Config-\u003eCtx t-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:simpleLog",
      "description": {
        "fct-descr": "\u003cp\u003eGet the log messages for the current working copy. Executes \u003ccode\u003esvn log\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx [LogEntry]",
        "fct-source": "src/VCSWrapper-Svn.html#simpleLog",
        "fct-type": "function",
        "title": "simpleLog"
      },
      "index": {
        "description": "Get the log messages for the current working copy Executes svn log",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "simpleLog",
        "normalized": "Ctx[LogEntry]",
        "package": "vcswrapper",
        "partial": "Log",
        "signature": "Ctx[LogEntry]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eGet the status of working copy files and directories. Executes \u003ccode\u003esvn status\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Ctx [Status]",
        "fct-source": "src/VCSWrapper-Svn.html#status",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "Get the status of working copy files and directories Executes svn status",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "status",
        "normalized": "Ctx[Status]",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Ctx[Status]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:subject",
      "description": {
        "fct-descr": "\u003cp\u003eShort commit message.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "String",
        "fct-source": "src/VCSWrapper-Common-Types.html#LogEntry",
        "fct-type": "function",
        "title": "subject"
      },
      "index": {
        "description": "Short commit message",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "subject",
        "normalized": "",
        "package": "vcswrapper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:unlock",
      "description": {
        "fct-descr": "\u003cp\u003eUnlock working copy paths or URLs. Executes \u003ccode\u003esvn unlock\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "[FilePath]-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "unlock"
      },
      "index": {
        "description": "Unlock working copy paths or URLs Executes svn unlock",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "unlock",
        "normalized": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eBring changes from the repository into the working copy. Executes \u003ccode\u003esvn update\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "VCSWrapper.Svn",
        "fct-package": "vcswrapper",
        "fct-signature": "Maybe String-\u003e [String]-\u003e Ctx ()",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Bring changes from the repository into the working copy Executes svn update",
        "hierarchy": "VCSWrapper Svn",
        "module": "VCSWrapper.Svn",
        "name": "update",
        "normalized": "Maybe String-\u003e[String]-\u003eCtx()",
        "package": "vcswrapper",
        "partial": "",
        "signature": "Maybe String-\u003e[String]-\u003eCtx()"
      }
    }
  }
]