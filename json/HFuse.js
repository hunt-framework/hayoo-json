[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA binding for the FUSE (Filesystem in USErspace) library\n (\u003ca\u003ehttp://fuse.sourceforge.net/\u003c/a\u003e), which allows filesystems to be implemented\n as userspace processes.\n\u003c/p\u003e\u003cp\u003eThe binding tries to follow as much as possible current Haskell POSIX\n interface in \u003ca\u003eSystem.Posix.Files\u003c/a\u003e and \u003ca\u003eSystem.Posix.Directory\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eFUSE uses POSIX threads, so any Haskell application using this library must\n be linked against a threaded runtime system (eg. using the \u003ccode\u003ethreaded\u003c/code\u003e GHC\n option).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "module",
        "fct-source": "src/System-Fuse.html",
        "fct-type": "module",
        "title": "Fuse"
      },
      "index": {
        "description": "binding for the FUSE Filesystem in USErspace library http fuse.sourceforge.net which allows filesystems to be implemented as userspace processes The binding tries to follow as much as possible current Haskell POSIX interface in System.Posix.Files and System.Posix.Directory FUSE uses POSIX threads so any Haskell application using this library must be linked against threaded runtime system eg using the threaded GHC option",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "Fuse",
        "normalized": "",
        "package": "HFuse",
        "partial": "Fuse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:EntryType",
      "description": {
        "fct-descr": "\u003cp\u003eThe Unix type of a node in the filesystem.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "data",
        "fct-source": "src/System-Fuse.html#EntryType",
        "fct-type": "data",
        "title": "EntryType"
      },
      "index": {
        "description": "The Unix type of node in the filesystem",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "EntryType",
        "normalized": "",
        "package": "HFuse",
        "partial": "Entry Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:FileStat",
      "description": {
        "fct-descr": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003efuseGetFileStat\u003c/a\u003e\u003c/code\u003e.  Corresponds to \u003ccode\u003estruct stat\u003c/code\u003e from \u003ccode\u003estat.h\u003c/code\u003e;\n     \u003ccode\u003est_dev\u003c/code\u003e, \u003ccode\u003est_ino\u003c/code\u003e and \u003ccode\u003est_blksize\u003c/code\u003e are omitted, since (from the libfuse\n     documentation): \"the \u003ccode\u003est_dev\u003c/code\u003e and \u003ccode\u003est_blksize\u003c/code\u003e fields are ignored.  The\n     \u003ccode\u003est_ino\u003c/code\u003e field is ignored except if the use_ino mount option is given.\"\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO: at some point the inode field will probably be needed.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "data",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "data",
        "title": "FileStat"
      },
      "index": {
        "description": "Used by fuseGetFileStat Corresponds to struct stat from stat.h st dev st ino and st blksize are omitted since from the libfuse documentation the st dev and st blksize fields are ignored The st ino field is ignored except if the use ino mount option is given TODO at some point the inode field will probably be needed",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "FileStat",
        "normalized": "",
        "package": "HFuse",
        "partial": "File Stat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:FileSystemStats",
      "description": {
        "fct-descr": "\u003cp\u003eType used by the \u003ccode\u003e\u003ca\u003efuseGetFileSystemStats\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "data",
        "fct-source": "src/System-Fuse.html#FileSystemStats",
        "fct-type": "data",
        "title": "FileSystemStats"
      },
      "index": {
        "description": "Type used by the fuseGetFileSystemStats",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "FileSystemStats",
        "normalized": "",
        "package": "HFuse",
        "partial": "File System Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:FuseContext",
      "description": {
        "fct-descr": "\u003cp\u003eReturned by \u003ccode\u003e\u003ca\u003egetFuseContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "data",
        "fct-source": "src/System-Fuse.html#FuseContext",
        "fct-type": "data",
        "title": "FuseContext"
      },
      "index": {
        "description": "Returned by getFuseContext",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "FuseContext",
        "normalized": "",
        "package": "HFuse",
        "partial": "Fuse Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:FuseOperations",
      "description": {
        "fct-descr": "\u003cp\u003eThis record, given to \u003ccode\u003e\u003ca\u003efuseMain\u003c/a\u003e\u003c/code\u003e, binds each required file system\n   operations.\n\u003c/p\u003e\u003cp\u003eEach field is named against \u003ccode\u003e\u003ca\u003ePosix\u003c/a\u003e\u003c/code\u003e names. Matching Linux system\n   calls are also given as a reference.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efh\u003c/code\u003e is the file handle type returned by \u003ccode\u003e\u003ca\u003efuseOpen\u003c/a\u003e\u003c/code\u003e and subsequently passed\n   to all other file operations.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "data",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "data",
        "title": "FuseOperations"
      },
      "index": {
        "description": "This record given to fuseMain binds each required file system operations Each field is named against Posix names Matching Linux system calls are also given as reference fh is the file handle type returned by fuseOpen and subsequently passed to all other file operations",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "FuseOperations",
        "normalized": "",
        "package": "HFuse",
        "partial": "Fuse Operations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:OpenFileFlags",
      "description": {
        "fct-descr": "\u003cp\u003eCorrespond to some of the int flags from C's fcntl.h.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "OpenFileFlags"
      },
      "index": {
        "description": "Correspond to some of the int flags from fcntl.h",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "OpenFileFlags",
        "normalized": "",
        "package": "HFuse",
        "partial": "Open File Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:OpenMode",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "OpenMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "OpenMode",
        "normalized": "",
        "package": "HFuse",
        "partial": "Open Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:SyncType",
      "description": {
        "fct-descr": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003efuseSynchronizeFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efuseSynchronizeDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "data",
        "fct-source": "src/System-Fuse.html#SyncType",
        "fct-type": "data",
        "title": "SyncType"
      },
      "index": {
        "description": "Used by fuseSynchronizeFile and fuseSynchronizeDirectory",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "SyncType",
        "normalized": "",
        "package": "HFuse",
        "partial": "Sync Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:BlockSpecial",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "BlockSpecial",
        "fct-source": "src/System-Fuse.html#EntryType",
        "fct-type": "function",
        "title": "BlockSpecial"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "BlockSpecial",
        "normalized": "",
        "package": "HFuse",
        "partial": "Block Special",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:CharacterSpecial",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "CharacterSpecial",
        "fct-source": "src/System-Fuse.html#EntryType",
        "fct-type": "function",
        "title": "CharacterSpecial"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "CharacterSpecial",
        "normalized": "",
        "package": "HFuse",
        "partial": "Character Special",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:DataSync",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronize only the file content.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "DataSync",
        "fct-source": "src/System-Fuse.html#SyncType",
        "fct-type": "function",
        "title": "DataSync"
      },
      "index": {
        "description": "Synchronize only the file content",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "DataSync",
        "normalized": "",
        "package": "HFuse",
        "partial": "Data Sync",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:Directory",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Directory",
        "fct-source": "src/System-Fuse.html#EntryType",
        "fct-type": "function",
        "title": "Directory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "Directory",
        "normalized": "",
        "package": "HFuse",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:FileStat",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FileStat",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "FileStat"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "FileStat",
        "normalized": "",
        "package": "HFuse",
        "partial": "File Stat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:FileSystemStats",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FileSystemStats",
        "fct-source": "src/System-Fuse.html#FileSystemStats",
        "fct-type": "function",
        "title": "FileSystemStats"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "FileSystemStats",
        "normalized": "",
        "package": "HFuse",
        "partial": "File System Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:FullSync",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronize all in-core parts of a file to disk: file content and\n metadata.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FullSync",
        "fct-source": "src/System-Fuse.html#SyncType",
        "fct-type": "function",
        "title": "FullSync"
      },
      "index": {
        "description": "Synchronize all in-core parts of file to disk file content and metadata",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "FullSync",
        "normalized": "",
        "package": "HFuse",
        "partial": "Full Sync",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:FuseOperations",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FuseOperations",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "FuseOperations"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "FuseOperations",
        "normalized": "",
        "package": "HFuse",
        "partial": "Fuse Operations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:NamedPipe",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "NamedPipe",
        "fct-source": "src/System-Fuse.html#EntryType",
        "fct-type": "function",
        "title": "NamedPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "NamedPipe",
        "normalized": "",
        "package": "HFuse",
        "partial": "Named Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:OpenFileFlags",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "OpenFileFlags",
        "fct-type": "function",
        "title": "OpenFileFlags"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "OpenFileFlags",
        "normalized": "",
        "package": "HFuse",
        "partial": "Open File Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:ReadOnly",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "ReadOnly",
        "fct-type": "function",
        "title": "ReadOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "ReadOnly",
        "normalized": "",
        "package": "HFuse",
        "partial": "Read Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:ReadWrite",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "ReadWrite",
        "fct-type": "function",
        "title": "ReadWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "ReadWrite",
        "normalized": "",
        "package": "HFuse",
        "partial": "Read Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:RegularFile",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "RegularFile",
        "fct-source": "src/System-Fuse.html#EntryType",
        "fct-type": "function",
        "title": "RegularFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "RegularFile",
        "normalized": "",
        "package": "HFuse",
        "partial": "Regular File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:Socket",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Socket",
        "fct-source": "src/System-Fuse.html#EntryType",
        "fct-type": "function",
        "title": "Socket"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "Socket",
        "normalized": "",
        "package": "HFuse",
        "partial": "Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:SymbolicLink",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "SymbolicLink",
        "fct-source": "src/System-Fuse.html#EntryType",
        "fct-type": "function",
        "title": "SymbolicLink"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "SymbolicLink",
        "normalized": "",
        "package": "HFuse",
        "partial": "Symbolic Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:Unknown",
      "description": {
        "fct-descr": "\u003cp\u003eUnknown entry type\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Unknown",
        "fct-source": "src/System-Fuse.html#EntryType",
        "fct-type": "function",
        "title": "Unknown"
      },
      "index": {
        "description": "Unknown entry type",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "Unknown",
        "normalized": "",
        "package": "HFuse",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:WriteOnly",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "WriteOnly",
        "fct-type": "function",
        "title": "WriteOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "WriteOnly",
        "normalized": "",
        "package": "HFuse",
        "partial": "Write Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eO_APPEND\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "APPEND",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "append",
        "normalized": "",
        "package": "HFuse",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:defaultExceptionHandler",
      "description": {
        "fct-descr": "\u003cp\u003eDefault exception handler.\n Print the exception on error output and returns \u003ccode\u003e\u003ca\u003eeFAULT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "SomeException -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#defaultExceptionHandler",
        "fct-type": "function",
        "title": "defaultExceptionHandler"
      },
      "index": {
        "description": "Default exception handler Print the exception on error output and returns eFAULT",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "defaultExceptionHandler",
        "normalized": "SomeException-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Exception Handler",
        "signature": "SomeException-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:defaultFuseOps",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty / default versions of the FUSE operations.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FuseOperations fh",
        "fct-source": "src/System-Fuse.html#defaultFuseOps",
        "fct-type": "function",
        "title": "defaultFuseOps"
      },
      "index": {
        "description": "Empty default versions of the FUSE operations",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "defaultFuseOps",
        "normalized": "",
        "package": "HFuse",
        "partial": "Fuse Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:entryTypeToFileMode",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eEntryType\u003c/a\u003e\u003c/code\u003e into the corresponding POSIX \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "EntryType -\u003e FileMode",
        "fct-source": "src/System-Fuse.html#entryTypeToFileMode",
        "fct-type": "function",
        "title": "entryTypeToFileMode"
      },
      "index": {
        "description": "Converts an EntryType into the corresponding POSIX FileMode",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "entryTypeToFileMode",
        "normalized": "EntryType-\u003eFileMode",
        "package": "HFuse",
        "partial": "Type To File Mode",
        "signature": "EntryType-\u003eFileMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:exclusive",
      "description": {
        "fct-descr": "\u003cp\u003eO_EXCL\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "exclusive"
      },
      "index": {
        "description": "EXCL",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "exclusive",
        "normalized": "",
        "package": "HFuse",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fileModeToEntryType",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FileMode -\u003e EntryType",
        "fct-source": "src/System-Fuse.html#fileModeToEntryType",
        "fct-type": "function",
        "title": "fileModeToEntryType"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fileModeToEntryType",
        "normalized": "FileMode-\u003eEntryType",
        "package": "HFuse",
        "partial": "Mode To Entry Type",
        "signature": "FileMode-\u003eEntryType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatBlockCount",
      "description": {
        "fct-descr": "\u003cp\u003eTotal data blocks in file system.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Integer",
        "fct-source": "src/System-Fuse.html#FileSystemStats",
        "fct-type": "function",
        "title": "fsStatBlockCount"
      },
      "index": {
        "description": "Total data blocks in file system",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fsStatBlockCount",
        "normalized": "",
        "package": "HFuse",
        "partial": "Stat Block Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatBlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eOptimal transfer block size. FUSE default is 512.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Integer",
        "fct-source": "src/System-Fuse.html#FileSystemStats",
        "fct-type": "function",
        "title": "fsStatBlockSize"
      },
      "index": {
        "description": "Optimal transfer block size FUSE default is",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fsStatBlockSize",
        "normalized": "",
        "package": "HFuse",
        "partial": "Stat Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatBlocksAvailable",
      "description": {
        "fct-descr": "\u003cp\u003eFree blocks available to non-superusers.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Integer",
        "fct-source": "src/System-Fuse.html#FileSystemStats",
        "fct-type": "function",
        "title": "fsStatBlocksAvailable"
      },
      "index": {
        "description": "Free blocks available to non-superusers",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fsStatBlocksAvailable",
        "normalized": "",
        "package": "HFuse",
        "partial": "Stat Blocks Available",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatBlocksFree",
      "description": {
        "fct-descr": "\u003cp\u003eFree blocks in file system.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Integer",
        "fct-source": "src/System-Fuse.html#FileSystemStats",
        "fct-type": "function",
        "title": "fsStatBlocksFree"
      },
      "index": {
        "description": "Free blocks in file system",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fsStatBlocksFree",
        "normalized": "",
        "package": "HFuse",
        "partial": "Stat Blocks Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatFileCount",
      "description": {
        "fct-descr": "\u003cp\u003eTotal file nodes in file system.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Integer",
        "fct-source": "src/System-Fuse.html#FileSystemStats",
        "fct-type": "function",
        "title": "fsStatFileCount"
      },
      "index": {
        "description": "Total file nodes in file system",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fsStatFileCount",
        "normalized": "",
        "package": "HFuse",
        "partial": "Stat File Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatFilesFree",
      "description": {
        "fct-descr": "\u003cp\u003eFree file nodes in file system.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Integer",
        "fct-source": "src/System-Fuse.html#FileSystemStats",
        "fct-type": "function",
        "title": "fsStatFilesFree"
      },
      "index": {
        "description": "Free file nodes in file system",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fsStatFilesFree",
        "normalized": "",
        "package": "HFuse",
        "partial": "Stat Files Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatMaxNameLength",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum length of filenames. FUSE default is 255.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Integer",
        "fct-source": "src/System-Fuse.html#FileSystemStats",
        "fct-type": "function",
        "title": "fsStatMaxNameLength"
      },
      "index": {
        "description": "Maximum length of filenames FUSE default is",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fsStatMaxNameLength",
        "normalized": "",
        "package": "HFuse",
        "partial": "Stat Max Name Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseAccess",
      "description": {
        "fct-descr": "\u003cp\u003eCheck file access permissions; this will be called for the\n   access() system call.  If the \u003ccode\u003edefault_permissions\u003c/code\u003e mount option\n   is given, this method is not called.  This method is also not\n   called under Linux kernel versions 2.4.x\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e Int -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseAccess"
      },
      "index": {
        "description": "Check file access permissions this will be called for the access system call If the default permissions mount option is given this method is not called This method is also not called under Linux kernel versions",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseAccess",
        "normalized": "FilePath-\u003eInt-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Access",
        "signature": "FilePath-\u003eInt-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseCreateDevice",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ecreateDevice\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003emknod(2)\u003c/code\u003e).\n   This function will also be called for regular file creation.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e EntryType -\u003e FileMode -\u003e DeviceID -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseCreateDevice"
      },
      "index": {
        "description": "Implements createDevice POSIX mknod This function will also be called for regular file creation",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseCreateDevice",
        "normalized": "FilePath-\u003eEntryType-\u003eFileMode-\u003eDeviceID-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Create Device",
        "signature": "FilePath-\u003eEntryType-\u003eFileMode-\u003eDeviceID-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseCreateDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ecreateDirectory\u003c/a\u003e\u003c/code\u003e (POSIX\n   \u003ccode\u003emkdir(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e FileMode -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseCreateDirectory"
      },
      "index": {
        "description": "Implements createDirectory POSIX mkdir",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseCreateDirectory",
        "normalized": "FilePath-\u003eFileMode-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Create Directory",
        "signature": "FilePath-\u003eFileMode-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseCreateLink",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ecreateLink\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003elink(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseCreateLink"
      },
      "index": {
        "description": "Implements createLink POSIX link",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseCreateLink",
        "normalized": "FilePath-\u003eFilePath-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Create Link",
        "signature": "FilePath-\u003eFilePath-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseCreateSymbolicLink",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ecreateSymbolicLink\u003c/a\u003e\u003c/code\u003e (POSIX\n   \u003ccode\u003esymlink(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseCreateSymbolicLink"
      },
      "index": {
        "description": "Implements createSymbolicLink POSIX symlink",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseCreateSymbolicLink",
        "normalized": "FilePath-\u003eFilePath-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Create Symbolic Link",
        "signature": "FilePath-\u003eFilePath-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseDestroy",
      "description": {
        "fct-descr": "\u003cp\u003eCalled on filesystem exit to allow cleanup.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseDestroy"
      },
      "index": {
        "description": "Called on filesystem exit to allow cleanup",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseDestroy",
        "normalized": "IO()",
        "package": "HFuse",
        "partial": "Destroy",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseFlush",
      "description": {
        "fct-descr": "\u003cp\u003eCalled when \u003ccode\u003eclose(2)\u003c/code\u003e has been called on an open file.\n   Note: this does not mean that the file is released.  This function may be\n   called more than once for each \u003ccode\u003eopen(2)\u003c/code\u003e.  The return value is passed on\n   to the \u003ccode\u003eclose(2)\u003c/code\u003e system call.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e fh -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseFlush"
      },
      "index": {
        "description": "Called when close has been called on an open file Note this does not mean that the file is released This function may be called more than once for each open The return value is passed on to the close system call",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseFlush",
        "normalized": "FilePath-\u003ea-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Flush",
        "signature": "FilePath-\u003efh-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseGetFileStat",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003egetSymbolicLinkStatus\u003c/a\u003e\u003c/code\u003e operation\n   (POSIX \u003ccode\u003elstat(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e IO (Either Errno FileStat)",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseGetFileStat"
      },
      "index": {
        "description": "Implements getSymbolicLinkStatus operation POSIX lstat",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseGetFileStat",
        "normalized": "FilePath-\u003eIO(Either Errno FileStat)",
        "package": "HFuse",
        "partial": "Get File Stat",
        "signature": "FilePath-\u003eIO(Either Errno FileStat)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseGetFileSystemStats",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003estatfs(2)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "String -\u003e IO (Either Errno FileSystemStats)",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseGetFileSystemStats"
      },
      "index": {
        "description": "Implements statfs",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseGetFileSystemStats",
        "normalized": "String-\u003eIO(Either Errno FileSystemStats)",
        "package": "HFuse",
        "partial": "Get File System Stats",
        "signature": "String-\u003eIO(Either Errno FileSystemStats)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes the filesystem.  This is called before all other\n   operations.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseInit"
      },
      "index": {
        "description": "Initializes the filesystem This is called before all other operations",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseInit",
        "normalized": "IO()",
        "package": "HFuse",
        "partial": "Init",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseMain",
      "description": {
        "fct-descr": "\u003cp\u003eMain function of FUSE.\n This is all that has to be called from the \u003ccode\u003emain\u003c/code\u003e function. On top of\n the \u003ccode\u003e\u003ca\u003eFuseOperations\u003c/a\u003e\u003c/code\u003e record with filesystem implementation, you must give\n an exception handler converting Haskell exceptions to \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e parses command line options (\u003ccode\u003e-d\u003c/code\u003e, \u003ccode\u003e-s\u003c/code\u003e and \u003ccode\u003e-h\u003c/code\u003e) ;\n\u003c/li\u003e\u003cli\u003e passes all options after \u003ccode\u003e--\u003c/code\u003e to the fusermount program ;\n\u003c/li\u003e\u003cli\u003e mounts the filesystem by calling \u003ccode\u003efusermount\u003c/code\u003e ;\n\u003c/li\u003e\u003cli\u003e installs signal handlers for \u003ccode\u003e\u003ca\u003ekeyboardSignal\u003c/a\u003e\u003c/code\u003e,\n     \u003ccode\u003e\u003ca\u003elostConnection\u003c/a\u003e\u003c/code\u003e,\n     \u003ccode\u003e\u003ca\u003esoftwareTermination\u003c/a\u003e\u003c/code\u003e and\n     \u003ccode\u003e\u003ca\u003eopenEndedPipe\u003c/a\u003e\u003c/code\u003e ;\n\u003c/li\u003e\u003cli\u003e registers an exit handler to unmount the filesystem on program exit ;\n\u003c/li\u003e\u003cli\u003e registers the operations ;\n\u003c/li\u003e\u003cli\u003e calls FUSE event loop.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FuseOperations fh -\u003e (e -\u003e IO Errno) -\u003e IO ()",
        "fct-source": "src/System-Fuse.html#fuseMain",
        "fct-type": "function",
        "title": "fuseMain"
      },
      "index": {
        "description": "Main function of FUSE This is all that has to be called from the main function On top of the FuseOperations record with filesystem implementation you must give an exception handler converting Haskell exceptions to Errno This function does the following parses command line options and passes all options after to the fusermount program mounts the filesystem by calling fusermount installs signal handlers for keyboardSignal lostConnection softwareTermination and openEndedPipe registers an exit handler to unmount the filesystem on program exit registers the operations calls FUSE event loop",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseMain",
        "normalized": "FuseOperations a-\u003e(b-\u003eIO Errno)-\u003eIO()",
        "package": "HFuse",
        "partial": "Main",
        "signature": "FuseOperations fh-\u003e(e-\u003eIO Errno)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseOpen",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003eopenFd\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003eopen(2)\u003c/code\u003e).  On\n   success, returns \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e of a filehandle-like value that will be\n   passed to future file operations; on failure, returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e of the\n   appropriate \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNo creation, exclusive access or truncating flags will be passed.\n   This should check that the operation is permitted for the given\n   flags.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e OpenMode -\u003e OpenFileFlags -\u003e IO (Either Errno fh)",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseOpen"
      },
      "index": {
        "description": "Implements openFd POSIX open On success returns Right of filehandle-like value that will be passed to future file operations on failure returns Left of the appropriate Errno No creation exclusive access or truncating flags will be passed This should check that the operation is permitted for the given flags",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseOpen",
        "normalized": "FilePath-\u003eOpenMode-\u003eOpenFileFlags-\u003eIO(Either Errno a)",
        "package": "HFuse",
        "partial": "Open",
        "signature": "FilePath-\u003eOpenMode-\u003eOpenFileFlags-\u003eIO(Either Errno fh)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseOpenDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003eopendir(3)\u003c/code\u003e.  This method should check if the open\n   operation is permitted for this directory.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseOpenDirectory"
      },
      "index": {
        "description": "Implements opendir This method should check if the open operation is permitted for this directory",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseOpenDirectory",
        "normalized": "FilePath-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Open Directory",
        "signature": "FilePath-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRead",
      "description": {
        "fct-descr": "\u003cp\u003eImplements Unix98 \u003ccode\u003epread(2)\u003c/code\u003e. It differs from\n   \u003ccode\u003e\u003ca\u003efdRead\u003c/a\u003e\u003c/code\u003e by the explicit \u003ccode\u003e\u003ca\u003eFileOffset\u003c/a\u003e\u003c/code\u003e argument.\n   The \u003ccode\u003efuse.h\u003c/code\u003e documentation stipulates that this \"should return\n   exactly the number of bytes requested except on EOF or error,\n   otherwise the rest of the data will be substituted with zeroes.\"\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e fh -\u003e ByteCount -\u003e FileOffset -\u003e IO (Either Errno ByteString)",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseRead"
      },
      "index": {
        "description": "Implements Unix98 pread It differs from fdRead by the explicit FileOffset argument The fuse.h documentation stipulates that this should return exactly the number of bytes requested except on EOF or error otherwise the rest of the data will be substituted with zeroes",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseRead",
        "normalized": "FilePath-\u003ea-\u003eByteCount-\u003eFileOffset-\u003eIO(Either Errno ByteString)",
        "package": "HFuse",
        "partial": "Read",
        "signature": "FilePath-\u003efh-\u003eByteCount-\u003eFileOffset-\u003eIO(Either Errno ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseReadDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003ereaddir(3)\u003c/code\u003e.  The entire contents of the directory\n   should be returned as a list of tuples (corresponding to the first\n   mode of operation documented in \u003ccode\u003efuse.h\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e IO (Either Errno [(FilePath, FileStat)])",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseReadDirectory"
      },
      "index": {
        "description": "Implements readdir The entire contents of the directory should be returned as list of tuples corresponding to the first mode of operation documented in fuse.h",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseReadDirectory",
        "normalized": "FilePath-\u003eIO(Either Errno[(FilePath,FileStat)])",
        "package": "HFuse",
        "partial": "Read Directory",
        "signature": "FilePath-\u003eIO(Either Errno[(FilePath,FileStat)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseReadSymbolicLink",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ereadSymbolicLink\u003c/a\u003e\u003c/code\u003e operation (POSIX\n   \u003ccode\u003ereadlink(2)\u003c/code\u003e).  The returned \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e might be truncated\n   depending on caller buffer size.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e IO (Either Errno FilePath)",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseReadSymbolicLink"
      },
      "index": {
        "description": "Implements readSymbolicLink operation POSIX readlink The returned FilePath might be truncated depending on caller buffer size",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseReadSymbolicLink",
        "normalized": "FilePath-\u003eIO(Either Errno FilePath)",
        "package": "HFuse",
        "partial": "Read Symbolic Link",
        "signature": "FilePath-\u003eIO(Either Errno FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRelease",
      "description": {
        "fct-descr": "\u003cp\u003eCalled when an open file has all file descriptors closed and all\n memory mappings unmapped.  For every \u003ccode\u003eopen\u003c/code\u003e call there will be\n exactly one \u003ccode\u003erelease\u003c/code\u003e call with the same flags.  It is possible to\n have a file opened more than once, in which case only the last\n release will mean that no more reads or writes will happen on the\n file.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e fh -\u003e IO ()",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseRelease"
      },
      "index": {
        "description": "Called when an open file has all file descriptors closed and all memory mappings unmapped For every open call there will be exactly one release call with the same flags It is possible to have file opened more than once in which case only the last release will mean that no more reads or writes will happen on the file",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseRelease",
        "normalized": "FilePath-\u003ea-\u003eIO()",
        "package": "HFuse",
        "partial": "Release",
        "signature": "FilePath-\u003efh-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseReleaseDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003eclosedir(3)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseReleaseDirectory"
      },
      "index": {
        "description": "Implements closedir",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseReleaseDirectory",
        "normalized": "FilePath-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Release Directory",
        "signature": "FilePath-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRemoveDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e (POSIX\n   \u003ccode\u003ermdir(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseRemoveDirectory"
      },
      "index": {
        "description": "Implements removeDirectory POSIX rmdir",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseRemoveDirectory",
        "normalized": "FilePath-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Remove Directory",
        "signature": "FilePath-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRemoveLink",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003eremoveLink\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003eunlink(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseRemoveLink"
      },
      "index": {
        "description": "Implements removeLink POSIX unlink",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseRemoveLink",
        "normalized": "FilePath-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Remove Link",
        "signature": "FilePath-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRename",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003erename(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseRename"
      },
      "index": {
        "description": "Implements rename POSIX rename",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseRename",
        "normalized": "FilePath-\u003eFilePath-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Rename",
        "signature": "FilePath-\u003eFilePath-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRun",
      "description": {
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FuseOperations fh -\u003e (e -\u003e IO Errno) -\u003e IO ()",
        "fct-source": "src/System-Fuse.html#fuseRun",
        "fct-type": "function",
        "title": "fuseRun"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseRun",
        "normalized": "FuseOperations a-\u003e(b-\u003eIO Errno)-\u003eIO()",
        "package": "HFuse",
        "partial": "Run",
        "signature": "FuseOperations fh-\u003e(e-\u003eIO Errno)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSetFileMode",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003esetFileMode\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003echmod(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e FileMode -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseSetFileMode"
      },
      "index": {
        "description": "Implements setFileMode POSIX chmod",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseSetFileMode",
        "normalized": "FilePath-\u003eFileMode-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Set File Mode",
        "signature": "FilePath-\u003eFileMode-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSetFileSize",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003esetFileSize\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003etruncate(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e FileOffset -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseSetFileSize"
      },
      "index": {
        "description": "Implements setFileSize POSIX truncate",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseSetFileSize",
        "normalized": "FilePath-\u003eFileOffset-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Set File Size",
        "signature": "FilePath-\u003eFileOffset-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSetFileTimes",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003esetFileTimes\u003c/a\u003e\u003c/code\u003e\n   (POSIX \u003ccode\u003eutime(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e EpochTime -\u003e EpochTime -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseSetFileTimes"
      },
      "index": {
        "description": "Implements setFileTimes POSIX utime",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseSetFileTimes",
        "normalized": "FilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Set File Times",
        "signature": "FilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSetOwnerAndGroup",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003esetOwnerAndGroup\u003c/a\u003e\u003c/code\u003e (POSIX\n   \u003ccode\u003echown(2)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e UserID -\u003e GroupID -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseSetOwnerAndGroup"
      },
      "index": {
        "description": "Implements setOwnerAndGroup POSIX chown",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseSetOwnerAndGroup",
        "normalized": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Set Owner And Group",
        "signature": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSynchronizeDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronize the directory's contents; analogous to\n   \u003ccode\u003e\u003ca\u003efuseSynchronizeFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e SyncType -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseSynchronizeDirectory"
      },
      "index": {
        "description": "Synchronize the directory contents analogous to fuseSynchronizeFile",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseSynchronizeDirectory",
        "normalized": "FilePath-\u003eSyncType-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Synchronize Directory",
        "signature": "FilePath-\u003eSyncType-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSynchronizeFile",
      "description": {
        "fct-descr": "\u003cp\u003eImplements \u003ccode\u003efsync(2)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e SyncType -\u003e IO Errno",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseSynchronizeFile"
      },
      "index": {
        "description": "Implements fsync",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseSynchronizeFile",
        "normalized": "FilePath-\u003eSyncType-\u003eIO Errno",
        "package": "HFuse",
        "partial": "Synchronize File",
        "signature": "FilePath-\u003eSyncType-\u003eIO Errno"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseWrite",
      "description": {
        "fct-descr": "\u003cp\u003eImplements Unix98 \u003ccode\u003epwrite(2)\u003c/code\u003e. It differs\n   from \u003ccode\u003e\u003ca\u003efdWrite\u003c/a\u003e\u003c/code\u003e by the explicit \u003ccode\u003e\u003ca\u003eFileOffset\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FilePath -\u003e fh -\u003e ByteString -\u003e FileOffset -\u003e IO (Either Errno ByteCount)",
        "fct-source": "src/System-Fuse.html#FuseOperations",
        "fct-type": "function",
        "title": "fuseWrite"
      },
      "index": {
        "description": "Implements Unix98 pwrite It differs from fdWrite by the explicit FileOffset argument",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "fuseWrite",
        "normalized": "FilePath-\u003ea-\u003eByteString-\u003eFileOffset-\u003eIO(Either Errno ByteCount)",
        "package": "HFuse",
        "partial": "Write",
        "signature": "FilePath-\u003efh-\u003eByteString-\u003eFileOffset-\u003eIO(Either Errno ByteCount)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:getFuseContext",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the context of the program doing the current FUSE call.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "IO FuseContext",
        "fct-source": "src/System-Fuse.html#getFuseContext",
        "fct-type": "function",
        "title": "getFuseContext"
      },
      "index": {
        "description": "Returns the context of the program doing the current FUSE call",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "getFuseContext",
        "normalized": "",
        "package": "HFuse",
        "partial": "Fuse Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:intersectFileModes",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two file modes into one that only contains modes that appear in\n both.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FileMode -\u003e FileMode -\u003e FileMode",
        "fct-type": "function",
        "title": "intersectFileModes"
      },
      "index": {
        "description": "Combines two file modes into one that only contains modes that appear in both",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "intersectFileModes",
        "normalized": "FileMode-\u003eFileMode-\u003eFileMode",
        "package": "HFuse",
        "partial": "File Modes",
        "signature": "FileMode-\u003eFileMode-\u003eFileMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:noctty",
      "description": {
        "fct-descr": "\u003cp\u003eO_NOCTTY\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "noctty"
      },
      "index": {
        "description": "NOCTTY",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "noctty",
        "normalized": "",
        "package": "HFuse",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:nonBlock",
      "description": {
        "fct-descr": "\u003cp\u003eO_NONBLOCK\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "nonBlock"
      },
      "index": {
        "description": "NONBLOCK",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "nonBlock",
        "normalized": "",
        "package": "HFuse",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statAccessTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "EpochTime",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statAccessTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statAccessTime",
        "normalized": "",
        "package": "HFuse",
        "partial": "Access Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statBlocks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Integer",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statBlocks"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statBlocks",
        "normalized": "",
        "package": "HFuse",
        "partial": "Blocks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statEntryType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "EntryType",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statEntryType"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statEntryType",
        "normalized": "",
        "package": "HFuse",
        "partial": "Entry Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statFileGroup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "GroupID",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statFileGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statFileGroup",
        "normalized": "",
        "package": "HFuse",
        "partial": "File Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statFileMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FileMode",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statFileMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statFileMode",
        "normalized": "",
        "package": "HFuse",
        "partial": "File Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statFileOwner",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "UserID",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statFileOwner"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statFileOwner",
        "normalized": "",
        "package": "HFuse",
        "partial": "File Owner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statFileSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FileOffset",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statFileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statFileSize",
        "normalized": "",
        "package": "HFuse",
        "partial": "File Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statLinkCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "LinkCount",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statLinkCount"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statLinkCount",
        "normalized": "",
        "package": "HFuse",
        "partial": "Link Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statModificationTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "EpochTime",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statModificationTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statModificationTime",
        "normalized": "",
        "package": "HFuse",
        "partial": "Modification Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statSpecialDeviceID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "DeviceID",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statSpecialDeviceID"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statSpecialDeviceID",
        "normalized": "",
        "package": "HFuse",
        "partial": "Special Device ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statStatusChangeTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "EpochTime",
        "fct-source": "src/System-Fuse.html#FileStat",
        "fct-type": "function",
        "title": "statStatusChangeTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "statStatusChangeTime",
        "normalized": "",
        "package": "HFuse",
        "partial": "Status Change Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:trunc",
      "description": {
        "fct-descr": "\u003cp\u003eO_TRUNC\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "trunc"
      },
      "index": {
        "description": "TRUNC",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "trunc",
        "normalized": "",
        "package": "HFuse",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:unionFileModes",
      "description": {
        "fct-descr": "\u003cp\u003eCombines the two file modes into one that contains modes that appear in\n either.\n\u003c/p\u003e",
        "fct-module": "System.Fuse",
        "fct-package": "HFuse",
        "fct-signature": "FileMode -\u003e FileMode -\u003e FileMode",
        "fct-type": "function",
        "title": "unionFileModes"
      },
      "index": {
        "description": "Combines the two file modes into one that contains modes that appear in either",
        "hierarchy": "System Fuse",
        "module": "System.Fuse",
        "name": "unionFileModes",
        "normalized": "FileMode-\u003eFileMode-\u003eFileMode",
        "package": "HFuse",
        "partial": "File Modes",
        "signature": "FileMode-\u003eFileMode-\u003eFileMode"
      }
    }
  }
]