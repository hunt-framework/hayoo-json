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
        "word": "gnomevfs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Cancellation",
          "name": "Cancellation",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Cancellation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS Cancellation",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "Cancellation",
          "package": "gnomevfs",
          "partial": "Cancellation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object that can be used for signalling cancellation of an\n operation.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "Cancellation",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Cancellation",
          "type": "data"
        },
        "index": {
          "description": "An object that can be used for signalling cancellation of an operation",
          "hierarchy": "System Gnome VFS Cancellation",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "Cancellation",
          "package": "gnomevfs",
          "partial": "Cancellation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#t:Cancellation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcknowledge a cancellation. This should be called if\n \u003ccode\u003e\u003ca\u003ecancellationCheck\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationAck",
          "package": "gnomevfs",
          "signature": "Cancellation-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Acknowledge cancellation This should be called if cancellationCheck returns True",
          "hierarchy": "System Gnome VFS Cancellation",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationAck",
          "normalized": "Cancellation-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Ack",
          "signature": "Cancellation-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a cancellation request through a \u003ccode\u003e\u003ca\u003eCancellation\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationCancel",
          "package": "gnomevfs",
          "signature": "Cancellation-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Send cancellation request through Cancellation object",
          "hierarchy": "System Gnome VFS Cancellation",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationCancel",
          "normalized": "Cancellation-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Cancel",
          "signature": "Cancellation-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for pending cancellation.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationCheck",
          "package": "gnomevfs",
          "signature": "Cancellation-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Check for pending cancellation",
          "hierarchy": "System Gnome VFS Cancellation",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationCheck",
          "normalized": "Cancellation-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Check",
          "signature": "Cancellation-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a file descriptor-based notificator for cancellation. When\n cancellation receives a cancellation request, a character will be\n made available on the returned file descriptor for input.\n\u003c/p\u003e\u003cp\u003eThis is very useful for detecting cancellation during I/O\n operations: you can use the select() call to check for available\n input/output on the file you are reading/writing, and on the\n notificator's file descriptor at the same time. If a data is\n available on the notificator's file descriptor, you know you have\n to cancel the read/write operation.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationGetFD",
          "package": "gnomevfs",
          "signature": "Cancellation-\u003e IO Fd",
          "type": "function"
        },
        "index": {
          "description": "Get file descriptor-based notificator for cancellation When cancellation receives cancellation request character will be made available on the returned file descriptor for input This is very useful for detecting cancellation during operations you can use the select call to check for available input output on the file you are reading writing and on the notificator file descriptor at the same time If data is available on the notificator file descriptor you know you have to cancel the read write operation",
          "hierarchy": "System Gnome VFS Cancellation",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationGetFD",
          "normalized": "Cancellation-\u003eIO Fd",
          "package": "gnomevfs",
          "partial": "Get FD",
          "signature": "Cancellation-\u003eIO Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationGetFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eCancellation\u003c/a\u003e\u003c/code\u003e object for reporting\n cancellation to a gnome-vfs module.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationNew",
          "package": "gnomevfs",
          "signature": "IO Cancellation",
          "type": "function"
        },
        "index": {
          "description": "Create new Cancellation object for reporting cancellation to gnome-vfs module",
          "hierarchy": "System Gnome VFS Cancellation",
          "module": "System.Gnome.VFS.Cancellation",
          "name": "cancellationNew",
          "package": "gnomevfs",
          "partial": "New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for creating, removing, and accessing directories and\n their contents.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "Directory",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Directory.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for creating removing and accessing directories and their contents",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "Directory",
          "package": "gnomevfs",
          "partial": "Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle to an open directory.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryHandle",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryHandle",
          "type": "data"
        },
        "index": {
          "description": "handle to an open directory",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryHandle",
          "package": "gnomevfs",
          "partial": "Directory Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#t:DirectoryHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions controlling the way in which a directories are visited.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitOptions",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
          "type": "data"
        },
        "index": {
          "description": "Options controlling the way in which directories are visited",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitOptions",
          "package": "gnomevfs",
          "partial": "Directory Visit Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#t:DirectoryVisitOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumerated value that must be returned from a\n \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e. The \u003ccode\u003edirectoryVisit\u003c/code\u003e and related\n functions will perform the action specified.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitResult",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitResult",
          "type": "data"
        },
        "index": {
          "description": "An enumerated value that must be returned from DirectoryVisitCallback The directoryVisit and related functions will perform the action specified",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitResult",
          "package": "gnomevfs",
          "partial": "Directory Visit Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#t:DirectoryVisitResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtinue as normal\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitContinue",
          "package": "gnomevfs",
          "signature": "DirectoryVisitContinue",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitResult",
          "type": "function"
        },
        "index": {
          "description": "continue as normal",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitContinue",
          "package": "gnomevfs",
          "partial": "Directory Visit Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitDefault",
          "package": "gnomevfs",
          "signature": "DirectoryVisitDefault",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitDefault",
          "package": "gnomevfs",
          "partial": "Directory Visit Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitIgnoreRecurseError",
          "package": "gnomevfs",
          "signature": "DirectoryVisitIgnoreRecurseError",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitIgnoreRecurseError",
          "package": "gnomevfs",
          "partial": "Directory Visit Ignore Recurse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitIgnoreRecurseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitLoopcheck",
          "package": "gnomevfs",
          "signature": "DirectoryVisitLoopcheck",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitLoopcheck",
          "package": "gnomevfs",
          "partial": "Directory Visit Loopcheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitLoopcheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecursively visit the current entry\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitRecurse",
          "package": "gnomevfs",
          "signature": "DirectoryVisitRecurse",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitResult",
          "type": "function"
        },
        "index": {
          "description": "recursively visit the current entry",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitRecurse",
          "package": "gnomevfs",
          "partial": "Directory Visit Recurse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitRecurse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitSamefs",
          "package": "gnomevfs",
          "signature": "DirectoryVisitSamefs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitSamefs",
          "package": "gnomevfs",
          "partial": "Directory Visit Samefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitSamefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estop visiting files\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitStop",
          "package": "gnomevfs",
          "signature": "DirectoryVisitStop",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitResult",
          "type": "function"
        },
        "index": {
          "description": "stop visiting files",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "DirectoryVisitStop",
          "package": "gnomevfs",
          "partial": "Directory Visit Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a \u003ccode\u003e\u003ca\u003eDirectoryHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryClose",
          "package": "gnomevfs",
          "signature": "DirectoryHandle-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Close DirectoryHandle",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryClose",
          "normalized": "DirectoryHandle-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Close",
          "signature": "DirectoryHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list of \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e objects representing each entry in the\n directory at \u003ccode\u003etextURI\u003c/code\u003e, using options \u003ccode\u003eoptions\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryListLoad",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e [FileInfoOptions]-\u003e IO [FileInfo]",
          "type": "function"
        },
        "index": {
          "description": "Create list of FileInfo objects representing each entry in the directory at textURI using options options",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryListLoad",
          "normalized": "TextURI-\u003e[FileInfoOptions]-\u003eIO[FileInfo]",
          "package": "gnomevfs",
          "partial": "List Load",
          "signature": "TextURI-\u003e[FileInfoOptions]-\u003eIO[FileInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryListLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen directory textURI for reading. Returns a \u003ccode\u003e\u003ca\u003eDirectoryHandle\u003c/a\u003e\u003c/code\u003e\n which can be used to read directory entries one by one.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryOpen",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e [FileInfoOptions]-\u003e IO DirectoryHandle",
          "type": "function"
        },
        "index": {
          "description": "Open directory textURI for reading Returns DirectoryHandle which can be used to read directory entries one by one",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryOpen",
          "normalized": "TextURI-\u003e[FileInfoOptions]-\u003eIO DirectoryHandle",
          "package": "gnomevfs",
          "partial": "Open",
          "signature": "TextURI-\u003e[FileInfoOptions]-\u003eIO DirectoryHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen directory textURI for reading. Returns a \u003ccode\u003e\u003ca\u003eDirectoryHandle\u003c/a\u003e\u003c/code\u003e\n which can be used to read directory entries one by one.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryOpenFromURI",
          "package": "gnomevfs",
          "signature": "URI-\u003e [FileInfoOptions]-\u003e IO DirectoryHandle",
          "type": "function"
        },
        "index": {
          "description": "Open directory textURI for reading Returns DirectoryHandle which can be used to read directory entries one by one",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryOpenFromURI",
          "normalized": "URI-\u003e[FileInfoOptions]-\u003eIO DirectoryHandle",
          "package": "gnomevfs",
          "partial": "Open From URI",
          "signature": "URI-\u003e[FileInfoOptions]-\u003eIO DirectoryHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryOpenFromURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next directory entry from a \u003ccode\u003e\u003ca\u003eDirectoryHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryReadNext",
          "package": "gnomevfs",
          "signature": "DirectoryHandle-\u003e IO FileInfo",
          "type": "function"
        },
        "index": {
          "description": "Read the next directory entry from DirectoryHandle",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryReadNext",
          "normalized": "DirectoryHandle-\u003eIO FileInfo",
          "package": "gnomevfs",
          "partial": "Read Next",
          "signature": "DirectoryHandle-\u003eIO FileInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryReadNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisit each entry in a directory at a \u003ccode\u003e\u003ca\u003eTextURI\u003c/a\u003e\u003c/code\u003e, calling a\n \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e for each one.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryVisit",
          "package": "gnomevfs",
          "signature": "String-\u003e [FileInfoOptions]-\u003e [DirectoryVisitOptions]-\u003e DirectoryVisitCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Visit each entry in directory at TextURI calling DirectoryVisitCallback for each one",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryVisit",
          "normalized": "String-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Visit",
          "signature": "String-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryVisit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisit each file in a list contained with a directory at a\n \u003ccode\u003e\u003ca\u003eTextURI\u003c/a\u003e\u003c/code\u003e, calling a \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e for each one.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryVisitFiles",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e [String]-\u003e [FileInfoOptions]-\u003e [DirectoryVisitOptions]-\u003e DirectoryVisitCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Visit each file in list contained with directory at TextURI calling DirectoryVisitCallback for each one",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryVisitFiles",
          "normalized": "TextURI-\u003e[String]-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Visit Files",
          "signature": "TextURI-\u003e[String]-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryVisitFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisit each file in a list contained with a directory at a\n \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e, calling a \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e for each one.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryVisitFilesAtURI",
          "package": "gnomevfs",
          "signature": "URI-\u003e [String]-\u003e [FileInfoOptions]-\u003e [DirectoryVisitOptions]-\u003e DirectoryVisitCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Visit each file in list contained with directory at URI calling DirectoryVisitCallback for each one",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryVisitFilesAtURI",
          "normalized": "URI-\u003e[String]-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Visit Files At URI",
          "signature": "URI-\u003e[String]-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryVisitFilesAtURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisit each entry in a directory at a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e, calling a\n \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e for each one.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryVisitURI",
          "package": "gnomevfs",
          "signature": "URI-\u003e [FileInfoOptions]-\u003e [DirectoryVisitOptions]-\u003e DirectoryVisitCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Visit each entry in directory at URI calling DirectoryVisitCallback for each one",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "directoryVisitURI",
          "normalized": "URI-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Visit URI",
          "signature": "URI-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryVisitURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate \u003ccode\u003etextURI\u003c/code\u003e as a directory. Only succeeds if a file or\n directory does not already exist at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "makeDirectory",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e [FilePermissions]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Create textURI as directory Only succeeds if file or directory does not already exist at textURI",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "makeDirectory",
          "normalized": "TextURI-\u003e[FilePermissions]-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Directory",
          "signature": "TextURI-\u003e[FilePermissions]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:makeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate \u003ccode\u003euri\u003c/code\u003e as a directory. Only succeeds if a file or\n directory does not already exist at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "makeDirectoryForURI",
          "package": "gnomevfs",
          "signature": "URI-\u003e [FilePermissions]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Create uri as directory Only succeeds if file or directory does not already exist at uri",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "makeDirectoryForURI",
          "normalized": "URI-\u003e[FilePermissions]-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Directory For URI",
          "signature": "URI-\u003e[FilePermissions]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:makeDirectoryForURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the directory at \u003ccode\u003etextURI\u003c/code\u003e. The object at \u003ccode\u003etextURI\u003c/code\u003e must be an empty directory.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "removeDirectory",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Remove the directory at textURI The object at textURI must be an empty directory",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "removeDirectory",
          "normalized": "TextURI-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Directory",
          "signature": "TextURI-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:removeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the directory at \u003ccode\u003euri\u003c/code\u003e. The object at \u003ccode\u003euri\u003c/code\u003e must be an empty directory.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Directory",
          "name": "removeDirectoryFromURI",
          "package": "gnomevfs",
          "signature": "URI-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Remove the directory at uri The object at uri must be an empty directory",
          "hierarchy": "System Gnome VFS Directory",
          "module": "System.Gnome.VFS.Directory",
          "name": "removeDirectoryFromURI",
          "normalized": "URI-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Directory From URI",
          "signature": "URI-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:removeDirectoryFromURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "Drive",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Drive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "Drive",
          "package": "gnomevfs",
          "partial": "Drive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies the device type of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "DeviceType",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DeviceType",
          "type": "data"
        },
        "index": {
          "description": "Identifies the device type of Volume or Drive",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "DeviceType",
          "package": "gnomevfs",
          "partial": "Device Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#t:DeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "Drive",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Types.html#Drive",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "Drive",
          "package": "gnomevfs",
          "partial": "Drive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#t:Drive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "DriveClass",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Types.html#DriveClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "DriveClass",
          "package": "gnomevfs",
          "partial": "Drive Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#t:DriveClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "DriveID",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#DriveID",
          "type": "type"
        },
        "index": {
          "description": "Identifies Drive",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "DriveID",
          "package": "gnomevfs",
          "partial": "Drive ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#t:DriveID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "afterDriveVolumeMounted",
          "package": "gnomevfs",
          "signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "afterDriveVolumeMounted",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Drive Volume Mounted",
          "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:afterDriveVolumeMounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "afterDriveVolumePreUnmount",
          "package": "gnomevfs",
          "signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "afterDriveVolumePreUnmount",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Drive Volume Pre Unmount",
          "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:afterDriveVolumePreUnmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "afterDriveVolumeUnmounted",
          "package": "gnomevfs",
          "signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "afterDriveVolumeUnmounted",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Drive Volume Unmounted",
          "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:afterDriveVolumeUnmounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "castToDrive",
          "package": "gnomevfs",
          "signature": "obj -\u003e Drive",
          "source": "src/System-Gnome-VFS-Types.html#castToDrive",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "castToDrive",
          "normalized": "a-\u003eDrive",
          "package": "gnomevfs",
          "partial": "To Drive",
          "signature": "obj-\u003eDrive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:castToDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares two \u003ccode\u003e\u003ca\u003eDriveClass\u003c/a\u003e\u003c/code\u003e objects \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e. Two \u003ccode\u003e\u003ca\u003eDriveClass\u003c/a\u003e\u003c/code\u003e\n objects referring to different drives are guaranteed to not\n return \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e when comparing them. If they refer to the same drive \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e\n is returned.\n\u003c/p\u003e\u003cp\u003eThe resulting gint should be used to determine the order in which\n \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are displayed in graphical user interfaces.\n\u003c/p\u003e\u003cp\u003eThe comparison algorithm first of all peeks the device type of\n \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, they will be sorted in the following order:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Magnetic and opto-magnetic drives (ZIP, floppy)\n\u003c/li\u003e\u003cli\u003e Optical drives (CD, DVD)\n\u003c/li\u003e\u003cli\u003e External drives (USB sticks, music players)\n\u003c/li\u003e\u003cli\u003e Mounted hard disks\n\u003c/li\u003e\u003cli\u003e Other drives\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAfterwards, the display name of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e is compared using a\n locale-sensitive sorting algorithm.\n\u003c/p\u003e\u003cp\u003eIf two drives have the same display name, their unique ID is\n compared which can be queried using \u003ccode\u003e\u003ca\u003edriveGetID\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveCompare",
          "package": "gnomevfs",
          "signature": "drive-\u003e drive-\u003e IO Ordering",
          "type": "function"
        },
        "index": {
          "description": "Compares two DriveClass objects and Two DriveClass objects referring to different drives are guaranteed to not return EQ when comparing them If they refer to the same drive EQ is returned The resulting gint should be used to determine the order in which and are displayed in graphical user interfaces The comparison algorithm first of all peeks the device type of and they will be sorted in the following order Magnetic and opto-magnetic drives ZIP floppy Optical drives CD DVD External drives USB sticks music players Mounted hard disks Other drives Afterwards the display name of and is compared using locale-sensitive sorting algorithm If two drives have the same display name their unique ID is compared which can be queried using driveGetID",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveCompare",
          "normalized": "a-\u003ea-\u003eIO Ordering",
          "package": "gnomevfs",
          "partial": "Compare",
          "signature": "drive-\u003edrive-\u003eIO Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf drive has associated \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e objects, all of them will be\n unmounted by calling \u003ccode\u003eSystem.Gnome.VFS.Volume.volumeUnmount\u003c/code\u003e for\n each volume in \u003ccode\u003e\u003ca\u003edriveGetMountedVolumes\u003c/a\u003e\u003c/code\u003e, except for the last one,\n for which \u003ccode\u003eSystem.Gnome.VFS.Volume.volumeEject\u003c/code\u003e is called to\n ensure that the drive's media is ejected.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveEject",
          "package": "gnomevfs",
          "signature": "drive-\u003e VolumeOpSuccessCallback-\u003e VolumeOpFailureCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "If drive has associated Volume objects all of them will be unmounted by calling System.Gnome.VFS.Volume.volumeUnmount for each volume in driveGetMountedVolumes except for the last one for which System.Gnome.VFS.Volume.volumeEject is called to ensure that the drive media is ejected",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveEject",
          "normalized": "a-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Eject",
          "signature": "drive-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveEject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the activation URI of \u003ccode\u003edrive\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe returned URI usually refers to a valid location. You can\n check the validity of the location by calling\n \u003ccode\u003eSystem.Gnome.VFS.URI.uriFromString\u003c/code\u003e with the URI, and checking\n whether the return value is not \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetActivationURI",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Returns the activation URI of drive The returned URI usually refers to valid location You can check the validity of the location by calling System.Gnome.VFS.URI.uriFromString with the URI and checking whether the return value is not Nothing",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetActivationURI",
          "normalized": "a-\u003eIO String",
          "package": "gnomevfs",
          "partial": "Get Activation URI",
          "signature": "drive-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetActivationURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the device path of a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eFor HAL drives, this returns the value of the drive's\n \u003ccode\u003eblock.device\u003c/code\u003e key. For UNIX mounts, it returns the \u003ccode\u003emntent\u003c/code\u003e's\n \u003ccode\u003emnt_fsname\u003c/code\u003e entry.\n\u003c/p\u003e\u003cp\u003eOtherwise, it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetDevicePath",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Returns the device path of Drive object For HAL drives this returns the value of the drive block.device key For UNIX mounts it returns the mntent mnt fsname entry Otherwise it returns Nothing",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetDevicePath",
          "normalized": "a-\u003eIO(Maybe String)",
          "package": "gnomevfs",
          "partial": "Get Device Path",
          "signature": "drive-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetDevicePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eDeviceType\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetDeviceType",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO DeviceType",
          "type": "function"
        },
        "index": {
          "description": "Returns the DeviceType of Drive object",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetDeviceType",
          "normalized": "a-\u003eIO DeviceType",
          "package": "gnomevfs",
          "partial": "Get Device Type",
          "signature": "drive-\u003eIO DeviceType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetDeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the display name of a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetDisplayName",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Returns the display name of Drive object",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetDisplayName",
          "normalized": "a-\u003eIO String",
          "package": "gnomevfs",
          "partial": "Get Display Name",
          "signature": "drive-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetDisplayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HAL UDI of a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eFor HAL drives, this matches the value of the \u003ccode\u003einfo.udi\u003c/code\u003e key,\n for other drives it is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetHalUDI",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Returns the HAL UDI of Drive object For HAL drives this matches the value of the info.udi key for other drives it is Nothing",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetHalUDI",
          "normalized": "a-\u003eIO(Maybe String)",
          "package": "gnomevfs",
          "partial": "Get Hal UDI",
          "signature": "drive-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetHalUDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a unique identifier for a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetID",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO DriveID",
          "type": "function"
        },
        "index": {
          "description": "Returns unique identifier for Drive object",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetID",
          "normalized": "a-\u003eIO DriveID",
          "package": "gnomevfs",
          "partial": "Get ID",
          "signature": "drive-\u003eIO DriveID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the icon filename for a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetIcon",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "Returns the icon filename for Drive object",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetIcon",
          "normalized": "a-\u003eIO FilePath",
          "package": "gnomevfs",
          "partial": "Get Icon",
          "signature": "drive-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of mounted volumes for a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetMountedVolumes",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO [Volume]",
          "type": "function"
        },
        "index": {
          "description": "Returns list of mounted volumes for Drive object",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveGetMountedVolumes",
          "normalized": "a-\u003eIO[Volume]",
          "package": "gnomevfs",
          "partial": "Get Mounted Volumes",
          "signature": "drive-\u003eIO[Volume]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetMountedVolumes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for whether a drive is connected.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveIsConnected",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns Bool for whether drive is connected",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveIsConnected",
          "normalized": "a-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Is Connected",
          "signature": "drive-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveIsConnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for whether a drive is mounted.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveIsMounted",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns Bool for whether drive is mounted",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveIsMounted",
          "normalized": "a-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Is Mounted",
          "signature": "drive-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveIsMounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for whether a drive is user-visible. This should\n be used by applications to determine whether the drive should be\n listed in user interfaces listing available drives.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveIsUserVisible",
          "package": "gnomevfs",
          "signature": "drive-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns Bool for whether drive is user-visible This should be used by applications to determine whether the drive should be listed in user interfaces listing available drives",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveIsUserVisible",
          "normalized": "a-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Is User Visible",
          "signature": "drive-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveIsUserVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMounts a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveMount",
          "package": "gnomevfs",
          "signature": "drive-\u003e VolumeOpSuccessCallback-\u003e VolumeOpFailureCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Mounts Drive object",
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "driveMount",
          "normalized": "a-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Mount",
          "signature": "drive-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveMount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "onDriveVolumeMounted",
          "package": "gnomevfs",
          "signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "onDriveVolumeMounted",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Drive Volume Mounted",
          "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:onDriveVolumeMounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "onDriveVolumePreUnmount",
          "package": "gnomevfs",
          "signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "onDriveVolumePreUnmount",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Drive Volume Pre Unmount",
          "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:onDriveVolumePreUnmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Drive",
          "name": "onDriveVolumeUnmounted",
          "package": "gnomevfs",
          "signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Drive",
          "module": "System.Gnome.VFS.Drive",
          "name": "onDriveVolumeUnmounted",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Drive Volume Unmounted",
          "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:onDriveVolumeUnmounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Error",
          "name": "Error",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS Error",
          "module": "System.Gnome.VFS.Error",
          "name": "Error",
          "package": "gnomevfs",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Error",
          "name": "Error",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Error",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System Gnome VFS Error",
          "module": "System.Gnome.VFS.Error",
          "name": "Error",
          "package": "gnomevfs",
          "partial": "Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Error",
          "name": "Error",
          "package": "gnomevfs",
          "signature": "Error Result",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Error",
          "module": "System.Gnome.VFS.Error",
          "name": "Error",
          "package": "gnomevfs",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Error",
          "name": "eofErrors",
          "package": "gnomevfs",
          "signature": "Exception -\u003e Maybe Error",
          "source": "src/System-Gnome-VFS-Error.html#eofErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Error",
          "module": "System.Gnome.VFS.Error",
          "name": "eofErrors",
          "normalized": "Exception-\u003eMaybe Error",
          "package": "gnomevfs",
          "partial": "Errors",
          "signature": "Exception-\u003eMaybe Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#v:eofErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Error",
          "name": "error",
          "package": "gnomevfs",
          "signature": "Result -\u003e IO a",
          "source": "src/System-Gnome-VFS-Error.html#error",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Error",
          "module": "System.Gnome.VFS.Error",
          "name": "error",
          "normalized": "Result-\u003eIO a",
          "package": "gnomevfs",
          "signature": "Result-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Error",
          "name": "errors",
          "package": "gnomevfs",
          "signature": "Exception -\u003e Maybe Error",
          "source": "src/System-Gnome-VFS-Error.html#errors",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Error",
          "module": "System.Gnome.VFS.Error",
          "name": "errors",
          "normalized": "Exception-\u003eMaybe Error",
          "package": "gnomevfs",
          "signature": "Exception-\u003eMaybe Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#v:errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileInfo",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-FileInfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileInfo",
          "package": "gnomevfs",
          "partial": "File Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags specifying additional information about a file.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileFlags",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileFlags",
          "type": "data"
        },
        "index": {
          "description": "Flags specifying additional information about file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileFlags",
          "package": "gnomevfs",
          "partial": "File Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:FileFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record type containing information about a file.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileInfo",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "data"
        },
        "index": {
          "description": "record type containing information about file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileInfo",
          "package": "gnomevfs",
          "partial": "File Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies the type of a file.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileType",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
          "type": "data"
        },
        "index": {
          "description": "Identifies the type of file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileType",
          "package": "gnomevfs",
          "partial": "File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:FileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pair holding the user ID and group ID of a file owner.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "IDs",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#IDs",
          "type": "type"
        },
        "index": {
          "description": "pair holding the user ID and group ID of file owner",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "IDs",
          "package": "gnomevfs",
          "partial": "IDs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:IDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integral type wide enough to hold the inode number of a file.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "InodeNumber",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#InodeNumber",
          "type": "type"
        },
        "index": {
          "description": "An integral type wide enough to hold the inode number of file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "InodeNumber",
          "package": "gnomevfs",
          "partial": "Inode Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:InodeNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileFlagsLocal",
          "package": "gnomevfs",
          "signature": "FileFlagsLocal",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileFlagsLocal",
          "package": "gnomevfs",
          "partial": "File Flags Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileFlagsLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileFlagsNone",
          "package": "gnomevfs",
          "signature": "FileFlagsNone",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileFlagsNone",
          "package": "gnomevfs",
          "partial": "File Flags None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileFlagsNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileFlagsSymlink",
          "package": "gnomevfs",
          "signature": "FileFlagsSymlink",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileFlagsSymlink",
          "package": "gnomevfs",
          "partial": "File Flags Symlink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileFlagsSymlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileInfo",
          "package": "gnomevfs",
          "signature": "FileInfo",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileInfo",
          "package": "gnomevfs",
          "partial": "File Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeBlockDevice",
          "package": "gnomevfs",
          "signature": "FileTypeBlockDevice",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeBlockDevice",
          "package": "gnomevfs",
          "partial": "File Type Block Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeBlockDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeCharacterDevice",
          "package": "gnomevfs",
          "signature": "FileTypeCharacterDevice",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeCharacterDevice",
          "package": "gnomevfs",
          "partial": "File Type Character Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeCharacterDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeDirectory",
          "package": "gnomevfs",
          "signature": "FileTypeDirectory",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeDirectory",
          "package": "gnomevfs",
          "partial": "File Type Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeFifo",
          "package": "gnomevfs",
          "signature": "FileTypeFifo",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeFifo",
          "package": "gnomevfs",
          "partial": "File Type Fifo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeFifo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeRegular",
          "package": "gnomevfs",
          "signature": "FileTypeRegular",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeRegular",
          "package": "gnomevfs",
          "partial": "File Type Regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeRegular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeSocket",
          "package": "gnomevfs",
          "signature": "FileTypeSocket",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeSocket",
          "package": "gnomevfs",
          "partial": "File Type Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeSymbolicLink",
          "package": "gnomevfs",
          "signature": "FileTypeSymbolicLink",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeSymbolicLink",
          "package": "gnomevfs",
          "partial": "File Type Symbolic Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeUnknown",
          "package": "gnomevfs",
          "signature": "FileTypeUnknown",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "FileTypeUnknown",
          "package": "gnomevfs",
          "partial": "File Type Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe time of last access\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoATime",
          "package": "gnomevfs",
          "signature": "Maybe EpochTime",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the time of last access",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoATime",
          "package": "gnomevfs",
          "partial": "Info ATime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoATime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe size of the file in\n filesystem blocks\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoBlockCount",
          "package": "gnomevfs",
          "signature": "Maybe FileSize",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the size of the file in filesystem blocks",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoBlockCount",
          "package": "gnomevfs",
          "partial": "Info Block Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoBlockCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe time of last attribute modification\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoCTime",
          "package": "gnomevfs",
          "signature": "Maybe EpochTime",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the time of last attribute modification",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoCTime",
          "package": "gnomevfs",
          "partial": "Info CTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe device the file\n resides on\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoDevice",
          "package": "gnomevfs",
          "signature": "Maybe DeviceID",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the device the file resides on",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoDevice",
          "package": "gnomevfs",
          "partial": "Info Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflags providing\n additional information\n about the file\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoFlags",
          "package": "gnomevfs",
          "signature": "Maybe [FileFlags]",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "flags providing additional information about the file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoFlags",
          "normalized": "Maybe[FileFlags]",
          "package": "gnomevfs",
          "partial": "Info Flags",
          "signature": "Maybe[FileFlags]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe user and group IDs\n owning the file\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoIDs",
          "package": "gnomevfs",
          "signature": "Maybe IDs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the user and group IDs owning the file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoIDs",
          "package": "gnomevfs",
          "partial": "Info IDs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe optimal buffer size\n for reading from and\n writing to the file\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoIOBlockSize",
          "package": "gnomevfs",
          "signature": "Maybe FileSize",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the optimal buffer size for reading from and writing to the file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoIOBlockSize",
          "package": "gnomevfs",
          "partial": "Info IOBlock Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoIOBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe inode number of the\n file\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoInode",
          "package": "gnomevfs",
          "signature": "Maybe InodeNumber",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the inode number of the file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoInode",
          "package": "gnomevfs",
          "partial": "Info Inode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoInode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe total number of\n hard links to the file\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoLinkCount",
          "package": "gnomevfs",
          "signature": "Maybe Int",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the total number of hard links to the file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoLinkCount",
          "package": "gnomevfs",
          "partial": "Info Link Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoLinkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe MIME-type of the\n file\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoMIMEType",
          "package": "gnomevfs",
          "signature": "Maybe MIMEType",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the MIME-type of the file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoMIMEType",
          "package": "gnomevfs",
          "partial": "Info MIMEType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoMIMEType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe time of last modification\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoMTime",
          "package": "gnomevfs",
          "signature": "Maybe EpochTime",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the time of last modification",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoMTime",
          "package": "gnomevfs",
          "partial": "Info MTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoMTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe name of the file,\n without the path\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoName",
          "package": "gnomevfs",
          "signature": "Maybe String",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the name of the file without the path",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoName",
          "package": "gnomevfs",
          "partial": "Info Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe permissions for the\n file\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoPermissions",
          "package": "gnomevfs",
          "signature": "Maybe [FilePermissions]",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the permissions for the file",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoPermissions",
          "normalized": "Maybe[FilePermissions]",
          "package": "gnomevfs",
          "partial": "Info Permissions",
          "signature": "Maybe[FilePermissions]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe size of the file in\n bytes\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoSize",
          "package": "gnomevfs",
          "signature": "Maybe FileSize",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the size of the file in bytes",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoSize",
          "package": "gnomevfs",
          "partial": "Info Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe location this\n symlink points to, if\n \u003ccode\u003efileInfoFlags\u003c/code\u003e contains \u003ccode\u003e\u003ca\u003eFileFlagsSymlink\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoSymlinkName",
          "package": "gnomevfs",
          "signature": "Maybe String",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the location this symlink points to if fileInfoFlags contains FileFlagsSymlink",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoSymlinkName",
          "package": "gnomevfs",
          "partial": "Info Symlink Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoSymlinkName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe type of the file;\n i.e. regular, directory,\n block-device, etc.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoType",
          "package": "gnomevfs",
          "signature": "Maybe FileType",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "the type of the file i.e regular directory block-device etc",
          "hierarchy": "System Gnome VFS FileInfo",
          "module": "System.Gnome.VFS.FileInfo",
          "name": "fileInfoType",
          "package": "gnomevfs",
          "partial": "Info Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Init",
          "name": "Init",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Init.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS Init",
          "module": "System.Gnome.VFS.Init",
          "name": "Init",
          "package": "gnomevfs",
          "partial": "Init",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Init.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf gnome-vfs is not already initialized, initialize it. This must\n be called prior to performing any other gnome-vfs operations, and\n may be called multiple times without error.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Init",
          "name": "init",
          "package": "gnomevfs",
          "signature": "IO Bool",
          "source": "src/System-Gnome-VFS-Init.html#init",
          "type": "function"
        },
        "index": {
          "description": "If gnome-vfs is not already initialized initialize it This must be called prior to performing any other gnome-vfs operations and may be called multiple times without error",
          "hierarchy": "System Gnome VFS Init",
          "module": "System.Gnome.VFS.Init",
          "name": "init",
          "package": "gnomevfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Init.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetects if gnome-vfs has already been initialized (gnome-vfs must\n be initialized prior to using any methods or operations).\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Init",
          "name": "initialized",
          "package": "gnomevfs",
          "signature": "IO Bool",
          "source": "src/System-Gnome-VFS-Init.html#initialized",
          "type": "function"
        },
        "index": {
          "description": "Detects if gnome-vfs has already been initialized gnome-vfs must be initialized prior to using any methods or operations",
          "hierarchy": "System Gnome VFS Init",
          "module": "System.Gnome.VFS.Init",
          "name": "initialized",
          "package": "gnomevfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Init.html#v:initialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCease all active gnome-vfs operations and unload the MIME database\n from memory.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Init",
          "name": "shutdown",
          "package": "gnomevfs",
          "signature": "IO ()",
          "source": "src/System-Gnome-VFS-Init.html#shutdown",
          "type": "function"
        },
        "index": {
          "description": "Cease all active gnome-vfs operations and unload the MIME database from memory",
          "hierarchy": "System Gnome VFS Init",
          "module": "System.Gnome.VFS.Init",
          "name": "shutdown",
          "normalized": "IO()",
          "package": "gnomevfs",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Init.html#v:shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.MIME",
          "name": "MIME",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-MIME.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "MIME",
          "package": "gnomevfs",
          "partial": "MIME",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string that will be treated as a MIME-type.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.MIME",
          "name": "MIMEType",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#MIMEType",
          "type": "type"
        },
        "index": {
          "description": "string that will be treated as MIME-type",
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "MIMEType",
          "package": "gnomevfs",
          "partial": "MIMEType",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#t:MIMEType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to guess the MIME-type of the file represented by \u003ccode\u003epath\u003c/code\u003e. If\n \u003ccode\u003esuffixOnly\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, use the MIME-magic based lookup\n first. Handles non-existant files by returning a type based on\n the file extension.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.MIME",
          "name": "getFileMIMEType",
          "package": "gnomevfs",
          "signature": "FilePath -\u003e Bool -\u003e IO String",
          "source": "src/System-Gnome-VFS-MIME.html#getFileMIMEType",
          "type": "function"
        },
        "index": {
          "description": "Try to guess the MIME-type of the file represented by path If suffixOnly is False use the MIME-magic based lookup first Handles non-existant files by returning type based on the file extension",
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "getFileMIMEType",
          "normalized": "FilePath-\u003eBool-\u003eIO String",
          "package": "gnomevfs",
          "partial": "File MIMEType",
          "signature": "FilePath-\u003eBool-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getFileMIMEType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.MIME",
          "name": "getFileMIMETypeFast",
          "package": "gnomevfs",
          "signature": "FilePath-\u003e IO String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "getFileMIMETypeFast",
          "normalized": "FilePath-\u003eIO String",
          "package": "gnomevfs",
          "partial": "File MIMEType Fast",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getFileMIMETypeFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to get the MIME-type of the file represented by \u003ccode\u003euri\u003c/code\u003e. This\n function favors the contents of the file over the extension of\n the filename. If the file does not exist, the MIME-type for the\n extension is returned. If no MIME-type can be found for the file,\n the function returns \"application/octet-stream\".\n\u003c/p\u003e\u003cp\u003eNote: This function will not necessarily return the same\n MIME-type as \u003ccode\u003eSystem.Gnome.VFS.Ops.getFileInfo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.MIME",
          "name": "getMIMETypeCommon",
          "package": "gnomevfs",
          "signature": "URI-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Try to get the MIME-type of the file represented by uri This function favors the contents of the file over the extension of the filename If the file does not exist the MIME-type for the extension is returned If no MIME-type can be found for the file the function returns application octet-stream Note This function will not necessarily return the same MIME-type as System.Gnome.VFS.Ops.getFileInfo",
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "getMIMETypeCommon",
          "normalized": "URI-\u003eIO String",
          "package": "gnomevfs",
          "partial": "MIMEType Common",
          "signature": "URI-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getMIMETypeCommon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to get the MIME-type of the file represented by \u003ccode\u003euri\u003c/code\u003e. This\n function looks only at the filename pointed to by \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.MIME",
          "name": "getMIMETypeFromURI",
          "package": "gnomevfs",
          "signature": "URI-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Try to get the MIME-type of the file represented by uri This function looks only at the filename pointed to by uri",
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "getMIMETypeFromURI",
          "normalized": "URI-\u003eIO String",
          "package": "gnomevfs",
          "partial": "MIMEType From URI",
          "signature": "URI-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getMIMETypeFromURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the supertype for \u003ccode\u003emimeType\u003c/code\u003e. The supertype of an\n application is computed by removing its suffix, and replacing it\n with \u003ccode\u003e*\u003c/code\u003e. Thus, \u003ccode\u003efoo/bar\u003c/code\u003e will be converted to \u003ccode\u003efoo/*\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.MIME",
          "name": "getSupertypeFromMIMEType",
          "package": "gnomevfs",
          "signature": "String -\u003e String",
          "source": "src/System-Gnome-VFS-MIME.html#getSupertypeFromMIMEType",
          "type": "function"
        },
        "index": {
          "description": "Returns the supertype for mimeType The supertype of an application is computed by removing its suffix and replacing it with Thus foo bar will be converted to foo",
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "getSupertypeFromMIMEType",
          "normalized": "String-\u003eString",
          "package": "gnomevfs",
          "partial": "Supertype From MIMEType",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getSupertypeFromMIMEType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReload the MIME information for the specified directory.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.MIME",
          "name": "mimeInfoCacheReload",
          "package": "gnomevfs",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Gnome-VFS-MIME.html#mimeInfoCacheReload",
          "type": "function"
        },
        "index": {
          "description": "Reload the MIME information for the specified directory",
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "mimeInfoCacheReload",
          "normalized": "FilePath-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Info Cache Reload",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:mimeInfoCacheReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to determine the MIME-type of the file at \u003ccode\u003efilename\u003c/code\u003e, using\n only the filename and the Gnome VFS MIME type database. If the\n MIME-type is not found, return \u003ccode\u003edefaultv\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.MIME",
          "name": "mimeTypeFromNameOrDefault",
          "package": "gnomevfs",
          "signature": "FilePath-\u003e Maybe MIMEType-\u003e Maybe MIMEType",
          "type": "function"
        },
        "index": {
          "description": "Try to determine the MIME-type of the file at filename using only the filename and the Gnome VFS MIME type database If the MIME-type is not found return defaultv",
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "mimeTypeFromNameOrDefault",
          "normalized": "FilePath-\u003eMaybe MIMEType-\u003eMaybe MIMEType",
          "package": "gnomevfs",
          "partial": "Type From Name Or Default",
          "signature": "FilePath-\u003eMaybe MIMEType-\u003eMaybe MIMEType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:mimeTypeFromNameOrDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003emimeType\u003c/code\u003e is of the form \u003ccode\u003efoo/*\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n otherwise.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.MIME",
          "name": "mimeTypeIsSupertype",
          "package": "gnomevfs",
          "signature": "String -\u003e Bool",
          "source": "src/System-Gnome-VFS-MIME.html#mimeTypeIsSupertype",
          "type": "function"
        },
        "index": {
          "description": "Returns True if mimeType is of the form foo and False otherwise",
          "hierarchy": "System Gnome VFS MIME",
          "module": "System.Gnome.VFS.MIME",
          "name": "mimeTypeIsSupertype",
          "normalized": "String-\u003eBool",
          "package": "gnomevfs",
          "partial": "Type Is Supertype",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:mimeTypeIsSupertype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Monitor",
          "name": "Monitor",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Monitor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS Monitor",
          "module": "System.Gnome.VFS.Monitor",
          "name": "Monitor",
          "package": "gnomevfs",
          "partial": "Monitor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA callback that must be passed to \u003ccode\u003emonitorAdd\u003c/code\u003e. It will be\n called any time a file or directory is changed.\n\u003c/p\u003e\u003cp\u003eThe parameters, from left to right, are:\n * the handle to a filesystem monitor,\n * the URI being monitored,\n * the actual file that was modified,\n * the event that occured.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Monitor",
          "name": "MonitorCallback",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#MonitorCallback",
          "type": "type"
        },
        "index": {
          "description": "callback that must be passed to monitorAdd It will be called any time file or directory is changed The parameters from left to right are the handle to filesystem monitor the URI being monitored the actual file that was modified the event that occured",
          "hierarchy": "System Gnome VFS Monitor",
          "module": "System.Gnome.VFS.Monitor",
          "name": "MonitorCallback",
          "package": "gnomevfs",
          "partial": "Monitor Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#t:MonitorCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle to a file-system monitor.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Monitor",
          "name": "MonitorHandle",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#MonitorHandle",
          "type": "data"
        },
        "index": {
          "description": "handle to file-system monitor",
          "hierarchy": "System Gnome VFS Monitor",
          "module": "System.Gnome.VFS.Monitor",
          "name": "MonitorHandle",
          "package": "gnomevfs",
          "partial": "Monitor Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#t:MonitorHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatch the object at \u003ccode\u003etextURI\u003c/code\u003e for changes, and call \u003ccode\u003ecallback\u003c/code\u003e\n when a change occurs.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Monitor",
          "name": "monitorAdd",
          "package": "gnomevfs",
          "signature": "String-\u003e MonitorType-\u003e MonitorCallback-\u003e IO MonitorHandle",
          "type": "function"
        },
        "index": {
          "description": "Watch the object at textURI for changes and call callback when change occurs",
          "hierarchy": "System Gnome VFS Monitor",
          "module": "System.Gnome.VFS.Monitor",
          "name": "monitorAdd",
          "normalized": "String-\u003eMonitorType-\u003eMonitorCallback-\u003eIO MonitorHandle",
          "package": "gnomevfs",
          "partial": "Add",
          "signature": "String-\u003eMonitorType-\u003eMonitorCallback-\u003eIO MonitorHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#v:monitorAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancels the monitor referred to by \u003ccode\u003emonitorHandle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Monitor",
          "name": "monitorCancel",
          "package": "gnomevfs",
          "signature": "MonitorHandle-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Cancels the monitor referred to by monitorHandle",
          "hierarchy": "System Gnome VFS Monitor",
          "module": "System.Gnome.VFS.Monitor",
          "name": "monitorCancel",
          "normalized": "MonitorHandle-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Cancel",
          "signature": "MonitorHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#v:monitorCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "Ops",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Ops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "Ops",
          "package": "gnomevfs",
          "partial": "Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integral type wide enough to hold an offset into a file.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "FileOffset",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileOffset",
          "type": "type"
        },
        "index": {
          "description": "An integral type wide enough to hold an offset into file",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "FileOffset",
          "package": "gnomevfs",
          "partial": "File Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:FileOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUNIX-like permissions for a file.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "FilePermissions",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "data"
        },
        "index": {
          "description": "UNIX-like permissions for file",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "FilePermissions",
          "package": "gnomevfs",
          "partial": "File Permissions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:FilePermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integral type wide enough to hold the size of a file.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "FileSize",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#FileSize",
          "type": "type"
        },
        "index": {
          "description": "An integral type wide enough to hold the size of file",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "FileSize",
          "package": "gnomevfs",
          "partial": "File Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:FileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle to an open file\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "Handle",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Handle",
          "type": "data"
        },
        "index": {
          "description": "handle to an open file",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "Handle",
          "package": "gnomevfs",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenMode",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenMode",
          "package": "gnomevfs",
          "partial": "Open Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:OpenMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a file operation.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "Result",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of file operation",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "Result",
          "package": "gnomevfs",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the start position for a seek operation.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "SeekPosition",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#SeekPosition",
          "type": "data"
        },
        "index": {
          "description": "Specifies the start position for seek operation",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "SeekPosition",
          "package": "gnomevfs",
          "partial": "Seek Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:SeekPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorAccessDenied",
          "package": "gnomevfs",
          "signature": "ErrorAccessDenied",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorAccessDenied",
          "package": "gnomevfs",
          "partial": "Error Access Denied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorAccessDenied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorBadFile",
          "package": "gnomevfs",
          "signature": "ErrorBadFile",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorBadFile",
          "package": "gnomevfs",
          "partial": "Error Bad File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorBadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorBadParameters",
          "package": "gnomevfs",
          "signature": "ErrorBadParameters",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorBadParameters",
          "package": "gnomevfs",
          "partial": "Error Bad Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorBadParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorCancelled",
          "package": "gnomevfs",
          "signature": "ErrorCancelled",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorCancelled",
          "package": "gnomevfs",
          "partial": "Error Cancelled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorCancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorCorruptedData",
          "package": "gnomevfs",
          "signature": "ErrorCorruptedData",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorCorruptedData",
          "package": "gnomevfs",
          "partial": "Error Corrupted Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorCorruptedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorDeprecatedFunction",
          "package": "gnomevfs",
          "signature": "ErrorDeprecatedFunction",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorDeprecatedFunction",
          "package": "gnomevfs",
          "partial": "Error Deprecated Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorDeprecatedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorDirectoryBusy",
          "package": "gnomevfs",
          "signature": "ErrorDirectoryBusy",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorDirectoryBusy",
          "package": "gnomevfs",
          "partial": "Error Directory Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorDirectoryBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorDirectoryNotEmpty",
          "package": "gnomevfs",
          "signature": "ErrorDirectoryNotEmpty",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorDirectoryNotEmpty",
          "package": "gnomevfs",
          "partial": "Error Directory Not Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorDirectoryNotEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorEof",
          "package": "gnomevfs",
          "signature": "ErrorEof",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorEof",
          "package": "gnomevfs",
          "partial": "Error Eof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorFileExists",
          "package": "gnomevfs",
          "signature": "ErrorFileExists",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorFileExists",
          "package": "gnomevfs",
          "partial": "Error File Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorFileExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorGeneric",
          "package": "gnomevfs",
          "signature": "ErrorGeneric",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorGeneric",
          "package": "gnomevfs",
          "partial": "Error Generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorHostHasNoAddress",
          "package": "gnomevfs",
          "signature": "ErrorHostHasNoAddress",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorHostHasNoAddress",
          "package": "gnomevfs",
          "partial": "Error Host Has No Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorHostHasNoAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorHostNotFound",
          "package": "gnomevfs",
          "signature": "ErrorHostNotFound",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorHostNotFound",
          "package": "gnomevfs",
          "partial": "Error Host Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorHostNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInProgress",
          "package": "gnomevfs",
          "signature": "ErrorInProgress",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInProgress",
          "package": "gnomevfs",
          "partial": "Error In Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInternal",
          "package": "gnomevfs",
          "signature": "ErrorInternal",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInternal",
          "package": "gnomevfs",
          "partial": "Error Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInterrupted",
          "package": "gnomevfs",
          "signature": "ErrorInterrupted",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInterrupted",
          "package": "gnomevfs",
          "partial": "Error Interrupted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInterrupted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInvalidFilename",
          "package": "gnomevfs",
          "signature": "ErrorInvalidFilename",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInvalidFilename",
          "package": "gnomevfs",
          "partial": "Error Invalid Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInvalidFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInvalidHostName",
          "package": "gnomevfs",
          "signature": "ErrorInvalidHostName",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInvalidHostName",
          "package": "gnomevfs",
          "partial": "Error Invalid Host Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInvalidHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInvalidOpenMode",
          "package": "gnomevfs",
          "signature": "ErrorInvalidOpenMode",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInvalidOpenMode",
          "package": "gnomevfs",
          "partial": "Error Invalid Open Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInvalidOpenMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInvalidUri",
          "package": "gnomevfs",
          "signature": "ErrorInvalidUri",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorInvalidUri",
          "package": "gnomevfs",
          "partial": "Error Invalid Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInvalidUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorIo",
          "package": "gnomevfs",
          "signature": "ErrorIo",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorIo",
          "package": "gnomevfs",
          "partial": "Error Io",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorIo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorIsDirectory",
          "package": "gnomevfs",
          "signature": "ErrorIsDirectory",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorIsDirectory",
          "package": "gnomevfs",
          "partial": "Error Is Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorIsDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorLaunch",
          "package": "gnomevfs",
          "signature": "ErrorLaunch",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorLaunch",
          "package": "gnomevfs",
          "partial": "Error Launch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorLaunch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorLocked",
          "package": "gnomevfs",
          "signature": "ErrorLocked",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorLocked",
          "package": "gnomevfs",
          "partial": "Error Locked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorLoginFailed",
          "package": "gnomevfs",
          "signature": "ErrorLoginFailed",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorLoginFailed",
          "package": "gnomevfs",
          "partial": "Error Login Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorLoginFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorLoop",
          "package": "gnomevfs",
          "signature": "ErrorLoop",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorLoop",
          "package": "gnomevfs",
          "partial": "Error Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNameTooLong",
          "package": "gnomevfs",
          "signature": "ErrorNameTooLong",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNameTooLong",
          "package": "gnomevfs",
          "partial": "Error Name Too Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNameTooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNameserver",
          "package": "gnomevfs",
          "signature": "ErrorNameserver",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNameserver",
          "package": "gnomevfs",
          "partial": "Error Nameserver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNameserver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoDefault",
          "package": "gnomevfs",
          "signature": "ErrorNoDefault",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoDefault",
          "package": "gnomevfs",
          "partial": "Error No Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoHandler",
          "package": "gnomevfs",
          "signature": "ErrorNoHandler",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoHandler",
          "package": "gnomevfs",
          "partial": "Error No Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoMasterBrowser",
          "package": "gnomevfs",
          "signature": "ErrorNoMasterBrowser",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoMasterBrowser",
          "package": "gnomevfs",
          "partial": "Error No Master Browser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoMasterBrowser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoMemory",
          "package": "gnomevfs",
          "signature": "ErrorNoMemory",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoMemory",
          "package": "gnomevfs",
          "partial": "Error No Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoSpace",
          "package": "gnomevfs",
          "signature": "ErrorNoSpace",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNoSpace",
          "package": "gnomevfs",
          "partial": "Error No Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotADirectory",
          "package": "gnomevfs",
          "signature": "ErrorNotADirectory",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotADirectory",
          "package": "gnomevfs",
          "partial": "Error Not ADirectory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotADirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotASymbolicLink",
          "package": "gnomevfs",
          "signature": "ErrorNotASymbolicLink",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotASymbolicLink",
          "package": "gnomevfs",
          "partial": "Error Not ASymbolic Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotASymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotFound",
          "package": "gnomevfs",
          "signature": "ErrorNotFound",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotFound",
          "package": "gnomevfs",
          "partial": "Error Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotOpen",
          "package": "gnomevfs",
          "signature": "ErrorNotOpen",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotOpen",
          "package": "gnomevfs",
          "partial": "Error Not Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotPermitted",
          "package": "gnomevfs",
          "signature": "ErrorNotPermitted",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotPermitted",
          "package": "gnomevfs",
          "partial": "Error Not Permitted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotPermitted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotSameFileSystem",
          "package": "gnomevfs",
          "signature": "ErrorNotSameFileSystem",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotSameFileSystem",
          "package": "gnomevfs",
          "partial": "Error Not Same File System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotSameFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotSupported",
          "package": "gnomevfs",
          "signature": "ErrorNotSupported",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorNotSupported",
          "package": "gnomevfs",
          "partial": "Error Not Supported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorParse",
          "package": "gnomevfs",
          "signature": "ErrorParse",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorParse",
          "package": "gnomevfs",
          "partial": "Error Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorProtocolError",
          "package": "gnomevfs",
          "signature": "ErrorProtocolError",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorProtocolError",
          "package": "gnomevfs",
          "partial": "Error Protocol Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorProtocolError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorReadOnly",
          "package": "gnomevfs",
          "signature": "ErrorReadOnly",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorReadOnly",
          "package": "gnomevfs",
          "partial": "Error Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorReadOnlyFileSystem",
          "package": "gnomevfs",
          "signature": "ErrorReadOnlyFileSystem",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorReadOnlyFileSystem",
          "package": "gnomevfs",
          "partial": "Error Read Only File System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorReadOnlyFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorServiceNotAvailable",
          "package": "gnomevfs",
          "signature": "ErrorServiceNotAvailable",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorServiceNotAvailable",
          "package": "gnomevfs",
          "partial": "Error Service Not Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorServiceNotAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorServiceObsolete",
          "package": "gnomevfs",
          "signature": "ErrorServiceObsolete",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorServiceObsolete",
          "package": "gnomevfs",
          "partial": "Error Service Obsolete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorServiceObsolete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorTimeout",
          "package": "gnomevfs",
          "signature": "ErrorTimeout",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorTimeout",
          "package": "gnomevfs",
          "partial": "Error Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorTooBig",
          "package": "gnomevfs",
          "signature": "ErrorTooBig",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorTooBig",
          "package": "gnomevfs",
          "partial": "Error Too Big",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorTooBig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorTooManyLinks",
          "package": "gnomevfs",
          "signature": "ErrorTooManyLinks",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorTooManyLinks",
          "package": "gnomevfs",
          "partial": "Error Too Many Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorTooManyLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorTooManyOpenFiles",
          "package": "gnomevfs",
          "signature": "ErrorTooManyOpenFiles",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorTooManyOpenFiles",
          "package": "gnomevfs",
          "partial": "Error Too Many Open Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorTooManyOpenFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorWrongFormat",
          "package": "gnomevfs",
          "signature": "ErrorWrongFormat",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "ErrorWrongFormat",
          "package": "gnomevfs",
          "partial": "Error Wrong Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorWrongFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "NumErrors",
          "package": "gnomevfs",
          "signature": "NumErrors",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "NumErrors",
          "package": "gnomevfs",
          "partial": "Num Errors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:NumErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "Ok",
          "package": "gnomevfs",
          "signature": "Ok",
          "source": "src/System-Gnome-VFS-BasicTypes.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "Ok",
          "package": "gnomevfs",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenNone",
          "package": "gnomevfs",
          "signature": "OpenNone",
          "source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenNone",
          "package": "gnomevfs",
          "partial": "Open None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenRandom",
          "package": "gnomevfs",
          "signature": "OpenRandom",
          "source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenRandom",
          "package": "gnomevfs",
          "partial": "Open Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenRead",
          "package": "gnomevfs",
          "signature": "OpenRead",
          "source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenRead",
          "package": "gnomevfs",
          "partial": "Open Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenTruncate",
          "package": "gnomevfs",
          "signature": "OpenTruncate",
          "source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenTruncate",
          "package": "gnomevfs",
          "partial": "Open Truncate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenTruncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenWrite",
          "package": "gnomevfs",
          "signature": "OpenWrite",
          "source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "OpenWrite",
          "package": "gnomevfs",
          "partial": "Open Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermAccessExecutable",
          "package": "gnomevfs",
          "signature": "PermAccessExecutable",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermAccessExecutable",
          "package": "gnomevfs",
          "partial": "Perm Access Executable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermAccessExecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermAccessReadable",
          "package": "gnomevfs",
          "signature": "PermAccessReadable",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermAccessReadable",
          "package": "gnomevfs",
          "partial": "Perm Access Readable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermAccessReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermAccessWritable",
          "package": "gnomevfs",
          "signature": "PermAccessWritable",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermAccessWritable",
          "package": "gnomevfs",
          "partial": "Perm Access Writable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermAccessWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermGroupExec",
          "package": "gnomevfs",
          "signature": "PermGroupExec",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermGroupExec",
          "package": "gnomevfs",
          "partial": "Perm Group Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermGroupExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermGroupRead",
          "package": "gnomevfs",
          "signature": "PermGroupRead",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermGroupRead",
          "package": "gnomevfs",
          "partial": "Perm Group Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermGroupRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermGroupWrite",
          "package": "gnomevfs",
          "signature": "PermGroupWrite",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermGroupWrite",
          "package": "gnomevfs",
          "partial": "Perm Group Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermGroupWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermOtherExec",
          "package": "gnomevfs",
          "signature": "PermOtherExec",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermOtherExec",
          "package": "gnomevfs",
          "partial": "Perm Other Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermOtherExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermOtherRead",
          "package": "gnomevfs",
          "signature": "PermOtherRead",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermOtherRead",
          "package": "gnomevfs",
          "partial": "Perm Other Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermOtherRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermOtherWrite",
          "package": "gnomevfs",
          "signature": "PermOtherWrite",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermOtherWrite",
          "package": "gnomevfs",
          "partial": "Perm Other Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermOtherWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermSGID",
          "package": "gnomevfs",
          "signature": "PermSGID",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermSGID",
          "package": "gnomevfs",
          "partial": "Perm SGID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermSGID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermSUID",
          "package": "gnomevfs",
          "signature": "PermSUID",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermSUID",
          "package": "gnomevfs",
          "partial": "Perm SUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermSUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermSticky",
          "package": "gnomevfs",
          "signature": "PermSticky",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermSticky",
          "package": "gnomevfs",
          "partial": "Perm Sticky",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermSticky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermUserExec",
          "package": "gnomevfs",
          "signature": "PermUserExec",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermUserExec",
          "package": "gnomevfs",
          "partial": "Perm User Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermUserExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermUserRead",
          "package": "gnomevfs",
          "signature": "PermUserRead",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermUserRead",
          "package": "gnomevfs",
          "partial": "Perm User Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermUserRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "PermUserWrite",
          "package": "gnomevfs",
          "signature": "PermUserWrite",
          "source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "PermUserWrite",
          "package": "gnomevfs",
          "partial": "Perm User Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermUserWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "SeekCurrent",
          "package": "gnomevfs",
          "signature": "SeekCurrent",
          "source": "src/System-Gnome-VFS-BasicTypes.html#SeekPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "SeekCurrent",
          "package": "gnomevfs",
          "partial": "Seek Current",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:SeekCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "SeekEnd",
          "package": "gnomevfs",
          "signature": "SeekEnd",
          "source": "src/System-Gnome-VFS-BasicTypes.html#SeekPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "SeekEnd",
          "package": "gnomevfs",
          "partial": "Seek End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:SeekEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Ops",
          "name": "SeekStart",
          "package": "gnomevfs",
          "signature": "SeekStart",
          "source": "src/System-Gnome-VFS-BasicTypes.html#SeekPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "SeekStart",
          "package": "gnomevfs",
          "partial": "Seek Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:SeekStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "close",
          "package": "gnomevfs",
          "signature": "Handle-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Close Handle",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "close",
          "normalized": "Handle-\u003eIO()",
          "package": "gnomevfs",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a file at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "create",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e OpenMode-\u003e Bool-\u003e [FilePermissions]-\u003e IO Handle",
          "type": "function"
        },
        "index": {
          "description": "Create file at textURI",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "create",
          "normalized": "TextURI-\u003eOpenMode-\u003eBool-\u003e[FilePermissions]-\u003eIO Handle",
          "package": "gnomevfs",
          "signature": "TextURI-\u003eOpenMode-\u003eBool-\u003e[FilePermissions]-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a file at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "createURI",
          "package": "gnomevfs",
          "signature": "URI-\u003e OpenMode-\u003e Bool-\u003e [FilePermissions]-\u003e IO Handle",
          "type": "function"
        },
        "index": {
          "description": "Create file at uri",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "createURI",
          "normalized": "URI-\u003eOpenMode-\u003eBool-\u003e[FilePermissions]-\u003eIO Handle",
          "package": "gnomevfs",
          "partial": "URI",
          "signature": "URI-\u003eOpenMode-\u003eBool-\u003e[FilePermissions]-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:createURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree any cache associated with the file opened on \u003ccode\u003ehandle\u003c/code\u003e,\n in the region of \u003ccode\u003esize\u003c/code\u003e bytes starting at \u003ccode\u003eoffset\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "forgetCache",
          "package": "gnomevfs",
          "signature": "Handle -\u003e FileOffset -\u003e FileSize -\u003e IO ()",
          "source": "src/System-Gnome-VFS-Ops.html#forgetCache",
          "type": "function"
        },
        "index": {
          "description": "Free any cache associated with the file opened on handle in the region of size bytes starting at offset",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "forgetCache",
          "normalized": "Handle-\u003eFileOffset-\u003eFileSize-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Cache",
          "signature": "Handle-\u003eFileOffset-\u003eFileSize-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:forgetCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file information for the file at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "getFileInfo",
          "package": "gnomevfs",
          "signature": "String -\u003e [FileInfoOptions] -\u003e IO FileInfo",
          "source": "src/System-Gnome-VFS-Ops.html#getFileInfo",
          "type": "function"
        },
        "index": {
          "description": "Get the file information for the file at textURI",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "getFileInfo",
          "normalized": "String-\u003e[FileInfoOptions]-\u003eIO FileInfo",
          "package": "gnomevfs",
          "partial": "File Info",
          "signature": "String-\u003e[FileInfoOptions]-\u003eIO FileInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:getFileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file information for the file opened on \u003ccode\u003ehandle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "getFileInfoFromHandle",
          "package": "gnomevfs",
          "signature": "Handle -\u003e [FileInfoOptions] -\u003e IO FileInfo",
          "source": "src/System-Gnome-VFS-Ops.html#getFileInfoFromHandle",
          "type": "function"
        },
        "index": {
          "description": "Get the file information for the file opened on handle",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "getFileInfoFromHandle",
          "normalized": "Handle-\u003e[FileInfoOptions]-\u003eIO FileInfo",
          "package": "gnomevfs",
          "partial": "File Info From Handle",
          "signature": "Handle-\u003e[FileInfoOptions]-\u003eIO FileInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:getFileInfoFromHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file information for the file at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "getFileInfoURI",
          "package": "gnomevfs",
          "signature": "URI -\u003e [FileInfoOptions] -\u003e IO FileInfo",
          "source": "src/System-Gnome-VFS-Ops.html#getFileInfoURI",
          "type": "function"
        },
        "index": {
          "description": "Get the file information for the file at uri",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "getFileInfoURI",
          "normalized": "URI-\u003e[FileInfoOptions]-\u003eIO FileInfo",
          "package": "gnomevfs",
          "partial": "File Info URI",
          "signature": "URI-\u003e[FileInfoOptions]-\u003eIO FileInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:getFileInfoURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen the file at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "open",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e OpenMode-\u003e IO Handle",
          "type": "function"
        },
        "index": {
          "description": "Open the file at textURI",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "open",
          "normalized": "TextURI-\u003eOpenMode-\u003eIO Handle",
          "package": "gnomevfs",
          "signature": "TextURI-\u003eOpenMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen the file at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "openURI",
          "package": "gnomevfs",
          "signature": "URI-\u003e OpenMode-\u003e IO Handle",
          "type": "function"
        },
        "index": {
          "description": "Open the file at uri",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "openURI",
          "normalized": "URI-\u003eOpenMode-\u003eIO Handle",
          "package": "gnomevfs",
          "partial": "URI",
          "signature": "URI-\u003eOpenMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:openURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeek to a position in a file.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "seek",
          "package": "gnomevfs",
          "signature": "Handle-\u003e SeekPosition-\u003e FileOffset-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Seek to position in file",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "seek",
          "normalized": "Handle-\u003eSeekPosition-\u003eFileOffset-\u003eIO()",
          "package": "gnomevfs",
          "signature": "Handle-\u003eSeekPosition-\u003eFileOffset-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the file information for the file at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "setFileInfo",
          "package": "gnomevfs",
          "signature": "String -\u003e FileInfo -\u003e [SetFileInfoMask] -\u003e IO ()",
          "source": "src/System-Gnome-VFS-Ops.html#setFileInfo",
          "type": "function"
        },
        "index": {
          "description": "Set the file information for the file at textURI",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "setFileInfo",
          "normalized": "String-\u003eFileInfo-\u003e[SetFileInfoMask]-\u003eIO()",
          "package": "gnomevfs",
          "partial": "File Info",
          "signature": "String-\u003eFileInfo-\u003e[SetFileInfoMask]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:setFileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the file information for the file at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "setFileInfoURI",
          "package": "gnomevfs",
          "signature": "URI -\u003e FileInfo -\u003e [SetFileInfoMask] -\u003e IO ()",
          "source": "src/System-Gnome-VFS-Ops.html#setFileInfoURI",
          "type": "function"
        },
        "index": {
          "description": "Set the file information for the file at uri",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "setFileInfoURI",
          "normalized": "URI-\u003eFileInfo-\u003e[SetFileInfoMask]-\u003eIO()",
          "package": "gnomevfs",
          "partial": "File Info URI",
          "signature": "URI-\u003eFileInfo-\u003e[SetFileInfoMask]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:setFileInfoURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current position in the file.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "tell",
          "package": "gnomevfs",
          "signature": "Handle-\u003e IO FileSize",
          "type": "function"
        },
        "index": {
          "description": "Return the current position in the file",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "tell",
          "normalized": "Handle-\u003eIO FileSize",
          "package": "gnomevfs",
          "signature": "Handle-\u003eIO FileSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate the file at \u003ccode\u003etextURI\u003c/code\u003e to \u003ccode\u003elength\u003c/code\u003e bytes.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "truncate",
          "package": "gnomevfs",
          "signature": "String -\u003e FileSize -\u003e IO ()",
          "source": "src/System-Gnome-VFS-Ops.html#truncate",
          "type": "function"
        },
        "index": {
          "description": "Truncate the file at textURI to length bytes",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "truncate",
          "normalized": "String-\u003eFileSize-\u003eIO()",
          "package": "gnomevfs",
          "signature": "String-\u003eFileSize-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate the file opened on \u003ccode\u003ehandle\u003c/code\u003e to \u003ccode\u003elength\u003c/code\u003e bytes.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "truncateHandle",
          "package": "gnomevfs",
          "signature": "Handle -\u003e FileSize -\u003e IO ()",
          "source": "src/System-Gnome-VFS-Ops.html#truncateHandle",
          "type": "function"
        },
        "index": {
          "description": "Truncate the file opened on handle to length bytes",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "truncateHandle",
          "normalized": "Handle-\u003eFileSize-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Handle",
          "signature": "Handle-\u003eFileSize-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:truncateHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate the file at \u003ccode\u003euri\u003c/code\u003e to \u003ccode\u003elength\u003c/code\u003e bytes.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Ops",
          "name": "truncateURI",
          "package": "gnomevfs",
          "signature": "URI -\u003e FileSize -\u003e IO ()",
          "source": "src/System-Gnome-VFS-Ops.html#truncateURI",
          "type": "function"
        },
        "index": {
          "description": "Truncate the file at uri to length bytes",
          "hierarchy": "System Gnome VFS Ops",
          "module": "System.Gnome.VFS.Ops",
          "name": "truncateURI",
          "normalized": "URI-\u003eFileSize-\u003eIO()",
          "package": "gnomevfs",
          "partial": "URI",
          "signature": "URI-\u003eFileSize-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:truncateURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.URI",
          "name": "URI",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-URI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URI",
          "package": "gnomevfs",
          "partial": "URI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string that can be passed to \u003ccode\u003euriFromString\u003c/code\u003e to create a valid\n \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "TextURI",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#TextURI",
          "type": "type"
        },
        "index": {
          "description": "string that can be passed to uriFromString to create valid URI",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "TextURI",
          "package": "gnomevfs",
          "partial": "Text URI",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#t:TextURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe toplevel URI element used to access resources stored on a\n remote server.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "ToplevelURI",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#ToplevelURI",
          "type": "data"
        },
        "index": {
          "description": "The toplevel URI element used to access resources stored on remote server",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "ToplevelURI",
          "package": "gnomevfs",
          "partial": "Toplevel URI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#t:ToplevelURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e is a semi-textual representation of a uniform\n resource identifier. It contains the information about a resource\n location encoded as canononicalized text, but also holds extra\n information about the context in which the URI is used.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "URI",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#URI",
          "type": "data"
        },
        "index": {
          "description": "URI is semi-textual representation of uniform resource identifier It contains the information about resource location encoded as canononicalized text but also holds extra information about the context in which the URI is used",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URI",
          "package": "gnomevfs",
          "partial": "URI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#t:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags specifying which fields of a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e should be hidden when\n converted to a string using \u003ccode\u003euriToString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideOptions",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
          "type": "data"
        },
        "index": {
          "description": "Flags specifying which fields of URI should be hidden when converted to string using uriToString",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideOptions",
          "package": "gnomevfs",
          "partial": "URIHide Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#t:URIHideOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideFragmentIdentifier",
          "package": "gnomevfs",
          "signature": "URIHideFragmentIdentifier",
          "source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideFragmentIdentifier",
          "package": "gnomevfs",
          "partial": "URIHide Fragment Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideFragmentIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideHostName",
          "package": "gnomevfs",
          "signature": "URIHideHostName",
          "source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideHostName",
          "package": "gnomevfs",
          "partial": "URIHide Host Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideHostPort",
          "package": "gnomevfs",
          "signature": "URIHideHostPort",
          "source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideHostPort",
          "package": "gnomevfs",
          "partial": "URIHide Host Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideHostPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideNone",
          "package": "gnomevfs",
          "signature": "URIHideNone",
          "source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideNone",
          "package": "gnomevfs",
          "partial": "URIHide None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.URI",
          "name": "URIHidePassword",
          "package": "gnomevfs",
          "signature": "URIHidePassword",
          "source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URIHidePassword",
          "package": "gnomevfs",
          "partial": "URIHide Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHidePassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideToplevelMethod",
          "package": "gnomevfs",
          "signature": "URIHideToplevelMethod",
          "source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideToplevelMethod",
          "package": "gnomevfs",
          "partial": "URIHide Toplevel Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideToplevelMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideUserName",
          "package": "gnomevfs",
          "signature": "URIHideUserName",
          "source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "URIHideUserName",
          "package": "gnomevfs",
          "partial": "URIHide User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new URI obtained by appending \u003ccode\u003efileName\u003c/code\u003e to \u003ccode\u003euri\u003c/code\u003e. This\n will take care of adding an appropriate directory separator\n between the end of \u003ccode\u003euri\u003c/code\u003e and the start of \u003ccode\u003efileName\u003c/code\u003e if\n necessary. \u003ccode\u003efileName\u003c/code\u003e might, for instance, be the result of a call\n to \u003ccode\u003eSystem.Posix.Directory.readDirStream\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the resulting URI is not\n valid.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriAppendFileName",
          "package": "gnomevfs",
          "signature": "URI -\u003e FilePath -\u003e Maybe URI",
          "source": "src/System-Gnome-VFS-URI.html#uriAppendFileName",
          "type": "function"
        },
        "index": {
          "description": "Create new URI obtained by appending fileName to uri This will take care of adding an appropriate directory separator between the end of uri and the start of fileName if necessary fileName might for instance be the result of call to System.Posix.Directory.readDirStream This function will return Nothing if the resulting URI is not valid",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriAppendFileName",
          "normalized": "URI-\u003eFilePath-\u003eMaybe URI",
          "package": "gnomevfs",
          "partial": "Append File Name",
          "signature": "URI-\u003eFilePath-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriAppendFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new uri obtained by appending \u003ccode\u003epath\u003c/code\u003e to \u003ccode\u003euri\u003c/code\u003e. This will\n take care of adding an appropriate directory separator between\n the end of \u003ccode\u003euri\u003c/code\u003e and the start of \u003ccode\u003epath\u003c/code\u003e if necessary, as well as\n escaping \u003ccode\u003epath\u003c/code\u003e as necessary.\n\u003c/p\u003e\u003cp\u003eThis function will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the resulting URI is not\n valid.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriAppendPath",
          "package": "gnomevfs",
          "signature": "URI-\u003e FilePath-\u003e Maybe URI",
          "type": "function"
        },
        "index": {
          "description": "Create new uri obtained by appending path to uri This will take care of adding an appropriate directory separator between the end of uri and the start of path if necessary as well as escaping path as necessary This function will return Nothing if the resulting URI is not valid",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriAppendPath",
          "normalized": "URI-\u003eFilePath-\u003eMaybe URI",
          "package": "gnomevfs",
          "partial": "Append Path",
          "signature": "URI-\u003eFilePath-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriAppendPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new URI obtained by appending \u003ccode\u003euriFragment\u003c/code\u003e to \u003ccode\u003euri\u003c/code\u003e. This\n will take care of adding an appropriate directory separator\n between the end of \u003ccode\u003euri\u003c/code\u003e and the start of \u003ccode\u003euriFragment\u003c/code\u003e if\n necessary.\n\u003c/p\u003e\u003cp\u003eThis function will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the resulting URI is not\n valid.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriAppendString",
          "package": "gnomevfs",
          "signature": "URI-\u003e String-\u003e Maybe URI",
          "type": "function"
        },
        "index": {
          "description": "Create new URI obtained by appending uriFragment to uri This will take care of adding an appropriate directory separator between the end of uri and the start of uriFragment if necessary This function will return Nothing if the resulting URI is not valid",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriAppendString",
          "normalized": "URI-\u003eString-\u003eMaybe URI",
          "package": "gnomevfs",
          "partial": "Append String",
          "signature": "URI-\u003eString-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriAppendString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003es for equality.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriEqual",
          "package": "gnomevfs",
          "signature": "URI-\u003e URI-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Compare two URI for equality",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriEqual",
          "normalized": "URI-\u003eURI-\u003eBool",
          "package": "gnomevfs",
          "partial": "Equal",
          "signature": "URI-\u003eURI-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the name of the directory in which the file pointed to by\n \u003ccode\u003euri\u003c/code\u003e is stored as a string. The string will end with a directory\n separator.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriExtractDirname",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe FilePath",
          "type": "function"
        },
        "index": {
          "description": "Extract the name of the directory in which the file pointed to by uri is stored as string The string will end with directory separator",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriExtractDirname",
          "normalized": "URI-\u003eMaybe FilePath",
          "package": "gnomevfs",
          "partial": "Extract Dirname",
          "signature": "URI-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriExtractDirname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve base file name for \u003ccode\u003euri\u003c/code\u003e, ignoring any trailing path\n separators. This matches the XPG definition of basename, but not\n \u003ccode\u003eSystem.FilePath.basename\u003c/code\u003e. This is often useful when you want\n the name of something that's pointed to by a URI, and don't care\n whether the uri has a directory or file form. If \u003ccode\u003euri\u003c/code\u003e points to\n the root of a domain, returns the host name. If there's no host\n name, returns the path separator.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003euriExtractShortPathName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriExtractShortName",
          "package": "gnomevfs",
          "signature": "URI-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Retrieve base file name for uri ignoring any trailing path separators This matches the XPG definition of basename but not System.FilePath.basename This is often useful when you want the name of something that pointed to by URI and don care whether the uri has directory or file form If uri points to the root of domain returns the host name If there no host name returns the path separator See also uriExtractShortPathName",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriExtractShortName",
          "normalized": "URI-\u003eString",
          "package": "gnomevfs",
          "partial": "Extract Short Name",
          "signature": "URI-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriExtractShortName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve base file name for \u003ccode\u003euri\u003c/code\u003e, ignoring any trailing path\n separators. This matches the XPG definition of basename, but not\n \u003ccode\u003eSystem.FilePath.basename\u003c/code\u003e. This is often useful when you want\n the name of something that's pointed to by a URI, and don't care\n whether the uri has a directory or file form. If \u003ccode\u003euri\u003c/code\u003e points to\n the root of any domain, returns the path separator.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003euriExtractShortName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriExtractShortPathName",
          "package": "gnomevfs",
          "signature": "URI-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Retrieve base file name for uri ignoring any trailing path separators This matches the XPG definition of basename but not System.FilePath.basename This is often useful when you want the name of something that pointed to by URI and don care whether the uri has directory or file form If uri points to the root of any domain returns the path separator See also uriExtractShortName",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriExtractShortPathName",
          "normalized": "URI-\u003eString",
          "package": "gnomevfs",
          "partial": "Extract Short Path Name",
          "signature": "URI-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriExtractShortPathName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003etextURI\u003c/code\u003e. Unsupported and unsafe\n methods are not allowed and will result in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e being\n returned. URL transforms are allowed.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriFromString",
          "package": "gnomevfs",
          "signature": "TextURI -\u003e Maybe URI",
          "source": "src/System-Gnome-VFS-URI.html#uriFromString",
          "type": "function"
        },
        "index": {
          "description": "Create new URI from textURI Unsupported and unsafe methods are not allowed and will result in Nothing being returned URL transforms are allowed",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriFromString",
          "normalized": "TextURI-\u003eMaybe URI",
          "package": "gnomevfs",
          "partial": "From String",
          "signature": "TextURI-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the fragment identifier for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetFragmentIdentifier",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the fragment identifier for uri",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetFragmentIdentifier",
          "normalized": "URI-\u003eMaybe String",
          "package": "gnomevfs",
          "partial": "Get Fragment Identifier",
          "signature": "URI-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetFragmentIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the hostname for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetHostName",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the hostname for uri",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetHostName",
          "normalized": "URI-\u003eMaybe String",
          "package": "gnomevfs",
          "partial": "Get Host Name",
          "signature": "URI-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the host port for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetHostPort",
          "package": "gnomevfs",
          "signature": "URI-\u003e Word",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the host port for uri",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetHostPort",
          "normalized": "URI-\u003eWord",
          "package": "gnomevfs",
          "partial": "Get Host Port",
          "signature": "URI-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetHostPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve \u003ccode\u003euri\u003c/code\u003e's parent URI.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetParent",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe URI",
          "type": "function"
        },
        "index": {
          "description": "Retrieve uri parent URI",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetParent",
          "normalized": "URI-\u003eMaybe URI",
          "package": "gnomevfs",
          "partial": "Get Parent",
          "signature": "URI-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the password for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetPassword",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the password for uri",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetPassword",
          "normalized": "URI-\u003eMaybe String",
          "package": "gnomevfs",
          "partial": "Get Password",
          "signature": "URI-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the path name for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetPath",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe FilePath",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the path name for uri",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetPath",
          "normalized": "URI-\u003eMaybe FilePath",
          "package": "gnomevfs",
          "partial": "Get Path",
          "signature": "URI-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the scheme for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetScheme",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the scheme for uri",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetScheme",
          "normalized": "URI-\u003eMaybe String",
          "package": "gnomevfs",
          "partial": "Get Scheme",
          "signature": "URI-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve \u003ccode\u003euri\u003c/code\u003e's toplevel URI.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetToplevel",
          "package": "gnomevfs",
          "signature": "URI-\u003e ToplevelURI",
          "type": "function"
        },
        "index": {
          "description": "Retrieve uri toplevel URI",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetToplevel",
          "normalized": "URI-\u003eToplevelURI",
          "package": "gnomevfs",
          "partial": "Get Toplevel",
          "signature": "URI-\u003eToplevelURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetToplevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the user name for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetUserName",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the user name for uri",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriGetUserName",
          "normalized": "URI-\u003eMaybe String",
          "package": "gnomevfs",
          "partial": "Get User Name",
          "signature": "URI-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether \u003ccode\u003euri\u003c/code\u003e has a parent or not.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriHasParent",
          "package": "gnomevfs",
          "signature": "URI-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether uri has parent or not",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriHasParent",
          "normalized": "URI-\u003eBool",
          "package": "gnomevfs",
          "partial": "Has Parent",
          "signature": "URI-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriHasParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if \u003ccode\u003euri\u003c/code\u003e is a local URI. Note that the return value of this\n function entirely depends on the method associated with\n the URI. It is up to the method author to distinguish between\n remote URIs and URIs referring to entities on the local computer.\n\u003c/p\u003e\u003cp\u003eWarning, this can be slow, as it does I/O to detect things like\n NFS mounts.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriIsLocal",
          "package": "gnomevfs",
          "signature": "URI-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if uri is local URI Note that the return value of this function entirely depends on the method associated with the URI It is up to the method author to distinguish between remote URIs and URIs referring to entities on the local computer Warning this can be slow as it does to detect things like NFS mounts",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriIsLocal",
          "normalized": "URI-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Is Local",
          "signature": "URI-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriIsLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if \u003ccode\u003epossibleChild\u003c/code\u003e is contained in \u003ccode\u003epossibleParent\u003c/code\u003e. If\n \u003ccode\u003erecursive\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, just try the immediate parent; otherwise\n search up through the heirarchy.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriIsParent",
          "package": "gnomevfs",
          "signature": "URI-\u003e URI-\u003e Bool-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if possibleChild is contained in possibleParent If recursive is False just try the immediate parent otherwise search up through the heirarchy",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriIsParent",
          "normalized": "URI-\u003eURI-\u003eBool-\u003eBool",
          "package": "gnomevfs",
          "partial": "Is Parent",
          "signature": "URI-\u003eURI-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriIsParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts a list of URIs from a standard \u003ccode\u003etext/uri-list\u003c/code\u003e, such as\n one would get on a drop operation.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriListParse",
          "package": "gnomevfs",
          "signature": "String-\u003e [URI]",
          "type": "function"
        },
        "index": {
          "description": "Extracts list of URIs from standard text uri-list such as one would get on drop operation",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriListParse",
          "normalized": "String-\u003e[URI]",
          "package": "gnomevfs",
          "partial": "List Parse",
          "signature": "String-\u003e[URI]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriListParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a full URI given a full base URI, and a secondary URI\n which may be relative.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriMakeFullFromRelative",
          "package": "gnomevfs",
          "signature": "String-\u003e String-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Returns full URI given full base URI and secondary URI which may be relative",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriMakeFullFromRelative",
          "normalized": "String-\u003eString-\u003eMaybe String",
          "package": "gnomevfs",
          "partial": "Make Full From Relative",
          "signature": "String-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriMakeFullFromRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new uri from \u003ccode\u003erelativeReference\u003c/code\u003e, relative to\n \u003ccode\u003ebase\u003c/code\u003e. The resolution algorithm in some aspects follows RFC\n 2396, section 5.2, but is not identical due to some extra\n assumptions GnomeVFS makes about URIs.\n\u003c/p\u003e\u003cp\u003eIf relative_reference begins with a valid scheme identifier\n followed by \u003ccode\u003e':'\u003c/code\u003e, it is assumed to refer to an absolute URI, and a\n \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e is created from it using \u003ccode\u003e\u003ca\u003euriFromString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOtherwise, depending on its precise syntax, it inherits some\n aspects of the parent URI, but the parents' fragment and query\n components are ignored.\n\u003c/p\u003e\u003cp\u003eIf relative_reference begins with \u003ccode\u003e\"//\"\u003c/code\u003e, it only inherits the\n base scheme; if it begins with \u003ccode\u003e'/'\u003c/code\u003e (i.e., it is an absolute\n path reference), it inherits everything except the base\n path. Otherwise, it replaces the part of base after the last\n \u003ccode\u003e'/'\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: This function should not be used by application authors\n unless they expect very distinct semantics. Instead, authors\n should use \u003ccode\u003e\u003ca\u003euriAppendFileName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euriAppendPath\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003euriAppendString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003euriResolveSymbolicLink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriResolveRelative",
          "package": "gnomevfs",
          "signature": "URI-\u003e String-\u003e Maybe URI",
          "type": "function"
        },
        "index": {
          "description": "Create new uri from relativeReference relative to base The resolution algorithm in some aspects follows RFC section but is not identical due to some extra assumptions GnomeVFS makes about URIs If relative reference begins with valid scheme identifier followed by it is assumed to refer to an absolute URI and URI is created from it using uriFromString Otherwise depending on its precise syntax it inherits some aspects of the parent URI but the parents fragment and query components are ignored If relative reference begins with it only inherits the base scheme if it begins with i.e it is an absolute path reference it inherits everything except the base path Otherwise it replaces the part of base after the last Note This function should not be used by application authors unless they expect very distinct semantics Instead authors should use uriAppendFileName uriAppendPath uriAppendString or uriResolveSymbolicLink",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriResolveRelative",
          "normalized": "URI-\u003eString-\u003eMaybe URI",
          "package": "gnomevfs",
          "partial": "Resolve Relative",
          "signature": "URI-\u003eString-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriResolveRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new uri from \u003ccode\u003esymbolicLink\u003c/code\u003e, relative to \u003ccode\u003ebase\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf symbolic_link begins with a \u003ccode\u003e'/'\u003c/code\u003e, it replaces the path of base,\n otherwise it is appended after the last \u003ccode\u003e'/'\u003c/code\u003e character of base.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriResolveSymbolicLink",
          "package": "gnomevfs",
          "signature": "URI -\u003e String -\u003e Maybe URI",
          "source": "src/System-Gnome-VFS-URI.html#uriResolveSymbolicLink",
          "type": "function"
        },
        "index": {
          "description": "Create new uri from symbolicLink relative to base If symbolic link begins with it replaces the path of base otherwise it is appended after the last character of base",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriResolveSymbolicLink",
          "normalized": "URI-\u003eString-\u003eMaybe URI",
          "package": "gnomevfs",
          "partial": "Resolve Symbolic Link",
          "signature": "URI-\u003eString-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriResolveSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003euri\u003c/code\u003e, replacing the host name by \u003ccode\u003ehostName\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriSetHostName",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe String-\u003e URI",
          "type": "function"
        },
        "index": {
          "description": "Create new URI using uri replacing the host name by hostName",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriSetHostName",
          "normalized": "URI-\u003eMaybe String-\u003eURI",
          "package": "gnomevfs",
          "partial": "Set Host Name",
          "signature": "URI-\u003eMaybe String-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriSetHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003euri\u003c/code\u003e, replacing the host port by \u003ccode\u003ehostPort\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ehostPort\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e, use the default port for \u003ccode\u003euri\u003c/code\u003e's toplevel\n access method.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriSetHostPort",
          "package": "gnomevfs",
          "signature": "URI-\u003e Word-\u003e URI",
          "type": "function"
        },
        "index": {
          "description": "Create new URI using uri replacing the host port by hostPort If hostPort is use the default port for uri toplevel access method",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriSetHostPort",
          "normalized": "URI-\u003eWord-\u003eURI",
          "package": "gnomevfs",
          "partial": "Set Host Port",
          "signature": "URI-\u003eWord-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriSetHostPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003euri\u003c/code\u003e, replacing the password by \u003ccode\u003epassword\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriSetPassword",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe String-\u003e URI",
          "type": "function"
        },
        "index": {
          "description": "Create new URI using uri replacing the password by password",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriSetPassword",
          "normalized": "URI-\u003eMaybe String-\u003eURI",
          "package": "gnomevfs",
          "partial": "Set Password",
          "signature": "URI-\u003eMaybe String-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriSetPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003euri\u003c/code\u003e, replacing the user name by \u003ccode\u003euserName\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriSetUserName",
          "package": "gnomevfs",
          "signature": "URI-\u003e Maybe String-\u003e URI",
          "type": "function"
        },
        "index": {
          "description": "Create new URI using uri replacing the user name by userName",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriSetUserName",
          "normalized": "URI-\u003eMaybe String-\u003eURI",
          "package": "gnomevfs",
          "partial": "Set User Name",
          "signature": "URI-\u003eMaybe String-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriSetUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate \u003ccode\u003euri\u003c/code\u003e into a printable string. The string will not\n contain the URI elements specified by \u003ccode\u003ehideOptions\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003efile:\u003c/code\u003e URI on Win32 might look like\n \u003ccode\u003efile:///x:/foo/bar.txt\u003c/code\u003e. Note that the part after\n \u003ccode\u003efile://\u003c/code\u003e is not a legal file name, you need to remove the \u003ccode\u003e/\u003c/code\u003e\n in front of the drive letter. This function does that\n automatically if \u003ccode\u003ehideOptions\u003c/code\u003e specifies that the toplevel\n method, user name, password, host name and host port should be\n hidden.\n\u003c/p\u003e\u003cp\u003eOn the other hand, a \u003ccode\u003efile:\u003c/code\u003e URI for a UNC path looks like\n \u003ccode\u003efile:////server/share/foo/bar.txt\u003c/code\u003e, and in that case the part\n after \u003ccode\u003efile://\u003c/code\u003e is the correct file name.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.URI",
          "name": "uriToString",
          "package": "gnomevfs",
          "signature": "URI-\u003e URIHideOptions-\u003e TextURI",
          "type": "function"
        },
        "index": {
          "description": "Translate uri into printable string The string will not contain the URI elements specified by hideOptions file URI on Win32 might look like file foo bar.txt Note that the part after file is not legal file name you need to remove the in front of the drive letter This function does that automatically if hideOptions specifies that the toplevel method user name password host name and host port should be hidden On the other hand file URI for UNC path looks like file server share foo bar.txt and in that case the part after file is the correct file name",
          "hierarchy": "System Gnome VFS URI",
          "module": "System.Gnome.VFS.URI",
          "name": "uriToString",
          "normalized": "URI-\u003eURIHideOptions-\u003eTextURI",
          "package": "gnomevfs",
          "partial": "To String",
          "signature": "URI-\u003eURIHideOptions-\u003eTextURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Util",
          "name": "Util",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "Util",
          "package": "gnomevfs",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes path, replacing only special characters that would not be\n found in a path or host name (so \u003ccode\u003e'/'\u003c/code\u003e, \u003ccode\u003e'&'\u003c/code\u003e, \u003ccode\u003e'='\u003c/code\u003e, \u003ccode\u003e':'\u003c/code\u003e and \u003ccode\u003e'@'\u003c/code\u003e will\n not be escaped by this function).\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "escapeHostAndPathString",
          "package": "gnomevfs",
          "signature": "FilePath-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Escapes path replacing only special characters that would not be found in path or host name so and will not be escaped by this function",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "escapeHostAndPathString",
          "normalized": "FilePath-\u003eString",
          "package": "gnomevfs",
          "partial": "Host And Path String",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapeHostAndPathString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes path, replacing only special characters that would not be\n found in paths (so \u003ccode\u003e'/'\u003c/code\u003e, \u003ccode\u003e'&'\u003c/code\u003e, and \u003ccode\u003e'='\u003c/code\u003e will not be escaped by this\n function).\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "escapePathString",
          "package": "gnomevfs",
          "signature": "FilePath-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Escapes path replacing only special characters that would not be found in paths so and will not be escaped by this function",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "escapePathString",
          "normalized": "FilePath-\u003eString",
          "package": "gnomevfs",
          "partial": "Path String",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapePathString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes the characters listed in \u003ccode\u003ematchSet\u003c/code\u003e in \u003ccode\u003estring\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "escapeSet",
          "package": "gnomevfs",
          "signature": "String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Escapes the characters listed in matchSet in string",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "escapeSet",
          "normalized": "String-\u003eString-\u003eString",
          "package": "gnomevfs",
          "partial": "Set",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes only \u003ccode\u003e'/'\u003c/code\u003e and \u003ccode\u003e'%'\u003c/code\u003e characters in \u003ccode\u003estring\u003c/code\u003e, replacing\n them with their escape sequence equivalents.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "escapeSlashes",
          "package": "gnomevfs",
          "signature": "String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Escapes only and characters in string replacing them with their escape sequence equivalents",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "escapeSlashes",
          "normalized": "String-\u003eString",
          "package": "gnomevfs",
          "partial": "Slashes",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapeSlashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes \u003ccode\u003estring\u003c/code\u003e, replacing any and all special characters with\n equivalent escape sequences.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "escapeString",
          "package": "gnomevfs",
          "signature": "String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Escapes string replacing any and all special characters with equivalent escape sequences",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "escapeString",
          "normalized": "String-\u003eString",
          "package": "gnomevfs",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003epath\u003c/code\u003e begins with a tilde, representing the user's home\n directory, expand it to the actual directory.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "expandInitialTilde",
          "package": "gnomevfs",
          "signature": "String -\u003e IO String",
          "source": "src/System-Gnome-VFS-Util.html#expandInitialTilde",
          "type": "function"
        },
        "index": {
          "description": "If path begins with tilde representing the user home directory expand it to the actual directory",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "expandInitialTilde",
          "normalized": "String-\u003eIO String",
          "package": "gnomevfs",
          "partial": "Initial Tilde",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:expandInitialTilde"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats \u003ccode\u003esize\u003c/code\u003e so that it is easy for the user to read. Gives the\n size in bytes, kilobytes, megabytes or gigabytes, choosing\n whatever is appropriate.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "formatFileSizeForDisplay",
          "package": "gnomevfs",
          "signature": "FileSize-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Formats size so that it is easy for the user to read Gives the size in bytes kilobytes megabytes or gigabytes choosing whatever is appropriate",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "formatFileSizeForDisplay",
          "normalized": "FileSize-\u003eString",
          "package": "gnomevfs",
          "partial": "File Size For Display",
          "signature": "FileSize-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:formatFileSizeForDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter, modify, unescape, and change \u003ccode\u003etextURI\u003c/code\u003e to make it appropriate\n for display to users.\n\u003c/p\u003e\u003cp\u003eRules: A \u003ccode\u003efile:\u003c/code\u003e URI without fragments should appear as a local\n path. A \u003ccode\u003efile:\u003c/code\u003e URI with fragments should appear as \u003ccode\u003efile:uri\u003c/code\u003e. All\n other URIs appear as expected.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "formatURIForDisplay",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Filter modify unescape and change textURI to make it appropriate for display to users Rules file URI without fragments should appear as local path file URI with fragments should appear as file uri All other URIs appear as expected",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "formatURIForDisplay",
          "normalized": "TextURI-\u003eMaybe String",
          "package": "gnomevfs",
          "partial": "URIFor Display",
          "signature": "TextURI-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:formatURIForDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a local path for a uri.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003euri\u003c/code\u003e is not a \u003ccode\u003efile:///\u003c/code\u003e URI, or it contains a fragment\n identifier or is chained, this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "getLocalPathFromURI",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e Maybe FilePath",
          "type": "function"
        },
        "index": {
          "description": "Create local path for uri If uri is not file URI or it contains fragment identifier or is chained this function returns Nothing",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "getLocalPathFromURI",
          "normalized": "TextURI-\u003eMaybe FilePath",
          "package": "gnomevfs",
          "partial": "Local Path From URI",
          "signature": "TextURI-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:getLocalPathFromURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003efile:///\u003c/code\u003e URI for the local path \u003ccode\u003elocalFullPath\u003c/code\u003e,\n such as a path provided by\n \u003ccode\u003eGraphics.UI.Gtk.Selectors.FileChooser.fileChooserGetFilename\u003c/code\u003e. The\n resulting URI may be provided, for instance, to\n \u003ccode\u003eSystem.Gnome.VFS.URI.uriFromString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn Windows \u003ccode\u003elocalFullPath\u003c/code\u003e should be in the UTF-8 encoding, and\n can start with a drive letter, but doesn't have to.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "getURIFromLocalPath",
          "package": "gnomevfs",
          "signature": "FilePath-\u003e TextURI",
          "type": "function"
        },
        "index": {
          "description": "Returns file URI for the local path localFullPath such as path provided by Graphics.UI.Gtk.Selectors.FileChooser.fileChooserGetFilename The resulting URI may be provided for instance to System.Gnome.VFS.URI.uriFromString On Windows localFullPath should be in the UTF-8 encoding and can start with drive letter but doesn have to",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "getURIFromLocalPath",
          "normalized": "FilePath-\u003eTextURI",
          "package": "gnomevfs",
          "partial": "URIFrom Local Path",
          "signature": "FilePath-\u003eTextURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:getURIFromLocalPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the scheme used in \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "getURIScheme",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the scheme used in uri",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "getURIScheme",
          "normalized": "TextURI-\u003eMaybe String",
          "package": "gnomevfs",
          "partial": "URIScheme",
          "signature": "TextURI-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:getURIScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores the amount of free space in bytes on \u003ccode\u003euri\u003c/code\u003e's volume in\n | size.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "getVolumeFreeSpace",
          "package": "gnomevfs",
          "signature": "URI-\u003e IO FileSize",
          "type": "function"
        },
        "index": {
          "description": "Stores the amount of free space in bytes on uri volume in size",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "getVolumeFreeSpace",
          "normalized": "URI-\u003eIO FileSize",
          "package": "gnomevfs",
          "partial": "Volume Free Space",
          "signature": "URI-\u003eIO FileSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:getVolumeFreeSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the icon path for \u003ccode\u003efilename\u003c/code\u003e. Example:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiconPathFromFilename\u003c/a\u003e\u003c/code\u003e \"nautilus/nautilus-desktop.png\"\u003c/code\u003e will\n return a string forming the full path of the file\n \u003ccode\u003enautilus-desktop.png\u003c/code\u003e, i.e.\n \u003ccode\u003e${prefix}/share/pixmaps/nautilus/nautilus-desktop.png\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "iconPathFromFilename",
          "package": "gnomevfs",
          "signature": "String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Returns the icon path for filename Example iconPathFromFilename nautilus nautilus-desktop.png will return string forming the full path of the file nautilus-desktop.png i.e prefix share pixmaps nautilus nautilus-desktop.png",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "iconPathFromFilename",
          "normalized": "String-\u003eIO String",
          "package": "gnomevfs",
          "partial": "Path From Filename",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:iconPathFromFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if \u003ccode\u003ecommandString\u003c/code\u003e starts with the full path of an\n executable file or an executable in the system path.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "isExecutableCommandString",
          "package": "gnomevfs",
          "signature": "String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if commandString starts with the full path of an executable file or an executable in the system path",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "isExecutableCommandString",
          "normalized": "String-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Executable Command String",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:isExecutableCommandString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the current thread is the thread with the main glib\n event loop.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "isPrimaryThread",
          "package": "gnomevfs",
          "signature": "IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if the current thread is the thread with the main glib event loop",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "isPrimaryThread",
          "package": "gnomevfs",
          "partial": "Primary Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:isPrimaryThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a canonicalized path name.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "makePathNameCanonical",
          "package": "gnomevfs",
          "signature": "FilePath-\u003e Maybe TextURI",
          "type": "function"
        },
        "index": {
          "description": "Returns canonicalized path name",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "makePathNameCanonical",
          "normalized": "FilePath-\u003eMaybe TextURI",
          "package": "gnomevfs",
          "partial": "Path Name Canonical",
          "signature": "FilePath-\u003eMaybe TextURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makePathNameCanonical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandardizes the format of \u003ccode\u003euri\u003c/code\u003e, so that it can be used later\n in other functions that expect a canonical URI.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURICanonical",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e Maybe TextURI",
          "type": "function"
        },
        "index": {
          "description": "Standardizes the format of uri so that it can be used later in other functions that expect canonical URI",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURICanonical",
          "normalized": "TextURI-\u003eMaybe TextURI",
          "package": "gnomevfs",
          "partial": "URICanonical",
          "signature": "TextURI-\u003eMaybe TextURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURICanonical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a canonicalized URI. If \u003ccode\u003euri\u003c/code\u003e contains a fragment\n (anything after a \u003ccode\u003e'#'\u003c/code\u003e), it is stripped off, and the resulting\n URI is made canonical.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURICanonicalStripFragment",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e Maybe TextURI",
          "type": "function"
        },
        "index": {
          "description": "Returns canonicalized URI If uri contains fragment anything after it is stripped off and the resulting URI is made canonical",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURICanonicalStripFragment",
          "normalized": "TextURI-\u003eMaybe TextURI",
          "package": "gnomevfs",
          "partial": "URICanonical Strip Fragment",
          "signature": "TextURI-\u003eMaybe TextURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURICanonicalStripFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a user input path/URI and makes a valid URI out of it.\n\u003c/p\u003e\u003cp\u003eThis function is the reverse of \u003ccode\u003e\u003ca\u003eformatURIForDisplay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURIFromInput",
          "package": "gnomevfs",
          "signature": "String-\u003e Maybe TextURI",
          "type": "function"
        },
        "index": {
          "description": "Takes user input path URI and makes valid URI out of it This function is the reverse of formatURIForDisplay",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURIFromInput",
          "normalized": "String-\u003eMaybe TextURI",
          "package": "gnomevfs",
          "partial": "URIFrom Input",
          "signature": "String-\u003eMaybe TextURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURIFromInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine a fully qualified URI from a relative or absolute input\n path. The directories specified by \u003ccode\u003edirs\u003c/code\u003e are searched when the\n path is relative.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURIFromInputWithDirs",
          "package": "gnomevfs",
          "signature": "FilePath-\u003e [MakeURIDirs]-\u003e IO TextURI",
          "type": "function"
        },
        "index": {
          "description": "Determine fully qualified URI from relative or absolute input path The directories specified by dirs are searched when the path is relative",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURIFromInputWithDirs",
          "normalized": "FilePath-\u003e[MakeURIDirs]-\u003eIO TextURI",
          "package": "gnomevfs",
          "partial": "URIFrom Input With Dirs",
          "signature": "FilePath-\u003e[MakeURIDirs]-\u003eIO TextURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURIFromInputWithDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emakeURIFromInput\u003c/a\u003e\u003c/code\u003e, except:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e guesses relative paths instead of HTTP domains\n\u003c/li\u003e\u003cli\u003e doesn't bother stripping leading/trailing white space\n\u003c/li\u003e\u003cli\u003e doesn't bother with tilde expansion -- that's done by the shell\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURIFromShellArg",
          "package": "gnomevfs",
          "signature": "String -\u003e String",
          "source": "src/System-Gnome-VFS-Util.html#makeURIFromShellArg",
          "type": "function"
        },
        "index": {
          "description": "Similar to makeURIFromInput except guesses relative paths instead of HTTP domains doesn bother stripping leading trailing white space doesn bother with tilde expansion that done by the shell",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "makeURIFromShellArg",
          "normalized": "String-\u003eString",
          "package": "gnomevfs",
          "partial": "URIFrom Shell Arg",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURIFromShellArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an open 1 file descriptor into a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "openFD",
          "package": "gnomevfs",
          "signature": "Fd-\u003e IO Handle",
          "type": "function"
        },
        "index": {
          "description": "Convert an open file descriptor into Handle object",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "openFD",
          "normalized": "Fd-\u003eIO Handle",
          "package": "gnomevfs",
          "partial": "FD",
          "signature": "Fd-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:openFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes escaped characters (i.e., \u003ccode\u003e%xx\u003c/code\u003e sequences) in\n \u003ccode\u003eescapedString\u003c/code\u003e. Characters are decoded in \u003ccode\u003e%xx\u003c/code\u003e form, where\n \u003ccode\u003exx\u003c/code\u003e is the hex code for an ASCII character.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "unescapeString",
          "package": "gnomevfs",
          "signature": "String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Decodes escaped characters i.e xx sequences in escapedString Characters are decoded in xx form where xx is the hex code for an ASCII character",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "unescapeString",
          "normalized": "String-\u003eString-\u003eString",
          "package": "gnomevfs",
          "partial": "String",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:unescapeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003eunescapeString\u003c/code\u003e, but returns something\n semi-intelligible to the user, even upon receiving traumatic\n input such as \u003ccode\u003e00\u003c/code\u003e or URIs in bad form.\n\u003c/p\u003e\u003cp\u003eWARNING: You should never use this function on a whole URI! It\n unescapes reserved characters, and can result in a mangled URI\n that can not be re-entered. For example, it unescapes \u003ccode\u003e'#'\u003c/code\u003e, \u003ccode\u003e'&'\u003c/code\u003e and\n \u003ccode\u003e'?'\u003c/code\u003e, which have special meanings in URI strings.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "unescapeStringForDisplay",
          "package": "gnomevfs",
          "signature": "String -\u003e String",
          "source": "src/System-Gnome-VFS-Util.html#unescapeStringForDisplay",
          "type": "function"
        },
        "index": {
          "description": "Similar to unescapeString but returns something semi-intelligible to the user even upon receiving traumatic input such as or URIs in bad form WARNING You should never use this function on whole URI It unescapes reserved characters and can result in mangled URI that can not be re-entered For example it unescapes and which have special meanings in URI strings",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "unescapeStringForDisplay",
          "normalized": "String-\u003eString",
          "package": "gnomevfs",
          "partial": "String For Display",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:unescapeStringForDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two URIs.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "urisMatch",
          "package": "gnomevfs",
          "signature": "TextURI-\u003e TextURI-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Compare two URIs",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "urisMatch",
          "normalized": "TextURI-\u003eTextURI-\u003eBool",
          "package": "gnomevfs",
          "partial": "Match",
          "signature": "TextURI-\u003eTextURI-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:urisMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaunches the default application or component associated with the\n given URL.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "urlShow",
          "package": "gnomevfs",
          "signature": "String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Launches the default application or component associated with the given URL",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "urlShow",
          "normalized": "String-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Show",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:urlShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eurlShow\u003c/a\u003e\u003c/code\u003e, but using the specified environment variables.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Util",
          "name": "urlShowWithEnv",
          "package": "gnomevfs",
          "signature": "String-\u003e [String]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like urlShow but using the specified environment variables",
          "hierarchy": "System Gnome VFS Util",
          "module": "System.Gnome.VFS.Util",
          "name": "urlShowWithEnv",
          "normalized": "String-\u003e[String]-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Show With Env",
          "signature": "String-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:urlShowWithEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Volume",
          "name": "Volume",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Volume.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "Volume",
          "package": "gnomevfs",
          "partial": "Volume",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Volume",
          "name": "Volume",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Types.html#Volume",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "Volume",
          "package": "gnomevfs",
          "partial": "Volume",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#t:Volume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Volume",
          "name": "VolumeClass",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Types.html#VolumeClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "VolumeClass",
          "package": "gnomevfs",
          "partial": "Volume Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#t:VolumeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "VolumeID",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#VolumeID",
          "type": "type"
        },
        "index": {
          "description": "Identifies Volume",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "VolumeID",
          "package": "gnomevfs",
          "partial": "Volume ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#t:VolumeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Volume",
          "name": "castToVolume",
          "package": "gnomevfs",
          "signature": "obj -\u003e Volume",
          "source": "src/System-Gnome-VFS-Types.html#castToVolume",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "castToVolume",
          "normalized": "a-\u003eVolume",
          "package": "gnomevfs",
          "partial": "To Volume",
          "signature": "obj-\u003eVolume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:castToVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares two \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e objects \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e. Two \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e\n objects referring to different volumes are guaranteed to not\n return \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e when comparing them. If they refer to the same volume \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e\n is returned.\n\u003c/p\u003e\u003cp\u003eThe resulting gint should be used to determine the order in which\n \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are displayed in graphical user interfaces.\n\u003c/p\u003e\u003cp\u003eThe comparison algorithm first of all peeks the device type of\n \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, they will be sorted in the following order:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Magnetic and opto-magnetic volumes (ZIP, floppy)\n\u003c/li\u003e\u003cli\u003e Optical volumes (CD, DVD)\n\u003c/li\u003e\u003cli\u003e External volumes (USB sticks, music players)\n\u003c/li\u003e\u003cli\u003e Mounted hard disks\n\u003c/li\u003e\u003cli\u003e Network mounts\n\u003c/li\u003e\u003cli\u003e Other volumes\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAfterwards, the display name of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e is compared using a\n locale-sensitive sorting algorithm.\n\u003c/p\u003e\u003cp\u003eIf two volumes have the same display name, their unique ID is\n compared which can be queried using \u003ccode\u003e\u003ca\u003evolumeGetID\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeCompare",
          "package": "gnomevfs",
          "signature": "volume1 -\u003e volume2 -\u003e IO Ordering",
          "source": "src/System-Gnome-VFS-Volume.html#volumeCompare",
          "type": "function"
        },
        "index": {
          "description": "Compares two Volume objects and Two Volume objects referring to different volumes are guaranteed to not return EQ when comparing them If they refer to the same volume EQ is returned The resulting gint should be used to determine the order in which and are displayed in graphical user interfaces The comparison algorithm first of all peeks the device type of and they will be sorted in the following order Magnetic and opto-magnetic volumes ZIP floppy Optical volumes CD DVD External volumes USB sticks music players Mounted hard disks Network mounts Other volumes Afterwards the display name of and is compared using locale-sensitive sorting algorithm If two volumes have the same display name their unique ID is compared which can be queried using volumeGetID",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeCompare",
          "normalized": "a-\u003ea-\u003eIO Ordering",
          "package": "gnomevfs",
          "partial": "Compare",
          "signature": "volume-\u003evolume-\u003eIO Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeEject",
          "package": "gnomevfs",
          "signature": "volume-\u003e VolumeOpSuccessCallback-\u003e VolumeOpFailureCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeEject",
          "normalized": "a-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Eject",
          "signature": "volume-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeEject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the activation URI of \u003ccode\u003evolume\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe returned URI usually refers to a valid location. You can\n check the validity of the location by calling\n \u003ccode\u003eSystem.Gnome.VFS.URI.uriFromString\u003c/code\u003e with the URI, and checking\n whether the return value is not \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetActivationURI",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO TextURI",
          "type": "function"
        },
        "index": {
          "description": "Returns the activation URI of volume The returned URI usually refers to valid location You can check the validity of the location by calling System.Gnome.VFS.URI.uriFromString with the URI and checking whether the return value is not Nothing",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetActivationURI",
          "normalized": "a-\u003eIO TextURI",
          "package": "gnomevfs",
          "partial": "Get Activation URI",
          "signature": "volume-\u003eIO TextURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetActivationURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the device path of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eFor HAL volumes, this returns the value of the volume's\n \u003ccode\u003eblock.device\u003c/code\u003e key. For UNIX mounts, it returns the \u003ccode\u003emntent\u003c/code\u003e's\n \u003ccode\u003emnt_fsname\u003c/code\u003e entry.\n\u003c/p\u003e\u003cp\u003eOtherwise, it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetDevicePath",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Returns the device path of Volume object For HAL volumes this returns the value of the volume block.device key For UNIX mounts it returns the mntent mnt fsname entry Otherwise it returns Nothing",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetDevicePath",
          "normalized": "a-\u003eIO String",
          "package": "gnomevfs",
          "partial": "Get Device Path",
          "signature": "volume-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetDevicePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eDeviceType\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetDeviceType",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO DeviceType",
          "type": "function"
        },
        "index": {
          "description": "Returns the DeviceType of Volume object",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetDeviceType",
          "normalized": "a-\u003eIO DeviceType",
          "package": "gnomevfs",
          "partial": "Get Device Type",
          "signature": "volume-\u003eIO DeviceType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetDeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the display name of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetDisplayName",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Returns the display name of Volume object",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetDisplayName",
          "normalized": "a-\u003eIO String",
          "package": "gnomevfs",
          "partial": "Get Display Name",
          "signature": "volume-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetDisplayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e that \u003ccode\u003evolume\u003c/code\u003e is on.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetDrive",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO Drive",
          "type": "function"
        },
        "index": {
          "description": "Returns the Drive that volume is on",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetDrive",
          "normalized": "a-\u003eIO Drive",
          "package": "gnomevfs",
          "partial": "Get Drive",
          "signature": "volume-\u003eIO Drive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a string describing the file system on \u003ccode\u003evolume\u003c/code\u003e, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no information on the underlying file system is\n available.\n\u003c/p\u003e\u003cp\u003eThe file system may be used to provide special functionality that\n depends on the file system type, for instance to determine\n whether trashing is supported (cf. \u003ccode\u003e\u003ca\u003evolumeHandlesTrash\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor HAL mounts, this returns the value of the \u003ccode\u003e\"volume.fstype\"\u003c/code\u003e\n key, for traditional UNIX mounts it is set to the mntent's\n mnt_type key, for connected servers, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetFilesystemType",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Returns string describing the file system on volume or Nothing if no information on the underlying file system is available The file system may be used to provide special functionality that depends on the file system type for instance to determine whether trashing is supported cf volumeHandlesTrash For HAL mounts this returns the value of the volume.fstype key for traditional UNIX mounts it is set to the mntent mnt type key for connected servers Nothing is returned",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetFilesystemType",
          "normalized": "a-\u003eIO(Maybe String)",
          "package": "gnomevfs",
          "partial": "Get Filesystem Type",
          "signature": "volume-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetFilesystemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HAL UDI of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eFor HAL volumes, this matches the value of the \u003ccode\u003einfo.udi\u003c/code\u003e key,\n for other volumes it is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetHalUDI",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Returns the HAL UDI of Volume object For HAL volumes this matches the value of the info.udi key for other volumes it is Nothing",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetHalUDI",
          "normalized": "a-\u003eIO(Maybe String)",
          "package": "gnomevfs",
          "partial": "Get Hal UDI",
          "signature": "volume-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetHalUDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a unique identifier for a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetID",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO VolumeID",
          "type": "function"
        },
        "index": {
          "description": "Returns unique identifier for Volume object",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetID",
          "normalized": "a-\u003eIO VolumeID",
          "package": "gnomevfs",
          "partial": "Get ID",
          "signature": "volume-\u003eIO VolumeID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the icon filename for a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetIcon",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "Returns the icon filename for Volume object",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetIcon",
          "normalized": "a-\u003eIO FilePath",
          "package": "gnomevfs",
          "partial": "Get Icon",
          "signature": "volume-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the volume type of \u003ccode\u003evolume\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetVolumeType",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO VolumeType",
          "type": "function"
        },
        "index": {
          "description": "Returns the volume type of volume",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeGetVolumeType",
          "normalized": "a-\u003eIO VolumeType",
          "package": "gnomevfs",
          "partial": "Get Volume Type",
          "signature": "volume-\u003eIO VolumeType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetVolumeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the file system on a volume supports trashing of\n files.\n\u003c/p\u003e\u003cp\u003eIf the volume has an AutoFS file system (i.e.,\n \u003ccode\u003e\u003ca\u003evolumeGetDeviceType\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003eDeviceTypeAutofs\u003c/code\u003e), or if the\n volume is mounted read-only (i.e., \u003ccode\u003e\u003ca\u003evolumeIsReadOnly\u003c/a\u003e\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e), it is assumed to not support trashing of files.\n\u003c/p\u003e\u003cp\u003eOtherwise, if the volume provides file system information, it is\n determined whether the file system supports trashing of\n files.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeHandlesTrash",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the file system on volume supports trashing of files If the volume has an AutoFS file system i.e volumeGetDeviceType returns DeviceTypeAutofs or if the volume is mounted read-only i.e volumeIsReadOnly returns True it is assumed to not support trashing of files Otherwise if the volume provides file system information it is determined whether the file system supports trashing of files",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeHandlesTrash",
          "normalized": "a-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Handles Trash",
          "signature": "volume-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeHandlesTrash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the file system on a volume is currently mounted.\n\u003c/p\u003e\u003cp\u003eFor HAL volumes, this reflects the value of the\n \u003ccode\u003e\"volume.is_mounted\"\u003c/code\u003e key, for traditional UNIX mounts and\n connected servers, \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is returned, because their existence\n implies that they are mounted.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeIsMounted",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the file system on volume is currently mounted For HAL volumes this reflects the value of the volume.is mounted key for traditional UNIX mounts and connected servers True is returned because their existence implies that they are mounted",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeIsMounted",
          "normalized": "a-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Is Mounted",
          "signature": "volume-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeIsMounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the file system on a volume is read-only.\n\u003c/p\u003e\u003cp\u003eFor HAL volumes, the \u003ccode\u003e\"volume.is_mounted_read_only\"\u003c/code\u003e key is\n authoritative, for traditional UNIX mounts it returns (!(0)) if the\n mount was done with the \u003ccode\u003e\"ro\"\u003c/code\u003e option. For servers, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeIsReadOnly",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the file system on volume is read-only For HAL volumes the volume.is mounted read only key is authoritative for traditional UNIX mounts it returns if the mount was done with the ro option For servers False is returned",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeIsReadOnly",
          "normalized": "a-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Is Read Only",
          "signature": "volume-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeIsReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for whether a volume is user-visible. This should\n be used by applications to determine whether the volume should be\n listed in user interfaces listing available volumes.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeIsUserVisible",
          "package": "gnomevfs",
          "signature": "volume-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns Bool for whether volume is user-visible This should be used by applications to determine whether the volume should be listed in user interfaces listing available volumes",
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeIsUserVisible",
          "normalized": "a-\u003eIO Bool",
          "package": "gnomevfs",
          "partial": "Is User Visible",
          "signature": "volume-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeIsUserVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeUnmount",
          "package": "gnomevfs",
          "signature": "volume-\u003e VolumeOpSuccessCallback-\u003e VolumeOpFailureCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Volume",
          "module": "System.Gnome.VFS.Volume",
          "name": "volumeUnmount",
          "normalized": "a-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Unmount",
          "signature": "volume-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeUnmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "VolumeMonitor",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-VolumeMonitor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "VolumeMonitor",
          "package": "gnomevfs",
          "partial": "Volume Monitor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "VolumeMonitor",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Types.html#VolumeMonitor",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "VolumeMonitor",
          "package": "gnomevfs",
          "partial": "Volume Monitor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#t:VolumeMonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "VolumeMonitorClass",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Types.html#VolumeMonitorClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "VolumeMonitorClass",
          "package": "gnomevfs",
          "partial": "Volume Monitor Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#t:VolumeMonitorClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "afterVolumeMonitorVolumeMounted",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "afterVolumeMonitorVolumeMounted",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Volume Monitor Volume Mounted",
          "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:afterVolumeMonitorVolumeMounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "afterVolumeMonitorVolumePreUnmount",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "afterVolumeMonitorVolumePreUnmount",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Volume Monitor Volume Pre Unmount",
          "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:afterVolumeMonitorVolumePreUnmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "afterVolumeMonitorVolumeUnmounted",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "afterVolumeMonitorVolumeUnmounted",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Volume Monitor Volume Unmounted",
          "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:afterVolumeMonitorVolumeUnmounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "onVolumeMonitorVolumeMounted",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "onVolumeMonitorVolumeMounted",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Volume Monitor Volume Mounted",
          "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:onVolumeMonitorVolumeMounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "onVolumeMonitorVolumePreUnmount",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "onVolumeMonitorVolumePreUnmount",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Volume Monitor Volume Pre Unmount",
          "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:onVolumeMonitorVolumePreUnmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "onVolumeMonitorVolumeUnmounted",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "onVolumeMonitorVolumeUnmounted",
          "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
          "package": "gnomevfs",
          "partial": "Volume Monitor Volume Unmounted",
          "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:onVolumeMonitorVolumeUnmounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe global volume monitor object.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitor",
          "package": "gnomevfs",
          "signature": "VolumeMonitor",
          "source": "src/System-Gnome-VFS-VolumeMonitor.html#volumeMonitor",
          "type": "function"
        },
        "index": {
          "description": "The global volume monitor object",
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitor",
          "package": "gnomevfs",
          "partial": "Monitor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all drives connected to the machine.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetConnectedDrives",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e IO [Drive]",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all drives connected to the machine",
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetConnectedDrives",
          "normalized": "a-\u003eIO[Drive]",
          "package": "gnomevfs",
          "partial": "Monitor Get Connected Drives",
          "signature": "volumeMonitor-\u003eIO[Drive]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetConnectedDrives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to find the \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e with ID \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetDriveByID",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e DriveID-\u003e IO (Maybe Drive)",
          "type": "function"
        },
        "index": {
          "description": "Try to find the Drive with ID id",
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetDriveByID",
          "normalized": "a-\u003eDriveID-\u003eIO(Maybe Drive)",
          "package": "gnomevfs",
          "partial": "Monitor Get Drive By ID",
          "signature": "volumeMonitor-\u003eDriveID-\u003eIO(Maybe Drive)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetDriveByID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all volumes currently mounted on the machine.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetMountedVolumes",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e IO [Volume]",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all volumes currently mounted on the machine",
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetMountedVolumes",
          "normalized": "a-\u003eIO[Volume]",
          "package": "gnomevfs",
          "partial": "Monitor Get Mounted Volumes",
          "signature": "volumeMonitor-\u003eIO[Volume]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetMountedVolumes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to find the \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e with ID \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetVolumeByID",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e VolumeID-\u003e IO (Maybe Volume)",
          "type": "function"
        },
        "index": {
          "description": "Try to find the Volume with ID id",
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetVolumeByID",
          "normalized": "a-\u003eVolumeID-\u003eIO(Maybe Volume)",
          "package": "gnomevfs",
          "partial": "Monitor Get Volume By ID",
          "signature": "volumeMonitor-\u003eVolumeID-\u003eIO(Maybe Volume)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetVolumeByID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e corresponding to path, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe volume referring to path is found by calling \u003ccode\u003estat\u003c/code\u003e on path,\n and then iterating through the list of volumes that refer to\n currently mounted local file systems. The first volume in this\n list maching the path's UNIX device is returned.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003estat\u003c/code\u003e on path was not successful, or no volume matches\n path, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetVolumeForPath",
          "package": "gnomevfs",
          "signature": "volumeMonitor-\u003e FilePath-\u003e IO (Maybe Volume)",
          "type": "function"
        },
        "index": {
          "description": "Returns the Volume corresponding to path or Nothing The volume referring to path is found by calling stat on path and then iterating through the list of volumes that refer to currently mounted local file systems The first volume in this list maching the path UNIX device is returned If the stat on path was not successful or no volume matches path Nothing is returned",
          "hierarchy": "System Gnome VFS VolumeMonitor",
          "module": "System.Gnome.VFS.VolumeMonitor",
          "name": "volumeMonitorGetVolumeForPath",
          "normalized": "a-\u003eFilePath-\u003eIO(Maybe Volume)",
          "package": "gnomevfs",
          "partial": "Monitor Get Volume For Path",
          "signature": "volumeMonitor-\u003eFilePath-\u003eIO(Maybe Volume)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetVolumeForPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "Xfer",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-Xfer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "Xfer",
          "package": "gnomevfs",
          "partial": "Xfer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the fourth callback that is passed to\n \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e. This callback will be called\n when a duplicate filename is found.\n\u003c/p\u003e\u003cp\u003eThe parameters, from left to right, are:\n * \u003ccode\u003einfo\u003c/code\u003e - information about the progress of the current transfer,\n * \u003ccode\u003eduplicateName\u003c/code\u003e - the name of the target file,\n * \u003ccode\u003eduplicateCount\u003c/code\u003e - the number of duplicates that exist.\n\u003c/p\u003e\u003cp\u003eThe callback must return the new filename that should be used, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to abort.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferDuplicateCallback",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferDuplicateCallback",
          "type": "type"
        },
        "index": {
          "description": "The type of the fourth callback that is passed to System.Gnome.VFS.Xfer.xferURI This callback will be called when duplicate filename is found The parameters from left to right are info information about the progress of the current transfer duplicateName the name of the target file duplicateCount the number of duplicates that exist The callback must return the new filename that should be used or Nothing to abort",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferDuplicateCallback",
          "package": "gnomevfs",
          "partial": "Xfer Duplicate Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferDuplicateCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorAction",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorAction",
          "package": "gnomevfs",
          "partial": "Xfer Error Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferErrorAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the second callback that is passed to\n \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e. This callback will be called\n whenever an error occurs.\n\u003c/p\u003e\u003cp\u003eThe callback must return the action to be performed in response to the error.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorCallback",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorCallback",
          "type": "type"
        },
        "index": {
          "description": "The type of the second callback that is passed to System.Gnome.VFS.Xfer.xferURI This callback will be called whenever an error occurs The callback must return the action to be performed in response to the error",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorCallback",
          "package": "gnomevfs",
          "partial": "Xfer Error Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferErrorCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions controlling how the \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e and related functions behave.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOptions",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "data"
        },
        "index": {
          "description": "Options controlling how the System.Gnome.VFS.Xfer.xferURI and related functions behave",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOptions",
          "package": "gnomevfs",
          "partial": "Xfer Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteAction",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteAction",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferOverwriteAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the third callback that is passed to\n \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e. This callback will be called\n when a file would be overwritten.\n\u003c/p\u003e\u003cp\u003eThe callback must return the action to be performed when the target file already exists.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteCallback",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteCallback",
          "type": "type"
        },
        "index": {
          "description": "The type of the third callback that is passed to System.Gnome.VFS.Xfer.xferURI This callback will be called when file would be overwritten The callback must return the action to be performed when the target file already exists",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteCallback",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferOverwriteCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteMode",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteMode",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferOverwriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the first callback that is passed to\n \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e and related functions. This\n callback will be called periodically during transfers that are\n progressing normally.\n\u003c/p\u003e\u003cp\u003eThe callback must return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e to abort the transfer, or \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferProgressCallback",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressCallback",
          "type": "type"
        },
        "index": {
          "description": "The type of the first callback that is passed to System.Gnome.VFS.Xfer.xferURI and related functions This callback will be called periodically during transfers that are progressing normally The callback must return False to abort the transfer or True otherwise",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferProgressCallback",
          "package": "gnomevfs",
          "partial": "Xfer Progress Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferProgressCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferProgressInfo",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferProgressInfo",
          "package": "gnomevfs",
          "partial": "Xfer Progress Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferProgressInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferDeleteItems",
          "package": "gnomevfs",
          "signature": "XferDeleteItems",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferDeleteItems",
          "package": "gnomevfs",
          "partial": "Xfer Delete Items",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferDeleteItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferEmptyDirectories",
          "package": "gnomevfs",
          "signature": "XferEmptyDirectories",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferEmptyDirectories",
          "package": "gnomevfs",
          "partial": "Xfer Empty Directories",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferEmptyDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorActionAbort",
          "package": "gnomevfs",
          "signature": "XferErrorActionAbort",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorActionAbort",
          "package": "gnomevfs",
          "partial": "Xfer Error Action Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferErrorActionAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorActionRetry",
          "package": "gnomevfs",
          "signature": "XferErrorActionRetry",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorActionRetry",
          "package": "gnomevfs",
          "partial": "Xfer Error Action Retry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferErrorActionRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorActionSkip",
          "package": "gnomevfs",
          "signature": "XferErrorActionSkip",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferErrorActionSkip",
          "package": "gnomevfs",
          "partial": "Xfer Error Action Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferErrorActionSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferFollowLinks",
          "package": "gnomevfs",
          "signature": "XferFollowLinks",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferFollowLinks",
          "package": "gnomevfs",
          "partial": "Xfer Follow Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferFollowLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferFollowLinksRecursive",
          "package": "gnomevfs",
          "signature": "XferFollowLinksRecursive",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferFollowLinksRecursive",
          "package": "gnomevfs",
          "partial": "Xfer Follow Links Recursive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferFollowLinksRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferLinkItems",
          "package": "gnomevfs",
          "signature": "XferLinkItems",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferLinkItems",
          "package": "gnomevfs",
          "partial": "Xfer Link Items",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferLinkItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferNewUniqueDirectory",
          "package": "gnomevfs",
          "signature": "XferNewUniqueDirectory",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferNewUniqueDirectory",
          "package": "gnomevfs",
          "partial": "Xfer New Unique Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferNewUniqueDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionAbort",
          "package": "gnomevfs",
          "signature": "XferOverwriteActionAbort",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionAbort",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Action Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionReplace",
          "package": "gnomevfs",
          "signature": "XferOverwriteActionReplace",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionReplace",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Action Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionReplaceAll",
          "package": "gnomevfs",
          "signature": "XferOverwriteActionReplaceAll",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionReplaceAll",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Action Replace All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionReplaceAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionSkip",
          "package": "gnomevfs",
          "signature": "XferOverwriteActionSkip",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionSkip",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Action Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionSkipAll",
          "package": "gnomevfs",
          "signature": "XferOverwriteActionSkipAll",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteActionSkipAll",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Action Skip All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionSkipAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteModeAbort",
          "package": "gnomevfs",
          "signature": "XferOverwriteModeAbort",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteModeAbort",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Mode Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteModeAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteModeReplace",
          "package": "gnomevfs",
          "signature": "XferOverwriteModeReplace",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteModeReplace",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Mode Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteModeReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteModeSkip",
          "package": "gnomevfs",
          "signature": "XferOverwriteModeSkip",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferOverwriteModeSkip",
          "package": "gnomevfs",
          "partial": "Xfer Overwrite Mode Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteModeSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferProgressInfo",
          "package": "gnomevfs",
          "signature": "XferProgressInfo",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferProgressInfo",
          "package": "gnomevfs",
          "partial": "Xfer Progress Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferProgressInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferRecursive",
          "package": "gnomevfs",
          "signature": "XferRecursive",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferRecursive",
          "package": "gnomevfs",
          "partial": "Xfer Recursive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferRemovesource",
          "package": "gnomevfs",
          "signature": "XferRemovesource",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferRemovesource",
          "package": "gnomevfs",
          "partial": "Xfer Removesource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferRemovesource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferSamefs",
          "package": "gnomevfs",
          "signature": "XferSamefs",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferSamefs",
          "package": "gnomevfs",
          "partial": "Xfer Samefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferSamefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferTargetDefaultPerms",
          "package": "gnomevfs",
          "signature": "XferTargetDefaultPerms",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferTargetDefaultPerms",
          "package": "gnomevfs",
          "partial": "Xfer Target Default Perms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferTargetDefaultPerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferUseUniqueNames",
          "package": "gnomevfs",
          "signature": "XferUseUniqueNames",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "XferUseUniqueNames",
          "package": "gnomevfs",
          "partial": "Xfer Use Unique Names",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferUseUniqueNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the files at the \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003es in \u003ccode\u003esourceURIList\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferDeleteList",
          "package": "gnomevfs",
          "signature": "[URI]-\u003e [XferOptions]-\u003e Maybe XferProgressCallback-\u003e Maybe XferErrorCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Delete the files at the URI in sourceURIList",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferDeleteList",
          "normalized": "[URI]-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "Delete List",
          "signature": "[URI]-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferDeleteList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of bytes already transferred in the current file\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoBytesCopied",
          "package": "gnomevfs",
          "signature": "FileSize",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "number of bytes already transferred in the current file",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoBytesCopied",
          "package": "gnomevfs",
          "partial": "Progress Info Bytes Copied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoBytesCopied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etotal size of all files in bytes\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoBytesTotal",
          "package": "gnomevfs",
          "signature": "FileSize",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "total size of all files in bytes",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoBytesTotal",
          "package": "gnomevfs",
          "partial": "Progress Info Bytes Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoBytesTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindex of the file currently being transferred\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoFileIndex",
          "package": "gnomevfs",
          "signature": "Word",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "index of the file currently being transferred",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoFileIndex",
          "package": "gnomevfs",
          "partial": "Progress Info File Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoFileIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esize of the file currently being transferred\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoFileSize",
          "package": "gnomevfs",
          "signature": "FileSize",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "size of the file currently being transferred",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoFileSize",
          "package": "gnomevfs",
          "partial": "Progress Info File Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etotal number of files being transferred\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoFilesTotal",
          "package": "gnomevfs",
          "signature": "Word",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "total number of files being transferred",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoFilesTotal",
          "package": "gnomevfs",
          "partial": "Progress Info Files Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoFilesTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ephase of the transfer\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoPhase",
          "package": "gnomevfs",
          "signature": "XferPhase",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "phase of the transfer",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoPhase",
          "package": "gnomevfs",
          "partial": "Progress Info Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrently transferring source URI\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoSourceName",
          "package": "gnomevfs",
          "signature": "Maybe String",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "currently transferring source URI",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoSourceName",
          "package": "gnomevfs",
          "partial": "Progress Info Source Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoSourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrently transferring target URI\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoTargetName",
          "package": "gnomevfs",
          "signature": "Maybe String",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "currently transferring target URI",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoTargetName",
          "package": "gnomevfs",
          "partial": "Progress Info Target Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoTargetName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the file being transferred is a top-level item;\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if it is inside a directory\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoTopLevelItem",
          "package": "gnomevfs",
          "signature": "Bool",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "True if the file being transferred is top-level item False if it is inside directory",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoTopLevelItem",
          "package": "gnomevfs",
          "partial": "Progress Info Top Level Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoTopLevelItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etotal number of bytes already transferred\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoTotalBytesCopied",
          "package": "gnomevfs",
          "signature": "FileSize",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "total number of bytes already transferred",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoTotalBytesCopied",
          "package": "gnomevfs",
          "partial": "Progress Info Total Bytes Copied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoTotalBytesCopied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent VFS status\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoVFSStatus",
          "package": "gnomevfs",
          "signature": "Result",
          "source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
          "type": "function"
        },
        "index": {
          "description": "current VFS status",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferProgressInfoVFSStatus",
          "package": "gnomevfs",
          "partial": "Progress Info VFSStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoVFSStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransfer the file located at \u003ccode\u003esourceURI\u003c/code\u003e to \u003ccode\u003etargetURI\u003c/code\u003e, using\n the specified options and callbacks.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferURI",
          "package": "gnomevfs",
          "signature": "URI-\u003e URI-\u003e [XferOptions]-\u003e Maybe XferProgressCallback-\u003e Maybe XferErrorCallback-\u003e Either XferOverwriteMode XferOverwriteCallback-\u003e Maybe XferDuplicateCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Transfer the file located at sourceURI to targetURI using the specified options and callbacks",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferURI",
          "normalized": "URI-\u003eURI-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eEither XferOverwriteMode XferOverwriteCallback-\u003eMaybe XferDuplicateCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "URI",
          "signature": "URI-\u003eURI-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eEither XferOverwriteMode XferOverwriteCallback-\u003eMaybe XferDuplicateCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each pair in \u003ccode\u003esourceTargetURIList\u003c/code\u003e, transfer the file at the\n first \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e to the second \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferURIList",
          "package": "gnomevfs",
          "signature": "[(URI, URI)]-\u003e [XferOptions]-\u003e Maybe XferProgressCallback-\u003e Maybe XferErrorCallback-\u003e Either XferOverwriteMode XferOverwriteCallback-\u003e Maybe XferDuplicateCallback-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "For each pair in sourceTargetURIList transfer the file at the first URI to the second URI",
          "hierarchy": "System Gnome VFS Xfer",
          "module": "System.Gnome.VFS.Xfer",
          "name": "xferURIList",
          "normalized": "[(URI,URI)]-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eEither XferOverwriteMode XferOverwriteCallback-\u003eMaybe XferDuplicateCallback-\u003eIO()",
          "package": "gnomevfs",
          "partial": "URIList",
          "signature": "[(URI,URI)]-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eEither XferOverwriteMode XferOverwriteCallback-\u003eMaybe XferDuplicateCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferURIList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.VFS",
          "name": "VFS",
          "package": "gnomevfs",
          "source": "src/System-Gnome-VFS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome VFS",
          "module": "System.Gnome.VFS",
          "name": "VFS",
          "package": "gnomevfs",
          "partial": "VFS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS.html#"
      }
    }
  ]
]