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
        "word": "filestore"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA versioned filestore implemented using darcs.\n   Normally this module should not be imported: import\n   \u003ca\u003eData.FileStore\u003c/a\u003e instead. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FileStore.Darcs",
          "name": "Darcs",
          "package": "filestore",
          "source": "src/Data-FileStore-Darcs.html",
          "type": "module"
        },
        "index": {
          "description": "versioned filestore implemented using darcs Normally this module should not be imported import Data.FileStore instead",
          "hierarchy": "Data FileStore Darcs",
          "module": "Data.FileStore.Darcs",
          "name": "Darcs",
          "package": "filestore",
          "partial": "Darcs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Darcs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a filestore implemented using the Darcs distributed revision control system\n (\u003ca\u003ehttp://darcs.net/\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Data.FileStore.Darcs",
          "name": "darcsFileStore",
          "package": "filestore",
          "signature": "FilePath -\u003e FileStore",
          "source": "src/Data-FileStore-Darcs.html#darcsFileStore",
          "type": "function"
        },
        "index": {
          "description": "Return filestore implemented using the Darcs distributed revision control system http darcs.net",
          "hierarchy": "Data FileStore Darcs",
          "module": "Data.FileStore.Darcs",
          "name": "darcsFileStore",
          "normalized": "FilePath-\u003eFileStore",
          "package": "filestore",
          "partial": "File Store",
          "signature": "FilePath-\u003eFileStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Darcs.html#v:darcsFileStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric utility functions for working with filestores.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FileStore.Generic",
          "name": "Generic",
          "package": "filestore",
          "source": "src/Data-FileStore-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Generic utility functions for working with filestores",
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "Generic",
          "package": "filestore",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value is either from the \u003ccode\u003e\u003ca\u003eFirst\u003c/a\u003e\u003c/code\u003e list, the \u003ccode\u003e\u003ca\u003eSecond\u003c/a\u003e\u003c/code\u003e or from \u003ccode\u003e\u003ca\u003eBoth\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eBoth\u003c/a\u003e\u003c/code\u003e contains both the left and right values, in case you are using a form\n of equality that doesn't check all data (for example, if you are using a\n newtype to only perform equality on side of a tuple).\n\u003c/p\u003e",
          "module": "Data.FileStore.Generic",
          "name": "Diff",
          "package": "filestore",
          "type": "data"
        },
        "index": {
          "description": "value is either from the First list the Second or from Both Both contains both the left and right values in case you are using form of equality that doesn check all data for example if you are using newtype to only perform equality on side of tuple",
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "Diff",
          "package": "filestore",
          "partial": "Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#t:Diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Generic",
          "name": "Both",
          "package": "filestore",
          "signature": "Both a a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "Both",
          "package": "filestore",
          "partial": "Both",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#v:Both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Generic",
          "name": "First",
          "package": "filestore",
          "signature": "First a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "First",
          "package": "filestore",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#v:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Generic",
          "name": "Second",
          "package": "filestore",
          "signature": "Second a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "Second",
          "package": "filestore",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#v:Second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike save, but first verify that the resource name is new.  If not, throws a \u003ccode\u003e\u003ca\u003eResourceExists\u003c/a\u003e\u003c/code\u003e\n error.\n\u003c/p\u003e",
          "module": "Data.FileStore.Generic",
          "name": "create",
          "package": "filestore",
          "signature": "FileStore-\u003e FilePath-\u003e Author-\u003e Description-\u003e a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like save but first verify that the resource name is new If not throws ResourceExists error",
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "create",
          "normalized": "FileStore-\u003eFilePath-\u003eAuthor-\u003eDescription-\u003ea-\u003eIO()",
          "package": "filestore",
          "signature": "FileStore-\u003eFilePath-\u003eAuthor-\u003eDescription-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a unified diff of two revisions of a named resource.\n Format of the diff is a list \u003ccode\u003e[(Diff, [String])]\u003c/code\u003e, where\n \u003ccode\u003eDI\u003c/code\u003e is \u003ccode\u003eF\u003c/code\u003e (in first document only), \u003ccode\u003eS\u003c/code\u003e (in second only),\n or \u003ccode\u003eB\u003c/code\u003e (in both), and the list is a list of lines (without\n newlines at the end).\n\u003c/p\u003e",
          "module": "Data.FileStore.Generic",
          "name": "diff",
          "package": "filestore",
          "signature": "FileStore-\u003e FilePath-\u003e Maybe RevisionId-\u003e Maybe RevisionId-\u003e IO [Diff [String]]",
          "type": "function"
        },
        "index": {
          "description": "Return unified diff of two revisions of named resource Format of the diff is list Diff String where DI is in first document only in second only or in both and the list is list of lines without newlines at the end",
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "diff",
          "normalized": "FileStore-\u003eFilePath-\u003eMaybe RevisionId-\u003eMaybe RevisionId-\u003eIO[Diff[String]]",
          "package": "filestore",
          "signature": "FileStore-\u003eFilePath-\u003eMaybe RevisionId-\u003eMaybe RevisionId-\u003eIO[Diff[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a named resource in the filestore.  Like save, except that a revision ID\n must be specified.  If the resource has been modified since the specified revision,\n \u003ccode\u003eLeft\u003c/code\u003e merge information is returned.  Otherwise, \u003ccode\u003eRight\u003c/code\u003e the new contents are saved.  \n\u003c/p\u003e",
          "module": "Data.FileStore.Generic",
          "name": "modify",
          "package": "filestore",
          "signature": "FileStore-\u003e FilePath-\u003e RevisionId-\u003e Author-\u003e Description-\u003e a-\u003e IO (Either MergeInfo ())",
          "type": "function"
        },
        "index": {
          "description": "Modify named resource in the filestore Like save except that revision ID must be specified If the resource has been modified since the specified revision Left merge information is returned Otherwise Right the new contents are saved",
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "modify",
          "normalized": "FileStore-\u003eFilePath-\u003eRevisionId-\u003eAuthor-\u003eDescription-\u003ea-\u003eIO(Either MergeInfo())",
          "package": "filestore",
          "signature": "FileStore-\u003eFilePath-\u003eRevisionId-\u003eAuthor-\u003eDescription-\u003ea-\u003eIO(Either MergeInfo())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edirectory\u003c/a\u003e\u003c/code\u003e, but returns information about the latest revision.\n\u003c/p\u003e",
          "module": "Data.FileStore.Generic",
          "name": "richDirectory",
          "package": "filestore",
          "signature": "FileStore -\u003e FilePath -\u003e IO [(Resource, Either String Revision)]",
          "source": "src/Data-FileStore-Generic.html#richDirectory",
          "type": "function"
        },
        "index": {
          "description": "Like directory but returns information about the latest revision",
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "richDirectory",
          "normalized": "FileStore-\u003eFilePath-\u003eIO[(Resource,Either String Revision)]",
          "package": "filestore",
          "partial": "Directory",
          "signature": "FileStore-\u003eFilePath-\u003eIO[(Resource,Either String Revision)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#v:richDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all revisions that are saved with the given\n description or with a part of this description.\n\u003c/p\u003e",
          "module": "Data.FileStore.Generic",
          "name": "searchRevisions",
          "package": "filestore",
          "signature": "FileStore-\u003e Bool-\u003e FilePath-\u003e Description-\u003e IO [Revision]",
          "type": "function"
        },
        "index": {
          "description": "Return list of all revisions that are saved with the given description or with part of this description",
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "searchRevisions",
          "normalized": "FileStore-\u003eBool-\u003eFilePath-\u003eDescription-\u003eIO[Revision]",
          "package": "filestore",
          "partial": "Revisions",
          "signature": "FileStore-\u003eBool-\u003eFilePath-\u003eDescription-\u003eIO[Revision]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#v:searchRevisions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to retrieve a resource from the repository by name and possibly a\n revision identifier. When retrieving a resource by revision identifier fails\n this function will try to fetch the latest revision for which the\n description matches the given string.\n\u003c/p\u003e",
          "module": "Data.FileStore.Generic",
          "name": "smartRetrieve",
          "package": "filestore",
          "signature": "FileStore-\u003e Bool-\u003e FilePath-\u003e Maybe String-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Try to retrieve resource from the repository by name and possibly revision identifier When retrieving resource by revision identifier fails this function will try to fetch the latest revision for which the description matches the given string",
          "hierarchy": "Data FileStore Generic",
          "module": "Data.FileStore.Generic",
          "name": "smartRetrieve",
          "normalized": "FileStore-\u003eBool-\u003eFilePath-\u003eMaybe String-\u003eIO a",
          "package": "filestore",
          "partial": "Retrieve",
          "signature": "FileStore-\u003eBool-\u003eFilePath-\u003eMaybe String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Generic.html#v:smartRetrieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA versioned filestore implemented using git.\n   Normally this module should not be imported: import\n   \u003ca\u003eData.FileStore\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FileStore.Git",
          "name": "Git",
          "package": "filestore",
          "source": "src/Data-FileStore-Git.html",
          "type": "module"
        },
        "index": {
          "description": "versioned filestore implemented using git Normally this module should not be imported import Data.FileStore instead",
          "hierarchy": "Data FileStore Git",
          "module": "Data.FileStore.Git",
          "name": "Git",
          "package": "filestore",
          "partial": "Git",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Git.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a filestore implemented using the git distributed revision control system\n (\u003ca\u003ehttp://git-scm.com/\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Data.FileStore.Git",
          "name": "gitFileStore",
          "package": "filestore",
          "signature": "FilePath -\u003e FileStore",
          "source": "src/Data-FileStore-Git.html#gitFileStore",
          "type": "function"
        },
        "index": {
          "description": "Return filestore implemented using the git distributed revision control system http git-scm.com",
          "hierarchy": "Data FileStore Git",
          "module": "Data.FileStore.Git",
          "name": "gitFileStore",
          "normalized": "FilePath-\u003eFileStore",
          "package": "filestore",
          "partial": "File Store",
          "signature": "FilePath-\u003eFileStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Git.html#v:gitFileStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA versioned filestore implemented using mercurial.\n   Normally this module should not be imported: import\n   \u003ca\u003eData.FileStore\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FileStore.Mercurial",
          "name": "Mercurial",
          "package": "filestore",
          "source": "src/Data-FileStore-Mercurial.html",
          "type": "module"
        },
        "index": {
          "description": "versioned filestore implemented using mercurial Normally this module should not be imported import Data.FileStore instead",
          "hierarchy": "Data FileStore Mercurial",
          "module": "Data.FileStore.Mercurial",
          "name": "Mercurial",
          "package": "filestore",
          "partial": "Mercurial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Mercurial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a filestore implemented using the mercurial distributed revision control system\n (\u003ca\u003ehttp://mercurial.selenic.com/\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Data.FileStore.Mercurial",
          "name": "mercurialFileStore",
          "package": "filestore",
          "signature": "FilePath -\u003e FileStore",
          "source": "src/Data-FileStore-Mercurial.html#mercurialFileStore",
          "type": "function"
        },
        "index": {
          "description": "Return filestore implemented using the mercurial distributed revision control system http mercurial.selenic.com",
          "hierarchy": "Data FileStore Mercurial",
          "module": "Data.FileStore.Mercurial",
          "name": "mercurialFileStore",
          "normalized": "FilePath-\u003eFileStore",
          "package": "filestore",
          "partial": "File Store",
          "signature": "FilePath-\u003eFileStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Mercurial.html#v:mercurialFileStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType definitions for \u003ca\u003eData.FileStore\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FileStore.Types",
          "name": "Types",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Type definitions for Data.FileStore",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Types",
          "package": "filestore",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Author",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#Author",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Author",
          "package": "filestore",
          "partial": "Author",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:Author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Change",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#Change",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Change",
          "package": "filestore",
          "partial": "Change",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Contents",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#Contents",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Contents",
          "package": "filestore",
          "partial": "Contents",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:Contents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Description",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#Description",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Description",
          "package": "filestore",
          "partial": "Description",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA versioning filestore, which can be implemented using the\n file system, a database, or revision-control software.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "FileStore",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "data"
        },
        "index": {
          "description": "versioning filestore which can be implemented using the file system database or revision-control software",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "FileStore",
          "package": "filestore",
          "partial": "File Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:FileStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "FileStoreError",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#FileStoreError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "FileStoreError",
          "package": "filestore",
          "partial": "File Store Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:FileStoreError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "MergeInfo",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#MergeInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "MergeInfo",
          "package": "filestore",
          "partial": "Merge Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:MergeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Resource",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#Resource",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Resource",
          "package": "filestore",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Revision",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#Revision",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Revision",
          "package": "filestore",
          "partial": "Revision",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:Revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "RevisionId",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#RevisionId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "RevisionId",
          "package": "filestore",
          "partial": "Revision Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:RevisionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "SearchMatch",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#SearchMatch",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "SearchMatch",
          "package": "filestore",
          "partial": "Search Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:SearchMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "SearchQuery",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#SearchQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "SearchQuery",
          "package": "filestore",
          "partial": "Search Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:SearchQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "TimeRange",
          "package": "filestore",
          "source": "src/Data-FileStore-Types.html#TimeRange",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "TimeRange",
          "package": "filestore",
          "partial": "Time Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:TimeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the simplest representation of UTC.\n It consists of the day number, and a time offset from midnight.\n Note that if a day has a leap second added to it, it will have 86401 seconds.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "UTCTime",
          "package": "filestore",
          "type": "data"
        },
        "index": {
          "description": "This is the simplest representation of UTC It consists of the day number and time offset from midnight Note that if day has leap second added to it it will have seconds",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "UTCTime",
          "package": "filestore",
          "partial": "UTCTime",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#t:UTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Added",
          "package": "filestore",
          "signature": "Added FilePath",
          "source": "src/Data-FileStore-Types.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Added",
          "package": "filestore",
          "partial": "Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:Added"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Author",
          "package": "filestore",
          "signature": "Author",
          "source": "src/Data-FileStore-Types.html#Author",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Author",
          "package": "filestore",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:Author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Deleted",
          "package": "filestore",
          "signature": "Deleted FilePath",
          "source": "src/Data-FileStore-Types.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Deleted",
          "package": "filestore",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:Deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "FSDirectory",
          "package": "filestore",
          "signature": "FSDirectory FilePath",
          "source": "src/Data-FileStore-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "FSDirectory",
          "package": "filestore",
          "partial": "FSDirectory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:FSDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "FSFile",
          "package": "filestore",
          "signature": "FSFile FilePath",
          "source": "src/Data-FileStore-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "FSFile",
          "package": "filestore",
          "partial": "FSFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:FSFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "FileStore",
          "package": "filestore",
          "signature": "FileStore",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "FileStore",
          "package": "filestore",
          "partial": "File Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:FileStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe specified resource name is illegal\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "IllegalResourceName",
          "package": "filestore",
          "signature": "IllegalResourceName",
          "source": "src/Data-FileStore-Types.html#FileStoreError",
          "type": "function"
        },
        "index": {
          "description": "The specified resource name is illegal",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "IllegalResourceName",
          "package": "filestore",
          "partial": "Illegal Resource Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:IllegalResourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "MergeInfo",
          "package": "filestore",
          "signature": "MergeInfo",
          "source": "src/Data-FileStore-Types.html#MergeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "MergeInfo",
          "package": "filestore",
          "partial": "Merge Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:MergeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Modified",
          "package": "filestore",
          "signature": "Modified FilePath",
          "source": "src/Data-FileStore-Types.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Modified",
          "package": "filestore",
          "partial": "Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:Modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe darcs version used does not support\n   --max-count\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "NoMaxCount",
          "package": "filestore",
          "signature": "NoMaxCount",
          "source": "src/Data-FileStore-Types.html#FileStoreError",
          "type": "function"
        },
        "index": {
          "description": "The darcs version used does not support max-count",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "NoMaxCount",
          "package": "filestore",
          "partial": "No Max Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:NoMaxCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequested resource was not found\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "NotFound",
          "package": "filestore",
          "signature": "NotFound",
          "source": "src/Data-FileStore-Types.html#FileStoreError",
          "type": "function"
        },
        "index": {
          "description": "Requested resource was not found",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "NotFound",
          "package": "filestore",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTried to initialize a repo that exists\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "RepositoryExists",
          "package": "filestore",
          "signature": "RepositoryExists",
          "source": "src/Data-FileStore-Types.html#FileStoreError",
          "type": "function"
        },
        "index": {
          "description": "Tried to initialize repo that exists",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "RepositoryExists",
          "package": "filestore",
          "partial": "Repository Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:RepositoryExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTried to create a resource that exists\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "ResourceExists",
          "package": "filestore",
          "signature": "ResourceExists",
          "source": "src/Data-FileStore-Types.html#FileStoreError",
          "type": "function"
        },
        "index": {
          "description": "Tried to create resource that exists",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "ResourceExists",
          "package": "filestore",
          "partial": "Resource Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:ResourceExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "Revision",
          "package": "filestore",
          "signature": "Revision",
          "source": "src/Data-FileStore-Types.html#Revision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Revision",
          "package": "filestore",
          "partial": "Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:Revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "SearchMatch",
          "package": "filestore",
          "signature": "SearchMatch",
          "source": "src/Data-FileStore-Types.html#SearchMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "SearchMatch",
          "package": "filestore",
          "partial": "Search Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:SearchMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "SearchQuery",
          "package": "filestore",
          "signature": "SearchQuery",
          "source": "src/Data-FileStore-Types.html#SearchQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "SearchQuery",
          "package": "filestore",
          "partial": "Search Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:SearchQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "TimeRange",
          "package": "filestore",
          "signature": "TimeRange",
          "source": "src/Data-FileStore-Types.html#TimeRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "TimeRange",
          "package": "filestore",
          "partial": "Time Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:TimeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe resource was not modified,\n   because the contents were unchanged\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "Unchanged",
          "package": "filestore",
          "signature": "Unchanged",
          "source": "src/Data-FileStore-Types.html#FileStoreError",
          "type": "function"
        },
        "index": {
          "description": "The resource was not modified because the contents were unchanged",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "Unchanged",
          "package": "filestore",
          "partial": "Unchanged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:Unchanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "UnknownError",
          "package": "filestore",
          "signature": "UnknownError String",
          "source": "src/Data-FileStore-Types.html#FileStoreError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "UnknownError",
          "package": "filestore",
          "partial": "Unknown Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:UnknownError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "UnsupportedOperation",
          "package": "filestore",
          "signature": "UnsupportedOperation",
          "source": "src/Data-FileStore-Types.html#FileStoreError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "UnsupportedOperation",
          "package": "filestore",
          "partial": "Unsupported Operation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:UnsupportedOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "authorEmail",
          "package": "filestore",
          "signature": "String",
          "source": "src/Data-FileStore-Types.html#Author",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "authorEmail",
          "package": "filestore",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:authorEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "authorName",
          "package": "filestore",
          "signature": "String",
          "source": "src/Data-FileStore-Types.html#Author",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "authorName",
          "package": "filestore",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:authorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "defaultSearchQuery",
          "package": "filestore",
          "signature": "SearchQuery",
          "source": "src/Data-FileStore-Types.html#defaultSearchQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "defaultSearchQuery",
          "package": "filestore",
          "partial": "Search Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:defaultSearchQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a named resource, providing author and log message.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "delete",
          "package": "filestore",
          "signature": "FilePath -\u003e Author -\u003e Description -\u003e IO ()",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Delete named resource providing author and log message",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "delete",
          "normalized": "FilePath-\u003eAuthor-\u003eDescription-\u003eIO()",
          "package": "filestore",
          "signature": "FilePath-\u003eAuthor-\u003eDescription-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of resources in a directory of the filestore.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "directory",
          "package": "filestore",
          "signature": "FilePath -\u003e IO [Resource]",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Return list of resources in directory of the filestore",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "directory",
          "normalized": "FilePath-\u003eIO[Resource]",
          "package": "filestore",
          "signature": "FilePath-\u003eIO[Resource]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "fromByteString",
          "package": "filestore",
          "signature": "ByteString -\u003e a",
          "source": "src/Data-FileStore-Types.html#fromByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "fromByteString",
          "normalized": "ByteString-\u003ea",
          "package": "filestore",
          "partial": "Byte String",
          "signature": "ByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet history for a list of named resources in a (possibly openended)\n time range. If the list is empty, history for all resources will\n be returned. If the TimeRange is 2 Nothings, history for all dates will be returned.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "history",
          "package": "filestore",
          "signature": "[FilePath] -\u003e TimeRange -\u003e Maybe Int -\u003e IO [Revision]",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Get history for list of named resources in possibly openended time range If the list is empty history for all resources will be returned If the TimeRange is Nothings history for all dates will be returned",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "history",
          "normalized": "[FilePath]-\u003eTimeRange-\u003eMaybe Int-\u003eIO[Revision]",
          "package": "filestore",
          "signature": "[FilePath]-\u003eTimeRange-\u003eMaybe Int-\u003eIO[Revision]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:history"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e if the revision IDs match, in the sense that the\n can be treated as specifying the same revision.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "idsMatch",
          "package": "filestore",
          "signature": "RevisionId -\u003e RevisionId -\u003e Bool",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "True if the revision IDs match in the sense that the can be treated as specifying the same revision",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "idsMatch",
          "normalized": "RevisionId-\u003eRevisionId-\u003eBool",
          "package": "filestore",
          "partial": "Match",
          "signature": "RevisionId-\u003eRevisionId-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:idsMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of resources in the filestore.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "index",
          "package": "filestore",
          "signature": "IO [FilePath]",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Return list of resources in the filestore",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "index",
          "normalized": "IO[FilePath]",
          "package": "filestore",
          "signature": "IO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new filestore.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "initialize",
          "package": "filestore",
          "signature": "IO ()",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Initialize new filestore",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "initialize",
          "normalized": "IO()",
          "package": "filestore",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the revision ID of the latest change for a resource.\n Raises \u003ccode\u003e\u003ca\u003eNotFound\u003c/a\u003e\u003c/code\u003e if the resource is not found.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "latest",
          "package": "filestore",
          "signature": "FilePath -\u003e IO RevisionId",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Return the revision ID of the latest change for resource Raises NotFound if the resource is not found",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "latest",
          "normalized": "FilePath-\u003eIO RevisionId",
          "package": "filestore",
          "signature": "FilePath-\u003eIO RevisionId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:latest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "matchLine",
          "package": "filestore",
          "signature": "String",
          "source": "src/Data-FileStore-Types.html#SearchMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "matchLine",
          "package": "filestore",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:matchLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "matchLineNumber",
          "package": "filestore",
          "signature": "Integer",
          "source": "src/Data-FileStore-Types.html#SearchMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "matchLineNumber",
          "package": "filestore",
          "partial": "Line Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:matchLineNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "matchResourceName",
          "package": "filestore",
          "signature": "FilePath",
          "source": "src/Data-FileStore-Types.html#SearchMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "matchResourceName",
          "package": "filestore",
          "partial": "Resource Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:matchResourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e if there were merge conflicts\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "mergeConflicts",
          "package": "filestore",
          "signature": "Bool",
          "source": "src/Data-FileStore-Types.html#MergeInfo",
          "type": "function"
        },
        "index": {
          "description": "True if there were merge conflicts",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "mergeConflicts",
          "package": "filestore",
          "partial": "Conflicts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:mergeConflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe revision w/ which changes were merged\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "mergeRevision",
          "package": "filestore",
          "signature": "Revision",
          "source": "src/Data-FileStore-Types.html#MergeInfo",
          "type": "function"
        },
        "index": {
          "description": "The revision which changes were merged",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "mergeRevision",
          "package": "filestore",
          "partial": "Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:mergeRevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe merged text, w/ conflict markers\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "mergeText",
          "package": "filestore",
          "signature": "String",
          "source": "src/Data-FileStore-Types.html#MergeInfo",
          "type": "function"
        },
        "index": {
          "description": "The merged text conflict markers",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "mergeText",
          "package": "filestore",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:mergeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake matches case-insensitive?\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "queryIgnoreCase",
          "package": "filestore",
          "signature": "Bool",
          "source": "src/Data-FileStore-Types.html#SearchQuery",
          "type": "function"
        },
        "index": {
          "description": "Make matches case-insensitive",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "queryIgnoreCase",
          "package": "filestore",
          "partial": "Ignore Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:queryIgnoreCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn matches only from files in which\n   all patterns match?\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "queryMatchAll",
          "package": "filestore",
          "signature": "Bool",
          "source": "src/Data-FileStore-Types.html#SearchQuery",
          "type": "function"
        },
        "index": {
          "description": "Return matches only from files in which all patterns match",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "queryMatchAll",
          "package": "filestore",
          "partial": "Match All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:queryMatchAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePatterns to match\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "queryPatterns",
          "package": "filestore",
          "signature": "[String]",
          "source": "src/Data-FileStore-Types.html#SearchQuery",
          "type": "function"
        },
        "index": {
          "description": "Patterns to match",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "queryPatterns",
          "normalized": "[String]",
          "package": "filestore",
          "partial": "Patterns",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:queryPatterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch patterns only with whole words?\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "queryWholeWords",
          "package": "filestore",
          "signature": "Bool",
          "source": "src/Data-FileStore-Types.html#SearchQuery",
          "type": "function"
        },
        "index": {
          "description": "Match patterns only with whole words",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "queryWholeWords",
          "package": "filestore",
          "partial": "Whole Words",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:queryWholeWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename a resource, providing author and log message.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "rename",
          "package": "filestore",
          "signature": "FilePath -\u003e FilePath -\u003e Author -\u003e Description -\u003e IO ()",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Rename resource providing author and log message",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "rename",
          "normalized": "FilePath-\u003eFilePath-\u003eAuthor-\u003eDescription-\u003eIO()",
          "package": "filestore",
          "signature": "FilePath-\u003eFilePath-\u003eAuthor-\u003eDescription-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the contents of the named resource.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "retrieve",
          "package": "filestore",
          "signature": "FilePath -\u003e Maybe RevisionId -\u003e IO a",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the contents of the named resource",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "retrieve",
          "normalized": "FilePath-\u003eMaybe RevisionId-\u003eIO a",
          "package": "filestore",
          "signature": "FilePath-\u003eMaybe RevisionId-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:retrieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "revAuthor",
          "package": "filestore",
          "signature": "Author",
          "source": "src/Data-FileStore-Types.html#Revision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "revAuthor",
          "package": "filestore",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:revAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "revChanges",
          "package": "filestore",
          "signature": "[Change]",
          "source": "src/Data-FileStore-Types.html#Revision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "revChanges",
          "normalized": "[Change]",
          "package": "filestore",
          "partial": "Changes",
          "signature": "[Change]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:revChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "revDateTime",
          "package": "filestore",
          "signature": "UTCTime",
          "source": "src/Data-FileStore-Types.html#Revision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "revDateTime",
          "package": "filestore",
          "partial": "Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:revDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "revDescription",
          "package": "filestore",
          "signature": "Description",
          "source": "src/Data-FileStore-Types.html#Revision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "revDescription",
          "package": "filestore",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:revDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "revId",
          "package": "filestore",
          "signature": "RevisionId",
          "source": "src/Data-FileStore-Types.html#Revision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "revId",
          "package": "filestore",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:revId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn information about a revision, given the ID.\n Raises \u003ccode\u003e\u003ca\u003eNotFound\u003c/a\u003e\u003c/code\u003e if there is no such revision.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "revision",
          "package": "filestore",
          "signature": "RevisionId -\u003e IO Revision",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Return information about revision given the ID Raises NotFound if there is no such revision",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "revision",
          "normalized": "RevisionId-\u003eIO Revision",
          "package": "filestore",
          "signature": "RevisionId-\u003eIO Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave contents in the filestore.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "save",
          "package": "filestore",
          "signature": "FilePath -\u003e Author -\u003e Description -\u003e a -\u003e IO ()",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Save contents in the filestore",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "save",
          "normalized": "FilePath-\u003eAuthor-\u003eDescription-\u003ea-\u003eIO()",
          "package": "filestore",
          "signature": "FilePath-\u003eAuthor-\u003eDescription-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch the filestore for patterns.\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "search",
          "package": "filestore",
          "signature": "SearchQuery -\u003e IO [SearchMatch]",
          "source": "src/Data-FileStore-Types.html#FileStore",
          "type": "function"
        },
        "index": {
          "description": "Search the filestore for patterns",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "search",
          "normalized": "SearchQuery-\u003eIO[SearchMatch]",
          "package": "filestore",
          "signature": "SearchQuery-\u003eIO[SearchMatch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNothing\u003c/code\u003e means no lower bound\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "timeFrom",
          "package": "filestore",
          "signature": "Maybe UTCTime",
          "source": "src/Data-FileStore-Types.html#TimeRange",
          "type": "function"
        },
        "index": {
          "description": "Nothing means no lower bound",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "timeFrom",
          "package": "filestore",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:timeFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNothing\u003c/code\u003e means no upper bound\n\u003c/p\u003e",
          "module": "Data.FileStore.Types",
          "name": "timeTo",
          "package": "filestore",
          "signature": "Maybe UTCTime",
          "source": "src/Data-FileStore-Types.html#TimeRange",
          "type": "function"
        },
        "index": {
          "description": "Nothing means no upper bound",
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "timeTo",
          "package": "filestore",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:timeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Types",
          "name": "toByteString",
          "package": "filestore",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-FileStore-Types.html#toByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data FileStore Types",
          "module": "Data.FileStore.Types",
          "name": "toByteString",
          "normalized": "a-\u003eByteString",
          "package": "filestore",
          "partial": "Byte String",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Types.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for running external processes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FileStore.Utils",
          "name": "Utils",
          "package": "filestore",
          "source": "src/Data-FileStore-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions for running external processes",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "Utils",
          "package": "filestore",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode argument for raw command.\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "encodeArg",
          "package": "filestore",
          "signature": "String -\u003e String",
          "source": "src/Data-FileStore-Utils.html#encodeArg",
          "type": "function"
        },
        "index": {
          "description": "Encode argument for raw command",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "encodeArg",
          "normalized": "String-\u003eString",
          "package": "filestore",
          "partial": "Arg",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:encodeArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf name doesn't exist in repo or is not a file, throw \u003ccode\u003e\u003ca\u003eNotFound\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "ensureFileExists",
          "package": "filestore",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-FileStore-Utils.html#ensureFileExists",
          "type": "function"
        },
        "index": {
          "description": "If name doesn exist in repo or is not file throw NotFound exception",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "ensureFileExists",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "filestore",
          "partial": "File Exists",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:ensureFileExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileStore.Utils",
          "name": "escapeRegexSpecialChars",
          "package": "filestore",
          "signature": "String -\u003e String",
          "source": "src/Data-FileStore-Utils.html#escapeRegexSpecialChars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "escapeRegexSpecialChars",
          "normalized": "String-\u003eString",
          "package": "filestore",
          "partial": "Regex Special Chars",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:escapeRegexSpecialChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses grep to search a file-based repository. Note that this calls out to grep; and so\n   is generic over repos like git or darcs-based repos. (The git FileStore instance doesn't\n   use this because git has builtin grep functionality.)\n   Expected usage is to specialize this function with a particular backend's \u003ccode\u003eindex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "grepSearchRepo",
          "package": "filestore",
          "signature": "(FilePath -\u003e IO [String]) -\u003e FilePath -\u003e SearchQuery -\u003e IO [SearchMatch]",
          "source": "src/Data-FileStore-Utils.html#grepSearchRepo",
          "type": "function"
        },
        "index": {
          "description": "Uses grep to search file-based repository Note that this calls out to grep and so is generic over repos like git or darcs-based repos The git FileStore instance doesn use this because git has builtin grep functionality Expected usage is to specialize this function with particular backend index",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "grepSearchRepo",
          "normalized": "(FilePath-\u003eIO[String])-\u003eFilePath-\u003eSearchQuery-\u003eIO[SearchMatch]",
          "package": "filestore",
          "partial": "Search Repo",
          "signature": "(FilePath-\u003eIO[String])-\u003eFilePath-\u003eSearchQuery-\u003eIO[SearchMatch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:grepSearchRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA number of VCS systems uniquely identify a particular revision or change via a\n   cryptographic hash of some sort. These hashs can be very long, and so systems like\n   Git and Darcs don't require the entire hash - a *unique prefix*. Thus a definition\n   of hash equality is \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e, certainly, but also simply whether either is a prefix of the\n   other. If both are reasonably long, then the likelihood the shorter one is not a unique\n   prefix of the longer (that is, clashes with another hash) is small.\n   The burden of proof is on the caller to not pass a uselessly short short-hash like '1', however.\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "hashsMatch",
          "package": "filestore",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-FileStore-Utils.html#hashsMatch",
          "type": "function"
        },
        "index": {
          "description": "number of VCS systems uniquely identify particular revision or change via cryptographic hash of some sort These hashs can be very long and so systems like Git and Darcs don require the entire hash unique prefix Thus definition of hash equality is certainly but also simply whether either is prefix of the other If both are reasonably long then the likelihood the shorter one is not unique prefix of the longer that is clashes with another hash is small The burden of proof is on the caller to not pass uselessly short short-hash like however",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "hashsMatch",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "filestore",
          "partial": "Match",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:hashsMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo a three way merge, using either git merge-file or RCS merge.  Assumes\n that either \u003ccode\u003egit\u003c/code\u003e or \u003ccode\u003emerge\u003c/code\u003e is in the system path.  Assumes UTF-8 locale.\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "mergeContents",
          "package": "filestore",
          "signature": "(String, ByteString)-\u003e (String, ByteString)-\u003e (String, ByteString)-\u003e IO (Bool, String)",
          "type": "function"
        },
        "index": {
          "description": "Do three way merge using either git merge-file or RCS merge Assumes that either git or merge is in the system path Assumes UTF-8 locale",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "mergeContents",
          "normalized": "(String,ByteString)-\u003e(String,ByteString)-\u003e(String,ByteString)-\u003eIO(Bool,String)",
          "package": "filestore",
          "partial": "Contents",
          "signature": "(String,ByteString)-\u003e(String,ByteString)-\u003e(String,ByteString)-\u003eIO(Bool,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:mergeContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser function. This is intended for use on strings which are output by grep programs\n   or programs which mimic the standard grep output - which uses colons as delimiters and has\n   3 fields: the filename, the line number, and then the matching line itself. Note that this \n   is for use on only strings meeting that format - if it goes \u003ca\u003efile:match\u003c/a\u003e, this will throw\n   a pattern-match exception.\n\u003c/p\u003e\u003cpre\u003e parseMatchLine \"foo:10:bar baz quux\" ~\u003e \n SearchMatch {matchResourceName = \"foo\", matchLineNumber = 10, matchLine = \"bar baz quux\"}\n\u003c/pre\u003e",
          "module": "Data.FileStore.Utils",
          "name": "parseMatchLine",
          "package": "filestore",
          "signature": "String -\u003e SearchMatch",
          "source": "src/Data-FileStore-Utils.html#parseMatchLine",
          "type": "function"
        },
        "index": {
          "description": "parser function This is intended for use on strings which are output by grep programs or programs which mimic the standard grep output which uses colons as delimiters and has fields the filename the line number and then the matching line itself Note that this is for use on only strings meeting that format if it goes file match this will throw pattern-match exception parseMatchLine foo bar baz quux SearchMatch matchResourceName foo matchLineNumber matchLine bar baz quux",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "parseMatchLine",
          "normalized": "String-\u003eSearchMatch",
          "package": "filestore",
          "partial": "Match Line",
          "signature": "String-\u003eSearchMatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:parseMatchLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch multiple files with a single regexp.\n   This calls out to grep, and so supports the regular expressions grep does.\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "regSearchFiles",
          "package": "filestore",
          "signature": "FilePath -\u003e [String] -\u003e String -\u003e IO [String]",
          "source": "src/Data-FileStore-Utils.html#regSearchFiles",
          "type": "function"
        },
        "index": {
          "description": "Search multiple files with single regexp This calls out to grep and so supports the regular expressions grep does",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "regSearchFiles",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO[String]",
          "package": "filestore",
          "partial": "Search Files",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:regSearchFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a single file with multiple regexps.\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "regsSearchFile",
          "package": "filestore",
          "signature": "[String] -\u003e FilePath -\u003e [String] -\u003e String -\u003e IO [String]",
          "source": "src/Data-FileStore-Utils.html#regsSearchFile",
          "type": "function"
        },
        "index": {
          "description": "Search single file with multiple regexps",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "regsSearchFile",
          "normalized": "[String]-\u003eFilePath-\u003e[String]-\u003eString-\u003eIO[String]",
          "package": "filestore",
          "partial": "Search File",
          "signature": "[String]-\u003eFilePath-\u003e[String]-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:regsSearchFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun shell command and return error status, standard output, and error output.  Assumes\n UTF-8 locale. Note that this does not actually go through /bin/sh!\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "runShellCommand",
          "package": "filestore",
          "signature": "FilePath-\u003e Maybe [(String, String)]-\u003e String-\u003e [String]-\u003e IO (ExitCode, ByteString, ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Run shell command and return error status standard output and error output Assumes UTF-8 locale Note that this does not actually go through bin sh",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "runShellCommand",
          "normalized": "FilePath-\u003eMaybe[(String,String)]-\u003eString-\u003e[String]-\u003eIO(ExitCode,ByteString,ByteString)",
          "package": "filestore",
          "partial": "Shell Command",
          "signature": "FilePath-\u003eMaybe[(String,String)]-\u003eString-\u003e[String]-\u003eIO(ExitCode,ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:runShellCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur policy is: if the input is clearly a \u003ca\u003ename \u003ce@mail.com\u003e\u003c/a\u003e input, then we return \u003ca\u003e(Just Address, Name)\u003c/a\u003e\n   If there is no \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e in the input, then it clearly can't be of that format, and so we just return \u003ca\u003e(Nothing, Name)\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e splitEmailAuthor \"foo bar baz@gmail.com\" ~\u003e (Nothing,\"foo bar baz@gmail.com\")\n splitEmailAuthor \"foo bar \u003cbaz@gmail.com\u003e\" ~\u003e (Just \"baz@gmail.com\",\"foo bar\")\n\u003c/pre\u003e",
          "module": "Data.FileStore.Utils",
          "name": "splitEmailAuthor",
          "package": "filestore",
          "signature": "String -\u003e (Maybe String, String)",
          "source": "src/Data-FileStore-Utils.html#splitEmailAuthor",
          "type": "function"
        },
        "index": {
          "description": "Our policy is if the input is clearly name e@mail.com input then we return Just Address Name If there is no in the input then it clearly can be of that format and so we just return Nothing Name splitEmailAuthor foo bar baz@gmail.com Nothing foo bar baz@gmail.com splitEmailAuthor foo bar baz@gmail.com Just baz@gmail.com foo bar",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "splitEmailAuthor",
          "normalized": "String-\u003e(Maybe String,String)",
          "package": "filestore",
          "partial": "Email Author",
          "signature": "String-\u003e(Maybe String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:splitEmailAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the filename/location is within the given repo, and not inside\n any of the (relative) paths in \u003ccode\u003eexcludes\u003c/code\u003e.  Create the directory if needed.\n If everything checks out, then perform the specified action.\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "withSanityCheck",
          "package": "filestore",
          "signature": "FilePath -\u003e [FilePath] -\u003e FilePath -\u003e IO b -\u003e IO b",
          "source": "src/Data-FileStore-Utils.html#withSanityCheck",
          "type": "function"
        },
        "index": {
          "description": "Check that the filename location is within the given repo and not inside any of the relative paths in excludes Create the directory if needed If everything checks out then perform the specified action",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "withSanityCheck",
          "normalized": "FilePath-\u003e[FilePath]-\u003eFilePath-\u003eIO a-\u003eIO a",
          "package": "filestore",
          "partial": "Sanity Check",
          "signature": "FilePath-\u003e[FilePath]-\u003eFilePath-\u003eIO b-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:withSanityCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewe don't actually need the contents, just want to check that the directory exists and we have enough permissions\n\u003c/p\u003e",
          "module": "Data.FileStore.Utils",
          "name": "withVerifyDir",
          "package": "filestore",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/Data-FileStore-Utils.html#withVerifyDir",
          "type": "function"
        },
        "index": {
          "description": "we don actually need the contents just want to check that the directory exists and we have enough permissions",
          "hierarchy": "Data FileStore Utils",
          "module": "Data.FileStore.Utils",
          "name": "withVerifyDir",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "filestore",
          "partial": "Verify Dir",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore-Utils.html#v:withVerifyDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract interface to a versioned file store, which can be\n   implemented using a revision-control system or database.\n\u003c/p\u003e\u003cp\u003eBased on ideas from Sebastiaan Visser's \u003ca\u003eNetwork.Orchid.Core.Backend\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FileStore",
          "name": "FileStore",
          "package": "filestore",
          "source": "src/Data-FileStore.html",
          "type": "module"
        },
        "index": {
          "description": "Abstract interface to versioned file store which can be implemented using revision-control system or database Based on ideas from Sebastiaan Visser Network.Orchid.Core.Backend",
          "hierarchy": "Data FileStore",
          "module": "Data.FileStore",
          "name": "FileStore",
          "package": "filestore",
          "partial": "File Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filestore/docs/Data-FileStore.html#"
      }
    }
  ]
]