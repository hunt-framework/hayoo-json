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
        "word": "HFuse"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA binding for the FUSE (Filesystem in USErspace) library\n (\u003ca\u003ehttp://fuse.sourceforge.net/\u003c/a\u003e), which allows filesystems to be implemented\n as userspace processes.\n\u003c/p\u003e\u003cp\u003eThe binding tries to follow as much as possible current Haskell POSIX\n interface in \u003ca\u003eSystem.Posix.Files\u003c/a\u003e and \u003ca\u003eSystem.Posix.Directory\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eFUSE uses POSIX threads, so any Haskell application using this library must\n be linked against a threaded runtime system (eg. using the \u003ccode\u003ethreaded\u003c/code\u003e GHC\n option).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Fuse",
          "name": "Fuse",
          "package": "HFuse",
          "source": "src/System-Fuse.html",
          "type": "module"
        },
        "index": {
          "description": "binding for the FUSE Filesystem in USErspace library http fuse.sourceforge.net which allows filesystems to be implemented as userspace processes The binding tries to follow as much as possible current Haskell POSIX interface in System.Posix.Files and System.Posix.Directory FUSE uses POSIX threads so any Haskell application using this library must be linked against threaded runtime system eg using the threaded GHC option",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "Fuse",
          "package": "HFuse",
          "partial": "Fuse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Unix type of a node in the filesystem.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "EntryType",
          "package": "HFuse",
          "source": "src/System-Fuse.html#EntryType",
          "type": "data"
        },
        "index": {
          "description": "The Unix type of node in the filesystem",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "EntryType",
          "package": "HFuse",
          "partial": "Entry Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:EntryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003efuseGetFileStat\u003c/a\u003e\u003c/code\u003e.  Corresponds to \u003ccode\u003estruct stat\u003c/code\u003e from \u003ccode\u003estat.h\u003c/code\u003e;\n     \u003ccode\u003est_dev\u003c/code\u003e, \u003ccode\u003est_ino\u003c/code\u003e and \u003ccode\u003est_blksize\u003c/code\u003e are omitted, since (from the libfuse\n     documentation): \"the \u003ccode\u003est_dev\u003c/code\u003e and \u003ccode\u003est_blksize\u003c/code\u003e fields are ignored.  The\n     \u003ccode\u003est_ino\u003c/code\u003e field is ignored except if the use_ino mount option is given.\"\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO: at some point the inode field will probably be needed.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "FileStat",
          "package": "HFuse",
          "source": "src/System-Fuse.html#FileStat",
          "type": "data"
        },
        "index": {
          "description": "Used by fuseGetFileStat Corresponds to struct stat from stat.h st dev st ino and st blksize are omitted since from the libfuse documentation the st dev and st blksize fields are ignored The st ino field is ignored except if the use ino mount option is given TODO at some point the inode field will probably be needed",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "FileStat",
          "package": "HFuse",
          "partial": "File Stat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:FileStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType used by the \u003ccode\u003e\u003ca\u003efuseGetFileSystemStats\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "FileSystemStats",
          "package": "HFuse",
          "source": "src/System-Fuse.html#FileSystemStats",
          "type": "data"
        },
        "index": {
          "description": "Type used by the fuseGetFileSystemStats",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "FileSystemStats",
          "package": "HFuse",
          "partial": "File System Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:FileSystemStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturned by \u003ccode\u003e\u003ca\u003egetFuseContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "FuseContext",
          "package": "HFuse",
          "source": "src/System-Fuse.html#FuseContext",
          "type": "data"
        },
        "index": {
          "description": "Returned by getFuseContext",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "FuseContext",
          "package": "HFuse",
          "partial": "Fuse Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:FuseContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis record, given to \u003ccode\u003e\u003ca\u003efuseMain\u003c/a\u003e\u003c/code\u003e, binds each required file system\n   operations.\n\u003c/p\u003e\u003cp\u003eEach field is named against \u003ccode\u003e\u003ca\u003ePosix\u003c/a\u003e\u003c/code\u003e names. Matching Linux system\n   calls are also given as a reference.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efh\u003c/code\u003e is the file handle type returned by \u003ccode\u003e\u003ca\u003efuseOpen\u003c/a\u003e\u003c/code\u003e and subsequently passed\n   to all other file operations.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "FuseOperations",
          "package": "HFuse",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "data"
        },
        "index": {
          "description": "This record given to fuseMain binds each required file system operations Each field is named against Posix names Matching Linux system calls are also given as reference fh is the file handle type returned by fuseOpen and subsequently passed to all other file operations",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "FuseOperations",
          "package": "HFuse",
          "partial": "Fuse Operations",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:FuseOperations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrespond to some of the int flags from C's fcntl.h.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "OpenFileFlags",
          "package": "HFuse",
          "type": "data"
        },
        "index": {
          "description": "Correspond to some of the int flags from fcntl.h",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "OpenFileFlags",
          "package": "HFuse",
          "partial": "Open File Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:OpenFileFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "OpenMode",
          "package": "HFuse",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "OpenMode",
          "package": "HFuse",
          "partial": "Open Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:OpenMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003efuseSynchronizeFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efuseSynchronizeDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "SyncType",
          "package": "HFuse",
          "source": "src/System-Fuse.html#SyncType",
          "type": "data"
        },
        "index": {
          "description": "Used by fuseSynchronizeFile and fuseSynchronizeDirectory",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "SyncType",
          "package": "HFuse",
          "partial": "Sync Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#t:SyncType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "BlockSpecial",
          "package": "HFuse",
          "signature": "BlockSpecial",
          "source": "src/System-Fuse.html#EntryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "BlockSpecial",
          "package": "HFuse",
          "partial": "Block Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:BlockSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "CharacterSpecial",
          "package": "HFuse",
          "signature": "CharacterSpecial",
          "source": "src/System-Fuse.html#EntryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "CharacterSpecial",
          "package": "HFuse",
          "partial": "Character Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:CharacterSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronize only the file content.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "DataSync",
          "package": "HFuse",
          "signature": "DataSync",
          "source": "src/System-Fuse.html#SyncType",
          "type": "function"
        },
        "index": {
          "description": "Synchronize only the file content",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "DataSync",
          "package": "HFuse",
          "partial": "Data Sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:DataSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "Directory",
          "package": "HFuse",
          "signature": "Directory",
          "source": "src/System-Fuse.html#EntryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "Directory",
          "package": "HFuse",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "FileStat",
          "package": "HFuse",
          "signature": "FileStat",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "FileStat",
          "package": "HFuse",
          "partial": "File Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:FileStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "FileSystemStats",
          "package": "HFuse",
          "signature": "FileSystemStats",
          "source": "src/System-Fuse.html#FileSystemStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "FileSystemStats",
          "package": "HFuse",
          "partial": "File System Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:FileSystemStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronize all in-core parts of a file to disk: file content and\n metadata.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "FullSync",
          "package": "HFuse",
          "signature": "FullSync",
          "source": "src/System-Fuse.html#SyncType",
          "type": "function"
        },
        "index": {
          "description": "Synchronize all in-core parts of file to disk file content and metadata",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "FullSync",
          "package": "HFuse",
          "partial": "Full Sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:FullSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "FuseOperations",
          "package": "HFuse",
          "signature": "FuseOperations",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "FuseOperations",
          "package": "HFuse",
          "partial": "Fuse Operations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:FuseOperations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "NamedPipe",
          "package": "HFuse",
          "signature": "NamedPipe",
          "source": "src/System-Fuse.html#EntryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "NamedPipe",
          "package": "HFuse",
          "partial": "Named Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:NamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "OpenFileFlags",
          "package": "HFuse",
          "signature": "OpenFileFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "OpenFileFlags",
          "package": "HFuse",
          "partial": "Open File Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:OpenFileFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "ReadOnly",
          "package": "HFuse",
          "signature": "ReadOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "ReadOnly",
          "package": "HFuse",
          "partial": "Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:ReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "ReadWrite",
          "package": "HFuse",
          "signature": "ReadWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "ReadWrite",
          "package": "HFuse",
          "partial": "Read Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:ReadWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "RegularFile",
          "package": "HFuse",
          "signature": "RegularFile",
          "source": "src/System-Fuse.html#EntryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "RegularFile",
          "package": "HFuse",
          "partial": "Regular File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:RegularFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "Socket",
          "package": "HFuse",
          "signature": "Socket",
          "source": "src/System-Fuse.html#EntryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "Socket",
          "package": "HFuse",
          "partial": "Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "SymbolicLink",
          "package": "HFuse",
          "signature": "SymbolicLink",
          "source": "src/System-Fuse.html#EntryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "SymbolicLink",
          "package": "HFuse",
          "partial": "Symbolic Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:SymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnknown entry type\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "Unknown",
          "package": "HFuse",
          "signature": "Unknown",
          "source": "src/System-Fuse.html#EntryType",
          "type": "function"
        },
        "index": {
          "description": "Unknown entry type",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "Unknown",
          "package": "HFuse",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "WriteOnly",
          "package": "HFuse",
          "signature": "WriteOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "WriteOnly",
          "package": "HFuse",
          "partial": "Write Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:WriteOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_APPEND\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "append",
          "package": "HFuse",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "APPEND",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "append",
          "package": "HFuse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault exception handler.\n Print the exception on error output and returns \u003ccode\u003e\u003ca\u003eeFAULT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "defaultExceptionHandler",
          "package": "HFuse",
          "signature": "SomeException -\u003e IO Errno",
          "source": "src/System-Fuse.html#defaultExceptionHandler",
          "type": "function"
        },
        "index": {
          "description": "Default exception handler Print the exception on error output and returns eFAULT",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "defaultExceptionHandler",
          "normalized": "SomeException-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Exception Handler",
          "signature": "SomeException-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:defaultExceptionHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty / default versions of the FUSE operations.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "defaultFuseOps",
          "package": "HFuse",
          "signature": "FuseOperations fh",
          "source": "src/System-Fuse.html#defaultFuseOps",
          "type": "function"
        },
        "index": {
          "description": "Empty default versions of the FUSE operations",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "defaultFuseOps",
          "package": "HFuse",
          "partial": "Fuse Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:defaultFuseOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eEntryType\u003c/a\u003e\u003c/code\u003e into the corresponding POSIX \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "entryTypeToFileMode",
          "package": "HFuse",
          "signature": "EntryType -\u003e FileMode",
          "source": "src/System-Fuse.html#entryTypeToFileMode",
          "type": "function"
        },
        "index": {
          "description": "Converts an EntryType into the corresponding POSIX FileMode",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "entryTypeToFileMode",
          "normalized": "EntryType-\u003eFileMode",
          "package": "HFuse",
          "partial": "Type To File Mode",
          "signature": "EntryType-\u003eFileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:entryTypeToFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_EXCL\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "exclusive",
          "package": "HFuse",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "EXCL",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "exclusive",
          "package": "HFuse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:exclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "fileModeToEntryType",
          "package": "HFuse",
          "signature": "FileMode -\u003e EntryType",
          "source": "src/System-Fuse.html#fileModeToEntryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fileModeToEntryType",
          "normalized": "FileMode-\u003eEntryType",
          "package": "HFuse",
          "partial": "Mode To Entry Type",
          "signature": "FileMode-\u003eEntryType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fileModeToEntryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal data blocks in file system.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fsStatBlockCount",
          "package": "HFuse",
          "signature": "Integer",
          "source": "src/System-Fuse.html#FileSystemStats",
          "type": "function"
        },
        "index": {
          "description": "Total data blocks in file system",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fsStatBlockCount",
          "package": "HFuse",
          "partial": "Stat Block Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatBlockCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimal transfer block size. FUSE default is 512.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fsStatBlockSize",
          "package": "HFuse",
          "signature": "Integer",
          "source": "src/System-Fuse.html#FileSystemStats",
          "type": "function"
        },
        "index": {
          "description": "Optimal transfer block size FUSE default is",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fsStatBlockSize",
          "package": "HFuse",
          "partial": "Stat Block Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree blocks available to non-superusers.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fsStatBlocksAvailable",
          "package": "HFuse",
          "signature": "Integer",
          "source": "src/System-Fuse.html#FileSystemStats",
          "type": "function"
        },
        "index": {
          "description": "Free blocks available to non-superusers",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fsStatBlocksAvailable",
          "package": "HFuse",
          "partial": "Stat Blocks Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatBlocksAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree blocks in file system.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fsStatBlocksFree",
          "package": "HFuse",
          "signature": "Integer",
          "source": "src/System-Fuse.html#FileSystemStats",
          "type": "function"
        },
        "index": {
          "description": "Free blocks in file system",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fsStatBlocksFree",
          "package": "HFuse",
          "partial": "Stat Blocks Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatBlocksFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal file nodes in file system.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fsStatFileCount",
          "package": "HFuse",
          "signature": "Integer",
          "source": "src/System-Fuse.html#FileSystemStats",
          "type": "function"
        },
        "index": {
          "description": "Total file nodes in file system",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fsStatFileCount",
          "package": "HFuse",
          "partial": "Stat File Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatFileCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree file nodes in file system.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fsStatFilesFree",
          "package": "HFuse",
          "signature": "Integer",
          "source": "src/System-Fuse.html#FileSystemStats",
          "type": "function"
        },
        "index": {
          "description": "Free file nodes in file system",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fsStatFilesFree",
          "package": "HFuse",
          "partial": "Stat Files Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatFilesFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum length of filenames. FUSE default is 255.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fsStatMaxNameLength",
          "package": "HFuse",
          "signature": "Integer",
          "source": "src/System-Fuse.html#FileSystemStats",
          "type": "function"
        },
        "index": {
          "description": "Maximum length of filenames FUSE default is",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fsStatMaxNameLength",
          "package": "HFuse",
          "partial": "Stat Max Name Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fsStatMaxNameLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck file access permissions; this will be called for the\n   access() system call.  If the \u003ccode\u003edefault_permissions\u003c/code\u003e mount option\n   is given, this method is not called.  This method is also not\n   called under Linux kernel versions 2.4.x\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseAccess",
          "package": "HFuse",
          "signature": "FilePath -\u003e Int -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Check file access permissions this will be called for the access system call If the default permissions mount option is given this method is not called This method is also not called under Linux kernel versions",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseAccess",
          "normalized": "FilePath-\u003eInt-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Access",
          "signature": "FilePath-\u003eInt-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ecreateDevice\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003emknod(2)\u003c/code\u003e).\n   This function will also be called for regular file creation.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseCreateDevice",
          "package": "HFuse",
          "signature": "FilePath -\u003e EntryType -\u003e FileMode -\u003e DeviceID -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements createDevice POSIX mknod This function will also be called for regular file creation",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseCreateDevice",
          "normalized": "FilePath-\u003eEntryType-\u003eFileMode-\u003eDeviceID-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Create Device",
          "signature": "FilePath-\u003eEntryType-\u003eFileMode-\u003eDeviceID-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseCreateDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ecreateDirectory\u003c/a\u003e\u003c/code\u003e (POSIX\n   \u003ccode\u003emkdir(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseCreateDirectory",
          "package": "HFuse",
          "signature": "FilePath -\u003e FileMode -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements createDirectory POSIX mkdir",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseCreateDirectory",
          "normalized": "FilePath-\u003eFileMode-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Create Directory",
          "signature": "FilePath-\u003eFileMode-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseCreateDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ecreateLink\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003elink(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseCreateLink",
          "package": "HFuse",
          "signature": "FilePath -\u003e FilePath -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements createLink POSIX link",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseCreateLink",
          "normalized": "FilePath-\u003eFilePath-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Create Link",
          "signature": "FilePath-\u003eFilePath-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseCreateLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ecreateSymbolicLink\u003c/a\u003e\u003c/code\u003e (POSIX\n   \u003ccode\u003esymlink(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseCreateSymbolicLink",
          "package": "HFuse",
          "signature": "FilePath -\u003e FilePath -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements createSymbolicLink POSIX symlink",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseCreateSymbolicLink",
          "normalized": "FilePath-\u003eFilePath-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Create Symbolic Link",
          "signature": "FilePath-\u003eFilePath-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseCreateSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled on filesystem exit to allow cleanup.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseDestroy",
          "package": "HFuse",
          "signature": "IO ()",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Called on filesystem exit to allow cleanup",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseDestroy",
          "normalized": "IO()",
          "package": "HFuse",
          "partial": "Destroy",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled when \u003ccode\u003eclose(2)\u003c/code\u003e has been called on an open file.\n   Note: this does not mean that the file is released.  This function may be\n   called more than once for each \u003ccode\u003eopen(2)\u003c/code\u003e.  The return value is passed on\n   to the \u003ccode\u003eclose(2)\u003c/code\u003e system call.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseFlush",
          "package": "HFuse",
          "signature": "FilePath -\u003e fh -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Called when close has been called on an open file Note this does not mean that the file is released This function may be called more than once for each open The return value is passed on to the close system call",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseFlush",
          "normalized": "FilePath-\u003ea-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Flush",
          "signature": "FilePath-\u003efh-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003egetSymbolicLinkStatus\u003c/a\u003e\u003c/code\u003e operation\n   (POSIX \u003ccode\u003elstat(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseGetFileStat",
          "package": "HFuse",
          "signature": "FilePath -\u003e IO (Either Errno FileStat)",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements getSymbolicLinkStatus operation POSIX lstat",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseGetFileStat",
          "normalized": "FilePath-\u003eIO(Either Errno FileStat)",
          "package": "HFuse",
          "partial": "Get File Stat",
          "signature": "FilePath-\u003eIO(Either Errno FileStat)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseGetFileStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003estatfs(2)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseGetFileSystemStats",
          "package": "HFuse",
          "signature": "String -\u003e IO (Either Errno FileSystemStats)",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements statfs",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseGetFileSystemStats",
          "normalized": "String-\u003eIO(Either Errno FileSystemStats)",
          "package": "HFuse",
          "partial": "Get File System Stats",
          "signature": "String-\u003eIO(Either Errno FileSystemStats)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseGetFileSystemStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes the filesystem.  This is called before all other\n   operations.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseInit",
          "package": "HFuse",
          "signature": "IO ()",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Initializes the filesystem This is called before all other operations",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseInit",
          "normalized": "IO()",
          "package": "HFuse",
          "partial": "Init",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain function of FUSE.\n This is all that has to be called from the \u003ccode\u003emain\u003c/code\u003e function. On top of\n the \u003ccode\u003e\u003ca\u003eFuseOperations\u003c/a\u003e\u003c/code\u003e record with filesystem implementation, you must give\n an exception handler converting Haskell exceptions to \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e parses command line options (\u003ccode\u003e-d\u003c/code\u003e, \u003ccode\u003e-s\u003c/code\u003e and \u003ccode\u003e-h\u003c/code\u003e) ;\n\u003c/li\u003e\u003cli\u003e passes all options after \u003ccode\u003e--\u003c/code\u003e to the fusermount program ;\n\u003c/li\u003e\u003cli\u003e mounts the filesystem by calling \u003ccode\u003efusermount\u003c/code\u003e ;\n\u003c/li\u003e\u003cli\u003e installs signal handlers for \u003ccode\u003e\u003ca\u003ekeyboardSignal\u003c/a\u003e\u003c/code\u003e,\n     \u003ccode\u003e\u003ca\u003elostConnection\u003c/a\u003e\u003c/code\u003e,\n     \u003ccode\u003e\u003ca\u003esoftwareTermination\u003c/a\u003e\u003c/code\u003e and\n     \u003ccode\u003e\u003ca\u003eopenEndedPipe\u003c/a\u003e\u003c/code\u003e ;\n\u003c/li\u003e\u003cli\u003e registers an exit handler to unmount the filesystem on program exit ;\n\u003c/li\u003e\u003cli\u003e registers the operations ;\n\u003c/li\u003e\u003cli\u003e calls FUSE event loop.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Fuse",
          "name": "fuseMain",
          "package": "HFuse",
          "signature": "FuseOperations fh -\u003e (e -\u003e IO Errno) -\u003e IO ()",
          "source": "src/System-Fuse.html#fuseMain",
          "type": "function"
        },
        "index": {
          "description": "Main function of FUSE This is all that has to be called from the main function On top of the FuseOperations record with filesystem implementation you must give an exception handler converting Haskell exceptions to Errno This function does the following parses command line options and passes all options after to the fusermount program mounts the filesystem by calling fusermount installs signal handlers for keyboardSignal lostConnection softwareTermination and openEndedPipe registers an exit handler to unmount the filesystem on program exit registers the operations calls FUSE event loop",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseMain",
          "normalized": "FuseOperations a-\u003e(b-\u003eIO Errno)-\u003eIO()",
          "package": "HFuse",
          "partial": "Main",
          "signature": "FuseOperations fh-\u003e(e-\u003eIO Errno)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003eopenFd\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003eopen(2)\u003c/code\u003e).  On\n   success, returns \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e of a filehandle-like value that will be\n   passed to future file operations; on failure, returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e of the\n   appropriate \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNo creation, exclusive access or truncating flags will be passed.\n   This should check that the operation is permitted for the given\n   flags.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseOpen",
          "package": "HFuse",
          "signature": "FilePath -\u003e OpenMode -\u003e OpenFileFlags -\u003e IO (Either Errno fh)",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements openFd POSIX open On success returns Right of filehandle-like value that will be passed to future file operations on failure returns Left of the appropriate Errno No creation exclusive access or truncating flags will be passed This should check that the operation is permitted for the given flags",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseOpen",
          "normalized": "FilePath-\u003eOpenMode-\u003eOpenFileFlags-\u003eIO(Either Errno a)",
          "package": "HFuse",
          "partial": "Open",
          "signature": "FilePath-\u003eOpenMode-\u003eOpenFileFlags-\u003eIO(Either Errno fh)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003eopendir(3)\u003c/code\u003e.  This method should check if the open\n   operation is permitted for this directory.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseOpenDirectory",
          "package": "HFuse",
          "signature": "FilePath -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements opendir This method should check if the open operation is permitted for this directory",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseOpenDirectory",
          "normalized": "FilePath-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Open Directory",
          "signature": "FilePath-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseOpenDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements Unix98 \u003ccode\u003epread(2)\u003c/code\u003e. It differs from\n   \u003ccode\u003e\u003ca\u003efdRead\u003c/a\u003e\u003c/code\u003e by the explicit \u003ccode\u003e\u003ca\u003eFileOffset\u003c/a\u003e\u003c/code\u003e argument.\n   The \u003ccode\u003efuse.h\u003c/code\u003e documentation stipulates that this \"should return\n   exactly the number of bytes requested except on EOF or error,\n   otherwise the rest of the data will be substituted with zeroes.\"\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseRead",
          "package": "HFuse",
          "signature": "FilePath -\u003e fh -\u003e ByteCount -\u003e FileOffset -\u003e IO (Either Errno ByteString)",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements Unix98 pread It differs from fdRead by the explicit FileOffset argument The fuse.h documentation stipulates that this should return exactly the number of bytes requested except on EOF or error otherwise the rest of the data will be substituted with zeroes",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseRead",
          "normalized": "FilePath-\u003ea-\u003eByteCount-\u003eFileOffset-\u003eIO(Either Errno ByteString)",
          "package": "HFuse",
          "partial": "Read",
          "signature": "FilePath-\u003efh-\u003eByteCount-\u003eFileOffset-\u003eIO(Either Errno ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003ereaddir(3)\u003c/code\u003e.  The entire contents of the directory\n   should be returned as a list of tuples (corresponding to the first\n   mode of operation documented in \u003ccode\u003efuse.h\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseReadDirectory",
          "package": "HFuse",
          "signature": "FilePath -\u003e IO (Either Errno [(FilePath, FileStat)])",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements readdir The entire contents of the directory should be returned as list of tuples corresponding to the first mode of operation documented in fuse.h",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseReadDirectory",
          "normalized": "FilePath-\u003eIO(Either Errno[(FilePath,FileStat)])",
          "package": "HFuse",
          "partial": "Read Directory",
          "signature": "FilePath-\u003eIO(Either Errno[(FilePath,FileStat)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseReadDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003ereadSymbolicLink\u003c/a\u003e\u003c/code\u003e operation (POSIX\n   \u003ccode\u003ereadlink(2)\u003c/code\u003e).  The returned \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e might be truncated\n   depending on caller buffer size.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseReadSymbolicLink",
          "package": "HFuse",
          "signature": "FilePath -\u003e IO (Either Errno FilePath)",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements readSymbolicLink operation POSIX readlink The returned FilePath might be truncated depending on caller buffer size",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseReadSymbolicLink",
          "normalized": "FilePath-\u003eIO(Either Errno FilePath)",
          "package": "HFuse",
          "partial": "Read Symbolic Link",
          "signature": "FilePath-\u003eIO(Either Errno FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseReadSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled when an open file has all file descriptors closed and all\n memory mappings unmapped.  For every \u003ccode\u003eopen\u003c/code\u003e call there will be\n exactly one \u003ccode\u003erelease\u003c/code\u003e call with the same flags.  It is possible to\n have a file opened more than once, in which case only the last\n release will mean that no more reads or writes will happen on the\n file.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseRelease",
          "package": "HFuse",
          "signature": "FilePath -\u003e fh -\u003e IO ()",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Called when an open file has all file descriptors closed and all memory mappings unmapped For every open call there will be exactly one release call with the same flags It is possible to have file opened more than once in which case only the last release will mean that no more reads or writes will happen on the file",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseRelease",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "HFuse",
          "partial": "Release",
          "signature": "FilePath-\u003efh-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003eclosedir(3)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseReleaseDirectory",
          "package": "HFuse",
          "signature": "FilePath -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements closedir",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseReleaseDirectory",
          "normalized": "FilePath-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Release Directory",
          "signature": "FilePath-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseReleaseDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e (POSIX\n   \u003ccode\u003ermdir(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseRemoveDirectory",
          "package": "HFuse",
          "signature": "FilePath -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements removeDirectory POSIX rmdir",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseRemoveDirectory",
          "normalized": "FilePath-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Remove Directory",
          "signature": "FilePath-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRemoveDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003eremoveLink\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003eunlink(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseRemoveLink",
          "package": "HFuse",
          "signature": "FilePath -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements removeLink POSIX unlink",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseRemoveLink",
          "normalized": "FilePath-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Remove Link",
          "signature": "FilePath-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRemoveLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003erename(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseRename",
          "package": "HFuse",
          "signature": "FilePath -\u003e FilePath -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements rename POSIX rename",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseRename",
          "normalized": "FilePath-\u003eFilePath-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Rename",
          "signature": "FilePath-\u003eFilePath-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "fuseRun",
          "package": "HFuse",
          "signature": "FuseOperations fh -\u003e (e -\u003e IO Errno) -\u003e IO ()",
          "source": "src/System-Fuse.html#fuseRun",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseRun",
          "normalized": "FuseOperations a-\u003e(b-\u003eIO Errno)-\u003eIO()",
          "package": "HFuse",
          "partial": "Run",
          "signature": "FuseOperations fh-\u003e(e-\u003eIO Errno)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003esetFileMode\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003echmod(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseSetFileMode",
          "package": "HFuse",
          "signature": "FilePath -\u003e FileMode -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements setFileMode POSIX chmod",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseSetFileMode",
          "normalized": "FilePath-\u003eFileMode-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Set File Mode",
          "signature": "FilePath-\u003eFileMode-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSetFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003esetFileSize\u003c/a\u003e\u003c/code\u003e (POSIX \u003ccode\u003etruncate(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseSetFileSize",
          "package": "HFuse",
          "signature": "FilePath -\u003e FileOffset -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements setFileSize POSIX truncate",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseSetFileSize",
          "normalized": "FilePath-\u003eFileOffset-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Set File Size",
          "signature": "FilePath-\u003eFileOffset-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSetFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003esetFileTimes\u003c/a\u003e\u003c/code\u003e\n   (POSIX \u003ccode\u003eutime(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseSetFileTimes",
          "package": "HFuse",
          "signature": "FilePath -\u003e EpochTime -\u003e EpochTime -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements setFileTimes POSIX utime",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseSetFileTimes",
          "normalized": "FilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Set File Times",
          "signature": "FilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSetFileTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003esetOwnerAndGroup\u003c/a\u003e\u003c/code\u003e (POSIX\n   \u003ccode\u003echown(2)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseSetOwnerAndGroup",
          "package": "HFuse",
          "signature": "FilePath -\u003e UserID -\u003e GroupID -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements setOwnerAndGroup POSIX chown",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseSetOwnerAndGroup",
          "normalized": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Set Owner And Group",
          "signature": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSetOwnerAndGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronize the directory's contents; analogous to\n   \u003ccode\u003e\u003ca\u003efuseSynchronizeFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseSynchronizeDirectory",
          "package": "HFuse",
          "signature": "FilePath -\u003e SyncType -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Synchronize the directory contents analogous to fuseSynchronizeFile",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseSynchronizeDirectory",
          "normalized": "FilePath-\u003eSyncType-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Synchronize Directory",
          "signature": "FilePath-\u003eSyncType-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSynchronizeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements \u003ccode\u003efsync(2)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseSynchronizeFile",
          "package": "HFuse",
          "signature": "FilePath -\u003e SyncType -\u003e IO Errno",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements fsync",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseSynchronizeFile",
          "normalized": "FilePath-\u003eSyncType-\u003eIO Errno",
          "package": "HFuse",
          "partial": "Synchronize File",
          "signature": "FilePath-\u003eSyncType-\u003eIO Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseSynchronizeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements Unix98 \u003ccode\u003epwrite(2)\u003c/code\u003e. It differs\n   from \u003ccode\u003e\u003ca\u003efdWrite\u003c/a\u003e\u003c/code\u003e by the explicit \u003ccode\u003e\u003ca\u003eFileOffset\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "fuseWrite",
          "package": "HFuse",
          "signature": "FilePath -\u003e fh -\u003e ByteString -\u003e FileOffset -\u003e IO (Either Errno ByteCount)",
          "source": "src/System-Fuse.html#FuseOperations",
          "type": "function"
        },
        "index": {
          "description": "Implements Unix98 pwrite It differs from fdWrite by the explicit FileOffset argument",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "fuseWrite",
          "normalized": "FilePath-\u003ea-\u003eByteString-\u003eFileOffset-\u003eIO(Either Errno ByteCount)",
          "package": "HFuse",
          "partial": "Write",
          "signature": "FilePath-\u003efh-\u003eByteString-\u003eFileOffset-\u003eIO(Either Errno ByteCount)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:fuseWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the context of the program doing the current FUSE call.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "getFuseContext",
          "package": "HFuse",
          "signature": "IO FuseContext",
          "source": "src/System-Fuse.html#getFuseContext",
          "type": "function"
        },
        "index": {
          "description": "Returns the context of the program doing the current FUSE call",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "getFuseContext",
          "package": "HFuse",
          "partial": "Fuse Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:getFuseContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two file modes into one that only contains modes that appear in\n both.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "intersectFileModes",
          "package": "HFuse",
          "signature": "FileMode -\u003e FileMode -\u003e FileMode",
          "type": "function"
        },
        "index": {
          "description": "Combines two file modes into one that only contains modes that appear in both",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "intersectFileModes",
          "normalized": "FileMode-\u003eFileMode-\u003eFileMode",
          "package": "HFuse",
          "partial": "File Modes",
          "signature": "FileMode-\u003eFileMode-\u003eFileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:intersectFileModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_NOCTTY\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "noctty",
          "package": "HFuse",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "NOCTTY",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "noctty",
          "package": "HFuse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:noctty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_NONBLOCK\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "nonBlock",
          "package": "HFuse",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "NONBLOCK",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "nonBlock",
          "package": "HFuse",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:nonBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statAccessTime",
          "package": "HFuse",
          "signature": "EpochTime",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statAccessTime",
          "package": "HFuse",
          "partial": "Access Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statAccessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statBlocks",
          "package": "HFuse",
          "signature": "Integer",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statBlocks",
          "package": "HFuse",
          "partial": "Blocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statEntryType",
          "package": "HFuse",
          "signature": "EntryType",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statEntryType",
          "package": "HFuse",
          "partial": "Entry Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statEntryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statFileGroup",
          "package": "HFuse",
          "signature": "GroupID",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statFileGroup",
          "package": "HFuse",
          "partial": "File Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statFileGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statFileMode",
          "package": "HFuse",
          "signature": "FileMode",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statFileMode",
          "package": "HFuse",
          "partial": "File Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statFileOwner",
          "package": "HFuse",
          "signature": "UserID",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statFileOwner",
          "package": "HFuse",
          "partial": "File Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statFileOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statFileSize",
          "package": "HFuse",
          "signature": "FileOffset",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statFileSize",
          "package": "HFuse",
          "partial": "File Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statLinkCount",
          "package": "HFuse",
          "signature": "LinkCount",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statLinkCount",
          "package": "HFuse",
          "partial": "Link Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statLinkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statModificationTime",
          "package": "HFuse",
          "signature": "EpochTime",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statModificationTime",
          "package": "HFuse",
          "partial": "Modification Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statModificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statSpecialDeviceID",
          "package": "HFuse",
          "signature": "DeviceID",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statSpecialDeviceID",
          "package": "HFuse",
          "partial": "Special Device ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statSpecialDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Fuse",
          "name": "statStatusChangeTime",
          "package": "HFuse",
          "signature": "EpochTime",
          "source": "src/System-Fuse.html#FileStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "statStatusChangeTime",
          "package": "HFuse",
          "partial": "Status Change Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:statStatusChangeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO_TRUNC\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "trunc",
          "package": "HFuse",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "TRUNC",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "trunc",
          "package": "HFuse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:trunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines the two file modes into one that contains modes that appear in\n either.\n\u003c/p\u003e",
          "module": "System.Fuse",
          "name": "unionFileModes",
          "package": "HFuse",
          "signature": "FileMode -\u003e FileMode -\u003e FileMode",
          "type": "function"
        },
        "index": {
          "description": "Combines the two file modes into one that contains modes that appear in either",
          "hierarchy": "System Fuse",
          "module": "System.Fuse",
          "name": "unionFileModes",
          "normalized": "FileMode-\u003eFileMode-\u003eFileMode",
          "package": "HFuse",
          "partial": "File Modes",
          "signature": "FileMode-\u003eFileMode-\u003eFileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HFuse/docs/System-Fuse.html#v:unionFileModes"
      }
    }
  ]
]