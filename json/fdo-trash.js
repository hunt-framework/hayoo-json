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
        "word": "fdo-trash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "Trash",
          "package": "fdo-trash",
          "source": "src/Freedesktop-Trash.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "Trash",
          "package": "fdo-trash",
          "partial": "Trash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "TrashFile",
          "package": "fdo-trash",
          "source": "src/Freedesktop-Trash.html#TrashFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "TrashFile",
          "package": "fdo-trash",
          "partial": "Trash File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#t:TrashFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "TrashFile",
          "package": "fdo-trash",
          "signature": "TrashFile",
          "source": "src/Freedesktop-Trash.html#TrashFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "TrashFile",
          "package": "fdo-trash",
          "partial": "Trash File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:TrashFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "dataPath",
          "package": "fdo-trash",
          "signature": "FilePath",
          "source": "src/Freedesktop-Trash.html#TrashFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "dataPath",
          "package": "fdo-trash",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:dataPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "deleteTime",
          "package": "fdo-trash",
          "signature": "UTCTime",
          "source": "src/Freedesktop-Trash.html#TrashFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "deleteTime",
          "package": "fdo-trash",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:deleteTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "encodeTrashPath",
          "package": "fdo-trash",
          "signature": "String -\u003e String",
          "source": "src/Freedesktop-Trash.html#encodeTrashPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "encodeTrashPath",
          "normalized": "String-\u003eString",
          "package": "fdo-trash",
          "partial": "Trash Path",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:encodeTrashPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "expungeTrash",
          "package": "fdo-trash",
          "signature": "TrashFile -\u003e IO ()",
          "source": "src/Freedesktop-Trash.html#expungeTrash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "expungeTrash",
          "normalized": "TrashFile-\u003eIO()",
          "package": "fdo-trash",
          "partial": "Trash",
          "signature": "TrashFile-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:expungeTrash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "formatTrashDate",
          "package": "fdo-trash",
          "signature": "a -\u003e String",
          "source": "src/Freedesktop-Trash.html#formatTrashDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "formatTrashDate",
          "normalized": "a-\u003eString",
          "package": "fdo-trash",
          "partial": "Trash Date",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:formatTrashDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "genTrashFile",
          "package": "fdo-trash",
          "signature": "[Char] -\u003e [Char] -\u003e TimeZone -\u003e [Char] -\u003e IO (Maybe TrashFile)",
          "source": "src/Freedesktop-Trash.html#genTrashFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "genTrashFile",
          "normalized": "[Char]-\u003e[Char]-\u003eTimeZone-\u003e[Char]-\u003eIO(Maybe TrashFile)",
          "package": "fdo-trash",
          "partial": "Trash File",
          "signature": "[Char]-\u003e[Char]-\u003eTimeZone-\u003e[Char]-\u003eIO(Maybe TrashFile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:genTrashFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "getPathSize",
          "package": "fdo-trash",
          "signature": "FilePath -\u003e IO b",
          "source": "src/Freedesktop-Trash.html#getPathSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "getPathSize",
          "normalized": "FilePath-\u003eIO a",
          "package": "fdo-trash",
          "partial": "Path Size",
          "signature": "FilePath-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:getPathSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "getTrashPaths",
          "package": "fdo-trash",
          "signature": "IO (FilePath, FilePath)",
          "source": "src/Freedesktop-Trash.html#getTrashPaths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "getTrashPaths",
          "normalized": "IO(FilePath,FilePath)",
          "package": "fdo-trash",
          "partial": "Trash Paths",
          "signature": "IO(FilePath,FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:getTrashPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "infoPath",
          "package": "fdo-trash",
          "signature": "FilePath",
          "source": "src/Freedesktop-Trash.html#TrashFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "infoPath",
          "package": "fdo-trash",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:infoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "moveToTrash",
          "package": "fdo-trash",
          "signature": "TrashFile -\u003e IO ()",
          "source": "src/Freedesktop-Trash.html#moveToTrash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "moveToTrash",
          "normalized": "TrashFile-\u003eIO()",
          "package": "fdo-trash",
          "partial": "To Trash",
          "signature": "TrashFile-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:moveToTrash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "origPath",
          "package": "fdo-trash",
          "signature": "FilePath",
          "source": "src/Freedesktop-Trash.html#TrashFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "origPath",
          "package": "fdo-trash",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:origPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "totalSize",
          "package": "fdo-trash",
          "signature": "Integer",
          "source": "src/Freedesktop-Trash.html#TrashFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "totalSize",
          "package": "fdo-trash",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:totalSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "trashGetFiles",
          "package": "fdo-trash",
          "signature": "FilePath -\u003e FilePath -\u003e IO [TrashFile]",
          "source": "src/Freedesktop-Trash.html#trashGetFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "trashGetFiles",
          "normalized": "FilePath-\u003eFilePath-\u003eIO[TrashFile]",
          "package": "fdo-trash",
          "partial": "Get Files",
          "signature": "FilePath-\u003eFilePath-\u003eIO[TrashFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:trashGetFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "trashGetOrphans",
          "package": "fdo-trash",
          "signature": "FilePath -\u003e FilePath -\u003e IO ([[Char]], [FilePath])",
          "source": "src/Freedesktop-Trash.html#trashGetOrphans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "trashGetOrphans",
          "normalized": "FilePath-\u003eFilePath-\u003eIO([[Char]],[FilePath])",
          "package": "fdo-trash",
          "partial": "Get Orphans",
          "signature": "FilePath-\u003eFilePath-\u003eIO([[Char]],[FilePath])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:trashGetOrphans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "trashRestore",
          "package": "fdo-trash",
          "signature": "TrashFile -\u003e Maybe FilePath -\u003e IO ()",
          "source": "src/Freedesktop-Trash.html#trashRestore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "trashRestore",
          "normalized": "TrashFile-\u003eMaybe FilePath-\u003eIO()",
          "package": "fdo-trash",
          "partial": "Restore",
          "signature": "TrashFile-\u003eMaybe FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:trashRestore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Freedesktop.Trash",
          "name": "trashSortFiles",
          "package": "fdo-trash",
          "signature": "FilePath -\u003e FilePath -\u003e IO ([TrashFile], ([[Char]], [FilePath]))",
          "source": "src/Freedesktop-Trash.html#trashSortFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Freedesktop Trash",
          "module": "Freedesktop.Trash",
          "name": "trashSortFiles",
          "normalized": "FilePath-\u003eFilePath-\u003eIO([TrashFile],([[Char]],[FilePath]))",
          "package": "fdo-trash",
          "partial": "Sort Files",
          "signature": "FilePath-\u003eFilePath-\u003eIO([TrashFile],([[Char]],[FilePath]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fdo-trash/docs/Freedesktop-Trash.html#v:trashSortFiles"
      }
    }
  ]
]