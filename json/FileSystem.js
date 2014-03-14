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
        "word": "FileSystem"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Across",
          "name": "Across",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Across.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FileSystem Across",
          "module": "System.FileSystem.Across",
          "name": "Across",
          "package": "FileSystem",
          "partial": "Across",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Across",
          "name": "buildFileSystem",
          "package": "FileSystem",
          "signature": "[Path] -\u003e FileSystem",
          "source": "src/System-FileSystem-Across.html#buildFileSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Across",
          "module": "System.FileSystem.Across",
          "name": "buildFileSystem",
          "normalized": "[Path]-\u003eFileSystem",
          "package": "FileSystem",
          "partial": "File System",
          "signature": "[Path]-\u003eFileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:buildFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Across",
          "name": "fileSystemList",
          "package": "FileSystem",
          "signature": "FileSystem -\u003e [(Either DirName File, FilePath)]",
          "source": "src/System-FileSystem-Across.html#fileSystemList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Across",
          "module": "System.FileSystem.Across",
          "name": "fileSystemList",
          "normalized": "FileSystem-\u003e[(Either DirName File,FilePath)]",
          "package": "FileSystem",
          "partial": "System List",
          "signature": "FileSystem-\u003e[(Either DirName File,FilePath)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:fileSystemList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolding function for \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Across\",\"System.FileSystem\"]",
          "name": "foldFileSystem",
          "package": "FileSystem",
          "signature": "FilePath-\u003e Either (FilePath -\u003e t -\u003e Either DirName File -\u003e t) (FilePath -\u003e Either DirName File -\u003e t -\u003e t)-\u003e t-\u003e FileSystem-\u003e t",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:foldFileSystem\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:foldFileSystem\"]"
        },
        "index": {
          "description": "Folding function for FileSystem",
          "hierarchy": "System FileSystem Across",
          "module": "System.FileSystem.Across",
          "name": "foldFileSystem",
          "normalized": "FilePath-\u003eEither(FilePath-\u003ea-\u003eEither DirName File-\u003ea)(FilePath-\u003eEither DirName File-\u003ea-\u003ea)-\u003ea-\u003eFileSystem-\u003ea",
          "package": "FileSystem",
          "partial": "File System",
          "signature": "FilePath-\u003eEither(FilePath-\u003et-\u003eEither DirName File-\u003et)(FilePath-\u003eEither DirName File-\u003et-\u003et)-\u003et-\u003eFileSystem-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:foldFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn usage of \u003ccode\u003e\u003ca\u003efoldFileSystem\u003c/a\u003e\u003c/code\u003e, folding only \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003es, ignoring the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e where they are.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Across\",\"System.FileSystem\"]",
          "name": "foldFiles",
          "package": "FileSystem",
          "signature": "Either (t -\u003e File -\u003e t) (File -\u003e t -\u003e t) -\u003e t -\u003e FileSystem -\u003e t",
          "source": "src/System-FileSystem-Across.html#foldFiles",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:foldFiles\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:foldFiles\"]"
        },
        "index": {
          "description": "An usage of foldFileSystem folding only File ignoring the FilePath where they are",
          "hierarchy": "System FileSystem Across",
          "module": "System.FileSystem.Across",
          "name": "foldFiles",
          "normalized": "Either(a-\u003eFile-\u003ea)(File-\u003ea-\u003ea)-\u003ea-\u003eFileSystem-\u003ea",
          "package": "FileSystem",
          "partial": "Files",
          "signature": "Either(t-\u003eFile-\u003et)(File-\u003et-\u003et)-\u003et-\u003eFileSystem-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:foldFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a pair of applications (one over \u003ccode\u003e\u003ca\u003eDirName\u003c/a\u003e\u003c/code\u003e, and the other over \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e) through a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Across\",\"System.FileSystem\"]",
          "name": "mapFileSystem",
          "package": "FileSystem",
          "signature": "InApp DirName -\u003e InApp File -\u003e InApp FileSystem",
          "source": "src/System-FileSystem-Across.html#mapFileSystem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:mapFileSystem\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:mapFileSystem\"]"
        },
        "index": {
          "description": "Map pair of applications one over DirName and the other over File through FileSystem",
          "hierarchy": "System FileSystem Across",
          "module": "System.FileSystem.Across",
          "name": "mapFileSystem",
          "normalized": "InApp DirName-\u003eInApp File-\u003eInApp FileSystem",
          "package": "FileSystem",
          "partial": "File System",
          "signature": "InApp DirName-\u003eInApp File-\u003eInApp FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Across.html#v:mapFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Class",
          "name": "Class",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FileSystem Class",
          "module": "System.FileSystem.Class",
          "name": "Class",
          "package": "FileSystem",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Class",
          "name": "FSMonad",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Class.html#FSMonad",
          "type": "class"
        },
        "index": {
          "hierarchy": "System FileSystem Class",
          "module": "System.FileSystem.Class",
          "name": "FSMonad",
          "package": "FileSystem",
          "partial": "FSMonad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#t:FSMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Class",
          "name": "apgetFS",
          "package": "FileSystem",
          "signature": "(FSState -\u003e a) -\u003e m a",
          "source": "src/System-FileSystem-Class.html#apgetFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Class",
          "module": "System.FileSystem.Class",
          "name": "apgetFS",
          "normalized": "(FSState-\u003ea)-\u003eb a",
          "package": "FileSystem",
          "partial": "FS",
          "signature": "(FSState-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#v:apgetFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Class",
          "name": "getFS",
          "package": "FileSystem",
          "signature": "m FSState",
          "source": "src/System-FileSystem-Class.html#getFS",
          "type": "method"
        },
        "index": {
          "hierarchy": "System FileSystem Class",
          "module": "System.FileSystem.Class",
          "name": "getFS",
          "package": "FileSystem",
          "partial": "FS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#v:getFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Class",
          "name": "modifyFS",
          "package": "FileSystem",
          "signature": "InApp FSState -\u003e m ()",
          "source": "src/System-FileSystem-Class.html#modifyFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Class",
          "module": "System.FileSystem.Class",
          "name": "modifyFS",
          "normalized": "InApp FSState-\u003ea()",
          "package": "FileSystem",
          "partial": "FS",
          "signature": "InApp FSState-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#v:modifyFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Class",
          "name": "putFS",
          "package": "FileSystem",
          "signature": "FSState -\u003e m ()",
          "source": "src/System-FileSystem-Class.html#putFS",
          "type": "method"
        },
        "index": {
          "hierarchy": "System FileSystem Class",
          "module": "System.FileSystem.Class",
          "name": "putFS",
          "normalized": "FSState-\u003ea()",
          "package": "FileSystem",
          "partial": "FS",
          "signature": "FSState-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Class.html#v:putFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "Computations",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Computations.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "Computations",
          "package": "FileSystem",
          "partial": "Computations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "checkDExist",
          "package": "FileSystem",
          "signature": "DirPath -\u003e m Bool",
          "source": "src/System-FileSystem-Computations.html#checkDExist",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "checkDExist",
          "normalized": "DirPath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "DExist",
          "signature": "DirPath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:checkDExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "checkFExist",
          "package": "FileSystem",
          "signature": "(DirPath, FileName) -\u003e m Bool",
          "source": "src/System-FileSystem-Computations.html#checkFExist",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "checkFExist",
          "normalized": "(DirPath,FileName)-\u003ea Bool",
          "package": "FileSystem",
          "partial": "FExist",
          "signature": "(DirPath,FileName)-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:checkFExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "getDirCnt",
          "package": "FileSystem",
          "signature": "DirPath -\u003e m (Maybe ([DirName], [FileName]))",
          "source": "src/System-FileSystem-Computations.html#getDirCnt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "getDirCnt",
          "normalized": "DirPath-\u003ea(Maybe([DirName],[FileName]))",
          "package": "FileSystem",
          "partial": "Dir Cnt",
          "signature": "DirPath-\u003em(Maybe([DirName],[FileName]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:getDirCnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "getFl",
          "package": "FileSystem",
          "signature": "FPath -\u003e m (Maybe File)",
          "source": "src/System-FileSystem-Computations.html#getFl",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "getFl",
          "normalized": "FPath-\u003ea(Maybe File)",
          "package": "FileSystem",
          "partial": "Fl",
          "signature": "FPath-\u003em(Maybe File)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:getFl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "newDir",
          "package": "FileSystem",
          "signature": "DirPath -\u003e m ()",
          "source": "src/System-FileSystem-Computations.html#newDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "newDir",
          "normalized": "DirPath-\u003ea()",
          "package": "FileSystem",
          "partial": "Dir",
          "signature": "DirPath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:newDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "putPath",
          "package": "FileSystem",
          "signature": "Path -\u003e m ()",
          "source": "src/System-FileSystem-Computations.html#putPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "putPath",
          "normalized": "Path-\u003ea()",
          "package": "FileSystem",
          "partial": "Path",
          "signature": "Path-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:putPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "rmvDir",
          "package": "FileSystem",
          "signature": "DirPath -\u003e m ()",
          "source": "src/System-FileSystem-Computations.html#rmvDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "rmvDir",
          "normalized": "DirPath-\u003ea()",
          "package": "FileSystem",
          "partial": "Dir",
          "signature": "DirPath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rmvDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "rmvFile",
          "package": "FileSystem",
          "signature": "FPath -\u003e m ()",
          "source": "src/System-FileSystem-Computations.html#rmvFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "rmvFile",
          "normalized": "FPath-\u003ea()",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FPath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rmvFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "rmvPath",
          "package": "FileSystem",
          "signature": "Path -\u003e m ()",
          "source": "src/System-FileSystem-Computations.html#rmvPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "rmvPath",
          "normalized": "Path-\u003ea()",
          "package": "FileSystem",
          "partial": "Path",
          "signature": "Path-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rmvPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "rnmDir",
          "package": "FileSystem",
          "signature": "(DirPath, DirPath) -\u003e m Bool",
          "source": "src/System-FileSystem-Computations.html#rnmDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "rnmDir",
          "normalized": "(DirPath,DirPath)-\u003ea Bool",
          "package": "FileSystem",
          "partial": "Dir",
          "signature": "(DirPath,DirPath)-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rnmDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "rnmFile",
          "package": "FileSystem",
          "signature": "(FPath, FPath) -\u003e m Bool",
          "source": "src/System-FileSystem-Computations.html#rnmFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "rnmFile",
          "normalized": "(FPath,FPath)-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File",
          "signature": "(FPath,FPath)-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rnmFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Computations",
          "name": "rnmPath",
          "package": "FileSystem",
          "signature": "([String], [String], Bool) -\u003e m Bool",
          "source": "src/System-FileSystem-Computations.html#rnmPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Computations",
          "module": "System.FileSystem.Computations",
          "name": "rnmPath",
          "normalized": "([String],[String],Bool)-\u003ea Bool",
          "package": "FileSystem",
          "partial": "Path",
          "signature": "([String],[String],Bool)-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Computations.html#v:rnmPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.IO",
          "name": "IO",
          "package": "FileSystem",
          "source": "src/System-FileSystem-IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FileSystem IO",
          "module": "System.FileSystem.IO",
          "name": "IO",
          "package": "FileSystem",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a complete \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e from the current working directory.\n\u003c/p\u003e",
          "module": "System.FileSystem.IO",
          "name": "capture",
          "package": "FileSystem",
          "signature": "IO FileSystem",
          "source": "src/System-FileSystem-IO.html#capture",
          "type": "function"
        },
        "index": {
          "description": "Create complete FileSystem from the current working directory",
          "hierarchy": "System FileSystem IO",
          "module": "System.FileSystem.IO",
          "name": "capture",
          "package": "FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:capture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a complete \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e from an existing directory.\n\u003c/p\u003e",
          "module": "System.FileSystem.IO",
          "name": "captureDir",
          "package": "FileSystem",
          "signature": "FilePath -\u003e IO FileSystem",
          "source": "src/System-FileSystem-IO.html#captureDir",
          "type": "function"
        },
        "index": {
          "description": "Create complete FileSystem from an existing directory",
          "hierarchy": "System FileSystem IO",
          "module": "System.FileSystem.IO",
          "name": "captureDir",
          "normalized": "FilePath-\u003eIO FileSystem",
          "package": "FileSystem",
          "partial": "Dir",
          "signature": "FilePath-\u003eIO FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:captureDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erelease fp fs\u003c/code\u003e write in \u003ccode\u003efp\u003c/code\u003e the \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem.IO",
          "name": "release",
          "package": "FileSystem",
          "signature": "FilePath -\u003e FileSystem -\u003e IO ()",
          "source": "src/System-FileSystem-IO.html#release",
          "type": "function"
        },
        "index": {
          "description": "release fp fs write in fp the FileSystem fs",
          "hierarchy": "System FileSystem IO",
          "module": "System.FileSystem.IO",
          "name": "release",
          "normalized": "FilePath-\u003eFileSystem-\u003eIO()",
          "package": "FileSystem",
          "signature": "FilePath-\u003eFileSystem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereleaseEnd fp c fs\u003c/code\u003e write in \u003ccode\u003efp\u003c/code\u003e the \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efs\u003c/code\u003e, and execute \u003ccode\u003ec\u003c/code\u003e at the end.\n\u003c/p\u003e",
          "module": "System.FileSystem.IO",
          "name": "releaseEnd",
          "package": "FileSystem",
          "signature": "FilePath -\u003e IO a -\u003e FileSystem -\u003e IO a",
          "source": "src/System-FileSystem-IO.html#releaseEnd",
          "type": "function"
        },
        "index": {
          "description": "releaseEnd fp fs write in fp the FileSystem fs and execute at the end",
          "hierarchy": "System FileSystem IO",
          "module": "System.FileSystem.IO",
          "name": "releaseEnd",
          "normalized": "FilePath-\u003eIO a-\u003eFileSystem-\u003eIO a",
          "package": "FileSystem",
          "partial": "End",
          "signature": "FilePath-\u003eIO a-\u003eFileSystem-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:releaseEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereleaseHere fs\u003c/code\u003e write in the current working directory the \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem.IO",
          "name": "releaseHere",
          "package": "FileSystem",
          "signature": "FileSystem -\u003e IO ()",
          "source": "src/System-FileSystem-IO.html#releaseHere",
          "type": "function"
        },
        "index": {
          "description": "releaseHere fs write in the current working directory the FileSystem fs",
          "hierarchy": "System FileSystem IO",
          "module": "System.FileSystem.IO",
          "name": "releaseHere",
          "normalized": "FileSystem-\u003eIO()",
          "package": "FileSystem",
          "partial": "Here",
          "signature": "FileSystem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:releaseHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a \"real world\" file.\n\u003c/p\u003e",
          "module": "System.FileSystem.IO",
          "name": "takeFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e IO File",
          "source": "src/System-FileSystem-IO.html#takeFile",
          "type": "function"
        },
        "index": {
          "description": "Create File from FilePath to real world file",
          "hierarchy": "System FileSystem IO",
          "module": "System.FileSystem.IO",
          "name": "takeFile",
          "normalized": "FilePath-\u003eIO File",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003eIO File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-IO.html#v:takeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass instances for several types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.FileSystem.Instances",
          "name": "Instances",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Class instances for several types",
          "hierarchy": "System FileSystem Instances",
          "module": "System.FileSystem.Instances",
          "name": "Instances",
          "package": "FileSystem",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level operators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.FileSystem.Operators",
          "name": "Operators",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Operators.html",
          "type": "module"
        },
        "index": {
          "description": "Low-level operators",
          "hierarchy": "System FileSystem Operators",
          "module": "System.FileSystem.Operators",
          "name": "Operators",
          "package": "FileSystem",
          "partial": "Operators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstraction operator. Search and remove a file/directory from a file system.\n\u003c/p\u003e",
          "module": "System.FileSystem.Operators",
          "name": "(-:)",
          "package": "FileSystem",
          "signature": "Path -\u003e FileSystem -\u003e FileSystem",
          "source": "src/System-FileSystem-Operators.html#-%3A",
          "type": "function"
        },
        "index": {
          "description": "Substraction operator Search and remove file directory from file system",
          "hierarchy": "System FileSystem Operators",
          "module": "System.FileSystem.Operators",
          "name": "(-:) -:",
          "normalized": "Path-\u003eFileSystem-\u003eFileSystem",
          "package": "FileSystem",
          "signature": "Path-\u003eFileSystem-\u003eFileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitution operator. \u003cem\u003eProvisional implementation\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem.Operators",
          "name": "(\u003c-:)",
          "package": "FileSystem",
          "signature": "([String], [String], Bool) -\u003e FileSystem -\u003e (FileSystem, Bool)",
          "source": "src/System-FileSystem-Operators.html#%3C-%3A",
          "type": "function"
        },
        "index": {
          "description": "Substitution operator Provisional implementation",
          "hierarchy": "System FileSystem Operators",
          "module": "System.FileSystem.Operators",
          "name": "(\u003c-:) \u003c-:",
          "normalized": "([String],[String],Bool)-\u003eFileSystem-\u003e(FileSystem,Bool)",
          "package": "FileSystem",
          "signature": "([String],[String],Bool)-\u003eFileSystem-\u003e(FileSystem,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-60--45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator for addition of new file system elements (\u003ccode\u003e\u003ca\u003eFSE\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.FileSystem.Operators",
          "name": "(\u003c\u003c:)",
          "package": "FileSystem",
          "signature": "FSE -\u003e FileSystem -\u003e FileSystem",
          "source": "src/System-FileSystem-Operators.html#%3C%3C%3A",
          "type": "function"
        },
        "index": {
          "description": "Operator for addition of new file system elements FSE",
          "hierarchy": "System FileSystem Operators",
          "module": "System.FileSystem.Operators",
          "name": "(\u003c\u003c:) \u003c\u003c:",
          "normalized": "FSE-\u003eFileSystem-\u003eFileSystem",
          "package": "FileSystem",
          "signature": "FSE-\u003eFileSystem-\u003eFileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-60--60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator for addition of new files/directories.\n\u003c/p\u003e",
          "module": "System.FileSystem.Operators",
          "name": "(\u003c:)",
          "package": "FileSystem",
          "signature": "Path -\u003e FileSystem -\u003e FileSystem",
          "source": "src/System-FileSystem-Operators.html#%3C%3A",
          "type": "function"
        },
        "index": {
          "description": "Operator for addition of new files directories",
          "hierarchy": "System FileSystem Operators",
          "module": "System.FileSystem.Operators",
          "name": "(\u003c:) \u003c:",
          "normalized": "Path-\u003eFileSystem-\u003eFileSystem",
          "package": "FileSystem",
          "signature": "Path-\u003eFileSystem-\u003eFileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescension operator. Extract the file system of an immediate subdirectory.\n\u003c/p\u003e",
          "module": "System.FileSystem.Operators",
          "name": "(=:)",
          "package": "FileSystem",
          "signature": "DirName -\u003e FileSystem -\u003e Maybe FileSystem",
          "source": "src/System-FileSystem-Operators.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "Descension operator Extract the file system of an immediate subdirectory",
          "hierarchy": "System FileSystem Operators",
          "module": "System.FileSystem.Operators",
          "name": "(=:) =:",
          "normalized": "DirName-\u003eFileSystem-\u003eMaybe FileSystem",
          "package": "FileSystem",
          "signature": "DirName-\u003eFileSystem-\u003eMaybe FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator for search a file.\n\u003c/p\u003e",
          "module": "System.FileSystem.Operators",
          "name": "(?:)",
          "package": "FileSystem",
          "signature": "FPath -\u003e FileSystem -\u003e Maybe File",
          "source": "src/System-FileSystem-Operators.html#%3F%3A",
          "type": "function"
        },
        "index": {
          "description": "Operator for search file",
          "hierarchy": "System FileSystem Operators",
          "module": "System.FileSystem.Operators",
          "name": "(?:) ?:",
          "normalized": "FPath-\u003eFileSystem-\u003eMaybe File",
          "package": "FileSystem",
          "signature": "FPath-\u003eFileSystem-\u003eMaybe File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Operators.html#v:-63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "Types",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "Types",
          "package": "FileSystem",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name for a directory.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "DirName",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#DirName",
          "type": "type"
        },
        "index": {
          "description": "name for directory",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "DirName",
          "package": "FileSystem",
          "partial": "Dir Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:DirName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list-based directory path.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "DirPath",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#DirPath",
          "type": "type"
        },
        "index": {
          "description": "list-based directory path",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "DirPath",
          "package": "FileSystem",
          "partial": "Dir Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:DirPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file path, composed by the path of the directory which contains it,\n and its file name.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "FPath",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FPath",
          "type": "type"
        },
        "index": {
          "description": "file path composed by the path of the directory which contains it and its file name",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FPath",
          "package": "FileSystem",
          "partial": "FPath",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of the \u003ccode\u003e\u003ca\u003eFST\u003c/a\u003e\u003c/code\u003e monad transformer to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "FS",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FS",
          "type": "type"
        },
        "index": {
          "description": "Application of the FST monad transformer to the Identity monad",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FS",
          "package": "FileSystem",
          "partial": "FS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile System Element: Each one of the elements in a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "FSE",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FSE",
          "type": "type"
        },
        "index": {
          "description": "File System Element Each one of the elements in FileSystem",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FSE",
          "package": "FileSystem",
          "partial": "FSE",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of file system computations.\n\u003c/p\u003e\u003cp\u003eCurrently, a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e structure.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "FSState",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FSState",
          "type": "type"
        },
        "index": {
          "description": "The state of file system computations Currently FileSystem structure",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FSState",
          "package": "FileSystem",
          "partial": "FSState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FSState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic transformer which adds a \u003ccode\u003e\u003ca\u003eFSState\u003c/a\u003e\u003c/code\u003e environment.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "FST",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FST",
          "type": "newtype"
        },
        "index": {
          "description": "Monadic transformer which adds FSState environment",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FST",
          "package": "FileSystem",
          "partial": "FST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complete file.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "File",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#File",
          "type": "data"
        },
        "index": {
          "description": "complete file",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "File",
          "package": "FileSystem",
          "partial": "File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe content of a file. Stored in a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "FileCnt",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FileCnt",
          "type": "type"
        },
        "index": {
          "description": "The content of file Stored in ByteString",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FileCnt",
          "package": "FileSystem",
          "partial": "File Cnt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FileCnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the content of a file.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "FileData",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FileData",
          "type": "data"
        },
        "index": {
          "description": "Information about the content of file",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FileData",
          "package": "FileSystem",
          "partial": "File Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name for a file.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "FileName",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FileName",
          "type": "type"
        },
        "index": {
          "description": "name for file",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FileName",
          "package": "FileSystem",
          "partial": "File Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file system structure. It stores a directory with files and subdirectories.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "FileSystem",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FileSystem",
          "type": "newtype"
        },
        "index": {
          "description": "The file system structure It stores directory with files and subdirectories",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FileSystem",
          "package": "FileSystem",
          "partial": "File System",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:FileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal Application: An application from somewhere over itself.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "InApp",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#InApp",
          "type": "type"
        },
        "index": {
          "description": "Internal Application An application from somewhere over itself",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "InApp",
          "package": "FileSystem",
          "partial": "In App",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:InApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path to a possible \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "Path",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#Path",
          "type": "data"
        },
        "index": {
          "description": "path to possible File",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "Path",
          "package": "FileSystem",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "Directory",
          "package": "FileSystem",
          "signature": "Directory",
          "source": "src/System-FileSystem-Types.html#FileSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "Directory",
          "package": "FileSystem",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "FD",
          "package": "FileSystem",
          "signature": "FD",
          "source": "src/System-FileSystem-Types.html#FileData",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "FD",
          "package": "FileSystem",
          "partial": "FD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:FD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "File",
          "package": "FileSystem",
          "signature": "File",
          "source": "src/System-FileSystem-Types.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "File",
          "package": "FileSystem",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "Path",
          "package": "FileSystem",
          "signature": "Path",
          "source": "src/System-FileSystem-Types.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "Path",
          "package": "FileSystem",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "WrapFST",
          "package": "FileSystem",
          "signature": "WrapFST",
          "source": "src/System-FileSystem-Types.html#FST",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "WrapFST",
          "package": "FileSystem",
          "partial": "Wrap FST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:WrapFST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "dirCnt",
          "package": "FileSystem",
          "signature": "[FSE]",
          "source": "src/System-FileSystem-Types.html#FileSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "dirCnt",
          "normalized": "[FSE]",
          "package": "FileSystem",
          "partial": "Cnt",
          "signature": "[FSE]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:dirCnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty file data.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "emptyFD",
          "package": "FileSystem",
          "signature": "FileData",
          "source": "src/System-FileSystem-Types.html#emptyFD",
          "type": "function"
        },
        "index": {
          "description": "An empty file data",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "emptyFD",
          "package": "FileSystem",
          "partial": "FD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:emptyFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty file system.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Types\",\"System.FileSystem\"]",
          "name": "emptyFileSystem",
          "package": "FileSystem",
          "signature": "FileSystem",
          "source": "src/System-FileSystem-Types.html#emptyFileSystem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:emptyFileSystem\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:emptyFileSystem\"]"
        },
        "index": {
          "description": "An empty file system",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "emptyFileSystem",
          "package": "FileSystem",
          "partial": "File System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:emptyFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eDirPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Types\",\"System.FileSystem\"]",
          "name": "fromDirPath",
          "package": "FileSystem",
          "signature": "DirPath -\u003e FilePath",
          "source": "src/System-FileSystem-Types.html#fromDirPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:fromDirPath\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fromDirPath\"]"
        },
        "index": {
          "description": "Translation between DirPath and FilePath",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "fromDirPath",
          "normalized": "DirPath-\u003eFilePath",
          "package": "FileSystem",
          "partial": "Dir Path",
          "signature": "DirPath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:fromDirPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eFPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Types\",\"System.FileSystem\"]",
          "name": "fromFPath",
          "package": "FileSystem",
          "signature": "FPath -\u003e FilePath",
          "source": "src/System-FileSystem-Types.html#fromFPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:fromFPath\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fromFPath\"]"
        },
        "index": {
          "description": "Translation between FPath and FilePath",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "fromFPath",
          "normalized": "FPath-\u003eFilePath",
          "package": "FileSystem",
          "partial": "FPath",
          "signature": "FPath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:fromFPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "getCnt",
          "package": "FileSystem",
          "signature": "FileCnt",
          "source": "src/System-FileSystem-Types.html#FileData",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "getCnt",
          "package": "FileSystem",
          "partial": "Cnt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:getCnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "getFD",
          "package": "FileSystem",
          "signature": "FileData",
          "source": "src/System-FileSystem-Types.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "getFD",
          "package": "FileSystem",
          "partial": "FD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:getFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "getFN",
          "package": "FileSystem",
          "signature": "FileName",
          "source": "src/System-FileSystem-Types.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "getFN",
          "package": "FileSystem",
          "partial": "FN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:getFN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "getLmt",
          "package": "FileSystem",
          "signature": "ClockTime",
          "source": "src/System-FileSystem-Types.html#FileData",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "getLmt",
          "package": "FileSystem",
          "partial": "Lmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:getLmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e contents a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "isFilePath",
          "package": "FileSystem",
          "signature": "Path -\u003e Bool",
          "source": "src/System-FileSystem-Types.html#isFilePath",
          "type": "function"
        },
        "index": {
          "description": "Check if Path contents File",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "isFilePath",
          "normalized": "Path-\u003eBool",
          "package": "FileSystem",
          "partial": "File Path",
          "signature": "Path-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:isFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function over a list of \u003ccode\u003e\u003ca\u003eFSE\u003c/a\u003e\u003c/code\u003e (File System Elements)\n to a function over \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem.Types",
          "name": "modDirCnt",
          "package": "FileSystem",
          "signature": "InApp [FSE] -\u003e InApp FileSystem",
          "source": "src/System-FileSystem-Types.html#modDirCnt",
          "type": "function"
        },
        "index": {
          "description": "Lift function over list of FSE File System Elements to function over FileSystem",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "modDirCnt",
          "normalized": "InApp[FSE]-\u003eInApp FileSystem",
          "package": "FileSystem",
          "partial": "Dir Cnt",
          "signature": "InApp[FSE]-\u003eInApp FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:modDirCnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "pathFile",
          "package": "FileSystem",
          "signature": "Maybe File",
          "source": "src/System-FileSystem-Types.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "pathFile",
          "package": "FileSystem",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:pathFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "pathList",
          "package": "FileSystem",
          "signature": "DirPath",
          "source": "src/System-FileSystem-Types.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "pathList",
          "package": "FileSystem",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:pathList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust a composition of \u003ccode\u003e\u003ca\u003erunIdentity\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunFST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Types\",\"System.FileSystem\"]",
          "name": "runFS",
          "package": "FileSystem",
          "signature": "FS a -\u003e FSState -\u003e (a, FSState)",
          "source": "src/System-FileSystem-Types.html#runFS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:runFS\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:runFS\"]"
        },
        "index": {
          "description": "Just composition of runIdentity and runFST",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "runFS",
          "normalized": "FS a-\u003eFSState-\u003e(a,FSState)",
          "package": "FileSystem",
          "partial": "FS",
          "signature": "FS a-\u003eFSState-\u003e(a,FSState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:runFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eFST\u003c/a\u003e\u003c/code\u003e computation, given an initial state.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Types\",\"System.FileSystem\"]",
          "name": "runFST",
          "package": "FileSystem",
          "signature": "FST m a -\u003e FSState -\u003e m (a, FSState)",
          "source": "src/System-FileSystem-Types.html#runFST",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:runFST\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:runFST\"]"
        },
        "index": {
          "description": "Run an FST computation given an initial state",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "runFST",
          "normalized": "FST a b-\u003eFSState-\u003ea(b,FSState)",
          "package": "FileSystem",
          "partial": "FST",
          "signature": "FST m a-\u003eFSState-\u003em(a,FSState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:runFST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDirPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Types\",\"System.FileSystem\"]",
          "name": "toDirPath",
          "package": "FileSystem",
          "signature": "FilePath -\u003e DirPath",
          "source": "src/System-FileSystem-Types.html#toDirPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:toDirPath\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:toDirPath\"]"
        },
        "index": {
          "description": "Translation between FilePath and DirPath",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "toDirPath",
          "normalized": "FilePath-\u003eDirPath",
          "package": "FileSystem",
          "partial": "Dir Path",
          "signature": "FilePath-\u003eDirPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:toDirPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslation between \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.FileSystem.Types\",\"System.FileSystem\"]",
          "name": "toFPath",
          "package": "FileSystem",
          "signature": "FilePath -\u003e FPath",
          "source": "src/System-FileSystem-Types.html#toFPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:toFPath\",\"http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:toFPath\"]"
        },
        "index": {
          "description": "Translation between FilePath and FPath",
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "toFPath",
          "normalized": "FilePath-\u003eFPath",
          "package": "FileSystem",
          "partial": "FPath",
          "signature": "FilePath-\u003eFPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:toFPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Types",
          "name": "unwrapFST",
          "package": "FileSystem",
          "signature": "StateT FSState m a",
          "source": "src/System-FileSystem-Types.html#FST",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem Types",
          "module": "System.FileSystem.Types",
          "name": "unwrapFST",
          "package": "FileSystem",
          "partial": "FST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Types.html#v:unwrapFST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem.Utils",
          "name": "Utils",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FileSystem Utils",
          "module": "System.FileSystem.Utils",
          "name": "Utils",
          "package": "FileSystem",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis operator is similar to \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e, but the argument is used twice.\n\u003c/p\u003e",
          "module": "System.FileSystem.Utils",
          "name": "($$)",
          "package": "FileSystem",
          "signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e b",
          "source": "src/System-FileSystem-Utils.html#%24%24",
          "type": "function"
        },
        "index": {
          "description": "This operator is similar to but the argument is used twice",
          "hierarchy": "System FileSystem Utils",
          "module": "System.FileSystem.Utils",
          "name": "($$) $$",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "FileSystem",
          "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eArrowChoice\u003c/a\u003e\u003c/code\u003e operator.\n Given an arrow \u003ccode\u003ea ~\u003e b\u003c/code\u003e and an arrow \u003ccode\u003ec ~\u003e d\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e a ~\u003e b \u003c|\u003e c ~\u003e d\n  = Either a c ~\u003e Either b d    { (a ~\u003e b) lifted with Left for Left values.\n                          with -{          \n                                { (c ~\u003e d) lifted with Right for Right values.\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eIts name comes from the union of\u003c/em\u003e \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003cem\u003eand\u003c/em\u003e \u003ccode\u003e\u003ca\u003e|||\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem.Utils",
          "name": "(\u003c|\u003e)",
          "package": "FileSystem",
          "signature": "f a b -\u003e f c d -\u003e f (Either a c) (Either b d)",
          "source": "src/System-FileSystem-Utils.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "An ArrowChoice operator Given an arrow and an arrow Either Either lifted with Left for Left values with lifted with Right for Right values Its name comes from the union of and",
          "hierarchy": "System FileSystem Utils",
          "module": "System.FileSystem.Utils",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "a b c-\u003ea d e-\u003ea(Either b d)(Either c e)",
          "package": "FileSystem",
          "signature": "f a b-\u003ef c d-\u003ef(Either a c)(Either b d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function over the state, and return its result.\n\u003c/p\u003e",
          "module": "System.FileSystem.Utils",
          "name": "apget",
          "package": "FileSystem",
          "signature": "(s -\u003e a) -\u003e m a",
          "source": "src/System-FileSystem-Utils.html#apget",
          "type": "function"
        },
        "index": {
          "description": "Apply function over the state and return its result",
          "hierarchy": "System FileSystem Utils",
          "module": "System.FileSystem.Utils",
          "name": "apget",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "FileSystem",
          "signature": "(s-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:apget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c/a\u003e\u003c/code\u003e operator as a function.\n\u003c/p\u003e",
          "module": "System.FileSystem.Utils",
          "name": "bind",
          "package": "FileSystem",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "source": "src/System-FileSystem-Utils.html#bind",
          "type": "function"
        },
        "index": {
          "description": "The operator as function",
          "hierarchy": "System FileSystem Utils",
          "module": "System.FileSystem.Utils",
          "name": "bind",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "FileSystem",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe resulting function of \u003ccode\u003e\u003ca\u003ecomb\u003c/a\u003e\u003c/code\u003e is such that it applies two (possible) different functions\n to a single element, and combine both results with the given operator, inside of an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e container.\n\u003c/p\u003e",
          "module": "System.FileSystem.Utils",
          "name": "comb",
          "package": "FileSystem",
          "signature": "(b -\u003e c -\u003e d)-\u003e (a -\u003e f b)-\u003e (a -\u003e f c)-\u003e a -\u003e f d",
          "type": "function"
        },
        "index": {
          "description": "The resulting function of comb is such that it applies two possible different functions to single element and combine both results with the given operator inside of an Applicative container",
          "hierarchy": "System FileSystem Utils",
          "module": "System.FileSystem.Utils",
          "name": "comb",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee a)-\u003e(d-\u003ee b)-\u003ed-\u003ee c",
          "package": "FileSystem",
          "signature": "(b-\u003ec-\u003ed)-\u003e(a-\u003ef b)-\u003e(a-\u003ef c)-\u003ea-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:comb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list \u003ccode\u003exs\u003c/code\u003e of pairs (monadic condition, monadic function),\n \u003ccode\u003e\u003ca\u003eoptions\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e applies to its argument the first function that\n satisfy the condition, and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no condition was satisfied.\n\u003c/p\u003e",
          "module": "System.FileSystem.Utils",
          "name": "options",
          "package": "FileSystem",
          "signature": "[(a -\u003e m Bool, a -\u003e m b)] -\u003e a -\u003e m (Maybe b)",
          "source": "src/System-FileSystem-Utils.html#options",
          "type": "function"
        },
        "index": {
          "description": "Given list xs of pairs monadic condition monadic function options xs applies to its argument the first function that satisfy the condition and returns Nothing if no condition was satisfied",
          "hierarchy": "System FileSystem Utils",
          "module": "System.FileSystem.Utils",
          "name": "options",
          "normalized": "[(a-\u003eb Bool,a-\u003eb c)]-\u003ea-\u003eb(Maybe c)",
          "package": "FileSystem",
          "signature": "[(a-\u003em Bool,a-\u003em b)]-\u003ea-\u003em(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a simple arrow to the same arrow applied to the two components of a pair.\n\u003c/p\u003e",
          "module": "System.FileSystem.Utils",
          "name": "pairMap",
          "package": "FileSystem",
          "signature": "f a b -\u003e f (a, a) (b, b)",
          "source": "src/System-FileSystem-Utils.html#pairMap",
          "type": "function"
        },
        "index": {
          "description": "Transforms simple arrow to the same arrow applied to the two components of pair",
          "hierarchy": "System FileSystem Utils",
          "module": "System.FileSystem.Utils",
          "name": "pairMap",
          "normalized": "a b c-\u003ea(b,b)(c,c)",
          "package": "FileSystem",
          "partial": "Map",
          "signature": "f a b-\u003ef(a,a)(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:pairMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function just adds a third component to a two-components tuple.\n\u003c/p\u003e",
          "module": "System.FileSystem.Utils",
          "name": "tup3",
          "package": "FileSystem",
          "signature": "c -\u003e (a, b) -\u003e (a, b, c)",
          "source": "src/System-FileSystem-Utils.html#tup3",
          "type": "function"
        },
        "index": {
          "description": "This function just adds third component to two-components tuple",
          "hierarchy": "System FileSystem Utils",
          "module": "System.FileSystem.Utils",
          "name": "tup3",
          "normalized": "a-\u003e(b,c)-\u003e(b,c,a)",
          "package": "FileSystem",
          "signature": "c-\u003e(a,b)-\u003e(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem-Utils.html#v:tup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "FileSystem",
          "package": "FileSystem",
          "source": "src/System-FileSystem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "FileSystem",
          "package": "FileSystem",
          "partial": "File System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "ByteString",
          "package": "FileSystem",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "ByteString",
          "package": "FileSystem",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of the internal clock time.\n Clock times may be compared, converted to strings, or converted to an\n external calendar time \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e for I/O or other manipulations.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "ClockTime",
          "package": "FileSystem",
          "type": "data"
        },
        "index": {
          "description": "representation of the internal clock time Clock times may be compared converted to strings or converted to an external calendar time CalendarTime for or other manipulations",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "ClockTime",
          "package": "FileSystem",
          "partial": "Clock Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:ClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name for a directory.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "DirName",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#DirName",
          "type": "type"
        },
        "index": {
          "description": "name for directory",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "DirName",
          "package": "FileSystem",
          "partial": "Dir Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:DirName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list-based directory path.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "DirPath",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#DirPath",
          "type": "type"
        },
        "index": {
          "description": "list-based directory path",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "DirPath",
          "package": "FileSystem",
          "partial": "Dir Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:DirPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file path, composed by the path of the directory which contains it,\n and its file name.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "FPath",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FPath",
          "type": "type"
        },
        "index": {
          "description": "file path composed by the path of the directory which contains it and its file name",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "FPath",
          "package": "FileSystem",
          "partial": "FPath",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of the \u003ccode\u003e\u003ca\u003eFST\u003c/a\u003e\u003c/code\u003e monad transformer to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "FS",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FS",
          "type": "type"
        },
        "index": {
          "description": "Application of the FST monad transformer to the Identity monad",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "FS",
          "package": "FileSystem",
          "partial": "FS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of file system computations.\n\u003c/p\u003e\u003cp\u003eCurrently, a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e structure.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "FSState",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FSState",
          "type": "type"
        },
        "index": {
          "description": "The state of file system computations Currently FileSystem structure",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "FSState",
          "package": "FileSystem",
          "partial": "FSState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FSState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic transformer which adds a \u003ccode\u003e\u003ca\u003eFSState\u003c/a\u003e\u003c/code\u003e environment.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "FST",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FST",
          "type": "data"
        },
        "index": {
          "description": "Monadic transformer which adds FSState environment",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "FST",
          "package": "FileSystem",
          "partial": "FST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complete file.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "File",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#File",
          "type": "data"
        },
        "index": {
          "description": "complete file",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "File",
          "package": "FileSystem",
          "partial": "File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name for a file.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "FileName",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FileName",
          "type": "type"
        },
        "index": {
          "description": "name for file",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "FileName",
          "package": "FileSystem",
          "partial": "File Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file system structure. It stores a directory with files and subdirectories.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "FileSystem",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#FileSystem",
          "type": "data"
        },
        "index": {
          "description": "The file system structure It stores directory with files and subdirectories",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "FileSystem",
          "package": "FileSystem",
          "partial": "File System",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:FileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal Application: An application from somewhere over itself.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "InApp",
          "package": "FileSystem",
          "source": "src/System-FileSystem-Types.html#InApp",
          "type": "type"
        },
        "index": {
          "description": "Internal Application An application from somewhere over itself",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "InApp",
          "package": "FileSystem",
          "partial": "In App",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#t:InApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty file with the given \u003ccode\u003e\u003ca\u003eFileName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "emptyFile",
          "package": "FileSystem",
          "signature": "FileName -\u003e File",
          "source": "src/System-FileSystem.html#emptyFile",
          "type": "function"
        },
        "index": {
          "description": "Create an empty file with the given FileName",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "emptyFile",
          "normalized": "FileName-\u003eFile",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FileName-\u003eFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:emptyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the size of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fileSize",
          "package": "FileSystem",
          "signature": "File -\u003e Int",
          "source": "src/System-FileSystem.html#fileSize",
          "type": "function"
        },
        "index": {
          "description": "Calculate the size of File",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fileSize",
          "normalized": "File-\u003eInt",
          "package": "FileSystem",
          "partial": "Size",
          "signature": "File-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_copyFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e FilePath -\u003e m Bool",
          "source": "src/System-FileSystem.html#fs_copyFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_copyFile",
          "normalized": "FilePath-\u003eFilePath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003eFilePath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_copyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies a file from a location to another.\n Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the file was found and copied.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_copyFileL",
          "package": "FileSystem",
          "signature": "FPath -\u003e FPath -\u003e m Bool",
          "source": "src/System-FileSystem.html#fs_copyFileL",
          "type": "function"
        },
        "index": {
          "description": "Copies file from location to another Returns True if the file was found and copied",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_copyFileL",
          "normalized": "FPath-\u003eFPath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FPath-\u003eFPath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_copyFileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_createDirectory",
          "package": "FileSystem",
          "signature": "FilePath -\u003e m ()",
          "source": "src/System-FileSystem.html#fs_createDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_createDirectory",
          "normalized": "FilePath-\u003ea()",
          "package": "FileSystem",
          "partial": "Directory",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_createDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new directory. If the directory already exists, it does nothing.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_createDirectoryL",
          "package": "FileSystem",
          "signature": "DirPath -\u003e m ()",
          "source": "src/System-FileSystem.html#fs_createDirectoryL",
          "type": "function"
        },
        "index": {
          "description": "Creates new directory If the directory already exists it does nothing",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_createDirectoryL",
          "normalized": "DirPath-\u003ea()",
          "package": "FileSystem",
          "partial": "Directory",
          "signature": "DirPath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_createDirectoryL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_doesDirectoryExist",
          "package": "FileSystem",
          "signature": "FilePath -\u003e m Bool",
          "source": "src/System-FileSystem.html#fs_doesDirectoryExist",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_doesDirectoryExist",
          "normalized": "FilePath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "Directory Exist",
          "signature": "FilePath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_doesDirectoryExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a directory exists.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_doesDirectoryExistL",
          "package": "FileSystem",
          "signature": "DirPath -\u003e m Bool",
          "source": "src/System-FileSystem.html#fs_doesDirectoryExistL",
          "type": "function"
        },
        "index": {
          "description": "Checks if directory exists",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_doesDirectoryExistL",
          "normalized": "DirPath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "Directory Exist",
          "signature": "DirPath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_doesDirectoryExistL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_doesFileExist",
          "package": "FileSystem",
          "signature": "FilePath -\u003e m Bool",
          "source": "src/System-FileSystem.html#fs_doesFileExist",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_doesFileExist",
          "normalized": "FilePath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File Exist",
          "signature": "FilePath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_doesFileExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a file exists.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_doesFileExistL",
          "package": "FileSystem",
          "signature": "FPath -\u003e m Bool",
          "source": "src/System-FileSystem.html#fs_doesFileExistL",
          "type": "function"
        },
        "index": {
          "description": "Checks if file exists",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_doesFileExistL",
          "normalized": "FPath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File Exist",
          "signature": "FPath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_doesFileExistL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_getDirectoryContents",
          "package": "FileSystem",
          "signature": "FilePath -\u003e m (Maybe ([DirName], [FileName]))",
          "source": "src/System-FileSystem.html#fs_getDirectoryContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_getDirectoryContents",
          "normalized": "FilePath-\u003ea(Maybe([DirName],[FileName]))",
          "package": "FileSystem",
          "partial": "Directory Contents",
          "signature": "FilePath-\u003em(Maybe([DirName],[FileName]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_getDirectoryContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all directory names and file names located in the given directory.\n It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the directory does not exist.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_getDirectoryContentsL",
          "package": "FileSystem",
          "signature": "DirPath -\u003e m (Maybe ([DirName], [FileName]))",
          "source": "src/System-FileSystem.html#fs_getDirectoryContentsL",
          "type": "function"
        },
        "index": {
          "description": "Returns all directory names and file names located in the given directory It returns Nothing if the directory does not exist",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_getDirectoryContentsL",
          "normalized": "DirPath-\u003ea(Maybe([DirName],[FileName]))",
          "package": "FileSystem",
          "partial": "Directory Contents",
          "signature": "DirPath-\u003em(Maybe([DirName],[FileName]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_getDirectoryContentsL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_getModificationTime",
          "package": "FileSystem",
          "signature": "FilePath -\u003e m (Maybe ClockTime)",
          "source": "src/System-FileSystem.html#fs_getModificationTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_getModificationTime",
          "normalized": "FilePath-\u003ea(Maybe ClockTime)",
          "package": "FileSystem",
          "partial": "Modification Time",
          "signature": "FilePath-\u003em(Maybe ClockTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_getModificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the last modification time of a file. It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the file doesn't exist.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_getModificationTimeL",
          "package": "FileSystem",
          "signature": "FPath -\u003e m (Maybe ClockTime)",
          "source": "src/System-FileSystem.html#fs_getModificationTimeL",
          "type": "function"
        },
        "index": {
          "description": "Gets the last modification time of file It returns Nothing if the file doesn exist",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_getModificationTimeL",
          "normalized": "FPath-\u003ea(Maybe ClockTime)",
          "package": "FileSystem",
          "partial": "Modification Time",
          "signature": "FPath-\u003em(Maybe ClockTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_getModificationTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_readFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e m (Maybe ByteString)",
          "source": "src/System-FileSystem.html#fs_readFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_readFile",
          "normalized": "FilePath-\u003ea(Maybe ByteString)",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a file. It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the file can't be found.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_readFileL",
          "package": "FileSystem",
          "signature": "FPath -\u003e m (Maybe ByteString)",
          "source": "src/System-FileSystem.html#fs_readFileL",
          "type": "function"
        },
        "index": {
          "description": "Reads file It returns Nothing if the file can be found",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_readFileL",
          "normalized": "FPath-\u003ea(Maybe ByteString)",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FPath-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_readFileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_removeDirectory",
          "package": "FileSystem",
          "signature": "FilePath -\u003e m ()",
          "source": "src/System-FileSystem.html#fs_removeDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_removeDirectory",
          "normalized": "FilePath-\u003ea()",
          "package": "FileSystem",
          "partial": "Directory",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_removeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a directory, with all its content.\n If the directory does not exist, it does nothing.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_removeDirectoryL",
          "package": "FileSystem",
          "signature": "DirPath -\u003e m ()",
          "source": "src/System-FileSystem.html#fs_removeDirectoryL",
          "type": "function"
        },
        "index": {
          "description": "Removes directory with all its content If the directory does not exist it does nothing",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_removeDirectoryL",
          "normalized": "DirPath-\u003ea()",
          "package": "FileSystem",
          "partial": "Directory",
          "signature": "DirPath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_removeDirectoryL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_removeFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e m ()",
          "source": "src/System-FileSystem.html#fs_removeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_removeFile",
          "normalized": "FilePath-\u003ea()",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_removeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a file. If the file does not exist, it does nothing.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_removeFileL",
          "package": "FileSystem",
          "signature": "FPath -\u003e m ()",
          "source": "src/System-FileSystem.html#fs_removeFileL",
          "type": "function"
        },
        "index": {
          "description": "Removes file If the file does not exist it does nothing",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_removeFileL",
          "normalized": "FPath-\u003ea()",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FPath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_removeFileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_renameDirectory",
          "package": "FileSystem",
          "signature": "FilePath -\u003e FilePath -\u003e m Bool",
          "source": "src/System-FileSystem.html#fs_renameDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_renameDirectory",
          "normalized": "FilePath-\u003eFilePath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "Directory",
          "signature": "FilePath-\u003eFilePath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_renameDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenames a directory.\n If the directory can't be found, it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_renameDirectoryL",
          "package": "FileSystem",
          "signature": "DirPath -\u003e DirPath -\u003e m Bool",
          "source": "src/System-FileSystem.html#fs_renameDirectoryL",
          "type": "function"
        },
        "index": {
          "description": "Renames directory If the directory can be found it returns False",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_renameDirectoryL",
          "normalized": "DirPath-\u003eDirPath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "Directory",
          "signature": "DirPath-\u003eDirPath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_renameDirectoryL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_renameFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e FileName -\u003e FileName -\u003e m Bool",
          "source": "src/System-FileSystem.html#fs_renameFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_renameFile",
          "normalized": "FilePath-\u003eFileName-\u003eFileName-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003eFileName-\u003eFileName-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_renameFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenames a file. First, you must specify the directory where the file is.\n If the file can't be found, it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_renameFileL",
          "package": "FileSystem",
          "signature": "DirPath-\u003e FileName-\u003e FileName-\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Renames file First you must specify the directory where the file is If the file can be found it returns False",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_renameFileL",
          "normalized": "DirPath-\u003eFileName-\u003eFileName-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File",
          "signature": "DirPath-\u003eFileName-\u003eFileName-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_renameFileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "fs_writeFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e ByteString -\u003e m ()",
          "source": "src/System-FileSystem.html#fs_writeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_writeFile",
          "normalized": "FilePath-\u003eByteString-\u003ea()",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a file. If the files already exists, it is overwritten.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "fs_writeFileL",
          "package": "FileSystem",
          "signature": "FPath -\u003e ByteString -\u003e m ()",
          "source": "src/System-FileSystem.html#fs_writeFileL",
          "type": "function"
        },
        "index": {
          "description": "Writes file If the files already exists it is overwritten",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "fs_writeFileL",
          "normalized": "FPath-\u003eByteString-\u003ea()",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FPath-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:fs_writeFileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "getFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e m (Maybe File)",
          "source": "src/System-FileSystem.html#getFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "getFile",
          "normalized": "FilePath-\u003ea(Maybe File)",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003em(Maybe File)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the content of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "getFileContent",
          "package": "FileSystem",
          "signature": "File -\u003e ByteString",
          "source": "src/System-FileSystem.html#getFileContent",
          "type": "function"
        },
        "index": {
          "description": "Extract the content of File",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "getFileContent",
          "normalized": "File-\u003eByteString",
          "package": "FileSystem",
          "partial": "File Content",
          "signature": "File-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a file from the file system.\n It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e is not found.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "getFileL",
          "package": "FileSystem",
          "signature": "FPath-\u003e m (Maybe File)",
          "type": "function"
        },
        "index": {
          "description": "Gets file from the file system It returns Nothing if the File is not found",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "getFileL",
          "normalized": "FPath-\u003ea(Maybe File)",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FPath-\u003em(Maybe File)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getFileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "getFileName",
          "package": "FileSystem",
          "signature": "File -\u003e FileName",
          "source": "src/System-FileSystem.html#getFileName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of File",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "getFileName",
          "normalized": "File-\u003eFileName",
          "package": "FileSystem",
          "partial": "File Name",
          "signature": "File-\u003eFileName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last modification time of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "getModifTime",
          "package": "FileSystem",
          "signature": "File -\u003e ClockTime",
          "source": "src/System-FileSystem.html#getModifTime",
          "type": "function"
        },
        "index": {
          "description": "Get the last modification time of File",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "getModifTime",
          "normalized": "File-\u003eClockTime",
          "package": "FileSystem",
          "partial": "Modif Time",
          "signature": "File-\u003eClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:getModifTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all the \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003es of a \u003ccode\u003e\u003ca\u003eFileSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "mapFiles",
          "package": "FileSystem",
          "signature": "InApp File -\u003e InApp FileSystem",
          "source": "src/System-FileSystem.html#mapFiles",
          "type": "function"
        },
        "index": {
          "description": "Map function over all the File of FileSystem",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "mapFiles",
          "normalized": "InApp File-\u003eInApp FileSystem",
          "package": "FileSystem",
          "partial": "Files",
          "signature": "InApp File-\u003eInApp FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:mapFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "modFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e InApp File -\u003e m Bool",
          "source": "src/System-FileSystem.html#modFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "modFile",
          "normalized": "FilePath-\u003eInApp File-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003eInApp File-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:modFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies a file with the given application. It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the file was found and modified.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "modFileL",
          "package": "FileSystem",
          "signature": "FPath -\u003e InApp File -\u003e m Bool",
          "source": "src/System-FileSystem.html#modFileL",
          "type": "function"
        },
        "index": {
          "description": "Modifies file with the given application It returns True if the file was found and modified",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "modFileL",
          "normalized": "FPath-\u003eInApp File-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FPath-\u003eInApp File-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:modFileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "moveFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e FilePath -\u003e m Bool",
          "source": "src/System-FileSystem.html#moveFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "moveFile",
          "normalized": "FilePath-\u003eFilePath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003eFilePath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:moveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a file.\n It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the file exists and has been moved.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "moveFileL",
          "package": "FileSystem",
          "signature": "FPath-\u003e FPath-\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Moves file It returns True if the file exists and has been moved",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "moveFileL",
          "normalized": "FPath-\u003eFPath-\u003ea Bool",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FPath-\u003eFPath-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:moveFileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a new file with an initial \u003ccode\u003e\u003ca\u003eFileName\u003c/a\u003e\u003c/code\u003e and content.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "newFile",
          "package": "FileSystem",
          "signature": "FileName -\u003e ByteString -\u003e File",
          "source": "src/System-FileSystem.html#newFile",
          "type": "function"
        },
        "index": {
          "description": "Build new file with an initial FileName and content",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "newFile",
          "normalized": "FileName-\u003eByteString-\u003eFile",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FileName-\u003eByteString-\u003eFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:newFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "putFile",
          "package": "FileSystem",
          "signature": "FilePath -\u003e File -\u003e m ()",
          "source": "src/System-FileSystem.html#putFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "putFile",
          "normalized": "FilePath-\u003eFile-\u003ea()",
          "package": "FileSystem",
          "partial": "File",
          "signature": "FilePath-\u003eFile-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:putFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a file in the given directory. It creates the parent directory if missing.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "putFileL",
          "package": "FileSystem",
          "signature": "DirPath-\u003e File-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Puts file in the given directory It creates the parent directory if missing",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "putFileL",
          "normalized": "DirPath-\u003eFile-\u003ea()",
          "package": "FileSystem",
          "partial": "File",
          "signature": "DirPath-\u003eFile-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:putFileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the content of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e to the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "setFileContent",
          "package": "FileSystem",
          "signature": "ByteString -\u003e File -\u003e File",
          "source": "src/System-FileSystem.html#setFileContent",
          "type": "function"
        },
        "index": {
          "description": "Set the content of File to the given ByteString",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "setFileContent",
          "normalized": "ByteString-\u003eFile-\u003eFile",
          "package": "FileSystem",
          "partial": "File Content",
          "signature": "ByteString-\u003eFile-\u003eFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:setFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e with the given \u003ccode\u003e\u003ca\u003eFileName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "setFileName",
          "package": "FileSystem",
          "signature": "FileName -\u003e File -\u003e File",
          "source": "src/System-FileSystem.html#setFileName",
          "type": "function"
        },
        "index": {
          "description": "Rename File with the given FileName",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "setFileName",
          "normalized": "FileName-\u003eFile-\u003eFile",
          "package": "FileSystem",
          "partial": "File Name",
          "signature": "FileName-\u003eFile-\u003eFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:setFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the last modification time of a \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "setModifTime",
          "package": "FileSystem",
          "signature": "ClockTime -\u003e File -\u003e File",
          "source": "src/System-FileSystem.html#setModifTime",
          "type": "function"
        },
        "index": {
          "description": "Set the last modification time of File",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "setModifTime",
          "normalized": "ClockTime-\u003eFile-\u003eFile",
          "package": "FileSystem",
          "partial": "Modif Time",
          "signature": "ClockTime-\u003eFile-\u003eFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:setModifTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FileSystem",
          "name": "writeFileTime",
          "package": "FileSystem",
          "signature": "FilePath -\u003e ByteString -\u003e m ()",
          "source": "src/System-FileSystem.html#writeFileTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "writeFileTime",
          "normalized": "FilePath-\u003eByteString-\u003ea()",
          "package": "FileSystem",
          "partial": "File Time",
          "signature": "FilePath-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:writeFileTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a file, changing its last modification time to the current time.\n If the file already exists, it is overwritten.\n \u003cem\u003eNote that MonadIO instance is needed\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.FileSystem",
          "name": "writeFileTimeL",
          "package": "FileSystem",
          "signature": "FPath -\u003e ByteString -\u003e m ()",
          "source": "src/System-FileSystem.html#writeFileTimeL",
          "type": "function"
        },
        "index": {
          "description": "Writes file changing its last modification time to the current time If the file already exists it is overwritten Note that MonadIO instance is needed",
          "hierarchy": "System FileSystem",
          "module": "System.FileSystem",
          "name": "writeFileTimeL",
          "normalized": "FPath-\u003eByteString-\u003ea()",
          "package": "FileSystem",
          "partial": "File Time",
          "signature": "FPath-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileSystem/docs/System-FileSystem.html#v:writeFileTimeL"
      }
    }
  ]
]