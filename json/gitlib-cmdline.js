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
        "word": "gitlib-cmdline"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "CmdLine",
          "package": "gitlib-cmdline",
          "source": "src/Git-CmdLine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "CmdLine",
          "package": "gitlib-cmdline",
          "partial": "Cmd Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "CliObjectRef",
          "package": "gitlib-cmdline",
          "source": "src/Git-CmdLine.html#CliObjectRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "CliObjectRef",
          "package": "gitlib-cmdline",
          "partial": "Cli Object Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#t:CliObjectRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "CliReference",
          "package": "gitlib-cmdline",
          "source": "src/Git-CmdLine.html#CliReference",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "CliReference",
          "package": "gitlib-cmdline",
          "partial": "Cli Reference",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#t:CliReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "CliRepo",
          "package": "gitlib-cmdline",
          "source": "src/Git-CmdLine.html#CliRepo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "CliRepo",
          "package": "gitlib-cmdline",
          "partial": "Cli Repo",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#t:CliRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "MonadCli",
          "package": "gitlib-cmdline",
          "source": "src/Git-CmdLine.html#MonadCli",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "MonadCli",
          "package": "gitlib-cmdline",
          "partial": "Monad Cli",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#t:MonadCli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "CliObjectRef",
          "package": "gitlib-cmdline",
          "signature": "CliObjectRef",
          "source": "src/Git-CmdLine.html#CliObjectRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "CliObjectRef",
          "package": "gitlib-cmdline",
          "partial": "Cli Object Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:CliObjectRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "CliReference",
          "package": "gitlib-cmdline",
          "signature": "CliReference",
          "source": "src/Git-CmdLine.html#CliReference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "CliReference",
          "package": "gitlib-cmdline",
          "partial": "Cli Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:CliReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "CliRepo",
          "package": "gitlib-cmdline",
          "signature": "CliRepo RepositoryOptions",
          "source": "src/Git-CmdLine.html#CliRepo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "CliRepo",
          "package": "gitlib-cmdline",
          "partial": "Cli Repo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:CliRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliCreateBlob",
          "package": "gitlib-cmdline",
          "signature": "BlobContents (ReaderT CliRepo m) -\u003e ReaderT CliRepo m (BlobOid CliRepo)",
          "source": "src/Git-CmdLine.html#cliCreateBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliCreateBlob",
          "normalized": "BlobContents(ReaderT CliRepo a)-\u003eReaderT CliRepo a(BlobOid CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Create Blob",
          "signature": "BlobContents(ReaderT CliRepo m)-\u003eReaderT CliRepo m(BlobOid CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliCreateBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliCreateCommit",
          "package": "gitlib-cmdline",
          "signature": "[CommitOid CliRepo] -\u003e TreeOid CliRepo -\u003e Signature -\u003e Signature -\u003e Text -\u003e Maybe Text -\u003e ReaderT CliRepo m (Commit CliRepo)",
          "source": "src/Git-CmdLine.html#cliCreateCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliCreateCommit",
          "normalized": "[CommitOid CliRepo]-\u003eTreeOid CliRepo-\u003eSignature-\u003eSignature-\u003eText-\u003eMaybe Text-\u003eReaderT CliRepo a(Commit CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Create Commit",
          "signature": "[CommitOid CliRepo]-\u003eTreeOid CliRepo-\u003eSignature-\u003eSignature-\u003eText-\u003eMaybe Text-\u003eReaderT CliRepo m(Commit CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliCreateCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliCreateTag",
          "package": "gitlib-cmdline",
          "signature": "CommitOid CliRepo -\u003e Signature -\u003e Text -\u003e Text -\u003e ReaderT CliRepo m (Tag CliRepo)",
          "source": "src/Git-CmdLine.html#cliCreateTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliCreateTag",
          "normalized": "CommitOid CliRepo-\u003eSignature-\u003eText-\u003eText-\u003eReaderT CliRepo a(Tag CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Create Tag",
          "signature": "CommitOid CliRepo-\u003eSignature-\u003eText-\u003eText-\u003eReaderT CliRepo m(Tag CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliCreateTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliDeleteRef",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e ReaderT CliRepo m ()",
          "source": "src/Git-CmdLine.html#cliDeleteRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliDeleteRef",
          "normalized": "Text-\u003eReaderT CliRepo a()",
          "package": "gitlib-cmdline",
          "partial": "Delete Ref",
          "signature": "Text-\u003eReaderT CliRepo m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliDeleteRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliDoCreateBlob",
          "package": "gitlib-cmdline",
          "signature": "BlobContents (ReaderT CliRepo m) -\u003e Bool -\u003e ReaderT CliRepo m (BlobOid CliRepo)",
          "source": "src/Git-CmdLine.html#cliDoCreateBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliDoCreateBlob",
          "normalized": "BlobContents(ReaderT CliRepo a)-\u003eBool-\u003eReaderT CliRepo a(BlobOid CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Do Create Blob",
          "signature": "BlobContents(ReaderT CliRepo m)-\u003eBool-\u003eReaderT CliRepo m(BlobOid CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliDoCreateBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliExistsObject",
          "package": "gitlib-cmdline",
          "signature": "SHA -\u003e ReaderT CliRepo m Bool",
          "source": "src/Git-CmdLine.html#cliExistsObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliExistsObject",
          "normalized": "SHA-\u003eReaderT CliRepo a Bool",
          "package": "gitlib-cmdline",
          "partial": "Exists Object",
          "signature": "SHA-\u003eReaderT CliRepo m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliExistsObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliFactory",
          "package": "gitlib-cmdline",
          "signature": "RepositoryFactory (ReaderT CliRepo m) m CliRepo",
          "source": "src/Git-CmdLine.html#cliFactory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliFactory",
          "package": "gitlib-cmdline",
          "partial": "Factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliFactory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliFilePathToURI",
          "package": "gitlib-cmdline",
          "signature": "FilePath -\u003e m FilePath",
          "source": "src/Git-CmdLine.html#cliFilePathToURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliFilePathToURI",
          "normalized": "FilePath-\u003ea FilePath",
          "package": "gitlib-cmdline",
          "partial": "File Path To URI",
          "signature": "FilePath-\u003em FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliFilePathToURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliHashContents",
          "package": "gitlib-cmdline",
          "signature": "BlobContents (ReaderT CliRepo m) -\u003e ReaderT CliRepo m (BlobOid CliRepo)",
          "source": "src/Git-CmdLine.html#cliHashContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliHashContents",
          "normalized": "BlobContents(ReaderT CliRepo a)-\u003eReaderT CliRepo a(BlobOid CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Hash Contents",
          "signature": "BlobContents(ReaderT CliRepo m)-\u003eReaderT CliRepo m(BlobOid CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliHashContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliLookupBlob",
          "package": "gitlib-cmdline",
          "signature": "BlobOid CliRepo -\u003e ReaderT CliRepo m (Blob CliRepo (ReaderT CliRepo m))",
          "source": "src/Git-CmdLine.html#cliLookupBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliLookupBlob",
          "normalized": "BlobOid CliRepo-\u003eReaderT CliRepo a(Blob CliRepo(ReaderT CliRepo a))",
          "package": "gitlib-cmdline",
          "partial": "Lookup Blob",
          "signature": "BlobOid CliRepo-\u003eReaderT CliRepo m(Blob CliRepo(ReaderT CliRepo m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliLookupBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliLookupCommit",
          "package": "gitlib-cmdline",
          "signature": "CommitOid CliRepo -\u003e ReaderT CliRepo m (Commit CliRepo)",
          "source": "src/Git-CmdLine.html#cliLookupCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliLookupCommit",
          "normalized": "CommitOid CliRepo-\u003eReaderT CliRepo a(Commit CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Lookup Commit",
          "signature": "CommitOid CliRepo-\u003eReaderT CliRepo m(Commit CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliLookupCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliLookupRef",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e ReaderT CliRepo m (Maybe (RefTarget CliRepo))",
          "source": "src/Git-CmdLine.html#cliLookupRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliLookupRef",
          "normalized": "Text-\u003eReaderT CliRepo a(Maybe(RefTarget CliRepo))",
          "package": "gitlib-cmdline",
          "partial": "Lookup Ref",
          "signature": "Text-\u003eReaderT CliRepo m(Maybe(RefTarget CliRepo))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliLookupRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliLookupTree",
          "package": "gitlib-cmdline",
          "signature": "TreeOid CliRepo -\u003e ReaderT CliRepo m (Tree CliRepo)",
          "source": "src/Git-CmdLine.html#cliLookupTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliLookupTree",
          "normalized": "TreeOid CliRepo-\u003eReaderT CliRepo a(Tree CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Lookup Tree",
          "signature": "TreeOid CliRepo-\u003eReaderT CliRepo m(Tree CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliLookupTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliParseLsTree",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e ReaderT CliRepo m (TreeFilePath, TreeEntry CliRepo)",
          "source": "src/Git-CmdLine.html#cliParseLsTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliParseLsTree",
          "normalized": "Text-\u003eReaderT CliRepo a(TreeFilePath,TreeEntry CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Parse Ls Tree",
          "signature": "Text-\u003eReaderT CliRepo m(TreeFilePath,TreeEntry CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliParseLsTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliPullCommit",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e Text -\u003e Text -\u003e Text -\u003e Maybe FilePath -\u003e ReaderT CliRepo m (MergeResult CliRepo)",
          "source": "src/Git-CmdLine.html#cliPullCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliPullCommit",
          "normalized": "Text-\u003eText-\u003eText-\u003eText-\u003eMaybe FilePath-\u003eReaderT CliRepo a(MergeResult CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Pull Commit",
          "signature": "Text-\u003eText-\u003eText-\u003eText-\u003eMaybe FilePath-\u003eReaderT CliRepo m(MergeResult CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliPullCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliPushCommit",
          "package": "gitlib-cmdline",
          "signature": "CommitOid CliRepo -\u003e Text -\u003e Text -\u003e Maybe FilePath -\u003e ReaderT CliRepo m (CommitOid CliRepo)",
          "source": "src/Git-CmdLine.html#cliPushCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliPushCommit",
          "normalized": "CommitOid CliRepo-\u003eText-\u003eText-\u003eMaybe FilePath-\u003eReaderT CliRepo a(CommitOid CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Push Commit",
          "signature": "CommitOid CliRepo-\u003eText-\u003eText-\u003eMaybe FilePath-\u003eReaderT CliRepo m(CommitOid CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliPushCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliReadTree",
          "package": "gitlib-cmdline",
          "signature": "Tree CliRepo -\u003e ReaderT CliRepo m (EntryHashMap CliRepo)",
          "source": "src/Git-CmdLine.html#cliReadTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliReadTree",
          "normalized": "Tree CliRepo-\u003eReaderT CliRepo a(EntryHashMap CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Read Tree",
          "signature": "Tree CliRepo-\u003eReaderT CliRepo m(EntryHashMap CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliReadTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliRepoDoesExist",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e Sh (Either GitException ())",
          "source": "src/Git-CmdLine.html#cliRepoDoesExist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliRepoDoesExist",
          "normalized": "Text-\u003eSh(Either GitException())",
          "package": "gitlib-cmdline",
          "partial": "Repo Does Exist",
          "signature": "Text-\u003eSh(Either GitException())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliRepoDoesExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliRepoPath",
          "package": "gitlib-cmdline",
          "signature": "CliRepo -\u003e Text",
          "source": "src/Git-CmdLine.html#cliRepoPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliRepoPath",
          "normalized": "CliRepo-\u003eText",
          "package": "gitlib-cmdline",
          "partial": "Repo Path",
          "signature": "CliRepo-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliRepoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliResetHard",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e ReaderT CliRepo m ()",
          "source": "src/Git-CmdLine.html#cliResetHard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliResetHard",
          "normalized": "Text-\u003eReaderT CliRepo a()",
          "package": "gitlib-cmdline",
          "partial": "Reset Hard",
          "signature": "Text-\u003eReaderT CliRepo m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliResetHard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliResolveRef",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e ReaderT CliRepo m (Maybe (Oid CliRepo))",
          "source": "src/Git-CmdLine.html#cliResolveRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliResolveRef",
          "normalized": "Text-\u003eReaderT CliRepo a(Maybe(Oid CliRepo))",
          "package": "gitlib-cmdline",
          "partial": "Resolve Ref",
          "signature": "Text-\u003eReaderT CliRepo m(Maybe(Oid CliRepo))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliResolveRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliShowRef",
          "package": "gitlib-cmdline",
          "signature": "Maybe Text -\u003e ReaderT CliRepo m (Maybe [(Text, Text)])",
          "source": "src/Git-CmdLine.html#cliShowRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliShowRef",
          "normalized": "Maybe Text-\u003eReaderT CliRepo a(Maybe[(Text,Text)])",
          "package": "gitlib-cmdline",
          "partial": "Show Ref",
          "signature": "Maybe Text-\u003eReaderT CliRepo m(Maybe[(Text,Text)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliShowRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliSourceObjects",
          "package": "gitlib-cmdline",
          "signature": "Maybe (CommitOid CliRepo) -\u003e CommitOid CliRepo -\u003e Bool -\u003e Producer (ReaderT CliRepo m) (ObjectOid CliRepo)",
          "source": "src/Git-CmdLine.html#cliSourceObjects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliSourceObjects",
          "normalized": "Maybe(CommitOid CliRepo)-\u003eCommitOid CliRepo-\u003eBool-\u003eProducer(ReaderT CliRepo a)(ObjectOid CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Source Objects",
          "signature": "Maybe(CommitOid CliRepo)-\u003eCommitOid CliRepo-\u003eBool-\u003eProducer(ReaderT CliRepo m)(ObjectOid CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliSourceObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliSourceRefs",
          "package": "gitlib-cmdline",
          "signature": "Producer (ReaderT CliRepo m) Text",
          "source": "src/Git-CmdLine.html#cliSourceRefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliSourceRefs",
          "package": "gitlib-cmdline",
          "partial": "Source Refs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliSourceRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliSourceTreeEntries",
          "package": "gitlib-cmdline",
          "signature": "Tree CliRepo -\u003e Producer (ReaderT CliRepo m) (TreeFilePath, TreeEntry CliRepo)",
          "source": "src/Git-CmdLine.html#cliSourceTreeEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliSourceTreeEntries",
          "normalized": "Tree CliRepo-\u003eProducer(ReaderT CliRepo a)(TreeFilePath,TreeEntry CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Source Tree Entries",
          "signature": "Tree CliRepo-\u003eProducer(ReaderT CliRepo m)(TreeFilePath,TreeEntry CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliSourceTreeEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliTreeEntry",
          "package": "gitlib-cmdline",
          "signature": "Tree CliRepo -\u003e TreeFilePath -\u003e ReaderT CliRepo m (Maybe (TreeEntry CliRepo))",
          "source": "src/Git-CmdLine.html#cliTreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliTreeEntry",
          "normalized": "Tree CliRepo-\u003eTreeFilePath-\u003eReaderT CliRepo a(Maybe(TreeEntry CliRepo))",
          "package": "gitlib-cmdline",
          "partial": "Tree Entry",
          "signature": "Tree CliRepo-\u003eTreeFilePath-\u003eReaderT CliRepo m(Maybe(TreeEntry CliRepo))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliTreeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliUpdateRef",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e RefTarget CliRepo -\u003e ReaderT CliRepo m ()",
          "source": "src/Git-CmdLine.html#cliUpdateRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliUpdateRef",
          "normalized": "Text-\u003eRefTarget CliRepo-\u003eReaderT CliRepo a()",
          "package": "gitlib-cmdline",
          "partial": "Update Ref",
          "signature": "Text-\u003eRefTarget CliRepo-\u003eReaderT CliRepo m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliUpdateRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "cliWriteTree",
          "package": "gitlib-cmdline",
          "signature": "EntryHashMap CliRepo -\u003e ReaderT CliRepo m (TreeOid CliRepo)",
          "source": "src/Git-CmdLine.html#cliWriteTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "cliWriteTree",
          "normalized": "EntryHashMap CliRepo-\u003eReaderT CliRepo a(TreeOid CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "Write Tree",
          "signature": "EntryHashMap CliRepo-\u003eReaderT CliRepo m(TreeOid CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:cliWriteTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "doRunGit",
          "package": "gitlib-cmdline",
          "signature": "(FilePath -\u003e [Text] -\u003e Sh a) -\u003e [Text] -\u003e Sh () -\u003e ReaderT CliRepo m a",
          "source": "src/Git-CmdLine.html#doRunGit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "doRunGit",
          "normalized": "(FilePath-\u003e[Text]-\u003eSh a)-\u003e[Text]-\u003eSh()-\u003eReaderT CliRepo b a",
          "package": "gitlib-cmdline",
          "partial": "Run Git",
          "signature": "(FilePath-\u003e[Text]-\u003eSh a)-\u003e[Text]-\u003eSh()-\u003eReaderT CliRepo m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:doRunGit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "formatCliTime",
          "package": "gitlib-cmdline",
          "signature": "ZonedTime -\u003e Text",
          "source": "src/Git-CmdLine.html#formatCliTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "formatCliTime",
          "normalized": "ZonedTime-\u003eText",
          "package": "gitlib-cmdline",
          "partial": "Cli Time",
          "signature": "ZonedTime-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:formatCliTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "fromStrict",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e Text",
          "source": "src/Git-CmdLine.html#fromStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "fromStrict",
          "normalized": "Text-\u003eText",
          "package": "gitlib-cmdline",
          "partial": "Strict",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:fromStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "git",
          "package": "gitlib-cmdline",
          "signature": "[Text] -\u003e Sh Text",
          "source": "src/Git-CmdLine.html#git",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "git",
          "normalized": "[Text]-\u003eSh Text",
          "package": "gitlib-cmdline",
          "signature": "[Text]-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:git"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "git_",
          "package": "gitlib-cmdline",
          "signature": "[Text] -\u003e Sh ()",
          "source": "src/Git-CmdLine.html#git_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "git_",
          "normalized": "[Text]-\u003eSh()",
          "package": "gitlib-cmdline",
          "signature": "[Text]-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:git_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "lexer",
          "package": "gitlib-cmdline",
          "signature": "TokenParser u",
          "source": "src/Git-CmdLine.html#lexer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "lexer",
          "package": "gitlib-cmdline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:lexer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "mkOid",
          "package": "gitlib-cmdline",
          "signature": "forall o.  Text -\u003e ReaderT CliRepo m (Tagged o SHA)",
          "source": "src/Git-CmdLine.html#mkOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "mkOid",
          "normalized": "a b Text-\u003eReaderT CliRepo c(Tagged d SHA)",
          "package": "gitlib-cmdline",
          "partial": "Oid",
          "signature": "forall o. Text-\u003eReaderT CliRepo m(Tagged o SHA)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:mkOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "objectRefSha",
          "package": "gitlib-cmdline",
          "signature": "Text",
          "source": "src/Git-CmdLine.html#CliObjectRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "objectRefSha",
          "package": "gitlib-cmdline",
          "partial": "Ref Sha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:objectRefSha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "objectRefType",
          "package": "gitlib-cmdline",
          "signature": "Text",
          "source": "src/Git-CmdLine.html#CliObjectRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "objectRefType",
          "package": "gitlib-cmdline",
          "partial": "Ref Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:objectRefType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "openCliRepository",
          "package": "gitlib-cmdline",
          "signature": "RepositoryOptions -\u003e m CliRepo",
          "source": "src/Git-CmdLine.html#openCliRepository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "openCliRepository",
          "normalized": "RepositoryOptions-\u003ea CliRepo",
          "package": "gitlib-cmdline",
          "partial": "Cli Repository",
          "signature": "RepositoryOptions-\u003em CliRepo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:openCliRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "parseCliTime",
          "package": "gitlib-cmdline",
          "signature": "String -\u003e ZonedTime",
          "source": "src/Git-CmdLine.html#parseCliTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "parseCliTime",
          "normalized": "String-\u003eZonedTime",
          "package": "gitlib-cmdline",
          "partial": "Cli Time",
          "signature": "String-\u003eZonedTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:parseCliTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "referenceObject",
          "package": "gitlib-cmdline",
          "signature": "CliObjectRef",
          "source": "src/Git-CmdLine.html#CliReference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "referenceObject",
          "package": "gitlib-cmdline",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:referenceObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "referenceRef",
          "package": "gitlib-cmdline",
          "signature": "Text",
          "source": "src/Git-CmdLine.html#CliReference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "referenceRef",
          "package": "gitlib-cmdline",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:referenceRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "runGit",
          "package": "gitlib-cmdline",
          "signature": "[Text] -\u003e ReaderT CliRepo m Text",
          "source": "src/Git-CmdLine.html#runGit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "runGit",
          "normalized": "[Text]-\u003eReaderT CliRepo a Text",
          "package": "gitlib-cmdline",
          "partial": "Git",
          "signature": "[Text]-\u003eReaderT CliRepo m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:runGit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "runGit_",
          "package": "gitlib-cmdline",
          "signature": "[Text] -\u003e ReaderT CliRepo m ()",
          "source": "src/Git-CmdLine.html#runGit_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "runGit_",
          "normalized": "[Text]-\u003eReaderT CliRepo a()",
          "package": "gitlib-cmdline",
          "partial": "Git",
          "signature": "[Text]-\u003eReaderT CliRepo m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:runGit_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "shaToRef",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e ReaderT CliRepo m (RefTarget CliRepo)",
          "source": "src/Git-CmdLine.html#shaToRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "shaToRef",
          "normalized": "Text-\u003eReaderT CliRepo a(RefTarget CliRepo)",
          "package": "gitlib-cmdline",
          "partial": "To Ref",
          "signature": "Text-\u003eReaderT CliRepo m(RefTarget CliRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:shaToRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.CmdLine",
          "name": "toStrict",
          "package": "gitlib-cmdline",
          "signature": "Text -\u003e Text",
          "source": "src/Git-CmdLine.html#toStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git CmdLine",
          "module": "Git.CmdLine",
          "name": "toStrict",
          "normalized": "Text-\u003eText",
          "package": "gitlib-cmdline",
          "partial": "Strict",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cmdline/docs/Git-CmdLine.html#v:toStrict"
      }
    }
  ]
]