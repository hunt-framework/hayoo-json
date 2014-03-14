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
        "word": "linux-mount"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an interface to the system mount and umount\n functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Linux.Mount",
          "name": "Mount",
          "package": "linux-mount",
          "source": "src/System-Linux-Mount.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides an interface to the system mount and umount functions",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Mount",
          "package": "linux-mount",
          "partial": "Mount",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilesystem dependent options to be used when mounting a\n filesystem; the content of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDriverData\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is passed directly to the\n filesystem driver.\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "DriverData",
          "package": "linux-mount",
          "source": "src/System-Linux-Mount.html#DriverData",
          "type": "type"
        },
        "index": {
          "description": "Filesystem dependent options to be used when mounting filesystem the content of DriverData is passed directly to the filesystem driver",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "DriverData",
          "package": "linux-mount",
          "partial": "Driver Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#t:DriverData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filesystem independent option to be used when mounting a\n filesystem.\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "MountFlag",
          "package": "linux-mount",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "data"
        },
        "index": {
          "description": "filesystem independent option to be used when mounting filesystem",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "MountFlag",
          "package": "linux-mount",
          "partial": "Mount Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#t:MountFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filesystem independent option to be used when unmounting a\n filesystem.\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "UmountFlag",
          "package": "linux-mount",
          "source": "src/System-Linux-Mount.html#UmountFlag",
          "type": "data"
        },
        "index": {
          "description": "filesystem independent option to be used when unmounting filesystem",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "UmountFlag",
          "package": "linux-mount",
          "partial": "Umount Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#t:UmountFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Active",
          "package": "linux-mount",
          "signature": "Active",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Active",
          "package": "linux-mount",
          "partial": "Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Active"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Bind",
          "package": "linux-mount",
          "signature": "Bind",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Bind",
          "package": "linux-mount",
          "partial": "Bind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a lazy unmount: make the mount\n point unavailable for new accesses, and\n actually perform the unmount when the\n mount point ceases to be busy.\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "Detach",
          "package": "linux-mount",
          "signature": "Detach",
          "source": "src/System-Linux-Mount.html#UmountFlag",
          "type": "function"
        },
        "index": {
          "description": "Perform lazy unmount make the mount point unavailable for new accesses and actually perform the unmount when the mount point ceases to be busy",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Detach",
          "package": "linux-mount",
          "partial": "Detach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Detach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Dirsync",
          "package": "linux-mount",
          "signature": "Dirsync",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Dirsync",
          "package": "linux-mount",
          "partial": "Dirsync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Dirsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark the mount point as expired. If a\n mount point is not currently in use, then\n an initial call to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eumountWith\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with\n this flag fails with the error \u003ccode\u003eEAGAIN\u003c/code\u003e, but\n marks the mount point as expired. The\n mount point remains expired as long as it\n isn't accessed by any process. A second\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eumountWith\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e call specifying \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExpire\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n unmounts an expired mount point.\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "Expire",
          "package": "linux-mount",
          "signature": "Expire",
          "source": "src/System-Linux-Mount.html#UmountFlag",
          "type": "function"
        },
        "index": {
          "description": "Mark the mount point as expired If mount point is not currently in use then an initial call to umountWith with this flag fails with the error EAGAIN but marks the mount point as expired The mount point remains expired as long as it isn accessed by any process second umountWith call specifying Expire unmounts an expired mount point",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Expire",
          "package": "linux-mount",
          "partial": "Expire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Expire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce  unmount  even  if busy.\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "Force",
          "package": "linux-mount",
          "signature": "Force",
          "source": "src/System-Linux-Mount.html#UmountFlag",
          "type": "function"
        },
        "index": {
          "description": "Force unmount even if busy",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Force",
          "package": "linux-mount",
          "partial": "Force",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "IVersion",
          "package": "linux-mount",
          "signature": "IVersion",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "IVersion",
          "package": "linux-mount",
          "partial": "IVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:IVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Kernmount",
          "package": "linux-mount",
          "signature": "Kernmount",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Kernmount",
          "package": "linux-mount",
          "partial": "Kernmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Kernmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Mandlock",
          "package": "linux-mount",
          "signature": "Mandlock",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Mandlock",
          "package": "linux-mount",
          "partial": "Mandlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Mandlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Move",
          "package": "linux-mount",
          "signature": "Move",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Move",
          "package": "linux-mount",
          "partial": "Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Noatime",
          "package": "linux-mount",
          "signature": "Noatime",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Noatime",
          "package": "linux-mount",
          "partial": "Noatime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Noatime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Nodev",
          "package": "linux-mount",
          "signature": "Nodev",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Nodev",
          "package": "linux-mount",
          "partial": "Nodev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Nodev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Nodiratime",
          "package": "linux-mount",
          "signature": "Nodiratime",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Nodiratime",
          "package": "linux-mount",
          "partial": "Nodiratime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Nodiratime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Noexec",
          "package": "linux-mount",
          "signature": "Noexec",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Noexec",
          "package": "linux-mount",
          "partial": "Noexec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Noexec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Nosuid",
          "package": "linux-mount",
          "signature": "Nosuid",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Nosuid",
          "package": "linux-mount",
          "partial": "Nosuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Nosuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Nouser",
          "package": "linux-mount",
          "signature": "Nouser",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Nouser",
          "package": "linux-mount",
          "partial": "Nouser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Nouser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain unmount, behaves like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eumount\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "Plain",
          "package": "linux-mount",
          "signature": "Plain",
          "source": "src/System-Linux-Mount.html#UmountFlag",
          "type": "function"
        },
        "index": {
          "description": "Plain unmount behaves like umount",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Plain",
          "package": "linux-mount",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Posixacl",
          "package": "linux-mount",
          "signature": "Posixacl",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Posixacl",
          "package": "linux-mount",
          "partial": "Posixacl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Posixacl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Private",
          "package": "linux-mount",
          "signature": "Private",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Private",
          "package": "linux-mount",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Private"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Rdonly",
          "package": "linux-mount",
          "signature": "Rdonly",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Rdonly",
          "package": "linux-mount",
          "partial": "Rdonly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Rdonly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Rec",
          "package": "linux-mount",
          "signature": "Rec",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Rec",
          "package": "linux-mount",
          "partial": "Rec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Relatime",
          "package": "linux-mount",
          "signature": "Relatime",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Relatime",
          "package": "linux-mount",
          "partial": "Relatime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Relatime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Remount",
          "package": "linux-mount",
          "signature": "Remount",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Remount",
          "package": "linux-mount",
          "partial": "Remount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Remount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Shared",
          "package": "linux-mount",
          "signature": "Shared",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Shared",
          "package": "linux-mount",
          "partial": "Shared",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Shared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Silent",
          "package": "linux-mount",
          "signature": "Silent",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Silent",
          "package": "linux-mount",
          "partial": "Silent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Slave",
          "package": "linux-mount",
          "signature": "Slave",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Slave",
          "package": "linux-mount",
          "partial": "Slave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Slave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Strictatime",
          "package": "linux-mount",
          "signature": "Strictatime",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Strictatime",
          "package": "linux-mount",
          "partial": "Strictatime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Strictatime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Synchronous",
          "package": "linux-mount",
          "signature": "Synchronous",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Synchronous",
          "package": "linux-mount",
          "partial": "Synchronous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Synchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Mount",
          "name": "Unbindable",
          "package": "linux-mount",
          "signature": "Unbindable",
          "source": "src/System-Linux-Mount.html#MountFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "Unbindable",
          "package": "linux-mount",
          "partial": "Unbindable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:Unbindable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMount a filesystem (call to \u003ccode\u003emount()\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "mount",
          "package": "linux-mount",
          "signature": "String-\u003e FilePath-\u003e String-\u003e [MountFlag]-\u003e DriverData-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Mount filesystem call to mount",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "mount",
          "normalized": "String-\u003eFilePath-\u003eString-\u003e[MountFlag]-\u003eDriverData-\u003eIO()",
          "package": "linux-mount",
          "signature": "String-\u003eFilePath-\u003eString-\u003e[MountFlag]-\u003eDriverData-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:mount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDriverData\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "noData",
          "package": "linux-mount",
          "signature": "DriverData",
          "source": "src/System-Linux-Mount.html#noData",
          "type": "function"
        },
        "index": {
          "description": "Empty DriverData",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "noData",
          "package": "linux-mount",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:noData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnmount a filesystem (call to \u003ccode\u003eumount()\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "umount",
          "package": "linux-mount",
          "signature": "FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Unmount filesystem call to umount",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "umount",
          "normalized": "FilePath-\u003eIO()",
          "package": "linux-mount",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:umount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnmount a filesystem using specific unmount options (call to\n \u003ccode\u003eumount2()\u003c/code\u003e). See \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUmountFlag\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "System.Linux.Mount",
          "name": "umountWith",
          "package": "linux-mount",
          "signature": "UmountFlag-\u003e Bool-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Unmount filesystem using specific unmount options call to umount2 See UmountFlag for details",
          "hierarchy": "System Linux Mount",
          "module": "System.Linux.Mount",
          "name": "umountWith",
          "normalized": "UmountFlag-\u003eBool-\u003eFilePath-\u003eIO()",
          "package": "linux-mount",
          "partial": "With",
          "signature": "UmountFlag-\u003eBool-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-mount/docs/System-Linux-Mount.html#v:umountWith"
      }
    }
  ]
]