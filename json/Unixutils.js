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
        "word": "Unixutils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module, except for useEnv, is copied from the build-env package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Unix.Chroot",
          "name": "Chroot",
          "package": "Unixutils",
          "source": "src/System-Unix-Chroot.html",
          "type": "module"
        },
        "index": {
          "description": "This module except for useEnv is copied from the build-env package",
          "hierarchy": "System Unix Chroot",
          "module": "System.Unix.Chroot",
          "name": "Chroot",
          "package": "Unixutils",
          "partial": "Chroot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Chroot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efchroot runs an IO action inside a chroot\n fchroot performs a chroot, runs the action, and then restores the\n original root and working directory. This probably affects the\n chroot and working directory of all the threads in the process,\n so...\n NOTE: will throw IOError if internal chroot fails\n\u003c/p\u003e",
          "module": "System.Unix.Chroot",
          "name": "fchroot",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Unix-Chroot.html#fchroot",
          "type": "function"
        },
        "index": {
          "description": "fchroot runs an IO action inside chroot fchroot performs chroot runs the action and then restores the original root and working directory This probably affects the chroot and working directory of all the threads in the process so NOTE will throw IOError if internal chroot fails",
          "hierarchy": "System Unix Chroot",
          "module": "System.Unix.Chroot",
          "name": "fchroot",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "Unixutils",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Chroot.html#v:fchroot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ssh inside of the chroot needs to be able to talk to the\n running ssh-agent.  Therefore we mount --bind the ssh agent socket\n dir inside the chroot (and umount it when we exit the chroot.\n\u003c/p\u003e",
          "module": "System.Unix.Chroot",
          "name": "useEnv",
          "package": "Unixutils",
          "signature": "FilePath -\u003e (a -\u003e IO a) -\u003e IO a -\u003e IO a",
          "source": "src/System-Unix-Chroot.html#useEnv",
          "type": "function"
        },
        "index": {
          "description": "The ssh inside of the chroot needs to be able to talk to the running ssh-agent Therefore we mount bind the ssh agent socket dir inside the chroot and umount it when we exit the chroot",
          "hierarchy": "System Unix Chroot",
          "module": "System.Unix.Chroot",
          "name": "useEnv",
          "normalized": "FilePath-\u003e(a-\u003eIO a)-\u003eIO a-\u003eIO a",
          "package": "Unixutils",
          "partial": "Env",
          "signature": "FilePath-\u003e(a-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Chroot.html#v:useEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esupport for crypt() and \u003cem\u003eetc\u003c/em\u003eshadow\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Unix.Crypt",
          "name": "Crypt",
          "package": "Unixutils",
          "source": "src/System-Unix-Crypt.html",
          "type": "module"
        },
        "index": {
          "description": "support for crypt and etc shadow",
          "hierarchy": "System Unix Crypt",
          "module": "System.Unix.Crypt",
          "name": "Crypt",
          "package": "Unixutils",
          "partial": "Crypt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Crypt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalls crypt(3) \n\u003c/p\u003e",
          "module": "System.Unix.Crypt",
          "name": "crypt",
          "package": "Unixutils",
          "signature": "String-\u003e String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "calls crypt",
          "hierarchy": "System Unix Crypt",
          "module": "System.Unix.Crypt",
          "name": "crypt",
          "normalized": "String-\u003eString-\u003eIO String",
          "package": "Unixutils",
          "signature": "String-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Crypt.html#v:crypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.Directory",
          "name": "Directory",
          "package": "Unixutils",
          "source": "src/System-Unix-Directory.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Unix Directory",
          "module": "System.Unix.Directory",
          "name": "Directory",
          "package": "Unixutils",
          "partial": "Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a directory and return a list of all the (path,\n fileStatus) pairs.\n\u003c/p\u003e",
          "module": "System.Unix.Directory",
          "name": "find",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO [(FilePath, FileStatus)]",
          "source": "src/System-Unix-Directory.html#find",
          "type": "function"
        },
        "index": {
          "description": "Traverse directory and return list of all the path fileStatus pairs",
          "hierarchy": "System Unix Directory",
          "module": "System.Unix.Directory",
          "name": "find",
          "normalized": "FilePath-\u003eIO[(FilePath,FileStatus)]",
          "package": "Unixutils",
          "signature": "FilePath-\u003eIO[(FilePath,FileStatus)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.Directory",
          "name": "mkdtemp",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO FilePath",
          "source": "src/System-Unix-Directory.html#mkdtemp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix Directory",
          "module": "System.Unix.Directory",
          "name": "mkdtemp",
          "normalized": "FilePath-\u003eIO FilePath",
          "package": "Unixutils",
          "signature": "FilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:mkdtemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively remove a directory contents on a single file system.\n The adjective \"Safely\" refers to these features:\n   1. It will not follow symlinks\n   2. If it finds a directory that seems to be a mount point,\n\tit will attempt to unmount it up to five times.  If it\n\tstill seems to be a mount point it gives up\n   3. It doesn't use \u003cem\u003eproc\u003c/em\u003emounts, which is ambiguous or wrong\n\twhen you are inside a chroot.\n\u003c/p\u003e",
          "module": "System.Unix.Directory",
          "name": "removeRecursiveSafely",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Unix-Directory.html#removeRecursiveSafely",
          "type": "function"
        },
        "index": {
          "description": "Recursively remove directory contents on single file system The adjective Safely refers to these features It will not follow symlinks If it finds directory that seems to be mount point it will attempt to unmount it up to five times If it still seems to be mount point it gives up It doesn use proc mounts which is ambiguous or wrong when you are inside chroot",
          "hierarchy": "System Unix Directory",
          "module": "System.Unix.Directory",
          "name": "removeRecursiveSafely",
          "normalized": "FilePath-\u003eIO()",
          "package": "Unixutils",
          "partial": "Recursive Safely",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:removeRecursiveSafely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename src to dst, and if dst already exists move it to dst~.\n If dst~ exists it is removed.\n\u003c/p\u003e",
          "module": "System.Unix.Directory",
          "name": "renameFileWithBackup",
          "package": "Unixutils",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-Unix-Directory.html#renameFileWithBackup",
          "type": "function"
        },
        "index": {
          "description": "Rename src to dst and if dst already exists move it to dst If dst exists it is removed",
          "hierarchy": "System Unix Directory",
          "module": "System.Unix.Directory",
          "name": "renameFileWithBackup",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "Unixutils",
          "partial": "File With Backup",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:renameFileWithBackup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike removeRecursiveSafely but doesn't remove any files, just\n unmounts anything it finds mounted.  Note that this can be much\n slower than Mount.umountBelow, use that instead.\n\u003c/p\u003e",
          "module": "System.Unix.Directory",
          "name": "unmountRecursiveSafely",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Unix-Directory.html#unmountRecursiveSafely",
          "type": "function"
        },
        "index": {
          "description": "Like removeRecursiveSafely but doesn remove any files just unmounts anything it finds mounted Note that this can be much slower than Mount.umountBelow use that instead",
          "hierarchy": "System Unix Directory",
          "module": "System.Unix.Directory",
          "name": "unmountRecursiveSafely",
          "normalized": "FilePath-\u003eIO()",
          "package": "Unixutils",
          "partial": "Recursive Safely",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:unmountRecursiveSafely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a temporary directory, run the action, remove the temporary directory\n the first argument is a template for the temporary directory name\n the directory will be created as a subdirectory of the directory returned by getTemporaryDirectory\n the temporary directory will be automatically removed afterwards.\n your working directory is not altered\n\u003c/p\u003e",
          "module": "System.Unix.Directory",
          "name": "withTemporaryDirectory",
          "package": "Unixutils",
          "signature": "FilePath -\u003e (FilePath -\u003e IO a) -\u003e IO a",
          "source": "src/System-Unix-Directory.html#withTemporaryDirectory",
          "type": "function"
        },
        "index": {
          "description": "create temporary directory run the action remove the temporary directory the first argument is template for the temporary directory name the directory will be created as subdirectory of the directory returned by getTemporaryDirectory the temporary directory will be automatically removed afterwards your working directory is not altered",
          "hierarchy": "System Unix Directory",
          "module": "System.Unix.Directory",
          "name": "withTemporaryDirectory",
          "normalized": "FilePath-\u003e(FilePath-\u003eIO a)-\u003eIO a",
          "package": "Unixutils",
          "partial": "Temporary Directory",
          "signature": "FilePath-\u003e(FilePath-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:withTemporaryDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etemporarily change the working directory to |dir| while running |action|\n\u003c/p\u003e",
          "module": "System.Unix.Directory",
          "name": "withWorkingDirectory",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Unix-Directory.html#withWorkingDirectory",
          "type": "function"
        },
        "index": {
          "description": "temporarily change the working directory to dir while running action",
          "hierarchy": "System Unix Directory",
          "module": "System.Unix.Directory",
          "name": "withWorkingDirectory",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "Unixutils",
          "partial": "Working Directory",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Directory.html#v:withWorkingDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe function splitFileName is taken from missingh, at the moment\n missingh will not build under sid.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Unix.FilePath",
          "name": "FilePath",
          "package": "Unixutils",
          "source": "src/System-Unix-FilePath.html",
          "type": "module"
        },
        "index": {
          "description": "The function splitFileName is taken from missingh at the moment missingh will not build under sid",
          "hierarchy": "System Unix FilePath",
          "module": "System.Unix.FilePath",
          "name": "FilePath",
          "package": "Unixutils",
          "partial": "File Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate two paths, making sure there is exactly one path separator.\n\u003c/p\u003e",
          "module": "System.Unix.FilePath",
          "name": "(\u003c++\u003e)",
          "package": "Unixutils",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-Unix-FilePath.html#%3C%2B%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Concatenate two paths making sure there is exactly one path separator",
          "hierarchy": "System Unix FilePath",
          "module": "System.Unix.FilePath",
          "name": "(\u003c++\u003e) \u003c++\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "Unixutils",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#v:-60--43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse takeFileName\n\u003c/p\u003e",
          "module": "System.Unix.FilePath",
          "name": "baseName",
          "package": "Unixutils",
          "signature": "FilePath -\u003e String",
          "source": "src/System-Unix-FilePath.html#baseName",
          "type": "function"
        },
        "index": {
          "description": "Use takeFileName",
          "hierarchy": "System Unix FilePath",
          "module": "System.Unix.FilePath",
          "name": "baseName",
          "normalized": "FilePath-\u003eString",
          "package": "Unixutils",
          "partial": "Name",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#v:baseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse dropFileName\n\u003c/p\u003e",
          "module": "System.Unix.FilePath",
          "name": "dirName",
          "package": "Unixutils",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-Unix-FilePath.html#dirName",
          "type": "function"
        },
        "index": {
          "description": "Use dropFileName",
          "hierarchy": "System Unix FilePath",
          "module": "System.Unix.FilePath",
          "name": "dirName",
          "normalized": "FilePath-\u003eFilePath",
          "package": "Unixutils",
          "partial": "Name",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#v:dirName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresolve all references to \u003cem\u003e.\u003c/em\u003e, \u003cem\u003e..\u003c/em\u003e, extra slashes, and symlinks\n\u003c/p\u003e",
          "module": "System.Unix.FilePath",
          "name": "realpath",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO FilePath",
          "source": "src/System-Unix-FilePath.html#realpath",
          "type": "function"
        },
        "index": {
          "description": "resolve all references to extra slashes and symlinks",
          "hierarchy": "System Unix FilePath",
          "module": "System.Unix.FilePath",
          "name": "realpath",
          "normalized": "FilePath-\u003eIO FilePath",
          "package": "Unixutils",
          "signature": "FilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-FilePath.html#v:realpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.Files",
          "name": "Files",
          "package": "Unixutils",
          "source": "src/System-Unix-Files.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Unix Files",
          "module": "System.Unix.Files",
          "name": "Files",
          "package": "Unixutils",
          "partial": "Files",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Files.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalls \u003ccode\u003e\u003ca\u003ecreateSymbolicLink\u003c/a\u003e\u003c/code\u003e but will remove the target and retry if\n \u003ccode\u003e\u003ca\u003ecreateSymbolicLink\u003c/a\u003e\u003c/code\u003e raises EEXIST.\n\u003c/p\u003e",
          "module": "System.Unix.Files",
          "name": "forceSymbolicLink",
          "package": "Unixutils",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-Unix-Files.html#forceSymbolicLink",
          "type": "function"
        },
        "index": {
          "description": "calls createSymbolicLink but will remove the target and retry if createSymbolicLink raises EEXIST",
          "hierarchy": "System Unix Files",
          "module": "System.Unix.Files",
          "name": "forceSymbolicLink",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "Unixutils",
          "partial": "Symbolic Link",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Files.html#v:forceSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA place to collect and hopefully retire all the random ways of\n running shell commands that have accumulated over the years.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Unix.KillByCwd",
          "name": "KillByCwd",
          "package": "Unixutils",
          "source": "src/System-Unix-KillByCwd.html",
          "type": "module"
        },
        "index": {
          "description": "place to collect and hopefully retire all the random ways of running shell commands that have accumulated over the years",
          "hierarchy": "System Unix KillByCwd",
          "module": "System.Unix.KillByCwd",
          "name": "KillByCwd",
          "package": "Unixutils",
          "partial": "Kill By Cwd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-KillByCwd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill the processes whose working directory is in or under the\n given directory.\n\u003c/p\u003e",
          "module": "System.Unix.KillByCwd",
          "name": "killByCwd",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO [(String, Maybe String)]",
          "source": "src/System-Unix-KillByCwd.html#killByCwd",
          "type": "function"
        },
        "index": {
          "description": "Kill the processes whose working directory is in or under the given directory",
          "hierarchy": "System Unix KillByCwd",
          "module": "System.Unix.KillByCwd",
          "name": "killByCwd",
          "normalized": "FilePath-\u003eIO[(String,Maybe String)]",
          "package": "Unixutils",
          "partial": "By Cwd",
          "signature": "FilePath-\u003eIO[(String,Maybe String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-KillByCwd.html#v:killByCwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrappers around some handy unix shell commands.  Please let\n me know if you think of better module names to hold these\n functions.  -dsf\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Unix.Misc",
          "name": "Misc",
          "package": "Unixutils",
          "source": "src/System-Unix-Misc.html",
          "type": "module"
        },
        "index": {
          "description": "Wrappers around some handy unix shell commands Please let me know if you think of better module names to hold these functions dsf",
          "hierarchy": "System Unix Misc",
          "module": "System.Unix.Misc",
          "name": "Misc",
          "package": "Unixutils",
          "partial": "Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Misc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ByteString.Lazy.Char8.readFile path \u003e\u003e= Data.ByteString.Lazy.Char8.writeFile (path ++ \".gz\")\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003eData.ByteString.Lazy.Char8.readFile path \u003e\u003e= Data.ByteString.Lazy.Char8.writeFile (path ++ \".gz\")\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Unix.Misc",
          "name": "gzip",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Unix-Misc.html#gzip",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.ByteString.Lazy.Char8.readFile path Data.ByteString.Lazy.Char8.writeFile path gz Deprecated Use Data.ByteString.Lazy.Char8.readFile path Data.ByteString.Lazy.Char8.writeFile path gz",
          "hierarchy": "System Unix Misc",
          "module": "System.Unix.Misc",
          "name": "gzip",
          "normalized": "FilePath-\u003eIO()",
          "package": "Unixutils",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Misc.html#v:gzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ByteString.Lazy.Char8.readFile path \u003e\u003e= return . show . Data.Digest.Pure.MD5.md5\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003eData.ByteString.Lazy.Char8.readFile path \u003e\u003e= return . show . Data.Digest.Pure.MD5.md5\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Unix.Misc",
          "name": "md5sum",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO String",
          "source": "src/System-Unix-Misc.html#md5sum",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.ByteString.Lazy.Char8.readFile path return show Data.Digest.Pure.MD5.md5 Deprecated Use Data.ByteString.Lazy.Char8.readFile path return show Data.Digest.Pure.MD5.md5",
          "hierarchy": "System Unix Misc",
          "module": "System.Unix.Misc",
          "name": "md5sum",
          "normalized": "FilePath-\u003eIO String",
          "package": "Unixutils",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Misc.html#v:md5sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003efunctions for mounting, umounting, parsing /proc/mounts, etc\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Unix.Mount",
          "name": "Mount",
          "package": "Unixutils",
          "source": "src/System-Unix-Mount.html",
          "type": "module"
        },
        "index": {
          "description": "functions for mounting umounting parsing proc mounts etc",
          "hierarchy": "System Unix Mount",
          "module": "System.Unix.Mount",
          "name": "Mount",
          "package": "Unixutils",
          "partial": "Mount",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Mount.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.Mount",
          "name": "isMountPoint",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO Bool",
          "source": "src/System-Unix-Mount.html#isMountPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix Mount",
          "module": "System.Unix.Mount",
          "name": "isMountPoint",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "Unixutils",
          "partial": "Mount Point",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Mount.html#v:isMountPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eumount\u003c/a\u003e\u003c/code\u003e - run umount with the specified args\n NOTE: this function uses exec, so you do \u003cem\u003enot\u003c/em\u003e need to shell-escape\n NOTE: we don't use the umount system call because the system call\n is not smart enough to update /etc/mtab\n\u003c/p\u003e",
          "module": "System.Unix.Mount",
          "name": "umount",
          "package": "Unixutils",
          "signature": "[String] -\u003e IO (ExitCode, String, String)",
          "source": "src/System-Unix-Mount.html#umount",
          "type": "function"
        },
        "index": {
          "description": "umount run umount with the specified args NOTE this function uses exec so you do not need to shell-escape NOTE we don use the umount system call because the system call is not smart enough to update etc mtab",
          "hierarchy": "System Unix Mount",
          "module": "System.Unix.Mount",
          "name": "umount",
          "normalized": "[String]-\u003eIO(ExitCode,String,String)",
          "package": "Unixutils",
          "signature": "[String]-\u003eIO(ExitCode,String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Mount.html#v:umount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eumountBelow\u003c/a\u003e\u003c/code\u003e - unmounts all mount points below \u003cem\u003ebelowPath\u003c/em\u003e\n /proc/mounts must be present and readable.  Because of the way\n linux handles changeroots, we can't trust everything we see in\n /proc/mounts.  However, we make the following assumptions:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e there is a one-to-one correspondence between the entries in\n      /proc/mounts and the actual mounts, and\n  (2) every mount point we might encounter is a suffix of one of\n      the mount points listed in /proc/mounts (because being in a\n      a chroot doesn't affect /proc/mounts.)\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eSo we can search /proc/mounts for an entry has the mount point\n we are looking for as a substring, then add the extra text on\n the right to our path and try to unmount that.  Then we start\n again since nested mounts might have been revealed.\n\u003c/p\u003e\u003cp\u003eFor example, suppose we are chrooted into\n /home/david/environments/sid and we call \u003ca\u003eumountBelow /proc\u003c/a\u003e.  We\n might see the mount point /home/david/environments/sid/proc/bus/usb\n in /proc/mounts, which means we need to run \u003ca\u003eumount /proc/bus/usb\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003eumountSucceeded\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Unix.Mount",
          "name": "umountBelow",
          "package": "Unixutils",
          "signature": "Bool-\u003e FilePath-\u003e IO [(FilePath, (ExitCode, String, String))]",
          "type": "function"
        },
        "index": {
          "description": "umountBelow unmounts all mount points below belowPath proc mounts must be present and readable Because of the way linux handles changeroots we can trust everything we see in proc mounts However we make the following assumptions there is one-to-one correspondence between the entries in proc mounts and the actual mounts and every mount point we might encounter is suffix of one of the mount points listed in proc mounts because being in chroot doesn affect proc mounts So we can search proc mounts for an entry has the mount point we are looking for as substring then add the extra text on the right to our path and try to unmount that Then we start again since nested mounts might have been revealed For example suppose we are chrooted into home david environments sid and we call umountBelow proc We might see the mount point home david environments sid proc bus usb in proc mounts which means we need to run umount proc bus usb See also umountSucceeded",
          "hierarchy": "System Unix Mount",
          "module": "System.Unix.Mount",
          "name": "umountBelow",
          "normalized": "Bool-\u003eFilePath-\u003eIO[(FilePath,(ExitCode,String,String))]",
          "package": "Unixutils",
          "partial": "Below",
          "signature": "Bool-\u003eFilePath-\u003eIO[(FilePath,(ExitCode,String,String))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-Mount.html#v:umountBelow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstruct an ADT representing block and character devices\n (but mostly block devices) by interpreting the contents of\n the Linux sysfs filesystem.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Unix.SpecialDevice",
          "name": "SpecialDevice",
          "package": "Unixutils",
          "source": "src/System-Unix-SpecialDevice.html",
          "type": "module"
        },
        "index": {
          "description": "Construct an ADT representing block and character devices but mostly block devices by interpreting the contents of the Linux sysfs filesystem",
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "SpecialDevice",
          "package": "Unixutils",
          "partial": "Special Device",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "SpecialDevice",
          "package": "Unixutils",
          "source": "src/System-Unix-SpecialDevice.html#SpecialDevice",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "SpecialDevice",
          "package": "Unixutils",
          "partial": "Special Device",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#t:SpecialDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "diskOfPart",
          "package": "Unixutils",
          "signature": "SpecialDevice -\u003e IO (Maybe SpecialDevice)",
          "source": "src/System-Unix-SpecialDevice.html#diskOfPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "diskOfPart",
          "normalized": "SpecialDevice-\u003eIO(Maybe SpecialDevice)",
          "package": "Unixutils",
          "partial": "Of Part",
          "signature": "SpecialDevice-\u003eIO(Maybe SpecialDevice)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:diskOfPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "getAllCdroms",
          "package": "Unixutils",
          "signature": "IO [SpecialDevice]",
          "source": "src/System-Unix-SpecialDevice.html#getAllCdroms",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "getAllCdroms",
          "normalized": "IO[SpecialDevice]",
          "package": "Unixutils",
          "partial": "All Cdroms",
          "signature": "IO[SpecialDevice]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:getAllCdroms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "getAllDisks",
          "package": "Unixutils",
          "signature": "IO [SpecialDevice]",
          "source": "src/System-Unix-SpecialDevice.html#getAllDisks",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "getAllDisks",
          "normalized": "IO[SpecialDevice]",
          "package": "Unixutils",
          "partial": "All Disks",
          "signature": "IO[SpecialDevice]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:getAllDisks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "getAllPartitions",
          "package": "Unixutils",
          "signature": "IO [SpecialDevice]",
          "source": "src/System-Unix-SpecialDevice.html#getAllPartitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "getAllPartitions",
          "normalized": "IO[SpecialDevice]",
          "package": "Unixutils",
          "partial": "All Partitions",
          "signature": "IO[SpecialDevice]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:getAllPartitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "getAllRemovable",
          "package": "Unixutils",
          "signature": "IO [SpecialDevice]",
          "source": "src/System-Unix-SpecialDevice.html#getAllRemovable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "getAllRemovable",
          "normalized": "IO[SpecialDevice]",
          "package": "Unixutils",
          "partial": "All Removable",
          "signature": "IO[SpecialDevice]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:getAllRemovable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "node",
          "package": "Unixutils",
          "signature": "SpecialDevice -\u003e IO (Maybe FilePath)",
          "source": "src/System-Unix-SpecialDevice.html#node",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "node",
          "normalized": "SpecialDevice-\u003eIO(Maybe FilePath)",
          "package": "Unixutils",
          "signature": "SpecialDevice-\u003eIO(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "nodes",
          "package": "Unixutils",
          "signature": "SpecialDevice -\u003e IO [FilePath]",
          "source": "src/System-Unix-SpecialDevice.html#nodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "nodes",
          "normalized": "SpecialDevice-\u003eIO[FilePath]",
          "package": "Unixutils",
          "signature": "SpecialDevice-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "ofDevNo",
          "package": "Unixutils",
          "signature": "(DeviceID -\u003e SpecialDevice) -\u003e Int -\u003e SpecialDevice",
          "source": "src/System-Unix-SpecialDevice.html#ofDevNo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "ofDevNo",
          "normalized": "(DeviceID-\u003eSpecialDevice)-\u003eInt-\u003eSpecialDevice",
          "package": "Unixutils",
          "partial": "Dev No",
          "signature": "(DeviceID-\u003eSpecialDevice)-\u003eInt-\u003eSpecialDevice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofDevNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "ofMajorMinor",
          "package": "Unixutils",
          "signature": "(DeviceID -\u003e SpecialDevice) -\u003e Int -\u003e Int -\u003e SpecialDevice",
          "source": "src/System-Unix-SpecialDevice.html#ofMajorMinor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "ofMajorMinor",
          "normalized": "(DeviceID-\u003eSpecialDevice)-\u003eInt-\u003eInt-\u003eSpecialDevice",
          "package": "Unixutils",
          "partial": "Major Minor",
          "signature": "(DeviceID-\u003eSpecialDevice)-\u003eInt-\u003eInt-\u003eSpecialDevice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofMajorMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the device represented by a device node, such as /dev/sda2.\n Returns Nothing if there is an exception trying to stat the node, or\n if the node turns out not to be a special device.\n\u003c/p\u003e",
          "module": "System.Unix.SpecialDevice",
          "name": "ofNode",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO (Maybe SpecialDevice)",
          "source": "src/System-Unix-SpecialDevice.html#ofNode",
          "type": "function"
        },
        "index": {
          "description": "Return the device represented by device node such as dev sda2 Returns Nothing if there is an exception trying to stat the node or if the node turns out not to be special device",
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "ofNode",
          "normalized": "FilePath-\u003eIO(Maybe SpecialDevice)",
          "package": "Unixutils",
          "partial": "Node",
          "signature": "FilePath-\u003eIO(Maybe SpecialDevice)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "ofNodeStatus",
          "package": "Unixutils",
          "signature": "FileStatus -\u003e Maybe SpecialDevice",
          "source": "src/System-Unix-SpecialDevice.html#ofNodeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "ofNodeStatus",
          "normalized": "FileStatus-\u003eMaybe SpecialDevice",
          "package": "Unixutils",
          "partial": "Node Status",
          "signature": "FileStatus-\u003eMaybe SpecialDevice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofNodeStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "ofPath",
          "package": "Unixutils",
          "signature": "FilePath -\u003e IO (Maybe SpecialDevice)",
          "source": "src/System-Unix-SpecialDevice.html#ofPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "ofPath",
          "normalized": "FilePath-\u003eIO(Maybe SpecialDevice)",
          "package": "Unixutils",
          "partial": "Path",
          "signature": "FilePath-\u003eIO(Maybe SpecialDevice)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "ofSysName",
          "package": "Unixutils",
          "signature": "String -\u003e IO (Maybe SpecialDevice)",
          "source": "src/System-Unix-SpecialDevice.html#ofSysName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "ofSysName",
          "normalized": "String-\u003eIO(Maybe SpecialDevice)",
          "package": "Unixutils",
          "partial": "Sys Name",
          "signature": "String-\u003eIO(Maybe SpecialDevice)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofSysName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "ofSysPath",
          "package": "Unixutils",
          "signature": "(DeviceID -\u003e SpecialDevice) -\u003e FilePath -\u003e IO (Maybe SpecialDevice)",
          "source": "src/System-Unix-SpecialDevice.html#ofSysPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "ofSysPath",
          "normalized": "(DeviceID-\u003eSpecialDevice)-\u003eFilePath-\u003eIO(Maybe SpecialDevice)",
          "package": "Unixutils",
          "partial": "Sys Path",
          "signature": "(DeviceID-\u003eSpecialDevice)-\u003eFilePath-\u003eIO(Maybe SpecialDevice)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:ofSysPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "rootPart",
          "package": "Unixutils",
          "signature": "IO (Maybe SpecialDevice)",
          "source": "src/System-Unix-SpecialDevice.html#rootPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "rootPart",
          "package": "Unixutils",
          "partial": "Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:rootPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "splitPart",
          "package": "Unixutils",
          "signature": "String -\u003e (String, Int)",
          "source": "src/System-Unix-SpecialDevice.html#splitPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "splitPart",
          "normalized": "String-\u003e(String,Int)",
          "package": "Unixutils",
          "partial": "Part",
          "signature": "String-\u003e(String,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:splitPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "sysDir",
          "package": "Unixutils",
          "signature": "SpecialDevice -\u003e IO (Maybe FilePath)",
          "source": "src/System-Unix-SpecialDevice.html#sysDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "sysDir",
          "normalized": "SpecialDevice-\u003eIO(Maybe FilePath)",
          "package": "Unixutils",
          "partial": "Dir",
          "signature": "SpecialDevice-\u003eIO(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:sysDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFIXME: We should really get this value from the mount table.\n\u003c/p\u003e",
          "module": "System.Unix.SpecialDevice",
          "name": "sysMountPoint",
          "package": "Unixutils",
          "signature": "FilePath",
          "source": "src/System-Unix-SpecialDevice.html#sysMountPoint",
          "type": "function"
        },
        "index": {
          "description": "FIXME We should really get this value from the mount table",
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "sysMountPoint",
          "package": "Unixutils",
          "partial": "Mount Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:sysMountPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "sysName",
          "package": "Unixutils",
          "signature": "SpecialDevice -\u003e IO (Maybe String)",
          "source": "src/System-Unix-SpecialDevice.html#sysName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "sysName",
          "normalized": "SpecialDevice-\u003eIO(Maybe String)",
          "package": "Unixutils",
          "partial": "Name",
          "signature": "SpecialDevice-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:sysName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.SpecialDevice",
          "name": "toDevno",
          "package": "Unixutils",
          "signature": "SpecialDevice -\u003e DeviceID",
          "source": "src/System-Unix-SpecialDevice.html#toDevno",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix SpecialDevice",
          "module": "System.Unix.SpecialDevice",
          "name": "toDevno",
          "normalized": "SpecialDevice-\u003eDeviceID",
          "package": "Unixutils",
          "partial": "Devno",
          "signature": "SpecialDevice-\u003eDeviceID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils/docs/System-Unix-SpecialDevice.html#v:toDevno"
      }
    }
  ]
]