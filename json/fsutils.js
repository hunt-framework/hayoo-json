[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of file system utilities that appear to be missing from\n Directory, FilePath, Prelude, etc. Some of these may overlap with MissingH\n but the versions here will probably be more simplistic. Furthermore, this\n library is focused on this one thing and not a whole bunch of things.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "module",
        "fct-source": "src/System-Path.html",
        "fct-type": "module",
        "title": "Path"
      },
      "index": {
        "description": "collection of file system utilities that appear to be missing from Directory FilePath Prelude etc Some of these may overlap with MissingH but the versions here will probably be more simplistic Furthermore this library is focused on this one thing and not whole bunch of things",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "Path",
        "normalized": "",
        "package": "fsutils",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#t:Directory",
      "description": {
        "fct-descr": "\u003cp\u003eWe can use this data type to represent the pieces of a directory.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "data",
        "fct-source": "src/System-Path.html#Directory",
        "fct-type": "data",
        "title": "Directory"
      },
      "index": {
        "description": "We can use this data type to represent the pieces of directory",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "Directory",
        "normalized": "",
        "package": "fsutils",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:copyDir",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a directory recursively. Moves every file, creates every directory.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-Path.html#copyDir",
        "fct-type": "function",
        "title": "copyDir"
      },
      "index": {
        "description": "Copy directory recursively Moves every file creates every directory",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "copyDir",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "fsutils",
        "partial": "Dir",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:createDir",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a Directory instance from a FilePath.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "FilePath -\u003e IO Directory",
        "fct-source": "src/System-Path.html#createDir",
        "fct-type": "function",
        "title": "createDir"
      },
      "index": {
        "description": "Creates Directory instance from FilePath",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "createDir",
        "normalized": "FilePath-\u003eIO Directory",
        "package": "fsutils",
        "partial": "Dir",
        "signature": "FilePath-\u003eIO Directory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:dirPath",
      "description": {
        "fct-descr": "\u003cp\u003eThe path of the directory itself.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "Directory -\u003e FilePath",
        "fct-source": "src/System-Path.html#dirPath",
        "fct-type": "function",
        "title": "dirPath"
      },
      "index": {
        "description": "The path of the directory itself",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "dirPath",
        "normalized": "Directory-\u003eFilePath",
        "package": "fsutils",
        "partial": "Path",
        "signature": "Directory-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:fileList",
      "description": {
        "fct-descr": "\u003cp\u003eRecursively list the contents of a directory. Depth-first.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "FilePath -\u003e IO [FilePath]",
        "fct-source": "src/System-Path.html#fileList",
        "fct-type": "function",
        "title": "fileList"
      },
      "index": {
        "description": "Recursively list the contents of directory Depth-first",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "fileList",
        "normalized": "FilePath-\u003eIO[FilePath]",
        "package": "fsutils",
        "partial": "List",
        "signature": "FilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:files",
      "description": {
        "fct-descr": "\u003cp\u003eAll files contained in this directory.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "Directory -\u003e [FilePath]",
        "fct-source": "src/System-Path.html#files",
        "fct-type": "function",
        "title": "files"
      },
      "index": {
        "description": "All files contained in this directory",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "files",
        "normalized": "Directory-\u003e[FilePath]",
        "package": "fsutils",
        "partial": "",
        "signature": "Directory-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:filterUseless",
      "description": {
        "fct-descr": "\u003cp\u003eRemove useless paths from a list of paths.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "[FilePath] -\u003e [FilePath]",
        "fct-source": "src/System-Path.html#filterUseless",
        "fct-type": "function",
        "title": "filterUseless"
      },
      "index": {
        "description": "Remove useless paths from list of paths",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "filterUseless",
        "normalized": "[FilePath]-\u003e[FilePath]",
        "package": "fsutils",
        "partial": "Useless",
        "signature": "[FilePath]-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:mtreeList",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of nodes in a tree via a depth-first walk.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "(a -\u003e m [a]) -\u003e a -\u003e m [a]",
        "fct-source": "src/System-Path.html#mtreeList",
        "fct-type": "function",
        "title": "mtreeList"
      },
      "index": {
        "description": "Returns list of nodes in tree via depth-first walk",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "mtreeList",
        "normalized": "(a-\u003eb[a])-\u003ea-\u003eb[a]",
        "package": "fsutils",
        "partial": "List",
        "signature": "(a-\u003em[a])-\u003ea-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:removeRoot",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a root (prefix), remove it from a path. This is useful\n for getting the filename and subdirs of a path inside of a root.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/System-Path.html#removeRoot",
        "fct-type": "function",
        "title": "removeRoot"
      },
      "index": {
        "description": "Given root prefix remove it from path This is useful for getting the filename and subdirs of path inside of root",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "removeRoot",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "fsutils",
        "partial": "Root",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:replaceRoot",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a root path, a new root path, and a path to be changed,\n removes the old root from the path and replaces it with to.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/System-Path.html#replaceRoot",
        "fct-type": "function",
        "title": "replaceRoot"
      },
      "index": {
        "description": "Given root path new root path and path to be changed removes the old root from the path and replaces it with to",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "replaceRoot",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath",
        "package": "fsutils",
        "partial": "Root",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:subDirs",
      "description": {
        "fct-descr": "\u003cp\u003eAll subdirectories of this directory.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "Directory -\u003e [FilePath]",
        "fct-source": "src/System-Path.html#subDirs",
        "fct-type": "function",
        "title": "subDirs"
      },
      "index": {
        "description": "All subdirectories of this directory",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "subDirs",
        "normalized": "Directory-\u003e[FilePath]",
        "package": "fsutils",
        "partial": "Dirs",
        "signature": "Directory-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:walkDir",
      "description": {
        "fct-descr": "\u003cp\u003eWalk a directory depth-first. Similar to Python's os.walk and fs.core/walk\n from the fs Clojure library.\n\u003c/p\u003e",
        "fct-module": "System.Path",
        "fct-package": "fsutils",
        "fct-signature": "FilePath -\u003e IO [Directory]",
        "fct-source": "src/System-Path.html#walkDir",
        "fct-type": "function",
        "title": "walkDir"
      },
      "index": {
        "description": "Walk directory depth-first Similar to Python os.walk and fs.core walk from the fs Clojure library",
        "hierarchy": "System Path",
        "module": "System.Path",
        "name": "walkDir",
        "normalized": "FilePath-\u003eIO[Directory]",
        "package": "fsutils",
        "partial": "Dir",
        "signature": "FilePath-\u003eIO[Directory]"
      }
    }
  }
]