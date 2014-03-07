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
        "word": "unix"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal stuff: support for ByteString FilePaths\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.ByteString.FilePath",
          "name": "FilePath",
          "package": "unix",
          "source": "src/System-Posix-ByteString-FilePath.html",
          "type": "module"
        },
        "index": {
          "description": "Internal stuff support for ByteString FilePaths",
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "FilePath",
          "package": "unix",
          "partial": "File Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA literal POSIX file path\n\u003c/p\u003e",
          "module": "System.Posix.ByteString.FilePath",
          "name": "RawFilePath",
          "package": "unix",
          "source": "src/System-Posix-ByteString-FilePath.html#RawFilePath",
          "type": "type"
        },
        "index": {
          "description": "literal POSIX file path",
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "RawFilePath",
          "package": "unix",
          "partial": "Raw File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#t:RawFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ByteString.FilePath",
          "name": "peekFilePath",
          "package": "unix",
          "signature": "CString -\u003e IO RawFilePath",
          "source": "src/System-Posix-ByteString-FilePath.html#peekFilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "peekFilePath",
          "normalized": "CString-\u003eIO RawFilePath",
          "package": "unix",
          "partial": "File Path",
          "signature": "CString-\u003eIO RawFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:peekFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ByteString.FilePath",
          "name": "peekFilePathLen",
          "package": "unix",
          "signature": "CStringLen -\u003e IO RawFilePath",
          "source": "src/System-Posix-ByteString-FilePath.html#peekFilePathLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "peekFilePathLen",
          "normalized": "CStringLen-\u003eIO RawFilePath",
          "package": "unix",
          "partial": "File Path Len",
          "signature": "CStringLen-\u003eIO RawFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:peekFilePathLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrno\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPath",
          "package": "unix",
          "signature": "String -\u003e RawFilePath -\u003e IO a",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPath",
          "type": "function"
        },
        "index": {
          "description": "as throwErrno but exceptions include the given path when appropriate",
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPath",
          "normalized": "String-\u003eRawFilePath-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path",
          "signature": "String-\u003eRawFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIf\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIf",
          "package": "unix",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e RawFilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPathIf",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIf but exceptions include the given path when appropriate",
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIf",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eRawFilePath-\u003eIO a-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path If",
          "signature": "(a-\u003eBool)-\u003eString-\u003eRawFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPathIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfMinus1",
          "package": "unix",
          "signature": "String -\u003e RawFilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPathIfMinus1",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1 but exceptions include the given path when appropriate",
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfMinus1",
          "normalized": "String-\u003eRawFilePath-\u003eIO a-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path If Minus",
          "signature": "String-\u003eRawFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPathIfMinus1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfMinus1Retry",
          "package": "unix",
          "signature": "String -\u003e RawFilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPathIfMinus1Retry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfMinus1Retry",
          "normalized": "String-\u003eRawFilePath-\u003eIO a-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path If Minus Retry",
          "signature": "String-\u003eRawFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPathIfMinus1Retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfMinus1Retry_",
          "package": "unix",
          "signature": "String -\u003e RawFilePath -\u003e IO a -\u003e IO ()",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPathIfMinus1Retry_",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfMinus1Retry_",
          "normalized": "String-\u003eRawFilePath-\u003eIO a-\u003eIO()",
          "package": "unix",
          "partial": "Errno Path If Minus Retry",
          "signature": "String-\u003eRawFilePath-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPathIfMinus1Retry_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1_\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfMinus1_",
          "package": "unix",
          "signature": "String -\u003e RawFilePath -\u003e IO a -\u003e IO ()",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPathIfMinus1_",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1 but exceptions include the given path when appropriate",
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfMinus1_",
          "normalized": "String-\u003eRawFilePath-\u003eIO a-\u003eIO()",
          "package": "unix",
          "partial": "Errno Path If Minus",
          "signature": "String-\u003eRawFilePath-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPathIfMinus1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfNull\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfNull",
          "package": "unix",
          "signature": "String -\u003e RawFilePath -\u003e IO (Ptr a) -\u003e IO (Ptr a)",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPathIfNull",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfNull but exceptions include the given path when appropriate",
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfNull",
          "normalized": "String-\u003eRawFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "package": "unix",
          "partial": "Errno Path If Null",
          "signature": "String-\u003eRawFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPathIfNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfNullRetry",
          "package": "unix",
          "signature": "String -\u003e RawFilePath -\u003e IO (Ptr a) -\u003e IO (Ptr a)",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPathIfNullRetry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfNullRetry",
          "normalized": "String-\u003eRawFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "package": "unix",
          "partial": "Errno Path If Null Retry",
          "signature": "String-\u003eRawFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPathIfNullRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfRetry",
          "package": "unix",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e RawFilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPathIfRetry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIfRetry",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eRawFilePath-\u003eIO a-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path If Retry",
          "signature": "(a-\u003eBool)-\u003eString-\u003eRawFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPathIfRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIf_\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIf_",
          "package": "unix",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e RawFilePath -\u003e IO a -\u003e IO ()",
          "source": "src/System-Posix-ByteString-FilePath.html#throwErrnoPathIf_",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIf but exceptions include the given path when appropriate",
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "throwErrnoPathIf_",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eRawFilePath-\u003eIO a-\u003eIO()",
          "package": "unix",
          "partial": "Errno Path If",
          "signature": "(a-\u003eBool)-\u003eString-\u003eRawFilePath-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:throwErrnoPathIf_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ByteString.FilePath",
          "name": "withFilePath",
          "package": "unix",
          "signature": "RawFilePath -\u003e (CString -\u003e IO a) -\u003e IO a",
          "source": "src/System-Posix-ByteString-FilePath.html#withFilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ByteString FilePath",
          "module": "System.Posix.ByteString.FilePath",
          "name": "withFilePath",
          "normalized": "RawFilePath-\u003e(CString-\u003eIO a)-\u003eIO a",
          "package": "unix",
          "partial": "File Path",
          "signature": "RawFilePath-\u003e(CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString-FilePath.html#v:withFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX support with ByteString file paths and environment strings.\n\u003c/p\u003e\u003cp\u003eThis module exports exactly the same API as \u003ca\u003eSystem.Posix\u003c/a\u003e, except\n that all file paths and environment strings are represented by\n \u003ccode\u003eByteString\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  The \u003ca\u003eSystem.Posix\u003c/a\u003e API\n implicitly translates all file paths and environment strings using\n the locale encoding, whereas this version of the API does no\n encoding or decoding and works directly in terms of raw bytes.\n\u003c/p\u003e\u003cp\u003eNote that if you do need to interpret file paths or environment\n strings as text, then some Unicode encoding or decoding should be\n applied first.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX support with ByteString file paths and environment strings This module exports exactly the same API as System.Posix except that all file paths and environment strings are represented by ByteString instead of String The System.Posix API implicitly translates all file paths and environment strings using the locale encoding whereas this version of the API does no encoding or decoding and works directly in terms of raw bytes Note that if you do need to interpret file paths or environment strings as text then some Unicode encoding or decoding should be applied first",
          "hierarchy": "System Posix ByteString",
          "module": "System.Posix.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA literal POSIX file path\n\u003c/p\u003e",
          "module": "System.Posix.ByteString",
          "name": "RawFilePath",
          "package": "unix",
          "source": "src/System-Posix-ByteString-FilePath.html#RawFilePath",
          "type": "type"
        },
        "index": {
          "description": "literal POSIX file path",
          "hierarchy": "System Posix ByteString",
          "module": "System.Posix.ByteString",
          "name": "RawFilePath",
          "package": "unix",
          "partial": "Raw File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-ByteString.html#t:RawFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString-based POSIX directory support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Directory.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-Directory-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "String-based POSIX directory support",
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Directory.ByteString",
          "name": "DirStream",
          "package": "unix",
          "source": "src/System-Posix-Directory-Common.html#DirStream",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "DirStream",
          "package": "unix",
          "partial": "Dir Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#t:DirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Directory.ByteString",
          "name": "DirStreamOffset",
          "package": "unix",
          "source": "src/System-Posix-Directory-Common.html#DirStreamOffset",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "DirStreamOffset",
          "package": "unix",
          "partial": "Dir Stream Offset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#t:DirStreamOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echangeWorkingDirectory dir\u003c/code\u003e calls \u003ccode\u003echdir\u003c/code\u003e to change\n   the current working directory to \u003ccode\u003edir\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Directory.ByteString",
          "name": "changeWorkingDirectory",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO ()",
          "source": "src/System-Posix-Directory-ByteString.html#changeWorkingDirectory",
          "type": "function"
        },
        "index": {
          "description": "changeWorkingDirectory dir calls chdir to change the current working directory to dir",
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "changeWorkingDirectory",
          "normalized": "RawFilePath-\u003eIO()",
          "package": "unix",
          "partial": "Working Directory",
          "signature": "RawFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:changeWorkingDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Directory.ByteString\",\"System.Posix.Directory\"]",
          "name": "changeWorkingDirectoryFd",
          "package": "unix",
          "signature": "Fd -\u003e IO ()",
          "source": "src/System-Posix-Directory-Common.html#changeWorkingDirectoryFd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:changeWorkingDirectoryFd\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:changeWorkingDirectoryFd\"]"
        },
        "index": {
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "changeWorkingDirectoryFd",
          "normalized": "Fd-\u003eIO()",
          "package": "unix",
          "partial": "Working Directory Fd",
          "signature": "Fd-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:changeWorkingDirectoryFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecloseDirStream dp\u003c/code\u003e calls \u003ccode\u003eclosedir\u003c/code\u003e to close\n   the directory stream \u003ccode\u003edp\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Directory.ByteString\",\"System.Posix.Directory\"]",
          "name": "closeDirStream",
          "package": "unix",
          "signature": "DirStream -\u003e IO ()",
          "source": "src/System-Posix-Directory-Common.html#closeDirStream",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:closeDirStream\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:closeDirStream\"]"
        },
        "index": {
          "description": "closeDirStream dp calls closedir to close the directory stream dp",
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "closeDirStream",
          "normalized": "DirStream-\u003eIO()",
          "package": "unix",
          "partial": "Dir Stream",
          "signature": "DirStream-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:closeDirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateDirectory dir mode\u003c/code\u003e calls \u003ccode\u003emkdir\u003c/code\u003e to\n   create a new directory, \u003ccode\u003edir\u003c/code\u003e, with permissions based on\n  \u003ccode\u003emode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Directory.ByteString",
          "name": "createDirectory",
          "package": "unix",
          "signature": "RawFilePath -\u003e FileMode -\u003e IO ()",
          "source": "src/System-Posix-Directory-ByteString.html#createDirectory",
          "type": "function"
        },
        "index": {
          "description": "createDirectory dir mode calls mkdir to create new directory dir with permissions based on mode",
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "createDirectory",
          "normalized": "RawFilePath-\u003eFileMode-\u003eIO()",
          "package": "unix",
          "partial": "Directory",
          "signature": "RawFilePath-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:createDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetWorkingDirectory\u003c/code\u003e calls \u003ccode\u003egetcwd\u003c/code\u003e to obtain the name\n   of the current working directory.\n\u003c/p\u003e",
          "module": "System.Posix.Directory.ByteString",
          "name": "getWorkingDirectory",
          "package": "unix",
          "signature": "IO RawFilePath",
          "source": "src/System-Posix-Directory-ByteString.html#getWorkingDirectory",
          "type": "function"
        },
        "index": {
          "description": "getWorkingDirectory calls getcwd to obtain the name of the current working directory",
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "getWorkingDirectory",
          "package": "unix",
          "partial": "Working Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:getWorkingDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenDirStream dir\u003c/code\u003e calls \u003ccode\u003eopendir\u003c/code\u003e to obtain a\n   directory stream for \u003ccode\u003edir\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Directory.ByteString",
          "name": "openDirStream",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO DirStream",
          "source": "src/System-Posix-Directory-ByteString.html#openDirStream",
          "type": "function"
        },
        "index": {
          "description": "openDirStream dir calls opendir to obtain directory stream for dir",
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "openDirStream",
          "normalized": "RawFilePath-\u003eIO DirStream",
          "package": "unix",
          "partial": "Dir Stream",
          "signature": "RawFilePath-\u003eIO DirStream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:openDirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadDirStream dp\u003c/code\u003e calls \u003ccode\u003ereaddir\u003c/code\u003e to obtain the\n   next directory entry (\u003ccode\u003estruct dirent\u003c/code\u003e) for the open directory\n   stream \u003ccode\u003edp\u003c/code\u003e, and returns the \u003ccode\u003ed_name\u003c/code\u003e member of that\n  structure.\n\u003c/p\u003e",
          "module": "System.Posix.Directory.ByteString",
          "name": "readDirStream",
          "package": "unix",
          "signature": "DirStream -\u003e IO RawFilePath",
          "source": "src/System-Posix-Directory-ByteString.html#readDirStream",
          "type": "function"
        },
        "index": {
          "description": "readDirStream dp calls readdir to obtain the next directory entry struct dirent for the open directory stream dp and returns the name member of that structure",
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "readDirStream",
          "normalized": "DirStream-\u003eIO RawFilePath",
          "package": "unix",
          "partial": "Dir Stream",
          "signature": "DirStream-\u003eIO RawFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:readDirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Directory.ByteString",
          "name": "removeDirectory",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO ()",
          "source": "src/System-Posix-Directory-ByteString.html#removeDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "removeDirectory",
          "normalized": "RawFilePath-\u003eIO()",
          "package": "unix",
          "partial": "Directory",
          "signature": "RawFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:removeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erewindDirStream dp\u003c/code\u003e calls \u003ccode\u003erewinddir\u003c/code\u003e to reposition\n   the directory stream \u003ccode\u003edp\u003c/code\u003e at the beginning of the directory.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Directory.ByteString\",\"System.Posix.Directory\"]",
          "name": "rewindDirStream",
          "package": "unix",
          "signature": "DirStream -\u003e IO ()",
          "source": "src/System-Posix-Directory-Common.html#rewindDirStream",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:rewindDirStream\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:rewindDirStream\"]"
        },
        "index": {
          "description": "rewindDirStream dp calls rewinddir to reposition the directory stream dp at the beginning of the directory",
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "rewindDirStream",
          "normalized": "DirStream-\u003eIO()",
          "package": "unix",
          "partial": "Dir Stream",
          "signature": "DirStream-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:rewindDirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Directory.ByteString\",\"System.Posix.Directory\"]",
          "name": "seekDirStream",
          "package": "unix",
          "signature": "DirStream -\u003e DirStreamOffset -\u003e IO ()",
          "source": "src/System-Posix-Directory-Common.html#seekDirStream",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:seekDirStream\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:seekDirStream\"]"
        },
        "index": {
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "seekDirStream",
          "normalized": "DirStream-\u003eDirStreamOffset-\u003eIO()",
          "package": "unix",
          "partial": "Dir Stream",
          "signature": "DirStream-\u003eDirStreamOffset-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:seekDirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Directory.ByteString\",\"System.Posix.Directory\"]",
          "name": "tellDirStream",
          "package": "unix",
          "signature": "DirStream -\u003e IO DirStreamOffset",
          "source": "src/System-Posix-Directory-Common.html#tellDirStream",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:tellDirStream\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:tellDirStream\"]"
        },
        "index": {
          "hierarchy": "System Posix Directory ByteString",
          "module": "System.Posix.Directory.ByteString",
          "name": "tellDirStream",
          "normalized": "DirStream-\u003eIO DirStreamOffset",
          "package": "unix",
          "partial": "Dir Stream",
          "signature": "DirStream-\u003eIO DirStreamOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory-ByteString.html#v:tellDirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString-based POSIX directory support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Directory",
          "name": "Directory",
          "package": "unix",
          "source": "src/System-Posix-Directory.html",
          "type": "module"
        },
        "index": {
          "description": "String-based POSIX directory support",
          "hierarchy": "System Posix Directory",
          "module": "System.Posix.Directory",
          "name": "Directory",
          "package": "unix",
          "partial": "Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Directory",
          "name": "DirStream",
          "package": "unix",
          "source": "src/System-Posix-Directory-Common.html#DirStream",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Directory",
          "module": "System.Posix.Directory",
          "name": "DirStream",
          "package": "unix",
          "partial": "Dir Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#t:DirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Directory",
          "name": "DirStreamOffset",
          "package": "unix",
          "source": "src/System-Posix-Directory-Common.html#DirStreamOffset",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Directory",
          "module": "System.Posix.Directory",
          "name": "DirStreamOffset",
          "package": "unix",
          "partial": "Dir Stream Offset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#t:DirStreamOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echangeWorkingDirectory dir\u003c/code\u003e calls \u003ccode\u003echdir\u003c/code\u003e to change\n   the current working directory to \u003ccode\u003edir\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Directory",
          "name": "changeWorkingDirectory",
          "package": "unix",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Posix-Directory.html#changeWorkingDirectory",
          "type": "function"
        },
        "index": {
          "description": "changeWorkingDirectory dir calls chdir to change the current working directory to dir",
          "hierarchy": "System Posix Directory",
          "module": "System.Posix.Directory",
          "name": "changeWorkingDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "unix",
          "partial": "Working Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:changeWorkingDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateDirectory dir mode\u003c/code\u003e calls \u003ccode\u003emkdir\u003c/code\u003e to \n   create a new directory, \u003ccode\u003edir\u003c/code\u003e, with permissions based on\n  \u003ccode\u003emode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Directory",
          "name": "createDirectory",
          "package": "unix",
          "signature": "FilePath -\u003e FileMode -\u003e IO ()",
          "source": "src/System-Posix-Directory.html#createDirectory",
          "type": "function"
        },
        "index": {
          "description": "createDirectory dir mode calls mkdir to create new directory dir with permissions based on mode",
          "hierarchy": "System Posix Directory",
          "module": "System.Posix.Directory",
          "name": "createDirectory",
          "normalized": "FilePath-\u003eFileMode-\u003eIO()",
          "package": "unix",
          "partial": "Directory",
          "signature": "FilePath-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:createDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetWorkingDirectory\u003c/code\u003e calls \u003ccode\u003egetcwd\u003c/code\u003e to obtain the name\n   of the current working directory.\n\u003c/p\u003e",
          "module": "System.Posix.Directory",
          "name": "getWorkingDirectory",
          "package": "unix",
          "signature": "IO FilePath",
          "source": "src/System-Posix-Directory.html#getWorkingDirectory",
          "type": "function"
        },
        "index": {
          "description": "getWorkingDirectory calls getcwd to obtain the name of the current working directory",
          "hierarchy": "System Posix Directory",
          "module": "System.Posix.Directory",
          "name": "getWorkingDirectory",
          "package": "unix",
          "partial": "Working Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:getWorkingDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenDirStream dir\u003c/code\u003e calls \u003ccode\u003eopendir\u003c/code\u003e to obtain a\n   directory stream for \u003ccode\u003edir\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Directory",
          "name": "openDirStream",
          "package": "unix",
          "signature": "FilePath -\u003e IO DirStream",
          "source": "src/System-Posix-Directory.html#openDirStream",
          "type": "function"
        },
        "index": {
          "description": "openDirStream dir calls opendir to obtain directory stream for dir",
          "hierarchy": "System Posix Directory",
          "module": "System.Posix.Directory",
          "name": "openDirStream",
          "normalized": "FilePath-\u003eIO DirStream",
          "package": "unix",
          "partial": "Dir Stream",
          "signature": "FilePath-\u003eIO DirStream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:openDirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadDirStream dp\u003c/code\u003e calls \u003ccode\u003ereaddir\u003c/code\u003e to obtain the\n   next directory entry (\u003ccode\u003estruct dirent\u003c/code\u003e) for the open directory\n   stream \u003ccode\u003edp\u003c/code\u003e, and returns the \u003ccode\u003ed_name\u003c/code\u003e member of that\n  structure.\n\u003c/p\u003e",
          "module": "System.Posix.Directory",
          "name": "readDirStream",
          "package": "unix",
          "signature": "DirStream -\u003e IO FilePath",
          "source": "src/System-Posix-Directory.html#readDirStream",
          "type": "function"
        },
        "index": {
          "description": "readDirStream dp calls readdir to obtain the next directory entry struct dirent for the open directory stream dp and returns the name member of that structure",
          "hierarchy": "System Posix Directory",
          "module": "System.Posix.Directory",
          "name": "readDirStream",
          "normalized": "DirStream-\u003eIO FilePath",
          "package": "unix",
          "partial": "Dir Stream",
          "signature": "DirStream-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:readDirStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Directory",
          "name": "removeDirectory",
          "package": "unix",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Posix-Directory.html#removeDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Directory",
          "module": "System.Posix.Directory",
          "name": "removeDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "unix",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Directory.html#v:removeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDynamic linker support through dlopen()\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-DynamicLinker-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Dynamic linker support through dlopen",
          "hierarchy": "System Posix DynamicLinker ByteString",
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.DynamicLinker.ByteString\",\"System.Posix.DynamicLinker\"]",
          "name": "dlclose",
          "package": "unix",
          "signature": "DL -\u003e IO ()",
          "source": "src/System-Posix-DynamicLinker-Common.html#dlclose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:dlclose\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker.html#v:dlclose\"]"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker ByteString",
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "dlclose",
          "normalized": "DL-\u003eIO()",
          "package": "unix",
          "signature": "DL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:dlclose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.DynamicLinker.ByteString\",\"System.Posix.DynamicLinker\"]",
          "name": "dlerror",
          "package": "unix",
          "signature": "IO String",
          "source": "src/System-Posix-DynamicLinker-Common.html#dlerror",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:dlerror\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker.html#v:dlerror\"]"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker ByteString",
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "dlerror",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:dlerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "dlopen",
          "package": "unix",
          "signature": "RawFilePath -\u003e [RTLDFlags] -\u003e IO DL",
          "source": "src/System-Posix-DynamicLinker-ByteString.html#dlopen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker ByteString",
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "dlopen",
          "normalized": "RawFilePath-\u003e[RTLDFlags]-\u003eIO DL",
          "package": "unix",
          "signature": "RawFilePath-\u003e[RTLDFlags]-\u003eIO DL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:dlopen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edlsym\u003c/a\u003e\u003c/code\u003e returns the address binding of the symbol described in \u003ccode\u003esymbol\u003c/code\u003e,\n as it occurs in the shared object identified by \u003ccode\u003esource\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.DynamicLinker.ByteString\",\"System.Posix.DynamicLinker\"]",
          "name": "dlsym",
          "package": "unix",
          "signature": "DL -\u003e String -\u003e IO (FunPtr a)",
          "source": "src/System-Posix-DynamicLinker-Common.html#dlsym",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:dlsym\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker.html#v:dlsym\"]"
        },
        "index": {
          "description": "dlsym returns the address binding of the symbol described in symbol as it occurs in the shared object identified by source",
          "hierarchy": "System Posix DynamicLinker ByteString",
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "dlsym",
          "normalized": "DL-\u003eString-\u003eIO(FunPtr a)",
          "package": "unix",
          "signature": "DL-\u003eString-\u003eIO(FunPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:dlsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eundl\u003c/a\u003e\u003c/code\u003e obtains the raw handle. You mustn't do something like\n \u003ccode\u003ewithDL mod flags $ liftM undl \u003e\u003e=  p -\u003e use p\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"System.Posix.DynamicLinker.ByteString\",\"System.Posix.DynamicLinker\"]",
          "name": "undl",
          "package": "unix",
          "signature": "DL -\u003e Ptr ()",
          "source": "src/System-Posix-DynamicLinker-Common.html#undl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:undl\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker.html#v:undl\"]"
        },
        "index": {
          "description": "undl obtains the raw handle You mustn do something like withDL mod flags liftM undl use",
          "hierarchy": "System Posix DynamicLinker ByteString",
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "undl",
          "normalized": "DL-\u003ePtr()",
          "package": "unix",
          "signature": "DL-\u003ePtr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:undl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "withDL",
          "package": "unix",
          "signature": "RawFilePath -\u003e [RTLDFlags] -\u003e (DL -\u003e IO a) -\u003e IO a",
          "source": "src/System-Posix-DynamicLinker-ByteString.html#withDL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker ByteString",
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "withDL",
          "normalized": "RawFilePath-\u003e[RTLDFlags]-\u003e(DL-\u003eIO a)-\u003eIO a",
          "package": "unix",
          "partial": "DL",
          "signature": "RawFilePath-\u003e[RTLDFlags]-\u003e(DL-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:withDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "withDL_",
          "package": "unix",
          "signature": "RawFilePath -\u003e [RTLDFlags] -\u003e (DL -\u003e IO a) -\u003e IO ()",
          "source": "src/System-Posix-DynamicLinker-ByteString.html#withDL_",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker ByteString",
          "module": "System.Posix.DynamicLinker.ByteString",
          "name": "withDL_",
          "normalized": "RawFilePath-\u003e[RTLDFlags]-\u003e(DL-\u003eIO a)-\u003eIO()",
          "package": "unix",
          "partial": "DL",
          "signature": "RawFilePath-\u003e[RTLDFlags]-\u003e(DL-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-ByteString.html#v:withDL_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDLOpen support, old API\n  Derived from GModule.chs by M.Weber & M.Chakravarty which is part of c2hs\n  I left the API more or less the same, mostly the flags are different.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-DynamicLinker-Module-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "DLOpen support old API Derived from GModule.chs by M.Weber M.Chakravarty which is part of c2hs left the API more or less the same mostly the flags are different",
          "hierarchy": "System Posix DynamicLinker Module ByteString",
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "Module",
          "package": "unix",
          "source": "src/System-Posix-DynamicLinker-Common.html#Module",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Module ByteString",
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "Module",
          "package": "unix",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.DynamicLinker.Module.ByteString\",\"System.Posix.DynamicLinker.Module\"]",
          "name": "moduleClose",
          "package": "unix",
          "signature": "Module -\u003e IO ()",
          "source": "src/System-Posix-DynamicLinker-Module.html#moduleClose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:moduleClose\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module.html#v:moduleClose\"]"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Module ByteString",
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "moduleClose",
          "normalized": "Module-\u003eIO()",
          "package": "unix",
          "partial": "Close",
          "signature": "Module-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:moduleClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.DynamicLinker.Module.ByteString\",\"System.Posix.DynamicLinker.Module\"]",
          "name": "moduleError",
          "package": "unix",
          "signature": "IO String",
          "source": "src/System-Posix-DynamicLinker-Module.html#moduleError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:moduleError\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module.html#v:moduleError\"]"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Module ByteString",
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "moduleError",
          "package": "unix",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:moduleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "moduleOpen",
          "package": "unix",
          "signature": "RawFilePath -\u003e [RTLDFlags] -\u003e IO Module",
          "source": "src/System-Posix-DynamicLinker-Module-ByteString.html#moduleOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Module ByteString",
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "moduleOpen",
          "normalized": "RawFilePath-\u003e[RTLDFlags]-\u003eIO Module",
          "package": "unix",
          "partial": "Open",
          "signature": "RawFilePath-\u003e[RTLDFlags]-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:moduleOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.DynamicLinker.Module.ByteString\",\"System.Posix.DynamicLinker.Module\"]",
          "name": "moduleSymbol",
          "package": "unix",
          "signature": "Module -\u003e String -\u003e IO (FunPtr a)",
          "source": "src/System-Posix-DynamicLinker-Module.html#moduleSymbol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:moduleSymbol\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module.html#v:moduleSymbol\"]"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Module ByteString",
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "moduleSymbol",
          "normalized": "Module-\u003eString-\u003eIO(FunPtr a)",
          "package": "unix",
          "partial": "Symbol",
          "signature": "Module-\u003eString-\u003eIO(FunPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:moduleSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.DynamicLinker.Module.ByteString\",\"System.Posix.DynamicLinker.Module\"]",
          "name": "withModule",
          "package": "unix",
          "signature": "Maybe String -\u003e String -\u003e [RTLDFlags] -\u003e (Module -\u003e IO a) -\u003e IO a",
          "source": "src/System-Posix-DynamicLinker-Module.html#withModule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:withModule\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module.html#v:withModule\"]"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Module ByteString",
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "withModule",
          "normalized": "Maybe String-\u003eString-\u003e[RTLDFlags]-\u003e(Module-\u003eIO a)-\u003eIO a",
          "package": "unix",
          "partial": "Module",
          "signature": "Maybe String-\u003eString-\u003e[RTLDFlags]-\u003e(Module-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:withModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.DynamicLinker.Module.ByteString\",\"System.Posix.DynamicLinker.Module\"]",
          "name": "withModule_",
          "package": "unix",
          "signature": "Maybe String -\u003e String -\u003e [RTLDFlags] -\u003e (Module -\u003e IO a) -\u003e IO ()",
          "source": "src/System-Posix-DynamicLinker-Module.html#withModule_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:withModule_\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module.html#v:withModule_\"]"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Module ByteString",
          "module": "System.Posix.DynamicLinker.Module.ByteString",
          "name": "withModule_",
          "normalized": "Maybe String-\u003eString-\u003e[RTLDFlags]-\u003e(Module-\u003eIO a)-\u003eIO()",
          "package": "unix",
          "partial": "Module",
          "signature": "Maybe String-\u003eString-\u003e[RTLDFlags]-\u003e(Module-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module-ByteString.html#v:withModule_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDLOpen support, old API\n  Derived from GModule.chs by M.Weber & M.Chakravarty which is part of c2hs\n  I left the API more or less the same, mostly the flags are different.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.DynamicLinker.Module",
          "name": "Module",
          "package": "unix",
          "source": "src/System-Posix-DynamicLinker-Module.html",
          "type": "module"
        },
        "index": {
          "description": "DLOpen support old API Derived from GModule.chs by M.Weber M.Chakravarty which is part of c2hs left the API more or less the same mostly the flags are different",
          "hierarchy": "System Posix DynamicLinker Module",
          "module": "System.Posix.DynamicLinker.Module",
          "name": "Module",
          "package": "unix",
          "partial": "Module",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Module",
          "name": "Module",
          "package": "unix",
          "source": "src/System-Posix-DynamicLinker-Common.html#Module",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Module",
          "module": "System.Posix.DynamicLinker.Module",
          "name": "Module",
          "package": "unix",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Module",
          "name": "moduleOpen",
          "package": "unix",
          "signature": "String -\u003e [RTLDFlags] -\u003e IO Module",
          "source": "src/System-Posix-DynamicLinker-Module.html#moduleOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Module",
          "module": "System.Posix.DynamicLinker.Module",
          "name": "moduleOpen",
          "normalized": "String-\u003e[RTLDFlags]-\u003eIO Module",
          "package": "unix",
          "partial": "Open",
          "signature": "String-\u003e[RTLDFlags]-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Module.html#v:moduleOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDLOpen and friend\n  Derived from GModule.chs by M.Weber & M.Chakravarty which is part of c2hs\n  I left the API more or less the same, mostly the flags are different.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "Prim",
          "package": "unix",
          "source": "src/System-Posix-DynamicLinker-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "DLOpen and friend Derived from GModule.chs by M.Weber M.Chakravarty which is part of c2hs left the API more or less the same mostly the flags are different",
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "Prim",
          "package": "unix",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags for \u003ccode\u003e\u003ca\u003edlsym\u003c/a\u003e\u003c/code\u003e. Notice that \u003ccode\u003e\u003ca\u003eNext\u003c/a\u003e\u003c/code\u003e\n might not be available on your particular platform!\n\u003c/p\u003e",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "DL",
          "package": "unix",
          "source": "src/System-Posix-DynamicLinker-Prim.html#DL",
          "type": "data"
        },
        "index": {
          "description": "Flags for dlsym Notice that Next might not be available on your particular platform",
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "DL",
          "package": "unix",
          "partial": "DL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#t:DL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLDFlags",
          "package": "unix",
          "source": "src/System-Posix-DynamicLinker-Prim.html#RTLDFlags",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLDFlags",
          "package": "unix",
          "partial": "RTLDFlags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#t:RTLDFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "DLHandle",
          "package": "unix",
          "signature": "DLHandle (Ptr ())",
          "source": "src/System-Posix-DynamicLinker-Prim.html#DL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "DLHandle",
          "normalized": "DLHandle(Ptr())",
          "package": "unix",
          "partial": "DLHandle",
          "signature": "DLHandle(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:DLHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "Default",
          "package": "unix",
          "signature": "Default",
          "source": "src/System-Posix-DynamicLinker-Prim.html#DL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "Default",
          "package": "unix",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "Next",
          "package": "unix",
          "signature": "Next",
          "source": "src/System-Posix-DynamicLinker-Prim.html#DL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "Next",
          "package": "unix",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "Null",
          "package": "unix",
          "signature": "Null",
          "source": "src/System-Posix-DynamicLinker-Prim.html#DL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "Null",
          "package": "unix",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLD_GLOBAL",
          "package": "unix",
          "signature": "RTLD_GLOBAL",
          "source": "src/System-Posix-DynamicLinker-Prim.html#RTLDFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLD_GLOBAL",
          "package": "unix",
          "partial": "RTLD GLOBAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:RTLD_GLOBAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLD_LAZY",
          "package": "unix",
          "signature": "RTLD_LAZY",
          "source": "src/System-Posix-DynamicLinker-Prim.html#RTLDFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLD_LAZY",
          "package": "unix",
          "partial": "RTLD LAZY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:RTLD_LAZY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLD_LOCAL",
          "package": "unix",
          "signature": "RTLD_LOCAL",
          "source": "src/System-Posix-DynamicLinker-Prim.html#RTLDFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLD_LOCAL",
          "package": "unix",
          "partial": "RTLD LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:RTLD_LOCAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLD_NOW",
          "package": "unix",
          "signature": "RTLD_NOW",
          "source": "src/System-Posix-DynamicLinker-Prim.html#RTLDFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "RTLD_NOW",
          "package": "unix",
          "partial": "RTLD NOW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:RTLD_NOW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "c_dlclose",
          "package": "unix",
          "signature": "Ptr () -\u003e IO CInt",
          "source": "src/System-Posix-DynamicLinker-Prim.html#c_dlclose",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "c_dlclose",
          "normalized": "Ptr()-\u003eIO CInt",
          "package": "unix",
          "signature": "Ptr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:c_dlclose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "c_dlerror",
          "package": "unix",
          "signature": "IO CString",
          "source": "src/System-Posix-DynamicLinker-Prim.html#c_dlerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "c_dlerror",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:c_dlerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "c_dlopen",
          "package": "unix",
          "signature": "CString -\u003e CInt -\u003e IO (Ptr ())",
          "source": "src/System-Posix-DynamicLinker-Prim.html#c_dlopen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "c_dlopen",
          "normalized": "CString-\u003eCInt-\u003eIO(Ptr())",
          "package": "unix",
          "signature": "CString-\u003eCInt-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:c_dlopen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "c_dlsym",
          "package": "unix",
          "signature": "Ptr () -\u003e CString -\u003e IO (FunPtr a)",
          "source": "src/System-Posix-DynamicLinker-Prim.html#c_dlsym",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "c_dlsym",
          "normalized": "Ptr()-\u003eCString-\u003eIO(FunPtr a)",
          "package": "unix",
          "signature": "Ptr()-\u003eCString-\u003eIO(FunPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:c_dlsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "haveRtldLocal",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-DynamicLinker-Prim.html#haveRtldLocal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "haveRtldLocal",
          "package": "unix",
          "partial": "Rtld Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:haveRtldLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "haveRtldNext",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-DynamicLinker-Prim.html#haveRtldNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "haveRtldNext",
          "package": "unix",
          "partial": "Rtld Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:haveRtldNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "packDL",
          "package": "unix",
          "signature": "DL -\u003e Ptr ()",
          "source": "src/System-Posix-DynamicLinker-Prim.html#packDL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "packDL",
          "normalized": "DL-\u003ePtr()",
          "package": "unix",
          "partial": "DL",
          "signature": "DL-\u003ePtr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:packDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "packRTLDFlags",
          "package": "unix",
          "signature": "[RTLDFlags] -\u003e CInt",
          "source": "src/System-Posix-DynamicLinker-Prim.html#packRTLDFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Prim",
          "module": "System.Posix.DynamicLinker.Prim",
          "name": "packRTLDFlags",
          "normalized": "[RTLDFlags]-\u003eCInt",
          "package": "unix",
          "partial": "RTLDFlags",
          "signature": "[RTLDFlags]-\u003eCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker-Prim.html#v:packRTLDFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDynamic linker support through dlopen()\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.DynamicLinker",
          "name": "DynamicLinker",
          "package": "unix",
          "source": "src/System-Posix-DynamicLinker.html",
          "type": "module"
        },
        "index": {
          "description": "Dynamic linker support through dlopen",
          "hierarchy": "System Posix DynamicLinker",
          "module": "System.Posix.DynamicLinker",
          "name": "DynamicLinker",
          "package": "unix",
          "partial": "Dynamic Linker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker",
          "name": "dlopen",
          "package": "unix",
          "signature": "FilePath -\u003e [RTLDFlags] -\u003e IO DL",
          "source": "src/System-Posix-DynamicLinker.html#dlopen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker",
          "module": "System.Posix.DynamicLinker",
          "name": "dlopen",
          "normalized": "FilePath-\u003e[RTLDFlags]-\u003eIO DL",
          "package": "unix",
          "signature": "FilePath-\u003e[RTLDFlags]-\u003eIO DL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker.html#v:dlopen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker",
          "name": "withDL",
          "package": "unix",
          "signature": "String -\u003e [RTLDFlags] -\u003e (DL -\u003e IO a) -\u003e IO a",
          "source": "src/System-Posix-DynamicLinker.html#withDL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker",
          "module": "System.Posix.DynamicLinker",
          "name": "withDL",
          "normalized": "String-\u003e[RTLDFlags]-\u003e(DL-\u003eIO a)-\u003eIO a",
          "package": "unix",
          "partial": "DL",
          "signature": "String-\u003e[RTLDFlags]-\u003e(DL-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker.html#v:withDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker",
          "name": "withDL_",
          "package": "unix",
          "signature": "String -\u003e [RTLDFlags] -\u003e (DL -\u003e IO a) -\u003e IO ()",
          "source": "src/System-Posix-DynamicLinker.html#withDL_",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker",
          "module": "System.Posix.DynamicLinker",
          "name": "withDL_",
          "normalized": "String-\u003e[RTLDFlags]-\u003e(DL-\u003eIO a)-\u003eIO()",
          "package": "unix",
          "partial": "DL",
          "signature": "String-\u003e[RTLDFlags]-\u003e(DL-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-DynamicLinker.html#v:withDL_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX environment support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Env.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-Env-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX environment support",
          "hierarchy": "System Posix Env ByteString",
          "module": "System.Posix.Env.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e returns a list of the program's command\n line arguments (not including the program name), as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e, this function does no Unicode\n decoding of the arguments; you get the exact bytes that were passed\n to the program by the OS.  To interpret the arguments as text, some\n Unicode decoding should be applied.\n\u003c/p\u003e",
          "module": "System.Posix.Env.ByteString",
          "name": "getArgs",
          "package": "unix",
          "signature": "IO [ByteString]",
          "source": "src/System-Posix-Env-ByteString.html#getArgs",
          "type": "function"
        },
        "index": {
          "description": "Computation getArgs returns list of the program command line arguments not including the program name as ByteString Unlike getArgs this function does no Unicode decoding of the arguments you get the exact bytes that were passed to the program by the OS To interpret the arguments as text some Unicode decoding should be applied",
          "hierarchy": "System Posix Env ByteString",
          "module": "System.Posix.Env.ByteString",
          "name": "getArgs",
          "normalized": "IO[ByteString]",
          "package": "unix",
          "partial": "Args",
          "signature": "IO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env-ByteString.html#v:getArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetEnv\u003c/a\u003e\u003c/code\u003e looks up a variable in the environment.\n\u003c/p\u003e",
          "module": "System.Posix.Env.ByteString",
          "name": "getEnv",
          "package": "unix",
          "signature": "ByteString -\u003e IO (Maybe ByteString)",
          "source": "src/System-Posix-Env-ByteString.html#getEnv",
          "type": "function"
        },
        "index": {
          "description": "getEnv looks up variable in the environment",
          "hierarchy": "System Posix Env ByteString",
          "module": "System.Posix.Env.ByteString",
          "name": "getEnv",
          "normalized": "ByteString-\u003eIO(Maybe ByteString)",
          "package": "unix",
          "partial": "Env",
          "signature": "ByteString-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env-ByteString.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetEnvDefault\u003c/a\u003e\u003c/code\u003e is a wrapper around \u003ccode\u003e\u003ca\u003egetEnv\u003c/a\u003e\u003c/code\u003e where the\n programmer can specify a fallback if the variable is not found\n in the environment.\n\u003c/p\u003e",
          "module": "System.Posix.Env.ByteString",
          "name": "getEnvDefault",
          "package": "unix",
          "signature": "ByteString -\u003e ByteString -\u003e IO ByteString",
          "source": "src/System-Posix-Env-ByteString.html#getEnvDefault",
          "type": "function"
        },
        "index": {
          "description": "getEnvDefault is wrapper around getEnv where the programmer can specify fallback if the variable is not found in the environment",
          "hierarchy": "System Posix Env ByteString",
          "module": "System.Posix.Env.ByteString",
          "name": "getEnvDefault",
          "normalized": "ByteString-\u003eByteString-\u003eIO ByteString",
          "package": "unix",
          "partial": "Env Default",
          "signature": "ByteString-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env-ByteString.html#v:getEnvDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetEnvironment\u003c/a\u003e\u003c/code\u003e retrieves the entire environment as a\n list of \u003ccode\u003e(key,value)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "System.Posix.Env.ByteString",
          "name": "getEnvironment",
          "package": "unix",
          "signature": "IO [(ByteString, ByteString)]",
          "source": "src/System-Posix-Env-ByteString.html#getEnvironment",
          "type": "function"
        },
        "index": {
          "description": "getEnvironment retrieves the entire environment as list of key value pairs",
          "hierarchy": "System Posix Env ByteString",
          "module": "System.Posix.Env.ByteString",
          "name": "getEnvironment",
          "normalized": "IO[(ByteString,ByteString)]",
          "package": "unix",
          "partial": "Environment",
          "signature": "IO[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env-ByteString.html#v:getEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Env.ByteString",
          "name": "getEnvironmentPrim",
          "package": "unix",
          "signature": "IO [ByteString]",
          "source": "src/System-Posix-Env-ByteString.html#getEnvironmentPrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Env ByteString",
          "module": "System.Posix.Env.ByteString",
          "name": "getEnvironmentPrim",
          "normalized": "IO[ByteString]",
          "package": "unix",
          "partial": "Environment Prim",
          "signature": "IO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env-ByteString.html#v:getEnvironmentPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputEnv\u003c/a\u003e\u003c/code\u003e function takes an argument of the form \u003ccode\u003ename=value\u003c/code\u003e\n and is equivalent to \u003ccode\u003esetEnv(key,value,True{-overwrite-})\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Env.ByteString",
          "name": "putEnv",
          "package": "unix",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/System-Posix-Env-ByteString.html#putEnv",
          "type": "function"
        },
        "index": {
          "description": "putEnv function takes an argument of the form name value and is equivalent to setEnv key value True overwrite",
          "hierarchy": "System Posix Env ByteString",
          "module": "System.Posix.Env.ByteString",
          "name": "putEnv",
          "normalized": "ByteString-\u003eIO()",
          "package": "unix",
          "partial": "Env",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env-ByteString.html#v:putEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esetEnv\u003c/a\u003e\u003c/code\u003e function inserts or resets the environment variable name in\n     the current environment list.  If the variable \u003ccode\u003ename\u003c/code\u003e does not exist in the\n     list, it is inserted with the given value.  If the variable does exist,\n     the argument \u003ccode\u003eoverwrite\u003c/code\u003e is tested; if \u003ccode\u003eoverwrite\u003c/code\u003e is \u003ccode\u003eFalse\u003c/code\u003e, the variable is\n     not reset, otherwise it is reset to the given value.\n\u003c/p\u003e",
          "module": "System.Posix.Env.ByteString",
          "name": "setEnv",
          "package": "unix",
          "signature": "ByteString -\u003e ByteString -\u003e Bool -\u003e IO ()",
          "source": "src/System-Posix-Env-ByteString.html#setEnv",
          "type": "function"
        },
        "index": {
          "description": "The setEnv function inserts or resets the environment variable name in the current environment list If the variable name does not exist in the list it is inserted with the given value If the variable does exist the argument overwrite is tested if overwrite is False the variable is not reset otherwise it is reset to the given value",
          "hierarchy": "System Posix Env ByteString",
          "module": "System.Posix.Env.ByteString",
          "name": "setEnv",
          "normalized": "ByteString-\u003eByteString-\u003eBool-\u003eIO()",
          "package": "unix",
          "partial": "Env",
          "signature": "ByteString-\u003eByteString-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env-ByteString.html#v:setEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunsetEnv\u003c/a\u003e\u003c/code\u003e function deletes all instances of the variable name\n from the environment.\n\u003c/p\u003e",
          "module": "System.Posix.Env.ByteString",
          "name": "unsetEnv",
          "package": "unix",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/System-Posix-Env-ByteString.html#unsetEnv",
          "type": "function"
        },
        "index": {
          "description": "The unsetEnv function deletes all instances of the variable name from the environment",
          "hierarchy": "System Posix Env ByteString",
          "module": "System.Posix.Env.ByteString",
          "name": "unsetEnv",
          "normalized": "ByteString-\u003eIO()",
          "package": "unix",
          "partial": "Env",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env-ByteString.html#v:unsetEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX environment support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Env",
          "name": "Env",
          "package": "unix",
          "source": "src/System-Posix-Env.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX environment support",
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "Env",
          "package": "unix",
          "partial": "Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eclearEnv\u003c/a\u003e\u003c/code\u003e function clears the environment of all name-value pairs.\n\u003c/p\u003e",
          "module": "System.Posix.Env",
          "name": "clearEnv",
          "package": "unix",
          "signature": "IO ()",
          "source": "src/System-Posix-Env.html#clearEnv",
          "type": "function"
        },
        "index": {
          "description": "The clearEnv function clears the environment of all name-value pairs",
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "clearEnv",
          "normalized": "IO()",
          "package": "unix",
          "partial": "Env",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#v:clearEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetEnv\u003c/a\u003e\u003c/code\u003e looks up a variable in the environment.\n\u003c/p\u003e",
          "module": "System.Posix.Env",
          "name": "getEnv",
          "package": "unix",
          "signature": "String -\u003e IO (Maybe String)",
          "source": "src/System-Posix-Env.html#getEnv",
          "type": "function"
        },
        "index": {
          "description": "getEnv looks up variable in the environment",
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "getEnv",
          "normalized": "String-\u003eIO(Maybe String)",
          "package": "unix",
          "partial": "Env",
          "signature": "String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetEnvDefault\u003c/a\u003e\u003c/code\u003e is a wrapper around \u003ccode\u003e\u003ca\u003egetEnv\u003c/a\u003e\u003c/code\u003e where the\n programmer can specify a fallback if the variable is not found\n in the environment.\n\u003c/p\u003e",
          "module": "System.Posix.Env",
          "name": "getEnvDefault",
          "package": "unix",
          "signature": "String -\u003e String -\u003e IO String",
          "source": "src/System-Posix-Env.html#getEnvDefault",
          "type": "function"
        },
        "index": {
          "description": "getEnvDefault is wrapper around getEnv where the programmer can specify fallback if the variable is not found in the environment",
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "getEnvDefault",
          "normalized": "String-\u003eString-\u003eIO String",
          "package": "unix",
          "partial": "Env Default",
          "signature": "String-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#v:getEnvDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetEnvironment\u003c/a\u003e\u003c/code\u003e retrieves the entire environment as a\n list of \u003ccode\u003e(key,value)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "System.Posix.Env",
          "name": "getEnvironment",
          "package": "unix",
          "signature": "IO [(String, String)]",
          "source": "src/System-Posix-Env.html#getEnvironment",
          "type": "function"
        },
        "index": {
          "description": "getEnvironment retrieves the entire environment as list of key value pairs",
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "getEnvironment",
          "normalized": "IO[(String,String)]",
          "package": "unix",
          "partial": "Environment",
          "signature": "IO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#v:getEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Env",
          "name": "getEnvironmentPrim",
          "package": "unix",
          "signature": "IO [String]",
          "source": "src/System-Posix-Env.html#getEnvironmentPrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "getEnvironmentPrim",
          "normalized": "IO[String]",
          "package": "unix",
          "partial": "Environment Prim",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#v:getEnvironmentPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputEnv\u003c/a\u003e\u003c/code\u003e function takes an argument of the form \u003ccode\u003ename=value\u003c/code\u003e\n and is equivalent to \u003ccode\u003esetEnv(key,value,True{-overwrite-})\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Env",
          "name": "putEnv",
          "package": "unix",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Posix-Env.html#putEnv",
          "type": "function"
        },
        "index": {
          "description": "putEnv function takes an argument of the form name value and is equivalent to setEnv key value True overwrite",
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "putEnv",
          "normalized": "String-\u003eIO()",
          "package": "unix",
          "partial": "Env",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#v:putEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esetEnv\u003c/a\u003e\u003c/code\u003e function inserts or resets the environment variable name in\n     the current environment list.  If the variable \u003ccode\u003ename\u003c/code\u003e does not exist in the\n     list, it is inserted with the given value.  If the variable does exist,\n     the argument \u003ccode\u003eoverwrite\u003c/code\u003e is tested; if \u003ccode\u003eoverwrite\u003c/code\u003e is \u003ccode\u003eFalse\u003c/code\u003e, the variable is\n     not reset, otherwise it is reset to the given value.\n\u003c/p\u003e",
          "module": "System.Posix.Env",
          "name": "setEnv",
          "package": "unix",
          "signature": "String -\u003e String -\u003e Bool -\u003e IO ()",
          "source": "src/System-Posix-Env.html#setEnv",
          "type": "function"
        },
        "index": {
          "description": "The setEnv function inserts or resets the environment variable name in the current environment list If the variable name does not exist in the list it is inserted with the given value If the variable does exist the argument overwrite is tested if overwrite is False the variable is not reset otherwise it is reset to the given value",
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "setEnv",
          "normalized": "String-\u003eString-\u003eBool-\u003eIO()",
          "package": "unix",
          "partial": "Env",
          "signature": "String-\u003eString-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#v:setEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetEnvironment\u003c/a\u003e\u003c/code\u003e resets the entire environment to the given list of\n \u003ccode\u003e(key,value)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "System.Posix.Env",
          "name": "setEnvironment",
          "package": "unix",
          "signature": "[(String, String)] -\u003e IO ()",
          "source": "src/System-Posix-Env.html#setEnvironment",
          "type": "function"
        },
        "index": {
          "description": "setEnvironment resets the entire environment to the given list of key value pairs",
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "setEnvironment",
          "normalized": "[(String,String)]-\u003eIO()",
          "package": "unix",
          "partial": "Environment",
          "signature": "[(String,String)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#v:setEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunsetEnv\u003c/a\u003e\u003c/code\u003e function deletes all instances of the variable name\n from the environment.\n\u003c/p\u003e",
          "module": "System.Posix.Env",
          "name": "unsetEnv",
          "package": "unix",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Posix-Env.html#unsetEnv",
          "type": "function"
        },
        "index": {
          "description": "The unsetEnv function deletes all instances of the variable name from the environment",
          "hierarchy": "System Posix Env",
          "module": "System.Posix.Env",
          "name": "unsetEnv",
          "normalized": "String-\u003eIO()",
          "package": "unix",
          "partial": "Env",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Env.html#v:unsetEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX error support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Error",
          "name": "Error",
          "package": "unix",
          "source": "src/System-Posix-Error.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX error support",
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "Error",
          "package": "unix",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrno\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.Error",
          "name": "throwErrnoPath",
          "package": "unix",
          "signature": "String -\u003e FilePath -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "as throwErrno but exceptions include the given path when appropriate",
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPath",
          "normalized": "String-\u003eFilePath-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path",
          "signature": "String-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIf\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIf",
          "package": "unix",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e FilePath -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIf but exceptions include the given path when appropriate",
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIf",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path If",
          "signature": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPathIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfMinus1",
          "package": "unix",
          "signature": "String -\u003e FilePath -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1 but exceptions include the given path when appropriate",
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfMinus1",
          "normalized": "String-\u003eFilePath-\u003eIO a-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path If Minus",
          "signature": "String-\u003eFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPathIfMinus1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfMinus1Retry",
          "package": "unix",
          "signature": "String -\u003e FilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Posix-Error.html#throwErrnoPathIfMinus1Retry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfMinus1Retry",
          "normalized": "String-\u003eFilePath-\u003eIO a-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path If Minus Retry",
          "signature": "String-\u003eFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPathIfMinus1Retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfMinus1Retry_",
          "package": "unix",
          "signature": "String -\u003e FilePath -\u003e IO a -\u003e IO ()",
          "source": "src/System-Posix-Error.html#throwErrnoPathIfMinus1Retry_",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfMinus1Retry_",
          "normalized": "String-\u003eFilePath-\u003eIO a-\u003eIO()",
          "package": "unix",
          "partial": "Errno Path If Minus Retry",
          "signature": "String-\u003eFilePath-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPathIfMinus1Retry_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfMinus1_\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfMinus1_",
          "package": "unix",
          "signature": "String -\u003e FilePath -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfMinus1 but exceptions include the given path when appropriate",
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfMinus1_",
          "normalized": "String-\u003eFilePath-\u003eIO a-\u003eIO()",
          "package": "unix",
          "partial": "Errno Path If Minus",
          "signature": "String-\u003eFilePath-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPathIfMinus1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIfNull\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfNull",
          "package": "unix",
          "signature": "String -\u003e FilePath -\u003e IO (Ptr a) -\u003e IO (Ptr a)",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIfNull but exceptions include the given path when appropriate",
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfNull",
          "normalized": "String-\u003eFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "package": "unix",
          "partial": "Errno Path If Null",
          "signature": "String-\u003eFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPathIfNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfNullRetry",
          "package": "unix",
          "signature": "String -\u003e FilePath -\u003e IO (Ptr a) -\u003e IO (Ptr a)",
          "source": "src/System-Posix-Error.html#throwErrnoPathIfNullRetry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfNullRetry",
          "normalized": "String-\u003eFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "package": "unix",
          "partial": "Errno Path If Null Retry",
          "signature": "String-\u003eFilePath-\u003eIO(Ptr a)-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPathIfNullRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfRetry",
          "package": "unix",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e FilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Posix-Error.html#throwErrnoPathIfRetry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIfRetry",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO a",
          "package": "unix",
          "partial": "Errno Path If Retry",
          "signature": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPathIfRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \u003ccode\u003e\u003ca\u003ethrowErrnoIf_\u003c/a\u003e\u003c/code\u003e, but exceptions include the given path when\n   appropriate.\n\u003c/p\u003e",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIf_",
          "package": "unix",
          "signature": "(a -\u003e Bool) -\u003e String -\u003e FilePath -\u003e IO a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "as throwErrnoIf but exceptions include the given path when appropriate",
          "hierarchy": "System Posix Error",
          "module": "System.Posix.Error",
          "name": "throwErrnoPathIf_",
          "normalized": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO()",
          "package": "unix",
          "partial": "Errno Path If",
          "signature": "(a-\u003eBool)-\u003eString-\u003eFilePath-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Error.html#v:throwErrnoPathIf_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions defined by the POSIX standards for manipulating and querying the\n file system. Names of underlying POSIX functions are indicated whenever\n possible. A more complete documentation of the POSIX functions together\n with a more detailed description of different error conditions are usually\n available in the system's manual pages or from\n \u003ca\u003ehttp://www.unix.org/version3/online.html\u003c/a\u003e (free registration required).\n\u003c/p\u003e\u003cp\u003eWhen a function that calls an underlying POSIX function fails, the errno\n code is converted to an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eerrnoToIOError\u003c/a\u003e\u003c/code\u003e.\n For a list of which errno codes may be generated, consult the POSIX\n documentation for the underlying function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-Files-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Functions defined by the POSIX standards for manipulating and querying the file system Names of underlying POSIX functions are indicated whenever possible more complete documentation of the POSIX functions together with more detailed description of different error conditions are usually available in the system manual pages or from http www.unix.org version3 online.html free registration required When function that calls an underlying POSIX function fails the errno code is converted to an IOError using errnoToIOError For list of which errno codes may be generated consult the POSIX documentation for the underlying function",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePOSIX defines operations to get information, such as owner, permissions,\n size and access times, about a file. This information is represented by the\n \u003ccode\u003e\u003ca\u003eFileStatus\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eNote: see \u003ccode\u003echmod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "FileStatus",
          "package": "unix",
          "source": "src/System-Posix-Files-Common.html#FileStatus",
          "type": "data"
        },
        "index": {
          "description": "POSIX defines operations to get information such as owner permissions size and access times about file This information is represented by the FileStatus type Note see chmod",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "FileStatus",
          "package": "unix",
          "partial": "File Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#t:FileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Files.ByteString",
          "name": "PathVar",
          "package": "unix",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "PathVar",
          "package": "unix",
          "partial": "Path Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#t:PathVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "AsyncIOAvailable",
          "package": "unix",
          "signature": "AsyncIOAvailable",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:AsyncIOAvailable\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:AsyncIOAvailable\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "AsyncIOAvailable",
          "package": "unix",
          "partial": "Async IOAvailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:AsyncIOAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "FileNameLimit",
          "package": "unix",
          "signature": "FileNameLimit",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:FileNameLimit\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:FileNameLimit\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "FileNameLimit",
          "package": "unix",
          "partial": "File Name Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:FileNameLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "FileNamesAreNotTruncated",
          "package": "unix",
          "signature": "FileNamesAreNotTruncated",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:FileNamesAreNotTruncated\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:FileNamesAreNotTruncated\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "FileNamesAreNotTruncated",
          "package": "unix",
          "partial": "File Names Are Not Truncated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:FileNamesAreNotTruncated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "FileSizeBits",
          "package": "unix",
          "signature": "FileSizeBits",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:FileSizeBits\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:FileSizeBits\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "FileSizeBits",
          "package": "unix",
          "partial": "File Size Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:FileSizeBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "InputLineLimit",
          "package": "unix",
          "signature": "InputLineLimit",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:InputLineLimit\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:InputLineLimit\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "InputLineLimit",
          "package": "unix",
          "partial": "Input Line Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:InputLineLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "InputQueueLimit",
          "package": "unix",
          "signature": "InputQueueLimit",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:InputQueueLimit\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:InputQueueLimit\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "InputQueueLimit",
          "package": "unix",
          "partial": "Input Queue Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:InputQueueLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "LinkLimit",
          "package": "unix",
          "signature": "LinkLimit",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:LinkLimit\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:LinkLimit\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "LinkLimit",
          "package": "unix",
          "partial": "Link Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:LinkLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "PathNameLimit",
          "package": "unix",
          "signature": "PathNameLimit",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:PathNameLimit\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:PathNameLimit\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "PathNameLimit",
          "package": "unix",
          "partial": "Path Name Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:PathNameLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "PipeBufferLimit",
          "package": "unix",
          "signature": "PipeBufferLimit",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:PipeBufferLimit\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:PipeBufferLimit\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "PipeBufferLimit",
          "package": "unix",
          "partial": "Pipe Buffer Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:PipeBufferLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "PrioIOAvailable",
          "package": "unix",
          "signature": "PrioIOAvailable",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:PrioIOAvailable\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:PrioIOAvailable\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "PrioIOAvailable",
          "package": "unix",
          "partial": "Prio IOAvailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:PrioIOAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "SetOwnerAndGroupIsRestricted",
          "package": "unix",
          "signature": "SetOwnerAndGroupIsRestricted",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:SetOwnerAndGroupIsRestricted\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:SetOwnerAndGroupIsRestricted\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "SetOwnerAndGroupIsRestricted",
          "package": "unix",
          "partial": "Set Owner And Group Is Restricted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:SetOwnerAndGroupIsRestricted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "SymbolicLinkLimit",
          "package": "unix",
          "signature": "SymbolicLinkLimit",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:SymbolicLinkLimit\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:SymbolicLinkLimit\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "SymbolicLinkLimit",
          "package": "unix",
          "partial": "Symbolic Link Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:SymbolicLinkLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "SyncIOAvailable",
          "package": "unix",
          "signature": "SyncIOAvailable",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:SyncIOAvailable\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:SyncIOAvailable\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "SyncIOAvailable",
          "package": "unix",
          "partial": "Sync IOAvailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:SyncIOAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "VDisableChar",
          "package": "unix",
          "signature": "VDisableChar",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:VDisableChar\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:VDisableChar\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "VDisableChar",
          "package": "unix",
          "partial": "VDisable Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:VDisableChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner, group and others have read, write and execute permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "accessModes",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#accessModes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:accessModes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:accessModes\"]"
        },
        "index": {
          "description": "Owner group and others have read write and execute permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "accessModes",
          "package": "unix",
          "partial": "Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:accessModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of last access.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "accessTime",
          "package": "unix",
          "signature": "FileStatus -\u003e EpochTime",
          "source": "src/System-Posix-Files-Common.html#accessTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:accessTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:accessTime\"]"
        },
        "index": {
          "description": "Time of last access",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "accessTime",
          "normalized": "FileStatus-\u003eEpochTime",
          "package": "unix",
          "partial": "Time",
          "signature": "FileStatus-\u003eEpochTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:accessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of last access in sub-second resolution.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "accessTimeHiRes",
          "package": "unix",
          "signature": "FileStatus -\u003e POSIXTime",
          "source": "src/System-Posix-Files-Common.html#accessTimeHiRes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:accessTimeHiRes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:accessTimeHiRes\"]"
        },
        "index": {
          "description": "Time of last access in sub-second resolution",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "accessTimeHiRes",
          "normalized": "FileStatus-\u003ePOSIXTime",
          "package": "unix",
          "partial": "Time Hi Res",
          "signature": "FileStatus-\u003ePOSIXTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:accessTimeHiRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "blockSpecialMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#blockSpecialMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:blockSpecialMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:blockSpecialMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "blockSpecialMode",
          "package": "unix",
          "partial": "Special Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:blockSpecialMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "characterSpecialMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#characterSpecialMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:characterSpecialMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:characterSpecialMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "characterSpecialMode",
          "package": "unix",
          "partial": "Special Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:characterSpecialMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateDevice path mode dev\u003c/code\u003e creates either a regular or a special file\n depending on the value of \u003ccode\u003emode\u003c/code\u003e (and \u003ccode\u003edev\u003c/code\u003e).  \u003ccode\u003emode\u003c/code\u003e will normally be either\n \u003ccode\u003e\u003ca\u003eblockSpecialMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003echaracterSpecialMode\u003c/a\u003e\u003c/code\u003e.  May fail with\n \u003ccode\u003e\u003ca\u003ethrowErrnoPathIfMinus1_\u003c/a\u003e\u003c/code\u003e if a file named \u003ccode\u003ename\u003c/code\u003e already exists or if the\n effective user ID of the current process doesn't have permission to create\n the file.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003emknod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "createDevice",
          "package": "unix",
          "signature": "RawFilePath -\u003e FileMode -\u003e DeviceID -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#createDevice",
          "type": "function"
        },
        "index": {
          "description": "createDevice path mode dev creates either regular or special file depending on the value of mode and dev mode will normally be either blockSpecialMode or characterSpecialMode May fail with throwErrnoPathIfMinus1 if file named name already exists or if the effective user ID of the current process doesn have permission to create the file Note calls mknod",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "createDevice",
          "normalized": "RawFilePath-\u003eFileMode-\u003eDeviceID-\u003eIO()",
          "package": "unix",
          "partial": "Device",
          "signature": "RawFilePath-\u003eFileMode-\u003eDeviceID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:createDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateLink old new\u003c/code\u003e creates a new path, \u003ccode\u003enew\u003c/code\u003e, linked to an existing file,\n \u003ccode\u003eold\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "createLink",
          "package": "unix",
          "signature": "RawFilePath -\u003e RawFilePath -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#createLink",
          "type": "function"
        },
        "index": {
          "description": "createLink old new creates new path new linked to an existing file old Note calls link",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "createLink",
          "normalized": "RawFilePath-\u003eRawFilePath-\u003eIO()",
          "package": "unix",
          "partial": "Link",
          "signature": "RawFilePath-\u003eRawFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:createLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateNamedPipe fifo mode\u003c/code\u003e\n creates a new named pipe, \u003ccode\u003efifo\u003c/code\u003e, with permissions based on\n \u003ccode\u003emode\u003c/code\u003e. May fail with \u003ccode\u003e\u003ca\u003ethrowErrnoPathIfMinus1_\u003c/a\u003e\u003c/code\u003e if a file named \u003ccode\u003ename\u003c/code\u003e\n already exists or if the effective user ID of the current process doesn't\n have permission to create the pipe.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003emkfifo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "createNamedPipe",
          "package": "unix",
          "signature": "RawFilePath -\u003e FileMode -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#createNamedPipe",
          "type": "function"
        },
        "index": {
          "description": "createNamedPipe fifo mode creates new named pipe fifo with permissions based on mode May fail with throwErrnoPathIfMinus1 if file named name already exists or if the effective user ID of the current process doesn have permission to create the pipe Note calls mkfifo",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "createNamedPipe",
          "normalized": "RawFilePath-\u003eFileMode-\u003eIO()",
          "package": "unix",
          "partial": "Named Pipe",
          "signature": "RawFilePath-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:createNamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateSymbolicLink file1 file2\u003c/code\u003e creates a symbolic link named \u003ccode\u003efile2\u003c/code\u003e\n which points to the file \u003ccode\u003efile1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSymbolic links are interpreted at run-time as if the contents of the link\n had been substituted into the path being followed to find a file or directory.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003esymlink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "createSymbolicLink",
          "package": "unix",
          "signature": "RawFilePath -\u003e RawFilePath -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#createSymbolicLink",
          "type": "function"
        },
        "index": {
          "description": "createSymbolicLink file1 file2 creates symbolic link named file2 which points to the file file1 Symbolic links are interpreted at run-time as if the contents of the link had been substituted into the path being followed to find file or directory Note calls symlink",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "createSymbolicLink",
          "normalized": "RawFilePath-\u003eRawFilePath-\u003eIO()",
          "package": "unix",
          "partial": "Symbolic Link",
          "signature": "RawFilePath-\u003eRawFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:createSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the device on which this file resides.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "deviceID",
          "package": "unix",
          "signature": "FileStatus -\u003e DeviceID",
          "source": "src/System-Posix-Files-Common.html#deviceID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:deviceID\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:deviceID\"]"
        },
        "index": {
          "description": "ID of the device on which this file resides",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "deviceID",
          "normalized": "FileStatus-\u003eDeviceID",
          "package": "unix",
          "partial": "ID",
          "signature": "FileStatus-\u003eDeviceID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:deviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "directoryMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#directoryMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:directoryMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:directoryMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "directoryMode",
          "package": "unix",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:directoryMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efileAccess name read write exec\u003c/code\u003e checks if the file (or other file system\n object) \u003ccode\u003ename\u003c/code\u003e can be accessed for reading, writing and/or executing. To\n check a permission set the corresponding argument to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eaccess\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "fileAccess",
          "package": "unix",
          "signature": "RawFilePath -\u003e Bool -\u003e Bool -\u003e Bool -\u003e IO Bool",
          "source": "src/System-Posix-Files-ByteString.html#fileAccess",
          "type": "function"
        },
        "index": {
          "description": "fileAccess name read write exec checks if the file or other file system object name can be accessed for reading writing and or executing To check permission set the corresponding argument to True Note calls access",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "fileAccess",
          "normalized": "RawFilePath-\u003eBool-\u003eBool-\u003eBool-\u003eIO Bool",
          "package": "unix",
          "partial": "Access",
          "signature": "RawFilePath-\u003eBool-\u003eBool-\u003eBool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks for the existence of the file.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eaccess\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "fileExist",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO Bool",
          "source": "src/System-Posix-Files-ByteString.html#fileExist",
          "type": "function"
        },
        "index": {
          "description": "Checks for the existence of the file Note calls access",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "fileExist",
          "normalized": "RawFilePath-\u003eIO Bool",
          "package": "unix",
          "partial": "Exist",
          "signature": "RawFilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of group.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "fileGroup",
          "package": "unix",
          "signature": "FileStatus -\u003e GroupID",
          "source": "src/System-Posix-Files-Common.html#fileGroup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileGroup\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:fileGroup\"]"
        },
        "index": {
          "description": "ID of group",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "fileGroup",
          "normalized": "FileStatus-\u003eGroupID",
          "package": "unix",
          "partial": "Group",
          "signature": "FileStatus-\u003eGroupID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einode number\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "fileID",
          "package": "unix",
          "signature": "FileStatus -\u003e FileID",
          "source": "src/System-Posix-Files-Common.html#fileID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileID\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:fileID\"]"
        },
        "index": {
          "description": "inode number",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "fileID",
          "normalized": "FileStatus-\u003eFileID",
          "package": "unix",
          "partial": "ID",
          "signature": "FileStatus-\u003eFileID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile mode (such as permissions).\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "fileMode",
          "package": "unix",
          "signature": "FileStatus -\u003e FileMode",
          "source": "src/System-Posix-Files-Common.html#fileMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:fileMode\"]"
        },
        "index": {
          "description": "File mode such as permissions",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "fileMode",
          "normalized": "FileStatus-\u003eFileMode",
          "package": "unix",
          "partial": "Mode",
          "signature": "FileStatus-\u003eFileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of owner.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "fileOwner",
          "package": "unix",
          "signature": "FileStatus -\u003e UserID",
          "source": "src/System-Posix-Files-Common.html#fileOwner",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileOwner\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:fileOwner\"]"
        },
        "index": {
          "description": "ID of owner",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "fileOwner",
          "normalized": "FileStatus-\u003eUserID",
          "package": "unix",
          "partial": "Owner",
          "signature": "FileStatus-\u003eUserID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the file in bytes. If this file is a symbolic link the size is\n the length of the pathname it contains.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "fileSize",
          "package": "unix",
          "signature": "FileStatus -\u003e FileOffset",
          "source": "src/System-Posix-Files-Common.html#fileSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileSize\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:fileSize\"]"
        },
        "index": {
          "description": "Size of the file in bytes If this file is symbolic link the size is the length of the pathname it contains",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "fileSize",
          "normalized": "FileStatus-\u003eFileOffset",
          "package": "unix",
          "partial": "Size",
          "signature": "FileStatus-\u003eFileOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "fileTypeModes",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#fileTypeModes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileTypeModes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:fileTypeModes\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "fileTypeModes",
          "package": "unix",
          "partial": "Type Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:fileTypeModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFdPathVar var fd\u003c/code\u003e obtains the dynamic value of the requested\n configurable file limit or option associated with the file or directory\n attached to the open channel \u003ccode\u003efd\u003c/code\u003e. For defined file limits, \u003ccode\u003egetFdPathVar\u003c/code\u003e\n returns the associated value.  For defined file options, the result of\n \u003ccode\u003egetFdPathVar\u003c/code\u003e is undefined, but not failure.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efpathconf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "getFdPathVar",
          "package": "unix",
          "signature": "Fd -\u003e PathVar -\u003e IO Limit",
          "source": "src/System-Posix-Files-Common.html#getFdPathVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:getFdPathVar\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:getFdPathVar\"]"
        },
        "index": {
          "description": "getFdPathVar var fd obtains the dynamic value of the requested configurable file limit or option associated with the file or directory attached to the open channel fd For defined file limits getFdPathVar returns the associated value For defined file options the result of getFdPathVar is undefined but not failure Note calls fpathconf",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "getFdPathVar",
          "normalized": "Fd-\u003ePathVar-\u003eIO Limit",
          "package": "unix",
          "partial": "Fd Path Var",
          "signature": "Fd-\u003ePathVar-\u003eIO Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:getFdPathVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFdStatus fd\u003c/code\u003e acts as \u003ccode\u003egetFileStatus\u003c/code\u003e but uses a file descriptor \u003ccode\u003efd\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efstat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "getFdStatus",
          "package": "unix",
          "signature": "Fd -\u003e IO FileStatus",
          "source": "src/System-Posix-Files-Common.html#getFdStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:getFdStatus\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:getFdStatus\"]"
        },
        "index": {
          "description": "getFdStatus fd acts as getFileStatus but uses file descriptor fd Note calls fstat",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "getFdStatus",
          "normalized": "Fd-\u003eIO FileStatus",
          "package": "unix",
          "partial": "Fd Status",
          "signature": "Fd-\u003eIO FileStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:getFdStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFileStatus path\u003c/code\u003e calls gets the \u003ccode\u003eFileStatus\u003c/code\u003e information (user ID,\n size, access times, etc.) for the file \u003ccode\u003epath\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003estat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "getFileStatus",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO FileStatus",
          "source": "src/System-Posix-Files-ByteString.html#getFileStatus",
          "type": "function"
        },
        "index": {
          "description": "getFileStatus path calls gets the FileStatus information user ID size access times etc for the file path Note calls stat",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "getFileStatus",
          "normalized": "RawFilePath-\u003eIO FileStatus",
          "package": "unix",
          "partial": "File Status",
          "signature": "RawFilePath-\u003eIO FileStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:getFileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetPathVar var path\u003c/code\u003e obtains the dynamic value of the requested\n configurable file limit or option associated with file or directory \u003ccode\u003epath\u003c/code\u003e.\n For defined file limits, \u003ccode\u003egetPathVar\u003c/code\u003e returns the associated\n value.  For defined file options, the result of \u003ccode\u003egetPathVar\u003c/code\u003e\n is undefined, but not failure.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003epathconf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "getPathVar",
          "package": "unix",
          "signature": "RawFilePath -\u003e PathVar -\u003e IO Limit",
          "source": "src/System-Posix-Files-ByteString.html#getPathVar",
          "type": "function"
        },
        "index": {
          "description": "getPathVar var path obtains the dynamic value of the requested configurable file limit or option associated with file or directory path For defined file limits getPathVar returns the associated value For defined file options the result of getPathVar is undefined but not failure Note calls pathconf",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "getPathVar",
          "normalized": "RawFilePath-\u003ePathVar-\u003eIO Limit",
          "package": "unix",
          "partial": "Path Var",
          "signature": "RawFilePath-\u003ePathVar-\u003eIO Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:getPathVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003egetFileStatus\u003c/a\u003e\u003c/code\u003e except when the \u003ccode\u003e\u003ca\u003eRawFilePath\u003c/a\u003e\u003c/code\u003e refers to a symbolic\n link. In that case the \u003ccode\u003eFileStatus\u003c/code\u003e information of the symbolic link itself\n is returned instead of that of the file it points to.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elstat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "getSymbolicLinkStatus",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO FileStatus",
          "source": "src/System-Posix-Files-ByteString.html#getSymbolicLinkStatus",
          "type": "function"
        },
        "index": {
          "description": "Acts as getFileStatus except when the RawFilePath refers to symbolic link In that case the FileStatus information of the symbolic link itself is returned instead of that of the file it points to Note calls lstat",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "getSymbolicLinkStatus",
          "normalized": "RawFilePath-\u003eIO FileStatus",
          "package": "unix",
          "partial": "Symbolic Link Status",
          "signature": "RawFilePath-\u003eIO FileStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:getSymbolicLinkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup has execute permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "groupExecuteMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#groupExecuteMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:groupExecuteMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:groupExecuteMode\"]"
        },
        "index": {
          "description": "Group has execute permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "groupExecuteMode",
          "package": "unix",
          "partial": "Execute Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:groupExecuteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup has read, write and execute permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "groupModes",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#groupModes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:groupModes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:groupModes\"]"
        },
        "index": {
          "description": "Group has read write and execute permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "groupModes",
          "package": "unix",
          "partial": "Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:groupModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup has read permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "groupReadMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#groupReadMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:groupReadMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:groupReadMode\"]"
        },
        "index": {
          "description": "Group has read permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "groupReadMode",
          "package": "unix",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:groupReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup has write permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "groupWriteMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#groupWriteMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:groupWriteMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:groupWriteMode\"]"
        },
        "index": {
          "description": "Group has write permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "groupWriteMode",
          "package": "unix",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:groupWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two file modes into one that only contains modes that appear in\n both.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "intersectFileModes",
          "package": "unix",
          "signature": "FileMode -\u003e FileMode -\u003e FileMode",
          "source": "src/System-Posix-Files-Common.html#intersectFileModes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:intersectFileModes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:intersectFileModes\"]"
        },
        "index": {
          "description": "Combines two file modes into one that only contains modes that appear in both",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "intersectFileModes",
          "normalized": "FileMode-\u003eFileMode-\u003eFileMode",
          "package": "unix",
          "partial": "File Modes",
          "signature": "FileMode-\u003eFileMode-\u003eFileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:intersectFileModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a block device.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "isBlockDevice",
          "package": "unix",
          "signature": "FileStatus -\u003e Bool",
          "source": "src/System-Posix-Files-Common.html#isBlockDevice",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isBlockDevice\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:isBlockDevice\"]"
        },
        "index": {
          "description": "Checks if this file is block device",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "isBlockDevice",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix",
          "partial": "Block Device",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isBlockDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a character device.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "isCharacterDevice",
          "package": "unix",
          "signature": "FileStatus -\u003e Bool",
          "source": "src/System-Posix-Files-Common.html#isCharacterDevice",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isCharacterDevice\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:isCharacterDevice\"]"
        },
        "index": {
          "description": "Checks if this file is character device",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "isCharacterDevice",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix",
          "partial": "Character Device",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isCharacterDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a directory device.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "isDirectory",
          "package": "unix",
          "signature": "FileStatus -\u003e Bool",
          "source": "src/System-Posix-Files-Common.html#isDirectory",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isDirectory\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:isDirectory\"]"
        },
        "index": {
          "description": "Checks if this file is directory device",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "isDirectory",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix",
          "partial": "Directory",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a named pipe device.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "isNamedPipe",
          "package": "unix",
          "signature": "FileStatus -\u003e Bool",
          "source": "src/System-Posix-Files-Common.html#isNamedPipe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isNamedPipe\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:isNamedPipe\"]"
        },
        "index": {
          "description": "Checks if this file is named pipe device",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "isNamedPipe",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix",
          "partial": "Named Pipe",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isNamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a regular file device.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "isRegularFile",
          "package": "unix",
          "signature": "FileStatus -\u003e Bool",
          "source": "src/System-Posix-Files-Common.html#isRegularFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isRegularFile\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:isRegularFile\"]"
        },
        "index": {
          "description": "Checks if this file is regular file device",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "isRegularFile",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix",
          "partial": "Regular File",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isRegularFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a socket device.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "isSocket",
          "package": "unix",
          "signature": "FileStatus -\u003e Bool",
          "source": "src/System-Posix-Files-Common.html#isSocket",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isSocket\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:isSocket\"]"
        },
        "index": {
          "description": "Checks if this file is socket device",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "isSocket",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix",
          "partial": "Socket",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a symbolic link device.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "isSymbolicLink",
          "package": "unix",
          "signature": "FileStatus -\u003e Bool",
          "source": "src/System-Posix-Files-Common.html#isSymbolicLink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isSymbolicLink\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:isSymbolicLink\"]"
        },
        "index": {
          "description": "Checks if this file is symbolic link device",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "isSymbolicLink",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix",
          "partial": "Symbolic Link",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:isSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of hard links to this file.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "linkCount",
          "package": "unix",
          "signature": "FileStatus -\u003e LinkCount",
          "source": "src/System-Posix-Files-Common.html#linkCount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:linkCount\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:linkCount\"]"
        },
        "index": {
          "description": "Number of hard links to this file",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "linkCount",
          "normalized": "FileStatus-\u003eLinkCount",
          "package": "unix",
          "partial": "Count",
          "signature": "FileStatus-\u003eLinkCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:linkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of last modification.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "modificationTime",
          "package": "unix",
          "signature": "FileStatus -\u003e EpochTime",
          "source": "src/System-Posix-Files-Common.html#modificationTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:modificationTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:modificationTime\"]"
        },
        "index": {
          "description": "Time of last modification",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "modificationTime",
          "normalized": "FileStatus-\u003eEpochTime",
          "package": "unix",
          "partial": "Time",
          "signature": "FileStatus-\u003eEpochTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:modificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of last modification in sub-second resolution.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "modificationTimeHiRes",
          "package": "unix",
          "signature": "FileStatus -\u003e POSIXTime",
          "source": "src/System-Posix-Files-Common.html#modificationTimeHiRes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:modificationTimeHiRes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:modificationTimeHiRes\"]"
        },
        "index": {
          "description": "Time of last modification in sub-second resolution",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "modificationTimeHiRes",
          "normalized": "FileStatus-\u003ePOSIXTime",
          "package": "unix",
          "partial": "Time Hi Res",
          "signature": "FileStatus-\u003ePOSIXTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:modificationTimeHiRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "namedPipeMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#namedPipeMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:namedPipeMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:namedPipeMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "namedPipeMode",
          "package": "unix",
          "partial": "Pipe Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:namedPipeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo permissions.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "nullFileMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#nullFileMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:nullFileMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:nullFileMode\"]"
        },
        "index": {
          "description": "No permissions",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "nullFileMode",
          "package": "unix",
          "partial": "File Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:nullFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOthers have execute permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "otherExecuteMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#otherExecuteMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:otherExecuteMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:otherExecuteMode\"]"
        },
        "index": {
          "description": "Others have execute permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "otherExecuteMode",
          "package": "unix",
          "partial": "Execute Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:otherExecuteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOthers have read, write and execute permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "otherModes",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#otherModes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:otherModes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:otherModes\"]"
        },
        "index": {
          "description": "Others have read write and execute permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "otherModes",
          "package": "unix",
          "partial": "Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:otherModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOthers have read permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "otherReadMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#otherReadMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:otherReadMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:otherReadMode\"]"
        },
        "index": {
          "description": "Others have read permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "otherReadMode",
          "package": "unix",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:otherReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOthers have write permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "otherWriteMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#otherWriteMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:otherWriteMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:otherWriteMode\"]"
        },
        "index": {
          "description": "Others have write permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "otherWriteMode",
          "package": "unix",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:otherWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner has execute permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "ownerExecuteMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#ownerExecuteMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:ownerExecuteMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:ownerExecuteMode\"]"
        },
        "index": {
          "description": "Owner has execute permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "ownerExecuteMode",
          "package": "unix",
          "partial": "Execute Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:ownerExecuteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner has read, write and execute permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "ownerModes",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#ownerModes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:ownerModes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:ownerModes\"]"
        },
        "index": {
          "description": "Owner has read write and execute permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "ownerModes",
          "package": "unix",
          "partial": "Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:ownerModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner has read permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "ownerReadMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#ownerReadMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:ownerReadMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:ownerReadMode\"]"
        },
        "index": {
          "description": "Owner has read permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "ownerReadMode",
          "package": "unix",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:ownerReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner has write permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "ownerWriteMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#ownerWriteMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:ownerWriteMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:ownerWriteMode\"]"
        },
        "index": {
          "description": "Owner has write permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "ownerWriteMode",
          "package": "unix",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:ownerWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the \u003ccode\u003eRawFilePath\u003c/code\u003e pointed to by the symbolic link and returns it.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003ereadlink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "readSymbolicLink",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO RawFilePath",
          "source": "src/System-Posix-Files-ByteString.html#readSymbolicLink",
          "type": "function"
        },
        "index": {
          "description": "Reads the RawFilePath pointed to by the symbolic link and returns it Note calls readlink",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "readSymbolicLink",
          "normalized": "RawFilePath-\u003eIO RawFilePath",
          "package": "unix",
          "partial": "Symbolic Link",
          "signature": "RawFilePath-\u003eIO RawFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:readSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "regularFileMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#regularFileMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:regularFileMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:regularFileMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "regularFileMode",
          "package": "unix",
          "partial": "File Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:regularFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eremoveLink path\u003c/code\u003e removes the link named \u003ccode\u003epath\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eunlink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "removeLink",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#removeLink",
          "type": "function"
        },
        "index": {
          "description": "removeLink path removes the link named path Note calls unlink",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "removeLink",
          "normalized": "RawFilePath-\u003eIO()",
          "package": "unix",
          "partial": "Link",
          "signature": "RawFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:removeLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erename old new\u003c/code\u003e renames a file or directory from \u003ccode\u003eold\u003c/code\u003e to \u003ccode\u003enew\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003erename\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "rename",
          "package": "unix",
          "signature": "RawFilePath -\u003e RawFilePath -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#rename",
          "type": "function"
        },
        "index": {
          "description": "rename old new renames file or directory from old to new Note calls rename",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "rename",
          "normalized": "RawFilePath-\u003eRawFilePath-\u003eIO()",
          "package": "unix",
          "signature": "RawFilePath-\u003eRawFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFdMode fd mode\u003c/code\u003e acts like \u003ccode\u003esetFileMode\u003c/code\u003e but uses a file descriptor\n \u003ccode\u003efd\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efchmod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "setFdMode",
          "package": "unix",
          "signature": "Fd -\u003e FileMode -\u003e IO ()",
          "source": "src/System-Posix-Files-Common.html#setFdMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFdMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setFdMode\"]"
        },
        "index": {
          "description": "setFdMode fd mode acts like setFileMode but uses file descriptor fd instead of FilePath Note calls fchmod",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setFdMode",
          "normalized": "Fd-\u003eFileMode-\u003eIO()",
          "package": "unix",
          "partial": "Fd Mode",
          "signature": "Fd-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFdMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003esetOwnerAndGroup\u003c/code\u003e but uses a file descriptor instead of a\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efchown\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "setFdOwnerAndGroup",
          "package": "unix",
          "signature": "Fd -\u003e UserID -\u003e GroupID -\u003e IO ()",
          "source": "src/System-Posix-Files-Common.html#setFdOwnerAndGroup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFdOwnerAndGroup\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setFdOwnerAndGroup\"]"
        },
        "index": {
          "description": "Acts as setOwnerAndGroup but uses file descriptor instead of FilePath Note calls fchown",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setFdOwnerAndGroup",
          "normalized": "Fd-\u003eUserID-\u003eGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Fd Owner And Group",
          "signature": "Fd-\u003eUserID-\u003eGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFdOwnerAndGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003esetFileSize\u003c/code\u003e but uses a file descriptor instead of a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eftruncate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "setFdSize",
          "package": "unix",
          "signature": "Fd -\u003e FileOffset -\u003e IO ()",
          "source": "src/System-Posix-Files-Common.html#setFdSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFdSize\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setFdSize\"]"
        },
        "index": {
          "description": "Acts as setFileSize but uses file descriptor instead of FilePath Note calls ftruncate",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setFdSize",
          "normalized": "Fd-\u003eFileOffset-\u003eIO()",
          "package": "unix",
          "partial": "Fd Size",
          "signature": "Fd-\u003eFileOffset-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFdSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003esetFileTimesHiRes\u003c/code\u003e but uses a file descriptor instead of a path.\n This operation is not supported on all platforms. On these platforms,\n this function will raise an exception.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efutimens\u003c/code\u003e or \u003ccode\u003efutimes\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "setFdTimesHiRes",
          "package": "unix",
          "signature": "Fd -\u003e POSIXTime -\u003e POSIXTime -\u003e IO ()",
          "source": "src/System-Posix-Files-Common.html#setFdTimesHiRes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFdTimesHiRes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setFdTimesHiRes\"]"
        },
        "index": {
          "description": "Like setFileTimesHiRes but uses file descriptor instead of path This operation is not supported on all platforms On these platforms this function will raise an exception Note calls futimens or futimes Since",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setFdTimesHiRes",
          "normalized": "Fd-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "package": "unix",
          "partial": "Fd Times Hi Res",
          "signature": "Fd-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFdTimesHiRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFileCreationMask mode\u003c/code\u003e sets the file mode creation mask to \u003ccode\u003emode\u003c/code\u003e.\n Modes set by this operation are subtracted from files and directories upon\n creation. The previous file creation mask is returned.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eumask\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "setFileCreationMask",
          "package": "unix",
          "signature": "FileMode -\u003e IO FileMode",
          "source": "src/System-Posix-Files-Common.html#setFileCreationMask",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFileCreationMask\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setFileCreationMask\"]"
        },
        "index": {
          "description": "setFileCreationMask mode sets the file mode creation mask to mode Modes set by this operation are subtracted from files and directories upon creation The previous file creation mask is returned Note calls umask",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setFileCreationMask",
          "normalized": "FileMode-\u003eIO FileMode",
          "package": "unix",
          "partial": "File Creation Mask",
          "signature": "FileMode-\u003eIO FileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFileCreationMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFileMode path mode\u003c/code\u003e changes permission of the file given by \u003ccode\u003epath\u003c/code\u003e\n to \u003ccode\u003emode\u003c/code\u003e. This operation may fail with \u003ccode\u003e\u003ca\u003ethrowErrnoPathIfMinus1_\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003epath\u003c/code\u003e\n doesn't exist or if the effective user ID of the current process is not that\n of the file's owner.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003echmod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "setFileMode",
          "package": "unix",
          "signature": "RawFilePath -\u003e FileMode -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#setFileMode",
          "type": "function"
        },
        "index": {
          "description": "setFileMode path mode changes permission of the file given by path to mode This operation may fail with throwErrnoPathIfMinus1 if path doesn exist or if the effective user ID of the current process is not that of the file owner Note calls chmod",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setFileMode",
          "normalized": "RawFilePath-\u003eFileMode-\u003eIO()",
          "package": "unix",
          "partial": "File Mode",
          "signature": "RawFilePath-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncates the file down to the specified length. If the file was larger\n than the given length before this operation was performed the extra is lost.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003etruncate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "setFileSize",
          "package": "unix",
          "signature": "RawFilePath -\u003e FileOffset -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#setFileSize",
          "type": "function"
        },
        "index": {
          "description": "Truncates the file down to the specified length If the file was larger than the given length before this operation was performed the extra is lost Note calls truncate",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setFileSize",
          "normalized": "RawFilePath-\u003eFileOffset-\u003eIO()",
          "package": "unix",
          "partial": "File Size",
          "signature": "RawFilePath-\u003eFileOffset-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFileTimes path atime mtime\u003c/code\u003e sets the access and modification times\n associated with file \u003ccode\u003epath\u003c/code\u003e to \u003ccode\u003eatime\u003c/code\u003e and \u003ccode\u003emtime\u003c/code\u003e, respectively.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "setFileTimes",
          "package": "unix",
          "signature": "RawFilePath -\u003e EpochTime -\u003e EpochTime -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#setFileTimes",
          "type": "function"
        },
        "index": {
          "description": "setFileTimes path atime mtime sets the access and modification times associated with file path to atime and mtime respectively Note calls utime",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setFileTimes",
          "normalized": "RawFilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO()",
          "package": "unix",
          "partial": "File Times",
          "signature": "RawFilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFileTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetFileTimes\u003c/a\u003e\u003c/code\u003e but timestamps can have sub-second resolution.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutimensat\u003c/code\u003e or \u003ccode\u003eutimes\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "setFileTimesHiRes",
          "package": "unix",
          "signature": "RawFilePath -\u003e POSIXTime -\u003e POSIXTime -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#setFileTimesHiRes",
          "type": "function"
        },
        "index": {
          "description": "Like setFileTimes but timestamps can have sub-second resolution Note calls utimensat or utimes",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setFileTimesHiRes",
          "normalized": "RawFilePath-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "package": "unix",
          "partial": "File Times Hi Res",
          "signature": "RawFilePath-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setFileTimesHiRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet group ID on execution.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "setGroupIDMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#setGroupIDMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setGroupIDMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setGroupIDMode\"]"
        },
        "index": {
          "description": "Set group ID on execution",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setGroupIDMode",
          "package": "unix",
          "partial": "Group IDMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setGroupIDMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetOwnerAndGroup path uid gid\u003c/code\u003e changes the owner and group of \u003ccode\u003epath\u003c/code\u003e to\n \u003ccode\u003euid\u003c/code\u003e and \u003ccode\u003egid\u003c/code\u003e, respectively.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003euid\u003c/code\u003e or \u003ccode\u003egid\u003c/code\u003e is specified as -1, then that ID is not changed.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003echown\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "setOwnerAndGroup",
          "package": "unix",
          "signature": "RawFilePath -\u003e UserID -\u003e GroupID -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#setOwnerAndGroup",
          "type": "function"
        },
        "index": {
          "description": "setOwnerAndGroup path uid gid changes the owner and group of path to uid and gid respectively If uid or gid is specified as then that ID is not changed Note calls chown",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setOwnerAndGroup",
          "normalized": "RawFilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Owner And Group",
          "signature": "RawFilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setOwnerAndGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003esetOwnerAndGroup\u003c/a\u003e\u003c/code\u003e but does not follow symlinks (and thus\n changes permissions on the link itself).\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elchown\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "setSymbolicLinkOwnerAndGroup",
          "package": "unix",
          "signature": "RawFilePath -\u003e UserID -\u003e GroupID -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#setSymbolicLinkOwnerAndGroup",
          "type": "function"
        },
        "index": {
          "description": "Acts as setOwnerAndGroup but does not follow symlinks and thus changes permissions on the link itself Note calls lchown",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setSymbolicLinkOwnerAndGroup",
          "normalized": "RawFilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Symbolic Link Owner And Group",
          "signature": "RawFilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setSymbolicLinkOwnerAndGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetFileTimesHiRes\u003c/a\u003e\u003c/code\u003e but does not follow symbolic links.\n This operation is not supported on all platforms. On these platforms,\n this function will raise an exception.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutimensat\u003c/code\u003e or \u003ccode\u003elutimes\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "setSymbolicLinkTimesHiRes",
          "package": "unix",
          "signature": "RawFilePath -\u003e POSIXTime -\u003e POSIXTime -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#setSymbolicLinkTimesHiRes",
          "type": "function"
        },
        "index": {
          "description": "Like setFileTimesHiRes but does not follow symbolic links This operation is not supported on all platforms On these platforms this function will raise an exception Note calls utimensat or lutimes",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setSymbolicLinkTimesHiRes",
          "normalized": "RawFilePath-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "package": "unix",
          "partial": "Symbolic Link Times Hi Res",
          "signature": "RawFilePath-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setSymbolicLinkTimesHiRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet user ID on execution.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "setUserIDMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#setUserIDMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setUserIDMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setUserIDMode\"]"
        },
        "index": {
          "description": "Set user ID on execution",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "setUserIDMode",
          "package": "unix",
          "partial": "User IDMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:setUserIDMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "socketMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#socketMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:socketMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:socketMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "socketMode",
          "package": "unix",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:socketMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the device that this file represents.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "specialDeviceID",
          "package": "unix",
          "signature": "FileStatus -\u003e DeviceID",
          "source": "src/System-Posix-Files-Common.html#specialDeviceID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:specialDeviceID\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:specialDeviceID\"]"
        },
        "index": {
          "description": "Describes the device that this file represents",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "specialDeviceID",
          "normalized": "FileStatus-\u003eDeviceID",
          "package": "unix",
          "partial": "Device ID",
          "signature": "FileStatus-\u003eDeviceID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:specialDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of last status change (i.e. owner, group, link count, mode, etc.).\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "statusChangeTime",
          "package": "unix",
          "signature": "FileStatus -\u003e EpochTime",
          "source": "src/System-Posix-Files-Common.html#statusChangeTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:statusChangeTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:statusChangeTime\"]"
        },
        "index": {
          "description": "Time of last status change i.e owner group link count mode etc",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "statusChangeTime",
          "normalized": "FileStatus-\u003eEpochTime",
          "package": "unix",
          "partial": "Change Time",
          "signature": "FileStatus-\u003eEpochTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:statusChangeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of last status change (i.e. owner, group, link count, mode, etc.) in sub-second resolution.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "statusChangeTimeHiRes",
          "package": "unix",
          "signature": "FileStatus -\u003e POSIXTime",
          "source": "src/System-Posix-Files-Common.html#statusChangeTimeHiRes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:statusChangeTimeHiRes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:statusChangeTimeHiRes\"]"
        },
        "index": {
          "description": "Time of last status change i.e owner group link count mode etc in sub-second resolution",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "statusChangeTimeHiRes",
          "normalized": "FileStatus-\u003ePOSIXTime",
          "package": "unix",
          "partial": "Change Time Hi Res",
          "signature": "FileStatus-\u003ePOSIXTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:statusChangeTimeHiRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner, group and others have read and write permission.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "stdFileMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#stdFileMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:stdFileMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:stdFileMode\"]"
        },
        "index": {
          "description": "Owner group and others have read and write permission",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "stdFileMode",
          "package": "unix",
          "partial": "File Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:stdFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "symbolicLinkMode",
          "package": "unix",
          "signature": "FileMode",
          "source": "src/System-Posix-Files-Common.html#symbolicLinkMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:symbolicLinkMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:symbolicLinkMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "symbolicLinkMode",
          "package": "unix",
          "partial": "Link Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:symbolicLinkMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003etouchFile\u003c/code\u003e but uses a file descriptor instead of a path.\n This operation is not supported on all platforms. On these platforms,\n this function will raise an exception.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efutimes\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "touchFd",
          "package": "unix",
          "signature": "Fd -\u003e IO ()",
          "source": "src/System-Posix-Files-Common.html#touchFd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:touchFd\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:touchFd\"]"
        },
        "index": {
          "description": "Like touchFile but uses file descriptor instead of path This operation is not supported on all platforms On these platforms this function will raise an exception Note calls futimes Since",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "touchFd",
          "normalized": "Fd-\u003eIO()",
          "package": "unix",
          "partial": "Fd",
          "signature": "Fd-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:touchFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etouchFile path\u003c/code\u003e sets the access and modification times associated with\n file \u003ccode\u003epath\u003c/code\u003e to the current time.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "touchFile",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#touchFile",
          "type": "function"
        },
        "index": {
          "description": "touchFile path sets the access and modification times associated with file path to the current time Note calls utime",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "touchFile",
          "normalized": "RawFilePath-\u003eIO()",
          "package": "unix",
          "partial": "File",
          "signature": "RawFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:touchFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etouchFile\u003c/a\u003e\u003c/code\u003e but does not follow symbolic links.\n This operation is not supported on all platforms. On these platforms,\n this function will raise an exception.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elutimes\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files.ByteString",
          "name": "touchSymbolicLink",
          "package": "unix",
          "signature": "RawFilePath -\u003e IO ()",
          "source": "src/System-Posix-Files-ByteString.html#touchSymbolicLink",
          "type": "function"
        },
        "index": {
          "description": "Like touchFile but does not follow symbolic links This operation is not supported on all platforms On these platforms this function will raise an exception Note calls lutimes",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "touchSymbolicLink",
          "normalized": "RawFilePath-\u003eIO()",
          "package": "unix",
          "partial": "Symbolic Link",
          "signature": "RawFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:touchSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines the two file modes into one that contains modes that appear in\n either.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Files.ByteString\",\"System.Posix.Files\"]",
          "name": "unionFileModes",
          "package": "unix",
          "signature": "FileMode -\u003e FileMode -\u003e FileMode",
          "source": "src/System-Posix-Files-Common.html#unionFileModes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:unionFileModes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:unionFileModes\"]"
        },
        "index": {
          "description": "Combines the two file modes into one that contains modes that appear in either",
          "hierarchy": "System Posix Files ByteString",
          "module": "System.Posix.Files.ByteString",
          "name": "unionFileModes",
          "normalized": "FileMode-\u003eFileMode-\u003eFileMode",
          "package": "unix",
          "partial": "File Modes",
          "signature": "FileMode-\u003eFileMode-\u003eFileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files-ByteString.html#v:unionFileModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions defined by the POSIX standards for manipulating and querying the\n file system. Names of underlying POSIX functions are indicated whenever\n possible. A more complete documentation of the POSIX functions together\n with a more detailed description of different error conditions are usually\n available in the system's manual pages or from\n \u003ca\u003ehttp://www.unix.org/version3/online.html\u003c/a\u003e (free registration required).\n\u003c/p\u003e\u003cp\u003eWhen a function that calls an underlying POSIX function fails, the errno\n code is converted to an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eerrnoToIOError\u003c/a\u003e\u003c/code\u003e.\n For a list of which errno codes may be generated, consult the POSIX\n documentation for the underlying function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Files",
          "name": "Files",
          "package": "unix",
          "source": "src/System-Posix-Files.html",
          "type": "module"
        },
        "index": {
          "description": "Functions defined by the POSIX standards for manipulating and querying the file system Names of underlying POSIX functions are indicated whenever possible more complete documentation of the POSIX functions together with more detailed description of different error conditions are usually available in the system manual pages or from http www.unix.org version3 online.html free registration required When function that calls an underlying POSIX function fails the errno code is converted to an IOError using errnoToIOError For list of which errno codes may be generated consult the POSIX documentation for the underlying function",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "Files",
          "package": "unix",
          "partial": "Files",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePOSIX defines operations to get information, such as owner, permissions,\n size and access times, about a file. This information is represented by the\n \u003ccode\u003e\u003ca\u003eFileStatus\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eNote: see \u003ccode\u003echmod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "FileStatus",
          "package": "unix",
          "source": "src/System-Posix-Files-Common.html#FileStatus",
          "type": "data"
        },
        "index": {
          "description": "POSIX defines operations to get information such as owner permissions size and access times about file This information is represented by the FileStatus type Note see chmod",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "FileStatus",
          "package": "unix",
          "partial": "File Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#t:FileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Files",
          "name": "PathVar",
          "package": "unix",
          "source": "src/System-Posix-Files-Common.html#PathVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "PathVar",
          "package": "unix",
          "partial": "Path Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#t:PathVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateDevice path mode dev\u003c/code\u003e creates either a regular or a special file\n depending on the value of \u003ccode\u003emode\u003c/code\u003e (and \u003ccode\u003edev\u003c/code\u003e).  \u003ccode\u003emode\u003c/code\u003e will normally be either\n \u003ccode\u003e\u003ca\u003eblockSpecialMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003echaracterSpecialMode\u003c/a\u003e\u003c/code\u003e.  May fail with\n \u003ccode\u003e\u003ca\u003ethrowErrnoPathIfMinus1_\u003c/a\u003e\u003c/code\u003e if a file named \u003ccode\u003ename\u003c/code\u003e already exists or if the\n effective user ID of the current process doesn't have permission to create\n the file.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003emknod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "createDevice",
          "package": "unix",
          "signature": "FilePath -\u003e FileMode -\u003e DeviceID -\u003e IO ()",
          "source": "src/System-Posix-Files.html#createDevice",
          "type": "function"
        },
        "index": {
          "description": "createDevice path mode dev creates either regular or special file depending on the value of mode and dev mode will normally be either blockSpecialMode or characterSpecialMode May fail with throwErrnoPathIfMinus1 if file named name already exists or if the effective user ID of the current process doesn have permission to create the file Note calls mknod",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "createDevice",
          "normalized": "FilePath-\u003eFileMode-\u003eDeviceID-\u003eIO()",
          "package": "unix",
          "partial": "Device",
          "signature": "FilePath-\u003eFileMode-\u003eDeviceID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:createDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateLink old new\u003c/code\u003e creates a new path, \u003ccode\u003enew\u003c/code\u003e, linked to an existing file,\n \u003ccode\u003eold\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "createLink",
          "package": "unix",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-Posix-Files.html#createLink",
          "type": "function"
        },
        "index": {
          "description": "createLink old new creates new path new linked to an existing file old Note calls link",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "createLink",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "unix",
          "partial": "Link",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:createLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateNamedPipe fifo mode\u003c/code\u003e\n creates a new named pipe, \u003ccode\u003efifo\u003c/code\u003e, with permissions based on\n \u003ccode\u003emode\u003c/code\u003e. May fail with \u003ccode\u003e\u003ca\u003ethrowErrnoPathIfMinus1_\u003c/a\u003e\u003c/code\u003e if a file named \u003ccode\u003ename\u003c/code\u003e\n already exists or if the effective user ID of the current process doesn't\n have permission to create the pipe.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003emkfifo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "createNamedPipe",
          "package": "unix",
          "signature": "FilePath -\u003e FileMode -\u003e IO ()",
          "source": "src/System-Posix-Files.html#createNamedPipe",
          "type": "function"
        },
        "index": {
          "description": "createNamedPipe fifo mode creates new named pipe fifo with permissions based on mode May fail with throwErrnoPathIfMinus1 if file named name already exists or if the effective user ID of the current process doesn have permission to create the pipe Note calls mkfifo",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "createNamedPipe",
          "normalized": "FilePath-\u003eFileMode-\u003eIO()",
          "package": "unix",
          "partial": "Named Pipe",
          "signature": "FilePath-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:createNamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateSymbolicLink file1 file2\u003c/code\u003e creates a symbolic link named \u003ccode\u003efile2\u003c/code\u003e\n which points to the file \u003ccode\u003efile1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSymbolic links are interpreted at run-time as if the contents of the link\n had been substituted into the path being followed to find a file or directory.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003esymlink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "createSymbolicLink",
          "package": "unix",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-Posix-Files.html#createSymbolicLink",
          "type": "function"
        },
        "index": {
          "description": "createSymbolicLink file1 file2 creates symbolic link named file2 which points to the file file1 Symbolic links are interpreted at run-time as if the contents of the link had been substituted into the path being followed to find file or directory Note calls symlink",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "createSymbolicLink",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "unix",
          "partial": "Symbolic Link",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:createSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efileAccess name read write exec\u003c/code\u003e checks if the file (or other file system\n object) \u003ccode\u003ename\u003c/code\u003e can be accessed for reading, writing and/or executing. To\n check a permission set the corresponding argument to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eaccess\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "fileAccess",
          "package": "unix",
          "signature": "FilePath -\u003e Bool -\u003e Bool -\u003e Bool -\u003e IO Bool",
          "source": "src/System-Posix-Files.html#fileAccess",
          "type": "function"
        },
        "index": {
          "description": "fileAccess name read write exec checks if the file or other file system object name can be accessed for reading writing and or executing To check permission set the corresponding argument to True Note calls access",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "fileAccess",
          "normalized": "FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eIO Bool",
          "package": "unix",
          "partial": "Access",
          "signature": "FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:fileAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks for the existence of the file.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eaccess\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "fileExist",
          "package": "unix",
          "signature": "FilePath -\u003e IO Bool",
          "source": "src/System-Posix-Files.html#fileExist",
          "type": "function"
        },
        "index": {
          "description": "Checks for the existence of the file Note calls access",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "fileExist",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "unix",
          "partial": "Exist",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:fileExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFileStatus path\u003c/code\u003e calls gets the \u003ccode\u003eFileStatus\u003c/code\u003e information (user ID,\n size, access times, etc.) for the file \u003ccode\u003epath\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003estat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "getFileStatus",
          "package": "unix",
          "signature": "FilePath -\u003e IO FileStatus",
          "source": "src/System-Posix-Files.html#getFileStatus",
          "type": "function"
        },
        "index": {
          "description": "getFileStatus path calls gets the FileStatus information user ID size access times etc for the file path Note calls stat",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "getFileStatus",
          "normalized": "FilePath-\u003eIO FileStatus",
          "package": "unix",
          "partial": "File Status",
          "signature": "FilePath-\u003eIO FileStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:getFileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetPathVar var path\u003c/code\u003e obtains the dynamic value of the requested\n configurable file limit or option associated with file or directory \u003ccode\u003epath\u003c/code\u003e.\n For defined file limits, \u003ccode\u003egetPathVar\u003c/code\u003e returns the associated\n value.  For defined file options, the result of \u003ccode\u003egetPathVar\u003c/code\u003e\n is undefined, but not failure.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003epathconf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "getPathVar",
          "package": "unix",
          "signature": "FilePath -\u003e PathVar -\u003e IO Limit",
          "source": "src/System-Posix-Files.html#getPathVar",
          "type": "function"
        },
        "index": {
          "description": "getPathVar var path obtains the dynamic value of the requested configurable file limit or option associated with file or directory path For defined file limits getPathVar returns the associated value For defined file options the result of getPathVar is undefined but not failure Note calls pathconf",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "getPathVar",
          "normalized": "FilePath-\u003ePathVar-\u003eIO Limit",
          "package": "unix",
          "partial": "Path Var",
          "signature": "FilePath-\u003ePathVar-\u003eIO Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:getPathVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003egetFileStatus\u003c/a\u003e\u003c/code\u003e except when the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e refers to a symbolic\n link. In that case the \u003ccode\u003eFileStatus\u003c/code\u003e information of the symbolic link itself\n is returned instead of that of the file it points to.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elstat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "getSymbolicLinkStatus",
          "package": "unix",
          "signature": "FilePath -\u003e IO FileStatus",
          "source": "src/System-Posix-Files.html#getSymbolicLinkStatus",
          "type": "function"
        },
        "index": {
          "description": "Acts as getFileStatus except when the FilePath refers to symbolic link In that case the FileStatus information of the symbolic link itself is returned instead of that of the file it points to Note calls lstat",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "getSymbolicLinkStatus",
          "normalized": "FilePath-\u003eIO FileStatus",
          "package": "unix",
          "partial": "Symbolic Link Status",
          "signature": "FilePath-\u003eIO FileStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:getSymbolicLinkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the \u003ccode\u003eFilePath\u003c/code\u003e pointed to by the symbolic link and returns it.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003ereadlink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "readSymbolicLink",
          "package": "unix",
          "signature": "FilePath -\u003e IO FilePath",
          "source": "src/System-Posix-Files.html#readSymbolicLink",
          "type": "function"
        },
        "index": {
          "description": "Reads the FilePath pointed to by the symbolic link and returns it Note calls readlink",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "readSymbolicLink",
          "normalized": "FilePath-\u003eIO FilePath",
          "package": "unix",
          "partial": "Symbolic Link",
          "signature": "FilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:readSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eremoveLink path\u003c/code\u003e removes the link named \u003ccode\u003epath\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eunlink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "removeLink",
          "package": "unix",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Posix-Files.html#removeLink",
          "type": "function"
        },
        "index": {
          "description": "removeLink path removes the link named path Note calls unlink",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "removeLink",
          "normalized": "FilePath-\u003eIO()",
          "package": "unix",
          "partial": "Link",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:removeLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erename old new\u003c/code\u003e renames a file or directory from \u003ccode\u003eold\u003c/code\u003e to \u003ccode\u003enew\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003erename\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "rename",
          "package": "unix",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-Posix-Files.html#rename",
          "type": "function"
        },
        "index": {
          "description": "rename old new renames file or directory from old to new Note calls rename",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "rename",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "unix",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFileMode path mode\u003c/code\u003e changes permission of the file given by \u003ccode\u003epath\u003c/code\u003e\n to \u003ccode\u003emode\u003c/code\u003e. This operation may fail with \u003ccode\u003e\u003ca\u003ethrowErrnoPathIfMinus1_\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003epath\u003c/code\u003e\n doesn't exist or if the effective user ID of the current process is not that\n of the file's owner.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003echmod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "setFileMode",
          "package": "unix",
          "signature": "FilePath -\u003e FileMode -\u003e IO ()",
          "source": "src/System-Posix-Files.html#setFileMode",
          "type": "function"
        },
        "index": {
          "description": "setFileMode path mode changes permission of the file given by path to mode This operation may fail with throwErrnoPathIfMinus1 if path doesn exist or if the effective user ID of the current process is not that of the file owner Note calls chmod",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "setFileMode",
          "normalized": "FilePath-\u003eFileMode-\u003eIO()",
          "package": "unix",
          "partial": "File Mode",
          "signature": "FilePath-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncates the file down to the specified length. If the file was larger\n than the given length before this operation was performed the extra is lost.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003etruncate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "setFileSize",
          "package": "unix",
          "signature": "FilePath -\u003e FileOffset -\u003e IO ()",
          "source": "src/System-Posix-Files.html#setFileSize",
          "type": "function"
        },
        "index": {
          "description": "Truncates the file down to the specified length If the file was larger than the given length before this operation was performed the extra is lost Note calls truncate",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "setFileSize",
          "normalized": "FilePath-\u003eFileOffset-\u003eIO()",
          "package": "unix",
          "partial": "File Size",
          "signature": "FilePath-\u003eFileOffset-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFileTimes path atime mtime\u003c/code\u003e sets the access and modification times\n associated with file \u003ccode\u003epath\u003c/code\u003e to \u003ccode\u003eatime\u003c/code\u003e and \u003ccode\u003emtime\u003c/code\u003e, respectively.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "setFileTimes",
          "package": "unix",
          "signature": "FilePath -\u003e EpochTime -\u003e EpochTime -\u003e IO ()",
          "source": "src/System-Posix-Files.html#setFileTimes",
          "type": "function"
        },
        "index": {
          "description": "setFileTimes path atime mtime sets the access and modification times associated with file path to atime and mtime respectively Note calls utime",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "setFileTimes",
          "normalized": "FilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO()",
          "package": "unix",
          "partial": "File Times",
          "signature": "FilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setFileTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetFileTimes\u003c/a\u003e\u003c/code\u003e but timestamps can have sub-second resolution.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutimensat\u003c/code\u003e or \u003ccode\u003eutimes\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "setFileTimesHiRes",
          "package": "unix",
          "signature": "FilePath -\u003e POSIXTime -\u003e POSIXTime -\u003e IO ()",
          "source": "src/System-Posix-Files.html#setFileTimesHiRes",
          "type": "function"
        },
        "index": {
          "description": "Like setFileTimes but timestamps can have sub-second resolution Note calls utimensat or utimes Since",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "setFileTimesHiRes",
          "normalized": "FilePath-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "package": "unix",
          "partial": "File Times Hi Res",
          "signature": "FilePath-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setFileTimesHiRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetOwnerAndGroup path uid gid\u003c/code\u003e changes the owner and group of \u003ccode\u003epath\u003c/code\u003e to\n \u003ccode\u003euid\u003c/code\u003e and \u003ccode\u003egid\u003c/code\u003e, respectively.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003euid\u003c/code\u003e or \u003ccode\u003egid\u003c/code\u003e is specified as -1, then that ID is not changed.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003echown\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "setOwnerAndGroup",
          "package": "unix",
          "signature": "FilePath -\u003e UserID -\u003e GroupID -\u003e IO ()",
          "source": "src/System-Posix-Files.html#setOwnerAndGroup",
          "type": "function"
        },
        "index": {
          "description": "setOwnerAndGroup path uid gid changes the owner and group of path to uid and gid respectively If uid or gid is specified as then that ID is not changed Note calls chown",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "setOwnerAndGroup",
          "normalized": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Owner And Group",
          "signature": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setOwnerAndGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003esetOwnerAndGroup\u003c/a\u003e\u003c/code\u003e but does not follow symlinks (and thus\n changes permissions on the link itself).\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elchown\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "setSymbolicLinkOwnerAndGroup",
          "package": "unix",
          "signature": "FilePath -\u003e UserID -\u003e GroupID -\u003e IO ()",
          "source": "src/System-Posix-Files.html#setSymbolicLinkOwnerAndGroup",
          "type": "function"
        },
        "index": {
          "description": "Acts as setOwnerAndGroup but does not follow symlinks and thus changes permissions on the link itself Note calls lchown",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "setSymbolicLinkOwnerAndGroup",
          "normalized": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Symbolic Link Owner And Group",
          "signature": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setSymbolicLinkOwnerAndGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetFileTimesHiRes\u003c/a\u003e\u003c/code\u003e but does not follow symbolic links.\n This operation is not supported on all platforms. On these platforms,\n this function will raise an exception.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutimensat\u003c/code\u003e or \u003ccode\u003elutimes\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "setSymbolicLinkTimesHiRes",
          "package": "unix",
          "signature": "FilePath -\u003e POSIXTime -\u003e POSIXTime -\u003e IO ()",
          "source": "src/System-Posix-Files.html#setSymbolicLinkTimesHiRes",
          "type": "function"
        },
        "index": {
          "description": "Like setFileTimesHiRes but does not follow symbolic links This operation is not supported on all platforms On these platforms this function will raise an exception Note calls utimensat or lutimes Since",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "setSymbolicLinkTimesHiRes",
          "normalized": "FilePath-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "package": "unix",
          "partial": "Symbolic Link Times Hi Res",
          "signature": "FilePath-\u003ePOSIXTime-\u003ePOSIXTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:setSymbolicLinkTimesHiRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etouchFile path\u003c/code\u003e sets the access and modification times associated with\n file \u003ccode\u003epath\u003c/code\u003e to the current time.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "touchFile",
          "package": "unix",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Posix-Files.html#touchFile",
          "type": "function"
        },
        "index": {
          "description": "touchFile path sets the access and modification times associated with file path to the current time Note calls utime",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "touchFile",
          "normalized": "FilePath-\u003eIO()",
          "package": "unix",
          "partial": "File",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:touchFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etouchFile\u003c/a\u003e\u003c/code\u003e but does not follow symbolic links.\n This operation is not supported on all platforms. On these platforms,\n this function will raise an exception.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elutimes\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Posix.Files",
          "name": "touchSymbolicLink",
          "package": "unix",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Posix-Files.html#touchSymbolicLink",
          "type": "function"
        },
        "index": {
          "description": "Like touchFile but does not follow symbolic links This operation is not supported on all platforms On these platforms this function will raise an exception Note calls lutimes Since",
          "hierarchy": "System Posix Files",
          "module": "System.Posix.Files",
          "name": "touchSymbolicLink",
          "normalized": "FilePath-\u003eIO()",
          "package": "unix",
          "partial": "Symbolic Link",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Files.html#v:touchSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX IO support.  These types and functions correspond to the unix\n functions open(2), close(2), etc.  For more portable functions\n which are more like fopen(3) and friends from stdio.h, see\n \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.IO.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-IO-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX IO support These types and functions correspond to the unix functions open close etc For more portable functions which are more like fopen and friends from stdio.h see System.IO",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.ByteString",
          "name": "FdOption",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#FdOption",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "FdOption",
          "package": "unix",
          "partial": "Fd Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#t:FdOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.ByteString",
          "name": "FileLock",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#FileLock",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "FileLock",
          "package": "unix",
          "partial": "File Lock",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#t:FileLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.ByteString",
          "name": "LockRequest",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#LockRequest",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "LockRequest",
          "package": "unix",
          "partial": "Lock Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#t:LockRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrespond to some of the int flags from C's fcntl.h.\n\u003c/p\u003e",
          "module": "System.Posix.IO.ByteString",
          "name": "OpenFileFlags",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#OpenFileFlags",
          "type": "data"
        },
        "index": {
          "description": "Correspond to some of the int flags from fcntl.h",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "OpenFileFlags",
          "package": "unix",
          "partial": "Open File Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#t:OpenFileFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.ByteString",
          "name": "OpenMode",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#OpenMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "OpenMode",
          "package": "unix",
          "partial": "Open Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#t:OpenMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_APPEND\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "AppendOnWrite",
          "package": "unix",
          "signature": "AppendOnWrite",
          "source": "src/System-Posix-IO-Common.html#FdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:AppendOnWrite\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:AppendOnWrite\"]"
        },
        "index": {
          "description": "APPEND",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "AppendOnWrite",
          "package": "unix",
          "partial": "Append On Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:AppendOnWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFD_CLOEXEC\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "CloseOnExec",
          "package": "unix",
          "signature": "CloseOnExec",
          "source": "src/System-Posix-IO-Common.html#FdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:CloseOnExec\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:CloseOnExec\"]"
        },
        "index": {
          "description": "FD CLOEXEC",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "CloseOnExec",
          "package": "unix",
          "partial": "Close On Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:CloseOnExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_NONBLOCK\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "NonBlockingRead",
          "package": "unix",
          "signature": "NonBlockingRead",
          "source": "src/System-Posix-IO-Common.html#FdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:NonBlockingRead\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:NonBlockingRead\"]"
        },
        "index": {
          "description": "NONBLOCK",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "NonBlockingRead",
          "package": "unix",
          "partial": "Non Blocking Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:NonBlockingRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "OpenFileFlags",
          "package": "unix",
          "signature": "OpenFileFlags",
          "source": "src/System-Posix-IO-Common.html#OpenFileFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:OpenFileFlags\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:OpenFileFlags\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "OpenFileFlags",
          "package": "unix",
          "partial": "Open File Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:OpenFileFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "ReadLock",
          "package": "unix",
          "signature": "ReadLock",
          "source": "src/System-Posix-IO-Common.html#LockRequest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:ReadLock\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:ReadLock\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "ReadLock",
          "package": "unix",
          "partial": "Read Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:ReadLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "ReadOnly",
          "package": "unix",
          "signature": "ReadOnly",
          "source": "src/System-Posix-IO-Common.html#OpenMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:ReadOnly\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:ReadOnly\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "ReadOnly",
          "package": "unix",
          "partial": "Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:ReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "ReadWrite",
          "package": "unix",
          "signature": "ReadWrite",
          "source": "src/System-Posix-IO-Common.html#OpenMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:ReadWrite\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:ReadWrite\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "ReadWrite",
          "package": "unix",
          "partial": "Read Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:ReadWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_SYNC\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "SynchronousWrites",
          "package": "unix",
          "signature": "SynchronousWrites",
          "source": "src/System-Posix-IO-Common.html#FdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:SynchronousWrites\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:SynchronousWrites\"]"
        },
        "index": {
          "description": "SYNC",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "SynchronousWrites",
          "package": "unix",
          "partial": "Synchronous Writes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:SynchronousWrites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "Unlock",
          "package": "unix",
          "signature": "Unlock",
          "source": "src/System-Posix-IO-Common.html#LockRequest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:Unlock\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:Unlock\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "Unlock",
          "package": "unix",
          "partial": "Unlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:Unlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "WriteLock",
          "package": "unix",
          "signature": "WriteLock",
          "source": "src/System-Posix-IO-Common.html#LockRequest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:WriteLock\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:WriteLock\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "WriteLock",
          "package": "unix",
          "partial": "Write Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:WriteLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "WriteOnly",
          "package": "unix",
          "signature": "WriteOnly",
          "source": "src/System-Posix-IO-Common.html#OpenMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:WriteOnly\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:WriteOnly\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "WriteOnly",
          "package": "unix",
          "partial": "Write Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:WriteOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_APPEND\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "append",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-IO-Common.html#OpenFileFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:append\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:append\"]"
        },
        "index": {
          "description": "APPEND",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "append",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose this file descriptor.  May throw an exception if this is an\n invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "closeFd",
          "package": "unix",
          "signature": "Fd -\u003e IO ()",
          "source": "src/System-Posix-IO-Common.html#closeFd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:closeFd\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:closeFd\"]"
        },
        "index": {
          "description": "Close this file descriptor May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "closeFd",
          "normalized": "Fd-\u003eIO()",
          "package": "unix",
          "partial": "Fd",
          "signature": "Fd-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:closeFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and open this file in WriteOnly mode.  A special case of\n \u003ccode\u003e\u003ca\u003eopenFd\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003eFiles\u003c/a\u003e\u003c/code\u003e for information on how to use\n the \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "System.Posix.IO.ByteString",
          "name": "createFile",
          "package": "unix",
          "signature": "RawFilePath -\u003e FileMode -\u003e IO Fd",
          "source": "src/System-Posix-IO-ByteString.html#createFile",
          "type": "function"
        },
        "index": {
          "description": "Create and open this file in WriteOnly mode special case of openFd See Files for information on how to use the FileMode type",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "createFile",
          "normalized": "RawFilePath-\u003eFileMode-\u003eIO Fd",
          "package": "unix",
          "partial": "File",
          "signature": "RawFilePath-\u003eFileMode-\u003eIO Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:createFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecreatePipe\u003c/a\u003e\u003c/code\u003e function creates a pair of connected file\n descriptors. The first component is the fd to read from, the second\n is the write end.  Although pipes may be bidirectional, this\n behaviour is not portable and programmers should use two separate\n pipes for this purpose.  May throw an exception if this is an\n invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "createPipe",
          "package": "unix",
          "signature": "IO (Fd, Fd)",
          "source": "src/System-Posix-IO-Common.html#createPipe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:createPipe\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:createPipe\"]"
        },
        "index": {
          "description": "The createPipe function creates pair of connected file descriptors The first component is the fd to read from the second is the write end Although pipes may be bidirectional this behaviour is not portable and programmers should use two separate pipes for this purpose May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "createPipe",
          "normalized": "IO(Fd,Fd)",
          "package": "unix",
          "partial": "Pipe",
          "signature": "IO(Fd,Fd)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:createPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault values for the \u003ccode\u003e\u003ca\u003eOpenFileFlags\u003c/a\u003e\u003c/code\u003e type. False for each of\n append, exclusive, noctty, nonBlock, and trunc.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "defaultFileFlags",
          "package": "unix",
          "signature": "OpenFileFlags",
          "source": "src/System-Posix-IO-Common.html#defaultFileFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:defaultFileFlags\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:defaultFileFlags\"]"
        },
        "index": {
          "description": "Default values for the OpenFileFlags type False for each of append exclusive noctty nonBlock and trunc",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "defaultFileFlags",
          "package": "unix",
          "partial": "File Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:defaultFileFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMay throw an exception if this is an invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "dup",
          "package": "unix",
          "signature": "Fd -\u003e IO Fd",
          "source": "src/System-Posix-IO-Common.html#dup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:dup\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:dup\"]"
        },
        "index": {
          "description": "May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "dup",
          "normalized": "Fd-\u003eIO Fd",
          "package": "unix",
          "signature": "Fd-\u003eIO Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMay throw an exception if this is an invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "dupTo",
          "package": "unix",
          "signature": "Fd -\u003e Fd -\u003e IO Fd",
          "source": "src/System-Posix-IO-Common.html#dupTo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:dupTo\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:dupTo\"]"
        },
        "index": {
          "description": "May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "dupTo",
          "normalized": "Fd-\u003eFd-\u003eIO Fd",
          "package": "unix",
          "partial": "To",
          "signature": "Fd-\u003eFd-\u003eIO Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:dupTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_EXCL\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "exclusive",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-IO-Common.html#OpenFileFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:exclusive\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:exclusive\"]"
        },
        "index": {
          "description": "EXCL",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "exclusive",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:exclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead data from an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and convert it to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e using the locale encoding.\n Throws an exception if this is an invalid descriptor, or EOF has been\n reached.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "fdRead",
          "package": "unix",
          "signature": "Fd-\u003e ByteCount-\u003e IO (String, ByteCount)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdRead\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:fdRead\"]"
        },
        "index": {
          "description": "Read data from an Fd and convert it to String using the locale encoding Throws an exception if this is an invalid descriptor or EOF has been reached",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "fdRead",
          "normalized": "Fd-\u003eByteCount-\u003eIO(String,ByteCount)",
          "package": "unix",
          "partial": "Read",
          "signature": "Fd-\u003eByteCount-\u003eIO(String,ByteCount)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead data from an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e into memory.  This is exactly equivalent\n to the POSIX \u003ccode\u003eread\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "fdReadBuf",
          "package": "unix",
          "signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e IO ByteCount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdReadBuf\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:fdReadBuf\"]"
        },
        "index": {
          "description": "Read data from an Fd into memory This is exactly equivalent to the POSIX read function",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "fdReadBuf",
          "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO ByteCount",
          "package": "unix",
          "partial": "Read Buf",
          "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO ByteCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdReadBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMay throw an exception if this is an invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "fdSeek",
          "package": "unix",
          "signature": "Fd -\u003e SeekMode -\u003e FileOffset -\u003e IO FileOffset",
          "source": "src/System-Posix-IO-Common.html#fdSeek",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdSeek\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:fdSeek\"]"
        },
        "index": {
          "description": "May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "fdSeek",
          "normalized": "Fd-\u003eSeekMode-\u003eFileOffset-\u003eIO FileOffset",
          "package": "unix",
          "partial": "Seek",
          "signature": "Fd-\u003eSeekMode-\u003eFileOffset-\u003eIO FileOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e that can be used with the\n standard Haskell IO library (see \u003ca\u003eSystem.IO\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "fdToHandle",
          "package": "unix",
          "signature": "Fd -\u003e IO Handle",
          "source": "src/System-Posix-IO-Common.html#fdToHandle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdToHandle\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:fdToHandle\"]"
        },
        "index": {
          "description": "Converts an Fd into Handle that can be used with the standard Haskell IO library see System.IO",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "fdToHandle",
          "normalized": "Fd-\u003eIO Handle",
          "package": "unix",
          "partial": "To Handle",
          "signature": "Fd-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdToHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e using the locale encoding.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "fdWrite",
          "package": "unix",
          "signature": "Fd -\u003e String -\u003e IO ByteCount",
          "source": "src/System-Posix-IO-Common.html#fdWrite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdWrite\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:fdWrite\"]"
        },
        "index": {
          "description": "Write String to an Fd using the locale encoding",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "fdWrite",
          "normalized": "Fd-\u003eString-\u003eIO ByteCount",
          "package": "unix",
          "partial": "Write",
          "signature": "Fd-\u003eString-\u003eIO ByteCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data from memory to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e.  This is exactly equivalent\n to the POSIX \u003ccode\u003ewrite\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "fdWriteBuf",
          "package": "unix",
          "signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e IO ByteCount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdWriteBuf\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:fdWriteBuf\"]"
        },
        "index": {
          "description": "Write data from memory to an Fd This is exactly equivalent to the POSIX write function",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "fdWriteBuf",
          "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO ByteCount",
          "package": "unix",
          "partial": "Write Buf",
          "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO ByteCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:fdWriteBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMay throw an exception if this is an invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "getLock",
          "package": "unix",
          "signature": "Fd -\u003e FileLock -\u003e IO (Maybe (ProcessID, FileLock))",
          "source": "src/System-Posix-IO-Common.html#getLock",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:getLock\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:getLock\"]"
        },
        "index": {
          "description": "May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "getLock",
          "normalized": "Fd-\u003eFileLock-\u003eIO(Maybe(ProcessID,FileLock))",
          "package": "unix",
          "partial": "Lock",
          "signature": "Fd-\u003eFileLock-\u003eIO(Maybe(ProcessID,FileLock))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:getLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  This function has the side effect\n of closing the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e and flushing its write buffer, if necessary.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "handleToFd",
          "package": "unix",
          "signature": "Handle -\u003e IO Fd",
          "source": "src/System-Posix-IO-Common.html#handleToFd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:handleToFd\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:handleToFd\"]"
        },
        "index": {
          "description": "Extracts the Fd from Handle This function has the side effect of closing the Handle and flushing its write buffer if necessary",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "handleToFd",
          "normalized": "Handle-\u003eIO Fd",
          "package": "unix",
          "partial": "To Fd",
          "signature": "Handle-\u003eIO Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:handleToFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_NOCTTY\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "noctty",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-IO-Common.html#OpenFileFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:noctty\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:noctty\"]"
        },
        "index": {
          "description": "NOCTTY",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "noctty",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:noctty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_NONBLOCK\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "nonBlock",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-IO-Common.html#OpenFileFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:nonBlock\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:nonBlock\"]"
        },
        "index": {
          "description": "NONBLOCK",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "nonBlock",
          "package": "unix",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:nonBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen and optionally create this file.  See \u003ccode\u003e\u003ca\u003eFiles\u003c/a\u003e\u003c/code\u003e\n for information on how to use the \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "System.Posix.IO.ByteString",
          "name": "openFd",
          "package": "unix",
          "signature": "RawFilePath-\u003e OpenMode-\u003e Maybe FileMode-\u003e OpenFileFlags-\u003e IO Fd",
          "type": "function"
        },
        "index": {
          "description": "Open and optionally create this file See Files for information on how to use the FileMode type",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "openFd",
          "normalized": "RawFilePath-\u003eOpenMode-\u003eMaybe FileMode-\u003eOpenFileFlags-\u003eIO Fd",
          "package": "unix",
          "partial": "Fd",
          "signature": "RawFilePath-\u003eOpenMode-\u003eMaybe FileMode-\u003eOpenFileFlags-\u003eIO Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:openFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMay throw an exception if this is an invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "queryFdOption",
          "package": "unix",
          "signature": "Fd -\u003e FdOption -\u003e IO Bool",
          "source": "src/System-Posix-IO-Common.html#queryFdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:queryFdOption\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:queryFdOption\"]"
        },
        "index": {
          "description": "May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "queryFdOption",
          "normalized": "Fd-\u003eFdOption-\u003eIO Bool",
          "package": "unix",
          "partial": "Fd Option",
          "signature": "Fd-\u003eFdOption-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:queryFdOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMay throw an exception if this is an invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "setFdOption",
          "package": "unix",
          "signature": "Fd -\u003e FdOption -\u003e Bool -\u003e IO ()",
          "source": "src/System-Posix-IO-Common.html#setFdOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:setFdOption\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:setFdOption\"]"
        },
        "index": {
          "description": "May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "setFdOption",
          "normalized": "Fd-\u003eFdOption-\u003eBool-\u003eIO()",
          "package": "unix",
          "partial": "Fd Option",
          "signature": "Fd-\u003eFdOption-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:setFdOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMay throw an exception if this is an invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "setLock",
          "package": "unix",
          "signature": "Fd -\u003e FileLock -\u003e IO ()",
          "source": "src/System-Posix-IO-Common.html#setLock",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:setLock\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:setLock\"]"
        },
        "index": {
          "description": "May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "setLock",
          "normalized": "Fd-\u003eFileLock-\u003eIO()",
          "package": "unix",
          "partial": "Lock",
          "signature": "Fd-\u003eFileLock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:setLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "stdError",
          "package": "unix",
          "signature": "Fd",
          "source": "src/System-Posix-IO-Common.html#stdError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:stdError\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:stdError\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "stdError",
          "package": "unix",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:stdError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "stdInput",
          "package": "unix",
          "signature": "Fd",
          "source": "src/System-Posix-IO-Common.html#stdInput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:stdInput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:stdInput\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "stdInput",
          "package": "unix",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:stdInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "stdOutput",
          "package": "unix",
          "signature": "Fd",
          "source": "src/System-Posix-IO-Common.html#stdOutput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:stdOutput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:stdOutput\"]"
        },
        "index": {
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "stdOutput",
          "package": "unix",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:stdOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_TRUNC\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "trunc",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-IO-Common.html#OpenFileFlags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:trunc\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:trunc\"]"
        },
        "index": {
          "description": "TRUNC",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "trunc",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:trunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMay throw an exception if this is an invalid descriptor.\n\u003c/p\u003e",
          "module": "[\"System.Posix.IO.ByteString\",\"System.Posix.IO\"]",
          "name": "waitToSetLock",
          "package": "unix",
          "signature": "Fd -\u003e FileLock -\u003e IO ()",
          "source": "src/System-Posix-IO-Common.html#waitToSetLock",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:waitToSetLock\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:waitToSetLock\"]"
        },
        "index": {
          "description": "May throw an exception if this is an invalid descriptor",
          "hierarchy": "System Posix IO ByteString",
          "module": "System.Posix.IO.ByteString",
          "name": "waitToSetLock",
          "normalized": "Fd-\u003eFileLock-\u003eIO()",
          "package": "unix",
          "partial": "To Set Lock",
          "signature": "Fd-\u003eFileLock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO-ByteString.html#v:waitToSetLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX IO support.  These types and functions correspond to the unix\n functions open(2), close(2), etc.  For more portable functions\n which are more like fopen(3) and friends from stdio.h, see\n \u003ca\u003eSystem.IO\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.IO",
          "name": "IO",
          "package": "unix",
          "source": "src/System-Posix-IO.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX IO support These types and functions correspond to the unix functions open close etc For more portable functions which are more like fopen and friends from stdio.h see System.IO",
          "hierarchy": "System Posix IO",
          "module": "System.Posix.IO",
          "name": "IO",
          "package": "unix",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO",
          "name": "FdOption",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#FdOption",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix IO",
          "module": "System.Posix.IO",
          "name": "FdOption",
          "package": "unix",
          "partial": "Fd Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#t:FdOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO",
          "name": "FileLock",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#FileLock",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Posix IO",
          "module": "System.Posix.IO",
          "name": "FileLock",
          "package": "unix",
          "partial": "File Lock",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#t:FileLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO",
          "name": "LockRequest",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#LockRequest",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix IO",
          "module": "System.Posix.IO",
          "name": "LockRequest",
          "package": "unix",
          "partial": "Lock Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#t:LockRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrespond to some of the int flags from C's fcntl.h.\n\u003c/p\u003e",
          "module": "System.Posix.IO",
          "name": "OpenFileFlags",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#OpenFileFlags",
          "type": "data"
        },
        "index": {
          "description": "Correspond to some of the int flags from fcntl.h",
          "hierarchy": "System Posix IO",
          "module": "System.Posix.IO",
          "name": "OpenFileFlags",
          "package": "unix",
          "partial": "Open File Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#t:OpenFileFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO",
          "name": "OpenMode",
          "package": "unix",
          "source": "src/System-Posix-IO-Common.html#OpenMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix IO",
          "module": "System.Posix.IO",
          "name": "OpenMode",
          "package": "unix",
          "partial": "Open Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#t:OpenMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and open this file in WriteOnly mode.  A special case of\n \u003ccode\u003e\u003ca\u003eopenFd\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003eFiles\u003c/a\u003e\u003c/code\u003e for information on how to use\n the \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "System.Posix.IO",
          "name": "createFile",
          "package": "unix",
          "signature": "FilePath -\u003e FileMode -\u003e IO Fd",
          "source": "src/System-Posix-IO.html#createFile",
          "type": "function"
        },
        "index": {
          "description": "Create and open this file in WriteOnly mode special case of openFd See Files for information on how to use the FileMode type",
          "hierarchy": "System Posix IO",
          "module": "System.Posix.IO",
          "name": "createFile",
          "normalized": "FilePath-\u003eFileMode-\u003eIO Fd",
          "package": "unix",
          "partial": "File",
          "signature": "FilePath-\u003eFileMode-\u003eIO Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:createFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen and optionally create this file.  See \u003ccode\u003e\u003ca\u003eFiles\u003c/a\u003e\u003c/code\u003e\n for information on how to use the \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "System.Posix.IO",
          "name": "openFd",
          "package": "unix",
          "signature": "FilePath-\u003e OpenMode-\u003e Maybe FileMode-\u003e OpenFileFlags-\u003e IO Fd",
          "type": "function"
        },
        "index": {
          "description": "Open and optionally create this file See Files for information on how to use the FileMode type",
          "hierarchy": "System Posix IO",
          "module": "System.Posix.IO",
          "name": "openFd",
          "normalized": "FilePath-\u003eOpenMode-\u003eMaybe FileMode-\u003eOpenFileFlags-\u003eIO Fd",
          "package": "unix",
          "partial": "Fd",
          "signature": "FilePath-\u003eOpenMode-\u003eMaybe FileMode-\u003eOpenFileFlags-\u003eIO Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-IO.html#v:openFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX process support.  See also the System.Cmd and System.Process\n modules in the process package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Process.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-Process-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX process support See also the System.Cmd and System.Process modules in the process package",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exit status of a process\n\u003c/p\u003e",
          "module": "System.Posix.Process.ByteString",
          "name": "ProcessStatus",
          "package": "unix",
          "source": "src/System-Posix-Process-Internals.html#ProcessStatus",
          "type": "data"
        },
        "index": {
          "description": "The exit status of process",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "ProcessStatus",
          "package": "unix",
          "partial": "Process Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#t:ProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Process.ByteString",
          "name": "ProcessTimes",
          "package": "unix",
          "source": "src/System-Posix-Process-Common.html#ProcessTimes",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "ProcessTimes",
          "package": "unix",
          "partial": "Process Times",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#t:ProcessTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe process exited by calling\n \u003ccode\u003eexit()\u003c/code\u003e or returning from \u003ccode\u003emain\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process.Internals\",\"System.Posix.Process\"]",
          "name": "Exited",
          "package": "unix",
          "signature": "Exited ExitCode",
          "source": "src/System-Posix-Process-Internals.html#ProcessStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:Exited\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-Internals.html#v:Exited\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:Exited\"]"
        },
        "index": {
          "description": "the process exited by calling exit or returning from main",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "Exited",
          "package": "unix",
          "partial": "Exited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:Exited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "ProcessTimes",
          "package": "unix",
          "signature": "ProcessTimes",
          "source": "src/System-Posix-Process-Common.html#ProcessTimes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:ProcessTimes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:ProcessTimes\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "ProcessTimes",
          "package": "unix",
          "partial": "Process Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:ProcessTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe process was stopped by a signal\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process.Internals\",\"System.Posix.Process\"]",
          "name": "Stopped",
          "package": "unix",
          "signature": "Stopped Signal",
          "source": "src/System-Posix-Process-Internals.html#ProcessStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:Stopped\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-Internals.html#v:Stopped\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:Stopped\"]"
        },
        "index": {
          "description": "the process was stopped by signal",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "Stopped",
          "package": "unix",
          "partial": "Stopped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:Stopped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe process was terminated by a\n signal, the \u003ccode\u003eBool\u003c/code\u003e is \u003ccode\u003eTrue\u003c/code\u003e if a core\n dump was produced\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process.Internals\",\"System.Posix.Process\"]",
          "name": "Terminated",
          "package": "unix",
          "signature": "Terminated Signal Bool",
          "source": "src/System-Posix-Process-Internals.html#ProcessStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:Terminated\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-Internals.html#v:Terminated\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:Terminated\"]"
        },
        "index": {
          "description": "the process was terminated by signal the Bool is True if core dump was produced Since",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "Terminated",
          "package": "unix",
          "partial": "Terminated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:Terminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "childSystemTime",
          "package": "unix",
          "signature": "ClockTick",
          "source": "src/System-Posix-Process-Common.html#ProcessTimes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:childSystemTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:childSystemTime\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "childSystemTime",
          "package": "unix",
          "partial": "System Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:childSystemTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "childUserTime",
          "package": "unix",
          "signature": "ClockTick",
          "source": "src/System-Posix-Process-Common.html#ProcessTimes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:childUserTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:childUserTime\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "childUserTime",
          "package": "unix",
          "partial": "User Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:childUserTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This function is scheduled to be replaced by something different in the future, we therefore recommend that you do not use this version and use \u003ccode\u003e\u003ca\u003ecreateProcessGroupFor\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecreateProcessGroup\u003c/a\u003e\u003c/code\u003e pid\u003c/code\u003e calls \u003ccode\u003esetpgid\u003c/code\u003e to make\n   process \u003ccode\u003epid\u003c/code\u003e a new process group leader.\n   This function is currently deprecated,\n   and might be changed to making the current\n   process a new process group leader in future versions.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "createProcessGroup",
          "package": "unix",
          "signature": "ProcessID -\u003e IO ProcessGroupID",
          "source": "src/System-Posix-Process-Common.html#createProcessGroup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:createProcessGroup\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:createProcessGroup\"]"
        },
        "index": {
          "description": "Deprecated This function is scheduled to be replaced by something different in the future we therefore recommend that you do not use this version and use createProcessGroupFor instead createProcessGroup pid calls setpgid to make process pid new process group leader This function is currently deprecated and might be changed to making the current process new process group leader in future versions",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "createProcessGroup",
          "normalized": "ProcessID-\u003eIO ProcessGroupID",
          "package": "unix",
          "partial": "Process Group",
          "signature": "ProcessID-\u003eIO ProcessGroupID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:createProcessGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecreateProcessGroupFor\u003c/a\u003e\u003c/code\u003e pid\u003c/code\u003e calls \u003ccode\u003esetpgid\u003c/code\u003e to make\n   process \u003ccode\u003epid\u003c/code\u003e a new process group leader.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "createProcessGroupFor",
          "package": "unix",
          "signature": "ProcessID -\u003e IO ProcessGroupID",
          "source": "src/System-Posix-Process-Common.html#createProcessGroupFor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:createProcessGroupFor\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:createProcessGroupFor\"]"
        },
        "index": {
          "description": "createProcessGroupFor pid calls setpgid to make process pid new process group leader",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "createProcessGroupFor",
          "normalized": "ProcessID-\u003eIO ProcessGroupID",
          "package": "unix",
          "partial": "Process Group For",
          "signature": "ProcessID-\u003eIO ProcessGroupID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:createProcessGroupFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecreateSession\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003esetsid\u003c/code\u003e to create a new session\n   with the current process as session leader.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "createSession",
          "package": "unix",
          "signature": "IO ProcessGroupID",
          "source": "src/System-Posix-Process-Common.html#createSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:createSession\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:createSession\"]"
        },
        "index": {
          "description": "createSession calls setsid to create new session with the current process as session leader",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "createSession",
          "package": "unix",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:createSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "elapsedTime",
          "package": "unix",
          "signature": "ClockTick",
          "source": "src/System-Posix-Process-Common.html#ProcessTimes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:elapsedTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:elapsedTime\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "elapsedTime",
          "package": "unix",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:elapsedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eexecuteFile\u003c/a\u003e\u003c/code\u003e cmd args env\u003c/code\u003e calls one of the\n   \u003ccode\u003eexecv*\u003c/code\u003e family, depending on whether or not the current\n   PATH is to be searched for the command, and whether or not an\n   environment is provided to supersede the process's current\n   environment.  The basename (leading directory names suppressed) of\n   the command is passed to \u003ccode\u003eexecv*\u003c/code\u003e as \u003ccode\u003earg[0]\u003c/code\u003e;\n   the argument list passed to \u003ccode\u003e\u003ca\u003eexecuteFile\u003c/a\u003e\u003c/code\u003e therefore\n   begins with \u003ccode\u003earg[1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Process.ByteString",
          "name": "executeFile",
          "package": "unix",
          "signature": "RawFilePath-\u003e Bool-\u003e [ByteString]-\u003e Maybe [(ByteString, ByteString)]-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "executeFile cmd args env calls one of the execv family depending on whether or not the current PATH is to be searched for the command and whether or not an environment is provided to supersede the process current environment The basename leading directory names suppressed of the command is passed to execv as arg the argument list passed to executeFile therefore begins with arg",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "executeFile",
          "normalized": "RawFilePath-\u003eBool-\u003e[ByteString]-\u003eMaybe[(ByteString,ByteString)]-\u003eIO a",
          "package": "unix",
          "partial": "File",
          "signature": "RawFilePath-\u003eBool-\u003e[ByteString]-\u003eMaybe[(ByteString,ByteString)]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:executeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eexitImmediately\u003c/a\u003e\u003c/code\u003e status\u003c/code\u003e calls \u003ccode\u003e_exit\u003c/code\u003e to terminate the process\n   with the indicated exit \u003ccode\u003estatus\u003c/code\u003e.\n   The operation never returns.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "exitImmediately",
          "package": "unix",
          "signature": "ExitCode -\u003e IO ()",
          "source": "src/System-Posix-Process-Common.html#exitImmediately",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:exitImmediately\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:exitImmediately\"]"
        },
        "index": {
          "description": "exitImmediately status calls exit to terminate the process with the indicated exit status The operation never returns",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "exitImmediately",
          "normalized": "ExitCode-\u003eIO()",
          "package": "unix",
          "partial": "Immediately",
          "signature": "ExitCode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:exitImmediately"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforkProcess\u003c/a\u003e\u003c/code\u003e corresponds to the POSIX \u003ccode\u003efork\u003c/code\u003e system call.\nThe \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action passed as an argument is executed in the child process; no other\nthreads will be copied to the child process.\nOn success, \u003ccode\u003e\u003ca\u003eforkProcess\u003c/a\u003e\u003c/code\u003e returns the child's \u003ccode\u003e\u003ca\u003eProcessID\u003c/a\u003e\u003c/code\u003e to the parent process;\nin case of an error, an exception is thrown.\n\u003c/p\u003e\u003cp\u003eThe exception masking state of the executed action is inherited\n(c.f. \u003ccode\u003eforkIO\u003c/code\u003e), see also \u003ccode\u003e\u003ca\u003eforkProcessWithUnmask\u003c/a\u003e\u003c/code\u003e (\u003cem\u003esince: 2.7.0.0\u003c/em\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eforkProcess\u003c/a\u003e\u003c/code\u003e comes with a giant warning: since any other running\nthreads are not copied into the child process, it's easy to go wrong:\ne.g. by accessing some shared resource that was held by another thread\nin the parent.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "forkProcess",
          "package": "unix",
          "signature": "IO () -\u003e IO ProcessID",
          "source": "src/System-Posix-Process-Common.html#forkProcess",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:forkProcess\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:forkProcess\"]"
        },
        "index": {
          "description": "forkProcess corresponds to the POSIX fork system call The IO action passed as an argument is executed in the child process no other threads will be copied to the child process On success forkProcess returns the child ProcessID to the parent process in case of an error an exception is thrown The exception masking state of the executed action is inherited c.f forkIO see also forkProcessWithUnmask since forkProcess comes with giant warning since any other running threads are not copied into the child process it easy to go wrong e.g by accessing some shared resource that was held by another thread in the parent",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "forkProcess",
          "normalized": "IO()-\u003eIO ProcessID",
          "package": "unix",
          "partial": "Process",
          "signature": "IO()-\u003eIO ProcessID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:forkProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eforkProcess\u003c/a\u003e\u003c/code\u003e in the style of \u003ccode\u003eforkIOWithUnmask\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "forkProcessWithUnmask",
          "package": "unix",
          "signature": "((forall a.  IO a -\u003e IO a) -\u003e IO ()) -\u003e IO ProcessID",
          "source": "src/System-Posix-Process-Common.html#forkProcessWithUnmask",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:forkProcessWithUnmask\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:forkProcessWithUnmask\"]"
        },
        "index": {
          "description": "Variant of forkProcess in the style of forkIOWithUnmask Since",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "forkProcessWithUnmask",
          "normalized": "((a b IO c-\u003eIO c)-\u003eIO())-\u003eIO ProcessID",
          "package": "unix",
          "partial": "Process With Unmask",
          "signature": "((forall a. IO a-\u003eIO a)-\u003eIO())-\u003eIO ProcessID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:forkProcessWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetAnyProcessStatus\u003c/a\u003e\u003c/code\u003e blk stopped\u003c/code\u003e calls \u003ccode\u003ewaitpid\u003c/code\u003e, returning\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (pid, tc)\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eProcessID\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProcessStatus\u003c/a\u003e\u003c/code\u003e for any\n   child process if a child process has exited, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n   there are child processes but none have exited.  If there are no\n   child processes, then \u003ccode\u003e\u003ca\u003egetAnyProcessStatus\u003c/a\u003e\u003c/code\u003e raises an\n   \u003ccode\u003eisDoesNotExistError\u003c/code\u003e exception.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eblk\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003eWNOHANG\u003c/code\u003e is set in the options for\n   \u003ccode\u003ewaitpid\u003c/code\u003e, otherwise not.  If \u003ccode\u003estopped\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, then\n   \u003ccode\u003eWUNTRACED\u003c/code\u003e is set in the options for \u003ccode\u003ewaitpid\u003c/code\u003e, otherwise not.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getAnyProcessStatus",
          "package": "unix",
          "signature": "Bool -\u003e Bool -\u003e IO (Maybe (ProcessID, ProcessStatus))",
          "source": "src/System-Posix-Process-Common.html#getAnyProcessStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getAnyProcessStatus\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getAnyProcessStatus\"]"
        },
        "index": {
          "description": "getAnyProcessStatus blk stopped calls waitpid returning Just pid tc the ProcessID and ProcessStatus for any child process if child process has exited or Nothing if there are child processes but none have exited If there are no child processes then getAnyProcessStatus raises an isDoesNotExistError exception If blk is False then WNOHANG is set in the options for waitpid otherwise not If stopped is True then WUNTRACED is set in the options for waitpid otherwise not",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getAnyProcessStatus",
          "normalized": "Bool-\u003eBool-\u003eIO(Maybe(ProcessID,ProcessStatus))",
          "package": "unix",
          "partial": "Any Process Status",
          "signature": "Bool-\u003eBool-\u003eIO(Maybe(ProcessID,ProcessStatus))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getAnyProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetGroupProcessStatus\u003c/a\u003e\u003c/code\u003e blk stopped pgid\u003c/code\u003e calls \u003ccode\u003ewaitpid\u003c/code\u003e,\n   returning \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (pid, tc)\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eProcessID\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProcessStatus\u003c/a\u003e\u003c/code\u003e\n   for any process in group \u003ccode\u003epgid\u003c/code\u003e if one is available, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n   if there are child processes but none have exited.  If there are\n   no child processes, then \u003ccode\u003e\u003ca\u003egetGroupProcessStatus\u003c/a\u003e\u003c/code\u003e raises an\n   \u003ccode\u003eisDoesNotExistError\u003c/code\u003e exception.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eblk\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003eWNOHANG\u003c/code\u003e is set in the options for\n   \u003ccode\u003ewaitpid\u003c/code\u003e, otherwise not.  If \u003ccode\u003estopped\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, then\n   \u003ccode\u003eWUNTRACED\u003c/code\u003e is set in the options for \u003ccode\u003ewaitpid\u003c/code\u003e, otherwise not.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getGroupProcessStatus",
          "package": "unix",
          "signature": "Bool -\u003e Bool -\u003e ProcessGroupID -\u003e IO (Maybe (ProcessID, ProcessStatus))",
          "source": "src/System-Posix-Process-Common.html#getGroupProcessStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getGroupProcessStatus\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getGroupProcessStatus\"]"
        },
        "index": {
          "description": "getGroupProcessStatus blk stopped pgid calls waitpid returning Just pid tc the ProcessID and ProcessStatus for any process in group pgid if one is available or Nothing if there are child processes but none have exited If there are no child processes then getGroupProcessStatus raises an isDoesNotExistError exception If blk is False then WNOHANG is set in the options for waitpid otherwise not If stopped is True then WUNTRACED is set in the options for waitpid otherwise not",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getGroupProcessStatus",
          "normalized": "Bool-\u003eBool-\u003eProcessGroupID-\u003eIO(Maybe(ProcessID,ProcessStatus))",
          "package": "unix",
          "partial": "Group Process Status",
          "signature": "Bool-\u003eBool-\u003eProcessGroupID-\u003eIO(Maybe(ProcessID,ProcessStatus))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getGroupProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetProcessID\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003egetppid\u003c/code\u003e to obtain the \u003ccode\u003e\u003ca\u003eProcessID\u003c/a\u003e\u003c/code\u003e for\n   the parent of the current process.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getParentProcessID",
          "package": "unix",
          "signature": "IO ProcessID",
          "source": "src/System-Posix-Process-Common.html#getParentProcessID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getParentProcessID\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getParentProcessID\"]"
        },
        "index": {
          "description": "getProcessID calls getppid to obtain the ProcessID for the parent of the current process",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getParentProcessID",
          "package": "unix",
          "partial": "Parent Process ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getParentProcessID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetProcessGroupID\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003egetpgrp\u003c/code\u003e to obtain the\n   \u003ccode\u003e\u003ca\u003eProcessGroupID\u003c/a\u003e\u003c/code\u003e for the current process.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getProcessGroupID",
          "package": "unix",
          "signature": "IO ProcessGroupID",
          "source": "src/System-Posix-Process-Common.html#getProcessGroupID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessGroupID\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getProcessGroupID\"]"
        },
        "index": {
          "description": "getProcessGroupID calls getpgrp to obtain the ProcessGroupID for the current process",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getProcessGroupID",
          "package": "unix",
          "partial": "Process Group ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetProcessGroupIDOf\u003c/a\u003e\u003c/code\u003e pid\u003c/code\u003e calls \u003ccode\u003egetpgid\u003c/code\u003e to obtain the\n   \u003ccode\u003e\u003ca\u003eProcessGroupID\u003c/a\u003e\u003c/code\u003e for process \u003ccode\u003epid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getProcessGroupIDOf",
          "package": "unix",
          "signature": "ProcessID -\u003e IO ProcessGroupID",
          "source": "src/System-Posix-Process-Common.html#getProcessGroupIDOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessGroupIDOf\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getProcessGroupIDOf\"]"
        },
        "index": {
          "description": "getProcessGroupIDOf pid calls getpgid to obtain the ProcessGroupID for process pid",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getProcessGroupIDOf",
          "normalized": "ProcessID-\u003eIO ProcessGroupID",
          "package": "unix",
          "partial": "Process Group IDOf",
          "signature": "ProcessID-\u003eIO ProcessGroupID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessGroupIDOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getProcessGroupPriority",
          "package": "unix",
          "signature": "ProcessGroupID -\u003e IO Int",
          "source": "src/System-Posix-Process-Common.html#getProcessGroupPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessGroupPriority\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getProcessGroupPriority\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getProcessGroupPriority",
          "normalized": "ProcessGroupID-\u003eIO Int",
          "package": "unix",
          "partial": "Process Group Priority",
          "signature": "ProcessGroupID-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessGroupPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetProcessID\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003egetpid\u003c/code\u003e to obtain the \u003ccode\u003e\u003ca\u003eProcessID\u003c/a\u003e\u003c/code\u003e for\n   the current process.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getProcessID",
          "package": "unix",
          "signature": "IO ProcessID",
          "source": "src/System-Posix-Process-Common.html#getProcessID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessID\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getProcessID\"]"
        },
        "index": {
          "description": "getProcessID calls getpid to obtain the ProcessID for the current process",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getProcessID",
          "package": "unix",
          "partial": "Process ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getProcessPriority",
          "package": "unix",
          "signature": "ProcessID -\u003e IO Int",
          "source": "src/System-Posix-Process-Common.html#getProcessPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessPriority\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getProcessPriority\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getProcessPriority",
          "normalized": "ProcessID-\u003eIO Int",
          "package": "unix",
          "partial": "Process Priority",
          "signature": "ProcessID-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e blk stopped pid\u003c/code\u003e calls \u003ccode\u003ewaitpid\u003c/code\u003e, returning\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e tc\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eProcessStatus\u003c/a\u003e\u003c/code\u003e for process \u003ccode\u003epid\u003c/code\u003e if it is\n   available, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.  If \u003ccode\u003eblk\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, then\n   \u003ccode\u003eWNOHANG\u003c/code\u003e is set in the options for \u003ccode\u003ewaitpid\u003c/code\u003e, otherwise not.\n   If \u003ccode\u003estopped\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003eWUNTRACED\u003c/code\u003e is set in the\n   options for \u003ccode\u003ewaitpid\u003c/code\u003e, otherwise not.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getProcessStatus",
          "package": "unix",
          "signature": "Bool -\u003e Bool -\u003e ProcessID -\u003e IO (Maybe ProcessStatus)",
          "source": "src/System-Posix-Process-Common.html#getProcessStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessStatus\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getProcessStatus\"]"
        },
        "index": {
          "description": "getProcessStatus blk stopped pid calls waitpid returning Just tc the ProcessStatus for process pid if it is available Nothing otherwise If blk is False then WNOHANG is set in the options for waitpid otherwise not If stopped is True then WUNTRACED is set in the options for waitpid otherwise not",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getProcessStatus",
          "normalized": "Bool-\u003eBool-\u003eProcessID-\u003eIO(Maybe ProcessStatus)",
          "package": "unix",
          "partial": "Process Status",
          "signature": "Bool-\u003eBool-\u003eProcessID-\u003eIO(Maybe ProcessStatus)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetProcessTimes\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003etimes\u003c/code\u003e to obtain time-accounting\n   information for the current process and its children.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getProcessTimes",
          "package": "unix",
          "signature": "IO ProcessTimes",
          "source": "src/System-Posix-Process-Common.html#getProcessTimes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessTimes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getProcessTimes\"]"
        },
        "index": {
          "description": "getProcessTimes calls times to obtain time-accounting information for the current process and its children",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getProcessTimes",
          "package": "unix",
          "partial": "Process Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getProcessTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "getUserPriority",
          "package": "unix",
          "signature": "UserID -\u003e IO Int",
          "source": "src/System-Posix-Process-Common.html#getUserPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getUserPriority\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:getUserPriority\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "getUserPriority",
          "normalized": "UserID-\u003eIO Int",
          "package": "unix",
          "partial": "User Priority",
          "signature": "UserID-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:getUserPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ejoinProcessGroup\u003c/a\u003e\u003c/code\u003e pgid\u003c/code\u003e calls \u003ccode\u003esetpgid\u003c/code\u003e to set the\n   \u003ccode\u003e\u003ca\u003eProcessGroupID\u003c/a\u003e\u003c/code\u003e of the current process to \u003ccode\u003epgid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "joinProcessGroup",
          "package": "unix",
          "signature": "ProcessGroupID -\u003e IO ()",
          "source": "src/System-Posix-Process-Common.html#joinProcessGroup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:joinProcessGroup\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:joinProcessGroup\"]"
        },
        "index": {
          "description": "joinProcessGroup pgid calls setpgid to set the ProcessGroupID of the current process to pgid",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "joinProcessGroup",
          "normalized": "ProcessGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Process Group",
          "signature": "ProcessGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:joinProcessGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "nice",
          "package": "unix",
          "signature": "Int -\u003e IO ()",
          "source": "src/System-Posix-Process-Common.html#nice",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:nice\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:nice\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "nice",
          "normalized": "Int-\u003eIO()",
          "package": "unix",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:nice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This function is scheduled to be replaced by something different in the future, we therefore recommend that you do not use this version and use \u003ccode\u003e\u003ca\u003esetProcessGroupIDOf\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetProcessGroupID\u003c/a\u003e\u003c/code\u003e pid pgid\u003c/code\u003e calls \u003ccode\u003esetpgid\u003c/code\u003e to set the\n   \u003ccode\u003e\u003ca\u003eProcessGroupID\u003c/a\u003e\u003c/code\u003e for process \u003ccode\u003epid\u003c/code\u003e to \u003ccode\u003epgid\u003c/code\u003e.\n   This function is currently deprecated,\n   and might be changed to setting the \u003ccode\u003e\u003ca\u003eProcessGroupID\u003c/a\u003e\u003c/code\u003e\n   for the current process in future versions.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "setProcessGroupID",
          "package": "unix",
          "signature": "ProcessID -\u003e ProcessGroupID -\u003e IO ()",
          "source": "src/System-Posix-Process-Common.html#setProcessGroupID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setProcessGroupID\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:setProcessGroupID\"]"
        },
        "index": {
          "description": "Deprecated This function is scheduled to be replaced by something different in the future we therefore recommend that you do not use this version and use setProcessGroupIDOf instead setProcessGroupID pid pgid calls setpgid to set the ProcessGroupID for process pid to pgid This function is currently deprecated and might be changed to setting the ProcessGroupID for the current process in future versions",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "setProcessGroupID",
          "normalized": "ProcessID-\u003eProcessGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Process Group ID",
          "signature": "ProcessID-\u003eProcessGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setProcessGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetProcessGroupIDOf\u003c/a\u003e\u003c/code\u003e pid pgid\u003c/code\u003e calls \u003ccode\u003esetpgid\u003c/code\u003e to set the\n   \u003ccode\u003eProcessGroupIDOf\u003c/code\u003e for process \u003ccode\u003epid\u003c/code\u003e to \u003ccode\u003epgid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "setProcessGroupIDOf",
          "package": "unix",
          "signature": "ProcessID -\u003e ProcessGroupID -\u003e IO ()",
          "source": "src/System-Posix-Process-Common.html#setProcessGroupIDOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setProcessGroupIDOf\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:setProcessGroupIDOf\"]"
        },
        "index": {
          "description": "setProcessGroupIDOf pid pgid calls setpgid to set the ProcessGroupIDOf for process pid to pgid",
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "setProcessGroupIDOf",
          "normalized": "ProcessID-\u003eProcessGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Process Group IDOf",
          "signature": "ProcessID-\u003eProcessGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setProcessGroupIDOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "setProcessGroupPriority",
          "package": "unix",
          "signature": "ProcessGroupID -\u003e Int -\u003e IO ()",
          "source": "src/System-Posix-Process-Common.html#setProcessGroupPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setProcessGroupPriority\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:setProcessGroupPriority\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "setProcessGroupPriority",
          "normalized": "ProcessGroupID-\u003eInt-\u003eIO()",
          "package": "unix",
          "partial": "Process Group Priority",
          "signature": "ProcessGroupID-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setProcessGroupPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "setProcessPriority",
          "package": "unix",
          "signature": "ProcessID -\u003e Int -\u003e IO ()",
          "source": "src/System-Posix-Process-Common.html#setProcessPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setProcessPriority\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:setProcessPriority\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "setProcessPriority",
          "normalized": "ProcessID-\u003eInt-\u003eIO()",
          "package": "unix",
          "partial": "Process Priority",
          "signature": "ProcessID-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setProcessPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "setUserPriority",
          "package": "unix",
          "signature": "UserID -\u003e Int -\u003e IO ()",
          "source": "src/System-Posix-Process-Common.html#setUserPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setUserPriority\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:setUserPriority\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "setUserPriority",
          "normalized": "UserID-\u003eInt-\u003eIO()",
          "package": "unix",
          "partial": "User Priority",
          "signature": "UserID-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:setUserPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "systemTime",
          "package": "unix",
          "signature": "ClockTick",
          "source": "src/System-Posix-Process-Common.html#ProcessTimes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:systemTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:systemTime\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "systemTime",
          "package": "unix",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:systemTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Process.ByteString\",\"System.Posix.Process\"]",
          "name": "userTime",
          "package": "unix",
          "signature": "ClockTick",
          "source": "src/System-Posix-Process-Common.html#ProcessTimes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:userTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:userTime\"]"
        },
        "index": {
          "hierarchy": "System Posix Process ByteString",
          "module": "System.Posix.Process.ByteString",
          "name": "userTime",
          "package": "unix",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-ByteString.html#v:userTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Process.Internals",
          "name": "Internals",
          "package": "unix",
          "source": "src/System-Posix-Process-Internals.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix Process Internals",
          "module": "System.Posix.Process.Internals",
          "name": "Internals",
          "package": "unix",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exit status of a process\n\u003c/p\u003e",
          "module": "System.Posix.Process.Internals",
          "name": "ProcessStatus",
          "package": "unix",
          "source": "src/System-Posix-Process-Internals.html#ProcessStatus",
          "type": "data"
        },
        "index": {
          "description": "The exit status of process",
          "hierarchy": "System Posix Process Internals",
          "module": "System.Posix.Process.Internals",
          "name": "ProcessStatus",
          "package": "unix",
          "partial": "Process Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-Internals.html#t:ProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Process.Internals",
          "name": "c_execvpe",
          "package": "unix",
          "signature": "CString -\u003e Ptr CString -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/System-Posix-Process-Internals.html#c_execvpe",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Process Internals",
          "module": "System.Posix.Process.Internals",
          "name": "c_execvpe",
          "normalized": "CString-\u003ePtr CString-\u003ePtr CString-\u003eIO CInt",
          "package": "unix",
          "signature": "CString-\u003ePtr CString-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-Internals.html#v:c_execvpe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Process.Internals",
          "name": "decipherWaitStatus",
          "package": "unix",
          "signature": "CInt -\u003e IO ProcessStatus",
          "source": "src/System-Posix-Process-Internals.html#decipherWaitStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Process Internals",
          "module": "System.Posix.Process.Internals",
          "name": "decipherWaitStatus",
          "normalized": "CInt-\u003eIO ProcessStatus",
          "package": "unix",
          "partial": "Wait Status",
          "signature": "CInt-\u003eIO ProcessStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-Internals.html#v:decipherWaitStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Process.Internals",
          "name": "pPrPr_disableITimers",
          "package": "unix",
          "signature": "IO ()",
          "source": "src/System-Posix-Process-Internals.html#pPrPr_disableITimers",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Process Internals",
          "module": "System.Posix.Process.Internals",
          "name": "pPrPr_disableITimers",
          "normalized": "IO()",
          "package": "unix",
          "partial": "Pr Pr ITimers",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process-Internals.html#v:pPrPr_disableITimers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX process support.  See also the System.Cmd and System.Process\n modules in the process package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Process",
          "name": "Process",
          "package": "unix",
          "source": "src/System-Posix-Process.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX process support See also the System.Cmd and System.Process modules in the process package",
          "hierarchy": "System Posix Process",
          "module": "System.Posix.Process",
          "name": "Process",
          "package": "unix",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exit status of a process\n\u003c/p\u003e",
          "module": "System.Posix.Process",
          "name": "ProcessStatus",
          "package": "unix",
          "source": "src/System-Posix-Process-Internals.html#ProcessStatus",
          "type": "data"
        },
        "index": {
          "description": "The exit status of process",
          "hierarchy": "System Posix Process",
          "module": "System.Posix.Process",
          "name": "ProcessStatus",
          "package": "unix",
          "partial": "Process Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#t:ProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Process",
          "name": "ProcessTimes",
          "package": "unix",
          "source": "src/System-Posix-Process-Common.html#ProcessTimes",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Process",
          "module": "System.Posix.Process",
          "name": "ProcessTimes",
          "package": "unix",
          "partial": "Process Times",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#t:ProcessTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eexecuteFile\u003c/a\u003e\u003c/code\u003e cmd args env\u003c/code\u003e calls one of the\n   \u003ccode\u003eexecv*\u003c/code\u003e family, depending on whether or not the current\n   PATH is to be searched for the command, and whether or not an\n   environment is provided to supersede the process's current\n   environment.  The basename (leading directory names suppressed) of\n   the command is passed to \u003ccode\u003eexecv*\u003c/code\u003e as \u003ccode\u003earg[0]\u003c/code\u003e;\n   the argument list passed to \u003ccode\u003e\u003ca\u003eexecuteFile\u003c/a\u003e\u003c/code\u003e therefore \n   begins with \u003ccode\u003earg[1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Process",
          "name": "executeFile",
          "package": "unix",
          "signature": "FilePath-\u003e Bool-\u003e [String]-\u003e Maybe [(String, String)]-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "executeFile cmd args env calls one of the execv family depending on whether or not the current PATH is to be searched for the command and whether or not an environment is provided to supersede the process current environment The basename leading directory names suppressed of the command is passed to execv as arg the argument list passed to executeFile therefore begins with arg",
          "hierarchy": "System Posix Process",
          "module": "System.Posix.Process",
          "name": "executeFile",
          "normalized": "FilePath-\u003eBool-\u003e[String]-\u003eMaybe[(String,String)]-\u003eIO a",
          "package": "unix",
          "partial": "File",
          "signature": "FilePath-\u003eBool-\u003e[String]-\u003eMaybe[(String,String)]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Process.html#v:executeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX resource support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Resource",
          "name": "Resource",
          "package": "unix",
          "source": "src/System-Posix-Resource.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX resource support",
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "Resource",
          "package": "unix",
          "partial": "Resource",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "Resource",
          "package": "unix",
          "source": "src/System-Posix-Resource.html#Resource",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "Resource",
          "package": "unix",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceLimit",
          "package": "unix",
          "source": "src/System-Posix-Resource.html#ResourceLimit",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceLimit",
          "package": "unix",
          "partial": "Resource Limit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#t:ResourceLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceLimits",
          "package": "unix",
          "source": "src/System-Posix-Resource.html#ResourceLimits",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceLimits",
          "package": "unix",
          "partial": "Resource Limits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#t:ResourceLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceCPUTime",
          "package": "unix",
          "signature": "ResourceCPUTime",
          "source": "src/System-Posix-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceCPUTime",
          "package": "unix",
          "partial": "Resource CPUTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceCPUTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceCoreFileSize",
          "package": "unix",
          "signature": "ResourceCoreFileSize",
          "source": "src/System-Posix-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceCoreFileSize",
          "package": "unix",
          "partial": "Resource Core File Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceCoreFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceDataSize",
          "package": "unix",
          "signature": "ResourceDataSize",
          "source": "src/System-Posix-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceDataSize",
          "package": "unix",
          "partial": "Resource Data Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceDataSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceFileSize",
          "package": "unix",
          "signature": "ResourceFileSize",
          "source": "src/System-Posix-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceFileSize",
          "package": "unix",
          "partial": "Resource File Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceLimit",
          "package": "unix",
          "signature": "ResourceLimit Integer",
          "source": "src/System-Posix-Resource.html#ResourceLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceLimit",
          "package": "unix",
          "partial": "Resource Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceLimitInfinity",
          "package": "unix",
          "signature": "ResourceLimitInfinity",
          "source": "src/System-Posix-Resource.html#ResourceLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceLimitInfinity",
          "package": "unix",
          "partial": "Resource Limit Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceLimitInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceLimitUnknown",
          "package": "unix",
          "signature": "ResourceLimitUnknown",
          "source": "src/System-Posix-Resource.html#ResourceLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceLimitUnknown",
          "package": "unix",
          "partial": "Resource Limit Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceLimitUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceLimits",
          "package": "unix",
          "signature": "ResourceLimits",
          "source": "src/System-Posix-Resource.html#ResourceLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceLimits",
          "package": "unix",
          "partial": "Resource Limits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceOpenFiles",
          "package": "unix",
          "signature": "ResourceOpenFiles",
          "source": "src/System-Posix-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceOpenFiles",
          "package": "unix",
          "partial": "Resource Open Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceOpenFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceStackSize",
          "package": "unix",
          "signature": "ResourceStackSize",
          "source": "src/System-Posix-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceStackSize",
          "package": "unix",
          "partial": "Resource Stack Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceStackSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "ResourceTotalMemory",
          "package": "unix",
          "signature": "ResourceTotalMemory",
          "source": "src/System-Posix-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "ResourceTotalMemory",
          "package": "unix",
          "partial": "Resource Total Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:ResourceTotalMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "getResourceLimit",
          "package": "unix",
          "signature": "Resource -\u003e IO ResourceLimits",
          "source": "src/System-Posix-Resource.html#getResourceLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "getResourceLimit",
          "normalized": "Resource-\u003eIO ResourceLimits",
          "package": "unix",
          "partial": "Resource Limit",
          "signature": "Resource-\u003eIO ResourceLimits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:getResourceLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "hardLimit",
          "package": "unix",
          "signature": "ResourceLimit",
          "source": "src/System-Posix-Resource.html#ResourceLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "hardLimit",
          "package": "unix",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:hardLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "setResourceLimit",
          "package": "unix",
          "signature": "Resource -\u003e ResourceLimits -\u003e IO ()",
          "source": "src/System-Posix-Resource.html#setResourceLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "setResourceLimit",
          "normalized": "Resource-\u003eResourceLimits-\u003eIO()",
          "package": "unix",
          "partial": "Resource Limit",
          "signature": "Resource-\u003eResourceLimits-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:setResourceLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Resource",
          "name": "softLimit",
          "package": "unix",
          "signature": "ResourceLimit",
          "source": "src/System-Posix-Resource.html#ResourceLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Resource",
          "module": "System.Posix.Resource",
          "name": "softLimit",
          "package": "unix",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Resource.html#v:softLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX named semaphore support.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Semaphore",
          "name": "Semaphore",
          "package": "unix",
          "source": "src/System-Posix-Semaphore.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX named semaphore support",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "Semaphore",
          "package": "unix",
          "partial": "Semaphore",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Semaphore",
          "name": "OpenSemFlags",
          "package": "unix",
          "source": "src/System-Posix-Semaphore.html#OpenSemFlags",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "OpenSemFlags",
          "package": "unix",
          "partial": "Open Sem Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#t:OpenSemFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Semaphore",
          "name": "Semaphore",
          "package": "unix",
          "source": "src/System-Posix-Semaphore.html#Semaphore",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "Semaphore",
          "package": "unix",
          "partial": "Semaphore",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#t:Semaphore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Semaphore",
          "name": "OpenSemFlags",
          "package": "unix",
          "signature": "OpenSemFlags",
          "source": "src/System-Posix-Semaphore.html#OpenSemFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "OpenSemFlags",
          "package": "unix",
          "partial": "Open Sem Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:OpenSemFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf true, create the semaphore if it\n   does not yet exist.\n\u003c/p\u003e",
          "module": "System.Posix.Semaphore",
          "name": "semCreate",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-Semaphore.html#OpenSemFlags",
          "type": "function"
        },
        "index": {
          "description": "If true create the semaphore if it does not yet exist",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "semCreate",
          "package": "unix",
          "partial": "Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:semCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf true, throw an exception if the\n   semaphore already exists.\n\u003c/p\u003e",
          "module": "System.Posix.Semaphore",
          "name": "semExclusive",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-Semaphore.html#OpenSemFlags",
          "type": "function"
        },
        "index": {
          "description": "If true throw an exception if the semaphore already exists",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "semExclusive",
          "package": "unix",
          "partial": "Exclusive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:semExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the semaphore's current value.\n\u003c/p\u003e",
          "module": "System.Posix.Semaphore",
          "name": "semGetValue",
          "package": "unix",
          "signature": "Semaphore -\u003e IO Int",
          "source": "src/System-Posix-Semaphore.html#semGetValue",
          "type": "function"
        },
        "index": {
          "description": "Return the semaphore current value",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "semGetValue",
          "normalized": "Semaphore-\u003eIO Int",
          "package": "unix",
          "partial": "Get Value",
          "signature": "Semaphore-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:semGetValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a named semaphore with the given name, flags, mode, and initial \n   value.\n\u003c/p\u003e",
          "module": "System.Posix.Semaphore",
          "name": "semOpen",
          "package": "unix",
          "signature": "String -\u003e OpenSemFlags -\u003e FileMode -\u003e Int -\u003e IO Semaphore",
          "source": "src/System-Posix-Semaphore.html#semOpen",
          "type": "function"
        },
        "index": {
          "description": "Open named semaphore with the given name flags mode and initial value",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "semOpen",
          "normalized": "String-\u003eOpenSemFlags-\u003eFileMode-\u003eInt-\u003eIO Semaphore",
          "package": "unix",
          "partial": "Open",
          "signature": "String-\u003eOpenSemFlags-\u003eFileMode-\u003eInt-\u003eIO Semaphore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:semOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlock the semaphore.\n\u003c/p\u003e",
          "module": "System.Posix.Semaphore",
          "name": "semPost",
          "package": "unix",
          "signature": "Semaphore -\u003e IO ()",
          "source": "src/System-Posix-Semaphore.html#semPost",
          "type": "function"
        },
        "index": {
          "description": "Unlock the semaphore",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "semPost",
          "normalized": "Semaphore-\u003eIO()",
          "package": "unix",
          "partial": "Post",
          "signature": "Semaphore-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:semPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoll the semaphore until it is available, then lock it.  Unlike \n   semWait, this will block only the current thread rather than the\n   entire process.\n\u003c/p\u003e",
          "module": "System.Posix.Semaphore",
          "name": "semThreadWait",
          "package": "unix",
          "signature": "Semaphore -\u003e IO ()",
          "source": "src/System-Posix-Semaphore.html#semThreadWait",
          "type": "function"
        },
        "index": {
          "description": "Poll the semaphore until it is available then lock it Unlike semWait this will block only the current thread rather than the entire process",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "semThreadWait",
          "normalized": "Semaphore-\u003eIO()",
          "package": "unix",
          "partial": "Thread Wait",
          "signature": "Semaphore-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:semThreadWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to lock the semaphore without blocking.  Immediately return\n   False if it is not available.\n\u003c/p\u003e",
          "module": "System.Posix.Semaphore",
          "name": "semTryWait",
          "package": "unix",
          "signature": "Semaphore -\u003e IO Bool",
          "source": "src/System-Posix-Semaphore.html#semTryWait",
          "type": "function"
        },
        "index": {
          "description": "Attempt to lock the semaphore without blocking Immediately return False if it is not available",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "semTryWait",
          "normalized": "Semaphore-\u003eIO Bool",
          "package": "unix",
          "partial": "Try Wait",
          "signature": "Semaphore-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:semTryWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the semaphore with the given name.\n\u003c/p\u003e",
          "module": "System.Posix.Semaphore",
          "name": "semUnlink",
          "package": "unix",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Posix-Semaphore.html#semUnlink",
          "type": "function"
        },
        "index": {
          "description": "Delete the semaphore with the given name",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "semUnlink",
          "normalized": "String-\u003eIO()",
          "package": "unix",
          "partial": "Unlink",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:semUnlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLock the semaphore, blocking until it becomes available.  Since this\n   is done through a system call, this will block the *entire runtime*,\n   not just the current thread.  If this is not the behaviour you want,\n   use semThreadWait instead. \n\u003c/p\u003e",
          "module": "System.Posix.Semaphore",
          "name": "semWait",
          "package": "unix",
          "signature": "Semaphore -\u003e IO ()",
          "source": "src/System-Posix-Semaphore.html#semWait",
          "type": "function"
        },
        "index": {
          "description": "Lock the semaphore blocking until it becomes available Since this is done through system call this will block the entire runtime not just the current thread If this is not the behaviour you want use semThreadWait instead",
          "hierarchy": "System Posix Semaphore",
          "module": "System.Posix.Semaphore",
          "name": "semWait",
          "normalized": "Semaphore-\u003eIO()",
          "package": "unix",
          "partial": "Wait",
          "signature": "Semaphore-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Semaphore.html#v:semWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX shared memory support.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.SharedMem",
          "name": "SharedMem",
          "package": "unix",
          "source": "src/System-Posix-SharedMem.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX shared memory support",
          "hierarchy": "System Posix SharedMem",
          "module": "System.Posix.SharedMem",
          "name": "SharedMem",
          "package": "unix",
          "partial": "Shared Mem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-SharedMem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.SharedMem",
          "name": "ShmOpenFlags",
          "package": "unix",
          "source": "src/System-Posix-SharedMem.html#ShmOpenFlags",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix SharedMem",
          "module": "System.Posix.SharedMem",
          "name": "ShmOpenFlags",
          "package": "unix",
          "partial": "Shm Open Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-SharedMem.html#t:ShmOpenFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.SharedMem",
          "name": "ShmOpenFlags",
          "package": "unix",
          "signature": "ShmOpenFlags",
          "source": "src/System-Posix-SharedMem.html#ShmOpenFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix SharedMem",
          "module": "System.Posix.SharedMem",
          "name": "ShmOpenFlags",
          "package": "unix",
          "partial": "Shm Open Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-SharedMem.html#v:ShmOpenFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf true, create the shm object if it does not exist. \n\u003c/p\u003e",
          "module": "System.Posix.SharedMem",
          "name": "shmCreate",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-SharedMem.html#ShmOpenFlags",
          "type": "function"
        },
        "index": {
          "description": "If true create the shm object if it does not exist",
          "hierarchy": "System Posix SharedMem",
          "module": "System.Posix.SharedMem",
          "name": "shmCreate",
          "package": "unix",
          "partial": "Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-SharedMem.html#v:shmCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf true, throw an exception if the shm object already exists.\n\u003c/p\u003e",
          "module": "System.Posix.SharedMem",
          "name": "shmExclusive",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-SharedMem.html#ShmOpenFlags",
          "type": "function"
        },
        "index": {
          "description": "If true throw an exception if the shm object already exists",
          "hierarchy": "System Posix SharedMem",
          "module": "System.Posix.SharedMem",
          "name": "shmExclusive",
          "package": "unix",
          "partial": "Exclusive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-SharedMem.html#v:shmExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a shared memory object with the given name, flags, and mode.\n\u003c/p\u003e",
          "module": "System.Posix.SharedMem",
          "name": "shmOpen",
          "package": "unix",
          "signature": "String -\u003e ShmOpenFlags -\u003e FileMode -\u003e IO Fd",
          "source": "src/System-Posix-SharedMem.html#shmOpen",
          "type": "function"
        },
        "index": {
          "description": "Open shared memory object with the given name flags and mode",
          "hierarchy": "System Posix SharedMem",
          "module": "System.Posix.SharedMem",
          "name": "shmOpen",
          "normalized": "String-\u003eShmOpenFlags-\u003eFileMode-\u003eIO Fd",
          "package": "unix",
          "partial": "Open",
          "signature": "String-\u003eShmOpenFlags-\u003eFileMode-\u003eIO Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-SharedMem.html#v:shmOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf true, open the shm object read-write rather than read-only. \n\u003c/p\u003e",
          "module": "System.Posix.SharedMem",
          "name": "shmReadWrite",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-SharedMem.html#ShmOpenFlags",
          "type": "function"
        },
        "index": {
          "description": "If true open the shm object read-write rather than read-only",
          "hierarchy": "System Posix SharedMem",
          "module": "System.Posix.SharedMem",
          "name": "shmReadWrite",
          "package": "unix",
          "partial": "Read Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-SharedMem.html#v:shmReadWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf true, wipe the contents of the shm object after opening it.\n\u003c/p\u003e",
          "module": "System.Posix.SharedMem",
          "name": "shmTrunc",
          "package": "unix",
          "signature": "Bool",
          "source": "src/System-Posix-SharedMem.html#ShmOpenFlags",
          "type": "function"
        },
        "index": {
          "description": "If true wipe the contents of the shm object after opening it",
          "hierarchy": "System Posix SharedMem",
          "module": "System.Posix.SharedMem",
          "name": "shmTrunc",
          "package": "unix",
          "partial": "Trunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-SharedMem.html#v:shmTrunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the shared memory object with the given name.\n\u003c/p\u003e",
          "module": "System.Posix.SharedMem",
          "name": "shmUnlink",
          "package": "unix",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Posix-SharedMem.html#shmUnlink",
          "type": "function"
        },
        "index": {
          "description": "Delete the shared memory object with the given name",
          "hierarchy": "System Posix SharedMem",
          "module": "System.Posix.SharedMem",
          "name": "shmUnlink",
          "normalized": "String-\u003eIO()",
          "package": "unix",
          "partial": "Unlink",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-SharedMem.html#v:shmUnlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003enon-POSIX signal support commonly available\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Signals.Exts",
          "name": "Exts",
          "package": "unix",
          "source": "src/System-Posix-Signals-Exts.html",
          "type": "module"
        },
        "index": {
          "description": "non-POSIX signal support commonly available",
          "hierarchy": "System Posix Signals Exts",
          "module": "System.Posix.Signals.Exts",
          "name": "Exts",
          "package": "unix",
          "partial": "Exts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals-Exts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals.Exts",
          "name": "sigWINCH",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals-Exts.html#sigWINCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals Exts",
          "module": "System.Posix.Signals.Exts",
          "name": "sigWINCH",
          "package": "unix",
          "partial": "WINCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals-Exts.html#v:sigWINCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals.Exts",
          "name": "windowChange",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals-Exts.html#windowChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals Exts",
          "module": "System.Posix.Signals.Exts",
          "name": "windowChange",
          "package": "unix",
          "partial": "Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals-Exts.html#v:windowChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX signal support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Signals",
          "name": "Signals",
          "package": "unix",
          "source": "src/System-Posix-Signals.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX signal support",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "Signals",
          "package": "unix",
          "partial": "Signals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actions to perform when a signal is received.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "Handler",
          "package": "unix",
          "source": "src/System-Posix-Signals.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "The actions to perform when signal is received",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "Handler",
          "package": "unix",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "Signal",
          "package": "unix",
          "source": "src/System-Posix-Signals.html#Signal",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "Signal",
          "package": "unix",
          "partial": "Signal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a received signal (derived from \u003ccode\u003esiginfo_t\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "SignalInfo",
          "package": "unix",
          "source": "src/System-Posix-Signals.html#SignalInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about received signal derived from siginfo Since",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "SignalInfo",
          "package": "unix",
          "partial": "Signal Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#t:SignalInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "SignalSet",
          "package": "unix",
          "source": "src/System-Posix-Signals.html#SignalSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "SignalSet",
          "package": "unix",
          "partial": "Signal Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#t:SignalSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation specific to a particular type of signal\n (derived from \u003ccode\u003esiginfo_t\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "SignalSpecificInfo",
          "package": "unix",
          "source": "src/System-Posix-Signals.html#SignalSpecificInfo",
          "type": "data"
        },
        "index": {
          "description": "Information specific to particular type of signal derived from siginfo Since",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "SignalSpecificInfo",
          "package": "unix",
          "partial": "Signal Specific Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#t:SignalSpecificInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "Catch",
          "package": "unix",
          "signature": "Catch (IO ())",
          "source": "src/System-Posix-Signals.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "Catch",
          "normalized": "Catch(IO())",
          "package": "unix",
          "partial": "Catch",
          "signature": "Catch(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:Catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "CatchInfo",
          "package": "unix",
          "signature": "CatchInfo (SignalInfo -\u003e IO ())",
          "source": "src/System-Posix-Signals.html#Handler",
          "type": "function"
        },
        "index": {
          "description": "Since",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "CatchInfo",
          "normalized": "CatchInfo(SignalInfo-\u003eIO())",
          "package": "unix",
          "partial": "Catch Info",
          "signature": "CatchInfo(SignalInfo-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:CatchInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eSince: 2.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "CatchInfoOnce",
          "package": "unix",
          "signature": "CatchInfoOnce (SignalInfo -\u003e IO ())",
          "source": "src/System-Posix-Signals.html#Handler",
          "type": "function"
        },
        "index": {
          "description": "Since",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "CatchInfoOnce",
          "normalized": "CatchInfoOnce(SignalInfo-\u003eIO())",
          "package": "unix",
          "partial": "Catch Info Once",
          "signature": "CatchInfoOnce(SignalInfo-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:CatchInfoOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "CatchOnce",
          "package": "unix",
          "signature": "CatchOnce (IO ())",
          "source": "src/System-Posix-Signals.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "CatchOnce",
          "normalized": "CatchOnce(IO())",
          "package": "unix",
          "partial": "Catch Once",
          "signature": "CatchOnce(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:CatchOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "Default",
          "package": "unix",
          "signature": "Default",
          "source": "src/System-Posix-Signals.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "Default",
          "package": "unix",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "Ignore",
          "package": "unix",
          "signature": "Ignore",
          "source": "src/System-Posix-Signals.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "Ignore",
          "package": "unix",
          "partial": "Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:Ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "NoSignalSpecificInfo",
          "package": "unix",
          "signature": "NoSignalSpecificInfo",
          "source": "src/System-Posix-Signals.html#SignalSpecificInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "NoSignalSpecificInfo",
          "package": "unix",
          "partial": "No Signal Specific Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:NoSignalSpecificInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "SigChldInfo",
          "package": "unix",
          "signature": "SigChldInfo",
          "source": "src/System-Posix-Signals.html#SignalSpecificInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "SigChldInfo",
          "package": "unix",
          "partial": "Sig Chld Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:SigChldInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "SignalInfo",
          "package": "unix",
          "signature": "SignalInfo",
          "source": "src/System-Posix-Signals.html#SignalInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "SignalInfo",
          "package": "unix",
          "partial": "Signal Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:SignalInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "addSignal",
          "package": "unix",
          "signature": "Signal -\u003e SignalSet -\u003e SignalSet",
          "source": "src/System-Posix-Signals.html#addSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "addSignal",
          "normalized": "Signal-\u003eSignalSet-\u003eSignalSet",
          "package": "unix",
          "partial": "Signal",
          "signature": "Signal-\u003eSignalSet-\u003eSignalSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:addSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eawaitSignal iset\u003c/code\u003e suspends execution until an interrupt is received.\n If \u003ccode\u003eiset\u003c/code\u003e is \u003ccode\u003eJust s\u003c/code\u003e, \u003ccode\u003eawaitSignal\u003c/code\u003e calls \u003ccode\u003esigsuspend\u003c/code\u003e, installing\n \u003ccode\u003es\u003c/code\u003e as the new signal mask before suspending execution; otherwise, it\n calls \u003ccode\u003esigsuspend\u003c/code\u003e with current signal mask. Note that RTS\n scheduler signal (either \u003ccode\u003e\u003ca\u003evirtualTimerExpired\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erealTimeAlarm\u003c/a\u003e\u003c/code\u003e)\n could cause premature termination of this call. It might be necessary to block that\n signal before invocation of \u003ccode\u003eawaitSignal\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eblockSignals\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereservedSignals\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eawaitSignal\u003c/code\u003e returns when signal was received and processed by a\n signal handler, or if the signal could not be caught. If you have\n installed any signal handlers with \u003ccode\u003einstallHandler\u003c/code\u003e, it may be wise\n to call \u003ccode\u003eyield\u003c/code\u003e directly after \u003ccode\u003eawaitSignal\u003c/code\u003e to ensure that the\n signal handler runs as promptly as possible.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "awaitSignal",
          "package": "unix",
          "signature": "Maybe SignalSet -\u003e IO ()",
          "source": "src/System-Posix-Signals.html#awaitSignal",
          "type": "function"
        },
        "index": {
          "description": "awaitSignal iset suspends execution until an interrupt is received If iset is Just awaitSignal calls sigsuspend installing as the new signal mask before suspending execution otherwise it calls sigsuspend with current signal mask Note that RTS scheduler signal either virtualTimerExpired or realTimeAlarm could cause premature termination of this call It might be necessary to block that signal before invocation of awaitSignal with blockSignals reservedSignals awaitSignal returns when signal was received and processed by signal handler or if the signal could not be caught If you have installed any signal handlers with installHandler it may be wise to call yield directly after awaitSignal to ensure that the signal handler runs as promptly as possible",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "awaitSignal",
          "normalized": "Maybe SignalSet-\u003eIO()",
          "package": "unix",
          "partial": "Signal",
          "signature": "Maybe SignalSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:awaitSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "backgroundRead",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#backgroundRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "backgroundRead",
          "package": "unix",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:backgroundRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "backgroundWrite",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#backgroundWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "backgroundWrite",
          "package": "unix",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:backgroundWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "badSystemCall",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#badSystemCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "badSystemCall",
          "package": "unix",
          "partial": "System Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:badSystemCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eblockSignals mask\u003c/code\u003e calls \u003ccode\u003esigprocmask\u003c/code\u003e with\n   \u003ccode\u003eSIG_BLOCK\u003c/code\u003e to add all interrupts in \u003ccode\u003emask\u003c/code\u003e to the\n  set of blocked interrupts.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "blockSignals",
          "package": "unix",
          "signature": "SignalSet -\u003e IO ()",
          "source": "src/System-Posix-Signals.html#blockSignals",
          "type": "function"
        },
        "index": {
          "description": "blockSignals mask calls sigprocmask with SIG BLOCK to add all interrupts in mask to the set of blocked interrupts",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "blockSignals",
          "normalized": "SignalSet-\u003eIO()",
          "package": "unix",
          "partial": "Signals",
          "signature": "SignalSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:blockSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "breakpointTrap",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#breakpointTrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "breakpointTrap",
          "package": "unix",
          "partial": "Trap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:breakpointTrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "busError",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#busError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "busError",
          "package": "unix",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:busError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "continueProcess",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#continueProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "continueProcess",
          "package": "unix",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:continueProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "cpuTimeLimitExceeded",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#cpuTimeLimitExceeded",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "cpuTimeLimitExceeded",
          "package": "unix",
          "partial": "Time Limit Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:cpuTimeLimitExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "deleteSignal",
          "package": "unix",
          "signature": "Signal -\u003e SignalSet -\u003e SignalSet",
          "source": "src/System-Posix-Signals.html#deleteSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "deleteSignal",
          "normalized": "Signal-\u003eSignalSet-\u003eSignalSet",
          "package": "unix",
          "partial": "Signal",
          "signature": "Signal-\u003eSignalSet-\u003eSignalSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:deleteSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "emptySignalSet",
          "package": "unix",
          "signature": "SignalSet",
          "source": "src/System-Posix-Signals.html#emptySignalSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "emptySignalSet",
          "package": "unix",
          "partial": "Signal Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:emptySignalSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "fileSizeLimitExceeded",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#fileSizeLimitExceeded",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "fileSizeLimitExceeded",
          "package": "unix",
          "partial": "Size Limit Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:fileSizeLimitExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "floatingPointException",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#floatingPointException",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "floatingPointException",
          "package": "unix",
          "partial": "Point Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:floatingPointException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "fullSignalSet",
          "package": "unix",
          "signature": "SignalSet",
          "source": "src/System-Posix-Signals.html#fullSignalSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "fullSignalSet",
          "package": "unix",
          "partial": "Signal Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:fullSignalSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetPendingSignals\u003c/code\u003e calls \u003ccode\u003esigpending\u003c/code\u003e to obtain\n   the set of interrupts which have been received but are currently blocked.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "getPendingSignals",
          "package": "unix",
          "signature": "IO SignalSet",
          "source": "src/System-Posix-Signals.html#getPendingSignals",
          "type": "function"
        },
        "index": {
          "description": "getPendingSignals calls sigpending to obtain the set of interrupts which have been received but are currently blocked",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "getPendingSignals",
          "package": "unix",
          "partial": "Pending Signals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:getPendingSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetSignalMask\u003c/code\u003e calls \u003ccode\u003esigprocmask\u003c/code\u003e to determine the\n   set of interrupts which are currently being blocked.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "getSignalMask",
          "package": "unix",
          "signature": "IO SignalSet",
          "source": "src/System-Posix-Signals.html#getSignalMask",
          "type": "function"
        },
        "index": {
          "description": "getSignalMask calls sigprocmask to determine the set of interrupts which are currently being blocked",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "getSignalMask",
          "package": "unix",
          "partial": "Signal Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:getSignalMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "illegalInstruction",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#illegalInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "illegalInstruction",
          "package": "unix",
          "partial": "Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:illegalInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "inSignalSet",
          "package": "unix",
          "signature": "Signal -\u003e SignalSet -\u003e Bool",
          "source": "src/System-Posix-Signals.html#inSignalSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "inSignalSet",
          "normalized": "Signal-\u003eSignalSet-\u003eBool",
          "package": "unix",
          "partial": "Signal Set",
          "signature": "Signal-\u003eSignalSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:inSignalSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einstallHandler int handler iset\u003c/code\u003e calls \u003ccode\u003esigaction\u003c/code\u003e to install an\n   interrupt handler for signal \u003ccode\u003eint\u003c/code\u003e.  If \u003ccode\u003ehandler\u003c/code\u003e is \u003ccode\u003eDefault\u003c/code\u003e,\n   \u003ccode\u003eSIG_DFL\u003c/code\u003e is installed; if \u003ccode\u003ehandler\u003c/code\u003e is \u003ccode\u003eIgnore\u003c/code\u003e, \u003ccode\u003eSIG_IGN\u003c/code\u003e is\n   installed; if \u003ccode\u003ehandler\u003c/code\u003e is \u003ccode\u003eCatch action\u003c/code\u003e, a handler is installed\n   which will invoke \u003ccode\u003eaction\u003c/code\u003e in a new thread when (or shortly after) the\n   signal is received.\n   If \u003ccode\u003eiset\u003c/code\u003e is \u003ccode\u003eJust s\u003c/code\u003e, then the \u003ccode\u003esa_mask\u003c/code\u003e of the \u003ccode\u003esigaction\u003c/code\u003e structure\n   is set to \u003ccode\u003es\u003c/code\u003e; otherwise it is cleared.  The previously installed\n   signal handler for \u003ccode\u003eint\u003c/code\u003e is returned\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "installHandler",
          "package": "unix",
          "signature": "Signal-\u003e Handler-\u003e Maybe SignalSet-\u003e IO Handler",
          "type": "function"
        },
        "index": {
          "description": "installHandler int handler iset calls sigaction to install an interrupt handler for signal int If handler is Default SIG DFL is installed if handler is Ignore SIG IGN is installed if handler is Catch action handler is installed which will invoke action in new thread when or shortly after the signal is received If iset is Just then the sa mask of the sigaction structure is set to otherwise it is cleared The previously installed signal handler for int is returned",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "installHandler",
          "normalized": "Signal-\u003eHandler-\u003eMaybe SignalSet-\u003eIO Handler",
          "package": "unix",
          "partial": "Handler",
          "signature": "Signal-\u003eHandler-\u003eMaybe SignalSet-\u003eIO Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:installHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "internalAbort",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#internalAbort",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "internalAbort",
          "package": "unix",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:internalAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "keyboardSignal",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#keyboardSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "keyboardSignal",
          "package": "unix",
          "partial": "Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:keyboardSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "keyboardStop",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#keyboardStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "keyboardStop",
          "package": "unix",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:keyboardStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "keyboardTermination",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#keyboardTermination",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "keyboardTermination",
          "package": "unix",
          "partial": "Termination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:keyboardTermination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "killProcess",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#killProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "killProcess",
          "package": "unix",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:killProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "lostConnection",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#lostConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "lostConnection",
          "package": "unix",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:lostConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "nullSignal",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#nullSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "nullSignal",
          "package": "unix",
          "partial": "Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:nullSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "openEndedPipe",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#openEndedPipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "openEndedPipe",
          "package": "unix",
          "partial": "Ended Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:openEndedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "pollableEvent",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#pollableEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "pollableEvent",
          "package": "unix",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:pollableEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "processStatusChanged",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#processStatusChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "processStatusChanged",
          "package": "unix",
          "partial": "Status Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:processStatusChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "profilingTimerExpired",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#profilingTimerExpired",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "profilingTimerExpired",
          "package": "unix",
          "partial": "Timer Expired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:profilingTimerExpired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries the current state of the stopped child flag.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "queryStoppedChildFlag",
          "package": "unix",
          "signature": "IO Bool",
          "source": "src/System-Posix-Signals.html#queryStoppedChildFlag",
          "type": "function"
        },
        "index": {
          "description": "Queries the current state of the stopped child flag",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "queryStoppedChildFlag",
          "package": "unix",
          "partial": "Stopped Child Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:queryStoppedChildFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eraiseSignal int\u003c/code\u003e calls \u003ccode\u003ekill\u003c/code\u003e to signal the current process\n   with interrupt signal \u003ccode\u003eint\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "raiseSignal",
          "package": "unix",
          "signature": "Signal -\u003e IO ()",
          "source": "src/System-Posix-Signals.html#raiseSignal",
          "type": "function"
        },
        "index": {
          "description": "raiseSignal int calls kill to signal the current process with interrupt signal int",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "raiseSignal",
          "normalized": "Signal-\u003eIO()",
          "package": "unix",
          "partial": "Signal",
          "signature": "Signal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:raiseSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "realTimeAlarm",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#realTimeAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "realTimeAlarm",
          "package": "unix",
          "partial": "Time Alarm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:realTimeAlarm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of signals reserved for use by the implementation.  In GHC, this will normally\n include either \u003ccode\u003e\u003ca\u003esigVTALRM\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esigALRM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "reservedSignals",
          "package": "unix",
          "signature": "SignalSet",
          "source": "src/System-Posix-Signals.html#reservedSignals",
          "type": "function"
        },
        "index": {
          "description": "set of signals reserved for use by the implementation In GHC this will normally include either sigVTALRM or sigALRM",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "reservedSignals",
          "package": "unix",
          "partial": "Signals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:reservedSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003escheduleAlarm i\u003c/code\u003e calls \u003ccode\u003ealarm\u003c/code\u003e to schedule a real time\n   alarm at least \u003ccode\u003ei\u003c/code\u003e seconds in the future.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "scheduleAlarm",
          "package": "unix",
          "signature": "Int -\u003e IO Int",
          "source": "src/System-Posix-Signals.html#scheduleAlarm",
          "type": "function"
        },
        "index": {
          "description": "scheduleAlarm calls alarm to schedule real time alarm at least seconds in the future",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "scheduleAlarm",
          "normalized": "Int-\u003eIO Int",
          "package": "unix",
          "partial": "Alarm",
          "signature": "Int-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:scheduleAlarm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "segmentationViolation",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#segmentationViolation",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "segmentationViolation",
          "package": "unix",
          "partial": "Violation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:segmentationViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetSignalMask mask\u003c/code\u003e calls \u003ccode\u003esigprocmask\u003c/code\u003e with\n   \u003ccode\u003eSIG_SETMASK\u003c/code\u003e to block all interrupts in \u003ccode\u003emask\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "setSignalMask",
          "package": "unix",
          "signature": "SignalSet -\u003e IO ()",
          "source": "src/System-Posix-Signals.html#setSignalMask",
          "type": "function"
        },
        "index": {
          "description": "setSignalMask mask calls sigprocmask with SIG SETMASK to block all interrupts in mask",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "setSignalMask",
          "normalized": "SignalSet-\u003eIO()",
          "package": "unix",
          "partial": "Signal Mask",
          "signature": "SignalSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:setSignalMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTells the system whether or not to set the \u003ccode\u003eSA_NOCLDSTOP\u003c/code\u003e flag when\n installing new signal handlers.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "setStoppedChildFlag",
          "package": "unix",
          "signature": "Bool -\u003e IO Bool",
          "source": "src/System-Posix-Signals.html#setStoppedChildFlag",
          "type": "function"
        },
        "index": {
          "description": "Tells the system whether or not to set the SA NOCLDSTOP flag when installing new signal handlers",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "setStoppedChildFlag",
          "normalized": "Bool-\u003eIO Bool",
          "package": "unix",
          "partial": "Stopped Child Flag",
          "signature": "Bool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:setStoppedChildFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigABRT",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigABRT",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigABRT",
          "package": "unix",
          "partial": "ABRT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigABRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigALRM",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigALRM",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigALRM",
          "package": "unix",
          "partial": "ALRM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigALRM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigBUS",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigBUS",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigBUS",
          "package": "unix",
          "partial": "BUS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigBUS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigCHLD",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigCHLD",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigCHLD",
          "package": "unix",
          "partial": "CHLD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigCHLD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigCONT",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigCONT",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigCONT",
          "package": "unix",
          "partial": "CONT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigCONT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigFPE",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigFPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigFPE",
          "package": "unix",
          "partial": "FPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigFPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigHUP",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigHUP",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigHUP",
          "package": "unix",
          "partial": "HUP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigHUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigILL",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigILL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigILL",
          "package": "unix",
          "partial": "ILL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigILL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigINT",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigINT",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigINT",
          "package": "unix",
          "partial": "INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigINT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigKILL",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigKILL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigKILL",
          "package": "unix",
          "partial": "KILL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigKILL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigPIPE",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigPIPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigPIPE",
          "package": "unix",
          "partial": "PIPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigPIPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigPOLL",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigPOLL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigPOLL",
          "package": "unix",
          "partial": "POLL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigPOLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigPROF",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigPROF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigPROF",
          "package": "unix",
          "partial": "PROF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigPROF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigQUIT",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigQUIT",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigQUIT",
          "package": "unix",
          "partial": "QUIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigQUIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigSEGV",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigSEGV",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigSEGV",
          "package": "unix",
          "partial": "SEGV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigSEGV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigSTOP",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigSTOP",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigSTOP",
          "package": "unix",
          "partial": "STOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigSTOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigSYS",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigSYS",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigSYS",
          "package": "unix",
          "partial": "SYS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigSYS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigTERM",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigTERM",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigTERM",
          "package": "unix",
          "partial": "TERM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigTERM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigTRAP",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigTRAP",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigTRAP",
          "package": "unix",
          "partial": "TRAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigTRAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigTSTP",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigTSTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigTSTP",
          "package": "unix",
          "partial": "TSTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigTSTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigTTIN",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigTTIN",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigTTIN",
          "package": "unix",
          "partial": "TTIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigTTIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigTTOU",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigTTOU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigTTOU",
          "package": "unix",
          "partial": "TTOU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigTTOU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigURG",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigURG",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigURG",
          "package": "unix",
          "partial": "URG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigURG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigUSR1",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigUSR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigUSR1",
          "package": "unix",
          "partial": "USR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigUSR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigUSR2",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigUSR2",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigUSR2",
          "package": "unix",
          "partial": "USR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigUSR2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigVTALRM",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigVTALRM",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigVTALRM",
          "package": "unix",
          "partial": "VTALRM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigVTALRM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigXCPU",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigXCPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigXCPU",
          "package": "unix",
          "partial": "XCPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigXCPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "sigXFSZ",
          "package": "unix",
          "signature": "CInt",
          "source": "src/System-Posix-Signals.html#sigXFSZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "sigXFSZ",
          "package": "unix",
          "partial": "XFSZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:sigXFSZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "siginfoError",
          "package": "unix",
          "signature": "Errno",
          "source": "src/System-Posix-Signals.html#SignalInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "siginfoError",
          "package": "unix",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:siginfoError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "siginfoPid",
          "package": "unix",
          "signature": "ProcessID",
          "source": "src/System-Posix-Signals.html#SignalSpecificInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "siginfoPid",
          "package": "unix",
          "partial": "Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:siginfoPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "siginfoSignal",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#SignalInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "siginfoSignal",
          "package": "unix",
          "partial": "Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:siginfoSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "siginfoSpecific",
          "package": "unix",
          "signature": "SignalSpecificInfo",
          "source": "src/System-Posix-Signals.html#SignalInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "siginfoSpecific",
          "package": "unix",
          "partial": "Specific",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:siginfoSpecific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "siginfoStatus",
          "package": "unix",
          "signature": "ProcessStatus",
          "source": "src/System-Posix-Signals.html#SignalSpecificInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "siginfoStatus",
          "package": "unix",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:siginfoStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "siginfoUid",
          "package": "unix",
          "signature": "UserID",
          "source": "src/System-Posix-Signals.html#SignalSpecificInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "siginfoUid",
          "package": "unix",
          "partial": "Uid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:siginfoUid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esignalProcess int pid\u003c/code\u003e calls \u003ccode\u003ekill\u003c/code\u003e to signal process \u003ccode\u003epid\u003c/code\u003e\n   with interrupt signal \u003ccode\u003eint\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "signalProcess",
          "package": "unix",
          "signature": "Signal -\u003e ProcessID -\u003e IO ()",
          "source": "src/System-Posix-Signals.html#signalProcess",
          "type": "function"
        },
        "index": {
          "description": "signalProcess int pid calls kill to signal process pid with interrupt signal int",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "signalProcess",
          "normalized": "Signal-\u003eProcessID-\u003eIO()",
          "package": "unix",
          "partial": "Process",
          "signature": "Signal-\u003eProcessID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:signalProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esignalProcessGroup int pgid\u003c/code\u003e calls \u003ccode\u003ekill\u003c/code\u003e to signal\n  all processes in group \u003ccode\u003epgid\u003c/code\u003e with interrupt signal \u003ccode\u003eint\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "signalProcessGroup",
          "package": "unix",
          "signature": "Signal -\u003e ProcessGroupID -\u003e IO ()",
          "source": "src/System-Posix-Signals.html#signalProcessGroup",
          "type": "function"
        },
        "index": {
          "description": "signalProcessGroup int pgid calls kill to signal all processes in group pgid with interrupt signal int",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "signalProcessGroup",
          "normalized": "Signal-\u003eProcessGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Process Group",
          "signature": "Signal-\u003eProcessGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:signalProcessGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "softwareStop",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#softwareStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "softwareStop",
          "package": "unix",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:softwareStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "softwareTermination",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#softwareTermination",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "softwareTermination",
          "package": "unix",
          "partial": "Termination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:softwareTermination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunblockSignals mask\u003c/code\u003e calls \u003ccode\u003esigprocmask\u003c/code\u003e with\n   \u003ccode\u003eSIG_UNBLOCK\u003c/code\u003e to remove all interrupts in \u003ccode\u003emask\u003c/code\u003e from the\n   set of blocked interrupts.\n\u003c/p\u003e",
          "module": "System.Posix.Signals",
          "name": "unblockSignals",
          "package": "unix",
          "signature": "SignalSet -\u003e IO ()",
          "source": "src/System-Posix-Signals.html#unblockSignals",
          "type": "function"
        },
        "index": {
          "description": "unblockSignals mask calls sigprocmask with SIG UNBLOCK to remove all interrupts in mask from the set of blocked interrupts",
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "unblockSignals",
          "normalized": "SignalSet-\u003eIO()",
          "package": "unix",
          "partial": "Signals",
          "signature": "SignalSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:unblockSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "urgentDataAvailable",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#urgentDataAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "urgentDataAvailable",
          "package": "unix",
          "partial": "Data Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:urgentDataAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "userDefinedSignal1",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#userDefinedSignal1",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "userDefinedSignal1",
          "package": "unix",
          "partial": "Defined Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:userDefinedSignal1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "userDefinedSignal2",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#userDefinedSignal2",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "userDefinedSignal2",
          "package": "unix",
          "partial": "Defined Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:userDefinedSignal2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Signals",
          "name": "virtualTimerExpired",
          "package": "unix",
          "signature": "Signal",
          "source": "src/System-Posix-Signals.html#virtualTimerExpired",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Signals",
          "module": "System.Posix.Signals",
          "name": "virtualTimerExpired",
          "package": "unix",
          "partial": "Timer Expired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Signals.html#v:virtualTimerExpired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX temporary file and directory creation functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Temp.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-Temp-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX temporary file and directory creation functions",
          "hierarchy": "System Posix Temp ByteString",
          "module": "System.Posix.Temp.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Temp-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a unique directory. The returned \u003ccode\u003e\u003ca\u003eRawFilePath\u003c/a\u003e\u003c/code\u003e is the path of the\n created directory, which is padded with 6 random characters. The argument is\n the desired prefix of the filepath of the temporary directory to be created.\n\u003c/p\u003e\u003cp\u003eIf you aren't using GHC or Hugs then this function simply wraps mktemp and\n so shouldn't be considered safe.\n\u003c/p\u003e",
          "module": "System.Posix.Temp.ByteString",
          "name": "mkdtemp",
          "package": "unix",
          "signature": "ByteString -\u003e IO RawFilePath",
          "source": "src/System-Posix-Temp-ByteString.html#mkdtemp",
          "type": "function"
        },
        "index": {
          "description": "Make unique directory The returned RawFilePath is the path of the created directory which is padded with random characters The argument is the desired prefix of the filepath of the temporary directory to be created If you aren using GHC or Hugs then this function simply wraps mktemp and so shouldn be considered safe",
          "hierarchy": "System Posix Temp ByteString",
          "module": "System.Posix.Temp.ByteString",
          "name": "mkdtemp",
          "normalized": "ByteString-\u003eIO RawFilePath",
          "package": "unix",
          "signature": "ByteString-\u003eIO RawFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Temp-ByteString.html#v:mkdtemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a unique filename and open it for reading/writing. The returned\n \u003ccode\u003e\u003ca\u003eRawFilePath\u003c/a\u003e\u003c/code\u003e is the (possibly relative) path of the created file, which is\n padded with 6 random characters. The argument is the desired prefix of the\n filepath of the temporary file to be created.\n\u003c/p\u003e\u003cp\u003eIf you aren't using GHC or Hugs then this function simply wraps mktemp and\n so shouldn't be considered safe.\n\u003c/p\u003e",
          "module": "System.Posix.Temp.ByteString",
          "name": "mkstemp",
          "package": "unix",
          "signature": "ByteString -\u003e IO (RawFilePath, Handle)",
          "source": "src/System-Posix-Temp-ByteString.html#mkstemp",
          "type": "function"
        },
        "index": {
          "description": "Make unique filename and open it for reading writing The returned RawFilePath is the possibly relative path of the created file which is padded with random characters The argument is the desired prefix of the filepath of the temporary file to be created If you aren using GHC or Hugs then this function simply wraps mktemp and so shouldn be considered safe",
          "hierarchy": "System Posix Temp ByteString",
          "module": "System.Posix.Temp.ByteString",
          "name": "mkstemp",
          "normalized": "ByteString-\u003eIO(RawFilePath,Handle)",
          "package": "unix",
          "signature": "ByteString-\u003eIO(RawFilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Temp-ByteString.html#v:mkstemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emkstemps\u003c/a\u003e\u003c/code\u003e - make a unique filename with a given prefix and suffix \n and open it for reading/writing (only safe on GHC & Hugs).\n The returned \u003ccode\u003e\u003ca\u003eRawFilePath\u003c/a\u003e\u003c/code\u003e is the (possibly relative) path of\n the created file, which contains  6 random characters in between\n the prefix and suffix.\n\u003c/p\u003e",
          "module": "System.Posix.Temp.ByteString",
          "name": "mkstemps",
          "package": "unix",
          "signature": "ByteString -\u003e ByteString -\u003e IO (RawFilePath, Handle)",
          "source": "src/System-Posix-Temp-ByteString.html#mkstemps",
          "type": "function"
        },
        "index": {
          "description": "mkstemps make unique filename with given prefix and suffix and open it for reading writing only safe on GHC Hugs The returned RawFilePath is the possibly relative path of the created file which contains random characters in between the prefix and suffix",
          "hierarchy": "System Posix Temp ByteString",
          "module": "System.Posix.Temp.ByteString",
          "name": "mkstemps",
          "normalized": "ByteString-\u003eByteString-\u003eIO(RawFilePath,Handle)",
          "package": "unix",
          "signature": "ByteString-\u003eByteString-\u003eIO(RawFilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Temp-ByteString.html#v:mkstemps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX temporary file and directory creation functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Temp",
          "name": "Temp",
          "package": "unix",
          "source": "src/System-Posix-Temp.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX temporary file and directory creation functions",
          "hierarchy": "System Posix Temp",
          "module": "System.Posix.Temp",
          "name": "Temp",
          "package": "unix",
          "partial": "Temp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Temp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a unique directory. The returned \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is the path of the\n created directory, which is padded with 6 random characters. The argument is\n the desired prefix of the filepath of the temporary directory to be created.\n\u003c/p\u003e\u003cp\u003eIf you are using as system that doesn't support the mkdtemp glibc function\n (supported in glibc \u003e 2.1.91) then this function uses mktemp and so\n shouldn't be considered safe.\n\u003c/p\u003e",
          "module": "System.Posix.Temp",
          "name": "mkdtemp",
          "package": "unix",
          "signature": "String -\u003e IO FilePath",
          "source": "src/System-Posix-Temp.html#mkdtemp",
          "type": "function"
        },
        "index": {
          "description": "Make unique directory The returned FilePath is the path of the created directory which is padded with random characters The argument is the desired prefix of the filepath of the temporary directory to be created If you are using as system that doesn support the mkdtemp glibc function supported in glibc then this function uses mktemp and so shouldn be considered safe",
          "hierarchy": "System Posix Temp",
          "module": "System.Posix.Temp",
          "name": "mkdtemp",
          "normalized": "String-\u003eIO FilePath",
          "package": "unix",
          "signature": "String-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Temp.html#v:mkdtemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a unique filename and open it for reading/writing. The returned\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is the (possibly relative) path of the created file, which is\n padded with 6 random characters. The argument is the desired prefix of the\n filepath of the temporary file to be created.\n\u003c/p\u003e\u003cp\u003eIf you aren't using GHC or Hugs then this function simply wraps mktemp and\n so shouldn't be considered safe.\n\u003c/p\u003e",
          "module": "System.Posix.Temp",
          "name": "mkstemp",
          "package": "unix",
          "signature": "String -\u003e IO (FilePath, Handle)",
          "source": "src/System-Posix-Temp.html#mkstemp",
          "type": "function"
        },
        "index": {
          "description": "Make unique filename and open it for reading writing The returned FilePath is the possibly relative path of the created file which is padded with random characters The argument is the desired prefix of the filepath of the temporary file to be created If you aren using GHC or Hugs then this function simply wraps mktemp and so shouldn be considered safe",
          "hierarchy": "System Posix Temp",
          "module": "System.Posix.Temp",
          "name": "mkstemp",
          "normalized": "String-\u003eIO(FilePath,Handle)",
          "package": "unix",
          "signature": "String-\u003eIO(FilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Temp.html#v:mkstemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a unique filename with a given prefix and suffix and open it for\n reading/writing. The returned \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is the (possibly relative) path of\n the created file, which contains  6 random characters in between the prefix\n and suffix. The first argument is the desired prefix of the filepath of the\n temporary file to be created. The second argument is the suffix of the\n temporary file to be created.\n\u003c/p\u003e\u003cp\u003eIf you are using as system that doesn't support the mkstemps glibc function\n (supported in glibc \u003e 2.11) then this function simply throws an error.\n\u003c/p\u003e",
          "module": "System.Posix.Temp",
          "name": "mkstemps",
          "package": "unix",
          "signature": "String -\u003e String -\u003e IO (FilePath, Handle)",
          "source": "src/System-Posix-Temp.html#mkstemps",
          "type": "function"
        },
        "index": {
          "description": "Make unique filename with given prefix and suffix and open it for reading writing The returned FilePath is the possibly relative path of the created file which contains random characters in between the prefix and suffix The first argument is the desired prefix of the filepath of the temporary file to be created The second argument is the suffix of the temporary file to be created If you are using as system that doesn support the mkstemps glibc function supported in glibc then this function simply throws an error",
          "hierarchy": "System Posix Temp",
          "module": "System.Posix.Temp",
          "name": "mkstemps",
          "normalized": "String-\u003eString-\u003eIO(FilePath,Handle)",
          "package": "unix",
          "signature": "String-\u003eString-\u003eIO(FilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Temp.html#v:mkstemps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX Terminal support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Terminal.ByteString",
          "name": "ByteString",
          "package": "unix",
          "source": "src/System-Posix-Terminal-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX Terminal support",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "ByteString",
          "package": "unix",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal.ByteString",
          "name": "BaudRate",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "BaudRate",
          "package": "unix",
          "partial": "Baud Rate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#t:BaudRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal.ByteString",
          "name": "ControlCharacter",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "ControlCharacter",
          "package": "unix",
          "partial": "Control Character",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#t:ControlCharacter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal.ByteString",
          "name": "FlowAction",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#FlowAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "FlowAction",
          "package": "unix",
          "partial": "Flow Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#t:FlowAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal.ByteString",
          "name": "QueueSelector",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#QueueSelector",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "QueueSelector",
          "package": "unix",
          "partial": "Queue Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#t:QueueSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal.ByteString",
          "name": "TerminalAttributes",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#TerminalAttributes",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "TerminalAttributes",
          "package": "unix",
          "partial": "Terminal Attributes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#t:TerminalAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal.ByteString",
          "name": "TerminalMode",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "TerminalMode",
          "package": "unix",
          "partial": "Terminal Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#t:TerminalMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal.ByteString",
          "name": "TerminalState",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#TerminalState",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "TerminalState",
          "package": "unix",
          "partial": "Terminal State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#t:TerminalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B0",
          "package": "unix",
          "signature": "B0",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B0\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B0\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B0",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B110",
          "package": "unix",
          "signature": "B110",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B110\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B110\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B110",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B110"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B115200",
          "package": "unix",
          "signature": "B115200",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B115200\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B115200\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B115200",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B115200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B1200",
          "package": "unix",
          "signature": "B1200",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B1200\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B1200\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B1200",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B1200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B134",
          "package": "unix",
          "signature": "B134",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B134\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B134\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B134",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B134"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B150",
          "package": "unix",
          "signature": "B150",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B150\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B150\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B150",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B150"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B1800",
          "package": "unix",
          "signature": "B1800",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B1800\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B1800\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B1800",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B1800"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B19200",
          "package": "unix",
          "signature": "B19200",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B19200\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B19200\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B19200",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B19200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B200",
          "package": "unix",
          "signature": "B200",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B200\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B200\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B200",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B2400",
          "package": "unix",
          "signature": "B2400",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B2400\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B2400\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B2400",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B2400"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B300",
          "package": "unix",
          "signature": "B300",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B300\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B300\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B300",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B300"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B38400",
          "package": "unix",
          "signature": "B38400",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B38400\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B38400\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B38400",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B38400"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B4800",
          "package": "unix",
          "signature": "B4800",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B4800\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B4800\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B4800",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B4800"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B50",
          "package": "unix",
          "signature": "B50",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B50\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B50\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B50",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B57600",
          "package": "unix",
          "signature": "B57600",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B57600\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B57600\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B57600",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B57600"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B600",
          "package": "unix",
          "signature": "B600",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B600\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B600\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B600",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B600"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B75",
          "package": "unix",
          "signature": "B75",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B75\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B75\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B75",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B75"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "B9600",
          "package": "unix",
          "signature": "B9600",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B9600\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:B9600\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "B9600",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:B9600"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "BackgroundWriteInterrupt",
          "package": "unix",
          "signature": "BackgroundWriteInterrupt",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:BackgroundWriteInterrupt\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:BackgroundWriteInterrupt\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "BackgroundWriteInterrupt",
          "package": "unix",
          "partial": "Background Write Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:BackgroundWriteInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "BothQueues",
          "package": "unix",
          "signature": "BothQueues",
          "source": "src/System-Posix-Terminal-Common.html#QueueSelector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:BothQueues\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:BothQueues\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "BothQueues",
          "package": "unix",
          "partial": "Both Queues",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:BothQueues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "CheckParity",
          "package": "unix",
          "signature": "CheckParity",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:CheckParity\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:CheckParity\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "CheckParity",
          "package": "unix",
          "partial": "Check Parity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:CheckParity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "EchoErase",
          "package": "unix",
          "signature": "EchoErase",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EchoErase\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:EchoErase\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "EchoErase",
          "package": "unix",
          "partial": "Echo Erase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EchoErase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "EchoKill",
          "package": "unix",
          "signature": "EchoKill",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EchoKill\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:EchoKill\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "EchoKill",
          "package": "unix",
          "partial": "Echo Kill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EchoKill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "EchoLF",
          "package": "unix",
          "signature": "EchoLF",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EchoLF\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:EchoLF\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "EchoLF",
          "package": "unix",
          "partial": "Echo LF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EchoLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "EnableEcho",
          "package": "unix",
          "signature": "EnableEcho",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EnableEcho\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:EnableEcho\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "EnableEcho",
          "package": "unix",
          "partial": "Enable Echo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EnableEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "EnableParity",
          "package": "unix",
          "signature": "EnableParity",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EnableParity\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:EnableParity\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "EnableParity",
          "package": "unix",
          "partial": "Enable Parity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EnableParity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "EndOfFile",
          "package": "unix",
          "signature": "EndOfFile",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EndOfFile\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:EndOfFile\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "EndOfFile",
          "package": "unix",
          "partial": "End Of File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EndOfFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "EndOfLine",
          "package": "unix",
          "signature": "EndOfLine",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EndOfLine\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:EndOfLine\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "EndOfLine",
          "package": "unix",
          "partial": "End Of Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:EndOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "Erase",
          "package": "unix",
          "signature": "Erase",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Erase\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:Erase\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "Erase",
          "package": "unix",
          "partial": "Erase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Erase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "ExtendedFunctions",
          "package": "unix",
          "signature": "ExtendedFunctions",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:ExtendedFunctions\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:ExtendedFunctions\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "ExtendedFunctions",
          "package": "unix",
          "partial": "Extended Functions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:ExtendedFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "HangupOnClose",
          "package": "unix",
          "signature": "HangupOnClose",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:HangupOnClose\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:HangupOnClose\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "HangupOnClose",
          "package": "unix",
          "partial": "Hangup On Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:HangupOnClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "IgnoreBreak",
          "package": "unix",
          "signature": "IgnoreBreak",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:IgnoreBreak\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:IgnoreBreak\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "IgnoreBreak",
          "package": "unix",
          "partial": "Ignore Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:IgnoreBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "IgnoreCR",
          "package": "unix",
          "signature": "IgnoreCR",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:IgnoreCR\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:IgnoreCR\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "IgnoreCR",
          "package": "unix",
          "partial": "Ignore CR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:IgnoreCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "IgnoreParityErrors",
          "package": "unix",
          "signature": "IgnoreParityErrors",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:IgnoreParityErrors\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:IgnoreParityErrors\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "IgnoreParityErrors",
          "package": "unix",
          "partial": "Ignore Parity Errors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:IgnoreParityErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "Immediately",
          "package": "unix",
          "signature": "Immediately",
          "source": "src/System-Posix-Terminal-Common.html#TerminalState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Immediately\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:Immediately\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "Immediately",
          "package": "unix",
          "partial": "Immediately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Immediately"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "InputQueue",
          "package": "unix",
          "signature": "InputQueue",
          "source": "src/System-Posix-Terminal-Common.html#QueueSelector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:InputQueue\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:InputQueue\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "InputQueue",
          "package": "unix",
          "partial": "Input Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:InputQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "Interrupt",
          "package": "unix",
          "signature": "Interrupt",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Interrupt\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:Interrupt\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "Interrupt",
          "package": "unix",
          "partial": "Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "InterruptOnBreak",
          "package": "unix",
          "signature": "InterruptOnBreak",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:InterruptOnBreak\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:InterruptOnBreak\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "InterruptOnBreak",
          "package": "unix",
          "partial": "Interrupt On Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:InterruptOnBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "KeyboardInterrupts",
          "package": "unix",
          "signature": "KeyboardInterrupts",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:KeyboardInterrupts\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:KeyboardInterrupts\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "KeyboardInterrupts",
          "package": "unix",
          "partial": "Keyboard Interrupts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:KeyboardInterrupts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "Kill",
          "package": "unix",
          "signature": "Kill",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Kill\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:Kill\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "Kill",
          "package": "unix",
          "partial": "Kill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "LocalMode",
          "package": "unix",
          "signature": "LocalMode",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:LocalMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:LocalMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "LocalMode",
          "package": "unix",
          "partial": "Local Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:LocalMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "MapCRtoLF",
          "package": "unix",
          "signature": "MapCRtoLF",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:MapCRtoLF\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:MapCRtoLF\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "MapCRtoLF",
          "package": "unix",
          "partial": "Map CRto LF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:MapCRtoLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "MapLFtoCR",
          "package": "unix",
          "signature": "MapLFtoCR",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:MapLFtoCR\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:MapLFtoCR\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "MapLFtoCR",
          "package": "unix",
          "partial": "Map LFto CR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:MapLFtoCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "MarkParityErrors",
          "package": "unix",
          "signature": "MarkParityErrors",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:MarkParityErrors\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:MarkParityErrors\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "MarkParityErrors",
          "package": "unix",
          "partial": "Mark Parity Errors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:MarkParityErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "NoFlushOnInterrupt",
          "package": "unix",
          "signature": "NoFlushOnInterrupt",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:NoFlushOnInterrupt\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:NoFlushOnInterrupt\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "NoFlushOnInterrupt",
          "package": "unix",
          "partial": "No Flush On Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:NoFlushOnInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "OddParity",
          "package": "unix",
          "signature": "OddParity",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:OddParity\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:OddParity\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "OddParity",
          "package": "unix",
          "partial": "Odd Parity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:OddParity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "OutputQueue",
          "package": "unix",
          "signature": "OutputQueue",
          "source": "src/System-Posix-Terminal-Common.html#QueueSelector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:OutputQueue\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:OutputQueue\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "OutputQueue",
          "package": "unix",
          "partial": "Output Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:OutputQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "ProcessInput",
          "package": "unix",
          "signature": "ProcessInput",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:ProcessInput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:ProcessInput\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "ProcessInput",
          "package": "unix",
          "partial": "Process Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:ProcessInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "ProcessOutput",
          "package": "unix",
          "signature": "ProcessOutput",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:ProcessOutput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:ProcessOutput\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "ProcessOutput",
          "package": "unix",
          "partial": "Process Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:ProcessOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "Quit",
          "package": "unix",
          "signature": "Quit",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Quit\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:Quit\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "Quit",
          "package": "unix",
          "partial": "Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "ReadEnable",
          "package": "unix",
          "signature": "ReadEnable",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:ReadEnable\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:ReadEnable\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "ReadEnable",
          "package": "unix",
          "partial": "Read Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:ReadEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTCOON\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "RestartOutput",
          "package": "unix",
          "signature": "RestartOutput",
          "source": "src/System-Posix-Terminal-Common.html#FlowAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:RestartOutput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:RestartOutput\"]"
        },
        "index": {
          "description": "TCOON",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "RestartOutput",
          "package": "unix",
          "partial": "Restart Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:RestartOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "Start",
          "package": "unix",
          "signature": "Start",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Start\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:Start\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "Start",
          "package": "unix",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "StartStopInput",
          "package": "unix",
          "signature": "StartStopInput",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:StartStopInput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:StartStopInput\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "StartStopInput",
          "package": "unix",
          "partial": "Start Stop Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:StartStopInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "StartStopOutput",
          "package": "unix",
          "signature": "StartStopOutput",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:StartStopOutput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:StartStopOutput\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "StartStopOutput",
          "package": "unix",
          "partial": "Start Stop Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:StartStopOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "Stop",
          "package": "unix",
          "signature": "Stop",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Stop\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:Stop\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "Stop",
          "package": "unix",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "StripHighBit",
          "package": "unix",
          "signature": "StripHighBit",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:StripHighBit\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:StripHighBit\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "StripHighBit",
          "package": "unix",
          "partial": "Strip High Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:StripHighBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "Suspend",
          "package": "unix",
          "signature": "Suspend",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Suspend\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:Suspend\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "Suspend",
          "package": "unix",
          "partial": "Suspend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:Suspend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTCOOFF\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "SuspendOutput",
          "package": "unix",
          "signature": "SuspendOutput",
          "source": "src/System-Posix-Terminal-Common.html#FlowAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:SuspendOutput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:SuspendOutput\"]"
        },
        "index": {
          "description": "TCOOFF",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "SuspendOutput",
          "package": "unix",
          "partial": "Suspend Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:SuspendOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTCION\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "TransmitStart",
          "package": "unix",
          "signature": "TransmitStart",
          "source": "src/System-Posix-Terminal-Common.html#FlowAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:TransmitStart\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:TransmitStart\"]"
        },
        "index": {
          "description": "TCION",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "TransmitStart",
          "package": "unix",
          "partial": "Transmit Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:TransmitStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTCIOFF\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "TransmitStop",
          "package": "unix",
          "signature": "TransmitStop",
          "source": "src/System-Posix-Terminal-Common.html#FlowAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:TransmitStop\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:TransmitStop\"]"
        },
        "index": {
          "description": "TCIOFF",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "TransmitStop",
          "package": "unix",
          "partial": "Transmit Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:TransmitStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "TwoStopBits",
          "package": "unix",
          "signature": "TwoStopBits",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:TwoStopBits\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:TwoStopBits\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "TwoStopBits",
          "package": "unix",
          "partial": "Two Stop Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:TwoStopBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "WhenDrained",
          "package": "unix",
          "signature": "WhenDrained",
          "source": "src/System-Posix-Terminal-Common.html#TerminalState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:WhenDrained\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:WhenDrained\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "WhenDrained",
          "package": "unix",
          "partial": "When Drained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:WhenDrained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "WhenFlushed",
          "package": "unix",
          "signature": "WhenFlushed",
          "source": "src/System-Posix-Terminal-Common.html#TerminalState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:WhenFlushed\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:WhenFlushed\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "WhenFlushed",
          "package": "unix",
          "partial": "When Flushed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:WhenFlushed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "bitsPerByte",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e Int",
          "source": "src/System-Posix-Terminal-Common.html#bitsPerByte",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:bitsPerByte\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:bitsPerByte\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "bitsPerByte",
          "normalized": "TerminalAttributes-\u003eInt",
          "package": "unix",
          "partial": "Per Byte",
          "signature": "TerminalAttributes-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:bitsPerByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "controlChar",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e ControlCharacter -\u003e Maybe Char",
          "source": "src/System-Posix-Terminal-Common.html#controlChar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:controlChar\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:controlChar\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "controlChar",
          "normalized": "TerminalAttributes-\u003eControlCharacter-\u003eMaybe Char",
          "package": "unix",
          "partial": "Char",
          "signature": "TerminalAttributes-\u003eControlCharacter-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:controlChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003econtrolFlow fd action\u003c/code\u003e calls \u003ccode\u003etcflow\u003c/code\u003e to control the \n   flow of data on \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e, as indicated by\n   \u003ccode\u003eaction\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "controlFlow",
          "package": "unix",
          "signature": "Fd -\u003e FlowAction -\u003e IO ()",
          "source": "src/System-Posix-Terminal-Common.html#controlFlow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:controlFlow\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:controlFlow\"]"
        },
        "index": {
          "description": "controlFlow fd action calls tcflow to control the flow of data on Fd fd as indicated by action",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "controlFlow",
          "normalized": "Fd-\u003eFlowAction-\u003eIO()",
          "package": "unix",
          "partial": "Flow",
          "signature": "Fd-\u003eFlowAction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:controlFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ediscardData fd queues\u003c/code\u003e calls \u003ccode\u003etcflush\u003c/code\u003e to discard\n   pending input and/or output for \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e,\n   as indicated by the \u003ccode\u003eQueueSelector\u003c/code\u003e \u003ccode\u003equeues\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "discardData",
          "package": "unix",
          "signature": "Fd -\u003e QueueSelector -\u003e IO ()",
          "source": "src/System-Posix-Terminal-Common.html#discardData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:discardData\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:discardData\"]"
        },
        "index": {
          "description": "discardData fd queues calls tcflush to discard pending input and or output for Fd fd as indicated by the QueueSelector queues",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "discardData",
          "normalized": "Fd-\u003eQueueSelector-\u003eIO()",
          "package": "unix",
          "partial": "Data",
          "signature": "Fd-\u003eQueueSelector-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:discardData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edrainOutput fd\u003c/code\u003e calls \u003ccode\u003etcdrain\u003c/code\u003e to block until all output\n   written to \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e has been transmitted.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "drainOutput",
          "package": "unix",
          "signature": "Fd -\u003e IO ()",
          "source": "src/System-Posix-Terminal-Common.html#drainOutput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:drainOutput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:drainOutput\"]"
        },
        "index": {
          "description": "drainOutput fd calls tcdrain to block until all output written to Fd fd has been transmitted",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "drainOutput",
          "normalized": "Fd-\u003eIO()",
          "package": "unix",
          "partial": "Output",
          "signature": "Fd-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:drainOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetControllingTerminalName\u003c/code\u003e calls \u003ccode\u003ectermid\u003c/code\u003e to obtain\n   a name associated with the controlling terminal for the process.  If a\n   controlling terminal exists,\n   \u003ccode\u003egetControllingTerminalName\u003c/code\u003e returns the name of the\n   controlling terminal.\n\u003c/p\u003e",
          "module": "System.Posix.Terminal.ByteString",
          "name": "getControllingTerminalName",
          "package": "unix",
          "signature": "IO RawFilePath",
          "source": "src/System-Posix-Terminal-ByteString.html#getControllingTerminalName",
          "type": "function"
        },
        "index": {
          "description": "getControllingTerminalName calls ctermid to obtain name associated with the controlling terminal for the process If controlling terminal exists getControllingTerminalName returns the name of the controlling terminal",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "getControllingTerminalName",
          "package": "unix",
          "partial": "Controlling Terminal Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:getControllingTerminalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetSlaveTerminalName\u003c/code\u003e calls \u003ccode\u003eptsname\u003c/code\u003e to obtain the name of the\n slave terminal associated with a pseudoterminal pair.  The file\n descriptor to pass in must be that of the master.\n\u003c/p\u003e",
          "module": "System.Posix.Terminal.ByteString",
          "name": "getSlaveTerminalName",
          "package": "unix",
          "signature": "Fd -\u003e IO RawFilePath",
          "source": "src/System-Posix-Terminal-ByteString.html#getSlaveTerminalName",
          "type": "function"
        },
        "index": {
          "description": "getSlaveTerminalName calls ptsname to obtain the name of the slave terminal associated with pseudoterminal pair The file descriptor to pass in must be that of the master",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "getSlaveTerminalName",
          "normalized": "Fd-\u003eIO RawFilePath",
          "package": "unix",
          "partial": "Slave Terminal Name",
          "signature": "Fd-\u003eIO RawFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:getSlaveTerminalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetTerminalAttributes fd\u003c/code\u003e calls \u003ccode\u003etcgetattr\u003c/code\u003e to obtain\n   the \u003ccode\u003eTerminalAttributes\u003c/code\u003e associated with \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "getTerminalAttributes",
          "package": "unix",
          "signature": "Fd -\u003e IO TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#getTerminalAttributes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:getTerminalAttributes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:getTerminalAttributes\"]"
        },
        "index": {
          "description": "getTerminalAttributes fd calls tcgetattr to obtain the TerminalAttributes associated with Fd fd",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "getTerminalAttributes",
          "normalized": "Fd-\u003eIO TerminalAttributes",
          "package": "unix",
          "partial": "Terminal Attributes",
          "signature": "Fd-\u003eIO TerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:getTerminalAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetTerminalName fd\u003c/code\u003e calls \u003ccode\u003ettyname\u003c/code\u003e to obtain a name associated\n   with the terminal for \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e. If \u003ccode\u003efd\u003c/code\u003e is associated\n   with a terminal, \u003ccode\u003egetTerminalName\u003c/code\u003e returns the name of the\n   terminal.\n\u003c/p\u003e",
          "module": "System.Posix.Terminal.ByteString",
          "name": "getTerminalName",
          "package": "unix",
          "signature": "Fd -\u003e IO RawFilePath",
          "source": "src/System-Posix-Terminal-ByteString.html#getTerminalName",
          "type": "function"
        },
        "index": {
          "description": "getTerminalName fd calls ttyname to obtain name associated with the terminal for Fd fd If fd is associated with terminal getTerminalName returns the name of the terminal",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "getTerminalName",
          "normalized": "Fd-\u003eIO RawFilePath",
          "package": "unix",
          "partial": "Terminal Name",
          "signature": "Fd-\u003eIO RawFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:getTerminalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetTerminalProcessGroupID fd\u003c/code\u003e calls \u003ccode\u003etcgetpgrp\u003c/code\u003e to\n   obtain the \u003ccode\u003eProcessGroupID\u003c/code\u003e of the foreground process group \n   associated with the terminal attached to \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "getTerminalProcessGroupID",
          "package": "unix",
          "signature": "Fd -\u003e IO ProcessGroupID",
          "source": "src/System-Posix-Terminal-Common.html#getTerminalProcessGroupID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:getTerminalProcessGroupID\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:getTerminalProcessGroupID\"]"
        },
        "index": {
          "description": "getTerminalProcessGroupID fd calls tcgetpgrp to obtain the ProcessGroupID of the foreground process group associated with the terminal attached to Fd fd",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "getTerminalProcessGroupID",
          "normalized": "Fd-\u003eIO ProcessGroupID",
          "package": "unix",
          "partial": "Terminal Process Group ID",
          "signature": "Fd-\u003eIO ProcessGroupID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:getTerminalProcessGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "inputSpeed",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e BaudRate",
          "source": "src/System-Posix-Terminal-Common.html#inputSpeed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:inputSpeed\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:inputSpeed\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "inputSpeed",
          "normalized": "TerminalAttributes-\u003eBaudRate",
          "package": "unix",
          "partial": "Speed",
          "signature": "TerminalAttributes-\u003eBaudRate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:inputSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "inputTime",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e Int",
          "source": "src/System-Posix-Terminal-Common.html#inputTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:inputTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:inputTime\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "inputTime",
          "normalized": "TerminalAttributes-\u003eInt",
          "package": "unix",
          "partial": "Time",
          "signature": "TerminalAttributes-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:inputTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "minInput",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e Int",
          "source": "src/System-Posix-Terminal-Common.html#minInput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:minInput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:minInput\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "minInput",
          "normalized": "TerminalAttributes-\u003eInt",
          "package": "unix",
          "partial": "Input",
          "signature": "TerminalAttributes-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:minInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenPseudoTerminal\u003c/code\u003e creates a pseudoterminal (pty) pair, and\n returns the newly created pair as a (\u003ccode\u003emaster\u003c/code\u003e, \u003ccode\u003eslave\u003c/code\u003e) tuple.\n\u003c/p\u003e",
          "module": "System.Posix.Terminal.ByteString",
          "name": "openPseudoTerminal",
          "package": "unix",
          "signature": "IO (Fd, Fd)",
          "source": "src/System-Posix-Terminal-ByteString.html#openPseudoTerminal",
          "type": "function"
        },
        "index": {
          "description": "openPseudoTerminal creates pseudoterminal pty pair and returns the newly created pair as master slave tuple",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "openPseudoTerminal",
          "normalized": "IO(Fd,Fd)",
          "package": "unix",
          "partial": "Pseudo Terminal",
          "signature": "IO(Fd,Fd)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:openPseudoTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "outputSpeed",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e BaudRate",
          "source": "src/System-Posix-Terminal-Common.html#outputSpeed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:outputSpeed\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:outputSpeed\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "outputSpeed",
          "normalized": "TerminalAttributes-\u003eBaudRate",
          "package": "unix",
          "partial": "Speed",
          "signature": "TerminalAttributes-\u003eBaudRate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:outputSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003equeryTerminal fd\u003c/code\u003e calls \u003ccode\u003eisatty\u003c/code\u003e to determine whether or\n   not \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e is associated with a terminal.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "queryTerminal",
          "package": "unix",
          "signature": "Fd -\u003e IO Bool",
          "source": "src/System-Posix-Terminal-Common.html#queryTerminal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:queryTerminal\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:queryTerminal\"]"
        },
        "index": {
          "description": "queryTerminal fd calls isatty to determine whether or not Fd fd is associated with terminal",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "queryTerminal",
          "normalized": "Fd-\u003eIO Bool",
          "package": "unix",
          "partial": "Terminal",
          "signature": "Fd-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:queryTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esendBreak fd duration\u003c/code\u003e calls \u003ccode\u003etcsendbreak\u003c/code\u003e to transmit a\n   continuous stream of zero-valued bits on \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e for the\n   specified implementation-dependent \u003ccode\u003eduration\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "sendBreak",
          "package": "unix",
          "signature": "Fd -\u003e Int -\u003e IO ()",
          "source": "src/System-Posix-Terminal-Common.html#sendBreak",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:sendBreak\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:sendBreak\"]"
        },
        "index": {
          "description": "sendBreak fd duration calls tcsendbreak to transmit continuous stream of zero-valued bits on Fd fd for the specified implementation-dependent duration",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "sendBreak",
          "normalized": "Fd-\u003eInt-\u003eIO()",
          "package": "unix",
          "partial": "Break",
          "signature": "Fd-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:sendBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetTerminalAttributes fd attr ts\u003c/code\u003e calls \u003ccode\u003etcsetattr\u003c/code\u003e to change\n   the \u003ccode\u003eTerminalAttributes\u003c/code\u003e associated with \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e to\n   \u003ccode\u003eattr\u003c/code\u003e, when the terminal is in the state indicated by \u003ccode\u003ets\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "setTerminalAttributes",
          "package": "unix",
          "signature": "Fd -\u003e TerminalAttributes -\u003e TerminalState -\u003e IO ()",
          "source": "src/System-Posix-Terminal-Common.html#setTerminalAttributes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:setTerminalAttributes\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:setTerminalAttributes\"]"
        },
        "index": {
          "description": "setTerminalAttributes fd attr ts calls tcsetattr to change the TerminalAttributes associated with Fd fd to attr when the terminal is in the state indicated by ts",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "setTerminalAttributes",
          "normalized": "Fd-\u003eTerminalAttributes-\u003eTerminalState-\u003eIO()",
          "package": "unix",
          "partial": "Terminal Attributes",
          "signature": "Fd-\u003eTerminalAttributes-\u003eTerminalState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:setTerminalAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetTerminalProcessGroupID fd pgid\u003c/code\u003e calls \u003ccode\u003etcsetpgrp\u003c/code\u003e to\n   set the \u003ccode\u003eProcessGroupID\u003c/code\u003e of the foreground process group \n   associated with the terminal attached to \u003ccode\u003eFd\u003c/code\u003e \n   \u003ccode\u003efd\u003c/code\u003e to \u003ccode\u003epgid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "setTerminalProcessGroupID",
          "package": "unix",
          "signature": "Fd -\u003e ProcessGroupID -\u003e IO ()",
          "source": "src/System-Posix-Terminal-Common.html#setTerminalProcessGroupID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:setTerminalProcessGroupID\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:setTerminalProcessGroupID\"]"
        },
        "index": {
          "description": "setTerminalProcessGroupID fd pgid calls tcsetpgrp to set the ProcessGroupID of the foreground process group associated with the terminal attached to Fd fd to pgid",
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "setTerminalProcessGroupID",
          "normalized": "Fd-\u003eProcessGroupID-\u003eIO()",
          "package": "unix",
          "partial": "Terminal Process Group ID",
          "signature": "Fd-\u003eProcessGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:setTerminalProcessGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "terminalMode",
          "package": "unix",
          "signature": "TerminalMode -\u003e TerminalAttributes -\u003e Bool",
          "source": "src/System-Posix-Terminal-Common.html#terminalMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:terminalMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:terminalMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "terminalMode",
          "normalized": "TerminalMode-\u003eTerminalAttributes-\u003eBool",
          "package": "unix",
          "partial": "Mode",
          "signature": "TerminalMode-\u003eTerminalAttributes-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:terminalMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "withBits",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e Int -\u003e TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#withBits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withBits\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:withBits\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "withBits",
          "normalized": "TerminalAttributes-\u003eInt-\u003eTerminalAttributes",
          "package": "unix",
          "partial": "Bits",
          "signature": "TerminalAttributes-\u003eInt-\u003eTerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "withCC",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e (ControlCharacter, Char) -\u003e TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#withCC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withCC\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:withCC\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "withCC",
          "normalized": "TerminalAttributes-\u003e(ControlCharacter,Char)-\u003eTerminalAttributes",
          "package": "unix",
          "partial": "CC",
          "signature": "TerminalAttributes-\u003e(ControlCharacter,Char)-\u003eTerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "withInputSpeed",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e BaudRate -\u003e TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#withInputSpeed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withInputSpeed\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:withInputSpeed\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "withInputSpeed",
          "normalized": "TerminalAttributes-\u003eBaudRate-\u003eTerminalAttributes",
          "package": "unix",
          "partial": "Input Speed",
          "signature": "TerminalAttributes-\u003eBaudRate-\u003eTerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withInputSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "withMinInput",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e Int -\u003e TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#withMinInput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withMinInput\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:withMinInput\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "withMinInput",
          "normalized": "TerminalAttributes-\u003eInt-\u003eTerminalAttributes",
          "package": "unix",
          "partial": "Min Input",
          "signature": "TerminalAttributes-\u003eInt-\u003eTerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withMinInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "withMode",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e TerminalMode -\u003e TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#withMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:withMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "withMode",
          "normalized": "TerminalAttributes-\u003eTerminalMode-\u003eTerminalAttributes",
          "package": "unix",
          "partial": "Mode",
          "signature": "TerminalAttributes-\u003eTerminalMode-\u003eTerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "withOutputSpeed",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e BaudRate -\u003e TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#withOutputSpeed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withOutputSpeed\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:withOutputSpeed\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "withOutputSpeed",
          "normalized": "TerminalAttributes-\u003eBaudRate-\u003eTerminalAttributes",
          "package": "unix",
          "partial": "Output Speed",
          "signature": "TerminalAttributes-\u003eBaudRate-\u003eTerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withOutputSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "withTime",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e Int -\u003e TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#withTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withTime\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:withTime\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "withTime",
          "normalized": "TerminalAttributes-\u003eInt-\u003eTerminalAttributes",
          "package": "unix",
          "partial": "Time",
          "signature": "TerminalAttributes-\u003eInt-\u003eTerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "withoutCC",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e ControlCharacter -\u003e TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#withoutCC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withoutCC\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:withoutCC\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "withoutCC",
          "normalized": "TerminalAttributes-\u003eControlCharacter-\u003eTerminalAttributes",
          "package": "unix",
          "partial": "CC",
          "signature": "TerminalAttributes-\u003eControlCharacter-\u003eTerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withoutCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.Terminal.ByteString\",\"System.Posix.Terminal\"]",
          "name": "withoutMode",
          "package": "unix",
          "signature": "TerminalAttributes -\u003e TerminalMode -\u003e TerminalAttributes",
          "source": "src/System-Posix-Terminal-Common.html#withoutMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withoutMode\",\"http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:withoutMode\"]"
        },
        "index": {
          "hierarchy": "System Posix Terminal ByteString",
          "module": "System.Posix.Terminal.ByteString",
          "name": "withoutMode",
          "normalized": "TerminalAttributes-\u003eTerminalMode-\u003eTerminalAttributes",
          "package": "unix",
          "partial": "Mode",
          "signature": "TerminalAttributes-\u003eTerminalMode-\u003eTerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal-ByteString.html#v:withoutMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX Terminal support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Terminal",
          "name": "Terminal",
          "package": "unix",
          "source": "src/System-Posix-Terminal.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX Terminal support",
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "Terminal",
          "package": "unix",
          "partial": "Terminal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal",
          "name": "BaudRate",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#BaudRate",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "BaudRate",
          "package": "unix",
          "partial": "Baud Rate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#t:BaudRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal",
          "name": "ControlCharacter",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#ControlCharacter",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "ControlCharacter",
          "package": "unix",
          "partial": "Control Character",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#t:ControlCharacter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal",
          "name": "FlowAction",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#FlowAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "FlowAction",
          "package": "unix",
          "partial": "Flow Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#t:FlowAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal",
          "name": "QueueSelector",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#QueueSelector",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "QueueSelector",
          "package": "unix",
          "partial": "Queue Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#t:QueueSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal",
          "name": "TerminalAttributes",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#TerminalAttributes",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "TerminalAttributes",
          "package": "unix",
          "partial": "Terminal Attributes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#t:TerminalAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal",
          "name": "TerminalMode",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#TerminalMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "TerminalMode",
          "package": "unix",
          "partial": "Terminal Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#t:TerminalMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Terminal",
          "name": "TerminalState",
          "package": "unix",
          "source": "src/System-Posix-Terminal-Common.html#TerminalState",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "TerminalState",
          "package": "unix",
          "partial": "Terminal State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#t:TerminalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetControllingTerminalName\u003c/code\u003e calls \u003ccode\u003ectermid\u003c/code\u003e to obtain\n   a name associated with the controlling terminal for the process.  If a\n   controlling terminal exists,\n   \u003ccode\u003egetControllingTerminalName\u003c/code\u003e returns the name of the\n   controlling terminal.\n\u003c/p\u003e",
          "module": "System.Posix.Terminal",
          "name": "getControllingTerminalName",
          "package": "unix",
          "signature": "IO FilePath",
          "source": "src/System-Posix-Terminal.html#getControllingTerminalName",
          "type": "function"
        },
        "index": {
          "description": "getControllingTerminalName calls ctermid to obtain name associated with the controlling terminal for the process If controlling terminal exists getControllingTerminalName returns the name of the controlling terminal",
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "getControllingTerminalName",
          "package": "unix",
          "partial": "Controlling Terminal Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:getControllingTerminalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetSlaveTerminalName\u003c/code\u003e calls \u003ccode\u003eptsname\u003c/code\u003e to obtain the name of the\n slave terminal associated with a pseudoterminal pair.  The file\n descriptor to pass in must be that of the master.\n\u003c/p\u003e",
          "module": "System.Posix.Terminal",
          "name": "getSlaveTerminalName",
          "package": "unix",
          "signature": "Fd -\u003e IO FilePath",
          "source": "src/System-Posix-Terminal.html#getSlaveTerminalName",
          "type": "function"
        },
        "index": {
          "description": "getSlaveTerminalName calls ptsname to obtain the name of the slave terminal associated with pseudoterminal pair The file descriptor to pass in must be that of the master",
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "getSlaveTerminalName",
          "normalized": "Fd-\u003eIO FilePath",
          "package": "unix",
          "partial": "Slave Terminal Name",
          "signature": "Fd-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:getSlaveTerminalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetTerminalName fd\u003c/code\u003e calls \u003ccode\u003ettyname\u003c/code\u003e to obtain a name associated\n   with the terminal for \u003ccode\u003eFd\u003c/code\u003e \u003ccode\u003efd\u003c/code\u003e. If \u003ccode\u003efd\u003c/code\u003e is associated\n   with a terminal, \u003ccode\u003egetTerminalName\u003c/code\u003e returns the name of the\n   terminal.\n\u003c/p\u003e",
          "module": "System.Posix.Terminal",
          "name": "getTerminalName",
          "package": "unix",
          "signature": "Fd -\u003e IO FilePath",
          "source": "src/System-Posix-Terminal.html#getTerminalName",
          "type": "function"
        },
        "index": {
          "description": "getTerminalName fd calls ttyname to obtain name associated with the terminal for Fd fd If fd is associated with terminal getTerminalName returns the name of the terminal",
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "getTerminalName",
          "normalized": "Fd-\u003eIO FilePath",
          "package": "unix",
          "partial": "Terminal Name",
          "signature": "Fd-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:getTerminalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenPseudoTerminal\u003c/code\u003e creates a pseudoterminal (pty) pair, and\n returns the newly created pair as a (\u003ccode\u003emaster\u003c/code\u003e, \u003ccode\u003eslave\u003c/code\u003e) tuple.\n\u003c/p\u003e",
          "module": "System.Posix.Terminal",
          "name": "openPseudoTerminal",
          "package": "unix",
          "signature": "IO (Fd, Fd)",
          "source": "src/System-Posix-Terminal.html#openPseudoTerminal",
          "type": "function"
        },
        "index": {
          "description": "openPseudoTerminal creates pseudoterminal pty pair and returns the newly created pair as master slave tuple",
          "hierarchy": "System Posix Terminal",
          "module": "System.Posix.Terminal",
          "name": "openPseudoTerminal",
          "normalized": "IO(Fd,Fd)",
          "package": "unix",
          "partial": "Pseudo Terminal",
          "signature": "IO(Fd,Fd)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Terminal.html#v:openPseudoTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX Time support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Time",
          "name": "Time",
          "package": "unix",
          "source": "src/System-Posix-Time.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX Time support",
          "hierarchy": "System Posix Time",
          "module": "System.Posix.Time",
          "name": "Time",
          "package": "unix",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eepochTime\u003c/code\u003e calls \u003ccode\u003etime\u003c/code\u003e to obtain the number of \n   seconds that have elapsed since the epoch (Jan 01 00:00:00 GMT 1970).\n\u003c/p\u003e",
          "module": "System.Posix.Time",
          "name": "epochTime",
          "package": "unix",
          "signature": "IO EpochTime",
          "source": "src/System-Posix-Time.html#epochTime",
          "type": "function"
        },
        "index": {
          "description": "epochTime calls time to obtain the number of seconds that have elapsed since the epoch Jan GMT",
          "hierarchy": "System Posix Time",
          "module": "System.Posix.Time",
          "name": "epochTime",
          "package": "unix",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Time.html#v:epochTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX miscellaneous stuff, mostly from unistd.h\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Unistd",
          "name": "Unistd",
          "package": "unix",
          "source": "src/System-Posix-Unistd.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX miscellaneous stuff mostly from unistd.h",
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "Unistd",
          "package": "unix",
          "partial": "Unistd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "SysVar",
          "package": "unix",
          "source": "src/System-Posix-Unistd.html#SysVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "SysVar",
          "package": "unix",
          "partial": "Sys Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#t:SysVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "SystemID",
          "package": "unix",
          "source": "src/System-Posix-Unistd.html#SystemID",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "SystemID",
          "package": "unix",
          "partial": "System ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#t:SystemID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "ArgumentLimit",
          "package": "unix",
          "signature": "ArgumentLimit",
          "source": "src/System-Posix-Unistd.html#SysVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "ArgumentLimit",
          "package": "unix",
          "partial": "Argument Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:ArgumentLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "ChildLimit",
          "package": "unix",
          "signature": "ChildLimit",
          "source": "src/System-Posix-Unistd.html#SysVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "ChildLimit",
          "package": "unix",
          "partial": "Child Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:ChildLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "ClockTick",
          "package": "unix",
          "signature": "ClockTick",
          "source": "src/System-Posix-Unistd.html#SysVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "ClockTick",
          "package": "unix",
          "partial": "Clock Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:ClockTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "GroupLimit",
          "package": "unix",
          "signature": "GroupLimit",
          "source": "src/System-Posix-Unistd.html#SysVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "GroupLimit",
          "package": "unix",
          "partial": "Group Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:GroupLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "HasJobControl",
          "package": "unix",
          "signature": "HasJobControl",
          "source": "src/System-Posix-Unistd.html#SysVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "HasJobControl",
          "package": "unix",
          "partial": "Has Job Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:HasJobControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "HasSavedIDs",
          "package": "unix",
          "signature": "HasSavedIDs",
          "source": "src/System-Posix-Unistd.html#SysVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "HasSavedIDs",
          "package": "unix",
          "partial": "Has Saved IDs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:HasSavedIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "OpenFileLimit",
          "package": "unix",
          "signature": "OpenFileLimit",
          "source": "src/System-Posix-Unistd.html#SysVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "OpenFileLimit",
          "package": "unix",
          "partial": "Open File Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:OpenFileLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "PosixVersion",
          "package": "unix",
          "signature": "PosixVersion",
          "source": "src/System-Posix-Unistd.html#SysVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "PosixVersion",
          "package": "unix",
          "partial": "Posix Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:PosixVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "SystemID",
          "package": "unix",
          "signature": "SystemID",
          "source": "src/System-Posix-Unistd.html#SystemID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "SystemID",
          "package": "unix",
          "partial": "System ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:SystemID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "getSysVar",
          "package": "unix",
          "signature": "SysVar -\u003e IO Integer",
          "source": "src/System-Posix-Unistd.html#getSysVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "getSysVar",
          "normalized": "SysVar-\u003eIO Integer",
          "package": "unix",
          "partial": "Sys Var",
          "signature": "SysVar-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:getSysVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "getSystemID",
          "package": "unix",
          "signature": "IO SystemID",
          "source": "src/System-Posix-Unistd.html#getSystemID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "getSystemID",
          "package": "unix",
          "partial": "System ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:getSystemID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "machine",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-Unistd.html#SystemID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "machine",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:machine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSleep for the specified duration (in nanoseconds)\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eGHC Note\u003c/em\u003e: the comment for \u003ccode\u003e\u003ca\u003eusleep\u003c/a\u003e\u003c/code\u003e also applies here.\n\u003c/p\u003e",
          "module": "System.Posix.Unistd",
          "name": "nanosleep",
          "package": "unix",
          "signature": "Integer -\u003e IO ()",
          "source": "src/System-Posix-Unistd.html#nanosleep",
          "type": "function"
        },
        "index": {
          "description": "Sleep for the specified duration in nanoseconds GHC Note the comment for usleep also applies here",
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "nanosleep",
          "normalized": "Integer-\u003eIO()",
          "package": "unix",
          "signature": "Integer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:nanosleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "nodeName",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-Unistd.html#SystemID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "nodeName",
          "package": "unix",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:nodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "release",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-Unistd.html#SystemID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "release",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eWarning: This function has several shortcomings (see documentation). Please consider using Control.Concurrent.threadDelay instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eSleep for the specified duration (in seconds).  Returns the time remaining\n (if the sleep was interrupted by a signal, for example).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eGHC Note\u003c/em\u003e: \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e is a better choice.  Since GHC\n uses signals for its internal clock, a call to \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003e will usually be\n interrupted immediately.  That makes \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003e unusable in a program compiled\n with GHC, unless the RTS timer is disabled (with \u003ccode\u003e+RTS -V0\u003c/code\u003e).  Furthermore,\n without the \u003ccode\u003e-threaded\u003c/code\u003e option, \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003e will block all other user threads.\n Even with the \u003ccode\u003e-threaded\u003c/code\u003e option, \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003e requires a full OS thread to\n itself.  \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e has none of these shortcomings.\n\u003c/p\u003e",
          "module": "System.Posix.Unistd",
          "name": "sleep",
          "package": "unix",
          "signature": "Int -\u003e IO Int",
          "source": "src/System-Posix-Unistd.html#sleep",
          "type": "function"
        },
        "index": {
          "description": "Warning This function has several shortcomings see documentation Please consider using Control.Concurrent.threadDelay instead Sleep for the specified duration in seconds Returns the time remaining if the sleep was interrupted by signal for example GHC Note threadDelay is better choice Since GHC uses signals for its internal clock call to sleep will usually be interrupted immediately That makes sleep unusable in program compiled with GHC unless the RTS timer is disabled with RTS V0 Furthermore without the threaded option sleep will block all other user threads Even with the threaded option sleep requires full OS thread to itself threadDelay has none of these shortcomings",
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "sleep",
          "normalized": "Int-\u003eIO Int",
          "package": "unix",
          "signature": "Int-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:sleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "systemName",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-Unistd.html#SystemID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "systemName",
          "package": "unix",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:systemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSleep for the specified duration (in microseconds).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eGHC Note\u003c/em\u003e: \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e is a better choice.\n Without the \u003ccode\u003e-threaded\u003c/code\u003e option, \u003ccode\u003e\u003ca\u003eusleep\u003c/a\u003e\u003c/code\u003e will block all other user\n threads.  Even with the \u003ccode\u003e-threaded\u003c/code\u003e option, \u003ccode\u003e\u003ca\u003eusleep\u003c/a\u003e\u003c/code\u003e requires a\n full OS thread to itself.  \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e has\n neither of these shortcomings.\n\u003c/p\u003e",
          "module": "System.Posix.Unistd",
          "name": "usleep",
          "package": "unix",
          "signature": "Int -\u003e IO ()",
          "source": "src/System-Posix-Unistd.html#usleep",
          "type": "function"
        },
        "index": {
          "description": "Sleep for the specified duration in microseconds GHC Note threadDelay is better choice Without the threaded option usleep will block all other user threads Even with the threaded option usleep requires full OS thread to itself threadDelay has neither of these shortcomings",
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "usleep",
          "normalized": "Int-\u003eIO()",
          "package": "unix",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:usleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Unistd",
          "name": "version",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-Unistd.html#SystemID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Unistd",
          "module": "System.Posix.Unistd",
          "name": "version",
          "package": "unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-Unistd.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX user/group support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.User",
          "name": "User",
          "package": "unix",
          "source": "src/System-Posix-User.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX user group support",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "User",
          "package": "unix",
          "partial": "User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.User",
          "name": "GroupEntry",
          "package": "unix",
          "source": "src/System-Posix-User.html#GroupEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "GroupEntry",
          "package": "unix",
          "partial": "Group Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#t:GroupEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.User",
          "name": "UserEntry",
          "package": "unix",
          "source": "src/System-Posix-User.html#UserEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "UserEntry",
          "package": "unix",
          "partial": "User Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#t:UserEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.User",
          "name": "GroupEntry",
          "package": "unix",
          "signature": "GroupEntry",
          "source": "src/System-Posix-User.html#GroupEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "GroupEntry",
          "package": "unix",
          "partial": "Group Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:GroupEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.User",
          "name": "UserEntry",
          "package": "unix",
          "signature": "UserEntry",
          "source": "src/System-Posix-User.html#UserEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "UserEntry",
          "package": "unix",
          "partial": "User Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:UserEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAllGroupEntries\u003c/code\u003e returns all group entries on the system by\n   repeatedly calling \u003ccode\u003egetgrent\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getAllGroupEntries",
          "package": "unix",
          "signature": "IO [GroupEntry]",
          "source": "src/System-Posix-User.html#getAllGroupEntries",
          "type": "function"
        },
        "index": {
          "description": "getAllGroupEntries returns all group entries on the system by repeatedly calling getgrent",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getAllGroupEntries",
          "normalized": "IO[GroupEntry]",
          "package": "unix",
          "partial": "All Group Entries",
          "signature": "IO[GroupEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getAllGroupEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAllUserEntries\u003c/code\u003e returns all user entries on the system by \n   repeatedly calling \u003ccode\u003egetpwent\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getAllUserEntries",
          "package": "unix",
          "signature": "IO [UserEntry]",
          "source": "src/System-Posix-User.html#getAllUserEntries",
          "type": "function"
        },
        "index": {
          "description": "getAllUserEntries returns all user entries on the system by repeatedly calling getpwent",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getAllUserEntries",
          "normalized": "IO[UserEntry]",
          "package": "unix",
          "partial": "All User Entries",
          "signature": "IO[UserEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getAllUserEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetEffectiveGroupID\u003c/code\u003e calls \u003ccode\u003egetegid\u003c/code\u003e to obtain the effective\n   \u003ccode\u003eGroupID\u003c/code\u003e associated with the current process.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getEffectiveGroupID",
          "package": "unix",
          "signature": "IO GroupID",
          "source": "src/System-Posix-User.html#getEffectiveGroupID",
          "type": "function"
        },
        "index": {
          "description": "getEffectiveGroupID calls getegid to obtain the effective GroupID associated with the current process",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getEffectiveGroupID",
          "package": "unix",
          "partial": "Effective Group ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getEffectiveGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetEffectiveUserID\u003c/code\u003e calls \u003ccode\u003egeteuid\u003c/code\u003e to obtain the effective\n   \u003ccode\u003eUserID\u003c/code\u003e associated with the current process.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getEffectiveUserID",
          "package": "unix",
          "signature": "IO UserID",
          "source": "src/System-Posix-User.html#getEffectiveUserID",
          "type": "function"
        },
        "index": {
          "description": "getEffectiveUserID calls geteuid to obtain the effective UserID associated with the current process",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getEffectiveUserID",
          "package": "unix",
          "partial": "Effective User ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getEffectiveUserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetEffectiveUserName\u003c/code\u003e gets the name\n   associated with the effective \u003ccode\u003eUserID\u003c/code\u003e of the process.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getEffectiveUserName",
          "package": "unix",
          "signature": "IO String",
          "source": "src/System-Posix-User.html#getEffectiveUserName",
          "type": "function"
        },
        "index": {
          "description": "getEffectiveUserName gets the name associated with the effective UserID of the process",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getEffectiveUserName",
          "package": "unix",
          "partial": "Effective User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getEffectiveUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGroupEntryForID gid\u003c/code\u003e calls \u003ccode\u003egetgrgid_r\u003c/code\u003e to obtain\n   the \u003ccode\u003eGroupEntry\u003c/code\u003e information associated with \u003ccode\u003eGroupID\u003c/code\u003e\n   \u003ccode\u003egid\u003c/code\u003e. This operation may fail with \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e\n   if no such group exists.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getGroupEntryForID",
          "package": "unix",
          "signature": "GroupID -\u003e IO GroupEntry",
          "source": "src/System-Posix-User.html#getGroupEntryForID",
          "type": "function"
        },
        "index": {
          "description": "getGroupEntryForID gid calls getgrgid to obtain the GroupEntry information associated with GroupID gid This operation may fail with isDoesNotExistError if no such group exists",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getGroupEntryForID",
          "normalized": "GroupID-\u003eIO GroupEntry",
          "package": "unix",
          "partial": "Group Entry For ID",
          "signature": "GroupID-\u003eIO GroupEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getGroupEntryForID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGroupEntryForName name\u003c/code\u003e calls \u003ccode\u003egetgrnam_r\u003c/code\u003e to obtain\n   the \u003ccode\u003eGroupEntry\u003c/code\u003e information associated with the group called\n   \u003ccode\u003ename\u003c/code\u003e. This operation may fail with \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e\n   if no such group exists.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getGroupEntryForName",
          "package": "unix",
          "signature": "String -\u003e IO GroupEntry",
          "source": "src/System-Posix-User.html#getGroupEntryForName",
          "type": "function"
        },
        "index": {
          "description": "getGroupEntryForName name calls getgrnam to obtain the GroupEntry information associated with the group called name This operation may fail with isDoesNotExistError if no such group exists",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getGroupEntryForName",
          "normalized": "String-\u003eIO GroupEntry",
          "package": "unix",
          "partial": "Group Entry For Name",
          "signature": "String-\u003eIO GroupEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getGroupEntryForName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGroups\u003c/code\u003e calls \u003ccode\u003egetgroups\u003c/code\u003e to obtain the list of\n   supplementary \u003ccode\u003eGroupID\u003c/code\u003es associated with the current process.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getGroups",
          "package": "unix",
          "signature": "IO [GroupID]",
          "source": "src/System-Posix-User.html#getGroups",
          "type": "function"
        },
        "index": {
          "description": "getGroups calls getgroups to obtain the list of supplementary GroupID associated with the current process",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getGroups",
          "normalized": "IO[GroupID]",
          "package": "unix",
          "partial": "Groups",
          "signature": "IO[GroupID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetLoginName\u003c/code\u003e calls \u003ccode\u003egetlogin\u003c/code\u003e to obtain the login name\n   associated with the current process.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getLoginName",
          "package": "unix",
          "signature": "IO String",
          "source": "src/System-Posix-User.html#getLoginName",
          "type": "function"
        },
        "index": {
          "description": "getLoginName calls getlogin to obtain the login name associated with the current process",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getLoginName",
          "package": "unix",
          "partial": "Login Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getLoginName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetRealGroupID\u003c/code\u003e calls \u003ccode\u003egetgid\u003c/code\u003e to obtain the real \u003ccode\u003eGroupID\u003c/code\u003e\n   associated with the current process.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getRealGroupID",
          "package": "unix",
          "signature": "IO GroupID",
          "source": "src/System-Posix-User.html#getRealGroupID",
          "type": "function"
        },
        "index": {
          "description": "getRealGroupID calls getgid to obtain the real GroupID associated with the current process",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getRealGroupID",
          "package": "unix",
          "partial": "Real Group ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getRealGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetRealUserID\u003c/code\u003e calls \u003ccode\u003egetuid\u003c/code\u003e to obtain the real \u003ccode\u003eUserID\u003c/code\u003e\n   associated with the current process.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getRealUserID",
          "package": "unix",
          "signature": "IO UserID",
          "source": "src/System-Posix-User.html#getRealUserID",
          "type": "function"
        },
        "index": {
          "description": "getRealUserID calls getuid to obtain the real UserID associated with the current process",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getRealUserID",
          "package": "unix",
          "partial": "Real User ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getRealUserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetUserEntryForID gid\u003c/code\u003e calls \u003ccode\u003egetpwuid_r\u003c/code\u003e to obtain\n   the \u003ccode\u003eUserEntry\u003c/code\u003e information associated with \u003ccode\u003eUserID\u003c/code\u003e\n   \u003ccode\u003euid\u003c/code\u003e. This operation may fail with \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e\n   if no such user exists.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getUserEntryForID",
          "package": "unix",
          "signature": "UserID -\u003e IO UserEntry",
          "source": "src/System-Posix-User.html#getUserEntryForID",
          "type": "function"
        },
        "index": {
          "description": "getUserEntryForID gid calls getpwuid to obtain the UserEntry information associated with UserID uid This operation may fail with isDoesNotExistError if no such user exists",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getUserEntryForID",
          "normalized": "UserID-\u003eIO UserEntry",
          "package": "unix",
          "partial": "User Entry For ID",
          "signature": "UserID-\u003eIO UserEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getUserEntryForID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetUserEntryForName name\u003c/code\u003e calls \u003ccode\u003egetpwnam_r\u003c/code\u003e to obtain\n   the \u003ccode\u003eUserEntry\u003c/code\u003e information associated with the user login\n   \u003ccode\u003ename\u003c/code\u003e. This operation may fail with \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e\n   if no such user exists.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "getUserEntryForName",
          "package": "unix",
          "signature": "String -\u003e IO UserEntry",
          "source": "src/System-Posix-User.html#getUserEntryForName",
          "type": "function"
        },
        "index": {
          "description": "getUserEntryForName name calls getpwnam to obtain the UserEntry information associated with the user login name This operation may fail with isDoesNotExistError if no such user exists",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "getUserEntryForName",
          "normalized": "String-\u003eIO UserEntry",
          "package": "unix",
          "partial": "User Entry For Name",
          "signature": "String-\u003eIO UserEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:getUserEntryForName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unique numeric ID for this group (gr_gid)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "groupID",
          "package": "unix",
          "signature": "GroupID",
          "source": "src/System-Posix-User.html#GroupEntry",
          "type": "function"
        },
        "index": {
          "description": "The unique numeric ID for this group gr gid",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "groupID",
          "package": "unix",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:groupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of zero or more usernames that are members (gr_mem)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "groupMembers",
          "package": "unix",
          "signature": "[String]",
          "source": "src/System-Posix-User.html#GroupEntry",
          "type": "function"
        },
        "index": {
          "description": "list of zero or more usernames that are members gr mem",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "groupMembers",
          "normalized": "[String]",
          "package": "unix",
          "partial": "Members",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:groupMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of this group (gr_name)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "groupName",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-User.html#GroupEntry",
          "type": "function"
        },
        "index": {
          "description": "The name of this group gr name",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "groupName",
          "package": "unix",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:groupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe password for this group (gr_passwd)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "groupPassword",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-User.html#GroupEntry",
          "type": "function"
        },
        "index": {
          "description": "The password for this group gr passwd",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "groupPassword",
          "package": "unix",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:groupPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHome directory (pw_dir)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "homeDirectory",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-User.html#UserEntry",
          "type": "function"
        },
        "index": {
          "description": "Home directory pw dir",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "homeDirectory",
          "package": "unix",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:homeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetEffectiveGroupID uid\u003c/code\u003e calls \u003ccode\u003esetegid\u003c/code\u003e to set the effective\n   group-id associated with the current process to \u003ccode\u003egid\u003c/code\u003e. This\n   does not update the real group-id or set-group-id.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "setEffectiveGroupID",
          "package": "unix",
          "signature": "GroupID -\u003e IO ()",
          "source": "src/System-Posix-User.html#setEffectiveGroupID",
          "type": "function"
        },
        "index": {
          "description": "setEffectiveGroupID uid calls setegid to set the effective group-id associated with the current process to gid This does not update the real group-id or set-group-id",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "setEffectiveGroupID",
          "normalized": "GroupID-\u003eIO()",
          "package": "unix",
          "partial": "Effective Group ID",
          "signature": "GroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:setEffectiveGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetEffectiveUserID uid\u003c/code\u003e calls \u003ccode\u003eseteuid\u003c/code\u003e to set the effective\n   user-id associated with the current process to \u003ccode\u003euid\u003c/code\u003e. This\n   does not update the real user-id or set-user-id.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "setEffectiveUserID",
          "package": "unix",
          "signature": "UserID -\u003e IO ()",
          "source": "src/System-Posix-User.html#setEffectiveUserID",
          "type": "function"
        },
        "index": {
          "description": "setEffectiveUserID uid calls seteuid to set the effective user-id associated with the current process to uid This does not update the real user-id or set-user-id",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "setEffectiveUserID",
          "normalized": "UserID-\u003eIO()",
          "package": "unix",
          "partial": "Effective User ID",
          "signature": "UserID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:setEffectiveUserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetGroupID gid\u003c/code\u003e calls \u003ccode\u003esetgid\u003c/code\u003e to set the real, effective, and\n   saved set-group-id associated with the current process to \u003ccode\u003egid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "setGroupID",
          "package": "unix",
          "signature": "GroupID -\u003e IO ()",
          "source": "src/System-Posix-User.html#setGroupID",
          "type": "function"
        },
        "index": {
          "description": "setGroupID gid calls setgid to set the real effective and saved set-group-id associated with the current process to gid",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "setGroupID",
          "normalized": "GroupID-\u003eIO()",
          "package": "unix",
          "partial": "Group ID",
          "signature": "GroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:setGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetGroups\u003c/code\u003e calls \u003ccode\u003esetgroups\u003c/code\u003e to set the list of\n   supplementary \u003ccode\u003eGroupID\u003c/code\u003es associated with the current process.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "setGroups",
          "package": "unix",
          "signature": "[GroupID] -\u003e IO ()",
          "source": "src/System-Posix-User.html#setGroups",
          "type": "function"
        },
        "index": {
          "description": "setGroups calls setgroups to set the list of supplementary GroupID associated with the current process",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "setGroups",
          "normalized": "[GroupID]-\u003eIO()",
          "package": "unix",
          "partial": "Groups",
          "signature": "[GroupID]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:setGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetUserID uid\u003c/code\u003e calls \u003ccode\u003esetuid\u003c/code\u003e to set the real, effective, and\n   saved set-user-id associated with the current process to \u003ccode\u003euid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "setUserID",
          "package": "unix",
          "signature": "UserID -\u003e IO ()",
          "source": "src/System-Posix-User.html#setUserID",
          "type": "function"
        },
        "index": {
          "description": "setUserID uid calls setuid to set the real effective and saved set-user-id associated with the current process to uid",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "setUserID",
          "normalized": "UserID-\u003eIO()",
          "package": "unix",
          "partial": "User ID",
          "signature": "UserID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:setUserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsually the real name for the user (pw_gecos)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "userGecos",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-User.html#UserEntry",
          "type": "function"
        },
        "index": {
          "description": "Usually the real name for the user pw gecos",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "userGecos",
          "package": "unix",
          "partial": "Gecos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:userGecos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimary group ID (pw_gid)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "userGroupID",
          "package": "unix",
          "signature": "GroupID",
          "source": "src/System-Posix-User.html#UserEntry",
          "type": "function"
        },
        "index": {
          "description": "Primary group ID pw gid",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "userGroupID",
          "package": "unix",
          "partial": "Group ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:userGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric ID for this user (pw_uid)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "userID",
          "package": "unix",
          "signature": "UserID",
          "source": "src/System-Posix-User.html#UserEntry",
          "type": "function"
        },
        "index": {
          "description": "Numeric ID for this user pw uid",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "userID",
          "package": "unix",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:userID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTextual name of this user (pw_name)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "userName",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-User.html#UserEntry",
          "type": "function"
        },
        "index": {
          "description": "Textual name of this user pw name",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "userName",
          "package": "unix",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:userName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePassword -- may be empty or fake if shadow is in use (pw_passwd)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "userPassword",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-User.html#UserEntry",
          "type": "function"
        },
        "index": {
          "description": "Password may be empty or fake if shadow is in use pw passwd",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "userPassword",
          "package": "unix",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:userPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault shell (pw_shell)\n\u003c/p\u003e",
          "module": "System.Posix.User",
          "name": "userShell",
          "package": "unix",
          "signature": "String",
          "source": "src/System-Posix-User.html#UserEntry",
          "type": "function"
        },
        "index": {
          "description": "Default shell pw shell",
          "hierarchy": "System Posix User",
          "module": "System.Posix.User",
          "name": "userShell",
          "package": "unix",
          "partial": "Shell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix-User.html#v:userShell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix",
          "name": "Posix",
          "package": "unix",
          "source": "src/System-Posix.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX support",
          "hierarchy": "System Posix",
          "module": "System.Posix",
          "name": "Posix",
          "package": "unix",
          "partial": "Posix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix/docs/System-Posix.html#"
      }
    }
  ]
]