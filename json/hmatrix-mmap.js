[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-mmap/docs/Data-Packed-Vector-MMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to represent a \u003ccode\u003eVector\u003c/code\u003e on disk in efficient, if\n unportable, ways.\n\u003c/p\u003e\u003cp\u003eThis module uses memory-mapping, a feature of all modern\n operating-systems, to mirror the disk contents in memory. There are\n quite a few advantages to memory-mapping files instead of reading\n the files traditionally:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Speed: memory-mapping is often much faster than traditional\n    reading.\n\u003c/li\u003e\u003cli\u003e Memory efficiency: Memory-mapped files are loaded into RAM\n    on-demand, and easily swapped out. The upside is that the\n    program can work with data-sets larger than the available RAM,\n    as long as they are accessed carefully.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe caveat to using memory-mapping is that it makes the files\n specific to the current architecture because of the endianness of\n the data. For more information, see the description in\n \u003ca\u003eSystem.IO.MMap\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIf you wish to write the contents in a portable fashion, either use\n the ASCII load and save functions in \u003ca\u003eNumeric.Container\u003c/a\u003e, or use\n the binary serialization in \u003ca\u003eData.Binary\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Packed.Vector.MMap",
        "fct-package": "hmatrix-mmap",
        "fct-signature": "module",
        "fct-source": "src/Data-Packed-Vector-MMap.html",
        "fct-type": "module",
        "title": "MMap"
      },
      "index": {
        "description": "Functions to represent Vector on disk in efficient if unportable ways This module uses memory-mapping feature of all modern operating-systems to mirror the disk contents in memory There are quite few advantages to memory-mapping files instead of reading the files traditionally Speed memory-mapping is often much faster than traditional reading Memory efficiency Memory-mapped files are loaded into RAM on-demand and easily swapped out The upside is that the program can work with data-sets larger than the available RAM as long as they are accessed carefully The caveat to using memory-mapping is that it makes the files specific to the current architecture because of the endianness of the data For more information see the description in System.IO.MMap If you wish to write the contents in portable fashion either use the ASCII load and save functions in Numeric.Container or use the binary serialization in Data.Binary",
        "hierarchy": "Data Packed Vector MMap",
        "module": "Data.Packed.Vector.MMap",
        "name": "MMap",
        "normalized": "",
        "package": "hmatrix-mmap",
        "partial": "MMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-mmap/docs/Data-Packed-Vector-MMap.html#v:hPutVector",
      "description": {
        "fct-descr": "\u003cp\u003eWrite out a vector verbatim into an open file handle.\n\u003c/p\u003e",
        "fct-module": "Data.Packed.Vector.MMap",
        "fct-package": "hmatrix-mmap",
        "fct-signature": "Handle -\u003e Vector a -\u003e IO ()",
        "fct-source": "src/Data-Packed-Vector-MMap.html#hPutVector",
        "fct-type": "function",
        "title": "hPutVector"
      },
      "index": {
        "description": "Write out vector verbatim into an open file handle",
        "hierarchy": "Data Packed Vector MMap",
        "module": "Data.Packed.Vector.MMap",
        "name": "hPutVector",
        "normalized": "Handle-\u003eVector a-\u003eIO()",
        "package": "hmatrix-mmap",
        "partial": "Put Vector",
        "signature": "Handle-\u003eVector a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-mmap/docs/Data-Packed-Vector-MMap.html#v:unsafeLazyMMapVectors",
      "description": {
        "fct-descr": "\u003cp\u003eMap a file into memory as a lazy-list of equal-sized \u003ccode\u003eVector\u003c/code\u003e,\n even if they can't all fit in the address space at the same time.\n\u003c/p\u003e\u003cpre\u003e (numVectors,vectors) \u003c- unsafeLazyMMapVectors filename Nothing vectorSize\n\u003c/pre\u003e\u003cp\u003eCommonly, a data file will contain multiple vectors of equal length\n (matrix). This function is convenient for those uses, but it plays\n a more important role: supporting data-sets that cannot fit in the\n address space of the current machine.\n\u003c/p\u003e\u003cp\u003eOn 32-bit machines the address space is only 4GB, and it is\n actually pretty easy to find data-sets that are too large to be\n represented, even in virtual memory.\n\u003c/p\u003e\u003cp\u003eThis function loads the data in chunks, and as long as you drop\n your reference to the vectors as you consume the data, the old\n chunks will be unmapped before mapping the next chunk.\n\u003c/p\u003e\u003cp\u003eThe number of vectors in the list is returned because it's often\n needed, yet calculating it using \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e would demand the whole\n list.\n\u003c/p\u003e",
        "fct-module": "Data.Packed.Vector.MMap",
        "fct-package": "hmatrix-mmap",
        "fct-signature": "FilePath-\u003e Maybe (Int64, Int64)-\u003e Int-\u003e IO (Int64, [Vector a])",
        "fct-type": "function",
        "title": "unsafeLazyMMapVectors"
      },
      "index": {
        "description": "Map file into memory as lazy-list of equal-sized Vector even if they can all fit in the address space at the same time numVectors vectors unsafeLazyMMapVectors filename Nothing vectorSize Commonly data file will contain multiple vectors of equal length matrix This function is convenient for those uses but it plays more important role supporting data-sets that cannot fit in the address space of the current machine On bit machines the address space is only GB and it is actually pretty easy to find data-sets that are too large to be represented even in virtual memory This function loads the data in chunks and as long as you drop your reference to the vectors as you consume the data the old chunks will be unmapped before mapping the next chunk The number of vectors in the list is returned because it often needed yet calculating it using length would demand the whole list",
        "hierarchy": "Data Packed Vector MMap",
        "module": "Data.Packed.Vector.MMap",
        "name": "unsafeLazyMMapVectors",
        "normalized": "FilePath-\u003eMaybe(Int,Int)-\u003eInt-\u003eIO(Int,[Vector a])",
        "package": "hmatrix-mmap",
        "partial": "Lazy MMap Vectors",
        "signature": "FilePath-\u003eMaybe(Int,Int)-\u003eInt-\u003eIO(Int,[Vector a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-mmap/docs/Data-Packed-Vector-MMap.html#v:unsafeMMapVector",
      "description": {
        "fct-descr": "\u003cp\u003eMap a file into memory (read-only) as a \u003ccode\u003eVector\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is considered unsafe because changes to the underlying file may\n (or may not) be reflected in the \u003ccode\u003eVector\u003c/code\u003e, which breaks referential\n transparency.\n\u003c/p\u003e",
        "fct-module": "Data.Packed.Vector.MMap",
        "fct-package": "hmatrix-mmap",
        "fct-signature": "FilePath-\u003e Maybe (Int64, Int)-\u003e IO (Vector a)",
        "fct-type": "function",
        "title": "unsafeMMapVector"
      },
      "index": {
        "description": "Map file into memory read-only as Vector It is considered unsafe because changes to the underlying file may or may not be reflected in the Vector which breaks referential transparency",
        "hierarchy": "Data Packed Vector MMap",
        "module": "Data.Packed.Vector.MMap",
        "name": "unsafeMMapVector",
        "normalized": "FilePath-\u003eMaybe(Int,Int)-\u003eIO(Vector a)",
        "package": "hmatrix-mmap",
        "partial": "MMap Vector",
        "signature": "FilePath-\u003eMaybe(Int,Int)-\u003eIO(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-mmap/docs/Data-Packed-Vector-MMap.html#v:writeVector",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the vector verbatim to a file.\n\u003c/p\u003e",
        "fct-module": "Data.Packed.Vector.MMap",
        "fct-package": "hmatrix-mmap",
        "fct-signature": "FilePath -\u003e Vector a -\u003e IO ()",
        "fct-source": "src/Data-Packed-Vector-MMap.html#writeVector",
        "fct-type": "function",
        "title": "writeVector"
      },
      "index": {
        "description": "Write the vector verbatim to file",
        "hierarchy": "Data Packed Vector MMap",
        "module": "Data.Packed.Vector.MMap",
        "name": "writeVector",
        "normalized": "FilePath-\u003eVector a-\u003eIO()",
        "package": "hmatrix-mmap",
        "partial": "Vector",
        "signature": "FilePath-\u003eVector a-\u003eIO()"
      }
    }
  }
]