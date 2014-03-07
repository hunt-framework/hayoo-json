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
        "word": "fsutils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of file system utilities that appear to be missing from\n Directory, FilePath, Prelude, etc. Some of these may overlap with MissingH\n but the versions here will probably be more simplistic. Furthermore, this\n library is focused on this one thing and not a whole bunch of things.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Path",
          "name": "Path",
          "package": "fsutils",
          "source": "src/System-Path.html",
          "type": "module"
        },
        "index": {
          "description": "collection of file system utilities that appear to be missing from Directory FilePath Prelude etc Some of these may overlap with MissingH but the versions here will probably be more simplistic Furthermore this library is focused on this one thing and not whole bunch of things",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "Path",
          "package": "fsutils",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can use this data type to represent the pieces of a directory.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "Directory",
          "package": "fsutils",
          "source": "src/System-Path.html#Directory",
          "type": "data"
        },
        "index": {
          "description": "We can use this data type to represent the pieces of directory",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "Directory",
          "package": "fsutils",
          "partial": "Directory",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#t:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a directory recursively. Moves every file, creates every directory.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "copyDir",
          "package": "fsutils",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-Path.html#copyDir",
          "type": "function"
        },
        "index": {
          "description": "Copy directory recursively Moves every file creates every directory",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "copyDir",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "fsutils",
          "partial": "Dir",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:copyDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Directory instance from a FilePath.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "createDir",
          "package": "fsutils",
          "signature": "FilePath -\u003e IO Directory",
          "source": "src/System-Path.html#createDir",
          "type": "function"
        },
        "index": {
          "description": "Creates Directory instance from FilePath",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "createDir",
          "normalized": "FilePath-\u003eIO Directory",
          "package": "fsutils",
          "partial": "Dir",
          "signature": "FilePath-\u003eIO Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:createDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path of the directory itself.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "dirPath",
          "package": "fsutils",
          "signature": "Directory -\u003e FilePath",
          "source": "src/System-Path.html#dirPath",
          "type": "function"
        },
        "index": {
          "description": "The path of the directory itself",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "dirPath",
          "normalized": "Directory-\u003eFilePath",
          "package": "fsutils",
          "partial": "Path",
          "signature": "Directory-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:dirPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively list the contents of a directory. Depth-first.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "fileList",
          "package": "fsutils",
          "signature": "FilePath -\u003e IO [FilePath]",
          "source": "src/System-Path.html#fileList",
          "type": "function"
        },
        "index": {
          "description": "Recursively list the contents of directory Depth-first",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "fileList",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "fsutils",
          "partial": "List",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:fileList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll files contained in this directory.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "files",
          "package": "fsutils",
          "signature": "Directory -\u003e [FilePath]",
          "source": "src/System-Path.html#files",
          "type": "function"
        },
        "index": {
          "description": "All files contained in this directory",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "files",
          "normalized": "Directory-\u003e[FilePath]",
          "package": "fsutils",
          "signature": "Directory-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove useless paths from a list of paths.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "filterUseless",
          "package": "fsutils",
          "signature": "[FilePath] -\u003e [FilePath]",
          "source": "src/System-Path.html#filterUseless",
          "type": "function"
        },
        "index": {
          "description": "Remove useless paths from list of paths",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "filterUseless",
          "normalized": "[FilePath]-\u003e[FilePath]",
          "package": "fsutils",
          "partial": "Useless",
          "signature": "[FilePath]-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:filterUseless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of nodes in a tree via a depth-first walk.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "mtreeList",
          "package": "fsutils",
          "signature": "(a -\u003e m [a]) -\u003e a -\u003e m [a]",
          "source": "src/System-Path.html#mtreeList",
          "type": "function"
        },
        "index": {
          "description": "Returns list of nodes in tree via depth-first walk",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "mtreeList",
          "normalized": "(a-\u003eb[a])-\u003ea-\u003eb[a]",
          "package": "fsutils",
          "partial": "List",
          "signature": "(a-\u003em[a])-\u003ea-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:mtreeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a root (prefix), remove it from a path. This is useful\n for getting the filename and subdirs of a path inside of a root.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "removeRoot",
          "package": "fsutils",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-Path.html#removeRoot",
          "type": "function"
        },
        "index": {
          "description": "Given root prefix remove it from path This is useful for getting the filename and subdirs of path inside of root",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "removeRoot",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "fsutils",
          "partial": "Root",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:removeRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a root path, a new root path, and a path to be changed,\n removes the old root from the path and replaces it with to.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "replaceRoot",
          "package": "fsutils",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-Path.html#replaceRoot",
          "type": "function"
        },
        "index": {
          "description": "Given root path new root path and path to be changed removes the old root from the path and replaces it with to",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "replaceRoot",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath",
          "package": "fsutils",
          "partial": "Root",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:replaceRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll subdirectories of this directory.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "subDirs",
          "package": "fsutils",
          "signature": "Directory -\u003e [FilePath]",
          "source": "src/System-Path.html#subDirs",
          "type": "function"
        },
        "index": {
          "description": "All subdirectories of this directory",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "subDirs",
          "normalized": "Directory-\u003e[FilePath]",
          "package": "fsutils",
          "partial": "Dirs",
          "signature": "Directory-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:subDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWalk a directory depth-first. Similar to Python's os.walk and fs.core/walk\n from the fs Clojure library.\n\u003c/p\u003e",
          "module": "System.Path",
          "name": "walkDir",
          "package": "fsutils",
          "signature": "FilePath -\u003e IO [Directory]",
          "source": "src/System-Path.html#walkDir",
          "type": "function"
        },
        "index": {
          "description": "Walk directory depth-first Similar to Python os.walk and fs.core walk from the fs Clojure library",
          "hierarchy": "System Path",
          "module": "System.Path",
          "name": "walkDir",
          "normalized": "FilePath-\u003eIO[Directory]",
          "package": "fsutils",
          "partial": "Dir",
          "signature": "FilePath-\u003eIO[Directory]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsutils/docs/System-Path.html#v:walkDir"
      }
    }
  ]
]