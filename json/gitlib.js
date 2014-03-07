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
        "word": "gitlib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "Blob",
          "package": "gitlib",
          "source": "src/Git-Blob.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "Blob",
          "package": "gitlib",
          "partial": "Blob",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "blobContentsToByteString",
          "package": "gitlib",
          "signature": "BlobContents m -\u003e m ByteString",
          "source": "src/Git-Blob.html#blobContentsToByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "blobContentsToByteString",
          "normalized": "BlobContents a-\u003ea ByteString",
          "package": "gitlib",
          "partial": "Contents To Byte String",
          "signature": "BlobContents m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:blobContentsToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "blobContentsToLazyByteString",
          "package": "gitlib",
          "signature": "BlobContents m -\u003e m ByteString",
          "source": "src/Git-Blob.html#blobContentsToLazyByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "blobContentsToLazyByteString",
          "normalized": "BlobContents a-\u003ea ByteString",
          "package": "gitlib",
          "partial": "Contents To Lazy Byte String",
          "signature": "BlobContents m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:blobContentsToLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "blobToByteString",
          "package": "gitlib",
          "signature": "Blob r m -\u003e m ByteString",
          "source": "src/Git-Blob.html#blobToByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "blobToByteString",
          "normalized": "Blob a b-\u003eb ByteString",
          "package": "gitlib",
          "partial": "To Byte String",
          "signature": "Blob r m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:blobToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "blobToLazyByteString",
          "package": "gitlib",
          "signature": "Blob r m -\u003e m ByteString",
          "source": "src/Git-Blob.html#blobToLazyByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "blobToLazyByteString",
          "normalized": "Blob a b-\u003eb ByteString",
          "package": "gitlib",
          "partial": "To Lazy Byte String",
          "signature": "Blob r m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:blobToLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "catBlob",
          "package": "gitlib",
          "signature": "BlobOid r -\u003e m ByteString",
          "source": "src/Git-Blob.html#catBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "catBlob",
          "normalized": "BlobOid a-\u003eb ByteString",
          "package": "gitlib",
          "partial": "Blob",
          "signature": "BlobOid r-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:catBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "catBlobLazy",
          "package": "gitlib",
          "signature": "BlobOid r -\u003e m ByteString",
          "source": "src/Git-Blob.html#catBlobLazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "catBlobLazy",
          "normalized": "BlobOid a-\u003eb ByteString",
          "package": "gitlib",
          "partial": "Blob Lazy",
          "signature": "BlobOid r-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:catBlobLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "catBlobUtf8",
          "package": "gitlib",
          "signature": "BlobOid r -\u003e m Text",
          "source": "src/Git-Blob.html#catBlobUtf8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "catBlobUtf8",
          "normalized": "BlobOid a-\u003eb Text",
          "package": "gitlib",
          "partial": "Blob Utf",
          "signature": "BlobOid r-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:catBlobUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "copyBlob",
          "package": "gitlib",
          "signature": "BlobOid r -\u003e HashSet Text -\u003e t m (BlobOid s, HashSet Text)",
          "source": "src/Git-Blob.html#copyBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "copyBlob",
          "normalized": "BlobOid a-\u003eHashSet Text-\u003eb c(BlobOid d,HashSet Text)",
          "package": "gitlib",
          "partial": "Blob",
          "signature": "BlobOid r-\u003eHashSet Text-\u003et m(BlobOid s,HashSet Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:copyBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "createBlobUtf8",
          "package": "gitlib",
          "signature": "Text -\u003e m (BlobOid r)",
          "source": "src/Git-Blob.html#createBlobUtf8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "createBlobUtf8",
          "normalized": "Text-\u003ea(BlobOid b)",
          "package": "gitlib",
          "partial": "Blob Utf",
          "signature": "Text-\u003em(BlobOid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:createBlobUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "sourceTreeBlobEntries",
          "package": "gitlib",
          "signature": "Tree r -\u003e Producer m (TreeFilePath, BlobOid r, BlobKind)",
          "source": "src/Git-Blob.html#sourceTreeBlobEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "sourceTreeBlobEntries",
          "normalized": "Tree a-\u003eProducer b(TreeFilePath,BlobOid a,BlobKind)",
          "package": "gitlib",
          "partial": "Tree Blob Entries",
          "signature": "Tree r-\u003eProducer m(TreeFilePath,BlobOid r,BlobKind)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:sourceTreeBlobEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "treeBlobEntries",
          "package": "gitlib",
          "signature": "Tree r -\u003e m [(TreeFilePath, BlobOid r, BlobKind)]",
          "source": "src/Git-Blob.html#treeBlobEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "treeBlobEntries",
          "normalized": "Tree a-\u003eb[(TreeFilePath,BlobOid a,BlobKind)]",
          "package": "gitlib",
          "partial": "Blob Entries",
          "signature": "Tree r-\u003em[(TreeFilePath,BlobOid r,BlobKind)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:treeBlobEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Blob",
          "name": "writeBlob",
          "package": "gitlib",
          "signature": "FilePath -\u003e BlobContents m -\u003e m ()",
          "source": "src/Git-Blob.html#writeBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Blob",
          "module": "Git.Blob",
          "name": "writeBlob",
          "normalized": "FilePath-\u003eBlobContents a-\u003ea()",
          "package": "gitlib",
          "partial": "Blob",
          "signature": "FilePath-\u003eBlobContents m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:writeBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Commit.Push",
          "name": "Push",
          "package": "gitlib",
          "source": "src/Git-Commit-Push.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Commit Push",
          "module": "Git.Commit.Push",
          "name": "Push",
          "package": "gitlib",
          "partial": "Push",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit-Push.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Commit.Push",
          "name": "copyRepository",
          "package": "gitlib",
          "signature": "RepositoryFactory (t m) m s -\u003e Maybe (CommitOid r) -\u003e Text -\u003e FilePath -\u003e Bool -\u003e m ()",
          "source": "src/Git-Commit-Push.html#copyRepository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Commit Push",
          "module": "Git.Commit.Push",
          "name": "copyRepository",
          "normalized": "RepositoryFactory(a b)b c-\u003eMaybe(CommitOid d)-\u003eText-\u003eFilePath-\u003eBool-\u003eb()",
          "package": "gitlib",
          "partial": "Repository",
          "signature": "RepositoryFactory(t m)m s-\u003eMaybe(CommitOid r)-\u003eText-\u003eFilePath-\u003eBool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit-Push.html#v:copyRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFast-forward push a reference between repositories using a recursive\n   copy.  This can be extremely slow, but always works no matter which two\n   backends are being used.  It should be considered a matter of last\n   resort, or for objects sets that are known to be small.\n\u003c/p\u003e",
          "module": "Git.Commit.Push",
          "name": "pushCommit",
          "package": "gitlib",
          "signature": "CommitOid r -\u003e Text -\u003e t m (CommitOid s)",
          "source": "src/Git-Commit-Push.html#pushCommit",
          "type": "function"
        },
        "index": {
          "description": "Fast-forward push reference between repositories using recursive copy This can be extremely slow but always works no matter which two backends are being used It should be considered matter of last resort or for objects sets that are known to be small",
          "hierarchy": "Git Commit Push",
          "module": "Git.Commit.Push",
          "name": "pushCommit",
          "normalized": "CommitOid a-\u003eText-\u003eb c(CommitOid d)",
          "package": "gitlib",
          "partial": "Commit",
          "signature": "CommitOid r-\u003eText-\u003et m(CommitOid s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit-Push.html#v:pushCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Commit",
          "name": "Commit",
          "package": "gitlib",
          "source": "src/Git-Commit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Commit",
          "module": "Git.Commit",
          "name": "Commit",
          "package": "gitlib",
          "partial": "Commit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Commit",
          "name": "commitTreeEntry",
          "package": "gitlib",
          "signature": "Commit r -\u003e TreeFilePath -\u003e m (Maybe (TreeEntry r))",
          "source": "src/Git-Commit.html#commitTreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Commit",
          "module": "Git.Commit",
          "name": "commitTreeEntry",
          "normalized": "Commit a-\u003eTreeFilePath-\u003eb(Maybe(TreeEntry a))",
          "package": "gitlib",
          "partial": "Tree Entry",
          "signature": "Commit r-\u003eTreeFilePath-\u003em(Maybe(TreeEntry r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:commitTreeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Commit",
          "name": "copyCommit",
          "package": "gitlib",
          "signature": "CommitOid r -\u003e Maybe RefName -\u003e HashSet Text -\u003e t m (CommitOid s, HashSet Text)",
          "source": "src/Git-Commit.html#copyCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Commit",
          "module": "Git.Commit",
          "name": "copyCommit",
          "normalized": "CommitOid a-\u003eMaybe RefName-\u003eHashSet Text-\u003eb c(CommitOid d,HashSet Text)",
          "package": "gitlib",
          "partial": "Commit",
          "signature": "CommitOid r-\u003eMaybe RefName-\u003eHashSet Text-\u003et m(CommitOid s,HashSet Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:copyCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Commit",
          "name": "copyCommitOid",
          "package": "gitlib",
          "signature": "CommitOid r -\u003e n (CommitOid s)",
          "source": "src/Git-Commit.html#copyCommitOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Commit",
          "module": "Git.Commit",
          "name": "copyCommitOid",
          "normalized": "CommitOid a-\u003eb(CommitOid c)",
          "package": "gitlib",
          "partial": "Commit Oid",
          "signature": "CommitOid r-\u003en(CommitOid s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:copyCommitOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Commit",
          "name": "listCommits",
          "package": "gitlib",
          "signature": "Maybe (CommitOid r)-\u003e CommitOid r-\u003e m [CommitOid r]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Commit",
          "module": "Git.Commit",
          "name": "listCommits",
          "normalized": "Maybe(CommitOid a)-\u003eCommitOid a-\u003eb[CommitOid a]",
          "package": "gitlib",
          "partial": "Commits",
          "signature": "Maybe(CommitOid r)-\u003eCommitOid r-\u003em[CommitOid r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:listCommits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Commit",
          "name": "traverseCommits",
          "package": "gitlib",
          "signature": "(CommitOid r -\u003e m a) -\u003e CommitOid r -\u003e m [a]",
          "source": "src/Git-Commit.html#traverseCommits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Commit",
          "module": "Git.Commit",
          "name": "traverseCommits",
          "normalized": "(CommitOid a-\u003eb c)-\u003eCommitOid a-\u003eb[c]",
          "package": "gitlib",
          "partial": "Commits",
          "signature": "(CommitOid r-\u003em a)-\u003eCommitOid r-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:traverseCommits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Commit",
          "name": "traverseCommits_",
          "package": "gitlib",
          "signature": "(CommitOid r -\u003e m ()) -\u003e CommitOid r -\u003e m ()",
          "source": "src/Git-Commit.html#traverseCommits_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Commit",
          "module": "Git.Commit",
          "name": "traverseCommits_",
          "normalized": "(CommitOid a-\u003eb())-\u003eCommitOid a-\u003eb()",
          "package": "gitlib",
          "partial": "Commits",
          "signature": "(CommitOid r-\u003em())-\u003eCommitOid r-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:traverseCommits_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Object",
          "name": "Object",
          "package": "gitlib",
          "source": "src/Git-Object.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Object",
          "module": "Git.Object",
          "name": "Object",
          "package": "gitlib",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of objects (commit and top-level trees) return by\n   \u003ccode\u003e\u003ca\u003elistObjects\u003c/a\u003e\u003c/code\u003e, expand it to include all subtrees and blobs as well.\n   Ordering is preserved.\n\u003c/p\u003e",
          "module": "Git.Object",
          "name": "expandTreeObjects",
          "package": "gitlib",
          "signature": "Conduit (ObjectOid r) m (ObjectOid r)",
          "source": "src/Git-Object.html#expandTreeObjects",
          "type": "function"
        },
        "index": {
          "description": "Given list of objects commit and top-level trees return by listObjects expand it to include all subtrees and blobs as well Ordering is preserved",
          "hierarchy": "Git Object",
          "module": "Git.Object",
          "name": "expandTreeObjects",
          "package": "gitlib",
          "partial": "Tree Objects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:expandTreeObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Object",
          "name": "listAllObjects",
          "package": "gitlib",
          "signature": "Maybe (CommitOid r) -\u003e CommitOid r -\u003e m [ObjectOid r]",
          "source": "src/Git-Object.html#listAllObjects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Object",
          "module": "Git.Object",
          "name": "listAllObjects",
          "normalized": "Maybe(CommitOid a)-\u003eCommitOid a-\u003eb[ObjectOid a]",
          "package": "gitlib",
          "partial": "All Objects",
          "signature": "Maybe(CommitOid r)-\u003eCommitOid r-\u003em[ObjectOid r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:listAllObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Object",
          "name": "listObjects",
          "package": "gitlib",
          "signature": "Maybe (CommitOid r)-\u003e CommitOid r-\u003e Bool-\u003e m [ObjectOid r]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Object",
          "module": "Git.Object",
          "name": "listObjects",
          "normalized": "Maybe(CommitOid a)-\u003eCommitOid a-\u003eBool-\u003eb[ObjectOid a]",
          "package": "gitlib",
          "partial": "Objects",
          "signature": "Maybe(CommitOid r)-\u003eCommitOid r-\u003eBool-\u003em[ObjectOid r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:listObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Object",
          "name": "traverseObjects",
          "package": "gitlib",
          "signature": "(ObjectOid r -\u003e m a) -\u003e CommitOid r -\u003e m [a]",
          "source": "src/Git-Object.html#traverseObjects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Object",
          "module": "Git.Object",
          "name": "traverseObjects",
          "normalized": "(ObjectOid a-\u003eb c)-\u003eCommitOid a-\u003eb[c]",
          "package": "gitlib",
          "partial": "Objects",
          "signature": "(ObjectOid r-\u003em a)-\u003eCommitOid r-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:traverseObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Object",
          "name": "traverseObjects_",
          "package": "gitlib",
          "signature": "(ObjectOid r -\u003e m ()) -\u003e CommitOid r -\u003e m ()",
          "source": "src/Git-Object.html#traverseObjects_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Object",
          "module": "Git.Object",
          "name": "traverseObjects_",
          "normalized": "(ObjectOid a-\u003eb())-\u003eCommitOid a-\u003eb()",
          "package": "gitlib",
          "partial": "Objects",
          "signature": "(ObjectOid r-\u003em())-\u003eCommitOid r-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:traverseObjects_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Reference",
          "name": "Reference",
          "package": "gitlib",
          "source": "src/Git-Reference.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Reference",
          "module": "Git.Reference",
          "name": "Reference",
          "package": "gitlib",
          "partial": "Reference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Reference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Reference",
          "name": "listReferences",
          "package": "gitlib",
          "signature": "m [RefName]",
          "source": "src/Git-Reference.html#listReferences",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Reference",
          "module": "Git.Reference",
          "name": "listReferences",
          "normalized": "a[RefName]",
          "package": "gitlib",
          "partial": "References",
          "signature": "m[RefName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Reference.html#v:listReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Reference",
          "name": "referenceToOid",
          "package": "gitlib",
          "signature": "RefTarget r -\u003e m (Maybe (Oid r))",
          "source": "src/Git-Reference.html#referenceToOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Reference",
          "module": "Git.Reference",
          "name": "referenceToOid",
          "normalized": "RefTarget a-\u003eb(Maybe(Oid a))",
          "package": "gitlib",
          "partial": "To Oid",
          "signature": "RefTarget r-\u003em(Maybe(Oid r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Reference.html#v:referenceToOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Reference",
          "name": "resolveReference",
          "package": "gitlib",
          "signature": "RefName -\u003e m (Maybe (Oid r))",
          "source": "src/Git-Reference.html#resolveReference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Reference",
          "module": "Git.Reference",
          "name": "resolveReference",
          "normalized": "RefName-\u003ea(Maybe(Oid b))",
          "package": "gitlib",
          "partial": "Reference",
          "signature": "RefName-\u003em(Maybe(Oid r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Reference.html#v:resolveReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Repository",
          "name": "Repository",
          "package": "gitlib",
          "source": "src/Git-Repository.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Repository",
          "module": "Git.Repository",
          "name": "Repository",
          "package": "gitlib",
          "partial": "Repository",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Repository",
          "name": "withNewRepository",
          "package": "gitlib",
          "signature": "RepositoryFactory n m r -\u003e FilePath -\u003e n a -\u003e m a",
          "source": "src/Git-Repository.html#withNewRepository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Repository",
          "module": "Git.Repository",
          "name": "withNewRepository",
          "normalized": "RepositoryFactory a b c-\u003eFilePath-\u003ea d-\u003eb d",
          "package": "gitlib",
          "partial": "New Repository",
          "signature": "RepositoryFactory n m r-\u003eFilePath-\u003en a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#v:withNewRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Repository",
          "name": "withNewRepository'",
          "package": "gitlib",
          "signature": "RepositoryFactory n m r -\u003e FilePath -\u003e n a -\u003e m a",
          "source": "src/Git-Repository.html#withNewRepository%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Repository",
          "module": "Git.Repository",
          "name": "withNewRepository'",
          "normalized": "RepositoryFactory a b c-\u003eFilePath-\u003ea d-\u003eb d",
          "package": "gitlib",
          "partial": "New Repository'",
          "signature": "RepositoryFactory n m r-\u003eFilePath-\u003en a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#v:withNewRepository-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Repository",
          "name": "withRepository",
          "package": "gitlib",
          "signature": "RepositoryFactory n m r -\u003e FilePath -\u003e n a -\u003e m a",
          "source": "src/Git-Repository.html#withRepository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Repository",
          "module": "Git.Repository",
          "name": "withRepository",
          "normalized": "RepositoryFactory a b c-\u003eFilePath-\u003ea d-\u003eb d",
          "package": "gitlib",
          "partial": "Repository",
          "signature": "RepositoryFactory n m r-\u003eFilePath-\u003en a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#v:withRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Repository",
          "name": "withRepository'",
          "package": "gitlib",
          "signature": "RepositoryFactory n m r -\u003e RepositoryOptions -\u003e n a -\u003e m a",
          "source": "src/Git-Repository.html#withRepository%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Repository",
          "module": "Git.Repository",
          "name": "withRepository'",
          "normalized": "RepositoryFactory a b c-\u003eRepositoryOptions-\u003ea d-\u003eb d",
          "package": "gitlib",
          "partial": "Repository'",
          "signature": "RepositoryFactory n m r-\u003eRepositoryOptions-\u003en a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#v:withRepository-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder.Pure",
          "name": "Pure",
          "package": "gitlib",
          "source": "src/Git-Tree-Builder-Pure.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Tree Builder Pure",
          "module": "Git.Tree.Builder.Pure",
          "name": "Pure",
          "package": "gitlib",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder.Pure",
          "name": "EntryHashMap",
          "package": "gitlib",
          "source": "src/Git-Tree-Builder-Pure.html#EntryHashMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Tree Builder Pure",
          "module": "Git.Tree.Builder.Pure",
          "name": "EntryHashMap",
          "package": "gitlib",
          "partial": "Entry Hash Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder-Pure.html#t:EntryHashMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new, empty tree.\n\u003c/p\u003e\u003cp\u003eSince empty trees cannot exist in Git, attempting to write out an empty\n   tree is a no-op.\n\u003c/p\u003e",
          "module": "Git.Tree.Builder.Pure",
          "name": "newPureTreeBuilder",
          "package": "gitlib",
          "signature": "(Tree r -\u003e m (EntryHashMap r)) -\u003e (EntryHashMap r -\u003e m (TreeOid r)) -\u003e Maybe (Tree r) -\u003e m (TreeBuilder r m)",
          "source": "src/Git-Tree-Builder-Pure.html#newPureTreeBuilder",
          "type": "function"
        },
        "index": {
          "description": "Create new empty tree Since empty trees cannot exist in Git attempting to write out an empty tree is no-op",
          "hierarchy": "Git Tree Builder Pure",
          "module": "Git.Tree.Builder.Pure",
          "name": "newPureTreeBuilder",
          "normalized": "(Tree a-\u003eb(EntryHashMap a))-\u003e(EntryHashMap a-\u003eb(TreeOid a))-\u003eMaybe(Tree a)-\u003eb(TreeBuilder a b)",
          "package": "gitlib",
          "partial": "Pure Tree Builder",
          "signature": "(Tree r-\u003em(EntryHashMap r))-\u003e(EntryHashMap r-\u003em(TreeOid r))-\u003eMaybe(Tree r)-\u003em(TreeBuilder r m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder-Pure.html#v:newPureTreeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "Builder",
          "package": "gitlib",
          "source": "src/Git-Tree-Builder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "Builder",
          "package": "gitlib",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "ModifiedBuilder",
          "package": "gitlib",
          "source": "src/Git-Types.html#ModifiedBuilder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "ModifiedBuilder",
          "package": "gitlib",
          "partial": "Modified Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#t:ModifiedBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "ModifyTreeResult",
          "package": "gitlib",
          "source": "src/Git-Tree-Builder.html#ModifyTreeResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "ModifyTreeResult",
          "package": "gitlib",
          "partial": "Modify Tree Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#t:ModifyTreeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "TreeBuilder",
          "package": "gitlib",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "TreeBuilder",
          "package": "gitlib",
          "partial": "Tree Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#t:TreeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "TreeT",
          "package": "gitlib",
          "source": "src/Git-Tree-Builder.html#TreeT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "TreeT",
          "package": "gitlib",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#t:TreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "BuilderUnchanged",
          "package": "gitlib",
          "signature": "BuilderUnchanged (TreeBuilder r m)",
          "source": "src/Git-Types.html#ModifiedBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:BuilderUnchanged\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BuilderUnchanged\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "BuilderUnchanged",
          "package": "gitlib",
          "partial": "Builder Unchanged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:BuilderUnchanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "ModifiedBuilder",
          "package": "gitlib",
          "signature": "ModifiedBuilder (TreeBuilder r m)",
          "source": "src/Git-Types.html#ModifiedBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:ModifiedBuilder\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ModifiedBuilder\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "ModifiedBuilder",
          "package": "gitlib",
          "partial": "Modified Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:ModifiedBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "TreeBuilder",
          "package": "gitlib",
          "signature": "TreeBuilder",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeBuilder\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilder\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "TreeBuilder",
          "package": "gitlib",
          "partial": "Tree Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "TreeEntryDeleted",
          "package": "gitlib",
          "signature": "TreeEntryDeleted",
          "source": "src/Git-Tree-Builder.html#ModifyTreeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "TreeEntryDeleted",
          "package": "gitlib",
          "partial": "Tree Entry Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeEntryDeleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "TreeEntryMutated",
          "package": "gitlib",
          "signature": "TreeEntryMutated (TreeEntry r)",
          "source": "src/Git-Tree-Builder.html#ModifyTreeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "TreeEntryMutated",
          "package": "gitlib",
          "partial": "Tree Entry Mutated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeEntryMutated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "TreeEntryNotFound",
          "package": "gitlib",
          "signature": "TreeEntryNotFound",
          "source": "src/Git-Tree-Builder.html#ModifyTreeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "TreeEntryNotFound",
          "package": "gitlib",
          "partial": "Tree Entry Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeEntryNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "TreeEntryPersistent",
          "package": "gitlib",
          "signature": "TreeEntryPersistent (TreeEntry r)",
          "source": "src/Git-Tree-Builder.html#ModifyTreeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "TreeEntryPersistent",
          "package": "gitlib",
          "partial": "Tree Entry Persistent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeEntryPersistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "createTree",
          "package": "gitlib",
          "signature": "TreeT r m a -\u003e m (TreeOid r)",
          "source": "src/Git-Tree-Builder.html#createTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "createTree",
          "normalized": "TreeT a b c-\u003eb(TreeOid a)",
          "package": "gitlib",
          "partial": "Tree",
          "signature": "TreeT r m a-\u003em(TreeOid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:createTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "currentTree",
          "package": "gitlib",
          "signature": "TreeT r m (Tree r)",
          "source": "src/Git-Tree-Builder.html#currentTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "currentTree",
          "package": "gitlib",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:currentTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "currentTreeOid",
          "package": "gitlib",
          "signature": "TreeT r m (TreeOid r)",
          "source": "src/Git-Tree-Builder.html#currentTreeOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "currentTreeOid",
          "package": "gitlib",
          "partial": "Tree Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:currentTreeOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "dropEntry",
          "package": "gitlib",
          "signature": "TreeFilePath -\u003e TreeT r m ()",
          "source": "src/Git-Tree-Builder.html#dropEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "dropEntry",
          "normalized": "TreeFilePath-\u003eTreeT a b()",
          "package": "gitlib",
          "partial": "Entry",
          "signature": "TreeFilePath-\u003eTreeT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:dropEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "emptyTreeId",
          "package": "gitlib",
          "signature": "Text",
          "source": "src/Git-Tree-Builder.html#emptyTreeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "emptyTreeId",
          "package": "gitlib",
          "partial": "Tree Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:emptyTreeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "fromModifyTreeResult",
          "package": "gitlib",
          "signature": "ModifyTreeResult r -\u003e Maybe (TreeEntry r)",
          "source": "src/Git-Tree-Builder.html#fromModifyTreeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "fromModifyTreeResult",
          "normalized": "ModifyTreeResult a-\u003eMaybe(TreeEntry a)",
          "package": "gitlib",
          "partial": "Modify Tree Result",
          "signature": "ModifyTreeResult r-\u003eMaybe(TreeEntry r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:fromModifyTreeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "getEntry",
          "package": "gitlib",
          "signature": "TreeFilePath -\u003e TreeT r m (Maybe (TreeEntry r))",
          "source": "src/Git-Tree-Builder.html#getEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "getEntry",
          "normalized": "TreeFilePath-\u003eTreeT a b(Maybe(TreeEntry a))",
          "package": "gitlib",
          "partial": "Entry",
          "signature": "TreeFilePath-\u003eTreeT r m(Maybe(TreeEntry r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:getEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "mtbBaseTreeOid",
          "package": "gitlib",
          "signature": "Maybe (TreeOid r)",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbBaseTreeOid\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbBaseTreeOid\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mtbBaseTreeOid",
          "package": "gitlib",
          "partial": "Base Tree Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbBaseTreeOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "mtbDropEntry",
          "package": "gitlib",
          "signature": "TreeBuilder r m -\u003e TreeFilePath -\u003e m (ModifiedBuilder r m)",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbDropEntry\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbDropEntry\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mtbDropEntry",
          "normalized": "TreeBuilder a b-\u003eTreeFilePath-\u003eb(ModifiedBuilder a b)",
          "package": "gitlib",
          "partial": "Drop Entry",
          "signature": "TreeBuilder r m-\u003eTreeFilePath-\u003em(ModifiedBuilder r m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbDropEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "mtbEntryCount",
          "package": "gitlib",
          "signature": "m Int",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbEntryCount\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbEntryCount\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mtbEntryCount",
          "package": "gitlib",
          "partial": "Entry Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbEntryCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "mtbLookupEntry",
          "package": "gitlib",
          "signature": "TreeFilePath -\u003e m (Maybe (TreeEntry r))",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbLookupEntry\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbLookupEntry\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mtbLookupEntry",
          "normalized": "TreeFilePath-\u003ea(Maybe(TreeEntry b))",
          "package": "gitlib",
          "partial": "Lookup Entry",
          "signature": "TreeFilePath-\u003em(Maybe(TreeEntry r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbLookupEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "mtbNewBuilder",
          "package": "gitlib",
          "signature": "Maybe (Tree r) -\u003e m (TreeBuilder r m)",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbNewBuilder\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbNewBuilder\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mtbNewBuilder",
          "normalized": "Maybe(Tree a)-\u003eb(TreeBuilder a b)",
          "package": "gitlib",
          "partial": "New Builder",
          "signature": "Maybe(Tree r)-\u003em(TreeBuilder r m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbNewBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "mtbPendingUpdates",
          "package": "gitlib",
          "signature": "HashMap TreeFilePath (TreeBuilder r m)",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbPendingUpdates\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbPendingUpdates\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mtbPendingUpdates",
          "package": "gitlib",
          "partial": "Pending Updates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbPendingUpdates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "mtbPutEntry",
          "package": "gitlib",
          "signature": "TreeBuilder r m -\u003e TreeFilePath -\u003e TreeEntry r -\u003e m (ModifiedBuilder r m)",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbPutEntry\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbPutEntry\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mtbPutEntry",
          "normalized": "TreeBuilder a b-\u003eTreeFilePath-\u003eTreeEntry a-\u003eb(ModifiedBuilder a b)",
          "package": "gitlib",
          "partial": "Put Entry",
          "signature": "TreeBuilder r m-\u003eTreeFilePath-\u003eTreeEntry r-\u003em(ModifiedBuilder r m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbPutEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Git.Tree.Builder\",\"Git.Types\"]",
          "name": "mtbWriteContents",
          "package": "gitlib",
          "signature": "TreeBuilder r m -\u003e m (ModifiedBuilder r m, TreeOid r)",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbWriteContents\",\"http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbWriteContents\"]"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mtbWriteContents",
          "normalized": "TreeBuilder a b-\u003eb(ModifiedBuilder a b,TreeOid a)",
          "package": "gitlib",
          "partial": "Write Contents",
          "signature": "TreeBuilder r m-\u003em(ModifiedBuilder r m,TreeOid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbWriteContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "mutateTree",
          "package": "gitlib",
          "signature": "Tree r -\u003e TreeT r m a -\u003e m (TreeOid r)",
          "source": "src/Git-Tree-Builder.html#mutateTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mutateTree",
          "normalized": "Tree a-\u003eTreeT a b c-\u003eb(TreeOid a)",
          "package": "gitlib",
          "partial": "Tree",
          "signature": "Tree r-\u003eTreeT r m a-\u003em(TreeOid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mutateTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "mutateTreeOid",
          "package": "gitlib",
          "signature": "TreeOid r -\u003e TreeT r m a -\u003e m (TreeOid r)",
          "source": "src/Git-Tree-Builder.html#mutateTreeOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "mutateTreeOid",
          "normalized": "TreeOid a-\u003eTreeT a b c-\u003eb(TreeOid a)",
          "package": "gitlib",
          "partial": "Tree Oid",
          "signature": "TreeOid r-\u003eTreeT r m a-\u003em(TreeOid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mutateTreeOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "putBlob",
          "package": "gitlib",
          "signature": "TreeFilePath -\u003e BlobOid r -\u003e TreeT r m ()",
          "source": "src/Git-Tree-Builder.html#putBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "putBlob",
          "normalized": "TreeFilePath-\u003eBlobOid a-\u003eTreeT a b()",
          "package": "gitlib",
          "partial": "Blob",
          "signature": "TreeFilePath-\u003eBlobOid r-\u003eTreeT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "putBlob'",
          "package": "gitlib",
          "signature": "TreeFilePath -\u003e BlobOid r -\u003e BlobKind -\u003e TreeT r m ()",
          "source": "src/Git-Tree-Builder.html#putBlob%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "putBlob'",
          "normalized": "TreeFilePath-\u003eBlobOid a-\u003eBlobKind-\u003eTreeT a b()",
          "package": "gitlib",
          "partial": "Blob'",
          "signature": "TreeFilePath-\u003eBlobOid r-\u003eBlobKind-\u003eTreeT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putBlob-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "putCommit",
          "package": "gitlib",
          "signature": "TreeFilePath -\u003e CommitOid r -\u003e TreeT r m ()",
          "source": "src/Git-Tree-Builder.html#putCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "putCommit",
          "normalized": "TreeFilePath-\u003eCommitOid a-\u003eTreeT a b()",
          "package": "gitlib",
          "partial": "Commit",
          "signature": "TreeFilePath-\u003eCommitOid r-\u003eTreeT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "putEntry",
          "package": "gitlib",
          "signature": "TreeFilePath -\u003e TreeEntry r -\u003e TreeT r m ()",
          "source": "src/Git-Tree-Builder.html#putEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "putEntry",
          "normalized": "TreeFilePath-\u003eTreeEntry a-\u003eTreeT a b()",
          "package": "gitlib",
          "partial": "Entry",
          "signature": "TreeFilePath-\u003eTreeEntry r-\u003eTreeT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "putTree",
          "package": "gitlib",
          "signature": "TreeFilePath -\u003e TreeOid r -\u003e TreeT r m ()",
          "source": "src/Git-Tree-Builder.html#putTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "putTree",
          "normalized": "TreeFilePath-\u003eTreeOid a-\u003eTreeT a b()",
          "package": "gitlib",
          "partial": "Tree",
          "signature": "TreeFilePath-\u003eTreeOid r-\u003eTreeT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "toModifyTreeResult",
          "package": "gitlib",
          "signature": "(TreeEntry r -\u003e ModifyTreeResult r) -\u003e Maybe (TreeEntry r) -\u003e ModifyTreeResult r",
          "source": "src/Git-Tree-Builder.html#toModifyTreeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "toModifyTreeResult",
          "normalized": "(TreeEntry a-\u003eModifyTreeResult a)-\u003eMaybe(TreeEntry a)-\u003eModifyTreeResult a",
          "package": "gitlib",
          "partial": "Modify Tree Result",
          "signature": "(TreeEntry r-\u003eModifyTreeResult r)-\u003eMaybe(TreeEntry r)-\u003eModifyTreeResult r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:toModifyTreeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "treeEntry",
          "package": "gitlib",
          "signature": "Tree r -\u003e TreeFilePath -\u003e m (Maybe (TreeEntry r))",
          "source": "src/Git-Types.html#treeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "treeEntry",
          "normalized": "Tree a-\u003eTreeFilePath-\u003eb(Maybe(TreeEntry a))",
          "package": "gitlib",
          "partial": "Entry",
          "signature": "Tree r-\u003eTreeFilePath-\u003em(Maybe(TreeEntry r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:treeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "withNewTree",
          "package": "gitlib",
          "signature": "TreeT r m a -\u003e m (a, TreeOid r)",
          "source": "src/Git-Tree-Builder.html#withNewTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "withNewTree",
          "normalized": "TreeT a b c-\u003eb(c,TreeOid a)",
          "package": "gitlib",
          "partial": "New Tree",
          "signature": "TreeT r m a-\u003em(a,TreeOid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:withNewTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "withTree",
          "package": "gitlib",
          "signature": "Tree r -\u003e TreeT r m a -\u003e m (a, TreeOid r)",
          "source": "src/Git-Tree-Builder.html#withTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "withTree",
          "normalized": "Tree a-\u003eTreeT a b c-\u003eb(c,TreeOid a)",
          "package": "gitlib",
          "partial": "Tree",
          "signature": "Tree r-\u003eTreeT r m a-\u003em(a,TreeOid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:withTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree.Builder",
          "name": "withTreeOid",
          "package": "gitlib",
          "signature": "TreeOid r -\u003e TreeT r m a -\u003e m (a, TreeOid r)",
          "source": "src/Git-Tree-Builder.html#withTreeOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree Builder",
          "module": "Git.Tree.Builder",
          "name": "withTreeOid",
          "normalized": "TreeOid a-\u003eTreeT a b c-\u003eb(c,TreeOid a)",
          "package": "gitlib",
          "partial": "Tree Oid",
          "signature": "TreeOid r-\u003eTreeT r m a-\u003em(a,TreeOid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:withTreeOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree",
          "name": "Tree",
          "package": "gitlib",
          "source": "src/Git-Tree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Tree",
          "module": "Git.Tree",
          "name": "Tree",
          "package": "gitlib",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree",
          "name": "copyTree",
          "package": "gitlib",
          "signature": "TreeOid r -\u003e HashSet Text -\u003e t m (TreeOid s, HashSet Text)",
          "source": "src/Git-Tree.html#copyTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree",
          "module": "Git.Tree",
          "name": "copyTree",
          "normalized": "TreeOid a-\u003eHashSet Text-\u003eb c(TreeOid d,HashSet Text)",
          "package": "gitlib",
          "partial": "Tree",
          "signature": "TreeOid r-\u003eHashSet Text-\u003et m(TreeOid s,HashSet Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree.html#v:copyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree",
          "name": "copyTreeEntry",
          "package": "gitlib",
          "signature": "TreeEntry r -\u003e HashSet Text -\u003e t m (TreeEntry s, HashSet Text)",
          "source": "src/Git-Tree.html#copyTreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree",
          "module": "Git.Tree",
          "name": "copyTreeEntry",
          "normalized": "TreeEntry a-\u003eHashSet Text-\u003eb c(TreeEntry d,HashSet Text)",
          "package": "gitlib",
          "partial": "Tree Entry",
          "signature": "TreeEntry r-\u003eHashSet Text-\u003et m(TreeEntry s,HashSet Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree.html#v:copyTreeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Tree",
          "name": "listTreeEntries",
          "package": "gitlib",
          "signature": "Tree r -\u003e m [(TreeFilePath, TreeEntry r)]",
          "source": "src/Git-Tree.html#listTreeEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Tree",
          "module": "Git.Tree",
          "name": "listTreeEntries",
          "normalized": "Tree a-\u003eb[(TreeFilePath,TreeEntry a)]",
          "package": "gitlib",
          "partial": "Tree Entries",
          "signature": "Tree r-\u003em[(TreeFilePath,TreeEntry r)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree.html#v:listTreeEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a brief introductory tutorial in the \"Introduction\"\n    section followed by a lengthy discussion of the library's design and idioms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Git.Tutorial",
          "name": "Tutorial",
          "package": "gitlib",
          "source": "src/Git-Tutorial.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides brief introductory tutorial in the Introduction section followed by lengthy discussion of the library design and idioms",
          "hierarchy": "Git Tutorial",
          "module": "Git.Tutorial",
          "name": "Tutorial",
          "package": "gitlib",
          "partial": "Tutorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tutorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Types",
          "package": "gitlib",
          "source": "src/Git-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Types",
          "package": "gitlib",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Blob",
          "package": "gitlib",
          "source": "src/Git-Types.html#Blob",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Blob",
          "package": "gitlib",
          "partial": "Blob",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobContents",
          "package": "gitlib",
          "source": "src/Git-Types.html#BlobContents",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobContents",
          "package": "gitlib",
          "partial": "Blob Contents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:BlobContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobKind",
          "package": "gitlib",
          "source": "src/Git-Types.html#BlobKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobKind",
          "package": "gitlib",
          "partial": "Blob Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:BlobKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobOid",
          "package": "gitlib",
          "source": "src/Git-Types.html#BlobOid",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobOid",
          "package": "gitlib",
          "partial": "Blob Oid",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:BlobOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ByteSource",
          "package": "gitlib",
          "source": "src/Git-Types.html#ByteSource",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ByteSource",
          "package": "gitlib",
          "partial": "Byte Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:ByteSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Commit",
          "package": "gitlib",
          "source": "src/Git-Types.html#Commit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Commit",
          "package": "gitlib",
          "partial": "Commit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "CommitAuthor",
          "package": "gitlib",
          "source": "src/Git-Types.html#CommitAuthor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "CommitAuthor",
          "package": "gitlib",
          "partial": "Commit Author",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:CommitAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "CommitEmail",
          "package": "gitlib",
          "source": "src/Git-Types.html#CommitEmail",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "CommitEmail",
          "package": "gitlib",
          "partial": "Commit Email",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:CommitEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "CommitMessage",
          "package": "gitlib",
          "source": "src/Git-Types.html#CommitMessage",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "CommitMessage",
          "package": "gitlib",
          "partial": "Commit Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:CommitMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "CommitOid",
          "package": "gitlib",
          "source": "src/Git-Types.html#CommitOid",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "CommitOid",
          "package": "gitlib",
          "partial": "Commit Oid",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:CommitOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is a separate \u003ccode\u003e\u003ca\u003eGitException\u003c/a\u003e\u003c/code\u003e for each possible failure when\n   interacting with the Git repository.\n\u003c/p\u003e",
          "module": "Git.Types",
          "name": "GitException",
          "package": "gitlib",
          "source": "src/Git-Types.html#GitException",
          "type": "data"
        },
        "index": {
          "description": "There is separate GitException for each possible failure when interacting with the Git repository",
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "GitException",
          "package": "gitlib",
          "partial": "Git Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:GitException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "IsOid",
          "package": "gitlib",
          "source": "src/Git-Types.html#IsOid",
          "type": "class"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "IsOid",
          "package": "gitlib",
          "partial": "Is Oid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:IsOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "MergeResult",
          "package": "gitlib",
          "source": "src/Git-Types.html#MergeResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "MergeResult",
          "package": "gitlib",
          "partial": "Merge Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:MergeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "MergeStatus",
          "package": "gitlib",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "MergeStatus",
          "package": "gitlib",
          "partial": "Merge Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:MergeStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ModificationKind",
          "package": "gitlib",
          "source": "src/Git-Types.html#ModificationKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ModificationKind",
          "package": "gitlib",
          "partial": "Modification Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:ModificationKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ModifiedBuilder",
          "package": "gitlib",
          "source": "src/Git-Types.html#ModifiedBuilder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ModifiedBuilder",
          "package": "gitlib",
          "partial": "Modified Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:ModifiedBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eRepository\u003c/code\u003e is the central point of contact between user code and Git\n   data objects.  Every object must belong to some repository.\n\u003c/p\u003e",
          "module": "Git.Types",
          "name": "MonadGit",
          "package": "gitlib",
          "source": "src/Git-Types.html#MonadGit",
          "type": "class"
        },
        "index": {
          "description": "Repository is the central point of contact between user code and Git data objects Every object must belong to some repository",
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "MonadGit",
          "package": "gitlib",
          "partial": "Monad Git",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:MonadGit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Object",
          "package": "gitlib",
          "source": "src/Git-Types.html#Object",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Object",
          "package": "gitlib",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ObjectOid",
          "package": "gitlib",
          "source": "src/Git-Types.html#ObjectOid",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ObjectOid",
          "package": "gitlib",
          "partial": "Object Oid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:ObjectOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RawFilePath",
          "package": "gitlib",
          "source": "src/Git-Types.html#RawFilePath",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RawFilePath",
          "package": "gitlib",
          "partial": "Raw File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RawFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RefName",
          "package": "gitlib",
          "source": "src/Git-Types.html#RefName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RefName",
          "package": "gitlib",
          "partial": "Ref Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RefName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RefTarget",
          "package": "gitlib",
          "source": "src/Git-Types.html#RefTarget",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RefTarget",
          "package": "gitlib",
          "partial": "Ref Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RefTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RepositoryFactory",
          "package": "gitlib",
          "source": "src/Git-Types.html#RepositoryFactory",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RepositoryFactory",
          "package": "gitlib",
          "partial": "Repository Factory",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RepositoryFactory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RepositoryFacts",
          "package": "gitlib",
          "source": "src/Git-Types.html#RepositoryFacts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RepositoryFacts",
          "package": "gitlib",
          "partial": "Repository Facts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RepositoryFacts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RepositoryOptions",
          "package": "gitlib",
          "source": "src/Git-Types.html#RepositoryOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RepositoryOptions",
          "package": "gitlib",
          "partial": "Repository Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RepositoryOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "SHA",
          "package": "gitlib",
          "source": "src/Git-Types.html#SHA",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "SHA",
          "package": "gitlib",
          "partial": "SHA",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:SHA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Signature",
          "package": "gitlib",
          "source": "src/Git-Types.html#Signature",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Signature",
          "package": "gitlib",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Tag",
          "package": "gitlib",
          "source": "src/Git-Types.html#Tag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Tag",
          "package": "gitlib",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TagOid",
          "package": "gitlib",
          "source": "src/Git-Types.html#TagOid",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TagOid",
          "package": "gitlib",
          "partial": "Tag Oid",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TagOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeBuilder",
          "package": "gitlib",
          "source": "src/Git-Types.html#TreeBuilder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeBuilder",
          "package": "gitlib",
          "partial": "Tree Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TreeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeEntry",
          "package": "gitlib",
          "source": "src/Git-Types.html#TreeEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeEntry",
          "package": "gitlib",
          "partial": "Tree Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TreeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeFilePath",
          "package": "gitlib",
          "source": "src/Git-Types.html#TreeFilePath",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeFilePath",
          "package": "gitlib",
          "partial": "Tree File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TreeFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeOid",
          "package": "gitlib",
          "source": "src/Git-Types.html#TreeOid",
          "type": "type"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeOid",
          "package": "gitlib",
          "partial": "Tree Oid",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TreeOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Added",
          "package": "gitlib",
          "signature": "Added",
          "source": "src/Git-Types.html#ModificationKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Added",
          "package": "gitlib",
          "partial": "Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Added"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BackendError",
          "package": "gitlib",
          "signature": "BackendError Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BackendError",
          "package": "gitlib",
          "partial": "Backend Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BackendError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Blob",
          "package": "gitlib",
          "signature": "Blob",
          "source": "src/Git-Types.html#Blob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Blob",
          "package": "gitlib",
          "partial": "Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobCreateFailed",
          "package": "gitlib",
          "signature": "BlobCreateFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobCreateFailed",
          "package": "gitlib",
          "partial": "Blob Create Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobCreateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobEmptyCreateFailed",
          "package": "gitlib",
          "signature": "BlobEmptyCreateFailed",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobEmptyCreateFailed",
          "package": "gitlib",
          "partial": "Blob Empty Create Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobEmptyCreateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobEncodingUnknown",
          "package": "gitlib",
          "signature": "BlobEncodingUnknown Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobEncodingUnknown",
          "package": "gitlib",
          "partial": "Blob Encoding Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobEncodingUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobEntry",
          "package": "gitlib",
          "signature": "BlobEntry",
          "source": "src/Git-Types.html#TreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobEntry",
          "package": "gitlib",
          "partial": "Blob Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobLookupFailed",
          "package": "gitlib",
          "signature": "BlobLookupFailed",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobLookupFailed",
          "package": "gitlib",
          "partial": "Blob Lookup Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobLookupFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobObj",
          "package": "gitlib",
          "signature": "BlobObj !(Blob r m)",
          "source": "src/Git-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobObj",
          "package": "gitlib",
          "partial": "Blob Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobObjOid",
          "package": "gitlib",
          "signature": "BlobObjOid !(BlobOid r)",
          "source": "src/Git-Types.html#ObjectOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobObjOid",
          "package": "gitlib",
          "partial": "Blob Obj Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobObjOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobSizedStream",
          "package": "gitlib",
          "signature": "BlobSizedStream !(ByteSource m) !Int",
          "source": "src/Git-Types.html#BlobContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobSizedStream",
          "package": "gitlib",
          "partial": "Blob Sized Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobSizedStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobStream",
          "package": "gitlib",
          "signature": "BlobStream !(ByteSource m)",
          "source": "src/Git-Types.html#BlobContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobStream",
          "package": "gitlib",
          "partial": "Blob Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobString",
          "package": "gitlib",
          "signature": "BlobString !ByteString",
          "source": "src/Git-Types.html#BlobContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobString",
          "package": "gitlib",
          "partial": "Blob String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BlobStringLazy",
          "package": "gitlib",
          "signature": "BlobStringLazy !ByteString",
          "source": "src/Git-Types.html#BlobContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BlobStringLazy",
          "package": "gitlib",
          "partial": "Blob String Lazy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobStringLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BothAdded",
          "package": "gitlib",
          "signature": "BothAdded",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BothAdded",
          "package": "gitlib",
          "partial": "Both Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BothAdded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BothModified",
          "package": "gitlib",
          "signature": "BothModified",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BothModified",
          "package": "gitlib",
          "partial": "Both Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BothModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "BothTypeChanged",
          "package": "gitlib",
          "signature": "BothTypeChanged",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "BothTypeChanged",
          "package": "gitlib",
          "partial": "Both Type Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BothTypeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Commit",
          "package": "gitlib",
          "signature": "Commit",
          "source": "src/Git-Types.html#Commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Commit",
          "package": "gitlib",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "CommitCreateFailed",
          "package": "gitlib",
          "signature": "CommitCreateFailed",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "CommitCreateFailed",
          "package": "gitlib",
          "partial": "Commit Create Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitCreateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "CommitEntry",
          "package": "gitlib",
          "signature": "CommitEntry",
          "source": "src/Git-Types.html#TreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "CommitEntry",
          "package": "gitlib",
          "partial": "Commit Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "CommitLookupFailed",
          "package": "gitlib",
          "signature": "CommitLookupFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "CommitLookupFailed",
          "package": "gitlib",
          "partial": "Commit Lookup Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitLookupFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "CommitObj",
          "package": "gitlib",
          "signature": "CommitObj !(Commit r)",
          "source": "src/Git-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "CommitObj",
          "package": "gitlib",
          "partial": "Commit Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "CommitObjOid",
          "package": "gitlib",
          "signature": "CommitObjOid !(CommitOid r)",
          "source": "src/Git-Types.html#ObjectOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "CommitObjOid",
          "package": "gitlib",
          "partial": "Commit Obj Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitObjOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Deleted",
          "package": "gitlib",
          "signature": "Deleted",
          "source": "src/Git-Types.html#ModificationKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Deleted",
          "package": "gitlib",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "DiffBlobFailed",
          "package": "gitlib",
          "signature": "DiffBlobFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "DiffBlobFailed",
          "package": "gitlib",
          "partial": "Diff Blob Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:DiffBlobFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "DiffPrintToPatchFailed",
          "package": "gitlib",
          "signature": "DiffPrintToPatchFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "DiffPrintToPatchFailed",
          "package": "gitlib",
          "partial": "Diff Print To Patch Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:DiffPrintToPatchFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "DiffTreeToIndexFailed",
          "package": "gitlib",
          "signature": "DiffTreeToIndexFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "DiffTreeToIndexFailed",
          "package": "gitlib",
          "partial": "Diff Tree To Index Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:DiffTreeToIndexFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ExecutableBlob",
          "package": "gitlib",
          "signature": "ExecutableBlob",
          "source": "src/Git-Types.html#BlobKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ExecutableBlob",
          "package": "gitlib",
          "partial": "Executable Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ExecutableBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "GitError",
          "package": "gitlib",
          "signature": "GitError Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "GitError",
          "package": "gitlib",
          "partial": "Git Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:GitError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "IndexAddFailed",
          "package": "gitlib",
          "signature": "IndexAddFailed TreeFilePath Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "IndexAddFailed",
          "package": "gitlib",
          "partial": "Index Add Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:IndexAddFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "IndexCreateFailed",
          "package": "gitlib",
          "signature": "IndexCreateFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "IndexCreateFailed",
          "package": "gitlib",
          "partial": "Index Create Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:IndexCreateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "LeftDeletedRightModified",
          "package": "gitlib",
          "signature": "LeftDeletedRightModified",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "LeftDeletedRightModified",
          "package": "gitlib",
          "partial": "Left Deleted Right Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftDeletedRightModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "LeftDeletedRightTypeChanged",
          "package": "gitlib",
          "signature": "LeftDeletedRightTypeChanged",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "LeftDeletedRightTypeChanged",
          "package": "gitlib",
          "partial": "Left Deleted Right Type Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftDeletedRightTypeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "LeftModifiedRightDeleted",
          "package": "gitlib",
          "signature": "LeftModifiedRightDeleted",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "LeftModifiedRightDeleted",
          "package": "gitlib",
          "partial": "Left Modified Right Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftModifiedRightDeleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "LeftModifiedRightTypeChanged",
          "package": "gitlib",
          "signature": "LeftModifiedRightTypeChanged",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "LeftModifiedRightTypeChanged",
          "package": "gitlib",
          "partial": "Left Modified Right Type Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftModifiedRightTypeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "LeftTypeChangedRightDeleted",
          "package": "gitlib",
          "signature": "LeftTypeChangedRightDeleted",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "LeftTypeChangedRightDeleted",
          "package": "gitlib",
          "partial": "Left Type Changed Right Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftTypeChangedRightDeleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "LeftTypeChangedRightModified",
          "package": "gitlib",
          "signature": "LeftTypeChangedRightModified",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "LeftTypeChangedRightModified",
          "package": "gitlib",
          "partial": "Left Type Changed Right Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftTypeChangedRightModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "MergeConflicted",
          "package": "gitlib",
          "signature": "MergeConflicted",
          "source": "src/Git-Types.html#MergeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "MergeConflicted",
          "package": "gitlib",
          "partial": "Merge Conflicted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:MergeConflicted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "MergeSuccess",
          "package": "gitlib",
          "signature": "MergeSuccess",
          "source": "src/Git-Types.html#MergeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "MergeSuccess",
          "package": "gitlib",
          "partial": "Merge Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:MergeSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Modified",
          "package": "gitlib",
          "signature": "Modified",
          "source": "src/Git-Types.html#ModificationKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Modified",
          "package": "gitlib",
          "partial": "Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "NoConflict",
          "package": "gitlib",
          "signature": "NoConflict",
          "source": "src/Git-Types.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "NoConflict",
          "package": "gitlib",
          "partial": "No Conflict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:NoConflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ObjectLookupFailed",
          "package": "gitlib",
          "signature": "ObjectLookupFailed Text Int",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ObjectLookupFailed",
          "package": "gitlib",
          "partial": "Object Lookup Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ObjectLookupFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ObjectRefRequiresFullOid",
          "package": "gitlib",
          "signature": "ObjectRefRequiresFullOid",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ObjectRefRequiresFullOid",
          "package": "gitlib",
          "partial": "Object Ref Requires Full Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ObjectRefRequiresFullOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "OidCopyFailed",
          "package": "gitlib",
          "signature": "OidCopyFailed",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "OidCopyFailed",
          "package": "gitlib",
          "partial": "Oid Copy Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:OidCopyFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "OidParseFailed",
          "package": "gitlib",
          "signature": "OidParseFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "OidParseFailed",
          "package": "gitlib",
          "partial": "Oid Parse Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:OidParseFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "PathEncodingError",
          "package": "gitlib",
          "signature": "PathEncodingError Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "PathEncodingError",
          "package": "gitlib",
          "partial": "Path Encoding Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:PathEncodingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "PlainBlob",
          "package": "gitlib",
          "signature": "PlainBlob",
          "source": "src/Git-Types.html#BlobKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "PlainBlob",
          "package": "gitlib",
          "partial": "Plain Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:PlainBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "PushNotFastForward",
          "package": "gitlib",
          "signature": "PushNotFastForward Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "PushNotFastForward",
          "package": "gitlib",
          "partial": "Push Not Fast Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:PushNotFastForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "QuotaHardLimitExceeded",
          "package": "gitlib",
          "signature": "QuotaHardLimitExceeded Int Int",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "QuotaHardLimitExceeded",
          "package": "gitlib",
          "partial": "Quota Hard Limit Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:QuotaHardLimitExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RefCannotCreateFromPartialOid",
          "package": "gitlib",
          "signature": "RefCannotCreateFromPartialOid",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RefCannotCreateFromPartialOid",
          "package": "gitlib",
          "partial": "Ref Cannot Create From Partial Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RefCannotCreateFromPartialOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RefObj",
          "package": "gitlib",
          "signature": "RefObj !(Oid r)",
          "source": "src/Git-Types.html#RefTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RefObj",
          "package": "gitlib",
          "partial": "Ref Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RefObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RefSymbolic",
          "package": "gitlib",
          "signature": "RefSymbolic !RefName",
          "source": "src/Git-Types.html#RefTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RefSymbolic",
          "package": "gitlib",
          "partial": "Ref Symbolic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RefSymbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ReferenceCreateFailed",
          "package": "gitlib",
          "signature": "ReferenceCreateFailed RefName",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ReferenceCreateFailed",
          "package": "gitlib",
          "partial": "Reference Create Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ReferenceCreateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ReferenceDeleteFailed",
          "package": "gitlib",
          "signature": "ReferenceDeleteFailed RefName",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ReferenceDeleteFailed",
          "package": "gitlib",
          "partial": "Reference Delete Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ReferenceDeleteFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ReferenceListingFailed",
          "package": "gitlib",
          "signature": "ReferenceListingFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ReferenceListingFailed",
          "package": "gitlib",
          "partial": "Reference Listing Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ReferenceListingFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "ReferenceLookupFailed",
          "package": "gitlib",
          "signature": "ReferenceLookupFailed RefName",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "ReferenceLookupFailed",
          "package": "gitlib",
          "partial": "Reference Lookup Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ReferenceLookupFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RepositoryCannotAccess",
          "package": "gitlib",
          "signature": "RepositoryCannotAccess Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RepositoryCannotAccess",
          "package": "gitlib",
          "partial": "Repository Cannot Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryCannotAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RepositoryFactory",
          "package": "gitlib",
          "signature": "RepositoryFactory",
          "source": "src/Git-Types.html#RepositoryFactory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RepositoryFactory",
          "package": "gitlib",
          "partial": "Repository Factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryFactory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RepositoryFacts",
          "package": "gitlib",
          "signature": "RepositoryFacts",
          "source": "src/Git-Types.html#RepositoryFacts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RepositoryFacts",
          "package": "gitlib",
          "partial": "Repository Facts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryFacts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RepositoryInvalid",
          "package": "gitlib",
          "signature": "RepositoryInvalid",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RepositoryInvalid",
          "package": "gitlib",
          "partial": "Repository Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RepositoryNotExist",
          "package": "gitlib",
          "signature": "RepositoryNotExist",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RepositoryNotExist",
          "package": "gitlib",
          "partial": "Repository Not Exist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryNotExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "RepositoryOptions",
          "package": "gitlib",
          "signature": "RepositoryOptions",
          "source": "src/Git-Types.html#RepositoryOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "RepositoryOptions",
          "package": "gitlib",
          "partial": "Repository Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "SHA",
          "package": "gitlib",
          "signature": "SHA",
          "source": "src/Git-Types.html#SHA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "SHA",
          "package": "gitlib",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:SHA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Signature",
          "package": "gitlib",
          "signature": "Signature",
          "source": "src/Git-Types.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Signature",
          "package": "gitlib",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "SymlinkBlob",
          "package": "gitlib",
          "signature": "SymlinkBlob",
          "source": "src/Git-Types.html#BlobKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "SymlinkBlob",
          "package": "gitlib",
          "partial": "Symlink Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:SymlinkBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Tag",
          "package": "gitlib",
          "signature": "Tag",
          "source": "src/Git-Types.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Tag",
          "package": "gitlib",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TagObj",
          "package": "gitlib",
          "signature": "TagObj !(Tag r)",
          "source": "src/Git-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TagObj",
          "package": "gitlib",
          "partial": "Tag Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TagObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TagObjOid",
          "package": "gitlib",
          "signature": "TagObjOid !(TagOid r)",
          "source": "src/Git-Types.html#ObjectOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TagObjOid",
          "package": "gitlib",
          "partial": "Tag Obj Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TagObjOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TranslationException",
          "package": "gitlib",
          "signature": "TranslationException Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TranslationException",
          "package": "gitlib",
          "partial": "Translation Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TranslationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeBuilderCreateFailed",
          "package": "gitlib",
          "signature": "TreeBuilderCreateFailed",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeBuilderCreateFailed",
          "package": "gitlib",
          "partial": "Tree Builder Create Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilderCreateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeBuilderInsertFailed",
          "package": "gitlib",
          "signature": "TreeBuilderInsertFailed TreeFilePath",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeBuilderInsertFailed",
          "package": "gitlib",
          "partial": "Tree Builder Insert Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilderInsertFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeBuilderRemoveFailed",
          "package": "gitlib",
          "signature": "TreeBuilderRemoveFailed TreeFilePath",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeBuilderRemoveFailed",
          "package": "gitlib",
          "partial": "Tree Builder Remove Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilderRemoveFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeBuilderWriteFailed",
          "package": "gitlib",
          "signature": "TreeBuilderWriteFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeBuilderWriteFailed",
          "package": "gitlib",
          "partial": "Tree Builder Write Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilderWriteFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeCannotTraverseBlob",
          "package": "gitlib",
          "signature": "TreeCannotTraverseBlob",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeCannotTraverseBlob",
          "package": "gitlib",
          "partial": "Tree Cannot Traverse Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeCannotTraverseBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeCannotTraverseCommit",
          "package": "gitlib",
          "signature": "TreeCannotTraverseCommit",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeCannotTraverseCommit",
          "package": "gitlib",
          "partial": "Tree Cannot Traverse Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeCannotTraverseCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeCreateFailed",
          "package": "gitlib",
          "signature": "TreeCreateFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeCreateFailed",
          "package": "gitlib",
          "partial": "Tree Create Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeCreateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeEmptyCreateFailed",
          "package": "gitlib",
          "signature": "TreeEmptyCreateFailed",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeEmptyCreateFailed",
          "package": "gitlib",
          "partial": "Tree Empty Create Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeEmptyCreateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeEntry",
          "package": "gitlib",
          "signature": "TreeEntry",
          "source": "src/Git-Types.html#TreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeEntry",
          "package": "gitlib",
          "partial": "Tree Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeEntryLookupFailed",
          "package": "gitlib",
          "signature": "TreeEntryLookupFailed TreeFilePath",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeEntryLookupFailed",
          "package": "gitlib",
          "partial": "Tree Entry Lookup Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeEntryLookupFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeLookupFailed",
          "package": "gitlib",
          "signature": "TreeLookupFailed",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeLookupFailed",
          "package": "gitlib",
          "partial": "Tree Lookup Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeLookupFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeObj",
          "package": "gitlib",
          "signature": "TreeObj !(Tree r)",
          "source": "src/Git-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeObj",
          "package": "gitlib",
          "partial": "Tree Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeObjOid",
          "package": "gitlib",
          "signature": "TreeObjOid !(TreeOid r)",
          "source": "src/Git-Types.html#ObjectOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeObjOid",
          "package": "gitlib",
          "partial": "Tree Obj Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeObjOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeUpdateFailed",
          "package": "gitlib",
          "signature": "TreeUpdateFailed",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeUpdateFailed",
          "package": "gitlib",
          "partial": "Tree Update Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeUpdateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TreeWalkFailed",
          "package": "gitlib",
          "signature": "TreeWalkFailed Text",
          "source": "src/Git-Types.html#GitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TreeWalkFailed",
          "package": "gitlib",
          "partial": "Tree Walk Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeWalkFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "TypeChanged",
          "package": "gitlib",
          "signature": "TypeChanged",
          "source": "src/Git-Types.html#ModificationKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "TypeChanged",
          "package": "gitlib",
          "partial": "Type Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TypeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "Unchanged",
          "package": "gitlib",
          "signature": "Unchanged",
          "source": "src/Git-Types.html#ModificationKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "Unchanged",
          "package": "gitlib",
          "partial": "Unchanged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Unchanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "blobContents",
          "package": "gitlib",
          "signature": "(BlobContents m)",
          "source": "src/Git-Types.html#Blob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "blobContents",
          "package": "gitlib",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:blobContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "blobEntryKind",
          "package": "gitlib",
          "signature": "BlobKind",
          "source": "src/Git-Types.html#TreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "blobEntryKind",
          "package": "gitlib",
          "partial": "Entry Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:blobEntryKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "blobEntryOid",
          "package": "gitlib",
          "signature": "(BlobOid r)",
          "source": "src/Git-Types.html#TreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "blobEntryOid",
          "package": "gitlib",
          "partial": "Entry Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:blobEntryOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "blobOid",
          "package": "gitlib",
          "signature": "(BlobOid r)",
          "source": "src/Git-Types.html#Blob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "blobOid",
          "package": "gitlib",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:blobOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "closeRepository",
          "package": "gitlib",
          "signature": "m ()",
          "source": "src/Git-Types.html#closeRepository",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "closeRepository",
          "normalized": "a()",
          "package": "gitlib",
          "partial": "Repository",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:closeRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "commitAuthor",
          "package": "gitlib",
          "signature": "Signature",
          "source": "src/Git-Types.html#Commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "commitAuthor",
          "package": "gitlib",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "commitCommitter",
          "package": "gitlib",
          "signature": "Signature",
          "source": "src/Git-Types.html#Commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "commitCommitter",
          "package": "gitlib",
          "partial": "Committer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitCommitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "commitEncoding",
          "package": "gitlib",
          "signature": "Text",
          "source": "src/Git-Types.html#Commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "commitEncoding",
          "package": "gitlib",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "commitEntryOid",
          "package": "gitlib",
          "signature": "(CommitOid r)",
          "source": "src/Git-Types.html#TreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "commitEntryOid",
          "package": "gitlib",
          "partial": "Entry Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitEntryOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "commitLog",
          "package": "gitlib",
          "signature": "CommitMessage",
          "source": "src/Git-Types.html#Commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "commitLog",
          "package": "gitlib",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "commitOid",
          "package": "gitlib",
          "signature": "(CommitOid r)",
          "source": "src/Git-Types.html#Commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "commitOid",
          "package": "gitlib",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "commitParents",
          "package": "gitlib",
          "signature": "[CommitOid r]",
          "source": "src/Git-Types.html#Commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "commitParents",
          "normalized": "[CommitOid a]",
          "package": "gitlib",
          "partial": "Parents",
          "signature": "[CommitOid r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "commitRefTarget",
          "package": "gitlib",
          "signature": "Commit r -\u003e RefTarget r",
          "source": "src/Git-Types.html#commitRefTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "commitRefTarget",
          "normalized": "Commit a-\u003eRefTarget a",
          "package": "gitlib",
          "partial": "Ref Target",
          "signature": "Commit r-\u003eRefTarget r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitRefTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "commitTree",
          "package": "gitlib",
          "signature": "(TreeOid r)",
          "source": "src/Git-Types.html#Commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "commitTree",
          "package": "gitlib",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "copyMergeResult",
          "package": "gitlib",
          "signature": "MergeResult s -\u003e m (MergeResult r)",
          "source": "src/Git-Types.html#copyMergeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "copyMergeResult",
          "normalized": "MergeResult a-\u003eb(MergeResult c)",
          "package": "gitlib",
          "partial": "Merge Result",
          "signature": "MergeResult s-\u003em(MergeResult r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:copyMergeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "copyOid",
          "package": "gitlib",
          "signature": "Oid r -\u003e n (Oid s)",
          "source": "src/Git-Types.html#copyOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "copyOid",
          "normalized": "Oid a-\u003eb(Oid c)",
          "package": "gitlib",
          "partial": "Oid",
          "signature": "Oid r-\u003en(Oid s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:copyOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "createBlob",
          "package": "gitlib",
          "signature": "BlobContents m -\u003e m (BlobOid r)",
          "source": "src/Git-Types.html#createBlob",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "createBlob",
          "normalized": "BlobContents a-\u003ea(BlobOid b)",
          "package": "gitlib",
          "partial": "Blob",
          "signature": "BlobContents m-\u003em(BlobOid r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:createBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "createCommit",
          "package": "gitlib",
          "signature": "[CommitOid r] -\u003e TreeOid r -\u003e Signature -\u003e Signature -\u003e CommitMessage -\u003e Maybe RefName -\u003e m (Commit r)",
          "source": "src/Git-Types.html#createCommit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "createCommit",
          "normalized": "[CommitOid a]-\u003eTreeOid a-\u003eSignature-\u003eSignature-\u003eCommitMessage-\u003eMaybe RefName-\u003eb(Commit a)",
          "package": "gitlib",
          "partial": "Commit",
          "signature": "[CommitOid r]-\u003eTreeOid r-\u003eSignature-\u003eSignature-\u003eCommitMessage-\u003eMaybe RefName-\u003em(Commit r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:createCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "createReference",
          "package": "gitlib",
          "signature": "RefName -\u003e RefTarget r -\u003e m ()",
          "source": "src/Git-Types.html#createReference",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "createReference",
          "normalized": "RefName-\u003eRefTarget a-\u003eb()",
          "package": "gitlib",
          "partial": "Reference",
          "signature": "RefName-\u003eRefTarget r-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:createReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "createTag",
          "package": "gitlib",
          "signature": "CommitOid r -\u003e Signature -\u003e CommitMessage -\u003e Text -\u003e m (Tag r)",
          "source": "src/Git-Types.html#createTag",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "createTag",
          "normalized": "CommitOid a-\u003eSignature-\u003eCommitMessage-\u003eText-\u003eb(Tag a)",
          "package": "gitlib",
          "partial": "Tag",
          "signature": "CommitOid r-\u003eSignature-\u003eCommitMessage-\u003eText-\u003em(Tag r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:createTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "defaultRepositoryOptions",
          "package": "gitlib",
          "signature": "RepositoryOptions",
          "source": "src/Git-Types.html#defaultRepositoryOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "defaultRepositoryOptions",
          "package": "gitlib",
          "partial": "Repository Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:defaultRepositoryOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "defaultSignature",
          "package": "gitlib",
          "signature": "Signature",
          "source": "src/Git-Types.html#defaultSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "defaultSignature",
          "package": "gitlib",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:defaultSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "deleteReference",
          "package": "gitlib",
          "signature": "RefName -\u003e m ()",
          "source": "src/Git-Types.html#deleteReference",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "deleteReference",
          "normalized": "RefName-\u003ea()",
          "package": "gitlib",
          "partial": "Reference",
          "signature": "RefName-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:deleteReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "deleteRepository",
          "package": "gitlib",
          "signature": "m ()",
          "source": "src/Git-Types.html#deleteRepository",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "deleteRepository",
          "normalized": "a()",
          "package": "gitlib",
          "partial": "Repository",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:deleteRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "diffContentsWithTree",
          "package": "gitlib",
          "signature": "Source m (Either TreeFilePath ByteString) -\u003e Tree r -\u003e Producer m ByteString",
          "source": "src/Git-Types.html#diffContentsWithTree",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "diffContentsWithTree",
          "normalized": "Source a(Either TreeFilePath ByteString)-\u003eTree b-\u003eProducer a ByteString",
          "package": "gitlib",
          "partial": "Contents With Tree",
          "signature": "Source m(Either TreeFilePath ByteString)-\u003eTree r-\u003eProducer m ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:diffContentsWithTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "existsObject",
          "package": "gitlib",
          "signature": "Oid r -\u003e m Bool",
          "source": "src/Git-Types.html#existsObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "existsObject",
          "normalized": "Oid a-\u003eb Bool",
          "package": "gitlib",
          "partial": "Object",
          "signature": "Oid r-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:existsObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "facts",
          "package": "gitlib",
          "signature": "m RepositoryFacts",
          "source": "src/Git-Types.html#facts",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "facts",
          "package": "gitlib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:facts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "fromBuilderMod",
          "package": "gitlib",
          "signature": "ModifiedBuilder r m -\u003e TreeBuilder r m",
          "source": "src/Git-Types.html#fromBuilderMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "fromBuilderMod",
          "normalized": "ModifiedBuilder a b-\u003eTreeBuilder a b",
          "package": "gitlib",
          "partial": "Builder Mod",
          "signature": "ModifiedBuilder r m-\u003eTreeBuilder r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:fromBuilderMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "getRepository",
          "package": "gitlib",
          "signature": "m r",
          "source": "src/Git-Types.html#getRepository",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "getRepository",
          "package": "gitlib",
          "partial": "Repository",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:getRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "getSHA",
          "package": "gitlib",
          "signature": "ByteString",
          "source": "src/Git-Types.html#SHA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "getSHA",
          "package": "gitlib",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:getSHA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "hasSymbolicReferences",
          "package": "gitlib",
          "signature": "Bool",
          "source": "src/Git-Types.html#RepositoryFacts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "hasSymbolicReferences",
          "package": "gitlib",
          "partial": "Symbolic References",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:hasSymbolicReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "hashContents",
          "package": "gitlib",
          "signature": "BlobContents m -\u003e m (BlobOid r)",
          "source": "src/Git-Types.html#hashContents",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "hashContents",
          "normalized": "BlobContents a-\u003ea(BlobOid b)",
          "package": "gitlib",
          "partial": "Contents",
          "signature": "BlobContents m-\u003em(BlobOid r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:hashContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "loadObject",
          "package": "gitlib",
          "signature": "ObjectOid r -\u003e m (Object r m)",
          "source": "src/Git-Types.html#loadObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "loadObject",
          "normalized": "ObjectOid a-\u003eb(Object a b)",
          "package": "gitlib",
          "partial": "Object",
          "signature": "ObjectOid r-\u003em(Object r m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:loadObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "lookupBlob",
          "package": "gitlib",
          "signature": "BlobOid r -\u003e m (Blob r m)",
          "source": "src/Git-Types.html#lookupBlob",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "lookupBlob",
          "normalized": "BlobOid a-\u003eb(Blob a b)",
          "package": "gitlib",
          "partial": "Blob",
          "signature": "BlobOid r-\u003em(Blob r m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "lookupCommit",
          "package": "gitlib",
          "signature": "CommitOid r -\u003e m (Commit r)",
          "source": "src/Git-Types.html#lookupCommit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "lookupCommit",
          "normalized": "CommitOid a-\u003eb(Commit a)",
          "package": "gitlib",
          "partial": "Commit",
          "signature": "CommitOid r-\u003em(Commit r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "lookupCommitParents",
          "package": "gitlib",
          "signature": "Commit r -\u003e m [Commit r]",
          "source": "src/Git-Types.html#lookupCommitParents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "lookupCommitParents",
          "normalized": "Commit a-\u003eb[Commit a]",
          "package": "gitlib",
          "partial": "Commit Parents",
          "signature": "Commit r-\u003em[Commit r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupCommitParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "lookupObject",
          "package": "gitlib",
          "signature": "Oid r -\u003e m (Object r m)",
          "source": "src/Git-Types.html#lookupObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "lookupObject",
          "normalized": "Oid a-\u003eb(Object a b)",
          "package": "gitlib",
          "partial": "Object",
          "signature": "Oid r-\u003em(Object r m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "lookupReference",
          "package": "gitlib",
          "signature": "RefName -\u003e m (Maybe (RefTarget r))",
          "source": "src/Git-Types.html#lookupReference",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "lookupReference",
          "normalized": "RefName-\u003ea(Maybe(RefTarget b))",
          "package": "gitlib",
          "partial": "Reference",
          "signature": "RefName-\u003em(Maybe(RefTarget r))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "lookupTag",
          "package": "gitlib",
          "signature": "TagOid r -\u003e m (Tag r)",
          "source": "src/Git-Types.html#lookupTag",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "lookupTag",
          "normalized": "TagOid a-\u003eb(Tag a)",
          "package": "gitlib",
          "partial": "Tag",
          "signature": "TagOid r-\u003em(Tag r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "lookupTree",
          "package": "gitlib",
          "signature": "TreeOid r -\u003e m (Tree r)",
          "source": "src/Git-Types.html#lookupTree",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "lookupTree",
          "normalized": "TreeOid a-\u003eb(Tree a)",
          "package": "gitlib",
          "partial": "Tree",
          "signature": "TreeOid r-\u003em(Tree r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "mergeCommit",
          "package": "gitlib",
          "signature": "CommitOid r",
          "source": "src/Git-Types.html#MergeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "mergeCommit",
          "package": "gitlib",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "mergeConflicts",
          "package": "gitlib",
          "signature": "Map TreeFilePath (ModificationKind, ModificationKind)",
          "source": "src/Git-Types.html#MergeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "mergeConflicts",
          "normalized": "Map TreeFilePath(ModificationKind,ModificationKind)",
          "package": "gitlib",
          "partial": "Conflicts",
          "signature": "Map TreeFilePath(ModificationKind,ModificationKind)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeConflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "mergeHeadLeft",
          "package": "gitlib",
          "signature": "CommitOid r",
          "source": "src/Git-Types.html#MergeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "mergeHeadLeft",
          "package": "gitlib",
          "partial": "Head Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeHeadLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "mergeHeadRight",
          "package": "gitlib",
          "signature": "CommitOid r",
          "source": "src/Git-Types.html#MergeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "mergeHeadRight",
          "package": "gitlib",
          "partial": "Head Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeHeadRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "mergeStatus",
          "package": "gitlib",
          "signature": "ModificationKind -\u003e ModificationKind -\u003e MergeStatus",
          "source": "src/Git-Types.html#mergeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "mergeStatus",
          "normalized": "ModificationKind-\u003eModificationKind-\u003eMergeStatus",
          "package": "gitlib",
          "partial": "Status",
          "signature": "ModificationKind-\u003eModificationKind-\u003eMergeStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "newTreeBuilder",
          "package": "gitlib",
          "signature": "Maybe (Tree r) -\u003e m (TreeBuilder r m)",
          "source": "src/Git-Types.html#newTreeBuilder",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "newTreeBuilder",
          "normalized": "Maybe(Tree a)-\u003eb(TreeBuilder a b)",
          "package": "gitlib",
          "partial": "Tree Builder",
          "signature": "Maybe(Tree r)-\u003em(TreeBuilder r m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:newTreeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "objectOid",
          "package": "gitlib",
          "signature": "Object r m -\u003e m (Oid r)",
          "source": "src/Git-Types.html#objectOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "objectOid",
          "normalized": "Object a b-\u003eb(Oid a)",
          "package": "gitlib",
          "partial": "Oid",
          "signature": "Object r m-\u003em(Oid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:objectOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "objectToObjOid",
          "package": "gitlib",
          "signature": "Object r m -\u003e m (ObjectOid r)",
          "source": "src/Git-Types.html#objectToObjOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "objectToObjOid",
          "normalized": "Object a b-\u003eb(ObjectOid a)",
          "package": "gitlib",
          "partial": "To Obj Oid",
          "signature": "Object r m-\u003em(ObjectOid r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:objectToObjOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "openRepository",
          "package": "gitlib",
          "signature": "RepositoryOptions -\u003e m r",
          "source": "src/Git-Types.html#RepositoryFactory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "openRepository",
          "normalized": "RepositoryOptions-\u003ea b",
          "package": "gitlib",
          "partial": "Repository",
          "signature": "RepositoryOptions-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:openRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "parseObjOid",
          "package": "gitlib",
          "signature": "forall o.  Text -\u003e m (Tagged o (Oid r))",
          "source": "src/Git-Types.html#parseObjOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "parseObjOid",
          "normalized": "a b Text-\u003ec(Tagged d(Oid e))",
          "package": "gitlib",
          "partial": "Obj Oid",
          "signature": "forall o. Text-\u003em(Tagged o(Oid r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:parseObjOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "parseOid",
          "package": "gitlib",
          "signature": "Text -\u003e m (Oid r)",
          "source": "src/Git-Types.html#parseOid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "parseOid",
          "normalized": "Text-\u003ea(Oid b)",
          "package": "gitlib",
          "partial": "Oid",
          "signature": "Text-\u003em(Oid r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:parseOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "renderObjOid",
          "package": "gitlib",
          "signature": "Tagged a o -\u003e Text",
          "source": "src/Git-Types.html#renderObjOid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "renderObjOid",
          "normalized": "Tagged a b-\u003eText",
          "package": "gitlib",
          "partial": "Obj Oid",
          "signature": "Tagged a o-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:renderObjOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "renderOid",
          "package": "gitlib",
          "signature": "o -\u003e Text",
          "source": "src/Git-Types.html#renderOid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "renderOid",
          "normalized": "a-\u003eText",
          "package": "gitlib",
          "partial": "Oid",
          "signature": "o-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:renderOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "repoAutoCreate",
          "package": "gitlib",
          "signature": "Bool",
          "source": "src/Git-Types.html#RepositoryOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "repoAutoCreate",
          "package": "gitlib",
          "partial": "Auto Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:repoAutoCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "repoIsBare",
          "package": "gitlib",
          "signature": "Bool",
          "source": "src/Git-Types.html#RepositoryOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "repoIsBare",
          "package": "gitlib",
          "partial": "Is Bare",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:repoIsBare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "repoPath",
          "package": "gitlib",
          "signature": "FilePath",
          "source": "src/Git-Types.html#RepositoryOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "repoPath",
          "package": "gitlib",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:repoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "runRepository",
          "package": "gitlib",
          "signature": "forall a.  r -\u003e n a -\u003e m a",
          "source": "src/Git-Types.html#RepositoryFactory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "runRepository",
          "normalized": "a b c-\u003ed e-\u003ef e",
          "package": "gitlib",
          "partial": "Repository",
          "signature": "forall a. r-\u003en a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:runRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "shaToText",
          "package": "gitlib",
          "signature": "SHA -\u003e Text",
          "source": "src/Git-Types.html#shaToText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "shaToText",
          "normalized": "SHA-\u003eText",
          "package": "gitlib",
          "partial": "To Text",
          "signature": "SHA-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:shaToText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "signatureEmail",
          "package": "gitlib",
          "signature": "CommitEmail",
          "source": "src/Git-Types.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "signatureEmail",
          "package": "gitlib",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:signatureEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "signatureName",
          "package": "gitlib",
          "signature": "CommitAuthor",
          "source": "src/Git-Types.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "signatureName",
          "package": "gitlib",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:signatureName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "signatureWhen",
          "package": "gitlib",
          "signature": "ZonedTime",
          "source": "src/Git-Types.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "signatureWhen",
          "package": "gitlib",
          "partial": "When",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:signatureWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "sourceCommitParents",
          "package": "gitlib",
          "signature": "Commit r -\u003e Producer m (Commit r)",
          "source": "src/Git-Types.html#sourceCommitParents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "sourceCommitParents",
          "normalized": "Commit a-\u003eProducer b(Commit a)",
          "package": "gitlib",
          "partial": "Commit Parents",
          "signature": "Commit r-\u003eProducer m(Commit r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:sourceCommitParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "sourceObjects",
          "package": "gitlib",
          "signature": "sourceObjects",
          "source": "src/Git-Types.html#sourceObjects",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "sourceObjects",
          "package": "gitlib",
          "partial": "Objects",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:sourceObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "sourceReferences",
          "package": "gitlib",
          "signature": "Producer m RefName",
          "source": "src/Git-Types.html#sourceReferences",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "sourceReferences",
          "package": "gitlib",
          "partial": "References",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:sourceReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "sourceTreeEntries",
          "package": "gitlib",
          "signature": "Tree r -\u003e Producer m (TreeFilePath, TreeEntry r)",
          "source": "src/Git-Types.html#sourceTreeEntries",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "sourceTreeEntries",
          "normalized": "Tree a-\u003eProducer b(TreeFilePath,TreeEntry a)",
          "package": "gitlib",
          "partial": "Tree Entries",
          "signature": "Tree r-\u003eProducer m(TreeFilePath,TreeEntry r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:sourceTreeEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "tagCommit",
          "package": "gitlib",
          "signature": "(CommitOid r)",
          "source": "src/Git-Types.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "tagCommit",
          "package": "gitlib",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:tagCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "tagOid",
          "package": "gitlib",
          "signature": "(TagOid r)",
          "source": "src/Git-Types.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "tagOid",
          "package": "gitlib",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:tagOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "textToSha",
          "package": "gitlib",
          "signature": "Text -\u003e m SHA",
          "source": "src/Git-Types.html#textToSha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "textToSha",
          "normalized": "Text-\u003ea SHA",
          "package": "gitlib",
          "partial": "To Sha",
          "signature": "Text-\u003em SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:textToSha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "treeEntry",
          "package": "gitlib",
          "signature": "Tree r -\u003e TreeFilePath -\u003e m (Maybe (TreeEntry r))",
          "source": "src/Git-Types.html#treeEntry",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "treeEntry",
          "normalized": "Tree a-\u003eTreeFilePath-\u003eb(Maybe(TreeEntry a))",
          "package": "gitlib",
          "partial": "Entry",
          "signature": "Tree r-\u003eTreeFilePath-\u003em(Maybe(TreeEntry r))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:treeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "treeEntryOid",
          "package": "gitlib",
          "signature": "(TreeOid r)",
          "source": "src/Git-Types.html#TreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "treeEntryOid",
          "package": "gitlib",
          "partial": "Entry Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:treeEntryOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "treeEntryToOid",
          "package": "gitlib",
          "signature": "TreeEntry r -\u003e Oid r",
          "source": "src/Git-Types.html#treeEntryToOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "treeEntryToOid",
          "normalized": "TreeEntry a-\u003eOid a",
          "package": "gitlib",
          "partial": "Entry To Oid",
          "signature": "TreeEntry r-\u003eOid r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:treeEntryToOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "treeOid",
          "package": "gitlib",
          "signature": "Tree r -\u003e m (TreeOid r)",
          "source": "src/Git-Types.html#treeOid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "treeOid",
          "normalized": "Tree a-\u003eb(TreeOid a)",
          "package": "gitlib",
          "partial": "Oid",
          "signature": "Tree r-\u003em(TreeOid r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:treeOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "untagObjOid",
          "package": "gitlib",
          "signature": "ObjectOid r -\u003e Oid r",
          "source": "src/Git-Types.html#untagObjOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "untagObjOid",
          "normalized": "ObjectOid a-\u003eOid a",
          "package": "gitlib",
          "partial": "Obj Oid",
          "signature": "ObjectOid r-\u003eOid r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:untagObjOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Types",
          "name": "updateReference",
          "package": "gitlib",
          "signature": "RefName -\u003e RefTarget r -\u003e m ()",
          "source": "src/Git-Types.html#updateReference",
          "type": "method"
        },
        "index": {
          "hierarchy": "Git Types",
          "module": "Git.Types",
          "name": "updateReference",
          "normalized": "RefName-\u003eRefTarget a-\u003eb()",
          "package": "gitlib",
          "partial": "Reference",
          "signature": "RefName-\u003eRefTarget r-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:updateReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "Utils",
          "package": "gitlib",
          "source": "src/Git-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "Utils",
          "package": "gitlib",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Working",
          "name": "Working",
          "package": "gitlib",
          "source": "src/Git-Working.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Working",
          "module": "Git.Working",
          "name": "Working",
          "package": "gitlib",
          "partial": "Working",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Working.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Working",
          "name": "checkoutFiles",
          "package": "gitlib",
          "signature": "FilePath -\u003e Tree r -\u003e (TreeFilePath -\u003e Either String FilePath) -\u003e Bool -\u003e m ()",
          "source": "src/Git-Working.html#checkoutFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Working",
          "module": "Git.Working",
          "name": "checkoutFiles",
          "normalized": "FilePath-\u003eTree a-\u003e(TreeFilePath-\u003eEither String FilePath)-\u003eBool-\u003eb()",
          "package": "gitlib",
          "partial": "Files",
          "signature": "FilePath-\u003eTree r-\u003e(TreeFilePath-\u003eEither String FilePath)-\u003eBool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Working.html#v:checkoutFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for working with Git repositories.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Git",
          "name": "Git",
          "package": "gitlib",
          "source": "src/Git.html",
          "type": "module"
        },
        "index": {
          "description": "Interface for working with Git repositories",
          "hierarchy": "Git",
          "module": "Git",
          "name": "Git",
          "package": "gitlib",
          "partial": "Git",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib/docs/Git.html#"
      }
    }
  ]
]