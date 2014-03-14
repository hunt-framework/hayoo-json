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
        "word": "gitlib-utils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "Utils",
          "package": "gitlib-utils",
          "source": "src/Git-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "Utils",
          "package": "gitlib-utils",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "OidBytestring",
          "package": "gitlib-utils",
          "source": "src/Git-Utils.html#OidBytestring",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "OidBytestring",
          "package": "gitlib-utils",
          "partial": "Oid Bytestring",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#t:OidBytestring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "OidText",
          "package": "gitlib-utils",
          "source": "src/Git-Utils.html#OidText",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "OidText",
          "package": "gitlib-utils",
          "partial": "Oid Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#t:OidText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "OidTextL",
          "package": "gitlib-utils",
          "source": "src/Git-Utils.html#OidTextL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "OidTextL",
          "package": "gitlib-utils",
          "partial": "Oid Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#t:OidTextL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "PinnedEntry",
          "package": "gitlib-utils",
          "source": "src/Git-Utils.html#PinnedEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "PinnedEntry",
          "package": "gitlib-utils",
          "partial": "Pinned Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#t:PinnedEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "OidBytestring",
          "package": "gitlib-utils",
          "signature": "OidBytestring",
          "source": "src/Git-Utils.html#OidBytestring",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "OidBytestring",
          "package": "gitlib-utils",
          "partial": "Oid Bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:OidBytestring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "OidText",
          "package": "gitlib-utils",
          "signature": "OidText",
          "source": "src/Git-Utils.html#OidText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "OidText",
          "package": "gitlib-utils",
          "partial": "Oid Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:OidText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "OidTextL",
          "package": "gitlib-utils",
          "signature": "OidTextL",
          "source": "src/Git-Utils.html#OidTextL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "OidTextL",
          "package": "gitlib-utils",
          "partial": "Oid Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:OidTextL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "PinnedEntry",
          "package": "gitlib-utils",
          "signature": "PinnedEntry",
          "source": "src/Git-Utils.html#PinnedEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "PinnedEntry",
          "package": "gitlib-utils",
          "partial": "Pinned Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:PinnedEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of objects (commit and top-level trees) return by\n   \u003ccode\u003e\u003ca\u003emissingObjects\u003c/a\u003e\u003c/code\u003e, expand it to include all subtrees and blobs as well.\n   Ordering is preserved.\n\u003c/p\u003e",
          "module": "Git.Utils",
          "name": "allMissingObjects",
          "package": "gitlib-utils",
          "signature": "[Object m] -\u003e m [Object m]",
          "source": "src/Git-Utils.html#allMissingObjects",
          "type": "function"
        },
        "index": {
          "description": "Given list of objects commit and top-level trees return by missingObjects expand it to include all subtrees and blobs as well Ordering is preserved",
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "allMissingObjects",
          "normalized": "[Object a]-\u003ea[Object a]",
          "package": "gitlib-utils",
          "partial": "Missing Objects",
          "signature": "[Object m]-\u003em[Object m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:allMissingObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "blobContentsToByteString",
          "package": "gitlib-utils",
          "signature": "BlobContents m -\u003e m ByteString",
          "source": "src/Git-Utils.html#blobContentsToByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "blobContentsToByteString",
          "normalized": "BlobContents a-\u003ea ByteString",
          "package": "gitlib-utils",
          "partial": "Contents To Byte String",
          "signature": "BlobContents m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:blobContentsToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "blobToByteString",
          "package": "gitlib-utils",
          "signature": "Blob m -\u003e m ByteString",
          "source": "src/Git-Utils.html#blobToByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "blobToByteString",
          "normalized": "Blob a-\u003ea ByteString",
          "package": "gitlib-utils",
          "partial": "To Byte String",
          "signature": "Blob m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:blobToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "catBlob",
          "package": "gitlib-utils",
          "signature": "Text -\u003e m ByteString",
          "source": "src/Git-Utils.html#catBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "catBlob",
          "normalized": "Text-\u003ea ByteString",
          "package": "gitlib-utils",
          "partial": "Blob",
          "signature": "Text-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:catBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "catBlobUtf8",
          "package": "gitlib-utils",
          "signature": "Text -\u003e m Text",
          "source": "src/Git-Utils.html#catBlobUtf8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "catBlobUtf8",
          "normalized": "Text-\u003ea Text",
          "package": "gitlib-utils",
          "partial": "Blob Utf",
          "signature": "Text-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:catBlobUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "commitEntryHistory",
          "package": "gitlib-utils",
          "signature": "Commit m -\u003e FilePath -\u003e m [PinnedEntry m]",
          "source": "src/Git-Utils.html#commitEntryHistory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "commitEntryHistory",
          "normalized": "Commit a-\u003eFilePath-\u003ea[PinnedEntry a]",
          "package": "gitlib-utils",
          "partial": "Entry History",
          "signature": "Commit m-\u003eFilePath-\u003em[PinnedEntry m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:commitEntryHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "commitHistoryFirstParent",
          "package": "gitlib-utils",
          "signature": "Commit m -\u003e m [Commit m]",
          "source": "src/Git-Utils.html#commitHistoryFirstParent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "commitHistoryFirstParent",
          "normalized": "Commit a-\u003ea[Commit a]",
          "package": "gitlib-utils",
          "partial": "History First Parent",
          "signature": "Commit m-\u003em[Commit m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:commitHistoryFirstParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "commitTreeEntry",
          "package": "gitlib-utils",
          "signature": "Commit m -\u003e FilePath -\u003e m (Maybe (TreeEntry m))",
          "source": "src/Git-Utils.html#commitTreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "commitTreeEntry",
          "normalized": "Commit a-\u003eFilePath-\u003ea(Maybe(TreeEntry a))",
          "package": "gitlib-utils",
          "partial": "Tree Entry",
          "signature": "Commit m-\u003eFilePath-\u003em(Maybe(TreeEntry m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:commitTreeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "copyBlob",
          "package": "gitlib-utils",
          "signature": "BlobRef m -\u003e HashSet Text -\u003e t m (BlobOid (t m), HashSet Text)",
          "source": "src/Git-Utils.html#copyBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "copyBlob",
          "normalized": "BlobRef a-\u003eHashSet Text-\u003eb a(BlobOid(b a),HashSet Text)",
          "package": "gitlib-utils",
          "partial": "Blob",
          "signature": "BlobRef m-\u003eHashSet Text-\u003et m(BlobOid(t m),HashSet Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:copyBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "copyCommit",
          "package": "gitlib-utils",
          "signature": "CommitRef m -\u003e Maybe Text -\u003e HashSet Text -\u003e t m (CommitRef (t m), HashSet Text)",
          "source": "src/Git-Utils.html#copyCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "copyCommit",
          "normalized": "CommitRef a-\u003eMaybe Text-\u003eHashSet Text-\u003eb a(CommitRef(b a),HashSet Text)",
          "package": "gitlib-utils",
          "partial": "Commit",
          "signature": "CommitRef m-\u003eMaybe Text-\u003eHashSet Text-\u003et m(CommitRef(t m),HashSet Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:copyCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "copyOid",
          "package": "gitlib-utils",
          "signature": "Oid m -\u003e t m (Oid (t m))",
          "source": "src/Git-Utils.html#copyOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "copyOid",
          "normalized": "Oid a-\u003eb a(Oid(b a))",
          "package": "gitlib-utils",
          "partial": "Oid",
          "signature": "Oid m-\u003et m(Oid(t m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:copyOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "copyTree",
          "package": "gitlib-utils",
          "signature": "TreeRef m -\u003e HashSet Text -\u003e t m (TreeRef (t m), HashSet Text)",
          "source": "src/Git-Utils.html#copyTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "copyTree",
          "normalized": "TreeRef a-\u003eHashSet Text-\u003eb a(TreeRef(b a),HashSet Text)",
          "package": "gitlib-utils",
          "partial": "Tree",
          "signature": "TreeRef m-\u003eHashSet Text-\u003et m(TreeRef(t m),HashSet Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:copyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "copyTreeEntry",
          "package": "gitlib-utils",
          "signature": "TreeEntry m -\u003e HashSet Text -\u003e t m (TreeEntry (t m), HashSet Text)",
          "source": "src/Git-Utils.html#copyTreeEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "copyTreeEntry",
          "normalized": "TreeEntry a-\u003eHashSet Text-\u003eb a(TreeEntry(b a),HashSet Text)",
          "package": "gitlib-utils",
          "partial": "Tree Entry",
          "signature": "TreeEntry m-\u003eHashSet Text-\u003et m(TreeEntry(t m),HashSet Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:copyTreeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "createBlobUtf8",
          "package": "gitlib-utils",
          "signature": "Text -\u003e m (BlobOid m)",
          "source": "src/Git-Utils.html#createBlobUtf8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "createBlobUtf8",
          "normalized": "Text-\u003ea(BlobOid a)",
          "package": "gitlib-utils",
          "partial": "Blob Utf",
          "signature": "Text-\u003em(BlobOid m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:createBlobUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFast-forward push a reference between repositories using a recursive\n   copy.  This can be extremely slow, but always works.\n\u003c/p\u003e",
          "module": "Git.Utils",
          "name": "genericPushCommit",
          "package": "gitlib-utils",
          "signature": "CommitName m -\u003e Text -\u003e t m (CommitRef (t m))",
          "source": "src/Git-Utils.html#genericPushCommit",
          "type": "function"
        },
        "index": {
          "description": "Fast-forward push reference between repositories using recursive copy This can be extremely slow but always works",
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "genericPushCommit",
          "normalized": "CommitName a-\u003eText-\u003eb a(CommitRef(b a))",
          "package": "gitlib-utils",
          "partial": "Push Commit",
          "signature": "CommitName m-\u003eText-\u003et m(CommitRef(t m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:genericPushCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "getCommitParents",
          "package": "gitlib-utils",
          "signature": "Commit m -\u003e m [Commit m]",
          "source": "src/Git-Utils.html#getCommitParents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "getCommitParents",
          "normalized": "Commit a-\u003ea[Commit a]",
          "package": "gitlib-utils",
          "partial": "Commit Parents",
          "signature": "Commit m-\u003em[Commit m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:getCommitParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "getOidBS",
          "package": "gitlib-utils",
          "signature": "ByteString",
          "source": "src/Git-Utils.html#OidBytestring",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "getOidBS",
          "package": "gitlib-utils",
          "partial": "Oid BS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:getOidBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "getOidT",
          "package": "gitlib-utils",
          "signature": "Text",
          "source": "src/Git-Utils.html#OidText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "getOidT",
          "package": "gitlib-utils",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:getOidT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "getOidTL",
          "package": "gitlib-utils",
          "signature": "Text",
          "source": "src/Git-Utils.html#OidTextL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "getOidTL",
          "package": "gitlib-utils",
          "partial": "Oid TL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:getOidTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "identifyEntry",
          "package": "gitlib-utils",
          "signature": "Commit m -\u003e TreeEntry m -\u003e m (PinnedEntry m)",
          "source": "src/Git-Utils.html#identifyEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "identifyEntry",
          "normalized": "Commit a-\u003eTreeEntry a-\u003ea(PinnedEntry a)",
          "package": "gitlib-utils",
          "partial": "Entry",
          "signature": "Commit m-\u003eTreeEntry m-\u003em(PinnedEntry m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:identifyEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "parseOidBytestring",
          "package": "gitlib-utils",
          "signature": "Text -\u003e m OidBytestring",
          "source": "src/Git-Utils.html#parseOidBytestring",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "parseOidBytestring",
          "normalized": "Text-\u003ea OidBytestring",
          "package": "gitlib-utils",
          "partial": "Oid Bytestring",
          "signature": "Text-\u003em OidBytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:parseOidBytestring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "parseOidText",
          "package": "gitlib-utils",
          "signature": "Text -\u003e m OidText",
          "source": "src/Git-Utils.html#parseOidText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "parseOidText",
          "normalized": "Text-\u003ea OidText",
          "package": "gitlib-utils",
          "partial": "Oid Text",
          "signature": "Text-\u003em OidText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:parseOidText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "parseOidTextL",
          "package": "gitlib-utils",
          "signature": "Text -\u003e m OidTextL",
          "source": "src/Git-Utils.html#parseOidTextL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "parseOidTextL",
          "normalized": "Text-\u003ea OidTextL",
          "package": "gitlib-utils",
          "partial": "Oid Text",
          "signature": "Text-\u003em OidTextL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:parseOidTextL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "pinnedCommit",
          "package": "gitlib-utils",
          "signature": "Commit m",
          "source": "src/Git-Utils.html#PinnedEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "pinnedCommit",
          "package": "gitlib-utils",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:pinnedCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "pinnedEntry",
          "package": "gitlib-utils",
          "signature": "TreeEntry m",
          "source": "src/Git-Utils.html#PinnedEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "pinnedEntry",
          "package": "gitlib-utils",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:pinnedEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "pinnedOid",
          "package": "gitlib-utils",
          "signature": "Oid m",
          "source": "src/Git-Utils.html#PinnedEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "pinnedOid",
          "package": "gitlib-utils",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:pinnedOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "resolveRefTree",
          "package": "gitlib-utils",
          "signature": "Text -\u003e m (Tree m (TreeKind m))",
          "source": "src/Git-Utils.html#resolveRefTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "resolveRefTree",
          "normalized": "Text-\u003ea(Tree a(TreeKind a))",
          "package": "gitlib-utils",
          "partial": "Ref Tree",
          "signature": "Text-\u003em(Tree m(TreeKind m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:resolveRefTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "splitPath",
          "package": "gitlib-utils",
          "signature": "FilePath -\u003e [Text]",
          "source": "src/Git-Utils.html#splitPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "splitPath",
          "normalized": "FilePath-\u003e[Text]",
          "package": "gitlib-utils",
          "partial": "Path",
          "signature": "FilePath-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:splitPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "treeBlobEntries",
          "package": "gitlib-utils",
          "signature": "Tree m (TreeKind m) -\u003e m [(FilePath, TreeEntry m)]",
          "source": "src/Git-Utils.html#treeBlobEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "treeBlobEntries",
          "normalized": "Tree a(TreeKind a)-\u003ea[(FilePath,TreeEntry a)]",
          "package": "gitlib-utils",
          "partial": "Blob Entries",
          "signature": "Tree m(TreeKind m)-\u003em[(FilePath,TreeEntry m)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:treeBlobEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "treeOid",
          "package": "gitlib-utils",
          "signature": "Tree m (TreeKind m) -\u003e m Text",
          "source": "src/Git-Utils.html#treeOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "treeOid",
          "normalized": "Tree a(TreeKind a)-\u003ea Text",
          "package": "gitlib-utils",
          "partial": "Oid",
          "signature": "Tree m(TreeKind m)-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:treeOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "withNewRepository",
          "package": "gitlib-utils",
          "signature": "RepositoryFactory t m c -\u003e FilePath -\u003e t m a -\u003e m a",
          "source": "src/Git-Utils.html#withNewRepository",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "withNewRepository",
          "normalized": "RepositoryFactory a b c-\u003eFilePath-\u003ea b d-\u003eb d",
          "package": "gitlib-utils",
          "partial": "New Repository",
          "signature": "RepositoryFactory t m c-\u003eFilePath-\u003et m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:withNewRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Git.Utils",
          "name": "withNewRepository'",
          "package": "gitlib-utils",
          "signature": "RepositoryFactory t m c -\u003e FilePath -\u003e t m a -\u003e m a",
          "source": "src/Git-Utils.html#withNewRepository%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Git Utils",
          "module": "Git.Utils",
          "name": "withNewRepository'",
          "normalized": "RepositoryFactory a b c-\u003eFilePath-\u003ea b d-\u003eb d",
          "package": "gitlib-utils",
          "partial": "New Repository'",
          "signature": "RepositoryFactory t m c-\u003eFilePath-\u003et m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-utils/docs/Git-Utils.html#v:withNewRepository-39-"
      }
    }
  ]
]