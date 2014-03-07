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
        "word": "easy-file"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a module of cross-platform file handling for Unix/Mac/Windows.\n\u003c/p\u003e\u003cp\u003eThe standard module \u003ca\u003eSystem.Directory\u003c/a\u003e and \u003ca\u003eSystem.FilePath\u003c/a\u003e have\nfollowing shortcomings:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e getModificationTime exists in \u003ca\u003eSystem.Directory\u003c/a\u003e. But getAccessTime,\n  getChangeTime, getCreationTime do not exist.\n\u003c/li\u003e\u003cli\u003e getModificationTime returns obsoleted type, \u003ccode\u003eClockTime\u003c/code\u003e. It should\n  return modern type, \u003ccode\u003eUTCTime\u003c/code\u003e, I believe.\n\u003c/li\u003e\u003cli\u003e Some file functions are missing. A function to tell the link counter,\n  for instance.\n\u003c/li\u003e\u003cli\u003e Path separator is not unified. Even though Windows accepts '/' as a\n  file separator, getCurrentDirectory in \u003ca\u003eSystem.Directory\u003c/a\u003e returns '\\'\n  as a file separator. So, we need to specify regular expression like\n  this: \"[/\\\\]foo[/\\\\]bar[/\\\\]baz\".\n\u003c/li\u003e\u003cli\u003e getHomeDirectory returns \u003ccode\u003eHOMEDRIVE\u003c/code\u003e/\u003ccode\u003eHOMEPATH\u003c/code\u003e instead of the \u003ccode\u003eHOME\u003c/code\u003e\n  environment variable on Windows.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module aims to resolve these problems and provides:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetModificationTime\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetAccessTime\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetChangeTime\u003c/a\u003e\u003c/code\u003e, and\n  \u003ccode\u003e\u003ca\u003egetCreationTime\u003c/a\u003e\u003c/code\u003e. They return \u003ccode\u003eUTCTime\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisSymlink\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetLinkCount\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ehasSubDirectories\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e '/' as the single \u003ccode\u003e\u003ca\u003epathSeparator\u003c/a\u003e\u003c/code\u003e. For instance,\n  \u003ccode\u003e\u003ca\u003egetCurrentDirectory\u003c/a\u003e\u003c/code\u003e returns a path whose separator is '/'\n  even on Windows.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetHomeDirectory2\u003c/a\u003e\u003c/code\u003e which refers the \u003ccode\u003eHOME\u003c/code\u003e environment variable.\n\u003c/li\u003e\u003cli\u003e Necessary functions in \u003ca\u003eSystem.Directory\u003c/a\u003e and \u003ca\u003eSystem.FilePath\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis is alpha version. The specification would be changed in the\nfuture. Please send comments to:\n\u003c/p\u003e\u003cpre\u003e\n    \u003ca\u003ehttp://github.com/kazu-yamamoto/easy-file/issues\u003c/a\u003e\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.EasyFile",
          "name": "EasyFile",
          "package": "easy-file",
          "source": "src/System-EasyFile.html",
          "type": "module"
        },
        "index": {
          "description": "This is module of cross-platform file handling for Unix Mac Windows The standard module System.Directory and System.FilePath have following shortcomings getModificationTime exists in System.Directory But getAccessTime getChangeTime getCreationTime do not exist getModificationTime returns obsoleted type ClockTime It should return modern type UTCTime believe Some file functions are missing function to tell the link counter for instance Path separator is not unified Even though Windows accepts as file separator getCurrentDirectory in System.Directory returns as file separator So we need to specify regular expression like this foo bar baz getHomeDirectory returns HOMEDRIVE HOMEPATH instead of the HOME environment variable on Windows This module aims to resolve these problems and provides getModificationTime getAccessTime getChangeTime and getCreationTime They return UTCTime isSymlink getLinkCount and hasSubDirectories as the single pathSeparator For instance getCurrentDirectory returns path whose separator is even on Windows getHomeDirectory2 which refers the HOME environment variable Necessary functions in System.Directory and System.FilePath This is alpha version The specification would be changed in the future Please send comments to http github.com kazu-yamamoto easy-file issues",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "EasyFile",
          "package": "easy-file",
          "partial": "Easy File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "FilePath",
          "package": "easy-file",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "FilePath",
          "package": "easy-file",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.EasyFile",
          "name": "Permissions",
          "package": "easy-file",
          "type": "data"
        },
        "index": {
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "Permissions",
          "package": "easy-file",
          "partial": "Permissions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#t:Permissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nice alias for \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "(\u003c/\u003e)",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "nice alias for combine",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "easy-file",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to \u003ccode\u003e\u003ca\u003eaddExtension\u003c/a\u003e\u003c/code\u003e, for people who like that sort of thing.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "(\u003c.\u003e)",
          "package": "easy-file",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "Alias to addExtension for people who like that sort of thing",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "easy-file",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an extension, even if there is already one there.\n   E.g. \u003ccode\u003eaddExtension \"foo.txt\" \"bat\" -\u003e \"foo.txt.bat\"\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e addExtension \"file.txt\" \"bib\" == \"file.txt.bib\"\n addExtension \"file.\" \".bib\" == \"file..bib\"\n addExtension \"file\" \".bib\" == \"file.bib\"\n addExtension \"/\" \"x\" == \"/.x\"\n Valid x =\u003e takeFileName (addExtension (addTrailingPathSeparator x) \"ext\") == \".ext\"\n Windows: addExtension \"\\\\\\\\share\" \".txt\" == \"\\\\\\\\share\\\\.txt\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "addExtension",
          "package": "easy-file",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#addExtension",
          "type": "function"
        },
        "index": {
          "description": "Add an extension even if there is already one there E.g addExtension foo.txt bat foo.txt.bat addExtension file.txt bib file.txt.bib addExtension file bib file..bib addExtension file bib file.bib addExtension Valid takeFileName addExtension addTrailingPathSeparator ext ext Windows addExtension share txt share txt",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "addExtension",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "easy-file",
          "partial": "Extension",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:addExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a trailing file path separator if one is not already present.\n\u003c/p\u003e\u003cpre\u003e hasTrailingPathSeparator (addTrailingPathSeparator x)\n hasTrailingPathSeparator x ==\u003e addTrailingPathSeparator x == x\n addTrailingPathSeparator \"test/rest\" == \"test/rest/\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "addTrailingPathSeparator",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#addTrailingPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Add trailing file path separator if one is not already present hasTrailingPathSeparator addTrailingPathSeparator hasTrailingPathSeparator addTrailingPathSeparator addTrailingPathSeparator test rest test rest",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "addTrailingPathSeparator",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "Trailing Path Separator",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:addTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven path referring to a file or directory, returns a\n canonicalized path, with the intent that two paths referring\n to the same file/directory will map to the same canonicalized\n path. Note that it is impossible to guarantee that the\n implication (same file/dir \u003c=\u003e same canonicalizedPath) holds\n in either direction: this function can make only a best-effort\n attempt.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "canonicalizePath",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "Given path referring to file or directory returns canonicalized path with the intent that two paths referring to the same file directory will map to the same canonicalized path Note that it is impossible to guarantee that the implication same file dir same canonicalizedPath holds in either direction this function can make only best-effort attempt",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "canonicalizePath",
          "normalized": "FilePath-\u003eIO FilePath",
          "package": "easy-file",
          "partial": "Path",
          "signature": "FilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:canonicalizePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two paths, if the second path \u003ccode\u003e\u003ca\u003eisAbsolute\u003c/a\u003e\u003c/code\u003e, then it returns the second.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e combine (takeDirectory x) (takeFileName x) `equalFilePath` x\n combine \"/\" \"test\" == \"/test\"\n combine \"home\" \"bob\" == \"home/bob\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "combine",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combine two paths if the second path isAbsolute then it returns the second Valid combine takeDirectory takeFileName equalFilePath combine test test combine home bob home bob",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "combine",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "easy-file",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecopyFile\u003c/a\u003e\u003c/code\u003e old new\u003c/code\u003e copies the existing file from \u003cem\u003eold\u003c/em\u003e to \u003cem\u003enew\u003c/em\u003e.\nIf the \u003cem\u003enew\u003c/em\u003e file already exists, it is atomically replaced by the \u003cem\u003eold\u003c/em\u003e file.\nNeither path may refer to an existing directory.  The permissions of \u003cem\u003eold\u003c/em\u003e are\ncopied to \u003cem\u003enew\u003c/em\u003e, if possible.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "copyFile",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "copyFile old new copies the existing file from old to new If the new file already exists it is atomically replaced by the old file Neither path may refer to an existing directory The permissions of old are copied to new if possible",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "copyFile",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "File",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:copyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function copy the permission of the first file to the second.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "copyPermissions",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-EasyFile-Directory.html#copyPermissions",
          "type": "function"
        },
        "index": {
          "description": "This function copy the permission of the first file to the second",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "copyPermissions",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "Permissions",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:copyPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecreateDirectory\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e creates a new directory \u003ccode\u003edir\u003c/code\u003e which is\ninitially empty, or as near to empty as the operating system\nallows.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisAlreadyExistsError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eAlreadyExists\u003c/code\u003e\nThe operand refers to a directory that already exists.  \n\u003ccode\u003e [EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThere is no path to the directory. \n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources (virtual memory, process file descriptors,\nphysical disk space, etc.) are available to perform the operation.\n\u003ccode\u003e[EDQUOT, ENOSPC, ENOMEM, EMLINK]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe path refers to an existing non-directory object.\n\u003ccode\u003e[EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "createDirectory",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "createDirectory dir creates new directory dir which is initially empty or as near to empty as the operating system allows The operation may fail with isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES isAlreadyExistsError AlreadyExists The operand refers to directory that already exists EEXIST HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP NoSuchThing There is no path to the directory ENOENT ENOTDIR ResourceExhausted Insufficient resources virtual memory process file descriptors physical disk space etc are available to perform the operation EDQUOT ENOSPC ENOMEM EMLINK InappropriateType The path refers to an existing non-directory object EEXIST",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "createDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:createDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecreateDirectoryIfMissing\u003c/a\u003e\u003c/code\u003e parents dir\u003c/code\u003e creates a new directory \n \u003ccode\u003edir\u003c/code\u003e if it doesn't exist. If the first argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n the function will also create all parent directories if they are missing.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "createDirectoryIfMissing",
          "package": "easy-file",
          "signature": "Bool-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "createDirectoryIfMissing parents dir creates new directory dir if it doesn exist If the first argument is True the function will also create all parent directories if they are missing",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "createDirectoryIfMissing",
          "normalized": "Bool-\u003eFilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "Directory If Missing",
          "signature": "Bool-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:createDirectoryIfMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operation \u003ccode\u003e\u003ca\u003edoesDirectoryExist\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument file\nexists and is a directory, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "doesDirectoryExist",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "The operation doesDirectoryExist returns True if the argument file exists and is directory and False otherwise",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "doesDirectoryExist",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "easy-file",
          "partial": "Directory Exist",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:doesDirectoryExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operation \u003ccode\u003e\u003ca\u003edoesFileExist\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\nif the argument file exists and is not a directory, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "doesFileExist",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "The operation doesFileExist returns True if the argument file exists and is not directory and False otherwise",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "doesFileExist",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "easy-file",
          "partial": "File Exist",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:doesFileExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the drive, if it exists.\n\u003c/p\u003e\u003cpre\u003e dropDrive x == snd (splitDrive x)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "dropDrive",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#dropDrive",
          "type": "function"
        },
        "index": {
          "description": "Delete the drive if it exists dropDrive snd splitDrive",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "dropDrive",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "Drive",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:dropDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove last extension, and the \".\" preceding it.\n\u003c/p\u003e\u003cpre\u003e dropExtension x == fst (splitExtension x)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "dropExtension",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#dropExtension",
          "type": "function"
        },
        "index": {
          "description": "Remove last extension and the preceding it dropExtension fst splitExtension",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "dropExtension",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "Extension",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:dropExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop all extensions\n\u003c/p\u003e\u003cpre\u003e not $ hasExtension (dropExtensions x)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "dropExtensions",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#dropExtensions",
          "type": "function"
        },
        "index": {
          "description": "Drop all extensions not hasExtension dropExtensions",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "dropExtensions",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "Extensions",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:dropExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop the filename.\n\u003c/p\u003e\u003cpre\u003e dropFileName x == fst (splitFileName x)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "dropFileName",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#dropFileName",
          "type": "function"
        },
        "index": {
          "description": "Drop the filename dropFileName fst splitFileName",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "dropFileName",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "File Name",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:dropFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove any trailing path separators\n\u003c/p\u003e\u003cpre\u003e dropTrailingPathSeparator \"file/test/\" == \"file/test\"\n not (hasTrailingPathSeparator (dropTrailingPathSeparator x)) || isDrive x\n dropTrailingPathSeparator \"/\" == \"/\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "dropTrailingPathSeparator",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#dropTrailingPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Remove any trailing path separators dropTrailingPathSeparator file test file test not hasTrailingPathSeparator dropTrailingPathSeparator isDrive dropTrailingPathSeparator",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "dropTrailingPathSeparator",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "Trailing Path Separator",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:dropTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality of two \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n   If you call \u003ccode\u003eSystem.Directory.canonicalizePath\u003c/code\u003e\n   first this has a much better chance of working.\n   Note that this doesn't follow symlinks or DOSNAM~1s.\n\u003c/p\u003e\u003cpre\u003e          x == y ==\u003e equalFilePath x y\n          normalise x == normalise y ==\u003e equalFilePath x y\n Posix:   equalFilePath \"foo\" \"foo/\"\n Posix:   not (equalFilePath \"foo\" \"/foo\")\n Posix:   not (equalFilePath \"foo\" \"FOO\")\n Windows: equalFilePath \"foo\" \"FOO\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "equalFilePath",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath -\u003e Bool",
          "source": "src/System-EasyFile-FilePath.html#equalFilePath",
          "type": "function"
        },
        "index": {
          "description": "Equality of two FilePath If you call System.Directory.canonicalizePath first this has much better chance of working Note that this doesn follow symlinks or DOSNAM equalFilePath normalise normalise equalFilePath Posix equalFilePath foo foo Posix not equalFilePath foo foo Posix not equalFilePath foo FOO Windows equalFilePath foo FOO",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "equalFilePath",
          "normalized": "FilePath-\u003eFilePath-\u003eBool",
          "package": "easy-file",
          "partial": "File Path",
          "signature": "FilePath-\u003eFilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:equalFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile extension character\n\u003c/p\u003e\u003cpre\u003e extSeparator == '.'\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "extSeparator",
          "package": "easy-file",
          "signature": "Char",
          "source": "src/System-EasyFile-FilePath.html#extSeparator",
          "type": "function"
        },
        "index": {
          "description": "File extension character extSeparator",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "extSeparator",
          "package": "easy-file",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:extSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetModificationTime\u003c/a\u003e\u003c/code\u003e operation returns the\nUTC time at which the file or directory was last accessed.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "getAccessTime",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO UTCTime",
          "source": "src/System-EasyFile-Missing.html#getAccessTime",
          "type": "function"
        },
        "index": {
          "description": "The getModificationTime operation returns the UTC time at which the file or directory was last accessed",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getAccessTime",
          "normalized": "FilePath-\u003eIO UTCTime",
          "package": "easy-file",
          "partial": "Access Time",
          "signature": "FilePath-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getAccessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the pathname of a directory in which application-specific\ndata for the current user can be stored.  The result of\n\u003ccode\u003e\u003ca\u003egetAppUserDataDirectory\u003c/a\u003e\u003c/code\u003e for a given application is specific to\nthe current user.\n\u003c/p\u003e\u003cp\u003eThe argument should be the name of the application, which will be used\nto construct the pathname (so avoid using unusual characters that\nmight result in an invalid pathname).\n\u003c/p\u003e\u003cp\u003eNote: the directory may not actually exist, and may need to be created\nfirst.  It is expected that the parent directory exists and is\nwritable.\n\u003c/p\u003e\u003cp\u003eOn Unix, this function returns \u003ccode\u003e$HOME/.appName\u003c/code\u003e.  On Windows, a\ntypical path might be\n\u003c/p\u003e\u003cpre\u003e C:/Documents And Settings/user/Application Data/appName\n\u003c/pre\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of application-specific data directory.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisDoesNotExistError\u003c/code\u003e\nThe home directory for the current user does not exist, or\ncannot be found.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "getAppUserDataDirectory",
          "package": "easy-file",
          "signature": "String -\u003e IO FilePath",
          "source": "src/System-EasyFile-Directory.html#getAppUserDataDirectory",
          "type": "function"
        },
        "index": {
          "description": "Returns the pathname of directory in which application-specific data for the current user can be stored The result of getAppUserDataDirectory for given application is specific to the current user The argument should be the name of the application which will be used to construct the pathname so avoid using unusual characters that might result in an invalid pathname Note the directory may not actually exist and may need to be created first It is expected that the parent directory exists and is writable On Unix this function returns HOME appName On Windows typical path might be Documents And Settings user Application Data appName The operation may fail with UnsupportedOperation The operating system has no notion of application-specific data directory isDoesNotExistError The home directory for the current user does not exist or cannot be found",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getAppUserDataDirectory",
          "normalized": "String-\u003eIO FilePath",
          "package": "easy-file",
          "partial": "App User Data Directory",
          "signature": "String-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getAppUserDataDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetCreationTime\u003c/a\u003e\u003c/code\u003e operation returns the\nUTC time at which the file or directory was changed.\nThe time is only available on Unix and Mac.\nNote that Unix's rename() does not change ctime but\nMacOS's rename() does.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "getChangeTime",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO (Maybe UTCTime)",
          "source": "src/System-EasyFile-Missing.html#getChangeTime",
          "type": "function"
        },
        "index": {
          "description": "The getCreationTime operation returns the UTC time at which the file or directory was changed The time is only available on Unix and Mac Note that Unix rename does not change ctime but MacOS rename does",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getChangeTime",
          "normalized": "FilePath-\u003eIO(Maybe UTCTime)",
          "package": "easy-file",
          "partial": "Change Time",
          "signature": "FilePath-\u003eIO(Maybe UTCTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getChangeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetCreationTime\u003c/a\u003e\u003c/code\u003e operation returns the\nUTC time at which the file or directory was created.\nThe time is only available on Windows.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "getCreationTime",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO (Maybe UTCTime)",
          "source": "src/System-EasyFile-Missing.html#getCreationTime",
          "type": "function"
        },
        "index": {
          "description": "The getCreationTime operation returns the UTC time at which the file or directory was created The time is only available on Windows",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getCreationTime",
          "normalized": "FilePath-\u003eIO(Maybe UTCTime)",
          "package": "easy-file",
          "partial": "Creation Time",
          "signature": "FilePath-\u003eIO(Maybe UTCTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getCreationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the operating system has a notion of current directories,\n\u003ccode\u003e\u003ca\u003egetCurrentDirectory\u003c/a\u003e\u003c/code\u003e returns an absolute path to the\ncurrent directory of the calling process.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisDoesNotExistError\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThere is no path referring to the current directory.\n\u003ccode\u003e[EPERM, ENOENT, ESTALE...]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of current directory.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "getCurrentDirectory",
          "package": "easy-file",
          "signature": "IO FilePath",
          "source": "src/System-EasyFile-Directory.html#getCurrentDirectory",
          "type": "function"
        },
        "index": {
          "description": "If the operating system has notion of current directories getCurrentDirectory returns an absolute path to the current directory of the calling process The operation may fail with HardwareFault physical error has occurred EIO isDoesNotExistError NoSuchThing There is no path referring to the current directory EPERM ENOENT ESTALE isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EACCES ResourceExhausted Insufficient resources are available to perform the operation UnsupportedOperation The operating system has no notion of current directory",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getCurrentDirectory",
          "package": "easy-file",
          "partial": "Current Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getCurrentDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetDirectoryContents\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e returns a list of \u003cem\u003eall\u003c/em\u003e entries\nin \u003cem\u003edir\u003c/em\u003e. \n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe directory does not exist.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.\n\u003ccode\u003e[EMFILE, ENFILE]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe path refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "getDirectoryContents",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "getDirectoryContents dir returns list of all entries in dir The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The directory does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EACCES ResourceExhausted Insufficient resources are available to perform the operation EMFILE ENFILE InappropriateType The path refers to an existing non-directory object ENOTDIR",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getDirectoryContents",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "easy-file",
          "partial": "Directory Contents",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getDirectoryContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current user's home directory.\n\u003c/p\u003e\u003cp\u003eThe directory returned is expected to be writable by the current user,\nbut note that it isn't generally considered good practice to store\napplication-specific data here; use \u003ccode\u003e\u003ca\u003egetAppUserDataDirectory\u003c/a\u003e\u003c/code\u003e\ninstead.\n\u003c/p\u003e\u003cp\u003eOn Unix, \u003ccode\u003e\u003ca\u003egetHomeDirectory\u003c/a\u003e\u003c/code\u003e returns the value of the \u003ccode\u003eHOME\u003c/code\u003e\nenvironment variable.  On Windows, the system is queried for a\nsuitable path; a typical path might be\n\u003ccode\u003eC:\u003cem\u003eDocuments And Settings\u003c/em\u003euser\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of home directory.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisDoesNotExistError\u003c/code\u003e\nThe home directory for the current user does not exist, or\ncannot be found.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "getHomeDirectory",
          "package": "easy-file",
          "signature": "IO FilePath",
          "source": "src/System-EasyFile-Directory.html#getHomeDirectory",
          "type": "function"
        },
        "index": {
          "description": "Returns the current user home directory The directory returned is expected to be writable by the current user but note that it isn generally considered good practice to store application-specific data here use getAppUserDataDirectory instead On Unix getHomeDirectory returns the value of the HOME environment variable On Windows the system is queried for suitable path typical path might be Documents And Settings user The operation may fail with UnsupportedOperation The operating system has no notion of home directory isDoesNotExistError The home directory for the current user does not exist or cannot be found",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getHomeDirectory",
          "package": "easy-file",
          "partial": "Home Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getHomeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current user's home directory from\nthe \u003ccode\u003eHOME\u003c/code\u003e environment variable.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "getHomeDirectory2",
          "package": "easy-file",
          "signature": "IO (Maybe FilePath)",
          "source": "src/System-EasyFile-Directory.html#getHomeDirectory2",
          "type": "function"
        },
        "index": {
          "description": "Returns the current user home directory from the HOME environment variable",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getHomeDirectory2",
          "package": "easy-file",
          "partial": "Home Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getHomeDirectory2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function returns the link counter of a file/directory.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "getLinkCount",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO (Maybe Int)",
          "source": "src/System-EasyFile-Missing.html#getLinkCount",
          "type": "function"
        },
        "index": {
          "description": "This function returns the link counter of file directory",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getLinkCount",
          "normalized": "FilePath-\u003eIO(Maybe Int)",
          "package": "easy-file",
          "partial": "Link Count",
          "signature": "FilePath-\u003eIO(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getLinkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetModificationTime\u003c/a\u003e\u003c/code\u003e operation returns the\nUTC time at which the file or directory was last modified.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if the user is not permitted to access\n  the modification time; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisDoesNotExistError\u003c/code\u003e if the file or directory does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "getModificationTime",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO UTCTime",
          "source": "src/System-EasyFile-Missing.html#getModificationTime",
          "type": "function"
        },
        "index": {
          "description": "The getModificationTime operation returns the UTC time at which the file or directory was last modified The operation may fail with isPermissionError if the user is not permitted to access the modification time or isDoesNotExistError if the file or directory does not exist",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getModificationTime",
          "normalized": "FilePath-\u003eIO UTCTime",
          "package": "easy-file",
          "partial": "Modification Time",
          "signature": "FilePath-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getModificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetPermissions\u003c/a\u003e\u003c/code\u003e operation returns the\npermissions for the file or directory.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if the user is not permitted to access\n  the permissions; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the file or directory does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "getPermissions",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO Permissions",
          "type": "function"
        },
        "index": {
          "description": "The getPermissions operation returns the permissions for the file or directory The operation may fail with isPermissionError if the user is not permitted to access the permissions or isDoesNotExistError if the file or directory does not exist",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getPermissions",
          "normalized": "FilePath-\u003eIO Permissions",
          "package": "easy-file",
          "partial": "Permissions",
          "signature": "FilePath-\u003eIO Permissions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current directory for temporary files.\n\u003c/p\u003e\u003cp\u003eOn Unix, \u003ccode\u003e\u003ca\u003egetTemporaryDirectory\u003c/a\u003e\u003c/code\u003e returns the value of the \u003ccode\u003eTMPDIR\u003c/code\u003e\nenvironment variable or \"/tmp\" if the variable isn't defined.\nOn Windows, the function checks for the existence of environment variables in\nthe following order and uses the first path found:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e TMP environment variable.\n\u003c/li\u003e\u003cli\u003e TEMP environment variable.\n\u003c/li\u003e\u003cli\u003e USERPROFILE environment variable.\n\u003c/li\u003e\u003cli\u003e The Windows directory\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of temporary directory.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe function doesn't verify whether the path exists.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "getTemporaryDirectory",
          "package": "easy-file",
          "signature": "IO FilePath",
          "source": "src/System-EasyFile-Directory.html#getTemporaryDirectory",
          "type": "function"
        },
        "index": {
          "description": "Returns the current directory for temporary files On Unix getTemporaryDirectory returns the value of the TMPDIR environment variable or tmp if the variable isn defined On Windows the function checks for the existence of environment variables in the following order and uses the first path found TMP environment variable TEMP environment variable USERPROFILE environment variable The Windows directory The operation may fail with UnsupportedOperation The operating system has no notion of temporary directory The function doesn verify whether the path exists",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getTemporaryDirectory",
          "package": "easy-file",
          "partial": "Temporary Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getTemporaryDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current user's document directory.\n\u003c/p\u003e\u003cp\u003eThe directory returned is expected to be writable by the current user,\nbut note that it isn't generally considered good practice to store\napplication-specific data here; use \u003ccode\u003e\u003ca\u003egetAppUserDataDirectory\u003c/a\u003e\u003c/code\u003e\ninstead.\n\u003c/p\u003e\u003cp\u003eOn Unix, \u003ccode\u003e\u003ca\u003egetUserDocumentsDirectory\u003c/a\u003e\u003c/code\u003e returns the value of the \u003ccode\u003eHOME\u003c/code\u003e\nenvironment variable.  On Windows, the system is queried for a\nsuitable path; a typical path might be\n\u003ccode\u003eC:/Documents and Settings/user/My Documents\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of document directory.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisDoesNotExistError\u003c/code\u003e\nThe document directory for the current user does not exist, or\ncannot be found.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "getUserDocumentsDirectory",
          "package": "easy-file",
          "signature": "IO FilePath",
          "source": "src/System-EasyFile-Directory.html#getUserDocumentsDirectory",
          "type": "function"
        },
        "index": {
          "description": "Returns the current user document directory The directory returned is expected to be writable by the current user but note that it isn generally considered good practice to store application-specific data here use getAppUserDataDirectory instead On Unix getUserDocumentsDirectory returns the value of the HOME environment variable On Windows the system is queried for suitable path typical path might be Documents and Settings user My Documents The operation may fail with UnsupportedOperation The operating system has no notion of document directory isDoesNotExistError The document directory for the current user does not exist or cannot be found",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "getUserDocumentsDirectory",
          "package": "easy-file",
          "partial": "User Documents Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:getUserDocumentsDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path have a drive.\n\u003c/p\u003e\u003cpre\u003e not (hasDrive x) == null (takeDrive x)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "hasDrive",
          "package": "easy-file",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-EasyFile-FilePath.html#hasDrive",
          "type": "function"
        },
        "index": {
          "description": "Does path have drive not hasDrive null takeDrive",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "hasDrive",
          "normalized": "FilePath-\u003eBool",
          "package": "easy-file",
          "partial": "Drive",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:hasDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the given filename have an extension?\n\u003c/p\u003e\u003cpre\u003e null (takeExtension x) == not (hasExtension x)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "hasExtension",
          "package": "easy-file",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-EasyFile-FilePath.html#hasExtension",
          "type": "function"
        },
        "index": {
          "description": "Does the given filename have an extension null takeExtension not hasExtension",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "hasExtension",
          "normalized": "FilePath-\u003eBool",
          "package": "easy-file",
          "partial": "Extension",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:hasExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function returns whether or not a directory has sub-directories.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "hasSubDirectories",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO (Maybe Bool)",
          "source": "src/System-EasyFile-Missing.html#hasSubDirectories",
          "type": "function"
        },
        "index": {
          "description": "This function returns whether or not directory has sub-directories",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "hasSubDirectories",
          "normalized": "FilePath-\u003eIO(Maybe Bool)",
          "package": "easy-file",
          "partial": "Sub Directories",
          "signature": "FilePath-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:hasSubDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs an item either a directory or the last character a path separator?\n\u003c/p\u003e\u003cpre\u003e hasTrailingPathSeparator \"test\" == False\n hasTrailingPathSeparator \"test/\" == True\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "hasTrailingPathSeparator",
          "package": "easy-file",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-EasyFile-FilePath.html#hasTrailingPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Is an item either directory or the last character path separator hasTrailingPathSeparator test False hasTrailingPathSeparator test True",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "hasTrailingPathSeparator",
          "normalized": "FilePath-\u003eBool",
          "package": "easy-file",
          "partial": "Trailing Path Separator",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:hasTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003enot . \u003ccode\u003e\u003ca\u003eisRelative\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cpre\u003e isAbsolute x == not (isRelative x)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "isAbsolute",
          "package": "easy-file",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-EasyFile-FilePath.html#isAbsolute",
          "type": "function"
        },
        "index": {
          "description": "not isRelative isAbsolute not isRelative",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "isAbsolute",
          "normalized": "FilePath-\u003eBool",
          "package": "easy-file",
          "partial": "Absolute",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:isAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs an element a drive\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "isDrive",
          "package": "easy-file",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-EasyFile-FilePath.html#isDrive",
          "type": "function"
        },
        "index": {
          "description": "Is an element drive",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "isDrive",
          "normalized": "FilePath-\u003eBool",
          "package": "easy-file",
          "partial": "Drive",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:isDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the character an extension character?\n\u003c/p\u003e\u003cpre\u003e isExtSeparator a == (a == extSeparator)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "isExtSeparator",
          "package": "easy-file",
          "signature": "Char -\u003e Bool",
          "source": "src/System-EasyFile-FilePath.html#isExtSeparator",
          "type": "function"
        },
        "index": {
          "description": "Is the character an extension character isExtSeparator extSeparator",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "isExtSeparator",
          "normalized": "Char-\u003eBool",
          "package": "easy-file",
          "partial": "Ext Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:isExtSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRather than using \u003ccode\u003e(== \u003ccode\u003e\u003ca\u003epathSeparator\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, use this. Test if something\n   is a path separator.\n\u003c/p\u003e\u003cpre\u003e isPathSeparator a == (a `elem` pathSeparators)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "isPathSeparator",
          "package": "easy-file",
          "signature": "Char -\u003e Bool",
          "source": "src/System-EasyFile-FilePath.html#isPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Rather than using pathSeparator use this Test if something is path separator isPathSeparator elem pathSeparators",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "isPathSeparator",
          "normalized": "Char-\u003eBool",
          "package": "easy-file",
          "partial": "Path Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:isPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a path relative, or is it fixed to the root?\n\u003c/p\u003e\u003cpre\u003e Windows: isRelative \"path\\\\test\" == True\n Windows: isRelative \"c:\\\\test\" == False\n Windows: isRelative \"c:test\" == True\n Windows: isRelative \"c:\" == True\n Windows: isRelative \"\\\\\\\\foo\" == False\n Windows: isRelative \"/foo\" == True\n Posix:   isRelative \"test/path\" == True\n Posix:   isRelative \"/test\" == False\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "isRelative",
          "package": "easy-file",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-EasyFile-FilePath.html#isRelative",
          "type": "function"
        },
        "index": {
          "description": "Is path relative or is it fixed to the root Windows isRelative path test True Windows isRelative test False Windows isRelative test True Windows isRelative True Windows isRelative foo False Windows isRelative foo True Posix isRelative test path True Posix isRelative test False",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "isRelative",
          "normalized": "FilePath-\u003eBool",
          "package": "easy-file",
          "partial": "Relative",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:isRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function tells whether or not a file/directory is symbolic\n  link.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "isSymlink",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO Bool",
          "source": "src/System-EasyFile-Missing.html#isSymlink",
          "type": "function"
        },
        "index": {
          "description": "This function tells whether or not file directory is symbolic link",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "isSymlink",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "easy-file",
          "partial": "Symlink",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:isSymlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin a drive and the rest of the path.\n\u003c/p\u003e\u003cpre\u003e          uncurry joinDrive (splitDrive x) == x\n Windows: joinDrive \"C:\" \"foo\" == \"C:foo\"\n Windows: joinDrive \"C:/\" \"bar\" == \"C:/bar\"\n Windows: joinDrive \"\\\\\\\\share\" \"foo\" == \"\\\\\\\\share/foo\" -- xxx\n Windows: joinDrive \"/:\" \"foo\" == \"/:/foo\" -- xxx\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "joinDrive",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#joinDrive",
          "type": "function"
        },
        "index": {
          "description": "Join drive and the rest of the path uncurry joinDrive splitDrive Windows joinDrive foo foo Windows joinDrive bar bar Windows joinDrive share foo share foo xxx Windows joinDrive foo foo xxx",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "joinDrive",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "Drive",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:joinDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin path elements back together.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e joinPath (splitPath x) == x\n joinPath [] == \"\"\n Posix: joinPath [\"test\",\"file\",\"path\"] == \"test/file/path\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "joinPath",
          "package": "easy-file",
          "signature": "[FilePath] -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#joinPath",
          "type": "function"
        },
        "index": {
          "description": "Join path elements back together Valid joinPath splitPath joinPath Posix joinPath test file path test file path",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "joinPath",
          "normalized": "[FilePath]-\u003eFilePath",
          "package": "easy-file",
          "partial": "Path",
          "signature": "[FilePath]-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:joinPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract a filename, based on a relative path.\n\u003c/p\u003e\u003cp\u003eThere is no corresponding \u003ccode\u003emakeAbsolute\u003c/code\u003e function, instead use\n   \u003ccode\u003eSystem.Directory.canonicalizePath\u003c/code\u003e which has the same effect.\n\u003c/p\u003e\u003cpre\u003e          Valid y =\u003e equalFilePath x y || (isRelative x && makeRelative y x == x) || equalFilePath (y \u003c/\u003e makeRelative y x) x\n          makeRelative x x == \".\"\n          null y || equalFilePath (makeRelative x (x \u003c/\u003e y)) y || null (takeFileName x)\n Windows: makeRelative \"C:/Home\" \"c:/home/bob\" == \"bob\"\n Windows: makeRelative \"C:/Home\" \"D:/Home/Bob\" == \"D:/Home/Bob\"\n Windows: makeRelative \"C:/Home\" \"C:Home/Bob\" == \"C:Home/Bob\"\n Windows: makeRelative \"/Home\" \"/home/bob\" == \"bob\"\n Posix:   makeRelative \"/Home\" \"/home/bob\" == \"/home/bob\"\n Posix:   makeRelative \"/home/\" \"/home/bob/foo/bar\" == \"bob/foo/bar\"\n Posix:   makeRelative \"/fred\" \"bob\" == \"bob\"\n Posix:   makeRelative \"/file/test\" \"/file/test/fred\" == \"fred\"\n Posix:   makeRelative \"/file/test\" \"/file/test/fred/\" == \"fred/\"\n Posix:   makeRelative \"some/path\" \"some/path/a/b/c\" == \"a/b/c\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "makeRelative",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#makeRelative",
          "type": "function"
        },
        "index": {
          "description": "Contract filename based on relative path There is no corresponding makeAbsolute function instead use System.Directory.canonicalizePath which has the same effect Valid equalFilePath isRelative makeRelative equalFilePath makeRelative makeRelative null equalFilePath makeRelative null takeFileName Windows makeRelative Home home bob bob Windows makeRelative Home Home Bob Home Bob Windows makeRelative Home Home Bob Home Bob Windows makeRelative Home home bob bob Posix makeRelative Home home bob home bob Posix makeRelative home home bob foo bar bob foo bar Posix makeRelative fred bob bob Posix makeRelative file test file test fred fred Posix makeRelative file test file test fred fred Posix makeRelative some path some path",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "makeRelative",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "Relative",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:makeRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise a file\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e // outside of the drive can be made blank\n\u003c/li\u003e\u003cli\u003e / -\u003e \u003ccode\u003e\u003ca\u003epathSeparator\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e ./ -\u003e \"\"\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e Posix:   normalise \"/file/\\\\test////\" == \"/file/\\\\test/\"\n Posix:   normalise \"/file/./test\" == \"/file/test\"\n Posix:   normalise \"/test/file/../bob/fred/\" == \"/test/file/../bob/fred/\"\n Posix:   normalise \"../bob/fred/\" == \"../bob/fred/\"\n Posix:   normalise \"./bob/fred/\" == \"bob/fred/\"\n Windows: normalise \"c:\\\\file/bob\\\\\" == \"C:/file/bob/\"\n Windows: normalise \"c:/\" == \"C:/\"\n Windows: normalise \"\\\\\\\\server\\\\test\" == \"\\\\\\\\server\\\\test\" -- xxx\n Windows: normalise \".\" == \".\"\n Posix:   normalise \"./\" == \"./\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "normalise",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#normalise",
          "type": "function"
        },
        "index": {
          "description": "Normalise file outside of the drive can be made blank pathSeparator Posix normalise file test file test Posix normalise file test file test Posix normalise test file bob fred test file bob fred Posix normalise bob fred bob fred Posix normalise bob fred bob fred Windows normalise file bob file bob Windows normalise Windows normalise server test server test xxx Windows normalise Posix normalise",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "normalise",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character that separates directories.\n\u003c/p\u003e\u003cpre\u003e pathSeparator ==  '/'\n isPathSeparator pathSeparator\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "pathSeparator",
          "package": "easy-file",
          "signature": "Char",
          "source": "src/System-EasyFile-FilePath.html#pathSeparator",
          "type": "function"
        },
        "index": {
          "description": "The character that separates directories pathSeparator isPathSeparator pathSeparator",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "pathSeparator",
          "package": "easy-file",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:pathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of all possible separators.\n\u003c/p\u003e\u003cpre\u003e Windows: pathSeparators == ['\\\\', '/']\n Posix:   pathSeparators == ['/']\n pathSeparator `elem` pathSeparators\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "pathSeparators",
          "package": "easy-file",
          "signature": "[Char]",
          "source": "src/System-EasyFile-FilePath.html#pathSeparators",
          "type": "function"
        },
        "index": {
          "description": "The list of all possible separators Windows pathSeparators Posix pathSeparators pathSeparator elem pathSeparators",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "pathSeparators",
          "normalized": "[Char]",
          "package": "easy-file",
          "partial": "Separators",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:pathSeparators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e removes an existing directory \u003cem\u003edir\u003c/em\u003e.  The\nimplementation may specify additional constraints which must be\nsatisfied before a directory can be removed (e.g. the directory has to\nbe empty, or may not be in use by other processes).  It is not legal\nfor an implementation to partially remove a directory unless the\nentire directory is removed. A conformant implementation need not\nsupport directory removal in all situations (e.g. removal of the root\ndirectory).\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\nEIO\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n[ENAMETOOLONG, ELOOP]\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe directory does not exist. \n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.  \n\u003ccode\u003e[EBUSY, ENOTEMPTY, EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe implementation does not support removal in this situation.\n\u003ccode\u003e[EINVAL]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe operand refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "removeDirectory",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "removeDirectory dir removes an existing directory dir The implementation may specify additional constraints which must be satisfied before directory can be removed e.g the directory has to be empty or may not be in use by other processes It is not legal for an implementation to partially remove directory unless the entire directory is removed conformant implementation need not support directory removal in all situations e.g removal of the root directory The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The directory does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY ENOTEMPTY EEXIST UnsupportedOperation The implementation does not support removal in this situation EINVAL InappropriateType The operand refers to an existing non-directory object ENOTDIR",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "removeDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:removeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eremoveDirectoryRecursive\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e  removes an existing directory \u003cem\u003edir\u003c/em\u003e\n together with its content and all subdirectories. Be careful, \n if the directory contains symlinks, the function will follow them.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "removeDirectoryRecursive",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "removeDirectoryRecursive dir removes an existing directory dir together with its content and all subdirectories Be careful if the directory contains symlinks the function will follow them",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "removeDirectoryRecursive",
          "normalized": "FilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "Directory Recursive",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:removeDirectoryRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eremoveFile\u003c/a\u003e\u003c/code\u003e \u003cem\u003efile\u003c/em\u003e removes the directory entry for an existing file\n\u003cem\u003efile\u003c/em\u003e, where \u003cem\u003efile\u003c/em\u003e is not itself a directory. The\nimplementation may specify additional constraints which must be\nsatisfied before a file can be removed (e.g. the file may not be in\nuse by other processes).\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid file name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe file does not exist. \n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.  \n\u003ccode\u003e[EBUSY]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe operand refers to an existing directory.\n\u003ccode\u003e[EPERM, EINVAL]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "removeFile",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "removeFile file removes the directory entry for an existing file file where file is not itself directory The implementation may specify additional constraints which must be satisfied before file can be removed e.g the file may not be in use by other processes The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid file name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The file does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY InappropriateType The operand refers to an existing directory EPERM EINVAL",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "removeFile",
          "normalized": "FilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "File",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:removeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erenameDirectory\u003c/a\u003e\u003c/code\u003e old new\u003c/code\u003e changes the name of an existing\ndirectory from \u003cem\u003eold\u003c/em\u003e to \u003cem\u003enew\u003c/em\u003e.  If the \u003cem\u003enew\u003c/em\u003e directory\nalready exists, it is atomically replaced by the \u003cem\u003eold\u003c/em\u003e directory.\nIf the \u003cem\u003enew\u003c/em\u003e directory is neither the \u003cem\u003eold\u003c/em\u003e directory nor an\nalias of the \u003cem\u003eold\u003c/em\u003e directory, it is removed as if by\n\u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e.  A conformant implementation need not support\nrenaming directories in all situations (e.g. renaming to an existing\ndirectory, or across different physical devices), but the constraints\nmust be documented.\n\u003c/p\u003e\u003cp\u003eOn Win32 platforms, \u003ccode\u003erenameDirectory\u003c/code\u003e fails if the \u003cem\u003enew\u003c/em\u003e directory already\nexists.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nEither operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe original directory does not exist, or there is no path to the target.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.  \n\u003ccode\u003e[EDQUOT, ENOSPC, ENOMEM, EMLINK]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.\n\u003ccode\u003e[EBUSY, ENOTEMPTY, EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe implementation does not support renaming in this situation.\n\u003ccode\u003e[EINVAL, EXDEV]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nEither path refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR, EISDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "renameDirectory",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "renameDirectory old new changes the name of an existing directory from old to new If the new directory already exists it is atomically replaced by the old directory If the new directory is neither the old directory nor an alias of the old directory it is removed as if by removeDirectory conformant implementation need not support renaming directories in all situations e.g renaming to an existing directory or across different physical devices but the constraints must be documented On Win32 platforms renameDirectory fails if the new directory already exists The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument Either operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The original directory does not exist or there is no path to the target ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM ResourceExhausted Insufficient resources are available to perform the operation EDQUOT ENOSPC ENOMEM EMLINK UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY ENOTEMPTY EEXIST UnsupportedOperation The implementation does not support renaming in this situation EINVAL EXDEV InappropriateType Either path refers to an existing non-directory object ENOTDIR EISDIR",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "renameDirectory",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "Directory",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:renameDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erenameFile\u003c/a\u003e\u003c/code\u003e old new\u003c/code\u003e changes the name of an existing file system\nobject from \u003cem\u003eold\u003c/em\u003e to \u003cem\u003enew\u003c/em\u003e.  If the \u003cem\u003enew\u003c/em\u003e object already\nexists, it is atomically replaced by the \u003cem\u003eold\u003c/em\u003e object.  Neither\npath may refer to an existing directory.  A conformant implementation\nneed not support renaming files in all situations (e.g. renaming\nacross different physical devices), but the constraints must be\ndocumented.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nEither operand is not a valid file name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe original file does not exist, or there is no path to the target.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.  \n\u003ccode\u003e[EDQUOT, ENOSPC, ENOMEM, EMLINK]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.\n\u003ccode\u003e[EBUSY]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe implementation does not support renaming in this situation.\n\u003ccode\u003e[EXDEV]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nEither path refers to an existing directory.\n\u003ccode\u003e[ENOTDIR, EISDIR, EINVAL, EEXIST, ENOTEMPTY]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "renameFile",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "renameFile old new changes the name of an existing file system object from old to new If the new object already exists it is atomically replaced by the old object Neither path may refer to an existing directory conformant implementation need not support renaming files in all situations e.g renaming across different physical devices but the constraints must be documented The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument Either operand is not valid file name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The original file does not exist or there is no path to the target ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM ResourceExhausted Insufficient resources are available to perform the operation EDQUOT ENOSPC ENOMEM EMLINK UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY UnsupportedOperation The implementation does not support renaming in this situation EXDEV InappropriateType Either path refers to an existing directory ENOTDIR EISDIR EINVAL EEXIST ENOTEMPTY",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "renameFile",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "File",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:renameFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the base name.\n\u003c/p\u003e\u003cpre\u003e replaceBaseName \"file/test.txt\" \"bob\" == \"file/bob.txt\"\n replaceBaseName \"fred\" \"bill\" == \"bill\"\n replaceBaseName \"/dave/fred/bob.gz.tar\" \"new\" == \"/dave/fred/new.tar\"\n replaceBaseName x (takeBaseName x) == x\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "replaceBaseName",
          "package": "easy-file",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#replaceBaseName",
          "type": "function"
        },
        "index": {
          "description": "Set the base name replaceBaseName file test.txt bob file bob.txt replaceBaseName fred bill bill replaceBaseName dave fred bob.gz.tar new dave fred new.tar replaceBaseName takeBaseName",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "replaceBaseName",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "easy-file",
          "partial": "Base Name",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:replaceBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the directory, keeping the filename the same.\n\u003c/p\u003e\u003cpre\u003e replaceDirectory x (takeDirectory x) `equalFilePath` x\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "replaceDirectory",
          "package": "easy-file",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#replaceDirectory",
          "type": "function"
        },
        "index": {
          "description": "Set the directory keeping the filename the same replaceDirectory takeDirectory equalFilePath",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "replaceDirectory",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "easy-file",
          "partial": "Directory",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:replaceDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the extension of a file, overwriting one if already present.\n\u003c/p\u003e\u003cpre\u003e replaceExtension \"file.txt\" \".bob\" == \"file.bob\"\n replaceExtension \"file.txt\" \"bob\" == \"file.bob\"\n replaceExtension \"file\" \".bob\" == \"file.bob\"\n replaceExtension \"file.txt\" \"\" == \"file\"\n replaceExtension \"file.fred.bob\" \"txt\" == \"file.fred.txt\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "replaceExtension",
          "package": "easy-file",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#replaceExtension",
          "type": "function"
        },
        "index": {
          "description": "Set the extension of file overwriting one if already present replaceExtension file.txt bob file.bob replaceExtension file.txt bob file.bob replaceExtension file bob file.bob replaceExtension file.txt file replaceExtension file.fred.bob txt file.fred.txt",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "replaceExtension",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "easy-file",
          "partial": "Extension",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:replaceExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the filename.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e replaceFileName x (takeFileName x) == x\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "replaceFileName",
          "package": "easy-file",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#replaceFileName",
          "type": "function"
        },
        "index": {
          "description": "Set the filename Valid replaceFileName takeFileName",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "replaceFileName",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "easy-file",
          "partial": "File Name",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:replaceFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the operating system has a notion of current directories,\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetCurrentDirectory\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e changes the current\ndirectory of the calling process to \u003cem\u003edir\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe directory does not exist.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of current directory, or the\ncurrent directory cannot be dynamically changed.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe path refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that in a concurrent program, the current directory is global\nstate shared between all threads of the process.  When using\nfilesystem operations from multiple threads, it is therefore highly\nrecommended to use absolute rather than relative \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.EasyFile",
          "name": "setCurrentDirectory",
          "package": "easy-file",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "If the operating system has notion of current directories setCurrentDirectory dir changes the current directory of the calling process to dir The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The directory does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EACCES UnsupportedOperation The operating system has no notion of current directory or the current directory cannot be dynamically changed InappropriateType The path refers to an existing non-directory object ENOTDIR Note that in concurrent program the current directory is global state shared between all threads of the process When using filesystem operations from multiple threads it is therefore highly recommended to use absolute rather than relative FilePath",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "setCurrentDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "easy-file",
          "partial": "Current Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:setCurrentDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esetPermissions\u003c/a\u003e\u003c/code\u003e operation sets the\npermissions for the file or directory.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if the user is not permitted to set\n  the permissions; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the file or directory does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.EasyFile",
          "name": "setPermissions",
          "package": "easy-file",
          "signature": "FilePath -\u003e Permissions -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The setPermissions operation sets the permissions for the file or directory The operation may fail with isPermissionError if the user is not permitted to set the permissions or isDoesNotExistError if the file or directory does not exist",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "setPermissions",
          "normalized": "FilePath-\u003ePermissions-\u003eIO()",
          "package": "easy-file",
          "partial": "Permissions",
          "signature": "FilePath-\u003ePermissions-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:setPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust as \u003ccode\u003e\u003ca\u003esplitPath\u003c/a\u003e\u003c/code\u003e, but don't add the trailing slashes to each element.\n\u003c/p\u003e\u003cpre\u003e splitDirectories \"test/file\" == [\"test\",\"file\"]\n splitDirectories \"/test/file\" == [\"/\",\"test\",\"file\"]\n Valid x =\u003e joinPath (splitDirectories x) `equalFilePath` x\n splitDirectories \"\" == []\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "splitDirectories",
          "package": "easy-file",
          "signature": "FilePath -\u003e [FilePath]",
          "source": "src/System-EasyFile-FilePath.html#splitDirectories",
          "type": "function"
        },
        "index": {
          "description": "Just as splitPath but don add the trailing slashes to each element splitDirectories test file test file splitDirectories test file test file Valid joinPath splitDirectories equalFilePath splitDirectories",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "splitDirectories",
          "normalized": "FilePath-\u003e[FilePath]",
          "package": "easy-file",
          "partial": "Directories",
          "signature": "FilePath-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:splitDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path into a drive and a path.\n   On Unix, / is a Drive.\n\u003c/p\u003e\u003cpre\u003e uncurry (++) (splitDrive x) == x\n Windows: splitDrive \"file\" == (\"\",\"file\")\n Windows: splitDrive \"c:/file\" == (\"c:/\",\"file\")\n Windows: splitDrive \"\\\\\\\\shared\\\\test\" == (\"\\\\\\\\shared\\\\\",\"test\")\n Windows: splitDrive \"\\\\\\\\shared\" == (\"\\\\\\\\shared\",\"\")\n Windows: splitDrive \"\\\\\\\\?\\\\UNC\\\\shared\\\\file\" == (\"\\\\\\\\?\\\\UNC\\\\shared\\\\\",\"file\")\n Windows: splitDrive \"\\\\\\\\?\\\\UNCshared\\\\file\" == (\"\\\\\\\\?\\\\\",\"UNCshared\\\\file\")\n Windows: splitDrive \"\\\\\\\\?\\\\d:\\\\file\" == (\"\\\\\\\\?\\\\d:\\\\\",\"file\")\n Windows: splitDrive \"/d\" == (\"\",\"/d\") -- xxx\n Posix:   splitDrive \"/test\" == (\"/\",\"test\") -- xxx\n Posix:   splitDrive \"//test\" == (\"//\",\"test\")\n Posix:   splitDrive \"test/file\" == (\"\",\"test/file\")\n Posix:   splitDrive \"file\" == (\"\",\"file\")\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "splitDrive",
          "package": "easy-file",
          "signature": "FilePath -\u003e (FilePath, FilePath)",
          "source": "src/System-EasyFile-FilePath.html#splitDrive",
          "type": "function"
        },
        "index": {
          "description": "Split path into drive and path On Unix is Drive uncurry splitDrive Windows splitDrive file file Windows splitDrive file file Windows splitDrive shared test shared test Windows splitDrive shared shared Windows splitDrive UNC shared file UNC shared file Windows splitDrive UNCshared file UNCshared file Windows splitDrive file file Windows splitDrive xxx Posix splitDrive test test xxx Posix splitDrive test test Posix splitDrive test file test file Posix splitDrive file file",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "splitDrive",
          "normalized": "FilePath-\u003e(FilePath,FilePath)",
          "package": "easy-file",
          "partial": "Drive",
          "signature": "FilePath-\u003e(FilePath,FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:splitDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on the extension. \u003ccode\u003e\u003ca\u003eaddExtension\u003c/a\u003e\u003c/code\u003e is the inverse.\n\u003c/p\u003e\u003cpre\u003e uncurry (++) (splitExtension x) == x\n uncurry addExtension (splitExtension x) == x\n splitExtension \"file.txt\" == (\"file\",\".txt\")\n splitExtension \"file\" == (\"file\",\"\")\n splitExtension \"file/file.txt\" == (\"file/file\",\".txt\")\n splitExtension \"file.txt/boris\" == (\"file.txt/boris\",\"\")\n splitExtension \"file.txt/boris.ext\" == (\"file.txt/boris\",\".ext\")\n splitExtension \"file/path.txt.bob.fred\" == (\"file/path.txt.bob\",\".fred\")\n splitExtension \"file/path.txt/\" == (\"file/path.txt/\",\"\")\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "splitExtension",
          "package": "easy-file",
          "signature": "FilePath -\u003e (String, String)",
          "source": "src/System-EasyFile-FilePath.html#splitExtension",
          "type": "function"
        },
        "index": {
          "description": "Split on the extension addExtension is the inverse uncurry splitExtension uncurry addExtension splitExtension splitExtension file.txt file txt splitExtension file file splitExtension file file.txt file file txt splitExtension file.txt boris file.txt boris splitExtension file.txt boris.ext file.txt boris ext splitExtension file path.txt.bob.fred file path.txt.bob fred splitExtension file path.txt file path.txt",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "splitExtension",
          "normalized": "FilePath-\u003e(String,String)",
          "package": "easy-file",
          "partial": "Extension",
          "signature": "FilePath-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:splitExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on all extensions\n\u003c/p\u003e\u003cpre\u003e splitExtensions \"file.tar.gz\" == (\"file\",\".tar.gz\")\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "splitExtensions",
          "package": "easy-file",
          "signature": "FilePath -\u003e (FilePath, String)",
          "source": "src/System-EasyFile-FilePath.html#splitExtensions",
          "type": "function"
        },
        "index": {
          "description": "Split on all extensions splitExtensions file.tar.gz file tar.gz",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "splitExtensions",
          "normalized": "FilePath-\u003e(FilePath,String)",
          "package": "easy-file",
          "partial": "Extensions",
          "signature": "FilePath-\u003e(FilePath,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:splitExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a filename into directory and file. \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e is the inverse.\n\u003c/p\u003e\u003cpre\u003e uncurry (++) (splitFileName x) == x\n Valid x =\u003e uncurry combine (splitFileName x) == x\n splitFileName \"file/bob.txt\" == (\"file/\", \"bob.txt\")\n splitFileName \"file/\" == (\"file/\", \"\")\n splitFileName \"bob\" == (\"\", \"bob\")\n Posix:   splitFileName \"/\" == (\"/\",\"\")\n Windows: splitFileName \"c:\" == (\"c:\",\"\")\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "splitFileName",
          "package": "easy-file",
          "signature": "FilePath -\u003e (String, String)",
          "source": "src/System-EasyFile-FilePath.html#splitFileName",
          "type": "function"
        },
        "index": {
          "description": "Split filename into directory and file combine is the inverse uncurry splitFileName Valid uncurry combine splitFileName splitFileName file bob.txt file bob.txt splitFileName file file splitFileName bob bob Posix splitFileName Windows splitFileName",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "splitFileName",
          "normalized": "FilePath-\u003e(String,String)",
          "package": "easy-file",
          "partial": "File Name",
          "signature": "FilePath-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:splitFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path by the directory separator.\n\u003c/p\u003e\u003cpre\u003e concat (splitPath x) == x\n splitPath \"test//item/\" == [\"test//\",\"item/\"]\n splitPath \"test/item/file\" == [\"test/\",\"item/\",\"file\"]\n splitPath \"\" == []\n Windows: splitPath \"c:/test/path\" == [\"c:/\",\"test/\",\"path\"]\n Posix:   splitPath \"/file/test\" == [\"/\",\"file/\",\"test\"]\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "splitPath",
          "package": "easy-file",
          "signature": "FilePath -\u003e [FilePath]",
          "source": "src/System-EasyFile-FilePath.html#splitPath",
          "type": "function"
        },
        "index": {
          "description": "Split path by the directory separator concat splitPath splitPath test item test item splitPath test item file test item file splitPath Windows splitPath test path test path Posix splitPath file test file test",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "splitPath",
          "normalized": "FilePath-\u003e[FilePath]",
          "package": "easy-file",
          "partial": "Path",
          "signature": "FilePath-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:splitPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the base name, without an extension or path.\n\u003c/p\u003e\u003cpre\u003e takeBaseName \"file/test.txt\" == \"test\"\n takeBaseName \"dave.ext\" == \"dave\"\n takeBaseName \"\" == \"\"\n takeBaseName \"test\" == \"test\"\n takeBaseName (addTrailingPathSeparator x) == \"\"\n takeBaseName \"file/file.tar.gz\" == \"file.tar\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "takeBaseName",
          "package": "easy-file",
          "signature": "FilePath -\u003e String",
          "source": "src/System-EasyFile-FilePath.html#takeBaseName",
          "type": "function"
        },
        "index": {
          "description": "Get the base name without an extension or path takeBaseName file test.txt test takeBaseName dave.ext dave takeBaseName takeBaseName test test takeBaseName addTrailingPathSeparator takeBaseName file file.tar.gz file.tar",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "takeBaseName",
          "normalized": "FilePath-\u003eString",
          "package": "easy-file",
          "partial": "Base Name",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:takeBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the directory name, move up one level.\n\u003c/p\u003e\u003cpre\u003e           takeDirectory x `isPrefixOf` x\n           takeDirectory \"foo\" == \"\"\n           takeDirectory \"/foo/bar/baz\" == \"/foo/bar\"\n           takeDirectory \"/foo/bar/baz/\" == \"/foo/bar/baz\"\n           takeDirectory \"foo/bar/baz\" == \"foo/bar\"\n Windows:  takeDirectory \"foo\\\\bar\\\\\\\\\" == \"foo\\\\bar\" -- xxx\n Windows:  takeDirectory \"C:/\" == \"C:/\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "takeDirectory",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#takeDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the directory name move up one level takeDirectory isPrefixOf takeDirectory foo takeDirectory foo bar baz foo bar takeDirectory foo bar baz foo bar baz takeDirectory foo bar baz foo bar Windows takeDirectory foo bar foo bar xxx Windows takeDirectory",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "takeDirectory",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "Directory",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:takeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the drive from a filepath.\n\u003c/p\u003e\u003cpre\u003e takeDrive x == fst (splitDrive x)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "takeDrive",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#takeDrive",
          "type": "function"
        },
        "index": {
          "description": "Get the drive from filepath takeDrive fst splitDrive",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "takeDrive",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "Drive",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:takeDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the extension of a file, returns \u003ccode\u003e\"\"\u003c/code\u003e for no extension, \u003ccode\u003e.ext\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cpre\u003e takeExtension x == snd (splitExtension x)\n Valid x =\u003e takeExtension (addExtension x \"ext\") == \".ext\"\n Valid x =\u003e takeExtension (replaceExtension x \"ext\") == \".ext\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "takeExtension",
          "package": "easy-file",
          "signature": "FilePath -\u003e String",
          "source": "src/System-EasyFile-FilePath.html#takeExtension",
          "type": "function"
        },
        "index": {
          "description": "Get the extension of file returns for no extension ext otherwise takeExtension snd splitExtension Valid takeExtension addExtension ext ext Valid takeExtension replaceExtension ext ext",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "takeExtension",
          "normalized": "FilePath-\u003eString",
          "package": "easy-file",
          "partial": "Extension",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:takeExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all extensions\n\u003c/p\u003e\u003cpre\u003e takeExtensions \"file.tar.gz\" == \".tar.gz\"\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "takeExtensions",
          "package": "easy-file",
          "signature": "FilePath -\u003e String",
          "source": "src/System-EasyFile-FilePath.html#takeExtensions",
          "type": "function"
        },
        "index": {
          "description": "Get all extensions takeExtensions file.tar.gz tar.gz",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "takeExtensions",
          "normalized": "FilePath-\u003eString",
          "package": "easy-file",
          "partial": "Extensions",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:takeExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file name.\n\u003c/p\u003e\u003cpre\u003e takeFileName \"test/\" == \"\"\n takeFileName x `isSuffixOf` x\n takeFileName x == snd (splitFileName x)\n Valid x =\u003e takeFileName (replaceFileName x \"fred\") == \"fred\"\n Valid x =\u003e takeFileName (x \u003c/\u003e \"fred\") == \"fred\"\n Valid x =\u003e isRelative (takeFileName x)\n\u003c/pre\u003e",
          "module": "System.EasyFile",
          "name": "takeFileName",
          "package": "easy-file",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-EasyFile-FilePath.html#takeFileName",
          "type": "function"
        },
        "index": {
          "description": "Get the file name takeFileName test takeFileName isSuffixOf takeFileName snd splitFileName Valid takeFileName replaceFileName fred fred Valid takeFileName fred fred Valid isRelative takeFileName",
          "hierarchy": "System EasyFile",
          "module": "System.EasyFile",
          "name": "takeFileName",
          "normalized": "FilePath-\u003eFilePath",
          "package": "easy-file",
          "partial": "File Name",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easy-file/docs/System-EasyFile.html#v:takeFileName"
      }
    }
  ]
]