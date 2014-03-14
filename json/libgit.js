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
        "word": "libgit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Index",
          "name": "Index",
          "package": "libgit",
          "source": "src/Lib-Git-Index.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lib Git Index",
          "module": "Lib.Git.Index",
          "name": "Index",
          "package": "libgit",
          "partial": "Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Index.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Index",
          "name": "indexCheckout",
          "package": "libgit",
          "signature": "[FilePath] -\u003e Bool -\u003e GitCtx ()",
          "source": "src/Lib-Git-Index.html#indexCheckout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Index",
          "module": "Lib.Git.Index",
          "name": "indexCheckout",
          "normalized": "[FilePath]-\u003eBool-\u003eGitCtx()",
          "package": "libgit",
          "partial": "Checkout",
          "signature": "[FilePath]-\u003eBool-\u003eGitCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Index.html#v:indexCheckout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Index",
          "name": "indexCheckoutAll",
          "package": "libgit",
          "signature": "Bool -\u003e GitCtx ()",
          "source": "src/Lib-Git-Index.html#indexCheckoutAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Index",
          "module": "Lib.Git.Index",
          "name": "indexCheckoutAll",
          "normalized": "Bool-\u003eGitCtx()",
          "package": "libgit",
          "partial": "Checkout All",
          "signature": "Bool-\u003eGitCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Index.html#v:indexCheckoutAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Index",
          "name": "indexList",
          "package": "libgit",
          "signature": "GitCtx FilePath",
          "source": "src/Lib-Git-Index.html#indexList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Index",
          "module": "Lib.Git.Index",
          "name": "indexList",
          "package": "libgit",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Index.html#v:indexList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate index with the list of file \n\u003c/p\u003e",
          "module": "Lib.Git.Index",
          "name": "indexUpdate",
          "package": "libgit",
          "signature": "[FilePath] -\u003e GitCtx ()",
          "source": "src/Lib-Git-Index.html#indexUpdate",
          "type": "function"
        },
        "index": {
          "description": "update index with the list of file",
          "hierarchy": "Lib Git Index",
          "module": "Lib.Git.Index",
          "name": "indexUpdate",
          "normalized": "[FilePath]-\u003eGitCtx()",
          "package": "libgit",
          "partial": "Update",
          "signature": "[FilePath]-\u003eGitCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Index.html#v:indexUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Lowlevel",
          "name": "Lowlevel",
          "package": "libgit",
          "source": "src/Lib-Git-Lowlevel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lib Git Lowlevel",
          "module": "Lib.Git.Lowlevel",
          "name": "Lowlevel",
          "package": "libgit",
          "partial": "Lowlevel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Lowlevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecat a blob objects\n\u003c/p\u003e",
          "module": "Lib.Git.Lowlevel",
          "name": "catBlob",
          "package": "libgit",
          "signature": "BlobID -\u003e GitCtx String",
          "source": "src/Lib-Git-Lowlevel.html#catBlob",
          "type": "function"
        },
        "index": {
          "description": "cat blob objects",
          "hierarchy": "Lib Git Lowlevel",
          "module": "Lib.Git.Lowlevel",
          "name": "catBlob",
          "normalized": "BlobID-\u003eGitCtx String",
          "package": "libgit",
          "partial": "Blob",
          "signature": "BlobID-\u003eGitCtx String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Lowlevel.html#v:catBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Lowlevel",
          "name": "catCommit",
          "package": "libgit",
          "signature": "CommitID -\u003e GitCtx Commitent",
          "source": "src/Lib-Git-Lowlevel.html#catCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Lowlevel",
          "module": "Lib.Git.Lowlevel",
          "name": "catCommit",
          "normalized": "CommitID-\u003eGitCtx Commitent",
          "package": "libgit",
          "partial": "Commit",
          "signature": "CommitID-\u003eGitCtx Commitent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Lowlevel.html#v:catCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecat a tag objects\n\u003c/p\u003e",
          "module": "Lib.Git.Lowlevel",
          "name": "catTag",
          "package": "libgit",
          "signature": "TagID -\u003e GitCtx String",
          "source": "src/Lib-Git-Lowlevel.html#catTag",
          "type": "function"
        },
        "index": {
          "description": "cat tag objects",
          "hierarchy": "Lib Git Lowlevel",
          "module": "Lib.Git.Lowlevel",
          "name": "catTag",
          "normalized": "TagID-\u003eGitCtx String",
          "package": "libgit",
          "partial": "Tag",
          "signature": "TagID-\u003eGitCtx String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Lowlevel.html#v:catTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Lowlevel",
          "name": "catTree",
          "package": "libgit",
          "signature": "TreeID -\u003e GitCtx Treeent",
          "source": "src/Lib-Git-Lowlevel.html#catTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Lowlevel",
          "module": "Lib.Git.Lowlevel",
          "name": "catTree",
          "normalized": "TreeID-\u003eGitCtx Treeent",
          "package": "libgit",
          "partial": "Tree",
          "signature": "TreeID-\u003eGitCtx Treeent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Lowlevel.html#v:catTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn a commit list in reverse chronological order l \n\u003c/p\u003e",
          "module": "Lib.Git.Lowlevel",
          "name": "revlist",
          "package": "libgit",
          "signature": "Maybe Int -\u003e Maybe CommitID -\u003e [FilePath] -\u003e GitCtx [CommitID]",
          "source": "src/Lib-Git-Lowlevel.html#revlist",
          "type": "function"
        },
        "index": {
          "description": "return commit list in reverse chronological order",
          "hierarchy": "Lib Git Lowlevel",
          "module": "Lib.Git.Lowlevel",
          "name": "revlist",
          "normalized": "Maybe Int-\u003eMaybe CommitID-\u003e[FilePath]-\u003eGitCtx[CommitID]",
          "package": "libgit",
          "signature": "Maybe Int-\u003eMaybe CommitID-\u003e[FilePath]-\u003eGitCtx[CommitID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Lowlevel.html#v:revlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a tag\u003cem\u003ebranch-name\u003c/em\u003ecommit into a commit if it exists \n\u003c/p\u003e",
          "module": "Lib.Git.Lowlevel",
          "name": "revparse",
          "package": "libgit",
          "signature": "String -\u003e GitCtx (Maybe CommitID)",
          "source": "src/Lib-Git-Lowlevel.html#revparse",
          "type": "function"
        },
        "index": {
          "description": "parse tag branch-name commit into commit if it exists",
          "hierarchy": "Lib Git Lowlevel",
          "module": "Lib.Git.Lowlevel",
          "name": "revparse",
          "normalized": "String-\u003eGitCtx(Maybe CommitID)",
          "package": "libgit",
          "signature": "String-\u003eGitCtx(Maybe CommitID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Lowlevel.html#v:revparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Tree",
          "name": "Tree",
          "package": "libgit",
          "source": "src/Lib-Git-Tree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lib Git Tree",
          "module": "Lib.Git.Tree",
          "name": "Tree",
          "package": "libgit",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Tree",
          "name": "Perms",
          "package": "libgit",
          "source": "src/Lib-Git-Tree.html#Perms",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lib Git Tree",
          "module": "Lib.Git.Tree",
          "name": "Perms",
          "package": "libgit",
          "partial": "Perms",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Tree.html#t:Perms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Tree",
          "name": "Treeent",
          "package": "libgit",
          "source": "src/Lib-Git-Tree.html#Treeent",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lib Git Tree",
          "module": "Lib.Git.Tree",
          "name": "Treeent",
          "package": "libgit",
          "partial": "Treeent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Tree.html#t:Treeent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Tree",
          "name": "permsOfString",
          "package": "libgit",
          "signature": "String -\u003e Perms",
          "source": "src/Lib-Git-Tree.html#permsOfString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Tree",
          "module": "Lib.Git.Tree",
          "name": "permsOfString",
          "normalized": "String-\u003ePerms",
          "package": "libgit",
          "partial": "Of String",
          "signature": "String-\u003ePerms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Tree.html#v:permsOfString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn a tree entity from a commitid\n if commitid is ommitted, it uses HEAD.\n\u003c/p\u003e",
          "module": "Lib.Git.Tree",
          "name": "treeList",
          "package": "libgit",
          "signature": "Maybe CommitID -\u003e GitCtx Treeent",
          "source": "src/Lib-Git-Tree.html#treeList",
          "type": "function"
        },
        "index": {
          "description": "return tree entity from commitid if commitid is ommitted it uses HEAD",
          "hierarchy": "Lib Git Tree",
          "module": "Lib.Git.Tree",
          "name": "treeList",
          "normalized": "Maybe CommitID-\u003eGitCtx Treeent",
          "package": "libgit",
          "partial": "List",
          "signature": "Maybe CommitID-\u003eGitCtx Treeent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Tree.html#v:treeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "Type",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Type",
          "package": "libgit",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea blob ID\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "BlobID",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#BlobID",
          "type": "type"
        },
        "index": {
          "description": "blob ID",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "BlobID",
          "package": "libgit",
          "partial": "Blob ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:BlobID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea commit ID\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "CommitID",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#CommitID",
          "type": "type"
        },
        "index": {
          "description": "commit ID",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "CommitID",
          "package": "libgit",
          "partial": "Commit ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:CommitID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit entity representation\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "Commitent",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#Commitent",
          "type": "data"
        },
        "index": {
          "description": "Commit entity representation",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Commitent",
          "package": "libgit",
          "partial": "Commitent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:Commitent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a repository \n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "Config",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Represent repository",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Config",
          "package": "libgit",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "GitCtx",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#GitCtx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "GitCtx",
          "package": "libgit",
          "partial": "Git Ctx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:GitCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "GitFailure",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#GitFailure",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "GitFailure",
          "package": "libgit",
          "partial": "Git Failure",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:GitFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany ID (git SHA1 string)\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "ID",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#ID",
          "type": "type"
        },
        "index": {
          "description": "any ID git SHA1 string",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "ID",
          "package": "libgit",
          "partial": "ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTagged ID of all possible types\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "Object",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#Object",
          "type": "data"
        },
        "index": {
          "description": "Tagged ID of all possible types",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Object",
          "package": "libgit",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit object author/commiter representation\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "Person",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#Person",
          "type": "data"
        },
        "index": {
          "description": "Commit object author commiter representation",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Person",
          "package": "libgit",
          "partial": "Person",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea tag ID\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "TagID",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#TagID",
          "type": "type"
        },
        "index": {
          "description": "tag ID",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "TagID",
          "package": "libgit",
          "partial": "Tag ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:TagID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea tree ID\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "TreeID",
          "package": "libgit",
          "source": "src/Lib-Git-Type.html#TreeID",
          "type": "type"
        },
        "index": {
          "description": "tree ID",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "TreeID",
          "package": "libgit",
          "partial": "Tree ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#t:TreeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "Blob",
          "package": "libgit",
          "signature": "Blob BlobID",
          "source": "src/Lib-Git-Type.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Blob",
          "package": "libgit",
          "partial": "Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "Commit",
          "package": "libgit",
          "signature": "Commit CommitID",
          "source": "src/Lib-Git-Type.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Commit",
          "package": "libgit",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "Commitent",
          "package": "libgit",
          "signature": "Commitent",
          "source": "src/Lib-Git-Type.html#Commitent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Commitent",
          "package": "libgit",
          "partial": "Commitent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:Commitent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "Config",
          "package": "libgit",
          "signature": "Config",
          "source": "src/Lib-Git-Type.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Config",
          "package": "libgit",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "Person",
          "package": "libgit",
          "signature": "Person",
          "source": "src/Lib-Git-Type.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Person",
          "package": "libgit",
          "partial": "Person",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "Tag",
          "package": "libgit",
          "signature": "Tag TagID",
          "source": "src/Lib-Git-Type.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Tag",
          "package": "libgit",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "Tree",
          "package": "libgit",
          "signature": "Tree TreeID",
          "source": "src/Lib-Git-Type.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "Tree",
          "package": "libgit",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "ceAuthor",
          "package": "libgit",
          "signature": "Person",
          "source": "src/Lib-Git-Type.html#Commitent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "ceAuthor",
          "package": "libgit",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:ceAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "ceAuthorTime",
          "package": "libgit",
          "signature": "String",
          "source": "src/Lib-Git-Type.html#Commitent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "ceAuthorTime",
          "package": "libgit",
          "partial": "Author Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:ceAuthorTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "ceCommitMsg",
          "package": "libgit",
          "signature": "String",
          "source": "src/Lib-Git-Type.html#Commitent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "ceCommitMsg",
          "package": "libgit",
          "partial": "Commit Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:ceCommitMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "ceCommitter",
          "package": "libgit",
          "signature": "Person",
          "source": "src/Lib-Git-Type.html#Commitent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "ceCommitter",
          "package": "libgit",
          "partial": "Committer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:ceCommitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "ceCommitterTime",
          "package": "libgit",
          "signature": "String",
          "source": "src/Lib-Git-Type.html#Commitent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "ceCommitterTime",
          "package": "libgit",
          "partial": "Committer Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:ceCommitterTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "ceParents",
          "package": "libgit",
          "signature": "[CommitID]",
          "source": "src/Lib-Git-Type.html#Commitent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "ceParents",
          "normalized": "[CommitID]",
          "package": "libgit",
          "partial": "Parents",
          "signature": "[CommitID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:ceParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "ceTree",
          "package": "libgit",
          "signature": "TreeID",
          "source": "src/Lib-Git-Type.html#Commitent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "ceTree",
          "package": "libgit",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:ceTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the repository .git\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "configCwd",
          "package": "libgit",
          "signature": "FilePath",
          "source": "src/Lib-Git-Type.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Path to the repository git",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "configCwd",
          "package": "libgit",
          "partial": "Cwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:configCwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional path to the git executable (otherwise resolved from $PATH)\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "configGitPath",
          "package": "libgit",
          "signature": "Maybe FilePath",
          "source": "src/Lib-Git-Type.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Optional path to the git executable otherwise resolved from PATH",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "configGitPath",
          "package": "libgit",
          "partial": "Git Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:configGitPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einternal function to call on failure to make a friendly error message\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "gitError",
          "package": "libgit",
          "signature": "GitFailure -\u003e String -\u003e b",
          "source": "src/Lib-Git-Type.html#gitError",
          "type": "function"
        },
        "index": {
          "description": "internal function to call on failure to make friendly error message",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "gitError",
          "normalized": "GitFailure-\u003eString-\u003ea",
          "package": "libgit",
          "partial": "Error",
          "signature": "GitFailure-\u003eString-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:gitError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einternal function to execute a git command\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "gitExec",
          "package": "libgit",
          "signature": "String -\u003e [String] -\u003e [(String, String)] -\u003e GitCtx (Either GitFailure String)",
          "source": "src/Lib-Git-Type.html#gitExec",
          "type": "function"
        },
        "index": {
          "description": "internal function to execute git command",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "gitExec",
          "normalized": "String-\u003e[String]-\u003e[(String,String)]-\u003eGitCtx(Either GitFailure String)",
          "package": "libgit",
          "partial": "Exec",
          "signature": "String-\u003e[String]-\u003e[(String,String)]-\u003eGitCtx(Either GitFailure String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:gitExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "makeConfig",
          "package": "libgit",
          "signature": "FilePath -\u003e Maybe FilePath -\u003e Config",
          "source": "src/Lib-Git-Type.html#makeConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "makeConfig",
          "normalized": "FilePath-\u003eMaybe FilePath-\u003eConfig",
          "package": "libgit",
          "partial": "Config",
          "signature": "FilePath-\u003eMaybe FilePath-\u003eConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:makeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "objOfString",
          "package": "libgit",
          "signature": "String -\u003e ID -\u003e Maybe Object",
          "source": "src/Lib-Git-Type.html#objOfString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "objOfString",
          "normalized": "String-\u003eID-\u003eMaybe Object",
          "package": "libgit",
          "partial": "Of String",
          "signature": "String-\u003eID-\u003eMaybe Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:objOfString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "objToID",
          "package": "libgit",
          "signature": "Object -\u003e ID",
          "source": "src/Lib-Git-Type.html#objToID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "objToID",
          "normalized": "Object-\u003eID",
          "package": "libgit",
          "partial": "To ID",
          "signature": "Object-\u003eID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:objToID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "personEmail",
          "package": "libgit",
          "signature": "String",
          "source": "src/Lib-Git-Type.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "personEmail",
          "package": "libgit",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:personEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "personName",
          "package": "libgit",
          "signature": "String",
          "source": "src/Lib-Git-Type.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "personName",
          "package": "libgit",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:personName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a git context from a config and returns the result\n\u003c/p\u003e",
          "module": "Lib.Git.Type",
          "name": "runGit",
          "package": "libgit",
          "signature": "Config -\u003e GitCtx t -\u003e IO t",
          "source": "src/Lib-Git-Type.html#runGit",
          "type": "function"
        },
        "index": {
          "description": "Run git context from config and returns the result",
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "runGit",
          "normalized": "Config-\u003eGitCtx a-\u003eIO a",
          "package": "libgit",
          "partial": "Git",
          "signature": "Config-\u003eGitCtx t-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:runGit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git.Type",
          "name": "toID",
          "package": "libgit",
          "signature": "String -\u003e ID",
          "source": "src/Lib-Git-Type.html#toID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git Type",
          "module": "Lib.Git.Type",
          "name": "toID",
          "normalized": "String-\u003eID",
          "package": "libgit",
          "partial": "ID",
          "signature": "String-\u003eID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git-Type.html#v:toID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePortabily   : haven't tested\n\u003c/p\u003e\u003cp\u003eThis module provide Git functionality exec'ing the git binary.\n\u003c/p\u003e\u003cp\u003egive simple access to commit, tree, tag, blob objects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lib.Git",
          "name": "Git",
          "package": "libgit",
          "source": "src/Lib-Git.html",
          "type": "module"
        },
        "index": {
          "description": "Portabily haven tested This module provide Git functionality exec ing the git binary give simple access to commit tree tag blob objects",
          "hierarchy": "Lib Git",
          "module": "Lib.Git",
          "name": "Git",
          "package": "libgit",
          "partial": "Git",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git",
          "name": "add",
          "package": "libgit",
          "signature": "[FilePath] -\u003e GitCtx ()",
          "source": "src/Lib-Git.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git",
          "module": "Lib.Git",
          "name": "add",
          "normalized": "[FilePath]-\u003eGitCtx()",
          "package": "libgit",
          "signature": "[FilePath]-\u003eGitCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git",
          "name": "checkout",
          "package": "libgit",
          "signature": "Maybe CommitID -\u003e Maybe String -\u003e GitCtx ()",
          "source": "src/Lib-Git.html#checkout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git",
          "module": "Lib.Git",
          "name": "checkout",
          "normalized": "Maybe CommitID-\u003eMaybe String-\u003eGitCtx()",
          "package": "libgit",
          "signature": "Maybe CommitID-\u003eMaybe String-\u003eGitCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git.html#v:checkout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git",
          "name": "commit",
          "package": "libgit",
          "signature": "[FilePath] -\u003e String -\u003e String -\u003e String -\u003e [String] -\u003e GitCtx ()",
          "source": "src/Lib-Git.html#commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git",
          "module": "Lib.Git",
          "name": "commit",
          "normalized": "[FilePath]-\u003eString-\u003eString-\u003eString-\u003e[String]-\u003eGitCtx()",
          "package": "libgit",
          "signature": "[FilePath]-\u003eString-\u003eString-\u003eString-\u003e[String]-\u003eGitCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git",
          "name": "hasDiff",
          "package": "libgit",
          "signature": "GitCtx Bool",
          "source": "src/Lib-Git.html#hasDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git",
          "module": "Lib.Git",
          "name": "hasDiff",
          "package": "libgit",
          "partial": "Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git.html#v:hasDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git",
          "name": "initDB",
          "package": "libgit",
          "signature": "Bool -\u003e GitCtx ()",
          "source": "src/Lib-Git.html#initDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git",
          "module": "Lib.Git",
          "name": "initDB",
          "normalized": "Bool-\u003eGitCtx()",
          "package": "libgit",
          "partial": "DB",
          "signature": "Bool-\u003eGitCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git.html#v:initDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git",
          "name": "resolveFilePath",
          "package": "libgit",
          "signature": "Commitent -\u003e FilePath -\u003e GitCtx [(FilePath, Object)]",
          "source": "src/Lib-Git.html#resolveFilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git",
          "module": "Lib.Git",
          "name": "resolveFilePath",
          "normalized": "Commitent-\u003eFilePath-\u003eGitCtx[(FilePath,Object)]",
          "package": "libgit",
          "partial": "File Path",
          "signature": "Commitent-\u003eFilePath-\u003eGitCtx[(FilePath,Object)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git.html#v:resolveFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git",
          "name": "rm",
          "package": "libgit",
          "signature": "[FilePath] -\u003e GitCtx ()",
          "source": "src/Lib-Git.html#rm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git",
          "module": "Lib.Git",
          "name": "rm",
          "normalized": "[FilePath]-\u003eGitCtx()",
          "package": "libgit",
          "signature": "[FilePath]-\u003eGitCtx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git.html#v:rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lib.Git",
          "name": "taglist",
          "package": "libgit",
          "signature": "GitCtx [TagID]",
          "source": "src/Lib-Git.html#taglist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lib Git",
          "module": "Lib.Git",
          "name": "taglist",
          "normalized": "GitCtx[TagID]",
          "package": "libgit",
          "signature": "GitCtx[TagID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libgit/docs/Lib-Git.html#v:taglist"
      }
    }
  ]
]