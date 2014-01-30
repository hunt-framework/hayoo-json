[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSink entries to the archive:\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE OverloadedStrings #-}\n\nimport qualified Data.Conduit.Binary as CB\nimport           Codec.Archive.Zip\n\nmain = do\n    withArchive \"some.zip\" $ do\n        sinkEntry \"first\"  $ CB.sourceLbs \"hello\"\n        sinkEntry \"second\" $ CB.sourceLbs \"world\"\n\u003c/pre\u003e\u003cp\u003eSource first entry from the archive:\n\u003c/p\u003e\u003cpre\u003e\nimport           System.Environment (getArgs)\nimport qualified Data.Conduit.Binary as CB\nimport           Codec.Archive.Zip\n\nmain = do\n    archivePath:_ \u003c- getArgs\n    withArchive archivePath $ do\n        name:_ \u003c- entryNames\n        sourceEntry name $ CB.sinkFile name\n\u003c/pre\u003e\u003cp\u003eList entries in the archive:\n\u003c/p\u003e\u003cpre\u003e\nimport System.Environment (getArgs)\nimport Codec.Archive.Zip\n\nmain = do\n    archivePath:_ \u003c- getArgs\n    names \u003c- withArchive archivePath entryNames\n    mapM_ putStrLn names\n\u003c/pre\u003e\u003cp\u003eAdd files to the archive:\n\u003c/p\u003e\u003cpre\u003e\nimport Control.Monad (filterM)\nimport System.Directory (doesFileExist, getDirectoryContents)\nimport System.Environment (getArgs)\nimport Codec.Archive.Zip\n\nmain = do\n    dirPath:_ \u003c- getArgs\n    paths     \u003c- getDirectoryContents dirPath\n    filePaths \u003c- filterM doesFileExist paths\n    withArchive \"some.zip\" $ addFiles filePaths\n\u003c/pre\u003e\u003cp\u003eExtract files from the archive:\n\u003c/p\u003e\u003cpre\u003e\nimport System.Environment (getArgs)\nimport Codec.Archive.Zip\n\nmain = do\n    dirPath:_ \u003c- getArgs\n    withArchive \"some.zip\" $ do\n        names \u003c- entryNames\n        extractFiles names dirPath\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "module",
        "fct-source": "src/Codec-Archive-Zip.html",
        "fct-type": "module",
        "title": "Zip"
      },
      "index": {
        "description": "Sink entries to the archive LANGUAGE OverloadedStrings import qualified Data.Conduit.Binary as CB import Codec.Archive.Zip main do withArchive some.zip do sinkEntry first CB.sourceLbs hello sinkEntry second CB.sourceLbs world Source first entry from the archive import System.Environment getArgs import qualified Data.Conduit.Binary as CB import Codec.Archive.Zip main do archivePath getArgs withArchive archivePath do name entryNames sourceEntry name CB.sinkFile name List entries in the archive import System.Environment getArgs import Codec.Archive.Zip main do archivePath getArgs names withArchive archivePath entryNames mapM putStrLn names Add files to the archive import Control.Monad filterM import System.Directory doesFileExist getDirectoryContents import System.Environment getArgs import Codec.Archive.Zip main do dirPath getArgs paths getDirectoryContents dirPath filePaths filterM doesFileExist paths withArchive some.zip addFiles filePaths Extract files from the archive import System.Environment getArgs import Codec.Archive.Zip main do dirPath getArgs withArchive some.zip do names entryNames extractFiles names dirPath",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "Zip",
        "normalized": "",
        "package": "zip-conduit",
        "partial": "Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#t:Archive",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "type",
        "fct-source": "src/Codec-Archive-Zip.html#Archive",
        "fct-type": "type",
        "title": "Archive"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "Archive",
        "normalized": "",
        "package": "zip-conduit",
        "partial": "Archive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:addFiles",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "[FilePath] -\u003e Archive ()",
        "fct-source": "src/Codec-Archive-Zip.html#addFiles",
        "fct-type": "function",
        "title": "addFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "addFiles",
        "normalized": "[FilePath]-\u003eArchive()",
        "package": "zip-conduit",
        "partial": "Files",
        "signature": "[FilePath]-\u003eArchive()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:entryNames",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "Archive [FilePath]",
        "fct-source": "src/Codec-Archive-Zip.html#entryNames",
        "fct-type": "function",
        "title": "entryNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "entryNames",
        "normalized": "Archive[FilePath]",
        "package": "zip-conduit",
        "partial": "Names",
        "signature": "Archive[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:extractFiles",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "[FilePath] -\u003e FilePath -\u003e Archive ()",
        "fct-source": "src/Codec-Archive-Zip.html#extractFiles",
        "fct-type": "function",
        "title": "extractFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "extractFiles",
        "normalized": "[FilePath]-\u003eFilePath-\u003eArchive()",
        "package": "zip-conduit",
        "partial": "Files",
        "signature": "[FilePath]-\u003eFilePath-\u003eArchive()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:fileNames",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "Archive [FilePath]",
        "fct-source": "src/Codec-Archive-Zip.html#fileNames",
        "fct-type": "function",
        "title": "fileNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "fileNames",
        "normalized": "Archive[FilePath]",
        "package": "zip-conduit",
        "partial": "Names",
        "signature": "Archive[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:getComment",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "Archive ByteString",
        "fct-source": "src/Codec-Archive-Zip.html#getComment",
        "fct-type": "function",
        "title": "getComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "getComment",
        "normalized": "",
        "package": "zip-conduit",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:getSink",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "FilePath -\u003e UTCTime -\u003e Archive (Sink ByteString m ())",
        "fct-source": "src/Codec-Archive-Zip.html#getSink",
        "fct-type": "function",
        "title": "getSink"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "getSink",
        "normalized": "FilePath-\u003eUTCTime-\u003eArchive(Sink ByteString a())",
        "package": "zip-conduit",
        "partial": "Sink",
        "signature": "FilePath-\u003eUTCTime-\u003eArchive(Sink ByteString m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:getSource",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "FilePath -\u003e Archive (Source m ByteString)",
        "fct-source": "src/Codec-Archive-Zip.html#getSource",
        "fct-type": "function",
        "title": "getSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "getSource",
        "normalized": "FilePath-\u003eArchive(Source a ByteString)",
        "package": "zip-conduit",
        "partial": "Source",
        "signature": "FilePath-\u003eArchive(Source m ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:setComment",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "ByteString -\u003e Archive ()",
        "fct-source": "src/Codec-Archive-Zip.html#setComment",
        "fct-type": "function",
        "title": "setComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "setComment",
        "normalized": "ByteString-\u003eArchive()",
        "package": "zip-conduit",
        "partial": "Comment",
        "signature": "ByteString-\u003eArchive()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:sinkEntry",
      "description": {
        "fct-descr": "\u003cp\u003eStream data from the specified source to an archive entry.\n\u003c/p\u003e",
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "FilePath -\u003e Source (ResourceT Archive) ByteString -\u003e Archive ()",
        "fct-source": "src/Codec-Archive-Zip.html#sinkEntry",
        "fct-type": "function",
        "title": "sinkEntry"
      },
      "index": {
        "description": "Stream data from the specified source to an archive entry",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "sinkEntry",
        "normalized": "FilePath-\u003eSource(ResourceT Archive)ByteString-\u003eArchive()",
        "package": "zip-conduit",
        "partial": "Entry",
        "signature": "FilePath-\u003eSource(ResourceT Archive)ByteString-\u003eArchive()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:sinkEntryUncompressed",
      "description": {
        "fct-descr": "\u003cp\u003eStream data from the specified source to an uncompressed archive entry.\n\u003c/p\u003e",
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "FilePath -\u003e Source (ResourceT Archive) ByteString -\u003e Archive ()",
        "fct-source": "src/Codec-Archive-Zip.html#sinkEntryUncompressed",
        "fct-type": "function",
        "title": "sinkEntryUncompressed"
      },
      "index": {
        "description": "Stream data from the specified source to an uncompressed archive entry",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "sinkEntryUncompressed",
        "normalized": "FilePath-\u003eSource(ResourceT Archive)ByteString-\u003eArchive()",
        "package": "zip-conduit",
        "partial": "Entry Uncompressed",
        "signature": "FilePath-\u003eSource(ResourceT Archive)ByteString-\u003eArchive()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:sourceEntry",
      "description": {
        "fct-descr": "\u003cp\u003eStream the contents of an archive entry to the specified sink.\n\u003c/p\u003e",
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "FilePath -\u003e Sink ByteString (ResourceT Archive) a -\u003e Archive a",
        "fct-source": "src/Codec-Archive-Zip.html#sourceEntry",
        "fct-type": "function",
        "title": "sourceEntry"
      },
      "index": {
        "description": "Stream the contents of an archive entry to the specified sink",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "sourceEntry",
        "normalized": "FilePath-\u003eSink ByteString(ResourceT Archive)a-\u003eArchive a",
        "package": "zip-conduit",
        "partial": "Entry",
        "signature": "FilePath-\u003eSink ByteString(ResourceT Archive)a-\u003eArchive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zip-conduit/docs/Codec-Archive-Zip.html#v:withArchive",
      "description": {
        "fct-module": "Codec.Archive.Zip",
        "fct-package": "zip-conduit",
        "fct-signature": "FilePath -\u003e Archive a -\u003e IO a",
        "fct-source": "src/Codec-Archive-Zip.html#withArchive",
        "fct-type": "function",
        "title": "withArchive"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Archive Zip",
        "module": "Codec.Archive.Zip",
        "name": "withArchive",
        "normalized": "FilePath-\u003eArchive a-\u003eIO a",
        "package": "zip-conduit",
        "partial": "Archive",
        "signature": "FilePath-\u003eArchive a-\u003eIO a"
      }
    }
  }
]