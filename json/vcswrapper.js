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
        "word": "vcswrapper"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports types and functions common to all VCS.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "VCSWrapper.Common",
          "name": "Common",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports types and functions common to all VCS",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Common",
          "package": "vcswrapper",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthor to be passed to VCS commands where applicable.\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "Author",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Author",
          "type": "data"
        },
        "index": {
          "description": "Author to be passed to VCS commands where applicable",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Author",
          "package": "vcswrapper",
          "partial": "Author",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e the VCS commands will be executed in.\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "Config",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the Ctx the VCS commands will be executed in",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Config",
          "package": "vcswrapper",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext for all VCS commands.\n\u003c/p\u003e\u003cp\u003eE.g. to create a new Git repository use something like this:\n\u003c/p\u003e\u003cpre\u003eimport VCSWrapper.Git\nmyInitRepoFn = do\n    let config = makeConfig \"path/to/repo\" Nothing Nothing\n    runVcs config $ initDB False\n\u003c/pre\u003e",
          "module": "VCSWrapper.Common",
          "name": "Ctx",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "Context for all VCS commands E.g to create new Git repository use something like this import VCSWrapper.Git myInitRepoFn do let config makeConfig path to repo Nothing Nothing runVcs config initDB False",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Ctx",
          "package": "vcswrapper",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if this file is locked by the VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "IsLocked",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#IsLocked",
          "type": "type"
        },
        "index": {
          "description": "True if this file is locked by the VCS",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "IsLocked",
          "package": "vcswrapper",
          "partial": "Is Locked",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:IsLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a log entry in the history managed by the VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "LogEntry",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "data"
        },
        "index": {
          "description": "Represents log entry in the history managed by the VCS",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "LogEntry",
          "package": "vcswrapper",
          "partial": "Log Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:LogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to describe the state of a file.\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "Modification",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "data"
        },
        "index": {
          "description": "Flags to describe the state of file",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Modification",
          "package": "vcswrapper",
          "partial": "Modification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of a file managed by the respective VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "Status",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Status",
          "type": "data"
        },
        "index": {
          "description": "Status of file managed by the respective VCS",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Status",
          "package": "vcswrapper",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e-type will be thrown if a VCS command fails unexpectedly.\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "VCSException",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#VCSException",
          "type": "data"
        },
        "index": {
          "description": "This Exception type will be thrown if VCS command fails unexpectedly",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "VCSException",
          "package": "vcswrapper",
          "partial": "VCSException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:VCSException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable VCS types implemented in this package.\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "VCSType",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#VCSType",
          "type": "data"
        },
        "index": {
          "description": "Available VCS types implemented in this package",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "VCSType",
          "package": "vcswrapper",
          "partial": "VCSType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#t:VCSType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile has been selected to be managed by the respective VCS.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Added",
          "package": "vcswrapper",
          "signature": "Added",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Added\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Added\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Added\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Added\"]"
        },
        "index": {
          "description": "File has been selected to be managed by the respective VCS",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Added",
          "package": "vcswrapper",
          "partial": "Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Added"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Author",
          "package": "vcswrapper",
          "signature": "Author",
          "source": "src/VCSWrapper-Common-Types.html#Author",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Author\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Author\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Author\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Author\"]"
        },
        "index": {
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Author",
          "package": "vcswrapper",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Config",
          "package": "vcswrapper",
          "signature": "Config",
          "source": "src/VCSWrapper-Common-Types.html#Config",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Config\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Config\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Config\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Config\"]"
        },
        "index": {
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Config",
          "package": "vcswrapper",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile is in conflicting state. Manually resolving the conflict may be necessary.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Conflicting",
          "package": "vcswrapper",
          "signature": "Conflicting",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Conflicting\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Conflicting\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Conflicting\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Conflicting\"]"
        },
        "index": {
          "description": "File is in conflicting state Manually resolving the conflict may be necessary",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Conflicting",
          "package": "vcswrapper",
          "partial": "Conflicting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Conflicting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Ctx",
          "package": "vcswrapper",
          "signature": "Ctx (ReaderT Config IO a)",
          "source": "src/VCSWrapper-Common-Types.html#Ctx",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Ctx\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Ctx\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Ctx\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Ctx\"]"
        },
        "index": {
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Ctx",
          "package": "vcswrapper",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile has been deleted.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Deleted",
          "package": "vcswrapper",
          "signature": "Deleted",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Deleted\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Deleted\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Deleted\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Deleted\"]"
        },
        "index": {
          "description": "File has been deleted",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Deleted",
          "package": "vcswrapper",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "GIT",
          "package": "vcswrapper",
          "signature": "GIT",
          "source": "src/VCSWrapper-Common-Types.html#VCSType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:GIT\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:GIT\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:GIT\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:GIT\"]"
        },
        "index": {
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "GIT",
          "package": "vcswrapper",
          "partial": "GIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:GIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "GITStatus",
          "package": "vcswrapper",
          "signature": "GITStatus FilePath Modification",
          "source": "src/VCSWrapper-Common-Types.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:GITStatus\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:GITStatus\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:GITStatus\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:GITStatus\"]"
        },
        "index": {
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "GITStatus",
          "package": "vcswrapper",
          "partial": "GITStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:GITStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile is ignored by VCS.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Ignored",
          "package": "vcswrapper",
          "signature": "Ignored",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Ignored\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Ignored\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Ignored\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Ignored\"]"
        },
        "index": {
          "description": "File is ignored by VCS",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Ignored",
          "package": "vcswrapper",
          "partial": "Ignored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Ignored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "LogEntry",
          "package": "vcswrapper",
          "signature": "LogEntry",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:LogEntry\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:LogEntry\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:LogEntry\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:LogEntry\"]"
        },
        "index": {
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "LogEntry",
          "package": "vcswrapper",
          "partial": "Log Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:LogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Mercurial",
          "package": "vcswrapper",
          "signature": "Mercurial",
          "source": "src/VCSWrapper-Common-Types.html#VCSType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Mercurial\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Mercurial\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Mercurial\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Mercurial\"]"
        },
        "index": {
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Mercurial",
          "package": "vcswrapper",
          "partial": "Mercurial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Mercurial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile is missing.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Missing",
          "package": "vcswrapper",
          "signature": "Missing",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Missing\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Missing\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Missing\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Missing\"]"
        },
        "index": {
          "description": "File is missing",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Missing",
          "package": "vcswrapper",
          "partial": "Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Missing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile has been modified since last commit.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Modified",
          "package": "vcswrapper",
          "signature": "Modified",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Modified\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Modified\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Modified\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Modified\"]"
        },
        "index": {
          "description": "File has been modified since last commit",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Modified",
          "package": "vcswrapper",
          "partial": "Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile hasn't been modified.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "None",
          "package": "vcswrapper",
          "signature": "None",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:None\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:None\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:None\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:None\"]"
        },
        "index": {
          "description": "File hasn been modified",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "None",
          "package": "vcswrapper",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile has been replaced by a different file.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Replaced",
          "package": "vcswrapper",
          "signature": "Replaced",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Replaced\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Replaced\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Replaced\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Replaced\"]"
        },
        "index": {
          "description": "File has been replaced by different file",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Replaced",
          "package": "vcswrapper",
          "partial": "Replaced",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Replaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "SVN",
          "package": "vcswrapper",
          "signature": "SVN",
          "source": "src/VCSWrapper-Common-Types.html#VCSType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:SVN\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:SVN\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:SVN\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:SVN\"]"
        },
        "index": {
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "SVN",
          "package": "vcswrapper",
          "partial": "SVN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:SVN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "SVNStatus",
          "package": "vcswrapper",
          "signature": "SVNStatus FilePath Modification IsLocked",
          "source": "src/VCSWrapper-Common-Types.html#Status",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:SVNStatus\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:SVNStatus\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:SVNStatus\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:SVNStatus\"]"
        },
        "index": {
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "SVNStatus",
          "package": "vcswrapper",
          "partial": "SVNStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:SVNStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of file is unknown.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Unknown",
          "package": "vcswrapper",
          "signature": "Unknown",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Unknown\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Unknown\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Unknown\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Unknown\"]"
        },
        "index": {
          "description": "State of file is unknown",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Unknown",
          "package": "vcswrapper",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile is currently not known by the VCS.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "Untracked",
          "package": "vcswrapper",
          "signature": "Untracked",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Untracked\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:Untracked\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:Untracked\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:Untracked\"]"
        },
        "index": {
          "description": "File is currently not known by the VCS",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "Untracked",
          "package": "vcswrapper",
          "partial": "Untracked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:Untracked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExit code -\u003e stdout -\u003e errout -\u003e \u003ccode\u003e\u003ca\u003econfigCwd\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e -\u003e List containing the executed command and its options\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "VCSException",
          "package": "vcswrapper",
          "signature": "VCSException Int String String String [String]",
          "source": "src/VCSWrapper-Common-Types.html#VCSException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:VCSException\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:VCSException\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:VCSException\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:VCSException\"]"
        },
        "index": {
          "description": "Exit code stdout errout configCwd of the Config List containing the executed command and its options",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "VCSException",
          "normalized": "VCSException Int String String String[String]",
          "package": "vcswrapper",
          "partial": "VCSException",
          "signature": "VCSException Int String String String[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:VCSException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthor of this commit.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "author",
          "package": "vcswrapper",
          "signature": "String",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:author\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:author\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:author\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:author\"]"
        },
        "index": {
          "description": "Author of this commit",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "author",
          "package": "vcswrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "authorEmail",
          "package": "vcswrapper",
          "signature": "Maybe String",
          "source": "src/VCSWrapper-Common-Types.html#Author",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:authorEmail\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:authorEmail\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:authorEmail\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:authorEmail\"]"
        },
        "index": {
          "description": "Email address of the author",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "authorEmail",
          "package": "vcswrapper",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:authorEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the author.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "authorName",
          "package": "vcswrapper",
          "signature": "String",
          "source": "src/VCSWrapper-Common-Types.html#Author",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:authorName\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:authorName\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:authorName\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:authorName\"]"
        },
        "index": {
          "description": "Name of the author",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "authorName",
          "package": "vcswrapper",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:authorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong body of the commit message.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "body",
          "package": "vcswrapper",
          "signature": "String",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:body\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:body\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:body\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:body\"]"
        },
        "index": {
          "description": "Long body of the commit message",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "body",
          "package": "vcswrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit identifier\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "commitID",
          "package": "vcswrapper",
          "signature": "String",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:commitID\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:commitID\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:commitID\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:commitID\"]"
        },
        "index": {
          "description": "Commit identifier",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "commitID",
          "package": "vcswrapper",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:commitID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthor to be used for different VCS actions. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the default for the selected repository will be used.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "configAuthor",
          "package": "vcswrapper",
          "signature": "Maybe Author",
          "source": "src/VCSWrapper-Common-Types.html#Config",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configAuthor\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:configAuthor\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:configAuthor\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:configAuthor\"]"
        },
        "index": {
          "description": "Author to be used for different VCS actions If Nothing the default for the selected repository will be used",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "configAuthor",
          "package": "vcswrapper",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the main directory of the repository. E.g. for Git: the directory of the repository containing the \u003ccode\u003e.git\u003c/code\u003e config directory.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "configCwd",
          "package": "vcswrapper",
          "signature": "Maybe FilePath",
          "source": "src/VCSWrapper-Common-Types.html#Config",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configCwd\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:configCwd\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:configCwd\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:configCwd\"]"
        },
        "index": {
          "description": "Path to the main directory of the repository E.g for Git the directory of the repository containing the git config directory",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "configCwd",
          "package": "vcswrapper",
          "partial": "Cwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configCwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of environment variables mappings passed to the underlying VCS executable.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "configEnvironment",
          "package": "vcswrapper",
          "signature": "[(String, String)]",
          "source": "src/VCSWrapper-Common-Types.html#Config",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configEnvironment\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:configEnvironment\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:configEnvironment\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:configEnvironment\"]"
        },
        "index": {
          "description": "List of environment variables mappings passed to the underlying VCS executable",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "configEnvironment",
          "normalized": "[(String,String)]",
          "package": "vcswrapper",
          "partial": "Environment",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the vcs executable. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the PATH environment variable will be search for a matching executable.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "configPath",
          "package": "vcswrapper",
          "signature": "Maybe FilePath",
          "source": "src/VCSWrapper-Common-Types.html#Config",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configPath\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:configPath\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:configPath\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:configPath\"]"
        },
        "index": {
          "description": "Path to the vcs executable If Nothing the PATH environment variable will be search for matching executable",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "configPath",
          "package": "vcswrapper",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:configPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate this log entry was created.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "date",
          "package": "vcswrapper",
          "signature": "String",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:date\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:date\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:date\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:date\"]"
        },
        "index": {
          "description": "Date this log entry was created",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "date",
          "package": "vcswrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmail address of the author.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "email",
          "package": "vcswrapper",
          "signature": "String",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:email\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:email\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:email\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:email\"]"
        },
        "index": {
          "description": "Email address of the author",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "email",
          "package": "vcswrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal function to execute a VCS command\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "exec",
          "package": "vcswrapper",
          "signature": "String-\u003e [String]-\u003e [(String, String)]-\u003e String-\u003e (Config -\u003e Maybe FilePath)-\u003e Ctx (Either VCSException String)",
          "type": "function"
        },
        "index": {
          "description": "Internal function to execute VCS command",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "exec",
          "normalized": "String-\u003e[String]-\u003e[(String,String)]-\u003eString-\u003e(Config-\u003eMaybe FilePath)-\u003eCtx(Either VCSException String)",
          "package": "vcswrapper",
          "signature": "String-\u003e[String]-\u003e[(String,String)]-\u003eString-\u003e(Config-\u003eMaybe FilePath)-\u003eCtx(Either VCSException String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "filePath",
          "package": "vcswrapper",
          "signature": "Status -\u003e FilePath",
          "source": "src/VCSWrapper-Common-Types.html#filePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:filePath\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:filePath\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:filePath\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:filePath\"]"
        },
        "index": {
          "description": "Retrieve the FilePath of any VCS Status",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "filePath",
          "normalized": "Status-\u003eFilePath",
          "package": "vcswrapper",
          "partial": "Path",
          "signature": "Status-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:filePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eIsLocked\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e. For Git, this returns always \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "isLocked",
          "package": "vcswrapper",
          "signature": "Status -\u003e IsLocked",
          "source": "src/VCSWrapper-Common-Types.html#isLocked",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:isLocked\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:isLocked\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:isLocked\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:isLocked\"]"
        },
        "index": {
          "description": "Retrieve the IsLocked of any VCS Status For Git this returns always False",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "isLocked",
          "normalized": "Status-\u003eIsLocked",
          "package": "vcswrapper",
          "partial": "Locked",
          "signature": "Status-\u003eIsLocked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:isLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "makeConfig",
          "package": "vcswrapper",
          "signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e Config",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:makeConfig\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:makeConfig\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:makeConfig\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:makeConfig\"]"
        },
        "index": {
          "description": "Creates new Config",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "makeConfig",
          "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig",
          "package": "vcswrapper",
          "partial": "Config",
          "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003eConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:makeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e with a list of environment variables.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "makeConfigWithEnvironment",
          "package": "vcswrapper",
          "signature": "Maybe FilePath-\u003e Maybe FilePath-\u003e Maybe Author-\u003e [(String, String)]-\u003e Config",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:makeConfigWithEnvironment\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:makeConfigWithEnvironment\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:makeConfigWithEnvironment\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:makeConfigWithEnvironment\"]"
        },
        "index": {
          "description": "Creates new Config with list of environment variables",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "makeConfigWithEnvironment",
          "normalized": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig",
          "package": "vcswrapper",
          "partial": "Config With Environment",
          "signature": "Maybe FilePath-\u003eMaybe FilePath-\u003eMaybe Author-\u003e[(String,String)]-\u003eConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:makeConfigWithEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe Branchname\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "mbBranch",
          "package": "vcswrapper",
          "signature": "Maybe String",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:mbBranch\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:mbBranch\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:mbBranch\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:mbBranch\"]"
        },
        "index": {
          "description": "Maybe Branchname",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "mbBranch",
          "package": "vcswrapper",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:mbBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eModification\u003c/a\u003e\u003c/code\u003e of any VCS \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "modification",
          "package": "vcswrapper",
          "signature": "Status -\u003e Modification",
          "source": "src/VCSWrapper-Common-Types.html#modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:modification\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:modification\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:modification\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:modification\"]"
        },
        "index": {
          "description": "Retrieve the Modification of any VCS Status",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "modification",
          "normalized": "Status-\u003eModification",
          "package": "vcswrapper",
          "signature": "Status-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a VCS \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e and returns the result\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "runVcs",
          "package": "vcswrapper",
          "signature": "Config-\u003e Ctx t-\u003e IO t",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:runVcs\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:runVcs\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:runVcs\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:runVcs\"]"
        },
        "index": {
          "description": "Run VCS Ctx from Config and returns the result",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "runVcs",
          "normalized": "Config-\u003eCtx a-\u003eIO a",
          "package": "vcswrapper",
          "partial": "Vcs",
          "signature": "Config-\u003eCtx t-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:runVcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort commit message.\n\u003c/p\u003e",
          "module": "[\"VCSWrapper.Common\",\"VCSWrapper.Git\",\"VCSWrapper.Mercurial\",\"VCSWrapper.Svn\"]",
          "name": "subject",
          "package": "vcswrapper",
          "signature": "String",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:subject\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:subject\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:subject\",\"http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:subject\"]"
        },
        "index": {
          "description": "Short commit message",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "subject",
          "package": "vcswrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal function to execute a VCS command\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "vcsExec",
          "package": "vcswrapper",
          "signature": "String-\u003e String-\u003e [String]-\u003e [(String, String)]-\u003e Ctx (Either VCSException String)",
          "type": "function"
        },
        "index": {
          "description": "Internal function to execute VCS command",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "vcsExec",
          "normalized": "String-\u003eString-\u003e[String]-\u003e[(String,String)]-\u003eCtx(Either VCSException String)",
          "package": "vcswrapper",
          "partial": "Exec",
          "signature": "String-\u003eString-\u003e[String]-\u003e[(String,String)]-\u003eCtx(Either VCSException String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:vcsExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal function to execute a VCS command. Throws an exception if the command fails.\n\u003c/p\u003e",
          "module": "VCSWrapper.Common",
          "name": "vcsExecThrowingOnError",
          "package": "vcswrapper",
          "signature": "String-\u003e String-\u003e [String]-\u003e [(String, String)]-\u003e Ctx String",
          "type": "function"
        },
        "index": {
          "description": "Internal function to execute VCS command Throws an exception if the command fails",
          "hierarchy": "VCSWrapper Common",
          "module": "VCSWrapper.Common",
          "name": "vcsExecThrowingOnError",
          "normalized": "String-\u003eString-\u003e[String]-\u003e[(String,String)]-\u003eCtx String",
          "package": "vcswrapper",
          "partial": "Exec Throwing On Error",
          "signature": "String-\u003eString-\u003e[String]-\u003e[(String,String)]-\u003eCtx String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Common.html#v:vcsExecThrowingOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides high-level Git functions like \u003ccode\u003ecommit\u003c/code\u003e, \u003ccode\u003echeckout\u003c/code\u003e, \u003ccode\u003estatus\u003c/code\u003e, \u003ccode\u003elog\u003c/code\u003e,...\n\u003c/p\u003e\u003cp\u003eAll functions of this module run in the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e monad, common to all VCS.\n On unexpected behavior, these functions will throw a \u003ccode\u003e\u003ca\u003eVCSException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "VCSWrapper.Git",
          "name": "Git",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Git.html",
          "type": "module"
        },
        "index": {
          "description": "Provides high-level Git functions like commit checkout status log All functions of this module run in the Ctx monad common to all VCS On unexpected behavior these functions will throw VCSException",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "Git",
          "package": "vcswrapper",
          "partial": "Git",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthor to be passed to VCS commands where applicable.\n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "Author",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Author",
          "type": "data"
        },
        "index": {
          "description": "Author to be passed to VCS commands where applicable",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "Author",
          "package": "vcswrapper",
          "partial": "Author",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e the VCS commands will be executed in.\n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "Config",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the Ctx the VCS commands will be executed in",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "Config",
          "package": "vcswrapper",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext for all VCS commands.\n\u003c/p\u003e\u003cp\u003eE.g. to create a new Git repository use something like this:\n\u003c/p\u003e\u003cpre\u003eimport VCSWrapper.Git\nmyInitRepoFn = do\n    let config = makeConfig \"path/to/repo\" Nothing Nothing\n    runVcs config $ initDB False\n\u003c/pre\u003e",
          "module": "VCSWrapper.Git",
          "name": "Ctx",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "Context for all VCS commands E.g to create new Git repository use something like this import VCSWrapper.Git myInitRepoFn do let config makeConfig path to repo Nothing Nothing runVcs config initDB False",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "Ctx",
          "package": "vcswrapper",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if this file is locked by the VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "IsLocked",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#IsLocked",
          "type": "type"
        },
        "index": {
          "description": "True if this file is locked by the VCS",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "IsLocked",
          "package": "vcswrapper",
          "partial": "Is Locked",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:IsLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a log entry in the history managed by the VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "LogEntry",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "data"
        },
        "index": {
          "description": "Represents log entry in the history managed by the VCS",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "LogEntry",
          "package": "vcswrapper",
          "partial": "Log Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:LogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to describe the state of a file.\n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "Modification",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "data"
        },
        "index": {
          "description": "Flags to describe the state of file",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "Modification",
          "package": "vcswrapper",
          "partial": "Modification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of a file managed by the respective VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "Status",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Status",
          "type": "data"
        },
        "index": {
          "description": "Status of file managed by the respective VCS",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "Status",
          "package": "vcswrapper",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e-type will be thrown if a VCS command fails unexpectedly.\n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "VCSException",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#VCSException",
          "type": "data"
        },
        "index": {
          "description": "This Exception type will be thrown if VCS command fails unexpectedly",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "VCSException",
          "package": "vcswrapper",
          "partial": "VCSException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:VCSException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable VCS types implemented in this package.\n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "VCSType",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#VCSType",
          "type": "data"
        },
        "index": {
          "description": "Available VCS types implemented in this package",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "VCSType",
          "package": "vcswrapper",
          "partial": "VCSType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#t:VCSType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd files to the index. Executes \u003ccode\u003egit add\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "add",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Add files to the index Executes git add",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "add",
          "normalized": "[FilePath]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheckout the index to some commit ID. Executes \u003ccode\u003egit checkout\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "checkout",
          "package": "vcswrapper",
          "signature": "Maybe String-\u003e Maybe String-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Checkout the index to some commit ID Executes git checkout",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "checkout",
          "normalized": "Maybe String-\u003eMaybe String-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "Maybe String-\u003eMaybe String-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:checkout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit the current index or the specified files to the repository. Executes \u003ccode\u003egit commit\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "commit",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e Maybe (String, String)-\u003e String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Commit the current index or the specified files to the repository Executes git commit",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "commit",
          "normalized": "[FilePath]-\u003eMaybe(String,String)-\u003eString-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eMaybe(String,String)-\u003eString-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new git repository. Executes \u003ccode\u003egit init\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "initDB",
          "package": "vcswrapper",
          "signature": "Bool-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Initialize new git repository Executes git init",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "initDB",
          "normalized": "Bool-\u003eCtx()",
          "package": "vcswrapper",
          "partial": "DB",
          "signature": "Bool-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:initDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all local branches. Executes \u003ccode\u003egit branch\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "localBranches",
          "package": "vcswrapper",
          "signature": "Ctx (String, [String])",
          "type": "function"
        },
        "index": {
          "description": "Get all local branches Executes git branch",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "localBranches",
          "normalized": "Ctx(String,[String])",
          "package": "vcswrapper",
          "partial": "Branches",
          "signature": "Ctx(String,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:localBranches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull changes from the remote as configured in the git configuration. If a merge conflict\n    is detected, the error message is returned, otherwise 'Right ()' is returned.\n    Executes \u003ccode\u003egit pull\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "pull",
          "package": "vcswrapper",
          "signature": "Ctx (Either String ())",
          "source": "src/VCSWrapper-Git.html#pull",
          "type": "function"
        },
        "index": {
          "description": "Pull changes from the remote as configured in the git configuration If merge conflict is detected the error message is returned otherwise Right is returned Executes git pull",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "pull",
          "normalized": "Ctx(Either String())",
          "package": "vcswrapper",
          "signature": "Ctx(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:pull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush changes to the remote as configured in the git configuration. Executes \u003ccode\u003egit push\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "push",
          "package": "vcswrapper",
          "signature": "Ctx ()",
          "source": "src/VCSWrapper-Git.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push changes to the remote as configured in the git configuration Executes git push",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "push",
          "normalized": "Ctx()",
          "package": "vcswrapper",
          "signature": "Ctx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all remotes. Executes \u003ccode\u003egit remote\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "remote",
          "package": "vcswrapper",
          "signature": "Ctx [String]",
          "source": "src/VCSWrapper-Git.html#remote",
          "type": "function"
        },
        "index": {
          "description": "Get all remotes Executes git remote",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "remote",
          "normalized": "Ctx[String]",
          "package": "vcswrapper",
          "signature": "Ctx[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:remote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRev-parse a revision. Executes \u003ccode\u003egit rev-parse\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "revparse",
          "package": "vcswrapper",
          "signature": "String-\u003e Ctx String",
          "type": "function"
        },
        "index": {
          "description": "Rev-parse revision Executes git rev-parse",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "revparse",
          "normalized": "String-\u003eCtx String",
          "package": "vcswrapper",
          "signature": "String-\u003eCtx String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:revparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove files from the index and the working directory. Executes \u003ccode\u003egit rm\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "rm",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Remove files from the index and the working directory Executes git rm",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "rm",
          "normalized": "[FilePath]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all commit messages. Executes \u003ccode\u003egit log\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "simpleLog",
          "package": "vcswrapper",
          "signature": "Maybe String-\u003e Ctx [LogEntry]",
          "type": "function"
        },
        "index": {
          "description": "Get all commit messages Executes git log",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "simpleLog",
          "normalized": "Maybe String-\u003eCtx[LogEntry]",
          "package": "vcswrapper",
          "partial": "Log",
          "signature": "Maybe String-\u003eCtx[LogEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:simpleLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn status of the repository as a list of \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e. Executes \u003ccode\u003egit status\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Git",
          "name": "status",
          "package": "vcswrapper",
          "signature": "Ctx [Status]",
          "source": "src/VCSWrapper-Git.html#status",
          "type": "function"
        },
        "index": {
          "description": "Return status of the repository as list of Status Executes git status",
          "hierarchy": "VCSWrapper Git",
          "module": "VCSWrapper.Git",
          "name": "status",
          "normalized": "Ctx[Status]",
          "package": "vcswrapper",
          "signature": "Ctx[Status]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Git.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "VCSWrapper.Mercurial",
          "name": "Mercurial",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Mercurial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "Mercurial",
          "package": "vcswrapper",
          "partial": "Mercurial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthor to be passed to VCS commands where applicable.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "Author",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Author",
          "type": "data"
        },
        "index": {
          "description": "Author to be passed to VCS commands where applicable",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "Author",
          "package": "vcswrapper",
          "partial": "Author",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e the VCS commands will be executed in.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "Config",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the Ctx the VCS commands will be executed in",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "Config",
          "package": "vcswrapper",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext for all VCS commands.\n\u003c/p\u003e\u003cp\u003eE.g. to create a new Git repository use something like this:\n\u003c/p\u003e\u003cpre\u003eimport VCSWrapper.Git\nmyInitRepoFn = do\n    let config = makeConfig \"path/to/repo\" Nothing Nothing\n    runVcs config $ initDB False\n\u003c/pre\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "Ctx",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "Context for all VCS commands E.g to create new Git repository use something like this import VCSWrapper.Git myInitRepoFn do let config makeConfig path to repo Nothing Nothing runVcs config initDB False",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "Ctx",
          "package": "vcswrapper",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if this file is locked by the VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "IsLocked",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#IsLocked",
          "type": "type"
        },
        "index": {
          "description": "True if this file is locked by the VCS",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "IsLocked",
          "package": "vcswrapper",
          "partial": "Is Locked",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:IsLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a log entry in the history managed by the VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "LogEntry",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "data"
        },
        "index": {
          "description": "Represents log entry in the history managed by the VCS",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "LogEntry",
          "package": "vcswrapper",
          "partial": "Log Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:LogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to describe the state of a file.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "Modification",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "data"
        },
        "index": {
          "description": "Flags to describe the state of file",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "Modification",
          "package": "vcswrapper",
          "partial": "Modification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of a file managed by the respective VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "Status",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Status",
          "type": "data"
        },
        "index": {
          "description": "Status of file managed by the respective VCS",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "Status",
          "package": "vcswrapper",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e-type will be thrown if a VCS command fails unexpectedly.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "VCSException",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#VCSException",
          "type": "data"
        },
        "index": {
          "description": "This Exception type will be thrown if VCS command fails unexpectedly",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "VCSException",
          "package": "vcswrapper",
          "partial": "VCSException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:VCSException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable VCS types implemented in this package.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "VCSType",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#VCSType",
          "type": "data"
        },
        "index": {
          "description": "Available VCS types implemented in this package",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "VCSType",
          "package": "vcswrapper",
          "partial": "VCSType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#t:VCSType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd all new files, delete all missing files. Executes \u003ccode\u003ehg addremove\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "addremove",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Add all new files delete all missing files Executes hg addremove",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "addremove",
          "normalized": "[FilePath]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:addremove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit the specified files or all outstanding changes. Executes \u003ccode\u003ehg commit\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "commit",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Commit the specified files or all outstanding changes Executes hg commit",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "commit",
          "normalized": "[FilePath]-\u003eString-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eString-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull changes from a remote repository to a local one. If a merge conflict is detected, the error\n    message is returned, otherwise 'Right ()' is returned. Executes \u003ccode\u003ehg pull\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "pull",
          "package": "vcswrapper",
          "signature": "Ctx ()",
          "source": "src/VCSWrapper-Mercurial.html#pull",
          "type": "function"
        },
        "index": {
          "description": "Pull changes from remote repository to local one If merge conflict is detected the error message is returned otherwise Right is returned Executes hg pull",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "pull",
          "normalized": "Ctx()",
          "package": "vcswrapper",
          "signature": "Ctx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:pull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush changesets from the local repository to the default destination.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "push",
          "package": "vcswrapper",
          "signature": "Ctx ()",
          "source": "src/VCSWrapper-Mercurial.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push changesets from the local repository to the default destination",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "push",
          "normalized": "Ctx()",
          "package": "vcswrapper",
          "signature": "Ctx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow revision history of entire repository or files. Executes \u003ccode\u003ehg log\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "simpleLog",
          "package": "vcswrapper",
          "signature": "Maybe String-\u003e Ctx [LogEntry]",
          "type": "function"
        },
        "index": {
          "description": "Show revision history of entire repository or files Executes hg log",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "simpleLog",
          "normalized": "Maybe String-\u003eCtx[LogEntry]",
          "package": "vcswrapper",
          "partial": "Log",
          "signature": "Maybe String-\u003eCtx[LogEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:simpleLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow changed files in the working directory as a list of \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e. Executes \u003ccode\u003ehg status\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "status",
          "package": "vcswrapper",
          "signature": "Ctx [Status]",
          "source": "src/VCSWrapper-Mercurial.html#status",
          "type": "function"
        },
        "index": {
          "description": "Show changed files in the working directory as list of Status Executes hg status",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "status",
          "normalized": "Ctx[Status]",
          "package": "vcswrapper",
          "signature": "Ctx[Status]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the repository's working directory to the specified changeset. If\n    no changeset is specified, update to the tip of the current named branch.\n\u003c/p\u003e",
          "module": "VCSWrapper.Mercurial",
          "name": "update",
          "package": "vcswrapper",
          "signature": "Maybe String -\u003e Ctx ()",
          "source": "src/VCSWrapper-Mercurial.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the repository working directory to the specified changeset If no changeset is specified update to the tip of the current named branch",
          "hierarchy": "VCSWrapper Mercurial",
          "module": "VCSWrapper.Mercurial",
          "name": "update",
          "normalized": "Maybe String-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "Maybe String-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Mercurial.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides high level SVN functions like \u003ccode\u003ecommit\u003c/code\u003e, \u003ccode\u003echeckout\u003c/code\u003e, \u003ccode\u003eupdate\u003c/code\u003e and others.\n\u003c/p\u003e\u003cp\u003eAll functions of this module run in the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e monad, common to all VCS.\n On unexpected behavior, these functions will throw a \u003ccode\u003e\u003ca\u003eVCSException\u003c/a\u003e\u003c/code\u003e.\n All functions will be executed with options \u003ccode\u003e--non-interactive\u003c/code\u003e and \u003ccode\u003e--no-auth-cache\u003c/code\u003e set.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "VCSWrapper.Svn",
          "name": "Svn",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Svn.html",
          "type": "module"
        },
        "index": {
          "description": "Provides high level SVN functions like commit checkout update and others All functions of this module run in the Ctx monad common to all VCS On unexpected behavior these functions will throw VCSException All functions will be executed with options non-interactive and no-auth-cache set",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "Svn",
          "package": "vcswrapper",
          "partial": "Svn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthor to be passed to VCS commands where applicable.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "Author",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Author",
          "type": "data"
        },
        "index": {
          "description": "Author to be passed to VCS commands where applicable",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "Author",
          "package": "vcswrapper",
          "partial": "Author",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the \u003ccode\u003e\u003ca\u003eCtx\u003c/a\u003e\u003c/code\u003e the VCS commands will be executed in.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "Config",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the Ctx the VCS commands will be executed in",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "Config",
          "package": "vcswrapper",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext for all VCS commands.\n\u003c/p\u003e\u003cp\u003eE.g. to create a new Git repository use something like this:\n\u003c/p\u003e\u003cpre\u003eimport VCSWrapper.Git\nmyInitRepoFn = do\n    let config = makeConfig \"path/to/repo\" Nothing Nothing\n    runVcs config $ initDB False\n\u003c/pre\u003e",
          "module": "VCSWrapper.Svn",
          "name": "Ctx",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "Context for all VCS commands E.g to create new Git repository use something like this import VCSWrapper.Git myInitRepoFn do let config makeConfig path to repo Nothing Nothing runVcs config initDB False",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "Ctx",
          "package": "vcswrapper",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if this file is locked by the VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "IsLocked",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#IsLocked",
          "type": "type"
        },
        "index": {
          "description": "True if this file is locked by the VCS",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "IsLocked",
          "package": "vcswrapper",
          "partial": "Is Locked",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:IsLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a log entry in the history managed by the VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "LogEntry",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#LogEntry",
          "type": "data"
        },
        "index": {
          "description": "Represents log entry in the history managed by the VCS",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "LogEntry",
          "package": "vcswrapper",
          "partial": "Log Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:LogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to describe the state of a file.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "Modification",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Modification",
          "type": "data"
        },
        "index": {
          "description": "Flags to describe the state of file",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "Modification",
          "package": "vcswrapper",
          "partial": "Modification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of a file managed by the respective VCS.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "Status",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#Status",
          "type": "data"
        },
        "index": {
          "description": "Status of file managed by the respective VCS",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "Status",
          "package": "vcswrapper",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e-type will be thrown if a VCS command fails unexpectedly.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "VCSException",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#VCSException",
          "type": "data"
        },
        "index": {
          "description": "This Exception type will be thrown if VCS command fails unexpectedly",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "VCSException",
          "package": "vcswrapper",
          "partial": "VCSException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:VCSException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable VCS types implemented in this package.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "VCSType",
          "package": "vcswrapper",
          "source": "src/VCSWrapper-Common-Types.html#VCSType",
          "type": "data"
        },
        "index": {
          "description": "Available VCS types implemented in this package",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "VCSType",
          "package": "vcswrapper",
          "partial": "VCSType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#t:VCSType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut files and directories under version control, scheduling them for addition to repository.\n    They will be added in next commit.. Executes \u003ccode\u003esvn add\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "add",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Put files and directories under version control scheduling them for addition to repository They will be added in next commit Executes svn add",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "add",
          "normalized": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheckout out a working copy from a repository. Executes \u003ccode\u003esvn checkout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "checkout",
          "package": "vcswrapper",
          "signature": "[(String, Maybe String)]-\u003e Maybe String-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Checkout out working copy from repository Executes svn checkout",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "checkout",
          "normalized": "[(String,Maybe String)]-\u003eMaybe String-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[(String,Maybe String)]-\u003eMaybe String-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:checkout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend changes from your working copy to the repository. Executes \u003ccode\u003esvn commit\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "commit",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e String-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Send changes from your working copy to the repository Executes svn commit",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "commit",
          "normalized": "[FilePath]-\u003eString-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eString-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all files of a conflict indicated by its associated filename. E.g. for file \u003ca\u003eTypes.hs\u003c/a\u003e\n    this might be \u003ca\u003eTypes.hs\u003c/a\u003e, \u003ca\u003eTypes.hs.r1\u003c/a\u003e, \u003ca\u003eTypes.hs.r2\u003c/a\u003e and \u003ca\u003eTypes.hs.mine\u003c/a\u003e\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "getFilesInConflict",
          "package": "vcswrapper",
          "signature": "FilePath-\u003e Ctx [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "Returns all files of conflict indicated by its associated filename E.g for file Types.hs this might be Types.hs Types.hs.r1 Types.hs.r2 and Types.hs.mine",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "getFilesInConflict",
          "normalized": "FilePath-\u003eCtx[FilePath]",
          "package": "vcswrapper",
          "partial": "Files In Conflict",
          "signature": "FilePath-\u003eCtx[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:getFilesInConflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLock working copy paths or URLs in the repository, so that no other user can commit changes to\n    them. Executes \u003ccode\u003esvn lock\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "lock",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Lock working copy paths or URLs in the repository so that no other user can commit changes to them Executes svn lock",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "lock",
          "normalized": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverts working copy to given revision. Executes \u003ccode\u003esvn merge -rHEAD:$revision .\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "mergeHeadToRevision",
          "package": "vcswrapper",
          "signature": "Integer-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Reverts working copy to given revision Executes svn merge rHEAD revision",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "mergeHeadToRevision",
          "normalized": "Integer-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "partial": "Head To Revision",
          "signature": "Integer-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:mergeHeadToRevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove \u003ccode\u003econflicted\u003c/code\u003e state on working copy files or directories. Executes \u003ccode\u003esvn resolved\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "resolved",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Remove conflicted state on working copy files or directories Executes svn resolved",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "resolved",
          "normalized": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:resolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the log messages for the current working copy. Executes \u003ccode\u003esvn log\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "simpleLog",
          "package": "vcswrapper",
          "signature": "Ctx [LogEntry]",
          "source": "src/VCSWrapper-Svn.html#simpleLog",
          "type": "function"
        },
        "index": {
          "description": "Get the log messages for the current working copy Executes svn log",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "simpleLog",
          "normalized": "Ctx[LogEntry]",
          "package": "vcswrapper",
          "partial": "Log",
          "signature": "Ctx[LogEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:simpleLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the status of working copy files and directories. Executes \u003ccode\u003esvn status\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "status",
          "package": "vcswrapper",
          "signature": "Ctx [Status]",
          "source": "src/VCSWrapper-Svn.html#status",
          "type": "function"
        },
        "index": {
          "description": "Get the status of working copy files and directories Executes svn status",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "status",
          "normalized": "Ctx[Status]",
          "package": "vcswrapper",
          "signature": "Ctx[Status]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlock working copy paths or URLs. Executes \u003ccode\u003esvn unlock\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "unlock",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003e Maybe String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Unlock working copy paths or URLs Executes svn unlock",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "unlock",
          "normalized": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "[FilePath]-\u003eMaybe String-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:unlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBring changes from the repository into the working copy. Executes \u003ccode\u003esvn update\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "VCSWrapper.Svn",
          "name": "update",
          "package": "vcswrapper",
          "signature": "Maybe String-\u003e [String]-\u003e Ctx ()",
          "type": "function"
        },
        "index": {
          "description": "Bring changes from the repository into the working copy Executes svn update",
          "hierarchy": "VCSWrapper Svn",
          "module": "VCSWrapper.Svn",
          "name": "update",
          "normalized": "Maybe String-\u003e[String]-\u003eCtx()",
          "package": "vcswrapper",
          "signature": "Maybe String-\u003e[String]-\u003eCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcswrapper/docs/VCSWrapper-Svn.html#v:update"
      }
    }
  ]
]