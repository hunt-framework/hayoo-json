[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#",
      "description": {
        "fct-module": "Git.Blob",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Blob.html",
        "fct-type": "module",
        "title": "Blob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Blob",
        "module": "Git.Blob",
        "name": "Blob",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:blobContentsToByteString",
      "description": {
        "fct-module": "Git.Blob",
        "fct-package": "gitlib",
        "fct-signature": "BlobContents m -\u003e m ByteString",
        "fct-source": "src/Git-Blob.html#blobContentsToByteString",
        "fct-type": "function",
        "title": "blobContentsToByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Blob",
        "module": "Git.Blob",
        "name": "blobContentsToByteString",
        "normalized": "BlobContents a-\u003ea ByteString",
        "package": "gitlib",
        "partial": "Contents To Byte String",
        "signature": "BlobContents m-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:blobToByteString",
      "description": {
        "fct-module": "Git.Blob",
        "fct-package": "gitlib",
        "fct-signature": "Blob m -\u003e m ByteString",
        "fct-source": "src/Git-Blob.html#blobToByteString",
        "fct-type": "function",
        "title": "blobToByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Blob",
        "module": "Git.Blob",
        "name": "blobToByteString",
        "normalized": "Blob a-\u003ea ByteString",
        "package": "gitlib",
        "partial": "To Byte String",
        "signature": "Blob m-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:catBlob",
      "description": {
        "fct-module": "Git.Blob",
        "fct-package": "gitlib",
        "fct-signature": "BlobOid m -\u003e m ByteString",
        "fct-source": "src/Git-Blob.html#catBlob",
        "fct-type": "function",
        "title": "catBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Blob",
        "module": "Git.Blob",
        "name": "catBlob",
        "normalized": "BlobOid a-\u003ea ByteString",
        "package": "gitlib",
        "partial": "Blob",
        "signature": "BlobOid m-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:catBlobUtf8",
      "description": {
        "fct-module": "Git.Blob",
        "fct-package": "gitlib",
        "fct-signature": "BlobOid m -\u003e m Text",
        "fct-source": "src/Git-Blob.html#catBlobUtf8",
        "fct-type": "function",
        "title": "catBlobUtf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Blob",
        "module": "Git.Blob",
        "name": "catBlobUtf8",
        "normalized": "BlobOid a-\u003ea Text",
        "package": "gitlib",
        "partial": "Blob Utf",
        "signature": "BlobOid m-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:copyBlob",
      "description": {
        "fct-module": "Git.Blob",
        "fct-package": "gitlib",
        "fct-signature": "BlobOid m -\u003e HashSet Text -\u003e t m (BlobOid (t m), HashSet Text)",
        "fct-source": "src/Git-Blob.html#copyBlob",
        "fct-type": "function",
        "title": "copyBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Blob",
        "module": "Git.Blob",
        "name": "copyBlob",
        "normalized": "BlobOid a-\u003eHashSet Text-\u003eb a(BlobOid(b a),HashSet Text)",
        "package": "gitlib",
        "partial": "Blob",
        "signature": "BlobOid m-\u003eHashSet Text-\u003et m(BlobOid(t m),HashSet Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:createBlobUtf8",
      "description": {
        "fct-module": "Git.Blob",
        "fct-package": "gitlib",
        "fct-signature": "Text -\u003e m (BlobOid m)",
        "fct-source": "src/Git-Blob.html#createBlobUtf8",
        "fct-type": "function",
        "title": "createBlobUtf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Blob",
        "module": "Git.Blob",
        "name": "createBlobUtf8",
        "normalized": "Text-\u003ea(BlobOid a)",
        "package": "gitlib",
        "partial": "Blob Utf",
        "signature": "Text-\u003em(BlobOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Blob.html#v:treeBlobEntries",
      "description": {
        "fct-module": "Git.Blob",
        "fct-package": "gitlib",
        "fct-signature": "Tree m -\u003e m [(TreeFilePath, BlobOid m, BlobKind)]",
        "fct-source": "src/Git-Blob.html#treeBlobEntries",
        "fct-type": "function",
        "title": "treeBlobEntries"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Blob",
        "module": "Git.Blob",
        "name": "treeBlobEntries",
        "normalized": "Tree a-\u003ea[(TreeFilePath,BlobOid a,BlobKind)]",
        "package": "gitlib",
        "partial": "Blob Entries",
        "signature": "Tree m-\u003em[(TreeFilePath,BlobOid m,BlobKind)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit-Push.html#",
      "description": {
        "fct-module": "Git.Commit.Push",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Commit-Push.html",
        "fct-type": "module",
        "title": "Push"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Commit Push",
        "module": "Git.Commit.Push",
        "name": "Push",
        "normalized": "",
        "package": "gitlib",
        "partial": "Push",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit-Push.html#v:pushCommit",
      "description": {
        "fct-descr": "\u003cp\u003eFast-forward push a reference between repositories using a recursive\n   copy.  This can be extremely slow, but always works no matter which two\n   backends are being used.  It should be considered a matter of last\n   resort, or for objects sets that are known to be small.\n\u003c/p\u003e",
        "fct-module": "Git.Commit.Push",
        "fct-package": "gitlib",
        "fct-signature": "CommitOid m -\u003e Text -\u003e t m (CommitOid (t m))",
        "fct-source": "src/Git-Commit-Push.html#pushCommit",
        "fct-type": "function",
        "title": "pushCommit"
      },
      "index": {
        "description": "Fast-forward push reference between repositories using recursive copy This can be extremely slow but always works no matter which two backends are being used It should be considered matter of last resort or for objects sets that are known to be small",
        "hierarchy": "Git Commit Push",
        "module": "Git.Commit.Push",
        "name": "pushCommit",
        "normalized": "CommitOid a-\u003eText-\u003eb a(CommitOid(b a))",
        "package": "gitlib",
        "partial": "Commit",
        "signature": "CommitOid m-\u003eText-\u003et m(CommitOid(t m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#",
      "description": {
        "fct-module": "Git.Commit",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Commit.html",
        "fct-type": "module",
        "title": "Commit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Commit",
        "module": "Git.Commit",
        "name": "Commit",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:commitTreeEntry",
      "description": {
        "fct-module": "Git.Commit",
        "fct-package": "gitlib",
        "fct-signature": "Commit m -\u003e TreeFilePath -\u003e m (Maybe (TreeEntry m))",
        "fct-source": "src/Git-Commit.html#commitTreeEntry",
        "fct-type": "function",
        "title": "commitTreeEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Commit",
        "module": "Git.Commit",
        "name": "commitTreeEntry",
        "normalized": "Commit a-\u003eTreeFilePath-\u003ea(Maybe(TreeEntry a))",
        "package": "gitlib",
        "partial": "Tree Entry",
        "signature": "Commit m-\u003eTreeFilePath-\u003em(Maybe(TreeEntry m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:copyCommit",
      "description": {
        "fct-module": "Git.Commit",
        "fct-package": "gitlib",
        "fct-signature": "CommitOid m -\u003e Maybe RefName -\u003e HashSet Text -\u003e t m (CommitOid (t m), HashSet Text)",
        "fct-source": "src/Git-Commit.html#copyCommit",
        "fct-type": "function",
        "title": "copyCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Commit",
        "module": "Git.Commit",
        "name": "copyCommit",
        "normalized": "CommitOid a-\u003eMaybe RefName-\u003eHashSet Text-\u003eb a(CommitOid(b a),HashSet Text)",
        "package": "gitlib",
        "partial": "Commit",
        "signature": "CommitOid m-\u003eMaybe RefName-\u003eHashSet Text-\u003et m(CommitOid(t m),HashSet Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:copyCommitOid",
      "description": {
        "fct-module": "Git.Commit",
        "fct-package": "gitlib",
        "fct-signature": "CommitOid m -\u003e n (CommitOid n)",
        "fct-source": "src/Git-Commit.html#copyCommitOid",
        "fct-type": "function",
        "title": "copyCommitOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Commit",
        "module": "Git.Commit",
        "name": "copyCommitOid",
        "normalized": "CommitOid a-\u003eb(CommitOid b)",
        "package": "gitlib",
        "partial": "Commit Oid",
        "signature": "CommitOid m-\u003en(CommitOid n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:listCommits",
      "description": {
        "fct-module": "Git.Commit",
        "fct-package": "gitlib",
        "fct-signature": "Maybe (CommitOid m)-\u003e CommitOid m-\u003e m [CommitOid m]",
        "fct-type": "function",
        "title": "listCommits"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Commit",
        "module": "Git.Commit",
        "name": "listCommits",
        "normalized": "Maybe(CommitOid a)-\u003eCommitOid a-\u003ea[CommitOid a]",
        "package": "gitlib",
        "partial": "Commits",
        "signature": "Maybe(CommitOid m)-\u003eCommitOid m-\u003em[CommitOid m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:traverseCommits",
      "description": {
        "fct-module": "Git.Commit",
        "fct-package": "gitlib",
        "fct-signature": "(CommitOid m -\u003e m a) -\u003e CommitOid m -\u003e m [a]",
        "fct-source": "src/Git-Commit.html#traverseCommits",
        "fct-type": "function",
        "title": "traverseCommits"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Commit",
        "module": "Git.Commit",
        "name": "traverseCommits",
        "normalized": "(CommitOid a-\u003ea b)-\u003eCommitOid a-\u003ea[b]",
        "package": "gitlib",
        "partial": "Commits",
        "signature": "(CommitOid m-\u003em a)-\u003eCommitOid m-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Commit.html#v:traverseCommits_",
      "description": {
        "fct-module": "Git.Commit",
        "fct-package": "gitlib",
        "fct-signature": "(CommitOid m -\u003e m ()) -\u003e CommitOid m -\u003e m ()",
        "fct-source": "src/Git-Commit.html#traverseCommits_",
        "fct-type": "function",
        "title": "traverseCommits_"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Commit",
        "module": "Git.Commit",
        "name": "traverseCommits_",
        "normalized": "(CommitOid a-\u003ea())-\u003eCommitOid a-\u003ea()",
        "package": "gitlib",
        "partial": "Commits",
        "signature": "(CommitOid m-\u003em())-\u003eCommitOid m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#",
      "description": {
        "fct-module": "Git.Object",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Object.html",
        "fct-type": "module",
        "title": "Object"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Object",
        "module": "Git.Object",
        "name": "Object",
        "normalized": "",
        "package": "gitlib",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:expandTreeObjects",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of objects (commit and top-level trees) return by\n   \u003ccode\u003e\u003ca\u003elistObjects\u003c/a\u003e\u003c/code\u003e, expand it to include all subtrees and blobs as well.\n   Ordering is preserved.\n\u003c/p\u003e",
        "fct-module": "Git.Object",
        "fct-package": "gitlib",
        "fct-signature": "Conduit (ObjectOid m) m (ObjectOid m)",
        "fct-source": "src/Git-Object.html#expandTreeObjects",
        "fct-type": "function",
        "title": "expandTreeObjects"
      },
      "index": {
        "description": "Given list of objects commit and top-level trees return by listObjects expand it to include all subtrees and blobs as well Ordering is preserved",
        "hierarchy": "Git Object",
        "module": "Git.Object",
        "name": "expandTreeObjects",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Objects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:listAllObjects",
      "description": {
        "fct-module": "Git.Object",
        "fct-package": "gitlib",
        "fct-signature": "Maybe (CommitOid m) -\u003e CommitOid m -\u003e m [ObjectOid m]",
        "fct-source": "src/Git-Object.html#listAllObjects",
        "fct-type": "function",
        "title": "listAllObjects"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Object",
        "module": "Git.Object",
        "name": "listAllObjects",
        "normalized": "Maybe(CommitOid a)-\u003eCommitOid a-\u003ea[ObjectOid a]",
        "package": "gitlib",
        "partial": "All Objects",
        "signature": "Maybe(CommitOid m)-\u003eCommitOid m-\u003em[ObjectOid m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:listObjects",
      "description": {
        "fct-module": "Git.Object",
        "fct-package": "gitlib",
        "fct-signature": "Maybe (CommitOid m)-\u003e CommitOid m-\u003e Bool-\u003e m [ObjectOid m]",
        "fct-type": "function",
        "title": "listObjects"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Object",
        "module": "Git.Object",
        "name": "listObjects",
        "normalized": "Maybe(CommitOid a)-\u003eCommitOid a-\u003eBool-\u003ea[ObjectOid a]",
        "package": "gitlib",
        "partial": "Objects",
        "signature": "Maybe(CommitOid m)-\u003eCommitOid m-\u003eBool-\u003em[ObjectOid m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:traverseObjects",
      "description": {
        "fct-module": "Git.Object",
        "fct-package": "gitlib",
        "fct-signature": "(ObjectOid m -\u003e m a) -\u003e CommitOid m -\u003e m [a]",
        "fct-source": "src/Git-Object.html#traverseObjects",
        "fct-type": "function",
        "title": "traverseObjects"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Object",
        "module": "Git.Object",
        "name": "traverseObjects",
        "normalized": "(ObjectOid a-\u003ea b)-\u003eCommitOid a-\u003ea[b]",
        "package": "gitlib",
        "partial": "Objects",
        "signature": "(ObjectOid m-\u003em a)-\u003eCommitOid m-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Object.html#v:traverseObjects_",
      "description": {
        "fct-module": "Git.Object",
        "fct-package": "gitlib",
        "fct-signature": "(ObjectOid m -\u003e m ()) -\u003e CommitOid m -\u003e m ()",
        "fct-source": "src/Git-Object.html#traverseObjects_",
        "fct-type": "function",
        "title": "traverseObjects_"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Object",
        "module": "Git.Object",
        "name": "traverseObjects_",
        "normalized": "(ObjectOid a-\u003ea())-\u003eCommitOid a-\u003ea()",
        "package": "gitlib",
        "partial": "Objects",
        "signature": "(ObjectOid m-\u003em())-\u003eCommitOid m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Reference.html#",
      "description": {
        "fct-module": "Git.Reference",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Reference.html",
        "fct-type": "module",
        "title": "Reference"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Reference",
        "module": "Git.Reference",
        "name": "Reference",
        "normalized": "",
        "package": "gitlib",
        "partial": "Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Reference.html#v:referenceToOid",
      "description": {
        "fct-module": "Git.Reference",
        "fct-package": "gitlib",
        "fct-signature": "RefTarget m -\u003e m (Maybe (Oid m))",
        "fct-source": "src/Git-Reference.html#referenceToOid",
        "fct-type": "function",
        "title": "referenceToOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Reference",
        "module": "Git.Reference",
        "name": "referenceToOid",
        "normalized": "RefTarget a-\u003ea(Maybe(Oid a))",
        "package": "gitlib",
        "partial": "To Oid",
        "signature": "RefTarget m-\u003em(Maybe(Oid m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Reference.html#v:resolveReference",
      "description": {
        "fct-module": "Git.Reference",
        "fct-package": "gitlib",
        "fct-signature": "RefName -\u003e m (Maybe (Oid m))",
        "fct-source": "src/Git-Reference.html#resolveReference",
        "fct-type": "function",
        "title": "resolveReference"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Reference",
        "module": "Git.Reference",
        "name": "resolveReference",
        "normalized": "RefName-\u003ea(Maybe(Oid a))",
        "package": "gitlib",
        "partial": "Reference",
        "signature": "RefName-\u003em(Maybe(Oid m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#",
      "description": {
        "fct-module": "Git.Repository",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Repository.html",
        "fct-type": "module",
        "title": "Repository"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Repository",
        "module": "Git.Repository",
        "name": "Repository",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#v:withBackendDo",
      "description": {
        "fct-module": "Git.Repository",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryFactory t m a -\u003e m b -\u003e m b",
        "fct-source": "src/Git-Repository.html#withBackendDo",
        "fct-type": "function",
        "title": "withBackendDo"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Repository",
        "module": "Git.Repository",
        "name": "withBackendDo",
        "normalized": "RepositoryFactory a b c-\u003eb d-\u003eb d",
        "package": "gitlib",
        "partial": "Backend Do",
        "signature": "RepositoryFactory t m a-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#v:withNewRepository",
      "description": {
        "fct-module": "Git.Repository",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryFactory t m c -\u003e FilePath -\u003e t a -\u003e m a",
        "fct-source": "src/Git-Repository.html#withNewRepository",
        "fct-type": "function",
        "title": "withNewRepository"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Repository",
        "module": "Git.Repository",
        "name": "withNewRepository",
        "normalized": "RepositoryFactory a b c-\u003eFilePath-\u003ea d-\u003eb d",
        "package": "gitlib",
        "partial": "New Repository",
        "signature": "RepositoryFactory t m c-\u003eFilePath-\u003et a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#v:withNewRepository-39-",
      "description": {
        "fct-module": "Git.Repository",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryFactory t m c -\u003e FilePath -\u003e t a -\u003e m a",
        "fct-source": "src/Git-Repository.html#withNewRepository%27",
        "fct-type": "function",
        "title": "withNewRepository'"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Repository",
        "module": "Git.Repository",
        "name": "withNewRepository'",
        "normalized": "RepositoryFactory a b c-\u003eFilePath-\u003ea d-\u003eb d",
        "package": "gitlib",
        "partial": "New Repository'",
        "signature": "RepositoryFactory t m c-\u003eFilePath-\u003et a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#v:withRepository",
      "description": {
        "fct-module": "Git.Repository",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryFactory t m c -\u003e FilePath -\u003e t a -\u003e m a",
        "fct-source": "src/Git-Repository.html#withRepository",
        "fct-type": "function",
        "title": "withRepository"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Repository",
        "module": "Git.Repository",
        "name": "withRepository",
        "normalized": "RepositoryFactory a b c-\u003eFilePath-\u003ea d-\u003eb d",
        "package": "gitlib",
        "partial": "Repository",
        "signature": "RepositoryFactory t m c-\u003eFilePath-\u003et a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Repository.html#v:withRepository-39-",
      "description": {
        "fct-module": "Git.Repository",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryFactory t m c -\u003e RepositoryOptions -\u003e t a -\u003e m a",
        "fct-source": "src/Git-Repository.html#withRepository%27",
        "fct-type": "function",
        "title": "withRepository'"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Repository",
        "module": "Git.Repository",
        "name": "withRepository'",
        "normalized": "RepositoryFactory a b c-\u003eRepositoryOptions-\u003ea d-\u003eb d",
        "package": "gitlib",
        "partial": "Repository'",
        "signature": "RepositoryFactory t m c-\u003eRepositoryOptions-\u003et a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder-Pure.html#",
      "description": {
        "fct-module": "Git.Tree.Builder.Pure",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Tree-Builder-Pure.html",
        "fct-type": "module",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder Pure",
        "module": "Git.Tree.Builder.Pure",
        "name": "Pure",
        "normalized": "",
        "package": "gitlib",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder-Pure.html#t:EntryHashMap",
      "description": {
        "fct-module": "Git.Tree.Builder.Pure",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Tree-Builder-Pure.html#EntryHashMap",
        "fct-type": "type",
        "title": "EntryHashMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder Pure",
        "module": "Git.Tree.Builder.Pure",
        "name": "EntryHashMap",
        "normalized": "",
        "package": "gitlib",
        "partial": "Entry Hash Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder-Pure.html#v:newPureTreeBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new, empty tree.\n\u003c/p\u003e\u003cp\u003eSince empty trees cannot exist in Git, attempting to write out an empty\n   tree is a no-op.\n\u003c/p\u003e",
        "fct-module": "Git.Tree.Builder.Pure",
        "fct-package": "gitlib",
        "fct-signature": "(Tree m -\u003e m (EntryHashMap m)) -\u003e (EntryHashMap m -\u003e m (TreeOid m)) -\u003e Maybe (Tree m) -\u003e m (TreeBuilder m)",
        "fct-source": "src/Git-Tree-Builder-Pure.html#newPureTreeBuilder",
        "fct-type": "function",
        "title": "newPureTreeBuilder"
      },
      "index": {
        "description": "Create new empty tree Since empty trees cannot exist in Git attempting to write out an empty tree is no-op",
        "hierarchy": "Git Tree Builder Pure",
        "module": "Git.Tree.Builder.Pure",
        "name": "newPureTreeBuilder",
        "normalized": "(Tree a-\u003ea(EntryHashMap a))-\u003e(EntryHashMap a-\u003ea(TreeOid a))-\u003eMaybe(Tree a)-\u003ea(TreeBuilder a)",
        "package": "gitlib",
        "partial": "Pure Tree Builder",
        "signature": "(Tree m-\u003em(EntryHashMap m))-\u003e(EntryHashMap m-\u003em(TreeOid m))-\u003eMaybe(Tree m)-\u003em(TreeBuilder m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Tree-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "gitlib",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#t:ModifiedBuilder",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#ModifiedBuilder",
        "fct-type": "data",
        "title": "ModifiedBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "ModifiedBuilder",
        "normalized": "",
        "package": "gitlib",
        "partial": "Modified Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#t:ModifyTreeResult",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Tree-Builder.html#ModifyTreeResult",
        "fct-type": "data",
        "title": "ModifyTreeResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "ModifyTreeResult",
        "normalized": "",
        "package": "gitlib",
        "partial": "Modify Tree Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#t:TreeBuilder",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "data",
        "title": "TreeBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "TreeBuilder",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#t:TreeT",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Tree-Builder.html#TreeT",
        "fct-type": "data",
        "title": "TreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "TreeT",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:BuilderUnchanged",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "BuilderUnchanged (TreeBuilder m)",
        "fct-source": "src/Git-Types.html#ModifiedBuilder",
        "fct-type": "function",
        "title": "BuilderUnchanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "BuilderUnchanged",
        "normalized": "",
        "package": "gitlib",
        "partial": "Builder Unchanged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:ModifiedBuilder",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "ModifiedBuilder (TreeBuilder m)",
        "fct-source": "src/Git-Types.html#ModifiedBuilder",
        "fct-type": "function",
        "title": "ModifiedBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "ModifiedBuilder",
        "normalized": "",
        "package": "gitlib",
        "partial": "Modified Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeBuilder",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilder",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "TreeBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "TreeBuilder",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeEntryDeleted",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeEntryDeleted",
        "fct-source": "src/Git-Tree-Builder.html#ModifyTreeResult",
        "fct-type": "function",
        "title": "TreeEntryDeleted"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "TreeEntryDeleted",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Entry Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeEntryMutated",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeEntryMutated (TreeEntry m)",
        "fct-source": "src/Git-Tree-Builder.html#ModifyTreeResult",
        "fct-type": "function",
        "title": "TreeEntryMutated"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "TreeEntryMutated",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Entry Mutated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeEntryNotFound",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeEntryNotFound",
        "fct-source": "src/Git-Tree-Builder.html#ModifyTreeResult",
        "fct-type": "function",
        "title": "TreeEntryNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "TreeEntryNotFound",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Entry Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:TreeEntryPersistent",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeEntryPersistent (TreeEntry m)",
        "fct-source": "src/Git-Tree-Builder.html#ModifyTreeResult",
        "fct-type": "function",
        "title": "TreeEntryPersistent"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "TreeEntryPersistent",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Entry Persistent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:createTree",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeT m a -\u003e m (TreeOid m)",
        "fct-source": "src/Git-Tree-Builder.html#createTree",
        "fct-type": "function",
        "title": "createTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "createTree",
        "normalized": "TreeT a b-\u003ea(TreeOid a)",
        "package": "gitlib",
        "partial": "Tree",
        "signature": "TreeT m a-\u003em(TreeOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:currentTree",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeT m (Tree m)",
        "fct-source": "src/Git-Tree-Builder.html#currentTree",
        "fct-type": "function",
        "title": "currentTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "currentTree",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:currentTreeOid",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeT m (TreeOid m)",
        "fct-source": "src/Git-Tree-Builder.html#currentTreeOid",
        "fct-type": "function",
        "title": "currentTreeOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "currentTreeOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:dropEntry",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeFilePath -\u003e TreeT m ()",
        "fct-source": "src/Git-Tree-Builder.html#dropEntry",
        "fct-type": "function",
        "title": "dropEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "dropEntry",
        "normalized": "TreeFilePath-\u003eTreeT a()",
        "package": "gitlib",
        "partial": "Entry",
        "signature": "TreeFilePath-\u003eTreeT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:emptyTreeId",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "Text",
        "fct-source": "src/Git-Tree-Builder.html#emptyTreeId",
        "fct-type": "function",
        "title": "emptyTreeId"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "emptyTreeId",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:fromModifyTreeResult",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "ModifyTreeResult m -\u003e Maybe (TreeEntry m)",
        "fct-source": "src/Git-Tree-Builder.html#fromModifyTreeResult",
        "fct-type": "function",
        "title": "fromModifyTreeResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "fromModifyTreeResult",
        "normalized": "ModifyTreeResult a-\u003eMaybe(TreeEntry a)",
        "package": "gitlib",
        "partial": "Modify Tree Result",
        "signature": "ModifyTreeResult m-\u003eMaybe(TreeEntry m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:getEntry",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeFilePath -\u003e TreeT m (Maybe (TreeEntry m))",
        "fct-source": "src/Git-Tree-Builder.html#getEntry",
        "fct-type": "function",
        "title": "getEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "getEntry",
        "normalized": "TreeFilePath-\u003eTreeT a(Maybe(TreeEntry a))",
        "package": "gitlib",
        "partial": "Entry",
        "signature": "TreeFilePath-\u003eTreeT m(Maybe(TreeEntry m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbBaseTreeOid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "Maybe (TreeOid m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbBaseTreeOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mtbBaseTreeOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Base Tree Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbDropEntry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilder m -\u003e TreeFilePath -\u003e m (ModifiedBuilder m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbDropEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mtbDropEntry",
        "normalized": "TreeBuilder a-\u003eTreeFilePath-\u003ea(ModifiedBuilder a)",
        "package": "gitlib",
        "partial": "Drop Entry",
        "signature": "TreeBuilder m-\u003eTreeFilePath-\u003em(ModifiedBuilder m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbEntryCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "m Int",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbEntryCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mtbEntryCount",
        "normalized": "",
        "package": "gitlib",
        "partial": "Entry Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbLookupEntry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeFilePath -\u003e m (Maybe (TreeEntry m))",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbLookupEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mtbLookupEntry",
        "normalized": "TreeFilePath-\u003ea(Maybe(TreeEntry a))",
        "package": "gitlib",
        "partial": "Lookup Entry",
        "signature": "TreeFilePath-\u003em(Maybe(TreeEntry m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbNewBuilder",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "Maybe (Tree m) -\u003e m (TreeBuilder m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbNewBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mtbNewBuilder",
        "normalized": "Maybe(Tree a)-\u003ea(TreeBuilder a)",
        "package": "gitlib",
        "partial": "New Builder",
        "signature": "Maybe(Tree m)-\u003em(TreeBuilder m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbPendingUpdates",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "HashMap TreeFilePath (TreeBuilder m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbPendingUpdates"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mtbPendingUpdates",
        "normalized": "",
        "package": "gitlib",
        "partial": "Pending Updates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbPutEntry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilder m -\u003e TreeFilePath -\u003e TreeEntry m -\u003e m (ModifiedBuilder m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbPutEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mtbPutEntry",
        "normalized": "TreeBuilder a-\u003eTreeFilePath-\u003eTreeEntry a-\u003ea(ModifiedBuilder a)",
        "package": "gitlib",
        "partial": "Put Entry",
        "signature": "TreeBuilder m-\u003eTreeFilePath-\u003eTreeEntry m-\u003em(ModifiedBuilder m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mtbWriteContents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilder m -\u003e m (ModifiedBuilder m, TreeOid m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbWriteContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mtbWriteContents",
        "normalized": "TreeBuilder a-\u003ea(ModifiedBuilder a,TreeOid a)",
        "package": "gitlib",
        "partial": "Write Contents",
        "signature": "TreeBuilder m-\u003em(ModifiedBuilder m,TreeOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mutateTree",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "Tree m -\u003e TreeT m a -\u003e m (TreeOid m)",
        "fct-source": "src/Git-Tree-Builder.html#mutateTree",
        "fct-type": "function",
        "title": "mutateTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mutateTree",
        "normalized": "Tree a-\u003eTreeT a b-\u003ea(TreeOid a)",
        "package": "gitlib",
        "partial": "Tree",
        "signature": "Tree m-\u003eTreeT m a-\u003em(TreeOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:mutateTreeOid",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeOid m -\u003e TreeT m a -\u003e m (TreeOid m)",
        "fct-source": "src/Git-Tree-Builder.html#mutateTreeOid",
        "fct-type": "function",
        "title": "mutateTreeOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "mutateTreeOid",
        "normalized": "TreeOid a-\u003eTreeT a b-\u003ea(TreeOid a)",
        "package": "gitlib",
        "partial": "Tree Oid",
        "signature": "TreeOid m-\u003eTreeT m a-\u003em(TreeOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putBlob",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeFilePath -\u003e BlobOid m -\u003e TreeT m ()",
        "fct-source": "src/Git-Tree-Builder.html#putBlob",
        "fct-type": "function",
        "title": "putBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "putBlob",
        "normalized": "TreeFilePath-\u003eBlobOid a-\u003eTreeT a()",
        "package": "gitlib",
        "partial": "Blob",
        "signature": "TreeFilePath-\u003eBlobOid m-\u003eTreeT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putBlob-39-",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeFilePath -\u003e BlobOid m -\u003e BlobKind -\u003e TreeT m ()",
        "fct-source": "src/Git-Tree-Builder.html#putBlob%27",
        "fct-type": "function",
        "title": "putBlob'"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "putBlob'",
        "normalized": "TreeFilePath-\u003eBlobOid a-\u003eBlobKind-\u003eTreeT a()",
        "package": "gitlib",
        "partial": "Blob'",
        "signature": "TreeFilePath-\u003eBlobOid m-\u003eBlobKind-\u003eTreeT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putCommit",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeFilePath -\u003e CommitOid m -\u003e TreeT m ()",
        "fct-source": "src/Git-Tree-Builder.html#putCommit",
        "fct-type": "function",
        "title": "putCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "putCommit",
        "normalized": "TreeFilePath-\u003eCommitOid a-\u003eTreeT a()",
        "package": "gitlib",
        "partial": "Commit",
        "signature": "TreeFilePath-\u003eCommitOid m-\u003eTreeT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putEntry",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeFilePath -\u003e TreeEntry m -\u003e TreeT m ()",
        "fct-source": "src/Git-Tree-Builder.html#putEntry",
        "fct-type": "function",
        "title": "putEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "putEntry",
        "normalized": "TreeFilePath-\u003eTreeEntry a-\u003eTreeT a()",
        "package": "gitlib",
        "partial": "Entry",
        "signature": "TreeFilePath-\u003eTreeEntry m-\u003eTreeT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:putTree",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeFilePath -\u003e TreeOid m -\u003e TreeT m ()",
        "fct-source": "src/Git-Tree-Builder.html#putTree",
        "fct-type": "function",
        "title": "putTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "putTree",
        "normalized": "TreeFilePath-\u003eTreeOid a-\u003eTreeT a()",
        "package": "gitlib",
        "partial": "Tree",
        "signature": "TreeFilePath-\u003eTreeOid m-\u003eTreeT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:toModifyTreeResult",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "(TreeEntry m -\u003e ModifyTreeResult m) -\u003e Maybe (TreeEntry m) -\u003e ModifyTreeResult m",
        "fct-source": "src/Git-Tree-Builder.html#toModifyTreeResult",
        "fct-type": "function",
        "title": "toModifyTreeResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "toModifyTreeResult",
        "normalized": "(TreeEntry a-\u003eModifyTreeResult a)-\u003eMaybe(TreeEntry a)-\u003eModifyTreeResult a",
        "package": "gitlib",
        "partial": "Modify Tree Result",
        "signature": "(TreeEntry m-\u003eModifyTreeResult m)-\u003eMaybe(TreeEntry m)-\u003eModifyTreeResult m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:treeEntry",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "Tree m -\u003e TreeFilePath -\u003e m (Maybe (TreeEntry m))",
        "fct-source": "src/Git-Types.html#treeEntry",
        "fct-type": "function",
        "title": "treeEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "treeEntry",
        "normalized": "Tree a-\u003eTreeFilePath-\u003ea(Maybe(TreeEntry a))",
        "package": "gitlib",
        "partial": "Entry",
        "signature": "Tree m-\u003eTreeFilePath-\u003em(Maybe(TreeEntry m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:withNewTree",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeT m a -\u003e m (a, TreeOid m)",
        "fct-source": "src/Git-Tree-Builder.html#withNewTree",
        "fct-type": "function",
        "title": "withNewTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "withNewTree",
        "normalized": "TreeT a b-\u003ea(b,TreeOid a)",
        "package": "gitlib",
        "partial": "New Tree",
        "signature": "TreeT m a-\u003em(a,TreeOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:withTree",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "Tree m -\u003e TreeT m a -\u003e m (a, TreeOid m)",
        "fct-source": "src/Git-Tree-Builder.html#withTree",
        "fct-type": "function",
        "title": "withTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "withTree",
        "normalized": "Tree a-\u003eTreeT a b-\u003ea(b,TreeOid a)",
        "package": "gitlib",
        "partial": "Tree",
        "signature": "Tree m-\u003eTreeT m a-\u003em(a,TreeOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree-Builder.html#v:withTreeOid",
      "description": {
        "fct-module": "Git.Tree.Builder",
        "fct-package": "gitlib",
        "fct-signature": "TreeOid m -\u003e TreeT m a -\u003e m (a, TreeOid m)",
        "fct-source": "src/Git-Tree-Builder.html#withTreeOid",
        "fct-type": "function",
        "title": "withTreeOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree Builder",
        "module": "Git.Tree.Builder",
        "name": "withTreeOid",
        "normalized": "TreeOid a-\u003eTreeT a b-\u003ea(b,TreeOid a)",
        "package": "gitlib",
        "partial": "Tree Oid",
        "signature": "TreeOid m-\u003eTreeT m a-\u003em(a,TreeOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree.html#",
      "description": {
        "fct-module": "Git.Tree",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree",
        "module": "Git.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree.html#v:copyTree",
      "description": {
        "fct-module": "Git.Tree",
        "fct-package": "gitlib",
        "fct-signature": "TreeOid m -\u003e HashSet Text -\u003e t m (TreeOid (t m), HashSet Text)",
        "fct-source": "src/Git-Tree.html#copyTree",
        "fct-type": "function",
        "title": "copyTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree",
        "module": "Git.Tree",
        "name": "copyTree",
        "normalized": "TreeOid a-\u003eHashSet Text-\u003eb a(TreeOid(b a),HashSet Text)",
        "package": "gitlib",
        "partial": "Tree",
        "signature": "TreeOid m-\u003eHashSet Text-\u003et m(TreeOid(t m),HashSet Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tree.html#v:copyTreeEntry",
      "description": {
        "fct-module": "Git.Tree",
        "fct-package": "gitlib",
        "fct-signature": "TreeEntry m -\u003e HashSet Text -\u003e t m (TreeEntry (t m), HashSet Text)",
        "fct-source": "src/Git-Tree.html#copyTreeEntry",
        "fct-type": "function",
        "title": "copyTreeEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Tree",
        "module": "Git.Tree",
        "name": "copyTreeEntry",
        "normalized": "TreeEntry a-\u003eHashSet Text-\u003eb a(TreeEntry(b a),HashSet Text)",
        "package": "gitlib",
        "partial": "Tree Entry",
        "signature": "TreeEntry m-\u003eHashSet Text-\u003et m(TreeEntry(t m),HashSet Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Tutorial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a brief introductory tutorial in the \"Introduction\"\n    section followed by a lengthy discussion of the library's design and idioms.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Git.Tutorial",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Tutorial.html",
        "fct-type": "module",
        "title": "Tutorial"
      },
      "index": {
        "description": "This module provides brief introductory tutorial in the Introduction section followed by lengthy discussion of the library design and idioms",
        "hierarchy": "Git Tutorial",
        "module": "Git.Tutorial",
        "name": "Tutorial",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tutorial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Types",
        "normalized": "",
        "package": "gitlib",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Blob",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#Blob",
        "fct-type": "data",
        "title": "Blob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Blob",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:BlobContents",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#BlobContents",
        "fct-type": "data",
        "title": "BlobContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobContents",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:BlobKind",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#BlobKind",
        "fct-type": "data",
        "title": "BlobKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobKind",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:BlobOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#BlobOid",
        "fct-type": "type",
        "title": "BlobOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:ByteSource",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#ByteSource",
        "fct-type": "type",
        "title": "ByteSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ByteSource",
        "normalized": "",
        "package": "gitlib",
        "partial": "Byte Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Commit",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#Commit",
        "fct-type": "data",
        "title": "Commit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Commit",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:CommitAuthor",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#CommitAuthor",
        "fct-type": "type",
        "title": "CommitAuthor"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "CommitAuthor",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:CommitEmail",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#CommitEmail",
        "fct-type": "type",
        "title": "CommitEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "CommitEmail",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:CommitMessage",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#CommitMessage",
        "fct-type": "type",
        "title": "CommitMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "CommitMessage",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:CommitOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#CommitOid",
        "fct-type": "type",
        "title": "CommitOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "CommitOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:GitException",
      "description": {
        "fct-descr": "\u003cp\u003eThere is a separate \u003ccode\u003e\u003ca\u003eGitException\u003c/a\u003e\u003c/code\u003e for each possible failure when\n   interacting with the Git repository.\n\u003c/p\u003e",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "data",
        "title": "GitException"
      },
      "index": {
        "description": "There is separate GitException for each possible failure when interacting with the Git repository",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "GitException",
        "normalized": "",
        "package": "gitlib",
        "partial": "Git Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:IsOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "class",
        "fct-source": "src/Git-Types.html#IsOid",
        "fct-type": "class",
        "title": "IsOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "IsOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Is Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:MergeResult",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#MergeResult",
        "fct-type": "data",
        "title": "MergeResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "MergeResult",
        "normalized": "",
        "package": "gitlib",
        "partial": "Merge Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:MergeStatus",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "data",
        "title": "MergeStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "MergeStatus",
        "normalized": "",
        "package": "gitlib",
        "partial": "Merge Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:ModificationKind",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#ModificationKind",
        "fct-type": "data",
        "title": "ModificationKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ModificationKind",
        "normalized": "",
        "package": "gitlib",
        "partial": "Modification Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:ModifiedBuilder",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#ModifiedBuilder",
        "fct-type": "data",
        "title": "ModifiedBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ModifiedBuilder",
        "normalized": "",
        "package": "gitlib",
        "partial": "Modified Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:MonadGit",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#MonadGit",
        "fct-type": "type",
        "title": "MonadGit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "MonadGit",
        "normalized": "",
        "package": "gitlib",
        "partial": "Monad Git",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Object",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#Object",
        "fct-type": "data",
        "title": "Object"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Object",
        "normalized": "",
        "package": "gitlib",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:ObjectOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#ObjectOid",
        "fct-type": "data",
        "title": "ObjectOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ObjectOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Object Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RawFilePath",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#RawFilePath",
        "fct-type": "type",
        "title": "RawFilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RawFilePath",
        "normalized": "",
        "package": "gitlib",
        "partial": "Raw File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RefName",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#RefName",
        "fct-type": "type",
        "title": "RefName"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RefName",
        "normalized": "",
        "package": "gitlib",
        "partial": "Ref Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RefTarget",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#RefTarget",
        "fct-type": "data",
        "title": "RefTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RefTarget",
        "normalized": "",
        "package": "gitlib",
        "partial": "Ref Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Repository",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRepository\u003c/a\u003e\u003c/code\u003e is the central point of contact between user code and Git\n   data objects.  Every object must belong to some repository.\n\u003c/p\u003e",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "class",
        "fct-source": "src/Git-Types.html#Repository",
        "fct-type": "class",
        "title": "Repository"
      },
      "index": {
        "description": "Repository is the central point of contact between user code and Git data objects Every object must belong to some repository",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Repository",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RepositoryFactory",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#RepositoryFactory",
        "fct-type": "data",
        "title": "RepositoryFactory"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RepositoryFactory",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository Factory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RepositoryFacts",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#RepositoryFacts",
        "fct-type": "data",
        "title": "RepositoryFacts"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RepositoryFacts",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository Facts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:RepositoryOptions",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#RepositoryOptions",
        "fct-type": "data",
        "title": "RepositoryOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RepositoryOptions",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:SHA",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "newtype",
        "fct-source": "src/Git-Types.html#SHA",
        "fct-type": "newtype",
        "title": "SHA"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "SHA",
        "normalized": "",
        "package": "gitlib",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Signature",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#Signature",
        "fct-type": "data",
        "title": "Signature"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Signature",
        "normalized": "",
        "package": "gitlib",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:Tag",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Tag",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TagOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#TagOid",
        "fct-type": "type",
        "title": "TagOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TagOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tag Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TreeBuilder",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "data",
        "title": "TreeBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeBuilder",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TreeEntry",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "data",
        "fct-source": "src/Git-Types.html#TreeEntry",
        "fct-type": "data",
        "title": "TreeEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeEntry",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TreeFilePath",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#TreeFilePath",
        "fct-type": "type",
        "title": "TreeFilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeFilePath",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#t:TreeOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "type",
        "fct-source": "src/Git-Types.html#TreeOid",
        "fct-type": "type",
        "title": "TreeOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Added",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Added",
        "fct-source": "src/Git-Types.html#ModificationKind",
        "fct-type": "function",
        "title": "Added"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Added",
        "normalized": "",
        "package": "gitlib",
        "partial": "Added",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BackendError",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BackendError Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "BackendError"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BackendError",
        "normalized": "",
        "package": "gitlib",
        "partial": "Backend Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Blob",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Blob",
        "fct-source": "src/Git-Types.html#Blob",
        "fct-type": "function",
        "title": "Blob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Blob",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobCreateFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobCreateFailed Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "BlobCreateFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobCreateFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Create Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobEmptyCreateFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobEmptyCreateFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "BlobEmptyCreateFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobEmptyCreateFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Empty Create Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobEncodingUnknown",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobEncodingUnknown Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "BlobEncodingUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobEncodingUnknown",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Encoding Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobEntry",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobEntry",
        "fct-source": "src/Git-Types.html#TreeEntry",
        "fct-type": "function",
        "title": "BlobEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobEntry",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobLookupFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobLookupFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "BlobLookupFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobLookupFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Lookup Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobObj",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobObj !(Blob m)",
        "fct-source": "src/Git-Types.html#Object",
        "fct-type": "function",
        "title": "BlobObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobObj",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobObjOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobObjOid !(BlobOid m)",
        "fct-source": "src/Git-Types.html#ObjectOid",
        "fct-type": "function",
        "title": "BlobObjOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobObjOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Obj Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobSizedStream",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobSizedStream !(ByteSource m) !Int",
        "fct-source": "src/Git-Types.html#BlobContents",
        "fct-type": "function",
        "title": "BlobSizedStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobSizedStream",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Sized Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobStream",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobStream !(ByteSource m)",
        "fct-source": "src/Git-Types.html#BlobContents",
        "fct-type": "function",
        "title": "BlobStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobStream",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BlobString",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobString !ByteString",
        "fct-source": "src/Git-Types.html#BlobContents",
        "fct-type": "function",
        "title": "BlobString"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BlobString",
        "normalized": "",
        "package": "gitlib",
        "partial": "Blob String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BothAdded",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BothAdded",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "BothAdded"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BothAdded",
        "normalized": "",
        "package": "gitlib",
        "partial": "Both Added",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BothModified",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BothModified",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "BothModified"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BothModified",
        "normalized": "",
        "package": "gitlib",
        "partial": "Both Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BothTypeChanged",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BothTypeChanged",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "BothTypeChanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BothTypeChanged",
        "normalized": "",
        "package": "gitlib",
        "partial": "Both Type Changed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:BuilderUnchanged",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BuilderUnchanged (TreeBuilder m)",
        "fct-source": "src/Git-Types.html#ModifiedBuilder",
        "fct-type": "function",
        "title": "BuilderUnchanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "BuilderUnchanged",
        "normalized": "",
        "package": "gitlib",
        "partial": "Builder Unchanged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Commit",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Commit",
        "fct-source": "src/Git-Types.html#Commit",
        "fct-type": "function",
        "title": "Commit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Commit",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitCreateFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitCreateFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "CommitCreateFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "CommitCreateFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit Create Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitEntry",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitEntry",
        "fct-source": "src/Git-Types.html#TreeEntry",
        "fct-type": "function",
        "title": "CommitEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "CommitEntry",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitLookupFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitLookupFailed Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "CommitLookupFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "CommitLookupFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit Lookup Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitObj",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitObj !(Commit m)",
        "fct-source": "src/Git-Types.html#Object",
        "fct-type": "function",
        "title": "CommitObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "CommitObj",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:CommitObjOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitObjOid !(CommitOid m)",
        "fct-source": "src/Git-Types.html#ObjectOid",
        "fct-type": "function",
        "title": "CommitObjOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "CommitObjOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit Obj Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Deleted",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Deleted",
        "fct-source": "src/Git-Types.html#ModificationKind",
        "fct-type": "function",
        "title": "Deleted"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Deleted",
        "normalized": "",
        "package": "gitlib",
        "partial": "Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:DiffBlobFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "DiffBlobFailed Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "DiffBlobFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "DiffBlobFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Diff Blob Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:DiffPrintToPatchFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "DiffPrintToPatchFailed Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "DiffPrintToPatchFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "DiffPrintToPatchFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Diff Print To Patch Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:DiffTreeToIndexFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "DiffTreeToIndexFailed Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "DiffTreeToIndexFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "DiffTreeToIndexFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Diff Tree To Index Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ExecutableBlob",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ExecutableBlob",
        "fct-source": "src/Git-Types.html#BlobKind",
        "fct-type": "function",
        "title": "ExecutableBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ExecutableBlob",
        "normalized": "",
        "package": "gitlib",
        "partial": "Executable Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:GitError",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "GitError Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "GitError"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "GitError",
        "normalized": "",
        "package": "gitlib",
        "partial": "Git Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:IndexAddFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "IndexAddFailed TreeFilePath Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "IndexAddFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "IndexAddFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Index Add Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:IndexCreateFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "IndexCreateFailed Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "IndexCreateFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "IndexCreateFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Index Create Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftDeletedRightModified",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "LeftDeletedRightModified",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "LeftDeletedRightModified"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "LeftDeletedRightModified",
        "normalized": "",
        "package": "gitlib",
        "partial": "Left Deleted Right Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftDeletedRightTypeChanged",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "LeftDeletedRightTypeChanged",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "LeftDeletedRightTypeChanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "LeftDeletedRightTypeChanged",
        "normalized": "",
        "package": "gitlib",
        "partial": "Left Deleted Right Type Changed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftModifiedRightDeleted",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "LeftModifiedRightDeleted",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "LeftModifiedRightDeleted"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "LeftModifiedRightDeleted",
        "normalized": "",
        "package": "gitlib",
        "partial": "Left Modified Right Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftModifiedRightTypeChanged",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "LeftModifiedRightTypeChanged",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "LeftModifiedRightTypeChanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "LeftModifiedRightTypeChanged",
        "normalized": "",
        "package": "gitlib",
        "partial": "Left Modified Right Type Changed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftTypeChangedRightDeleted",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "LeftTypeChangedRightDeleted",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "LeftTypeChangedRightDeleted"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "LeftTypeChangedRightDeleted",
        "normalized": "",
        "package": "gitlib",
        "partial": "Left Type Changed Right Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:LeftTypeChangedRightModified",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "LeftTypeChangedRightModified",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "LeftTypeChangedRightModified"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "LeftTypeChangedRightModified",
        "normalized": "",
        "package": "gitlib",
        "partial": "Left Type Changed Right Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:MergeConflicted",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "MergeConflicted",
        "fct-source": "src/Git-Types.html#MergeResult",
        "fct-type": "function",
        "title": "MergeConflicted"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "MergeConflicted",
        "normalized": "",
        "package": "gitlib",
        "partial": "Merge Conflicted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:MergeSuccess",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "MergeSuccess",
        "fct-source": "src/Git-Types.html#MergeResult",
        "fct-type": "function",
        "title": "MergeSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "MergeSuccess",
        "normalized": "",
        "package": "gitlib",
        "partial": "Merge Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Modified",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Modified",
        "fct-source": "src/Git-Types.html#ModificationKind",
        "fct-type": "function",
        "title": "Modified"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Modified",
        "normalized": "",
        "package": "gitlib",
        "partial": "Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ModifiedBuilder",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ModifiedBuilder (TreeBuilder m)",
        "fct-source": "src/Git-Types.html#ModifiedBuilder",
        "fct-type": "function",
        "title": "ModifiedBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ModifiedBuilder",
        "normalized": "",
        "package": "gitlib",
        "partial": "Modified Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:NoConflict",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "NoConflict",
        "fct-source": "src/Git-Types.html#MergeStatus",
        "fct-type": "function",
        "title": "NoConflict"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "NoConflict",
        "normalized": "",
        "package": "gitlib",
        "partial": "No Conflict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ObjectLookupFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ObjectLookupFailed Text Int",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "ObjectLookupFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ObjectLookupFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Object Lookup Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ObjectRefRequiresFullOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ObjectRefRequiresFullOid",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "ObjectRefRequiresFullOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ObjectRefRequiresFullOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Object Ref Requires Full Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:OidCopyFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "OidCopyFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "OidCopyFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "OidCopyFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Oid Copy Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:OidParseFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "OidParseFailed Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "OidParseFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "OidParseFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Oid Parse Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:PlainBlob",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "PlainBlob",
        "fct-source": "src/Git-Types.html#BlobKind",
        "fct-type": "function",
        "title": "PlainBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "PlainBlob",
        "normalized": "",
        "package": "gitlib",
        "partial": "Plain Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:PushNotFastForward",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "PushNotFastForward Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "PushNotFastForward"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "PushNotFastForward",
        "normalized": "",
        "package": "gitlib",
        "partial": "Push Not Fast Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:QuotaHardLimitExceeded",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "QuotaHardLimitExceeded Int Int",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "QuotaHardLimitExceeded"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "QuotaHardLimitExceeded",
        "normalized": "",
        "package": "gitlib",
        "partial": "Quota Hard Limit Exceeded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RefCannotCreateFromPartialOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RefCannotCreateFromPartialOid",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "RefCannotCreateFromPartialOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RefCannotCreateFromPartialOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Ref Cannot Create From Partial Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RefObj",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RefObj !(Oid m)",
        "fct-source": "src/Git-Types.html#RefTarget",
        "fct-type": "function",
        "title": "RefObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RefObj",
        "normalized": "",
        "package": "gitlib",
        "partial": "Ref Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RefSymbolic",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RefSymbolic !RefName",
        "fct-source": "src/Git-Types.html#RefTarget",
        "fct-type": "function",
        "title": "RefSymbolic"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RefSymbolic",
        "normalized": "",
        "package": "gitlib",
        "partial": "Ref Symbolic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ReferenceCreateFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ReferenceCreateFailed RefName",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "ReferenceCreateFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ReferenceCreateFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Reference Create Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ReferenceDeleteFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ReferenceDeleteFailed RefName",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "ReferenceDeleteFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ReferenceDeleteFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Reference Delete Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ReferenceListingFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ReferenceListingFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "ReferenceListingFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ReferenceListingFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Reference Listing Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:ReferenceLookupFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ReferenceLookupFailed RefName",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "ReferenceLookupFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "ReferenceLookupFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Reference Lookup Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryCannotAccess",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryCannotAccess Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "RepositoryCannotAccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RepositoryCannotAccess",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository Cannot Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryFactory",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryFactory",
        "fct-source": "src/Git-Types.html#RepositoryFactory",
        "fct-type": "function",
        "title": "RepositoryFactory"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RepositoryFactory",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository Factory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryFacts",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryFacts",
        "fct-source": "src/Git-Types.html#RepositoryFacts",
        "fct-type": "function",
        "title": "RepositoryFacts"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RepositoryFacts",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository Facts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryInvalid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryInvalid",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "RepositoryInvalid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RepositoryInvalid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository Invalid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryNotExist",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryNotExist",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "RepositoryNotExist"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RepositoryNotExist",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository Not Exist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:RepositoryOptions",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryOptions",
        "fct-source": "src/Git-Types.html#RepositoryOptions",
        "fct-type": "function",
        "title": "RepositoryOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "RepositoryOptions",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:SHA",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "SHA",
        "fct-source": "src/Git-Types.html#SHA",
        "fct-type": "function",
        "title": "SHA"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "SHA",
        "normalized": "",
        "package": "gitlib",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Signature",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Signature",
        "fct-source": "src/Git-Types.html#Signature",
        "fct-type": "function",
        "title": "Signature"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Signature",
        "normalized": "",
        "package": "gitlib",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:SymlinkBlob",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "SymlinkBlob",
        "fct-source": "src/Git-Types.html#BlobKind",
        "fct-type": "function",
        "title": "SymlinkBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "SymlinkBlob",
        "normalized": "",
        "package": "gitlib",
        "partial": "Symlink Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Tag",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Tag",
        "fct-source": "src/Git-Types.html#Tag",
        "fct-type": "function",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Tag",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TagObj",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TagObj !(Tag m)",
        "fct-source": "src/Git-Types.html#Object",
        "fct-type": "function",
        "title": "TagObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TagObj",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tag Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TagObjOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TagObjOid !(TagOid m)",
        "fct-source": "src/Git-Types.html#ObjectOid",
        "fct-type": "function",
        "title": "TagObjOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TagObjOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tag Obj Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TranslationException",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TranslationException Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TranslationException"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TranslationException",
        "normalized": "",
        "package": "gitlib",
        "partial": "Translation Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilder",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilder",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "TreeBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeBuilder",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilderCreateFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilderCreateFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeBuilderCreateFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeBuilderCreateFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Builder Create Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilderInsertFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilderInsertFailed TreeFilePath",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeBuilderInsertFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeBuilderInsertFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Builder Insert Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilderRemoveFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilderRemoveFailed TreeFilePath",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeBuilderRemoveFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeBuilderRemoveFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Builder Remove Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeBuilderWriteFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilderWriteFailed Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeBuilderWriteFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeBuilderWriteFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Builder Write Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeCannotTraverseBlob",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeCannotTraverseBlob",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeCannotTraverseBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeCannotTraverseBlob",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Cannot Traverse Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeCannotTraverseCommit",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeCannotTraverseCommit",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeCannotTraverseCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeCannotTraverseCommit",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Cannot Traverse Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeCreateFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeCreateFailed Text",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeCreateFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeCreateFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Create Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeEmptyCreateFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeEmptyCreateFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeEmptyCreateFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeEmptyCreateFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Empty Create Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeEntry",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeEntry",
        "fct-source": "src/Git-Types.html#TreeEntry",
        "fct-type": "function",
        "title": "TreeEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeEntry",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeEntryLookupFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeEntryLookupFailed TreeFilePath",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeEntryLookupFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeEntryLookupFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Entry Lookup Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeLookupFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeLookupFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeLookupFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeLookupFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Lookup Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeObj",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeObj !(Tree m)",
        "fct-source": "src/Git-Types.html#Object",
        "fct-type": "function",
        "title": "TreeObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeObj",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeObjOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeObjOid !(TreeOid m)",
        "fct-source": "src/Git-Types.html#ObjectOid",
        "fct-type": "function",
        "title": "TreeObjOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeObjOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Obj Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeUpdateFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeUpdateFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeUpdateFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeUpdateFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Update Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TreeWalkFailed",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeWalkFailed",
        "fct-source": "src/Git-Types.html#GitException",
        "fct-type": "function",
        "title": "TreeWalkFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TreeWalkFailed",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree Walk Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:TypeChanged",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TypeChanged",
        "fct-source": "src/Git-Types.html#ModificationKind",
        "fct-type": "function",
        "title": "TypeChanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "TypeChanged",
        "normalized": "",
        "package": "gitlib",
        "partial": "Type Changed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:Unchanged",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Unchanged",
        "fct-source": "src/Git-Types.html#ModificationKind",
        "fct-type": "function",
        "title": "Unchanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "Unchanged",
        "normalized": "",
        "package": "gitlib",
        "partial": "Unchanged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:UnknownBlob",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "UnknownBlob",
        "fct-source": "src/Git-Types.html#BlobKind",
        "fct-type": "function",
        "title": "UnknownBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "UnknownBlob",
        "normalized": "",
        "package": "gitlib",
        "partial": "Unknown Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:blobContents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!(BlobContents m)",
        "fct-source": "src/Git-Types.html#Blob",
        "fct-type": "function",
        "title": "blobContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "blobContents",
        "normalized": "",
        "package": "gitlib",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:blobEntryKind",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!BlobKind",
        "fct-source": "src/Git-Types.html#TreeEntry",
        "fct-type": "function",
        "title": "blobEntryKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "blobEntryKind",
        "normalized": "",
        "package": "gitlib",
        "partial": "Entry Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:blobEntryOid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!(BlobOid m)",
        "fct-source": "src/Git-Types.html#TreeEntry",
        "fct-type": "function",
        "title": "blobEntryOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "blobEntryOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Entry Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:blobOid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!(BlobOid m)",
        "fct-source": "src/Git-Types.html#Blob",
        "fct-type": "function",
        "title": "blobOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "blobOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:closeRepository",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "c -\u003e m ()",
        "fct-source": "src/Git-Types.html#RepositoryFactory",
        "fct-type": "function",
        "title": "closeRepository"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "closeRepository",
        "normalized": "a-\u003eb()",
        "package": "gitlib",
        "partial": "Repository",
        "signature": "c-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitAuthor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!Signature",
        "fct-source": "src/Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitAuthor"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "commitAuthor",
        "normalized": "",
        "package": "gitlib",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitCommitter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!Signature",
        "fct-source": "src/Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitCommitter"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "commitCommitter",
        "normalized": "",
        "package": "gitlib",
        "partial": "Committer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitEncoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!Text",
        "fct-source": "src/Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "commitEncoding",
        "normalized": "",
        "package": "gitlib",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitEntryOid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!(CommitOid m)",
        "fct-source": "src/Git-Types.html#TreeEntry",
        "fct-type": "function",
        "title": "commitEntryOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "commitEntryOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Entry Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitLog",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!CommitMessage",
        "fct-source": "src/Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "commitLog",
        "normalized": "",
        "package": "gitlib",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitOid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!(CommitOid m)",
        "fct-source": "src/Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "commitOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitParents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "![CommitOid m]",
        "fct-source": "src/Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitParents"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "commitParents",
        "normalized": "[CommitOid a]",
        "package": "gitlib",
        "partial": "Parents",
        "signature": "[CommitOid m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitRefTarget",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Commit m -\u003e RefTarget m",
        "fct-source": "src/Git-Types.html#commitRefTarget",
        "fct-type": "function",
        "title": "commitRefTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "commitRefTarget",
        "normalized": "Commit a-\u003eRefTarget a",
        "package": "gitlib",
        "partial": "Ref Target",
        "signature": "Commit m-\u003eRefTarget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:commitTree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!(TreeOid m)",
        "fct-source": "src/Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "commitTree",
        "normalized": "",
        "package": "gitlib",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:copyMergeResult",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "MergeResult m -\u003e n (MergeResult n)",
        "fct-source": "src/Git-Types.html#copyMergeResult",
        "fct-type": "function",
        "title": "copyMergeResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "copyMergeResult",
        "normalized": "MergeResult a-\u003eb(MergeResult b)",
        "package": "gitlib",
        "partial": "Merge Result",
        "signature": "MergeResult m-\u003en(MergeResult n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:copyOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Oid m -\u003e n (Oid n)",
        "fct-source": "src/Git-Types.html#copyOid",
        "fct-type": "function",
        "title": "copyOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "copyOid",
        "normalized": "Oid a-\u003eb(Oid b)",
        "package": "gitlib",
        "partial": "Oid",
        "signature": "Oid m-\u003en(Oid n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:createBlob",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobContents m -\u003e m (BlobOid m)",
        "fct-source": "src/Git-Types.html#createBlob",
        "fct-type": "method",
        "title": "createBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "createBlob",
        "normalized": "BlobContents a-\u003ea(BlobOid a)",
        "package": "gitlib",
        "partial": "Blob",
        "signature": "BlobContents m-\u003em(BlobOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:createCommit",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "[CommitOid m] -\u003e TreeOid m -\u003e Signature -\u003e Signature -\u003e CommitMessage -\u003e Maybe RefName -\u003e m (Commit m)",
        "fct-source": "src/Git-Types.html#createCommit",
        "fct-type": "method",
        "title": "createCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "createCommit",
        "normalized": "[CommitOid a]-\u003eTreeOid a-\u003eSignature-\u003eSignature-\u003eCommitMessage-\u003eMaybe RefName-\u003ea(Commit a)",
        "package": "gitlib",
        "partial": "Commit",
        "signature": "[CommitOid m]-\u003eTreeOid m-\u003eSignature-\u003eSignature-\u003eCommitMessage-\u003eMaybe RefName-\u003em(Commit m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:createReference",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RefName -\u003e RefTarget m -\u003e m ()",
        "fct-source": "src/Git-Types.html#createReference",
        "fct-type": "method",
        "title": "createReference"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "createReference",
        "normalized": "RefName-\u003eRefTarget a-\u003ea()",
        "package": "gitlib",
        "partial": "Reference",
        "signature": "RefName-\u003eRefTarget m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:createTag",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitOid m -\u003e Signature -\u003e CommitMessage -\u003e Text -\u003e m (Tag m)",
        "fct-source": "src/Git-Types.html#createTag",
        "fct-type": "method",
        "title": "createTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "createTag",
        "normalized": "CommitOid a-\u003eSignature-\u003eCommitMessage-\u003eText-\u003ea(Tag a)",
        "package": "gitlib",
        "partial": "Tag",
        "signature": "CommitOid m-\u003eSignature-\u003eCommitMessage-\u003eText-\u003em(Tag m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:defaultOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!RepositoryOptions",
        "fct-source": "src/Git-Types.html#RepositoryFactory",
        "fct-type": "function",
        "title": "defaultOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "defaultOptions",
        "normalized": "",
        "package": "gitlib",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:deleteReference",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RefName -\u003e m ()",
        "fct-source": "src/Git-Types.html#deleteReference",
        "fct-type": "method",
        "title": "deleteReference"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "deleteReference",
        "normalized": "RefName-\u003ea()",
        "package": "gitlib",
        "partial": "Reference",
        "signature": "RefName-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:deleteRepository",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "m ()",
        "fct-source": "src/Git-Types.html#deleteRepository",
        "fct-type": "method",
        "title": "deleteRepository"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "deleteRepository",
        "normalized": "a()",
        "package": "gitlib",
        "partial": "Repository",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:diffContentsWithTree",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Source m (Either TreeFilePath ByteString) -\u003e Tree m -\u003e Producer m ByteString",
        "fct-source": "src/Git-Types.html#diffContentsWithTree",
        "fct-type": "method",
        "title": "diffContentsWithTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "diffContentsWithTree",
        "normalized": "Source a(Either TreeFilePath ByteString)-\u003eTree a-\u003eProducer a ByteString",
        "package": "gitlib",
        "partial": "Contents With Tree",
        "signature": "Source m(Either TreeFilePath ByteString)-\u003eTree m-\u003eProducer m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:existsObject",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Oid m -\u003e m Bool",
        "fct-source": "src/Git-Types.html#existsObject",
        "fct-type": "method",
        "title": "existsObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "existsObject",
        "normalized": "Oid a-\u003ea Bool",
        "package": "gitlib",
        "partial": "Object",
        "signature": "Oid m-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:facts",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "m RepositoryFacts",
        "fct-source": "src/Git-Types.html#facts",
        "fct-type": "method",
        "title": "facts"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "facts",
        "normalized": "",
        "package": "gitlib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:fromBuilderMod",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ModifiedBuilder m -\u003e TreeBuilder m",
        "fct-source": "src/Git-Types.html#fromBuilderMod",
        "fct-type": "function",
        "title": "fromBuilderMod"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "fromBuilderMod",
        "normalized": "ModifiedBuilder a-\u003eTreeBuilder a",
        "package": "gitlib",
        "partial": "Builder Mod",
        "signature": "ModifiedBuilder m-\u003eTreeBuilder m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:getRepository",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "t c",
        "fct-source": "src/Git-Types.html#RepositoryFactory",
        "fct-type": "function",
        "title": "getRepository"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "getRepository",
        "normalized": "",
        "package": "gitlib",
        "partial": "Repository",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:getSHA",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ByteString",
        "fct-source": "src/Git-Types.html#SHA",
        "fct-type": "function",
        "title": "getSHA"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "getSHA",
        "normalized": "",
        "package": "gitlib",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:hasSymbolicReferences",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!Bool",
        "fct-source": "src/Git-Types.html#RepositoryFacts",
        "fct-type": "function",
        "title": "hasSymbolicReferences"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "hasSymbolicReferences",
        "normalized": "",
        "package": "gitlib",
        "partial": "Symbolic References",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:hashContents",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobContents m -\u003e m (BlobOid m)",
        "fct-source": "src/Git-Types.html#hashContents",
        "fct-type": "method",
        "title": "hashContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "hashContents",
        "normalized": "BlobContents a-\u003ea(BlobOid a)",
        "package": "gitlib",
        "partial": "Contents",
        "signature": "BlobContents m-\u003em(BlobOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:listReferences",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "m [RefName]",
        "fct-source": "src/Git-Types.html#listReferences",
        "fct-type": "method",
        "title": "listReferences"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "listReferences",
        "normalized": "a[RefName]",
        "package": "gitlib",
        "partial": "References",
        "signature": "m[RefName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:listTreeEntries",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Tree m -\u003e m [(TreeFilePath, TreeEntry m)]",
        "fct-source": "src/Git-Types.html#listTreeEntries",
        "fct-type": "method",
        "title": "listTreeEntries"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "listTreeEntries",
        "normalized": "Tree a-\u003ea[(TreeFilePath,TreeEntry a)]",
        "package": "gitlib",
        "partial": "Tree Entries",
        "signature": "Tree m-\u003em[(TreeFilePath,TreeEntry m)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:loadObject",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ObjectOid m -\u003e m (Object m)",
        "fct-source": "src/Git-Types.html#loadObject",
        "fct-type": "function",
        "title": "loadObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "loadObject",
        "normalized": "ObjectOid a-\u003ea(Object a)",
        "package": "gitlib",
        "partial": "Object",
        "signature": "ObjectOid m-\u003em(Object m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupBlob",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "BlobOid m -\u003e m (Blob m)",
        "fct-source": "src/Git-Types.html#lookupBlob",
        "fct-type": "method",
        "title": "lookupBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "lookupBlob",
        "normalized": "BlobOid a-\u003ea(Blob a)",
        "package": "gitlib",
        "partial": "Blob",
        "signature": "BlobOid m-\u003em(Blob m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupCommit",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitOid m -\u003e m (Commit m)",
        "fct-source": "src/Git-Types.html#lookupCommit",
        "fct-type": "method",
        "title": "lookupCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "lookupCommit",
        "normalized": "CommitOid a-\u003ea(Commit a)",
        "package": "gitlib",
        "partial": "Commit",
        "signature": "CommitOid m-\u003em(Commit m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupCommitParents",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Commit m -\u003e m [Commit m]",
        "fct-source": "src/Git-Types.html#lookupCommitParents",
        "fct-type": "function",
        "title": "lookupCommitParents"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "lookupCommitParents",
        "normalized": "Commit a-\u003ea[Commit a]",
        "package": "gitlib",
        "partial": "Commit Parents",
        "signature": "Commit m-\u003em[Commit m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupObject",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Oid m -\u003e m (Object m)",
        "fct-source": "src/Git-Types.html#lookupObject",
        "fct-type": "method",
        "title": "lookupObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "lookupObject",
        "normalized": "Oid a-\u003ea(Object a)",
        "package": "gitlib",
        "partial": "Object",
        "signature": "Oid m-\u003em(Object m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupReference",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RefName -\u003e m (Maybe (RefTarget m))",
        "fct-source": "src/Git-Types.html#lookupReference",
        "fct-type": "method",
        "title": "lookupReference"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "lookupReference",
        "normalized": "RefName-\u003ea(Maybe(RefTarget a))",
        "package": "gitlib",
        "partial": "Reference",
        "signature": "RefName-\u003em(Maybe(RefTarget m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupTag",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TagOid m -\u003e m (Tag m)",
        "fct-source": "src/Git-Types.html#lookupTag",
        "fct-type": "method",
        "title": "lookupTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "lookupTag",
        "normalized": "TagOid a-\u003ea(Tag a)",
        "package": "gitlib",
        "partial": "Tag",
        "signature": "TagOid m-\u003em(Tag m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:lookupTree",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeOid m -\u003e m (Tree m)",
        "fct-source": "src/Git-Types.html#lookupTree",
        "fct-type": "method",
        "title": "lookupTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "lookupTree",
        "normalized": "TreeOid a-\u003ea(Tree a)",
        "package": "gitlib",
        "partial": "Tree",
        "signature": "TreeOid m-\u003em(Tree m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeCommit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitOid m",
        "fct-source": "src/Git-Types.html#MergeResult",
        "fct-type": "function",
        "title": "mergeCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mergeCommit",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeConflicts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Map TreeFilePath (ModificationKind, ModificationKind)",
        "fct-source": "src/Git-Types.html#MergeResult",
        "fct-type": "function",
        "title": "mergeConflicts"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mergeConflicts",
        "normalized": "Map TreeFilePath(ModificationKind,ModificationKind)",
        "package": "gitlib",
        "partial": "Conflicts",
        "signature": "Map TreeFilePath(ModificationKind,ModificationKind)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeHeadLeft",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitOid m",
        "fct-source": "src/Git-Types.html#MergeResult",
        "fct-type": "function",
        "title": "mergeHeadLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mergeHeadLeft",
        "normalized": "",
        "package": "gitlib",
        "partial": "Head Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeHeadRight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "CommitOid m",
        "fct-source": "src/Git-Types.html#MergeResult",
        "fct-type": "function",
        "title": "mergeHeadRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mergeHeadRight",
        "normalized": "",
        "package": "gitlib",
        "partial": "Head Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mergeStatus",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ModificationKind -\u003e ModificationKind -\u003e MergeStatus",
        "fct-source": "src/Git-Types.html#mergeStatus",
        "fct-type": "function",
        "title": "mergeStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mergeStatus",
        "normalized": "ModificationKind-\u003eModificationKind-\u003eMergeStatus",
        "package": "gitlib",
        "partial": "Status",
        "signature": "ModificationKind-\u003eModificationKind-\u003eMergeStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbBaseTreeOid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Maybe (TreeOid m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbBaseTreeOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mtbBaseTreeOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Base Tree Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbDropEntry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilder m -\u003e TreeFilePath -\u003e m (ModifiedBuilder m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbDropEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mtbDropEntry",
        "normalized": "TreeBuilder a-\u003eTreeFilePath-\u003ea(ModifiedBuilder a)",
        "package": "gitlib",
        "partial": "Drop Entry",
        "signature": "TreeBuilder m-\u003eTreeFilePath-\u003em(ModifiedBuilder m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbEntryCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "m Int",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbEntryCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mtbEntryCount",
        "normalized": "",
        "package": "gitlib",
        "partial": "Entry Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbLookupEntry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeFilePath -\u003e m (Maybe (TreeEntry m))",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbLookupEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mtbLookupEntry",
        "normalized": "TreeFilePath-\u003ea(Maybe(TreeEntry a))",
        "package": "gitlib",
        "partial": "Lookup Entry",
        "signature": "TreeFilePath-\u003em(Maybe(TreeEntry m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbNewBuilder",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Maybe (Tree m) -\u003e m (TreeBuilder m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbNewBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mtbNewBuilder",
        "normalized": "Maybe(Tree a)-\u003ea(TreeBuilder a)",
        "package": "gitlib",
        "partial": "New Builder",
        "signature": "Maybe(Tree m)-\u003em(TreeBuilder m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbPendingUpdates",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "HashMap TreeFilePath (TreeBuilder m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbPendingUpdates"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mtbPendingUpdates",
        "normalized": "",
        "package": "gitlib",
        "partial": "Pending Updates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbPutEntry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilder m -\u003e TreeFilePath -\u003e TreeEntry m -\u003e m (ModifiedBuilder m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbPutEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mtbPutEntry",
        "normalized": "TreeBuilder a-\u003eTreeFilePath-\u003eTreeEntry a-\u003ea(ModifiedBuilder a)",
        "package": "gitlib",
        "partial": "Put Entry",
        "signature": "TreeBuilder m-\u003eTreeFilePath-\u003eTreeEntry m-\u003em(ModifiedBuilder m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:mtbWriteContents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeBuilder m -\u003e m (ModifiedBuilder m, TreeOid m)",
        "fct-source": "src/Git-Types.html#TreeBuilder",
        "fct-type": "function",
        "title": "mtbWriteContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "mtbWriteContents",
        "normalized": "TreeBuilder a-\u003ea(ModifiedBuilder a,TreeOid a)",
        "package": "gitlib",
        "partial": "Write Contents",
        "signature": "TreeBuilder m-\u003em(ModifiedBuilder m,TreeOid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:newTreeBuilder",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Maybe (Tree m) -\u003e m (TreeBuilder m)",
        "fct-source": "src/Git-Types.html#newTreeBuilder",
        "fct-type": "method",
        "title": "newTreeBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "newTreeBuilder",
        "normalized": "Maybe(Tree a)-\u003ea(TreeBuilder a)",
        "package": "gitlib",
        "partial": "Tree Builder",
        "signature": "Maybe(Tree m)-\u003em(TreeBuilder m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:objectOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Object m -\u003e Oid m",
        "fct-source": "src/Git-Types.html#objectOid",
        "fct-type": "function",
        "title": "objectOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "objectOid",
        "normalized": "Object a-\u003eOid a",
        "package": "gitlib",
        "partial": "Oid",
        "signature": "Object m-\u003eOid m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:objectToObjOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Object m -\u003e ObjectOid m",
        "fct-source": "src/Git-Types.html#objectToObjOid",
        "fct-type": "function",
        "title": "objectToObjOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "objectToObjOid",
        "normalized": "Object a-\u003eObjectOid a",
        "package": "gitlib",
        "partial": "To Obj Oid",
        "signature": "Object m-\u003eObjectOid m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:openRepository",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RepositoryOptions -\u003e m c",
        "fct-source": "src/Git-Types.html#RepositoryFactory",
        "fct-type": "function",
        "title": "openRepository"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "openRepository",
        "normalized": "RepositoryOptions-\u003ea b",
        "package": "gitlib",
        "partial": "Repository",
        "signature": "RepositoryOptions-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:parseObjOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "forall o.  Text -\u003e m (Tagged o (Oid m))",
        "fct-source": "src/Git-Types.html#parseObjOid",
        "fct-type": "function",
        "title": "parseObjOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "parseObjOid",
        "normalized": "a b Text-\u003ec(Tagged d(Oid c))",
        "package": "gitlib",
        "partial": "Obj Oid",
        "signature": "forall o. Text-\u003em(Tagged o(Oid m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:parseOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Text -\u003e m (Oid m)",
        "fct-source": "src/Git-Types.html#parseOid",
        "fct-type": "method",
        "title": "parseOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "parseOid",
        "normalized": "Text-\u003ea(Oid a)",
        "package": "gitlib",
        "partial": "Oid",
        "signature": "Text-\u003em(Oid m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:renderObjOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Tagged a o -\u003e Text",
        "fct-source": "src/Git-Types.html#renderObjOid",
        "fct-type": "method",
        "title": "renderObjOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "renderObjOid",
        "normalized": "Tagged a b-\u003eText",
        "package": "gitlib",
        "partial": "Obj Oid",
        "signature": "Tagged a o-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:renderOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "o -\u003e Text",
        "fct-source": "src/Git-Types.html#renderOid",
        "fct-type": "method",
        "title": "renderOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "renderOid",
        "normalized": "a-\u003eText",
        "package": "gitlib",
        "partial": "Oid",
        "signature": "o-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:repoAutoCreate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!Bool",
        "fct-source": "src/Git-Types.html#RepositoryOptions",
        "fct-type": "function",
        "title": "repoAutoCreate"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "repoAutoCreate",
        "normalized": "",
        "package": "gitlib",
        "partial": "Auto Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:repoIsBare",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!Bool",
        "fct-source": "src/Git-Types.html#RepositoryOptions",
        "fct-type": "function",
        "title": "repoIsBare"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "repoIsBare",
        "normalized": "",
        "package": "gitlib",
        "partial": "Is Bare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:repoPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!FilePath",
        "fct-source": "src/Git-Types.html#RepositoryOptions",
        "fct-type": "function",
        "title": "repoPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "repoPath",
        "normalized": "",
        "package": "gitlib",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:runRepository",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "forall a.  c -\u003e t a -\u003e m a",
        "fct-source": "src/Git-Types.html#RepositoryFactory",
        "fct-type": "function",
        "title": "runRepository"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "runRepository",
        "normalized": "a b c-\u003ed e-\u003ef e",
        "package": "gitlib",
        "partial": "Repository",
        "signature": "forall a. c-\u003et a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:shaToText",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "SHA -\u003e Text",
        "fct-source": "src/Git-Types.html#shaToText",
        "fct-type": "function",
        "title": "shaToText"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "shaToText",
        "normalized": "SHA-\u003eText",
        "package": "gitlib",
        "partial": "To Text",
        "signature": "SHA-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:shutdownBackend",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "m ()",
        "fct-source": "src/Git-Types.html#RepositoryFactory",
        "fct-type": "function",
        "title": "shutdownBackend"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "shutdownBackend",
        "normalized": "a()",
        "package": "gitlib",
        "partial": "Backend",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:signatureEmail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!CommitEmail",
        "fct-source": "src/Git-Types.html#Signature",
        "fct-type": "function",
        "title": "signatureEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "signatureEmail",
        "normalized": "",
        "package": "gitlib",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:signatureName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!CommitAuthor",
        "fct-source": "src/Git-Types.html#Signature",
        "fct-type": "function",
        "title": "signatureName"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "signatureName",
        "normalized": "",
        "package": "gitlib",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:signatureWhen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!ZonedTime",
        "fct-source": "src/Git-Types.html#Signature",
        "fct-type": "function",
        "title": "signatureWhen"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "signatureWhen",
        "normalized": "",
        "package": "gitlib",
        "partial": "When",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:sourceObjects",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "sourceObjects",
        "fct-source": "src/Git-Types.html#sourceObjects",
        "fct-type": "method",
        "title": "sourceObjects"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "sourceObjects",
        "normalized": "",
        "package": "gitlib",
        "partial": "Objects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:startupBackend",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "m ()",
        "fct-source": "src/Git-Types.html#RepositoryFactory",
        "fct-type": "function",
        "title": "startupBackend"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "startupBackend",
        "normalized": "a()",
        "package": "gitlib",
        "partial": "Backend",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:tagCommit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!(CommitOid m)",
        "fct-source": "src/Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "tagCommit",
        "normalized": "",
        "package": "gitlib",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:tagOid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!(TagOid m)",
        "fct-source": "src/Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "tagOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:textToSha",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Text -\u003e m SHA",
        "fct-source": "src/Git-Types.html#textToSha",
        "fct-type": "function",
        "title": "textToSha"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "textToSha",
        "normalized": "Text-\u003ea SHA",
        "package": "gitlib",
        "partial": "To Sha",
        "signature": "Text-\u003em SHA"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:treeEntry",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Tree m -\u003e TreeFilePath -\u003e m (Maybe (TreeEntry m))",
        "fct-source": "src/Git-Types.html#treeEntry",
        "fct-type": "method",
        "title": "treeEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "treeEntry",
        "normalized": "Tree a-\u003eTreeFilePath-\u003ea(Maybe(TreeEntry a))",
        "package": "gitlib",
        "partial": "Entry",
        "signature": "Tree m-\u003eTreeFilePath-\u003em(Maybe(TreeEntry m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:treeEntryOid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "!(TreeOid m)",
        "fct-source": "src/Git-Types.html#TreeEntry",
        "fct-type": "function",
        "title": "treeEntryOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "treeEntryOid",
        "normalized": "",
        "package": "gitlib",
        "partial": "Entry Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:treeEntryToOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "TreeEntry m -\u003e Oid m",
        "fct-source": "src/Git-Types.html#treeEntryToOid",
        "fct-type": "function",
        "title": "treeEntryToOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "treeEntryToOid",
        "normalized": "TreeEntry a-\u003eOid a",
        "package": "gitlib",
        "partial": "Entry To Oid",
        "signature": "TreeEntry m-\u003eOid m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:treeOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "Tree m -\u003e TreeOid m",
        "fct-source": "src/Git-Types.html#treeOid",
        "fct-type": "method",
        "title": "treeOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "treeOid",
        "normalized": "Tree a-\u003eTreeOid a",
        "package": "gitlib",
        "partial": "Oid",
        "signature": "Tree m-\u003eTreeOid m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:untagObjOid",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "ObjectOid m -\u003e Oid m",
        "fct-source": "src/Git-Types.html#untagObjOid",
        "fct-type": "function",
        "title": "untagObjOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "untagObjOid",
        "normalized": "ObjectOid a-\u003eOid a",
        "package": "gitlib",
        "partial": "Obj Oid",
        "signature": "ObjectOid m-\u003eOid m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git-Types.html#v:updateReference",
      "description": {
        "fct-module": "Git.Types",
        "fct-package": "gitlib",
        "fct-signature": "RefName -\u003e RefTarget m -\u003e m ()",
        "fct-source": "src/Git-Types.html#updateReference",
        "fct-type": "method",
        "title": "updateReference"
      },
      "index": {
        "description": "",
        "hierarchy": "Git Types",
        "module": "Git.Types",
        "name": "updateReference",
        "normalized": "RefName-\u003eRefTarget a-\u003ea()",
        "package": "gitlib",
        "partial": "Reference",
        "signature": "RefName-\u003eRefTarget m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gitlib/docs/Git.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for working with Git repositories.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Git",
        "fct-package": "gitlib",
        "fct-signature": "module",
        "fct-source": "src/Git.html",
        "fct-type": "module",
        "title": "Git"
      },
      "index": {
        "description": "Interface for working with Git repositories",
        "hierarchy": "Git",
        "module": "Git",
        "name": "Git",
        "normalized": "",
        "package": "gitlib",
        "partial": "Git",
        "signature": ""
      }
    }
  }
]