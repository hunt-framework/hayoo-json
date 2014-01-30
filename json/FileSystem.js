[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#",
      "description": {
        "fct-module": "System.FileSystem.Across",
        "fct-package": "FileSystem",
        "fct-signature": "module",
        "fct-source": "src/System-FileSystem-Across.html",
        "fct-type": "module",
        "title": "Across"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Across",
        "module": "System.FileSystem.Across",
        "name": "Across",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Across",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:buildFileSystem",
      "description": {
        "fct-module": "System.FileSystem.Across",
        "fct-package": "FileSystem",
        "fct-signature": "[Path] -\u003e FileSystem",
        "fct-source": "src/System-FileSystem-Across.html#buildFileSystem",
        "fct-type": "function",
        "title": "buildFileSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Across",
        "module": "System.FileSystem.Across",
        "name": "buildFileSystem",
        "normalized": "[Path]-\u003eFileSystem",
        "package": "FileSystem",
        "partial": "File System",
        "signature": "[Path]-\u003eFileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:fileSystemList",
      "description": {
        "fct-module": "System.FileSystem.Across",
        "fct-package": "FileSystem",
        "fct-signature": "FileSystem -\u003e [(Either DirName File, FilePath)]",
        "fct-source": "src/System-FileSystem-Across.html#fileSystemList",
        "fct-type": "function",
        "title": "fileSystemList"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Across",
        "module": "System.FileSystem.Across",
        "name": "fileSystemList",
        "normalized": "FileSystem-\u003e[(Either DirName File,FilePath)]",
        "package": "FileSystem",
        "partial": "System List",
        "signature": "FileSystem-\u003e[(Either DirName File,FilePath)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:foldFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eFolding function for \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Across",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath-\u003e Either (FilePath -\u003e t -\u003e Either DirName File -\u003e t) (FilePath -\u003e Either DirName File -\u003e t -\u003e t)-\u003e t-\u003e FileSystem-\u003e t",
        "fct-type": "function",
        "title": "foldFileSystem"
      },
      "index": {
        "description": "Folding function for FileSystem",
        "hierarchy": "System FileSystem Across",
        "module": "System.FileSystem.Across",
        "name": "foldFileSystem",
        "normalized": "FilePath-\u003eEither(FilePath-\u003ea-\u003eEither DirName File-\u003ea)(FilePath-\u003eEither DirName File-\u003ea-\u003ea)-\u003ea-\u003eFileSystem-\u003ea",
        "package": "FileSystem",
        "partial": "File System",
        "signature": "FilePath-\u003eEither(FilePath-\u003et-\u003eEither DirName File-\u003et)(FilePath-\u003eEither DirName File-\u003et-\u003et)-\u003et-\u003eFileSystem-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:foldFiles",
      "description": {
        "fct-descr": "\u003cp\u003eAn usage of \u003ccode\u003e\u003ca\u003efoldFileSystem\u003c/a\u003e\u003c/code\u003e, folding only \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003es, ignoring the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e where they are.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Across",
        "fct-package": "FileSystem",
        "fct-signature": "Either (t -\u003e File -\u003e t) (File -\u003e t -\u003e t) -\u003e t -\u003e FileSystem -\u003e t",
        "fct-source": "src/System-FileSystem-Across.html#foldFiles",
        "fct-type": "function",
        "title": "foldFiles"
      },
      "index": {
        "description": "An usage of foldFileSystem folding only File ignoring the FilePath where they are",
        "hierarchy": "System FileSystem Across",
        "module": "System.FileSystem.Across",
        "name": "foldFiles",
        "normalized": "Either(a-\u003eFile-\u003ea)(File-\u003ea-\u003ea)-\u003ea-\u003eFileSystem-\u003ea",
        "package": "FileSystem",
        "partial": "Files",
        "signature": "Either(t-\u003eFile-\u003et)(File-\u003et-\u003et)-\u003et-\u003eFileSystem-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:mapFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eMap a pair of applications (one over \u003ccode\u003e\u003ca\u003eDirName\u003c/a\u003e\u003c/code\u003e, and the other over \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e) through a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Across",
        "fct-package": "FileSystem",
        "fct-signature": "InApp DirName -\u003e InApp File -\u003e InApp FileSystem",
        "fct-source": "src/System-FileSystem-Across.html#mapFileSystem",
        "fct-type": "function",
        "title": "mapFileSystem"
      },
      "index": {
        "description": "Map pair of applications one over DirName and the other over File through FileSystem",
        "hierarchy": "System FileSystem Across",
        "module": "System.FileSystem.Across",
        "name": "mapFileSystem",
        "normalized": "InApp DirName-\u003eInApp File-\u003eInApp FileSystem",
        "package": "FileSystem",
        "partial": "File System",
        "signature": "InApp DirName-\u003eInApp File-\u003eInApp FileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#",
      "description": {
        "fct-module": "System.FileSystem.Class",
        "fct-package": "FileSystem",
        "fct-signature": "module",
        "fct-source": "src/System-FileSystem-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Class",
        "module": "System.FileSystem.Class",
        "name": "Class",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#t:FSMonad",
      "description": {
        "fct-module": "System.FileSystem.Class",
        "fct-package": "FileSystem",
        "fct-signature": "class",
        "fct-source": "src/System-FileSystem-Class.html#FSMonad",
        "fct-type": "class",
        "title": "FSMonad"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Class",
        "module": "System.FileSystem.Class",
        "name": "FSMonad",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FSMonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#v:apgetFS",
      "description": {
        "fct-module": "System.FileSystem.Class",
        "fct-package": "FileSystem",
        "fct-signature": "(FSState -\u003e a) -\u003e m a",
        "fct-source": "src/System-FileSystem-Class.html#apgetFS",
        "fct-type": "function",
        "title": "apgetFS"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Class",
        "module": "System.FileSystem.Class",
        "name": "apgetFS",
        "normalized": "(FSState-\u003ea)-\u003eb a",
        "package": "FileSystem",
        "partial": "FS",
        "signature": "(FSState-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#v:getFS",
      "description": {
        "fct-module": "System.FileSystem.Class",
        "fct-package": "FileSystem",
        "fct-signature": "m FSState",
        "fct-source": "src/System-FileSystem-Class.html#getFS",
        "fct-type": "method",
        "title": "getFS"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Class",
        "module": "System.FileSystem.Class",
        "name": "getFS",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#v:modifyFS",
      "description": {
        "fct-module": "System.FileSystem.Class",
        "fct-package": "FileSystem",
        "fct-signature": "InApp FSState -\u003e m ()",
        "fct-source": "src/System-FileSystem-Class.html#modifyFS",
        "fct-type": "function",
        "title": "modifyFS"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Class",
        "module": "System.FileSystem.Class",
        "name": "modifyFS",
        "normalized": "InApp FSState-\u003ea()",
        "package": "FileSystem",
        "partial": "FS",
        "signature": "InApp FSState-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#v:putFS",
      "description": {
        "fct-module": "System.FileSystem.Class",
        "fct-package": "FileSystem",
        "fct-signature": "FSState -\u003e m ()",
        "fct-source": "src/System-FileSystem-Class.html#putFS",
        "fct-type": "method",
        "title": "putFS"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Class",
        "module": "System.FileSystem.Class",
        "name": "putFS",
        "normalized": "FSState-\u003ea()",
        "package": "FileSystem",
        "partial": "FS",
        "signature": "FSState-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "module",
        "fct-source": "src/System-FileSystem-Computations.html",
        "fct-type": "module",
        "title": "Computations"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "Computations",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Computations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:checkDExist",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e m Bool",
        "fct-source": "src/System-FileSystem-Computations.html#checkDExist",
        "fct-type": "function",
        "title": "checkDExist"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "checkDExist",
        "normalized": "DirPath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "DExist",
        "signature": "DirPath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:checkFExist",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "(DirPath, FileName) -\u003e m Bool",
        "fct-source": "src/System-FileSystem-Computations.html#checkFExist",
        "fct-type": "function",
        "title": "checkFExist"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "checkFExist",
        "normalized": "(DirPath,FileName)-\u003ea Bool",
        "package": "FileSystem",
        "partial": "FExist",
        "signature": "(DirPath,FileName)-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:getDirCnt",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e m (Maybe ([DirName], [FileName]))",
        "fct-source": "src/System-FileSystem-Computations.html#getDirCnt",
        "fct-type": "function",
        "title": "getDirCnt"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "getDirCnt",
        "normalized": "DirPath-\u003ea(Maybe([DirName],[FileName]))",
        "package": "FileSystem",
        "partial": "Dir Cnt",
        "signature": "DirPath-\u003em(Maybe([DirName],[FileName]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:getFl",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e m (Maybe File)",
        "fct-source": "src/System-FileSystem-Computations.html#getFl",
        "fct-type": "function",
        "title": "getFl"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "getFl",
        "normalized": "FPath-\u003ea(Maybe File)",
        "package": "FileSystem",
        "partial": "Fl",
        "signature": "FPath-\u003em(Maybe File)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:newDir",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e m ()",
        "fct-source": "src/System-FileSystem-Computations.html#newDir",
        "fct-type": "function",
        "title": "newDir"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "newDir",
        "normalized": "DirPath-\u003ea()",
        "package": "FileSystem",
        "partial": "Dir",
        "signature": "DirPath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:putPath",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "Path -\u003e m ()",
        "fct-source": "src/System-FileSystem-Computations.html#putPath",
        "fct-type": "function",
        "title": "putPath"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "putPath",
        "normalized": "Path-\u003ea()",
        "package": "FileSystem",
        "partial": "Path",
        "signature": "Path-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rmvDir",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e m ()",
        "fct-source": "src/System-FileSystem-Computations.html#rmvDir",
        "fct-type": "function",
        "title": "rmvDir"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "rmvDir",
        "normalized": "DirPath-\u003ea()",
        "package": "FileSystem",
        "partial": "Dir",
        "signature": "DirPath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rmvFile",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e m ()",
        "fct-source": "src/System-FileSystem-Computations.html#rmvFile",
        "fct-type": "function",
        "title": "rmvFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "rmvFile",
        "normalized": "FPath-\u003ea()",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FPath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rmvPath",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "Path -\u003e m ()",
        "fct-source": "src/System-FileSystem-Computations.html#rmvPath",
        "fct-type": "function",
        "title": "rmvPath"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "rmvPath",
        "normalized": "Path-\u003ea()",
        "package": "FileSystem",
        "partial": "Path",
        "signature": "Path-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rnmDir",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "(DirPath, DirPath) -\u003e m Bool",
        "fct-source": "src/System-FileSystem-Computations.html#rnmDir",
        "fct-type": "function",
        "title": "rnmDir"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "rnmDir",
        "normalized": "(DirPath,DirPath)-\u003ea Bool",
        "package": "FileSystem",
        "partial": "Dir",
        "signature": "(DirPath,DirPath)-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rnmFile",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "(FPath, FPath) -\u003e m Bool",
        "fct-source": "src/System-FileSystem-Computations.html#rnmFile",
        "fct-type": "function",
        "title": "rnmFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "rnmFile",
        "normalized": "(FPath,FPath)-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File",
        "signature": "(FPath,FPath)-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rnmPath",
      "description": {
        "fct-module": "System.FileSystem.Computations",
        "fct-package": "FileSystem",
        "fct-signature": "([String], [String], Bool) -\u003e m Bool",
        "fct-source": "src/System-FileSystem-Computations.html#rnmPath",
        "fct-type": "function",
        "title": "rnmPath"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Computations",
        "module": "System.FileSystem.Computations",
        "name": "rnmPath",
        "normalized": "([String],[String],Bool)-\u003ea Bool",
        "package": "FileSystem",
        "partial": "Path",
        "signature": "([String],[String],Bool)-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#",
      "description": {
        "fct-module": "System.FileSystem.IO",
        "fct-package": "FileSystem",
        "fct-signature": "module",
        "fct-source": "src/System-FileSystem-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem IO",
        "module": "System.FileSystem.IO",
        "name": "IO",
        "normalized": "",
        "package": "FileSystem",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:capture",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a complete \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e from the current working directory.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.IO",
        "fct-package": "FileSystem",
        "fct-signature": "IO FileSystem",
        "fct-source": "src/System-FileSystem-IO.html#capture",
        "fct-type": "function",
        "title": "capture"
      },
      "index": {
        "description": "Create complete FileSystem from the current working directory",
        "hierarchy": "System FileSystem IO",
        "module": "System.FileSystem.IO",
        "name": "capture",
        "normalized": "",
        "package": "FileSystem",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:captureDir",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a complete \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e from an existing directory.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.IO",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e IO FileSystem",
        "fct-source": "src/System-FileSystem-IO.html#captureDir",
        "fct-type": "function",
        "title": "captureDir"
      },
      "index": {
        "description": "Create complete FileSystem from an existing directory",
        "hierarchy": "System FileSystem IO",
        "module": "System.FileSystem.IO",
        "name": "captureDir",
        "normalized": "FilePath-\u003eIO FileSystem",
        "package": "FileSystem",
        "partial": "Dir",
        "signature": "FilePath-\u003eIO FileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erelease fp fs\u003c/code\u003e write in \u003ccode\u003efp\u003c/code\u003e the \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.IO",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e FileSystem -\u003e IO ()",
        "fct-source": "src/System-FileSystem-IO.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "release fp fs write in fp the FileSystem fs",
        "hierarchy": "System FileSystem IO",
        "module": "System.FileSystem.IO",
        "name": "release",
        "normalized": "FilePath-\u003eFileSystem-\u003eIO()",
        "package": "FileSystem",
        "partial": "",
        "signature": "FilePath-\u003eFileSystem-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:releaseEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereleaseEnd fp c fs\u003c/code\u003e write in \u003ccode\u003efp\u003c/code\u003e the \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efs\u003c/code\u003e, and execute \u003ccode\u003ec\u003c/code\u003e at the end.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.IO",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e IO a -\u003e FileSystem -\u003e IO a",
        "fct-source": "src/System-FileSystem-IO.html#releaseEnd",
        "fct-type": "function",
        "title": "releaseEnd"
      },
      "index": {
        "description": "releaseEnd fp fs write in fp the FileSystem fs and execute at the end",
        "hierarchy": "System FileSystem IO",
        "module": "System.FileSystem.IO",
        "name": "releaseEnd",
        "normalized": "FilePath-\u003eIO a-\u003eFileSystem-\u003eIO a",
        "package": "FileSystem",
        "partial": "End",
        "signature": "FilePath-\u003eIO a-\u003eFileSystem-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:releaseHere",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereleaseHere fs\u003c/code\u003e write in the current working directory the \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.IO",
        "fct-package": "FileSystem",
        "fct-signature": "FileSystem -\u003e IO ()",
        "fct-source": "src/System-FileSystem-IO.html#releaseHere",
        "fct-type": "function",
        "title": "releaseHere"
      },
      "index": {
        "description": "releaseHere fs write in the current working directory the FileSystem fs",
        "hierarchy": "System FileSystem IO",
        "module": "System.FileSystem.IO",
        "name": "releaseHere",
        "normalized": "FileSystem-\u003eIO()",
        "package": "FileSystem",
        "partial": "Here",
        "signature": "FileSystem-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:takeFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a \"real world\" file.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.IO",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e IO File",
        "fct-source": "src/System-FileSystem-IO.html#takeFile",
        "fct-type": "function",
        "title": "takeFile"
      },
      "index": {
        "description": "Create File from FilePath to real world file",
        "hierarchy": "System FileSystem IO",
        "module": "System.FileSystem.IO",
        "name": "takeFile",
        "normalized": "FilePath-\u003eIO File",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003eIO File"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass instances for several types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.FileSystem.Instances",
        "fct-package": "FileSystem",
        "fct-signature": "module",
        "fct-source": "src/System-FileSystem-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Class instances for several types",
        "hierarchy": "System FileSystem Instances",
        "module": "System.FileSystem.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level operators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.FileSystem.Operators",
        "fct-package": "FileSystem",
        "fct-signature": "module",
        "fct-source": "src/System-FileSystem-Operators.html",
        "fct-type": "module",
        "title": "Operators"
      },
      "index": {
        "description": "Low-level operators",
        "hierarchy": "System FileSystem Operators",
        "module": "System.FileSystem.Operators",
        "name": "Operators",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Operators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-45-:",
      "description": {
        "fct-descr": "\u003cp\u003eSubstraction operator. Search and remove a file/directory from a file system.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Operators",
        "fct-package": "FileSystem",
        "fct-signature": "Path -\u003e FileSystem -\u003e FileSystem",
        "fct-source": "src/System-FileSystem-Operators.html#-%3A",
        "fct-type": "function",
        "title": "(-:)"
      },
      "index": {
        "description": "Substraction operator Search and remove file directory from file system",
        "hierarchy": "System FileSystem Operators",
        "module": "System.FileSystem.Operators",
        "name": "(-:) -:",
        "normalized": "Path-\u003eFileSystem-\u003eFileSystem",
        "package": "FileSystem",
        "partial": "",
        "signature": "Path-\u003eFileSystem-\u003eFileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-60--45-:",
      "description": {
        "fct-descr": "\u003cp\u003eSubstitution operator. \u003cem\u003eProvisional implementation\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Operators",
        "fct-package": "FileSystem",
        "fct-signature": "([String], [String], Bool) -\u003e FileSystem -\u003e (FileSystem, Bool)",
        "fct-source": "src/System-FileSystem-Operators.html#%3C-%3A",
        "fct-type": "function",
        "title": "(\u003c-:)"
      },
      "index": {
        "description": "Substitution operator Provisional implementation",
        "hierarchy": "System FileSystem Operators",
        "module": "System.FileSystem.Operators",
        "name": "(\u003c-:) \u003c-:",
        "normalized": "([String],[String],Bool)-\u003eFileSystem-\u003e(FileSystem,Bool)",
        "package": "FileSystem",
        "partial": "",
        "signature": "([String],[String],Bool)-\u003eFileSystem-\u003e(FileSystem,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-60--60-:",
      "description": {
        "fct-descr": "\u003cp\u003eOperator for addition of new file system elements (\u003ccode\u003e\u003ca\u003eFSE\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Operators",
        "fct-package": "FileSystem",
        "fct-signature": "FSE -\u003e FileSystem -\u003e FileSystem",
        "fct-source": "src/System-FileSystem-Operators.html#%3C%3C%3A",
        "fct-type": "function",
        "title": "(\u003c\u003c:)"
      },
      "index": {
        "description": "Operator for addition of new file system elements FSE",
        "hierarchy": "System FileSystem Operators",
        "module": "System.FileSystem.Operators",
        "name": "(\u003c\u003c:) \u003c\u003c:",
        "normalized": "FSE-\u003eFileSystem-\u003eFileSystem",
        "package": "FileSystem",
        "partial": "",
        "signature": "FSE-\u003eFileSystem-\u003eFileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-60-:",
      "description": {
        "fct-descr": "\u003cp\u003eOperator for addition of new files/directories.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Operators",
        "fct-package": "FileSystem",
        "fct-signature": "Path -\u003e FileSystem -\u003e FileSystem",
        "fct-source": "src/System-FileSystem-Operators.html#%3C%3A",
        "fct-type": "function",
        "title": "(\u003c:)"
      },
      "index": {
        "description": "Operator for addition of new files directories",
        "hierarchy": "System FileSystem Operators",
        "module": "System.FileSystem.Operators",
        "name": "(\u003c:) \u003c:",
        "normalized": "Path-\u003eFileSystem-\u003eFileSystem",
        "package": "FileSystem",
        "partial": "",
        "signature": "Path-\u003eFileSystem-\u003eFileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-61-:",
      "description": {
        "fct-descr": "\u003cp\u003eDescension operator. Extract the file system of an immediate subdirectory.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Operators",
        "fct-package": "FileSystem",
        "fct-signature": "DirName -\u003e FileSystem -\u003e Maybe FileSystem",
        "fct-source": "src/System-FileSystem-Operators.html#%3D%3A",
        "fct-type": "function",
        "title": "(=:)"
      },
      "index": {
        "description": "Descension operator Extract the file system of an immediate subdirectory",
        "hierarchy": "System FileSystem Operators",
        "module": "System.FileSystem.Operators",
        "name": "(=:) =:",
        "normalized": "DirName-\u003eFileSystem-\u003eMaybe FileSystem",
        "package": "FileSystem",
        "partial": "",
        "signature": "DirName-\u003eFileSystem-\u003eMaybe FileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-63-:",
      "description": {
        "fct-descr": "\u003cp\u003eOperator for search a file.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Operators",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e FileSystem -\u003e Maybe File",
        "fct-source": "src/System-FileSystem-Operators.html#%3F%3A",
        "fct-type": "function",
        "title": "(?:)"
      },
      "index": {
        "description": "Operator for search file",
        "hierarchy": "System FileSystem Operators",
        "module": "System.FileSystem.Operators",
        "name": "(?:) ?:",
        "normalized": "FPath-\u003eFileSystem-\u003eMaybe File",
        "package": "FileSystem",
        "partial": "",
        "signature": "FPath-\u003eFileSystem-\u003eMaybe File"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#",
      "description": {
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "module",
        "fct-source": "src/System-FileSystem-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "Types",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:DirName",
      "description": {
        "fct-descr": "\u003cp\u003eA name for a directory.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#DirName",
        "fct-type": "type",
        "title": "DirName"
      },
      "index": {
        "description": "name for directory",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "DirName",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Dir Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:DirPath",
      "description": {
        "fct-descr": "\u003cp\u003eA list-based directory path.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#DirPath",
        "fct-type": "type",
        "title": "DirPath"
      },
      "index": {
        "description": "list-based directory path",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "DirPath",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Dir Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FPath",
      "description": {
        "fct-descr": "\u003cp\u003eA file path, composed by the path of the directory which contains it,\n and its file name.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FPath",
        "fct-type": "type",
        "title": "FPath"
      },
      "index": {
        "description": "file path composed by the path of the directory which contains it and its file name",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FPath",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FS",
      "description": {
        "fct-descr": "\u003cp\u003eApplication of the \u003ccode\u003e\u003ca\u003eFST\u003c/a\u003e\u003c/code\u003e monad transformer to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FS",
        "fct-type": "type",
        "title": "FS"
      },
      "index": {
        "description": "Application of the FST monad transformer to the Identity monad",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FS",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FSE",
      "description": {
        "fct-descr": "\u003cp\u003eFile System Element: Each one of the elements in a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FSE",
        "fct-type": "type",
        "title": "FSE"
      },
      "index": {
        "description": "File System Element Each one of the elements in FileSystem",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FSE",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FSState",
      "description": {
        "fct-descr": "\u003cp\u003eThe state of file system computations.\n\u003c/p\u003e\u003cp\u003eCurrently, a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e structure.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FSState",
        "fct-type": "type",
        "title": "FSState"
      },
      "index": {
        "description": "The state of file system computations Currently FileSystem structure",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FSState",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FSState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FST",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic transformer which adds a \u003ccode\u003e\u003ca\u003eFSState\u003c/a\u003e\u003c/code\u003e environment.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "newtype",
        "fct-source": "src/System-FileSystem-Types.html#FST",
        "fct-type": "newtype",
        "title": "FST"
      },
      "index": {
        "description": "Monadic transformer which adds FSState environment",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FST",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:File",
      "description": {
        "fct-descr": "\u003cp\u003eA complete file.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "data",
        "fct-source": "src/System-FileSystem-Types.html#File",
        "fct-type": "data",
        "title": "File"
      },
      "index": {
        "description": "complete file",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "File",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FileCnt",
      "description": {
        "fct-descr": "\u003cp\u003eThe content of a file. Stored in a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FileCnt",
        "fct-type": "type",
        "title": "FileCnt"
      },
      "index": {
        "description": "The content of file Stored in ByteString",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FileCnt",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File Cnt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FileData",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about the content of a file.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "data",
        "fct-source": "src/System-FileSystem-Types.html#FileData",
        "fct-type": "data",
        "title": "FileData"
      },
      "index": {
        "description": "Information about the content of file",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FileData",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FileName",
      "description": {
        "fct-descr": "\u003cp\u003eA name for a file.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FileName",
        "fct-type": "type",
        "title": "FileName"
      },
      "index": {
        "description": "name for file",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FileName",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eThe file system structure. It stores a directory with files and subdirectories.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "newtype",
        "fct-source": "src/System-FileSystem-Types.html#FileSystem",
        "fct-type": "newtype",
        "title": "FileSystem"
      },
      "index": {
        "description": "The file system structure It stores directory with files and subdirectories",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FileSystem",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:InApp",
      "description": {
        "fct-descr": "\u003cp\u003eInternal Application: An application from somewhere over itself.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#InApp",
        "fct-type": "type",
        "title": "InApp"
      },
      "index": {
        "description": "Internal Application An application from somewhere over itself",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "InApp",
        "normalized": "",
        "package": "FileSystem",
        "partial": "In App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA path to a possible \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "data",
        "fct-source": "src/System-FileSystem-Types.html#Path",
        "fct-type": "data",
        "title": "Path"
      },
      "index": {
        "description": "path to possible File",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "Path",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:Directory",
      "description": {
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "Directory",
        "fct-source": "src/System-FileSystem-Types.html#FileSystem",
        "fct-type": "function",
        "title": "Directory"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "Directory",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:FD",
      "description": {
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FD",
        "fct-source": "src/System-FileSystem-Types.html#FileData",
        "fct-type": "function",
        "title": "FD"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "FD",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:File",
      "description": {
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "File",
        "fct-source": "src/System-FileSystem-Types.html#File",
        "fct-type": "function",
        "title": "File"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "File",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:Path",
      "description": {
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "Path",
        "fct-source": "src/System-FileSystem-Types.html#Path",
        "fct-type": "function",
        "title": "Path"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "Path",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:WrapFST",
      "description": {
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "WrapFST",
        "fct-source": "src/System-FileSystem-Types.html#FST",
        "fct-type": "function",
        "title": "WrapFST"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "WrapFST",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Wrap FST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:dirCnt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "[FSE]",
        "fct-source": "src/System-FileSystem-Types.html#FileSystem",
        "fct-type": "function",
        "title": "dirCnt"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "dirCnt",
        "normalized": "[FSE]",
        "package": "FileSystem",
        "partial": "Cnt",
        "signature": "[FSE]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:emptyFD",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty file data.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FileData",
        "fct-source": "src/System-FileSystem-Types.html#emptyFD",
        "fct-type": "function",
        "title": "emptyFD"
      },
      "index": {
        "description": "An empty file data",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "emptyFD",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:emptyFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty file system.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FileSystem",
        "fct-source": "src/System-FileSystem-Types.html#emptyFileSystem",
        "fct-type": "function",
        "title": "emptyFileSystem"
      },
      "index": {
        "description": "An empty file system",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "emptyFileSystem",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:fromDirPath",
      "description": {
        "fct-descr": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eDirPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e FilePath",
        "fct-source": "src/System-FileSystem-Types.html#fromDirPath",
        "fct-type": "function",
        "title": "fromDirPath"
      },
      "index": {
        "description": "Translation between DirPath and FilePath",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "fromDirPath",
        "normalized": "DirPath-\u003eFilePath",
        "package": "FileSystem",
        "partial": "Dir Path",
        "signature": "DirPath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:fromFPath",
      "description": {
        "fct-descr": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eFPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e FilePath",
        "fct-source": "src/System-FileSystem-Types.html#fromFPath",
        "fct-type": "function",
        "title": "fromFPath"
      },
      "index": {
        "description": "Translation between FPath and FilePath",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "fromFPath",
        "normalized": "FPath-\u003eFilePath",
        "package": "FileSystem",
        "partial": "FPath",
        "signature": "FPath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:getCnt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FileCnt",
        "fct-source": "src/System-FileSystem-Types.html#FileData",
        "fct-type": "function",
        "title": "getCnt"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "getCnt",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Cnt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:getFD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FileData",
        "fct-source": "src/System-FileSystem-Types.html#File",
        "fct-type": "function",
        "title": "getFD"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "getFD",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:getFN",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FileName",
        "fct-source": "src/System-FileSystem-Types.html#File",
        "fct-type": "function",
        "title": "getFN"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "getFN",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:getLmt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "ClockTime",
        "fct-source": "src/System-FileSystem-Types.html#FileData",
        "fct-type": "function",
        "title": "getLmt"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "getLmt",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Lmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:isFilePath",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e contents a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "Path -\u003e Bool",
        "fct-source": "src/System-FileSystem-Types.html#isFilePath",
        "fct-type": "function",
        "title": "isFilePath"
      },
      "index": {
        "description": "Check if Path contents File",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "isFilePath",
        "normalized": "Path-\u003eBool",
        "package": "FileSystem",
        "partial": "File Path",
        "signature": "Path-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:modDirCnt",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function over a list of \u003ccode\u003e\u003ca\u003eFSE\u003c/a\u003e\u003c/code\u003e (File System Elements)\n to a function over \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "InApp [FSE] -\u003e InApp FileSystem",
        "fct-source": "src/System-FileSystem-Types.html#modDirCnt",
        "fct-type": "function",
        "title": "modDirCnt"
      },
      "index": {
        "description": "Lift function over list of FSE File System Elements to function over FileSystem",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "modDirCnt",
        "normalized": "InApp[FSE]-\u003eInApp FileSystem",
        "package": "FileSystem",
        "partial": "Dir Cnt",
        "signature": "InApp[FSE]-\u003eInApp FileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:pathFile",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "Maybe File",
        "fct-source": "src/System-FileSystem-Types.html#Path",
        "fct-type": "function",
        "title": "pathFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "pathFile",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:pathList",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath",
        "fct-source": "src/System-FileSystem-Types.html#Path",
        "fct-type": "function",
        "title": "pathList"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "pathList",
        "normalized": "",
        "package": "FileSystem",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:runFS",
      "description": {
        "fct-descr": "\u003cp\u003eJust a composition of \u003ccode\u003e\u003ca\u003erunIdentity\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunFST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FS a -\u003e FSState -\u003e (a, FSState)",
        "fct-source": "src/System-FileSystem-Types.html#runFS",
        "fct-type": "function",
        "title": "runFS"
      },
      "index": {
        "description": "Just composition of runIdentity and runFST",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "runFS",
        "normalized": "FS a-\u003eFSState-\u003e(a,FSState)",
        "package": "FileSystem",
        "partial": "FS",
        "signature": "FS a-\u003eFSState-\u003e(a,FSState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:runFST",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eFST\u003c/a\u003e\u003c/code\u003e computation, given an initial state.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FST m a -\u003e FSState -\u003e m (a, FSState)",
        "fct-source": "src/System-FileSystem-Types.html#runFST",
        "fct-type": "function",
        "title": "runFST"
      },
      "index": {
        "description": "Run an FST computation given an initial state",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "runFST",
        "normalized": "FST a b-\u003eFSState-\u003ea(b,FSState)",
        "package": "FileSystem",
        "partial": "FST",
        "signature": "FST m a-\u003eFSState-\u003em(a,FSState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:toDirPath",
      "description": {
        "fct-descr": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDirPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e DirPath",
        "fct-source": "src/System-FileSystem-Types.html#toDirPath",
        "fct-type": "function",
        "title": "toDirPath"
      },
      "index": {
        "description": "Translation between FilePath and DirPath",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "toDirPath",
        "normalized": "FilePath-\u003eDirPath",
        "package": "FileSystem",
        "partial": "Dir Path",
        "signature": "FilePath-\u003eDirPath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:toFPath",
      "description": {
        "fct-descr": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e FPath",
        "fct-source": "src/System-FileSystem-Types.html#toFPath",
        "fct-type": "function",
        "title": "toFPath"
      },
      "index": {
        "description": "Translation between FilePath and FPath",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "toFPath",
        "normalized": "FilePath-\u003eFPath",
        "package": "FileSystem",
        "partial": "FPath",
        "signature": "FilePath-\u003eFPath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:unwrapFST",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.FileSystem.Types",
        "fct-package": "FileSystem",
        "fct-signature": "StateT FSState m a",
        "fct-source": "src/System-FileSystem-Types.html#FST",
        "fct-type": "function",
        "title": "unwrapFST"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Types",
        "module": "System.FileSystem.Types",
        "name": "unwrapFST",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#",
      "description": {
        "fct-module": "System.FileSystem.Utils",
        "fct-package": "FileSystem",
        "fct-signature": "module",
        "fct-source": "src/System-FileSystem-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem Utils",
        "module": "System.FileSystem.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eThis operator is similar to \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e, but the argument is used twice.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Utils",
        "fct-package": "FileSystem",
        "fct-signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/System-FileSystem-Utils.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "This operator is similar to but the argument is used twice",
        "hierarchy": "System FileSystem Utils",
        "module": "System.FileSystem.Utils",
        "name": "($$) $$",
        "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
        "package": "FileSystem",
        "partial": "",
        "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:-60--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eArrowChoice\u003c/a\u003e\u003c/code\u003e operator.\n Given an arrow \u003ccode\u003ea ~\u003e b\u003c/code\u003e and an arrow \u003ccode\u003ec ~\u003e d\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e a ~\u003e b \u003c|\u003e c ~\u003e d\n  = Either a c ~\u003e Either b d    { (a ~\u003e b) lifted with Left for Left values.\n                          with -{          \n                                { (c ~\u003e d) lifted with Right for Right values.\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eIts name comes from the union of\u003c/em\u003e \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003cem\u003eand\u003c/em\u003e \u003ccode\u003e\u003ca\u003e|||\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Utils",
        "fct-package": "FileSystem",
        "fct-signature": "f a b -\u003e f c d -\u003e f (Either a c) (Either b d)",
        "fct-source": "src/System-FileSystem-Utils.html#%3C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c|\u003e)"
      },
      "index": {
        "description": "An ArrowChoice operator Given an arrow and an arrow Either Either lifted with Left for Left values with lifted with Right for Right values Its name comes from the union of and",
        "hierarchy": "System FileSystem Utils",
        "module": "System.FileSystem.Utils",
        "name": "(\u003c|\u003e) \u003c|\u003e",
        "normalized": "a b c-\u003ea d e-\u003ea(Either b d)(Either c e)",
        "package": "FileSystem",
        "partial": "",
        "signature": "f a b-\u003ef c d-\u003ef(Either a c)(Either b d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:apget",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function over the state, and return its result.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Utils",
        "fct-package": "FileSystem",
        "fct-signature": "(s -\u003e a) -\u003e m a",
        "fct-source": "src/System-FileSystem-Utils.html#apget",
        "fct-type": "function",
        "title": "apget"
      },
      "index": {
        "description": "Apply function over the state and return its result",
        "hierarchy": "System FileSystem Utils",
        "module": "System.FileSystem.Utils",
        "name": "apget",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "FileSystem",
        "partial": "",
        "signature": "(s-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c/a\u003e\u003c/code\u003e operator as a function.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Utils",
        "fct-package": "FileSystem",
        "fct-signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
        "fct-source": "src/System-FileSystem-Utils.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "The operator as function",
        "hierarchy": "System FileSystem Utils",
        "module": "System.FileSystem.Utils",
        "name": "bind",
        "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
        "package": "FileSystem",
        "partial": "",
        "signature": "(a-\u003em b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:comb",
      "description": {
        "fct-descr": "\u003cp\u003eThe resulting function of \u003ccode\u003e\u003ca\u003ecomb\u003c/a\u003e\u003c/code\u003e is such that it applies two (possible) different functions\n to a single element, and combine both results with the given operator, inside of an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e container.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Utils",
        "fct-package": "FileSystem",
        "fct-signature": "(b -\u003e c -\u003e d)-\u003e (a -\u003e f b)-\u003e (a -\u003e f c)-\u003e a -\u003e f d",
        "fct-type": "function",
        "title": "comb"
      },
      "index": {
        "description": "The resulting function of comb is such that it applies two possible different functions to single element and combine both results with the given operator inside of an Applicative container",
        "hierarchy": "System FileSystem Utils",
        "module": "System.FileSystem.Utils",
        "name": "comb",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee a)-\u003e(d-\u003ee b)-\u003ed-\u003ee c",
        "package": "FileSystem",
        "partial": "",
        "signature": "(b-\u003ec-\u003ed)-\u003e(a-\u003ef b)-\u003e(a-\u003ef c)-\u003ea-\u003ef d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list \u003ccode\u003exs\u003c/code\u003e of pairs (monadic condition, monadic function),\n \u003ccode\u003e\u003ca\u003eoptions\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e applies to its argument the first function that\n satisfy the condition, and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no condition was satisfied.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Utils",
        "fct-package": "FileSystem",
        "fct-signature": "[(a -\u003e m Bool, a -\u003e m b)] -\u003e a -\u003e m (Maybe b)",
        "fct-source": "src/System-FileSystem-Utils.html#options",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "Given list xs of pairs monadic condition monadic function options xs applies to its argument the first function that satisfy the condition and returns Nothing if no condition was satisfied",
        "hierarchy": "System FileSystem Utils",
        "module": "System.FileSystem.Utils",
        "name": "options",
        "normalized": "[(a-\u003eb Bool,a-\u003eb c)]-\u003ea-\u003eb(Maybe c)",
        "package": "FileSystem",
        "partial": "",
        "signature": "[(a-\u003em Bool,a-\u003em b)]-\u003ea-\u003em(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:pairMap",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a simple arrow to the same arrow applied to the two components of a pair.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Utils",
        "fct-package": "FileSystem",
        "fct-signature": "f a b -\u003e f (a, a) (b, b)",
        "fct-source": "src/System-FileSystem-Utils.html#pairMap",
        "fct-type": "function",
        "title": "pairMap"
      },
      "index": {
        "description": "Transforms simple arrow to the same arrow applied to the two components of pair",
        "hierarchy": "System FileSystem Utils",
        "module": "System.FileSystem.Utils",
        "name": "pairMap",
        "normalized": "a b c-\u003ea(b,b)(c,c)",
        "package": "FileSystem",
        "partial": "Map",
        "signature": "f a b-\u003ef(a,a)(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:tup3",
      "description": {
        "fct-descr": "\u003cp\u003eThis function just adds a third component to a two-components tuple.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem.Utils",
        "fct-package": "FileSystem",
        "fct-signature": "c -\u003e (a, b) -\u003e (a, b, c)",
        "fct-source": "src/System-FileSystem-Utils.html#tup3",
        "fct-type": "function",
        "title": "tup3"
      },
      "index": {
        "description": "This function just adds third component to two-components tuple",
        "hierarchy": "System FileSystem Utils",
        "module": "System.FileSystem.Utils",
        "name": "tup3",
        "normalized": "a-\u003e(b,c)-\u003e(b,c,a)",
        "package": "FileSystem",
        "partial": "",
        "signature": "c-\u003e(a,b)-\u003e(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "module",
        "fct-source": "src/System-FileSystem.html",
        "fct-type": "module",
        "title": "FileSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "FileSystem",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:ByteString",
      "description": {
        "fct-descr": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ByteString"
      },
      "index": {
        "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "ByteString",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:ClockTime",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of the internal clock time.\n Clock times may be compared, converted to strings, or converted to an\n external calendar time \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e for I/O or other manipulations.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ClockTime"
      },
      "index": {
        "description": "representation of the internal clock time Clock times may be compared converted to strings or converted to an external calendar time CalendarTime for or other manipulations",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "ClockTime",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Clock Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:DirName",
      "description": {
        "fct-descr": "\u003cp\u003eA name for a directory.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#DirName",
        "fct-type": "type",
        "title": "DirName"
      },
      "index": {
        "description": "name for directory",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "DirName",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Dir Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:DirPath",
      "description": {
        "fct-descr": "\u003cp\u003eA list-based directory path.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#DirPath",
        "fct-type": "type",
        "title": "DirPath"
      },
      "index": {
        "description": "list-based directory path",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "DirPath",
        "normalized": "",
        "package": "FileSystem",
        "partial": "Dir Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FPath",
      "description": {
        "fct-descr": "\u003cp\u003eA file path, composed by the path of the directory which contains it,\n and its file name.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FPath",
        "fct-type": "type",
        "title": "FPath"
      },
      "index": {
        "description": "file path composed by the path of the directory which contains it and its file name",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "FPath",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FS",
      "description": {
        "fct-descr": "\u003cp\u003eApplication of the \u003ccode\u003e\u003ca\u003eFST\u003c/a\u003e\u003c/code\u003e monad transformer to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FS",
        "fct-type": "type",
        "title": "FS"
      },
      "index": {
        "description": "Application of the FST monad transformer to the Identity monad",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "FS",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FSState",
      "description": {
        "fct-descr": "\u003cp\u003eThe state of file system computations.\n\u003c/p\u003e\u003cp\u003eCurrently, a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e structure.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FSState",
        "fct-type": "type",
        "title": "FSState"
      },
      "index": {
        "description": "The state of file system computations Currently FileSystem structure",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "FSState",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FSState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FST",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic transformer which adds a \u003ccode\u003e\u003ca\u003eFSState\u003c/a\u003e\u003c/code\u003e environment.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "data",
        "fct-source": "src/System-FileSystem-Types.html#FST",
        "fct-type": "data",
        "title": "FST"
      },
      "index": {
        "description": "Monadic transformer which adds FSState environment",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "FST",
        "normalized": "",
        "package": "FileSystem",
        "partial": "FST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:File",
      "description": {
        "fct-descr": "\u003cp\u003eA complete file.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "data",
        "fct-source": "src/System-FileSystem-Types.html#File",
        "fct-type": "data",
        "title": "File"
      },
      "index": {
        "description": "complete file",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "File",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FileName",
      "description": {
        "fct-descr": "\u003cp\u003eA name for a file.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#FileName",
        "fct-type": "type",
        "title": "FileName"
      },
      "index": {
        "description": "name for file",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "FileName",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eThe file system structure. It stores a directory with files and subdirectories.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "data",
        "fct-source": "src/System-FileSystem-Types.html#FileSystem",
        "fct-type": "data",
        "title": "FileSystem"
      },
      "index": {
        "description": "The file system structure It stores directory with files and subdirectories",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "FileSystem",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:InApp",
      "description": {
        "fct-descr": "\u003cp\u003eInternal Application: An application from somewhere over itself.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "type",
        "fct-source": "src/System-FileSystem-Types.html#InApp",
        "fct-type": "type",
        "title": "InApp"
      },
      "index": {
        "description": "Internal Application An application from somewhere over itself",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "InApp",
        "normalized": "",
        "package": "FileSystem",
        "partial": "In App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:emptyFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an empty file with the given \u003ccode\u003e\u003ca\u003eFileName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FileName -\u003e File",
        "fct-source": "src/System-FileSystem.html#emptyFile",
        "fct-type": "function",
        "title": "emptyFile"
      },
      "index": {
        "description": "Create an empty file with the given FileName",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "emptyFile",
        "normalized": "FileName-\u003eFile",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FileName-\u003eFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:emptyFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty file system.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FileSystem",
        "fct-source": "src/System-FileSystem-Types.html#emptyFileSystem",
        "fct-type": "function",
        "title": "emptyFileSystem"
      },
      "index": {
        "description": "An empty file system",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "emptyFileSystem",
        "normalized": "",
        "package": "FileSystem",
        "partial": "File System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fileSize",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the size of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "File -\u003e Int",
        "fct-source": "src/System-FileSystem.html#fileSize",
        "fct-type": "function",
        "title": "fileSize"
      },
      "index": {
        "description": "Calculate the size of File",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fileSize",
        "normalized": "File-\u003eInt",
        "package": "FileSystem",
        "partial": "Size",
        "signature": "File-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:foldFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eFolding function for \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath-\u003e Either (FilePath -\u003e t -\u003e Either DirName File -\u003e t) (FilePath -\u003e Either DirName File -\u003e t -\u003e t)-\u003e t-\u003e FileSystem-\u003e t",
        "fct-type": "function",
        "title": "foldFileSystem"
      },
      "index": {
        "description": "Folding function for FileSystem",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "foldFileSystem",
        "normalized": "FilePath-\u003eEither(FilePath-\u003ea-\u003eEither DirName File-\u003ea)(FilePath-\u003eEither DirName File-\u003ea-\u003ea)-\u003ea-\u003eFileSystem-\u003ea",
        "package": "FileSystem",
        "partial": "File System",
        "signature": "FilePath-\u003eEither(FilePath-\u003et-\u003eEither DirName File-\u003et)(FilePath-\u003eEither DirName File-\u003et-\u003et)-\u003et-\u003eFileSystem-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:foldFiles",
      "description": {
        "fct-descr": "\u003cp\u003eAn usage of \u003ccode\u003e\u003ca\u003efoldFileSystem\u003c/a\u003e\u003c/code\u003e, folding only \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003es, ignoring the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e where they are.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "Either (t -\u003e File -\u003e t) (File -\u003e t -\u003e t) -\u003e t -\u003e FileSystem -\u003e t",
        "fct-source": "src/System-FileSystem-Across.html#foldFiles",
        "fct-type": "function",
        "title": "foldFiles"
      },
      "index": {
        "description": "An usage of foldFileSystem folding only File ignoring the FilePath where they are",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "foldFiles",
        "normalized": "Either(a-\u003eFile-\u003ea)(File-\u003ea-\u003ea)-\u003ea-\u003eFileSystem-\u003ea",
        "package": "FileSystem",
        "partial": "Files",
        "signature": "Either(t-\u003eFile-\u003et)(File-\u003et-\u003et)-\u003et-\u003eFileSystem-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fromDirPath",
      "description": {
        "fct-descr": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eDirPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e FilePath",
        "fct-source": "src/System-FileSystem-Types.html#fromDirPath",
        "fct-type": "function",
        "title": "fromDirPath"
      },
      "index": {
        "description": "Translation between DirPath and FilePath",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fromDirPath",
        "normalized": "DirPath-\u003eFilePath",
        "package": "FileSystem",
        "partial": "Dir Path",
        "signature": "DirPath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fromFPath",
      "description": {
        "fct-descr": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eFPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e FilePath",
        "fct-source": "src/System-FileSystem-Types.html#fromFPath",
        "fct-type": "function",
        "title": "fromFPath"
      },
      "index": {
        "description": "Translation between FPath and FilePath",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fromFPath",
        "normalized": "FPath-\u003eFilePath",
        "package": "FileSystem",
        "partial": "FPath",
        "signature": "FPath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_copyFile",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e FilePath -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#fs_copyFile",
        "fct-type": "function",
        "title": "fs_copyFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_copyFile",
        "normalized": "FilePath-\u003eFilePath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003eFilePath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_copyFileL",
      "description": {
        "fct-descr": "\u003cp\u003eCopies a file from a location to another.\n Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the file was found and copied.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e FPath -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#fs_copyFileL",
        "fct-type": "function",
        "title": "fs_copyFileL"
      },
      "index": {
        "description": "Copies file from location to another Returns True if the file was found and copied",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_copyFileL",
        "normalized": "FPath-\u003eFPath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FPath-\u003eFPath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_createDirectory",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#fs_createDirectory",
        "fct-type": "function",
        "title": "fs_createDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_createDirectory",
        "normalized": "FilePath-\u003ea()",
        "package": "FileSystem",
        "partial": "Directory",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_createDirectoryL",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new directory. If the directory already exists, it does nothing.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#fs_createDirectoryL",
        "fct-type": "function",
        "title": "fs_createDirectoryL"
      },
      "index": {
        "description": "Creates new directory If the directory already exists it does nothing",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_createDirectoryL",
        "normalized": "DirPath-\u003ea()",
        "package": "FileSystem",
        "partial": "Directory",
        "signature": "DirPath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_doesDirectoryExist",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#fs_doesDirectoryExist",
        "fct-type": "function",
        "title": "fs_doesDirectoryExist"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_doesDirectoryExist",
        "normalized": "FilePath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "Directory Exist",
        "signature": "FilePath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_doesDirectoryExistL",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a directory exists.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#fs_doesDirectoryExistL",
        "fct-type": "function",
        "title": "fs_doesDirectoryExistL"
      },
      "index": {
        "description": "Checks if directory exists",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_doesDirectoryExistL",
        "normalized": "DirPath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "Directory Exist",
        "signature": "DirPath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_doesFileExist",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#fs_doesFileExist",
        "fct-type": "function",
        "title": "fs_doesFileExist"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_doesFileExist",
        "normalized": "FilePath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File Exist",
        "signature": "FilePath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_doesFileExistL",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a file exists.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#fs_doesFileExistL",
        "fct-type": "function",
        "title": "fs_doesFileExistL"
      },
      "index": {
        "description": "Checks if file exists",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_doesFileExistL",
        "normalized": "FPath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File Exist",
        "signature": "FPath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_getDirectoryContents",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e m (Maybe ([DirName], [FileName]))",
        "fct-source": "src/System-FileSystem.html#fs_getDirectoryContents",
        "fct-type": "function",
        "title": "fs_getDirectoryContents"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_getDirectoryContents",
        "normalized": "FilePath-\u003ea(Maybe([DirName],[FileName]))",
        "package": "FileSystem",
        "partial": "Directory Contents",
        "signature": "FilePath-\u003em(Maybe([DirName],[FileName]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_getDirectoryContentsL",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all directory names and file names located in the given directory.\n It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the directory does not exist.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e m (Maybe ([DirName], [FileName]))",
        "fct-source": "src/System-FileSystem.html#fs_getDirectoryContentsL",
        "fct-type": "function",
        "title": "fs_getDirectoryContentsL"
      },
      "index": {
        "description": "Returns all directory names and file names located in the given directory It returns Nothing if the directory does not exist",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_getDirectoryContentsL",
        "normalized": "DirPath-\u003ea(Maybe([DirName],[FileName]))",
        "package": "FileSystem",
        "partial": "Directory Contents",
        "signature": "DirPath-\u003em(Maybe([DirName],[FileName]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_getModificationTime",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e m (Maybe ClockTime)",
        "fct-source": "src/System-FileSystem.html#fs_getModificationTime",
        "fct-type": "function",
        "title": "fs_getModificationTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_getModificationTime",
        "normalized": "FilePath-\u003ea(Maybe ClockTime)",
        "package": "FileSystem",
        "partial": "Modification Time",
        "signature": "FilePath-\u003em(Maybe ClockTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_getModificationTimeL",
      "description": {
        "fct-descr": "\u003cp\u003eGets the last modification time of a file. It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the file doesn't exist.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e m (Maybe ClockTime)",
        "fct-source": "src/System-FileSystem.html#fs_getModificationTimeL",
        "fct-type": "function",
        "title": "fs_getModificationTimeL"
      },
      "index": {
        "description": "Gets the last modification time of file It returns Nothing if the file doesn exist",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_getModificationTimeL",
        "normalized": "FPath-\u003ea(Maybe ClockTime)",
        "package": "FileSystem",
        "partial": "Modification Time",
        "signature": "FPath-\u003em(Maybe ClockTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_readFile",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e m (Maybe ByteString)",
        "fct-source": "src/System-FileSystem.html#fs_readFile",
        "fct-type": "function",
        "title": "fs_readFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_readFile",
        "normalized": "FilePath-\u003ea(Maybe ByteString)",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_readFileL",
      "description": {
        "fct-descr": "\u003cp\u003eReads a file. It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the file can't be found.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e m (Maybe ByteString)",
        "fct-source": "src/System-FileSystem.html#fs_readFileL",
        "fct-type": "function",
        "title": "fs_readFileL"
      },
      "index": {
        "description": "Reads file It returns Nothing if the file can be found",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_readFileL",
        "normalized": "FPath-\u003ea(Maybe ByteString)",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FPath-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_removeDirectory",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#fs_removeDirectory",
        "fct-type": "function",
        "title": "fs_removeDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_removeDirectory",
        "normalized": "FilePath-\u003ea()",
        "package": "FileSystem",
        "partial": "Directory",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_removeDirectoryL",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves a directory, with all its content.\n If the directory does not exist, it does nothing.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#fs_removeDirectoryL",
        "fct-type": "function",
        "title": "fs_removeDirectoryL"
      },
      "index": {
        "description": "Removes directory with all its content If the directory does not exist it does nothing",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_removeDirectoryL",
        "normalized": "DirPath-\u003ea()",
        "package": "FileSystem",
        "partial": "Directory",
        "signature": "DirPath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_removeFile",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#fs_removeFile",
        "fct-type": "function",
        "title": "fs_removeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_removeFile",
        "normalized": "FilePath-\u003ea()",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_removeFileL",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves a file. If the file does not exist, it does nothing.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#fs_removeFileL",
        "fct-type": "function",
        "title": "fs_removeFileL"
      },
      "index": {
        "description": "Removes file If the file does not exist it does nothing",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_removeFileL",
        "normalized": "FPath-\u003ea()",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FPath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_renameDirectory",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e FilePath -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#fs_renameDirectory",
        "fct-type": "function",
        "title": "fs_renameDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_renameDirectory",
        "normalized": "FilePath-\u003eFilePath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "Directory",
        "signature": "FilePath-\u003eFilePath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_renameDirectoryL",
      "description": {
        "fct-descr": "\u003cp\u003eRenames a directory.\n If the directory can't be found, it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath -\u003e DirPath -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#fs_renameDirectoryL",
        "fct-type": "function",
        "title": "fs_renameDirectoryL"
      },
      "index": {
        "description": "Renames directory If the directory can be found it returns False",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_renameDirectoryL",
        "normalized": "DirPath-\u003eDirPath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "Directory",
        "signature": "DirPath-\u003eDirPath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_renameFile",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e FileName -\u003e FileName -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#fs_renameFile",
        "fct-type": "function",
        "title": "fs_renameFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_renameFile",
        "normalized": "FilePath-\u003eFileName-\u003eFileName-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003eFileName-\u003eFileName-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_renameFileL",
      "description": {
        "fct-descr": "\u003cp\u003eRenames a file. First, you must specify the directory where the file is.\n If the file can't be found, it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath-\u003e FileName-\u003e FileName-\u003e m Bool",
        "fct-type": "function",
        "title": "fs_renameFileL"
      },
      "index": {
        "description": "Renames file First you must specify the directory where the file is If the file can be found it returns False",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_renameFileL",
        "normalized": "DirPath-\u003eFileName-\u003eFileName-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File",
        "signature": "DirPath-\u003eFileName-\u003eFileName-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_writeFile",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e ByteString -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#fs_writeFile",
        "fct-type": "function",
        "title": "fs_writeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_writeFile",
        "normalized": "FilePath-\u003eByteString-\u003ea()",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003eByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_writeFileL",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a file. If the files already exists, it is overwritten.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e ByteString -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#fs_writeFileL",
        "fct-type": "function",
        "title": "fs_writeFileL"
      },
      "index": {
        "description": "Writes file If the files already exists it is overwritten",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "fs_writeFileL",
        "normalized": "FPath-\u003eByteString-\u003ea()",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FPath-\u003eByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getFile",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e m (Maybe File)",
        "fct-source": "src/System-FileSystem.html#getFile",
        "fct-type": "function",
        "title": "getFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "getFile",
        "normalized": "FilePath-\u003ea(Maybe File)",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003em(Maybe File)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getFileContent",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the content of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "File -\u003e ByteString",
        "fct-source": "src/System-FileSystem.html#getFileContent",
        "fct-type": "function",
        "title": "getFileContent"
      },
      "index": {
        "description": "Extract the content of File",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "getFileContent",
        "normalized": "File-\u003eByteString",
        "package": "FileSystem",
        "partial": "File Content",
        "signature": "File-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getFileL",
      "description": {
        "fct-descr": "\u003cp\u003eGets a file from the file system.\n It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e is not found.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath-\u003e m (Maybe File)",
        "fct-type": "function",
        "title": "getFileL"
      },
      "index": {
        "description": "Gets file from the file system It returns Nothing if the File is not found",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "getFileL",
        "normalized": "FPath-\u003ea(Maybe File)",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FPath-\u003em(Maybe File)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getFileName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "File -\u003e FileName",
        "fct-source": "src/System-FileSystem.html#getFileName",
        "fct-type": "function",
        "title": "getFileName"
      },
      "index": {
        "description": "Get the name of File",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "getFileName",
        "normalized": "File-\u003eFileName",
        "package": "FileSystem",
        "partial": "File Name",
        "signature": "File-\u003eFileName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getModifTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet the last modification time of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "File -\u003e ClockTime",
        "fct-source": "src/System-FileSystem.html#getModifTime",
        "fct-type": "function",
        "title": "getModifTime"
      },
      "index": {
        "description": "Get the last modification time of File",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "getModifTime",
        "normalized": "File-\u003eClockTime",
        "package": "FileSystem",
        "partial": "Modif Time",
        "signature": "File-\u003eClockTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:mapFileSystem",
      "description": {
        "fct-descr": "\u003cp\u003eMap a pair of applications (one over \u003ccode\u003e\u003ca\u003eDirName\u003c/a\u003e\u003c/code\u003e, and the other over \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e) through a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "InApp DirName -\u003e InApp File -\u003e InApp FileSystem",
        "fct-source": "src/System-FileSystem-Across.html#mapFileSystem",
        "fct-type": "function",
        "title": "mapFileSystem"
      },
      "index": {
        "description": "Map pair of applications one over DirName and the other over File through FileSystem",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "mapFileSystem",
        "normalized": "InApp DirName-\u003eInApp File-\u003eInApp FileSystem",
        "package": "FileSystem",
        "partial": "File System",
        "signature": "InApp DirName-\u003eInApp File-\u003eInApp FileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:mapFiles",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all the \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003es of a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "InApp File -\u003e InApp FileSystem",
        "fct-source": "src/System-FileSystem.html#mapFiles",
        "fct-type": "function",
        "title": "mapFiles"
      },
      "index": {
        "description": "Map function over all the File of FileSystem",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "mapFiles",
        "normalized": "InApp File-\u003eInApp FileSystem",
        "package": "FileSystem",
        "partial": "Files",
        "signature": "InApp File-\u003eInApp FileSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:modFile",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e InApp File -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#modFile",
        "fct-type": "function",
        "title": "modFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "modFile",
        "normalized": "FilePath-\u003eInApp File-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003eInApp File-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:modFileL",
      "description": {
        "fct-descr": "\u003cp\u003eModifies a file with the given application. It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the file was found and modified.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e InApp File -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#modFileL",
        "fct-type": "function",
        "title": "modFileL"
      },
      "index": {
        "description": "Modifies file with the given application It returns True if the file was found and modified",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "modFileL",
        "normalized": "FPath-\u003eInApp File-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FPath-\u003eInApp File-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:moveFile",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e FilePath -\u003e m Bool",
        "fct-source": "src/System-FileSystem.html#moveFile",
        "fct-type": "function",
        "title": "moveFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "moveFile",
        "normalized": "FilePath-\u003eFilePath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003eFilePath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:moveFileL",
      "description": {
        "fct-descr": "\u003cp\u003eMoves a file.\n It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the file exists and has been moved.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath-\u003e FPath-\u003e m Bool",
        "fct-type": "function",
        "title": "moveFileL"
      },
      "index": {
        "description": "Moves file It returns True if the file exists and has been moved",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "moveFileL",
        "normalized": "FPath-\u003eFPath-\u003ea Bool",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FPath-\u003eFPath-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:newFile",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new file with an initial \u003ccode\u003e\u003ca\u003eFileName\u003c/a\u003e\u003c/code\u003e and content.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FileName -\u003e ByteString -\u003e File",
        "fct-source": "src/System-FileSystem.html#newFile",
        "fct-type": "function",
        "title": "newFile"
      },
      "index": {
        "description": "Build new file with an initial FileName and content",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "newFile",
        "normalized": "FileName-\u003eByteString-\u003eFile",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FileName-\u003eByteString-\u003eFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:putFile",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e File -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#putFile",
        "fct-type": "function",
        "title": "putFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "putFile",
        "normalized": "FilePath-\u003eFile-\u003ea()",
        "package": "FileSystem",
        "partial": "File",
        "signature": "FilePath-\u003eFile-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:putFileL",
      "description": {
        "fct-descr": "\u003cp\u003ePuts a file in the given directory. It creates the parent directory if missing.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "DirPath-\u003e File-\u003e m ()",
        "fct-type": "function",
        "title": "putFileL"
      },
      "index": {
        "description": "Puts file in the given directory It creates the parent directory if missing",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "putFileL",
        "normalized": "DirPath-\u003eFile-\u003ea()",
        "package": "FileSystem",
        "partial": "File",
        "signature": "DirPath-\u003eFile-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:runFS",
      "description": {
        "fct-descr": "\u003cp\u003eJust a composition of \u003ccode\u003e\u003ca\u003erunIdentity\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunFST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FS a -\u003e FSState -\u003e (a, FSState)",
        "fct-source": "src/System-FileSystem-Types.html#runFS",
        "fct-type": "function",
        "title": "runFS"
      },
      "index": {
        "description": "Just composition of runIdentity and runFST",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "runFS",
        "normalized": "FS a-\u003eFSState-\u003e(a,FSState)",
        "package": "FileSystem",
        "partial": "FS",
        "signature": "FS a-\u003eFSState-\u003e(a,FSState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:runFST",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eFST\u003c/a\u003e\u003c/code\u003e computation, given an initial state.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FST m a -\u003e FSState -\u003e m (a, FSState)",
        "fct-source": "src/System-FileSystem-Types.html#runFST",
        "fct-type": "function",
        "title": "runFST"
      },
      "index": {
        "description": "Run an FST computation given an initial state",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "runFST",
        "normalized": "FST a b-\u003eFSState-\u003ea(b,FSState)",
        "package": "FileSystem",
        "partial": "FST",
        "signature": "FST m a-\u003eFSState-\u003em(a,FSState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:setFileContent",
      "description": {
        "fct-descr": "\u003cp\u003eSet the content of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e to the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "ByteString -\u003e File -\u003e File",
        "fct-source": "src/System-FileSystem.html#setFileContent",
        "fct-type": "function",
        "title": "setFileContent"
      },
      "index": {
        "description": "Set the content of File to the given ByteString",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "setFileContent",
        "normalized": "ByteString-\u003eFile-\u003eFile",
        "package": "FileSystem",
        "partial": "File Content",
        "signature": "ByteString-\u003eFile-\u003eFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:setFileName",
      "description": {
        "fct-descr": "\u003cp\u003eRename a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e with the given \u003ccode\u003e\u003ca\u003eFileName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FileName -\u003e File -\u003e File",
        "fct-source": "src/System-FileSystem.html#setFileName",
        "fct-type": "function",
        "title": "setFileName"
      },
      "index": {
        "description": "Rename File with the given FileName",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "setFileName",
        "normalized": "FileName-\u003eFile-\u003eFile",
        "package": "FileSystem",
        "partial": "File Name",
        "signature": "FileName-\u003eFile-\u003eFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:setModifTime",
      "description": {
        "fct-descr": "\u003cp\u003eSet the last modification time of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "ClockTime -\u003e File -\u003e File",
        "fct-source": "src/System-FileSystem.html#setModifTime",
        "fct-type": "function",
        "title": "setModifTime"
      },
      "index": {
        "description": "Set the last modification time of File",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "setModifTime",
        "normalized": "ClockTime-\u003eFile-\u003eFile",
        "package": "FileSystem",
        "partial": "Modif Time",
        "signature": "ClockTime-\u003eFile-\u003eFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:toDirPath",
      "description": {
        "fct-descr": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDirPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e DirPath",
        "fct-source": "src/System-FileSystem-Types.html#toDirPath",
        "fct-type": "function",
        "title": "toDirPath"
      },
      "index": {
        "description": "Translation between FilePath and DirPath",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "toDirPath",
        "normalized": "FilePath-\u003eDirPath",
        "package": "FileSystem",
        "partial": "Dir Path",
        "signature": "FilePath-\u003eDirPath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:toFPath",
      "description": {
        "fct-descr": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e FPath",
        "fct-source": "src/System-FileSystem-Types.html#toFPath",
        "fct-type": "function",
        "title": "toFPath"
      },
      "index": {
        "description": "Translation between FilePath and FPath",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "toFPath",
        "normalized": "FilePath-\u003eFPath",
        "package": "FileSystem",
        "partial": "FPath",
        "signature": "FilePath-\u003eFPath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:writeFileTime",
      "description": {
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FilePath -\u003e ByteString -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#writeFileTime",
        "fct-type": "function",
        "title": "writeFileTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "writeFileTime",
        "normalized": "FilePath-\u003eByteString-\u003ea()",
        "package": "FileSystem",
        "partial": "File Time",
        "signature": "FilePath-\u003eByteString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:writeFileTimeL",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a file, changing its last modification time to the current time.\n If the file already exists, it is overwritten.\n \u003cem\u003eNote that MonadIO instance is needed\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FileSystem",
        "fct-package": "FileSystem",
        "fct-signature": "FPath -\u003e ByteString -\u003e m ()",
        "fct-source": "src/System-FileSystem.html#writeFileTimeL",
        "fct-type": "function",
        "title": "writeFileTimeL"
      },
      "index": {
        "description": "Writes file changing its last modification time to the current time If the file already exists it is overwritten Note that MonadIO instance is needed",
        "hierarchy": "System FileSystem",
        "module": "System.FileSystem",
        "name": "writeFileTimeL",
        "normalized": "FPath-\u003eByteString-\u003ea()",
        "package": "FileSystem",
        "partial": "File Time",
        "signature": "FPath-\u003eByteString-\u003em()"
      }
    }
  }
]