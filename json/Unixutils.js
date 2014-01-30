[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Chroot.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module, except for useEnv, is copied from the build-env package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Unix.Chroot",
        "fct-package": "Unixutils",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-Chroot.html",
        "fct-type": "module",
        "title": "Chroot"
      },
      "index": {
        "description": "This module except for useEnv is copied from the build-env package",
        "hierarchy": "System Unix Chroot",
        "module": "System.Unix.Chroot",
        "name": "Chroot",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Chroot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Chroot.html#v:fchroot",
      "description": {
        "fct-descr": "\u003cp\u003efchroot runs an IO action inside a chroot\n fchroot performs a chroot, runs the action, and then restores the\n original root and working directory. This probably affects the\n chroot and working directory of all the threads in the process,\n so...\n NOTE: will throw IOError if internal chroot fails\n\u003c/p\u003e",
        "fct-module": "System.Unix.Chroot",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-Unix-Chroot.html#fchroot",
        "fct-type": "function",
        "title": "fchroot"
      },
      "index": {
        "description": "fchroot runs an IO action inside chroot fchroot performs chroot runs the action and then restores the original root and working directory This probably affects the chroot and working directory of all the threads in the process so NOTE will throw IOError if internal chroot fails",
        "hierarchy": "System Unix Chroot",
        "module": "System.Unix.Chroot",
        "name": "fchroot",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "Unixutils",
        "partial": "",
        "signature": "FilePath-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Chroot.html#v:useEnv",
      "description": {
        "fct-descr": "\u003cp\u003eThe ssh inside of the chroot needs to be able to talk to the\n running ssh-agent.  Therefore we mount --bind the ssh agent socket\n dir inside the chroot (and umount it when we exit the chroot.\n\u003c/p\u003e",
        "fct-module": "System.Unix.Chroot",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e (a -\u003e IO a) -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-Unix-Chroot.html#useEnv",
        "fct-type": "function",
        "title": "useEnv"
      },
      "index": {
        "description": "The ssh inside of the chroot needs to be able to talk to the running ssh-agent Therefore we mount bind the ssh agent socket dir inside the chroot and umount it when we exit the chroot",
        "hierarchy": "System Unix Chroot",
        "module": "System.Unix.Chroot",
        "name": "useEnv",
        "normalized": "FilePath-\u003e(a-\u003eIO a)-\u003eIO a-\u003eIO a",
        "package": "Unixutils",
        "partial": "Env",
        "signature": "FilePath-\u003e(a-\u003eIO a)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Crypt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esupport for crypt() and \u003cem\u003eetc\u003c/em\u003eshadow\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Unix.Crypt",
        "fct-package": "Unixutils",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-Crypt.html",
        "fct-type": "module",
        "title": "Crypt"
      },
      "index": {
        "description": "support for crypt and etc shadow",
        "hierarchy": "System Unix Crypt",
        "module": "System.Unix.Crypt",
        "name": "Crypt",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Crypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Crypt.html#v:crypt",
      "description": {
        "fct-descr": "\u003cp\u003ecalls crypt(3) \n\u003c/p\u003e",
        "fct-module": "System.Unix.Crypt",
        "fct-package": "Unixutils",
        "fct-signature": "String-\u003e String-\u003e IO String",
        "fct-type": "function",
        "title": "crypt"
      },
      "index": {
        "description": "calls crypt",
        "hierarchy": "System Unix Crypt",
        "module": "System.Unix.Crypt",
        "name": "crypt",
        "normalized": "String-\u003eString-\u003eIO String",
        "package": "Unixutils",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#",
      "description": {
        "fct-module": "System.Unix.Directory",
        "fct-package": "Unixutils",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-Directory.html",
        "fct-type": "module",
        "title": "Directory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix Directory",
        "module": "System.Unix.Directory",
        "name": "Directory",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a directory and return a list of all the (path,\n fileStatus) pairs.\n\u003c/p\u003e",
        "fct-module": "System.Unix.Directory",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO [(FilePath, FileStatus)]",
        "fct-source": "src/System-Unix-Directory.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Traverse directory and return list of all the path fileStatus pairs",
        "hierarchy": "System Unix Directory",
        "module": "System.Unix.Directory",
        "name": "find",
        "normalized": "FilePath-\u003eIO[(FilePath,FileStatus)]",
        "package": "Unixutils",
        "partial": "",
        "signature": "FilePath-\u003eIO[(FilePath,FileStatus)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:mkdtemp",
      "description": {
        "fct-module": "System.Unix.Directory",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO FilePath",
        "fct-source": "src/System-Unix-Directory.html#mkdtemp",
        "fct-type": "function",
        "title": "mkdtemp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix Directory",
        "module": "System.Unix.Directory",
        "name": "mkdtemp",
        "normalized": "FilePath-\u003eIO FilePath",
        "package": "Unixutils",
        "partial": "",
        "signature": "FilePath-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:removeRecursiveSafely",
      "description": {
        "fct-descr": "\u003cp\u003eRecursively remove a directory contents on a single file system.\n The adjective \"Safely\" refers to these features:\n   1. It will not follow symlinks\n   2. If it finds a directory that seems to be a mount point,\n\tit will attempt to unmount it up to five times.  If it\n\tstill seems to be a mount point it gives up\n   3. It doesn't use \u003cem\u003eproc\u003c/em\u003emounts, which is ambiguous or wrong\n\twhen you are inside a chroot.\n\u003c/p\u003e",
        "fct-module": "System.Unix.Directory",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Unix-Directory.html#removeRecursiveSafely",
        "fct-type": "function",
        "title": "removeRecursiveSafely"
      },
      "index": {
        "description": "Recursively remove directory contents on single file system The adjective Safely refers to these features It will not follow symlinks If it finds directory that seems to be mount point it will attempt to unmount it up to five times If it still seems to be mount point it gives up It doesn use proc mounts which is ambiguous or wrong when you are inside chroot",
        "hierarchy": "System Unix Directory",
        "module": "System.Unix.Directory",
        "name": "removeRecursiveSafely",
        "normalized": "FilePath-\u003eIO()",
        "package": "Unixutils",
        "partial": "Recursive Safely",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:renameFileWithBackup",
      "description": {
        "fct-descr": "\u003cp\u003eRename src to dst, and if dst already exists move it to dst~.\n If dst~ exists it is removed.\n\u003c/p\u003e",
        "fct-module": "System.Unix.Directory",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-Unix-Directory.html#renameFileWithBackup",
        "fct-type": "function",
        "title": "renameFileWithBackup"
      },
      "index": {
        "description": "Rename src to dst and if dst already exists move it to dst If dst exists it is removed",
        "hierarchy": "System Unix Directory",
        "module": "System.Unix.Directory",
        "name": "renameFileWithBackup",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "Unixutils",
        "partial": "File With Backup",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:unmountRecursiveSafely",
      "description": {
        "fct-descr": "\u003cp\u003eLike removeRecursiveSafely but doesn't remove any files, just\n unmounts anything it finds mounted.  Note that this can be much\n slower than Mount.umountBelow, use that instead.\n\u003c/p\u003e",
        "fct-module": "System.Unix.Directory",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Unix-Directory.html#unmountRecursiveSafely",
        "fct-type": "function",
        "title": "unmountRecursiveSafely"
      },
      "index": {
        "description": "Like removeRecursiveSafely but doesn remove any files just unmounts anything it finds mounted Note that this can be much slower than Mount.umountBelow use that instead",
        "hierarchy": "System Unix Directory",
        "module": "System.Unix.Directory",
        "name": "unmountRecursiveSafely",
        "normalized": "FilePath-\u003eIO()",
        "package": "Unixutils",
        "partial": "Recursive Safely",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:withTemporaryDirectory",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a temporary directory, run the action, remove the temporary directory\n the first argument is a template for the temporary directory name\n the directory will be created as a subdirectory of the directory returned by getTemporaryDirectory\n the temporary directory will be automatically removed afterwards.\n your working directory is not altered\n\u003c/p\u003e",
        "fct-module": "System.Unix.Directory",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e (FilePath -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-Unix-Directory.html#withTemporaryDirectory",
        "fct-type": "function",
        "title": "withTemporaryDirectory"
      },
      "index": {
        "description": "create temporary directory run the action remove the temporary directory the first argument is template for the temporary directory name the directory will be created as subdirectory of the directory returned by getTemporaryDirectory the temporary directory will be automatically removed afterwards your working directory is not altered",
        "hierarchy": "System Unix Directory",
        "module": "System.Unix.Directory",
        "name": "withTemporaryDirectory",
        "normalized": "FilePath-\u003e(FilePath-\u003eIO a)-\u003eIO a",
        "package": "Unixutils",
        "partial": "Temporary Directory",
        "signature": "FilePath-\u003e(FilePath-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:withWorkingDirectory",
      "description": {
        "fct-descr": "\u003cp\u003etemporarily change the working directory to |dir| while running |action|\n\u003c/p\u003e",
        "fct-module": "System.Unix.Directory",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-Unix-Directory.html#withWorkingDirectory",
        "fct-type": "function",
        "title": "withWorkingDirectory"
      },
      "index": {
        "description": "temporarily change the working directory to dir while running action",
        "hierarchy": "System Unix Directory",
        "module": "System.Unix.Directory",
        "name": "withWorkingDirectory",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "Unixutils",
        "partial": "Working Directory",
        "signature": "FilePath-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe function splitFileName is taken from missingh, at the moment\n missingh will not build under sid.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Unix.FilePath",
        "fct-package": "Unixutils",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-FilePath.html",
        "fct-type": "module",
        "title": "FilePath"
      },
      "index": {
        "description": "The function splitFileName is taken from missingh at the moment missingh will not build under sid",
        "hierarchy": "System Unix FilePath",
        "module": "System.Unix.FilePath",
        "name": "FilePath",
        "normalized": "",
        "package": "Unixutils",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#v:-60--43--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate two paths, making sure there is exactly one path separator.\n\u003c/p\u003e",
        "fct-module": "System.Unix.FilePath",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/System-Unix-FilePath.html#%3C%2B%2B%3E",
        "fct-type": "function",
        "title": "(\u003c++\u003e)"
      },
      "index": {
        "description": "Concatenate two paths making sure there is exactly one path separator",
        "hierarchy": "System Unix FilePath",
        "module": "System.Unix.FilePath",
        "name": "(\u003c++\u003e) \u003c++\u003e",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "Unixutils",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#v:baseName",
      "description": {
        "fct-descr": "\u003cp\u003eUse takeFileName\n\u003c/p\u003e",
        "fct-module": "System.Unix.FilePath",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e String",
        "fct-source": "src/System-Unix-FilePath.html#baseName",
        "fct-type": "function",
        "title": "baseName"
      },
      "index": {
        "description": "Use takeFileName",
        "hierarchy": "System Unix FilePath",
        "module": "System.Unix.FilePath",
        "name": "baseName",
        "normalized": "FilePath-\u003eString",
        "package": "Unixutils",
        "partial": "Name",
        "signature": "FilePath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#v:dirName",
      "description": {
        "fct-descr": "\u003cp\u003eUse dropFileName\n\u003c/p\u003e",
        "fct-module": "System.Unix.FilePath",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/System-Unix-FilePath.html#dirName",
        "fct-type": "function",
        "title": "dirName"
      },
      "index": {
        "description": "Use dropFileName",
        "hierarchy": "System Unix FilePath",
        "module": "System.Unix.FilePath",
        "name": "dirName",
        "normalized": "FilePath-\u003eFilePath",
        "package": "Unixutils",
        "partial": "Name",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#v:realpath",
      "description": {
        "fct-descr": "\u003cp\u003eresolve all references to \u003cem\u003e.\u003c/em\u003e, \u003cem\u003e..\u003c/em\u003e, extra slashes, and symlinks\n\u003c/p\u003e",
        "fct-module": "System.Unix.FilePath",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO FilePath",
        "fct-source": "src/System-Unix-FilePath.html#realpath",
        "fct-type": "function",
        "title": "realpath"
      },
      "index": {
        "description": "resolve all references to extra slashes and symlinks",
        "hierarchy": "System Unix FilePath",
        "module": "System.Unix.FilePath",
        "name": "realpath",
        "normalized": "FilePath-\u003eIO FilePath",
        "package": "Unixutils",
        "partial": "",
        "signature": "FilePath-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Files.html#",
      "description": {
        "fct-module": "System.Unix.Files",
        "fct-package": "Unixutils",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-Files.html",
        "fct-type": "module",
        "title": "Files"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix Files",
        "module": "System.Unix.Files",
        "name": "Files",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Files.html#v:forceSymbolicLink",
      "description": {
        "fct-descr": "\u003cp\u003ecalls \u003ccode\u003e\u003ca\u003ecreateSymbolicLink\u003c/a\u003e\u003c/code\u003e but will remove the target and retry if\n \u003ccode\u003e\u003ca\u003ecreateSymbolicLink\u003c/a\u003e\u003c/code\u003e raises EEXIST.\n\u003c/p\u003e",
        "fct-module": "System.Unix.Files",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-Unix-Files.html#forceSymbolicLink",
        "fct-type": "function",
        "title": "forceSymbolicLink"
      },
      "index": {
        "description": "calls createSymbolicLink but will remove the target and retry if createSymbolicLink raises EEXIST",
        "hierarchy": "System Unix Files",
        "module": "System.Unix.Files",
        "name": "forceSymbolicLink",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "Unixutils",
        "partial": "Symbolic Link",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-KillByCwd.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA place to collect and hopefully retire all the random ways of\n running shell commands that have accumulated over the years.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Unix.KillByCwd",
        "fct-package": "Unixutils",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-KillByCwd.html",
        "fct-type": "module",
        "title": "KillByCwd"
      },
      "index": {
        "description": "place to collect and hopefully retire all the random ways of running shell commands that have accumulated over the years",
        "hierarchy": "System Unix KillByCwd",
        "module": "System.Unix.KillByCwd",
        "name": "KillByCwd",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Kill By Cwd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-KillByCwd.html#v:killByCwd",
      "description": {
        "fct-descr": "\u003cp\u003eKill the processes whose working directory is in or under the\n given directory.\n\u003c/p\u003e",
        "fct-module": "System.Unix.KillByCwd",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO [(String, Maybe String)]",
        "fct-source": "src/System-Unix-KillByCwd.html#killByCwd",
        "fct-type": "function",
        "title": "killByCwd"
      },
      "index": {
        "description": "Kill the processes whose working directory is in or under the given directory",
        "hierarchy": "System Unix KillByCwd",
        "module": "System.Unix.KillByCwd",
        "name": "killByCwd",
        "normalized": "FilePath-\u003eIO[(String,Maybe String)]",
        "package": "Unixutils",
        "partial": "By Cwd",
        "signature": "FilePath-\u003eIO[(String,Maybe String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Misc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrappers around some handy unix shell commands.  Please let\n me know if you think of better module names to hold these\n functions.  -dsf\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Unix.Misc",
        "fct-package": "Unixutils",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-Misc.html",
        "fct-type": "module",
        "title": "Misc"
      },
      "index": {
        "description": "Wrappers around some handy unix shell commands Please let me know if you think of better module names to hold these functions dsf",
        "hierarchy": "System Unix Misc",
        "module": "System.Unix.Misc",
        "name": "Misc",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Misc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Misc.html#v:gzip",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ByteString.Lazy.Char8.readFile path \u003e\u003e= Data.ByteString.Lazy.Char8.writeFile (path ++ \".gz\")\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003eData.ByteString.Lazy.Char8.readFile path \u003e\u003e= Data.ByteString.Lazy.Char8.writeFile (path ++ \".gz\")\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Unix.Misc",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Unix-Misc.html#gzip",
        "fct-type": "function",
        "title": "gzip"
      },
      "index": {
        "description": "Deprecated Use Data.ByteString.Lazy.Char8.readFile path Data.ByteString.Lazy.Char8.writeFile path gz Deprecated Use Data.ByteString.Lazy.Char8.readFile path Data.ByteString.Lazy.Char8.writeFile path gz",
        "hierarchy": "System Unix Misc",
        "module": "System.Unix.Misc",
        "name": "gzip",
        "normalized": "FilePath-\u003eIO()",
        "package": "Unixutils",
        "partial": "",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Misc.html#v:md5sum",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ByteString.Lazy.Char8.readFile path \u003e\u003e= return . show . Data.Digest.Pure.MD5.md5\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003eData.ByteString.Lazy.Char8.readFile path \u003e\u003e= return . show . Data.Digest.Pure.MD5.md5\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Unix.Misc",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/System-Unix-Misc.html#md5sum",
        "fct-type": "function",
        "title": "md5sum"
      },
      "index": {
        "description": "Deprecated Use Data.ByteString.Lazy.Char8.readFile path return show Data.Digest.Pure.MD5.md5 Deprecated Use Data.ByteString.Lazy.Char8.readFile path return show Data.Digest.Pure.MD5.md5",
        "hierarchy": "System Unix Misc",
        "module": "System.Unix.Misc",
        "name": "md5sum",
        "normalized": "FilePath-\u003eIO String",
        "package": "Unixutils",
        "partial": "",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Mount.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003efunctions for mounting, umounting, parsing /proc/mounts, etc\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Unix.Mount",
        "fct-package": "Unixutils",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-Mount.html",
        "fct-type": "module",
        "title": "Mount"
      },
      "index": {
        "description": "functions for mounting umounting parsing proc mounts etc",
        "hierarchy": "System Unix Mount",
        "module": "System.Unix.Mount",
        "name": "Mount",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Mount",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Mount.html#v:isMountPoint",
      "description": {
        "fct-module": "System.Unix.Mount",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-Unix-Mount.html#isMountPoint",
        "fct-type": "function",
        "title": "isMountPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix Mount",
        "module": "System.Unix.Mount",
        "name": "isMountPoint",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "Unixutils",
        "partial": "Mount Point",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Mount.html#v:umount",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eumount\u003c/a\u003e\u003c/code\u003e - run umount with the specified args\n NOTE: this function uses exec, so you do \u003cem\u003enot\u003c/em\u003e need to shell-escape\n NOTE: we don't use the umount system call because the system call\n is not smart enough to update /etc/mtab\n\u003c/p\u003e",
        "fct-module": "System.Unix.Mount",
        "fct-package": "Unixutils",
        "fct-signature": "[String] -\u003e IO (ExitCode, String, String)",
        "fct-source": "src/System-Unix-Mount.html#umount",
        "fct-type": "function",
        "title": "umount"
      },
      "index": {
        "description": "umount run umount with the specified args NOTE this function uses exec so you do not need to shell-escape NOTE we don use the umount system call because the system call is not smart enough to update etc mtab",
        "hierarchy": "System Unix Mount",
        "module": "System.Unix.Mount",
        "name": "umount",
        "normalized": "[String]-\u003eIO(ExitCode,String,String)",
        "package": "Unixutils",
        "partial": "",
        "signature": "[String]-\u003eIO(ExitCode,String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Mount.html#v:umountBelow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eumountBelow\u003c/a\u003e\u003c/code\u003e - unmounts all mount points below \u003cem\u003ebelowPath\u003c/em\u003e\n /proc/mounts must be present and readable.  Because of the way\n linux handles changeroots, we can't trust everything we see in\n /proc/mounts.  However, we make the following assumptions:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e there is a one-to-one correspondence between the entries in\n      /proc/mounts and the actual mounts, and\n  (2) every mount point we might encounter is a suffix of one of\n      the mount points listed in /proc/mounts (because being in a\n      a chroot doesn't affect /proc/mounts.)\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eSo we can search /proc/mounts for an entry has the mount point\n we are looking for as a substring, then add the extra text on\n the right to our path and try to unmount that.  Then we start\n again since nested mounts might have been revealed.\n\u003c/p\u003e\u003cp\u003eFor example, suppose we are chrooted into\n /home/david/environments/sid and we call \u003ca\u003eumountBelow /proc\u003c/a\u003e.  We\n might see the mount point /home/david/environments/sid/proc/bus/usb\n in /proc/mounts, which means we need to run \u003ca\u003eumount /proc/bus/usb\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003eumountSucceeded\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Unix.Mount",
        "fct-package": "Unixutils",
        "fct-signature": "Bool-\u003e FilePath-\u003e IO [(FilePath, (ExitCode, String, String))]",
        "fct-type": "function",
        "title": "umountBelow"
      },
      "index": {
        "description": "umountBelow unmounts all mount points below belowPath proc mounts must be present and readable Because of the way linux handles changeroots we can trust everything we see in proc mounts However we make the following assumptions there is one-to-one correspondence between the entries in proc mounts and the actual mounts and every mount point we might encounter is suffix of one of the mount points listed in proc mounts because being in chroot doesn affect proc mounts So we can search proc mounts for an entry has the mount point we are looking for as substring then add the extra text on the right to our path and try to unmount that Then we start again since nested mounts might have been revealed For example suppose we are chrooted into home david environments sid and we call umountBelow proc We might see the mount point home david environments sid proc bus usb in proc mounts which means we need to run umount proc bus usb See also umountSucceeded",
        "hierarchy": "System Unix Mount",
        "module": "System.Unix.Mount",
        "name": "umountBelow",
        "normalized": "Bool-\u003eFilePath-\u003eIO[(FilePath,(ExitCode,String,String))]",
        "package": "Unixutils",
        "partial": "Below",
        "signature": "Bool-\u003eFilePath-\u003eIO[(FilePath,(ExitCode,String,String))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstruct an ADT representing block and character devices\n (but mostly block devices) by interpreting the contents of\n the Linux sysfs filesystem.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-SpecialDevice.html",
        "fct-type": "module",
        "title": "SpecialDevice"
      },
      "index": {
        "description": "Construct an ADT representing block and character devices but mostly block devices by interpreting the contents of the Linux sysfs filesystem",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "SpecialDevice",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Special Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#t:SpecialDevice",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "data",
        "fct-source": "src/System-Unix-SpecialDevice.html#SpecialDevice",
        "fct-type": "data",
        "title": "SpecialDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "SpecialDevice",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Special Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:diskOfPart",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "SpecialDevice -\u003e IO (Maybe SpecialDevice)",
        "fct-source": "src/System-Unix-SpecialDevice.html#diskOfPart",
        "fct-type": "function",
        "title": "diskOfPart"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "diskOfPart",
        "normalized": "SpecialDevice-\u003eIO(Maybe SpecialDevice)",
        "package": "Unixutils",
        "partial": "Of Part",
        "signature": "SpecialDevice-\u003eIO(Maybe SpecialDevice)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:getAllCdroms",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "IO [SpecialDevice]",
        "fct-source": "src/System-Unix-SpecialDevice.html#getAllCdroms",
        "fct-type": "function",
        "title": "getAllCdroms"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "getAllCdroms",
        "normalized": "IO[SpecialDevice]",
        "package": "Unixutils",
        "partial": "All Cdroms",
        "signature": "IO[SpecialDevice]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:getAllDisks",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "IO [SpecialDevice]",
        "fct-source": "src/System-Unix-SpecialDevice.html#getAllDisks",
        "fct-type": "function",
        "title": "getAllDisks"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "getAllDisks",
        "normalized": "IO[SpecialDevice]",
        "package": "Unixutils",
        "partial": "All Disks",
        "signature": "IO[SpecialDevice]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:getAllPartitions",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "IO [SpecialDevice]",
        "fct-source": "src/System-Unix-SpecialDevice.html#getAllPartitions",
        "fct-type": "function",
        "title": "getAllPartitions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "getAllPartitions",
        "normalized": "IO[SpecialDevice]",
        "package": "Unixutils",
        "partial": "All Partitions",
        "signature": "IO[SpecialDevice]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:getAllRemovable",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "IO [SpecialDevice]",
        "fct-source": "src/System-Unix-SpecialDevice.html#getAllRemovable",
        "fct-type": "function",
        "title": "getAllRemovable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "getAllRemovable",
        "normalized": "IO[SpecialDevice]",
        "package": "Unixutils",
        "partial": "All Removable",
        "signature": "IO[SpecialDevice]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:node",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "SpecialDevice -\u003e IO (Maybe FilePath)",
        "fct-source": "src/System-Unix-SpecialDevice.html#node",
        "fct-type": "function",
        "title": "node"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "node",
        "normalized": "SpecialDevice-\u003eIO(Maybe FilePath)",
        "package": "Unixutils",
        "partial": "",
        "signature": "SpecialDevice-\u003eIO(Maybe FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:nodes",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "SpecialDevice -\u003e IO [FilePath]",
        "fct-source": "src/System-Unix-SpecialDevice.html#nodes",
        "fct-type": "function",
        "title": "nodes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "nodes",
        "normalized": "SpecialDevice-\u003eIO[FilePath]",
        "package": "Unixutils",
        "partial": "",
        "signature": "SpecialDevice-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofDevNo",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "(DeviceID -\u003e SpecialDevice) -\u003e Int -\u003e SpecialDevice",
        "fct-source": "src/System-Unix-SpecialDevice.html#ofDevNo",
        "fct-type": "function",
        "title": "ofDevNo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "ofDevNo",
        "normalized": "(DeviceID-\u003eSpecialDevice)-\u003eInt-\u003eSpecialDevice",
        "package": "Unixutils",
        "partial": "Dev No",
        "signature": "(DeviceID-\u003eSpecialDevice)-\u003eInt-\u003eSpecialDevice"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofMajorMinor",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "(DeviceID -\u003e SpecialDevice) -\u003e Int -\u003e Int -\u003e SpecialDevice",
        "fct-source": "src/System-Unix-SpecialDevice.html#ofMajorMinor",
        "fct-type": "function",
        "title": "ofMajorMinor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "ofMajorMinor",
        "normalized": "(DeviceID-\u003eSpecialDevice)-\u003eInt-\u003eInt-\u003eSpecialDevice",
        "package": "Unixutils",
        "partial": "Major Minor",
        "signature": "(DeviceID-\u003eSpecialDevice)-\u003eInt-\u003eInt-\u003eSpecialDevice"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofNode",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the device represented by a device node, such as /dev/sda2.\n Returns Nothing if there is an exception trying to stat the node, or\n if the node turns out not to be a special device.\n\u003c/p\u003e",
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO (Maybe SpecialDevice)",
        "fct-source": "src/System-Unix-SpecialDevice.html#ofNode",
        "fct-type": "function",
        "title": "ofNode"
      },
      "index": {
        "description": "Return the device represented by device node such as dev sda2 Returns Nothing if there is an exception trying to stat the node or if the node turns out not to be special device",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "ofNode",
        "normalized": "FilePath-\u003eIO(Maybe SpecialDevice)",
        "package": "Unixutils",
        "partial": "Node",
        "signature": "FilePath-\u003eIO(Maybe SpecialDevice)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofNodeStatus",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "FileStatus -\u003e Maybe SpecialDevice",
        "fct-source": "src/System-Unix-SpecialDevice.html#ofNodeStatus",
        "fct-type": "function",
        "title": "ofNodeStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "ofNodeStatus",
        "normalized": "FileStatus-\u003eMaybe SpecialDevice",
        "package": "Unixutils",
        "partial": "Node Status",
        "signature": "FileStatus-\u003eMaybe SpecialDevice"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofPath",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath -\u003e IO (Maybe SpecialDevice)",
        "fct-source": "src/System-Unix-SpecialDevice.html#ofPath",
        "fct-type": "function",
        "title": "ofPath"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "ofPath",
        "normalized": "FilePath-\u003eIO(Maybe SpecialDevice)",
        "package": "Unixutils",
        "partial": "Path",
        "signature": "FilePath-\u003eIO(Maybe SpecialDevice)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofSysName",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "String -\u003e IO (Maybe SpecialDevice)",
        "fct-source": "src/System-Unix-SpecialDevice.html#ofSysName",
        "fct-type": "function",
        "title": "ofSysName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "ofSysName",
        "normalized": "String-\u003eIO(Maybe SpecialDevice)",
        "package": "Unixutils",
        "partial": "Sys Name",
        "signature": "String-\u003eIO(Maybe SpecialDevice)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofSysPath",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "(DeviceID -\u003e SpecialDevice) -\u003e FilePath -\u003e IO (Maybe SpecialDevice)",
        "fct-source": "src/System-Unix-SpecialDevice.html#ofSysPath",
        "fct-type": "function",
        "title": "ofSysPath"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "ofSysPath",
        "normalized": "(DeviceID-\u003eSpecialDevice)-\u003eFilePath-\u003eIO(Maybe SpecialDevice)",
        "package": "Unixutils",
        "partial": "Sys Path",
        "signature": "(DeviceID-\u003eSpecialDevice)-\u003eFilePath-\u003eIO(Maybe SpecialDevice)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:rootPart",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "IO (Maybe SpecialDevice)",
        "fct-source": "src/System-Unix-SpecialDevice.html#rootPart",
        "fct-type": "function",
        "title": "rootPart"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "rootPart",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:splitPart",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "String -\u003e (String, Int)",
        "fct-source": "src/System-Unix-SpecialDevice.html#splitPart",
        "fct-type": "function",
        "title": "splitPart"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "splitPart",
        "normalized": "String-\u003e(String,Int)",
        "package": "Unixutils",
        "partial": "Part",
        "signature": "String-\u003e(String,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:sysDir",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "SpecialDevice -\u003e IO (Maybe FilePath)",
        "fct-source": "src/System-Unix-SpecialDevice.html#sysDir",
        "fct-type": "function",
        "title": "sysDir"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "sysDir",
        "normalized": "SpecialDevice-\u003eIO(Maybe FilePath)",
        "package": "Unixutils",
        "partial": "Dir",
        "signature": "SpecialDevice-\u003eIO(Maybe FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:sysMountPoint",
      "description": {
        "fct-descr": "\u003cp\u003eFIXME: We should really get this value from the mount table.\n\u003c/p\u003e",
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "FilePath",
        "fct-source": "src/System-Unix-SpecialDevice.html#sysMountPoint",
        "fct-type": "function",
        "title": "sysMountPoint"
      },
      "index": {
        "description": "FIXME We should really get this value from the mount table",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "sysMountPoint",
        "normalized": "",
        "package": "Unixutils",
        "partial": "Mount Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:sysName",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "SpecialDevice -\u003e IO (Maybe String)",
        "fct-source": "src/System-Unix-SpecialDevice.html#sysName",
        "fct-type": "function",
        "title": "sysName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "sysName",
        "normalized": "SpecialDevice-\u003eIO(Maybe String)",
        "package": "Unixutils",
        "partial": "Name",
        "signature": "SpecialDevice-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:toDevno",
      "description": {
        "fct-module": "System.Unix.SpecialDevice",
        "fct-package": "Unixutils",
        "fct-signature": "SpecialDevice -\u003e DeviceID",
        "fct-source": "src/System-Unix-SpecialDevice.html#toDevno",
        "fct-type": "function",
        "title": "toDevno"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix SpecialDevice",
        "module": "System.Unix.SpecialDevice",
        "name": "toDevno",
        "normalized": "SpecialDevice-\u003eDeviceID",
        "package": "Unixutils",
        "partial": "Devno",
        "signature": "SpecialDevice-\u003eDeviceID"
      }
    }
  }
]