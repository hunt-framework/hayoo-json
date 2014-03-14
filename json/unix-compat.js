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
        "word": "unix-compat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some functions not present in the unix package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.PosixCompat.Extensions",
          "name": "Extensions",
          "package": "unix-compat",
          "source": "src/System-PosixCompat-Extensions.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides some functions not present in the unix package",
          "hierarchy": "System PosixCompat Extensions",
          "module": "System.PosixCompat.Extensions",
          "name": "Extensions",
          "package": "unix-compat",
          "partial": "Extensions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Extensions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Extensions",
          "name": "CMajor",
          "package": "unix-compat",
          "source": "src/System-PosixCompat-Extensions.html#CMajor",
          "type": "type"
        },
        "index": {
          "hierarchy": "System PosixCompat Extensions",
          "module": "System.PosixCompat.Extensions",
          "name": "CMajor",
          "package": "unix-compat",
          "partial": "CMajor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Extensions.html#t:CMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Extensions",
          "name": "CMinor",
          "package": "unix-compat",
          "source": "src/System-PosixCompat-Extensions.html#CMinor",
          "type": "type"
        },
        "index": {
          "hierarchy": "System PosixCompat Extensions",
          "module": "System.PosixCompat.Extensions",
          "name": "CMinor",
          "package": "unix-compat",
          "partial": "CMinor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Extensions.html#t:CMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the major number from a \u003ccode\u003e\u003ca\u003eDeviceID\u003c/a\u003e\u003c/code\u003e for a device file.\n\u003c/p\u003e\u003cp\u003eThe portable implementation always returns \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Extensions",
          "name": "deviceMajor",
          "package": "unix-compat",
          "signature": "DeviceID -\u003e CMajor",
          "source": "src/System-PosixCompat-Extensions.html#deviceMajor",
          "type": "function"
        },
        "index": {
          "description": "Gets the major number from DeviceID for device file The portable implementation always returns",
          "hierarchy": "System PosixCompat Extensions",
          "module": "System.PosixCompat.Extensions",
          "name": "deviceMajor",
          "normalized": "DeviceID-\u003eCMajor",
          "package": "unix-compat",
          "partial": "Major",
          "signature": "DeviceID-\u003eCMajor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Extensions.html#v:deviceMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the minor number from a \u003ccode\u003e\u003ca\u003eDeviceID\u003c/a\u003e\u003c/code\u003e for a device file.\n\u003c/p\u003e\u003cp\u003eThe portable implementation always returns \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Extensions",
          "name": "deviceMinor",
          "package": "unix-compat",
          "signature": "DeviceID -\u003e CMinor",
          "source": "src/System-PosixCompat-Extensions.html#deviceMinor",
          "type": "function"
        },
        "index": {
          "description": "Gets the minor number from DeviceID for device file The portable implementation always returns",
          "hierarchy": "System PosixCompat Extensions",
          "module": "System.PosixCompat.Extensions",
          "name": "deviceMinor",
          "normalized": "DeviceID-\u003eCMinor",
          "package": "unix-compat",
          "partial": "Minor",
          "signature": "DeviceID-\u003eCMinor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Extensions.html#v:deviceMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eDeviceID\u003c/a\u003e\u003c/code\u003e for a device file given a major and minor number.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Extensions",
          "name": "makeDeviceID",
          "package": "unix-compat",
          "signature": "CMajor -\u003e CMinor -\u003e DeviceID",
          "source": "src/System-PosixCompat-Extensions.html#makeDeviceID",
          "type": "function"
        },
        "index": {
          "description": "Creates DeviceID for device file given major and minor number",
          "hierarchy": "System PosixCompat Extensions",
          "module": "System.PosixCompat.Extensions",
          "name": "makeDeviceID",
          "normalized": "CMajor-\u003eCMinor-\u003eDeviceID",
          "package": "unix-compat",
          "partial": "Device ID",
          "signature": "CMajor-\u003eCMinor-\u003eDeviceID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Extensions.html#v:makeDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module makes the operations exported by \u003ccode\u003eSystem.Posix.Files\u003c/code\u003e\navailable on all platforms. On POSIX systems it re-exports operations from\n\u003ccode\u003eSystem.Posix.Files\u003c/code\u003e. On other platforms it emulates the operations as far\nas possible.\n\u003c/p\u003e\u003cp\u003e/NOTE: the portable implementations are not well tested, in some cases\nfunctions are only stubs./\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.PosixCompat.Files",
          "name": "Files",
          "package": "unix-compat",
          "source": "src/System-PosixCompat-Files.html",
          "type": "module"
        },
        "index": {
          "description": "This module makes the operations exported by System.Posix.Files available on all platforms On POSIX systems it re-exports operations from System.Posix.Files On other platforms it emulates the operations as far as possible NOTE the portable implementations are not well tested in some cases functions are only stubs",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "Files",
          "package": "unix-compat",
          "partial": "Files",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePOSIX defines operations to get information, such as owner, permissions,\n size and access times, about a file. This information is represented by the\n \u003ccode\u003e\u003ca\u003eFileStatus\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eNote: see \u003ccode\u003echmod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "FileStatus",
          "package": "unix-compat",
          "type": "data"
        },
        "index": {
          "description": "POSIX defines operations to get information such as owner permissions size and access times about file This information is represented by the FileStatus type Note see chmod",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "FileStatus",
          "package": "unix-compat",
          "partial": "File Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#t:FileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "PathVar",
          "package": "unix-compat",
          "type": "data"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "PathVar",
          "package": "unix-compat",
          "partial": "Path Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#t:PathVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "AsyncIOAvailable",
          "package": "unix-compat",
          "signature": "AsyncIOAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "AsyncIOAvailable",
          "package": "unix-compat",
          "partial": "Async IOAvailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:AsyncIOAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "FileNameLimit",
          "package": "unix-compat",
          "signature": "FileNameLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "FileNameLimit",
          "package": "unix-compat",
          "partial": "File Name Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:FileNameLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "FileNamesAreNotTruncated",
          "package": "unix-compat",
          "signature": "FileNamesAreNotTruncated",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "FileNamesAreNotTruncated",
          "package": "unix-compat",
          "partial": "File Names Are Not Truncated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:FileNamesAreNotTruncated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "FileSizeBits",
          "package": "unix-compat",
          "signature": "FileSizeBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "FileSizeBits",
          "package": "unix-compat",
          "partial": "File Size Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:FileSizeBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "InputLineLimit",
          "package": "unix-compat",
          "signature": "InputLineLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "InputLineLimit",
          "package": "unix-compat",
          "partial": "Input Line Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:InputLineLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "InputQueueLimit",
          "package": "unix-compat",
          "signature": "InputQueueLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "InputQueueLimit",
          "package": "unix-compat",
          "partial": "Input Queue Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:InputQueueLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "LinkLimit",
          "package": "unix-compat",
          "signature": "LinkLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "LinkLimit",
          "package": "unix-compat",
          "partial": "Link Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:LinkLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "PathNameLimit",
          "package": "unix-compat",
          "signature": "PathNameLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "PathNameLimit",
          "package": "unix-compat",
          "partial": "Path Name Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:PathNameLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "PipeBufferLimit",
          "package": "unix-compat",
          "signature": "PipeBufferLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "PipeBufferLimit",
          "package": "unix-compat",
          "partial": "Pipe Buffer Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:PipeBufferLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "PrioIOAvailable",
          "package": "unix-compat",
          "signature": "PrioIOAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "PrioIOAvailable",
          "package": "unix-compat",
          "partial": "Prio IOAvailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:PrioIOAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "SetOwnerAndGroupIsRestricted",
          "package": "unix-compat",
          "signature": "SetOwnerAndGroupIsRestricted",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "SetOwnerAndGroupIsRestricted",
          "package": "unix-compat",
          "partial": "Set Owner And Group Is Restricted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:SetOwnerAndGroupIsRestricted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "SymbolicLinkLimit",
          "package": "unix-compat",
          "signature": "SymbolicLinkLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "SymbolicLinkLimit",
          "package": "unix-compat",
          "partial": "Symbolic Link Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:SymbolicLinkLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "SyncIOAvailable",
          "package": "unix-compat",
          "signature": "SyncIOAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "SyncIOAvailable",
          "package": "unix-compat",
          "partial": "Sync IOAvailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:SyncIOAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Files",
          "name": "VDisableChar",
          "package": "unix-compat",
          "signature": "VDisableChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "VDisableChar",
          "package": "unix-compat",
          "partial": "VDisable Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:VDisableChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner, group and others have read, write and execute permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "accessModes",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Owner group and others have read write and execute permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "accessModes",
          "package": "unix-compat",
          "partial": "Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:accessModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of last access.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "accessTime",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e EpochTime",
          "type": "function"
        },
        "index": {
          "description": "Time of last access",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "accessTime",
          "normalized": "FileStatus-\u003eEpochTime",
          "package": "unix-compat",
          "partial": "Time",
          "signature": "FileStatus-\u003eEpochTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:accessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateDevice path mode dev\u003c/code\u003e creates either a regular or a special file\n depending on the value of \u003ccode\u003emode\u003c/code\u003e (and \u003ccode\u003edev\u003c/code\u003e).  \u003ccode\u003emode\u003c/code\u003e will normally be either\n \u003ccode\u003e\u003ca\u003eblockSpecialMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003echaracterSpecialMode\u003c/a\u003e\u003c/code\u003e.  May fail with\n \u003ccode\u003e\u003ca\u003ethrowErrnoPathIfMinus1_\u003c/a\u003e\u003c/code\u003e if a file named \u003ccode\u003ename\u003c/code\u003e already exists or if the\n effective user ID of the current process doesn't have permission to create\n the file.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003emknod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "createDevice",
          "package": "unix-compat",
          "signature": "FilePath -\u003e FileMode -\u003e DeviceID -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "createDevice path mode dev creates either regular or special file depending on the value of mode and dev mode will normally be either blockSpecialMode or characterSpecialMode May fail with throwErrnoPathIfMinus1 if file named name already exists or if the effective user ID of the current process doesn have permission to create the file Note calls mknod",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "createDevice",
          "normalized": "FilePath-\u003eFileMode-\u003eDeviceID-\u003eIO()",
          "package": "unix-compat",
          "partial": "Device",
          "signature": "FilePath-\u003eFileMode-\u003eDeviceID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:createDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateLink old new\u003c/code\u003e creates a new path, \u003ccode\u003enew\u003c/code\u003e, linked to an existing file,\n \u003ccode\u003eold\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "createLink",
          "package": "unix-compat",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "createLink old new creates new path new linked to an existing file old Note calls link",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "createLink",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "unix-compat",
          "partial": "Link",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:createLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateNamedPipe fifo mode\u003c/code\u003e\n creates a new named pipe, \u003ccode\u003efifo\u003c/code\u003e, with permissions based on\n \u003ccode\u003emode\u003c/code\u003e. May fail with \u003ccode\u003e\u003ca\u003ethrowErrnoPathIfMinus1_\u003c/a\u003e\u003c/code\u003e if a file named \u003ccode\u003ename\u003c/code\u003e\n already exists or if the effective user ID of the current process doesn't\n have permission to create the pipe.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003emkfifo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "createNamedPipe",
          "package": "unix-compat",
          "signature": "FilePath -\u003e FileMode -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "createNamedPipe fifo mode creates new named pipe fifo with permissions based on mode May fail with throwErrnoPathIfMinus1 if file named name already exists or if the effective user ID of the current process doesn have permission to create the pipe Note calls mkfifo",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "createNamedPipe",
          "normalized": "FilePath-\u003eFileMode-\u003eIO()",
          "package": "unix-compat",
          "partial": "Named Pipe",
          "signature": "FilePath-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:createNamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecreateSymbolicLink file1 file2\u003c/code\u003e creates a symbolic link named \u003ccode\u003efile2\u003c/code\u003e\n which points to the file \u003ccode\u003efile1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSymbolic links are interpreted at run-time as if the contents of the link\n had been substituted into the path being followed to find a file or directory.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003esymlink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "createSymbolicLink",
          "package": "unix-compat",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "createSymbolicLink file1 file2 creates symbolic link named file2 which points to the file file1 Symbolic links are interpreted at run-time as if the contents of the link had been substituted into the path being followed to find file or directory Note calls symlink",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "createSymbolicLink",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "unix-compat",
          "partial": "Symbolic Link",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:createSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the device on which this file resides.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "deviceID",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e DeviceID",
          "type": "function"
        },
        "index": {
          "description": "ID of the device on which this file resides",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "deviceID",
          "normalized": "FileStatus-\u003eDeviceID",
          "package": "unix-compat",
          "partial": "ID",
          "signature": "FileStatus-\u003eDeviceID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:deviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efileAccess name read write exec\u003c/code\u003e checks if the file (or other file system\n object) \u003ccode\u003ename\u003c/code\u003e can be accessed for reading, writing and/or executing. To\n check a permission set the corresponding argument to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eaccess\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "fileAccess",
          "package": "unix-compat",
          "signature": "FilePath -\u003e Bool -\u003e Bool -\u003e Bool -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "fileAccess name read write exec checks if the file or other file system object name can be accessed for reading writing and or executing To check permission set the corresponding argument to True Note calls access",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "fileAccess",
          "normalized": "FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eIO Bool",
          "package": "unix-compat",
          "partial": "Access",
          "signature": "FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:fileAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks for the existence of the file.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eaccess\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "fileExist",
          "package": "unix-compat",
          "signature": "FilePath -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks for the existence of the file Note calls access",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "fileExist",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "unix-compat",
          "partial": "Exist",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:fileExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of group.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "fileGroup",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e GroupID",
          "type": "function"
        },
        "index": {
          "description": "ID of group",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "fileGroup",
          "normalized": "FileStatus-\u003eGroupID",
          "package": "unix-compat",
          "partial": "Group",
          "signature": "FileStatus-\u003eGroupID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:fileGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einode number\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "fileID",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e FileID",
          "type": "function"
        },
        "index": {
          "description": "inode number",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "fileID",
          "normalized": "FileStatus-\u003eFileID",
          "package": "unix-compat",
          "partial": "ID",
          "signature": "FileStatus-\u003eFileID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:fileID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile mode (such as permissions).\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "fileMode",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e FileMode",
          "type": "function"
        },
        "index": {
          "description": "File mode such as permissions",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "fileMode",
          "normalized": "FileStatus-\u003eFileMode",
          "package": "unix-compat",
          "partial": "Mode",
          "signature": "FileStatus-\u003eFileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:fileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of owner.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "fileOwner",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e UserID",
          "type": "function"
        },
        "index": {
          "description": "ID of owner",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "fileOwner",
          "normalized": "FileStatus-\u003eUserID",
          "package": "unix-compat",
          "partial": "Owner",
          "signature": "FileStatus-\u003eUserID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:fileOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the file in bytes. If this file is a symbolic link the size is\n the length of the pathname it contains.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "fileSize",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e FileOffset",
          "type": "function"
        },
        "index": {
          "description": "Size of the file in bytes If this file is symbolic link the size is the length of the pathname it contains",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "fileSize",
          "normalized": "FileStatus-\u003eFileOffset",
          "package": "unix-compat",
          "partial": "Size",
          "signature": "FileStatus-\u003eFileOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:fileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFdPathVar var fd\u003c/code\u003e obtains the dynamic value of the requested\n configurable file limit or option associated with the file or directory\n attached to the open channel \u003ccode\u003efd\u003c/code\u003e. For defined file limits, \u003ccode\u003egetFdPathVar\u003c/code\u003e\n returns the associated value.  For defined file options, the result of\n \u003ccode\u003egetFdPathVar\u003c/code\u003e is undefined, but not failure.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efpathconf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "getFdPathVar",
          "package": "unix-compat",
          "signature": "Fd -\u003e PathVar -\u003e IO Limit",
          "type": "function"
        },
        "index": {
          "description": "getFdPathVar var fd obtains the dynamic value of the requested configurable file limit or option associated with the file or directory attached to the open channel fd For defined file limits getFdPathVar returns the associated value For defined file options the result of getFdPathVar is undefined but not failure Note calls fpathconf",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "getFdPathVar",
          "normalized": "Fd-\u003ePathVar-\u003eIO Limit",
          "package": "unix-compat",
          "partial": "Fd Path Var",
          "signature": "Fd-\u003ePathVar-\u003eIO Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:getFdPathVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFdStatus fd\u003c/code\u003e acts as \u003ccode\u003egetFileStatus\u003c/code\u003e but uses a file descriptor \u003ccode\u003efd\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efstat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "getFdStatus",
          "package": "unix-compat",
          "signature": "Fd -\u003e IO FileStatus",
          "type": "function"
        },
        "index": {
          "description": "getFdStatus fd acts as getFileStatus but uses file descriptor fd Note calls fstat",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "getFdStatus",
          "normalized": "Fd-\u003eIO FileStatus",
          "package": "unix-compat",
          "partial": "Fd Status",
          "signature": "Fd-\u003eIO FileStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:getFdStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFileStatus path\u003c/code\u003e calls gets the \u003ccode\u003eFileStatus\u003c/code\u003e information (user ID,\n size, access times, etc.) for the file \u003ccode\u003epath\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003estat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "getFileStatus",
          "package": "unix-compat",
          "signature": "FilePath -\u003e IO FileStatus",
          "type": "function"
        },
        "index": {
          "description": "getFileStatus path calls gets the FileStatus information user ID size access times etc for the file path Note calls stat",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "getFileStatus",
          "normalized": "FilePath-\u003eIO FileStatus",
          "package": "unix-compat",
          "partial": "File Status",
          "signature": "FilePath-\u003eIO FileStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:getFileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetPathVar var path\u003c/code\u003e obtains the dynamic value of the requested\n configurable file limit or option associated with file or directory \u003ccode\u003epath\u003c/code\u003e.\n For defined file limits, \u003ccode\u003egetPathVar\u003c/code\u003e returns the associated\n value.  For defined file options, the result of \u003ccode\u003egetPathVar\u003c/code\u003e\n is undefined, but not failure.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003epathconf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "getPathVar",
          "package": "unix-compat",
          "signature": "FilePath -\u003e PathVar -\u003e IO Limit",
          "type": "function"
        },
        "index": {
          "description": "getPathVar var path obtains the dynamic value of the requested configurable file limit or option associated with file or directory path For defined file limits getPathVar returns the associated value For defined file options the result of getPathVar is undefined but not failure Note calls pathconf",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "getPathVar",
          "normalized": "FilePath-\u003ePathVar-\u003eIO Limit",
          "package": "unix-compat",
          "partial": "Path Var",
          "signature": "FilePath-\u003ePathVar-\u003eIO Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:getPathVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003egetFileStatus\u003c/a\u003e\u003c/code\u003e except when the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e refers to a symbolic\n link. In that case the \u003ccode\u003eFileStatus\u003c/code\u003e information of the symbolic link itself\n is returned instead of that of the file it points to.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elstat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "getSymbolicLinkStatus",
          "package": "unix-compat",
          "signature": "FilePath -\u003e IO FileStatus",
          "type": "function"
        },
        "index": {
          "description": "Acts as getFileStatus except when the FilePath refers to symbolic link In that case the FileStatus information of the symbolic link itself is returned instead of that of the file it points to Note calls lstat",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "getSymbolicLinkStatus",
          "normalized": "FilePath-\u003eIO FileStatus",
          "package": "unix-compat",
          "partial": "Symbolic Link Status",
          "signature": "FilePath-\u003eIO FileStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:getSymbolicLinkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup has execute permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "groupExecuteMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Group has execute permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "groupExecuteMode",
          "package": "unix-compat",
          "partial": "Execute Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:groupExecuteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup has read, write and execute permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "groupModes",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Group has read write and execute permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "groupModes",
          "package": "unix-compat",
          "partial": "Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:groupModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup has read permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "groupReadMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Group has read permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "groupReadMode",
          "package": "unix-compat",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:groupReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup has write permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "groupWriteMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Group has write permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "groupWriteMode",
          "package": "unix-compat",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:groupWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two file modes into one that only contains modes that appear in\n both.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "intersectFileModes",
          "package": "unix-compat",
          "signature": "FileMode -\u003e FileMode -\u003e FileMode",
          "type": "function"
        },
        "index": {
          "description": "Combines two file modes into one that only contains modes that appear in both",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "intersectFileModes",
          "normalized": "FileMode-\u003eFileMode-\u003eFileMode",
          "package": "unix-compat",
          "partial": "File Modes",
          "signature": "FileMode-\u003eFileMode-\u003eFileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:intersectFileModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a block device.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "isBlockDevice",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if this file is block device",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "isBlockDevice",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix-compat",
          "partial": "Block Device",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:isBlockDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a character device.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "isCharacterDevice",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if this file is character device",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "isCharacterDevice",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix-compat",
          "partial": "Character Device",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:isCharacterDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a directory device.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "isDirectory",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if this file is directory device",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "isDirectory",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix-compat",
          "partial": "Directory",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:isDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a named pipe device.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "isNamedPipe",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if this file is named pipe device",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "isNamedPipe",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix-compat",
          "partial": "Named Pipe",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:isNamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a regular file device.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "isRegularFile",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if this file is regular file device",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "isRegularFile",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix-compat",
          "partial": "Regular File",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:isRegularFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a socket device.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "isSocket",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if this file is socket device",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "isSocket",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix-compat",
          "partial": "Socket",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:isSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if this file is a symbolic link device.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "isSymbolicLink",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if this file is symbolic link device",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "isSymbolicLink",
          "normalized": "FileStatus-\u003eBool",
          "package": "unix-compat",
          "partial": "Symbolic Link",
          "signature": "FileStatus-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:isSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of hard links to this file.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "linkCount",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e LinkCount",
          "type": "function"
        },
        "index": {
          "description": "Number of hard links to this file",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "linkCount",
          "normalized": "FileStatus-\u003eLinkCount",
          "package": "unix-compat",
          "partial": "Count",
          "signature": "FileStatus-\u003eLinkCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:linkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of last modification.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "modificationTime",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e EpochTime",
          "type": "function"
        },
        "index": {
          "description": "Time of last modification",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "modificationTime",
          "normalized": "FileStatus-\u003eEpochTime",
          "package": "unix-compat",
          "partial": "Time",
          "signature": "FileStatus-\u003eEpochTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:modificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo permissions.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "nullFileMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "No permissions",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "nullFileMode",
          "package": "unix-compat",
          "partial": "File Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:nullFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOthers have execute permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "otherExecuteMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Others have execute permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "otherExecuteMode",
          "package": "unix-compat",
          "partial": "Execute Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:otherExecuteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOthers have read, write and execute permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "otherModes",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Others have read write and execute permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "otherModes",
          "package": "unix-compat",
          "partial": "Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:otherModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOthers have read permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "otherReadMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Others have read permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "otherReadMode",
          "package": "unix-compat",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:otherReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOthers have write permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "otherWriteMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Others have write permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "otherWriteMode",
          "package": "unix-compat",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:otherWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner has execute permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "ownerExecuteMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Owner has execute permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "ownerExecuteMode",
          "package": "unix-compat",
          "partial": "Execute Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:ownerExecuteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner has read, write and execute permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "ownerModes",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Owner has read write and execute permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "ownerModes",
          "package": "unix-compat",
          "partial": "Modes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:ownerModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner has read permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "ownerReadMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Owner has read permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "ownerReadMode",
          "package": "unix-compat",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:ownerReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner has write permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "ownerWriteMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Owner has write permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "ownerWriteMode",
          "package": "unix-compat",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:ownerWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the \u003ccode\u003eFilePath\u003c/code\u003e pointed to by the symbolic link and returns it.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003ereadlink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "readSymbolicLink",
          "package": "unix-compat",
          "signature": "FilePath -\u003e IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "Reads the FilePath pointed to by the symbolic link and returns it Note calls readlink",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "readSymbolicLink",
          "normalized": "FilePath-\u003eIO FilePath",
          "package": "unix-compat",
          "partial": "Symbolic Link",
          "signature": "FilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:readSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eremoveLink path\u003c/code\u003e removes the link named \u003ccode\u003epath\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eunlink\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "removeLink",
          "package": "unix-compat",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "removeLink path removes the link named path Note calls unlink",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "removeLink",
          "normalized": "FilePath-\u003eIO()",
          "package": "unix-compat",
          "partial": "Link",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:removeLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erename old new\u003c/code\u003e renames a file or directory from \u003ccode\u003eold\u003c/code\u003e to \u003ccode\u003enew\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003erename\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "rename",
          "package": "unix-compat",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "rename old new renames file or directory from old to new Note calls rename",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "rename",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "unix-compat",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFdMode fd mode\u003c/code\u003e acts like \u003ccode\u003esetFileMode\u003c/code\u003e but uses a file descriptor\n \u003ccode\u003efd\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efchmod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setFdMode",
          "package": "unix-compat",
          "signature": "Fd -\u003e FileMode -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "setFdMode fd mode acts like setFileMode but uses file descriptor fd instead of FilePath Note calls fchmod",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setFdMode",
          "normalized": "Fd-\u003eFileMode-\u003eIO()",
          "package": "unix-compat",
          "partial": "Fd Mode",
          "signature": "Fd-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setFdMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003esetOwnerAndGroup\u003c/code\u003e but uses a file descriptor instead of a\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efchown\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setFdOwnerAndGroup",
          "package": "unix-compat",
          "signature": "Fd -\u003e UserID -\u003e GroupID -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Acts as setOwnerAndGroup but uses file descriptor instead of FilePath Note calls fchown",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setFdOwnerAndGroup",
          "normalized": "Fd-\u003eUserID-\u003eGroupID-\u003eIO()",
          "package": "unix-compat",
          "partial": "Fd Owner And Group",
          "signature": "Fd-\u003eUserID-\u003eGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setFdOwnerAndGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003esetFileSize\u003c/code\u003e but uses a file descriptor instead of a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eftruncate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setFdSize",
          "package": "unix-compat",
          "signature": "Fd -\u003e FileOffset -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Acts as setFileSize but uses file descriptor instead of FilePath Note calls ftruncate",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setFdSize",
          "normalized": "Fd-\u003eFileOffset-\u003eIO()",
          "package": "unix-compat",
          "partial": "Fd Size",
          "signature": "Fd-\u003eFileOffset-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setFdSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFileCreationMask mode\u003c/code\u003e sets the file mode creation mask to \u003ccode\u003emode\u003c/code\u003e.\n Modes set by this operation are subtracted from files and directories upon\n creation. The previous file creation mask is returned.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eumask\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setFileCreationMask",
          "package": "unix-compat",
          "signature": "FileMode -\u003e IO FileMode",
          "type": "function"
        },
        "index": {
          "description": "setFileCreationMask mode sets the file mode creation mask to mode Modes set by this operation are subtracted from files and directories upon creation The previous file creation mask is returned Note calls umask",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setFileCreationMask",
          "normalized": "FileMode-\u003eIO FileMode",
          "package": "unix-compat",
          "partial": "File Creation Mask",
          "signature": "FileMode-\u003eIO FileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setFileCreationMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFileMode path mode\u003c/code\u003e changes permission of the file given by \u003ccode\u003epath\u003c/code\u003e\n to \u003ccode\u003emode\u003c/code\u003e. This operation may fail with \u003ccode\u003e\u003ca\u003ethrowErrnoPathIfMinus1_\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003epath\u003c/code\u003e\n doesn't exist or if the effective user ID of the current process is not that\n of the file's owner.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003echmod\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setFileMode",
          "package": "unix-compat",
          "signature": "FilePath -\u003e FileMode -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "setFileMode path mode changes permission of the file given by path to mode This operation may fail with throwErrnoPathIfMinus1 if path doesn exist or if the effective user ID of the current process is not that of the file owner Note calls chmod",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setFileMode",
          "normalized": "FilePath-\u003eFileMode-\u003eIO()",
          "package": "unix-compat",
          "partial": "File Mode",
          "signature": "FilePath-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncates the file down to the specified length. If the file was larger\n than the given length before this operation was performed the extra is lost.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003etruncate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setFileSize",
          "package": "unix-compat",
          "signature": "FilePath -\u003e FileOffset -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Truncates the file down to the specified length If the file was larger than the given length before this operation was performed the extra is lost Note calls truncate",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setFileSize",
          "normalized": "FilePath-\u003eFileOffset-\u003eIO()",
          "package": "unix-compat",
          "partial": "File Size",
          "signature": "FilePath-\u003eFileOffset-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetFileTimes path atime mtime\u003c/code\u003e sets the access and modification times\n associated with file \u003ccode\u003epath\u003c/code\u003e to \u003ccode\u003eatime\u003c/code\u003e and \u003ccode\u003emtime\u003c/code\u003e, respectively.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setFileTimes",
          "package": "unix-compat",
          "signature": "FilePath -\u003e EpochTime -\u003e EpochTime -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "setFileTimes path atime mtime sets the access and modification times associated with file path to atime and mtime respectively Note calls utime",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setFileTimes",
          "normalized": "FilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO()",
          "package": "unix-compat",
          "partial": "File Times",
          "signature": "FilePath-\u003eEpochTime-\u003eEpochTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setFileTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet group ID on execution.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setGroupIDMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Set group ID on execution",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setGroupIDMode",
          "package": "unix-compat",
          "partial": "Group IDMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setGroupIDMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetOwnerAndGroup path uid gid\u003c/code\u003e changes the owner and group of \u003ccode\u003epath\u003c/code\u003e to\n \u003ccode\u003euid\u003c/code\u003e and \u003ccode\u003egid\u003c/code\u003e, respectively.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003euid\u003c/code\u003e or \u003ccode\u003egid\u003c/code\u003e is specified as -1, then that ID is not changed.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003echown\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setOwnerAndGroup",
          "package": "unix-compat",
          "signature": "FilePath -\u003e UserID -\u003e GroupID -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "setOwnerAndGroup path uid gid changes the owner and group of path to uid and gid respectively If uid or gid is specified as then that ID is not changed Note calls chown",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setOwnerAndGroup",
          "normalized": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "package": "unix-compat",
          "partial": "Owner And Group",
          "signature": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setOwnerAndGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as \u003ccode\u003e\u003ca\u003esetOwnerAndGroup\u003c/a\u003e\u003c/code\u003e but does not follow symlinks (and thus\n changes permissions on the link itself).\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003elchown\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setSymbolicLinkOwnerAndGroup",
          "package": "unix-compat",
          "signature": "FilePath -\u003e UserID -\u003e GroupID -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Acts as setOwnerAndGroup but does not follow symlinks and thus changes permissions on the link itself Note calls lchown",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setSymbolicLinkOwnerAndGroup",
          "normalized": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "package": "unix-compat",
          "partial": "Symbolic Link Owner And Group",
          "signature": "FilePath-\u003eUserID-\u003eGroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setSymbolicLinkOwnerAndGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet user ID on execution.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "setUserIDMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Set user ID on execution",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "setUserIDMode",
          "package": "unix-compat",
          "partial": "User IDMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:setUserIDMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the device that this file represents.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "specialDeviceID",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e DeviceID",
          "type": "function"
        },
        "index": {
          "description": "Describes the device that this file represents",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "specialDeviceID",
          "normalized": "FileStatus-\u003eDeviceID",
          "package": "unix-compat",
          "partial": "Device ID",
          "signature": "FileStatus-\u003eDeviceID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:specialDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of last status change (i.e. owner, group, link count, mode, etc.).\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "statusChangeTime",
          "package": "unix-compat",
          "signature": "FileStatus -\u003e EpochTime",
          "type": "function"
        },
        "index": {
          "description": "Time of last status change i.e owner group link count mode etc",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "statusChangeTime",
          "normalized": "FileStatus-\u003eEpochTime",
          "package": "unix-compat",
          "partial": "Change Time",
          "signature": "FileStatus-\u003eEpochTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:statusChangeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOwner, group and others have read and write permission.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "stdFileMode",
          "package": "unix-compat",
          "signature": "FileMode",
          "type": "function"
        },
        "index": {
          "description": "Owner group and others have read and write permission",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "stdFileMode",
          "package": "unix-compat",
          "partial": "File Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:stdFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etouchFile path\u003c/code\u003e sets the access and modification times associated with\n file \u003ccode\u003epath\u003c/code\u003e to the current time.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003eutime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "touchFile",
          "package": "unix-compat",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "touchFile path sets the access and modification times associated with file path to the current time Note calls utime",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "touchFile",
          "normalized": "FilePath-\u003eIO()",
          "package": "unix-compat",
          "partial": "File",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:touchFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines the two file modes into one that contains modes that appear in\n either.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Files",
          "name": "unionFileModes",
          "package": "unix-compat",
          "signature": "FileMode -\u003e FileMode -\u003e FileMode",
          "type": "function"
        },
        "index": {
          "description": "Combines the two file modes into one that contains modes that appear in either",
          "hierarchy": "System PosixCompat Files",
          "module": "System.PosixCompat.Files",
          "name": "unionFileModes",
          "normalized": "FileMode-\u003eFileMode-\u003eFileMode",
          "package": "unix-compat",
          "partial": "File Modes",
          "signature": "FileMode-\u003eFileMode-\u003eFileMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Files.html#v:unionFileModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module makes the operations exported by \u003ccode\u003eSystem.Posix.Temp\u003c/code\u003e\navailable on all platforms. On POSIX systems it re-exports operations from\n\u003ccode\u003eSystem.Posix.Temp\u003c/code\u003e, on other platforms it emulates the operations as far\nas possible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.PosixCompat.Temp",
          "name": "Temp",
          "package": "unix-compat",
          "source": "src/System-PosixCompat-Temp.html",
          "type": "module"
        },
        "index": {
          "description": "This module makes the operations exported by System.Posix.Temp available on all platforms On POSIX systems it re-exports operations from System.Posix.Temp on other platforms it emulates the operations as far as possible",
          "hierarchy": "System PosixCompat Temp",
          "module": "System.PosixCompat.Temp",
          "name": "Temp",
          "package": "unix-compat",
          "partial": "Temp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Temp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a unique filename and open it for reading/writing. The returned\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is the (possibly relative) path of the created file, which is\n padded with 6 random characters. The argument is the desired prefix of the\n filepath of the temporary file to be created.\n\u003c/p\u003e\u003cp\u003eIf you aren't using GHC or Hugs then this function simply wraps mktemp and\n so shouldn't be considered safe.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Temp",
          "name": "mkstemp",
          "package": "unix-compat",
          "signature": "String -\u003e IO (FilePath, Handle)",
          "type": "function"
        },
        "index": {
          "description": "Make unique filename and open it for reading writing The returned FilePath is the possibly relative path of the created file which is padded with random characters The argument is the desired prefix of the filepath of the temporary file to be created If you aren using GHC or Hugs then this function simply wraps mktemp and so shouldn be considered safe",
          "hierarchy": "System PosixCompat Temp",
          "module": "System.PosixCompat.Temp",
          "name": "mkstemp",
          "normalized": "String-\u003eIO(FilePath,Handle)",
          "package": "unix-compat",
          "signature": "String-\u003eIO(FilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Temp.html#v:mkstemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module makes the operations exported by \u003ccode\u003eSystem.Posix.Time\u003c/code\u003e\navailable on all platforms. On POSIX systems it re-exports operations from\n\u003ccode\u003eSystem.Posix.Time\u003c/code\u003e, on other platforms it emulates the operations as far\nas possible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.PosixCompat.Time",
          "name": "Time",
          "package": "unix-compat",
          "source": "src/System-PosixCompat-Time.html",
          "type": "module"
        },
        "index": {
          "description": "This module makes the operations exported by System.Posix.Time available on all platforms On POSIX systems it re-exports operations from System.Posix.Time on other platforms it emulates the operations as far as possible",
          "hierarchy": "System PosixCompat Time",
          "module": "System.PosixCompat.Time",
          "name": "Time",
          "package": "unix-compat",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eepochTime\u003c/code\u003e calls \u003ccode\u003etime\u003c/code\u003e to obtain the number of \n   seconds that have elapsed since the epoch (Jan 01 00:00:00 GMT 1970).\n\u003c/p\u003e",
          "module": "System.PosixCompat.Time",
          "name": "epochTime",
          "package": "unix-compat",
          "signature": "IO EpochTime",
          "type": "function"
        },
        "index": {
          "description": "epochTime calls time to obtain the number of seconds that have elapsed since the epoch Jan GMT",
          "hierarchy": "System PosixCompat Time",
          "module": "System.PosixCompat.Time",
          "name": "epochTime",
          "package": "unix-compat",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Time.html#v:epochTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports the types from \u003ccode\u003eSystem.Posix.Types\u003c/code\u003e on all platforms.\n\u003c/p\u003e\u003cp\u003eOn Windows \u003ccode\u003e\u003ca\u003eUserID\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eGroupID\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLinkCount\u003c/a\u003e\u003c/code\u003e are missing, so they are\nredefined by this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.PosixCompat.Types",
          "name": "Types",
          "package": "unix-compat",
          "source": "src/System-PosixCompat-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module re-exports the types from System.Posix.Types on all platforms On Windows UserID GroupID and LinkCount are missing so they are redefined by this module",
          "hierarchy": "System PosixCompat Types",
          "module": "System.PosixCompat.Types",
          "name": "Types",
          "package": "unix-compat",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module makes the operations exported by \u003ccode\u003eSystem.Posix.Unistd\u003c/code\u003e\navailable on all platforms. On POSIX systems it re-exports operations from\n\u003ccode\u003eSystem.Posix.Unistd\u003c/code\u003e, on other platforms it emulates the operations as far\nas possible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.PosixCompat.Unistd",
          "name": "Unistd",
          "package": "unix-compat",
          "source": "src/System-PosixCompat-Unistd.html",
          "type": "module"
        },
        "index": {
          "description": "This module makes the operations exported by System.Posix.Unistd available on all platforms On POSIX systems it re-exports operations from System.Posix.Unistd on other platforms it emulates the operations as far as possible",
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "Unistd",
          "package": "unix-compat",
          "partial": "Unistd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Unistd",
          "name": "SystemID",
          "package": "unix-compat",
          "type": "data"
        },
        "index": {
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "SystemID",
          "package": "unix-compat",
          "partial": "System ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#t:SystemID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Unistd",
          "name": "SystemID",
          "package": "unix-compat",
          "signature": "SystemID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "SystemID",
          "package": "unix-compat",
          "partial": "System ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:SystemID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Unistd",
          "name": "getSystemID",
          "package": "unix-compat",
          "signature": "IO SystemID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "getSystemID",
          "package": "unix-compat",
          "partial": "System ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:getSystemID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Unistd",
          "name": "machine",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "machine",
          "package": "unix-compat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:machine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSleep for the specified duration (in nanoseconds)\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eGHC Note\u003c/em\u003e: the comment for \u003ccode\u003e\u003ca\u003eusleep\u003c/a\u003e\u003c/code\u003e also applies here.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Unistd",
          "name": "nanosleep",
          "package": "unix-compat",
          "signature": "Integer -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sleep for the specified duration in nanoseconds GHC Note the comment for usleep also applies here",
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "nanosleep",
          "normalized": "Integer-\u003eIO()",
          "package": "unix-compat",
          "signature": "Integer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:nanosleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Unistd",
          "name": "nodeName",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "nodeName",
          "package": "unix-compat",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:nodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Unistd",
          "name": "release",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "release",
          "package": "unix-compat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSleep for the specified duration (in seconds).  Returns the time remaining\n (if the sleep was interrupted by a signal, for example).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eGHC Note\u003c/em\u003e: \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e is a better choice.  Since GHC\n uses signals for its internal clock, a call to \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003e will usually be\n interrupted immediately.  That makes \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003e unusable in a program compiled\n with GHC, unless the RTS timer is disabled (with \u003ccode\u003e+RTS -V0\u003c/code\u003e).  Furthermore,\n without the \u003ccode\u003e-threaded\u003c/code\u003e option, \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003e will block all other user threads.\n Even with the \u003ccode\u003e-threaded\u003c/code\u003e option, \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003e requires a full OS thread to\n itself.  \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e has none of these shortcomings.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Unistd",
          "name": "sleep",
          "package": "unix-compat",
          "signature": "Int -\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Sleep for the specified duration in seconds Returns the time remaining if the sleep was interrupted by signal for example GHC Note threadDelay is better choice Since GHC uses signals for its internal clock call to sleep will usually be interrupted immediately That makes sleep unusable in program compiled with GHC unless the RTS timer is disabled with RTS V0 Furthermore without the threaded option sleep will block all other user threads Even with the threaded option sleep requires full OS thread to itself threadDelay has none of these shortcomings",
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "sleep",
          "normalized": "Int-\u003eIO Int",
          "package": "unix-compat",
          "signature": "Int-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:sleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Unistd",
          "name": "systemName",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "systemName",
          "package": "unix-compat",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:systemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSleep for the specified duration (in microseconds).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eGHC Note\u003c/em\u003e: \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e is a better choice.\n Without the \u003ccode\u003e-threaded\u003c/code\u003e option, \u003ccode\u003e\u003ca\u003eusleep\u003c/a\u003e\u003c/code\u003e will block all other user\n threads.  Even with the \u003ccode\u003e-threaded\u003c/code\u003e option, \u003ccode\u003e\u003ca\u003eusleep\u003c/a\u003e\u003c/code\u003e requires a\n full OS thread to itself.  \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e has\n neither of these shortcomings.\n\u003c/p\u003e",
          "module": "System.PosixCompat.Unistd",
          "name": "usleep",
          "package": "unix-compat",
          "signature": "Int -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sleep for the specified duration in microseconds GHC Note threadDelay is better choice Without the threaded option usleep will block all other user threads Even with the threaded option usleep requires full OS thread to itself threadDelay has neither of these shortcomings",
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "usleep",
          "normalized": "Int-\u003eIO()",
          "package": "unix-compat",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:usleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.Unistd",
          "name": "version",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat Unistd",
          "module": "System.PosixCompat.Unistd",
          "name": "version",
          "package": "unix-compat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-Unistd.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module makes the operations exported by \u003ccode\u003eSystem.Posix.User\u003c/code\u003e\navailable on all platforms. On POSIX systems it re-exports operations from\n\u003ccode\u003eSystem.Posix.User\u003c/code\u003e. On other platforms it provides dummy implementations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.PosixCompat.User",
          "name": "User",
          "package": "unix-compat",
          "source": "src/System-PosixCompat-User.html",
          "type": "module"
        },
        "index": {
          "description": "This module makes the operations exported by System.Posix.User available on all platforms On POSIX systems it re-exports operations from System.Posix.User On other platforms it provides dummy implementations",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "User",
          "package": "unix-compat",
          "partial": "User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.User",
          "name": "GroupEntry",
          "package": "unix-compat",
          "type": "data"
        },
        "index": {
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "GroupEntry",
          "package": "unix-compat",
          "partial": "Group Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#t:GroupEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.User",
          "name": "UserEntry",
          "package": "unix-compat",
          "type": "data"
        },
        "index": {
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "UserEntry",
          "package": "unix-compat",
          "partial": "User Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#t:UserEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.User",
          "name": "GroupEntry",
          "package": "unix-compat",
          "signature": "GroupEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "GroupEntry",
          "package": "unix-compat",
          "partial": "Group Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:GroupEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.PosixCompat.User",
          "name": "UserEntry",
          "package": "unix-compat",
          "signature": "UserEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "UserEntry",
          "package": "unix-compat",
          "partial": "User Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:UserEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAllGroupEntries\u003c/code\u003e returns all group entries on the system by\n   repeatedly calling \u003ccode\u003egetgrent\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getAllGroupEntries",
          "package": "unix-compat",
          "signature": "IO [GroupEntry]",
          "type": "function"
        },
        "index": {
          "description": "getAllGroupEntries returns all group entries on the system by repeatedly calling getgrent",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getAllGroupEntries",
          "normalized": "IO[GroupEntry]",
          "package": "unix-compat",
          "partial": "All Group Entries",
          "signature": "IO[GroupEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getAllGroupEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAllUserEntries\u003c/code\u003e returns all user entries on the system by \n   repeatedly calling \u003ccode\u003egetpwent\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getAllUserEntries",
          "package": "unix-compat",
          "signature": "IO [UserEntry]",
          "type": "function"
        },
        "index": {
          "description": "getAllUserEntries returns all user entries on the system by repeatedly calling getpwent",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getAllUserEntries",
          "normalized": "IO[UserEntry]",
          "package": "unix-compat",
          "partial": "All User Entries",
          "signature": "IO[UserEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getAllUserEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetEffectiveGroupID\u003c/code\u003e calls \u003ccode\u003egetegid\u003c/code\u003e to obtain the effective\n   \u003ccode\u003eGroupID\u003c/code\u003e associated with the current process.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getEffectiveGroupID",
          "package": "unix-compat",
          "signature": "IO GroupID",
          "type": "function"
        },
        "index": {
          "description": "getEffectiveGroupID calls getegid to obtain the effective GroupID associated with the current process",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getEffectiveGroupID",
          "package": "unix-compat",
          "partial": "Effective Group ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getEffectiveGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetEffectiveUserID\u003c/code\u003e calls \u003ccode\u003egeteuid\u003c/code\u003e to obtain the effective\n   \u003ccode\u003eUserID\u003c/code\u003e associated with the current process.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getEffectiveUserID",
          "package": "unix-compat",
          "signature": "IO UserID",
          "type": "function"
        },
        "index": {
          "description": "getEffectiveUserID calls geteuid to obtain the effective UserID associated with the current process",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getEffectiveUserID",
          "package": "unix-compat",
          "partial": "Effective User ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getEffectiveUserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetEffectiveUserName\u003c/code\u003e gets the name\n   associated with the effective \u003ccode\u003eUserID\u003c/code\u003e of the process.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getEffectiveUserName",
          "package": "unix-compat",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "getEffectiveUserName gets the name associated with the effective UserID of the process",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getEffectiveUserName",
          "package": "unix-compat",
          "partial": "Effective User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getEffectiveUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGroupEntryForID gid\u003c/code\u003e calls \u003ccode\u003egetgrgid\u003c/code\u003e to obtain\n   the \u003ccode\u003eGroupEntry\u003c/code\u003e information associated with \u003ccode\u003eGroupID\u003c/code\u003e\n   \u003ccode\u003egid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getGroupEntryForID",
          "package": "unix-compat",
          "signature": "GroupID -\u003e IO GroupEntry",
          "type": "function"
        },
        "index": {
          "description": "getGroupEntryForID gid calls getgrgid to obtain the GroupEntry information associated with GroupID gid",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getGroupEntryForID",
          "normalized": "GroupID-\u003eIO GroupEntry",
          "package": "unix-compat",
          "partial": "Group Entry For ID",
          "signature": "GroupID-\u003eIO GroupEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getGroupEntryForID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGroupEntryForName name\u003c/code\u003e calls \u003ccode\u003egetgrnam\u003c/code\u003e to obtain\n   the \u003ccode\u003eGroupEntry\u003c/code\u003e information associated with the group called\n   \u003ccode\u003ename\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getGroupEntryForName",
          "package": "unix-compat",
          "signature": "String -\u003e IO GroupEntry",
          "type": "function"
        },
        "index": {
          "description": "getGroupEntryForName name calls getgrnam to obtain the GroupEntry information associated with the group called name",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getGroupEntryForName",
          "normalized": "String-\u003eIO GroupEntry",
          "package": "unix-compat",
          "partial": "Group Entry For Name",
          "signature": "String-\u003eIO GroupEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getGroupEntryForName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGroups\u003c/code\u003e calls \u003ccode\u003egetgroups\u003c/code\u003e to obtain the list of\n   supplementary \u003ccode\u003eGroupID\u003c/code\u003es associated with the current process.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getGroups",
          "package": "unix-compat",
          "signature": "IO [GroupID]",
          "type": "function"
        },
        "index": {
          "description": "getGroups calls getgroups to obtain the list of supplementary GroupID associated with the current process",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getGroups",
          "normalized": "IO[GroupID]",
          "package": "unix-compat",
          "partial": "Groups",
          "signature": "IO[GroupID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetLoginName\u003c/code\u003e calls \u003ccode\u003egetlogin\u003c/code\u003e to obtain the login name\n   associated with the current process.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getLoginName",
          "package": "unix-compat",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "getLoginName calls getlogin to obtain the login name associated with the current process",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getLoginName",
          "package": "unix-compat",
          "partial": "Login Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getLoginName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetRealGroupID\u003c/code\u003e calls \u003ccode\u003egetgid\u003c/code\u003e to obtain the real \u003ccode\u003eGroupID\u003c/code\u003e\n   associated with the current process.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getRealGroupID",
          "package": "unix-compat",
          "signature": "IO GroupID",
          "type": "function"
        },
        "index": {
          "description": "getRealGroupID calls getgid to obtain the real GroupID associated with the current process",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getRealGroupID",
          "package": "unix-compat",
          "partial": "Real Group ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getRealGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetRealUserID\u003c/code\u003e calls \u003ccode\u003egetuid\u003c/code\u003e to obtain the real \u003ccode\u003eUserID\u003c/code\u003e\n   associated with the current process.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getRealUserID",
          "package": "unix-compat",
          "signature": "IO UserID",
          "type": "function"
        },
        "index": {
          "description": "getRealUserID calls getuid to obtain the real UserID associated with the current process",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getRealUserID",
          "package": "unix-compat",
          "partial": "Real User ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getRealUserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetUserEntryForID gid\u003c/code\u003e calls \u003ccode\u003egetpwuid\u003c/code\u003e to obtain\n   the \u003ccode\u003eUserEntry\u003c/code\u003e information associated with \u003ccode\u003eUserID\u003c/code\u003e\n   \u003ccode\u003euid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getUserEntryForID",
          "package": "unix-compat",
          "signature": "UserID -\u003e IO UserEntry",
          "type": "function"
        },
        "index": {
          "description": "getUserEntryForID gid calls getpwuid to obtain the UserEntry information associated with UserID uid",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getUserEntryForID",
          "normalized": "UserID-\u003eIO UserEntry",
          "package": "unix-compat",
          "partial": "User Entry For ID",
          "signature": "UserID-\u003eIO UserEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getUserEntryForID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetUserEntryForName name\u003c/code\u003e calls \u003ccode\u003egetpwnam\u003c/code\u003e to obtain\n   the \u003ccode\u003eUserEntry\u003c/code\u003e information associated with the user login\n   \u003ccode\u003ename\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "getUserEntryForName",
          "package": "unix-compat",
          "signature": "String -\u003e IO UserEntry",
          "type": "function"
        },
        "index": {
          "description": "getUserEntryForName name calls getpwnam to obtain the UserEntry information associated with the user login name",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "getUserEntryForName",
          "normalized": "String-\u003eIO UserEntry",
          "package": "unix-compat",
          "partial": "User Entry For Name",
          "signature": "String-\u003eIO UserEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:getUserEntryForName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unique numeric ID for this group (gr_gid)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "groupID",
          "package": "unix-compat",
          "signature": "GroupID",
          "type": "function"
        },
        "index": {
          "description": "The unique numeric ID for this group gr gid",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "groupID",
          "package": "unix-compat",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:groupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of zero or more usernames that are members (gr_mem)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "groupMembers",
          "package": "unix-compat",
          "signature": "[String]",
          "type": "function"
        },
        "index": {
          "description": "list of zero or more usernames that are members gr mem",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "groupMembers",
          "normalized": "[String]",
          "package": "unix-compat",
          "partial": "Members",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:groupMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of this group (gr_name)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "groupName",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "The name of this group gr name",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "groupName",
          "package": "unix-compat",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:groupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe password for this group (gr_passwd)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "groupPassword",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "The password for this group gr passwd",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "groupPassword",
          "package": "unix-compat",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:groupPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHome directory (pw_dir)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "homeDirectory",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "Home directory pw dir",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "homeDirectory",
          "package": "unix-compat",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:homeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetGroupID gid\u003c/code\u003e calls \u003ccode\u003esetgid\u003c/code\u003e to set the real, effective, and\n   saved set-group-id associated with the current process to \u003ccode\u003egid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "setGroupID",
          "package": "unix-compat",
          "signature": "GroupID -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "setGroupID gid calls setgid to set the real effective and saved set-group-id associated with the current process to gid",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "setGroupID",
          "normalized": "GroupID-\u003eIO()",
          "package": "unix-compat",
          "partial": "Group ID",
          "signature": "GroupID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:setGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetUserID uid\u003c/code\u003e calls \u003ccode\u003esetuid\u003c/code\u003e to set the real, effective, and\n   saved set-user-id associated with the current process to \u003ccode\u003euid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "setUserID",
          "package": "unix-compat",
          "signature": "UserID -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "setUserID uid calls setuid to set the real effective and saved set-user-id associated with the current process to uid",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "setUserID",
          "normalized": "UserID-\u003eIO()",
          "package": "unix-compat",
          "partial": "User ID",
          "signature": "UserID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:setUserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsually the real name for the user (pw_gecos)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "userGecos",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "Usually the real name for the user pw gecos",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "userGecos",
          "package": "unix-compat",
          "partial": "Gecos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:userGecos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimary group ID (pw_gid)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "userGroupID",
          "package": "unix-compat",
          "signature": "GroupID",
          "type": "function"
        },
        "index": {
          "description": "Primary group ID pw gid",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "userGroupID",
          "package": "unix-compat",
          "partial": "Group ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:userGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric ID for this user (pw_uid)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "userID",
          "package": "unix-compat",
          "signature": "UserID",
          "type": "function"
        },
        "index": {
          "description": "Numeric ID for this user pw uid",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "userID",
          "package": "unix-compat",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:userID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTextual name of this user (pw_name)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "userName",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "Textual name of this user pw name",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "userName",
          "package": "unix-compat",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:userName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePassword -- may be empty or fake if shadow is in use (pw_passwd)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "userPassword",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "Password may be empty or fake if shadow is in use pw passwd",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "userPassword",
          "package": "unix-compat",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:userPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault shell (pw_shell)\n\u003c/p\u003e",
          "module": "System.PosixCompat.User",
          "name": "userShell",
          "package": "unix-compat",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "Default shell pw shell",
          "hierarchy": "System PosixCompat User",
          "module": "System.PosixCompat.User",
          "name": "userShell",
          "package": "unix-compat",
          "partial": "Shell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat-User.html#v:userShell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eunix-compat\u003c/code\u003e package provides portable implementations of parts of the\n\u003ccode\u003eunix\u003c/code\u003e package. On POSIX system it re-exports operations from the \u003ccode\u003eunix\u003c/code\u003e\npackage, on other platforms it emulates the operations as far as possible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.PosixCompat",
          "name": "PosixCompat",
          "package": "unix-compat",
          "source": "src/System-PosixCompat.html",
          "type": "module"
        },
        "index": {
          "description": "The unix-compat package provides portable implementations of parts of the unix package On POSIX system it re-exports operations from the unix package on other platforms it emulates the operations as far as possible",
          "hierarchy": "System PosixCompat",
          "module": "System.PosixCompat",
          "name": "PosixCompat",
          "package": "unix-compat",
          "partial": "Posix Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if unix-compat is using its portable implementation,\n   or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the unix package is simply being re-exported.\n\u003c/p\u003e",
          "module": "System.PosixCompat",
          "name": "usingPortableImpl",
          "package": "unix-compat",
          "signature": "Bool",
          "source": "src/System-PosixCompat.html#usingPortableImpl",
          "type": "function"
        },
        "index": {
          "description": "True if unix-compat is using its portable implementation or False if the unix package is simply being re-exported",
          "hierarchy": "System PosixCompat",
          "module": "System.PosixCompat",
          "name": "usingPortableImpl",
          "package": "unix-compat",
          "partial": "Portable Impl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-compat/docs/System-PosixCompat.html#v:usingPortableImpl"
      }
    }
  ]
]