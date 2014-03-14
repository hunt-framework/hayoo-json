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
        "word": "obj"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Formats.Obj",
          "name": "ObjModel",
          "package": "obj",
          "source": "http://hackage.haskell.org/package/obj/docs/src/Graphics-Formats-Obj-ObjModel.html#ObjModel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Formats Obj",
          "module": "Graphics.Formats.Obj",
          "name": "ObjModel",
          "package": "obj",
          "partial": "Obj Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/obj/docs/Graphics-Formats-Obj.html#t:ObjModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Loads an Obj model from a file given a list of search paths to find\n   materials and textures at.\n",
          "module": "Graphics.Formats.Obj",
          "name": "objFromFile",
          "package": "obj",
          "signature": "FilePath -\u003e [FilePath] -\u003e IO ObjModel",
          "source": "http://hackage.haskell.org/package/obj/docs/src/Graphics-Formats-Obj.html#objFromFile",
          "type": "function"
        },
        "index": {
          "description": "Loads an Obj model from file given list of search paths to find materials and textures at",
          "hierarchy": "Graphics Formats Obj",
          "module": "Graphics.Formats.Obj",
          "name": "objFromFile",
          "normalized": "FilePath-\u003e[FilePath]-\u003eIO ObjModel",
          "package": "obj",
          "partial": "From File",
          "signature": "FilePath-\u003e[FilePath]-\u003eIO ObjModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obj/docs/Graphics-Formats-Obj.html#v:objFromFile"
      }
    }
  ]
]