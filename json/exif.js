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
        "word": "exif"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "Internals",
          "package": "exif",
          "source": "src/Graphics-Exif-Internals.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "Internals",
          "package": "exif",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "ExifContent",
          "package": "exif",
          "source": "src/Graphics-Exif-Internals.html#ExifContent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "ExifContent",
          "package": "exif",
          "partial": "Exif Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#t:ExifContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "ExifData",
          "package": "exif",
          "source": "src/Graphics-Exif-Internals.html#ExifData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "ExifData",
          "package": "exif",
          "partial": "Exif Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#t:ExifData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "ExifEntry",
          "package": "exif",
          "source": "src/Graphics-Exif-Internals.html#ExifEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "ExifEntry",
          "package": "exif",
          "partial": "Exif Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#t:ExifEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "ExifTag",
          "package": "exif",
          "source": "src/Graphics-Exif-Internals.html#ExifTag",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "ExifTag",
          "package": "exif",
          "partial": "Exif Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#t:ExifTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "contentGetEntries",
          "package": "exif",
          "signature": "Ptr ExifContent -\u003e IO [Ptr ExifEntry]",
          "source": "src/Graphics-Exif-Internals.html#contentGetEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "contentGetEntries",
          "normalized": "Ptr ExifContent-\u003eIO[Ptr ExifEntry]",
          "package": "exif",
          "partial": "Get Entries",
          "signature": "Ptr ExifContent-\u003eIO[Ptr ExifEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:contentGetEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "dataFree",
          "package": "exif",
          "signature": "FunPtr (Ptr ExifData -\u003e IO ())",
          "source": "src/Graphics-Exif-Internals.html#dataFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "dataFree",
          "normalized": "FunPtr(Ptr ExifData-\u003eIO())",
          "package": "exif",
          "partial": "Free",
          "signature": "FunPtr(Ptr ExifData-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:dataFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "dataFromData",
          "package": "exif",
          "signature": "Ptr a -\u003e Int -\u003e IO (Ptr ExifData)",
          "source": "src/Graphics-Exif-Internals.html#dataFromData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "dataFromData",
          "normalized": "Ptr a-\u003eInt-\u003eIO(Ptr ExifData)",
          "package": "exif",
          "partial": "From Data",
          "signature": "Ptr a-\u003eInt-\u003eIO(Ptr ExifData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:dataFromData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "dataFromFile",
          "package": "exif",
          "signature": "FilePath -\u003e IO (Ptr ExifData)",
          "source": "src/Graphics-Exif-Internals.html#dataFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "dataFromFile",
          "normalized": "FilePath-\u003eIO(Ptr ExifData)",
          "package": "exif",
          "partial": "From File",
          "signature": "FilePath-\u003eIO(Ptr ExifData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:dataFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "dataGetContents",
          "package": "exif",
          "signature": "Ptr ExifData -\u003e IO [Ptr ExifContent]",
          "source": "src/Graphics-Exif-Internals.html#dataGetContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "dataGetContents",
          "normalized": "Ptr ExifData-\u003eIO[Ptr ExifContent]",
          "package": "exif",
          "partial": "Get Contents",
          "signature": "Ptr ExifData-\u003eIO[Ptr ExifContent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:dataGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "entryGetTag",
          "package": "exif",
          "signature": "Ptr ExifEntry -\u003e IO ExifTag",
          "source": "src/Graphics-Exif-Internals.html#entryGetTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "entryGetTag",
          "normalized": "Ptr ExifEntry-\u003eIO ExifTag",
          "package": "exif",
          "partial": "Get Tag",
          "signature": "Ptr ExifEntry-\u003eIO ExifTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:entryGetTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "entryGetValue",
          "package": "exif",
          "signature": "Ptr ExifEntry -\u003e IO String",
          "source": "src/Graphics-Exif-Internals.html#entryGetValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "entryGetValue",
          "normalized": "Ptr ExifEntry-\u003eIO String",
          "package": "exif",
          "partial": "Get Value",
          "signature": "Ptr ExifEntry-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:entryGetValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "tagDescription",
          "package": "exif",
          "signature": "ExifTag -\u003e IO String",
          "source": "src/Graphics-Exif-Internals.html#tagDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "tagDescription",
          "normalized": "ExifTag-\u003eIO String",
          "package": "exif",
          "partial": "Description",
          "signature": "ExifTag-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:tagDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "tagFromName",
          "package": "exif",
          "signature": "String -\u003e IO ExifTag",
          "source": "src/Graphics-Exif-Internals.html#tagFromName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "tagFromName",
          "normalized": "String-\u003eIO ExifTag",
          "package": "exif",
          "partial": "From Name",
          "signature": "String-\u003eIO ExifTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:tagFromName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "tagName",
          "package": "exif",
          "signature": "ExifTag -\u003e IO String",
          "source": "src/Graphics-Exif-Internals.html#tagName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "tagName",
          "normalized": "ExifTag-\u003eIO String",
          "package": "exif",
          "partial": "Name",
          "signature": "ExifTag-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:tagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif.Internals",
          "name": "tagTitle",
          "package": "exif",
          "signature": "ExifTag -\u003e IO String",
          "source": "src/Graphics-Exif-Internals.html#tagTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif Internals",
          "module": "Graphics.Exif.Internals",
          "name": "tagTitle",
          "normalized": "ExifTag-\u003eIO String",
          "package": "exif",
          "partial": "Title",
          "signature": "ExifTag-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif-Internals.html#v:tagTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif",
          "name": "Exif",
          "package": "exif",
          "source": "src/Graphics-Exif.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Exif",
          "module": "Graphics.Exif",
          "name": "Exif",
          "package": "exif",
          "partial": "Exif",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif",
          "name": "Exif",
          "package": "exif",
          "source": "src/Graphics-Exif.html#Exif",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Exif",
          "module": "Graphics.Exif",
          "name": "Exif",
          "package": "exif",
          "partial": "Exif",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif.html#t:Exif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif",
          "name": "allTags",
          "package": "exif",
          "signature": "Exif -\u003e IO [(String, String)]",
          "source": "src/Graphics-Exif.html#allTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif",
          "module": "Graphics.Exif",
          "name": "allTags",
          "normalized": "Exif-\u003eIO[(String,String)]",
          "package": "exif",
          "partial": "Tags",
          "signature": "Exif-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif.html#v:allTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif",
          "name": "fromData",
          "package": "exif",
          "signature": "Ptr () -\u003e Int -\u003e IO Exif",
          "source": "src/Graphics-Exif.html#fromData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif",
          "module": "Graphics.Exif",
          "name": "fromData",
          "normalized": "Ptr()-\u003eInt-\u003eIO Exif",
          "package": "exif",
          "partial": "Data",
          "signature": "Ptr()-\u003eInt-\u003eIO Exif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif.html#v:fromData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif",
          "name": "fromFile",
          "package": "exif",
          "signature": "FilePath -\u003e IO Exif",
          "source": "src/Graphics-Exif.html#fromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif",
          "module": "Graphics.Exif",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO Exif",
          "package": "exif",
          "partial": "File",
          "signature": "FilePath-\u003eIO Exif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Exif",
          "name": "getTag",
          "package": "exif",
          "signature": "Exif -\u003e String -\u003e IO (Maybe String)",
          "source": "src/Graphics-Exif.html#getTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Exif",
          "module": "Graphics.Exif",
          "name": "getTag",
          "normalized": "Exif-\u003eString-\u003eIO(Maybe String)",
          "package": "exif",
          "partial": "Tag",
          "signature": "Exif-\u003eString-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exif/docs/Graphics-Exif.html#v:getTag"
      }
    }
  ]
]