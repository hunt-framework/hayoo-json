[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.Cancellation",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Cancellation.html",
        "fct-type": "module",
        "title": "Cancellation"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Cancellation",
        "module": "System.Gnome.VFS.Cancellation",
        "name": "Cancellation",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Cancellation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#t:Cancellation",
      "description": {
        "fct-descr": "\u003cp\u003eAn object that can be used for signalling cancellation of an\n operation.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Cancellation",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Cancellation",
        "fct-type": "data",
        "title": "Cancellation"
      },
      "index": {
        "description": "An object that can be used for signalling cancellation of an operation",
        "hierarchy": "System Gnome VFS Cancellation",
        "module": "System.Gnome.VFS.Cancellation",
        "name": "Cancellation",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Cancellation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationAck",
      "description": {
        "fct-descr": "\u003cp\u003eAcknowledge a cancellation. This should be called if\n \u003ccode\u003e\u003ca\u003ecancellationCheck\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Cancellation",
        "fct-package": "gnomevfs",
        "fct-signature": "Cancellation-\u003e IO ()",
        "fct-type": "function",
        "title": "cancellationAck"
      },
      "index": {
        "description": "Acknowledge cancellation This should be called if cancellationCheck returns True",
        "hierarchy": "System Gnome VFS Cancellation",
        "module": "System.Gnome.VFS.Cancellation",
        "name": "cancellationAck",
        "normalized": "Cancellation-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Ack",
        "signature": "Cancellation-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationCancel",
      "description": {
        "fct-descr": "\u003cp\u003eSend a cancellation request through a \u003ccode\u003e\u003ca\u003eCancellation\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Cancellation",
        "fct-package": "gnomevfs",
        "fct-signature": "Cancellation-\u003e IO ()",
        "fct-type": "function",
        "title": "cancellationCancel"
      },
      "index": {
        "description": "Send cancellation request through Cancellation object",
        "hierarchy": "System Gnome VFS Cancellation",
        "module": "System.Gnome.VFS.Cancellation",
        "name": "cancellationCancel",
        "normalized": "Cancellation-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Cancel",
        "signature": "Cancellation-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationCheck",
      "description": {
        "fct-descr": "\u003cp\u003eCheck for pending cancellation.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Cancellation",
        "fct-package": "gnomevfs",
        "fct-signature": "Cancellation-\u003e IO Bool",
        "fct-type": "function",
        "title": "cancellationCheck"
      },
      "index": {
        "description": "Check for pending cancellation",
        "hierarchy": "System Gnome VFS Cancellation",
        "module": "System.Gnome.VFS.Cancellation",
        "name": "cancellationCheck",
        "normalized": "Cancellation-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Check",
        "signature": "Cancellation-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationGetFD",
      "description": {
        "fct-descr": "\u003cp\u003eGet a file descriptor-based notificator for cancellation. When\n cancellation receives a cancellation request, a character will be\n made available on the returned file descriptor for input.\n\u003c/p\u003e\u003cp\u003eThis is very useful for detecting cancellation during I/O\n operations: you can use the select() call to check for available\n input/output on the file you are reading/writing, and on the\n notificator's file descriptor at the same time. If a data is\n available on the notificator's file descriptor, you know you have\n to cancel the read/write operation.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Cancellation",
        "fct-package": "gnomevfs",
        "fct-signature": "Cancellation-\u003e IO Fd",
        "fct-type": "function",
        "title": "cancellationGetFD"
      },
      "index": {
        "description": "Get file descriptor-based notificator for cancellation When cancellation receives cancellation request character will be made available on the returned file descriptor for input This is very useful for detecting cancellation during operations you can use the select call to check for available input output on the file you are reading writing and on the notificator file descriptor at the same time If data is available on the notificator file descriptor you know you have to cancel the read write operation",
        "hierarchy": "System Gnome VFS Cancellation",
        "module": "System.Gnome.VFS.Cancellation",
        "name": "cancellationGetFD",
        "normalized": "Cancellation-\u003eIO Fd",
        "package": "gnomevfs",
        "partial": "Get FD",
        "signature": "Cancellation-\u003eIO Fd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Cancellation.html#v:cancellationNew",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eCancellation\u003c/a\u003e\u003c/code\u003e object for reporting\n cancellation to a gnome-vfs module.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Cancellation",
        "fct-package": "gnomevfs",
        "fct-signature": "IO Cancellation",
        "fct-type": "function",
        "title": "cancellationNew"
      },
      "index": {
        "description": "Create new Cancellation object for reporting cancellation to gnome-vfs module",
        "hierarchy": "System Gnome VFS Cancellation",
        "module": "System.Gnome.VFS.Cancellation",
        "name": "cancellationNew",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for creating, removing, and accessing directories and\n their contents.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Directory.html",
        "fct-type": "module",
        "title": "Directory"
      },
      "index": {
        "description": "Functions for creating removing and accessing directories and their contents",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "Directory",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#t:DirectoryHandle",
      "description": {
        "fct-descr": "\u003cp\u003eA handle to an open directory.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryHandle",
        "fct-type": "data",
        "title": "DirectoryHandle"
      },
      "index": {
        "description": "handle to an open directory",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryHandle",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#t:DirectoryVisitOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions controlling the way in which a directories are visited.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
        "fct-type": "data",
        "title": "DirectoryVisitOptions"
      },
      "index": {
        "description": "Options controlling the way in which directories are visited",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryVisitOptions",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Visit Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#t:DirectoryVisitResult",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumerated value that must be returned from a\n \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e. The \u003ccode\u003edirectoryVisit\u003c/code\u003e and related\n functions will perform the action specified.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitResult",
        "fct-type": "data",
        "title": "DirectoryVisitResult"
      },
      "index": {
        "description": "An enumerated value that must be returned from DirectoryVisitCallback The directoryVisit and related functions will perform the action specified",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryVisitResult",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Visit Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitContinue",
      "description": {
        "fct-descr": "\u003cp\u003econtinue as normal\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "DirectoryVisitContinue",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitResult",
        "fct-type": "function",
        "title": "DirectoryVisitContinue"
      },
      "index": {
        "description": "continue as normal",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryVisitContinue",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Visit Continue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitDefault",
      "description": {
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "DirectoryVisitDefault",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
        "fct-type": "function",
        "title": "DirectoryVisitDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryVisitDefault",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Visit Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitIgnoreRecurseError",
      "description": {
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "DirectoryVisitIgnoreRecurseError",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
        "fct-type": "function",
        "title": "DirectoryVisitIgnoreRecurseError"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryVisitIgnoreRecurseError",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Visit Ignore Recurse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitLoopcheck",
      "description": {
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "DirectoryVisitLoopcheck",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
        "fct-type": "function",
        "title": "DirectoryVisitLoopcheck"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryVisitLoopcheck",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Visit Loopcheck",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitRecurse",
      "description": {
        "fct-descr": "\u003cp\u003erecursively visit the current entry\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "DirectoryVisitRecurse",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitResult",
        "fct-type": "function",
        "title": "DirectoryVisitRecurse"
      },
      "index": {
        "description": "recursively visit the current entry",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryVisitRecurse",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Visit Recurse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitSamefs",
      "description": {
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "DirectoryVisitSamefs",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitOptions",
        "fct-type": "function",
        "title": "DirectoryVisitSamefs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryVisitSamefs",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Visit Samefs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:DirectoryVisitStop",
      "description": {
        "fct-descr": "\u003cp\u003estop visiting files\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "DirectoryVisitStop",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DirectoryVisitResult",
        "fct-type": "function",
        "title": "DirectoryVisitStop"
      },
      "index": {
        "description": "stop visiting files",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "DirectoryVisitStop",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Directory Visit Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryClose",
      "description": {
        "fct-descr": "\u003cp\u003eClose a \u003ccode\u003e\u003ca\u003eDirectoryHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "DirectoryHandle-\u003e IO ()",
        "fct-type": "function",
        "title": "directoryClose"
      },
      "index": {
        "description": "Close DirectoryHandle",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "directoryClose",
        "normalized": "DirectoryHandle-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Close",
        "signature": "DirectoryHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryListLoad",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a list of \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e objects representing each entry in the\n directory at \u003ccode\u003etextURI\u003c/code\u003e, using options \u003ccode\u003eoptions\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e [FileInfoOptions]-\u003e IO [FileInfo]",
        "fct-type": "function",
        "title": "directoryListLoad"
      },
      "index": {
        "description": "Create list of FileInfo objects representing each entry in the directory at textURI using options options",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "directoryListLoad",
        "normalized": "TextURI-\u003e[FileInfoOptions]-\u003eIO[FileInfo]",
        "package": "gnomevfs",
        "partial": "List Load",
        "signature": "TextURI-\u003e[FileInfoOptions]-\u003eIO[FileInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryOpen",
      "description": {
        "fct-descr": "\u003cp\u003eOpen directory textURI for reading. Returns a \u003ccode\u003e\u003ca\u003eDirectoryHandle\u003c/a\u003e\u003c/code\u003e\n which can be used to read directory entries one by one.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e [FileInfoOptions]-\u003e IO DirectoryHandle",
        "fct-type": "function",
        "title": "directoryOpen"
      },
      "index": {
        "description": "Open directory textURI for reading Returns DirectoryHandle which can be used to read directory entries one by one",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "directoryOpen",
        "normalized": "TextURI-\u003e[FileInfoOptions]-\u003eIO DirectoryHandle",
        "package": "gnomevfs",
        "partial": "Open",
        "signature": "TextURI-\u003e[FileInfoOptions]-\u003eIO DirectoryHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryOpenFromURI",
      "description": {
        "fct-descr": "\u003cp\u003eOpen directory textURI for reading. Returns a \u003ccode\u003e\u003ca\u003eDirectoryHandle\u003c/a\u003e\u003c/code\u003e\n which can be used to read directory entries one by one.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e [FileInfoOptions]-\u003e IO DirectoryHandle",
        "fct-type": "function",
        "title": "directoryOpenFromURI"
      },
      "index": {
        "description": "Open directory textURI for reading Returns DirectoryHandle which can be used to read directory entries one by one",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "directoryOpenFromURI",
        "normalized": "URI-\u003e[FileInfoOptions]-\u003eIO DirectoryHandle",
        "package": "gnomevfs",
        "partial": "Open From URI",
        "signature": "URI-\u003e[FileInfoOptions]-\u003eIO DirectoryHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryReadNext",
      "description": {
        "fct-descr": "\u003cp\u003eRead the next directory entry from a \u003ccode\u003e\u003ca\u003eDirectoryHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "DirectoryHandle-\u003e IO FileInfo",
        "fct-type": "function",
        "title": "directoryReadNext"
      },
      "index": {
        "description": "Read the next directory entry from DirectoryHandle",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "directoryReadNext",
        "normalized": "DirectoryHandle-\u003eIO FileInfo",
        "package": "gnomevfs",
        "partial": "Read Next",
        "signature": "DirectoryHandle-\u003eIO FileInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryVisit",
      "description": {
        "fct-descr": "\u003cp\u003eVisit each entry in a directory at a \u003ccode\u003e\u003ca\u003eTextURI\u003c/a\u003e\u003c/code\u003e, calling a\n \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e for each one.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e [FileInfoOptions]-\u003e [DirectoryVisitOptions]-\u003e DirectoryVisitCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "directoryVisit"
      },
      "index": {
        "description": "Visit each entry in directory at TextURI calling DirectoryVisitCallback for each one",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "directoryVisit",
        "normalized": "String-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Visit",
        "signature": "String-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryVisitFiles",
      "description": {
        "fct-descr": "\u003cp\u003eVisit each file in a list contained with a directory at a\n \u003ccode\u003e\u003ca\u003eTextURI\u003c/a\u003e\u003c/code\u003e, calling a \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e for each one.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e [String]-\u003e [FileInfoOptions]-\u003e [DirectoryVisitOptions]-\u003e DirectoryVisitCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "directoryVisitFiles"
      },
      "index": {
        "description": "Visit each file in list contained with directory at TextURI calling DirectoryVisitCallback for each one",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "directoryVisitFiles",
        "normalized": "TextURI-\u003e[String]-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Visit Files",
        "signature": "TextURI-\u003e[String]-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryVisitFilesAtURI",
      "description": {
        "fct-descr": "\u003cp\u003eVisit each file in a list contained with a directory at a\n \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e, calling a \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e for each one.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e [String]-\u003e [FileInfoOptions]-\u003e [DirectoryVisitOptions]-\u003e DirectoryVisitCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "directoryVisitFilesAtURI"
      },
      "index": {
        "description": "Visit each file in list contained with directory at URI calling DirectoryVisitCallback for each one",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "directoryVisitFilesAtURI",
        "normalized": "URI-\u003e[String]-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Visit Files At URI",
        "signature": "URI-\u003e[String]-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:directoryVisitURI",
      "description": {
        "fct-descr": "\u003cp\u003eVisit each entry in a directory at a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e, calling a\n \u003ccode\u003eDirectoryVisitCallback\u003c/code\u003e for each one.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e [FileInfoOptions]-\u003e [DirectoryVisitOptions]-\u003e DirectoryVisitCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "directoryVisitURI"
      },
      "index": {
        "description": "Visit each entry in directory at URI calling DirectoryVisitCallback for each one",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "directoryVisitURI",
        "normalized": "URI-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Visit URI",
        "signature": "URI-\u003e[FileInfoOptions]-\u003e[DirectoryVisitOptions]-\u003eDirectoryVisitCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:makeDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eCreate \u003ccode\u003etextURI\u003c/code\u003e as a directory. Only succeeds if a file or\n directory does not already exist at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e [FilePermissions]-\u003e IO ()",
        "fct-type": "function",
        "title": "makeDirectory"
      },
      "index": {
        "description": "Create textURI as directory Only succeeds if file or directory does not already exist at textURI",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "makeDirectory",
        "normalized": "TextURI-\u003e[FilePermissions]-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Directory",
        "signature": "TextURI-\u003e[FilePermissions]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:makeDirectoryForURI",
      "description": {
        "fct-descr": "\u003cp\u003eCreate \u003ccode\u003euri\u003c/code\u003e as a directory. Only succeeds if a file or\n directory does not already exist at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e [FilePermissions]-\u003e IO ()",
        "fct-type": "function",
        "title": "makeDirectoryForURI"
      },
      "index": {
        "description": "Create uri as directory Only succeeds if file or directory does not already exist at uri",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "makeDirectoryForURI",
        "normalized": "URI-\u003e[FilePermissions]-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Directory For URI",
        "signature": "URI-\u003e[FilePermissions]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:removeDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the directory at \u003ccode\u003etextURI\u003c/code\u003e. The object at \u003ccode\u003etextURI\u003c/code\u003e must be an empty directory.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e IO ()",
        "fct-type": "function",
        "title": "removeDirectory"
      },
      "index": {
        "description": "Remove the directory at textURI The object at textURI must be an empty directory",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "removeDirectory",
        "normalized": "TextURI-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Directory",
        "signature": "TextURI-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Directory.html#v:removeDirectoryFromURI",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the directory at \u003ccode\u003euri\u003c/code\u003e. The object at \u003ccode\u003euri\u003c/code\u003e must be an empty directory.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Directory",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e IO ()",
        "fct-type": "function",
        "title": "removeDirectoryFromURI"
      },
      "index": {
        "description": "Remove the directory at uri The object at uri must be an empty directory",
        "hierarchy": "System Gnome VFS Directory",
        "module": "System.Gnome.VFS.Directory",
        "name": "removeDirectoryFromURI",
        "normalized": "URI-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Directory From URI",
        "signature": "URI-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Drive.html",
        "fct-type": "module",
        "title": "Drive"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "Drive",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Drive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#t:DeviceType",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifies the device type of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DeviceType",
        "fct-type": "data",
        "title": "DeviceType"
      },
      "index": {
        "description": "Identifies the device type of Volume or Drive",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "DeviceType",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Device Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#t:Drive",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-Types.html#Drive",
        "fct-type": "data",
        "title": "Drive"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "Drive",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Drive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#t:DriveClass",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "class",
        "fct-source": "src/System-Gnome-VFS-Types.html#DriveClass",
        "fct-type": "class",
        "title": "DriveClass"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "DriveClass",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Drive Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#t:DriveID",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifies a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#DriveID",
        "fct-type": "type",
        "title": "DriveID"
      },
      "index": {
        "description": "Identifies Drive",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "DriveID",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Drive ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:afterDriveVolumeMounted",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
        "fct-type": "function",
        "title": "afterDriveVolumeMounted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "afterDriveVolumeMounted",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Drive Volume Mounted",
        "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:afterDriveVolumePreUnmount",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
        "fct-type": "function",
        "title": "afterDriveVolumePreUnmount"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "afterDriveVolumePreUnmount",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Drive Volume Pre Unmount",
        "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:afterDriveVolumeUnmounted",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
        "fct-type": "function",
        "title": "afterDriveVolumeUnmounted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "afterDriveVolumeUnmounted",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Drive Volume Unmounted",
        "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:castToDrive",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "obj -\u003e Drive",
        "fct-source": "src/System-Gnome-VFS-Types.html#castToDrive",
        "fct-type": "function",
        "title": "castToDrive"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "castToDrive",
        "normalized": "a-\u003eDrive",
        "package": "gnomevfs",
        "partial": "To Drive",
        "signature": "obj-\u003eDrive"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveCompare",
      "description": {
        "fct-descr": "\u003cp\u003eCompares two \u003ccode\u003e\u003ca\u003eDriveClass\u003c/a\u003e\u003c/code\u003e objects \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e. Two \u003ccode\u003e\u003ca\u003eDriveClass\u003c/a\u003e\u003c/code\u003e\n objects referring to different drives are guaranteed to not\n return \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e when comparing them. If they refer to the same drive \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e\n is returned.\n\u003c/p\u003e\u003cp\u003eThe resulting gint should be used to determine the order in which\n \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are displayed in graphical user interfaces.\n\u003c/p\u003e\u003cp\u003eThe comparison algorithm first of all peeks the device type of\n \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, they will be sorted in the following order:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Magnetic and opto-magnetic drives (ZIP, floppy)\n\u003c/li\u003e\u003cli\u003e Optical drives (CD, DVD)\n\u003c/li\u003e\u003cli\u003e External drives (USB sticks, music players)\n\u003c/li\u003e\u003cli\u003e Mounted hard disks\n\u003c/li\u003e\u003cli\u003e Other drives\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAfterwards, the display name of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e is compared using a\n locale-sensitive sorting algorithm.\n\u003c/p\u003e\u003cp\u003eIf two drives have the same display name, their unique ID is\n compared which can be queried using \u003ccode\u003e\u003ca\u003edriveGetID\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e drive-\u003e IO Ordering",
        "fct-type": "function",
        "title": "driveCompare"
      },
      "index": {
        "description": "Compares two DriveClass objects and Two DriveClass objects referring to different drives are guaranteed to not return EQ when comparing them If they refer to the same drive EQ is returned The resulting gint should be used to determine the order in which and are displayed in graphical user interfaces The comparison algorithm first of all peeks the device type of and they will be sorted in the following order Magnetic and opto-magnetic drives ZIP floppy Optical drives CD DVD External drives USB sticks music players Mounted hard disks Other drives Afterwards the display name of and is compared using locale-sensitive sorting algorithm If two drives have the same display name their unique ID is compared which can be queried using driveGetID",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveCompare",
        "normalized": "a-\u003ea-\u003eIO Ordering",
        "package": "gnomevfs",
        "partial": "Compare",
        "signature": "drive-\u003edrive-\u003eIO Ordering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveEject",
      "description": {
        "fct-descr": "\u003cp\u003eIf drive has associated \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e objects, all of them will be\n unmounted by calling \u003ccode\u003eSystem.Gnome.VFS.Volume.volumeUnmount\u003c/code\u003e for\n each volume in \u003ccode\u003e\u003ca\u003edriveGetMountedVolumes\u003c/a\u003e\u003c/code\u003e, except for the last one,\n for which \u003ccode\u003eSystem.Gnome.VFS.Volume.volumeEject\u003c/code\u003e is called to\n ensure that the drive's media is ejected.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e VolumeOpSuccessCallback-\u003e VolumeOpFailureCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "driveEject"
      },
      "index": {
        "description": "If drive has associated Volume objects all of them will be unmounted by calling System.Gnome.VFS.Volume.volumeUnmount for each volume in driveGetMountedVolumes except for the last one for which System.Gnome.VFS.Volume.volumeEject is called to ensure that the drive media is ejected",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveEject",
        "normalized": "a-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Eject",
        "signature": "drive-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetActivationURI",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the activation URI of \u003ccode\u003edrive\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe returned URI usually refers to a valid location. You can\n check the validity of the location by calling\n \u003ccode\u003eSystem.Gnome.VFS.URI.uriFromString\u003c/code\u003e with the URI, and checking\n whether the return value is not \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO String",
        "fct-type": "function",
        "title": "driveGetActivationURI"
      },
      "index": {
        "description": "Returns the activation URI of drive The returned URI usually refers to valid location You can check the validity of the location by calling System.Gnome.VFS.URI.uriFromString with the URI and checking whether the return value is not Nothing",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveGetActivationURI",
        "normalized": "a-\u003eIO String",
        "package": "gnomevfs",
        "partial": "Get Activation URI",
        "signature": "drive-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetDevicePath",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the device path of a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eFor HAL drives, this returns the value of the drive's\n \u003ccode\u003eblock.device\u003c/code\u003e key. For UNIX mounts, it returns the \u003ccode\u003emntent\u003c/code\u003e's\n \u003ccode\u003emnt_fsname\u003c/code\u003e entry.\n\u003c/p\u003e\u003cp\u003eOtherwise, it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO (Maybe String)",
        "fct-type": "function",
        "title": "driveGetDevicePath"
      },
      "index": {
        "description": "Returns the device path of Drive object For HAL drives this returns the value of the drive block.device key For UNIX mounts it returns the mntent mnt fsname entry Otherwise it returns Nothing",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveGetDevicePath",
        "normalized": "a-\u003eIO(Maybe String)",
        "package": "gnomevfs",
        "partial": "Get Device Path",
        "signature": "drive-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetDeviceType",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eDeviceType\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO DeviceType",
        "fct-type": "function",
        "title": "driveGetDeviceType"
      },
      "index": {
        "description": "Returns the DeviceType of Drive object",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveGetDeviceType",
        "normalized": "a-\u003eIO DeviceType",
        "package": "gnomevfs",
        "partial": "Get Device Type",
        "signature": "drive-\u003eIO DeviceType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetDisplayName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the display name of a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO String",
        "fct-type": "function",
        "title": "driveGetDisplayName"
      },
      "index": {
        "description": "Returns the display name of Drive object",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveGetDisplayName",
        "normalized": "a-\u003eIO String",
        "package": "gnomevfs",
        "partial": "Get Display Name",
        "signature": "drive-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetHalUDI",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the HAL UDI of a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eFor HAL drives, this matches the value of the \u003ccode\u003einfo.udi\u003c/code\u003e key,\n for other drives it is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO (Maybe String)",
        "fct-type": "function",
        "title": "driveGetHalUDI"
      },
      "index": {
        "description": "Returns the HAL UDI of Drive object For HAL drives this matches the value of the info.udi key for other drives it is Nothing",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveGetHalUDI",
        "normalized": "a-\u003eIO(Maybe String)",
        "package": "gnomevfs",
        "partial": "Get Hal UDI",
        "signature": "drive-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetID",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a unique identifier for a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO DriveID",
        "fct-type": "function",
        "title": "driveGetID"
      },
      "index": {
        "description": "Returns unique identifier for Drive object",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveGetID",
        "normalized": "a-\u003eIO DriveID",
        "package": "gnomevfs",
        "partial": "Get ID",
        "signature": "drive-\u003eIO DriveID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetIcon",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the icon filename for a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO FilePath",
        "fct-type": "function",
        "title": "driveGetIcon"
      },
      "index": {
        "description": "Returns the icon filename for Drive object",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveGetIcon",
        "normalized": "a-\u003eIO FilePath",
        "package": "gnomevfs",
        "partial": "Get Icon",
        "signature": "drive-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveGetMountedVolumes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of mounted volumes for a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO [Volume]",
        "fct-type": "function",
        "title": "driveGetMountedVolumes"
      },
      "index": {
        "description": "Returns list of mounted volumes for Drive object",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveGetMountedVolumes",
        "normalized": "a-\u003eIO[Volume]",
        "package": "gnomevfs",
        "partial": "Get Mounted Volumes",
        "signature": "drive-\u003eIO[Volume]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveIsConnected",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for whether a drive is connected.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO Bool",
        "fct-type": "function",
        "title": "driveIsConnected"
      },
      "index": {
        "description": "Returns Bool for whether drive is connected",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveIsConnected",
        "normalized": "a-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Is Connected",
        "signature": "drive-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveIsMounted",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for whether a drive is mounted.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO Bool",
        "fct-type": "function",
        "title": "driveIsMounted"
      },
      "index": {
        "description": "Returns Bool for whether drive is mounted",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveIsMounted",
        "normalized": "a-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Is Mounted",
        "signature": "drive-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveIsUserVisible",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for whether a drive is user-visible. This should\n be used by applications to determine whether the drive should be\n listed in user interfaces listing available drives.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e IO Bool",
        "fct-type": "function",
        "title": "driveIsUserVisible"
      },
      "index": {
        "description": "Returns Bool for whether drive is user-visible This should be used by applications to determine whether the drive should be listed in user interfaces listing available drives",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveIsUserVisible",
        "normalized": "a-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Is User Visible",
        "signature": "drive-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:driveMount",
      "description": {
        "fct-descr": "\u003cp\u003eMounts a \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e VolumeOpSuccessCallback-\u003e VolumeOpFailureCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "driveMount"
      },
      "index": {
        "description": "Mounts Drive object",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "driveMount",
        "normalized": "a-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Mount",
        "signature": "drive-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:onDriveVolumeMounted",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
        "fct-type": "function",
        "title": "onDriveVolumeMounted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "onDriveVolumeMounted",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Drive Volume Mounted",
        "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:onDriveVolumePreUnmount",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
        "fct-type": "function",
        "title": "onDriveVolumePreUnmount"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "onDriveVolumePreUnmount",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Drive Volume Pre Unmount",
        "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Drive.html#v:onDriveVolumeUnmounted",
      "description": {
        "fct-module": "System.Gnome.VFS.Drive",
        "fct-package": "gnomevfs",
        "fct-signature": "drive-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId drive)",
        "fct-type": "function",
        "title": "onDriveVolumeUnmounted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Drive",
        "module": "System.Gnome.VFS.Drive",
        "name": "onDriveVolumeUnmounted",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Drive Volume Unmounted",
        "signature": "drive-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId drive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.Error",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Error",
        "module": "System.Gnome.VFS.Error",
        "name": "Error",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#t:Error",
      "description": {
        "fct-module": "System.Gnome.VFS.Error",
        "fct-package": "gnomevfs",
        "fct-signature": "newtype",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Error",
        "fct-type": "newtype",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Error",
        "module": "System.Gnome.VFS.Error",
        "name": "Error",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#v:Error",
      "description": {
        "fct-module": "System.Gnome.VFS.Error",
        "fct-package": "gnomevfs",
        "fct-signature": "Error Result",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Error",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Error",
        "module": "System.Gnome.VFS.Error",
        "name": "Error",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#v:eofErrors",
      "description": {
        "fct-module": "System.Gnome.VFS.Error",
        "fct-package": "gnomevfs",
        "fct-signature": "Exception -\u003e Maybe Error",
        "fct-source": "src/System-Gnome-VFS-Error.html#eofErrors",
        "fct-type": "function",
        "title": "eofErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Error",
        "module": "System.Gnome.VFS.Error",
        "name": "eofErrors",
        "normalized": "Exception-\u003eMaybe Error",
        "package": "gnomevfs",
        "partial": "Errors",
        "signature": "Exception-\u003eMaybe Error"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#v:error",
      "description": {
        "fct-module": "System.Gnome.VFS.Error",
        "fct-package": "gnomevfs",
        "fct-signature": "Result -\u003e IO a",
        "fct-source": "src/System-Gnome-VFS-Error.html#error",
        "fct-type": "function",
        "title": "error"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Error",
        "module": "System.Gnome.VFS.Error",
        "name": "error",
        "normalized": "Result-\u003eIO a",
        "package": "gnomevfs",
        "partial": "",
        "signature": "Result-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Error.html#v:errors",
      "description": {
        "fct-module": "System.Gnome.VFS.Error",
        "fct-package": "gnomevfs",
        "fct-signature": "Exception -\u003e Maybe Error",
        "fct-source": "src/System-Gnome-VFS-Error.html#errors",
        "fct-type": "function",
        "title": "errors"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Error",
        "module": "System.Gnome.VFS.Error",
        "name": "errors",
        "normalized": "Exception-\u003eMaybe Error",
        "package": "gnomevfs",
        "partial": "",
        "signature": "Exception-\u003eMaybe Error"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-FileInfo.html",
        "fct-type": "module",
        "title": "FileInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileInfo",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:FileFlags",
      "description": {
        "fct-descr": "\u003cp\u003eFlags specifying additional information about a file.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileFlags",
        "fct-type": "data",
        "title": "FileFlags"
      },
      "index": {
        "description": "Flags specifying additional information about file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileFlags",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:FileInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA record type containing information about a file.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "data",
        "title": "FileInfo"
      },
      "index": {
        "description": "record type containing information about file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileInfo",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:FileType",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifies the type of a file.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
        "fct-type": "data",
        "title": "FileType"
      },
      "index": {
        "description": "Identifies the type of file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileType",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:IDs",
      "description": {
        "fct-descr": "\u003cp\u003eA pair holding the user ID and group ID of a file owner.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#IDs",
        "fct-type": "type",
        "title": "IDs"
      },
      "index": {
        "description": "pair holding the user ID and group ID of file owner",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "IDs",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "IDs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#t:InodeNumber",
      "description": {
        "fct-descr": "\u003cp\u003eAn integral type wide enough to hold the inode number of a file.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#InodeNumber",
        "fct-type": "type",
        "title": "InodeNumber"
      },
      "index": {
        "description": "An integral type wide enough to hold the inode number of file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "InodeNumber",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Inode Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileFlagsLocal",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileFlagsLocal",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileFlags",
        "fct-type": "function",
        "title": "FileFlagsLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileFlagsLocal",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Flags Local",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileFlagsNone",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileFlagsNone",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileFlags",
        "fct-type": "function",
        "title": "FileFlagsNone"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileFlagsNone",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Flags None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileFlagsSymlink",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileFlagsSymlink",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileFlags",
        "fct-type": "function",
        "title": "FileFlagsSymlink"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileFlagsSymlink",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Flags Symlink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileInfo",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileInfo",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "FileInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileInfo",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeBlockDevice",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileTypeBlockDevice",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
        "fct-type": "function",
        "title": "FileTypeBlockDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileTypeBlockDevice",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Type Block Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeCharacterDevice",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileTypeCharacterDevice",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
        "fct-type": "function",
        "title": "FileTypeCharacterDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileTypeCharacterDevice",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Type Character Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeDirectory",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileTypeDirectory",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
        "fct-type": "function",
        "title": "FileTypeDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileTypeDirectory",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Type Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeFifo",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileTypeFifo",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
        "fct-type": "function",
        "title": "FileTypeFifo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileTypeFifo",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Type Fifo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeRegular",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileTypeRegular",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
        "fct-type": "function",
        "title": "FileTypeRegular"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileTypeRegular",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Type Regular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeSocket",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileTypeSocket",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
        "fct-type": "function",
        "title": "FileTypeSocket"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileTypeSocket",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Type Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeSymbolicLink",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileTypeSymbolicLink",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
        "fct-type": "function",
        "title": "FileTypeSymbolicLink"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileTypeSymbolicLink",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Type Symbolic Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:FileTypeUnknown",
      "description": {
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "FileTypeUnknown",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileType",
        "fct-type": "function",
        "title": "FileTypeUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "FileTypeUnknown",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Type Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoATime",
      "description": {
        "fct-descr": "\u003cp\u003ethe time of last access\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe EpochTime",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoATime"
      },
      "index": {
        "description": "the time of last access",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoATime",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info ATime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoBlockCount",
      "description": {
        "fct-descr": "\u003cp\u003ethe size of the file in\n filesystem blocks\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe FileSize",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoBlockCount"
      },
      "index": {
        "description": "the size of the file in filesystem blocks",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoBlockCount",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info Block Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoCTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe time of last attribute modification\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe EpochTime",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoCTime"
      },
      "index": {
        "description": "the time of last attribute modification",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoCTime",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info CTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoDevice",
      "description": {
        "fct-descr": "\u003cp\u003ethe device the file\n resides on\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe DeviceID",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoDevice"
      },
      "index": {
        "description": "the device the file resides on",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoDevice",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoFlags",
      "description": {
        "fct-descr": "\u003cp\u003eflags providing\n additional information\n about the file\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe [FileFlags]",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoFlags"
      },
      "index": {
        "description": "flags providing additional information about the file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoFlags",
        "normalized": "Maybe[FileFlags]",
        "package": "gnomevfs",
        "partial": "Info Flags",
        "signature": "Maybe[FileFlags]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoIDs",
      "description": {
        "fct-descr": "\u003cp\u003ethe user and group IDs\n owning the file\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe IDs",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoIDs"
      },
      "index": {
        "description": "the user and group IDs owning the file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoIDs",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info IDs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoIOBlockSize",
      "description": {
        "fct-descr": "\u003cp\u003ethe optimal buffer size\n for reading from and\n writing to the file\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe FileSize",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoIOBlockSize"
      },
      "index": {
        "description": "the optimal buffer size for reading from and writing to the file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoIOBlockSize",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info IOBlock Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoInode",
      "description": {
        "fct-descr": "\u003cp\u003ethe inode number of the\n file\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe InodeNumber",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoInode"
      },
      "index": {
        "description": "the inode number of the file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoInode",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info Inode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoLinkCount",
      "description": {
        "fct-descr": "\u003cp\u003ethe total number of\n hard links to the file\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe Int",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoLinkCount"
      },
      "index": {
        "description": "the total number of hard links to the file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoLinkCount",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info Link Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoMIMEType",
      "description": {
        "fct-descr": "\u003cp\u003ethe MIME-type of the\n file\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe MIMEType",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoMIMEType"
      },
      "index": {
        "description": "the MIME-type of the file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoMIMEType",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info MIMEType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoMTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe time of last modification\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe EpochTime",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoMTime"
      },
      "index": {
        "description": "the time of last modification",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoMTime",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info MTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoName",
      "description": {
        "fct-descr": "\u003cp\u003ethe name of the file,\n without the path\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoName"
      },
      "index": {
        "description": "the name of the file without the path",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoName",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoPermissions",
      "description": {
        "fct-descr": "\u003cp\u003ethe permissions for the\n file\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe [FilePermissions]",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoPermissions"
      },
      "index": {
        "description": "the permissions for the file",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoPermissions",
        "normalized": "Maybe[FilePermissions]",
        "package": "gnomevfs",
        "partial": "Info Permissions",
        "signature": "Maybe[FilePermissions]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoSize",
      "description": {
        "fct-descr": "\u003cp\u003ethe size of the file in\n bytes\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe FileSize",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoSize"
      },
      "index": {
        "description": "the size of the file in bytes",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoSize",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoSymlinkName",
      "description": {
        "fct-descr": "\u003cp\u003ethe location this\n symlink points to, if\n \u003ccode\u003efileInfoFlags\u003c/code\u003e contains \u003ccode\u003e\u003ca\u003eFileFlagsSymlink\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoSymlinkName"
      },
      "index": {
        "description": "the location this symlink points to if fileInfoFlags contains FileFlagsSymlink",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoSymlinkName",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info Symlink Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-FileInfo.html#v:fileInfoType",
      "description": {
        "fct-descr": "\u003cp\u003ethe type of the file;\n i.e. regular, directory,\n block-device, etc.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.FileInfo",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe FileType",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileInfo",
        "fct-type": "function",
        "title": "fileInfoType"
      },
      "index": {
        "description": "the type of the file i.e regular directory block-device etc",
        "hierarchy": "System Gnome VFS FileInfo",
        "module": "System.Gnome.VFS.FileInfo",
        "name": "fileInfoType",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Info Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Init.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.Init",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Init.html",
        "fct-type": "module",
        "title": "Init"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Init",
        "module": "System.Gnome.VFS.Init",
        "name": "Init",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Init.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003eIf gnome-vfs is not already initialized, initialize it. This must\n be called prior to performing any other gnome-vfs operations, and\n may be called multiple times without error.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Init",
        "fct-package": "gnomevfs",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Gnome-VFS-Init.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "If gnome-vfs is not already initialized initialize it This must be called prior to performing any other gnome-vfs operations and may be called multiple times without error",
        "hierarchy": "System Gnome VFS Init",
        "module": "System.Gnome.VFS.Init",
        "name": "init",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Init.html#v:initialized",
      "description": {
        "fct-descr": "\u003cp\u003eDetects if gnome-vfs has already been initialized (gnome-vfs must\n be initialized prior to using any methods or operations).\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Init",
        "fct-package": "gnomevfs",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Gnome-VFS-Init.html#initialized",
        "fct-type": "function",
        "title": "initialized"
      },
      "index": {
        "description": "Detects if gnome-vfs has already been initialized gnome-vfs must be initialized prior to using any methods or operations",
        "hierarchy": "System Gnome VFS Init",
        "module": "System.Gnome.VFS.Init",
        "name": "initialized",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Init.html#v:shutdown",
      "description": {
        "fct-descr": "\u003cp\u003eCease all active gnome-vfs operations and unload the MIME database\n from memory.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Init",
        "fct-package": "gnomevfs",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Gnome-VFS-Init.html#shutdown",
        "fct-type": "function",
        "title": "shutdown"
      },
      "index": {
        "description": "Cease all active gnome-vfs operations and unload the MIME database from memory",
        "hierarchy": "System Gnome VFS Init",
        "module": "System.Gnome.VFS.Init",
        "name": "shutdown",
        "normalized": "IO()",
        "package": "gnomevfs",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-MIME.html",
        "fct-type": "module",
        "title": "MIME"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "MIME",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "MIME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#t:MIMEType",
      "description": {
        "fct-descr": "\u003cp\u003eA string that will be treated as a MIME-type.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#MIMEType",
        "fct-type": "type",
        "title": "MIMEType"
      },
      "index": {
        "description": "string that will be treated as MIME-type",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "MIMEType",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "MIMEType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getFileMIMEType",
      "description": {
        "fct-descr": "\u003cp\u003eTry to guess the MIME-type of the file represented by \u003ccode\u003epath\u003c/code\u003e. If\n \u003ccode\u003esuffixOnly\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, use the MIME-magic based lookup\n first. Handles non-existant files by returning a type based on\n the file extension.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "FilePath -\u003e Bool -\u003e IO String",
        "fct-source": "src/System-Gnome-VFS-MIME.html#getFileMIMEType",
        "fct-type": "function",
        "title": "getFileMIMEType"
      },
      "index": {
        "description": "Try to guess the MIME-type of the file represented by path If suffixOnly is False use the MIME-magic based lookup first Handles non-existant files by returning type based on the file extension",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "getFileMIMEType",
        "normalized": "FilePath-\u003eBool-\u003eIO String",
        "package": "gnomevfs",
        "partial": "File MIMEType",
        "signature": "FilePath-\u003eBool-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getFileMIMETypeFast",
      "description": {
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "FilePath-\u003e IO String",
        "fct-type": "function",
        "title": "getFileMIMETypeFast"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "getFileMIMETypeFast",
        "normalized": "FilePath-\u003eIO String",
        "package": "gnomevfs",
        "partial": "File MIMEType Fast",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getMIMETypeCommon",
      "description": {
        "fct-descr": "\u003cp\u003eTry to get the MIME-type of the file represented by \u003ccode\u003euri\u003c/code\u003e. This\n function favors the contents of the file over the extension of\n the filename. If the file does not exist, the MIME-type for the\n extension is returned. If no MIME-type can be found for the file,\n the function returns \"application/octet-stream\".\n\u003c/p\u003e\u003cp\u003eNote: This function will not necessarily return the same\n MIME-type as \u003ccode\u003eSystem.Gnome.VFS.Ops.getFileInfo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e IO String",
        "fct-type": "function",
        "title": "getMIMETypeCommon"
      },
      "index": {
        "description": "Try to get the MIME-type of the file represented by uri This function favors the contents of the file over the extension of the filename If the file does not exist the MIME-type for the extension is returned If no MIME-type can be found for the file the function returns application octet-stream Note This function will not necessarily return the same MIME-type as System.Gnome.VFS.Ops.getFileInfo",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "getMIMETypeCommon",
        "normalized": "URI-\u003eIO String",
        "package": "gnomevfs",
        "partial": "MIMEType Common",
        "signature": "URI-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getMIMETypeFromURI",
      "description": {
        "fct-descr": "\u003cp\u003eTry to get the MIME-type of the file represented by \u003ccode\u003euri\u003c/code\u003e. This\n function looks only at the filename pointed to by \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e IO String",
        "fct-type": "function",
        "title": "getMIMETypeFromURI"
      },
      "index": {
        "description": "Try to get the MIME-type of the file represented by uri This function looks only at the filename pointed to by uri",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "getMIMETypeFromURI",
        "normalized": "URI-\u003eIO String",
        "package": "gnomevfs",
        "partial": "MIMEType From URI",
        "signature": "URI-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:getSupertypeFromMIMEType",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the supertype for \u003ccode\u003emimeType\u003c/code\u003e. The supertype of an\n application is computed by removing its suffix, and replacing it\n with \u003ccode\u003e*\u003c/code\u003e. Thus, \u003ccode\u003efoo/bar\u003c/code\u003e will be converted to \u003ccode\u003efoo/*\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/System-Gnome-VFS-MIME.html#getSupertypeFromMIMEType",
        "fct-type": "function",
        "title": "getSupertypeFromMIMEType"
      },
      "index": {
        "description": "Returns the supertype for mimeType The supertype of an application is computed by removing its suffix and replacing it with Thus foo bar will be converted to foo",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "getSupertypeFromMIMEType",
        "normalized": "String-\u003eString",
        "package": "gnomevfs",
        "partial": "Supertype From MIMEType",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:mimeInfoCacheReload",
      "description": {
        "fct-descr": "\u003cp\u003eReload the MIME information for the specified directory.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Gnome-VFS-MIME.html#mimeInfoCacheReload",
        "fct-type": "function",
        "title": "mimeInfoCacheReload"
      },
      "index": {
        "description": "Reload the MIME information for the specified directory",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "mimeInfoCacheReload",
        "normalized": "FilePath-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Info Cache Reload",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:mimeTypeFromNameOrDefault",
      "description": {
        "fct-descr": "\u003cp\u003eTry to determine the MIME-type of the file at \u003ccode\u003efilename\u003c/code\u003e, using\n only the filename and the Gnome VFS MIME type database. If the\n MIME-type is not found, return \u003ccode\u003edefaultv\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "FilePath-\u003e Maybe MIMEType-\u003e Maybe MIMEType",
        "fct-type": "function",
        "title": "mimeTypeFromNameOrDefault"
      },
      "index": {
        "description": "Try to determine the MIME-type of the file at filename using only the filename and the Gnome VFS MIME type database If the MIME-type is not found return defaultv",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "mimeTypeFromNameOrDefault",
        "normalized": "FilePath-\u003eMaybe MIMEType-\u003eMaybe MIMEType",
        "package": "gnomevfs",
        "partial": "Type From Name Or Default",
        "signature": "FilePath-\u003eMaybe MIMEType-\u003eMaybe MIMEType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-MIME.html#v:mimeTypeIsSupertype",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003emimeType\u003c/code\u003e is of the form \u003ccode\u003efoo/*\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n otherwise.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.MIME",
        "fct-package": "gnomevfs",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/System-Gnome-VFS-MIME.html#mimeTypeIsSupertype",
        "fct-type": "function",
        "title": "mimeTypeIsSupertype"
      },
      "index": {
        "description": "Returns True if mimeType is of the form foo and False otherwise",
        "hierarchy": "System Gnome VFS MIME",
        "module": "System.Gnome.VFS.MIME",
        "name": "mimeTypeIsSupertype",
        "normalized": "String-\u003eBool",
        "package": "gnomevfs",
        "partial": "Type Is Supertype",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.Monitor",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Monitor.html",
        "fct-type": "module",
        "title": "Monitor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Monitor",
        "module": "System.Gnome.VFS.Monitor",
        "name": "Monitor",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Monitor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#t:MonitorCallback",
      "description": {
        "fct-descr": "\u003cp\u003eA callback that must be passed to \u003ccode\u003emonitorAdd\u003c/code\u003e. It will be\n called any time a file or directory is changed.\n\u003c/p\u003e\u003cp\u003eThe parameters, from left to right, are:\n * the handle to a filesystem monitor,\n * the URI being monitored,\n * the actual file that was modified,\n * the event that occured.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Monitor",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#MonitorCallback",
        "fct-type": "type",
        "title": "MonitorCallback"
      },
      "index": {
        "description": "callback that must be passed to monitorAdd It will be called any time file or directory is changed The parameters from left to right are the handle to filesystem monitor the URI being monitored the actual file that was modified the event that occured",
        "hierarchy": "System Gnome VFS Monitor",
        "module": "System.Gnome.VFS.Monitor",
        "name": "MonitorCallback",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Monitor Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#t:MonitorHandle",
      "description": {
        "fct-descr": "\u003cp\u003eA handle to a file-system monitor.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Monitor",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#MonitorHandle",
        "fct-type": "data",
        "title": "MonitorHandle"
      },
      "index": {
        "description": "handle to file-system monitor",
        "hierarchy": "System Gnome VFS Monitor",
        "module": "System.Gnome.VFS.Monitor",
        "name": "MonitorHandle",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Monitor Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#v:monitorAdd",
      "description": {
        "fct-descr": "\u003cp\u003eWatch the object at \u003ccode\u003etextURI\u003c/code\u003e for changes, and call \u003ccode\u003ecallback\u003c/code\u003e\n when a change occurs.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Monitor",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e MonitorType-\u003e MonitorCallback-\u003e IO MonitorHandle",
        "fct-type": "function",
        "title": "monitorAdd"
      },
      "index": {
        "description": "Watch the object at textURI for changes and call callback when change occurs",
        "hierarchy": "System Gnome VFS Monitor",
        "module": "System.Gnome.VFS.Monitor",
        "name": "monitorAdd",
        "normalized": "String-\u003eMonitorType-\u003eMonitorCallback-\u003eIO MonitorHandle",
        "package": "gnomevfs",
        "partial": "Add",
        "signature": "String-\u003eMonitorType-\u003eMonitorCallback-\u003eIO MonitorHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Monitor.html#v:monitorCancel",
      "description": {
        "fct-descr": "\u003cp\u003eCancels the monitor referred to by \u003ccode\u003emonitorHandle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Monitor",
        "fct-package": "gnomevfs",
        "fct-signature": "MonitorHandle-\u003e IO ()",
        "fct-type": "function",
        "title": "monitorCancel"
      },
      "index": {
        "description": "Cancels the monitor referred to by monitorHandle",
        "hierarchy": "System Gnome VFS Monitor",
        "module": "System.Gnome.VFS.Monitor",
        "name": "monitorCancel",
        "normalized": "MonitorHandle-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Cancel",
        "signature": "MonitorHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Ops.html",
        "fct-type": "module",
        "title": "Ops"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "Ops",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:FileOffset",
      "description": {
        "fct-descr": "\u003cp\u003eAn integral type wide enough to hold an offset into a file.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileOffset",
        "fct-type": "type",
        "title": "FileOffset"
      },
      "index": {
        "description": "An integral type wide enough to hold an offset into file",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "FileOffset",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:FilePermissions",
      "description": {
        "fct-descr": "\u003cp\u003eUNIX-like permissions for a file.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "data",
        "title": "FilePermissions"
      },
      "index": {
        "description": "UNIX-like permissions for file",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "FilePermissions",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Permissions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:FileSize",
      "description": {
        "fct-descr": "\u003cp\u003eAn integral type wide enough to hold the size of a file.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#FileSize",
        "fct-type": "type",
        "title": "FileSize"
      },
      "index": {
        "description": "An integral type wide enough to hold the size of file",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "FileSize",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "File Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:Handle",
      "description": {
        "fct-descr": "\u003cp\u003eA handle to an open file\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Handle",
        "fct-type": "data",
        "title": "Handle"
      },
      "index": {
        "description": "handle to an open file",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "Handle",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:OpenMode",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
        "fct-type": "data",
        "title": "OpenMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "OpenMode",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Open Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a file operation.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "The result of file operation",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "Result",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#t:SeekPosition",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies the start position for a seek operation.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#SeekPosition",
        "fct-type": "data",
        "title": "SeekPosition"
      },
      "index": {
        "description": "Specifies the start position for seek operation",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "SeekPosition",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Seek Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorAccessDenied",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorAccessDenied",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorAccessDenied"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorAccessDenied",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Access Denied",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorBadFile",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorBadFile",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorBadFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorBadFile",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Bad File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorBadParameters",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorBadParameters",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorBadParameters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorBadParameters",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Bad Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorCancelled",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorCancelled",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorCancelled"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorCancelled",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Cancelled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorCorruptedData",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorCorruptedData",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorCorruptedData"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorCorruptedData",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Corrupted Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorDeprecatedFunction",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorDeprecatedFunction",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorDeprecatedFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorDeprecatedFunction",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Deprecated Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorDirectoryBusy",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorDirectoryBusy",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorDirectoryBusy"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorDirectoryBusy",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Directory Busy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorDirectoryNotEmpty",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorDirectoryNotEmpty",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorDirectoryNotEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorDirectoryNotEmpty",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Directory Not Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorEof",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorEof",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorEof"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorEof",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Eof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorFileExists",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorFileExists",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorFileExists"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorFileExists",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error File Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorGeneric",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorGeneric",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorGeneric",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorHostHasNoAddress",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorHostHasNoAddress",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorHostHasNoAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorHostHasNoAddress",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Host Has No Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorHostNotFound",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorHostNotFound",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorHostNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorHostNotFound",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Host Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInProgress",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorInProgress",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorInProgress"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorInProgress",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error In Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInternal",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorInternal",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorInternal"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorInternal",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInterrupted",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorInterrupted",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorInterrupted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorInterrupted",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Interrupted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInvalidFilename",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorInvalidFilename",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorInvalidFilename"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorInvalidFilename",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Invalid Filename",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInvalidHostName",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorInvalidHostName",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorInvalidHostName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorInvalidHostName",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Invalid Host Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInvalidOpenMode",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorInvalidOpenMode",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorInvalidOpenMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorInvalidOpenMode",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Invalid Open Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorInvalidUri",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorInvalidUri",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorInvalidUri"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorInvalidUri",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Invalid Uri",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorIo",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorIo",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorIo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorIo",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Io",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorIsDirectory",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorIsDirectory",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorIsDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorIsDirectory",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Is Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorLaunch",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorLaunch",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorLaunch"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorLaunch",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Launch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorLocked",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorLocked",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorLocked"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorLocked",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Locked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorLoginFailed",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorLoginFailed",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorLoginFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorLoginFailed",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Login Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorLoop",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorLoop",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorLoop"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorLoop",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNameTooLong",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNameTooLong",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNameTooLong"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNameTooLong",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Name Too Long",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNameserver",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNameserver",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNameserver"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNameserver",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Nameserver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoDefault",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNoDefault",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNoDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNoDefault",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error No Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoHandler",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNoHandler",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNoHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNoHandler",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error No Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoMasterBrowser",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNoMasterBrowser",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNoMasterBrowser"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNoMasterBrowser",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error No Master Browser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoMemory",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNoMemory",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNoMemory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNoMemory",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error No Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNoSpace",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNoSpace",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNoSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNoSpace",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error No Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotADirectory",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNotADirectory",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNotADirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNotADirectory",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Not ADirectory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotASymbolicLink",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNotASymbolicLink",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNotASymbolicLink"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNotASymbolicLink",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Not ASymbolic Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotFound",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNotFound",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNotFound",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotOpen",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNotOpen",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNotOpen"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNotOpen",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Not Open",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotPermitted",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNotPermitted",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNotPermitted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNotPermitted",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Not Permitted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotSameFileSystem",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNotSameFileSystem",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNotSameFileSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNotSameFileSystem",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Not Same File System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorNotSupported",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorNotSupported",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorNotSupported"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorNotSupported",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Not Supported",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorParse",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorParse",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorParse"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorParse",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorProtocolError",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorProtocolError",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorProtocolError"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorProtocolError",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Protocol Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorReadOnly",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorReadOnly",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorReadOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorReadOnly",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Read Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorReadOnlyFileSystem",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorReadOnlyFileSystem",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorReadOnlyFileSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorReadOnlyFileSystem",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Read Only File System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorServiceNotAvailable",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorServiceNotAvailable",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorServiceNotAvailable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorServiceNotAvailable",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Service Not Available",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorServiceObsolete",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorServiceObsolete",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorServiceObsolete"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorServiceObsolete",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Service Obsolete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorTimeout",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorTimeout",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorTimeout",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorTooBig",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorTooBig",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorTooBig"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorTooBig",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Too Big",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorTooManyLinks",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorTooManyLinks",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorTooManyLinks"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorTooManyLinks",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Too Many Links",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorTooManyOpenFiles",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorTooManyOpenFiles",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorTooManyOpenFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorTooManyOpenFiles",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Too Many Open Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:ErrorWrongFormat",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "ErrorWrongFormat",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "ErrorWrongFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "ErrorWrongFormat",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Error Wrong Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:NumErrors",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "NumErrors",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "NumErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "NumErrors",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Num Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:Ok",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "Ok",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#Result",
        "fct-type": "function",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "Ok",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenNone",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "OpenNone",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
        "fct-type": "function",
        "title": "OpenNone"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "OpenNone",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Open None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenRandom",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "OpenRandom",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
        "fct-type": "function",
        "title": "OpenRandom"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "OpenRandom",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Open Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenRead",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "OpenRead",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
        "fct-type": "function",
        "title": "OpenRead"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "OpenRead",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Open Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenTruncate",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "OpenTruncate",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
        "fct-type": "function",
        "title": "OpenTruncate"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "OpenTruncate",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Open Truncate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:OpenWrite",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "OpenWrite",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#OpenMode",
        "fct-type": "function",
        "title": "OpenWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "OpenWrite",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Open Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermAccessExecutable",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermAccessExecutable",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermAccessExecutable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermAccessExecutable",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Access Executable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermAccessReadable",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermAccessReadable",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermAccessReadable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermAccessReadable",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Access Readable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermAccessWritable",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermAccessWritable",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermAccessWritable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermAccessWritable",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Access Writable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermGroupExec",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermGroupExec",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermGroupExec"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermGroupExec",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Group Exec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermGroupRead",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermGroupRead",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermGroupRead"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermGroupRead",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Group Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermGroupWrite",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermGroupWrite",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermGroupWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermGroupWrite",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Group Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermOtherExec",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermOtherExec",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermOtherExec"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermOtherExec",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Other Exec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermOtherRead",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermOtherRead",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermOtherRead"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermOtherRead",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Other Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermOtherWrite",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermOtherWrite",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermOtherWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermOtherWrite",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Other Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermSGID",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermSGID",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermSGID"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermSGID",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm SGID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermSUID",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermSUID",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermSUID"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermSUID",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm SUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermSticky",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermSticky",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermSticky"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermSticky",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm Sticky",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermUserExec",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermUserExec",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermUserExec"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermUserExec",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm User Exec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermUserRead",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermUserRead",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermUserRead"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermUserRead",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm User Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:PermUserWrite",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "PermUserWrite",
        "fct-source": "src/System-Gnome-VFS-Constants.html#FilePermissions",
        "fct-type": "function",
        "title": "PermUserWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "PermUserWrite",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Perm User Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:SeekCurrent",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "SeekCurrent",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#SeekPosition",
        "fct-type": "function",
        "title": "SeekCurrent"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "SeekCurrent",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Seek Current",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:SeekEnd",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "SeekEnd",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#SeekPosition",
        "fct-type": "function",
        "title": "SeekEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "SeekEnd",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Seek End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:SeekStart",
      "description": {
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "SeekStart",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#SeekPosition",
        "fct-type": "function",
        "title": "SeekStart"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "SeekStart",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Seek Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eClose a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "Handle-\u003e IO ()",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Close Handle",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "close",
        "normalized": "Handle-\u003eIO()",
        "package": "gnomevfs",
        "partial": "",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:create",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a file at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e OpenMode-\u003e Bool-\u003e [FilePermissions]-\u003e IO Handle",
        "fct-type": "function",
        "title": "create"
      },
      "index": {
        "description": "Create file at textURI",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "create",
        "normalized": "TextURI-\u003eOpenMode-\u003eBool-\u003e[FilePermissions]-\u003eIO Handle",
        "package": "gnomevfs",
        "partial": "",
        "signature": "TextURI-\u003eOpenMode-\u003eBool-\u003e[FilePermissions]-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:createURI",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a file at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e OpenMode-\u003e Bool-\u003e [FilePermissions]-\u003e IO Handle",
        "fct-type": "function",
        "title": "createURI"
      },
      "index": {
        "description": "Create file at uri",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "createURI",
        "normalized": "URI-\u003eOpenMode-\u003eBool-\u003e[FilePermissions]-\u003eIO Handle",
        "package": "gnomevfs",
        "partial": "URI",
        "signature": "URI-\u003eOpenMode-\u003eBool-\u003e[FilePermissions]-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:forgetCache",
      "description": {
        "fct-descr": "\u003cp\u003eFree any cache associated with the file opened on \u003ccode\u003ehandle\u003c/code\u003e,\n in the region of \u003ccode\u003esize\u003c/code\u003e bytes starting at \u003ccode\u003eoffset\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "Handle -\u003e FileOffset -\u003e FileSize -\u003e IO ()",
        "fct-source": "src/System-Gnome-VFS-Ops.html#forgetCache",
        "fct-type": "function",
        "title": "forgetCache"
      },
      "index": {
        "description": "Free any cache associated with the file opened on handle in the region of size bytes starting at offset",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "forgetCache",
        "normalized": "Handle-\u003eFileOffset-\u003eFileSize-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Cache",
        "signature": "Handle-\u003eFileOffset-\u003eFileSize-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:getFileInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet the file information for the file at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "String -\u003e [FileInfoOptions] -\u003e IO FileInfo",
        "fct-source": "src/System-Gnome-VFS-Ops.html#getFileInfo",
        "fct-type": "function",
        "title": "getFileInfo"
      },
      "index": {
        "description": "Get the file information for the file at textURI",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "getFileInfo",
        "normalized": "String-\u003e[FileInfoOptions]-\u003eIO FileInfo",
        "package": "gnomevfs",
        "partial": "File Info",
        "signature": "String-\u003e[FileInfoOptions]-\u003eIO FileInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:getFileInfoFromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eGet the file information for the file opened on \u003ccode\u003ehandle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "Handle -\u003e [FileInfoOptions] -\u003e IO FileInfo",
        "fct-source": "src/System-Gnome-VFS-Ops.html#getFileInfoFromHandle",
        "fct-type": "function",
        "title": "getFileInfoFromHandle"
      },
      "index": {
        "description": "Get the file information for the file opened on handle",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "getFileInfoFromHandle",
        "normalized": "Handle-\u003e[FileInfoOptions]-\u003eIO FileInfo",
        "package": "gnomevfs",
        "partial": "File Info From Handle",
        "signature": "Handle-\u003e[FileInfoOptions]-\u003eIO FileInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:getFileInfoURI",
      "description": {
        "fct-descr": "\u003cp\u003eGet the file information for the file at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "URI -\u003e [FileInfoOptions] -\u003e IO FileInfo",
        "fct-source": "src/System-Gnome-VFS-Ops.html#getFileInfoURI",
        "fct-type": "function",
        "title": "getFileInfoURI"
      },
      "index": {
        "description": "Get the file information for the file at uri",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "getFileInfoURI",
        "normalized": "URI-\u003e[FileInfoOptions]-\u003eIO FileInfo",
        "package": "gnomevfs",
        "partial": "File Info URI",
        "signature": "URI-\u003e[FileInfoOptions]-\u003eIO FileInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eOpen the file at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e OpenMode-\u003e IO Handle",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "Open the file at textURI",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "open",
        "normalized": "TextURI-\u003eOpenMode-\u003eIO Handle",
        "package": "gnomevfs",
        "partial": "",
        "signature": "TextURI-\u003eOpenMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:openURI",
      "description": {
        "fct-descr": "\u003cp\u003eOpen the file at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e OpenMode-\u003e IO Handle",
        "fct-type": "function",
        "title": "openURI"
      },
      "index": {
        "description": "Open the file at uri",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "openURI",
        "normalized": "URI-\u003eOpenMode-\u003eIO Handle",
        "package": "gnomevfs",
        "partial": "URI",
        "signature": "URI-\u003eOpenMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:seek",
      "description": {
        "fct-descr": "\u003cp\u003eSeek to a position in a file.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "Handle-\u003e SeekPosition-\u003e FileOffset-\u003e IO ()",
        "fct-type": "function",
        "title": "seek"
      },
      "index": {
        "description": "Seek to position in file",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "seek",
        "normalized": "Handle-\u003eSeekPosition-\u003eFileOffset-\u003eIO()",
        "package": "gnomevfs",
        "partial": "",
        "signature": "Handle-\u003eSeekPosition-\u003eFileOffset-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:setFileInfo",
      "description": {
        "fct-descr": "\u003cp\u003eSet the file information for the file at \u003ccode\u003etextURI\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "String -\u003e FileInfo -\u003e [SetFileInfoMask] -\u003e IO ()",
        "fct-source": "src/System-Gnome-VFS-Ops.html#setFileInfo",
        "fct-type": "function",
        "title": "setFileInfo"
      },
      "index": {
        "description": "Set the file information for the file at textURI",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "setFileInfo",
        "normalized": "String-\u003eFileInfo-\u003e[SetFileInfoMask]-\u003eIO()",
        "package": "gnomevfs",
        "partial": "File Info",
        "signature": "String-\u003eFileInfo-\u003e[SetFileInfoMask]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:setFileInfoURI",
      "description": {
        "fct-descr": "\u003cp\u003eSet the file information for the file at \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "URI -\u003e FileInfo -\u003e [SetFileInfoMask] -\u003e IO ()",
        "fct-source": "src/System-Gnome-VFS-Ops.html#setFileInfoURI",
        "fct-type": "function",
        "title": "setFileInfoURI"
      },
      "index": {
        "description": "Set the file information for the file at uri",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "setFileInfoURI",
        "normalized": "URI-\u003eFileInfo-\u003e[SetFileInfoMask]-\u003eIO()",
        "package": "gnomevfs",
        "partial": "File Info URI",
        "signature": "URI-\u003eFileInfo-\u003e[SetFileInfoMask]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current position in the file.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "Handle-\u003e IO FileSize",
        "fct-type": "function",
        "title": "tell"
      },
      "index": {
        "description": "Return the current position in the file",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "tell",
        "normalized": "Handle-\u003eIO FileSize",
        "package": "gnomevfs",
        "partial": "",
        "signature": "Handle-\u003eIO FileSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:truncate",
      "description": {
        "fct-descr": "\u003cp\u003eTruncate the file at \u003ccode\u003etextURI\u003c/code\u003e to \u003ccode\u003elength\u003c/code\u003e bytes.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "String -\u003e FileSize -\u003e IO ()",
        "fct-source": "src/System-Gnome-VFS-Ops.html#truncate",
        "fct-type": "function",
        "title": "truncate"
      },
      "index": {
        "description": "Truncate the file at textURI to length bytes",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "truncate",
        "normalized": "String-\u003eFileSize-\u003eIO()",
        "package": "gnomevfs",
        "partial": "",
        "signature": "String-\u003eFileSize-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:truncateHandle",
      "description": {
        "fct-descr": "\u003cp\u003eTruncate the file opened on \u003ccode\u003ehandle\u003c/code\u003e to \u003ccode\u003elength\u003c/code\u003e bytes.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "Handle -\u003e FileSize -\u003e IO ()",
        "fct-source": "src/System-Gnome-VFS-Ops.html#truncateHandle",
        "fct-type": "function",
        "title": "truncateHandle"
      },
      "index": {
        "description": "Truncate the file opened on handle to length bytes",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "truncateHandle",
        "normalized": "Handle-\u003eFileSize-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Handle",
        "signature": "Handle-\u003eFileSize-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Ops.html#v:truncateURI",
      "description": {
        "fct-descr": "\u003cp\u003eTruncate the file at \u003ccode\u003euri\u003c/code\u003e to \u003ccode\u003elength\u003c/code\u003e bytes.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Ops",
        "fct-package": "gnomevfs",
        "fct-signature": "URI -\u003e FileSize -\u003e IO ()",
        "fct-source": "src/System-Gnome-VFS-Ops.html#truncateURI",
        "fct-type": "function",
        "title": "truncateURI"
      },
      "index": {
        "description": "Truncate the file at uri to length bytes",
        "hierarchy": "System Gnome VFS Ops",
        "module": "System.Gnome.VFS.Ops",
        "name": "truncateURI",
        "normalized": "URI-\u003eFileSize-\u003eIO()",
        "package": "gnomevfs",
        "partial": "URI",
        "signature": "URI-\u003eFileSize-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-URI.html",
        "fct-type": "module",
        "title": "URI"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URI",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#t:TextURI",
      "description": {
        "fct-descr": "\u003cp\u003eA string that can be passed to \u003ccode\u003euriFromString\u003c/code\u003e to create a valid\n \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#TextURI",
        "fct-type": "type",
        "title": "TextURI"
      },
      "index": {
        "description": "string that can be passed to uriFromString to create valid URI",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "TextURI",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Text URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#t:ToplevelURI",
      "description": {
        "fct-descr": "\u003cp\u003eThe toplevel URI element used to access resources stored on a\n remote server.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#ToplevelURI",
        "fct-type": "data",
        "title": "ToplevelURI"
      },
      "index": {
        "description": "The toplevel URI element used to access resources stored on remote server",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "ToplevelURI",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Toplevel URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#t:URI",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e is a semi-textual representation of a uniform\n resource identifier. It contains the information about a resource\n location encoded as canononicalized text, but also holds extra\n information about the context in which the URI is used.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#URI",
        "fct-type": "data",
        "title": "URI"
      },
      "index": {
        "description": "URI is semi-textual representation of uniform resource identifier It contains the information about resource location encoded as canononicalized text but also holds extra information about the context in which the URI is used",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URI",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#t:URIHideOptions",
      "description": {
        "fct-descr": "\u003cp\u003eFlags specifying which fields of a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e should be hidden when\n converted to a string using \u003ccode\u003euriToString\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
        "fct-type": "data",
        "title": "URIHideOptions"
      },
      "index": {
        "description": "Flags specifying which fields of URI should be hidden when converted to string using uriToString",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URIHideOptions",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URIHide Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideFragmentIdentifier",
      "description": {
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URIHideFragmentIdentifier",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
        "fct-type": "function",
        "title": "URIHideFragmentIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URIHideFragmentIdentifier",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URIHide Fragment Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideHostName",
      "description": {
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URIHideHostName",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
        "fct-type": "function",
        "title": "URIHideHostName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URIHideHostName",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URIHide Host Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideHostPort",
      "description": {
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URIHideHostPort",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
        "fct-type": "function",
        "title": "URIHideHostPort"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URIHideHostPort",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URIHide Host Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideNone",
      "description": {
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URIHideNone",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
        "fct-type": "function",
        "title": "URIHideNone"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URIHideNone",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URIHide None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHidePassword",
      "description": {
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URIHidePassword",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
        "fct-type": "function",
        "title": "URIHidePassword"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URIHidePassword",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URIHide Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideToplevelMethod",
      "description": {
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URIHideToplevelMethod",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
        "fct-type": "function",
        "title": "URIHideToplevelMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URIHideToplevelMethod",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URIHide Toplevel Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:URIHideUserName",
      "description": {
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URIHideUserName",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#URIHideOptions",
        "fct-type": "function",
        "title": "URIHideUserName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "URIHideUserName",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "URIHide User Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriAppendFileName",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new URI obtained by appending \u003ccode\u003efileName\u003c/code\u003e to \u003ccode\u003euri\u003c/code\u003e. This\n will take care of adding an appropriate directory separator\n between the end of \u003ccode\u003euri\u003c/code\u003e and the start of \u003ccode\u003efileName\u003c/code\u003e if\n necessary. \u003ccode\u003efileName\u003c/code\u003e might, for instance, be the result of a call\n to \u003ccode\u003eSystem.Posix.Directory.readDirStream\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the resulting URI is not\n valid.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI -\u003e FilePath -\u003e Maybe URI",
        "fct-source": "src/System-Gnome-VFS-URI.html#uriAppendFileName",
        "fct-type": "function",
        "title": "uriAppendFileName"
      },
      "index": {
        "description": "Create new URI obtained by appending fileName to uri This will take care of adding an appropriate directory separator between the end of uri and the start of fileName if necessary fileName might for instance be the result of call to System.Posix.Directory.readDirStream This function will return Nothing if the resulting URI is not valid",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriAppendFileName",
        "normalized": "URI-\u003eFilePath-\u003eMaybe URI",
        "package": "gnomevfs",
        "partial": "Append File Name",
        "signature": "URI-\u003eFilePath-\u003eMaybe URI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriAppendPath",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new uri obtained by appending \u003ccode\u003epath\u003c/code\u003e to \u003ccode\u003euri\u003c/code\u003e. This will\n take care of adding an appropriate directory separator between\n the end of \u003ccode\u003euri\u003c/code\u003e and the start of \u003ccode\u003epath\u003c/code\u003e if necessary, as well as\n escaping \u003ccode\u003epath\u003c/code\u003e as necessary.\n\u003c/p\u003e\u003cp\u003eThis function will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the resulting URI is not\n valid.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e FilePath-\u003e Maybe URI",
        "fct-type": "function",
        "title": "uriAppendPath"
      },
      "index": {
        "description": "Create new uri obtained by appending path to uri This will take care of adding an appropriate directory separator between the end of uri and the start of path if necessary as well as escaping path as necessary This function will return Nothing if the resulting URI is not valid",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriAppendPath",
        "normalized": "URI-\u003eFilePath-\u003eMaybe URI",
        "package": "gnomevfs",
        "partial": "Append Path",
        "signature": "URI-\u003eFilePath-\u003eMaybe URI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriAppendString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new URI obtained by appending \u003ccode\u003euriFragment\u003c/code\u003e to \u003ccode\u003euri\u003c/code\u003e. This\n will take care of adding an appropriate directory separator\n between the end of \u003ccode\u003euri\u003c/code\u003e and the start of \u003ccode\u003euriFragment\u003c/code\u003e if\n necessary.\n\u003c/p\u003e\u003cp\u003eThis function will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the resulting URI is not\n valid.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e String-\u003e Maybe URI",
        "fct-type": "function",
        "title": "uriAppendString"
      },
      "index": {
        "description": "Create new URI obtained by appending uriFragment to uri This will take care of adding an appropriate directory separator between the end of uri and the start of uriFragment if necessary This function will return Nothing if the resulting URI is not valid",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriAppendString",
        "normalized": "URI-\u003eString-\u003eMaybe URI",
        "package": "gnomevfs",
        "partial": "Append String",
        "signature": "URI-\u003eString-\u003eMaybe URI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriEqual",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003es for equality.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e URI-\u003e Bool",
        "fct-type": "function",
        "title": "uriEqual"
      },
      "index": {
        "description": "Compare two URI for equality",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriEqual",
        "normalized": "URI-\u003eURI-\u003eBool",
        "package": "gnomevfs",
        "partial": "Equal",
        "signature": "URI-\u003eURI-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriExtractDirname",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the name of the directory in which the file pointed to by\n \u003ccode\u003euri\u003c/code\u003e is stored as a string. The string will end with a directory\n separator.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe FilePath",
        "fct-type": "function",
        "title": "uriExtractDirname"
      },
      "index": {
        "description": "Extract the name of the directory in which the file pointed to by uri is stored as string The string will end with directory separator",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriExtractDirname",
        "normalized": "URI-\u003eMaybe FilePath",
        "package": "gnomevfs",
        "partial": "Extract Dirname",
        "signature": "URI-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriExtractShortName",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve base file name for \u003ccode\u003euri\u003c/code\u003e, ignoring any trailing path\n separators. This matches the XPG definition of basename, but not\n \u003ccode\u003eSystem.FilePath.basename\u003c/code\u003e. This is often useful when you want\n the name of something that's pointed to by a URI, and don't care\n whether the uri has a directory or file form. If \u003ccode\u003euri\u003c/code\u003e points to\n the root of a domain, returns the host name. If there's no host\n name, returns the path separator.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003euriExtractShortPathName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e String",
        "fct-type": "function",
        "title": "uriExtractShortName"
      },
      "index": {
        "description": "Retrieve base file name for uri ignoring any trailing path separators This matches the XPG definition of basename but not System.FilePath.basename This is often useful when you want the name of something that pointed to by URI and don care whether the uri has directory or file form If uri points to the root of domain returns the host name If there no host name returns the path separator See also uriExtractShortPathName",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriExtractShortName",
        "normalized": "URI-\u003eString",
        "package": "gnomevfs",
        "partial": "Extract Short Name",
        "signature": "URI-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriExtractShortPathName",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve base file name for \u003ccode\u003euri\u003c/code\u003e, ignoring any trailing path\n separators. This matches the XPG definition of basename, but not\n \u003ccode\u003eSystem.FilePath.basename\u003c/code\u003e. This is often useful when you want\n the name of something that's pointed to by a URI, and don't care\n whether the uri has a directory or file form. If \u003ccode\u003euri\u003c/code\u003e points to\n the root of any domain, returns the path separator.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003euriExtractShortName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e String",
        "fct-type": "function",
        "title": "uriExtractShortPathName"
      },
      "index": {
        "description": "Retrieve base file name for uri ignoring any trailing path separators This matches the XPG definition of basename but not System.FilePath.basename This is often useful when you want the name of something that pointed to by URI and don care whether the uri has directory or file form If uri points to the root of any domain returns the path separator See also uriExtractShortName",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriExtractShortPathName",
        "normalized": "URI-\u003eString",
        "package": "gnomevfs",
        "partial": "Extract Short Path Name",
        "signature": "URI-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriFromString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003etextURI\u003c/code\u003e. Unsupported and unsafe\n methods are not allowed and will result in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e being\n returned. URL transforms are allowed.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI -\u003e Maybe URI",
        "fct-source": "src/System-Gnome-VFS-URI.html#uriFromString",
        "fct-type": "function",
        "title": "uriFromString"
      },
      "index": {
        "description": "Create new URI from textURI Unsupported and unsafe methods are not allowed and will result in Nothing being returned URL transforms are allowed",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriFromString",
        "normalized": "TextURI-\u003eMaybe URI",
        "package": "gnomevfs",
        "partial": "From String",
        "signature": "TextURI-\u003eMaybe URI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetFragmentIdentifier",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the fragment identifier for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe String",
        "fct-type": "function",
        "title": "uriGetFragmentIdentifier"
      },
      "index": {
        "description": "Retrieve the fragment identifier for uri",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriGetFragmentIdentifier",
        "normalized": "URI-\u003eMaybe String",
        "package": "gnomevfs",
        "partial": "Get Fragment Identifier",
        "signature": "URI-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetHostName",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the hostname for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe String",
        "fct-type": "function",
        "title": "uriGetHostName"
      },
      "index": {
        "description": "Retrieve the hostname for uri",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriGetHostName",
        "normalized": "URI-\u003eMaybe String",
        "package": "gnomevfs",
        "partial": "Get Host Name",
        "signature": "URI-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetHostPort",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the host port for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Word",
        "fct-type": "function",
        "title": "uriGetHostPort"
      },
      "index": {
        "description": "Retrieve the host port for uri",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriGetHostPort",
        "normalized": "URI-\u003eWord",
        "package": "gnomevfs",
        "partial": "Get Host Port",
        "signature": "URI-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetParent",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve \u003ccode\u003euri\u003c/code\u003e's parent URI.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe URI",
        "fct-type": "function",
        "title": "uriGetParent"
      },
      "index": {
        "description": "Retrieve uri parent URI",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriGetParent",
        "normalized": "URI-\u003eMaybe URI",
        "package": "gnomevfs",
        "partial": "Get Parent",
        "signature": "URI-\u003eMaybe URI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetPassword",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the password for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe String",
        "fct-type": "function",
        "title": "uriGetPassword"
      },
      "index": {
        "description": "Retrieve the password for uri",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriGetPassword",
        "normalized": "URI-\u003eMaybe String",
        "package": "gnomevfs",
        "partial": "Get Password",
        "signature": "URI-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetPath",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the path name for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe FilePath",
        "fct-type": "function",
        "title": "uriGetPath"
      },
      "index": {
        "description": "Retrieve the path name for uri",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriGetPath",
        "normalized": "URI-\u003eMaybe FilePath",
        "package": "gnomevfs",
        "partial": "Get Path",
        "signature": "URI-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetScheme",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the scheme for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe String",
        "fct-type": "function",
        "title": "uriGetScheme"
      },
      "index": {
        "description": "Retrieve the scheme for uri",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriGetScheme",
        "normalized": "URI-\u003eMaybe String",
        "package": "gnomevfs",
        "partial": "Get Scheme",
        "signature": "URI-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetToplevel",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve \u003ccode\u003euri\u003c/code\u003e's toplevel URI.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e ToplevelURI",
        "fct-type": "function",
        "title": "uriGetToplevel"
      },
      "index": {
        "description": "Retrieve uri toplevel URI",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriGetToplevel",
        "normalized": "URI-\u003eToplevelURI",
        "package": "gnomevfs",
        "partial": "Get Toplevel",
        "signature": "URI-\u003eToplevelURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriGetUserName",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the user name for \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe String",
        "fct-type": "function",
        "title": "uriGetUserName"
      },
      "index": {
        "description": "Retrieve the user name for uri",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriGetUserName",
        "normalized": "URI-\u003eMaybe String",
        "package": "gnomevfs",
        "partial": "Get User Name",
        "signature": "URI-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriHasParent",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether \u003ccode\u003euri\u003c/code\u003e has a parent or not.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Bool",
        "fct-type": "function",
        "title": "uriHasParent"
      },
      "index": {
        "description": "Check whether uri has parent or not",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriHasParent",
        "normalized": "URI-\u003eBool",
        "package": "gnomevfs",
        "partial": "Has Parent",
        "signature": "URI-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriIsLocal",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if \u003ccode\u003euri\u003c/code\u003e is a local URI. Note that the return value of this\n function entirely depends on the method associated with\n the URI. It is up to the method author to distinguish between\n remote URIs and URIs referring to entities on the local computer.\n\u003c/p\u003e\u003cp\u003eWarning, this can be slow, as it does I/O to detect things like\n NFS mounts.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e IO Bool",
        "fct-type": "function",
        "title": "uriIsLocal"
      },
      "index": {
        "description": "Check if uri is local URI Note that the return value of this function entirely depends on the method associated with the URI It is up to the method author to distinguish between remote URIs and URIs referring to entities on the local computer Warning this can be slow as it does to detect things like NFS mounts",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriIsLocal",
        "normalized": "URI-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Is Local",
        "signature": "URI-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriIsParent",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if \u003ccode\u003epossibleChild\u003c/code\u003e is contained in \u003ccode\u003epossibleParent\u003c/code\u003e. If\n \u003ccode\u003erecursive\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, just try the immediate parent; otherwise\n search up through the heirarchy.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e URI-\u003e Bool-\u003e Bool",
        "fct-type": "function",
        "title": "uriIsParent"
      },
      "index": {
        "description": "Check if possibleChild is contained in possibleParent If recursive is False just try the immediate parent otherwise search up through the heirarchy",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriIsParent",
        "normalized": "URI-\u003eURI-\u003eBool-\u003eBool",
        "package": "gnomevfs",
        "partial": "Is Parent",
        "signature": "URI-\u003eURI-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriListParse",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts a list of URIs from a standard \u003ccode\u003etext/uri-list\u003c/code\u003e, such as\n one would get on a drop operation.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e [URI]",
        "fct-type": "function",
        "title": "uriListParse"
      },
      "index": {
        "description": "Extracts list of URIs from standard text uri-list such as one would get on drop operation",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriListParse",
        "normalized": "String-\u003e[URI]",
        "package": "gnomevfs",
        "partial": "List Parse",
        "signature": "String-\u003e[URI]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriMakeFullFromRelative",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a full URI given a full base URI, and a secondary URI\n which may be relative.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e String-\u003e Maybe String",
        "fct-type": "function",
        "title": "uriMakeFullFromRelative"
      },
      "index": {
        "description": "Returns full URI given full base URI and secondary URI which may be relative",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriMakeFullFromRelative",
        "normalized": "String-\u003eString-\u003eMaybe String",
        "package": "gnomevfs",
        "partial": "Make Full From Relative",
        "signature": "String-\u003eString-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriResolveRelative",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new uri from \u003ccode\u003erelativeReference\u003c/code\u003e, relative to\n \u003ccode\u003ebase\u003c/code\u003e. The resolution algorithm in some aspects follows RFC\n 2396, section 5.2, but is not identical due to some extra\n assumptions GnomeVFS makes about URIs.\n\u003c/p\u003e\u003cp\u003eIf relative_reference begins with a valid scheme identifier\n followed by \u003ccode\u003e':'\u003c/code\u003e, it is assumed to refer to an absolute URI, and a\n \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e is created from it using \u003ccode\u003e\u003ca\u003euriFromString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOtherwise, depending on its precise syntax, it inherits some\n aspects of the parent URI, but the parents' fragment and query\n components are ignored.\n\u003c/p\u003e\u003cp\u003eIf relative_reference begins with \u003ccode\u003e\"//\"\u003c/code\u003e, it only inherits the\n base scheme; if it begins with \u003ccode\u003e'/'\u003c/code\u003e (i.e., it is an absolute\n path reference), it inherits everything except the base\n path. Otherwise, it replaces the part of base after the last\n \u003ccode\u003e'/'\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: This function should not be used by application authors\n unless they expect very distinct semantics. Instead, authors\n should use \u003ccode\u003e\u003ca\u003euriAppendFileName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euriAppendPath\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003euriAppendString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003euriResolveSymbolicLink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e String-\u003e Maybe URI",
        "fct-type": "function",
        "title": "uriResolveRelative"
      },
      "index": {
        "description": "Create new uri from relativeReference relative to base The resolution algorithm in some aspects follows RFC section but is not identical due to some extra assumptions GnomeVFS makes about URIs If relative reference begins with valid scheme identifier followed by it is assumed to refer to an absolute URI and URI is created from it using uriFromString Otherwise depending on its precise syntax it inherits some aspects of the parent URI but the parents fragment and query components are ignored If relative reference begins with it only inherits the base scheme if it begins with i.e it is an absolute path reference it inherits everything except the base path Otherwise it replaces the part of base after the last Note This function should not be used by application authors unless they expect very distinct semantics Instead authors should use uriAppendFileName uriAppendPath uriAppendString or uriResolveSymbolicLink",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriResolveRelative",
        "normalized": "URI-\u003eString-\u003eMaybe URI",
        "package": "gnomevfs",
        "partial": "Resolve Relative",
        "signature": "URI-\u003eString-\u003eMaybe URI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriResolveSymbolicLink",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new uri from \u003ccode\u003esymbolicLink\u003c/code\u003e, relative to \u003ccode\u003ebase\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf symbolic_link begins with a \u003ccode\u003e'/'\u003c/code\u003e, it replaces the path of base,\n otherwise it is appended after the last \u003ccode\u003e'/'\u003c/code\u003e character of base.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI -\u003e String -\u003e Maybe URI",
        "fct-source": "src/System-Gnome-VFS-URI.html#uriResolveSymbolicLink",
        "fct-type": "function",
        "title": "uriResolveSymbolicLink"
      },
      "index": {
        "description": "Create new uri from symbolicLink relative to base If symbolic link begins with it replaces the path of base otherwise it is appended after the last character of base",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriResolveSymbolicLink",
        "normalized": "URI-\u003eString-\u003eMaybe URI",
        "package": "gnomevfs",
        "partial": "Resolve Symbolic Link",
        "signature": "URI-\u003eString-\u003eMaybe URI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriSetHostName",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003euri\u003c/code\u003e, replacing the host name by \u003ccode\u003ehostName\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe String-\u003e URI",
        "fct-type": "function",
        "title": "uriSetHostName"
      },
      "index": {
        "description": "Create new URI using uri replacing the host name by hostName",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriSetHostName",
        "normalized": "URI-\u003eMaybe String-\u003eURI",
        "package": "gnomevfs",
        "partial": "Set Host Name",
        "signature": "URI-\u003eMaybe String-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriSetHostPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003euri\u003c/code\u003e, replacing the host port by \u003ccode\u003ehostPort\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ehostPort\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e, use the default port for \u003ccode\u003euri\u003c/code\u003e's toplevel\n access method.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Word-\u003e URI",
        "fct-type": "function",
        "title": "uriSetHostPort"
      },
      "index": {
        "description": "Create new URI using uri replacing the host port by hostPort If hostPort is use the default port for uri toplevel access method",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriSetHostPort",
        "normalized": "URI-\u003eWord-\u003eURI",
        "package": "gnomevfs",
        "partial": "Set Host Port",
        "signature": "URI-\u003eWord-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriSetPassword",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003euri\u003c/code\u003e, replacing the password by \u003ccode\u003epassword\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe String-\u003e URI",
        "fct-type": "function",
        "title": "uriSetPassword"
      },
      "index": {
        "description": "Create new URI using uri replacing the password by password",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriSetPassword",
        "normalized": "URI-\u003eMaybe String-\u003eURI",
        "package": "gnomevfs",
        "partial": "Set Password",
        "signature": "URI-\u003eMaybe String-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriSetUserName",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003euri\u003c/code\u003e, replacing the user name by \u003ccode\u003euserName\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e Maybe String-\u003e URI",
        "fct-type": "function",
        "title": "uriSetUserName"
      },
      "index": {
        "description": "Create new URI using uri replacing the user name by userName",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriSetUserName",
        "normalized": "URI-\u003eMaybe String-\u003eURI",
        "package": "gnomevfs",
        "partial": "Set User Name",
        "signature": "URI-\u003eMaybe String-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-URI.html#v:uriToString",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate \u003ccode\u003euri\u003c/code\u003e into a printable string. The string will not\n contain the URI elements specified by \u003ccode\u003ehideOptions\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003efile:\u003c/code\u003e URI on Win32 might look like\n \u003ccode\u003efile:///x:/foo/bar.txt\u003c/code\u003e. Note that the part after\n \u003ccode\u003efile://\u003c/code\u003e is not a legal file name, you need to remove the \u003ccode\u003e/\u003c/code\u003e\n in front of the drive letter. This function does that\n automatically if \u003ccode\u003ehideOptions\u003c/code\u003e specifies that the toplevel\n method, user name, password, host name and host port should be\n hidden.\n\u003c/p\u003e\u003cp\u003eOn the other hand, a \u003ccode\u003efile:\u003c/code\u003e URI for a UNC path looks like\n \u003ccode\u003efile:////server/share/foo/bar.txt\u003c/code\u003e, and in that case the part\n after \u003ccode\u003efile://\u003c/code\u003e is the correct file name.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.URI",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e URIHideOptions-\u003e TextURI",
        "fct-type": "function",
        "title": "uriToString"
      },
      "index": {
        "description": "Translate uri into printable string The string will not contain the URI elements specified by hideOptions file URI on Win32 might look like file foo bar.txt Note that the part after file is not legal file name you need to remove the in front of the drive letter This function does that automatically if hideOptions specifies that the toplevel method user name password host name and host port should be hidden On the other hand file URI for UNC path looks like file server share foo bar.txt and in that case the part after file is the correct file name",
        "hierarchy": "System Gnome VFS URI",
        "module": "System.Gnome.VFS.URI",
        "name": "uriToString",
        "normalized": "URI-\u003eURIHideOptions-\u003eTextURI",
        "package": "gnomevfs",
        "partial": "To String",
        "signature": "URI-\u003eURIHideOptions-\u003eTextURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "Util",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapeHostAndPathString",
      "description": {
        "fct-descr": "\u003cp\u003eEscapes path, replacing only special characters that would not be\n found in a path or host name (so \u003ccode\u003e'/'\u003c/code\u003e, \u003ccode\u003e'&'\u003c/code\u003e, \u003ccode\u003e'='\u003c/code\u003e, \u003ccode\u003e':'\u003c/code\u003e and \u003ccode\u003e'@'\u003c/code\u003e will\n not be escaped by this function).\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "FilePath-\u003e String",
        "fct-type": "function",
        "title": "escapeHostAndPathString"
      },
      "index": {
        "description": "Escapes path replacing only special characters that would not be found in path or host name so and will not be escaped by this function",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "escapeHostAndPathString",
        "normalized": "FilePath-\u003eString",
        "package": "gnomevfs",
        "partial": "Host And Path String",
        "signature": "FilePath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapePathString",
      "description": {
        "fct-descr": "\u003cp\u003eEscapes path, replacing only special characters that would not be\n found in paths (so \u003ccode\u003e'/'\u003c/code\u003e, \u003ccode\u003e'&'\u003c/code\u003e, and \u003ccode\u003e'='\u003c/code\u003e will not be escaped by this\n function).\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "FilePath-\u003e String",
        "fct-type": "function",
        "title": "escapePathString"
      },
      "index": {
        "description": "Escapes path replacing only special characters that would not be found in paths so and will not be escaped by this function",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "escapePathString",
        "normalized": "FilePath-\u003eString",
        "package": "gnomevfs",
        "partial": "Path String",
        "signature": "FilePath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapeSet",
      "description": {
        "fct-descr": "\u003cp\u003eEscapes the characters listed in \u003ccode\u003ematchSet\u003c/code\u003e in \u003ccode\u003estring\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e String-\u003e String",
        "fct-type": "function",
        "title": "escapeSet"
      },
      "index": {
        "description": "Escapes the characters listed in matchSet in string",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "escapeSet",
        "normalized": "String-\u003eString-\u003eString",
        "package": "gnomevfs",
        "partial": "Set",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapeSlashes",
      "description": {
        "fct-descr": "\u003cp\u003eEscapes only \u003ccode\u003e'/'\u003c/code\u003e and \u003ccode\u003e'%'\u003c/code\u003e characters in \u003ccode\u003estring\u003c/code\u003e, replacing\n them with their escape sequence equivalents.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e String",
        "fct-type": "function",
        "title": "escapeSlashes"
      },
      "index": {
        "description": "Escapes only and characters in string replacing them with their escape sequence equivalents",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "escapeSlashes",
        "normalized": "String-\u003eString",
        "package": "gnomevfs",
        "partial": "Slashes",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:escapeString",
      "description": {
        "fct-descr": "\u003cp\u003eEscapes \u003ccode\u003estring\u003c/code\u003e, replacing any and all special characters with\n equivalent escape sequences.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e String",
        "fct-type": "function",
        "title": "escapeString"
      },
      "index": {
        "description": "Escapes string replacing any and all special characters with equivalent escape sequences",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "escapeString",
        "normalized": "String-\u003eString",
        "package": "gnomevfs",
        "partial": "String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:expandInitialTilde",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003epath\u003c/code\u003e begins with a tilde, representing the user's home\n directory, expand it to the actual directory.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String -\u003e IO String",
        "fct-source": "src/System-Gnome-VFS-Util.html#expandInitialTilde",
        "fct-type": "function",
        "title": "expandInitialTilde"
      },
      "index": {
        "description": "If path begins with tilde representing the user home directory expand it to the actual directory",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "expandInitialTilde",
        "normalized": "String-\u003eIO String",
        "package": "gnomevfs",
        "partial": "Initial Tilde",
        "signature": "String-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:formatFileSizeForDisplay",
      "description": {
        "fct-descr": "\u003cp\u003eFormats \u003ccode\u003esize\u003c/code\u003e so that it is easy for the user to read. Gives the\n size in bytes, kilobytes, megabytes or gigabytes, choosing\n whatever is appropriate.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "FileSize-\u003e String",
        "fct-type": "function",
        "title": "formatFileSizeForDisplay"
      },
      "index": {
        "description": "Formats size so that it is easy for the user to read Gives the size in bytes kilobytes megabytes or gigabytes choosing whatever is appropriate",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "formatFileSizeForDisplay",
        "normalized": "FileSize-\u003eString",
        "package": "gnomevfs",
        "partial": "File Size For Display",
        "signature": "FileSize-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:formatURIForDisplay",
      "description": {
        "fct-descr": "\u003cp\u003eFilter, modify, unescape, and change \u003ccode\u003etextURI\u003c/code\u003e to make it appropriate\n for display to users.\n\u003c/p\u003e\u003cp\u003eRules: A \u003ccode\u003efile:\u003c/code\u003e URI without fragments should appear as a local\n path. A \u003ccode\u003efile:\u003c/code\u003e URI with fragments should appear as \u003ccode\u003efile:uri\u003c/code\u003e. All\n other URIs appear as expected.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e Maybe String",
        "fct-type": "function",
        "title": "formatURIForDisplay"
      },
      "index": {
        "description": "Filter modify unescape and change textURI to make it appropriate for display to users Rules file URI without fragments should appear as local path file URI with fragments should appear as file uri All other URIs appear as expected",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "formatURIForDisplay",
        "normalized": "TextURI-\u003eMaybe String",
        "package": "gnomevfs",
        "partial": "URIFor Display",
        "signature": "TextURI-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:getLocalPathFromURI",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a local path for a uri.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003euri\u003c/code\u003e is not a \u003ccode\u003efile:///\u003c/code\u003e URI, or it contains a fragment\n identifier or is chained, this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e Maybe FilePath",
        "fct-type": "function",
        "title": "getLocalPathFromURI"
      },
      "index": {
        "description": "Create local path for uri If uri is not file URI or it contains fragment identifier or is chained this function returns Nothing",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "getLocalPathFromURI",
        "normalized": "TextURI-\u003eMaybe FilePath",
        "package": "gnomevfs",
        "partial": "Local Path From URI",
        "signature": "TextURI-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:getURIFromLocalPath",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003efile:///\u003c/code\u003e URI for the local path \u003ccode\u003elocalFullPath\u003c/code\u003e,\n such as a path provided by\n \u003ccode\u003eGraphics.UI.Gtk.Selectors.FileChooser.fileChooserGetFilename\u003c/code\u003e. The\n resulting URI may be provided, for instance, to\n \u003ccode\u003eSystem.Gnome.VFS.URI.uriFromString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn Windows \u003ccode\u003elocalFullPath\u003c/code\u003e should be in the UTF-8 encoding, and\n can start with a drive letter, but doesn't have to.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "FilePath-\u003e TextURI",
        "fct-type": "function",
        "title": "getURIFromLocalPath"
      },
      "index": {
        "description": "Returns file URI for the local path localFullPath such as path provided by Graphics.UI.Gtk.Selectors.FileChooser.fileChooserGetFilename The resulting URI may be provided for instance to System.Gnome.VFS.URI.uriFromString On Windows localFullPath should be in the UTF-8 encoding and can start with drive letter but doesn have to",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "getURIFromLocalPath",
        "normalized": "FilePath-\u003eTextURI",
        "package": "gnomevfs",
        "partial": "URIFrom Local Path",
        "signature": "FilePath-\u003eTextURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:getURIScheme",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the scheme used in \u003ccode\u003euri\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e Maybe String",
        "fct-type": "function",
        "title": "getURIScheme"
      },
      "index": {
        "description": "Retrieves the scheme used in uri",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "getURIScheme",
        "normalized": "TextURI-\u003eMaybe String",
        "package": "gnomevfs",
        "partial": "URIScheme",
        "signature": "TextURI-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:getVolumeFreeSpace",
      "description": {
        "fct-descr": "\u003cp\u003eStores the amount of free space in bytes on \u003ccode\u003euri\u003c/code\u003e's volume in\n | size.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e IO FileSize",
        "fct-type": "function",
        "title": "getVolumeFreeSpace"
      },
      "index": {
        "description": "Stores the amount of free space in bytes on uri volume in size",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "getVolumeFreeSpace",
        "normalized": "URI-\u003eIO FileSize",
        "package": "gnomevfs",
        "partial": "Volume Free Space",
        "signature": "URI-\u003eIO FileSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:iconPathFromFilename",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the icon path for \u003ccode\u003efilename\u003c/code\u003e. Example:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiconPathFromFilename\u003c/a\u003e\u003c/code\u003e \"nautilus/nautilus-desktop.png\"\u003c/code\u003e will\n return a string forming the full path of the file\n \u003ccode\u003enautilus-desktop.png\u003c/code\u003e, i.e.\n \u003ccode\u003e${prefix}/share/pixmaps/nautilus/nautilus-desktop.png\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e IO String",
        "fct-type": "function",
        "title": "iconPathFromFilename"
      },
      "index": {
        "description": "Returns the icon path for filename Example iconPathFromFilename nautilus nautilus-desktop.png will return string forming the full path of the file nautilus-desktop.png i.e prefix share pixmaps nautilus nautilus-desktop.png",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "iconPathFromFilename",
        "normalized": "String-\u003eIO String",
        "package": "gnomevfs",
        "partial": "Path From Filename",
        "signature": "String-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:isExecutableCommandString",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if \u003ccode\u003ecommandString\u003c/code\u003e starts with the full path of an\n executable file or an executable in the system path.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e IO Bool",
        "fct-type": "function",
        "title": "isExecutableCommandString"
      },
      "index": {
        "description": "Checks if commandString starts with the full path of an executable file or an executable in the system path",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "isExecutableCommandString",
        "normalized": "String-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Executable Command String",
        "signature": "String-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:isPrimaryThread",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the current thread is the thread with the main glib\n event loop.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "IO Bool",
        "fct-type": "function",
        "title": "isPrimaryThread"
      },
      "index": {
        "description": "Check if the current thread is the thread with the main glib event loop",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "isPrimaryThread",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Primary Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makePathNameCanonical",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a canonicalized path name.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "FilePath-\u003e Maybe TextURI",
        "fct-type": "function",
        "title": "makePathNameCanonical"
      },
      "index": {
        "description": "Returns canonicalized path name",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "makePathNameCanonical",
        "normalized": "FilePath-\u003eMaybe TextURI",
        "package": "gnomevfs",
        "partial": "Path Name Canonical",
        "signature": "FilePath-\u003eMaybe TextURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURICanonical",
      "description": {
        "fct-descr": "\u003cp\u003eStandardizes the format of \u003ccode\u003euri\u003c/code\u003e, so that it can be used later\n in other functions that expect a canonical URI.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e Maybe TextURI",
        "fct-type": "function",
        "title": "makeURICanonical"
      },
      "index": {
        "description": "Standardizes the format of uri so that it can be used later in other functions that expect canonical URI",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "makeURICanonical",
        "normalized": "TextURI-\u003eMaybe TextURI",
        "package": "gnomevfs",
        "partial": "URICanonical",
        "signature": "TextURI-\u003eMaybe TextURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURICanonicalStripFragment",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a canonicalized URI. If \u003ccode\u003euri\u003c/code\u003e contains a fragment\n (anything after a \u003ccode\u003e'#'\u003c/code\u003e), it is stripped off, and the resulting\n URI is made canonical.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e Maybe TextURI",
        "fct-type": "function",
        "title": "makeURICanonicalStripFragment"
      },
      "index": {
        "description": "Returns canonicalized URI If uri contains fragment anything after it is stripped off and the resulting URI is made canonical",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "makeURICanonicalStripFragment",
        "normalized": "TextURI-\u003eMaybe TextURI",
        "package": "gnomevfs",
        "partial": "URICanonical Strip Fragment",
        "signature": "TextURI-\u003eMaybe TextURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURIFromInput",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a user input path/URI and makes a valid URI out of it.\n\u003c/p\u003e\u003cp\u003eThis function is the reverse of \u003ccode\u003e\u003ca\u003eformatURIForDisplay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e Maybe TextURI",
        "fct-type": "function",
        "title": "makeURIFromInput"
      },
      "index": {
        "description": "Takes user input path URI and makes valid URI out of it This function is the reverse of formatURIForDisplay",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "makeURIFromInput",
        "normalized": "String-\u003eMaybe TextURI",
        "package": "gnomevfs",
        "partial": "URIFrom Input",
        "signature": "String-\u003eMaybe TextURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURIFromInputWithDirs",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine a fully qualified URI from a relative or absolute input\n path. The directories specified by \u003ccode\u003edirs\u003c/code\u003e are searched when the\n path is relative.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "FilePath-\u003e [MakeURIDirs]-\u003e IO TextURI",
        "fct-type": "function",
        "title": "makeURIFromInputWithDirs"
      },
      "index": {
        "description": "Determine fully qualified URI from relative or absolute input path The directories specified by dirs are searched when the path is relative",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "makeURIFromInputWithDirs",
        "normalized": "FilePath-\u003e[MakeURIDirs]-\u003eIO TextURI",
        "package": "gnomevfs",
        "partial": "URIFrom Input With Dirs",
        "signature": "FilePath-\u003e[MakeURIDirs]-\u003eIO TextURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:makeURIFromShellArg",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emakeURIFromInput\u003c/a\u003e\u003c/code\u003e, except:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e guesses relative paths instead of HTTP domains\n\u003c/li\u003e\u003cli\u003e doesn't bother stripping leading/trailing white space\n\u003c/li\u003e\u003cli\u003e doesn't bother with tilde expansion -- that's done by the shell\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/System-Gnome-VFS-Util.html#makeURIFromShellArg",
        "fct-type": "function",
        "title": "makeURIFromShellArg"
      },
      "index": {
        "description": "Similar to makeURIFromInput except guesses relative paths instead of HTTP domains doesn bother stripping leading trailing white space doesn bother with tilde expansion that done by the shell",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "makeURIFromShellArg",
        "normalized": "String-\u003eString",
        "package": "gnomevfs",
        "partial": "URIFrom Shell Arg",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:openFD",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an open 1 file descriptor into a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "Fd-\u003e IO Handle",
        "fct-type": "function",
        "title": "openFD"
      },
      "index": {
        "description": "Convert an open file descriptor into Handle object",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "openFD",
        "normalized": "Fd-\u003eIO Handle",
        "package": "gnomevfs",
        "partial": "FD",
        "signature": "Fd-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:unescapeString",
      "description": {
        "fct-descr": "\u003cp\u003eDecodes escaped characters (i.e., \u003ccode\u003e%xx\u003c/code\u003e sequences) in\n \u003ccode\u003eescapedString\u003c/code\u003e. Characters are decoded in \u003ccode\u003e%xx\u003c/code\u003e form, where\n \u003ccode\u003exx\u003c/code\u003e is the hex code for an ASCII character.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e String-\u003e String",
        "fct-type": "function",
        "title": "unescapeString"
      },
      "index": {
        "description": "Decodes escaped characters i.e xx sequences in escapedString Characters are decoded in xx form where xx is the hex code for an ASCII character",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "unescapeString",
        "normalized": "String-\u003eString-\u003eString",
        "package": "gnomevfs",
        "partial": "String",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:unescapeStringForDisplay",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003eunescapeString\u003c/code\u003e, but returns something\n semi-intelligible to the user, even upon receiving traumatic\n input such as \u003ccode\u003e00\u003c/code\u003e or URIs in bad form.\n\u003c/p\u003e\u003cp\u003eWARNING: You should never use this function on a whole URI! It\n unescapes reserved characters, and can result in a mangled URI\n that can not be re-entered. For example, it unescapes \u003ccode\u003e'#'\u003c/code\u003e, \u003ccode\u003e'&'\u003c/code\u003e and\n \u003ccode\u003e'?'\u003c/code\u003e, which have special meanings in URI strings.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/System-Gnome-VFS-Util.html#unescapeStringForDisplay",
        "fct-type": "function",
        "title": "unescapeStringForDisplay"
      },
      "index": {
        "description": "Similar to unescapeString but returns something semi-intelligible to the user even upon receiving traumatic input such as or URIs in bad form WARNING You should never use this function on whole URI It unescapes reserved characters and can result in mangled URI that can not be re-entered For example it unescapes and which have special meanings in URI strings",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "unescapeStringForDisplay",
        "normalized": "String-\u003eString",
        "package": "gnomevfs",
        "partial": "String For Display",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:urisMatch",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two URIs.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "TextURI-\u003e TextURI-\u003e Bool",
        "fct-type": "function",
        "title": "urisMatch"
      },
      "index": {
        "description": "Compare two URIs",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "urisMatch",
        "normalized": "TextURI-\u003eTextURI-\u003eBool",
        "package": "gnomevfs",
        "partial": "Match",
        "signature": "TextURI-\u003eTextURI-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:urlShow",
      "description": {
        "fct-descr": "\u003cp\u003eLaunches the default application or component associated with the\n given URL.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e IO ()",
        "fct-type": "function",
        "title": "urlShow"
      },
      "index": {
        "description": "Launches the default application or component associated with the given URL",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "urlShow",
        "normalized": "String-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Show",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Util.html#v:urlShowWithEnv",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eurlShow\u003c/a\u003e\u003c/code\u003e, but using the specified environment variables.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Util",
        "fct-package": "gnomevfs",
        "fct-signature": "String-\u003e [String]-\u003e IO ()",
        "fct-type": "function",
        "title": "urlShowWithEnv"
      },
      "index": {
        "description": "Like urlShow but using the specified environment variables",
        "hierarchy": "System Gnome VFS Util",
        "module": "System.Gnome.VFS.Util",
        "name": "urlShowWithEnv",
        "normalized": "String-\u003e[String]-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Show With Env",
        "signature": "String-\u003e[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Volume.html",
        "fct-type": "module",
        "title": "Volume"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "Volume",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Volume",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#t:Volume",
      "description": {
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-Types.html#Volume",
        "fct-type": "data",
        "title": "Volume"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "Volume",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Volume",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#t:VolumeClass",
      "description": {
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "class",
        "fct-source": "src/System-Gnome-VFS-Types.html#VolumeClass",
        "fct-type": "class",
        "title": "VolumeClass"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "VolumeClass",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Volume Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#t:VolumeID",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifies a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#VolumeID",
        "fct-type": "type",
        "title": "VolumeID"
      },
      "index": {
        "description": "Identifies Volume",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "VolumeID",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Volume ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:castToVolume",
      "description": {
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "obj -\u003e Volume",
        "fct-source": "src/System-Gnome-VFS-Types.html#castToVolume",
        "fct-type": "function",
        "title": "castToVolume"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "castToVolume",
        "normalized": "a-\u003eVolume",
        "package": "gnomevfs",
        "partial": "To Volume",
        "signature": "obj-\u003eVolume"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeCompare",
      "description": {
        "fct-descr": "\u003cp\u003eCompares two \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e objects \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e. Two \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e\n objects referring to different volumes are guaranteed to not\n return \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e when comparing them. If they refer to the same volume \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e\n is returned.\n\u003c/p\u003e\u003cp\u003eThe resulting gint should be used to determine the order in which\n \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are displayed in graphical user interfaces.\n\u003c/p\u003e\u003cp\u003eThe comparison algorithm first of all peeks the device type of\n \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, they will be sorted in the following order:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Magnetic and opto-magnetic volumes (ZIP, floppy)\n\u003c/li\u003e\u003cli\u003e Optical volumes (CD, DVD)\n\u003c/li\u003e\u003cli\u003e External volumes (USB sticks, music players)\n\u003c/li\u003e\u003cli\u003e Mounted hard disks\n\u003c/li\u003e\u003cli\u003e Network mounts\n\u003c/li\u003e\u003cli\u003e Other volumes\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAfterwards, the display name of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e is compared using a\n locale-sensitive sorting algorithm.\n\u003c/p\u003e\u003cp\u003eIf two volumes have the same display name, their unique ID is\n compared which can be queried using \u003ccode\u003e\u003ca\u003evolumeGetID\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume1 -\u003e volume2 -\u003e IO Ordering",
        "fct-source": "src/System-Gnome-VFS-Volume.html#volumeCompare",
        "fct-type": "function",
        "title": "volumeCompare"
      },
      "index": {
        "description": "Compares two Volume objects and Two Volume objects referring to different volumes are guaranteed to not return EQ when comparing them If they refer to the same volume EQ is returned The resulting gint should be used to determine the order in which and are displayed in graphical user interfaces The comparison algorithm first of all peeks the device type of and they will be sorted in the following order Magnetic and opto-magnetic volumes ZIP floppy Optical volumes CD DVD External volumes USB sticks music players Mounted hard disks Network mounts Other volumes Afterwards the display name of and is compared using locale-sensitive sorting algorithm If two volumes have the same display name their unique ID is compared which can be queried using volumeGetID",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeCompare",
        "normalized": "a-\u003ea-\u003eIO Ordering",
        "package": "gnomevfs",
        "partial": "Compare",
        "signature": "volume-\u003evolume-\u003eIO Ordering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeEject",
      "description": {
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e VolumeOpSuccessCallback-\u003e VolumeOpFailureCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "volumeEject"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeEject",
        "normalized": "a-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Eject",
        "signature": "volume-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetActivationURI",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the activation URI of \u003ccode\u003evolume\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe returned URI usually refers to a valid location. You can\n check the validity of the location by calling\n \u003ccode\u003eSystem.Gnome.VFS.URI.uriFromString\u003c/code\u003e with the URI, and checking\n whether the return value is not \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO TextURI",
        "fct-type": "function",
        "title": "volumeGetActivationURI"
      },
      "index": {
        "description": "Returns the activation URI of volume The returned URI usually refers to valid location You can check the validity of the location by calling System.Gnome.VFS.URI.uriFromString with the URI and checking whether the return value is not Nothing",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetActivationURI",
        "normalized": "a-\u003eIO TextURI",
        "package": "gnomevfs",
        "partial": "Get Activation URI",
        "signature": "volume-\u003eIO TextURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetDevicePath",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the device path of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eFor HAL volumes, this returns the value of the volume's\n \u003ccode\u003eblock.device\u003c/code\u003e key. For UNIX mounts, it returns the \u003ccode\u003emntent\u003c/code\u003e's\n \u003ccode\u003emnt_fsname\u003c/code\u003e entry.\n\u003c/p\u003e\u003cp\u003eOtherwise, it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO String",
        "fct-type": "function",
        "title": "volumeGetDevicePath"
      },
      "index": {
        "description": "Returns the device path of Volume object For HAL volumes this returns the value of the volume block.device key For UNIX mounts it returns the mntent mnt fsname entry Otherwise it returns Nothing",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetDevicePath",
        "normalized": "a-\u003eIO String",
        "package": "gnomevfs",
        "partial": "Get Device Path",
        "signature": "volume-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetDeviceType",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eDeviceType\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO DeviceType",
        "fct-type": "function",
        "title": "volumeGetDeviceType"
      },
      "index": {
        "description": "Returns the DeviceType of Volume object",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetDeviceType",
        "normalized": "a-\u003eIO DeviceType",
        "package": "gnomevfs",
        "partial": "Get Device Type",
        "signature": "volume-\u003eIO DeviceType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetDisplayName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the display name of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO String",
        "fct-type": "function",
        "title": "volumeGetDisplayName"
      },
      "index": {
        "description": "Returns the display name of Volume object",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetDisplayName",
        "normalized": "a-\u003eIO String",
        "package": "gnomevfs",
        "partial": "Get Display Name",
        "signature": "volume-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetDrive",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e that \u003ccode\u003evolume\u003c/code\u003e is on.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO Drive",
        "fct-type": "function",
        "title": "volumeGetDrive"
      },
      "index": {
        "description": "Returns the Drive that volume is on",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetDrive",
        "normalized": "a-\u003eIO Drive",
        "package": "gnomevfs",
        "partial": "Get Drive",
        "signature": "volume-\u003eIO Drive"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetFilesystemType",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a string describing the file system on \u003ccode\u003evolume\u003c/code\u003e, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no information on the underlying file system is\n available.\n\u003c/p\u003e\u003cp\u003eThe file system may be used to provide special functionality that\n depends on the file system type, for instance to determine\n whether trashing is supported (cf. \u003ccode\u003e\u003ca\u003evolumeHandlesTrash\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor HAL mounts, this returns the value of the \u003ccode\u003e\"volume.fstype\"\u003c/code\u003e\n key, for traditional UNIX mounts it is set to the mntent's\n mnt_type key, for connected servers, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO (Maybe String)",
        "fct-type": "function",
        "title": "volumeGetFilesystemType"
      },
      "index": {
        "description": "Returns string describing the file system on volume or Nothing if no information on the underlying file system is available The file system may be used to provide special functionality that depends on the file system type for instance to determine whether trashing is supported cf volumeHandlesTrash For HAL mounts this returns the value of the volume.fstype key for traditional UNIX mounts it is set to the mntent mnt type key for connected servers Nothing is returned",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetFilesystemType",
        "normalized": "a-\u003eIO(Maybe String)",
        "package": "gnomevfs",
        "partial": "Get Filesystem Type",
        "signature": "volume-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetHalUDI",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the HAL UDI of a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eFor HAL volumes, this matches the value of the \u003ccode\u003einfo.udi\u003c/code\u003e key,\n for other volumes it is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO (Maybe String)",
        "fct-type": "function",
        "title": "volumeGetHalUDI"
      },
      "index": {
        "description": "Returns the HAL UDI of Volume object For HAL volumes this matches the value of the info.udi key for other volumes it is Nothing",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetHalUDI",
        "normalized": "a-\u003eIO(Maybe String)",
        "package": "gnomevfs",
        "partial": "Get Hal UDI",
        "signature": "volume-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetID",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a unique identifier for a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO VolumeID",
        "fct-type": "function",
        "title": "volumeGetID"
      },
      "index": {
        "description": "Returns unique identifier for Volume object",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetID",
        "normalized": "a-\u003eIO VolumeID",
        "package": "gnomevfs",
        "partial": "Get ID",
        "signature": "volume-\u003eIO VolumeID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetIcon",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the icon filename for a \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO FilePath",
        "fct-type": "function",
        "title": "volumeGetIcon"
      },
      "index": {
        "description": "Returns the icon filename for Volume object",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetIcon",
        "normalized": "a-\u003eIO FilePath",
        "package": "gnomevfs",
        "partial": "Get Icon",
        "signature": "volume-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeGetVolumeType",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the volume type of \u003ccode\u003evolume\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO VolumeType",
        "fct-type": "function",
        "title": "volumeGetVolumeType"
      },
      "index": {
        "description": "Returns the volume type of volume",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeGetVolumeType",
        "normalized": "a-\u003eIO VolumeType",
        "package": "gnomevfs",
        "partial": "Get Volume Type",
        "signature": "volume-\u003eIO VolumeType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeHandlesTrash",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether the file system on a volume supports trashing of\n files.\n\u003c/p\u003e\u003cp\u003eIf the volume has an AutoFS file system (i.e.,\n \u003ccode\u003e\u003ca\u003evolumeGetDeviceType\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003eDeviceTypeAutofs\u003c/code\u003e), or if the\n volume is mounted read-only (i.e., \u003ccode\u003e\u003ca\u003evolumeIsReadOnly\u003c/a\u003e\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e), it is assumed to not support trashing of files.\n\u003c/p\u003e\u003cp\u003eOtherwise, if the volume provides file system information, it is\n determined whether the file system supports trashing of\n files.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO Bool",
        "fct-type": "function",
        "title": "volumeHandlesTrash"
      },
      "index": {
        "description": "Returns whether the file system on volume supports trashing of files If the volume has an AutoFS file system i.e volumeGetDeviceType returns DeviceTypeAutofs or if the volume is mounted read-only i.e volumeIsReadOnly returns True it is assumed to not support trashing of files Otherwise if the volume provides file system information it is determined whether the file system supports trashing of files",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeHandlesTrash",
        "normalized": "a-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Handles Trash",
        "signature": "volume-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeIsMounted",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether the file system on a volume is currently mounted.\n\u003c/p\u003e\u003cp\u003eFor HAL volumes, this reflects the value of the\n \u003ccode\u003e\"volume.is_mounted\"\u003c/code\u003e key, for traditional UNIX mounts and\n connected servers, \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is returned, because their existence\n implies that they are mounted.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO Bool",
        "fct-type": "function",
        "title": "volumeIsMounted"
      },
      "index": {
        "description": "Returns whether the file system on volume is currently mounted For HAL volumes this reflects the value of the volume.is mounted key for traditional UNIX mounts and connected servers True is returned because their existence implies that they are mounted",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeIsMounted",
        "normalized": "a-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Is Mounted",
        "signature": "volume-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeIsReadOnly",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether the file system on a volume is read-only.\n\u003c/p\u003e\u003cp\u003eFor HAL volumes, the \u003ccode\u003e\"volume.is_mounted_read_only\"\u003c/code\u003e key is\n authoritative, for traditional UNIX mounts it returns (!(0)) if the\n mount was done with the \u003ccode\u003e\"ro\"\u003c/code\u003e option. For servers, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO Bool",
        "fct-type": "function",
        "title": "volumeIsReadOnly"
      },
      "index": {
        "description": "Returns whether the file system on volume is read-only For HAL volumes the volume.is mounted read only key is authoritative for traditional UNIX mounts it returns if the mount was done with the ro option For servers False is returned",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeIsReadOnly",
        "normalized": "a-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Is Read Only",
        "signature": "volume-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeIsUserVisible",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e for whether a volume is user-visible. This should\n be used by applications to determine whether the volume should be\n listed in user interfaces listing available volumes.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e IO Bool",
        "fct-type": "function",
        "title": "volumeIsUserVisible"
      },
      "index": {
        "description": "Returns Bool for whether volume is user-visible This should be used by applications to determine whether the volume should be listed in user interfaces listing available volumes",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeIsUserVisible",
        "normalized": "a-\u003eIO Bool",
        "package": "gnomevfs",
        "partial": "Is User Visible",
        "signature": "volume-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Volume.html#v:volumeUnmount",
      "description": {
        "fct-module": "System.Gnome.VFS.Volume",
        "fct-package": "gnomevfs",
        "fct-signature": "volume-\u003e VolumeOpSuccessCallback-\u003e VolumeOpFailureCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "volumeUnmount"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Volume",
        "module": "System.Gnome.VFS.Volume",
        "name": "volumeUnmount",
        "normalized": "a-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Unmount",
        "signature": "volume-\u003eVolumeOpSuccessCallback-\u003eVolumeOpFailureCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-VolumeMonitor.html",
        "fct-type": "module",
        "title": "VolumeMonitor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "VolumeMonitor",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Volume Monitor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#t:VolumeMonitor",
      "description": {
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-Types.html#VolumeMonitor",
        "fct-type": "data",
        "title": "VolumeMonitor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "VolumeMonitor",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Volume Monitor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#t:VolumeMonitorClass",
      "description": {
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "class",
        "fct-source": "src/System-Gnome-VFS-Types.html#VolumeMonitorClass",
        "fct-type": "class",
        "title": "VolumeMonitorClass"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "VolumeMonitorClass",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Volume Monitor Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:afterVolumeMonitorVolumeMounted",
      "description": {
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
        "fct-type": "function",
        "title": "afterVolumeMonitorVolumeMounted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "afterVolumeMonitorVolumeMounted",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Volume Monitor Volume Mounted",
        "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:afterVolumeMonitorVolumePreUnmount",
      "description": {
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
        "fct-type": "function",
        "title": "afterVolumeMonitorVolumePreUnmount"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "afterVolumeMonitorVolumePreUnmount",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Volume Monitor Volume Pre Unmount",
        "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:afterVolumeMonitorVolumeUnmounted",
      "description": {
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
        "fct-type": "function",
        "title": "afterVolumeMonitorVolumeUnmounted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "afterVolumeMonitorVolumeUnmounted",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Volume Monitor Volume Unmounted",
        "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:onVolumeMonitorVolumeMounted",
      "description": {
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
        "fct-type": "function",
        "title": "onVolumeMonitorVolumeMounted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "onVolumeMonitorVolumeMounted",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Volume Monitor Volume Mounted",
        "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:onVolumeMonitorVolumePreUnmount",
      "description": {
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
        "fct-type": "function",
        "title": "onVolumeMonitorVolumePreUnmount"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "onVolumeMonitorVolumePreUnmount",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Volume Monitor Volume Pre Unmount",
        "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:onVolumeMonitorVolumeUnmounted",
      "description": {
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e (Volume -\u003e IO ())-\u003e IO (ConnectId volumeMonitor)",
        "fct-type": "function",
        "title": "onVolumeMonitorVolumeUnmounted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "onVolumeMonitorVolumeUnmounted",
        "normalized": "a-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId a)",
        "package": "gnomevfs",
        "partial": "Volume Monitor Volume Unmounted",
        "signature": "volumeMonitor-\u003e(Volume-\u003eIO())-\u003eIO(ConnectId volumeMonitor)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitor",
      "description": {
        "fct-descr": "\u003cp\u003eThe global volume monitor object.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "VolumeMonitor",
        "fct-source": "src/System-Gnome-VFS-VolumeMonitor.html#volumeMonitor",
        "fct-type": "function",
        "title": "volumeMonitor"
      },
      "index": {
        "description": "The global volume monitor object",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "volumeMonitor",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Monitor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetConnectedDrives",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all drives connected to the machine.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e IO [Drive]",
        "fct-type": "function",
        "title": "volumeMonitorGetConnectedDrives"
      },
      "index": {
        "description": "Returns list of all drives connected to the machine",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "volumeMonitorGetConnectedDrives",
        "normalized": "a-\u003eIO[Drive]",
        "package": "gnomevfs",
        "partial": "Monitor Get Connected Drives",
        "signature": "volumeMonitor-\u003eIO[Drive]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetDriveByID",
      "description": {
        "fct-descr": "\u003cp\u003eTry to find the \u003ccode\u003e\u003ca\u003eDrive\u003c/a\u003e\u003c/code\u003e with ID \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e DriveID-\u003e IO (Maybe Drive)",
        "fct-type": "function",
        "title": "volumeMonitorGetDriveByID"
      },
      "index": {
        "description": "Try to find the Drive with ID id",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "volumeMonitorGetDriveByID",
        "normalized": "a-\u003eDriveID-\u003eIO(Maybe Drive)",
        "package": "gnomevfs",
        "partial": "Monitor Get Drive By ID",
        "signature": "volumeMonitor-\u003eDriveID-\u003eIO(Maybe Drive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetMountedVolumes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all volumes currently mounted on the machine.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e IO [Volume]",
        "fct-type": "function",
        "title": "volumeMonitorGetMountedVolumes"
      },
      "index": {
        "description": "Returns list of all volumes currently mounted on the machine",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "volumeMonitorGetMountedVolumes",
        "normalized": "a-\u003eIO[Volume]",
        "package": "gnomevfs",
        "partial": "Monitor Get Mounted Volumes",
        "signature": "volumeMonitor-\u003eIO[Volume]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetVolumeByID",
      "description": {
        "fct-descr": "\u003cp\u003eTry to find the \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e with ID \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e VolumeID-\u003e IO (Maybe Volume)",
        "fct-type": "function",
        "title": "volumeMonitorGetVolumeByID"
      },
      "index": {
        "description": "Try to find the Volume with ID id",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "volumeMonitorGetVolumeByID",
        "normalized": "a-\u003eVolumeID-\u003eIO(Maybe Volume)",
        "package": "gnomevfs",
        "partial": "Monitor Get Volume By ID",
        "signature": "volumeMonitor-\u003eVolumeID-\u003eIO(Maybe Volume)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-VolumeMonitor.html#v:volumeMonitorGetVolumeForPath",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e corresponding to path, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe volume referring to path is found by calling \u003ccode\u003estat\u003c/code\u003e on path,\n and then iterating through the list of volumes that refer to\n currently mounted local file systems. The first volume in this\n list maching the path's UNIX device is returned.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003estat\u003c/code\u003e on path was not successful, or no volume matches\n path, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.VolumeMonitor",
        "fct-package": "gnomevfs",
        "fct-signature": "volumeMonitor-\u003e FilePath-\u003e IO (Maybe Volume)",
        "fct-type": "function",
        "title": "volumeMonitorGetVolumeForPath"
      },
      "index": {
        "description": "Returns the Volume corresponding to path or Nothing The volume referring to path is found by calling stat on path and then iterating through the list of volumes that refer to currently mounted local file systems The first volume in this list maching the path UNIX device is returned If the stat on path was not successful or no volume matches path Nothing is returned",
        "hierarchy": "System Gnome VFS VolumeMonitor",
        "module": "System.Gnome.VFS.VolumeMonitor",
        "name": "volumeMonitorGetVolumeForPath",
        "normalized": "a-\u003eFilePath-\u003eIO(Maybe Volume)",
        "package": "gnomevfs",
        "partial": "Monitor Get Volume For Path",
        "signature": "volumeMonitor-\u003eFilePath-\u003eIO(Maybe Volume)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS-Xfer.html",
        "fct-type": "module",
        "title": "Xfer"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "Xfer",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferDuplicateCallback",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the fourth callback that is passed to\n \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e. This callback will be called\n when a duplicate filename is found.\n\u003c/p\u003e\u003cp\u003eThe parameters, from left to right, are:\n * \u003ccode\u003einfo\u003c/code\u003e - information about the progress of the current transfer,\n * \u003ccode\u003eduplicateName\u003c/code\u003e - the name of the target file,\n * \u003ccode\u003eduplicateCount\u003c/code\u003e - the number of duplicates that exist.\n\u003c/p\u003e\u003cp\u003eThe callback must return the new filename that should be used, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to abort.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferDuplicateCallback",
        "fct-type": "type",
        "title": "XferDuplicateCallback"
      },
      "index": {
        "description": "The type of the fourth callback that is passed to System.Gnome.VFS.Xfer.xferURI This callback will be called when duplicate filename is found The parameters from left to right are info information about the progress of the current transfer duplicateName the name of the target file duplicateCount the number of duplicates that exist The callback must return the new filename that should be used or Nothing to abort",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferDuplicateCallback",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Duplicate Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferErrorAction",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorAction",
        "fct-type": "data",
        "title": "XferErrorAction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferErrorAction",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Error Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferErrorCallback",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the second callback that is passed to\n \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e. This callback will be called\n whenever an error occurs.\n\u003c/p\u003e\u003cp\u003eThe callback must return the action to be performed in response to the error.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorCallback",
        "fct-type": "type",
        "title": "XferErrorCallback"
      },
      "index": {
        "description": "The type of the second callback that is passed to System.Gnome.VFS.Xfer.xferURI This callback will be called whenever an error occurs The callback must return the action to be performed in response to the error",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferErrorCallback",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Error Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions controlling how the \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e and related functions behave.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "data",
        "title": "XferOptions"
      },
      "index": {
        "description": "Options controlling how the System.Gnome.VFS.Xfer.xferURI and related functions behave",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOptions",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferOverwriteAction",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
        "fct-type": "data",
        "title": "XferOverwriteAction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteAction",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferOverwriteCallback",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the third callback that is passed to\n \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e. This callback will be called\n when a file would be overwritten.\n\u003c/p\u003e\u003cp\u003eThe callback must return the action to be performed when the target file already exists.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteCallback",
        "fct-type": "type",
        "title": "XferOverwriteCallback"
      },
      "index": {
        "description": "The type of the third callback that is passed to System.Gnome.VFS.Xfer.xferURI This callback will be called when file would be overwritten The callback must return the action to be performed when the target file already exists",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteCallback",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferOverwriteMode",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteMode",
        "fct-type": "data",
        "title": "XferOverwriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteMode",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferProgressCallback",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the first callback that is passed to\n \u003ccode\u003eSystem.Gnome.VFS.Xfer.xferURI\u003c/code\u003e and related functions. This\n callback will be called periodically during transfers that are\n progressing normally.\n\u003c/p\u003e\u003cp\u003eThe callback must return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e to abort the transfer, or \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "type",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressCallback",
        "fct-type": "type",
        "title": "XferProgressCallback"
      },
      "index": {
        "description": "The type of the first callback that is passed to System.Gnome.VFS.Xfer.xferURI and related functions This callback will be called periodically during transfers that are progressing normally The callback must return False to abort the transfer or True otherwise",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferProgressCallback",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Progress Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#t:XferProgressInfo",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "data",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "data",
        "title": "XferProgressInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferProgressInfo",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Progress Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferDeleteItems",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferDeleteItems",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferDeleteItems"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferDeleteItems",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Delete Items",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferEmptyDirectories",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferEmptyDirectories",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferEmptyDirectories"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferEmptyDirectories",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Empty Directories",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferErrorActionAbort",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferErrorActionAbort",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorAction",
        "fct-type": "function",
        "title": "XferErrorActionAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferErrorActionAbort",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Error Action Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferErrorActionRetry",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferErrorActionRetry",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorAction",
        "fct-type": "function",
        "title": "XferErrorActionRetry"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferErrorActionRetry",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Error Action Retry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferErrorActionSkip",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferErrorActionSkip",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferErrorAction",
        "fct-type": "function",
        "title": "XferErrorActionSkip"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferErrorActionSkip",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Error Action Skip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferFollowLinks",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferFollowLinks",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferFollowLinks"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferFollowLinks",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Follow Links",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferFollowLinksRecursive",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferFollowLinksRecursive",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferFollowLinksRecursive"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferFollowLinksRecursive",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Follow Links Recursive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferLinkItems",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferLinkItems",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferLinkItems"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferLinkItems",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Link Items",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferNewUniqueDirectory",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferNewUniqueDirectory",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferNewUniqueDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferNewUniqueDirectory",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer New Unique Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionAbort",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferOverwriteActionAbort",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
        "fct-type": "function",
        "title": "XferOverwriteActionAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteActionAbort",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Action Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionReplace",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferOverwriteActionReplace",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
        "fct-type": "function",
        "title": "XferOverwriteActionReplace"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteActionReplace",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Action Replace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionReplaceAll",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferOverwriteActionReplaceAll",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
        "fct-type": "function",
        "title": "XferOverwriteActionReplaceAll"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteActionReplaceAll",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Action Replace All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionSkip",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferOverwriteActionSkip",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
        "fct-type": "function",
        "title": "XferOverwriteActionSkip"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteActionSkip",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Action Skip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteActionSkipAll",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferOverwriteActionSkipAll",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteAction",
        "fct-type": "function",
        "title": "XferOverwriteActionSkipAll"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteActionSkipAll",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Action Skip All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteModeAbort",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferOverwriteModeAbort",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteMode",
        "fct-type": "function",
        "title": "XferOverwriteModeAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteModeAbort",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Mode Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteModeReplace",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferOverwriteModeReplace",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteMode",
        "fct-type": "function",
        "title": "XferOverwriteModeReplace"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteModeReplace",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Mode Replace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferOverwriteModeSkip",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferOverwriteModeSkip",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOverwriteMode",
        "fct-type": "function",
        "title": "XferOverwriteModeSkip"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferOverwriteModeSkip",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Overwrite Mode Skip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferProgressInfo",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferProgressInfo",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "XferProgressInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferProgressInfo",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Progress Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferRecursive",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferRecursive",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferRecursive"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferRecursive",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Recursive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferRemovesource",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferRemovesource",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferRemovesource"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferRemovesource",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Removesource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferSamefs",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferSamefs",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferSamefs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferSamefs",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Samefs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferTargetDefaultPerms",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferTargetDefaultPerms",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferTargetDefaultPerms"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferTargetDefaultPerms",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Target Default Perms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:XferUseUniqueNames",
      "description": {
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferUseUniqueNames",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferOptions",
        "fct-type": "function",
        "title": "XferUseUniqueNames"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "XferUseUniqueNames",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Xfer Use Unique Names",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferDeleteList",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the files at the \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003es in \u003ccode\u003esourceURIList\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "[URI]-\u003e [XferOptions]-\u003e Maybe XferProgressCallback-\u003e Maybe XferErrorCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "xferDeleteList"
      },
      "index": {
        "description": "Delete the files at the URI in sourceURIList",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferDeleteList",
        "normalized": "[URI]-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "Delete List",
        "signature": "[URI]-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoBytesCopied",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes already transferred in the current file\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "FileSize",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoBytesCopied"
      },
      "index": {
        "description": "number of bytes already transferred in the current file",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoBytesCopied",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info Bytes Copied",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoBytesTotal",
      "description": {
        "fct-descr": "\u003cp\u003etotal size of all files in bytes\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "FileSize",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoBytesTotal"
      },
      "index": {
        "description": "total size of all files in bytes",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoBytesTotal",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info Bytes Total",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoFileIndex",
      "description": {
        "fct-descr": "\u003cp\u003eindex of the file currently being transferred\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "Word",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoFileIndex"
      },
      "index": {
        "description": "index of the file currently being transferred",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoFileIndex",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info File Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoFileSize",
      "description": {
        "fct-descr": "\u003cp\u003esize of the file currently being transferred\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "FileSize",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoFileSize"
      },
      "index": {
        "description": "size of the file currently being transferred",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoFileSize",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info File Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoFilesTotal",
      "description": {
        "fct-descr": "\u003cp\u003etotal number of files being transferred\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "Word",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoFilesTotal"
      },
      "index": {
        "description": "total number of files being transferred",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoFilesTotal",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info Files Total",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoPhase",
      "description": {
        "fct-descr": "\u003cp\u003ephase of the transfer\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "XferPhase",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoPhase"
      },
      "index": {
        "description": "phase of the transfer",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoPhase",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info Phase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoSourceName",
      "description": {
        "fct-descr": "\u003cp\u003ecurrently transferring source URI\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoSourceName"
      },
      "index": {
        "description": "currently transferring source URI",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoSourceName",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info Source Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoTargetName",
      "description": {
        "fct-descr": "\u003cp\u003ecurrently transferring target URI\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoTargetName"
      },
      "index": {
        "description": "currently transferring target URI",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoTargetName",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info Target Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoTopLevelItem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the file being transferred is a top-level item;\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if it is inside a directory\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "Bool",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoTopLevelItem"
      },
      "index": {
        "description": "True if the file being transferred is top-level item False if it is inside directory",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoTopLevelItem",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info Top Level Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoTotalBytesCopied",
      "description": {
        "fct-descr": "\u003cp\u003etotal number of bytes already transferred\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "FileSize",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoTotalBytesCopied"
      },
      "index": {
        "description": "total number of bytes already transferred",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoTotalBytesCopied",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info Total Bytes Copied",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferProgressInfoVFSStatus",
      "description": {
        "fct-descr": "\u003cp\u003ecurrent VFS status\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "Result",
        "fct-source": "src/System-Gnome-VFS-BasicTypes.html#XferProgressInfo",
        "fct-type": "function",
        "title": "xferProgressInfoVFSStatus"
      },
      "index": {
        "description": "current VFS status",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferProgressInfoVFSStatus",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "Progress Info VFSStatus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferURI",
      "description": {
        "fct-descr": "\u003cp\u003eTransfer the file located at \u003ccode\u003esourceURI\u003c/code\u003e to \u003ccode\u003etargetURI\u003c/code\u003e, using\n the specified options and callbacks.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "URI-\u003e URI-\u003e [XferOptions]-\u003e Maybe XferProgressCallback-\u003e Maybe XferErrorCallback-\u003e Either XferOverwriteMode XferOverwriteCallback-\u003e Maybe XferDuplicateCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "xferURI"
      },
      "index": {
        "description": "Transfer the file located at sourceURI to targetURI using the specified options and callbacks",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferURI",
        "normalized": "URI-\u003eURI-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eEither XferOverwriteMode XferOverwriteCallback-\u003eMaybe XferDuplicateCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "URI",
        "signature": "URI-\u003eURI-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eEither XferOverwriteMode XferOverwriteCallback-\u003eMaybe XferDuplicateCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS-Xfer.html#v:xferURIList",
      "description": {
        "fct-descr": "\u003cp\u003eFor each pair in \u003ccode\u003esourceTargetURIList\u003c/code\u003e, transfer the file at the\n first \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e to the second \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnome.VFS.Xfer",
        "fct-package": "gnomevfs",
        "fct-signature": "[(URI, URI)]-\u003e [XferOptions]-\u003e Maybe XferProgressCallback-\u003e Maybe XferErrorCallback-\u003e Either XferOverwriteMode XferOverwriteCallback-\u003e Maybe XferDuplicateCallback-\u003e IO ()",
        "fct-type": "function",
        "title": "xferURIList"
      },
      "index": {
        "description": "For each pair in sourceTargetURIList transfer the file at the first URI to the second URI",
        "hierarchy": "System Gnome VFS Xfer",
        "module": "System.Gnome.VFS.Xfer",
        "name": "xferURIList",
        "normalized": "[(URI,URI)]-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eEither XferOverwriteMode XferOverwriteCallback-\u003eMaybe XferDuplicateCallback-\u003eIO()",
        "package": "gnomevfs",
        "partial": "URIList",
        "signature": "[(URI,URI)]-\u003e[XferOptions]-\u003eMaybe XferProgressCallback-\u003eMaybe XferErrorCallback-\u003eEither XferOverwriteMode XferOverwriteCallback-\u003eMaybe XferDuplicateCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnomevfs/docs/System-Gnome-VFS.html#",
      "description": {
        "fct-module": "System.Gnome.VFS",
        "fct-package": "gnomevfs",
        "fct-signature": "module",
        "fct-source": "src/System-Gnome-VFS.html",
        "fct-type": "module",
        "title": "VFS"
      },
      "index": {
        "description": "",
        "hierarchy": "System Gnome VFS",
        "module": "System.Gnome.VFS",
        "name": "VFS",
        "normalized": "",
        "package": "gnomevfs",
        "partial": "VFS",
        "signature": ""
      }
    }
  }
]