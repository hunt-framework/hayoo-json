[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSystem-independent interface to directory manipulation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "module",
        "fct-source": "src/System-Directory.html",
        "fct-type": "module",
        "title": "Directory"
      },
      "index": {
        "description": "System-independent interface to directory manipulation",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "Directory",
        "normalized": "",
        "package": "directory",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#t:Permissions",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "data",
        "fct-source": "src/System-Directory.html#Permissions",
        "fct-type": "data",
        "title": "Permissions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "Permissions",
        "normalized": "",
        "package": "directory",
        "partial": "Permissions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:canonicalizePath",
      "description": {
        "fct-descr": "\u003cp\u003eGiven path referring to a file or directory, returns a\n canonicalized path, with the intent that two paths referring\n to the same file/directory will map to the same canonicalized\n path. Note that it is impossible to guarantee that the\n implication (same file/dir \u003c=\u003e same canonicalizedPath) holds\n in either direction: this function can make only a best-effort\n attempt.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO FilePath",
        "fct-source": "src/System-Directory.html#canonicalizePath",
        "fct-type": "function",
        "title": "canonicalizePath"
      },
      "index": {
        "description": "Given path referring to file or directory returns canonicalized path with the intent that two paths referring to the same file directory will map to the same canonicalized path Note that it is impossible to guarantee that the implication same file dir same canonicalizedPath holds in either direction this function can make only best-effort attempt",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "canonicalizePath",
        "normalized": "FilePath-\u003eIO FilePath",
        "package": "directory",
        "partial": "Path",
        "signature": "FilePath-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:copyFile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecopyFile\u003c/a\u003e\u003c/code\u003e old new\u003c/code\u003e copies the existing file from \u003cem\u003eold\u003c/em\u003e to \u003cem\u003enew\u003c/em\u003e.\nIf the \u003cem\u003enew\u003c/em\u003e file already exists, it is atomically replaced by the \u003cem\u003eold\u003c/em\u003e file.\nNeither path may refer to an existing directory.  The permissions of \u003cem\u003eold\u003c/em\u003e are\ncopied to \u003cem\u003enew\u003c/em\u003e, if possible.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-Directory.html#copyFile",
        "fct-type": "function",
        "title": "copyFile"
      },
      "index": {
        "description": "copyFile old new copies the existing file from old to new If the new file already exists it is atomically replaced by the old file Neither path may refer to an existing directory The permissions of old are copied to new if possible",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "copyFile",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "directory",
        "partial": "File",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:copyPermissions",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-Directory.html#copyPermissions",
        "fct-type": "function",
        "title": "copyPermissions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "copyPermissions",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "directory",
        "partial": "Permissions",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:createDirectory",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecreateDirectory\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e creates a new directory \u003ccode\u003edir\u003c/code\u003e which is\ninitially empty, or as near to empty as the operating system\nallows.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisAlreadyExistsError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eAlreadyExists\u003c/code\u003e\nThe operand refers to a directory that already exists.  \n\u003ccode\u003e [EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThere is no path to the directory. \n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources (virtual memory, process file descriptors,\nphysical disk space, etc.) are available to perform the operation.\n\u003ccode\u003e[EDQUOT, ENOSPC, ENOMEM, EMLINK]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe path refers to an existing non-directory object.\n\u003ccode\u003e[EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Directory.html#createDirectory",
        "fct-type": "function",
        "title": "createDirectory"
      },
      "index": {
        "description": "createDirectory dir creates new directory dir which is initially empty or as near to empty as the operating system allows The operation may fail with isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES isAlreadyExistsError AlreadyExists The operand refers to directory that already exists EEXIST HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP NoSuchThing There is no path to the directory ENOENT ENOTDIR ResourceExhausted Insufficient resources virtual memory process file descriptors physical disk space etc are available to perform the operation EDQUOT ENOSPC ENOMEM EMLINK InappropriateType The path refers to an existing non-directory object EEXIST",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "createDirectory",
        "normalized": "FilePath-\u003eIO()",
        "package": "directory",
        "partial": "Directory",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:createDirectoryIfMissing",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecreateDirectoryIfMissing\u003c/a\u003e\u003c/code\u003e parents dir\u003c/code\u003e creates a new directory \n \u003ccode\u003edir\u003c/code\u003e if it doesn't exist. If the first argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n the function will also create all parent directories if they are missing.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Bool-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "createDirectoryIfMissing"
      },
      "index": {
        "description": "createDirectoryIfMissing parents dir creates new directory dir if it doesn exist If the first argument is True the function will also create all parent directories if they are missing",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "createDirectoryIfMissing",
        "normalized": "Bool-\u003eFilePath-\u003eIO()",
        "package": "directory",
        "partial": "Directory If Missing",
        "signature": "Bool-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:doesDirectoryExist",
      "description": {
        "fct-descr": "\u003cp\u003eThe operation \u003ccode\u003e\u003ca\u003edoesDirectoryExist\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument file\nexists and is a directory, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-Directory.html#doesDirectoryExist",
        "fct-type": "function",
        "title": "doesDirectoryExist"
      },
      "index": {
        "description": "The operation doesDirectoryExist returns True if the argument file exists and is directory and False otherwise",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "doesDirectoryExist",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "directory",
        "partial": "Directory Exist",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:doesFileExist",
      "description": {
        "fct-descr": "\u003cp\u003eThe operation \u003ccode\u003e\u003ca\u003edoesFileExist\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\nif the argument file exists and is not a directory, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-Directory.html#doesFileExist",
        "fct-type": "function",
        "title": "doesFileExist"
      },
      "index": {
        "description": "The operation doesFileExist returns True if the argument file exists and is not directory and False otherwise",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "doesFileExist",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "directory",
        "partial": "File Exist",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:emptyPermissions",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Permissions",
        "fct-source": "src/System-Directory.html#emptyPermissions",
        "fct-type": "function",
        "title": "emptyPermissions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "emptyPermissions",
        "normalized": "",
        "package": "directory",
        "partial": "Permissions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:executable",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Permissions -\u003e Bool",
        "fct-source": "src/System-Directory.html#executable",
        "fct-type": "function",
        "title": "executable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "executable",
        "normalized": "Permissions-\u003eBool",
        "package": "directory",
        "partial": "",
        "signature": "Permissions-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:findExecutable",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an executable file name, searches for such file in the\n directories listed in system PATH. The returned value is the path\n to the found executable or Nothing if an executable with the given\n name was not found. For example (findExecutable \"ghc\") gives you\n the path to GHC.\n\u003c/p\u003e\u003cp\u003eThe path returned by \u003ccode\u003e\u003ca\u003efindExecutable\u003c/a\u003e\u003c/code\u003e corresponds to the\n program that would be executed by \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e\n when passed the same string (as a RawCommand, not a ShellCommand).\n\u003c/p\u003e\u003cp\u003eOn Windows, \u003ccode\u003e\u003ca\u003efindExecutable\u003c/a\u003e\u003c/code\u003e calls the Win32 function \u003ccode\u003eSearchPath\u003c/code\u003e,\n which may search other places before checking the directories in\n \u003ccode\u003ePATH\u003c/code\u003e.  Where it actually searches depends on registry settings,\n but notably includes the directory containing the current\n executable. See\n \u003ca\u003ehttp://msdn.microsoft.com/en-us/library/aa365527.aspx\u003c/a\u003e for more\n details.  \n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "String -\u003e IO (Maybe FilePath)",
        "fct-source": "src/System-Directory.html#findExecutable",
        "fct-type": "function",
        "title": "findExecutable"
      },
      "index": {
        "description": "Given an executable file name searches for such file in the directories listed in system PATH The returned value is the path to the found executable or Nothing if an executable with the given name was not found For example findExecutable ghc gives you the path to GHC The path returned by findExecutable corresponds to the program that would be executed by createProcess when passed the same string as RawCommand not ShellCommand On Windows findExecutable calls the Win32 function SearchPath which may search other places before checking the directories in PATH Where it actually searches depends on registry settings but notably includes the directory containing the current executable See http msdn.microsoft.com en-us library aa365527.aspx for more details",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "findExecutable",
        "normalized": "String-\u003eIO(Maybe FilePath)",
        "package": "directory",
        "partial": "Executable",
        "signature": "String-\u003eIO(Maybe FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:findFile",
      "description": {
        "fct-descr": "\u003cp\u003eSearch through the given set of directories for the given file.\n Used by \u003ccode\u003e\u003ca\u003efindExecutable\u003c/a\u003e\u003c/code\u003e on non-windows platforms.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "[FilePath] -\u003e String -\u003e IO (Maybe FilePath)",
        "fct-source": "src/System-Directory.html#findFile",
        "fct-type": "function",
        "title": "findFile"
      },
      "index": {
        "description": "Search through the given set of directories for the given file Used by findExecutable on non-windows platforms",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "findFile",
        "normalized": "[FilePath]-\u003eString-\u003eIO(Maybe FilePath)",
        "package": "directory",
        "partial": "File",
        "signature": "[FilePath]-\u003eString-\u003eIO(Maybe FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:getAppUserDataDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the pathname of a directory in which application-specific\ndata for the current user can be stored.  The result of\n\u003ccode\u003e\u003ca\u003egetAppUserDataDirectory\u003c/a\u003e\u003c/code\u003e for a given application is specific to\nthe current user.\n\u003c/p\u003e\u003cp\u003eThe argument should be the name of the application, which will be used\nto construct the pathname (so avoid using unusual characters that\nmight result in an invalid pathname).\n\u003c/p\u003e\u003cp\u003eNote: the directory may not actually exist, and may need to be created\nfirst.  It is expected that the parent directory exists and is\nwritable.\n\u003c/p\u003e\u003cp\u003eOn Unix, this function returns \u003ccode\u003e$HOME/.appName\u003c/code\u003e.  On Windows, a\ntypical path might be \n\u003c/p\u003e\u003cpre\u003e C:/Documents And Settings/user/Application Data/appName\n\u003c/pre\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of application-specific data directory.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e\nThe home directory for the current user does not exist, or\ncannot be found.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "String -\u003e IO FilePath",
        "fct-source": "src/System-Directory.html#getAppUserDataDirectory",
        "fct-type": "function",
        "title": "getAppUserDataDirectory"
      },
      "index": {
        "description": "Returns the pathname of directory in which application-specific data for the current user can be stored The result of getAppUserDataDirectory for given application is specific to the current user The argument should be the name of the application which will be used to construct the pathname so avoid using unusual characters that might result in an invalid pathname Note the directory may not actually exist and may need to be created first It is expected that the parent directory exists and is writable On Unix this function returns HOME appName On Windows typical path might be Documents And Settings user Application Data appName The operation may fail with UnsupportedOperation The operating system has no notion of application-specific data directory isDoesNotExistError The home directory for the current user does not exist or cannot be found",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "getAppUserDataDirectory",
        "normalized": "String-\u003eIO FilePath",
        "package": "directory",
        "partial": "App User Data Directory",
        "signature": "String-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:getCurrentDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eIf the operating system has a notion of current directories,\n\u003ccode\u003e\u003ca\u003egetCurrentDirectory\u003c/a\u003e\u003c/code\u003e returns an absolute path to the\ncurrent directory of the calling process.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThere is no path referring to the current directory.\n\u003ccode\u003e[EPERM, ENOENT, ESTALE...]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of current directory.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that in a concurrent program, the current directory is global\nstate shared between all threads of the process.  When using\nfilesystem operations from multiple threads, it is therefore highly\nrecommended to use absolute rather than relative \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "IO FilePath",
        "fct-source": "src/System-Directory.html#getCurrentDirectory",
        "fct-type": "function",
        "title": "getCurrentDirectory"
      },
      "index": {
        "description": "If the operating system has notion of current directories getCurrentDirectory returns an absolute path to the current directory of the calling process The operation may fail with HardwareFault physical error has occurred EIO isDoesNotExistError NoSuchThing There is no path referring to the current directory EPERM ENOENT ESTALE isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EACCES ResourceExhausted Insufficient resources are available to perform the operation UnsupportedOperation The operating system has no notion of current directory Note that in concurrent program the current directory is global state shared between all threads of the process When using filesystem operations from multiple threads it is therefore highly recommended to use absolute rather than relative FilePath",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "getCurrentDirectory",
        "normalized": "",
        "package": "directory",
        "partial": "Current Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:getDirectoryContents",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetDirectoryContents\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e returns a list of \u003cem\u003eall\u003c/em\u003e entries\nin \u003cem\u003edir\u003c/em\u003e. \n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe directory does not exist.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.\n\u003ccode\u003e[EMFILE, ENFILE]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe path refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO [FilePath]",
        "fct-source": "src/System-Directory.html#getDirectoryContents",
        "fct-type": "function",
        "title": "getDirectoryContents"
      },
      "index": {
        "description": "getDirectoryContents dir returns list of all entries in dir The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The directory does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EACCES ResourceExhausted Insufficient resources are available to perform the operation EMFILE ENFILE InappropriateType The path refers to an existing non-directory object ENOTDIR",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "getDirectoryContents",
        "normalized": "FilePath-\u003eIO[FilePath]",
        "package": "directory",
        "partial": "Directory Contents",
        "signature": "FilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:getHomeDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current user's home directory.\n\u003c/p\u003e\u003cp\u003eThe directory returned is expected to be writable by the current user,\nbut note that it isn't generally considered good practice to store\napplication-specific data here; use \u003ccode\u003e\u003ca\u003egetAppUserDataDirectory\u003c/a\u003e\u003c/code\u003e\ninstead.\n\u003c/p\u003e\u003cp\u003eOn Unix, \u003ccode\u003e\u003ca\u003egetHomeDirectory\u003c/a\u003e\u003c/code\u003e returns the value of the \u003ccode\u003eHOME\u003c/code\u003e\nenvironment variable.  On Windows, the system is queried for a\nsuitable path; a typical path might be \n\u003ccode\u003eC:\u003cem\u003eDocuments And Settings\u003c/em\u003euser\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of home directory.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e\nThe home directory for the current user does not exist, or\ncannot be found.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "IO FilePath",
        "fct-source": "src/System-Directory.html#getHomeDirectory",
        "fct-type": "function",
        "title": "getHomeDirectory"
      },
      "index": {
        "description": "Returns the current user home directory The directory returned is expected to be writable by the current user but note that it isn generally considered good practice to store application-specific data here use getAppUserDataDirectory instead On Unix getHomeDirectory returns the value of the HOME environment variable On Windows the system is queried for suitable path typical path might be Documents And Settings user The operation may fail with UnsupportedOperation The operating system has no notion of home directory isDoesNotExistError The home directory for the current user does not exist or cannot be found",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "getHomeDirectory",
        "normalized": "",
        "package": "directory",
        "partial": "Home Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:getModificationTime",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetModificationTime\u003c/a\u003e\u003c/code\u003e operation returns the\nclock time at which the file or directory was last modified.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if the user is not permitted to access\n  the modification time; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the file or directory does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO UTCTime",
        "fct-source": "src/System-Directory.html#getModificationTime",
        "fct-type": "function",
        "title": "getModificationTime"
      },
      "index": {
        "description": "The getModificationTime operation returns the clock time at which the file or directory was last modified The operation may fail with isPermissionError if the user is not permitted to access the modification time or isDoesNotExistError if the file or directory does not exist",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "getModificationTime",
        "normalized": "FilePath-\u003eIO UTCTime",
        "package": "directory",
        "partial": "Modification Time",
        "signature": "FilePath-\u003eIO UTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:getPermissions",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetPermissions\u003c/a\u003e\u003c/code\u003e operation returns the\npermissions for the file or directory.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if the user is not permitted to access\n  the permissions; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the file or directory does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO Permissions",
        "fct-source": "src/System-Directory.html#getPermissions",
        "fct-type": "function",
        "title": "getPermissions"
      },
      "index": {
        "description": "The getPermissions operation returns the permissions for the file or directory The operation may fail with isPermissionError if the user is not permitted to access the permissions or isDoesNotExistError if the file or directory does not exist",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "getPermissions",
        "normalized": "FilePath-\u003eIO Permissions",
        "package": "directory",
        "partial": "Permissions",
        "signature": "FilePath-\u003eIO Permissions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:getTemporaryDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current directory for temporary files.\n\u003c/p\u003e\u003cp\u003eOn Unix, \u003ccode\u003e\u003ca\u003egetTemporaryDirectory\u003c/a\u003e\u003c/code\u003e returns the value of the \u003ccode\u003eTMPDIR\u003c/code\u003e\nenvironment variable or \"/tmp\" if the variable isn't defined.\nOn Windows, the function checks for the existence of environment variables in \nthe following order and uses the first path found:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \nTMP environment variable. \n\u003c/li\u003e\u003cli\u003e\nTEMP environment variable. \n\u003c/li\u003e\u003cli\u003e\nUSERPROFILE environment variable. \n\u003c/li\u003e\u003cli\u003e\nThe Windows directory\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of temporary directory.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe function doesn't verify whether the path exists.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "IO FilePath",
        "fct-source": "src/System-Directory.html#getTemporaryDirectory",
        "fct-type": "function",
        "title": "getTemporaryDirectory"
      },
      "index": {
        "description": "Returns the current directory for temporary files On Unix getTemporaryDirectory returns the value of the TMPDIR environment variable or tmp if the variable isn defined On Windows the function checks for the existence of environment variables in the following order and uses the first path found TMP environment variable TEMP environment variable USERPROFILE environment variable The Windows directory The operation may fail with UnsupportedOperation The operating system has no notion of temporary directory The function doesn verify whether the path exists",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "getTemporaryDirectory",
        "normalized": "",
        "package": "directory",
        "partial": "Temporary Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:getUserDocumentsDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current user's document directory.\n\u003c/p\u003e\u003cp\u003eThe directory returned is expected to be writable by the current user,\nbut note that it isn't generally considered good practice to store\napplication-specific data here; use \u003ccode\u003e\u003ca\u003egetAppUserDataDirectory\u003c/a\u003e\u003c/code\u003e\ninstead.\n\u003c/p\u003e\u003cp\u003eOn Unix, \u003ccode\u003e\u003ca\u003egetUserDocumentsDirectory\u003c/a\u003e\u003c/code\u003e returns the value of the \u003ccode\u003eHOME\u003c/code\u003e\nenvironment variable.  On Windows, the system is queried for a\nsuitable path; a typical path might be \n\u003ccode\u003eC:/Documents and Settings/user/My Documents\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of document directory.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e\nThe document directory for the current user does not exist, or\ncannot be found.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "IO FilePath",
        "fct-source": "src/System-Directory.html#getUserDocumentsDirectory",
        "fct-type": "function",
        "title": "getUserDocumentsDirectory"
      },
      "index": {
        "description": "Returns the current user document directory The directory returned is expected to be writable by the current user but note that it isn generally considered good practice to store application-specific data here use getAppUserDataDirectory instead On Unix getUserDocumentsDirectory returns the value of the HOME environment variable On Windows the system is queried for suitable path typical path might be Documents and Settings user My Documents The operation may fail with UnsupportedOperation The operating system has no notion of document directory isDoesNotExistError The document directory for the current user does not exist or cannot be found",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "getUserDocumentsDirectory",
        "normalized": "",
        "package": "directory",
        "partial": "User Documents Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:makeRelativeToCurrentDirectory",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emakeRelative\u003c/a\u003e\u003c/code\u003e the current directory.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO FilePath",
        "fct-source": "src/System-Directory.html#makeRelativeToCurrentDirectory",
        "fct-type": "function",
        "title": "makeRelativeToCurrentDirectory"
      },
      "index": {
        "description": "makeRelative the current directory",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "makeRelativeToCurrentDirectory",
        "normalized": "FilePath-\u003eIO FilePath",
        "package": "directory",
        "partial": "Relative To Current Directory",
        "signature": "FilePath-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:readable",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Permissions -\u003e Bool",
        "fct-source": "src/System-Directory.html#readable",
        "fct-type": "function",
        "title": "readable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "readable",
        "normalized": "Permissions-\u003eBool",
        "package": "directory",
        "partial": "",
        "signature": "Permissions-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:removeDirectory",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e removes an existing directory \u003cem\u003edir\u003c/em\u003e.  The\nimplementation may specify additional constraints which must be\nsatisfied before a directory can be removed (e.g. the directory has to\nbe empty, or may not be in use by other processes).  It is not legal\nfor an implementation to partially remove a directory unless the\nentire directory is removed. A conformant implementation need not\nsupport directory removal in all situations (e.g. removal of the root\ndirectory).\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\nEIO\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n[ENAMETOOLONG, ELOOP]\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe directory does not exist. \n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.  \n\u003ccode\u003e[EBUSY, ENOTEMPTY, EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe implementation does not support removal in this situation.\n\u003ccode\u003e[EINVAL]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe operand refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Directory.html#removeDirectory",
        "fct-type": "function",
        "title": "removeDirectory"
      },
      "index": {
        "description": "removeDirectory dir removes an existing directory dir The implementation may specify additional constraints which must be satisfied before directory can be removed e.g the directory has to be empty or may not be in use by other processes It is not legal for an implementation to partially remove directory unless the entire directory is removed conformant implementation need not support directory removal in all situations e.g removal of the root directory The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The directory does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY ENOTEMPTY EEXIST UnsupportedOperation The implementation does not support removal in this situation EINVAL InappropriateType The operand refers to an existing non-directory object ENOTDIR",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "removeDirectory",
        "normalized": "FilePath-\u003eIO()",
        "package": "directory",
        "partial": "Directory",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:removeDirectoryRecursive",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eremoveDirectoryRecursive\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e  removes an existing directory \u003cem\u003edir\u003c/em\u003e\n together with its content and all subdirectories. Be careful, \n if the directory contains symlinks, the function will follow them.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Directory.html#removeDirectoryRecursive",
        "fct-type": "function",
        "title": "removeDirectoryRecursive"
      },
      "index": {
        "description": "removeDirectoryRecursive dir removes an existing directory dir together with its content and all subdirectories Be careful if the directory contains symlinks the function will follow them",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "removeDirectoryRecursive",
        "normalized": "FilePath-\u003eIO()",
        "package": "directory",
        "partial": "Directory Recursive",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:removeFile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eremoveFile\u003c/a\u003e\u003c/code\u003e \u003cem\u003efile\u003c/em\u003e removes the directory entry for an existing file\n\u003cem\u003efile\u003c/em\u003e, where \u003cem\u003efile\u003c/em\u003e is not itself a directory. The\nimplementation may specify additional constraints which must be\nsatisfied before a file can be removed (e.g. the file may not be in\nuse by other processes).\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid file name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe file does not exist. \n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.  \n\u003ccode\u003e[EBUSY]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe operand refers to an existing directory.\n\u003ccode\u003e[EPERM, EINVAL]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Directory.html#removeFile",
        "fct-type": "function",
        "title": "removeFile"
      },
      "index": {
        "description": "removeFile file removes the directory entry for an existing file file where file is not itself directory The implementation may specify additional constraints which must be satisfied before file can be removed e.g the file may not be in use by other processes The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid file name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The file does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY InappropriateType The operand refers to an existing directory EPERM EINVAL",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "removeFile",
        "normalized": "FilePath-\u003eIO()",
        "package": "directory",
        "partial": "File",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:renameDirectory",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erenameDirectory\u003c/a\u003e\u003c/code\u003e old new\u003c/code\u003e changes the name of an existing\ndirectory from \u003cem\u003eold\u003c/em\u003e to \u003cem\u003enew\u003c/em\u003e.  If the \u003cem\u003enew\u003c/em\u003e directory\nalready exists, it is atomically replaced by the \u003cem\u003eold\u003c/em\u003e directory.\nIf the \u003cem\u003enew\u003c/em\u003e directory is neither the \u003cem\u003eold\u003c/em\u003e directory nor an\nalias of the \u003cem\u003eold\u003c/em\u003e directory, it is removed as if by\n\u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e.  A conformant implementation need not support\nrenaming directories in all situations (e.g. renaming to an existing\ndirectory, or across different physical devices), but the constraints\nmust be documented.\n\u003c/p\u003e\u003cp\u003eOn Win32 platforms, \u003ccode\u003erenameDirectory\u003c/code\u003e fails if the \u003cem\u003enew\u003c/em\u003e directory already\nexists.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nEither operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe original directory does not exist, or there is no path to the target.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.  \n\u003ccode\u003e[EDQUOT, ENOSPC, ENOMEM, EMLINK]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.\n\u003ccode\u003e[EBUSY, ENOTEMPTY, EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe implementation does not support renaming in this situation.\n\u003ccode\u003e[EINVAL, EXDEV]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nEither path refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR, EISDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-Directory.html#renameDirectory",
        "fct-type": "function",
        "title": "renameDirectory"
      },
      "index": {
        "description": "renameDirectory old new changes the name of an existing directory from old to new If the new directory already exists it is atomically replaced by the old directory If the new directory is neither the old directory nor an alias of the old directory it is removed as if by removeDirectory conformant implementation need not support renaming directories in all situations e.g renaming to an existing directory or across different physical devices but the constraints must be documented On Win32 platforms renameDirectory fails if the new directory already exists The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument Either operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The original directory does not exist or there is no path to the target ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM ResourceExhausted Insufficient resources are available to perform the operation EDQUOT ENOSPC ENOMEM EMLINK UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY ENOTEMPTY EEXIST UnsupportedOperation The implementation does not support renaming in this situation EINVAL EXDEV InappropriateType Either path refers to an existing non-directory object ENOTDIR EISDIR",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "renameDirectory",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "directory",
        "partial": "Directory",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:renameFile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erenameFile\u003c/a\u003e\u003c/code\u003e old new\u003c/code\u003e changes the name of an existing file system\nobject from \u003cem\u003eold\u003c/em\u003e to \u003cem\u003enew\u003c/em\u003e.  If the \u003cem\u003enew\u003c/em\u003e object already\nexists, it is atomically replaced by the \u003cem\u003eold\u003c/em\u003e object.  Neither\npath may refer to an existing directory.  A conformant implementation\nneed not support renaming files in all situations (e.g. renaming\nacross different physical devices), but the constraints must be\ndocumented.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nEither operand is not a valid file name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe original file does not exist, or there is no path to the target.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.  \n\u003ccode\u003e[EDQUOT, ENOSPC, ENOMEM, EMLINK]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.\n\u003ccode\u003e[EBUSY]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe implementation does not support renaming in this situation.\n\u003ccode\u003e[EXDEV]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nEither path refers to an existing directory.\n\u003ccode\u003e[ENOTDIR, EISDIR, EINVAL, EEXIST, ENOTEMPTY]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-Directory.html#renameFile",
        "fct-type": "function",
        "title": "renameFile"
      },
      "index": {
        "description": "renameFile old new changes the name of an existing file system object from old to new If the new object already exists it is atomically replaced by the old object Neither path may refer to an existing directory conformant implementation need not support renaming files in all situations e.g renaming across different physical devices but the constraints must be documented The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument Either operand is not valid file name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The original file does not exist or there is no path to the target ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM ResourceExhausted Insufficient resources are available to perform the operation EDQUOT ENOSPC ENOMEM EMLINK UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY UnsupportedOperation The implementation does not support renaming in this situation EXDEV InappropriateType Either path refers to an existing directory ENOTDIR EISDIR EINVAL EEXIST ENOTEMPTY",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "renameFile",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "directory",
        "partial": "File",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:searchable",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Permissions -\u003e Bool",
        "fct-source": "src/System-Directory.html#searchable",
        "fct-type": "function",
        "title": "searchable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "searchable",
        "normalized": "Permissions-\u003eBool",
        "package": "directory",
        "partial": "",
        "signature": "Permissions-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:setCurrentDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eIf the operating system has a notion of current directories,\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetCurrentDirectory\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e changes the current\ndirectory of the calling process to \u003cem\u003edir\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe directory does not exist.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of current directory, or the\ncurrent directory cannot be dynamically changed.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe path refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that in a concurrent program, the current directory is global\nstate shared between all threads of the process.  When using\nfilesystem operations from multiple threads, it is therefore highly\nrecommended to use absolute rather than relative \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Directory.html#setCurrentDirectory",
        "fct-type": "function",
        "title": "setCurrentDirectory"
      },
      "index": {
        "description": "If the operating system has notion of current directories setCurrentDirectory dir changes the current directory of the calling process to dir The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The directory does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EACCES UnsupportedOperation The operating system has no notion of current directory or the current directory cannot be dynamically changed InappropriateType The path refers to an existing non-directory object ENOTDIR Note that in concurrent program the current directory is global state shared between all threads of the process When using filesystem operations from multiple threads it is therefore highly recommended to use absolute rather than relative FilePath",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "setCurrentDirectory",
        "normalized": "FilePath-\u003eIO()",
        "package": "directory",
        "partial": "Current Directory",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:setOwnerExecutable",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Bool -\u003e Permissions -\u003e Permissions",
        "fct-source": "src/System-Directory.html#setOwnerExecutable",
        "fct-type": "function",
        "title": "setOwnerExecutable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "setOwnerExecutable",
        "normalized": "Bool-\u003ePermissions-\u003ePermissions",
        "package": "directory",
        "partial": "Owner Executable",
        "signature": "Bool-\u003ePermissions-\u003ePermissions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:setOwnerReadable",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Bool -\u003e Permissions -\u003e Permissions",
        "fct-source": "src/System-Directory.html#setOwnerReadable",
        "fct-type": "function",
        "title": "setOwnerReadable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "setOwnerReadable",
        "normalized": "Bool-\u003ePermissions-\u003ePermissions",
        "package": "directory",
        "partial": "Owner Readable",
        "signature": "Bool-\u003ePermissions-\u003ePermissions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:setOwnerSearchable",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Bool -\u003e Permissions -\u003e Permissions",
        "fct-source": "src/System-Directory.html#setOwnerSearchable",
        "fct-type": "function",
        "title": "setOwnerSearchable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "setOwnerSearchable",
        "normalized": "Bool-\u003ePermissions-\u003ePermissions",
        "package": "directory",
        "partial": "Owner Searchable",
        "signature": "Bool-\u003ePermissions-\u003ePermissions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:setOwnerWritable",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Bool -\u003e Permissions -\u003e Permissions",
        "fct-source": "src/System-Directory.html#setOwnerWritable",
        "fct-type": "function",
        "title": "setOwnerWritable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "setOwnerWritable",
        "normalized": "Bool-\u003ePermissions-\u003ePermissions",
        "package": "directory",
        "partial": "Owner Writable",
        "signature": "Bool-\u003ePermissions-\u003ePermissions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:setPermissions",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esetPermissions\u003c/a\u003e\u003c/code\u003e operation sets the\npermissions for the file or directory.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if the user is not permitted to set\n  the permissions; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the file or directory does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "FilePath -\u003e Permissions -\u003e IO ()",
        "fct-source": "src/System-Directory.html#setPermissions",
        "fct-type": "function",
        "title": "setPermissions"
      },
      "index": {
        "description": "The setPermissions operation sets the permissions for the file or directory The operation may fail with isPermissionError if the user is not permitted to set the permissions or isDoesNotExistError if the file or directory does not exist",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "setPermissions",
        "normalized": "FilePath-\u003ePermissions-\u003eIO()",
        "package": "directory",
        "partial": "Permissions",
        "signature": "FilePath-\u003ePermissions-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/directory/docs/System-Directory.html#v:writable",
      "description": {
        "fct-module": "System.Directory",
        "fct-package": "directory",
        "fct-signature": "Permissions -\u003e Bool",
        "fct-source": "src/System-Directory.html#writable",
        "fct-type": "function",
        "title": "writable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory",
        "module": "System.Directory",
        "name": "writable",
        "normalized": "Permissions-\u003eBool",
        "package": "directory",
        "partial": "",
        "signature": "Permissions-\u003eBool"
      }
    }
  }
]