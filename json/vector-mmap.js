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
        "word": "vector-mmap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.MMap",
          "name": "MMap",
          "package": "vector-mmap",
          "source": "src/Data-Vector-Storable-MMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Storable MMap",
          "module": "Data.Vector.Storable.MMap",
          "name": "MMap",
          "package": "vector-mmap",
          "partial": "MMap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-mmap/docs/Data-Vector-Storable-MMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMode of mapping. Four cases are supported.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.MMap",
          "name": "Mode",
          "package": "vector-mmap",
          "type": "data"
        },
        "index": {
          "description": "Mode of mapping Four cases are supported",
          "hierarchy": "Data Vector Storable MMap",
          "module": "Data.Vector.Storable.MMap",
          "name": "Mode",
          "package": "vector-mmap",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-mmap/docs/Data-Vector-Storable-MMap.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efile is mapped read-only, file must\n exist\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.MMap",
          "name": "ReadOnly",
          "package": "vector-mmap",
          "signature": "ReadOnly",
          "type": "function"
        },
        "index": {
          "description": "file is mapped read-only file must exist",
          "hierarchy": "Data Vector Storable MMap",
          "module": "Data.Vector.Storable.MMap",
          "name": "ReadOnly",
          "package": "vector-mmap",
          "partial": "Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-mmap/docs/Data-Vector-Storable-MMap.html#v:ReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efile is mapped read-write, file must\n exist\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.MMap",
          "name": "ReadWrite",
          "package": "vector-mmap",
          "signature": "ReadWrite",
          "type": "function"
        },
        "index": {
          "description": "file is mapped read-write file must exist",
          "hierarchy": "Data Vector Storable MMap",
          "module": "Data.Vector.Storable.MMap",
          "name": "ReadWrite",
          "package": "vector-mmap",
          "partial": "Read Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-mmap/docs/Data-Vector-Storable-MMap.html#v:ReadWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efile is mapped read-write, if file does\n not exist it will be created with default\n permissions, region parameter specifies\n size, if file size is lower it will be\n extended with zeros\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.MMap",
          "name": "ReadWriteEx",
          "package": "vector-mmap",
          "signature": "ReadWriteEx",
          "type": "function"
        },
        "index": {
          "description": "file is mapped read-write if file does not exist it will be created with default permissions region parameter specifies size if file size is lower it will be extended with zeros",
          "hierarchy": "Data Vector Storable MMap",
          "module": "Data.Vector.Storable.MMap",
          "name": "ReadWriteEx",
          "package": "vector-mmap",
          "partial": "Read Write Ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-mmap/docs/Data-Vector-Storable-MMap.html#v:ReadWriteEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efile is mapped read-write, but changes\n aren't propagated to disk, file must exist\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.MMap",
          "name": "WriteCopy",
          "package": "vector-mmap",
          "signature": "WriteCopy",
          "type": "function"
        },
        "index": {
          "description": "file is mapped read-write but changes aren propagated to disk file must exist",
          "hierarchy": "Data Vector Storable MMap",
          "module": "Data.Vector.Storable.MMap",
          "name": "WriteCopy",
          "package": "vector-mmap",
          "partial": "Write Copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-mmap/docs/Data-Vector-Storable-MMap.html#v:WriteCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a file into memory as a mutable vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.MMap",
          "name": "unsafeMMapMVector",
          "package": "vector-mmap",
          "signature": "FilePath-\u003e Mode-\u003e Maybe (Int64, Int)-\u003e IO (MVector (PrimState IO) a)",
          "type": "function"
        },
        "index": {
          "description": "Map file into memory as mutable vector",
          "hierarchy": "Data Vector Storable MMap",
          "module": "Data.Vector.Storable.MMap",
          "name": "unsafeMMapMVector",
          "normalized": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003eIO(MVector(PrimState IO)a)",
          "package": "vector-mmap",
          "partial": "MMap MVector",
          "signature": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003eIO(MVector(PrimState IO)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-mmap/docs/Data-Vector-Storable-MMap.html#v:unsafeMMapMVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a file into memory (\u003ccode\u003e\u003ca\u003eReadOnly\u003c/a\u003e\u003c/code\u003e mode) as an immutable vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.MMap",
          "name": "unsafeMMapVector",
          "package": "vector-mmap",
          "signature": "FilePath-\u003e Maybe (Int64, Int)-\u003e IO (Vector a)",
          "type": "function"
        },
        "index": {
          "description": "Map file into memory ReadOnly mode as an immutable vector",
          "hierarchy": "Data Vector Storable MMap",
          "module": "Data.Vector.Storable.MMap",
          "name": "unsafeMMapVector",
          "normalized": "FilePath-\u003eMaybe(Int,Int)-\u003eIO(Vector a)",
          "package": "vector-mmap",
          "partial": "MMap Vector",
          "signature": "FilePath-\u003eMaybe(Int,Int)-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-mmap/docs/Data-Vector-Storable-MMap.html#v:unsafeMMapVector"
      }
    }
  ]
]